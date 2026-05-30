#!/usr/bin/env python
"""
Email Intelligence Engine V369 - Email Action Item Extractor
============================================================

Identifies tasks, deadlines, commitments, and action items from emails.
Extracts structured action items with assignees, deadlines, priority levels,
and completion status tracking.

CRITICAL: Enforces reply-all for multi-recipient emails.

Version: V369
Author: Email Intelligence Series
"""

import json
import re
from datetime import datetime, timezone


# Action item indicator patterns
ACTION_PATTERNS = [
    # Direct assignments
    {
        "pattern": r'(?:please|kindly|could you|can you|would you)\s+(.{10,120}?)(?:\.|$)',
        "type": "request",
        "priority_boost": 0.1
    },
    {
        "pattern": r'(?:you need to|you must|you should|you are required to)\s+(.{10,120}?)(?:\.|$)',
        "type": "requirement",
        "priority_boost": 0.3
    },
    {
        "pattern": r'(?:action item|task|todo|to-do|action required)\s*[:\-]?\s*(.{10,120}?)(?:\.|$)',
        "type": "explicit_action",
        "priority_boost": 0.4
    },
    # Commitments
    {
        "pattern": r'(?:I will|I\'ll|I am going to|we will|we\'ll|we are going to)\s+(.{10,120}?)(?:\.|$)',
        "type": "commitment",
        "priority_boost": 0.2
    },
    {
        "pattern": r'(?:let me|allow me|I\'d be happy to)\s+(.{10,120}?)(?:\.|$)',
        "type": "offer",
        "priority_boost": 0.1
    },
    # Deadlines with actions
    {
        "pattern": r'(?:due|deadline|by|before)\s+(.{3,40}?)[\.,]\s*(?:please|we need|you need|make sure)?\s*(.{10,100}?)(?:\.|$)',
        "type": "deadline_action",
        "priority_boost": 0.4
    },
    # Meeting/action follow-ups
    {
        "pattern": r'(?:follow up|follow-up|circle back|check in)\s+(?:on|about|regarding)?\s*(.{10,100}?)(?:\.|$)',
        "type": "follow_up",
        "priority_boost": 0.2
    },
    # Assignments with names
    {
        "pattern": r'(\w+)\s*(?:will|shall|is to|should|needs? to)\s+(.{10,120}?)(?:\.|$)',
        "type": "assignment",
        "priority_boost": 0.3
    }
]

# Priority indicators
HIGH_PRIORITY_INDICATORS = [
    "urgent", "asap", "immediately", "critical", "important", "priority",
    "deadline", "must", "essential", "crucial", "vital", "time-sensitive"
]

MEDIUM_PRIORITY_INDICATORS = [
    "soon", "this week", "by friday", "by monday", "next week",
    "please", "should", "needs to", "expected"
]

LOW_PRIORITY_INDICATORS = [
    "when possible", "when you can", "at your convenience", "optional",
    "if time permits", "sometime", "eventually", "no rush"
]

# Deadline extraction patterns
DEADLINE_PATTERNS = [
    r'(?:by|before|due|deadline)\s+(?:this\s+)?(monday|tuesday|wednesday|thursday|friday|saturday|sunday)',
    r'(?:by|before|due|deadline)\s+(today|tomorrow)',
    r'(?:by|before|due|deadline)\s+(eod|cob|end of day|close of business)',
    r'(?:by|before|due)\s+(\d{1,2}(?::\d{2})?\s*(?:am|pm|AM|PM))',
    r'(?:by|before|due)\s+(\d{1,2}/\d{1,2}(?:/\d{2,4})?)',
    r'(?:by|before|due)\s+(january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{1,2}',
    r'(?:this|next)\s+(week|month|quarter)',
    r'within\s+(\d+)\s+(hours?|days?|weeks?|business days)',
]


