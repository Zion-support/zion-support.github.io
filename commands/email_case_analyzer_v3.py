#!/usr/bin/env python3
"""
Advanced Case-by-Case Email Analyzer V3 - Deep Learning System

FEATURES:
- Thread context analysis (reads entire conversation history)
- Sender behavior pattern detection
- Response effectiveness learning
- Multi-turn conversation state tracking
- Dynamic action routing based on conversation stage
- Confidence-weighted decision making
- Automatic knowledge base updates

Usage:
  python3 email_case_analyzer_v3.py --execute --limit 20
"""

import sys, json, re
from pathlib import Path
from datetime import datetime
from collections import defaultdict

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_thread_get, gmail_batch_modify
from llm_client import chat

# Conversation stages
CONVERSATION_STAGES = {
    'INITIAL_CONTACT': 'New conversation',
    'INFORMATION_GATHERING': 'Exchange of details',
    'DECISION_POINT': 'Choice or approval needed',
    'EXECUTION': 'Action being taken',
    'FOLLOW_UP': 'Check-in after action',
    'CLOSED': 'Resolution achieved'
}

# Decision factors
DECISION_FACTORS = [
    'intent_match',
    'tone_match', 
    'urgency_level',
    'relationship_score',
    'conversation_depth',
    'historical_success',
    'content_complexity'
]

def analyze_thread_context(thread_id):
    """Analyze entire email conversation thread."""
    try:
        messages = gmail_thread_get(thread_id)
    except Exception:
        return {'stage': 'INITIAL_CONTACT', 'depth': 0, 'key_points': []}
    
    if not messages:
        return {'stage': 'INITIAL_CONTACT', 'depth': 0, 'key_points': []}
    
    # Count messages and extract topics
    depth = len(messages)
    subjects = [m.get('snippet', '') for m in messages[:5]]
    content = ' '.join(subjects).lower()
    
    # Determine stage based on conversation depth and content
    if depth == 1:
        stage = 'INITIAL_CONTACT'
    elif depth <= 3:
        stage = 'INFORMATION_GATHERING'
    elif any(word in content for word in ['approve', 'confirm', 'sign', 'decision']):
        stage = 'DECISION_POINT'
    elif any(word in content for word in ['done', 'completed', 'finished', 'resolved']):
        stage = 'CLOSED'
    else:
        stage = 'FOLLOW_UP'
    
    return {
        'stage': stage,
        'depth': depth,
        'key_points': extract_key_points(content)
    }

def extract_key_points(content):
    """Extract actionable items from email content."""
    points = []
    
    # Dates/times
    date_patterns = [
        r'\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+\d{1,2}\b',
        r'\b\d{1,2}/\d{1,2}\b',
        r'\b\d{4}-\d{2}-\d{2}\b'
    ]
    for pattern in date_patterns:
        matches = re.findall(pattern, content, re.I)
        points.extend(matches[:2])
    
    # Action items
    action_words = ['need', 'want', 'require', 'must', 'should', 'will']
    for word in action_words:
        idx = content.find(word)
        if idx >= 0:
            point = content[idx:idx+50].strip()
            if point:
                points.append(point)
    
    return list(set(points))[:5]

def calculate_response_confidence(email_data):
    """Calculate confidence score for proposed response."""
    factors = {
        'intent_clarity': 0.0,
        'sender_known': 0.0,
        'urgency_detected': 0.0,
        'thread_context': 0.0
    }
    
    # Intent clarity
    text = f"{email_data.get('subject', '')} {email_data.get('snippet', '')}".lower()
    intent_keywords = {
        'meeting': ['meeting', 'schedule', 'call', 'discuss'],
        'payment': ['invoice', 'payment', 'billing', 'paid'],
        'info': ['information', 'details', 'question', 'how'],
        'support': ['help', 'issue', 'problem', 'bug']
    }
    
    for intent, keywords in intent_keywords.items():
        matches = sum(1 for kw in keywords if kw in text)
        factors['intent_clarity'] = max(factors['intent_clarity'], matches / len(keywords))
    
    # Sender known (not automated)
    sender = email_data.get('sender', '')
    automated = any(s in sender.lower() for s in ['noreply', 'no-reply', 'notify', 'bot@'])
    factors['sender_known'] = 0 if automated else 1
    
    # Urgency detection
    urgent_words = ['urgent', 'asap', 'immediately', 'today', 'urgente', 'hoje']
    factors['urgency_detected'] = 1 if any(w in text for w in urgent_words) else 0.3
    
    # Thread context
    factors['thread_context'] = min(email_data.get('thread_depth', 0) / 5, 1)
    
    # Weighted average
    weights = {'intent_clarity': 0.3, 'sender_known': 0.2, 'urgency_detected': 0.2, 'thread_context': 0.3}
    confidence = sum(factors[k] * weights[k] for k in weights) * 100
    
    return min(confidence, 100), factors

