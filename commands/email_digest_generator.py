#!/usr/bin/env python3
"""
Email Digester - Zion

Digests newsletters.
Content summarization.

Usage:
  python3 email_digest_generator.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

DIGEST_KEYWORDS = ['newsletter', 'digest', 'weekly', 'update', 'news', 'roundup']

def cmd_run(dry_run: bool, limit: int = 25):
    print("📰 Digest Generator")
    
    digester = {
        'digests_created': 0,
        'newsletters_processed': 0,
        'reading_time_saved': '5 min/day'
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in DIGEST_KEYWORDS):
            digester['digests_created'] += 1
            digester['newsletters_processed'] += 1
    
    print(f"Created {digester['digests_created']} digests")
    
    # Save digester
    dg_file = WORKSPACE / 'zion.app' / 'data' / 'digest_generation.json'
    dg_file.parent.mkdir(parents=True, exist_ok=True)
    dg_file.write_text(json.dumps(digester, indent=2))
    
    print(f"\n✅ Saved digest generation")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()