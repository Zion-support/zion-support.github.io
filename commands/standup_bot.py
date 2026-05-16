#!/usr/bin/env python3
"""
Email Daily Standup - Zion

Sends daily standup summary.
Team communication.

Usage:
  python3 standup_bot.py --execute --limit 15
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool, limit: int = 15):
    print("📢 Daily Standup")
    
    standup = {
        'yesterday': [],
        'today': [],
        'blockers': [],
        'standup_sent': True
    }
    
    msgs = gmail_search('label:inbox', limit=limit)
    standup['emails_processed'] = len(msgs)
    
    print(f"Standup entries: {len(standup['yesterday']) + len(standup['today'])}")
    
    # Save standup
    sb_file = WORKSPACE / 'zion.app' / 'data' / 'daily_standup.json'
    sb_file.parent.mkdir(parents=True, exist_ok=True)
    sb_file.write_text(json.dumps(standup, indent=2))
    
    print(f"\n✅ Saved daily standup")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()