def extract_action_items(text, sender="", recipients=None):
    """
    Extract action items from email text.
    
    Args:
        text (str): The email body text.
        sender (str): Email sender address.
        recipients (list): List of recipient addresses.
    
    Returns:
        list: Extracted action items with metadata.
    """
    if recipients is None:
        recipients = []
    
    action_items = []
    item_id = 1
    
    for pattern_info in ACTION_PATTERNS:
        pattern = pattern_info["pattern"]
        item_type = pattern_info["type"]
        priority_boost = pattern_info["priority_boost"]
        
        matches = re.finditer(pattern, text, re.IGNORECASE)
        for match in matches:
            action_text = match.group(0).strip()
            
            # Determine priority
            priority = _determine_priority(action_text, priority_boost)
            
            # Try to extract deadline
            deadline = _extract_deadline(action_text)
            
            # Try to extract assignee
            assignee = _extract_assignee(action_text, item_type, sender, recipients)
            
            action_items.append({
                "item_id": item_id,
                "action_text": action_text[:200],
                "type": item_type,
                "priority": priority,
                "deadline": deadline,
                "assignee": assignee,
                "status": "pending",
                "confidence": round(0.6 + priority_boost, 2)
            })
            item_id += 1
    
    # Deduplicate similar items
    action_items = _deduplicate_items(action_items)
    
    return action_items


def _determine_priority(text, base_boost):
    """Determine priority level based on text indicators."""
    text_lower = text.lower()
    
    high_matches = [ind for ind in HIGH_PRIORITY_INDICATORS if ind in text_lower]
    medium_matches = [ind for ind in MEDIUM_PRIORITY_INDICATORS if ind in text_lower]
    low_matches = [ind for ind in LOW_PRIORITY_INDICATORS if ind in text_lower]
    
    if high_matches:
        return "high"
    elif medium_matches:
        return "medium"
    elif low_matches:
        return "low"
    elif base_boost >= 0.3:
        return "high"
    elif base_boost >= 0.2:
        return "medium"
    else:
        return "low"


def _extract_deadline(text):
    """Extract deadline information from action item text."""
    for pattern in DEADLINE_PATTERNS:
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            return {
                "detected": True,
                "raw_text": match.group(0)[:50],
                "deadline_value": match.group(1) if match.lastindex else match.group(0)[:30]
            }
    return {"detected": False, "raw_text": None, "deadline_value": None}


def _extract_assignee(text, item_type, sender, recipients):
    """Try to extract the assignee of an action item."""
    if item_type == "commitment":
        return {"name": sender, "type": "sender_self_assigned"}
    elif item_type in ("request", "requirement"):
        if recipients:
            return {"name": recipients[0], "type": "recipient_assigned"}
        return {"name": "recipient", "type": "implied_recipient"}
    elif item_type == "assignment":
        # Try to extract name from the beginning of the match
        name_match = re.match(r'(\w+)', text)
        if name_match:
            return {"name": name_match.group(1), "type": "named_assignment"}
    return {"name": "unassigned", "type": "unknown"}


def _deduplicate_items(items):
    """Remove duplicate or very similar action items."""
    if not items:
        return items
    
    unique_items = []
    seen_texts = set()
    
    for item in items:
        # Normalize text for comparison
        normalized = re.sub(r'\s+', ' ', item["action_text"].lower()[:50])
        if normalized not in seen_texts:
            seen_texts.add(normalized)
            unique_items.append(item)
    
    # Re-number
    for i, item in enumerate(unique_items, 1):
        item["item_id"] = i
    
    return unique_items


def extract_commitments(text, sender=""):
    """
    Extract commitments (promises made by the sender).
    
    Args:
        text (str): The email body text.
        sender (str): Email sender.
    
    Returns:
        list: Extracted commitments.
    """
    commitments = []
    
    commitment_patterns = [
        r'(?:I will|I\'ll|I am going to|I plan to|I intend to)\s+(.{10,120}?)(?:\.|$)',
        r'(?:we will|we\'ll|we are going to|we plan to)\s+(.{10,120}?)(?:\.|$)',
        r'(?:I(?:\'ll| will) (?:make sure|ensure|take care of|handle))\s+(.{10,120}?)(?:\.|$)',
        r'(?:count on me (?:to|for))\s+(.{10,120}?)(?:\.|$)',
        r'(?:I(?:\'ll| will) (?:send|share|provide|deliver|prepare))\s+(.{10,120}?)(?:\.|$)'
    ]
    
    for pattern in commitment_patterns:
        matches = re.finditer(pattern, text, re.IGNORECASE)
        for match in matches:
            commitments.append({
                "commitment": match.group(0).strip()[:200],
                "committed_by": sender,
                "confidence": 0.75
            })
    
    return commitments


