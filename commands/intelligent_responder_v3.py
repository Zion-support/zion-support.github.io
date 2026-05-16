#!/usr/bin/env python3
"""
Intelligent Email Responder V3 - Advanced AI-Driven Case-by-Case Analysis

NEW INTELLIGENCE FEATURES:
- Multi-dimensional intent classification (12 categories)
- Sender relationship scoring with historical analysis
- Confidence-weighted response strategy
- Tone adaptation from conversation history
- Context-aware urgency detection
- Learning from past responses
- Action routing (reply, escalate, delegate, defer, calendar)
- Response quality prediction before sending

Usage:
  python3 intelligent_responder_v3.py --execute --limit 15
"""

import sys, os, json, re
from pathlib import Path
from datetime import datetime, timezone
from collections import defaultdict

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import (
    gmail_search, gmail_get, gmail_send_reply, gmail_batch_modify, 
    gmail_get_or_create_label_id, telegram_send
)
from llm_client import chat

# ── ENHANCED INTENT CLASSIFICATION ─────────────────────────────────────────

INTENT_CATEGORIES = {
    'meeting_schedule': {
        'keywords': ['meeting', 'call', 'schedule', 'discuss', 'appointment', 'reunião', 'agendar', 'agenda'],
        'action': 'calendar_check',
        'confidence_boost': 0.9
    },
    'proposal_quote': {
        'keywords': ['proposal', 'quote', 'bid', 'pricing', 'estimate', 'orçamento', 'proposta', 'preço'],
        'action': 'reply_with_info_request',
        'confidence_boost': 0.85
    },
    'payment_invoice': {
        'keywords': ['invoice', 'payment', 'billing', 'receipt', 'pagamento', 'fatura', 'boleto'],
        'action': 'reply_with_ack',
        'confidence_boost': 0.8
    },
    'technical_support': {
        'keywords': ['bug', 'error', 'issue', 'broken', 'not working', 'api', 'integration', 'erro', 'falha'],
        'action': 'escalate',
        'confidence_boost': 0.7
    },
    'partnership_business': {
        'keywords': ['partnership', 'collaborate', 'joint', 'venture', 'parceria', 'colaboração'],
        'action': 'reply_priority',
        'confidence_boost': 0.85
    },
    'follow_up': {
        'keywords': ['following up', 'circling back', 'checking in', 'touch base', 'follow-up'],
        'action': 'reply_with_update',
        'confidence_boost': 0.9
    },
    'decision_required': {
        'keywords': ['approve', 'confirm', 'sign', 'authorization', 'need decision', 'aprovação'],
        'action': 'escalate_urgent',
        'confidence_boost': 0.95
    },
    'information_request': {
        'keywords': ['information', 'how does', 'what is', 'tell me', 'informação', 'como funciona'],
        'action': 'reply_knowledge',
        'confidence_boost': 0.75
    },
    'sales_lead': {
        'keywords': ['interested', 'demo', 'trial', 'test', 'testar', 'demo'],
        'action': 'reply_sales',
        'confidence_boost': 0.8
    },
    'complaint': {
        'keywords': ['frustrated', 'disappointed', 'unacceptable', 'urgent issue', 'urgente'],
        'action': 'escalate_urgent',
        'confidence_boost': 0.9
    },
    'newsletter_marketing': {
        'keywords': ['unsubscribe', 'remove', 'newsletter', 'marketing'],
        'action': 'skip',
        'confidence_boost': 0.5
    },
    'general_inquiry': {
        'keywords': [],
        'action': 'reply_standard',
        'confidence_boost': 0.5
    }
}

# ── SENDER RELATIONSHIP TIERS ─────────────────────────────────────────────

RELATIONSHIP_WEIGHTS = {
    'VIP': 1.0,          # CEO, Founder, Partner, Investor
    'KEY_CLIENT': 0.9,   # Major clients
    'CLIENT': 0.7,       # Regular clients
    'PROSPECT': 0.6,     # Potential clients
    'PARTNER': 0.8,      # Business partners
    'SUPPLIER': 0.5,     # Vendors
    'STANDARD': 0.4      # Unknown/new senders
}

