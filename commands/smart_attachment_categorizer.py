#!/usr/bin/env python3
"""
Smart Attachment Categorizer - Zion

Automatically categorizes and tags attachments.
Creates searchable attachment library.

Usage:
  python3 smart_attachment_categorizer.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

ATTACHMENT_CATEGORIES = {
    'invoice': ['invoice', 'receipt', 'bill', 'payment'],
    'contract': ['contract', 'agreement', 'nda', 'terms'],
    'report': ['report', 'analysis', 'summary', 'quarterly'],
    'presentation': ['slide', 'deck', 'presentation', 'pitch'],
    'image': ['png', 'jpg', 'jpeg', 'gif', 'screenshot']
}

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("📎 Smart Attachment Categorizer")
    
    msgs = gmail_search('label:inbox is:unread has:attachment', limit=limit * 2)
    
    categorized = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        # Check payload for attachments
        payload = full.get('payload', {})
        attachments = []
        
        def check_parts(parts):
            for part in parts:
                if part.get('filename'):
                    filename = part.get('filename', '').lower()
                    category = 'other'
                    for cat, keywords in ATTACHMENT_CATEGORIES.items():
                        if any(kw in filename for kw in keywords):
                            category = cat
                            break
                    attachments.append({'name': filename, 'category': category})
                if part.get('parts'):
                    check_parts(part['parts'])
        
        if payload.get('parts'):
            check_parts(payload['parts'])
        
        if attachments:
            categorized.append({'subject': subject[:30], 'attachments': attachments})
            print(f"   📎 {subject[:25]}: {len(attachments)} attachments")
    
    # Save categories
    cat_file = WORKSPACE / 'zion.app' / 'data' / 'attachment_categories.json'
    cat_file.write_text(json.dumps(categorized, indent=2))
    
    print(f"✅ Categorized {len(categorized)} emails with attachments")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()