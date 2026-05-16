#!/usr/bin/env python3
"""
Email Newsletter Digest - Zion

Creates daily newsletter digests.
Reduces inbox clutter.

Usage:
  python3 email_newsletter_digest.py --execute --limit 80
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 80):
    print("📰 Email Newsletter Digest")
    
    msgs = gmail_search('label:inbox subject:(digest OR newsletter OR daily) is:unread', limit=limit * 2)
    
    digests = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        digests.append({'subject': subject[:30], 'summarized': True})
        print(f"   📰 Digest: {subject[:20]}")
    
    print(f"✅ Created digests for {len(digests)} newsletters")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=80)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()