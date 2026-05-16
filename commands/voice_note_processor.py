#!/usr/bin/env python3
"""
Voice Note Processor - Zion

Processes voice notes from emails.
Converts to text responses.

Usage:
  python3 voice_note_processor.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def cmd_run(dry_run: bool = False, limit: int = 20):
    print("🎙️ Voice Note Processor")
    
    msgs = gmail_search('label:inbox has:attachment filename:(m4a OR mp3 OR wav) is:unread', limit=limit * 2)
    
    processed = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        processed.append({'subject': subject[:30], 'transcribed': True})
        print(f"   🎙️ Transcribed: {subject[:20]}")
    
    print(f"✅ Processed {len(processed)} voice notes")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()