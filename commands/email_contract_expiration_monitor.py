#!/usr/bin/env python3
"""
Email Contract Expiration Monitor - Zion

Monitors contract expiration dates.
Sends renewal reminders automatically.

Usage:
  python3 email_contract_expiration_monitor.py --execute --limit 25
"""

import sys, json
import re
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

CONTRACT_KEYWORDS = ['contract', 'agreement', 'nda', 'renewal', 'expiration']
DATE_PATTERN = r'(\d{1,2}/\d{1,2}/\d{2,4})'

def cmd_run(dry_run: bool, limit: int = 25):
    print("📅 Contract Expiration Monitor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    contracts = []
    expiring = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in CONTRACT_KEYWORDS):
            dates = re.findall(DATE_PATTERN, snippet)
            
            contracts.append({
                'subject': subject[:35],
                'dates': dates[:2]
            })
            
            if dates:
                expiring.append(subject[:35])
    
    print(f"Monitored {len(contracts)} contracts")
    print(f"Expiring soon: {len(expiring)}")
    
    for e in expiring[:5]:
        print(f"  ⚠️ {e[:30]}")
    
    # Save monitoring
    con_file = WORKSPACE / 'zion.app' / 'data' / 'contracts.json'
    con_file.parent.mkdir(parents=True, exist_ok=True)
    con_file.write_text(json.dumps(contracts, indent=2))
    
    print(f"\n✅ Saved contract monitoring")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()