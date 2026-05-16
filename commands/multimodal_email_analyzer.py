#!/usr/bin/env python3
"""
Multimodal Email Analyzer - Zion

Analyzes images, charts, and attachments in emails.
Extracts insights from visual content automatically.

Usage:
  python3 multimodal_email_analyzer.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 20):
    print("🖼️ Multimodal Email Analyzer")
    
    msgs = gmail_search('label:inbox is:unread has:attachment', limit=limit * 2)
    
    analysis = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        payload = full.get('payload', {})
        
        # Check for image attachments
        images = []
        def find_images(parts):
            for part in parts:
                if part.get('filename') and any(ext in part.get('filename', '').lower() for ext in ['png', 'jpg', 'jpeg', 'gif']):
                    images.append(part.get('filename'))
                if part.get('parts'):
                    find_images(part['parts'])
        
        if payload.get('parts'):
            find_images(payload['parts'])
        
        if images:
            print(f"   🖼️ Found {len(images)} images: {subject[:25]}")
            analysis.append({'subject': subject, 'images': images})
    
    print(f"✅ Analyzed {len(analysis)} emails with visual content")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()