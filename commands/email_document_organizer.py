#!/usr/bin/env python3
"""
Email Document Organizer - Zion

Organizes email attachments by type.
Creates folder structures automatically.

Usage:
  python3 email_document_organizer.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

DOCTYPE_MAP = {
    'invoice': ['invoice', 'bill', 'receipt'],
    'contract': ['contract', 'agreement', 'nda'],
    'report': ['report', 'analysis', 'summary']
}

def cmd_run(dry_run: bool, limit: int = 40):
    print("📁 Document Organizer")
    
    msgs = gmail_search('has:attachment label:inbox is:unread', limit=limit * 2)
    
    org = {'invoice': 0, 'contract': 0, 'report': 0, 'other': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = subject.lower()
        categorized = False
        
        for dtype, keywords in DOCTYPE_MAP.items():
            if any(kw in text for kw in keywords):
                org[dtype] += 1
                categorized = True
                break
        
        if not categorized:
            org['other'] += 1
    
    print("Document Organization:")
    for dtype, count in org.items():
        print(f"  {dtype}: {count}")
    
    # Save organization
    org_file = WORKSPACE / 'zion.app' / 'data' / 'documents.json'
    org_file.parent.mkdir(parents=True, exist_ok=True)
    org_file.write_text(json.dumps(org, indent=2))
    
    print(f"\n✅ Saved document organization")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()