#!/usr/bin/env python3
"""
Email Client Onboarding - Zion

Onboards new clients.
Welcome automation.

Usage:
  python3 email_client_onboarding.py --execute --limit 15
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

ONBOARDING_KEYWORDS = ['welcome', 'new client', 'getting started', 'onboarding', 'welcome aboard']

def cmd_run(dry_run: bool, limit: int = 15):
    print("👋 Client Onboarding")
    
    onboarded = []
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in ONBOARDING_KEYWORDS):
            onboarded.append({
                'client': from_hdr[:40],
                'subject': subject[:40]
            })
    
    print(f"Onboarded {len(onboarded)} clients")
    
    # Save onboarding
    oc_file = WORKSPACE / 'zion.app' / 'data' / 'client_onboarding.json'
    oc_file.parent.mkdir(parents=True, exist_ok=True)
    oc_file.write_text(json.dumps(onboarded, indent=2))
    
    print(f"\n✅ Saved client onboarding")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()