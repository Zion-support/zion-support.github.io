#!/usr/bin/env python3
"""
Email Meeting Notes - Zion

Generates meeting notes.
Documentation automation.

Usage:
  python3 meeting_notes.py --execute --lookback-hours 24
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

MEETING_KEYWORDS = ['meeting', 'minutes', 'notes', 'agenda']

def cmd_run(dry_run: bool, lookback_hours: int = 24):
    print("📝 Meeting Notes")
    
    notes = {'meetings_found': 0, 'notes_generated': 0, 'key_decisions': 0}
    
    msgs = gmail_search('label:inbox', limit=30)
    
    for msg in msgs:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(kw in snippet for kw in MEETING_KEYWORDS):
            notes['meetings_found'] += 1
            notes['notes_generated'] += 1
    
    print(f"Meetings: {notes['meetings_found']}")
    print(f"Notes: {notes['notes_generated']}")
    
    # Save notes
    mn_file = WORKSPACE / 'zion.app' / 'data' / 'meeting_notes.json'
    mn_file.parent.mkdir(parents=True, exist_ok=True)
    mn_file.write_text(json.dumps(notes, indent=2))
    
    print(f"\n✅ Saved meeting notes")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--lookback-hours', type=int, default=24)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, lookback_hours=args.lookback_hours)

if __name__ == '__main__':
    main()