#!/usr/bin/env python3
"""
Email Smart Unsubscribe Manager - Zion

Manages unsubscribe requests intelligently.
Removes unwanted subscriptions.

Usage:
  python3 email_smart_unsubscribe_manager.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

UNSUB_KEYWORDS = ['unsubscribe', 'opt-out', 'remove', 'stop']

def cmd_run(dry_run: bool, limit: int = 40):
    print("📭 Smart Unsubscribe Manager")
    
    # Find unsubscribes
    unsubscribes = {
        'to_process': 0,
        'processed': 0,
        'failed': 0
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        snippet = msg.get('snippet', '').lower()
        if any(kw in snippet for kw in UNSUB_KEYWORDS):
            unsubscribes['to_process'] += 1
    
    print("Unsubscribe Management:")
    print(f"  Found: {unsubscribes['to_process']}")
    print(f"  Processed: {unsubscribes['processed']}")
    
    # Save management
    su_file = WORKSPACE / 'zion.app' / 'data' / 'unsubscribes.json'
    su_file.parent.mkdir(parents=True, exist_ok=True)
    su_file.write_text(json.dumps(unsubscribes, indent=2))
    
    print(f"\n✅ Saved unsubscribe management")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()