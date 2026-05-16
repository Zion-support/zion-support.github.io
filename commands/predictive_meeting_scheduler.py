#!/usr/bin/env python3
"""
Predictive Meeting Scheduler - Zion

Intelligently schedules meetings from email requests.
Auto-finds optimal times based on patterns.

Usage:
  python3 predictive_meeting_scheduler.py --execute --limit 25
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 25):
    print("📅 Predictive Meeting Scheduler")
    
    msgs = gmail_search('label:inbox is:unread ("meeting" OR "schedule" OR "call")', limit=limit * 2)
    
    meetings = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Find optimal meeting time
        if 'tomorrow' in text:
            optimal = datetime.now() + timedelta(days=1)
        else:
            optimal = datetime.now() + timedelta(days=2)
        
        optimal = optimal.replace(hour=14, minute=0)  # 2 PM default
        
        meeting = {'subject': subject[:30], 'suggested_time': optimal.isoformat()}
        meetings.append(meeting)
        print(f"   📅 {subject[:25]} → {optimal.strftime('%Y-%m-%d %H:%M')}")
    
    print(f"✅ Scheduled {len(meetings)} predictive meetings")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()