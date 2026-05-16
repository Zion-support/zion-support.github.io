#!/usr/bin/env python3
"""
AI Tone Matcher - Zion

Matches response tone to previous conversation patterns.
Maintains consistent communication style per contact.

Usage:
  python3 ai_tone_matcher.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def detect_tone(subject: str, snippet: str) -> dict:
    """Detect required tone from content"""
    text = f"{subject} {snippet}".lower()
    
    tone_indicators = {
        'formal': ['dear', 'regards', 'sincerely', 'mr', 'ms'],
        'casual': ['hey', 'hi', 'thanks', 'cheers', 'talk soon'],
        'assertive': ['need', 'must', 'require', 'mandatory'],
        'collaborative': ['together', 'partner', 'team', 'collaborate'],
        'apologetic': ['sorry', 'apologize', 'regret', 'mistake']
    }
    
    scores = {tone: sum(1 for ind in indicators if ind in text)
              for tone, indicators in tone_indicators.items()}
    
    detected = max(scores, key=scores.get) if max(scores.values()) > 0 else 'neutral'
    
    return {
        'tone': detected,
        'confidence': scores[detected] / len(tone_indicators[detected]) if detected != 'neutral' else 0.5,
        'style_guide': 'Use first name, avoid titles' if detected == 'casual' else 'Use formal language, proper titles'
    }

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🎭 AI Tone Matcher")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    tones = {}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = detect_tone(subject, snippet)
        tones[result['tone']] = tones.get(result['tone'], 0) + 1
        
        print(f"   🎯 {result['tone']}: {subject[:25]}")
    
    print(f"✅ Tone distribution: {dict(tones)}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()