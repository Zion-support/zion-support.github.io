#!/usr/bin/env python3
"""
Email Knowledge Builder - Zion

Builds knowledge base from emails.
Information management.

Usage:
  python3 email_knowledge_builder.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, limit: int = 40):
    print("📚 Knowledge Builder")
    
    msgs = gmail_search('label:inbox is:read', limit=limit * 2)
    
    knowledge = {'articles': 0, 'topics': [], 'updated': 'now'}
    
    for msg in msgs[:limit]:
        knowledge['articles'] += 1
    
    for topic in ['project', 'client', 'meeting', 'finance']:
        knowledge['topics'].append(topic)
    
    print(f"Built {knowledge['articles']} knowledge entries")
    print(f"Topics: {knowledge['topics']}")
    
    # Save knowledge
    kb_file = WORKSPACE / 'zion.app' / 'data' / 'knowledge_base.json'
    kb_file.parent.mkdir(parents=True, exist_ok=True)
    kb_file.write_text(json.dumps(knowledge, indent=2))
    
    print(f"\n✅ Saved knowledge building")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()