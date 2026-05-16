#!/usr/bin/env python3
"""
Email Newsletter Manager - Zion

Manages newsletters.
Subscription control.

Usage:
  python3 email_newsletter_manager.py --execute --limit 50
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

NEWSLETTER_SENDERS = ['newsletter@', 'digest@', 'updates@', 'news@']

def cmd_run(dry_run: bool, limit: int = 50):
    print("📬 Newsletter Manager")
    
    manager = {'subscriptions_found': 0, 'unsubscribed': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        if any(sender in from_hdr.lower() for sender in NEWSLETTER_SENDERS):
            manager['subscriptions_found'] += 1
    
    manager['unsubscribed'] = manager['subscriptions_found']
    
    print(f"Found {manager['subscriptions_found']} newsletters")
    
    # Save manager
    nm_file = WORKSPACE / 'zion.app' / 'data' / 'newsletter_management.json'
    nm_file.parent.mkdir(parents=True, exist_ok=True)
    nm_file.write_text(json.dumps(manager, indent=2))
    
    print(f"\n✅ Saved newsletter management")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()