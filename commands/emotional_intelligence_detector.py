#!/usr/bin/env python3
"""
Emotional Intelligence Detector - Zion

Detects sender's emotional state from email content.
Adapts response tone to match or improve mood.

Usage:
  python3 emotional_intelligence_detector.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

EMOTION_PATTERNS = {
    'frustrated': ['frustrated', 'annoyed', 'irritated', 'confused', 'stuck', 'can\'t', 'won\'t work'],
    'excited': ['excited', 'amazing', 'awesome', 'love', 'great', 'fantastic', 'excellent'],
    'concerned': ['worried', 'concerned', 'issue', 'problem', 'trouble', 'difficult'],
    'happy': ['happy', 'pleased', 'satisfied', 'thank', 'appreciate', 'good'],
    'urgent': ['urgent', 'asap', 'immediately', 'critical', 'emergency', 'deadline'],
    'neutral': []
}

def detect_emotion(subject: str, snippet: str) -> dict:
    """Detect emotional state from email"""
    text = f"{subject} {snippet}".lower()
    
    scores = {}
    for emotion, keywords in EMOTION_PATTERNS.items():
        scores[emotion] = sum(1 for kw in keywords if kw in text)
    
    detected = max(scores, key=scores.get) if max(scores.values()) > 0 else 'neutral'
    confidence = scores[detected] / len(EMOTION_PATTERNS[detected]) if detected != 'neutral' else 0.5
    
    return {
        'emotion': detected,
        'confidence': round(confidence, 2),
        'recommended_tone': 'empathetic' if detected in ['frustrated', 'concerned'] else 'positive' if detected == 'happy' else 'professional'
    }

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("😊 Emotional Intelligence Detector")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    emotions = {}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = detect_emotion(subject, snippet)
        emotions[result['emotion']] = emotions.get(result['emotion'], 0) + 1
        
        emoji = '🔴' if result['emotion'] == 'frustrated' else '😊' if result['emotion'] == 'happy' else '⚠️' if result['emotion'] == 'concerned' else '⚡' if result['emotion'] == 'urgent' else '😐'
        print(f"   {emoji} {result['emotion']}: {subject[:28]}")
    
    print(f"✅ Emotional analysis: {dict(emotions)}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()