#!/usr/bin/env python3
"""
V43: Sender Preference Memory
Learns and remembers each sender's preferred communication style over time:
- tone (formal/casual/empathetic)
- response_length (short/medium/detailed)
- best_reply_all_habit (bool)
- preferred_timing (morning/afternoon/evening)
- interaction_count
Updated after each email exchange via outcome_auto_learner pattern.
Stored in: data/sender_profiles.jsonl
"""

import json
import re
from pathlib import Path
from datetime import datetime, timezone
from typing import Optional

WORKSPACE = Path(__file__).resolve().parent.parent.parent
DATA = WORKSPACE / "data"
SENDER_PROFILES_FILE = DATA / "sender_profiles.jsonl"

# Default fallback profile for unknown senders
DEFAULT_PROFILE = {
    "tone": "professional",
    "response_length": "medium",
    "best_reply_all_habit": False,
    "preferred_timing": "morning",
    "interaction_count": 0,
    "last_interaction": None,
    "learned_from": [],
}

TONE_KEYWORDS = {
    "formal_corporate": ["dear", "pursuant", "hereby", "kindly", "cordially", "regards"],
    "empathetic": ["understand", "sorry", "apologize", "feel", "concern", "help"],
    "enthusiastic_professional": ["great", "excited", "happy", "fantastic", "wonderful", "amazing"],
    "friendly_professional": ["hi", "hey", "cheers", "thanks", "appreciate"],
    "casual": ["hey", "cool", "awesome", "btw", "fyi"],
    "professional": ["best regards", "thank you", "regards"],
}

RESPONSE_LENGTH_INDICATORS = {
    "short": (50, 120),
    "medium": (120, 300),
    "detailed": (300, 9999),
}


def _ensure_profiles_file():
    try:
        SENDER_PROFILES_FILE.parent.mkdir(parents=True, exist_ok=True)
        if not SENDER_PROFILES_FILE.exists():
            SENDER_PROFILES_FILE.write_text("", encoding="utf-8")
    except Exception:
        pass