def extract_deliverables(text):
    """
    Extract mentioned deliverables and outputs.
    
    Args:
        text (str): The email body text.
    
    Returns:
        list: Extracted deliverables.
    """
    deliverables = []
    
    deliverable_patterns = [
        r'(?:deliverable|output|document|report|presentation|proposal|plan|specification|design|prototype)\s*(?:for|on|about)?\s*(.{5,60}?)(?:\.|,|$)',
        r'(?:send|share|provide|deliver|submit|attach)\s+(?:the\s+)?(?:updated\s+|final\s+|revised\s+)?(\w+(?:\s+\w+){0,4}?)(?:\.|,|$)',
        r'(?:attached|enclosed)\s+(?:is|are)?\s*(?:the\s+)?(.{5,60}?)(?:\.|,|$)'
    ]
    
    for pattern in deliverable_patterns:
        matches = re.finditer(pattern, text, re.IGNORECASE)
        for match in matches:
            deliverables.append({
                "deliverable": match.group(0).strip()[:150],
                "description": match.group(1).strip()[:80] if match.lastindex else ""
            })
    
    # Deduplicate
    seen = set()
    unique = []
    for d in deliverables:
        key = d["deliverable"][:40].lower()
        if key not in seen:
            seen.add(key)
            unique.append(d)
    
    return unique


def generate_task_summary(action_items, commitments, deliverables):
    """
    Generate a summary of all extracted tasks and items.
    
    Args:
        action_items (list): Extracted action items.
        commitments (list): Extracted commitments.
        deliverables (list): Extracted deliverables.
    
    Returns:
        dict: Task summary statistics.
    """
    priority_counts = {"high": 0, "medium": 0, "low": 0}
    type_counts = {}
    has_deadlines = 0
    
    for item in action_items:
        priority_counts[item["priority"]] = priority_counts.get(item["priority"], 0) + 1
        type_counts[item["type"]] = type_counts.get(item["type"], 0) + 1
        if item["deadline"]["detected"]:
            has_deadlines += 1
    
    total_items = len(action_items) + len(commitments) + len(deliverables)
    
    return {
        "total_extracted_items": total_items,
        "action_item_count": len(action_items),
        "commitment_count": len(commitments),
        "deliverable_count": len(deliverables),
        "priority_breakdown": priority_counts,
        "type_breakdown": type_counts,
        "items_with_deadlines": has_deadlines,
        "items_without_deadlines": len(action_items) - has_deadlines
    }


def enforce_reply_all(recipients):
    """
    Enforce reply-all behavior for multi-recipient emails.
    
    Args:
        recipients (list): List of email recipients.
    
    Returns:
        dict: Reply-all enforcement status.
    """
    recipient_count = len(recipients) if recipients else 0
    reply_all_required = recipient_count > 1
    reply_all_enforced = reply_all_required
    
    return {
        "recipient_count": recipient_count,
        "reply_all_required": reply_all_required,
        "reply_all_enforced": reply_all_enforced,
        "enforcement_message": (
            "Reply-all is enforced: this email has multiple recipients."
            if reply_all_required
            else "Single recipient - reply-all not required."
        )
    }


def analyze_email(email_data):
    """
    Perform complete action item extraction analysis on an email.
    
    Args:
        email_data (dict): Email data with 'subject', 'body', 'sender', 'recipients'.
    
    Returns:
        dict: Complete analysis result as JSON-serializable dictionary.
    """
    subject = email_data.get("subject", "")
    body = email_data.get("body", "")
    recipients = email_data.get("recipients", [])
    sender = email_data.get("sender", "")
    
    full_text = f"{subject}\n{body}"
    
    # Perform analyses
    action_items = extract_action_items(full_text, sender, recipients)
    commitments = extract_commitments(full_text, sender)
    deliverables = extract_deliverables(full_text)
    task_summary = generate_task_summary(action_items, commitments, deliverables)
    reply_all = enforce_reply_all(recipients)
    
    # Build result
    result = {
        "version": "V369",
        "engine": "Email Action Item Extractor",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "reply_all_required": reply_all["reply_all_required"],
        "reply_all_enforced": reply_all["reply_all_enforced"],
        "metadata": {
            "sender": sender,
            "recipients": recipients,
            "recipient_count": reply_all["recipient_count"],
            "subject": subject
        },
        "action_items": action_items,
        "commitments": commitments,
        "deliverables": deliverables,
        "task_summary": task_summary,
        "reply_all_enforcement": reply_all
    }
    
    return result


