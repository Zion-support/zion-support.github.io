#!/usr/bin/env python3
"""
Thread Summarizer & Action Extractor - V10 Intelligence

Features:
- Summarize long email threads
- Extract action items with deadlines
- Create calendar events from action items
- Track conversation summaries
"""

import json
from pathlib import Path
from datetime import datetime
from typing import Dict, List

WORKSPACE = Path('/root/.openclaw/workspace')
DATA_DIR = WORKSPACE / 'zion.app' / 'data'
THREAD_SUMMARIES = DATA_DIR / 'thread_summaries.json'
ACTION_ITEMS = DATA_DIR / 'extracted_actions.json'

def summarize_thread(messages: List[Dict]) -> str:
    """Create a concise summary of email thread."""
    if not messages:
        return "No messages in thread"
    
    # Key info extraction
    subjects = [m.get('subject', '') for m in messages]
    senders = [m.get('sender', '').split('<')[0].strip() for m in messages]
    
    # Find main topic
    main_subject = subjects[0] if subjects else "Discussion"
    
    # Find key topics
    topics = []
    for msg in messages:
        snippet = msg.get('snippet', '').lower()
        if 'meeting' in snippet:
            topics.append("meeting discussion")
        if 'deadline' in snippet or 'due' in snippet:
            topics.append("deadline mentioned")
        if 'approve' in snippet:
            topics.append("approval pending")
    
    topics = list(set(topics))
    
    return f"Thread: '{main_subject}' | Participants: {len(senders)} | Topics: {', '.join(topics) if topics else 'general discussion'}"

def extract_actions_with_deadlines(text: str, sender: str) -> List[Dict]:
    """Extract actionable items with potential deadlines."""
    actions = []
    
    # Deadline patterns
    import re
    deadline_patterns = [
        r'(?:due|deadline|by)[\s:]+([^.,]+)',
        r'(\d{1,2}[/-]\d{1,2}[/-]\d{2,4})',
        r'next\s+(monday|tuesday|wednesday|thursday|friday)',
        r'end\s+of\s+(day|week)',
    ]
    
    deadline = None
    for pattern in deadline_patterns:
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            deadline = match.group(1)
            break
    
    # Action phrases
    action_patterns = [
        r'(?:need|need to|please|would like|can you|could you) (.+?)(?:\.|$)',
        r'(?:task|action|do|follow up):? (.+?)(?:\.|$)',
    ]
    
    for pattern in action_patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        for match in matches[:3]:  # Max 3 actions
            actions.append({
                'action': match.strip(),
                'sender': sender,
                'deadline': deadline,
                'created': datetime.now().isoformat()
            })
    
    return actions

def save_action_items(actions: List[Dict]):
    """Save extracted actions for follow-up."""
    existing = []
    if ACTION_ITEMS.exists():
        existing = json.loads(ACTION_ITEMS.read_text())
    
    existing.extend(actions)
    
    ACTION_ITEMS.parent.mkdir(parents=True, exist_ok=True)
    ACTION_ITEMS.write_text(json.dumps(existing[-100:]))  # Keep last 100

if __name__ == '__main__':
    # Test
    test_text = "We need to schedule a meeting by Friday and I should send the proposal by Tuesday"
    actions = extract_actions_with_deadlines(test_text, "test@example.com")
    print(f"Actions: {actions}")