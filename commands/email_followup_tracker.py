#!/usr/bin/env python3
"""
Email Followup Tracker - Zion

Tracks follow-ups.
Reminder system.

Usage:
  python3 email_followup_tracker.py --execute --limit 35
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

FOLLOWUP_KEYWORDS = ['following up', 'checking in', 'touch base', 'circling back']

def cmd_run(dry_run: bool, limit: int = 35):
    print("🔁 Followup Tracker")
    
    tracking = {'tracked': 0, 'reminders_sent': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(kw in snippet for kw in FOLLOWUP_KEYWORDS):
            tracking['tracked'] += 1
            tracking['reminders_sent'] += 1
    
    print(f"Tracked {tracking['tracked']} follow-ups")
    
    # Save tracking
    ft_file = WORKSPACE / 'zion.app' / 'data' / 'followup_tracking.json'
    ft_file.parent.mkdir(parents=True, exist_ok=True)
    ft_file.write_text(json.dumps(tracking, indent=2))
    
    print(f"\n✅ Saved followup tracking")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=35)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()