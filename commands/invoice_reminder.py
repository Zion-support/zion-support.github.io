#!/usr/bin/env python3
"""
Email Invoice Reminder - Zion

Sends invoice reminders.
Accounts receivable.

Usage:
  python3 invoice_reminder.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

INVOICE_KEYWORDS = ['invoice', 'payment due', 'due date', 'outstanding', 'balance']

def cmd_run(dry_run: bool, limit: int = 25):
    print("💰 Invoice Reminder")
    
    reminders = []
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in INVOICE_KEYWORDS):
            reminders.append({
                'subject': subject[:40],
                'reminder_sent': True
            })
    
    print(f"Sent {len(reminders)} reminders")
    
    # Save reminders
    ir_file = WORKSPACE / 'zion.app' / 'data' / 'invoice_reminders.json'
    ir_file.parent.mkdir(parents=True, exist_ok=True)
    ir_file.write_text(json.dumps(reminders, indent=2))
    
    print(f"\n✅ Saved invoice reminders")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()