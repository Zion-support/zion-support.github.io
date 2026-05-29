#!/usr/bin/env python3
"""
V59 — Advanced Intelligence Email Responder
New features:
  1. Calendar/Meeting Intelligence — detect meeting requests, suggest times
  2. Email Threading — group related emails by conversation
  3. Priority Decay — older unread emails auto-escalate
  4. Bankruptcy Detection — warn when inbox is overwhelming
  5. Response Templates — match best template to intent
  6. Signature Analysis — detect sender role/position
"""
import os, sys, re, json, hashlib
from datetime import datetime, timezone, timedelta
from pathlib import Path

home = Path.home()
WORKSPACE = home / '.openclaw' / 'workspace'
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

try:
    from google_workspace import gmail_search, gmail_create_draft_new, gmail_mark_read, telegram_send
    from llm_client import chat
    IMPORTS_OK = True
except ImportError:
    IMPORTS_OK = False
    print("⚠️  Workspace imports unavailable")

DATA_DIR = WORKSPACE / 'zion.app' / 'data'
V59_STATE = DATA_DIR / 'v59_state.json'
DECISION_LOG = DATA_DIR / 'v59_decisions.jsonl'
SENTIMENT_DB = DATA_DIR / 'v59_sentiment_db.json'
THREAD_MEMORY = DATA_DIR / 'v59_thread_memory.json'
INTENT_LOG = DATA_DIR / 'v59_intent_log.json'
FOLLOWUP_QUEUE = DATA_DIR / 'v59_followups.json'
REPLIED_HASHES = DATA_DIR / 'v59_replied_hashes.json'
SENDER_PROFILES = DATA_DIR / 'v59_sender_profiles.json'

CONTACT = {
    'name': 'Kleber Garcia Alcatrao',
    'company': 'Zion Tech Group',
    'email': 'kleber@ziontechgroup.com',
    'phone': '+1 302 464 0950',
    'address': '364 E Main St STE 1008, Middletown, DE 19709'
}

SIGNATURE = f"""\n\n--
{CONTACT['name']} | {CONTACT['company']}
📱 {CONTACT['phone']} | 📧 {CONTACT['email']}
📍 {CONTACT['address']}
🌐 ziontechgroup.com"""

# ── Helpers ──────────────────────────────────────────────────────────────────

def load_json(path: Path, default=None):
    if default is None: default = {}
    try:
        if path.exists():
            return json.loads(path.read_text(encoding='utf-8'))
    except: pass
    return default

def save_json(path: Path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding='utf-8')

def append_decision(event: dict):
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    event['ts'] = datetime.now(timezone.utc).isoformat()
    with open(DECISION_LOG, 'a', encoding='utf-8') as f:
        f.write(json.dumps(event, ensure_ascii=False) + '\n')

def email_hash(email: dict) -> str:
    key = f"{email.get('from','')}:{email.get('subject','')}:{email.get('snippet','')[:100]}"
    return hashlib.md5(key.encode()).hexdigest()

def already_replied(email: dict) -> bool:
    return email_hash(email) in load_json(REPLIED_HASHES, [])

def mark_replied(email: dict):
    hashes = load_json(REPLIED_HASHES, [])
    h = email_hash(email)
    if h not in hashes:
        hashes.append(h)
        if len(hashes) > 3000: hashes = hashes[-3000:]
        save_json(REPLIED_HASHES, hashes)

# ═══════════════════════════════════════════════════════════════════════════════
# 1. INTENT ROUTER (from V58, enhanced)
# ═══════════════════════════════════════════════════════════════════════════════

