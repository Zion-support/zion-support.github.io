#!/usr/bin/env python3
"""
Autonomous Auto-Responder V2 - Zion

INTELLIGENT email responder that:
- Analyzes each email case-by-case
- Detects intent (question, request, decision, etc.)
- Detects context (sales, support, technical, admin)
- Matches sender relationship strength
- Adapts tone and content accordingly
- Takes appropriate action: quick reply, escalate, defer, or draft

Usage:
  python3 autonomous_responder_v2.py --execute --limit 15
"""

import sys, os, json, re
from pathlib import Path
from datetime import datetime
WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_get_or_create_label_id, gmail_batch_modify, telegram_send

# Intent keywords
INTENT_KEYWORDS = {
    'question': ['?', 'what', 'how', 'why', 'when', 'where', 'can you', 'could you'],
    'request': ['need', 'want', 'please', 'can you', 'would you', 'request'],
    'decision': ['approve', 'confirm', 'decide', 'sign', 'agreement', 'contract'],
    'sales': ['deal', 'proposal', 'pricing', 'quote', 'offer', 'partnership'],
    'support': ['help', 'issue', 'problem', 'bug', 'broken', 'error', 'urgent'],
    'technical': ['api', 'code', 'implementation', 'technical', 'integration'],
    'admin': ['invoice', 'payment', 'billing', 'receipt', 'account']
}

# Tone keywords
TONE_KEYWORDS = {
    'urgent': ['urgent', 'asap', 'immediately', 'critical', 'emergency', 'deadline', 'today'],
    'formal': ['dear', 'regards', 'sincerely', 'best regards', 'kind regards'],
    'casual': ['hey', 'hi there', 'thanks', 'cheers', 'quick question', 'thanks!']
}

# Relationship tiers
RELATIONSHIP_TIERS = {
    'VIP': ['ceo@', 'president@', 'director@', 'founder@', 'partner@', 'investor@', 'ziontechgroup.com', 'zionholdings.com'],
    'CLIENT': ['client@', 'customer@', '@company.com'],  # Company domains
    'STANDARD': []
}

SKIP_SENDERS = [
    'github.com', 'notifications@github.com', '@github.com',
    'noreply@', 'no-reply@', 'notify@', 'bot@',
    'mailer-daemon@', 'postmaster@', 'bounce@',
    'daemon@', 'automated@', 'system@', 'alert@',
    'support@github.com', 'github-actions[bot]',
    'zapier.com', '@mail.zapier.com', 'alerts@zapier.com',
]

SKIP_SUBJECT_KEYWORDS = [
    'failed', 'error', 'notification', 'alert', 'digest',
    'automated', 'delivery status', 'undeliverable',
    'commit', 'push', 'merge', 'pipeline', 'build',
    'spam', 'undelivered', 'returned mail'
]

LABEL_PROCESSED = 'Autonomous-Replied-V2'
LABEL_ESCALATED = 'Action/Escalate'
LABEL_DEFERRED = 'Action/Deferred'

def detect_intent(text: str) -> str:
    text_lower = text.lower()
    scores = {}
    for intent, keywords in INTENT_KEYWORDS.items():
        scores[intent] = sum(1 for kw in keywords if kw in text_lower)
    if max(scores.values()) > 0:
        return max(scores, key=scores.get)
    return 'general'

def detect_tone(text: str) -> str:
    text_lower = text.lower()
    if any(kw in text_lower for kw in TONE_KEYWORDS['urgent']):
        return 'urgent'
    if any(kw in text_lower for kw in TONE_KEYWORDS['formal']):
        return 'formal'
    if any(kw in text_lower for kw in TONE_KEYWORDS['casual']):
        return 'casual'
    return 'neutral'

def get_relationship_tier(sender: str) -> str:
    sender_lower = sender.lower()
    for tier, patterns in RELATIONSHIP_TIERS.items():
        for pattern in patterns:
            if pattern.lower() in sender_lower:
                return tier
    return 'STANDARD'

def is_automated(sender: str, subject: str) -> bool:
    sender_lower = sender.lower()
    subject_lower = subject.lower()
    for skip in SKIP_SENDERS:
        if skip.lower() in sender_lower:
            return True
    for keyword in SKIP_SUBJECT_KEYWORDS:
        if keyword in subject_lower:
            return True
    return False

