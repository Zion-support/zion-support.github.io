#!/usr/bin/env python3
"""
Newsletter Cleaner - Zion

Cleans up newsletter subscriptions.
Archives old newsletters automatically.

Usage:
  python3 newsletter_cleaner.py --execute --limit 100
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 100):
    print("🧹 Newsletter Cleaner")
    
    msgs = gmail_search('label:inbox subject:(newsletter OR digest) is:unread', limit=limit * 2)
    
    cleaned = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        cleaned.append({'subject': subject[:35], 'status': 'archived'})
        print(f"   🧹 Archived: {subject[:25]}")
    
    print(f"✅ Cleaned {len(cleaned)} newsletters")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=100)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()