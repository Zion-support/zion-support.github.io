#!/usr/bin/env python3
"""
Email Data Extractor - Zion

Extracts data from emails.
Information parsing.

Usage:
  python3 email_data_extractor.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

DATA_TYPES = ['email', 'phone', 'date', 'amount', 'name']

def cmd_run(dry_run: bool, limit: int = 25):
    print("📊 Data Extractor")
    
    extractor = {dtype: 0 for dtype in DATA_TYPES}
    extractor['total_extracted'] = 0
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '')
        
        # Simple extraction patterns
        if '@' in snippet:
            extractor['email'] += 1
        if any(c.isdigit() for c in snippet) and '$' in snippet:
            extractor['amount'] += 1
        if any(kw in snippet.lower() for kw in ['monday', 'tuesday', 'january', 'february']):
            extractor['date'] += 1
        
        extractor['total_extracted'] += 1
    
    print(f"Extracted {extractor['total_extracted']} data points")
    
    # Save extractor
    de_file = WORKSPACE / 'zion.app' / 'data' / 'data_extraction.json'
    de_file.parent.mkdir(parents=True, exist_ok=True)
    de_file.write_text(json.dumps(extractor, indent=2))
    
    print(f"\n✅ Saved data extraction")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()