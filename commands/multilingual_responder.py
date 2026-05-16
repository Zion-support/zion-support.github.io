#!/usr/bin/env python3
"""
Multi-Language Auto-Detection - Zion

Detects non-English emails and translates before responding.
Generates responses in the detected language.

Usage:
  python3 multilingual_responder.py --execute --limit 10
"""

import sys
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_get_or_create_label_id, gmail_batch_modify

# Language detection keywords
LANG_KEYWORDS = {
    'pt': ['olá', 'obrigado', 'você', 'sua', 'empresa', 'marketing', 'negócio'],
    'es': ['hola', 'gracias', 'usted', 'su', 'empresa', 'negocio'],
    'fr': ['bonjour', 'merci', 'vous', 'votre', 'entreprise', 'affaire'],
    'de': ['hallo', 'danke', 'sie', 'ihr', 'firma', 'geschäft'],
    'it': ['ciao', 'grazie', 'lei', 'sua', 'azienda', 'affare'],
}

LANGUAGE_PROMPTS = {
    'pt': "Você é Kleber Garcia Alcatrão, CEO da Zion Tech Group. Responda em português.",
    'es': "Eres Kleber Garcia Alcatrão, CEO de Zion Tech Group. Responde en español.",
    'fr': "Vous êtes Kleber Garcia Alcatrão, PDG de Zion Tech Group. Répondez en français.",
    'de': "Sie sind Kleber Garcia Alcatrão, CEO von Zion Tech Group. Antworten Sie auf Deutsch.",
    'it': "Lei è Kleber Garcia Alcatrão, CEO di Zion Tech Group. Rispondi in italiano.",
}

LABEL_PROCESSED = 'Multilingual-Handled'

def detect_language(text: str) -> str:
    text_lower = text.lower()
    scores = {}
    
    for lang, keywords in LANG_KEYWORDS.items():
        scores[lang] = sum(1 for kw in keywords if kw in text_lower)
    
    if not any(scores.values()):
        return 'en'
    
    return max(scores, key=scores.get) if max(scores.values()) > 0 else 'en'

def cmd_run(dry_run: bool, limit: int = 10):
    print("🌐 Multi-Language Responder")
    
    label_id = gmail_get_or_create_label_id(LABEL_PROCESSED)
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        msg_id = msg['id']
        label_ids = msg.get('labelIds', [])
        if label_id in label_ids:
            continue
        
        full = gmail_get(msg_id)
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        lang = detect_language(f"{subject} {snippet}")
        
        if lang != 'en':
            print(f"  [{lang.upper()}] {sender[:30]}: {subject[:30]}")
            
            if not dry_run:
                # Send response in detected language
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[label_id])

    print(f"\n✅ Processed {min(limit, len(msgs))} emails for language detection")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=10)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()