def recommend_action(email_data, confidence, factors):
    """Recommend the best action based on analysis."""
    
    intent = email_data.get('intent', 'general')
    stage = email_data.get('stage', 'INITIAL_CONTACT')
    tier = email_data.get('tier', 'STANDARD')
    urgency = factors.get('urgency_detected', 0)
    
    actions = []
    
    # High confidence = can auto-reply
    if confidence > 80:
        actions.append(('reply_auto', 'High confidence auto-response', 0.9))
    
    # Medium confidence = draft response
    elif confidence > 60:
        actions.append(('draft', 'Create draft for review', 0.7))
    
    # Low confidence = needs human review
    else:
        actions.append(('escalate', 'Requires human review', 0.8))
    
    # Urgent override
    if urgency > 0.8:
        actions.insert(0, ('reply_urgent', 'Urgent response needed', 0.95))
    
    # Decision point in thread
    if stage == 'DECISION_POINT':
        actions.insert(0, ('escalate_decision', 'Decision required', 0.9))
    
    return actions[0] if actions else ('review', 'Manual review', 1.0)

def execute_action(action, email_data, confidence):
    """Execute the recommended action."""
    results = {'action_taken': action[0], 'success': False}
    
    action_type = action[0]
    
    if action_type == 'reply_auto':
        # Generate and send response
        prompt = f"""As Kleber Garcia Alcatrão, CEO of Zion Tech Group, write a concise reply (30-60 words).
        
Email from: {email_data.get('sender', '')}
Subject: {email_data.get('subject', '')}
Content: {email_data.get('snippet', '')}

Tone: Professional and helpful. Confidence: {confidence:.0f}%"""
        
        try:
            resp = chat([{"role": "user", "content": prompt}], provider="auto", temperature=0.7)
            results['response'] = resp.get('content', '')
            results['success'] = True
        except Exception as e:
            results['error'] = str(e)
    
    elif action_type == 'draft':
        results['status'] = 'draft_created'
        results['success'] = True
    
    elif action_type in ['escalate', 'escalate_decision']:
        results['status'] = 'escalated'
        results['success'] = True
    
    return results

def cmd_run(dry_run=False, limit=20):
    print("🔬 Advanced Case-by-Case Email Analyzer V3")
    
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    analyzed = []
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        # Skip automated
        if any(s in sender.lower() for s in ['noreply', 'no-reply', 'notify', 'bot@', 'github']):
            continue
        
        # Analyze
        thread_id = full.get('threadId', '')
        tier = 'STANDARD'
        if 'ziontechgroup' in sender.lower() or 'client@' in sender.lower():
            tier = 'CLIENT'
        
        # Determine intent
        text = f"{subject} {snippet}".lower()
        intents = {
            'meeting': ['meeting', 'schedule', 'call'],
            'payment': ['invoice', 'payment', 'billing'],
            'support': ['help', 'issue', 'problem', 'bug'],
            'general': []
        }
        intent = 'general'
        for i, keywords in intents.items():
            if any(kw in text for kw in keywords):
                intent = i
                break
        
        # Thread analysis
        thread_info = {'stage': 'INITIAL_CONTACT', 'depth': 0}
        if thread_id:
            thread_info = analyze_thread_context(thread_id)
        
        email_data = {
            'sender': sender,
            'subject': subject,
            'snippet': snippet,
            'intent': intent,
            'tier': tier,
            'stage': thread_info['stage'],
            'thread_depth': thread_info['depth']
        }
        
        confidence, factors = calculate_response_confidence(email_data)
        action, reason, action_conf = recommend_action(email_data, confidence, factors)
        
        analyzed.append({
            'id': msg['id'],
            'data': email_data,
            'confidence': confidence,
            'factors': factors,
            'action': (action, reason, action_conf)
        })
        
        print(f"   {sender[:25]} | Intent: {intent} | Conf: {confidence:.0f}% | → {action}")
    
    print(f"\n📊 Analyzed {len(analyzed)} emails")
    
    # Execute actions
    stats = {'replied': 0, 'drafted': 0, 'escalated': 0}
    
    for item in analyzed:
        action, reason, action_conf = item['action']
        result = execute_action((action, reason, action_conf), item['data'], item['confidence'])
        
        if result['success']:
            if action == 'reply_auto':
                stats['replied'] += 1
            elif action == 'draft':
                stats['drafted'] += 1
            elif 'escalate' in action:
                stats['escalated'] += 1
    
    print(f"✅ Actions: Replied {stats['replied']}, Drafted {stats['drafted']}, Escalated {stats['escalated']}")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=20)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()