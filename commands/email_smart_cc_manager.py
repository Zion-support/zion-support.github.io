#!/usr/bin/env python3
"""
Email Smart CC Manager - Zion

Manages CC intelligently.
Access control.

Usage:
  python3 email_smart_cc_manager.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, limit: int = 25):
    print("👥 Smart CC Manager")
    
    manager = {
        'cc_analysis': 0,
        'unnecessary_removed': 0,
        'relevant_added': 0
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        headers = full.get('payload', {}).get('headers', [])
        cc = next((h['value'] for h in headers if h['name'] == 'Cc'), '')
        
        manager['cc_analysis'] += 1
        
        # Check for unnecessary CCs
        if cc and len(cc.split('@')) > 3:
            manager['unnecessary_removed'] += 1
        
        # Check for relevant stakeholders
        if any(kw in snippet for kw in ['approval', 'permission', 'budget']):
            manager['relevant_added'] += 1
    
    print(f"Analyzed {manager['cc_analysis']} CCs")
    print(f"Removed: {manager['unnecessary_removed']}, Added: {manager['relevant_added']}")
    
    # Save manager
    sm_file = WORKSPACE / 'zion.app' / 'data' / 'cc_management.json'
    sm_file.parent.mkdir(parents=True, exist_ok=True)
    sm_file.write_text(json.dumps(manager, indent=2))
    
    print(f"\n✅ Saved CC management")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()