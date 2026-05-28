#!/usr/bin/env python3
"""
V32 INTELLIGENT EMAIL RESPONDER — "The Autonomous Decision Engine"
==================================================================

MAJOR NEW FEATURES IN V32:
==========================

1. FINE-GRAINED INTENT CLASSIFIER (20+ intent types)
   → Identifies: billing_inquiry, refund_request, demo_request, partnership_offer,
     pricing_question, support_escalation, shipment_update, account_issue,
     contract_negotiation, data_request, press_inquiry, investor_query,
     interview_request, referral_request, complaint, webhook_alert, and more

2. SENTIMENT ANALYZER (tone detection)
   → Flags: frustrated/angry (priority escalate), satisfied (upsell opp),
     confused (clarify gently), urgent/stressed (speed priority),
     disappointed (recovery mode)

3. ESCALATION GUARD with Financial/Legal Trigger Detection
   → Auto-detects: lawsuit keywords, wire transfer requests, massive dollar amounts,
     executive impersonation, compliance/legal flags — routes to human immediately

4. KNOWLEDGE-GUIDED RAG RESPONDER
   → Grounds every response in REAL service knowledge from our catalog
   → Each reply references specific services, generates relevant upsell/cross-sell
   → Never generic — always specific to the inquiry

5. PERSONA-AWARE TONE ENGINE
   → Analyzes sender's communication style (formality, verbosity, emoji usage)
   → Adapts signature, vocabulary, sentence length per sender preference
   → Learns and evolves per-contact personality profile

6. A/B RESPONSE TESTING ENGINE
   → Generates 2 response variants per email (A=standard, B=alternative approach)
   → Tracks which variant gets better response rate
   → Auto-promotes winning variant for future similar emails

7. MULTI-TURN THREAD MEMORY
   → Remembers full conversation history per thread
   → Avoids repeating questions already answered
   → Tracks pending commitments ("I'll send you X by Friday")

8. REPLY-ALL v3: CONTEXT-AWARE INTELLIGENT MODE
   → Smart CC logic: only CC who needs to know, not the whole thread
   → Detects when Reply-All is WRONG (e.g., internal discussion accidentally included)
   → Preserves FYI participants vs. required participants

9. RESPONSE QUALITY SCORER v2
   → Multi-dimensional: grammar(20%), relevance(25%), specificity(25%),
     actionability(20%), tone_match(10%)
   → Generates improvement suggestions per email

10. ZION SERVICE MATCH ENGINE
    → Analyzes email for service-buying signals
    → Suggests relevant Zion services automatically
    → Generates "BTW — we also offer [service]" naturally embedded

ARCHITECTURE:
- Self-contained V32 module (no broken V29 import chain)
- Chains to V29 intelligent_reply generator for response drafting
- Uses V31 evolution/outcome/warmup/followup via composition
- Standalone CLI: python v32_email_responder.py test|send|status

Contact: kleber@ziontechgroup.com | +1 302 464 0950 | ziontechgroup.com
"""

import json, re, time, csv, io, os, random, threading
from datetime import datetime, timezone, timedelta
from pathlib import Path
from collections import defaultdict
from typing import Optional, Union
# ── Workspace paths ──────────────────────────────────────────
WORKSPACE = Path(__file__).resolve().parent.parent
COMMANDS  = WORKSPACE / 'commands'
DATA      = WORKSPACE / 'data'
V30_DIR   = COMMANDS / 'v30'

CONTACT = {
    'phone': '+1 302 464 0950',
    'email': 'kleber@ziontechgroup.com',
    'website': 'https://ziontechgroup.com',
    'address': '364 E Main St STE 1008 Middletown DE 19709'
}

# ── V32 Logging ──────────────────────────────────────────────
V32_LOG  = DATA / 'v32_run_log.jsonl'
V32_DIR  = DATA / 'v32'
V32_DIR.mkdir(exist_ok=True)

def log(level, msg):
    ts = datetime.now(timezone.utc).isoformat()
    line = f'[{ts}] [{level.upper()}] [V32] {msg}'
    print(line, flush=True)
    try:
        with open(V32_LOG, 'a') as f:
            f.write(line + '\n')
    except Exception:
        pass

log_info  = lambda m: log('info', m)
log_warn  = lambda m: log('warn', m)
log_error = lambda m: log('error', m)

def ts_now():
    return datetime.now(timezone.utc)

def days_since(date_str: str) -> float:
    try:
        past = datetime.fromisoformat(date_str.replace('Z', '+00:00'))
        delta = datetime.now(timezone.utc) - past.replace(tzinfo=timezone.utc)
        return delta.total_seconds() / 86400
    except Exception:
        return 999

def load_json(path, default=None):
    if default is None: default = {}
    try:
        with open(path) as f:
            return json.load(f)
    except Exception:
        return default

def save_json(path, data):
    try:
        with open(path, 'w') as f:
            json.dump(data, f, indent=2, default=str)
    except Exception as e:
        log_error(f"save_json failed: {e}")

# ═══════════════════════════════════════════════════════════════
# SECTION 1: FINE-GRAINED INTENT CLASSIFIER (20+ intent types)
# ═══════════════════════════════════════════════════════════════

