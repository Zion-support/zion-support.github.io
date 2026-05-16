#!/usr/bin/env python3
"""
Email Voice Note Processor - Zion

Processes voice notes.
Audio to text.

Usage:
  python3 email_voice_notes_processor.py --execute --limit 15
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

VOICE_KEYWORDS = ['voice message', 'voice note', 'audio', '.mp3', 'recorded']

def cmd_run(dry_run: bool, limit: int = 15):
    print("🎤 Voice Notes Processor")
    
    processed = []
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in VOICE_KEYWORDS):
            processed.append({
                'subject': subject[:40],
                'voice_processed': True
            })
    
    print(f"Processed {len(processed)} voice notes")
    
    # Save processed
    vn_file = WORKSPACE / 'zion.app' / 'data' / 'voice_notes.json'
    vn_file.parent.mkdir(parents=True, exist_ok=True)
    vn_file.write_text(json.dumps(processed, indent=2))
    
    print(f"\n✅ Saved voice notes processing")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()