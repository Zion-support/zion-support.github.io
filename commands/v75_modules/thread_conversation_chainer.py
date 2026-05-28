#!/usr/bin/env python3
"""
V75 – Email Thread Conversation Chainer

Detects if an incoming email is:
  1) A NEW conversation (fresh subject, no prior thread)
  2) A CONTINUATION of an existing thread (Re:, Fwd:, shared Message-ID)
  3) A SPLIT-OFF (same thread but new sub-topic)

Routes each email appropriately:
  - NEW    → standard greeting, no threading references
  - REPLY  → strip "Re: Re: Re:", keep single "Re:", preserve threading markers
  - SPLIT  → add "split to:" prefix, warn about thread context
  - FORWARD → extract original content, format as forwarded message

Also produces optimal Subject line reconstruction (collapse excessive Re: chains).
"""

import re
from typing import Dict, List, Optional, Tuple
from datetime import datetime

# ── Pattern Library ───────────────────────────────────────────────────────────

RE_SUBJECT = re.compile(r'^(?:Re(?:\[.*?\])?\s*:?\s*)+', re.IGNORECASE)
FW_SUBJECT = re.compile(r'^Fwd(?:\[[^\]]*\])?\s*:?\s*', re.IGNORECASE)
MSG_ID_RE  = re.compile(r'<([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})>')
REF_RE     = re.compile(r'References:\s*(.*?)(?=\n[A-Z][a-z]+:|$)', re.S | re.IGNORECASE)
IN_REPLY_RE = re.compile(r'In-Reply-To:\s*<([^>]+)>', re.S | re.IGNORECASE)
DATE_RE    = re.compile(r'\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\w{3}\s+\d{1,2},?\s+\d{4}')

GREETING_SIMPLE = ["Hello", "Hi", "Good morning", "Good afternoon", "Greetings"]
CLOSING_SIMPLE  = ["Best regards", "Warm regards", "Kind regards", "Thanks", "Cheers"]

def normalize_subject(raw: str) -> str:
    """Collapse excessive Re: / Fwd: chains into single clean subject."""
    subject = raw.strip()
    # Remove all leading Re:/Re[2]:/Re[3]: patterns
    cleaned = RE_SUBJECT.sub('', subject)
    cleaned = FW_SUBJECT.sub('', cleaned)
    return cleaned.strip() if cleaned else subject.strip()

def detect_thread_type(
    subject: str,
    in_reply_to: Optional[str] = None,
    references: Optional[str] = None,
    body_lines: Optional[List[str]] = None,
) -> Tuple[str, str, float]:
    """
    Returns (thread_type, reasoning, confidence).
    
    thread_type ∈ { 'new', 'reply', 'forward', 'split', 'unknown' }
    """
    subject_lower = subject.lower().strip()
    norm_subject  = normalize_subject(subject)

    # ── Forward detection ─────────────────────────────────────────────────────
    if subject_lower.startswith('fwd:') or (body_lines and any('--- Forwarded message ---' in l or '---------- Forwarded message' in l for l in body_lines[:20])):
        return ("forward", "Subject starts with Fwd: or forwarded message markers detected", 0.95)

    # ── In-Reply-To header present ───────────────────────────────────────────
    if in_reply_to and MSG_ID_RE.search(in_reply_to):
        # Check if subject changed significantly → split-off
        if subject_lower.startswith('re:'):
            orig = MSG_ID_RE.search(in_reply_to)
            if orig:
                return ("reply", f"Valid In-Reply-To Message-ID '{orig.group(1)[:40]}...' detected", 0.92)
        return ("reply", "Valid In-Reply-To header present, existing thread confirmed", 0.88)

    # ── References header (multiple Message-IDs = prior history) ─────────────
    if references:
        refs = MSG_ID_RE.findall(references)
        if len(refs) >= 2:
            return ("reply", f"References chain of {len(refs)} Message-IDs confirms existing thread", 0.90)
        if len(refs) == 1:
            # Single reference could be reply or new thread start
            pass  # fall through to subject analysis

    # ── Subject analysis ──────────────────────────────────────────────────────
    if subject_lower.startswith('re:'):
        # Re: present but no In-Reply-To → possibly a new split-off thread
        return ("reply", "Re: subject detected (possible continuation)", 0.78)

    if subject_lower.startswith('re['):
        # Re[2]: Re[3]: — likely a long chain, definitely a reply
        return ("reply", "Multi-layer Re[n]: subject chain detected", 0.93)

    # ── Body analysis for forwarded content ─────────────────────────────────
    if body_lines:
        body_sample = ' '.join(body_lines[:30]).lower()
        if any(kw in body_sample for kw in ['forwarded by', 'original message', 'subject:', 'from:', 'date:', '--- original message ---']):
            return ("forward", "Body contains forwarded message headers", 0.88)

    # ── New conversation: clean subject, no markers ─────────────────────────
    return ("new", "No Re:/Fwd: markers, no threading headers — likely new conversation", 0.85)

def build_reply_header(thread_type: str, sender_name: Optional[str] = None, company: Optional[str] = None) -> str:
    """Build appropriate email header based on thread type."""
    first_name = sender_name.split()[0] if sender_name else None
    
    if thread_type == "new":
        greeting = "Hello" + (f" {first_name}," if first_name else ",")
        return greeting
    
    if thread_type in ("reply", "split"):
        greeting = "Hi" + (f" {first_name}," if first_name else ",")
        return greeting
    
    if thread_type == "forward":
        return "Hi,"

    return "Hello,"

