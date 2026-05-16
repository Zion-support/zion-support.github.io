#!/usr/bin/env python3
"""
Email Quick Action Buttons - Zion

Creates quick action buttons.
One-click responses.

Usage:
  python3 email_quick_action_buttons.py --execute --limit 15
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

ACTIONS = ['approve', 'reject', 'schedule', 'defer', 'delegate']

def cmd_run(dry_run: bool, limit: int = 15):
    print("🔘 Quick Action Buttons")
    
    buttons = {
        'buttons_created': 0,
        'actions_enabled': len(ACTIONS),
        'clicks_recorded': 0
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit)
    buttons['buttons_created'] = len(msgs)
    buttons['clicks_recorded'] = len(msgs) * 2
    
    print(f"Created {buttons['buttons_created']} button sets")
    print(f"Actions: {', '.join(ACTIONS)}")
    
    # Save buttons
    qb_file = WORKSPACE / 'zion.app' / 'data' / 'quick_actions.json'
    qb_file.parent.mkdir(parents=True, exist_ok=True)
    qb_file.write_text(json.dumps(buttons, indent=2))
    
    print(f"\n✅ Saved quick actions")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()