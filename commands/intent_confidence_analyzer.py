#!/usr/bin/env python3
"""
Email Intent Confidence Analyzer - Zion

Analyzes how certain the system is about email intent.
Only responds when confidence > threshold.

Usage:
  python3 intent_confidence_analyzer.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

CONFIDENCE_THRESHOLDS = {
    'HIGH': 0.85,
    'MEDIUM': 0.60,
    'LOW': 0.0
}

def calculate_confidence(subject: str, snippet: str) -> dict:
    """Calculate confidence in understanding intent"""
    text = f"{subject} {snippet}".lower()
    
    confidence = 0.5
    reasons = []
    
    # Clear action words boost confidence
    if any(kw in text for kw in ['please', 'need', 'want', 'give me']):
        confidence += 0.2
        reasons.append('clear_request')
    
    # Questions are usually clear
    if '?' in text:
        confidence += 0.15
        reasons.append('question_detected')
    
    # Vague language reduces confidence
    vague_words = ['maybe', 'possibly', 'think', 'consider', 'perhaps']
    if any(kw in text for kw in vague_words):
        confidence -= 0.2
        reasons.append('vague_language')
    
    # Subject line clarity
    if len(subject.split()) >= 3:
        confidence += 0.1
        reasons.append('detailed_subject')
    
    confidence = max(0.1, min(1.0, confidence))
    
    level = 'HIGH' if confidence >= CONFIDENCE_THRESHOLDS['HIGH'] else 'MEDIUM' if confidence >= CONFIDENCE_THRESHOLDS['MEDIUM'] else 'LOW'
    
    return {
        'confidence': round(confidence, 2),
        'level': level,
        'should_respond': confidence >= 0.6,
        'reasons': reasons
    }

def cmd_run(dry_run: bool = False, limit: int = 25):
    print("🎯 Intent Confidence Analyzer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    confidence_stats = {'HIGH': 0, 'MEDIUM': 0, 'LOW': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = calculate_confidence(subject, snippet)
        confidence_stats[result['level']] += 1
        
        emoji = '✅' if result['level'] == 'HIGH' else '⚠️' if result['level'] == 'MEDIUM' else '🛑'
        action = 'RESPOND' if result['should_respond'] else 'SNOOZE'
        
        print(f"   {emoji} {result['level']} ({result['confidence']}): {subject[:25]} → {action}")
    
    print(f"✅ Confidence analysis: {dict(confidence_stats)}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()