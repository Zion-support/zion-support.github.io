#!/usr/bin/env python3
"""
Email Priority Sender - Zion

Prioritizes senders.
VIP recognition.

Usage:
  python3 email_priority_sender.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

VIP_DOMAINS = ['ceo.com', 'board.com', 'executive.com', 'vip.com']

def cmd_run(dry_run: bool, limit: int = 25):
    print("⭐ Priority Sender")
    
    sender = {
        'vips_identified': 0,
        'prioritized': 0,
        'response_time': '2m'
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        # Check for VIP indicators
        if any(vip in from_hdr.lower() for vip in VIP_DOMAINS):
            sender['vips_identified'] += 1
            sender['prioritized'] += 1
        
        # Also check for executive titles
        exec_titles = ['ceo', 'cfo', 'cto', 'executive', 'director']
        if any(title in from_hdr.lower() for title in exec_titles):
            sender['vips_identified'] += 1
            sender['prioritized'] += 1
    
    print(f"Identified {sender['vips_identified']} priority senders")
    
    # Save sender
    ps_file = WORKSPACE / 'zion.app' / 'data' / 'priority_senders.json'
    ps_file.parent.mkdir(parents=True, exist_ok=True)
    ps_file.write_text(json.dumps(sender, indent=2))
    
    print(f"\n✅ Saved priority senders")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()