#!/usr/bin/env python3
"""
Industry News Finder - Zion

Monitors emails for industry news and trends.
Creates curated news digest for business intelligence.

Usage:
  python3 industry_news_finder.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

INDUSTRY_TERMS = ['industry', 'market', 'trend', 'innovation', 'report', 'study', 'research', 'analysis']

def cmd_run(dry_run: bool, limit: int = 30):
    print("📰 Industry News Finder")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    news_items = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Count industry terms
        matches = sum(1 for term in INDUSTRY_TERMS if term in text)
        
        if matches >= 2:
            news_items.append({
                'subject': subject[:50],
                'snippet': snippet[:100],
                'relevance': matches
            })
    
    print(f"Found {len(news_items)} industry news items")
    
    # Sort by relevance
    news_items.sort(key=lambda x: x['relevance'], reverse=True)
    
    for item in news_items[:5]:
        print(f"  {item['subject'][:40]} ({item['relevance']} terms)")
    
    # Save newsletter
    news_file = WORKSPACE / 'zion.app' / 'data' / 'industry_news.json'
    news_file.parent.mkdir(parents=True, exist_ok=True)
    news_file.write_text(json.dumps(news_items, indent=2))
    
    print(f"\n✅ Saved industry news digest")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()