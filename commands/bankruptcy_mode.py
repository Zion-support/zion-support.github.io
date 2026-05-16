#!/usr/bin/env python3
"""
Email Bankruptcy Mode - V15

Handles massive email backlogs by:
- Bulk archiving old emails (pre-2024)
- Preserving recent business threads
- Whitelisting key contacts
"""

import sys
from pathlib import Path
from datetime import datetime, timedelta

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_batch_modify, gmail_get_or_create_label_id

def main():
    execute = '--execute' in sys.argv
    cutoff_days = int(sys.argv[sys.argv.index('--days')+1]) if '--days' in sys.argv else 365
    limit = 500
    
    print(f"💣 Email Bankruptcy Mode - V15 (>{cutoff_days} days old)")
    
    # Get all unread
    msgs = gmail_search('is:unread', limit=limit)
    
    labels = {
        'archived': gmail_get_or_create_label_id('Bankruptcy/Archived'),
        'preserve': gmail_get_or_create_label_id('Bankruptcy/Preserved')
    }
    
    whitelist = ['airbnb', 'btg', 'fatura', 'nota fiscal', 'contrato', 'proposta', 'reserva']
    
    to_archive = []
    to_preserve = []
    
    cutoff = datetime.now() - timedelta(days=cutoff_days)
    
    for msg in msgs:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        sender, subject = headers.get('From', ''), headers.get('Subject', '')
        text = f"{sender} {subject}".lower()
        
        # Check internal date
        internal_date = int(full.get('internalDate', 0)) / 1000
        msg_date = datetime.fromtimestamp(internal_date)
        
        # Whitelist check
        is_business = any(k in text for k in whitelist)
        is_recent = msg_date > (datetime.now() - timedelta(days=30))
        is_github = any(g in text for g in ['github', 'zapier', 'notification'])
        
        if is_github:
            to_archive.append(msg_id)
        elif is_business or is_recent:
            to_preserve.append(msg_id)
        elif msg_date < cutoff:
            to_archive.append(msg_id)
        else:
            to_preserve.append(msg_id)
    
    stats = {'archived': len(to_archive), 'preserved': len(to_preserve)}
    
    if execute:
        if to_archive:
            gmail_batch_modify({'ids': to_archive}, removeLabelIds=['INBOX'], addLabelIds=[labels['archived']])
        if to_preserve:
            gmail_batch_modify({'ids': to_preserve}, addLabelIds=[labels['preserve']])
    
    print(f"📊 Archived: {stats['archived']}, Preserved: {stats['preserved']}")
    print("✅ Bankruptcy Mode - Backlog controlled")

if __name__ == '__main__':
    main()