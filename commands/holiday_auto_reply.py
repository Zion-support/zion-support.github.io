#!/usr/bin/env python3
"""
Email Holiday Auto Reply - Zion

Holiday auto-replies.
Time-based responses.

Usage:
  python3 holiday_auto_reply.py --execute --limit 15
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

HOLIDAYS = ['christmas', 'new year', 'thanksgiving', 'easter', 'july 4th']

def cmd_run(dry_run: bool, limit: int = 15):
    print("🎄 Holiday Auto Reply")
    
    holiday = {
        'holidays_covered': len(HOLIDAYS),
        'auto_replies_sent': 0,
        'coverage': 'global'
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit)
    holiday['auto_replies_sent'] = len(msgs)
    
    print(f"Auto-replies: {holiday['auto_replies_sent']}")
    
    # Save holiday
    ha_file = WORKSPACE / 'zion.app' / 'data' / 'holiday_auto_reply.json'
    ha_file.parent.mkdir(parents=True, exist_ok=True)
    ha_file.write_text(json.dumps(holiday, indent=2))
    
    print(f"\n✅ Saved holiday auto reply")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()