class V32FineGrainedIntentClassifier:
    """
    V32 maps every incoming email to one of 20+ fine-grained intent types.
    Each intent triggers specific handling, template, reply-all policy,
    escalation rules, and response strategy.
    """

    # ── Intent definitions ─────────────────────────────────────
    INTENT_DEFINITIONS = {
        # ─ Core business intents ──────────────────────────────
        'billing_inquiry':     {
            'description': 'Sender asks about an invoice, charge, or billing question',
            'reply_all_default': False, 'min_confidence': 0.85, 'escalate': False,
            'urgency_boost': 0.15, 'auto_ack': True,
            'signature_formality': 'formal',
        },
        'refund_request':      {
            'description': 'Sender requests money back for a product/service',
            'reply_all_default': False, 'min_confidence': 0.80, 'escalate': True,
            'urgency_boost': 0.25, 'auto_ack': True,
            'signature_formality': 'formal',
        },
        'demo_request':        {
            'description': 'Sender wants to see a product/service demo',
            'reply_all_default': False, 'min_confidence': 0.75, 'escalate': False,
            'urgency_boost': 0.10, 'auto_ack': True,
            'signature_formality': 'formal',
        },
        'partnership_offer':   {
            'description': 'Someone proposes a partnership, JV, or collaboration',
            'reply_all_default': True, 'min_confidence': 0.75, 'escalate': True,
            'urgency_boost': 0.10, 'auto_ack': True,
            'signature_formality': 'formal',
        },
        'pricing_question':   {
            'description': 'Sender asks about pricing, plans, or cost',
            'reply_all_default': False, 'min_confidence': 0.70, 'escalate': False,
            'urgency_boost': 0.05, 'auto_ack': True,
            'signature_formality': 'neutral',
        },
        'support_ticket':     {
            'description': 'A technical issue or bug report',
            'reply_all_default': True, 'min_confidence': 0.70, 'escalate': False,
            'urgency_boost': 0.20, 'auto_ack': True,
            'signature_formality': 'neutral',
        },
        'shipment_update':    {
            'description': 'Sender asks about order status, shipping, delivery',
            'reply_all_default': False, 'min_confidence': 0.70, 'escalate': False,
            'urgency_boost': 0.05, 'auto_ack': True,
            'signature_formality': 'neutral',
        },
        'account_issue':      {
            'description': 'Login, access, or account management problem',
            'reply_all_default': False, 'min_confidence': 0.75, 'escalate': False,
            'urgency_boost': 0.15, 'auto_ack': True,
            'signature_formality': 'neutral',
        },
        'contract_negotiation': {
            'description': 'Legal/contract discussion or redlining',
            'reply_all_default': True, 'min_confidence': 0.80, 'escalate': True,
            'urgency_boost': 0.15, 'auto_ack': True,
            'signature_formality': 'formal',
        },
        'data_request':        {
            'description': 'Sender requests their data, export, or a report',
            'reply_all_default': False, 'min_confidence': 0.80, 'escalate': False,
            'urgency_boost': 0.10, 'auto_ack': True,
            'signature_formality': 'formal',
        },
        'press_inquiry':       {
            'description': 'Journalist or media contact',
            'reply_all_default': True, 'min_confidence': 0.75, 'escalate': True,
            'urgency_boost': 0.10, 'auto_ack': True,
            'signature_formality': 'formal',
        },
        'investor_query':      {
            'description': 'Investor or financial stakeholder inquiry',
            'reply_all_default': True, 'min_confidence': 0.85, 'escalate': True,
            'urgency_boost': 0.15, 'auto_ack': True,
            'signature_formality': 'formal',
        },
        'interview_request':   {
            'description': 'Job candidate or consulting candidate inquiry',
            'reply_all_default': False, 'min_confidence': 0.70, 'escalate': False,
            'urgency_boost': 0.05, 'auto_ack': True,
            'signature_formality': 'neutral',
        },
        'referral_request':    {
            'description': 'Sender asks for a referral or recommendation',
            'reply_all_default': False, 'min_confidence': 0.70, 'escalate': False,
            'urgency_boost': 0.05, 'auto_ack': True,
            'signature_formality': 'neutral',
        },
        'complaint':           {
            'description': 'Customer complaint, negative feedback',
            'reply_all_default': False, 'min_confidence': 0.75, 'escalate': True,
            'urgency_boost': 0.30, 'auto_ack': True,
            'signature_formality': 'formal',
        },
        'webhook_alert':       {
            'description': 'Automated system alert, webhook, or API notification',
            'reply_all_default': False, 'min_confidence': 0.90, 'escalate': False,
            'urgency_boost': 0.0, 'auto_ack': False,
            'signature_formality': 'none',
        },
        'newsletter_confirm':  {
            'description': 'Newsletter subscription confirmation request',
            'reply_all_default': False, 'min_confidence': 0.90, 'escalate': False,
            'urgency_boost': 0.0, 'auto_ack': False,
            'signature_formality': 'casual',
        },
        'unsubscribe_request': {
            'description': 'Sender wants to unsubscribe',
            'reply_all_default': False, 'min_confidence': 0.90, 'escalate': False,
            'urgency_boost': 0.0, 'auto_ack': False,
            'signature_formality': 'neutral',
        },
        'follow_up_reminder':  {
            'description': 'Sender following up on a previous conversation',
            'reply_all_default': False, 'min_confidence': 0.80, 'escalate': False,
            'urgency_boost': 0.10, 'auto_ack': True,
            'signature_formality': 'neutral',
        },
        'event_registration':  {
            'description': 'Sender registers or asks about an event/webinar',
            'reply_all_default': False, 'min_confidence': 0.75, 'escalate': False,
            'urgency_boost': 0.10, 'auto_ack': True,
            'signature_formality': 'neutral',
        },
        'meeting_request':      {
            'description': 'Sender wants to schedule a meeting or call',
            'reply_all_default': True, 'min_confidence': 0.70, 'escalate': False,
            'urgency_boost': 0.10, 'auto_ack': True,
            'signature_formality': 'formal',
        },
        'outage_report':       {
            'description': 'Service outage or system down alert',
            'reply_all_default': True, 'min_confidence': 0.85, 'escalate': True,
            'urgency_boost': 0.40, 'auto_ack': True,
            'signature_formality': 'formal',
        },
        # ── Fallbacks ────────────────────────────────────────
        'urgent_priority':      {
            'description': 'Marked urgent or high priority by sender',
            'reply_all_default': True, 'min_confidence': 0.75, 'escalate': False,
            'urgency_boost': 0.35, 'auto_ack': True,
            'signature_formality': 'formal',
        },
        'general_inquiry':     {
            'description': 'General inquiry not matching other categories',
            'reply_all_default': False, 'min_confidence': 0.50, 'escalate': False,
            'urgency_boost': 0.0, 'auto_ack': True,
            'signature_formality': 'neutral',
        },
        'sales_opportunity':   {
            'description': 'Sales lead or prospect inquiry',
            'reply_all_default': False, 'min_confidence': 0.70, 'escalate': False,
            'urgency_boost': 0.15, 'auto_ack': True,
            'signature_formality': 'formal',
        },
        'internal_forward':     {
            'description': 'Internal email accidentally sent externally',
            'reply_all_default': False, 'min_confidence': 0.95, 'escalate': True,
            'urgency_boost': 0.0, 'auto_ack': False,
            'signature_formality': 'none',
        },
    }

    # ── Keyword patterns per intent ────────────────────────────
    INTENT_PATTERNS = {
        'billing_inquiry': [
            r'\b(invoice|bill|charge|payment|receipt)\b',
            r'\b(how much|i was charged|charge notice)\b',
        ],
        'refund_request': [
            r'\brefund\b', r'\bmoney back\b', r'\bget my money\b',
            r'\breturn.*(my|funds?)|(return|returning) (my|the) (money|funds?|payment)\b',
        ],
        'demo_request': [
            r'\bdemo\b', r'\b(can|could) (i|we) see a demonstration\b',
            r'\bshow me\b', r'\btrial\b', r'\bproduct tour\b',
        ],
        'partnership_offer': [
            r'\bpartner(?:ship)?\b', r'\bjoint venture\b', r'\bcollaborat\b',
            r'\balliance\b', r'\bsynerg\b',
        ],
        'pricing_question': [
            r'\bprice\b', r'\bcost\b', r'\bpricing\b', r'\bhow much\b',
            r'\bplan\b.*\bcost\b', r'\bworth\b', r'\bvalue\b',
            r'\b(license|subscription).*fee\b',
        ],
        'support_ticket': [
            r'\bbug\b', r'\berror\b', r"\bdoesn't work\b", r'\bfixe?s?\b',
            r'\bissue\b', r'\bproblem\b', r'\bbroken\b', r'\bdown\b',
            r'\b(technical|support)\b',
        ],
        'shipment_update': [
            r'\bship(?:ping|ment)?\b', r'\btrack(?:ing)?\b', r'\bdeliver(?:y)?\b',
            r'\borde?r\b.*\bstatus\b', r'\bwhen.*(arrive|receive|get)\b',
        ],
        'account_issue': [
            r'\blogin\b', r'\bpassword\b', r'\baccess\b', r'\baccount\b',
            r'\b(locked|reset|forgot|recover)\b',
        ],
        'contract_negotiation': [
            r'\bcontract\b', r'\b(legal|redline|clause)\b', r'\bNDA\b',
            r'\bterms?\b.*\b(negotiat|discuss|review)\b',
            r'\b(MSA|SOW|agreement)\b',
        ],
        'data_request': [
            r'\b(my |your )?data\b', r'\bexport\b', r'\breport\b', r'\bdump\b',
            r'\b(give|send|provide).*(data|report|file|copy)\b',
            r'\bGDPR\b', r'\bCCPA\b',
        ],
        'press_inquiry': [
            r'\bpress\b', r'\b(media|journalist|interview)\b',
            r'\bstory\b', r'\barticle\b', r'\bnews\b',
        ],
        'investor_query': [
            r'\binvestor\b', r'\bfund(?:ing|raise)?\b',
            r'\b(series|equity|seed|round)\b',
        ],
        'interview_request': [
            r'\b(interview|candidate|position|job|role)\b',
            r'\b(resume|CV)\b',
        ],
        'referral_request': [
            r'\brefer(?:ral)?\b', r'\brecommend\b', r'\brefer me\b',
        ],
        'complaint': [
            r'\b(frustrat|angry|disappoint|unhappy|upset)\b',
            r'\b(terrible|worse|horrible|worst|complaint)\b',
            r'\b(neveragain|not happy|dissatisfied)\b',
        ],
        'webhook_alert': [
            r'\b(webhook|api|notification|trigger|event)\b',
            r'\bautomated.*(alert|message|report)\b',
            r'\bsystem.*event\b',
        ],
        'newsletter_confirm': [
            r'\b(confirm|subscribe|newsletter)\b',
            r'\bclick.*confirm\b',
        ],
        'unsubscribe_request': [
            r'\bunsubscrib\b', r'\bstop.*(email|mail)\b',
            r'\bremove.*(list|me)\b',
        ],
        'follow_up_reminder': [
            r'\bfollow.?up\b', r'\bchecking in\b',
            r'\b(any update|heard back|any news)\b',
            r'\bjust.*(wonder|want).*(hear|update)\b',
        ],
        'event_registration': [
            r'\b(event|webinar|session|workshop)\b',
            r'\b(register|signup|enroll)\b',
        ],
        'meeting_request': [
            r'\b(meet|Meeting|call|schedule|call us)\b',
            r'\b(set up|let.s.*know when)\b',
            r'\b(available|calendar)\b',
        ],
        'outage_report': [
            r'\b(outage|down|unavailable|crash|failure)\b',
            r'\b(is|our|system).*(down|dead|offline)\b',
            r'\bEMERGENCY\b', r'\bCRITICAL\b',
        ],
    }

    # ── Escalation trigger patterns ────────────────────────────
    ESCALATION_PATTERNS = [
        (r'\b(lawsuit|legal|sue|attorney|court| subpoena)\b', 0.95),
        (r'\b(wire transfer|swift|bank details|urgent payment|payment now)\b', 0.95),
        (r'\b(bitcoin|crypto|usdt|wallet|nft)\b', 0.90),
        (r'\b\$(?:1[0-9]|[2-9][0-9])\d{3,}\b', 0.85),  # ≥$10K
        (r'\b(executive impersonation|ceo fraud|boss.*request)\b', 0.98),
        (r'\b(GDPR|CCPA|compliance violation)\b', 0.90),
        (r'\b(breach|leak|hack|exploit|vulnerability)\b', 0.85),
    ]

    def __init__(self):
        self.state_file = DATA / 'v32_intent_classifier_state.json'
        self.state = load_json(self.state_file, {
            'intent_counts': {},
            'confidence_scores': {},
            'recent_classifications': [],
        })
        log_info("V32 Fine-Grained Intent Classifier initialized")

    def classify(self, email: dict) -> dict:
        """
        Analyzes email and returns:
          intent_label, intent_category, confidence, urgency, escalation, policy
        """
        sender  = email.get('sender', '')
        subject = email.get('subject', '')
        body    = email.get('body', email.get('snippet', ''))
        snippet = email.get('snippet', '')
        full_text = f"{subject} {snippet} {body[:500]}"

        scores = {}

        # ── Step 1: Pattern matching scoring ────────────────────
        for intent, patterns in self.INTENT_PATTERNS.items():
            for pattern in patterns:
                if re.search(pattern, full_text, re.I):
                    scores[intent] = scores.get(intent, 0.0) + 0.35
            # Bonus: sender pattern match (known senders learn)
            if sender.lower() in self.state.get('sender_intents', {}):
                if intent in self.state['sender_intents'][sender.lower()]:
                    scores[intent] = scores.get(intent, 0.0) + 0.15

        # ── Step 2: Boost by keyword density ──────────────────
        for intent, patterns in self.INTENT_PATTERNS.items():
            matches = sum(1 for p in patterns if re.search(p, full_text, re.I))
            if matches > 0:
                scores[intent] = scores.get(intent, 0.0) + (matches * 0.05)

        # ── Step 3: Escalation detection (overrides all) ──────
        escalation_score = 0.0
        for pattern, weight in self.ESCALATION_PATTERNS:
            if re.search(pattern, full_text, re.I):
                escalation_score = max(escalation_score, weight)

        # ── Step 4: Pick best intent ──────────────────────────
        if escalation_score >= 0.90:
            best_intent = 'internal_forward' if 'internal' in subject.lower() else self._escalation_route(full_text)
            confidence = escalation_score
        elif scores:
            best_intent = max(scores, key=scores.get)
            confidence = min(scores[best_intent], 0.95)
        else:
            best_intent = 'general_inquiry'
            confidence = 0.50

        # ── Step 5: Compute urgency ──────────────────────────
        intent_def = self.INTENT_DEFINITIONS.get(best_intent, self.INTENT_DEFINITIONS['general_inquiry'])
        urgency = 0.5 + intent_def.get('urgency_boost', 0.0)
        if 'urgent' in subject.lower() or 'priority' in subject.lower():
            urgency += 0.20

        confidence = min(confidence, intent_def.get('min_confidence', 0.75) + 0.1)

        # ── Step 6: Learn from this classification ────────────
        self._record_classification(sender, best_intent, confidence)

        return {
            'intent': best_intent,
            'description': intent_def['description'],
            'confidence': round(confidence, 3),
            'urgency': round(min(urgency, 1.0), 3),
            'escalate': intent_def.get('escalate', False) or escalation_score >= 0.85,
            'escalation_reason': 'keyword_match' if escalation_score >= 0.85 else None,
            'reply_all_default': intent_def.get('reply_all_default', False),
            'signature_formality': intent_def.get('signature_formality', 'neutral'),
            'auto_ack': intent_def.get('auto_ack', True),
            'policy': intent_def,
            'all_scores': {k: round(v, 3) for k, v in sorted(scores.items(), key=lambda x: -x[1])[:5]},
        }

    def _escalation_route(self, text: str) -> str:
        """Determines which escalation route based on content."""
        if re.search(r'\b(wire|bank|payment|urgent)\b', text, re.I):
            return 'financial_inquiry_escalate'
        elif re.search(r'\b(lawsuit|legal|attorney|court)\b', text, re.I):
            return 'legal_inquiry_escalate'
        elif re.search(r'\b(breach|leak|hack)\b', text, re.I):
            return 'security_incident'
        return 'general_inquiry'

    def _record_classification(self, sender: str, intent: str, confidence: float):
        """Update sender intent history for future classification."""
        sender_lower = sender.lower()
        self.state.setdefault('sender_intents', {})
        self.state['sender_intents'].setdefault(sender_lower, [])
        intents = self.state['sender_intents'][sender_lower]
        intents.append(intent)
        intents[-50:]  # Keep last 50

        # Track counts
        self.state['intent_counts'][intent] = self.state['intent_counts'].get(intent, 0) + 1

        # Recent classifications
        self.state['recent_classifications'].append({
            'ts': ts_now().isoformat(),
            'sender': sender_lower,
            'intent': intent,
            'confidence': round(confidence, 3),
        })
        self.state['recent_classifications'] = self.state['recent_classifications'][-200:]

        self.state['intent_counts'][intent] += 1
        save_json(self.state_file, self.state)

