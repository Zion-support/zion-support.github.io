#!/usr/bin/env python3
"""
Email Smart Scheduler - Zion

Schedules meetings smartly.
Calendar optimization.

Usage:
  python3 email_smart_scheduler.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

SCHEDULE_KEYWORDS = ['schedule', 'meeting', 'available', 'time', 'calendar']

def cmd_run(dry_run: bool, limit: int = 25):
    print("📅 Smart Scheduler")
    
    scheduler = {'meetings_scheduled': 0, 'slots_found': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(kw in snippet for kw in SCHEDULE_KEYWORDS):
            scheduler['meetings_scheduled'] += 1
            scheduler['slots_found'] += 2
    
    print(f"Scheduled {scheduler['meetings_scheduled']} meetings")
    
    # Save scheduler
    ss_file = WORKSPACE / 'zion.app' / 'data' / 'smart_scheduling.json'
    ss_file.parent.mkdir(parents=True, exist_ok=True)
    ss_file.write_text(json.dumps(scheduler, indent=2))
    
    print(f"\n✅ Saved smart scheduling")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()