INTENT_PATTERNS = {
    'sales_inquiry': {'keywords': ['pricing', 'quote', 'cost', 'buy', 'purchase', 'proposal', 'demo', 'trial'], 'weight': 0.9, 'priority_boost': 0.15},
    'support_ticket': {'keywords': ['bug', 'error', 'not working', 'broken', 'issue', 'problem', 'help', 'ticket'], 'weight': 0.85, 'priority_boost': 0.20},
    'billing_invoice': {'keywords': ['invoice', 'payment', 'billing', 'receipt', 'charge', 'refund'], 'weight': 0.95, 'priority_boost': 0.25},
    'partnership': {'keywords': ['partnership', 'collaboration', 'reseller', 'affiliate', 'white-label'], 'weight': 0.75, 'priority_boost': 0.10},
    'meeting_request': {'keywords': ['meeting', 'schedule', 'call', 'calendar', 'zoom', 'teams', 'available', 'time slot'], 'weight': 0.70, 'priority_boost': 0.05},
    'contract_legal': {'keywords': ['contract', 'agreement', 'nda', 'msa', 'sow', 'terms', 'legal'], 'weight': 0.90, 'priority_boost': 0.20},
    'complaint': {'keywords': ['disappointed', 'unhappy', 'terrible', 'frustrating', 'complaint', 'cancel'], 'weight': 0.80, 'priority_boost': 0.30},
    'job_application': {'keywords': ['resume', 'cv', 'job application', 'position', 'hiring', 'career'], 'weight': 0.60, 'priority_boost': 0.0},
    'follow_up': {'keywords': ['following up', 'any update', 'checking in', 'status', 'progress'], 'weight': 0.65, 'priority_boost': 0.15},
    'thank_you': {'keywords': ['thank you', 'thanks', 'appreciate', 'great job', 'well done'], 'weight': 0.30, 'priority_boost': -0.10},
}

def classify_intent(subject: str, snippet: str) -> dict:
    text = f"{subject} {snippet}".lower()
    scores = {}
    for intent, config in INTENT_PATTERNS.items():
        matches = [kw for kw in config['keywords'] if kw in text]
        if matches:
            scores[intent] = len(matches) * config['weight']
    if not scores:
        return {'intent': 'general', 'confidence': 0.3, 'priority_boost': 0.0}
    top = max(scores, key=scores.get)
    config = INTENT_PATTERNS[top]
    return {
        'intent': top,
        'confidence': round(min(scores[top] / 2.0, 1.0), 2),
        'priority_boost': config['priority_boost'],
    }

# ═══════════════════════════════════════════════════════════════════════════════
# 2. CALENDAR INTELLIGENCE — Detect meeting requests and suggest times
# ═══════════════════════════════════════════════════════════════════════════════

MEETING_PATTERNS = [
    r'\b(meeting|call|chat|discuss|sync|catch up)\b',
    r'\b(zoom|teams|meet|skype|hangout)\b',
    r'\b(schedule|book|reserve|set up)\b',
    r'\b(available|free|open slot|time)\b',
    r'\b(tomorrow|next week|this week|monday|tuesday|wednesday|thursday|friday)\b',
    r'\b(\d{1,2}:\d{2}\s*(am|pm)?|\d{1,2}(am|pm))\b',
]

def detect_meeting_request(text: str) -> dict:
    """Detect if email is requesting a meeting and extract time preferences."""
    text_lower = text.lower()
    matches = sum(1 for p in MEETING_PATTERNS if re.search(p, text_lower))
    
    if matches < 2:
        return {'is_meeting': False, 'confidence': 0.0}
    
    # Extract time preferences
    times_found = []
    days_found = []
    
    # Time patterns
    time_patterns = [
        r'\b(\d{1,2}:\d{2}\s*(am|pm))\b',
        r'\b(\d{1,2}(am|pm))\b',
        r'\b(morning|afternoon|evening)\b',
    ]
    for p in time_patterns:
        found = re.findall(p, text_lower)
        times_found.extend([m[0] if isinstance(m, tuple) else m for m in found])
    
    # Day patterns
    day_patterns = [
        r'\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b',
        r'\b(tomorrow|today|next week)\b',
    ]
    for p in day_patterns:
        days_found.extend(re.findall(p, text_lower))
    
    return {
        'is_meeting': True,
        'confidence': round(min(matches / 5.0, 1.0), 2),
        'times_mentioned': times_found[:3],
        'days_mentioned': days_found[:3],
    }

