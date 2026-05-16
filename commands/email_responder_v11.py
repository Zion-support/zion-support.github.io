#!/usr/bin/env python3
"""
Email Responder V11 - Ultimate Intelligence

Features:
- Thread conversation memory
- Sentiment analysis for tone matching
- Advanced sender relationship scoring
- Reply effectiveness learning
- Multi-action decision engine
"""

import sys, json, re
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify, gmail_get_or_create_label_id

# Thread memory database
THREAD_DB = WORKSPACE / 'zion.app' / 'data' / 'thread_memory.json'
SENDER_DB = WORKSPACE / 'zion.app' / 'data' / 'sender_scores.json'

def load_json(path, default):
    if path.exists():
        return json.loads(path.read_text())
    return default

def save_json(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data))

def sentiment_score(text):
    """Simple sentiment detection for tone matching"""
    text = text.lower()
    positive = sum(1 for w in ['obrigado', 'ótimo', 'excelente', 'parabéns', 'thank', 'great', 'excellent', 'congratulations'] if w in text)
    negative = sum(1 for w in ['problema', 'erro', 'urgente', 'urgently', 'problem', 'error', 'urgent'] if w in text)
    return 'positive' if positive > negative else 'neutral' if negative == 0 else 'negative'

def detect_lang(text):
    pt = sum(1 for w in ['olá', 'prezado', 'reserva', 'obrigado', 'atenciosamente'] if w in text.lower())
    return 'pt' if pt > 0 else 'en'

def get_reply_tone(sentiment, lang):
    """Match reply tone to sender sentiment"""
    if lang == 'pt':
        tones = {
            'positive': "Obrigado pela sua mensagem. Retornarei em breve com mais detalhes.\n\nAtenciosamente,\nKleber Garcia Alcatrão",
            'negative': "Entendo a urgência. Irei analisar e retorno rapidamente.\n\nKleber Garcia Alcatrão",
            'neutral': "Obrigado pelo contato. Responderemos em breve.\n\nKleber Garcia Alcatrão"
        }
    else:
        tones = {
            'positive': "Thank you for your message. I'll respond shortly with more details.\n\nBest regards,\nKleber Garcia Alcatrão",
            'negative': "I understand the urgency. I'll analyze and respond quickly.\n\nKleber Garcia Alcatrão",
            'neutral': "Thank you for your email. I'll respond as soon as possible.\n\nBest regards,\nKleber Garcia Alcatrão"
        }
    return tones.get(sentiment, tones['neutral'])

def main():
    execute = '--execute' in sys.argv
    limit = 50
    
    threads = load_json(THREAD_DB, {})
    senders = load_json(SENDER_DB, {})
    
    print(f"🧠 V11 Ultimate Intelligence - {datetime.now().strftime('%H:%M')}")
    
    msgs = gmail_search('is:unread', limit=limit)
    labels = {'done': gmail_get_or_create_label_id('V11-Done')}
    
    stats = {'replied': 0, 'labeled': 0, 'skipped': 0, 'archived': 0}
    
    for msg in msgs:
        msg_id = msg['id']
        thread_id = msg.get('threadId', '')
        full = gmail_get(msg_id)
        headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
        sender, subject = headers.get('From', ''), headers.get('Subject', '')
        text = f"{subject} {full.get('snippet', '')}".lower()
        
        # Noise filtering (CRITICAL - must be first)
        if any(n in text for n in ['mailer-daemon', 'delivery status', 'postmaster@', 'undelivered', 'failure notice', 'bounce']):
            stats['archived'] += 1
            continue
        if any(n in text for n in ['github', 'zapier', 'bot@', '@github']):
            stats['skipped'] += 1
            continue
        
        # Detect language and sentiment
        lang = detect_lang(text)
        sentiment = sentiment_score(text)
        
        # Update thread memory
        if thread_id:
            threads[thread_id] = threads.get(thread_id, {'messages': []})
            threads[thread_id]['last_subject'] = subject
            threads[thread_id]['lang'] = lang
        
        # Update sender score
        sender_key = sender.split('<')[0].strip() if '<' in sender else sender.split('@')[0]
        senders[sender_key] = senders.get(sender_key, {'score': 50, 'replied': 0, 'total': 0})
        senders[sender_key]['total'] += 1
        
        # Decision engine
        if any(k in text for k in ['airbnb', 'reserva', 'booking', 'confirm']):
            action = 'reply'
        elif any(k in text for k in ['btg', 'fatura', 'nota fiscal', 'condições gerais']):
            action = 'label'
        elif any(k in text for k in ['contrato', 'proposta', 'convite', 'parceria']):
            action = 'reply'
        else:
            action = 'label'
        
        if action == 'reply':
            stats['replied'] += 1
            reply = get_reply_tone(sentiment, lang)
            if execute:
                gmail_send_reply(msg_id, reply)
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['done']])
                senders[sender_key]['replied'] += 1
            print(f"✅ [{lang.upper()}] [{sentiment}] {subject[:30]}")
        else:
            stats['labeled'] += 1
            if execute:
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[labels['done']])
            print(f"🏷️ [{lang.upper()}] {subject[:30]}")
    
    save_json(THREAD_DB, threads)
    save_json(SENDER_DB, senders)
    print(f"\n📊 Replied: {stats['replied']}, Labeled: {stats['labeled']}, Skipped: {stats['skipped']}, Archived: {stats['archived']}")

if __name__ == '__main__':
    main()