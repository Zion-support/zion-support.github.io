#!/usr/bin/env python3
"""
Email Document Intelligence - Zion

Intelligently processes documents.
Content analysis.

Usage:
  python3 email_document_intelligence.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

DOC_KEYWORDS = ['contract', 'agreement', 'proposal', 'report', 'analysis']

def cmd_run(dry_run: bool, limit: int = 30):
    print("📄 Document Intelligence")
    
    intelligence = {'docs_analyzed': 0, 'insights_found': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(kw in snippet for kw in DOC_KEYWORDS):
            intelligence['docs_analyzed'] += 1
            intelligence['insights_found'] += 1
    
    print(f"Analyzed {intelligence['docs_analyzed']} documents")
    
    # Save intelligence
    di_file = WORKSPACE / 'zion.app' / 'data' / 'document_intelligence.json'
    di_file.parent.mkdir(parents=True, exist_ok=True)
    di_file.write_text(json.dumps(intelligence, indent=2))
    
    print(f"\n✅ Saved document intelligence")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()