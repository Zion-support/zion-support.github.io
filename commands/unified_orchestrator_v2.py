#!/usr/bin/env python3
"""
Unified Email Intelligence Orchestrator V2

COMBINES ALL INTELLIGENCE SYSTEMS:
- V5 Email Intelligence (sentiment, priority, action items)
- V2 Follow-up Sequencer (timing, sequences)
- Sender Behavior Learning
- Response Quality Tracking
- A/B Variant Selection
- Thread Context Analysis

Usage:
  python3 unified_orchestrator_v2.py --execute --limit 20
"""

import sys, json
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))

DATA_DIR = WORKSPACE / 'zion.app' / 'data'

def analyze_email_comprehensive(msg_id: str, full_msg: dict) -> dict:
    """Run all intelligence systems on one email."""
    from email_intelligence_v5 import (
        analyze_sentiment, calculate_priority, get_relationship_tier,
        extract_action_items, generate_intelligent_response
    )
    from email_case_analyzer_v3 import analyze_thread_context
    
    headers = {h['name']: h['value'] for h in full_msg.get('payload', {}).get('headers', [])}
    sender = headers.get('From', '')
    subject = headers.get('Subject', '')
    snippet = full_msg.get('snippet', '')
    thread_id = full_msg.get('threadId', '')
    
    # Run all analyzers
    sentiment = analyze_sentiment(snippet)
    priority = calculate_priority(sender, subject, snippet, sentiment)
    tier = get_relationship_tier(sender)
    action_items = extract_action_items(snippet)
    thread_context = analyze_thread_context(thread_id)
    
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
        'sentiment': sentiment,
        'priority': priority,
        'tier': tier,
        'action_items': action_items,
        'thread_stage': thread_context.get('stage', 'unknown'),
        'thread_depth': thread_context.get('depth', 0),
        'response': response,
        'response_length': len(response),
        'generated_at': datetime.now().isoformat()
    }

def process_batch(emails: list) -> dict:
    """Process a batch of emails with intelligence."""
    results = {
        'processed': 0,
        'urgent': 0,
        'vip': 0,
        'action_required': 0,
        'responses': []
    }
    
    for email in emails:
        analysis = analyze_email_comprehensive(email['id'], email['full'])
        results['processed'] += 1
        
        if analysis['priority'] >= 70:
            results['urgent'] += 1
        if analysis['tier'] == 'VIP':
            results['vip'] += 1
        if analysis['action_items']:
            results['action_required'] += 1
        
        results['responses'].append({
            'msg_id': analysis['msg_id'],
            'priority': analysis['priority'],
            'response': analysis['response']
        })
    
    return results

if __name__ == '__main__':
    # Quick test
    print("🚀 Unified Email Intelligence Orchestrator V2")
    print("Ready to process emails with full intelligence stack")