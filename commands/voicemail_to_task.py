#!/usr/bin/env python3
"""
Voicemail to Task Converter - Zion

Converts voice messages from email into actionable tasks.
Extracts action items from voicemail transcriptions.

Usage:
  python3 voicemail_to_task.py --execute --limit 10
"""

import sys, re
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, telegram_send

VM_KEYWORDS = ['voicemail', 'voice message', 'mensagem de voz', 'correo de voz', '.mp3', '.wav']
ACTION_PATTERNS = [
    r'call (?:me|you )?(?:back )?at (\d+)',
    r'meet(?:ing)? (?:with|for) (.+)',
    r'follow up (?:on|with) (.+)',
    r'review (.+)',
    r'check (.+)',
]

def is_voicemail(subject: str, body: str) -> bool:
    text = f"{subject} {body}".lower()
    return any(kw in text for kw in VM_KEYWORDS)

def extract_action_items(text: str) -> list:
    actions = []
    for pattern in ACTION_PATTERNS:
        matches = re.findall(pattern, text, re.IGNORECASE)
        actions.extend(matches)
    return actions

def cmd_run(dry_run: bool, limit: int = 10):
    print("🎙️ Voicemail to Task Converter")
    
    msgs = gmail_search('is:unread', limit=limit * 2)
    tasks_created = 0
    
    for msg in msgs[:limit]:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        if is_voicemail(subject, snippet):
            actions = extract_action_items(snippet)
            print(f"  Voicemail: {subject[:40]}")
            
            for action in actions[:3]:
                task = f"TASK: {action}"
                if not dry_run:
                    gmail_send_reply(msg_id, task)
                    tasks_created += 1
                    print(f"    Created: {action}")
    
    print(f"\n✅ Created {tasks_created} tasks from voicemails")
    if tasks_created > 0:
        telegram_send(f"🎙️ Voicemail Converter: Created {tasks_created} tasks")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=10)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()