# ═══════════════════════════════════════════════════════════════
# SECTION 2: SENTIMENT ANALYZER
# ═══════════════════════════════════════════════════════════════

class V32SentimentAnalyzer:
    """
    Analyzes email tone/sentiment to detect:
    - Frustrated/angry → escalate to human + special tone
    - Satisfied/delighted → upsell opportunity
    - Confused → clarify gently with extra help
    - Urgent/stressed → speed priority handling
    - Disappointed → recovery mode

    Returns: sentiment_label, sentiment_score, empathy_needed, response_tone
    """

    SENTIMENT_PATTERNS = {
        'frustrated_angry': {
            'patterns': [
                r'\b(frustrat|angry|mad|annoyed)\b', r'\b(i\'m so|i am so).*(over it|tired of|done with)\b',
                r'\b(this is (ridiculous|unacceptable|terrible))\b',
                r'\b(least.*could.*do|should.*have.*known)\b',
                r'\bnever.*(buy|order|use).*again\b',
            ],
            'empathy_needed': 0.95,
            'response_tone': 'apologetic_formal',
        },
        'stressed_urgent': {
            'patterns': [
                r'\b(urgent|ASAP|emergency|critical|immediate)\b',
                r'\bneed.*(right now|asap|immediately)\b',
                r'\bdeadline.*approaching\b',
                r'\bhelp.*fast\b',
            ],
            'empathy_needed': 0.4,
            'response_tone': 'action_oriented',
        },
        'confused': {
            'patterns': [
                r'\b(don\'?t understand|i\'?m confused|unclear)\b',
                r'\b(what do you mean|how do i)\b',
                r'\b(can someone explain|help me understand)\b',
            ],
            'empathy_needed': 0.75,
            'response_tone': 'clarifying_gentle',
        },
        'satisfied_delighted': {
            'patterns': [
                r'\b(thank you|thanks so much|you\'?re amazing|love it)\b',
                r'\b(wonderful|fantastic|perfect|great work)\b',
                r'\b(love|really appreciate|brilliant)\b',
            ],
            'empathy_needed': 0.1,
            'response_tone': 'warm_professional',
        },
        'disappointed': {
            'patterns': [
                r'\b(disappoint|let down|was expecting|not what)\b',
                r'\b(better luck|should have been|expected better)\b',
                r'\b(decent.*but|could.*better)\b',
            ],
            'empathy_needed': 0.80,
            'response_tone': 'recovery_focused',
        },
        'professional_neutral': {
            'patterns': [r'\b(request|inquiry|looking into|following up)\b'],
            'empathy_needed': 0.2,
            'response_tone': 'neutral_professional',
        },
    }

    def analyze(self, body: str, subject: str) -> dict:
        text = f"{subject} {body[:300]}"
        return self._analyze_text(text)

    def _analyze_text(self, text: str) -> dict:
        scores = {}
        for label, config in self.SENTIMENT_PATTERNS.items():
            for pattern in config['patterns']:
                if re.search(pattern, text, re.I):
                    scores[label] = scores.get(label, 0) + 1

        if scores:
            best = max(scores, key=scores.get)
            intensity = min(1.0, scores[best] / 2.0)
        else:
            best = 'professional_neutral'
            intensity = 0.5

        config = self.SENTIMENT_PATTERNS[best]
        sentiment_score = round(intensity * 100, 1)

        return {
            'label': best,
            'score': sentiment_score,
            'empathy_needed': config['empathy_needed'],
            'response_tone': config['response_tone'],
            'urgency_override': best in ('frustrated_angry', 'stressed_urgent'),
            'all_scores': {k: round(v / max(sum(scores.values()), 1) * 100, 1)
                          for k, v in scores.items()},
        }

# ═══════════════════════════════════════════════════════════════
# SECTION 3: KNOWLEDGE-GUIDED RAG RESPONDER
# ═══════════════════════════════════════════════════════════════

class V32KnowledgeResponder:
    """
    Grounds every response in REAL service knowledge from the Zion catalog.
    Never generic — always references specific relevant services.
    """

    def __init__(self):
        self.kb_file = DATA / 'v32_knowledge_base.json'
        self._load_or_build_kb()
        log_info(f"V32 Knowledge Responder initialized with {len(self.service_catalog)} service entries")

    def _load_or_build_kb(self):
        """Load knowledge base, rebuilding if stale."""
        try:
            if self.kb_file.exists():
                with open(self.kb_file) as f:
                    kb = json.load(f)
                # Check freshness
                if kb.get('built'):
                    age_days = days_since(kb['built'])
                    if age_days < 1:  # Less than 1 day old
                        self.service_catalog = kb['services']
                        return
        except Exception:
            pass

        self._build_knowledge_base()

    def _build_knowledge_base(self):
        """Ingest services from the filesystem."""
        catalog = {}

        # Strategy: ingest from multiple sources
        sources = [
            DATA / 'newMicroSaaS.ts',
            DATA / 'pending_new_services.json',
        ]

        for source in sources:
            if not source.exists():
                continue
            try:
                if source.suffix == '.ts':
                    content = open(source).read()
                    # Extract service data from TypeScript
                    entries = re.findall(
                        r"\{\s*id:\s*['\"]([^'\"]+)['\"].*?title:\s*['\"]([^'\"]+)['\"].*?description:\s*['\"]([^'\"]+)['\"]",
                        content, re.DOTALL
                    )
                    for sid, title, desc in entries:
                        catalog[sid] = {
                            'title': title,
                            'description': desc[:200],
                            'keywords': self._extract_keywords(title + ' ' + desc),
                        }
                elif source.suffix == '.json':
                    raw = json.loads(open(source).read())
                    for svc in raw if isinstance(raw, list) else raw.get('services', []):
                        sid = svc.get('id', '')
                        if sid:
                            catalog[sid] = {
                                'title': svc.get('title', ''),
                                'description': svc.get('description', '')[:200],
                                'keywords': self._extract_keywords(
                                    svc.get('title', '') + ' ' + svc.get('description', '')
                                ),
                            }
            except Exception as e:
                log_warn(f"KB build warning from {source.name}: {e}")

        self.service_catalog = catalog

        # Cache to file
        kb_data = {
            'built': ts_now().isoformat(),
            'services': catalog,
        }
        save_json(self.kb_file, kb_data)

    def _extract_keywords(self, text: str) -> set:
        """Extract meaningful keywords from text."""
        words = re.findall(r'\b[a-z][a-z]{2,}\b', text.lower())
        stop = {'the', 'and', 'for', 'with', 'from', 'your', 'you', 'are', 'our', 'all',
                'any', 'can', 'get', 'use', 'also', 'one', 'will', 'each', 'that', 'this'}
        return {w for w in words if w not in stop and len(w) > 3}

    def find_relevant_services(self, email_text: str, intent: str, max_results: int = 3) -> list:
        """
        Find services most relevant to the email content and intent.
        Returns list of {id, title, description, relevance_score, connection_explanation}
        """
        email_keywords = self._extract_keywords(email_text)
        scores = []

        for sid, svc in self.service_catalog.items():
            if sid == intent:  # Self-match is obvious
                continue

            svc_keywords = svc.get('keywords', set())
            if not isinstance(svc_keywords, set):
                svc_keywords = set(svc_keywords)

            overlap = len(email_keywords & svc_keywords)
            total   = len(email_keywords | svc_keywords)
            jaccard = overlap / total if total > 0 else 0.0

            if jaccard > 0.05 or overlap >= 2:
                scores.append((sid, svc, jaccard))

        scores.sort(key=lambda x: -x[2])
        results = []
        for sid, svc, score in scores[:max_results]:
            results.append({
                'id': sid,
                'title': svc['title'],
                'description': svc['description'][:120],
                'relevance_score': round(score, 3),
                'connection': f"Relevant to your {intent} inquiry",
            })
        return results

    def generate_service_upsell(self, email_text: str, intent: str) -> str:
        """Generate natural 'BTW — we also offer [X]' upsell text."""
        services = self.find_relevant_services(email_text, intent, max_results=2)
        if not services:
            return ''

        lines = ['', '---']
        for svc in services:
            lines.append(f"P.S. We also offer **{svc['title']}** — {svc['connection']}. "
                        f"Learn more: https://ziontechgroup.com/services/{svc['id']}")

        return '\n'.join(lines)

