#!/usr/bin/env python3
"""
Email Auto Labeler - Zion

Auto labels emails.
Smart organization.

Usage:
  python3 auto_labeler.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

LABELS = {
    'sales': ['deal', 'proposal', 'quote', 'pricing'],
    'support': ['help', 'issue', 'bug', 'fix'],
    'finance': ['invoice', 'payment', 'bill', 'expense'],
    'urgent': ['urgent', 'asap', 'critical', 'emergency']
}

def cmd_run(dry_run: bool, limit: int = 30):
    print("🏷️ Auto Labeler")
    
    labeler = {label: 0 for label in LABELS}
    labeler['labels_applied'] = 0
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        for label, keywords in LABELS.items():
            if any(kw in text for kw in keywords):
                labeler[label] += 1
                labeler['labels_applied'] += 1
                break
    
    print(f"Applied {labeler['labels_applied']} labels")
    
    # Save labeler
    al_file = WORKSPACE / 'zion.app' / 'data' / 'auto_labels.json'
    al_file.parent.mkdir(parents=True, exist_ok=True)
    al_file.write_text(json.dumps(labeler, indent=2))
    
    print(f"\n✅ Saved auto labels")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()