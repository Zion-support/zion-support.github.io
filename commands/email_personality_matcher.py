#!/usr/bin/env python3
"""
Email Personality Matcher - Zion

Learns writing style from sent emails and adapts responses.
Matches tone, formality, and communication patterns.

Usage:
  python3 email_personality_matcher.py --execute --limit 100
"""

import sys, json
from pathlib import Path
import re
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

def analyze_style(text: str) -> dict:
    """Analyze writing style from text"""
    text_lower = text.lower()
    
    # Formality
    formal_words = ['dear', 'regards', 'sincerely', 'please', 'thank you', 'appreciate']
    casual_words = ['hey', 'hi', 'thanks', 'cheers', 'gonna', 'wanna']
    
    formal_score = sum(1 for w in formal_words if w in text_lower)
    casual_score = sum(1 for w in casual_words if w in text_lower)
    
    # Sentence length
    sentences = re.split(r'[.!?]+', text)
    avg_len = sum(len(s.split()) for s in sentences if s) / max(len([s for s in sentences if s]), 1)
    
    # Question frequency
    question_count = text.count('?')
    
    return {
        'formality': 'formal' if formal_score > casual_score else 'casual' if casual_score > 0 else 'neutral',
        'avg_sentence_length': avg_len,
        'question_ratio': question_count / max(len(sentences), 1),
        'exclamation_count': text.count('!')
    }

def cmd_run(dry_run: bool = False, limit: int = 100):
    print("🎭 Personality Matcher")
    
    msgs = gmail_search('label:sent', limit=limit * 2)
    
    styles = []
    senders = {}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '')
        
        style = analyze_style(snippet)
        styles.append(style)
        
        # Track sender-specific patterns
        headers = full.get('payload', {}).get('headers', [])
        to_hdr = next((h['value'] for h in headers if h['name'] == 'To'), '')
        
        for email in to_hdr.replace(',', ' ').split():
            if '@' in email:
                if email not in senders:
                    senders[email] = {'styles': [], 'preferences': {}}
                senders[email]['styles'].append(style)
    
    # Aggregate preferences
    for email, data in senders.items():
        if data['styles']:
            avg_formal = sum(1 for s in data['styles'] if s['formality'] == 'formal') / len(data['styles'])
            data['preferences']['prefers_formal'] = avg_formal > 0.5
    
    # Save preferences
    pref_file = WORKSPACE / 'zion.app' / 'data' / 'personality_preferences.json'
    pref_file.parent.mkdir(parents=True, exist_ok=True)
    pref_file.write_text(json.dumps(senders, indent=2))
    
    print(f"✅ Analyzed {len(styles)} emails")
    print(f"✅ Learned preferences for {len(senders)} contacts")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=100)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()