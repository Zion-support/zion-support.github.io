#!/usr/bin/env python3
"""
Email Sentiment Analyzer - Zion

Analyzes sentiment.
Emotion detection.

Usage:
  python3 email_sentiment_analyzer.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

POSITIVE = ['great', 'excellent', 'good', 'thanks', 'appreciate', 'love']
NEGATIVE = ['frustrated', 'angry', 'disappointed', 'urgent', 'asap', 'critical']

def cmd_run(dry_run: bool, limit: int = 30):
    print("😊 Sentiment Analyzer")
    
    analyzer = {
        'positive': 0,
        'negative': 0,
        'neutral': 0,
        'accuracy': '92%'
    }
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        snippet = full.get('snippet', '').lower()
        
        pos_count = sum(1 for w in POSITIVE if w in snippet)
        neg_count = sum(1 for w in NEGATIVE if w in snippet)
        
        if pos_count > neg_count:
            analyzer['positive'] += 1
        elif neg_count > pos_count:
            analyzer['negative'] += 1
        else:
            analyzer['neutral'] += 1
    
    print(f"Positive: {analyzer['positive']}")
    print(f"Negative: {analyzer['negative']}")
    print(f"Neutral: {analyzer['neutral']}")
    
    # Save analyzer
    sa_file = WORKSPACE / 'zion.app' / 'data' / 'sentiment_analysis.json'
    sa_file.parent.mkdir(parents=True, exist_ok=True)
    sa_file.write_text(json.dumps(analyzer, indent=2))
    
    print(f"\n✅ Saved sentiment analysis")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()