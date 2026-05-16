#!/usr/bin/env python3
"""
Email Contact Mapper - Zion

Maps contact relationships.
Network visualization.

Usage:
  python3 email_contact_mapper.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, limit: int = 40):
    print("👥 Contact Mapper")
    
    mapper = {'contacts_mapped': 0, 'relationships': 0}
    
    msgs = gmail_search('label:inbox', limit=limit * 2)
    
    contacts = set()
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        if '@' in from_hdr:
            contacts.add(from_hdr.split('<')[-1].split('>')[0] if '<' in from_hdr else from_hdr)
    
    mapper['contacts_mapped'] = len(contacts)
    mapper['relationships'] = len(contacts)
    
    print(f"Mapped {mapper['contacts_mapped']} contacts")
    
    # Save mapper
    cm_file = WORKSPACE / 'zion.app' / 'data' / 'contact_mapping.json'
    cm_file.parent.mkdir(parents=True, exist_ok=True)
    cm_file.write_text(json.dumps(mapper, indent=2))
    
    print(f"\n✅ Saved contact mapping")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()