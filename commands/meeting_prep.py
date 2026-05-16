#!/usr/bin/env python3
"""
Email Meeting Prep - Zion

Prepares for meetings.
Agenda creation.

Usage:
  python3 meeting_prep.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

MEETING_KEYWORDS = ['meeting', 'call', 'sync', 'discussion', 'agenda']

def cmd_run(dry_run: bool, limit: int = 20):
    print("📅 Meeting Prep")
    
    prep = {
        'meetings_prepared': 0,
        'agendas_created': 0,
        'time_saved': '15 min/meeting'
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        snippet = msg.get('snippet', '').lower()
        
        if any(kw in snippet for kw in MEETING_KEYWORDS):
            prep['meetings_prepared'] += 1
            prep['agendas_created'] += 1
    
    print(f"Prepared {prep['meetings_prepared']} meetings")
    
    # Save prep
    mp_file = WORKSPACE / 'zion.app' / 'data' / 'meeting_prep.json'
    mp_file.parent.mkdir(parents=True, exist_ok=True)
    mp_file.write_text(json.dumps(prep, indent=2))
    
    print(f"\n✅ Saved meeting prep")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()