def generate_availability_response(meeting_info: dict) -> str:
    """Generate a response with suggested meeting times."""
    if not meeting_info['is_meeting']:
        return ''
    
    # Suggest 3 time slots (next 3 business days, 2-4pm)
    from datetime import timedelta
    now = datetime.now()
    suggestions = []
    for i in range(1, 4):
        day = now + timedelta(days=i)
        if day.weekday() < 5:  # Mon-Fri
            time_slot = day.replace(hour=14, minute=0, second=0, microsecond=0)
            suggestions.append(time_slot.strftime('%A, %B %d at 2:00 PM ET'))
    
    times_text = ''
    if meeting_info.get('times_mentioned'):
        times_text = f"\nI see you mentioned {', '.join(meeting_info['times_mentioned'])} — let me check those times.\n"
    
    return f"""I'd be happy to schedule a call!{times_text}
Here are my available times:
• {suggestions[0]}
• {suggestions[1]}
• {suggestions[2]}

Or feel free to book directly on my calendar: https://calendly.com/kleber-ziontech

Looking forward to speaking with you!"""

# ═══════════════════════════════════════════════════════════════════════════════
# 3. EMAIL THREADING — Group related emails by conversation
# ═══════════════════════════════════════════════════════════════════════════════

def get_thread_context(subject: str, sender: str) -> dict:
    memory = load_json(THREAD_MEMORY, {})
    clean_subject = re.sub(r'^(re|fw|fwd):\s*', '', subject, flags=re.IGNORECASE).strip().lower()
    thread_key = f"{sender.lower()}:{clean_subject}"
    if thread_key in memory:
        thread = memory[thread_key]
        return {
            'has_history': True,
            'message_count': thread.get('message_count', 0),
            'last_contact': thread.get('last_contact'),
            'key_topics': thread.get('key_topics', []),
        }
    return {'has_history': False, 'message_count': 0}

def update_thread_memory(subject: str, sender: str, snippet: str):
    memory = load_json(THREAD_MEMORY, {})
    clean_subject = re.sub(r'^(re|fw|fwd):\s*', '', subject, flags=re.IGNORECASE).strip().lower()
    thread_key = f"{sender.lower()}:{clean_subject}"
    now = datetime.now(timezone.utc).isoformat()
    if thread_key not in memory:
        memory[thread_key] = {'first_contact': now, 'last_contact': now, 'message_count': 0, 'key_topics': []}
    thread = memory[thread_key]
    thread['last_contact'] = now
    thread['message_count'] += 1
    words = re.findall(r'\b\w{4,}\b', snippet.lower())
    topics = [w for w in words if w not in {'this', 'that', 'with', 'from', 'have', 'will', 'would'}]
    if topics:
        existing = set(thread['key_topics'])
        thread['key_topics'] = list(existing.union(set(topics[:5])))[:15]
    save_json(THREAD_MEMORY, memory)

# ═══════════════════════════════════════════════════════════════════════════════
# 4. PRIORITY DECAY — Older unread emails auto-escalate
# ═══════════════════════════════════════════════════════════════════════════════

def compute_priority_decay(email_date: str) -> dict:
    """Emails older than 2 days get priority boost."""
    if not email_date:
        return {'decay_boost': 0.0, 'days_old': 0}
    try:
        email_dt = datetime.fromisoformat(email_date.replace('Z', '+00:00'))
        now = datetime.now(timezone.utc)
        days_old = (now - email_dt).days
        if days_old <= 1: return {'decay_boost': 0.0, 'days_old': days_old}
        elif days_old <= 3: return {'decay_boost': 0.1, 'days_old': days_old}
        elif days_old <= 7: return {'decay_boost': 0.2, 'days_old': days_old}
        else: return {'decay_boost': 0.3, 'days_old': days_old, 'overdue': True}
    except:
        return {'decay_boost': 0.0, 'days_old': 0}

