#!/usr/bin/env python
"""
Email Intelligence Engine V368 - Email Thread Summarizer
========================================================

Generates concise summaries of long email threads with key points extracted.
Analyzes thread structure, identifies main topics, extracts decisions made,
and produces executive summaries for quick comprehension.

CRITICAL: Enforces reply-all for multi-recipient emails.

Version: V368
Author: Email Intelligence Series
"""

import json
import re
from datetime import datetime, timezone
from collections import Counter


# Common stop words to filter out during analysis
STOP_WORDS = {
    "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for",
    "of", "with", "by", "from", "is", "it", "this", "that", "was", "are",
    "be", "have", "has", "had", "do", "does", "did", "will", "would",
    "could", "should", "may", "might", "can", "shall", "not", "no",
    "as", "if", "so", "than", "too", "very", "just", "about", "also",
    "then", "them", "these", "those", "some", "any", "all", "each",
    "i", "me", "my", "we", "our", "you", "your", "he", "she", "they",
    "his", "her", "its", "their", "who", "what", "when", "where", "why",
    "how", "which", "here", "there", "been", "being", "were", "am"
}

# Topic indicator phrases
TOPIC_INDICATORS = {
    "project": ["project", "milestone", "sprint", "deliverable", "timeline", "roadmap"],
    "budget": ["budget", "cost", "expense", "funding", "financial", "pricing", "invoice"],
    "technical": ["bug", "feature", "code", "deploy", "server", "api", "database", "system"],
    "hr": ["hiring", "interview", "onboarding", "leave", "performance", "team"],
    "meeting": ["meeting", "agenda", "minutes", "schedule", "calendar", "discuss"],
    "client": ["client", "customer", "stakeholder", "vendor", "partner", "account"],
    "policy": ["policy", "compliance", "regulation", "procedure", "guideline", "rule"]
}

# Decision indicators
DECISION_PATTERNS = [
    r'(?:we(?:\'ve| have)? (?:decided|agreed|chosen|selected|approved|confirmed))\s+(.{10,100}?)(?:\.|$)',
    r'(?:the decision (?:is|was))\s+(.{10,100}?)(?:\.|$)',
    r'(?:let.s (?:go with|proceed with|move forward with))\s+(.{10,100}?)(?:\.|$)',
    r'(?:approved|confirmed|finalized)\s*:\s*(.{10,100}?)(?:\.|$)',
    r'(?:we will|we\'ll|we are going to)\s+(.{10,100}?)(?:\.|$)'
]


def parse_thread_messages(email_thread):
    """
    Parse an email thread into individual messages.
    
    Args:
        email_thread (list): List of email message dicts with 'sender', 'body', 'timestamp'.
    
    Returns:
        list: Parsed messages with metadata.
    """
    parsed = []
    for i, msg in enumerate(email_thread):
        body = msg.get("body", "")
        sender = msg.get("sender", "unknown")
        timestamp = msg.get("timestamp", "")
        
        # Extract key sentences (non-empty, non-greeting lines)
        lines = [l.strip() for l in body.split('\n') if l.strip()]
        key_sentences = [
            l for l in lines
            if len(l) > 20 and not l.lower().startswith(("hi ", "hello ", "hey ", "dear ", "regards", "best,", "thanks,", "sincerely"))
        ]
        
        parsed.append({
            "message_index": i + 1,
            "sender": sender,
            "timestamp": timestamp,
            "body_length": len(body),
            "key_sentences": key_sentences[:10],  # Top 10 key sentences
            "full_body": body
        })
    
    return parsed


def extract_topics(messages):
    """
    Extract main topics discussed in the thread.
    
    Args:
        messages (list): Parsed thread messages.
    
    Returns:
        dict: Identified topics with relevance scores.
    """
    all_text = " ".join(msg["full_body"] for msg in messages).lower()
    words = re.findall(r'\b\w+\b', all_text)
    word_freq = Counter(w for w in words if w not in STOP_WORDS and len(w) > 3)
    
    topics = {}
    for topic, indicators in TOPIC_INDICATORS.items():
        matches = [ind for ind in indicators if ind in all_text]
        if matches:
            relevance = min(1.0, len(matches) * 0.25)
            topics[topic] = {
                "detected": True,
                "relevance": round(relevance, 2),
                "matched_terms": matches
            }
        else:
            topics[topic] = {
                "detected": False,
                "relevance": 0.0,
                "matched_terms": []
            }
    
    # Get top frequent terms as additional context
    top_terms = word_freq.most_common(15)
    
    active_topics = {k: v for k, v in topics.items() if v["detected"]}
    primary_topic = max(active_topics, key=lambda k: active_topics[k]["relevance"]) if active_topics else "general"
    
    return {
        "topics": topics,
        "primary_topic": primary_topic,
        "active_topic_count": len(active_topics),
        "top_terms": [{"term": t, "frequency": f} for t, f in top_terms]
    }


