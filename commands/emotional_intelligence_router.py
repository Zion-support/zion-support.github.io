#!/usr/bin/env python3
"""
Emotional Intelligence Router - Zion

Detects frustration/satisfaction in emails.
Adapts response tone accordingly.

Usage:
  python3 emotional_intelligence_router.py --execute --limit 35
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

EMOTIONS = {
    'frustrated': ['frustrated', 'annoyed', 'angry', 'disappointed'],
    'satisfied': ['happy', 'pleased', 'great', 'excellent', 'thank'],
    'neutral': []
}

def cmd_run(dry_run: bool = False, limit: int = 35):
    print("😊 Emotional Intelligence Router")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    emotions = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        text = f"{subject} {snippet}".lower()
        
        emotion = 'neutral'
        confidence = 0.7
        
        for emo, keywords in EMOTIONS.items():
            if any(kw in text for kw in keywords):
                emotion = emo
                confidence = 0.9
                break
        
        emotions.append({'sender': sender[:25], 'emotion': emotion, 'confidence': confidence})
        emoji = '😠' if emotion == 'frustrated' else '😊' if emotion == 'satisfied' else '😐'
        print(f"   {emoji} {emotion} ({confidence:.0%}): {sender[:18]}")
    
    print(f"✅ Detected emotions for {len(emotions)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=35)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()