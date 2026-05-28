#!/usr/bin/env python3
"""
V30-PX: Priority Tagger
Tags emails as high, medium, low priority based on sender reputation and keywords.
"""

import re

# Urgent keywords that indicate high priority
_URGENT_KEYWORDS = [
    r'urgent',
    r'asap',
    r'emergency',
    r'important',
    r'break.*down',
    r'server.*down',
    r'site.*down',
    r'critical',
    r'outage',
    r'down',
    r'immediate',
    r'right away',
    r'as soon as possible',
]

# We'll try to import the sender reputation tracker, but if it's not available, we'll skip it.
try:
    from sender_reputation_tracker import SenderReputationTracker
    _HAS_SENDER_REPUTATION = True
except ImportError:
    _HAS_SENDER_REPUTATION = False
    _sender_reputation_tracker = None

def _check_urgent_keywords(subject: str, snippet: str) -> bool:
    """
    Check if subject or snippet contains any urgent keywords.
    """
    text = f"{subject} {snippet}".lower()
    for pattern in _URGENT_KEYWORDS:
        if re.search(pattern, text, re.IGNORECASE):
            return True
    return False

def _get_sender_reputation(sender: str) -> float:
    """
    Get the sender reputation score (0.0 to 1.0) if the tracker is available.
    Returns 0.5 (neutral) if not available or if sender not found.
    """
    if not _HAS_SENDER_REPUTATION or not _sender_reputation_tracker:
        return 0.5
    try:
        # The sender reputation tracker might have a method to get reputation.
        # We assume it has a method `get_reputation(sender)` that returns a float.
        # If not, we return 0.5.
        if hasattr(_sender_reputation_tracker, 'get_reputation'):
            return _sender_reputation_tracker.get_reputation(sender)
        else:
            # Fallback: try to call it as a function? We don't know the interface.
            return 0.5
    except Exception:
        return 0.5

def tag_priority(email: dict) -> str:
    """
    Tag the email as 'high', 'medium', or 'low' priority.
    
    Args:
        email: dict containing at least 'subject', 'snippet', 'sender'
    
    Returns:
        str: one of 'high', 'medium', 'low'
    """
    subject = email.get('subject', '')
    snippet = email.get('snippet', '')
    sender = email.get('sender', '')
    
    # Check for urgent keywords
    if _check_urgent_keywords(subject, snippet):
        return 'high'
    
    # If no urgent keywords, check sender reputation
    rep = _get_sender_reputation(sender)
    if rep >= 0.8:
        return 'high'
    elif rep >= 0.4:
        return 'medium'
    else:
        return 'low'

# Initialize the sender reputation tracker if available
if _HAS_SENDER_REPUTATION:
    try:
        _sender_reputation_tracker = SenderReputationTracker()
    except Exception:
        _HAS_SENDER_REPUTATION = False
        _sender_reputation_tracker = None