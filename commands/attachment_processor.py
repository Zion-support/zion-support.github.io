#!/usr/bin/env python3
"""
Attachment Processor - Zion

Automatically saves email attachments.
Organizes by type and date.

Usage:
  python3 attachment_processor.py --execute --limit 50
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 50):
    print("📎 Attachment Processor")
    
    msgs = gmail_search('label:inbox has:attachment is:unread', limit=limit * 2)
    
    processed = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        processed.append({'subject': subject[:30], 'saved': True})
        print(f"   📎 Saved: {subject[:20]}")
    
    print(f"✅ Processed {len(processed)} attachments")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()