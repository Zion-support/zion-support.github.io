#!/usr/bin/env python3
"""
V30-PX: Response Necessity Detector
Determines if an email requires a response based on content, headers, and sender.
Helps avoid unnecessary auto-responses to newsletters, automated notifications, etc.
"""

import re

# Common indicators that an email does not require a response
_NO_RESPONSE_INDICATORS = [
    r'don.t\s+reply',
    r'do\s+not\s+reply',
    r'automated?\s+message',
    r'this\s+is\s+an?\s+automated?\s+email',
    r'newsletter',
    r'unsubscribe',
    r'no-reply@',
    r'noreply@',
    r'delivery\s+status\s+notification',
    r'out\s+of\s+office',
    r'vacation\s+auto\s+reply',
    r'this\s+email\s+was\s+generated\s+automatically',
    r'please\s+do\s+not\s+respond\s+to\s+this\s+email',
]

# Domains known for sending automated/no-reply emails (can be expanded)
_NO_REPLY_DOMAINS = [
    'noreply.com',
    'no-reply.com',
    'donotreply.com',
    'example.com',  # placeholder, remove in production
    # Add more as needed
]

def _check_content_indicators(subject: str, snippet: str, body: str = '') -> tuple[bool, str, float]:
    """
    Check subject, snippet, and body for indicators that no response is needed.
    Returns (is_indicator_found, reason, confidence)
    """
    text_to_check = f"{subject} {snippet} {body}".lower()
    for pattern in _NO_RESPONSE_INDICATORS:
        if re.search(pattern, text_to_check, re.IGNORECASE):
            return True, f"content_indicator:{pattern}", 0.85
    return False, "", 0.0

def _check_sender_domain(sender: str) -> tuple[bool, str, float]:
    """
    Check if the sender's domain is in the no-reply list.
    """
    # Extract email address from sender string (which might be "Name <email@domain>")
    email_match = re.search(r'<([^>]+)>', sender)
    if email_match:
        email = email_match.group(1).lower()
    else:
        # Assume the whole string is an email if no angle brackets
        email = sender.strip().lower()
    
    if '@' in email:
        domain = email.split('@')[1]
        if domain in _NO_REPLY_DOMAINS:
            return True, f"sender_domain:{domain}", 0.9
    return False, "", 0.0

def detect_response_necessity(email: dict) -> dict:
    """
    Main function to determine if a response is necessary.
    
    Args:
        email: dict containing at least 'subject', 'snippet', 'sender', and optionally 'body'
    
    Returns:
        dict: {
            'is_response_needed': bool,
            'reason': str,
            'confidence': float,
            'recommended_action': str  # e.g., 'skip', 'process_normally'
        }
    """
    subject = email.get('subject', '')
    snippet = email.get('snippet', '')
    sender = email.get('sender', '')
    body = email.get('body', '')  # might not always be present
    
    # Check content indicators
    content_indicator, content_reason, content_conf = _check_content_indicators(subject, snippet, body)
    if content_indicator:
        return {
            'is_response_needed': False,
            'reason': content_reason,
            'confidence': content_conf,
            'recommended_action': 'skip'
        }
    
    # Check sender domain
    domain_indicator, domain_reason, domain_conf = _check_sender_domain(sender)
    if domain_indicator:
        return {
            'is_response_needed': False,
            'reason': domain_reason,
            'confidence': domain_conf,
            'recommended_action': 'skip'
        }
    
    # If we get here, no strong indicators found; assume response is needed
    return {
        'is_response_needed': True,
        'reason': 'no_indicators_found',
        'confidence': 0.6,  # low confidence because we didn't find positive indicators
        'recommended_action': 'process_normally'
    }