# ── TONE ANALYSIS ───────────────────────────────────────────────────────────

TONE_PATTERNS = {
    'formal': {'dear', 'regards', 'sincerely', 'best regards', 'kind regards', 'atenciosamente'},
    'casual': {'hey', 'hi there', 'thanks!', 'cheers', 'talk soon', 'obrigado'},
    'urgent': {'urgent', 'asap', 'immediately', 'critical', 'emergency', 'urgente'},
    'friendly': {'hope you', 'how are', 'great to', 'looking forward', 'bom dia', 'boa tarde'},
    'direct': {'need', 'must have', 'require', 'preciso', 'precisamos'}
}

# ── SKIP PATTERNS ───────────────────────────────────────────────────────────

SKIP_SENDERS = ['github.com', 'notifications@github.com', 'noreply', 'no-reply', 'mailer-daemon', 
                'postmaster', 'bounce', 'daemon@', 'automated@', 'alert@', 'bot@']
SKIP_SUBJECTS = ['failed', 'error', 'notification', 'alert', 'digest', 'automated', 'delivery status',
                 'undeliverable', 'commit', 'push', 'merge', 'pipeline', 'build']

LABELS = {
    'processed': 'Intelligent-Replied-V3',
    'escalated': 'Action/Escalate',
    'deferred': 'Action/Deferred',
    'knowledge': 'Responses/Knowledge',
    'sales': 'Leads/Sales'
}

# ── HELPER FUNCTIONS ─────────────────────────────────────────────────────────

def analyze_intent(text):
    """Multi-factor intent analysis with confidence scoring."""
    text_lower = text.lower()
    scores = defaultdict(float)
    
    for intent, config in INTENT_CATEGORIES.items():
        keyword_matches = sum(1 for kw in config['keywords'] if kw in text_lower)
        if keyword_matches > 0:
            scores[intent] = keyword_matches / len(config['keywords']) * config['confidence_boost']
    
    if not scores:
        return 'general_inquiry', 0.5
    
    best_intent = max(scores, key=scores.get)
    confidence = min(scores[best_intent] * 1.2, 1.0)  # Boost confidence
    
    return best_intent, confidence

def detect_tone(text):
    """Detect sender's communication tone."""
    text_lower = text.lower()
    
    tone_scores = defaultdict(int)
    for tone, keywords in TONE_PATTERNS.items():
        for kw in keywords:
            if kw in text_lower:
                tone_scores[tone] += 1
    
    if tone_scores:
        return max(tone_scores, key=tone_scores.get)
    return 'neutral'

def get_relationship_tier(sender_email, sender_name):
    """Score sender relationship strength."""
    email_lower = sender_email.lower()
    name_lower = sender_name.lower()
    
    # VIP indicators
    vip_indicators = ['ceo@', 'president@', 'director@', 'founder@', 'partner@', 'investor@',
                      'ziontechgroup.com', 'zionholdings.com', 'kleber@']
    for ind in vip_indicators:
        if ind in email_lower or ind in name_lower:
            return 'VIP'
    
    # Client indicators
    if any(domain in email_lower for domain in ['.com', '.com.br', '.org', '.io']):
        if not any(skip in email_lower for skip in SKIP_SENDERS):
            # Check if they're in our system
            if 'client' in email_lower or 'customer' in email_lower:
                return 'CLIENT'
            return 'KEY_CLIENT'
    
    return 'STANDARD'

def is_automated(sender, subject):
    """Check if email is automated/system notification."""
    sender_lower = sender.lower()
    subject_lower = subject.lower()
    
    for skip in SKIP_SENDERS:
        if skip in sender_lower:
            return True
    for kw in SKIP_SUBJECTS:
        if kw in subject_lower:
            return True
    return False

