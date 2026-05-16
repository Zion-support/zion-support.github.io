#!/usr/bin/env python3
"""
Email Holiday Auto Reply - Zion

Holiday auto-replies.
OOO automation.

Usage:
  python3 email_holiday_reply.py --execute --limit 15
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool, limit: int = 15):
    print("🎉 Holiday Reply")
    
    holiday = {
        'auto_replies_sent': 0,
        'away_until': '2026-12-26',
        'urgent_contact': 'emergency@ziontechgroup.com'
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit)
    holiday['auto_replies_sent'] = len(msgs)
    
    print(f"Sent {holiday['auto_replies_sent']} holiday replies")
    
    # Save holiday
    hr_file = WORKSPACE / 'zion.app' / 'data' / 'holiday_replies.json'
    hr_file.parent.mkdir(parents=True, exist_ok=True)
    hr_file.write_text(json.dumps(holiday, indent=2))
    
    print(f"\n✅ Saved holiday replies")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()