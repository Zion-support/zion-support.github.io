#!/usr/bin/env python3
"""
Email Subject Line Predictor - Zion

Predicts the best subject lines for replies based on context.
Improves open rates and engagement.

Usage:
  python3 subject_line_predictor.py --execute --limit 20
"""

import sys, json, re
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

SUBJECT_TEMPLATES = {
    'meeting': [
        "Re: {original} - Confirming {day}",
        "Meeting Confirmation: {topic}",
        "Quick Call to Discuss {topic}",
        "Let's Connect: {day} at {time}"
    ],
    'decision': [
        "Action Required: {topic}",
        "Decision Needed on {topic}",
        "Your Input Requested: {topic}",
        "Quick Approval: {topic}"
    ],
    'information': [
        "Requested Info: {topic}",
        "Following Up: {topic}",
        "As Promised: {topic}",
        "Quick Update on {topic}"
    ],
    'sales': [
        "Following Up: {original}",
        "Next Steps: {original}",
        "Proposal Ready: {topic}",
        "Quick Update on {topic}"
    ]
}

def predict_subject(intent: str, original_subject: str) -> str:
    templates = SUBJECT_TEMPLATES.get(intent, SUBJECT_TEMPLATES['information'])
    template = templates[0]
    
    # Extract key topic
    words = original_subject.replace('Re:', '').replace('Fwd:', '').split()
    topic = ' '.join([w for w in words if len(w) > 3][:3])
    
    result = template.format(
        original=original_subject[:20],
        topic=topic[:15],
        day='today',
        time='2pm'
    )
    return result[:50]

def cmd_run(dry_run: bool = False, limit: int = 20):
    print("📝 Subject Line Predictor")
    
    msgs = gmail_search('label:sent', limit=limit * 2)
    
    predictions = []
    
    for msg in msgs[:limit]:
        headers = msg.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        
        # Predict based on content
        text = subject.lower()
        if 'meeting' in text or 'call' in text:
            predicted = predict_subject('meeting', subject)
        elif 'approve' in text or 'decision' in text:
            predicted = predict_subject('decision', subject)
        elif 'proposal' in text or 'deal' in text:
            predicted = predict_subject('sales', subject)
        else:
            predicted = predict_subject('information', subject)
        
        predictions.append({
            'original': subject[:40],
            'predicted': predicted
        })
    
    # Save predictions
    pred_file = WORKSPACE / 'zion.app' / 'data' / 'subject_predictions.json'
    pred_file.parent.mkdir(parents=True, exist_ok=True)
    pred_file.write_text(json.dumps(predictions[-100:], indent=2))
    
    print(f"✅ Predicted subjects for {len(predictions)} emails")
    if predictions:
        print(f"   Example: '{predictions[0]['original'][:30]}' → '{predictions[0]['predicted']}'")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()