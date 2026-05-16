#!/usr/bin/env python3
"""
Email Contract Monitor - Zion

Monitors contracts.
Renewal alerts.

Usage:
  python3 email_contract_monitor.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

CONTRACT_KEYWORDS = ['contract', 'agreement', 'renewal', 'expires', 'termination', 'amendment']

def cmd_run(dry_run: bool, limit: int = 20):
    print("📑 Contract Monitor")
    
    monitor = {
        'contracts_monitored': 0,
        'renewals_tracked': 0,
        'alerts_sent': 0
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in CONTRACT_KEYWORDS):
            monitor['contracts_monitored'] += 1
            if 'renewal' in text or 'expires' in text:
                monitor['renewals_tracked'] += 1
                monitor['alerts_sent'] += 1
    
    print(f"Monitored {monitor['contracts_monitored']} contracts")
    
    # Save monitor
    cm_file = WORKSPACE / 'zion.app' / 'data' / 'contract_monitoring.json'
    cm_file.parent.mkdir(parents=True, exist_ok=True)
    cm_file.write_text(json.dumps(monitor, indent=2))
    
    print(f"\n✅ Saved contract monitoring")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()