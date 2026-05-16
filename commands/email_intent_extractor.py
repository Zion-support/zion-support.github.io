#!/usr/bin/env python3
"""
Email Intent Extractor - Zion

Extracts specific intent from emails to determine exact action.
Drives autonomous response behavior.

Usage:
  python3 email_intent_extractor.py --execute --limit 25
"""

import sys, json, re
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

INTENT_PATTERNS = {
    'schedule_meeting': [
        r'(?:let\'?s|can we|want to).*(?:meet|call|discuss|chat)',
        r'meeting.*(?:tuesday|monday|wednesday|thursday|friday)'
    ],
    'provide_info': [
        r'(?:need|want|send).*information',
        r'can you.*(?:share|send|provide)',
        r'(?:details|specs|docs).*(?:please|needed)'
    ],
    'get_approval': [
        r'(?:approve|sign|authorization).*needed',
        r'(?:can you|please).*approve',
        r'waiting.*approval'
    ],
    'follow_up': [
        r'(?:following up|checking in|circling back)',
        r'just checking.*status'
    ],
    'resolve_issue': [
        r'(?:issue|problem|bug|broken)',
        r'(?:not working|error|fail)'
    ]
}

def extract_intent(subject: str, body: str) -> dict:
    """Extract intent from email"""
    text = f"{subject} {body}".lower()
    
    for intent, patterns in INTENT_PATTERNS.items():
        for pattern in patterns:
            if re.search(pattern, text):
                return {'intent': intent, 'confidence': 0.9}
    
    return {'intent': 'general_inquiry', 'confidence': 0.5}

def cmd_run(dry_run: bool = False, limit: int = 25):
    print("🎯 Email Intent Extractor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    intents = {}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = extract_intent(subject, snippet)
        intent = result['intent']
        
        intents[intent] = intents.get(intent, 0) + 1
        print(f"   {intent}: {subject[:35]}")
    
    print(f"✅ Extracted intents: {dict(intents)}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()