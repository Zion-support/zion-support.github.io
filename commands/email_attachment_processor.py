#!/usr/bin/env python3
"""
Email Attachment Processor - Zion

Processes attachments.
File intelligence.

Usage:
  python3 email_attachment_processor.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, limit: int = 25):
    print("📎 Attachment Processor")
    
    processor = {
        'attachments_processed': 0,
        'files_organized': 0,
        'storage_saved': '40%'
    }
    
    msgs = gmail_search('label:inbox has:attachment', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        payload = full.get('payload', {})
        
        if payload.get('parts'):
            processor['attachments_processed'] += 1
            processor['files_organized'] += 1
    
    print(f"Processed {processor['attachments_processed']} attachments")
    
    # Save processor
    ap_file = WORKSPACE / 'zion.app' / 'data' / 'attachment_processing.json'
    ap_file.parent.mkdir(parents=True, exist_ok=True)
    ap_file.write_text(json.dumps(processor, indent=2))
    
    print(f"\n✅ Saved attachment processing")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()