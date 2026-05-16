#!/usr/bin/env python3
"""
Email Language Detector - Zion

Detects languages.
Multilingual support.

Usage:
  python3 email_language_detector.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

LANGUAGES = {
    'portuguese': ['olá', 'obrigado', 'por favor', 'você', 'como', 'quero'],
    'spanish': ['hola', 'gracias', 'por favor', 'usted', 'como', 'quiero'],
    'french': ['bonjour', 'merci', 's\'il vous plaît', 'vous', 'comment', 'veux'],
    'german': ['hallo', 'danke', 'bitte', 'sie', 'wie', 'möchten']
}

def cmd_run(dry_run: bool, limit: int = 25):
    print("🌐 Language Detector")
    
    detector = {lang: 0 for lang in LANGUAGES}
    detector['english'] = 0
    detector['languages_detected'] = 0
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        detected = False
        for lang, keywords in LANGUAGES.items():
            if any(kw in snippet for kw in keywords):
                detector[lang] += 1
                detected = True
                break
        
        if not detected:
            detector['english'] += 1
        
        detector['languages_detected'] += 1
    
    print("Languages detected:")
    for lang, count in detector.items():
        if lang != 'languages_detected' and count > 0:
            print(f"  {lang}: {count}")
    
    # Save detector
    ld_file = WORKSPACE / 'zion.app' / 'data' / 'language_detection.json'
    ld_file.parent.mkdir(parents=True, exist_ok=True)
    ld_file.write_text(json.dumps(detector, indent=2))
    
    print(f"\n✅ Saved language detection")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()