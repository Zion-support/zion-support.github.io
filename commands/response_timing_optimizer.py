#!/usr/bin/env python3
"""
Response Timing Optimizer - Zion

Determines optimal response time based on email content.
Schedules responses for maximum impact.

Usage:
  python3 response_timing_optimizer.py --execute --limit 35
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 35):
    print("⏰ Response Timing Optimizer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    timings = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        now = datetime.now()
        
        # Determine optimal timing
        if 'urgent' in text or 'asap' in text:
            delay = 5  # 5 minutes
            reason = 'immediate'
        elif 'meeting' in text or 'schedule' in text:
            delay = 60  # 1 hour
            reason = 'within_hour'
        else:
            delay = 240  # 4 hours
            reason = 'same_business_day'
        
        optimal = now + timedelta(minutes=delay)
        
        timings.append({
            'subject': subject[:30],
            'delay_minutes': delay,
            'optimal_time': optimal.isoformat()
        })
        
        print(f"   ⏰ {delay}min: {subject[:25]} ({reason})")
    
    print(f"✅ Optimized timing for {len(timings)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=35)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()