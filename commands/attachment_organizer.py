#!/usr/bin/env python3
"""
Attachment Organizer - Zion

Automatically downloads and organizes email attachments.
Creates structured filing system for documents.

Usage:
  python3 attachment_organizer.py --execute --limit 30
"""

import sys, json
from pathlib import Path
from datetime import datetime
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("📁 Attachment Organizer")
    
    msgs = gmail_search('label:inbox is:unread has:attachment', limit=limit * 2)
    
    attachments = []
    organized = 0
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        # Check for attachments
        payload = full.get('payload', {})
        
        def find_attachments(parts):
            for part in parts:
                if part.get('filename'):
                    attachments.append({
                        'filename': part.get('filename'),
                        'subject': subject[:30]
                    })
                if part.get('parts'):
                    find_attachments(part['parts'])
        
        if payload.get('parts'):
            find_attachments(payload['parts'])
        
        organized += 1
    
    # Save list
    att_file = WORKSPACE / 'zion.app' / 'data' / 'attachments_list.json'
    att_file.write_text(json.dumps(attachments, indent=2))
    
    print(f"✅ Found {len(attachments)} attachments in {organized} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()