# ═══════════════════════════════════════════════════════════════════════════════
# 5. BANKRUPTCY DETECTION — Warn when inbox is overwhelming
# ═══════════════════════════════════════════════════════════════════════════════

def check_inbox_bankruptcy(emails: list) -> dict:
    """Detect if inbox is overwhelming (>50 unread, >30% overdue)."""
    total = len(emails)
    overdue = sum(1 for e in emails if compute_priority_decay(e.get('date', '')).get('overdue'))
    
    if total > 50 and overdue / max(total, 1) > 0.3:
        return {
            'is_bankrupt': True,
            'total': total,
            'overdue': overdue,
            'suggestion': f"⚠️ INBOX OVERLOAD: {overdue}/{total} emails overdue. Consider bulk archive low-priority or delegate."
        }
    return {'is_bankrupt': False, 'total': total}

# ═══════════════════════════════════════════════════════════════════════════════
# 6. SIGNATURE ANALYSIS — Detect sender role/position
# ═══════════════════════════════════════════════════════════════════════════════

SENIORITY_KEYWORDS = {
    'c_suite': ['ceo', 'cto', 'cfo', 'coo', 'chief', 'president', 'vp', 'director'],
    'management': ['manager', 'lead', 'head of', 'supervisor'],
    'technical': ['engineer', 'developer', 'architect', 'devops'],
    'sales': ['account', 'sales', 'business development'],
}

def detect_sender_role(snippet: str, sender: str) -> dict:
    text = snippet.lower()
    for role, keywords in SENIORITY_KEYWORDS.items():
        for kw in keywords:
            if kw in text:
                return {'role': role, 'confidence': 0.7}
    if any(d in sender.lower() for d in ['gmail.com', 'yahoo.com', 'hotmail.com']):
        return {'role': 'external', 'confidence': 0.5}
    return {'role': 'unknown', 'confidence': 0.3}

# ═══════════════════════════════════════════════════════════════════════════════
# 7. RESPONSE TEMPLATES — Match best template to intent
# ═══════════════════════════════════════════════════════════════════════════════

RESPONSE_TEMPLATES = {
    'sales_inquiry': """Thanks for your interest in Zion Tech Group!

I'd be happy to help you find the right solution. We offer {service_count}+ services across AI, IT, Cloud, Security, Data, and Automation.

To provide a tailored proposal, could you share:
• Your primary business goal
• Team size and technical stack
• Budget range and timeline

Or book a free consultation: https://calendly.com/kleber-ziontech""",

    'support_ticket': """Thanks for reaching out about this issue. I'm investigating now.

To help me resolve this quickly:
• When did this start happening?
• What steps can reproduce it?
• Any error messages or screenshots?

I'll follow up within 24 hours with next steps.""",

    'meeting_request': """I'd be happy to schedule a call!

Here are my available times:
• [Suggest 2-3 time slots]

Or book directly: https://calendly.com/kleber-ziontech

Looking forward to speaking!""",

    'thank_you': """Thank you for the kind words! I'm glad we could help.

Please don't hesitate to reach out if you need anything else in the future.""",
}

# ═══════════════════════════════════════════════════════════════════════════════
# 8. SENTIMENT + LANGUAGE + REPLY-ALL (from V58)
# ═══════════════════════════════════════════════════════════════════════════════

SENTIMENT_KEYWORDS = {
    'positive': ['thank', 'great', 'excellent', 'appreciate', 'wonderful', 'love', 'happy'],
    'negative': ['frustrated', 'angry', 'disappointed', 'unacceptable', 'terrible', 'hate'],
    'urgent': ['asap', 'urgent', 'immediately', 'critical', 'emergency', 'deadline'],
}

def analyze_sentiment(text: str) -> dict:
    text_lower = text.lower()
    scores = {}
    for sentiment, keywords in SENTIMENT_KEYWORDS.items():
        score = sum(1 for kw in keywords if kw in text_lower)
        if score > 0: scores[sentiment] = score
    if not scores: return {'sentiment': 'neutral', 'confidence': 0.5}
    dominant = max(scores, key=scores.get)
    return {'sentiment': dominant, 'confidence': round(min(scores[dominant] / 3.0, 1.0), 2)}

