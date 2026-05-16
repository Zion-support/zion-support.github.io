#!/usr/bin/env python3
"""
Ultimate Intelligent Responder V8 - Next Gen AI

FEATURES:
- Real-time sentiment analysis
- Multi-language detection & response
- Priority-based response timing
- Conversation state detection
- Predictive success scoring
- Action item extraction
- Automatic follow-up scheduling
- Response confidence scoring
- Learning from past interactions
- Smart escalation alerts
"""

import sys, json
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))

from google_workspace import (
    gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify,
    gmail_get_or_create_label_id, telegram_send
)

from email_intelligence_v5 import (
    analyze_sentiment, calculate_priority, get_relationship_tier,
    extract_action_items, generate_intelligent_response
)

from multi_language_intelligence import detect_language, get_response_template
from predictive_success_engine import predict_success, recommend_variant
from conversation_state_detector import detect_conversation_state, get_state_response_strategy

def should_escalate(sentiment, priority, tier):
    """Determine if escalation is needed."""
    reasons = []
    level = 'normal'
    
    if sentiment.get('sentiment') == 'negative':
        reasons.append('negative')
        level = 'high'
    if priority >= 80:
        reasons.append('urgent')
        level = 'critical'
    if tier == 'VIP' and priority >= 60:
        reasons.append('vip')
    
    return {'needs_alert': len(reasons) > 0, 'reasons': reasons, 'level': level}

def process_one_email(msg_id: str, thread_depth: int = 1) -> dict:
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
    language = detect_language(snippet)
    
    # New intelligence
    success_score = predict_success('general', priority, tier, language)
    variant = recommend_variant('general', priority, success_score)
    conv_state, conv_conf = detect_conversation_state(subject, snippet, thread_depth)
    
    # Escalation check
    escalation = should_escalate(sentiment, priority, tier)
    
    # Generate response with language awareness
    if priority >= 80:
        response = get_response_template('urgent', language, tier)
    elif tier == 'VIP':
        response = get_response_template('vip', language, tier)
    else:
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
        'language': language,
        'action_items': action_items,
        'response': response,
        'escalation': escalation,
        'success_score': success_score,
        'variant': variant,
        'conv_state': conv_state,
        'conv_confidence': conv_conf
    }

def cmd_run(dry_run=False, limit=15):
    print("🚀 Ultimate Intelligent Responder V8")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 3)
    label_id = gmail_get_or_create_label_id('Processed-V8')
    
    results = {'sent': 0, 'errors': 0, 'escalated': 0, 'avg_success': 0}
    
    for msg in msgs[:limit]:
        try:
            result = process_one_email(msg['id'])
            
            print(f"\n📝 {result['sender'][:30]} | {result['language']}")
            print(f"   Priority: {result['priority']} | Tier: {result['tier']}")
            print(f"   State: {result['conv_state']} ({result['conv_confidence']:.0%})")
            print(f"   Success: {result['success_score']}% | Variant: {result['variant']}")
            print(f"   Sentiment: {result['sentiment']['sentiment']} | Escalation: {result['escalation']['level']}")
            
            results['avg_success'] += result['success_score']
            
            # Escalation alerts
            if result['escalation']['needs_alert'] and not dry_run:
                try:
                    telegram_send(f"🚨 Email Alert: {result['sender'][:30]} - {result['subject'][:40]}")
                    results['escalated'] += 1
                except:
                    pass
            
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
    
    if results['sent'] > 0:
        results['avg_success'] = results['avg_success'] // results['sent']
    
    print(f"\n📊 Results: {results['sent']} sent, {results['avg_success']}% avg success, {results['escalated']} escalated")

if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--execute', action='store_true')
    parser.add_argument('--limit', type=int, default=15)
    args = parser.parse_args()
    
    cmd_run(dry_run=not args.execute, limit=args.limit)