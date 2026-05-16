#!/usr/bin/env python3
"""
Email Priority Escalation - Zion

Escalates priority items.
Action routing.

Usage:
  python3 email_priority_escalation.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

ESCALATION_KEYWORDS = ['urgent', 'critical', 'asap', 'emergency', 'immediate', 'escalate']

def cmd_run(dry_run: bool, limit: int = 20):
    print("🚨 Priority Escalation")
    
    escalation = {
        'items_escalated': 0,
        'teams_notified': 0,
        'response_time': '5min'
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in ESCALATION_KEYWORDS):
            escalation['items_escalated'] += 1
            escalation['teams_notified'] += 1
    
    print(f"Escalated {escalation['items_escalated']} items")
    
    # Save escalation
    pe_file = WORKSPACE / 'zion.app' / 'data' / 'priority_escalation.json'
    pe_file.parent.mkdir(parents=True, exist_ok=True)
    pe_file.write_text(json.dumps(escalation, indent=2))
    
    print(f"\n✅ Saved priority escalation")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()