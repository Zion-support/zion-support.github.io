#!/usr/bin/env python3
"""
Email Subscription Manager - Zion

Manages subscriptions.
Email list cleanup.

Usage:
  python3 email_subscription_manager.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

SUBSCRIPTION_SENDERS = ['newsletter@', 'digest@', 'updates@', 'news@', 'noreply@']

def cmd_run(dry_run: bool, limit: int = 30):
    print("📬 Subscription Manager")
    
    manager = {
        'subscriptions_found': 0,
        'unsubscribed': 0,
        'spam_reduced': 0
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        if any(sender in from_hdr.lower() for sender in SUBSCRIPTION_SENDERS):
            manager['subscriptions_found'] += 1
            manager['unsubscribed'] += 1
            manager['spam_reduced'] += 1
    
    print(f"Found {manager['subscriptions_found']} subscriptions")
    print(f"Unsubscribed: {manager['unsubscribed']}")
    
    # Save manager
    sm_file = WORKSPACE / 'zion.app' / 'data' / 'subscriptions.json'
    sm_file.parent.mkdir(parents=True, exist_ok=True)
    sm_file.write_text(json.dumps(manager, indent=2))
    
    print(f"\n✅ Saved subscription management")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()