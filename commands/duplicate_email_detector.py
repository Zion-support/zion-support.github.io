#!/usr/bin/env python3
"""
Duplicate Email Detector - Zion

Detects and flags duplicate or similar emails.
Reduces redundant responses.

Usage:
  python3 duplicate_email_detector.py --execute --limit 50
"""

import sys, json
import hashlib
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 50):
    print("🔍 Duplicate Email Detector")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    seen_hashes = set()
    duplicates = []
    unique = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        # Create hash
        content = f"{subject} {snippet}"
        content_hash = hashlib.md5(content.encode()).hexdigest()[:10]
        
        if content_hash in seen_hashes:
            duplicates.append(subject[:30])
        else:
            seen_hashes.add(content_hash)
            unique.append(subject[:30])
    
    print(f"   🔍 Unique: {len(unique)}")
    print(f"   🔍 Duplicates: {len(duplicates)}")
    print(f"✅ Processed {len(unique) + len(duplicates)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()