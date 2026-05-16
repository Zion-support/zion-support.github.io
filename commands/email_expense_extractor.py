#!/usr/bin/env python3
"""
Email Expense Extractor - Zion

Extracts expenses from emails.
Receipt processing.

Usage:
  python3 email_expense_extractor.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

EXPENSE_KEYWORDS = ['receipt', 'invoice', 'payment', 'charge', '$', 'total']

def cmd_run(dry_run: bool, limit: int = 25):
    print("🧾 Expense Extractor")
    
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
                'expense_extracted': True
            })
    
    print(f"Extracted {len(expenses)} expenses")
    
    # Save expenses
    ee_file = WORKSPACE / 'zion.app' / 'data' / 'expenses.json'
    ee_file.parent.mkdir(parents=True, exist_ok=True)
    ee_file.write_text(json.dumps(expenses, indent=2))
    
    print(f"\n✅ Saved expense extraction")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()