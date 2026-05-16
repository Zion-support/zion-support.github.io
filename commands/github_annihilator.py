#!/usr/bin/env python3
"""
GitHub Notification Annihilator

Specifically targets GitHub notification flood:
- Bulk archives GitHub failures
- Cleans mailer-daemon bounces
- Preserves business emails
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
    
    print(f"💣 GitHub Annihilator - Cleaning {limit} emails")
    
    # Search specifically for GitHub and bounces
    msgs = gmail_search('is:unread', limit=limit)
    
    archive_label = gmail_get_or_create_label_id('GitHub/Archived')
    
    to_archive = []
    stats = {'archived': 0, 'skipped': 0}
    
    for msg in msgs:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        sender = headers.get('From', '')
        subject = headers.get('Subject', '')
        text = f"{sender} {subject}".lower()
        
        # GitHub/Zapier/Mail bounce patterns
        if any(p in text for p in ['github', 'zapier', 'mailer-daemon', 'postmaster', 'bot@', 'notification']):
            to_archive.append(msg_id)
        else:
            stats['skipped'] += 1
    
    if execute and to_archive:
        gmail_batch_modify({'ids': to_archive}, removeLabelIds=['INBOX'], addLabelIds=[archive_label])
        stats['archived'] = len(to_archive)
    
    print(f"📊 Archived: {stats['archived']}, Business preserved: {stats['skipped']}")

if __name__ == '__main__':
    main()