#!/usr/bin/env python3
"""
Newsletter Digest Generator - Zion

Creates daily/weekly digests of newsletters.
Saves time by summarizing multiple emails.

Usage:
  python3 newsletter_digest_generator.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("📰 Newsletter Digest Generator")
    
    msgs = gmail_search('label:inbox is:unread newsletter OR digest OR unsubscribe', limit=limit * 2)
    
    digests = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in ['newsletter', 'weekly', 'daily', 'digest']):
            digest = {
                'title': subject[:30],
                'summary': snippet[:60],
                'type': 'newsletter'
            }
            digests.append(digest)
            print(f"   📰 {subject[:28]}")
    
    # Save digests
    dig_file = WORKSPACE / 'zion.app' / 'data' / 'newsletter_digests.json'
    dig_file.parent.mkdir(parents=True, exist_ok=True)
    dig_file.write_text(json.dumps(digests, indent=2))
    
    print(f"✅ Generated {len(digests)} newsletter digests")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()