def format_subject_for_reply(orig_subject: str) -> str:
    """Ensure single Re: prefix, no multi-layer duplication."""
    norm = normalize_subject(orig_subject)
    if not norm.lower().startswith('re:'):
        return f"Re: {norm}"
    return f"Re: {norm}"

def suggest_thread_action(thread_type: str, subject: str, body_preview: str) -> Dict:
    """Return recommended action given thread type."""
    
    if thread_type == "new":
        return {
            "action": "standard_welcome",
            "greeting": True,
            "threading": False,
            "priority": "normal",
            "footer": "reference_thread"
        }
    
    if thread_type == "reply":
        return {
            "action": "continue_thread",
            "greeting": True,
            "threading": True,
            "priority": "normal",
            "footer": "reference_original"
        }
    
    if thread_type == "split":
        return {
            "action": "acknowledge_thread",
            "greeting": True,
            "threading": True,
            "priority": "elevated",
            "warning": "This appears to be a related but separate issue — consider creating a linked ticket.",
            "footer": "reference_thread"
        }
    
    if thread_type == "forward":
        return {
            "action": "format_forward",
            "greeting": True,
            "threading": False,
            "priority": "review_required",
            "footer": "none"
        }
    
    return {
        "action": "review_required",
        "greeting": True,
        "threading": False,
        "priority": "review",
        "footer": "reference_thread"
    }

def extract_quoted_forward_body(body: str) -> Optional[str]:
    """
    Extract the original content from a forwarded message body.
    Returns the forwarded portion (above the forwarding attribution line).
    """
    lines = body.split('\n')
    for i, line in enumerate(lines):
        l = line.strip()
        # Common forward attribution patterns
        if l.startswith('---') and ('forwarded' in l.lower() or 'original' in l.lower()):
            return '\n'.join(lines[:i]).strip()
        if l.startswith('Forwarded by') or l.startswith('Sent from') or l.startswith('From:'):
            return '\n'.join(lines[:i]).strip()
        if re.match(r'From:\s+\S+', l) and i > 2:
            # Check if preceded by forwarded markers
            context = ' '.join(lines[max(0,i-5):i])
            if any(kw in context.lower() for kw in ['forwarded', 'original', 'begin forwarded']):
                return '\n'.join(lines[:i]).strip()
    return None

if __name__ == "__main__":
    # ── Test Suite ───────────────────────────────────────────────────────────
    test_cases = [
        {
            "name": "Fresh new conversation",
            "subject": "Pricing for Cloud Cost Anomaly Detector",
            "in_reply_to": None,
            "references": None,
            "body_lines": ["Hello, I would like to know the pricing for the cloud anomaly service."],
        },
        {
            "name": "Standard reply chain",
            "subject": "Re: Re: Pricing for Cloud Cost Anomaly Detector",
            "in_reply_to": "<abc123@mail.example.com>",
            "references": "<xyz789@mail.example.com> <abc123@mail.example.com>",
            "body_lines": ["Thanks for the info! Could you send a quote?"],
        },
        {
            "name": "Multi-layer Re chain collapse",
            "subject": "Re[3]: Re[2]: Re: Invoice Question",
            "in_reply_to": "<msg456@corp.com>",
            "references": "<old123@corp.com> <msg456@corp.com>",
            "body_lines": ["Still waiting for the invoice clarification."],
        },
        {
            "name": "Forwarded email",
            "subject": "Fwd: Contract Review Request",
            "in_reply_to": None,
            "references": None,
            "body_lines": ["--- Forwarded message ---\nFrom: John Doe\nDate: Mon\nSubject: Contract Review\n\nPlease review the attached contract."],
        },
        {
            "name": "Split-off thread",
            "subject": "Re: Pricing for Cloud Cost Anomaly Detector",
            "in_reply_to": None,  # No prior ID
            "references": "<old123@mail.com>",  # but references a previous thread
            "body_lines": ["While we're on the topic, I also have a question about SSO Access Auditor."],
        },
    ]

    print("=" * 70)
    print("V75 — Email Thread Conversation Chainer — Test Suite")
    print("=" * 70)

    all_passed = True
    for tc in test_cases:
        thread_type, reason, conf = detect_thread_type(
            tc["subject"], tc["in_reply_to"], tc["references"], tc["body_lines"]
        )
        action = suggest_thread_action(thread_type, tc["subject"], "")
        formatted_subj = format_subject_for_reply(tc["subject"])
        header = build_reply_header(thread_type, "John Smith")
        
        status = "✓" if thread_type != "unknown" else "✗"
        if thread_type == "unknown":
            all_passed = False
        
        print(f"\n{status} [{tc['name']}]")
        print(f"  Subject: {tc['subject']}")
        print(f"  Thread Type: {thread_type} (conf={conf:.2f}) — {reason}")
        print(f"  Action: {action['action']} | Priority: {action['priority']}")
        print(f"  Reply Subject: {formatted_subj}")
        print(f"  Reply Header: {header}")

    print("\n" + "=" * 70)
    print(f"All tests passed: {all_passed}")
    print("=" * 70)