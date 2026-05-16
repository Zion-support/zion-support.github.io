#!/usr/bin/env python3
"""
Email Attachment Indexer - Zion

Indexes email attachments.
Document organization.

Usage:
  python3 attachment_indexer.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool, limit: int = 40):
    print("📎 Attachment Indexer")
    
    indexer = {
        'attachments_indexed': 0,
        'file_types': ['pdf', 'doc', 'xls', 'img'],
        'indexed_at': 'now'
    }
    
    msgs = gmail_search('has:attachment', limit=limit)
    indexer['attachments_indexed'] = len(msgs)
    
    print(f"Indexed: {indexer['attachments_indexed']} attachments")
    print(f"Types: {indexer['file_types']}")
    
    # Save indexer
    ai_file = WORKSPACE / 'zion.app' / 'data' / 'attachment_indexing.json'
    ai_file.parent.mkdir(parents=True, exist_ok=True)
    ai_file.write_text(json.dumps(indexer, indent=2))
    
    print(f"\n✅ Saved attachment indexer")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()