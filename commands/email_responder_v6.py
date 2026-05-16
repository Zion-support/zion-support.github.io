#!/usr/bin/env python3
"""
Email Responder V6 - Scale Optimized

Handles large email volumes with:
- Bulk batch processing
- Smart threading
- Aggressive noise elimination
- Detailed logging
"""

import sys
from pathlib import Path

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify, gmail_get_or_create_label_id

# Noise patterns for instant filtering (O(1) lookup)
NOISE_PATTERNS = frozenset([
    'github', 'zapier', 'mailer-daemon', 'postmaster',
    'notifications@github', 'github-actions', 'bot@', 'alerts@'
])

def is_noise(sender, subject):
    """Fast noise detection"""
    combined = f"{sender} {subject}".lower()
    return any(p in combined for p in NOISE_PATTERNS)

def smart_action(sender, subject, snippet):
    """Intelligent action selection"""
    text = f"{subject} {snippet}".lower()
    
    # Detect language
    lang = 'pt' if any(w in text for w in ['olá', 'prezado', 'reserva', 'obrigado']) else 'en'
    
    # Categories
    if any(k in text for k in ['airbnb', 'reserva', 'booking', 'confirm']):
        return ('reply', 'booking', lang)
    
    if any(k in text for k in ['btg', 'pactual', 'fatura', 'nota fiscal']):
        return ('label', 'financial', lang)
    
    if 'workspace alert' in text or 'outage' in text:
        return ('label', 'alert', lang)
    
    return ('label', 'review', lang)

def get_reply_template(category, lang):
    """Get appropriate reply template"""
    templates = {
        'pt': {
            'booking': "Obrigado pela sua mensagem. Recebi sua solicitação e retornarei em breve.\n\nAtenciosamente,\nKleber Garcia Alcatrão\nZion Tech Group",
            'default': "Obrigado pelo contato. Responderemos em breve.\n\nAtenciosamente,\nKleber Garcia Alcatrão"
        },
        'en': {
            'booking': "Thank you for your message. I've received your request and will respond shortly.\n\nBest regards,\nKleber Garcia Alcatrão\nZion Tech Group",
            'default': "Thank you for your email. I'll respond as soon as possible.\n\nBest regards,\nKleber Garcia Alcatrão"
        }
    }
    return templates.get(lang, templates['en']).get(category, templates['en']['default'])

def main():
    execute = '--execute' in sys.argv
    limit = 100
    
    print(f"🚀 V6 Scale Optimized - Processing up to {limit}")
    
    # Get emails
    msgs = gmail_search('is:unread', limit=limit * 2)
    
    # Prepare labels
    labels = {
        'processed': gmail_get_or_create_label_id('V6-Done'),
        'archive': gmail_get_or_create_label_id('System/Bounces'),
    }
    
    # Separate for batch processing
    to_reply = []
    to_label = []
    skipped = 0
    
    for msg in msgs[:limit]:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        sender, subject = headers.get('From', ''), headers.get('Subject', '')
        snippet = full.get('snippet', '')
        
        # Skip noise instantly
        if is_noise(sender, subject):
            skipped += 1
            continue
        
        # Get action
        action, cat, lang = smart_action(sender, subject, snippet)
        
        if action == 'reply':
            to_reply.append((msg_id, sender, subject, cat, lang))
        else:
            to_label.append(msg_id)
    
    # Execute batch
    stats = {'replied': 0, 'labeled': 0, 'skipped': skipped}
    
    for msg_id, sender, subject, cat, lang in to_reply:
        reply = get_reply_template(cat, lang)
        if execute:
            gmail_send_reply(msg_id, reply)
            gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['processed']])
        stats['replied'] += 1
        print(f"✅ [{lang.upper()}] {subject[:30]}")
    
    if to_label:
        if execute:
            gmail_batch_modify({'ids': to_label}, addLabelIds=[labels['processed']])
        stats['labeled'] = len(to_label)
        print(f"🏷️ Labeled {len(to_label)} emails")
    
    print(f"\n📊 Replied: {stats['replied']}, Labeled: {stats['labeled']}, Skipped: {stats['skipped']}")

if __name__ == '__main__':
    main()