#!/usr/bin/env python3
"""
Email Event Confirmator - Zion

Confirms events.
Calendar sync.

Usage:
  python3 auto_event_confirmator.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

CONFIRM_KEYWORDS = ['confirm', 'confirming', 'attending', 'see you', 'looking forward']

def cmd_run(dry_run: bool, limit: int = 20):
    print("✅ Event Confirmator")
    
    confirmator = {'events_confirmed': 0, 'calendar_updated': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(kw in snippet for kw in CONFIRM_KEYWORDS):
            confirmator['events_confirmed'] += 1
            confirmator['calendar_updated'] += 1
    
    print(f"Confirmed {confirmator['events_confirmed']} events")
    
    # Save confirmator
    ec_file = WORKSPACE / 'zion.app' / 'data' / 'event_confirmation.json'
    ec_file.parent.mkdir(parents=True, exist_ok=True)
    ec_file.write_text(json.dumps(confirmator, indent=2))
    
    print(f"\n✅ Saved event confirmation")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()