def main():
    """
    Main entry point demonstrating the Email Action Item Extractor engine.
    Runs sample analyses on example emails.
    """
    print("=" * 70)
    print("  Email Intelligence Engine V369 - Email Action Item Extractor")
    print("=" * 70)
    print()
    
    # Sample email 1: Task assignment with multiple recipients
    sample_email_1 = {
        "sender": "manager@company.com",
        "recipients": ["alice@company.com", "bob@company.com", "carol@company.com"],
        "subject": "Sprint tasks and deliverables for next week",
        "body": (
            "Hi team,\n\n"
            "Here are the action items for next sprint:\n\n"
            "Action items:\n"
            "- Alice: Please prepare the API documentation by Friday EOD\n"
            "- Bob: You need to complete the unit testing before Monday\n"
            "- Carol: Could you finalize the design mockups? They're due this Wednesday.\n\n"
            "I will send the project timeline document by end of day today.\n"
            "I'll also schedule a review meeting for Thursday.\n\n"
            "We need to deliver the prototype by next Friday. This is critical "
            "for the stakeholder presentation.\n\n"
            "Please follow up on the pending vendor responses ASAP.\n\n"
            "Attached is the requirements specification document.\n\n"
            "Thanks,\nManager"
        )
    }
    
    # Sample email 2: Follow-up with commitments
    sample_email_2 = {
        "sender": "developer@company.com",
        "recipients": ["team-lead@company.com"],
        "subject": "Update on bug fix progress",
        "body": (
            "Hi,\n\n"
            "I wanted to give you an update on the payment bug fix.\n\n"
            "I will have the fix deployed to staging by tomorrow morning.\n"
            "I'll also write up a post-mortem document once everything is resolved.\n"
            "We are going to implement additional monitoring to prevent similar issues.\n\n"
            "Could you please review the PR when it's ready? I should have it up by "
            "3 PM today.\n\n"
            "I plan to run regression tests after deployment. The test report will be "
            "shared with the team.\n\n"
            "Best,\nDeveloper"
        )
    }
    
    # Sample email 3: Meeting follow-up
    sample_email_3 = {
        "sender": "coordinator@company.com",
        "recipients": ["alice@company.com", "bob@company.com", "carol@company.com", "dave@company.com"],
        "subject": "Meeting action items - Product Review",
        "body": (
            "Hello all,\n\n"
            "Here are the action items from today's product review meeting:\n\n"
            "1. Alice will update the pricing page by next Monday\n"
            "2. Bob needs to fix the login flow issues - deadline is this Friday\n"
            "3. Carol should prepare the competitive analysis report\n"
            "4. Dave must submit the compliance documentation before the audit on June 15\n\n"
            "I will circulate the meeting minutes by end of day.\n"
            "I'll also set up a follow-up meeting for next week.\n\n"
            "Please make sure all items are completed on time. This is urgent "
            "as we have the board presentation coming up.\n\n"
            "Let me know if you have any questions.\n\n"
            "Best regards,\nCoordinator"
        )
    }
    
    samples = [
        ("Task Assignment - Multi-Recipient", sample_email_1),
        ("Commitments & Follow-up - Single Recipient", sample_email_2),
        ("Meeting Action Items - Multi-Recipient", sample_email_3)
    ]
    
    for name, email in samples:
        print(f"--- Analyzing: {name} ---")
        result = analyze_email(email)
        print(json.dumps(result, indent=2))
        print()
    
    print("=" * 70)
    print("  V369 Analysis Complete")
    print("=" * 70)


if __name__ == "__main__":
    main()
