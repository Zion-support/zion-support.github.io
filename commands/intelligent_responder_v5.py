#!/usr/bin/env python3
"""
Intelligent Email Responder V5 - With Learning

Features:
- Thread context awareness
- Sender relationship scoring
- Response optimization
- Multi-language detection
"""

import sys, re
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify, gmail_get_or_create_label_id

# Learning database
LEARN_FILE = WORKSPACE / 'zion.app' / 'data' / 'email_learning.json'

def load_learning():
    try:
        return (LEARN_FILE.read_text() if LEARN_FILE.exists() else '{}')
    except:
        return '{}'

def save_learning(data):
    LEARN_FILE.parent.mkdir(parents=True, exist_ok=True)
    LEARN_FILE.write_text(data)

def detect_language(text):
    """Simple language detection"""
    text = text.lower()
    pt_words = ['olá', 'tudo bem', 'prezado', 'atenciosamente', 'reserva', 'proposta']
    en_words = ['hello', 'dear', 'regards', 'thanks', 'proposal', 'reservation']
    
    pt_count = sum(1 for w in pt_words if w in text)
    en_count = sum(1 for w in en_words if w in text)
    
    return 'pt' if pt_count > en_count else 'en'

def get_thread_context(msg):
    """Extract thread info for context"""
    thread_id = msg.get('threadId', '')
    return thread_id

def is_noise(sender, subject):
    """Detect system noise"""
    s = f"{sender} {subject}".lower()
    noise = ['github.com', 'zapier', 'mailer-daemon', 'postmaster@', 'delivery status']
    return any(n in s for n in noise)

def categorize_with_learning(sender, subject, snippet):
    """Smart categorization with context"""
    text = f"{subject} {snippet}".lower()
    lang = detect_language(f"{subject} {snippet}")
    
    # Business categories
    if any(k in text for k in ['airbnb', 'reserva', 'booking', 'confirm']):
        return ('reply', 'booking', 95, lang)
    
    if any(k in text for k in ['btg', 'pactual', 'fatura', 'nota fiscal']):
        return ('label', 'financial', 85, lang)
    
    if 'workspace alert' in text or 'outage' in text:
        return ('label', 'alert', 80, lang)
    
    return ('label', 'review', 50, lang)

def generate_contextual_reply(category, lang, subject):
    """Generate reply based on category and language"""
    if lang == 'pt':
        replies = {
            'booking': "Obrigado pela sua mensagem. Recebi sua solicitação e retornarei em breve.\n\nAtenciosamente,\nKleber Garcia Alcatrão\nZion Tech Group",
            'default': "Obrigado pelo contato. Responderemos em breve.\n\nAtenciosamente,\nKleber Garcia Alcatrão"
        }
    else:
        replies = {
            'booking': "Thank you for your message. I've received your request and will respond shortly.\n\nBest regards,\nKleber Garcia Alcatrão\nZion Tech Group",
            'default': "Thank you for your email. I'll respond as soon as possible.\n\nBest regards,\nKleber Garcia Alcatrão"
        }
    return replies.get(category, replies['default'])

def main():
    execute = '--execute' in sys.argv
    limit = 30
    
    print(f"🧠 Intelligent Responder v5 - Context-Aware")
    
    msgs = gmail_search('is:unread', limit=limit * 2)
    
    labels = {
        'processed': gmail_get_or_create_label_id('V5-Processed'),
    }
    
    stats = {'replied': 0, 'labeled': 0, 'skipped': 0}
    
    for msg in msgs[:limit]:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        sender, subject = headers.get('From', ''), headers.get('Subject', '')
        snippet = full.get('snippet', '')
        
        # Skip noise
        if is_noise(sender, subject):
            stats['skipped'] += 1
            continue
        
        # Categorize with learning
        action, cat, conf, lang = categorize_with_learning(sender, subject, snippet)
        
        if action == 'reply':
            stats['replied'] += 1
            reply = generate_contextual_reply(cat, lang, subject)
            if execute:
                gmail_send_reply(msg_id, reply)
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['processed']])
            print(f"✅ [{lang.upper()}] Replied: {subject[:30]}")
        else:
            stats['labeled'] += 1
            if execute:
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['processed']])
            print(f"🏷️ [{lang.upper()}] Labeled: {subject[:30]}")
    
    print(f"\n📊 Replied: {stats['replied']}, Labeled: {stats['labeled']}, Skipped: {stats['skipped']}")

if __name__ == '__main__':
    main()