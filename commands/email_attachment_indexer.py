#!/usr/bin/env python3
"""
Email Attachment Indexer - Zion

Indexes all email attachments.
Creates searchable attachment database.

Usage:
  python3 email_attachment_indexer.py --execute --limit 50
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, limit: int = 50):
    print("📑 Attachment Indexer")
    
    msgs = gmail_search('has:attachment label:inbox is:unread', limit=limit * 2)
    
    index = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        parts = full.get('payload', {}).get('parts', [])
        for part in parts:
            filename = part.get('filename', '')
            if filename:
                # Extract file info
                ext = filename.lower().split('.')[-1] if '.' in filename else 'unknown'
                
                index.append({
                    'filename': filename[:40],
                    'extension': ext,
                    'subject': subject[:35],
                    'indexed': True
                })
    
    print(f"Indexed {len(index)} attachments")
    
    # Group by extension
    ext_count = {}
    for item in index:
        ext = item['extension']
        ext_count[ext] = ext_count.get(ext, 0) + 1
    
    print("File types:")
    for ext, count in list(ext_count.items())[:5]:
        print(f"  {ext}: {count}")
    
    # Save index
    idx_file = WORKSPACE / 'zion.app' / 'data' / 'attachment_index.json'
    idx_file.parent.mkdir(parents=True, exist_ok=True)
    idx_file.write_text(json.dumps(index, indent=2))
    
    print(f"\n✅ Saved attachment index")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()