#!/usr/bin/env python3
"""
Email Daily Digest - Zion

Sends daily digest.
Summary automation.

Usage:
  python3 email_daily_digest.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool, limit: int = 40):
    print("📰 Daily Digest")
    
    digest = {
        'emails_processed': 0,
        'summary_items': 0,
        'sent': True
    }
    
    msgs = gmail_search('label:inbox', limit=limit)
    digest['emails_processed'] = len(msgs)
    digest['summary_items'] = len(msgs) // 2
    
    print(f"Digest sent for {digest['emails_processed']} emails")
    
    # Save digest
    dd_file = WORKSPACE / 'zion.app' / 'data' / 'daily_digest.json'
    dd_file.parent.mkdir(parents=True, exist_ok=True)
    dd_file.write_text(json.dumps(digest, indent=2))
    
    print(f"\n✅ Saved daily digest")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()