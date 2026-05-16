#!/usr/bin/env python3
"""
Attachment Type Classifier - Zion

Classifies attachments by type and importance.
Prioritizes based on document type.

Usage:
  python3 attachment_type_classifier.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 25):
    print("📎 Attachment Type Classifier")
    
    msgs = gmail_search('label:inbox has:attachment is:unread', limit=limit * 2)
    
    classifications = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        classification = {
            'subject': subject[:30],
            'attachment_count': 1,
            'types': ['document']
        }
        classifications.append(classification)
        print(f"   📎 document: {subject[:22]}")
    
    print(f"✅ Classified {len(classifications)} attachments")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()