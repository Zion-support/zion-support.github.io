#!/usr/bin/env python3
"""
Conversation State Detector - Track conversation progress

States: OPENING, INFORMATION_EXCHANGE, DECISION, EXECUTION, FOLLOW_UP, CLOSED
"""

import re
from typing import Tuple

def detect_conversation_state(subject: str, snippet: str, thread_depth: int = 1) -> Tuple[str, float]:
    """
    Detect conversation state and confidence.
    Returns (state, confidence)
    """
    text = f"{subject} {snippet}".lower()
    
    # Opening indicators
    opening_words = ['hello', 'hi', 'hello', 'contact', 'reaching out', 'new', 'initial']
    opening_score = sum(2 for w in opening_words if w in text)
    
    # Decision indicators
    decision_words = ['approve', 'confirm', 'sign', 'decision', 'aprovação', 'decisão']
    decision_score = sum(3 for w in decision_words if w in text)
    
    # Execution indicators
    execution_words = ['start', 'begin', 'proceeding', 'moving forward', 'implement']
    execution_score = sum(2 for w in execution_words if w in text)
    
    # Closing indicators
    closing_words = ['done', 'completed', 'finished', 'resolved', 'obrigado', 'thanks']
    closing_score = sum(3 for w in closing_words if w in text)
    
    # Thread depth affects state
    if thread_depth == 1:
        opening_boost = 3
    elif thread_depth <= 3:
        opening_boost = -2
    else:
        opening_boost = -5
    
    scores = {
        'OPENING': opening_score + opening_boost,
        'DECISION': decision_score + (3 if thread_depth >= 2 else 0),
        'EXECUTION': execution_score + (2 if thread_depth >= 2 else 0),
        'CLOSED': closing_score + (5 if thread_depth >= 3 else 0),
    }
    
    # Default to INFORMATION_EXCHANGE if high thread depth
    if thread_depth >= 5 and scores['DECISION'] < 3:
        scores['INFORMATION_EXCHANGE'] = 5
    
    best_state = max(scores, key=scores.get)
    confidence = min(abs(scores[best_state]) / 10, 1.0)
    
    return best_state, confidence

def get_state_response_strategy(state: str) -> str:
    """Get recommended response strategy for conversation state."""
    strategies = {
        'OPENING': 'Build rapport, ask clarifying questions, set expectations',
        'INFORMATION_EXCHANGE': 'Provide specific answers, share relevant details',
        'DECISION': 'Present clear options, recommend action, reduce friction',
        'EXECUTION': 'Confirm next steps, provide timeline, ask for confirmation',
        'FOLLOW_UP': 'Check satisfaction, offer additional help, close loop',
        'CLOSED': 'Acknowledge completion, invite future contact, maintain relationship'
    }
    return strategies.get(state, strategies['INFORMATION_EXCHANGE'])

if __name__ == '__main__':
    # Test
    test_emails = [
        ("New inquiry", "Hello I'd like to learn more about your services", 1),
        ("Approval needed", "Please approve the attached proposal", 3),
        ("Project complete", "Thanks we've completed the implementation", 5)
    ]
    
    for subject, snippet, depth in test_emails:
        state, conf = detect_conversation_state(subject, snippet, depth)
        print(f"'{subject}' -> {state} ({conf:.0%})")