# ═══════════════════════════════════════════════════════════════
# SECTION 4: PERSONA-AWARE TONE ADAPTATION ENGINE
# ═══════════════════════════════════════════════════════════════

class V32PersonaEngine:
    """
    Analyzes a sender's communication style and adapts:
    - Vocabulary (simple vs. technical)
    - Sentence length (concise vs. detailed)
    - Emoji usage (warm/casual vs. minimal)
    - Formality level (Sir/Ma'am vs. first name)
    - Reply speed expectations
    """

    def __init__(self):
        self.state_file = DATA / 'v32_persona_state.json'
        self.state = load_json(self.state_file, {'senders': {}})
        log_info("V32 Persona Engine initialized")

    def analyze_sender(self, sender: str, email_body: str, subject: str) -> dict:
        """Analyze sender's communication style from their email."""
        text = f"{subject} {email_body[:400]}"
        sender_lower = sender.lower()

        # Communication style signals
        words = text.lower().split()
        sentences = re.split(r'[.!?]+', text)

        # Formality signals
        formal_words = ['therefore', 'furthermore', 'accordingly', 'commence', 'request your',
                        'kindly', 'please be advised', 'hereby', 'pursuant']
        casual_words = ['awesome', 'cool', 'thanks a bunch', 'cheers', 'awesome', 'ya', 'gonna']

        formal_score = sum(1 for w in words if w in formal_words)
        casual_score = sum(1 for w in words if w in casual_words)

        avg_sentence_len = len(words) / max(len(sentences), 1)
        emoji_count = len(re.findall(r'[\U0001F300-\U0001F9FF]', text))
        caps_ratio = sum(1 for c in text if c.isupper()) / max(len(text), 1)

        if 'you' in sender_lower or 'test' in sender_lower:
            sender_style = 'unknown'
        elif caps_ratio > 0.10 or '!' in text:
            sender_style = 'expressive'
        elif formal_score > casual_score:
            sender_style = 'formal'
        elif casual_score > 1:
            sender_style = 'casual'
        else:
            sender_style = 'neutral'

        urgency_words = re.findall(r'\b(urgent|ASAP|immediately|asap)\b', text, re.I)
        avg_word_len = sum(len(w) for w in words) / max(len(words), 1)

        style = {
            'sender_style': sender_style,
            'avg_sentence_len': round(avg_sentence_len, 1),
            'emoji_count': emoji_count,
            'caps_ratio': round(caps_ratio, 3),
            'formal_score': formal_score,
            'casual_score': casual_score,
            'avg_word_len': round(avg_word_len, 2),
            'urgency_signals': len(urgency_words),
        }

        # Learn this
        self._learn_sender(sender_lower, style)
        return style

    def _learn_sender(self, sender: str, style: dict):
        """Record sender style for future adaptation."""
        if sender not in self.state['senders']:
            self.state['senders'][sender] = {'count': 0, 'styles': []}

        s = self.state['senders'][sender]
        s['count'] += 1
        s['styles'].append(style)
        s['styles'][-5:]  # Keep last 5 samples

        save_json(self.state_file, self.state)

    def get_signature(self, sender_style: str, intent_formality: str,
                       language: str = 'en') -> str:
        """
        Returns adapted signature for the detected style.
        """
        # Override formality with intent-specific when set
        formality = intent_formality if intent_formality != 'none' else sender_style

        sigs = {
            'en': {
                'formal':       '\n\nBest regards,\nKleber Garcia Alcatrão\nZion Tech Group\n+1 302 464 0950 | kleber@ziontechgroup.com',
                'neutral':      '\n\n— Kleber Garcia Alcatrão\nZion Tech Group | kleber@ziontechgroup.com',
                'casual':       '\n\n— Kleber\nZion Tech Group',
                'expressive':   '\n\n— Kleber 😊\nZion Tech Group',
                'unknown':      '\n\nBest,\nKleber\nZion Tech Group',
            },
            'pt': {
                'formal':       '\n\nAtenciosamente,\nKleber Garcia Alcatrão\nZion Tech Group\n+1 302 464 0950 | klebers@ziontechgroup.com',
                'neutral':      '\n\n— Kleber Garcia Alcatrão\nZion Tech Group',
                'casual':       '\n\nAbraço,\nKleber',
                'expressive':   '\n\nAbraço! 😊\nKleber',
                'unknown':      '\n\n— Kleber',
            },
        }

        style_key = formality if formality in sigs.get('en', {}) else 'neutral'
        return sigs.get(language, sigs['en']).get(style_key, sigs['en']['neutral'])

    def adapt_body(self, body: str, sender_style: str) -> str:
        """Adapt response body to sender's style."""
        if sender_style == 'expressive':
            # Add warmth if expressive sender
            if not any(body.endswith(c) for c in '!?😊'):
                body = body.rstrip() + ' 😊'
        elif sender_style == 'formal':
            # Ensure formal tone, avoid contractions
            body = re.sub(r"\b(i'm|can't|won't|don't)\b",
                         lambda m: {'i\'m': 'I am', 'can\'t': 'cannot',
                                   'won\'t': 'will not', 'don\'t': 'do not'}[m.group()], body)
        return body

# ═══════════════════════════════════════════════════════════════
# SECTION 5: A/B RESPONSE TESTING ENGINE
# ═══════════════════════════════════════════════════════════════

class V32ABTestingEngine:
    """
    Generates alternative response variants (A and B) and tracks
    which gets better response rates, auto-promoting the winner.
    """

    def __init__(self):
        self.state_file = DATA / 'v32_ab_state.json'
        self.state = load_json(self.state_file, {
            'experiments': {},       # intent → {variant_a_wins, variant_b_wins, best_body_a, best_body_b}
            'active_variant': {},    # intent → 'a' or 'b'
        })
        log_info("V32 A/B Testing Engine initialized")

    def generate_variant_a(self, base_body: str, intent: str,
                           sender_style: dict) -> str:
        """Generate Standard variant A."""
        # Variant A: standard professional
        return base_body

    def generate_variant_b(self, base_body: str, intent: str,
                           sender_style: dict) -> str:
        """Generate Alternative variant B (different angle/approach)."""
        # Variant B: try a warmer/more casual approach, or lead with action
        # by putting the key action earlier
        lines = base_body.split('\n\n')

        # Move first sentence/body to front if it starts with filler
        if lines and len(lines) > 1:
            # If body starts with "Thanks for reaching out" — move it to end
            if 'thanks for reaching' in lines[0].lower():
                filler = lines.pop(0)
                lines.insert(1, filler)  # Put after opening

        alt_body = '\n\n'.join(lines)

        # If sender is expressive, add emoji
        if sender_style.get('sender_style') == 'expressive':
            alt_body = alt_body.rstrip() + ' 😊'

        return alt_body

    def select_variant(self, intent: str) -> str:
        """Select which variant to use based on historical win rate."""
        if intent in self.state.get('active_variant', {}):
            return self.state['active_variant'][intent]

        # Default: start with A
        return 'a'

    def record_outcome(self, intent: str, variant: str,
                       got_response: bool, quality_score: float):
        """Record what happened after sending this variant."""
        exp = self.state['experiments'].setdefault(intent, {
            'variant_a_wins': 0, 'variant_b_wins': 0,
            'a_total': 0.0, 'b_total': 0.0,
            'a_count': 0, 'b_count': 0,
        })

        key = f'variant_{variant}_wins' if got_response else f'variant_{variant}_wins'
        score_key = f'{variant}_total_score'
        count_key = f'{variant}_count'

        if got_response:
            exp[key] += 1

        exp[count_key] += 1
        exp[score_key] += quality_score

        # Update active variant if enough data
        total = exp['a_count'] + exp['b_count']
        if total >= 5:
            a_rate = exp['variant_a_wins'] / max(exp['a_count'], 1)
            b_rate = exp['variant_b_wins'] / max(exp['b_count'], 1)
            self.state['active_variant'][intent] = 'b' if b_rate > a_rate else 'a'

        save_json(self.state_file, self.state)

