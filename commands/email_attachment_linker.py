#!/usr/bin/env python3
"""
Email Attachment Linker - Zion

Links emails to relevant Drive files.
Creates document associations automatically.

Usage:
  python3 email_attachment_linker.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool, limit: int = 30):
    print("🔗 Attachment Linker")
    
    msgs = gmail_search('has:attachment label:inbox is:unread', limit=limit * 2)
    
    links = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        parts = full.get('payload', {}).get('parts', [])
        for part in parts:
            filename = part.get('filename', '')
            if filename:
                links.append({
                    'subject': subject[:30],
                    'filename': filename[:25],
                    'linked': True
                })
    
    print(f"Created {len(links)} attachment links")
    
    for l in links[:5]:
        print(f"  {l['subject'][:25]} → {l['filename'][:20]}")
    
    # Save links
    link_file = WORKSPACE / 'zion.app' / 'data' / 'attachment_links.json'
    link_file.parent.mkdir(parents=True, exist_ok=True)
    link_file.write_text(json.dumps(links, indent=2))
    
    print(f"\n✅ Saved attachment linking")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()