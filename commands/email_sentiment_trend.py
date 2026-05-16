#!/usr/bin/env python3
"""
Email Sentiment Trend Analyzer - Zion

Analyzes sentiment trends across email conversations.
Provides emotional intelligence insights.

Usage:
  python3 email_sentiment_trend.py --execute --limit 50
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

POSITIVE_WORDS = ['great', 'excellent', 'happy', 'pleased', 'success', 'thanks']
NEGATIVE_WORDS = ['frustrated', 'disappointed', 'urgent', 'concern', 'issue', 'problem']

def cmd_run(dry_run: bool, limit: int = 50):
    print("📊 Sentiment Trend Analyzer")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    sentiment = {'positive': 0, 'negative': 0, 'neutral': 0}
    
    for msg in msgs[:limit]:
        snippet = msg.get('snippet', '').lower()
        
        pos_count = sum(1 for w in POSITIVE_WORDS if w in snippet)
        neg_count = sum(1 for w in NEGATIVE_WORDS if w in snippet)
        
        if pos_count > neg_count:
            sentiment['positive'] += 1
        elif neg_count > pos_count:
            sentiment['negative'] += 1
        else:
            sentiment['neutral'] += 1
    
    print("Sentiment Breakdown:")
    for s, count in sentiment.items():
        print(f"  {s}: {count}")
    
    # Save analysis
    sent_file = WORKSPACE / 'zion.app' / 'data' / 'sentiment_trend.json'
    sent_file.parent.mkdir(parents=True, exist_ok=True)
    sent_file.write_text(json.dumps(sentiment, indent=2))
    
    print(f"\n✅ Saved sentiment analysis")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=50)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()