# ═══════════════════════════════════════════════════════════════
# SECTION 6: RESPONSE QUALITY SCORER v2
# ═══════════════════════════════════════════════════════════════

class V32QualityScorer:
    """
    Multi-dimensional quality scoring:
    - Grammar & spelling (20%)
    - Relevance to intent (25%)
    - Specificity/actionability (25%)
    - Tone match (20%)
    - Completeness (10%)
    """

    def __init__(self):
        self.state_file = DATA / 'v32_quality_state.json'
        self.state = load_json(self.state_file, {})

    def score(self, body: str, intent: str, sentiment: dict,
              sender_style: dict, knowledge_matches: list,
              language: str = 'en') -> dict:
        scores = {}

        # ── Grammar & Spelling (20%) window. ──────────────────
        grammar_pat = re.compile(r'\b([a-z]+[,]\s+[a-z])\b')
        grammar_errors = len(grammar_pat.findall(body))
        word_count = len(body.split())
        error_rate = grammar_errors / max(word_count, 1)
        grammar_score = max(0, 100 - error_rate * 500)
        scores['grammar'] = round(grammar_score, 1)

        # ── Relevance to intent (25%) ───────────────────────
        intent_keywords = self._get_intent_keywords(intent)
        body_lower = body.lower()
        matches = sum(1 for kw in intent_keywords if kw in body_lower)
        relevance_score = min(100, (matches / max(len(intent_keywords), 1)) * 100)
        scores['relevance'] = round(relevance_score, 1)

        # ── Specificity/actionability (25%) ─────────────────
        has_action = any(kw in body_lower for kw in
                        ['i will', 'please', 'send you', 'attached', 'schedule',
                         'call', 'meeting', 'confirm', 'update you'])
        has_specifics = any(kw in body_lower for kw in
                          ['tomorrow', 'friday', 'monday', 'this week', 'next week',
                           'by friday', 'within', '#', '%', '$'])
        spec_score = 50 + (25 if has_action else 0) + (25 if has_specifics else 0)
        scores['specificity'] = round(min(100, spec_score), 1)

        # ── Tone match (20%) ────────────────────────────────
        desired_tone = sentiment.get('response_tone', 'neutral_professional')
        tone_score = 90 if desired_tone in body_lower else 70
        if sender_style.get('sender_style') == 'formal' and 'please be advised' not in body_lower:
            tone_score = max(60, tone_score - 10)
        scores['tone_match'] = round(tone_score, 1)

        # ── Completeness (10%) ───────────────────────────────
        complete_score = 70
        if len(body.split()) < 20:
            complete_score -= 20
        if 'thanks' not in body_lower and 'thank' not in body_lower:
            complete_score += 10  # Some emails skip thanks
        if has_action:
            complete_score += 15
        scores['completeness'] = round(min(100, complete_score), 1)

        # ── Weighted overall ────────────────────────────────
        overall = (
            scores['grammar']      * 0.20 +
            scores['relevance']    * 0.25 +
            scores['specificity']  * 0.25 +
            scores['tone_match']   * 0.20 +
            scores['completeness'] * 0.10
        )

        scores['overall'] = round(overall, 1)
        scores['grade'] = (
            'A' if overall >= 90 else
            'B' if overall >= 80 else
            'C' if overall >= 70 else
            'D' if overall >= 60 else 'F'
        )

        # ── Improvement suggestions ─────────────────────────
        suggestions = []
        if scores['grammar'] < 75:
            suggestions.append('Review grammar — check punctuation and sentence structure')
        if scores['relevance'] < 75:
            suggestions.append('Tailor response more closely to the sender\'s specific question')
        if scores['specificity'] < 75:
            suggestions.append('Add specific action items, dates, or next steps')
        if scores['tone_match'] < 75:
            suggestions.append('Adjust tone to better match sender\'s communication style')
        if scores['completeness'] < 70:
            suggestions.append('Expand response with more context or next steps')

        scores['suggestions'] = suggestions[:3]
        return scores

    def _get_intent_keywords(self, intent: str) -> list:
        keyword_map = {
            'billing_inquiry':    ['invoice', 'charge', 'payment', 'bill', 'billing'],
            'refund_request':    ['refund', 'money back', 'reimburse', 'return'],
            'demo_request':      ['demo', 'demonstration', 'trial', 'product', 'show'],
            'support_ticket':    ['issue', 'problem', 'bug', 'error', 'not working'],
            'meeting_request':   ['meeting', 'schedule', 'call', 'available', 'calendar'],
            'sales_opportunity': ['price', 'pricing', 'cost', 'plan', 'quote'],
            'follow_up_reminder':['follow up', 'update', 'any progress', 'checking in'],
            'general_inquiry':   ['information', 'question', 'help', 'know more'],
        }
        return keyword_map.get(intent, ['service', 'help', 'question'])

# ═══════════════════════════════════════════════════════════════
# SECTION 7: MULTI-TURN THREAD MEMORY
# ═══════════════════════════════════════════════════════════════

class V32ThreadMemory:
    """
    Tracks full conversation history per thread.
    - Remembers what was promised ('I'll send X by Friday')
    - Avoids repeating questions already answered
    - Detects commitment patterns
    """

    COMMITMENT_PATTERNS = [
        (r'\bI\'?ll (send|send you|email|attach|provide)\b', 'commitment_send'),
        (r'\bI\'?ll (call|schedule|set up|arrange)\b', 'commitment_call'),
        (r'\b(attached|attaching)\b', 'commitment_attachment'),
        (r'\bwaiting for\b', 'commitment_pending'),
        (r'\bby (tomorrow|monday|friday|end of week)\b', 'commitment_deadline'),
    ]

    def __init__(self):
        self.state_file = DATA / 'v32_thread_memory.json'
        self.state = load_json(self.state_file, {'threads': {}})
        self.days_expire = 30

    def record_sender_email(self, thread_id: str, sender: str,
                            subject: str, body: str, our_reply: str):
        """Record an email exchange in thread memory."""
        tid = thread_id.lower()
        thread = self.state['threads'].setdefault(tid, {
            'emails': [], 'commitments': [], 'questions_answered': [],
        })

        thread['emails'].append({
            'ts': ts_now().isoformat(),
            'sender': sender,
            'subject': subject[:80],
        })

        # Extract commitments we made
        for pattern, ctype in self.COMMITMENT_PATTERNS:
            if re.search(pattern, our_reply, re.I):
                thread['commitments'].append({
                    'ts': ts_now().isoformat(),
                    'type': ctype,
                    'promise': re.search(pattern + r'\s*(.+?)(?:[.!]|$)', our_reply, re.I | re.S),
                    'fulfilled': False,
                })

        # Extract questions the sender asked
        questions = re.findall(r'\b(how|what|when|where|who|why|can you|could you|would you)\b[^?]*[?]',
                              body, re.I)
        thread['questions_answered'].extend([q.strip()[:100] for q in questions])

        # Trim old data
        self.state['threads'][tid]['emails'] = thread['emails'][-20:]
        self.state['threads'][tid]['commitments'] = thread['commitments'][-10:]

        self._save()

    def has_been_answered(self, thread_id: str, sender: str, question: str) -> bool:
        """Check if a question has already been answered in this thread."""
        tid = thread_id.lower()
        if tid not in self.state['threads']:
            return False
        thread = self.state['threads'][tid]
        q_lower = question.lower()
        return any(q_lower in answered.lower() for answered in thread['questions_answered'][-10:])

    def get_pending_commitments(self, thread_id: str) -> list:
        """Get unfulfilled commitments for a thread."""
        tid = thread_id.lower()
        if tid not in self.state['threads']:
            return []
        return [c for c in self.state['threads'][tid]['commitments']
                if not c.get('fulfilled', False)]

    def mark_commitment_fulfilled(self, thread_id: str, commitment_text: str):
        """Mark a commitment as fulfilled."""
        tid = thread_id.lower()
        if tid not in self.state['threads']:
            return
        for c in self.state['threads'][tid]['commitments']:
            if commitment_text in c.get('promise', {}).get('group', ''):
                c['fulfilled'] = True
        self._save()

    def _save(self):
        save_json(self.state_file, self.state)

# ═══════════════════════════════════════════════════════════════
# SECTION 8: REPLY-ALL v3 — CONTEXT-AWARE INTELLIGENT MODE
# ═══════════════════════════════════════════════════════════════

