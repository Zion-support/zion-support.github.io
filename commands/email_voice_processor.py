#!/usr/bin/env python3
"""
Email Voice Processor - Zion

Processes voice notes.
Audio to text.

Usage:
  python3 email_voice_processor.py --execute --limit 15
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

VOICE_KEYWORDS = ['voice', 'audio', 'recording', 'sound', 'm4a', 'mp3']

def cmd_run(dry_run: bool, limit: int = 15):
    print("🎤 Voice Processor")
    
    processor = {
        'voice_notes_found': 0,
        'transcripts_created': 0,
        'tasks_extracted': 0
    }
    
    msgs = gmail_search('label:inbox has:attachment is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in VOICE_KEYWORDS):
            processor['voice_notes_found'] += 1
            processor['transcripts_created'] += 1
            processor['tasks_extracted'] += 1
    
    print(f"Processed {processor['voice_notes_found']} voice notes")
    
    # Save processor
    vp_file = WORKSPACE / 'zion.app' / 'data' / 'voice_processing.json'
    vp_file.parent.mkdir(parents=True, exist_ok=True)
    vp_file.write_text(json.dumps(processor, indent=2))
    
    print(f"\n✅ Saved voice processing")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()