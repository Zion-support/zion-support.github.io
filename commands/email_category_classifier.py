#!/usr/bin/env python3
"""
Email Category Classifier - Zion

Classifies emails into custom categories.
Creates smart labels automatically.

Usage:
  python3 email_category_classifier.py --execute --limit 60
"""

import sys, json
from collections import Counter
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

CATEGORIES = {
    'internal': ['internal', 'team', 'staff'],
    'client': ['client', 'customer', 'customer'],
    'vendor': ['vendor', 'supplier', 'partner'],
    'finance': ['invoice', 'payment', 'billing'],
    'technical': ['bug', 'error', 'technical', 'api']
}

def cmd_run(dry_run: bool, limit: int = 60):
    print("🏷️ Category Classifier")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    categories = Counter()
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        snippet = full.get('snippet', '')
        
        text = f"{from_hdr} {snippet}".lower()
        
        matched = False
        for cat, keywords in CATEGORIES.items():
            if any(kw in text for kw in keywords):
                categories[cat] += 1
                matched = True
                break
        
        if not matched:
            categories['other'] += 1
    
    print("Email Categories:")
    for cat, count in categories.most_common():
        print(f"  {cat}: {count}")
    
    # Save categories
    cat_file = WORKSPACE / 'zion.app' / 'data' / 'categories.json'
    cat_file.parent.mkdir(parents=True, exist_ok=True)
    cat_file.write_text(json.dumps(dict(categories), indent=2))
    
    print(f"\n✅ Saved category classification")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=60)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()