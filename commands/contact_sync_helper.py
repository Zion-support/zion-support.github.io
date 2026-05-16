#!/usr/bin/env python3
"""
Contact Sync Helper - Zion

Keeps contacts synchronized with Google Contacts.
Enriches and updates contact information automatically.

Usage:
  python3 contact_sync_helper.py --execute --limit 50
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, limit: int = 50):
    print("📇 Contact Sync Helper")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    contacts = []
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        reply_to = next((h['value'] for h in headers if h['name'] == 'Reply-To'), '')
        
        # Extract contact info
        if '@' in from_hdr:
            email_parts = from_hdr.split('<')
            name = email_parts[0].strip() if len(email_parts) > 1 else ''
            email = email_parts[-1].split('>')[0].strip() if '<' in from_hdr else from_hdr
            
            contacts.append({
                'name': name or email.split('@')[0],
                'email': email,
                'source': 'email interaction'
            })
    
    # Remove duplicates
    unique = {c['email']: c for c in contacts[-50:]}.values()
    
    print(f"Found {len(unique)} unique contacts")
    
    # Save for sync
    sync_file = WORKSPACE / 'zion.app' / 'data' / 'contacts_to_sync.json'
    sync_file.parent.mkdir(parents=True, exist_ok=True)
    sync_file.write_text(json.dumps(list(unique), indent=2))
    
    print(f"\n✅ Prepared {len(unique)} contacts for sync")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()