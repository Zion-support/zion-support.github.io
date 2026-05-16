#!/usr/bin/env python3
"""
Multi-Language Email Detector - Zion

Detects email language and suggests translation responses.
Helps communicate with international contacts.

Usage:
  python3 language_detector.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_get_or_create_label_id, gmail_batch_modify

LANGUAGE_PATTERNS = {
    'portuguese': [' Olá', ' obrigado', ' por favor', ' atenciosamente', 'você', 'como', 'pode'],
    'spanish': [' Hola', ' gracias', ' por favor', ' usted', ' como', ' puede'],
    'french': [' Bonjour', ' merci', ' s\'il vous plaît', ' vous', 'comment'],
    'german': [' Hallo', ' danke', ' bitte', ' Sie', 'wie'],
    'italian': [' Ciao', ' grazie', ' per favore', ' lei', 'come']
}

def detect_language(text: str) -> str:
    """Simple language detection based on common words"""
    text_lower = text.lower()
    scores = {}
    
    for lang, patterns in LANGUAGE_PATTERNS.items():
        scores[lang] = sum(1 for p in patterns if p.lower() in text_lower)
    
    if max(scores.values()) > 0:
        return max(scores, key=scores.get)
    return 'english'

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🌐 Language Detector")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    portuguese_label = gmail_get_or_create_label_id('Language/Portuguese')
    spanish_label = gmail_get_or_create_label_id('Language/Spanish')
    
    lang_stats = {}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        lang = detect_language(f"{subject} {snippet}")
        
        if lang != 'english':
            lang_stats[lang] = lang_stats.get(lang, 0) + 1
            print(f"   🌍 {lang.title()} email from {sender[:20]}: {subject[:30]}")
            
            if not dry_run:
                label_id = portuguese_label if lang == 'portuguese' else spanish_label
                gmail_batch_modify({'ids': [msg['id']]}, addLabelIds=[label_id])
    
    print(f"✅ Detected languages: {dict(lang_stats)}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()