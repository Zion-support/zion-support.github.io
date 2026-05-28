#!/usr/bin/env python3
"""
V47: Smart CC Suggestion Engine
Analyzes thread participants + email context → suggests missing CC recipients
before every send. Learns from past Reply-All chains to never drop important contacts.

Key features:
  - suggest_ccs(): analyzes thread history + current email → suggests CCs with confidence
  - track_thread_participants(): logs participant additions/removals per thread
  - learn_from_successful_threads(): builds org-domain + role templates from good threads
  - get_org_template(): returns expected CCs for a given org/domain + email purpose

Data: data/email_cc_history.jsonl, data/email_org_templates.jsonl
"""
import json, re, os
from collections import defaultdict
from datetime import datetime, timezone

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, '..', '..', 'data')
CC_HISTORY = os.path.join(DATA_DIR, 'email_cc_history.jsonl')
ORG_TEMPLATEs = os.path.join(DATA_DIR, 'email_org_templates.jsonl')
os.makedirs(DATA_DIR, exist_ok=True)

# ── Role keywords mapped to standard labels ──────────────────────────────────
ROLE_KEYWORDS = {
    'manager': ['manager', 'director', 'vp ', 'head of', 'lead', 'chief', 'officer'],
    'finance': ['finance', 'accounting', 'billing', 'payment', 'controller', 'cfo', 'cfo'],
    'legal': ['legal', 'compliance', 'counsel', 'privacy', 'gdpr', 'dpo'],
    'technical': ['engineer', 'developer', 'architect', 'technical', 'devops', 'sre', 'cto'],
    'procurement': ['procurement', 'purchasing', 'buyer', 'vendor', 'sourcing'],
    'executive': ['ceo', 'coo', 'cto', 'cfo', 'cmo', 'cio', 'president', 'founder'],
    'hr': ['hr', 'human resources', 'people', 'talent', 'recruiting', 'recruiter'],
    'operations': ['operations', 'ops', 'logistics', 'supply chain', 'fulfillment'],
    'sales': ['sales', 'account executive', 'ae', 'business development', 'bdr'],
    'support': ['support', 'success', 'cs', 'customer success', 'helpdesk'],
}

# ── Purpose keywords that trigger specific role CCs ───────────────────────────
PURPOSE_ROLE_MAP = {
    'contract': ['legal', 'executive', 'finance'],
    'invoice': ['finance', 'accounting'],
    'proposal': ['executive', 'sales'],
    'meeting': ['procurement', 'operations'],
    'technical': ['technical'],
    'partnership': ['executive', 'legal'],
    'compliance': ['legal', 'compliance'],
    'security': ['technical', 'legal'],
    'budget': ['finance', 'executive'],
    'onboarding': ['hr', 'operations'],
    'renewal': ['sales', 'finance'],
    'escalation': ['executive', 'manager'],
    'approval': ['finance', 'executive', 'manager'],
    'review': ['technical', 'legal'],
    'demo': ['sales', 'technical'],
    'pricing': ['finance', 'sales'],
    'integration': ['technical', 'operations'],
    'support': ['support', 'technical'],
}

def extract_domain(email: str) -> str:
    """Extract domain from email address."""
    match = re.search(r'@([\w.-]+)', email or '')
    return match.group(1).lower() if match else ''

def extract_name(email: str) -> str:
    """Extract name portion before @."""
    return (email or '').split('@')[0].split('+')[0]

def normalize_org(domain: str) -> str:
    """Normalize company domain to org key."""
    parts = domain.replace('www.', '').replace('mail.', '').replace('smtp.', '').split('.')
    return parts[0] if parts else domain

def classify_role(email: str, body: str = '') -> list:
    """Classify sender's role based on email address and body keywords."""
    combined = f"{email} {body}".lower()
    matched = []
    for role, keywords in ROLE_KEYWORDS.items():
        for kw in keywords:
            if kw in combined:
                matched.append(role)
                break
    return matched if matched else ['general']

def detect_email_purpose(subject: str, body: str = '') -> list:
    """Detect the purpose/intent of the email."""
    combined = f"{subject} {body}".lower()
    purposes = []
    for purpose, roles in PURPOSE_ROLE_MAP.items():
        if purpose in combined or any(kw in combined for kw in purpose.split()):
            purposes.append(purpose)
    return purposes if purposes else ['general']

