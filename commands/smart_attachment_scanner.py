#!/usr/bin/env python3
"""
Smart Attachment Scanner - Zion

Intelligently scans and indexes email attachments.
Creates searchable preview for important documents.

Usage:
  python3 smart_attachment_scanner.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

IMPORTANT_TYPES = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx']
IMAGE_TYPES = ['.png', '.jpg', '.jpeg', '.gif']

def cmd_run(dry_run: bool, limit: int = 30):
    print("📎 Smart Attachment Scanner")
    
    msgs = gmail_search('has:attachment is:unread', limit=limit * 2)
    
    attachments = []
    
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
                size = part.get('body', {}).get('size', 0)
                is_important = any(filename.lower().endswith(t) for t in IMPORTANT_TYPES)
                is_image = any(filename.lower().endswith(t) for t in IMAGE_TYPES)
                
                attachments.append({
                    'filename': filename,
                    'subject': subject[:40],
                    'size': size,
                    'type': 'document' if is_important else ('image' if is_image else 'other'),
                    'msg_id': msg_id
                })
    
    print(f"Scanned {len(attachments)} attachments")
    
    # Categorize
    docs = [a for a in attachments if a['type'] == 'document']
    images = [a for a in attachments if a['type'] == 'image']
    
    print(f"\nDocuments: {len(docs)}")
    print(f"Images: {len(images)}")
    
    # Save attachment index
    index_file = WORKSPACE / 'zion.app' / 'data' / 'attachment_index.json'
    index_file.parent.mkdir(parents=True, exist_ok=True)
    index_file.write_text(json.dumps(attachments[:50], indent=2))
    
    print(f"\n✅ Saved attachment index")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()