#!/usr/bin/env python3
"""
Email Expense Anomaly Detector - Zion

Detects unusual expense patterns.
Flags potential billing issues.

Usage:
  python3 email_expense_anomaly_detector.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

EXPENSE_KEYWORDS = ['invoice', 'payment', 'charge', 'bill', 'receipt']

def cmd_run(dry_run: bool, limit: int = 30):
    print("💸 Expense Anomaly Detector")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    expenses = []
    anomalies = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in EXPENSE_KEYWORDS):
            expenses.append({
                'subject': subject[:35],
                'status': 'review'
            })
            
            # Flag potential anomalies
            if 'dispute' in text or 'wrong' in text or 'incorrect' in text:
                anomalies.append(subject[:35])
    
    print(f"Found {len(expenses)} expenses")
    print(f"Potential anomalies: {len(anomalies)}")
    
    for a in anomalies[:5]:
        print(f"  ⚠️ {a[:30]}")
    
    # Save analysis
    exp_file = WORKSPACE / 'zion.app' / 'data' / 'expenses.json'
    exp_file.parent.mkdir(parents=True, exist_ok=True)
    exp_file.write_text(json.dumps({'expenses': expenses, 'anomalies': anomalies}, indent=2))
    
    print(f"\n✅ Saved expense anomaly detection")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()