LANG_PATTERNS = {
    'pt': r'\b(não|você|obrigado|bom dia|boa tarde)\b',
    'es': r'\b(no|usted|gracias|buenos días)\b',
    'fr': r'\b(ne|vous|merci|bonjour)\b',
    'de': r'\b(nicht|Sie|danke|guten Tag)\b',
}

def detect_language(text: str) -> str:
    text_lower = text.lower()
    scores = {}
    for lang, pattern in LANG_PATTERNS.items():
        matches = len(re.findall(pattern, text_lower, re.IGNORECASE))
        if matches > 0: scores[lang] = matches
    return max(scores, key=scores.get) if scores else 'en'

def should_reply_all(sender: str, subject: str, snippet: str, cc_count: int = 0, thread_depth: int = 1) -> dict:
    score = 0.0
    reasons = []
    text = f"{subject} {snippet}".lower()
    if cc_count >= 3: score += 0.35; reasons.append(f"Multiple recipients ({cc_count} CCs)")
    elif cc_count >= 1: score += 0.15; reasons.append(f"CCs present ({cc_count})")
    if thread_depth >= 4: score += 0.30; reasons.append(f"Deep thread ({thread_depth} msgs)")
    elif thread_depth >= 2: score += 0.15; reasons.append(f"Thread context")
    if re.search(r'(team|everyone|all|folks|hi all|dear all)', text): score += 0.25; reasons.append("Group signal")
    if any(w in text for w in ['urgent', 'asap', 'critical']): score += 0.15; reasons.append("Urgent")
    decision = score >= 0.25
    return {'decision': decision, 'confidence': round(min(score, 1.0), 3), 'reasons': reasons}

# ═══════════════════════════════════════════════════════════════════════════════
# 9. V59 MASTER DECISION ENGINE
# ═══════════════════════════════════════════════════════════════════════════════

def compute_v59_decision(email: dict) -> dict:
    subject = email.get('subject', '')
    snippet = email.get('snippet', '')
    sender = email.get('from', '')
    email_date = email.get('date', '')
    text = f"{subject} {snippet}"

    intent = classify_intent(subject, snippet)
    sentiment = analyze_sentiment(text)
    language = detect_language(text)
    decay = compute_priority_decay(email_date)
    sender_role = detect_sender_role(snippet, sender)
    reply_all = should_reply_all(sender, subject, snippet)
    thread_ctx = get_thread_context(subject, sender)
    meeting = detect_meeting_request(text)

    base_urgency = 0.2
    if any(w in text.lower() for w in ['urgent', 'asap', 'emergency']): base_urgency = 0.9
    elif any(w in text.lower() for w in ['deadline', 'eod', 'today']): base_urgency = 0.7

    composite = (
        0.25 * base_urgency +
        0.20 * intent.get('priority_boost', 0) +
        0.15 * decay['decay_boost'] +
        0.15 * reply_all['score'] +
        0.10 * (0.8 if sentiment['sentiment'] == 'negative' else 0.5) +
        0.10 * min(thread_ctx.get('message_count', 0) * 0.1, 0.8) +
        0.05 * (0.9 if sender_role['role'] == 'c_suite' else 0.5)
    )

    if composite >= 0.75: priority, action = 'CRITICAL', 'immediate_reply'
    elif composite >= 0.6: priority, action = 'HIGH', 'reply_today'
    elif composite >= 0.4: priority, action = 'MEDIUM', 'reply_this_week'
    elif composite >= 0.2: priority, action = 'LOW', 'review_later'
    else: priority, action = 'BACKGROUND', 'archive'

    update_thread_memory(subject, sender, snippet)

    return {
        'composite_score': round(composite, 3),
        'priority': priority,
        'action': action,
        'intent': intent,
        'sentiment': sentiment,
        'language': language,
        'decay': decay,
        'sender_role': sender_role,
        'reply_all': reply_all,
        'thread_context': thread_ctx,
        'meeting': meeting,
    }

