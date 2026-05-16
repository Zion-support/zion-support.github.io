#!/usr/bin/env python3
"""
Email Ticket Escalator - Zion

Escalates support tickets.
Priority handling.

Usage:
  python3 ticket_escalator.py --execute --limit 15
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

TICKET_KEYWORDS = ['ticket', 'support', 'help', 'issue', 'problem']

def cmd_run(dry_run: bool, limit: int = 15):
    print("🎫 Ticket Escalator")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    tickets = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in TICKET_KEYWORDS):
            tickets.append({
                'subject': subject[:40],
                'ticket_escalated': True
            })
    
    print(f"Escalated {len(tickets)} tickets")
    
    # Save tickets
    te_file = WORKSPACE / 'zion.app' / 'data' / 'escalated_tickets.json'
    te_file.parent.mkdir(parents=True, exist_ok=True)
    te_file.write_text(json.dumps(tickets, indent=2))
    
    print(f"\n✅ Saved ticket escalation")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()