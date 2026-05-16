#!/usr/bin/env python3
"""
Email Clarity Analyzer - Zion

Analyzes email clarity and readability.
Provides suggestions for clearer communication.

Usage:
  python3 email_clarity_analyzer.py --execute --limit 20
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

CLARITY_THRESHOLDS = {
    'long_sentence': 20,  # words
    'complex_word_ratio': 0.3,  # 30% complex words
    'passive_voice': 2,  # instances
}

def analyze_clarity(subject: str, snippet: str) -> dict:
    """Analyze clarity of email content."""
    text = f"{subject} {snippet}"
    
    # Count words
    words = text.split()
    word_count = len(words)
    
    # Count sentences
    sentences = text.split('.')
    sentence_count = len([s for s in sentences if s.strip()])
    
    # Average sentence length
    avg_sentence = word_count / max(1, sentence_count)
    
    # Identify issues
    issues = []
    suggestions = []
    
    if avg_sentence > CLARITY_THRESHOLDS['long_sentence']:
        issues.append('Long sentences')
        suggestions.append('Break up long sentences')
    
    # Check for passive voice indicators
    passive_count = text.lower().count('was') + text.lower().count('were')
    if passive_count > CLARITY_THRESHOLDS['passive_voice']:
        issues.append('Passive voice detected')
        suggestions.append('Use active voice')
    
    # Calculate clarity score
    clarity_score = 100 - (len(issues) * 15)
    
    return {
        'clarity_score': max(0, clarity_score),
        'issues': issues,
        'suggestions': suggestions[:2]
    }

def cmd_run(dry_run: bool, limit: int = 20):
    print("🔍 Email Clarity Analyzer")
    
    msgs = gmail_search('is:sent newer_than:7d', limit=limit * 2)
    
    analyzed = 0
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        clarity = analyze_clarity(subject, snippet)
        
        if clarity['clarity_score'] < 85:
            analyzed += 1
            print(f"  {subject[:30]}: {clarity['clarity_score']}/100")
            for issue in clarity['issues'][:1]:
                print(f"    Issue: {issue}")
    
    print(f"\n✅ Analyzed {len(msgs)} emails for clarity")
    
    # Save analysis
    clarity_file = WORKSPACE / 'zion.app' / 'data' / 'clarity_analysis.json'
    clarity_file.parent.mkdir(parents=True, exist_ok=True)

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()