# ═══════════════════════════════════════════════════════════════════════════════
# 10. RESPONSE QUALITY GATE + GENERATION
# ═══════════════════════════════════════════════════════════════════════════════

def score_response_quality(reply: str, email: dict) -> dict:
    issues = []
    score = 1.0
    if len(reply) < 50: issues.append(f"Too short"); score -= 0.3
    if len(reply) > 3000: issues.append(f"Too long"); score -= 0.2
    for p in ['[your name]', '[insert]', 'todo', 'fill in']:
        if p in reply.lower(): issues.append(f"Placeholder"); score -= 0.2
    if reply.startswith('[') and ']' in reply[:50]: issues.append("Error marker"); score -= 0.4
    greetings = ['hi ', 'hello', 'dear', 'good morning', 'bom dia', 'hola']
    if not any(g in reply.lower()[:100] for g in greetings): issues.append("No greeting"); score -= 0.1
    if 'zion' not in reply.lower() and 'kleber' not in reply.lower(): issues.append("No signature"); score -= 0.15
    score = max(0.0, min(1.0, score))
    return {'score': round(score, 2), 'passes': score >= 0.6, 'issues': issues}

def generate_smart_reply(email: dict, analysis: dict) -> str:
    if not IMPORTS_OK:
        return "[Analysis-only mode]"

    subject = email.get('subject', '')
    sender = email.get('from', '')
    snippet = email.get('snippet', '')
    intent = analysis['intent']
    language = analysis['language']
    meeting = analysis['meeting']

    # Use meeting-specific response if detected
    if meeting['is_meeting'] and meeting['confidence'] >= 0.5:
        meeting_response = generate_availability_response(meeting)
        if meeting_response:
            return f"Hi,\n\n{meeting_response}{SIGNATURE}"

    # Use template if available
    template = RESPONSE_TEMPLATES.get(intent['intent'], '')
    if template and intent['confidence'] >= 0.7:
        template_filled = template.replace('{service_count}', '702')
        return f"Hi,\n\n{template_filled}{SIGNATURE}"

    # Fallback to LLM
    tone = 'professional'
    if analysis['sentiment']['sentiment'] == 'negative': tone = 'empathetic'
    elif analysis['sentiment']['sentiment'] == 'positive': tone = 'friendly'

    prompt = f"""You are {CONTACT['name']} from {CONTACT['company']}. Generate a {tone} email reply.

Original email:
  From: {sender}
  Subject: {subject}
  Content: {snippet[:500]}

Intent: {intent['intent']} (confidence: {intent['confidence']})
Language: {language}

Requirements:
- Address all points
- Be specific and helpful
- Include next steps

Signature:
{CONTACT['name']} | {CONTACT['company']}
📱 {CONTACT['phone']} | 📧 {CONTACT['email']}

Generate reply:"""

    try:
        resp = chat([{"role": "user", "content": prompt}], provider="auto", temperature=0.4)
        reply = resp.get('content', '').strip()
        if 'zion' not in reply.lower(): reply += SIGNATURE
        return reply
    except Exception as e:
        return f"[Reply generation failed: {e}]"

# ═══════════════════════════════════════════════════════════════════════════════
# 11. MAIN PROCESSING LOOP
# ═══════════════════════════════════════════════════════════════════════════════

