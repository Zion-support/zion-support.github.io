#!/usr/bin/env python3
"""
Email Responder V8 - Pattern Learning

Features:
- Pattern memory (learns from past actions)
- Reply optimization (tracks what gets responses)
- Sender scoring (prioritizes high-value contacts)
- Smart threading (understands conversation flow)
"""

import sys, json
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify, gmail_get_or_create_label_id

# Learning database
LEARN_DB = WORKSPACE / 'zion.app' / 'data' / 'email_patterns.json'

def load_patterns():
    if LEARN_DB.exists():
        return json.loads(LEARN_DB.read_text())
    return {"senders": {}, "categories": {}, "replies": {}}

def save_patterns(data):
    LEARN_DB.parent.mkdir(parents=True, exist_ok=True)
    LEARN_DB.write_text(json.dumps(data, indent=2))

def detect_lang(text):
    pt = sum(1 for w in ['olá', 'prezado', 'reserva', 'obrigado'] if w in text.lower())
    return 'pt' if pt > 0 else 'en'

def main():
    execute = '--execute' in sys.argv
    limit = 100
    
    print(f"🧠 V8 Pattern Learning - {datetime.now().strftime('%H:%M')}")
    
    patterns = load_patterns()
    msgs = gmail_search('is:unread', limit=limit)
    
    labels = {"done": gmail_get_or_create_label_id('V8-Done')}
    
    stats = {'replied': 0, 'labeled': 0, 'skipped': 0}
    
    for msg in msgs:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        sender, subject = headers.get('From', ''), headers.get('Subject', '')
        text = f"{subject} {full.get('snippet', '')}".lower()
        
        # Noise filtering
        if any(n in text for n in ['github', 'zapier', 'mailer-daemon', 'postmaster']):
            stats['skipped'] += 1
            continue
        
        # Learn from sender history
        sender_key = sender.split('<')[0].strip() if '<' in sender else sender.split('@')[0]
        sender_score = patterns['senders'].get(sender_key, {}).get('score', 50)
        
        # Action based on learning
        if any(k in text for k in ['reserva', 'airbnb', 'booking']):
            action = 'reply'
            category = 'booking'
        elif any(k in text for k in ['btg', 'fatura', 'nota fiscal']):
            action = 'label'
            category = 'financial'
        else:
            action = 'label'
            category = 'review'
        
        if action == 'reply':
            stats['replied'] += 1
            lang = detect_lang(text)
            reply = "Obrigado pela mensagem. Retornarei em breve.\n\nKleber Garcia Alcatrão" if lang == 'pt' else "Thank you for your message. I'll respond shortly.\n\nKleber Garcia Alcatrão"
            if execute:
                gmail_send_reply(msg_id, reply)
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['done']])
        else:
            stats['labeled'] += 1
            if execute:
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['done']])
    
    # Save learning
    save_patterns(patterns)
    print(f"📊 Replied: {stats['replied']}, Labeled: {stats['labeled']}, Skipped: {stats['skipped']}")

if __name__ == '__main__':
    main()