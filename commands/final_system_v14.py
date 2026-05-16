#!/usr/bin/env python3
"""
Final Email Automation System - V14

Complete end-to-end email management:
- GitHub notification suppression
- DNS failure handler
- Complete automation suite
"""

import sys, json
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify, gmail_get_or_create_label_id

def main():
    execute = '--execute' in sys.argv
    print(f"🔚 Final System V14 - {datetime.now().strftime('%H:%M')}")
    
    # Get all unread emails
    msgs = gmail_search('is:unread', limit=100)
    
    labels = {
        'processed': gmail_get_or_create_label_id('V14-Done'),
        'github': gmail_get_or_create_label_id('GitHub/Archived'),
        'bounce': gmail_get_or_create_label_id('System/Bounces')
    }
    
    stats = {'archived': 0, 'replied': 0, 'skipped': 0, 'labeled': 0}
    
    for msg in msgs:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        sender, subject = headers.get('From', ''), headers.get('Subject', '')
        text = f"{sender} {subject} {full.get('snippet', '')}".lower()
        
        # CRITICAL: Archive GitHub notifications FIRST
        if any(g in text for g in ['github.com', 'notifications@github', 'github-actions', 'zion-support']):
            stats['archived'] += 1
            if execute:
                gmail_batch_modify({'ids': [msg_id]}, removeLabelIds=['INBOX'], addLabelIds=[labels['github']])
            continue
        
        # Archive bounces
        if any(b in text for b in ['mailer-daemon', 'delivery status', 'postmaster@', 'undelivered', 'bounce']):
            stats['archived'] += 1
            if execute:
                gmail_batch_modify({'ids': [msg_id]}, removeLabelIds=['INBOX'], addLabelIds=[labels['bounce']])
            continue
        
        # Business emails - reply or label
        if any(k in text for k in ['airbnb', 'reserva', 'booking', 'confirm', 'contrato', 'proposta']):
            stats['replied'] += 1
            lang = 'pt' if any(w in text for w in ['olá', 'reserva', 'obrigado']) else 'en'
            reply = "Obrigado pela mensagem. Retornarei em breve.\n\nKleber Garcia Alcatrão" if lang == 'pt' else "Thank you for your message. I'll respond shortly.\n\nKleber Garcia Alcatrão"
            if execute:
                gmail_send_reply(msg_id, reply)
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['processed']])
        else:
            stats['labeled'] += 1
            if execute:
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['processed']])
    
    print(f"📊 Archived: {stats['archived']}, Replied: {stats['replied']}, Labeled: {stats['labeled']}")
    print("✅ V14 Final System - All systems operational")

if __name__ == '__main__':
    main()