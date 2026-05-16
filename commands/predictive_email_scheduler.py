#!/usr/bin/env python3
"""
Predictive Email Scheduler - Zion

Schedules emails for optimal send times based on recipient patterns.
Learns when people typically respond and schedules accordingly.

Usage:
  python3 predictive_email_scheduler.py --execute --limit 25
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def predict_optimal_time(sender: str) -> dict:
    """Predict optimal send time for recipient"""
    # Default business hours
    optimal_hours = [9, 10, 14, 15, 16]  # 9-10 AM, 2-4 PM
    
    # Learn from response patterns stored in data
    response_data = {}
    resp_file = WORKSPACE / 'zion.app' / 'data' / 'response_timing.json'
    
    if resp_file.exists():
        response_data = json.loads(resp_file.read_text())
    
    # Get recipient's preferred hours if known
    recipient_data = response_data.get(sender.lower(), {})
    if recipient_data.get('preferred_hours'):
        optimal_hours = recipient_data['preferred_hours']
    
    now = datetime.now()
    next_optimal = now.replace(hour=optimal_hours[0], minute=0, second=0)
    
    if next_optimal < now:
        next_optimal += timedelta(days=1)
    
    return {
        'optimal_time': next_optimal.isoformat(),
        'confidence': recipient_data.get('confidence', 0.5),
        'time_window': f"{optimal_hours[0]}:00-{optimal_hours[-1]+1}:00"
    }

def cmd_run(dry_run: bool = False, limit: int = 25):
    print("⏰ Predictive Email Scheduler")
    
    msgs = gmail_search('label:inbox is:starred', limit=limit * 2)
    
    scheduled = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        timing = predict_optimal_time(sender)
        scheduled.append(timing)
        
        print(f"   ⏰ Optimal: {timing['optimal_time'][:16]} - {subject[:25]}")
    
    print(f"✅ Schedule predictions: {len(scheduled)}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()