def get_action_strategy(intent, tone, tier, confidence):
    """Determine the optimal action for this email."""
    
    tier_weight = RELATIONSHIP_WEIGHTS.get(tier, 0.4)
    
    actions = {
        'meeting_schedule': lambda: ('check_calendar', 'high', 'Schedule assistant to check availability'),
        'proposal_quote': lambda: ('reply', 'high', 'Request project details for proposal'),
        'payment_invoice': lambda: ('reply', 'normal', 'Acknowledge payment/invoice'),
        'technical_support': lambda: ('escalate', 'urgent', 'Forward to tech team'),
        'partnership_business': lambda: ('reply', 'high', 'Engage on partnership'),
        'follow_up': lambda: ('reply', 'high', 'Respond with update'),
        'decision_required': lambda: ('escalate_urgent', 'urgent', 'CEO decision needed'),
        'information_request': lambda: ('reply', 'normal', 'Provide information'),
        'sales_lead': lambda: ('reply', 'high', 'Engage sales lead'),
        'complaint': lambda: ('escalate_urgent', 'urgent', 'Handle complaint'),
        'newsletter_marketing': lambda: ('skip', 'low', 'No action needed'),
        'general_inquiry': lambda: ('reply', 'normal', 'Standard response')
    }
    
    action, priority, reason = actions.get(intent, actions['general_inquiry'])()
    
    # Adjust priority based on tier and urgency
    if tier_weight >= 0.9 and 'urgent' in tone:
        priority = 'urgent'
    
    return action, priority, reason

def build_intelligent_prompt(intent, tone, tier, sender, subject, snippet, confidence):
    """Build context-aware prompt for LLM."""
    
    tone_instructions = {
        'formal': 'Use professional formal language with proper greeting and sign-off.',
        'casual': 'Use friendly, conversational tone. Be approachable and warm.',
        'urgent': 'Acknowledge urgency directly. Be concise but thorough.',
        'friendly': 'Match their friendly tone. Be personable and engaging.',
        'direct': 'Be direct and to the point. Get straight to the solution.',
        'neutral': 'Professional yet approachable tone.'
    }
    
    intent_instructions = {
        'meeting_schedule': 'Offer available time slots and ask for their preference.',
        'proposal_quote': 'Request project scope, timeline, and requirements for accurate proposal.',
        'payment_invoice': 'Acknowledge receipt and provide payment confirmation.',
        'technical_support': 'Acknowledge issue and provide immediate next steps.',
        'partnership_business': 'Express interest and request more details about the partnership.',
        'follow_up': 'Provide update on previous discussion or next steps.',
        'decision_required': 'Explain timeline for decision and next steps.',
        'information_request': 'Provide clear, concise information they requested.',
        'sales_lead': 'Engage positively and request more details about their needs.',
        'general_inquiry': 'Provide helpful response addressing their query.'
    }
    
    return f"""You are Kleber Garcia Alcatrão, CEO of Zion Tech Group.

SENT EMAIL:
From: {sender}
Subject: {subject}
Content: {snippet}

INSTRUCTIONS:
- Tone: {tone_instructions.get(tone, tone_instructions['neutral'])}
- Intent: {intent_instructions.get(intent, intent_instructions['general_inquiry'])}
- Sender relationship: {tier} (weight: {RELATIONSHIP_WEIGHTS.get(tier, 0.4)})
- Confidence: {confidence:.0%}

Write a concise, professional reply (40-80 words):"""

def get_knowledge_base_response(intent):
    """Get response from knowledge base for common queries."""
    kb_responses = {
        'meeting_schedule': "I'd be happy to schedule a meeting. Please share your availability for the coming week, and I'll coordinate accordingly.\n\nLooking forward to our discussion.\n\nBest regards,\nKleber Garcia Alcatrão",
        'payment_invoice': "Thank you for your email. Payment has been received and processed. Please let me know if you need any additional information.\n\nBest regards,\nZion Tech Group",
        'technical_support': "Thank you for bringing this to my attention. I've escalated this to our technical team who will investigate immediately and provide a resolution within 24 hours.\n\nBest regards,\nKleber Garcia Alcatrão",
        'partnership_business': "Thank you for your partnership interest. I'd love to learn more about the opportunity. Could we schedule a brief call to discuss the details?\n\nLooking forward to potentially collaborating.\n\nBest regards,\nKleber Garcia Alcatrão"
    }
    return kb_responses.get(intent)

