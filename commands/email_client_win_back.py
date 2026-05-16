#!/usr/bin/env python3
"""
Email Client Win-Back - Zion

Reactivates dormant client relationships.
Re-engagement automation.

Usage:
  python3 email_client_win_back.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

WINBACK_KEYWORDS = ['inactive', 'dormant', 'haven\'t heard', 'long time']

def cmd_run(dry_run: bool, limit: int = 30):
    print("🔄 Client Win-Back")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    winbacks = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in WINBACK_KEYWORDS):
            winbacks.append({
                'client': from_hdr[:30],
                'subject': subject[:40],
                'winback_stage': 'initial'
            })
    
    print(f"Created {len(winbacks)} win-back campaigns")
    
    for w in winbacks[:5]:
        print(f"  {w['client'][:25]}: {w['subject'][:25]}")
    
    # Save winbacks
    wb_file = WORKSPACE / 'zion.app' / 'data' / 'winbacks.json'
    wb_file.parent.mkdir(parents=True, exist_ok=True)
    wb_file.write_text(json.dumps(winbacks, indent=2))
    
    print(f"\n✅ Saved win-back campaigns")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()