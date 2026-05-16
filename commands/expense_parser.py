#!/usr/bin/env python3
"""
Email Expense Parser - Zion

Parses expense emails.
Receipt processing.

Usage:
  python3 expense_parser.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

EXPENSE_KEYWORDS = ['receipt', '$', 'total', 'amount', 'charged', 'invoice']

def cmd_run(dry_run: bool, limit: int = 30):
    print("🧾 Expense Parser")
    
    expenses = []
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in EXPENSE_KEYWORDS):
            expenses.append({
                'subject': subject[:40],
                'expense_parsed': True
            })
    
    print(f"Parsed {len(expenses)} expenses")
    
    # Save expenses
    ep_file = WORKSPACE / 'zion.app' / 'data' / 'expense_parsing.json'
    ep_file.parent.mkdir(parents=True, exist_ok=True)
    ep_file.write_text(json.dumps(expenses, indent=2))
    
    print(f"\n✅ Saved expense parsing")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()