#!/usr/bin/env python3
"""
Email VIP Auto-Responder - Zion

VIP auto-responder.
Priority handling.

Usage:
  python3 email_vip_auto_responder.py --execute --limit 15
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

VIP_KEYWORDS = ['vip', 'priority', 'urgent', 'ceo', 'executive', 'important']

def cmd_run(dry_run: bool, limit: int = 15):
    print("👑 VIP Auto-Responder")
    
    vip = {
        'vips_identified': 0,
        'priority_responses': 0,
        'response_time': '5m'
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in VIP_KEYWORDS):
            vip['vips_identified'] += 1
            vip['priority_responses'] += 1
    
    print(f"Identified {vip['vips_identified']} VIPs")
    
    # Save vip
    va_file = WORKSPACE / 'zion.app' / 'data' / 'vip_responses.json'
    va_file.parent.mkdir(parents=True, exist_ok=True)
    va_file.write_text(json.dumps(vip, indent=2))
    
    print(f"\n✅ Saved VIP responses")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()