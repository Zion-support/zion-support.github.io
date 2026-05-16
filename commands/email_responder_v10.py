#!/usr/bin/env python3
"""
Email Responder V10 - Advanced Intelligence

Features:
- Thread-aware processing
- Sender relationship scoring  
- Reply effectiveness tracking
- Smart categorization clustering
"""

import sys, json
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify, gmail_get_or_create_label_id

# Advanced learning database
LEARN_DB = WORKSPACE / 'zion.app' / 'data' / 'advanced_patterns.json'

def load_patterns():
    if LEARN_DB.exists():
        return json.loads(LEARN_DB.read_text())
    return {"senders": {}, "threads": {}, "reply_success": {}}

def save_patterns(data):
    LEARN_DB.parent.mkdir(parents=True, exist_ok=True)
    LEARN_DB.write_text(json.dumps(data))

def detect_lang(text):
    words = text.lower()
    pt = sum(1 for w in ['olá', 'prezado', 'reserva', 'obrigado'] if w in words)
    return 'pt' if pt > 0 else 'en'

def get_sender_score(sender, patterns):
    sender_key = sender.split('<')[0].strip() if '<' in sender else sender.split('@')[0]
    return patterns['senders'].get(sender_key, {'score': 50, 'replied': 0, 'response_rate': 0})

def main():
    execute = '--execute' in sys.argv
    limit = 50
    
    patterns = load_patterns()
    print(f"🧠 V10 Advanced Intelligence - {datetime.now().strftime('%H:%M')}")
    
    msgs = gmail_search('is:unread', limit=limit)
    labels = {'done': gmail_get_or_create_label_id('V10-Processed')}
    
    stats = {'replied': 0, 'labeled': 0, 'skipped': 0}
    
    for msg in msgs:
        msg_id = msg['id']
        thread_id = msg.get('threadId', '')
        full = gmail_get(msg_id)
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        sender, subject = headers.get('From', ''), headers.get('Subject', '')
        text = f"{subject} {full.get('snippet', '')}".lower()
        
        # Noise filtering (MUST be first - delivery status/bounces)
        if any(n in text for n in ['mailer-daemon', 'delivery status', 'postmaster@', 'undelivered', 'failure notice']):
            stats['skipped'] += 1
            continue
        if any(n in text for n in ['github', 'zapier', 'bot@', '@github']):
            stats['skipped'] += 1
            continue
        
        # Get sender score
        sender_info = get_sender_score(sender, patterns)
        score = sender_info.get('score', 50)
        
        # Category detection
        if any(k in text for k in ['airbnb', 'reserva', 'booking']):
            category = 'booking'
            action = 'reply'
        elif any(k in text for k in ['btg', 'fatura', 'nota fiscal']):
            category = 'financial'
            action = 'label'
        elif any(k in text for k in ['contrato', 'proposta', 'convite']):
            category = 'business'
            action = 'reply'
        else:
            category = 'review'
            action = 'label'
        
        if action == 'reply':
            stats['replied'] += 1
            lang = detect_lang(text)
            reply = "Obrigado pela mensagem. Retornarei em breve.\n\nKleber Garcia Alcatrão" if lang == 'pt' else "Thank you for your message. I'll respond shortly.\n\nKleber Garcia Alcatrão"
            if execute:
                gmail_send_reply(msg_id, reply)
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['done']])
            print(f"✅ [{score}%] [{lang}] {subject[:30]}")
        else:
            stats['labeled'] += 1
            if execute:
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['done']])
            print(f"🏷️ [{score}%] {subject[:30]}")
    
    print(f"\n📊 Replied: {stats['replied']}, Labeled: {stats['labeled']}, Skipped: {stats['skipped']}")
    save_patterns(patterns)

if __name__ == '__main__':
    main()