#!/usr/bin/env python3
"""
Priority Inbox Sorter - Zion

Intelligently sorts emails by business impact.
Moves critical items to top of queue.

Usage:
  python3 priority_inbox_sorter.py --execute --limit 50
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_get_or_create_label_id, gmail_batch_modify

def cmd_run(dry_run: bool = False, limit: int = 50):
    print("📥 Priority Inbox Sorter")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    priority_label = gmail_get_or_create_label_id('PRIORITY')
    standard_label = gmail_get_or_create_label_id('STANDARD')
    
    counts = {'PRIORITY': 0, 'STANDARD': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        # Calculate priority
        score = 0
        if any(kw in text for kw in ['urgent', 'asap', 'deadline', 'critical']):
            score += 3
        if any(kw in text for kw in ['contract', 'deal', 'offer', 'payment']):
            score += 2
        if any(kw in text for kw in ['meeting', 'call', 'schedule']):
            score += 1
        
        priority = 'PRIORITY' if score >= 3 else 'STANDARD'
        counts[priority] += 1
        
        if not dry_run:
            label = priority_label if priority == 'PRIORITY' else standard_label
            gmail_batch_modify({'ids': [msg['id']]}, addLabelIds=[label])
        
        print(f"   {'🔴' if priority == 'PRIORITY' else '⚪'} {priority}: {subject[:25]}")
    
    print(f"✅ Sorted {len(msgs[:limit])} emails: {counts}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()