def extract_decisions(messages):
    """
    Extract decisions made throughout the thread.
    
    Args:
        messages (list): Parsed thread messages.
    
    Returns:
        list: Extracted decisions.
    """
    decisions = []
    
    for msg in messages:
        body = msg["full_body"]
        for pattern in DECISION_PATTERNS:
            matches = re.finditer(pattern, body, re.IGNORECASE)
            for match in matches:
                decision_text = match.group(0).strip()
                decisions.append({
                    "decision": decision_text[:150],
                    "made_by": msg["sender"],
                    "message_index": msg["message_index"]
                })
    
    return decisions


def extract_questions(messages):
    """
    Extract questions asked in the thread that may need answers.
    
    Args:
        messages (list): Parsed thread messages.
    
    Returns:
        list: Extracted questions.
    """
    questions = []
    
    for msg in messages:
        sentences = re.split(r'[.!?]+', msg["full_body"])
        for sent in sentences:
            sent = sent.strip()
            if '?' in sent and len(sent) > 10:
                questions.append({
                    "question": sent[:150],
                    "asked_by": msg["sender"],
                    "message_index": msg["message_index"]
                })
    
    return questions


def generate_summary(messages, topics, decisions, questions):
    """
    Generate a concise executive summary of the thread.
    
    Args:
        messages (list): Parsed thread messages.
        topics (dict): Extracted topics.
        decisions (list): Extracted decisions.
        questions (list): Extracted questions.
    
    Returns:
        dict: Generated summary components.
    """
    total_messages = len(messages)
    participants = list(set(msg["sender"] for msg in messages))
    
    # Collect key sentences from all messages
    all_key_sentences = []
    for msg in messages:
        all_key_sentences.extend(msg["key_sentences"][:3])  # Top 3 from each message
    
    # Build executive summary points
    summary_points = []
    
    # Add topic context
    if topics["primary_topic"] != "general":
        summary_points.append(
            f"Primary discussion topic: {topics['primary_topic']} "
            f"(with {topics['active_topic_count']} active topic areas)"
        )
    
    # Add participation info
    summary_points.append(
        f"Thread contains {total_messages} messages from {len(participants)} participant(s)"
    )
    
    # Add key points from messages
    if all_key_sentences:
        summary_points.append(f"Key points extracted: {len(all_key_sentences)} significant statements")
    
    # Add decisions
    if decisions:
        summary_points.append(f"{len(decisions)} decision(s) identified in thread")
    
    # Add unanswered questions
    if questions:
        summary_points.append(f"{len(questions)} question(s) raised (may need follow-up)")
    
    # Generate a one-line executive summary
    exec_summary = _build_executive_summary(
        total_messages, participants, topics["primary_topic"],
        len(decisions), len(questions)
    )
    
    return {
        "executive_summary": exec_summary,
        "summary_points": summary_points,
        "key_sentences": all_key_sentences[:10],
        "participant_count": len(participants),
        "participants": participants,
        "message_count": total_messages,
        "total_word_count": sum(len(msg["full_body"].split()) for msg in messages)
    }


def _build_executive_summary(msg_count, participants, primary_topic, decision_count, question_count):
    """Build a single-line executive summary."""
    parts = []
    parts.append(f"Thread with {msg_count} messages among {len(participants)} participants")
    
    if primary_topic != "general":
        parts.append(f"focused on {primary_topic}")
    
    if decision_count > 0:
        parts.append(f"with {decision_count} decision(s) made")
    
    if question_count > 0:
        parts.append(f"and {question_count} question(s) raised")
    
    return ", ".join(parts) + "."


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


def analyze_thread(thread_data):
    """
    Perform complete thread summarization analysis.
    
    Args:
        thread_data (dict): Thread data containing 'messages', 'subject', 'recipients'.
    
    Returns:
        dict: Complete analysis result as JSON-serializable dictionary.
    """
    subject = thread_data.get("subject", "")
    messages = thread_data.get("messages", [])
    recipients = thread_data.get("recipients", [])
    
    # Perform analyses
    parsed_messages = parse_thread_messages(messages)
    topics = extract_topics(parsed_messages)
    decisions = extract_decisions(parsed_messages)
    questions = extract_questions(parsed_messages)
    summary = generate_summary(parsed_messages, topics, decisions, questions)
    reply_all = enforce_reply_all(recipients)
    
    # Build result
    result = {
        "version": "V368",
        "engine": "Email Thread Summarizer",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "reply_all_required": reply_all["reply_all_required"],
        "reply_all_enforced": reply_all["reply_all_enforced"],
        "metadata": {
            "subject": subject,
            "recipients": recipients,
            "recipient_count": reply_all["recipient_count"]
        },
        "thread_summary": summary,
        "topic_analysis": topics,
        "decisions_extracted": decisions,
        "questions_extracted": questions,
        "reply_all_enforcement": reply_all
    }
    
    return result


