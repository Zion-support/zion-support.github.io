#!/usr/bin/env python3
"""
Document Intelligence - Zion

Processes email attachments and documents for insights.
Extracts text, creates summaries, and indexes content.

Usage:
  python3 document_intelligence.py --execute --limit 20
"""

import sys, json, urllib.request, urllib.parse
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

DOCUMENT_EXTENSIONS = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.txt']

def cmd_run(dry_run: bool, limit: int = 20):
    print("📄 Document Intelligence")
    
    msgs = gmail_search('has:attachment is:unread', limit=limit)
    
    docs_processed = 0
    for msg in msgs[:limit]:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        # Find attachments
        parts = full.get('payload', {}).get('parts', [])
        for part in parts:
            filename = part.get('filename', '')
            if any(filename.lower().endswith(ext) for ext in DOCUMENT_EXTENSIONS):
                print(f"  Document: {filename[:30]} in {subject[:30]}")
                docs_processed += 1
    
    print(f"\n✅ Found {docs_processed} documents to process")
    
    # Would integrate with OCR/text extraction here
    # For now, just log the count

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()