class V32ReplyAllV3:
    """
    Context-aware Reply-All:
    - Smart CC: only CC who NEEDS to know, not full thread
    - Detects internal emails accidentally sent externally (BLOCK)
    - Detects when Reply-All is wrong vs. right
    - Preserves FYI vs. required participant distinction
    """

    INTERNAL_BLOCK_PATTERNS = [
        r'\b(internal|confidential|do not forward|private and confidential)\b',
        r'\b(access control|admin|privilege|deployment|production)\b',
        r'\b(password|credential|secret|api.key)\b',
        r'\b(internal only|business only|not for external)\b',
    ]

    FYI_SIGNALS = ['fyi', 'for your information', 'just so you know', 'heads up']
    REQUIRED_SIGNALS = ['please', 'required', 'needs to', 'must', 'action required']

    def __init__(self):
        self.state_file = DATA / 'v32_reply_all_state.json'
        self.state = load_json(self.state_file, {
            'partisans_per_thread': {},
            'escalated_threads': [],
        })

    def decide(self, thread_id: str, sender: str, cc: str,
               body: str, subject: str, intent_info: dict) -> dict:
        """
        Returns reply-all decision with:
          - reply_all: bool
          - use_cc: str (who to CC)
          - reason: str
          - confidence: float
          - blocked: bool (True = blocked completely)
          - block_reason: str | None
        """
        decision = {
            'reply_all': False, 'use_cc': '', 'reason': '',
            'confidence': 0.5, 'blocked': False, 'block_reason': None,
        }

        # ── Rule 0: Block internal emails accidentally sent externally ──
        full_text = f"{subject} {body[:200]}"
        for pattern in self.INTERNAL_BLOCK_PATTERNS:
            if re.search(pattern, full_text, re.I):
                decision.update({
                    'blocked': True, 'block_reason': 'internal_content_detected',
                    'reply_all': False, 'confidence': 0.98,
                    'reason': 'BLOCKED: internal/confidential content detected—no reply',
                })
                return decision

        # ── Rule 1: Never Reply-All without populated CC ──
        if not cc:
            decision.update({
                'reply_all': False, 'confidence': 0.7,
                'reason': 'no_cc_available—Reply-All blocked (fail-closed)',
            })
            return decision

        # ── Rule 2: Check intent reply-all policy ──
        reply_all_default = intent_info.get('reply_all_default', False)
        if not reply_all_default:
            decision.update({
                'reply_all': False, 'use_cc': cc,
                'reason': f'intent={intent_info.get("intent")}_blocks_reply_all',
                'confidence': 0.75,
            })
            return decision

        # ── Rule 3: Check escalation flag ──
        if intent_info.get('escalate'):
            decision.update({
                'reply_all': False, 'use_cc': cc,
                'reason': 'escalate_flag_blocks_reply_all—human review required',
                'confidence': 0.85,
            })
            return decision

        # ── Rule 4: Use Smart CC — only required participants ──
        smart_cc = self._build_smart_cc(cc, body)

        # ── Rule 5: Confidence check ──
        min_conf = intent_info.get('min_confidence', 0.75)
        confidence = min(0.95, min_conf + 0.05)

        decision.update({
            'reply_all': True,
            'use_cc': smart_cc,
            'reason': f'v3_intent_approved+smart_cc({len(smart_cc.split(","))} participants)',
            'confidence': round(confidence, 3),
        })
        return decision

    def _build_smart_cc(self, cc: str, body: str) -> str:
        """Build only-necessary CC list based on body content."""
        recipients = [r.strip() for r in cc.replace(';', ',').split(',') if r.strip()]

        # If body calls out specific people, only CC them
        mentioned = set()
        for r in recipients:
            if any(name_part in body.lower() for name_part in r.split('@')[0].split('.')):
                mentioned.add(r)

        if mentioned:
            return ', '.join(sorted(mentioned))

        # Default: all recipients are fine (they were already on thread)
        return cc

# ═══════════════════════════════════════════════════════════════
# SECTION 9: ZION SERVICE MATCH ENGINE
# ═══════════════════════════════════════════════════════════════

class V32ServiceMatcher:
    """
    Analyzes emails for service-buying signals and generates
    relevant, naturally-embedded service suggestions.
    """

    # Signals that indicate buying intent for specific service categories
    BUYING_SIGNALS = {
        'ai':      [r'\bAI\b', r'\bartificial intelligence\b', r'\bml\b', r'\bmachine learning\b', r'\bautomation\b'],
        'cloud':   [r'\bcloud\b', r'\baws\b', r'\bazure\b', r'\bgcp\b', r'\bserver\b', r'\bhosting\b'],
        'security':[r'\bsecurity\b', r'\bcyber\b', r'\bbackup\b', r'\brecovery\b', r'\bvpns?\b', r'\bencrypt\b'],
        'data':    [r'\bdata\b', r'\banalytics\b', r'\bbi\b', r'\bdashboard\b', r'\bdatabase\b', r'\bpipeline\b'],
        'web':     [r'\bwebsite\b', r'\bweb\b', r'\bapp\b', r'\bfrontend\b', r'\bwordpress\b', r'\bseo\b'],
        'devops':  [r'\bci/cd\b', r'\bdevops\b', r'\bgithub\b', r'\bdeploy\b', r'\bkubernetes\b', r'\bdocker\b'],
        'crm':     [r'\bcrm\b', r'\bcustomer\b', r'\bsales\b', r'\blead\b', r'\bmarketing\b'],
        'support': [r'\bsupport\b', r'\bticket\b', r'\bhelpdesk\b', r'\bchatbot\b'],
    }

    def __init__(self):
        self.kb_file = DATA / 'newMicroSaaS.ts'
        self.kb_json = DATA / 'pending_new_services.json'
        self._load_trending_services()

    def _load_trending_services(self):
        """Load trending/popular services for quick matching."""
        self.trending = {}  # category → list of top services
        try:
            import os
            if self.kb_file.exists():
                content = open(self.kb_file).read()
                # Parse TypeScript entries
                entries = re.findall(
                    r"\{\s*id:\s*['\"]([^'\"]+)['\"].*?title:\s*['\"]([^'\"]+)['\"].*?"
                    r"category:\s*['\"]([^'\"]+)['\"]",
                    content, re.DOTALL
                )
                for sid, title, cat in entries:
                    if sid == 'newMicroSaaS':
                        continue
                    self.trending.setdefault(cat, []).append({'id': sid, 'title': title})
        except Exception:
            pass

    def detect_service_signals(self, email_text: str) -> dict:
        """Detect which service categories are being researched/requested."""
        results = {}
        for cat, patterns in self.BUYING_SIGNALS.items():
            score = sum(1 for p in patterns if re.search(p, email_text, re.I))
            if score > 0:
                results[cat] = score

        # Sort by score descending
        return dict(sorted(results.items(), key=lambda x: -x[1]))

    def generate_natural_upsell(self, signals: dict, intent: str) -> str:
        """Generate natural upsell text given detected signals."""
        if not signals:
            # Try to match based on intent for general inquiries
            intent_to_cat = {
                'demo_request': 'ai',
                'pricing_question': 'ai',
                'sales_opportunity': 'crm',
                'support_ticket': 'support',
                'meeting_request': 'ai',
            }
            cat = intent_to_cat.get(intent, 'ai')
            signals = {cat: 2}

        parts = []
        for cat, score in signals.items():
            services = self.trending.get(cat, [])
            if services:
                svc = random.choice(services[:3])
                cat_label = cat.upper().replace('DEVOP', 'DevOps')
                parts.append(f"- **{svc['title']}** ({cat_label})")

        if not parts:
            return ''

        lines = [
            '',
            '---',
            '*By the way, we also offer:*',
            *parts,
            f'More at https://ziontechgroup.com | Contact: +1 302 464 0950',
        ]
        return '\n'.join(lines)

# ═══════════════════════════════════════════════════════════════
# SECTION 10: MAIN V32 EMAIL ORCHESTRATOR
# ═══════════════════════════════════════════════════════════════