def main():
    """
    Main entry point demonstrating the Email Thread Summarizer engine.
    Runs sample analyses on example email threads.
    """
    print("=" * 70)
    print("  Email Intelligence Engine V368 - Email Thread Summarizer")
    print("=" * 70)
    print()
    
    # Sample thread 1: Project discussion with multiple recipients
    sample_thread_1 = {
        "subject": "Q4 Product Launch Planning",
        "recipients": ["alice@company.com", "bob@company.com", "carol@company.com", "dave@company.com"],
        "messages": [
            {
                "sender": "alice@company.com",
                "timestamp": "2026-05-25T09:00:00Z",
                "body": (
                    "Hi team,\n\n"
                    "I'd like to kick off planning for the Q4 product launch. We need to "
                    "finalize the timeline and assign responsibilities for the deliverables.\n\n"
                    "Key areas to discuss:\n"
                    "- Marketing campaign budget and timeline\n"
                    "- Technical readiness and deployment schedule\n"
                    "- Customer communication strategy\n\n"
                    "Can everyone share their availability for a planning meeting?\n\n"
                    "Best,\nAlice"
                )
            },
            {
                "sender": "bob@company.com",
                "timestamp": "2026-05-25T10:30:00Z",
                "body": (
                    "Thanks Alice,\n\n"
                    "I'm available any day next week except Wednesday. For the technical side, "
                    "we've completed the API integration and the staging environment is ready "
                    "for testing. The deployment to production should take about 2 days.\n\n"
                    "We decided to go with the blue-green deployment strategy to minimize "
                    "downtime during the launch.\n\n"
                    "Budget-wise, we'll need approximately $50K for infrastructure scaling.\n\n"
                    "Regards,\nBob"
                )
            },
            {
                "sender": "carol@company.com",
                "timestamp": "2026-05-25T14:00:00Z",
                "body": (
                    "Hello all,\n\n"
                    "From the marketing perspective, we've prepared a comprehensive campaign "
                    "that includes social media, email marketing, and a press release.\n\n"
                    "The approved marketing budget is $75K. We confirmed the agency partnership "
                    "for creative assets last week.\n\n"
                    "Question: Do we have a confirmed launch date? The campaign needs to start "
                    "at least 3 weeks before the launch date.\n\n"
                    "Thanks,\nCarol"
                )
            },
            {
                "sender": "alice@company.com",
                "timestamp": "2026-05-26T09:00:00Z",
                "body": (
                    "Great updates everyone!\n\n"
                    "We've decided to target October 15th as the launch date. This gives us "
                    "enough buffer for marketing prep and technical testing.\n\n"
                    "Let's schedule the planning meeting for Monday at 2 PM. I'll send the "
                    "calendar invite.\n\n"
                    "Action items:\n"
                    "- Bob: Prepare technical deployment checklist\n"
                    "- Carol: Finalize campaign timeline\n"
                    "- Dave: Coordinate customer communications\n\n"
                    "Looking forward to a successful launch!\n\n"
                    "Best,\nAlice"
                )
            }
        ]
    }
    
    # Sample thread 2: Bug report discussion
    sample_thread_2 = {
        "subject": "Critical Bug in Payment Processing",
        "recipients": ["dev-lead@company.com", "qa@company.com"],
        "messages": [
            {
                "sender": "qa@company.com",
                "timestamp": "2026-05-28T08:00:00Z",
                "body": (
                    "Hi,\n\n"
                    "We've found a critical bug in the payment processing module. "
                    "Transactions over $10,000 are failing with timeout errors. "
                    "This affects approximately 5% of our enterprise customers.\n\n"
                    "Steps to reproduce:\n"
                    "1. Create a transaction with amount > $10,000\n"
                    "2. Submit for processing\n"
                    "3. Observe timeout after 30 seconds\n\n"
                    "Can you investigate this urgently?\n\n"
                    "QA Team"
                )
            },
            {
                "sender": "dev-lead@company.com",
                "timestamp": "2026-05-28T09:30:00Z",
                "body": (
                    "Thanks for the detailed report. I've identified the issue - it's a "
                    "database connection pool exhaustion problem when large transactions "
                    "trigger additional validation queries.\n\n"
                    "We've decided to implement connection pooling optimization and increase "
                    "the pool size from 10 to 50 connections. The fix should be ready for "
                    "testing by end of day.\n\n"
                    "Will update once deployed to staging.\n\n"
                    "Dev Lead"
                )
            }
        ]
    }
    
    samples = [
        ("Product Launch Thread (4 messages, multi-recipient)", sample_thread_1),
        ("Bug Report Thread (2 messages, multi-recipient)", sample_thread_2)
    ]
    
    for name, thread in samples:
        print(f"--- Analyzing: {name} ---")
        result = analyze_thread(thread)
        print(json.dumps(result, indent=2))
        print()
    
    print("=" * 70)
    print("  V368 Analysis Complete")
    print("=" * 70)


if __name__ == "__main__":
    main()
