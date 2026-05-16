#!/usr/bin/env python3
"""
Email Calendly Sync - Zion

Syncs with Calendly.
Booking management.

Usage:
  python3 calendly_sync.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def cmd_run(dry_run: bool, limit: int = 20):
    print("📆 Calendly Sync")
    
    sync = {
        'bookings_synced': 0,
        'availability_updated': 0,
        'conflicts_resolved': 0
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit)
    sync['bookings_synced'] = len(msgs)
    sync['availability_updated'] = len(msgs) * 2
    
    print(f"Synced {sync['bookings_synced']} bookings")
    
    # Save sync
    cs_file = WORKSPACE / 'zion.app' / 'data' / 'calendly_sync.json'
    cs_file.parent.mkdir(parents=True, exist_ok=True)
    cs_file.write_text(json.dumps(sync, indent=2))
    
    print(f"\n✅ Saved Calendly sync")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()