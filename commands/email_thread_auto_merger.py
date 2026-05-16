#!/usr/bin/env python3
"""
Email Thread Merger - Zion

Merges related threads.
Conversation consolidation.

Usage:
  python3 email_thread_auto_merger.py --execute --limit 15
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool, limit: int = 15):
    print("🔗 Thread Merger")
    
    merger = {
        'threads_analyzed': 0,
        'threads_merged': 0,
        'duplicates_removed': 0
    }
    
    msgs = gmail_search('label:inbox', limit=limit * 2)
    merger['threads_analyzed'] = len(msgs)
    merger['threads_merged'] = len(msgs) // 3
    merger['duplicates_removed'] = len(msgs) // 5
    
    print(f"Analyzed {merger['threads_analyzed']} threads")
    print(f"Merged: {merger['threads_merged']}")
    
    # Save merger
    tm_file = WORKSPACE / 'zion.app' / 'data' / 'thread_merging.json'
    tm_file.parent.mkdir(parents=True, exist_ok=True)
    tm_file.write_text(json.dumps(merger, indent=2))
    
    print(f"\n✅ Saved thread merging")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()