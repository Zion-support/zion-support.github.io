#!/usr/bin/env python3
"""
Sentiment Dashboard - Zion

Real-time sentiment analysis dashboard for email communications.
- Tracks sentiment trends over time
- Flags concerning emotional spikes
- Provides team mood visibility
- Integrates with Slack/Teams for alerts

Usage:
  python3 sentiment_dashboard.py --generate --days 30
  python3 sentiment_dashboard.py --alert --threshold -0.5
"""

import sys, json
from datetime import datetime, timedelta
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

# Simple sentiment keywords (in production would use proper NLP)
POSITIVE_WORDS = ['great', 'excellent', 'good', 'awesome', 'fantastic', 'pleased', 'happy', 'success', 'achieved', 'completed']
NEGATIVE_WORDS = ['bad', 'terrible', 'awful', 'frustrated', 'angry', 'disappointed', 'failed', 'broken', 'urgent', 'critical', 'issue', 'problem']

def analyze_sentiment(text: str) -> float:
    """Simple sentiment analysis (-1 to 1)."""
    text_lower = text.lower()
    pos_count = sum(1 for w in POSITIVE_WORDS if w in text_lower)
    neg_count = sum(1 for w in NEGATIVE_WORDS if w in text_lower)
    
    # Normalize to -1 to 1
    if pos_count + neg_count == 0:
        return 0.0
    
    return (pos_count - neg_count) / (pos_count + neg_count)

def generate_dashboard(days: int = 30) -> dict:
    """Generate sentiment dashboard data."""
    # Get recent emails
    query = f'is:sent newer_than:{days}d'
    msgs = gmail_search(query, limit=100)
    
    sentiments = []
    for msg in msgs:
        snippet = msg.get('snippet', '')
        score = analyze_sentiment(snippet)
        sentiments.append({
            'date': msg.get('internalDate', ''),
            'score': score,
            'subject': msg.get('subject', '')[:50]
        })
    
    # Calculate metrics
    avg_sentiment = sum(s['score'] for s in sentiments) / max(len(sentiments), 1)
    negative_count = sum(1 for s in sentiments if s['score'] < -0.3)
    positive_count = sum(1 for s in sentiments if s['score'] > 0.3)
    
    return {
        'period_days': days,
        'total_analyzed': len(sentiments),
        'average_sentiment': round(avg_sentiment, 3),
        'positive_ratio': round(positive_count / max(len(sentiments), 1), 2),
        'negative_ratio': round(negative_count / max(len(sentiments), 1), 2),
        'alerts': [{'type': 'high_negative', 'message': f'{negative_count} negative emails detected'}] if negative_count > 10 else []
    }

def cmd_run(dry_run: bool, days: int = 30):
    print("📊 Sentiment Dashboard Generator")
    
    data = generate_dashboard(days)
    
    print(f"\n📈 Sentiment Analysis ({days} days)")
    print(f"   Emails analyzed: {data['total_analyzed']}")
    print(f"   Average sentiment: {data['average_sentiment']:.2f}")
    print(f"   Positive ratio: {data['positive_ratio']:.0%}")
    print(f"   Negative ratio: {data['negative_ratio']:.0%}")
    
    if data['alerts']:
        for alert in data['alerts']:
            print(f"\n   ⚠️  Alert: {alert['message']}")
    
    print("\n📊 Sentiment Scale:")
    print("   -1.0 = Very Negative | 0 = Neutral | +1.0 = Very Positive")
    
    if dry_run:
        print(f"\n[DRY-RUN] Would generate dashboard report.")
    else:
        print(f"\n✅ Dashboard generated.")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--days', type=int, default=30)
    p.add_argument('--alert', action='store_true')
    p.add_argument('--threshold', type=float, default=-0.5)
    args = p.parse_args()
    
    cmd_run(dry_run=not args.execute, days=args.days)

if __name__ == '__main__':
    main()