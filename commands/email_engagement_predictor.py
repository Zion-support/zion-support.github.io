#!/usr/bin/env python3
"""
Email Engagement Predictor - Zion

Predicts engagement likelihood for outgoing emails.
Helps optimize send timing and content.

Usage:
  python3 email_engagement_predictor.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get
import random

ENGAGEMENT_FACTORS = {
    'subject_length_optimal': (30, 50),  # characters
    'question_markers': ['?', 'how', 'what', 'when', 'help'],
    'action_words': ['please', 'confirm', 'review', 'approve', 'sign'],
    'emoji_boost': 0.2,  # 20% boost if emoji in subject
}

def predict_engagement(subject: str, snippet: str) -> dict:
    """Predict engagement score for email."""
    text = f"{subject} {snippet}"
    
    score = 50  # Base score
    
    # Subject length
    if 30 <= len(subject) <= 50:
        score += 10
    elif len(subject) < 30 or len(subject) > 70:
        score -= 5
    
    # Question markers
    if any(marker in text.lower() for marker in ENGAGEMENT_FACTORS['question_markers']):
        score += 10
    
    # Action words
    if any(word in text.lower() for word in ENGAGEMENT_FACTORS['action_words']):
        score += 8
    
    # Emoji boost
    emoji_count = sum(1 for c in subject if ord(c) > 127)
    if emoji_count > 0:
        score += int(ENGAGEMENT_FACTORS['emoji_boost'] * 100)
    
    # Clamp score
    score = max(0, min(100, score))
    
    return {
        'engagement_score': score,
        'prediction': 'high' if score > 70 else ('medium' if score > 40 else 'low')
    }

def cmd_run(dry_run: bool, limit: int = 30):
    print("🔮 Email Engagement Predictor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    predictions = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        pred = predict_engagement(subject, snippet)
        predictions.append({
            'subject': subject[:40],
            'score': pred['engagement_score'],
            'prediction': pred['prediction']
        })
    
    # Group by prediction
    groups = {'high': [], 'medium': [], 'low': []}
    for p in predictions:
        groups[p['prediction']].append(p['subject'])
    
    print(f"Engagement predictions:")
    print(f"  High: {len(groups['high'])}")
    print(f"  Medium: {len(groups['medium'])}")
    print(f"  Low: {len(groups['low'])}")
    
    for subject in groups['high'][:3]:
        print(f"    ⭐ {subject}")
    
    # Save predictions
    pred_file = WORKSPACE / 'zion.app' / 'data' / 'engagement_predictions.json'
    pred_file.parent.mkdir(parents=True, exist_ok=True)
    pred_file.write_text(json.dumps(predictions, indent=2))
    
    print(f"\n✅ Saved engagement predictions")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()