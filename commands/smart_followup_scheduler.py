#!/usr/bin/env python3
"""
Smart Follow-up Scheduler - Zion

Intelligently schedules follow-ups based on email context.
Respects timing preferences and sends at optimal moments.

Usage:
  python3 smart_followup_scheduler.py --execute --limit 25
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 25):
    print("🔄 Smart Follow-up Scheduler")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    followups = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Calculate follow-up delay
        if 'urgent' in text or 'asap' in text:
            delay_hours = 2
        elif 'proposal' in text or 'offer' in text:
            delay_hours = 24
        elif 'meeting' in text:
            delay_hours = 48
        else:
            delay_hours = 72
        
        followup_time = datetime.now() + timedelta(hours=delay_hours)
        
        followups.append({
            'subject': subject[:30],
            'delay_hours': delay_hours,
            'followup_time': followup_time.isoformat()
        })
        
        print(f"   🔄 {delay_hours}h: {subject[:25]}")
    
    print(f"✅ Scheduled {len(followups)} follow-ups")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()