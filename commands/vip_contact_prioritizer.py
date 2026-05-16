#!/usr/bin/env python3
"""
VIP Contact Prioritizer - Zion

Prioritizes emails from VIP contacts and key relationships.
Ensures important relationships get immediate attention.

Usage:
  python3 vip_contact_prioritizer.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_get_or_create_label_id, gmail_batch_modify

# VIP domains and contacts
VIP_PATTERNS = [
    'ceo@', 'president@', 'director@', 'founder@',
    'partner@', 'investor@', 'client@', 'customer@',
    'board@', 'executive@', 'senior@'
]

def cmd_run(dry_run: bool, limit: int = 30):
    print("⭐ VIP Contact Prioritizer")
    
    # Get VIP label
    vip_label = gmail_get_or_create_label_id('Priority/VIP')
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    vip_count = 0
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        from_hdr = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        # Check for VIP patterns
        from_lower = from_hdr.lower()
        is_vip = any(pattern in from_lower for pattern in VIP_PATTERNS)
        
        # Also check for known domains
        if not is_vip:
            for domain in ['ziontechgroup.com', 'zionholdings.com']:
                if domain in from_lower:
                    is_vip = True
                    break
        
        if is_vip:
            vip_count += 1
            if not dry_run:
                gmail_batch_modify({'ids': [msg['id']]}, addLabelIds=[vip_label])
            print(f"  VIP: {from_hdr[:35]}")
    
    print(f"\n✅ {'Would prioritize' if dry_run else 'Prioritized'} {vip_count} VIP contacts")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()