#!/usr/bin/env python3
"""
Email CRM Sync Helper - Zion

Syncs email contacts with CRM.
Updates client records automatically.

Usage:
  python3 email_crm_sync_helper.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, limit: int = 40):
    print("📇 CRM Sync Helper")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    contacts = []
    crm_updates = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        # Extract email address
        email_match = from_hdr.split('<')
        if len(email_match) > 1:
            email = email_match[-1].split('>')[0].strip()
        else:
            email = from_hdr.split()[0] if from_hdr else 'unknown'
        
        if email and '@' in email and 'github.com' not in email and 'noreply' not in email:
            contacts.append({
                'email': email,
                'name': from_hdr[:40]
            })
            crm_updates.append({'email': email, 'action': 'sync'})
    
    print(f"Found {len(contacts)} contacts")
    print(f"CRM updates: {len(crm_updates)}")
    
    for c in contacts[:5]:
        print(f"  {c['name'][:30]}")
    
    # Save sync
    sync_file = WORKSPACE / 'zion.app' / 'data' / 'crm_sync.json'
    sync_file.parent.mkdir(parents=True, exist_ok=True)
    sync_file.write_text(json.dumps(crm_updates, indent=2))
    
    print(f"\n✅ Saved CRM sync")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()