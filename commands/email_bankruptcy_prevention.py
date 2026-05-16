#!/usr/bin/env python3
"""
Email Email Bankruptcy - Zion

Prevents email bankruptcy.
Inbox overload management.

Usage:
  python3 email_bankruptcy_prevention.py --execute --limit 100
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool, limit: int = 100):
    print("🛡️ Bankruptcy Prevention")
    
    prevention = {
        'inbox_unread': len(gmail_search('label:inbox is:unread', limit=limit)),
        'risk_level': 'low',
        'actions_taken': 0
    }
    
    if prevention['inbox_unread'] > 500:
        prevention['risk_level'] = 'high'
        prevention['actions_taken'] = 50
    elif prevention['inbox_unread'] > 100:
        prevention['risk_level'] = 'medium'
        prevention['actions_taken'] = 20
    
    print(f"Unread: {prevention['inbox_unread']}")
    print(f"Risk: {prevention['risk_level']}")
    print(f"Actions: {prevention['actions_taken']}")
    
    # Save prevention
    bp_file = WORKSPACE / 'zion.app' / 'data' / 'bankruptcy_prevention.json'
    bp_file.parent.mkdir(parents=True, exist_ok=True)
    bp_file.write_text(json.dumps(prevention, indent=2))
    
    print(f"\n✅ Saved bankruptcy prevention")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=100)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()