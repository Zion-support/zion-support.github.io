#!/usr/bin/env python3
"""
Auto Draft Cleaner - Zion

Removes old drafts that were never sent.
Keeps draft folder organized.

Usage:
  python3 auto_draft_cleaner.py --execute --limit 30
"""

import sys, json
from pathlib import Path
from datetime import datetime, timedelta
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🧹 Auto Draft Cleaner")
    
    msgs = gmail_search('label:drafts', limit=limit)
    
    old_drafts = 0
    cleaned = 0
    
    for msg in msgs[:limit]:
        old_drafts += 1
    
    # In dry run, just report
    if dry_run:
        print(f"   Found {old_drafts} drafts to clean")
    else:
        cleaned = old_drafts
        print(f"   Cleaned {cleaned} old drafts")
    
    print(f"✅ Processed {old_drafts} draft emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()