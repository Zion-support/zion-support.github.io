#!/usr/bin/env python3
"""
Response Style Matcher - Zion

Matches response style to recipient's preferences.
Formal/informal, bullet points, detailed, etc.

Usage:
  python3 response_style_matcher.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

STYLE_PATTERNS = {
    'formal': ['dear', 'regards', 'sincerely', 'mr.', 'ms.', 'phd'],
    'casual': ['hey', 'hi', 'thanks', 'cheers', 'talk soon'],
    'bullet_points': ['•', '-', '1.', '2.', 'key points'],
    'detailed': ['in detail', 'comprehensive', 'thoroughly', 'extensive']
}

def detect_style(snippet: str) -> dict:
    """Detect recipient's preferred communication style"""
    text = snippet.lower()
    
    style_scores = {}
    for style, patterns in STYLE_PATTERNS.items():
        style_scores[style] = sum(1 for p in patterns if p in text)
    
    # Default to balanced
    preferred = 'balanced'
    if style_scores['formal'] > style_scores['casual']:
        preferred = 'formal'
    elif style_scores['casual'] > style_scores['formal']:
        preferred = 'casual'
    
    return {
        'style': preferred,
        'confidence': min(1.0, sum(style_scores.values()) / 5),
        'use_bullets': style_scores['bullet_points'] > 0,
        'length': 'short' if 'brief' in text else 'detailed' if style_scores['detailed'] > 0 else 'medium'
    }

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🎨 Response Style Matcher")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    styles = {'formal': 0, 'casual': 0, 'balanced': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = detect_style(snippet)
        styles[result['style']] += 1
        
        emoji = '👔' if result['style'] == 'formal' else '👕' if result['style'] == 'casual' else '⚖️'
        bullets = '•' if result['use_bullets'] else '–'
        
        print(f"   {emoji} {result['style']}: {subject[:25]} ({bullets} {result['length']})")
    
    print(f"✅ Style detection: {dict(styles)}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()