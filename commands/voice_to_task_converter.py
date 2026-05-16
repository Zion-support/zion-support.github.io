#!/usr/bin/env python3
"""
Email Voice Email - Zion

Voice response to emails.
Audio communication.

Usage:
  python3 voice_to_task_converter.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

VOICE_KEYWORDS = ['voice', 'audio', 'call', 'phone', 'speak']

def cmd_run(dry_run: bool, limit: int = 20):
    print("🎙️ Voice Email")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    voice_emails = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in VOICE_KEYWORDS):
            voice_emails.append({
                'subject': subject[:40],
                'voice_needed': True
            })
    
    print(f"Identified {len(voice_emails)} voice responses")
    
    # Save voice emails
    ve_file = WORKSPACE / 'zion.app' / 'data' / 'voice_emails.json'
    ve_file.parent.mkdir(parents=True, exist_ok=True)
    ve_file.write_text(json.dumps(voice_emails, indent=2))
    
    print(f"\n✅ Saved voice email tracking")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()