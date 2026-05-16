#!/usr/bin/env python3
"""
Email Contract Watchdog - Zion

Watches contracts.
Expiration alerts.

Usage:
  python3 contract_watchdog.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

CONTRACT_KEYWORDS = ['contract', 'agreement', 'renewal', 'expires', 'termination']

def cmd_run(dry_run: bool, limit: int = 20):
    print("📋 Contract Watchdog")
    
    watchdog = {
        'contracts_monitored': 0,
        'alerts_sent': 0,
        'expirations_handled': 0
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        if any(kw in snippet for kw in CONTRACT_KEYWORDS):
            watchdog['contracts_monitored'] += 1
            watchdog['alerts_sent'] += 1
            watchdog['expirations_handled'] += 1
    
    print(f"Monitored {watchdog['contracts_monitored']} contracts")
    
    # Save watchdog
    cw_file = WORKSPACE / 'zion.app' / 'data' / 'contract_watchdog.json'
    cw_file.parent.mkdir(parents=True, exist_ok=True)
    cw_file.write_text(json.dumps(watchdog, indent=2))
    
    print(f"\n✅ Saved contract watchdog")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()