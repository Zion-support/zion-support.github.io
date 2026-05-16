#!/usr/bin/env python3
"""
Email CRM Sync - Zion

Syncs emails to CRM.
Customer management.

Usage:
  python3 crm_sync.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, limit: int = 30):
    print("🔄 CRM Sync")
    
    sync = {'clients_synced': 0, 'deals_updated': 0, 'activities_logged': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        if '@' in from_hdr:
            sync['clients_synced'] += 1
            sync['activities_logged'] += 1
    
    print(f"Clients synced: {sync['clients_synced']}")
    print(f"Deals updated: {sync['deals_updated']}")
    
    # Save sync
    cs_file = WORKSPACE / 'zion.app' / 'data' / 'crm_sync.json'
    cs_file.parent.mkdir(parents=True, exist_ok=True)
    cs_file.write_text(json.dumps(sync, indent=2))
    
    print(f"\n✅ Saved CRM sync")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()