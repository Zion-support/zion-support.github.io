#!/usr/bin/env python3
"""
Email Decision Deadline Tracker - Zion

Tracks decision deadlines.
Time-sensitive actions.

Usage:
  python3 email_decision_deadline_tracker.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

DEADLINE_PATTERNS = ['deadline', 'due', 'by', 'before', 'ends', 'expires']

def cmd_run(dry_run: bool, limit: int = 20):
    print("⏰ Decision Deadline Tracker")
    
    tracker = {'deadlines_found': 0, 'action_required': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(kw in snippet for kw in DEADLINE_PATTERNS):
            tracker['deadlines_found'] += 1
            tracker['action_required'] += 1
    
    print(f"Found {tracker['deadlines_found']} deadlines")
    
    # Save tracker
    dd_file = WORKSPACE / 'zion.app' / 'data' / 'decision_deadlines.json'
    dd_file.parent.mkdir(parents=True, exist_ok=True)
    dd_file.write_text(json.dumps(tracker, indent=2))
    
    print(f"\n✅ Saved decision deadlines")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()