def extract_participants(thread_emails: list) -> dict:
    """Extract unique participants from a thread's email list."""
    participants = {}
    for email in thread_emails:
        sender = email.get('from', email.get('sender', ''))
        ccs = email.get('cc', [])
        all_addrs = [sender] + ccs
        for addr in all_addrs:
            if addr and '@' in addr:
                domain = extract_domain(addr)
                name = extract_name(addr)
                participants[addr.lower()] = {
                    'email': addr.lower(),
                    'domain': domain,
                    'org': normalize_org(domain),
                    'name': name,
                    'role': classify_role(addr, email.get('body', '')[:500]),
                }
    return participants

def suggest_ccs(
    sender: str,
    subject: str,
    body: str = '',
    thread_emails: list = None,
    current_ccs: list = None,
    min_confidence: float = 0.5,
) -> list[dict]:
    """
    Main entry point: suggest CCs for a new email.

    Returns list of dicts:
      { 'email': str, 'reason': str, 'confidence': float, 'source': str }
    """
    current_ccs = current_ccs or []
    current_set = {c.lower() for c in current_ccs}
    sender_domain = extract_domain(sender)
    sender_org = normalize_org(sender_domain)
    purposes = detect_email_purpose(subject, body)
    suggestions = []

    # ── 1. Learn from thread history ─────────────────────────────────────────
    if thread_emails:
        participants = extract_participants(thread_emails)
        for addr, info in participants.items():
            if addr == sender.lower() or addr in current_set:
                continue
            if info['org'] == sender_org:
                purposes_roles = []
                for p in purposes:
                    purposes_roles.extend(PURPOSE_ROLE_MAP.get(p, []))
                if any(r in info['role'] for r in purposes_roles if purposes_roles):
                    suggestions.append({
                        'email': addr,
                        'reason': f"Active participant in this thread ({', '.join(info['role'])})",
                        'confidence': 0.85,
                        'source': 'thread_history',
                    })

    # ── 2. Organization template suggestions ────────────────────────────────
    org_templates = _load_org_templates()
    for p in purposes:
        template_key = f"{sender_org}:{p}"
        if template_key in org_templates:
            for suggested in org_templates[template_key]:
                if suggested['email'].lower() not in current_set:
                    suggestions.append({
                        **suggested,
                        'source': 'org_template',
                    })

    # ── 3. Cross-organizational patterns ────────────────────────────────────
    if thread_emails:
        thread_participants = extract_participants(thread_emails)
        external_participants = [
            (addr, info) for addr, info in thread_participants.items()
            if info['org'] != sender_org
        ]
        for addr, info in external_participants:
            if addr in current_set:
                continue
            purposes_roles = []
            for p in purposes:
                purposes_roles.extend(PURPOSE_ROLE_MAP.get(p, []))
            if purposes_roles and any(r in info['role'] for r in purposes_roles):
                suggestions.append({
                    'email': addr,
                    'reason': f"External participant in thread ({', '.join(info['role'])})",
                    'confidence': 0.75,
                    'source': 'external_thread',
                })

    # ── 4. Deduplicate and filter ───────────────────────────────────────────
    seen = set()
    deduped = []
    for s in sorted(suggestions, key=lambda x: -x['confidence']):
        if s['email'].lower() not in seen and s['confidence'] >= min_confidence:
            seen.add(s['email'].lower())
            deduped.append(s)

    return deduped

def track_thread_participants(
    thread_id: str,
    sender: str,
    cc_list: list,
    subject: str,
    action: str = 'sent',
) -> None:
    """Log thread participant data for learning."""
    record = {
        'timestamp': datetime.now(timezone.utc).isoformat(),
        'thread_id': thread_id,
        'sender': sender.lower(),
        'cc': [c.lower() for c in cc_list],
        'subject': subject[:200],
        'action': action,
        'sender_domain': extract_domain(sender),
        'sender_org': normalize_org(extract_domain(sender)),
    }
    _append_jsonl(CC_HISTORY, record)

def learn_from_successful_threads(
    thread_id: str,
    thread_emails: list,
    subject: str,
) -> None:
    """
    After a thread concludes successfully (no follow-up needed, goals achieved),
    extract org-purpose CC patterns and store as templates.
    """
    participants = extract_participants(thread_emails)
    sender = thread_emails[0].get('from', thread_emails[0].get('sender', '')) if thread_emails else ''
    if not sender:
        return
    sender_org = normalize_org(extract_domain(sender))
    purposes = detect_email_purpose(subject)

    org_templates = _load_org_templates()
    for purpose in purposes:
        template_key = f"{sender_org}:{purpose}"
        existing = {s['email'] for s in org_templates.get(template_key, [])}
        new_entries = []
        for addr, info in participants.items():
            if addr == sender.lower():
                continue
            if info['org'] == sender_org:
                role_str = ', '.join(sorted(info['role']))
                if addr.lower() not in existing:
                    new_entries.append({
                        'email': addr,
                        'reason': f"Learned from successful thread ({role_str})",
                        'confidence': 0.8,
                        'source': 'learned',
                    })
        if new_entries:
            if template_key not in org_templates:
                org_templates[template_key] = []
            org_templates[template_key] = (org_templates[template_key] + new_entries)[:10]

    _save_org_templates(org_templates)

