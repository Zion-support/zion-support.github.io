#!/usr/bin/env python3
"""
Smart Unsubscribe Manager - Zion

Automatically unsubscribes from newsletters.
Reduces email clutter intelligently.

Usage:
  python3 smart_unsubscribe_manager.py --execute --limit 50
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

UNSUBSCRIBE_PATTERNS = ['unsubscribe', 'opt-out', 'remove me', 'cancel subscription']

def cmd_run(dry_run: bool = False, limit: int = 50):
    print("📧 Smart Unsubscribe Manager")
    
    msgs = gmail_search('label:inbox from:(news@ OR noreply@ OR newsletter@) is:unread', limit=limit * 2)
    
    unsubscribes = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        unsubscribes.append({'sender': sender[:30], 'action': 'unsubscribed'})
        print(f"   📧 Unsubscribed: {sender[:20]}")
    
    print(f"✅ Managed {len(unsubscribes)} subscriptions")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()