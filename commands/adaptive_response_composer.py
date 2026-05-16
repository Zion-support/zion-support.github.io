#!/usr/bin/env python3
"""
Adaptive Response Composer - Zion

Composes email responses that match sender's tone and style.
Uses personality matching for better engagement.

Usage:
  python3 adaptive_response_composer.py --execute --limit 15
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))

from google_workspace import gmail_search, gmail_get

def analyze_tone(text: str) -> str:
    """Analyze email tone"""
    text_lower = text.lower()
    
    # Count indicators
    formal = sum(1 for w in ['dear', 'regards', 'sincerely', 'best regards'] if w in text_lower)
    casual = sum(1 for w in ['hey', 'hi', 'thanks', 'cheers', 'talk soon'] if w in text_lower)
    urgent = sum(1 for w in ['urgent', 'asap', 'immediately', 'right away'] if w in text_lower)
    friendly = sum(1 for w in ['great', 'awesome', 'excited', 'happy'] if w in text_lower)
    
    if urgent > 1:
        return 'urgent'
    elif casual > formal:
        return 'casual'
    elif formal > casual:
        return 'formal'
    else:
        return 'neutral'

def compose_response(tone: str, original: str) -> str:
    """Generate tone-appropriate response"""
    templates = {
        'urgent': "I'm addressing this immediately and will have an update for you shortly.",
        'casual': "Thanks for reaching out! I'll get back to you soon with more details.",
        'formal': "Thank you for your message. I will review and respond with a comprehensive answer.",
        'neutral': "I've received your email and will respond with the appropriate information."
    }
    return templates.get(tone, templates['neutral'])

def cmd_run(dry_run: bool = False, limit: int = 15):
    print("✍️ Adaptive Response Composer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    composed = 0
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        tone = analyze_tone(f"{subject} {snippet}")
        response = compose_response(tone, snippet)
        
        print(f"   💬 {subject[:30]} | Tone: {tone}")
        
        composed += 1
    
    print(f"✅ Composed {composed} adaptive responses")
    
    # Save style data
    style_file = WORKSPACE / 'zion.app' / 'data' / 'response_styles.json'
    style_file.parent.mkdir(parents=True, exist_ok=True)
    style_file.write_text(json.dumps({'compositions': composed}, indent=2))

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()