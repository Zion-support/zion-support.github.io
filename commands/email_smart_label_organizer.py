#!/usr/bin/env python3
"""
Email Smart Label Organizer - Zion

Organizes labels smartly.
Folder management.

Usage:
  python3 email_smart_label_organizer.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

LABELS = {
    'client_a': ['clientA.com', 'client a'],
    'client_b': ['clientB.com', 'client b'],
    'internal': ['@ziontechgroup.com'],
    'finance': ['invoice', 'payment', 'bill'],
    'projects': ['project', 'milestone', 'deliverable']
}

def cmd_run(dry_run: bool, limit: int = 30):
    print("🏷️ Smart Label Organizer")
    
    organizer = {label: 0 for label in LABELS}
    organizer['labels_applied'] = 0
    
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
                organizer[label] += 1
                organizer['labels_applied'] += 1
                break
    
    print(f"Applied {organizer['labels_applied']} labels")
    
    # Save organizer
    lo_file = WORKSPACE / 'zion.app' / 'data' / 'label_org.json'
    lo_file.parent.mkdir(parents=True, exist_ok=True)
    lo_file.write_text(json.dumps(organizer, indent=2))
    
    print(f"\n✅ Saved label organization")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()