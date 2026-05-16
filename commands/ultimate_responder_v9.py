#!/usr/bin/env python3
"""
Ultimate Intelligent Responder V9 - Next-Gen AI with Quality Scoring

FEATURES:
- Real-time sentiment analysis
- Multi-language detection & response
- Priority-based response timing
- Conversation state detection
- Predictive success scoring
- Action item extraction
- Dynamic signature selection
- Response quality scoring
- Automatic follow-up scheduling
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
from dynamic_signature_selector import select_signature, detect_industry, get_industry_mention
from response_quality_scorer import score_response, suggest_improvements

def process_one_email(msg_id: str, thread_depth: int = 1) -> dict:
    """Process a single email with full intelligence."""
    full = gmail_get(msg_id)
    headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
    
    sender = headers.get('From', '')
    subject = headers.get('Subject', '')
    snippet = full.get('snippet', '')
    
    # Core intelligence
    sentiment = analyze_sentiment(snippet)
    priority = calculate_priority(sender, subject, snippet, sentiment)
    tier = get_relationship_tier(sender)
    action_items = extract_action_items(snippet)
    language = detect_language(snippet)
    
    # Advanced intelligence
    industry = detect_industry(sender, subject, snippet)
    success_score = predict_success('general', priority, tier, language)
    variant = recommend_variant('general', priority, success_score)
    conv_state, conv_conf = detect_conversation_state(subject, snippet, thread_depth)
    
    # Generate response
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
    
    # Add industry mention if detected
    industry_mention = get_industry_mention(industry)
    if industry_mention:
        response = response.rstrip() + f"\n\n{industry_mention}"
    
    # Add dynamic signature
    signature = select_signature(tier, sentiment, language)
    response = response.rstrip() + signature
    
    # Quality scoring
    quality = score_response(response)
    suggestions = suggest_improvements(response, quality) if quality['needs_review'] else []
    
    # Escalation logic
    escalation = {'needs_alert': False, 'reasons': [], 'level': 'normal'}
    if sentiment.get('sentiment') == 'negative':
        escalation = {'needs_alert': True, 'reasons': ['negative'], 'level': 'high'}
    elif priority >= 80:
        escalation = {'needs_alert': True, 'reasons': ['urgent'], 'level': 'critical'}
    
    return {
        'msg_id': msg_id,
        'sender': sender,
        'subject': subject,
        'priority': priority,
        'tier': tier,
        'sentiment': sentiment,
        'language': language,
        'industry': industry,
        'action_items': action_items,
        'response': response,
        'escalation': escalation,
        'success_score': success_score,
        'variant': variant,
        'conv_state': conv_state,
        'conv_confidence': conv_conf,
        'quality_score': quality['score'],
        'quality_grade': quality['grade'],
        'suggestions': suggestions
    }

def cmd_run(dry_run=False, limit=15):
    print("🚀 Ultimate Intelligent Responder V9")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 3)
    label_id = gmail_get_or_create_label_id('Processed-V9')
    
    results = {'sent': 0, 'errors': 0, 'escalated': 0, 'avg_quality': 0}
    
    for msg in msgs[:limit]:
        try:
            result = process_one_email(msg['id'])
            
            print(f"\n📝 {result['sender'][:30]} | {result['language']} | {result['industry']}")
            print(f"   Priority: {result['priority']} | Tier: {result['tier']}")
            print(f"   State: {result['conv_state']} | Success: {result['success_score']}%")
            print(f"   Quality: {result['quality_score']} ({result['quality_grade']})")
            
            results['avg_quality'] += result['quality_score']
            
            if result['escalation']['needs_alert'] and not dry_run:
                try:
                    telegram_send(f"🚨 {result['escalation']['level'].upper()}: {result['sender'][:30]}")
                    results['escalated'] += 1
                except:
                    pass
            
            if dry_run:
                print(f"   [DRY] {result['response'][:70]}...")
                results['sent'] += 1
                continue
            
            gmail_send_reply(msg['id'], result['response'])
            gmail_batch_modify({'ids': [msg['id']]}, addLabelIds=[label_id])
            
            print(f"   ✅ Sent ({len(result['response'])} chars)")
            results['sent'] += 1
            
        except Exception as e:
            print(f"   ❌ Error: {e}")
            results['errors'] += 1
    
    if results['sent'] > 0:
        results['avg_quality'] = results['avg_quality'] // results['sent']
    
    print(f"\n📊 Results: {results['sent']} sent, {results['avg_quality']} avg quality, {results['escalated']} escalated")

if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--execute', action='store_true')
    parser.add_argument('--limit', type=int, default=15)
    args = parser.parse_args()
    
    cmd_run(dry_run=not args.execute, limit=args.limit)