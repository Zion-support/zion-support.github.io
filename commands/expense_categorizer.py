#!/usr/bin/env python3
"""
Email Expense Categorizer - Zion

Categorizes business expenses.
Financial organization.

Usage:
  python3 expense_categorizer.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

EXPENSE_CATEGORIES = {
    'travel': ['flight', 'hotel', 'uber', 'taxi', 'airline'],
    'food': ['restaurant', 'lunch', 'dinner', 'coffee', 'cafe'],
    'software': ['subscription', 'license', 'software', 'saas'],
    'office': ['supplies', 'stationery', 'desk', 'chair']
}

def cmd_run(dry_run: bool, limit: int = 20):
    print("💳 Expense Categorizer")
    
    categories = {'travel': 0, 'food': 0, 'software': 0, 'office': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        for category, keywords in EXPENSE_CATEGORIES.items():
            if any(kw in snippet for kw in keywords):
                categories[category] += 1
    
    print("Expense Categories:")
    for cat, count in categories.items():
        print(f"  {cat}: {count}")
    
    # Save categories
    ec_file = WORKSPACE / 'zion.app' / 'data' / 'expense_categories.json'
    ec_file.parent.mkdir(parents=True, exist_ok=True)
    ec_file.write_text(json.dumps(categories, indent=2))
    
    print(f"\n✅ Saved expense categorization")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()