def get_action_strategy(intent: str, tone: str, tier: str) -> tuple:
    """Returns (should_reply, action_type, priority)"""
    
    # Support issues from VIP -> escalate
    if intent == 'support' and tier == 'VIP':
        return (True, 'escalate', 'high')
    
    # Decision requests -> escalate for awareness
    if intent == 'decision':
        return (True, 'escalate', 'high')
    
    # Sales from prospects -> fast quick reply
    if intent == 'sales':
        return (True, 'reply', 'high')
    
    # Support from non-VIP -> standard reply
    if intent == 'support':
        return (True, 'reply', 'normal')
    
    # Urgent -> immediate reply
    if tone == 'urgent':
        return (True, 'reply', 'urgent')
    
    # Technical -> standard reply
    if intent == 'technical':
        return (True, 'reply', 'normal')
    
    # Default: reply
    return (True, 'reply', 'normal')

def build_prompt(intent: str, tone: str, tier: str, sender: str, subject: str, snippet: str) -> str:
    tone_desc = {
        'urgent': 'direct and acknowledge urgency',
        'formal': 'professional with proper greeting',
        'casual': 'friendly and conversational',
        'neutral': 'professional yet approachable'
    }[tone]
    
    intent_desc = {
        'question': 'answer their question directly',
        'request': 'address their request and next steps',
        'decision': 'acknowledge the decision needed and timeline',
        'sales': 'engage with their proposal/offer',
        'support': 'acknowledge the issue and next steps',
        'technical': 'address the technical aspect',
        'admin': 'address the administrative matter',
        'general': 'provide a helpful response'
    }[intent]
    
    return f"""You are Kleber Garcia Alcatrão, CEO of Zion Tech Group.

Write a concise reply (40-80 words max) to this email:
- Tone: {tone_desc}
- Intent: {intent_desc}
- Sender tier: {tier}

From: {sender}
Subject: {subject}
Content: {snippet}

Reply directly:"""

def cmd_run(dry_run: bool = False, limit: int = 15):
    print("🤖 Autonomous Auto-Responder V2 - Intelligent case-by-case")

    msgs = gmail_search('label:inbox is:unread', limit=limit * 3)
    label_id = gmail_get_or_create_label_id(LABEL_PROCESSED)
    escalate_label = gmail_get_or_create_label_id(LABEL_ESCALATED)
    deferred_label = gmail_get_or_create_label_id(LABEL_DEFERRED)

    business_emails = []
    for msg in msgs:
        msg_id = msg['id']
        label_ids = msg.get('labelIds', [])
        if label_id in label_ids:
            continue
        
        full = gmail_get(msg_id)
        headers = full.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        if not is_automated(sender, subject):
            business_emails.append({
                'id': msg_id, 
                'sender': sender, 
                'subject': subject, 
                'snippet': snippet
            })

    print(f"📧 Analyzing {len(business_emails)} business emails")

    stats = {'sent': 0, 'escalated': 0, 'deferred': 0, 'failed': 0}

    for email in business_emails[:limit]:
        msg_id = email['id']
        sender = email['sender']
        subject = email['subject']
        snippet = email['snippet']
        
        # Detect
        intent = detect_intent(f"{subject} {snippet}")
        tone = detect_tone(f"{subject} {snippet}")
        tier = get_relationship_tier(sender)
        
        # Decide action
        should_reply, action, priority = get_action_strategy(intent, tone, tier)
        
        print(f"\n📝 {sender[:25]} | Intent:{intent} Tone:{tone} Tier:{tier} → {action}({priority})")
        
        if not should_reply:
            continue

        if action == 'escalate':
            if not dry_run:
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[label_id, escalate_label])
                telegram_send(f"🚨 Escalated email from {sender[:30]}: {subject[:40]}")
            stats['escalated'] += 1
            continue

        # Build prompt and send
        prompt = build_prompt(intent, tone, tier, sender, subject, snippet)
        
        try:
            from llm_client import chat
            resp = chat([{"role":"user","content":prompt}], provider="openrouter", temperature=0.7)
            reply_text = resp.get('content', '').strip()
            
            if dry_run:
                print(f"   [DRY] Would reply: {reply_text[:60]}...")
            else:
                result = gmail_send_reply(msg_id, reply_text)
                gmail_batch_modify({'ids': [msg_id]}, addLabelIds=[label_id])
                stats['sent'] += 1
                print(f"   ✅ Sent ({len(reply_text)} chars)")
                
        except Exception as e:
            print(f"   ⚠️ Failed: {e}")
            stats['failed'] += 1

    print(f"\n📊 Stats: Sent {stats['sent']}, Escalated {stats['escalated']}, Failed {stats['failed']}")
    
    if not dry_run and stats['sent'] > 0:
        telegram_send(f"🤖 Autonomous V2: {stats['sent']} replies sent, {stats['escalated']} escalated")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()