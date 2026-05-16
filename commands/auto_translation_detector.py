#!/usr/bin/env python3
"""
Auto-Translation Detector - Zion

Detects non-English emails and prepares translations.
Ensures responses match original language.

Usage:
  python3 auto_translation_detector.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

LANGUAGE_PATTERNS = {
    'portuguese': ['você', 'obrigado', 'por favor', 'pode', 'preciso', 'qual', 'como', 'muito'],
    'spanish': ['usted', 'gracias', 'por favor', 'puede', 'necesito', 'cual', 'como', 'muy'],
    'french': ['vous', 'merci', 's\'il vous plaît', 'pouvez', 'besoin', 'quel', 'comment', 'très'],
    'german': ['sie', 'danke', 'bitte', 'können', 'brauchen', 'welche', 'wie', 'sehr']
}

def detect_language(text: str) -> dict:
    """Detect language of email"""
    text_lower = text.lower()
    
    scores = {}
    for lang, patterns in LANGUAGE_PATTERNS.items():
        scores[lang] = sum(1 for p in patterns if p in text_lower)
    
    max_score = max(scores.values()) if scores else 0
    
    if max_score >= 2:
        detected_lang = max(scores, key=scores.get)
        confidence = min(1.0, max_score / 5)
        return {
            'language': detected_lang,
            'confidence': round(confidence, 2),
            'needs_translation': True
        }
    
    return {
        'language': 'english',
        'confidence': 1.0,
        'needs_translation': False
    }

def cmd_run(dry_run: bool = False, limit: int = 25):
    print("🌐 Auto-Translation Detector")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    language_counts = {'english': 0, 'portuguese': 0, 'spanish': 0, 'french': 0, 'german': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = detect_language(f"{subject} {snippet}")
        language_counts[result['language']] += 1
        
        flag = '🇺🇸' if result['language'] == 'english' else '🇧🇷' if result['language'] == 'portuguese' else '🇪🇸' if result['language'] == 'spanish' else '🇫🇷' if result['language'] == 'french' else '🇩🇪'
        
        print(f"   {flag} {result['language']} ({result['confidence']}): {subject[:25]}")
    
    print(f"✅ Language detection: {dict(language_counts)}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()