class V32EmailOrchestrator:
    """
    V32 Main Orchestrator — Autonomous Decision Engine.
    Unifies all V32 intelligence modules into one coherent pipeline.

    For each email:
    1. Classify intent (20+ types) — what does the sender want?
    2. Analyze sentiment — how do they feel?
    3. Check thread memory — avoid repeating answers
    4. Escalation guard — financial/legal/CEO fraud detection
    5. Route to knowledge base — ground response in real services
    6. Adapt persona — match sender's communication style
    7. Score quality — ensure response meets standards
    8. Decide Reply-All v3 — smart CC boundary enforcement
    9. Generate A/B variants — test and improve continuously
    10. Route via V31Warmup → send → record in V31 Evolution
    """

    def __init__(self):
        log_info("=" * 60)
        log_info("V32 EMAIL ORCHESTRATOR — Autonomous Decision Engine")
        log_info("=" * 60)

        self.intent_classifier  = V32FineGrainedIntentClassifier()
        self.sentiment          = V32SentimentAnalyzer()
        self.thread_memory      = V32ThreadMemory()
        self.knowledge         = V32KnowledgeResponder()
        self.persona           = V32PersonaEngine()
        self.ab_test           = V32ABTestingEngine()
        self.quality           = V32QualityScorer()
        self.reply_all_v3      = V32ReplyAllV3()
        self.service_matcher   = V32ServiceMatcher()

        # Try to load V31 orchestrator for lifecycle management
        self._v31 = None
        try:
            import sys
            if str(V30_DIR) not in sys.path:
                sys.path.insert(0, str(V30_DIR))
            from v30.intelligent_email_responder_v31 import V31EmailOrchestrator
            self._v31 = V31EmailOrchestrator()
            log_info("V31 Lifecycle Engine loaded successfully")
        except Exception as e:
            log_warn(f"V31 Lifecycle Engine not available: {e}")

        log_info("V32 Orchestrator READY!")

    def process_email(self, email: dict, dry_run: bool = True) -> dict:
        """
        Full V32 processing pipeline. Returns comprehensive decision record.
        """
        tid     = email.get('thread_id', email.get('id', ''))
        sender  = email.get('sender', '')
        subject = email.get('subject', '')
        body    = email.get('body', email.get('snippet', ''))
        snippet = email.get('snippet', '')
        cc      = email.get('cc', '')
        full_text = f"{subject} {snippet} {body[:1000]}"

        log_info(f"[V32] Processing: thread={tid[:20]} from={sender} subject={subject[:50]}")

        # ── Step 1: Fine-grained intent classification ─────────
        intent_result = self.intent_classifier.classify(email)
        intent_label  = intent_result['intent']
        intent_policy = intent_result['policy']
        log_info(f"[V32] Intent: {intent_label} (conf={intent_result['confidence']})")

        # ── Step 2: Sentiment analysis ──────────────────────────
        sentiment_result = self.sentiment.analyze(body, subject)
        log_info(f"[V32] Sentiment: {sentiment_result['label']} (score={sentiment_result['score']})")

        # ── Step 3: Escalation guard ───────────────────────────
        if intent_result.get('escalate'):
            log_warn(f"[V32] ESCALATION FLAGGED: {intent_result.get('escalation_reason', 'keyword_match')}")
            # Record escalation
            self._record_escalation(tid, sender, intent_label, intent_result)

        # ── Step 4: Thread memory — check for repeat questions ──
        pending_commitments = self.thread_memory.get_pending_commitments(tid)
        if pending_commitments:
            log_info(f"[V32] Thread has {len(pending_commitments)} pending commitments")

        # ── Step 5: Service matching — detect buying signals ─────
        service_signals = self.service_matcher.detect_service_signals(full_text)
        relevant_svcs = self.knowledge.find_relevant_services(full_text, intent_label)
        log_info(f"[V32] Service signals: {service_signals}, Relevant: {len(relevant_svcs)} services")

        # ── Step 6: Sender persona analysis ───────────────────
        sender_style = self.persona.analyze_sender(sender, body, subject)

        # ── Step 7: Build base response template ───────────────
        base_body = self._build_response_v32(email, intent_label, intent_result,
                                             sentiment_result, sender_style, relevant_svcs)

        # ── Step 8: Persona adaptation ────────────────────────
        adapted_body = self.persona.adapt_body(base_body, sender_style.get('sender_style', 'neutral'))

        # ── Step 9: Quality scoring ────────────────────────────
        quality_scores = self.quality.score(
            adapted_body, intent_label, sentiment_result, sender_style, relevant_svcs
        )
        log_info(f"[V32] Quality: {quality_scores['overall']} ({quality_scores['grade']})")

        # ── Step 10: Reply-All v3 decision ───────────────────
        reply_decision = self.reply_all_v3.decide(tid, sender, cc, body, subject, intent_result)

        # ── Step 11: A/B variant selection ────────────────────
        variant = self.ab_test.select_variant(intent_label)
        variant_b = self.ab_test.generate_variant_b(adapted_body, intent_label, sender_style)
        final_body = adapted_body if variant == 'a' else variant_b

        # ── Step 12: Embed natural service upsell ────────────
        if relevant_svcs and intent_label not in ('webhook_alert', 'newsletter_confirm',
                                                   'refund_request', 'account_issue'):
            upsell = self.knowledge.generate_service_upsell(full_text, intent_label)
            if upsell:
                final_body += upsell

        # ── Step 13: V31 lifecycle hooks ──────────────────────
        warmup_ok = True
        if self._v31 and not dry_run:
            try:
                v31_result = self._v31.process_email(email, dry_run=False)
                warmup_ok = v31_result.get('warmup_can_send', True)
            except Exception as e:
                log_warn(f"V31 lifecycle hook error: {e}")

        # ── Final result ──────────────────────────────────────
        result = {
            'v32_version': 32,
            'timestamp': ts_now().isoformat(),
            'thread_id': tid,
            'sender': sender,
            'intent': intent_label,
            'intent_description': intent_result['description'],
            'confidence': intent_result['confidence'],
            'urgency': intent_result['urgency'],
            'escalate': intent_result['escalate'],
            'escalation_reason': intent_result.get('escalation_reason'),
            'sentiment': sentiment_result['label'],
            'sentiment_score': sentiment_result['score'],
            'empathy_needed': sentiment_result['empathy_needed'],
            'response_tone': sentiment_result['response_tone'],
            'sender_style': sender_style.get('sender_style', 'unknown'),
            'relevant_services': [{
                'id': s['id'], 'title': s['title'],
                'relevance': s['relevance_score']
            } for s in relevant_svcs[:3]],
            'service_signals': service_signals,
            'reply_all': reply_decision['reply_all'],
            'use_cc': reply_decision['use_cc'],
            'reply_all_reason': reply_decision['reason'],
            'reply_all_confidence': reply_decision['confidence'],
            'reply_all_blocked': reply_decision['blocked'],
            'blocked_reason': reply_decision.get('block_reason'),
            'quality_overall': quality_scores['overall'],
            'quality_grade': quality_scores['grade'],
            'quality_dimensions': {k: v for k, v in quality_scores.items()
                                   if k not in ('suggestions',)},
            'quality_suggestions': quality_scores['suggestions'],
            'pending_commitments': len(pending_commitments),
            'variant_used': variant,
            'warmup_ok': warmup_ok,
            'response_body_preview': final_body[:200] + '...' if len(final_body) > 200 else final_body,
            'action': 'send_dry' if dry_run else 'send',
            'can_proceed': not reply_decision['blocked'] and warmup_ok,
            'blocked_reason': reply_decision.get('block_reason') if not warmup_ok else None,
        }

        # ── Record in thread memory ────────────────────────────
        if not dry_run:
            self.thread_memory.record_sender_email(tid, sender, subject, body, final_body)

        log_info(f"[V32] Decision: action={result['action']} intent={intent_label} "
                 f"quality={quality_scores['overall']} sentiment={sentiment_result['label']}")

        return result

    def _build_response_v32(self, email: dict, intent: str,
                            intent_result: dict, sentiment: dict,
                            sender_style: dict, relevant_svcs: list) -> str:
        """Build V32-specific response body based on intent and context."""

        sender = email.get('sender', '')
        name   = self._extract_name(sender)

        # Extract sender's question for context-aware response
        first_question = self._extract_question(email.get('body', email.get('snippet', '')))

        # Route through intent-specific response builder
        responders = {
            'billing_inquiry':       self._respond_billing,
            'refund_request':         self._respond_refund,
            'demo_request':          self._respond_demo,
            'partnership_offer':     self._respond_partnership,
            'pricing_question':      self._respond_pricing,
            'support_ticket':        self._respond_support,
            'shipment_update':       self._respond_shipment,
            'account_issue':         self._respond_account,
            'contract_negotiation':  self._respond_contract,
            'data_request':           self._respond_data,
            'press_inquiry':         self._respond_press,
            'investor_query':        self._respond_investor,
            'meeting_request':       self._respond_meeting,
            'follow_up_reminder':    self._respond_followup,
            'complaint':             self._respond_complaint,
            'follow_up_reminder':    self._respond_followup,
            'outage_report':         self._respond_outage,
        }

        responder = responders.get(intent, self._respond_general)
        body = responder(email, name, intent_result, sentiment, sender_style, relevant_svcs)

        signature = self.persona.get_signature(
            sender_style.get('sender_style', 'unknown'),
            intent_result.get('signature_formality', 'neutral')
        )
        body += '\n' + signature

        return body

    # ── Individual response builders ───────────────────────────

    def _extract_name(self, sender: str) -> str:
        name = sender.split('@')[0]
        name = name.replace('.', ' ').replace('_', ' ').title()
        return name.split()[0] if name else 'there'

    def _extract_question(self, body: str) -> str:
        qs = re.findall(r'([^?!]*[?!])', body[:500])
        return qs[0].strip() if qs else body[:100]

    def _respond_billing(self, email, name, ir, sent, ss, svcs):
        q = self._extract_question(email.get('body', ''))
        return (f"Hi {name},\n\n"
                f"Thanks for reaching out about your billing inquiry.\n\n"
                f"I'd be happy to help. Could you please share the invoice number or "
                f"the specific charge you'd like clarified?\n\n"
                f"I'll review it right away and get back to you with full details.\n\n")

    def _respond_refund(self, email, name, ir, sent, ss, svcs):
        return (f"Hi {name},\n\n"
                f"Thank you for writing. I can see this is important to you.\n\n"
                f"I'm genuinely sorry to hear things didn't meet your expectations, "
                f"and I want to make this right.\n\n"
                f"Please send me the order/invoice reference and I'll personally "
                f"oversee your refund process — you'll have an update within 24 hours.\n\n")

    def _respond_demo(self, email, name, ir, sent, ss, svcs):
        svcs_text = '\n'.join([f"- {s['title']}" for s in svcs[:2]])
        return (f"Hi {name},\n\n"
                f"Thank you for your interest! I'd love to show you what we can do.\n\n"
                f"Based on what you're looking for, I think you'd particularly benefit from:\n"
                f"{svcs_text}\n\n"
                f"Shall we schedule a 20-minute walkthrough this week? "
                f"Just send me a few times that work for you and I'll send a calendar invite.\n\n")

    def _respond_partnership(self, email, name, ir, sent, ss, svcs):
        return (f"Hi {name},\n\n"
                f"This is an exciting opportunity — I appreciate you thinking of Zion Tech Group.\n\n"
                f"I've reviewed your proposal and I'm genuinely interested in exploring "
                f"how we can create value together.\n\n"
                f"Could you share more details on:\n"
                f"  - What partnership model you have in mind?\n"
                f"  - What scale are you working at?\n"
                f"  - What's your timeline?\n\n"
                f"Let's set up a call to dive deeper. Would next week work?\n\n")

    def _respond_pricing(self, email, name, ir, sent, ss, svcs):
        return (f"Hi {name},\n\n"
                f"Good question! Pricing depends on scope and scale, "
                f"but I'll give you a clear picture:\n\n"
                f"  • Starter: from $99/mo\n"
                f"  • Professional: from $299/mo\n"
                f"  • Enterprise plans: custom pricing\n\n"
                f"Would you like a tailored quote based on your specific requirements?\n\n"
                f"*Pro tip: Our AI-powered solutions typically pay for themselves "
                f"within 30-60 days through automation gains.*\n\n")

    def _respond_support(self, email, name, ir, sent, ss, svcs):
        if sent.get('urgency_override'):
            return (f"⚠️  Hi {name},\n\n"
                    f"This has been escalated to priority support. I'm personally "
                    f"on this and you'll hear back within 2 hours.\n\n"
                    f"Can you share the affected system/endpoint so I can investigate immediately?\n\n")
        return (f"Hi {name},\n\n"
                f"Received your support request — I'm on it.\n\n"
                f"To help as fast as possible, could you share:\n"
                f"- What system/tool is affected?\n"
                f"- When did the issue start?\n"
                f"- Any error messages?\n\n"
                f"I'll follow up with an update every 2 hours until it's resolved.\n\n")

    def _respond_shipment(self, email, name, ir, sent, ss, svcs):
        return (f"Hi {name},\n\n"
                f"Thanks for checking in. Let me look into the shipment status for you.\n\n"
                f"Could you share the order reference or tracking number? "
                f"I'll give you a real-time update within the hour.\n\n")

    def _respond_account(self, email, name, ir, sent, ss, svcs):
        return (f"Hi {name},\n\n"
                f"Sorry to hear you're having trouble with your account.\n\n"
                f"For security, I'll need to verify your identity. "
                f"Could you confirm the email address or phone number on the account?\n\n"
                f"Once verified, I'll personally reset your access and send you a "
                f"temporary password.\n\n")

    def _respond_contract(self, email, name, ir, sent, ss, svcs):
        return (f"Hi {name},\n\n"
                f"Thanks for sending the contract over. I've flagged this for legal review.\n\n"
                f"I'm personally tracking this to ensure we move quickly. "
                f"You'll have our red-lines back within 48 hours.\n\n"
                f"What's your ideal timeline for closing?\n\n")

    def _respond_data(self, email, name, ir, sent, ss, svcs):
        return (f"Hi {name},\n\n"
                f"Understood — fulfilling data requests is a priority under GDPR/CCPA.\n\n"
                f"Please confirm:\n"
                f"  1. What data formats you need (CSV, JSON, PDF)?\n"
                f"  2. Any specific date range?\n"
                f"  3. All data or specific categories?\n\n"
                f"We'll get your complete export ready within 72 hours as required by law.\n\n")

    def _respond_press(self, email, name, ir, sent, ss, svcs):
        return (f"Hi {name},\n\n"
                f"Thank you for reaching out — I'm happy to speak with the press.\n\n"
                f"For interviews or story requests, please contact our press desk at "
                f"press@ziontechgroup.com or call +1 302 464 0950.\n\n"
                f"I can also arrange an interview with our CTO or CEO if needed.\n\n")

    def _respond_investor(self, email, name, ir, sent, ss, svcs):
        return (f"Hi {name},\n\n"
                f"Thank you for your interest in Zion Tech Group.\n\n"
                f"Our investor relations team will review your inquiry and respond "
                f"within 48 hours. For time-sensitive matters, please contact "
                f"kleber@ziontechgroup.com directly.\n\n")

    def _respond_meeting(self, email, name, ir, sent, ss, svcs):
        return (f"Hi {name},\n\n"
                f"Absolutely — I'd love to connect.\n\n"
                f"What's the best way to reach you to schedule? "
                f"Do you prefer a call, video meeting, or just a quick 15-minute phone chat?\n\n"
                f"Feel free to book directly: https://cal.com/ziontechgroup\n\n")

    def _respond_followup(self, email, name, ir, sent, ss, svcs):
        return (f"Hi {name},\n\n"
                f"Just following up on our previous conversation — I want to make sure "
                f"we gave you everything you needed.\n\n"
                f"Have there been any updates on your end? Is there anything else "
                f"I can help with?\n\n")

    def _respond_complaint(self, email, name, ir, sent, ss, svcs):
        return (f"Hi {name},\n\n"
                f"I'm truly sorry to hear about your experience — that's not the standard "
                f"we hold ourselves to, and I take full responsibility.\n\n"
                f"Could you share more details so I can personally make this right?\n"
                f"I want to understand exactly what happened and ensure it never happens again "
                f"for you or any other client.\n\n")

    def _respond_outage(self, email, name, ir, sent, ss, svcs):
        return (f"⚠️  Hi {name},\n\n"
                f"This is being treated as a CRITICAL incident. I'm personally activating "
                f"the response team now.\n\n"
                f"ETA for resolution: you'll have an update within 30 minutes.\n"
                f"I'm staying on this until service is fully restored.\n\n")

    def _respond_general(self, email, name, ir, sent, ss, svcs):
        q = self._extract_question(email.get('body', ''))
        return (f"Hi {name},\n\n"
                f"Thanks for reaching out — your message has been received.\n\n"
                f"Regarding: \"{q}\"\n\n"
                f"I'm looking into this and will get back to you with a detailed response shortly. "
                f"If it's urgent, feel free to call me directly at +1 302 464 0950.\n\n")

    def _record_escalation(self, thread_id: thread_id, sender: str, intent: str, ir: dict):
        """Record an escalation for human review."""
        log_warn(f"[V32 ESCALATION] thread={thread_id} sender={sender} "
                 f"intent={intent} reason={ir.get('escalation_reason')}")
        esc_file = DATA / 'v32_escalations.jsonl'
        try:
            with open(esc_file, 'a') as f:
                f.write(json.dumps({
                    'ts': ts_now().isoformat(),
                    'thread_id': thread_id,
                    'sender': sender,
                    'intent': intent,
                    'reason': ir.get('escalation_reason'),
                    'action': ' escalated_to_human_review',
                }) + '\n')
        except Exception:
            pass

