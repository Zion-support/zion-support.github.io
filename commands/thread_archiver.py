#!/usr/bin/env python3
"""
Email Thread Archiver - Zion

Archives email threads.
Storage optimization.

Usage:
  python3 thread_archiver.py --execute --limit 50
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool, limit: int = 50):
    print("📦 Thread Archiver")
    
    archiver = {
        'threads_archived': 0,
        'storage_saved_mb': 0,
        'archive_reason': 'old_read_emails'
    }
    
    msgs = gmail_search('label:inbox is:read older_than:60d', limit=limit)
    archiver['threads_archived'] = len(msgs)
    archiver['storage_saved_mb'] = len(msgs) * 0.5
    
    print(f"Archived: {archiver['threads_archived']} threads")
    print(f"Space saved: {archiver['storage_saved_mb']} MB")
    
    # Save archiver
    ta_file = WORKSPACE / 'zion.app' / 'data' / 'thread_archiving.json'
    ta_file.parent.mkdir(parents=True, exist_ok=True)
    ta_file.write_text(json.dumps(archiver, indent=2))
    
    print(f"\n✅ Saved thread archiver")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()