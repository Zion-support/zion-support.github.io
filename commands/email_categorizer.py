#!/usr/bin/env python3
"""
Email Categorizer - Zion

Automatically categorizes emails into logical folders.
Creates organized inbox structure.

Usage:
  python3 email_categorizer.py --execute --limit 50
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_get_or_create_label_id, gmail_batch_modify

def cmd_run(dry_run: bool = False, limit: int = 50):
    print("🏷️ Email Categorizer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    labels = {
        'clients': gmail_get_or_create_label_id('Clients'),
        'projects': gmail_get_or_create_label_id('Projects'),
        'finance': gmail_get_or_create_label_id('Finance'),
        'hr': gmail_get_or_create_label_id('HR')
    }
    
    categorized = {'Clients': 0, 'Projects': 0, 'Finance': 0, 'HR': 0, 'Other': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        label_id = None
        cat = 'Other'
        
        if any(kw in text for kw in ['client', 'customer', 'contract']):
            label_id = labels['clients']
            cat = 'Clients'
        elif any(kw in text for kw in ['project', 'task', 'milestone']):
            label_id = labels['projects']
            cat = 'Projects'
        elif any(kw in text for kw in ['invoice', 'payment', 'budget', 'cost']):
            label_id = labels['finance']
            cat = 'Finance'
        elif any(kw in text for kw in ['hr', 'hire', 'recruit', 'employee']):
            label_id = labels['hr']
            cat = 'HR'
        
        categorized[cat] += 1
        
        if label_id and not dry_run:
            gmail_batch_modify({'ids': [msg['id']]}, addLabelIds=[label_id])
        
        print(f"   🏷️ {cat}: {subject[:25]}")
    
    print(f"✅ Categorized: {dict(categorized)}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()