def _load_org_templates() -> dict:
    if not os.path.exists(ORG_TEMPLATEs):
        return {}
    templates = {}
    with open(ORG_TEMPLATEs, 'r', encoding='utf-8') as f:
        for line in f:
            try:
                entry = json.loads(line.strip())
                key = entry.get('org_purpose_key', '')
                if key:
                    if key not in templates:
                        templates[key] = []
                    templates[key].append(entry)
            except (json.JSONDecodeError, ValueError):
                continue
    return templates

def _save_org_templates(templates: dict) -> None:
    with open(ORG_TEMPLATEs, 'w', encoding='utf-8') as f:
        for key, entries in templates.items():
            for entry in entries:
                record = {**entry, 'org_purpose_key': key}
                f.write(json.dumps(record, ensure_ascii=False) + '\n')

def _append_jsonl(path: str, record: dict) -> None:
    with open(path, 'a', encoding='utf-8') as f:
        f.write(json.dumps(record, ensure_ascii=False) + '\n')

# ── CLI test ──────────────────────────────────────────────────────────────────
if __name__ == '__main__':
    print("=" * 60)
    print("V47: Smart CC Suggestion Engine — Test Suite")
    print("=" * 60)

    test_threads = {
        'cold_outreach': [
            {'from': 'sales@acme.com', 'cc': [], 'body': 'Partnership proposal'},
            {'from': 'legal@partner.com', 'cc': ['exec@partner.com'], 'body': 'Contract review'},
            {'from': 'cfo@partner.com', 'cc': [], 'body': 'Budget approval'},
        ],
        'internal_project': [
            {'from': 'pm@techstart.io', 'cc': [], 'body': 'Kickoff'},
            {'from': 'dev@techstart.io', 'cc': ['cto@techstart.io'], 'body': 'Technical spec'},
            {'from': 'legal@techstart.io', 'cc': [], 'body': 'Compliance review'},
        ],
    }

    test_cases = [
        {
            'label': 'Contract negotiation (cold_outreach)',
            'sender': 'sales@acme.com',
            'subject': 'RE: Contract Draft v3 — Approval Needed',
            'body': 'Please review and approve the attached contract.',
            'thread_emails': test_threads['cold_outreach'],
            'current_ccs': [],
        },
        {
            'label': 'New technical project kickoff',
            'sender': 'pm@techstart.io',
            'subject': 'New Integration Project — Kickoff Meeting',
            'body': 'Scheduling kickoff for new integration project.',
            'thread_emails': test_threads['internal_project'],
            'current_ccs': [],
        },
        {
            'label': 'Budget approval request',
            'sender': 'pm@techstart.io',
            'subject': 'Budget Approval — Q2 Infrastructure Spend',
            'body': 'Need CFO approval for Q2 infrastructure budget.',
            'thread_emails': test_threads['internal_project'],
            'current_ccs': ['cto@techstart.io'],
        },
    ]

    for tc in test_cases:
        print(f"\n{'─'*60}")
        print(f"Test: {tc['label']}")
        print(f"  Sender: {tc['sender']}")
        print(f"  Subject: {tc['subject']}")
        print(f"  Current CCs: {tc['current_ccs']}")
        suggestions = suggest_ccs(
            sender=tc['sender'],
            subject=tc['subject'],
            body=tc['body'],
            thread_emails=tc['thread_emails'],
            current_ccs=tc['current_ccs'],
        )
        if suggestions:
            print(f"  Suggestions ({len(suggestions)}):")
            for s in suggestions:
                print(f"    • {s['email']} | {s['reason'][:60]} | conf={s['confidence']:.2f} | {s['source']}")
        else:
            print("  Suggestions: None")

    # Test learning
    print(f"\n{'─'*60}")
    print("Test: Learn from successful thread")
    learn_from_successful_threads(
        thread_id='test-thread-001',
        thread_emails=test_threads['cold_outreach'],
        subject='Contract negotiation',
    )
    print("  Learning complete → templates updated")

    # Reload and show templates
    templates = _load_org_templates()
    print(f"\nOrg templates loaded: {len(templates)} entries")
    for key, entries in templates.items():
        print(f"  {key}: {len(entries)} entries")
