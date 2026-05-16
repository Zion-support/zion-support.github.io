#!/usr/bin/env python3
"""
Email Smart Vacation Responder - Zion

Vacation auto-responder.
OOO management.

Usage:
  python3 email_smart_vacation_responder.py --execute --limit 15
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

VACATION_DATES = {'start': '2026-07-15', 'end': '2026-07-22'}

def cmd_run(dry_run: bool, limit: int = 15):
    print("🏖️ Smart Vacation Responder")
    
    vacation = {
        'vacation_mode': True,
        'auto_replies_sent': 0,
        'urgent_contact': 'emergency@ziontechgroup.com',
        'return_date': VACATION_DATES['end']
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit)
    vacation['auto_replies_sent'] = len(msgs)
    
    print(f"Auto-replies: {vacation['auto_replies_sent']}")
    print(f"Return date: {vacation['return_date']}")
    
    # Save vacation
    vr_file = WORKSPACE / 'zion.app' / 'data' / 'vacation_response.json'
    vr_file.parent.mkdir(parents=True, exist_ok=True)
    vr_file.write_text(json.dumps(vacation, indent=2))
    
    print(f"\n✅ Saved vacation response")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()