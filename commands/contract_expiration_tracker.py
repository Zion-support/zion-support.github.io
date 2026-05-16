#!/usr/bin/env python3
"""
Contract Expiration Tracker - Zion

Tracks contract expiration dates from email communications.
Provides renewal reminders and analysis.

Usage:
  python3 contract_expiration_tracker.py --execute --limit 30
"""

import sys, json, re
from datetime import datetime
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

CONTRACT_KEYWORDS = ['contract', 'agreement', 'renewal', 'expires', 'expiration', 'valid until']

def cmd_run(dry_run: bool, limit: int = 30):
    print("📜 Contract Expiration Tracker")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    contracts = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Check for contract keywords
        if any(kw in text for kw in CONTRACT_KEYWORDS):
            # Extract date
            dates = re.findall(r'(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})', text)
            
            contracts.append({
                'subject': subject[:40],
                'dates': dates[:2],
                'type': 'contract'
            })
    
    print(f"Found {len(contracts)} contract-related emails")
    
    # Save contracts
    contract_file = WORKSPACE / 'zion.app' / 'data' / 'contracts.json'
    contract_file.parent.mkdir(parents=True, exist_ok=True)
    contract_file.write_text(json.dumps(contracts, indent=2))
    
    print(f"\n✅ Saved contract tracking data")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()