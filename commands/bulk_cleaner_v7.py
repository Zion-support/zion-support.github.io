#!/usr/bin/env python3
"""
Aggressive Bulk Email Cleaner - V7

Handles massive email volumes by:
- Bulk archiving noise
- Aggressive batch processing
- Newsletter detection
- Unsubscribe optimization
"""

import sys
from pathlib import Path

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_batch_modify, gmail_get_or_create_label_id

# Bulk noise patterns
NOISE = frozenset(['github', 'zapier', 'mailer-daemon', 'postmaster', 'bot', 'alert'])

def main():
    execute = '--execute' in sys.argv
    limit = 200
    
    print(f"💣 V7 Aggressive Cleaner - Bulk processing {limit}")
    
    msgs = gmail_search('is:unread', limit=limit)
    
    archive_label = gmail_get_or_create_label_id('System/Bulk-Archived')
    labels_label = gmail_get_or_create_label_id('System/Newsletters')
    
    to_archive = []
    to_label = []
    stats = {'archived': 0, 'labeled': 0, 'processed': len(msgs)}
    
    for msg in msgs:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        sender, subject = headers.get('From', ''), headers.get('Subject', '')
        text = f"{sender} {subject}".lower()
        
        # Noise - bulk archive
        if any(n in text for n in NOISE):
            to_archive.append(msg_id)
        elif any(k in text for k in ['unsubscribe', 'newsletter', 'digest', 'update']):
            to_label.append(msg_id)
        else:
            # Keep for intelligent processing
            to_label.append(msg_id)
    
    # Bulk execute
    if execute:
        if to_archive:
            gmail_batch_modify({'ids': to_archive}, removeLabelIds=['INBOX'], addLabelIds=[archive_label])
        if to_label:
            gmail_batch_modify({'ids': to_label}, addLabelIds=[labels_label])
    
    stats['archived'] = len(to_archive)
    stats['labeled'] = len(to_label)
    
    print(f"📊 Archived: {stats['archived']}, Labeled: {stats['labeled']}")
    
    # Now run intelligent responder on remaining
    print("\n🧠 Running intelligent responder on remaining emails...")
    import subprocess
    result = subprocess.run(['python3', 'intelligent_responder_v5.py', '--execute', '--limit', '30'],
                          capture_output=True, text=True, cwd='/root/.openclaw/workspace/zion.app/commands')
    print(result.stdout)

if __name__ == '__main__':
    main()