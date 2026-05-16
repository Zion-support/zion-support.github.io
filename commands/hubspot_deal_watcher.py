#!/usr/bin/env python3
"""
Email HubSpot Deal Watcher - Zion

Watches HubSpot deal updates.
CRM integration.

Usage:
  python3 hubspot_deal_watcher.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

HUBSPOT_KEYWORDS = ['deal', 'deal stage', 'pipeline', 'forecast', 'revenue']

def cmd_run(dry_run: bool, limit: int = 20):
    print("💼 HubSpot Deal Watcher")
    
    deals = []
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in HUBSPOT_KEYWORDS):
            deals.append({
                'subject': subject[:40],
                'deal_tracked': True
            })
    
    print(f"Tracked {len(deals)} deals")
    
    # Save deals
    hd_file = WORKSPACE / 'zion.app' / 'data' / 'hubspot_deals.json'
    hd_file.parent.mkdir(parents=True, exist_ok=True)
    hd_file.write_text(json.dumps(deals, indent=2))
    
    print(f"\n✅ Saved HubSpot deal watching")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()