#!/usr/bin/env python3
"""
Contact Intelligence Enricher - Zion

Enriches contact information from email interactions.
Builds comprehensive contact profiles automatically.

Usage:
  python3 contact_intelligence_enricher.py --execute --limit 50
"""

import sys, json, re
from collections import defaultdict
from datetime import datetime
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def extract_contact_info(email_addr: str, headers: list, snippet: str) -> dict:
    """Extract contact information from email."""
    info = {
        'email': email_addr,
        'name': '',
        'company': '',
        'role': '',
        'interaction_count': 1,
        'last_contact': datetime.utcnow().isoformat(),
        'tags': []
    }
    
    # Extract name from email headers
    from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
    
    # Try to extract name
    if '<' in from_hdr and '>' in from_hdr:
        name_part = from_hdr.split('<')[0].strip()
        if name_part:
            info['name'] = name_part
    
    # Extract company from email domain
    if '@' in email_addr:
        domain = email_addr.split('@')[1]
        info['company'] = domain.split('.')[0].title()
        
        # Add domain tags
        if 'gmail' in domain or 'outlook' in domain:
            info['tags'].append('personal')
        else:
            info['tags'].append('business')
    
    # Extract role from email or subject
    role_keywords = {
        'CEO': ['ceo', 'chief executive'],
        'CTO': ['cto', 'chief technology'],
        'Manager': ['manager', 'mgr'],
        'Director': ['director', 'dir'],
        'Lead': ['lead', 'team lead'],
    }
    
    text = f"{from_hdr} {snippet}".lower()
    for role, keywords in role_keywords.items():
        if any(kw in text for kw in keywords):
            info['role'] = role
            break
    
    return info

def cmd_run(dry_run: bool, limit: int = 50):
    print("🧠 Contact Intelligence Enricher")
    
    msgs = gmail_search('is:unread', limit=limit * 2)
    
    contacts = {}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        if '@' in from_hdr:
            email = from_hdr.split('<')[-1].split('>')[0].strip()
            if not email or '@' not in email:
                email = from_hdr.split()[0]
            
            if email not in contacts:
                contacts[email] = extract_contact_info(email, headers, full.get('snippet', ''))
            else:
                contacts[email]['interaction_count'] += 1
    
    print(f"Enriched {len(contacts)} contacts")
    
    # Show sample contacts
    print("\nSample contacts:")
    for email, info in list(contacts.items())[:5]:
        print(f"  {info.get('name', email[:20])} - {info.get('company', 'N/A')}")
        if info.get('role'):
            print(f"    Role: {info['role']}")
    
    # Save contacts
    contacts_file = WORKSPACE / 'zion.app' / 'data' / 'enriched_contacts.json'
    contacts_file.parent.mkdir(parents=True, exist_ok=True)
    contacts_file.write_text(json.dumps(list(contacts.values()), indent=2))
    
    print(f"\n✅ Saved {len(contacts)} enriched contacts")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()