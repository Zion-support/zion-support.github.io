#!/usr/bin/env python3
"""
Email Priority Matrix - Zion

Advanced priority scoring combining urgency, importance, and impact.
Creates 2x2 priority matrix for optimal handling order.

Usage:
  python3 email_priority_matrix.py --execute --limit 35
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 35):
    print("📊 Email Priority Matrix")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    matrix = {'urgent_important': 0, 'urgent_not_important': 0, 'not_urgent_important': 0, 'neither': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        urgent = any(kw in text for kw in ['urgent', 'asap', 'deadline', 'today', 'now'])
        important = any(kw in text for kw in ['client', 'boss', 'contract', 'payment', 'deal'])
        
        if urgent and important:
            quadrant = 'urgent_important'  # Do Now
        elif urgent and not important:
            quadrant = 'urgent_not_important'  # Delegate
        elif not urgent and important:
            quadrant = 'not_urgent_important'  # Schedule
        else:
            quadrant = 'neither'  # Archive
        
        matrix[quadrant] += 1
        
        emoji = '🔴' if quadrant == 'urgent_important' else '⚠️' if quadrant == 'urgent_not_important' else '🟢' if quadrant == 'not_urgent_important' else '⚪'
        print(f"   {emoji} {quadrant}: {subject[:25]}")
    
    print(f"✅ Priority matrix: {dict(matrix)}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=35)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()