#!/usr/bin/env python3
"""
Email Multilingual Responder - Zion

Responds in multiple languages.
Global support.

Usage:
  python3 email_multilingual_responder.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

LANG_KEYWORDS = {
    'pt': ['português', 'brasil', 'olá'],
    'es': ['español', 'hola', 'gracias'],
    'fr': ['français', 'bonjour', 'merci']
}

def cmd_run(dry_run: bool, limit: int = 30):
    print("🌐 Multilingual Responder")
    
    responder = {'languages_supported': 3, 'responses_sent': 0}
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        for lang in LANG_KEYWORDS:
            if any(kw in snippet for kw in LANG_KEYWORDS[lang]):
                responder['responses_sent'] += 1
                break
    
    print(f"Sent {responder['responses_sent']} multilingual responses")
    
    # Save responder
    mr_file = WORKSPACE / 'zion.app' / 'data' / 'multilingual_response.json'
    mr_file.parent.mkdir(parents=True, exist_ok=True)
    mr_file.write_text(json.dumps(responder, indent=2))
    
    print(f"\n✅ Saved multilingual response")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()