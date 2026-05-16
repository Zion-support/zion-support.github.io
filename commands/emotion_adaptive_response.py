#!/usr/bin/env python3
"""
Emotion-Adaptive Response Generator - Zion

Generates responses that match sender's emotional state.
De-escalates tension, amplifies positive energy.

Usage:
  python3 emotion_adaptive_response.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

TONE_TEMPLATES = {
    'frustrated': "I understand your frustration with {topic}. Let me help resolve this quickly.",
    'concerned': "Thank you for raising this concern. Here's how we can address it:",
    'urgent': "I'm on this right away. Here's the immediate action:",
    'happy': "Great to hear! I'm glad {topic} is working well.",
    'neutral': "Thank you for your email. Regarding {topic}:",
    'default': "Thank you for your message. Let me address your points:"
}

def cmd_run(dry_run: bool = False, limit: int = 20):
    print("🎭 Emotion-Adaptive Response Generator")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    generated = 0
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        # Detect basic emotion
        text = f"{subject} {snippet}".lower()
        
        if any(kw in text for kw in ['frustrated', 'annoyed', 'issue', 'problem']):
            tone = 'frustrated'
        elif any(kw in text for kw in ['urgent', 'asap', 'deadline']):
            tone = 'urgent'
        elif any(kw in text for kw in ['excited', 'great', 'amazing']):
            tone = 'happy'
        else:
            tone = 'neutral'
        
        template = TONE_TEMPLATES.get(tone, TONE_TEMPLATES['default'])
        topic = subject.split()[0] if subject else 'your request'
        
        response_start = template.format(topic=topic[:20])
        
        print(f"   🎯 {tone}: {response_start[:40]}...")
        generated += 1
    
    print(f"✅ Generated {generated} adaptive responses")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()