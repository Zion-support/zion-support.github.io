#!/usr/bin/env python3
"""
AI Negotiation Bot - Zion

Handles price negotiations autonomously via email.
Uses psychology principles to optimize deal terms.

Usage:
  python3 ai_negotiation_bot.py --execute --limit 15
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

NEGOTIATION_SIGNALS = {
    'price_objection': ['too expensive', 'budget', 'cost', 'afford', 'tight budget', 'cheaper'],
    'value_question': ['roi', 'value', 'benefit', 'worth', 'return', 'justification'],
    'timeline_pressure': ['hurry', 'urgent', 'limited time', 'offer expires', 'deadline'],
    'competitive_pressure': ['competitor', 'alternative', 'other option', 'switching']
}

def analyze_negotiation(subject: str, snippet: str) -> dict:
    """Analyze negotiation position"""
    text = f"{subject} {snippet}".lower()
    
    signals = {}
    for signal, keywords in NEGOTIATION_SIGNALS.items():
        signals[signal] = any(kw in text for kw in keywords)
    
    active_signals = [s for s, detected in signals.items() if detected]
    
    strategy = 'standard'
    if 'price_objection' in active_signals:
        strategy = 'value_positioning'
    elif 'timeline_pressure' in active_signals:
        strategy = 'urgency_creation'
    elif 'competitive_pressure' in active_signals:
        strategy = 'differentiation'
    
    return {
        'signals': active_signals,
        'strategy': strategy,
        'recommended_action': 'Send negotiation counter-offer' if strategy != 'standard' else 'Proceed with standard offer'
    }

def cmd_run(dry_run: bool = False, limit: int = 15):
    print("🤝 AI Negotiation Bot")
    
    msgs = gmail_search('label:inbox is:unread ("price" OR "cost" OR "budget" OR "negotiat")', limit=limit * 2)
    
    negotiations = []
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        result = analyze_negotiation(subject, snippet)
        negotiations.append(result)
        
        emoji = '🤝' if result['strategy'] != 'standard' else '💬'
        print(f"   {emoji} {result['strategy']}: {subject[:28]}")
    
    print(f"✅ Analyzed {len(negotiations)} negotiation opportunities")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()