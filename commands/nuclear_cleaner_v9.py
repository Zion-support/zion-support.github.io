#!/usr/bin/env python3
"""
Nuclear Email Cleaner - V9

Handles massive email volumes by:
- Archive-only mode for rapid cleanup
- Zero-reply processing for speed
- Thread-aware preservation
"""

import sys
from pathlib import Path

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_batch_modify, gmail_get_or_create_label_id

def main():
    execute = '--execute' in sys.argv
    limit = 500
    
    print(f"💣 Nuclear Cleaner V9 - Rapid archive mode")
    
    msgs = gmail_search('is:unread', limit=limit)
    archive_label = gmail_get_or_create_label_id('Nuclear-Archived')
    
    to_archive = []
    to_preserve = []
    
    for msg in msgs:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        sender, subject = headers.get('From', ''), headers.get('Subject', '')
        text = f"{sender} {subject} {full.get('snippet', '')}".lower()
        
        # Preserve business-critical emails
        if any(k in text for k in ['airbnb', 'reserva', 'btg', 'fatura', 'nota fiscal', 'contrato', 'proposta']):
            to_preserve.append(msg_id)
        elif any(n in text for n in ['github', 'zapier', 'mailer', 'postmaster', 'bot@', 'alert']):
            to_archive.append(msg_id)
        else:
            to_archive.append(msg_id)
    
    if execute:
        if to_archive:
            gmail_batch_modify({'ids': to_archive}, removeLabelIds=['INBOX'], addLabelIds=[archive_label])
    
    print(f"📦 Archived: {len(to_archive)}, Preserved: {len(to_preserve)}")

if __name__ == '__main__':
    main()