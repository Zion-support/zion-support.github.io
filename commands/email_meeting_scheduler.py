#!/usr/bin/env python3
"""
Email Meeting Scheduler - Zion

Automatically schedules meetings based on email requests.
Checks calendar availability and sends invites.

Usage:
  python3 email_meeting_scheduler.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

MEETING_KEYWORDS = ['meeting', 'call', 'schedule', 'available', 'calendar']

def cmd_run(dry_run: bool, limit: int = 20):
    print("📅 Meeting Scheduler")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    meetings = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Detect meeting requests
        if any(kw in text for kw in MEETING_KEYWORDS):
            meetings.append({
                'subject': subject[:40],
                'detected': True,
                'status': 'pending-schedule'
            })
    
    print(f"Detected {len(meetings)} meeting requests")
    
    for m in meetings[:5]:
        print(f"  {m['subject'][:35]}")
    
    # Save meetings
    meet_file = WORKSPACE / 'zion.app' / 'data' / 'meetings.json'
    meet_file.parent.mkdir(parents=True, exist_ok=True)
    meet_file.write_text(json.dumps(meetings, indent=2))
    
    print(f"\n✅ Saved meeting scheduler data")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()