def process_single_email(email: dict, dry_run: bool) -> dict:
    subject = email.get('subject', '(no subject)')
    sender = email.get('from', 'unknown')
    
    if already_replied(email):
        return {'skipped': True, 'reason': 'already_processed'}

    analysis = compute_v59_decision(email)
    result = {
        'email_id': email.get('id', ''),
        'subject': subject[:80],
        'sender': sender,
        'analysis': analysis,
        'dry_run': dry_run,
        'reply_generated': False,
        'quality_score': None,
    }

    if not dry_run and analysis['action'] in ('immediate_reply', 'reply_today'):
        reply_text = generate_smart_reply(email, analysis)
        quality = score_response_quality(reply_text, email)
        result['quality_score'] = quality
        
        if quality['passes']:
            try:
                gmail_create_draft_new(
                    to=sender,
                    subject=f"Re: {subject}",
                    body=reply_text,
                    reply_to_thread=email.get('id'),
                )
                result['reply_generated'] = True
                mark_replied(email)
            except Exception as e:
                result['error'] = str(e)
        else:
            result['quality_issues'] = quality['issues']

    append_decision(result)
    return result

def process_emails(max_emails: int = 25, dry_run: bool = True, parallel: bool = True) -> list:
    if not IMPORTS_OK:
        print("⚠️  Cannot process emails")
        return []

    mode = 'DRY RUN' if dry_run else 'LIVE'
    print(f"🔍 V59 Advanced Intelligence — {mode}")

    try:
        emails = gmail_search('is:unread -category:promotions -category:social', max_results=max_emails)
    except Exception as e:
        print(f"❌ Gmail search failed: {e}")
        return []

    if not emails:
        print("✅ No unread emails")
        return []

    print(f"📧 Found {len(emails)} emails\n")

    # Check for bankruptcy
    bankruptcy = check_inbox_bankruptcy(emails)
    if bankruptcy['is_bankrupt']:
        print(bankruptcy['suggestion'])

    results = []
    for email in emails:
        r = process_single_email(email, dry_run)
        results.append(r)
        if not r.get('skipped'):
            a = r['analysis']
            meeting_flag = '📅' if a['meeting']['is_meeting'] else ''
            print(f"  [{a['priority'][:4]}] {r['subject'][:40]} | Intent: {a['intent']['intent']} | Sentiment: {a['sentiment']['sentiment']} {meeting_flag}")

    active = [r for r in results if not r.get('skipped')]
    priority_counts = {}
    intent_counts = {}
    meeting_count = sum(1 for r in active if r['analysis']['meeting']['is_meeting'])
    for r in active:
        p = r['analysis']['priority']
        priority_counts[p] = priority_counts.get(p, 0) + 1
        i = r['analysis']['intent']['intent']
        intent_counts[i] = intent_counts.get(i, 0) + 1

    print(f"\n{'═' * 60}")
    print(f"📊 V59 Summary:")
    print(f"   Analyzed: {len(active)} | Skipped: {len(results) - len(active)}")
    print(f"   Priority: {priority_counts}")
    print(f"   Intents: {intent_counts}")
    print(f"   Meeting requests: {meeting_count}")
    if bankruptcy['is_bankrupt']:
        print(f"   ⚠️ Bankruptcy risk: {bankruptcy['overdue']}/{bankruptcy['total']} overdue")

    save_json(V59_STATE, {
        'last_run': datetime.now(timezone.utc).isoformat(),
        'emails_processed': len(active),
        'priority_distribution': priority_counts,
        'intent_distribution': intent_counts,
        'meeting_requests': meeting_count,
        'mode': mode,
    })

    return results

if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(description='V59 Advanced Intelligence Email Responder')
    parser.add_argument('--max', type=int, default=25, help='Max emails')
    parser.add_argument('--live', action='store_true', help='Create drafts')
    parser.add_argument('--status', action='store_true', help='Show status')
    args = parser.parse_args()

    if args.status:
        state = load_json(V59_STATE)
        if state:
            print(f"Last run: {state.get('last_run', 'never')}")
            print(f"Processed: {state.get('emails_processed', 0)}")
            print(f"Priority: {state.get('priority_distribution', {})}")
            print(f"Intents: {state.get('intent_distribution', {})}")
            print(f"Meetings: {state.get('meeting_requests', 0)}")
        else:
            print("No previous runs")
    else:
        process_emails(max_emails=args.max, dry_run=not args.live, parallel=True)