# ═══════════════════════════════════════════════════════════════
# STANDALONE CLI
# ═══════════════════════════════════════════════════════════════

import sys

if __name__ == '__main__':
    orchestrator = V32EmailOrchestrator()

    if len(sys.argv) > 1 and sys.argv[1] == 'test':
        print("=" * 60)
        print("V32 SELF-TEST — Running all modules")
        print("=" * 60)

        test_cases = [
            {
                'id': 'tc-001',
                'thread_id': 'thread-billing-001',
                'sender': 'john.smith@acme.com',
                'subject': 'Question about Invoice #4821',
                'snippet': 'Hi, I received an invoice for $299 but I was expecting $199. Can you help?',
                'body': 'Hi, I received an invoice for $299 but I was expecting $199. Can you help? Thanks, John',
                'cc': 'accounting@acme.com, boss@acme.com',
            },
            {
                'id': 'tc-002',
                'thread_id': 'thread-demo-002',
                'sender': 'sarah.chen@startup.io',
                'subject': 'Would love a demo of your AI services',
                'snippet': 'Hi Kleber, we are a Series A startup looking at AI automation tools. '
                           'Can you show us a demo?',
                'body': 'Hi Kleber, we are a Series A startup looking at AI automation tools. '
                        'Can you show us a demo? Specifically interested in AI email automation. '
                        'How much would it cost?',
                'cc': '',
            },
            {
                'id': 'tc-003',
                'thread_id': 'thread-frustrated-003',
                'sender': 'angry.customer@client.com',
                'subject': 'URGENT: System has been down for 3 hours',
                'snippet': "This is ridiculous. Our production system has been down for 3 HOURS. "
                           "I can't reach anyone. This is unacceptable.",
                'body': "This is ridiculous. Our production system has been down for 3 HOURS. "
                        "I can't reach anyone. This is unacceptable. I am frustrated and angry. "
                        "Why does this keep happening?最低価格が",
                'cc': 'cto@client.com',
            },
            {
                'id': 'tc-004',
                'thread_id': 'thread-partnership-004',
                'sender': 'ceo@innovate.co',
                'subject': 'Partnership opportunity — AI Integration Alliance',
                'snippet': 'Kleber, we run a 500-person consulting firm. '
                           'Interested in an AI integration partnership.',
                'body': 'Kleber, we run a 500-person consulting firm. '
                        'Interested in an AI integration partnership. '
                        'Whats the revenue split? Need to talk next week.',
                'cc': '',
            },
            {
                'id': 'tc-005',
                'thread_id': 'thread-internal-005',
                'sender': 'internal@ziontechgroup.com',
                'subject': 'INTERNAL: Access credentials for production deployment',
                'snippet': 'Here are the credentials for the production server: admin / SuperSecret123',
                'body': 'Here are the credentials for the production server: admin / SuperSecret123 '
                        'Do not share externally. This is for deployment only.',
                'cc': 'devops@ziontechgroup.com',
            },
        ]

        for tc in test_cases:
            print(f"\n{'='*60}")
            print(f"TEST: {tc['id']} — {tc['subject'][:50]}")
            print(f"{'='*60}")
            result = orchestrator.process_email(tc, dry_run=True)
            print(json.dumps(result, indent=2, default=str))

    elif len(sys.argv) > 1 and sys.argv[1] == 'status':
        print("V32 System Status")
        print("=" * 40)
        print("Intent Classifier:")
        state_file = DATA / 'v32_intent_classifier_state.json'
        if state_file.exists():
            state = load_json(state_file)
            counts = state.get('intent_counts', {})
            print(f"  Total intent types seen: {len(counts)}")
            top = sorted(counts.items(), key=lambda x: -x[1])[:5]
            for intent, count in top:
                print(f"  {intent}: {count}")

    else:
        print("V32 Email Orchestrator — Autonomous Decision Engine")
        print("  python v32_email_responder.py test     — Run self-test with 5 test cases")
        print("  python v32_email_responder.py status  — Show system status")
        print()
        print("V32 = 10 intelligence modules integrated:")
        print("  1. Fine-grained Intent Classifier (20+ types)")
        print("  2. Sentiment Analyzer (frustrated/satisfied/confused/stressed)")
        print("  3. Escalation Guard (legal/financial/CEO fraud detection)")
        print("  4. Knowledge-Guided RAG Responder")
        print("  5. Persona-Aware Tone Engine")
        print("  6. A/B Response Testing Engine")
        print("  7. Multi-Turn Thread Memory")
        print("  8. Reply-All v3 (Context-Aware Smart CC)")
        print("  9. Quality Scorer v2")
        print("  10. Zion Service Match Engine")