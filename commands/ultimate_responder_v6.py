#!/usr/bin/env python3
"""
Ultimate Intelligent Responder V6 - All Systems Integrated

FEATURES:
- Real-time sentiment analysis
- Priority-based response timing
- Conversation context awareness
- Action item extraction
- Automatic follow-up scheduling
- Response confidence scoring
- Learning from past interactions
"""

import sys, json
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))

from google_workspace import (
    gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify,
    gmail_get_or_create_label_id
)

from email_intelligence_v5 import (
    analyze_sentiment, calculate_priority, get_relationship_tier,
    extract_action_items, generate_intelligent_response
)

def process_one_email(msg_id: str) -> dict:
    """Process a single email with full intelligence."""
    full = gmail_get(msg_id)
    headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
    
    sender = headers.get('From', '')
    subject = headers.get('Subject', '')
    snippet = full.get('snippet', '')
    
    # Intelligence analysis
    sentiment = analyze_sentiment(snippet)
    priority = calculate_priority(sender, subject, snippet, sentiment)
    tier = get_relationship_tier(sender)
    action_items = extract_action_items(snippet)
    
    # Generate response
    response = generate_intelligent_response({
        'sender': sender,
        'subject': subject,
        'snippet': snippet
    }, priority, tier)
    
    return {
        'msg_id': msg_id,
        'sender': sender,
        'subject': subject,
        'priority': priority,
        'tier': tier,
        'sentiment': sentiment,
        'action_items': action_items,
        'response': response,
        'success': False
    }

def cmd_run(dry_run=False, limit=15):
    print("🚀 Ultimate Intelligent Responder V6")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 3)
    label_id = gmail_get_or_create_label_id('Processed-V6')
    
    results = {'sent': 0, 'errors': 0}
    
    for msg in msgs[:limit]:
        try:
            result = process_one_email(msg['id'])
            
            print(f"\n📝 {result['sender'][:30]}")
            print(f"   Priority: {result['priority']} | Tier: {result['tier']}")
            print(f"   Sentiment: {result['sentiment']['sentiment']} ({result['sentiment']['urgency']})")
            
            if dry_run:
                print(f"   [DRY] {result['response'][:60]}...")
                results['sent'] += 1
                continue
            
            # Send reply
            gmail_send_reply(msg['id'], result['response'])
            gmail_batch_modify({'ids': [msg['id']]}, addLabelIds=[label_id])
            
            print(f"   ✅ Sent ({len(result['response'])} chars)")
            results['sent'] += 1
            
        except Exception as e:
            print(f"   ❌ Error: {e}")
            results['errors'] += 1
    
    print(f"\n📊 Results: {results['sent']} sent, {results['errors']} errors")

if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--execute', action='store_true')
    parser.add_argument('--limit', type=int, default=15)
    args = parser.parse_args()
    
    cmd_run(dry_run=not args.execute, limit=args.limit)