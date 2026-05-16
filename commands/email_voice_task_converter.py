#!/usr/bin/env python3
"""
Email Voice Task Converter - Zion

Converts voice messages to email tasks.
Creates actionable items from voice notes.

Usage:
  python3 email_voice_task_converter.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

VOICE_KEYWORDS = ['voice', 'voicemail', 'audio', 'record']

def cmd_run(dry_run: bool, limit: int = 20):
    print("🎙️ Voice Task Converter")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    voice_tasks = []
    
    for msg in msgs[:limit]:
        snippet = msg.get('snippet', '').lower()
        subject = msg.get('snippet', '')[:30]
        
        if any(kw in snippet for kw in VOICE_KEYWORDS):
            voice_tasks.append({
                'subject': subject,
                'status': 'needs-transcription',
                'action': 'convert-to-task'
            })
    
    print(f"Found {len(voice_tasks)} voice messages")
    
    for task in voice_tasks[:5]:
        print(f"  {task['subject'][:25]}: pending conversion")
    
    # Save tasks
    vt_file = WORKSPACE / 'zion.app' / 'data' / 'voice_tasks.json'
    vt_file.parent.mkdir(parents=True, exist_ok=True)
    vt_file.write_text(json.dumps(voice_tasks, indent=2))
    
    print(f"\n✅ Saved voice task conversion")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()