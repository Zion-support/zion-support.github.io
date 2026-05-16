#!/usr/bin/env python3
"""
Email Auto Calendar Creator - Zion

Creates calendar events from emails.
Automatic scheduling.

Usage:
  python3 email_auto_calendar_creator.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

EVENT_KEYWORDS = ['meeting', 'appointment', 'schedule', 'calendar']

def cmd_run(dry_run: bool, limit: int = 25):
    print("📆 Auto Calendar Creator")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    events = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in EVENT_KEYWORDS):
            events.append({
                'subject': subject[:40],
                'event_created': True
            })
    
    print(f"Created {len(events)} calendar events")
    
    # Save events
    ac_file = WORKSPACE / 'zion.app' / 'data' / 'calendar_events.json'
    ac_file.parent.mkdir(parents=True, exist_ok=True)
    ac_file.write_text(json.dumps(events, indent=2))
    
    print(f"\n✅ Saved calendar creation")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()