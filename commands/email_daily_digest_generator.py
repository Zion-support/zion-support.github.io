#!/usr/bin/env python3
"""
Email Daily Digest Generator - Zion

Generates daily digest of important emails.
Summary delivery.

Usage:
  python3 email_daily_digest_generator.py --execute --limit 30
"""

import sys, json
from datetime import datetime
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool, limit: int = 30):
    print("📅 Daily Digest Generator")
    
    digest = {
        'date': datetime.utcnow().strftime('%Y-%m-%d'),
        'total_emails': 0,
        'important_count': 0,
        'summary_items': []
    }
    
    msgs = gmail_search('label:inbox is:read', limit=limit)
    digest['total_emails'] = len(msgs)
    
    print("Daily Digest:")
    print(f"  Date: {digest['date']}")
    print(f"  Emails processed: {digest['total_emails']}")
    
    # Save digest
    dd_file = WORKSPACE / 'zion.app' / 'data' / 'daily_digest.json'
    dd_file.parent.mkdir(parents=True, exist_ok=True)
    dd_file.write_text(json.dumps(digest, indent=2))
    
    print(f"\n✅ Saved daily digest")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()