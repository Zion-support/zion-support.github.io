#!/usr/bin/env python3
"""
Email Unresponded Tracker - Zion

Tracks unresponded emails.
Follow-up system.

Usage:
  python3 unresponded_tracker.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, limit: int = 30):
    print("📭 Unresponded Tracker")
    
    tracker = {'unresponded': 0, 'need_followup': 0}
    
    msgs = gmail_search('label:inbox is:unread older_than:7d', limit=limit * 2)
    
    for msg in msgs[:limit]:
        tracker['unresponded'] += 1
        tracker['need_followup'] += 1
    
    print(f"Unresponded: {tracker['unresponded']}")
    
    # Save tracker
    ut_file = WORKSPACE / 'zion.app' / 'data' / 'unresponded_tracking.json'
    ut_file.parent.mkdir(parents=True, exist_ok=True)
    ut_file.write_text(json.dumps(tracker, indent=2))
    
    print(f"\n✅ Saved unresponded tracker")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()