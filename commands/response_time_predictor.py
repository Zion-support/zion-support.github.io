#!/usr/bin/env python3
"""
Response Time Predictor - Zion

Predicts optimal response times based on sender patterns.
Ensures responses arrive when they'll be most effective.

Usage:
  python3 response_time_predictor.py --execute --limit 35
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 35):
    print("⏰ Response Time Predictor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    predictions = []
    current_hour = datetime.now().hour
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        domain = sender.split('@')[-1] if '@' in sender else 'unknown'
        
        # Predict optimal send time
        if 'client' in domain or 'customer' in domain:
            # Business hours
            optimal_hour = 10 if current_hour < 12 else 14
            delay = max(0, (optimal_hour - current_hour) * 60)
        else:
            # Anytime
            delay = 180  # 3 hours
        
        optimal = datetime.now() + timedelta(minutes=delay)
        
        predictions.append({
            'sender': sender[:25],
            'delay_minutes': delay,
            'optimal_time': optimal.isoformat()
        })
        
        print(f"   ⏰ {delay}min: {sender[:22]}")
    
    print(f"✅ Predicted timing for {len(predictions)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=35)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()