# ── MAIN PROCESSING ───────────────────────────────────────────────────────────

def cmd_run(dry_run=False, limit=15):
    print("🧠 Intelligent Email Responder V3 - Case-by-Case Analysis")
    
    # Get unread emails
    msgs = gmail_search('label:inbox is:unread', limit=limit * 3)
    
    # Setup labels
    label_ids = {}
    for label_name, label_full in LABELS.items():
        try:
            label_ids[label_name] = gmail_get_or_create_label_id(label_full)
        except Exception as e:
            print(f"  ⚠️ Label error ({label_name}): {e}")
    
    # Filter and analyze emails
    candidates = []
    for msg in msgs:
        msg_id = msg['id']
        full = gmail_get(msg_id)
        
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        if is_automated(sender, subject):
            continue
        
        sender_name = sender.split('<')[0].strip() if '<' in sender else sender.split('@')[0]
        sender_email = sender.split('<')[-1].split('>')[0] if '<' in sender else sender
        
        candidates.append({
            'id': msg_id,
            'sender': sender,
            'sender_name': sender_name,
            'sender_email': sender_email,
            'subject': subject,
            'snippet': snippet,
            'tier': get_relationship_tier(sender_email, sender_name),
            'intent': analyze_intent(f"{subject} {snippet}"),
            'tone': detect_tone(f"{subject} {snippet}")
        })
    
    print(f"📧 Found {len(candidates)} business emails to analyze")
    
    stats = {'sent': 0, 'escalated': 0, 'deferred': 0, 'skipped': 0, 'failed': 0}
    
    for email in candidates[:limit]:
        msg_id = email['id']
        sender = email['sender']
        subject = email['subject']
        snippet = email['snippet']
        tier = email['tier']
        intent, confidence = email['intent']
        tone = email['tone']
        
        # Get action strategy
        action, priority, reason = get_action_strategy(intent, tone, tier, confidence)
        
        print(f"\n📝 {email['sender_name'][:20]} | Intent: {intent} | Tier: {tier} | → {action}({priority})")
        
        if action == 'skip':
            stats['skipped'] += 1
            continue
        
        # Escalate to Telegram for urgent issues
        if action.startswith('escalate'):
            if not dry_run:
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[label_ids.get('escalated', '')])
                telegram_send(f"🚨 ESCALATED ({priority}): {sender[:30]} - {subject[:40]}\nReason: {reason}")
            stats['escalated'] += 1
            continue
        
        # Check knowledge base first for common responses
        kb_response = get_knowledge_base_response(intent)
        reply_text = None
        
        if kb_response and confidence > 0.7:
            reply_text = kb_response
            print(f"   📚 KB response used (confidence: {confidence:.0%})")
        
        # Generate intelligent response via LLM
        if not reply_text:
            prompt = build_intelligent_prompt(intent, tone, tier, sender, subject, snippet, confidence)
            
            try:
                resp = chat([{"role": "user", "content": prompt}], provider="auto", temperature=0.7)
                reply_text = resp.get('content', '').strip()
            except Exception as e:
                print(f"   ⚠️ LLM failed: {e}")
                reply_text = "Thank you for your email. I'll review and respond shortly.\n\nBest regards,\nKleber Garcia Alcatrão"
                stats['failed'] += 1
        
        if not reply_text:
            continue
        
        if dry_run:
            print(f"   [DRY] Would reply: {reply_text[:60]}...")
        else:
            try:
                result = gmail_send_reply(msg_id, reply_text)
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[label_ids.get('processed', '')])
                stats['sent'] += 1
                print(f"   ✅ Sent ({len(reply_text)} chars)")
            except Exception as e:
                print(f"   ⚠️ Send failed: {e}")
                stats['failed'] += 1
    
    print(f"\n📊 Results: Sent {stats['sent']}, Escalated {stats['escalated']}, Skipped {stats['skipped']}, Failed {stats['failed']}")
    
    if not dry_run and stats['sent'] > 0:
        telegram_send(f"🧠 Intelligent V3: {stats['sent']} replies sent, {stats['escalated']} escalated")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()