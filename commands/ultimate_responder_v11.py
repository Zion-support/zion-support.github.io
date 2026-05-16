#!/usr/bin/env python3
"""
Ultimate Intelligent Responder V11 - Enterprise Grade

FEATURES:
- Real-time sentiment analysis
- Multi-language detection & response
- Priority-based response timing
- Conversation state detection
- Predictive success scoring
- Action item extraction with deadlines
- Knowledge base integration
- Thread summarization
- Dynamic signature selection
- Response quality scoring
- Time zone aware scheduling
- A/B testing tracker
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
from knowledge_base_integrator import find_relevant_context, format_context_for_response
from thread_summarizer_v10 import summarize_thread, extract_actions_with_deadlines, save_action_items
from timezone_scheduler import detect_sender_timezone, get_optimal_send_time
from response_ab_testing import record_response_variant, get_best_variant

def process_one_email(msg_id: str, thread_depth: int = 1) -> dict:
    """Process a single email with V11 intelligence."""
    full = gmail_get(msg_id)
    headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
    
    sender = headers.get('From', '')
    subject = headers.get('Subject', '')
    snippet = full.get('snippet', '')
    
    # Time zone detection
    timezone = detect_sender_timezone(sender, snippet)
    tz_recommendation = get_optimal_send_time(timezone, 50)
    
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
    
    # Knowledge base context
    kb_context = find_relevant_context(sender, subject, snippet)
    context_text = format_context_for_response(kb_context)
    
    # Extract actions with deadlines
    extracted_actions = extract_actions_with_deadlines(snippet, sender)
    if extracted_actions:
        save_action_items(extracted_actions)
    
    # Generate response using best variant
    best_variant = get_best_variant()
    
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
    
    # Add industry and knowledge base context
    industry_mention = get_industry_mention(industry)
    if industry_mention:
        response = response.rstrip() + f"\n\n{industry_mention}"
    if context_text:
        response = response.rstrip() + context_text
    
    # Add dynamic signature
    signature = select_signature(tier, sentiment, language)
    response = response.rstrip() + signature
    
    # Quality scoring
    quality = score_response(response)
    
    # Record A/B test
    record_response_variant(msg_id, variant, priority, tier)
    
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
        'timezone': timezone,
        'tz_status': tz_recommendation['status'],
        'action_items': action_items,
        'extracted_actions': extracted_actions,
        'kb_context': kb_context,
        'response': response,
        'escalation': escalation,
        'success_score': success_score,
        'variant': variant,
        'conv_state': conv_state,
        'conv_confidence': conv_conf,
        'quality_score': quality['score'],
        'quality_grade': quality['grade']
    }

def cmd_run(dry_run=False, limit=15):
    print("🚀 Ultimate Intelligent Responder V11")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 3)
    label_id = gmail_get_or_create_label_id('Processed-V11')
    
    results = {'sent': 0, 'errors': 0, 'escalated': 0, 'avg_quality': 0}
    
    for msg in msgs[:limit]:
        try:
            result = process_one_email(msg['id'])
            
            print(f"\n📝 {result['sender'][:30]} | {result['language']} | {result['tz_status']}")
            print(f"   Priority: {result['priority']} | Tier: {result['tier']}")
            print(f"   Quality: {result['quality_score']} ({result['quality_grade']}) | Actions: {len(result['extracted_actions'])}")
            
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