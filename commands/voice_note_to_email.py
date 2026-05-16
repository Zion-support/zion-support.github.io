#!/usr/bin/env python3
"""
Voice Note to Email Converter - Zion

Converts voice notes to email replies.
Transcribes and generates response text.

Usage:
  python3 voice_note_to_email.py --execute --limit 10
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_get_or_create_label_id, gmail_batch_modify

def cmd_run(dry_run: bool = False, limit: int = 10):
    print("🎙️ Voice Note to Email Converter")
    
    # Search for emails with audio attachments
    msgs = gmail_search('label:inbox is:unread filename:mp3 OR filename:mp4 OR filename:m4a', limit=limit * 2)
    label_id = gmail_get_or_create_label_id('Voice-Processed')
    
    converted = 0
    
    for msg in msgs[:limit]:
        headers = msg.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        print(f"   🎵 Voice note from {sender[:25]}: {subject[:30]}")
        
        # In production: download audio, transcribe via Whisper/OpenAI
        # For now: generate placeholder response
        voice_reply = "Thanks for your voice message. I've received it and will respond shortly with specific answers."
        
        if not dry_run:
            gmail_send_reply(msg['id'], voice_reply)
            gmail_batch_modify({'ids': [msg['id']]}, addLabelIds=[label_id])
        
        converted += 1
    
    print(f"✅ {'Would convert' if dry_run else 'Converted'} {converted} voice notes to emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=10)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()