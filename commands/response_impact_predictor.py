#!/usr/bin/env python3
"""
Response Impact Predictor - Zion

Predicts the potential impact of different response types.
Choose responses that maximize business outcomes.

Usage:
  python3 response_impact_predictor.py --execute --limit 25
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

IMPACT_FACTORS = {
    'deal_value': ['contract', 'deal', 'offer', 'proposal', '$'],
    'relationship': ['trust', 'partnership', 'long-term', 'ongoing'],
    'urgency': ['urgent', 'deadline', 'asap', 'immediate'],
    'complexity': ['complicated', 'complex', 'multiple', 'stakeholders']
}

def predict_response_impact(subject: str, snippet: str) -> dict:
    """Predict impact of different response approaches"""
    text = f"{subject} {snippet}".lower()
    
    scores = {}
    for factor, keywords in IMPACT_FACTORS.items():
        scores[factor] = sum(1 for kw in keywords if kw in text)
    
    # Calculate total impact score
    total = sum(scores.values())
    
    if total >= 5:
        impact = 'HIGH'
        recommended = 'Detailed, personalized response'
    elif total >= 2:
        impact = 'MEDIUM'
        recommended = 'Standard professional response'
    else:
        impact = 'LOW'
        recommended = 'Brief acknowledgment'
    
    return {
        'impact_level': impact,
        'factors': dict(scores),
        'recommended_approach': recommended,
        'estimated_value': f"${total * 10000:,}" if total > 0 else "N/A"
    }

def cmd_run(dry_run: bool = False, limit: int = 25):
    print("📈 Response Impact Predictor")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    predictions = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = predict_response_impact(subject, snippet)
        predictions.append(result)
        
        emoji = '🔴' if result['impact_level'] == 'HIGH' else '🟡' if result['impact_level'] == 'MEDIUM' else '⚪'
        print(f"   {emoji} {result['impact_level']}: {subject[:25]} (${result['estimated_value']})")
    
    print(f"✅ Predicted impact for {len(predictions)} emails")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=25)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()