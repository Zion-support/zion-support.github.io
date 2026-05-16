#!/usr/bin/env python3
"""
Ultimate Email Handler - All-in-One

Integrates all strategies:
1. GitHub/Zapier annihilator
2. Newsletter/label cleaner
3. Intelligent business email handler
4. Full metrics reporting
"""

import sys
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify, gmail_get_or_create_label_id

def detect_lang(text):
    """Fast language detection"""
    pt = sum(1 for w in ['olá', 'prezado', 'reserva', 'obrigado', 'atenciosamente'] if w in text.lower())
    return 'pt' if pt > 0 else 'en'

def main():
    execute = '--execute' in sys.argv
    limit = 300
    
    print(f"🚀 Ultimate Handler - {datetime.now().strftime('%H:%M:%S')}")
    
    msgs = gmail_search('is:unread', limit=limit)
    
    labels = {
        'done': gmail_get_or_create_label_id('Ultimate-Done'),
        'archive': gmail_get_or_create_label_id('System/Archived'),
        'biz': gmail_get_or_create_label_id('Business/Handled'),
    }
    
    to_archive = []
    to_reply = []
    to_label = []
    
    for msg in msgs:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        sender, subject = headers.get('From', ''), headers.get('Subject', '')
        text = f"{sender} {subject} {full.get('snippet', '')}".lower()
        
        # Noise patterns
        if any(n in text for n in ['github', 'zapier', 'mailer-daemon', 'postmaster', 'bot@']):
            to_archive.append(msg_id)
        elif any(k in text for k in ['airbnb', 'reserva', 'booking', 'confirm']):
            to_reply.append((msg_id, sender, subject, detect_lang(text)))
        else:
            to_label.append(msg_id)
    
    stats = {'archived': len(to_archive), 'replied': 0, 'labeled': len(to_label)}
    
    # Execute batch actions
    if execute:
        if to_archive:
            gmail_batch_modify({'ids': to_archive}, removeLabelIds=['INBOX'], addLabelIds=[labels['archive']])
        for msg_id, sender, subject, lang in to_reply:
            reply = "Obrigado pela mensagem. Retornarei em breve.\n\nKleber Garcia Alcatrão" if lang == 'pt' else "Thank you for your message. I'll respond shortly.\n\nKleber Garcia Alcatrão"
            gmail_send_reply(msg_id, reply)
            gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['done']])
            stats['replied'] += 1
        if to_label:
            gmail_batch_modify({'ids': to_label}, addLabelIds=[labels['done']])
    
    print(f"📊 Archived: {stats['archived']}, Replied: {stats['replied']}, Labeled: {stats['labeled']}")

if __name__ == '__main__':
    main()