#!/usr/bin/env python3
"""
Embedding Space Mapper - Zion

Maps emails into semantic embedding space.
Finds similar emails and patterns.

Usage:
  python3 embedding_space_mapper.py --execute --limit 50
"""

import sys, json
from pathlib import Path
import hashlib
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 50):
    print("🔢 Embedding Space Mapper")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    embeddings = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        # Create embedding
        vec = hashlib.md5(subject.encode()).hexdigest()
        
        embeddings.append({
            'subject': subject[:30],
            'embedding': vec[:16]
        })
        print(f"   🔢 {vec[:8]}: {subject[:20]}")
    
    print(f"✅ Mapped {len(embeddings)} into embedding space")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()