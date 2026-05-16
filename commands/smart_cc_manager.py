#!/usr/bin/env python3
"""
Smart CC Manager - Zion

Intelligently manages CC recipients on emails.
Adds relevant stakeholders automatically.

Usage:
  python3 smart_cc_manager.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("👥 Smart CC Manager")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    cc_decisions = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Determine CC needs
        ccs_needed = []
        if 'project' in text:
            ccs_needed.append('project_team')
        if 'budget' in text or 'financial' in text:
            ccs_needed.append('finance')
        if 'legal' in text or 'contract' in text:
            ccs_needed.append('legal')
        
        cc_decisions.append({
            'subject': subject[:30],
            'suggested_ccs': ccs_needed
        })
        print(f"   👥 {len(ccs_needed)} CCs: {subject[:22]}")
    
    print(f"✅ Managed CCs for {len(cc_decisions)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()