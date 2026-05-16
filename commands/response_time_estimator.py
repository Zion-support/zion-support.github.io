#!/usr/bin/env python3
"""
Response Time Estimator - Zion

Estimates optimal response time for each email.
Minimizes response latency.

Usage:
  python3 response_time_estimator.py --execute --limit 35
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 35):
    print("⏱️ Response Time Estimator")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    estimates = []
    current_hour = datetime.now().hour
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Estimate response time
        if 'urgent' in text or 'asap' in text:
            delay = 2
        elif 'meeting' in text:
            delay = 10
        else:
            delay = 30
        
        optimal = datetime.now() + timedelta(minutes=delay)
        
        estimates.append({
            'subject': subject[:30],
            'optimal_time': optimal.strftime('%H:%M'),
            'delay_min': delay
        })
        print(f"   ⏱️ {delay}min: {subject[:22]}")
    
    print(f"✅ Estimated times for {len(estimates)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=35)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()