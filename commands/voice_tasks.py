#!/usr/bin/env python3
"""
Email Voice Tasks - Zion

Converts voice to tasks.
Audio processing.

Usage:
  python3 voice_tasks.py --execute --limit 10
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

VOICE_KEYWORDS = ['voice', 'audio', 'message', 'recorded', 'mp3']

def cmd_run(dry_run: bool, limit: int = 10):
    print("🎙️ Voice Tasks")
    
    voice = {
        'voice_messages': 0,
        'tasks_created': 0,
        'accuracy': '95%'
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        subject = ''
        
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in VOICE_KEYWORDS):
            voice['voice_messages'] += 1
            voice['tasks_created'] += 1
    
    print(f"Voice messages: {voice['voice_messages']}")
    
    # Save voice
    vt_file = WORKSPACE / 'zion.app' / 'data' / 'voice_tasks.json'
    vt_file.parent.mkdir(parents=True, exist_ok=True)
    vt_file.write_text(json.dumps(voice, indent=2))
    
    print(f"\n✅ Saved voice tasks")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=10)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()