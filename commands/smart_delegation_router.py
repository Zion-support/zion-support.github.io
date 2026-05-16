#!/usr/bin/env python3
"""
Smart Delegation Router - Zion

Routes emails to human when LLM confidence is low.
Prevents incorrect automated responses.

Usage:
  python3 smart_delegation_router.py --execute --limit 30
"""

import sys, json
from pathlib import Path
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_get_or_create_label_id, gmail_batch_modify, telegram_send

CONFIDENCE_THRESHOLDS = {
    'high': 0.85,    # Auto-reply safe
    'medium': 0.60,  # Review suggested
    'low': 0.0        # Escalate to human
}

def calculate_confidence(subject: str, snippet: str) -> float:
    """Calculate confidence score for automated reply"""
    score = 0.5  # Base
    
    # Questions usually have clear intent
    if '?' in subject or '?' in snippet:
        score += 0.2
    
    # Specific requests
    request_words = ['need', 'want', 'please', 'can you', 'would you']
    for word in request_words:
        if word in snippet.lower():
            score += 0.1
            break
    
    # Ambiguous content reduces confidence
    ambiguous = ['maybe', 'possibly', 'not sure', 'think', 'consider']
    for word in ambiguous:
        if word in snippet.lower():
            score -= 0.15
    
    return max(0.1, min(1.0, score))

def cmd_run(dry_run: bool = False, limit: int = 30):
    print("🔄 Smart Delegation Router")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    escalate_label = gmail_get_or_create_label_id('Escalate-to-Human')
    
    routed = {'high_confidence': 0, 'medium_confidence': 0, 'low_confidence': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        
        confidence = calculate_confidence(subject, snippet)
        
        if confidence >= CONFIDENCE_THRESHOLDS['high']:
            routed['high_confidence'] += 1
            print(f"   ✅ HIGH: {subject[:30]} (conf: {confidence:.2f})")
        elif confidence >= CONFIDENCE_THRESHOLDS['medium']:
            routed['medium_confidence'] += 1
            print(f"   ⚠️ MEDIUM: {subject[:30]} (conf: {confidence:.2f})")
        else:
            routed['low_confidence'] += 1
            print(f"   🚨 LOW: {subject[:30]} (conf: {confidence:.2f}) - Escalation recommended")
            
            if not dry_run:
                gmail_batch_modify({'ids': [msg['id']]}, addLabelIds=[escalate_label])
                telegram_send(f"🚨 Low confidence email needs human review: {sender[:30]}")
    
    print(f"✅ Confidence routing: {routed}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=30)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()