def _load_profile(sender_email: str) -> dict:
    """Load a sender's profile from the JSONL store, or return default."""
    _ensure_profiles_file()
    try:
        with SENDER_PROFILES_FILE.open("r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                entry = json.loads(line)
                if entry.get("email", "").lower() == sender_email.lower():
                    # Merge with defaults to fill missing fields
                    return {**DEFAULT_PROFILE, **entry}
    except Exception:
        pass
    return {**DEFAULT_PROFILE}


def _save_profile(sender_email: str, profile: dict) -> None:
    """Atomically upsert a sender profile in JSONL."""
    _ensure_profiles_file()
    # Read all existing entries except this sender
    remaining = []
    try:
        with SENDER_PROFILES_FILE.open("r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                entry = json.loads(line)
                if entry.get("email", "").lower() != sender_email.lower():
                    remaining.append(entry)
    except Exception:
        remaining = []

    profile["email"] = sender_email
    profile["last_updated"] = datetime.now(timezone.utc).isoformat()

    with SENDER_PROFILES_FILE.open("w", encoding="utf-8") as f:
        for entry in remaining:
            f.write(json.dumps(entry, ensure_ascii=False) + "\n")
        f.write(json.dumps(profile, ensure_ascii=False) + "\n")


def learn_from_outcome(sender_email: str, sent_body: str, received_body: str,
                       reply_all_used: bool, conversation深: int) -> dict:
    """
    Called after a send outcome is known (reply received or 48h silence).
    Updates sender profile based on observed communication patterns.

    Args:
        sender_email: who we responded to
        sent_body: what we sent (for length + tone analysis)
        received_body: what they replied with (for tone inference)
        reply_all_used: whether we used Reply-All
        conversation深: number of prior exchanges in this thread

    Returns:
        updated profile dict
    """
    if not sender_email or "@" not in sender_email:
        return DEFAULT_PROFILE

    profile = _load_profile(sender_email)
    changes = []

    # 1. Learn TONE from received body
    if received_body and len(received_body) > 30:
        inferred_tone = _infer_tone(received_body)
        if inferred_tone and inferred_tone != profile.get("tone"):
            # Only update if consistent over 2+ interactions
            count = profile.get("interaction_count", 0)
            if count >= 1:
                profile["tone"] = inferred_tone
                changes.append(f"tone→{inferred_tone}")

    # 2. Learn RESPONSE LENGTH from sent body
    if sent_body:
        inferred_length = _classify_length(sent_body)
        if inferred_length and inferred_length != profile.get("response_length"):
            profile["response_length"] = inferred_length
            changes.append(f"length→{inferred_length}")

    # 3. Learn REPLY-ALL habit: if they CC people, they expect Reply-All
    if reply_all_used:
        # If we used Reply-All and they responded, they accept it
        profile["best_reply_all_habit"] = True
    else:
        # Check if sender CCs others frequently
        cc_count = len([c for c in (received_body or "") if "@" in c])
        if cc_count > 0:
            profile["best_reply_all_habit"] = True
            changes.append("reply_all→True_from_CC")

    # 4. Update interaction count
    profile["interaction_count"] = profile.get("interaction_count", 0) + 1
    profile["last_interaction"] = datetime.now(timezone.utc).isoformat()

    # 5. Learn preferred timing from email headers (hour of day they send most)
    # (Simplified: track hour of last message)
    try:
        # Extract hour from email Date header if available
        hour_match = re.search(r"(\d{1,2}):\d{2}:\d{2}", received_body[:100])
        if hour_match:
            hour = int(hour_match.group(1))
            timing = (
                "morning" if 6 <= hour < 12
                else "afternoon" if 12 <= hour < 17
                else "evening"
            )
            profile["preferred_timing"] = timing
    except Exception:
        pass

    # 6. Track what we learned from
    profile["learned_from"] = changes

    _save_profile(sender_email, profile)
    return profile


def _infer_tone(text: str) -> Optional[str]:
    """Infer tone category from text content."""
    text_lower = text.lower()
    scores = {}
    for tone, keywords in TONE_KEYWORDS.items():
        score = sum(1 for kw in keywords if kw.lower() in text_lower)
        if score > 0:
            scores[tone] = score
    if not scores:
        return None
    return max(scores, key=scores.get)


def _classify_length(text: str) -> Optional[str]:
    """Classify response length from word count."""
    words = len(text.split())
    for length, (low, high) in RESPONSE_LENGTH_INDICATORS.items():
        if low <= words < high:
            return length
    return "detailed"


def get_profile(sender_email: str) -> dict:
    """
    Public API: get a sender's learned preferences.
    Falls back to DEFAULT_PROFILE for unknown senders.
    """
    return _load_profile(sender_email)


def apply_preferences(profile: dict, draft_body: str, intent: str) -> dict:
    """
    Adjust a draft body based on sender preferences.

    Returns:
        dict with adjusted fields:
            - 'body': adjusted body text
            - 'tone_applied': which tone was applied
            - 'length_applied': which length was applied
            - 'reply_all_recommended': bool
    """
    tone = profile.get("tone", "professional")
    length_pref = profile.get("response_length", "medium")
    reply_all = profile.get("best_reply_all_habit", False)

    # If sender prefers short responses and draft is long, summarize
    adjusted_body = draft_body
    if length_pref == "short" and len(draft_body.split()) > 80:
        # Truncate to first 2 paragraphs or 80 words
        words = draft_body.split()
        adjusted_body = " ".join(words[:80])
        if len(words) > 80:
            adjusted_body += "..."

    # Add tone-specific opener
    tone_openers = {
        "formal_corporate": "Dear Sir/Madam,\n\n",
        "empathetic": "Thank you for reaching out. I completely understand your concern and I'm here to help.\n\n",
        "enthusiastic_professional": "Thank you for reaching out! I'm excited to help with this.\n\n",
        "friendly_professional": "Hi,\n\nThank you for reaching out.\n\n",
        "casual": "Hey,\n\nThanks for reaching out.\n\n",
        "professional": "Hi,\n\nThank you for reaching out. Please find my response below.\n\n",
    }
    opener = tone_openers.get(tone, "")
    if opener and not adjusted_body.startswith(opener.strip()):
        adjusted_body = opener + adjusted_body

    return {
        "body": adjusted_body,
        "tone_applied": tone,
        "length_applied": length_pref,
        "reply_all_recommended": reply_all,
    }


def build_or_update_profile(sender_email: str, **fields) -> dict:
    """Manually create or update a specific field in a sender's profile."""
    profile = _load_profile(sender_email)
    for key, value in fields.items():
        if key in DEFAULT_PROFILE and key != "email":
            profile[key] = value
    profile["learned_from"] = list(fields.keys())
    _save_profile(sender_email, profile)
    return profile
