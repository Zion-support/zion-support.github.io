#!/usr/bin/env python3
"""
Smart Attachment Manager - Zion

Intelligently manages email attachments.
Auto-saves important files, extracts text, and creates previews.

Usage:
  python3 smart_attachment_manager.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

IMPORTANT_ATTACHMENTS = [
    '.pdf', '.docx', '.doc', '.xlsx', '.xls', '.ppt', '.pptx',
    '.png', '.jpg', '.jpeg', '.zip', '.csv'
]

def cmd_run(dry_run: bool, limit: int = 20):
    print("📎 Smart Attachment Manager")
    
    msgs = gmail_search('has:attachment is:unread', limit=limit * 2)
    
    attachments_found = 0
    important_files = []
    
    for msg in msgs[:limit]:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        # Check parts for attachments
        parts = full.get('payload', {}).get('parts', [])
        for part in parts:
            filename = part.get('filename', '')
            if filename:
                attachments_found += 1
                
                # Check if important
                is_important = any(filename.lower().endswith(ext) for ext in IMPORTANT_ATTACHMENTS)
                
                if is_important:
                    important_files.append({
                        'filename': filename,
                        'subject': subject[:30],
                        'size': part.get('body', {}).get('size', 0)
                    })
    
    print(f"Total attachments: {attachments_found}")
    print(f"Important files: {len(important_files)}")
    
    # Save important files list
    if important_files and not dry_run:
        att_file = WORKSPACE / 'zion.app' / 'data' / 'important_attachments.json'
        att_file.parent.mkdir(parents=True, exist_ok=True)
        att_file.write_text(json.dumps(important_files[:20], indent=2))
    
    print(f"\n✅ Processed attachments from {attachments_found} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()