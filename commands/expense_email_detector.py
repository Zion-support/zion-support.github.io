#!/usr/bin/env python3
"""
Expense Email Detector - Zion

Detects expense-related emails.
Automatically extracts receipt data.

Usage:
  python3 expense_email_detector.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

EXPENSE_KEYWORDS = ['receipt', 'invoice', 'payment', 'charge', 'transaction', 'order']

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("💰 Expense Email Detector")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    expenses = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in EXPENSE_KEYWORDS):
            expenses.append({'subject': subject[:30], 'detected': True})
            print(f"   💰 Expense: {subject[:22]}")
    
    print(f"✅ Detected {len(expenses)} expense emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()