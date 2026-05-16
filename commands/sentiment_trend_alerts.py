#!/usr/bin/env python3
"""
Sentiment Trend Alerts - Zion

Watches relationship sentiment and alerts on negative trends.
Prevents relationship deterioration.

Usage:
  python3 sentiment_trend_alerts.py --execute --limit 40
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, telegram_send

NEGATIVE_WORDS = ['frustrated', 'angry', 'disappointed', 'unhappy', 'concerned', 'worried', 'issue', 'problem', 'annoyed']
POSITIVE_WORDS = ['great', 'excellent', 'happy', 'pleased', 'thank', 'appreciate', 'good', 'love']

def calculate_sentiment(text: str) -> float:
    text_lower = text.lower()
    pos = sum(1 for w in POSITIVE_WORDS if w in text_lower)
    neg = sum(1 for w in NEGATIVE_WORDS if w in text_lower)
    return pos - neg

def cmd_run(dry_run: bool = False, limit: int = 40):
    print("⚠️ Sentiment Trend Alerts")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    negative_emails = []
    total_score = 0
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        snippet = full.get('snippet', '')
        
        score = calculate_sentiment(f"{subject} {snippet}")
        total_score += score
        
        if score < 0:
            negative_emails.append({
                'sender': sender[:30],
                'subject': subject[:40],
                'score': score
            })
    
    avg_score = total_score / max(len(msgs), 1)
    
    print(f"Average sentiment: {avg_score:.2f}")
    print(f"Negative emails: {len(negative_emails)}")
    
    # Alert if multiple negative emails
    if len(negative_emails) > 2:
        alert_msg = f"🚨 Sentiment Alert: {len(negative_emails)} negative emails detected! Average: {avg_score:.1f}"
        if not dry_run:
            telegram_send(alert_msg)
        print(f"   {alert_msg}")
        
        for e in negative_emails[:3]:
            print(f"   ⚠️ {e['sender']}: {e['subject']}")
    
    # Save sentiment data
    sent_file = WORKSPACE / 'zion.app' / 'data' / 'sentiment_trend.json'
    sent_file.parent.mkdir(parents=True, exist_ok=True)
    
    current = {'avg_score': avg_score, 'negative_count': len(negative_emails), 'emails': negative_emails}
    sent_file.write_text(json.dumps(current, indent=2))
    
    print("✅ Sentiment trend analysis complete")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=40)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()