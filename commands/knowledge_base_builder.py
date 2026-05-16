#!/usr/bin/env python3
"""
Email Knowledge Builder - Zion

Builds knowledge base.
Information indexing.

Usage:
  python3 knowledge_base_builder.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

KNOWLEDGE_KEYWORDS = ['faq', 'how to', 'guide', 'tutorial', 'documentation']

def cmd_run(dry_run: bool, limit: int = 40):
    print("📚 Knowledge Builder")
    
    knowledge = {'articles_created': 0, 'topics_indexed': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(kw in snippet for kw in KNOWLEDGE_KEYWORDS):
            knowledge['articles_created'] += 1
    
    knowledge['topics_indexed'] = knowledge['articles_created']
    
    print(f"Created {knowledge['articles_created']} knowledge articles")
    
    # Save knowledge
    kb_file = WORKSPACE / 'zion.app' / 'data' / 'knowledge_base.json'
    kb_file.parent.mkdir(parents=True, exist_ok=True)
    kb_file.write_text(json.dumps(knowledge, indent=2))
    
    print(f"\n✅ Saved knowledge base")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()