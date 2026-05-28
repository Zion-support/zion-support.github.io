#!/usr/bin/env python3
"""
V28 — SenderFeedbackOracle

• Persistent per-sender reply-all learning (JSONL store)
• No LLM calls — pure statistics
• Reads V26/27 sender metadata when available

Store layout (data/sender_feedback.jsonl):
  {"ts": "2026-05-20T12:00:00+00:00", "sender": "alice@example.com",
   "event": "reply_all_override", "override_to": "explicit",
   "thread_id": "..."}

Surfaced preference (in-memory cache + on-disk persistence):
  sender → {"reply_all_bias": float 0-1, "n_overrides": int, "last_seen": iso}
    reply_all_bias = fraction of overrides that were "yes" (1.0 = always reply-all, 0.0 = never)
"""
from __future__ import annotations

import json, time, threading
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Optional

WORKSPACE = Path(__file__).resolve().parent.parent.parent
DATA      = WORKSPACE / "data"
STORE     = DATA / "sender_feedback.jsonl"
CACHE_TTL = 300          # seconds before cache is considered stale

# ── Data classes ─────────────────────────────────────────────────────────────

class SenderPref:
    """Aggregated per-sender preference derived from override events."""
    __slots__ = ("sender", "yes", "no", "total", "last_seen", "first_seen")

    def __init__(self, sender: str) -> None:
        self.sender   = sender
        self.yes      = 0
        self.no       = 0
        self.total    = 0
        self.last_seen: Optional[str] = None
        self.first_seen: Optional[str] = None

    @property
    def bias(self) -> float:
        """1.0 = always chose to reply-all, 0.0 = never, 0.5 = neutral."""
        if self.total == 0:
            return 0.5
        return self.yes / self.total

    def to_dict(self) -> dict:
        return {
            "sender":      self.sender,
            "reply_all_bias": round(self.bias, 4),
            "n_yes":       self.yes,
            "n_no":        self.no,
            "n_overrides": self.total,
            "last_seen":   self.last_seen,
            "first_seen":  self.first_seen,
        }


# ── Thread-safe store ────────────────────────────────────────────────────────

class SenderFeedbackStore:
    """
    Append-only JSONL store with in-memory cache + disk persistence.

    Usage
    -----
    >>> store = SenderFeedbackStore()
    >>> store.record("alice@example.com", "reply_all_override", override_to="yes", thread_id="t1")
    >>> pref = store.get_pref("alice@example.com")
    >>> pref.bias   # 1.0
    """

    _cache:      dict[str, SenderPref] = {}
    _cache_ts:   float                 = 0.0
    _lock:       threading.RLock       = threading.RLock()

    def __init__(self, store_path: Optional[Path | str] = None) -> None:
        self._path = Path(store_path) if store_path else STORE
        self._path.parent.mkdir(parents=True, exist_ok=True)
        self._prime_cache()

    # ── cache management ─────────────────────────────────────────────────────

    def _prime_cache(self) -> None:
        """Load all events from disk into _cache on first access."""
        with self._lock:
            if self._cache and (time.monotonic() - self._cache_ts) < CACHE_TTL:
                return  # fresh cache — skip
            self._cache.clear()
            if not self._path.exists():
                self._cache_ts = time.monotonic()
                return
            with open(self._path) as f:
                for line in f:
                    line = line.strip()
                    if not line:
                        continue
                    try:
                        ev = json.loads(line)
                    except json.JSONDecodeError:
                        continue
                    self._apply_event(ev)
            self._cache_ts = time.monotonic()

    def _apply_event(self, ev: dict) -> None:
        sender = ev.get("sender", "")
        if not sender:
            return
        pref = self._cache.setdefault(sender, SenderPref(sender))
        event = ev.get("event", "")
        ts    = ev.get("ts")
        if ts:
            if pref.first_seen is None:
                pref.first_seen = ts
            pref.last_seen = ts
        if event == "reply_all_override":
            to_val = str(ev.get("override_to", "")).lower()
            if to_val in ("yes", "true", "1"):
                pref.yes += 1
                pref.total += 1
            elif to_val in ("no", "false", "0"):
                pref.no += 1
                pref.total += 1
            else:
                pref.total += 1   # count but don't bias

    # ── write ────────────────────────────────────────────────────────────────

    def record(self, sender: str, event: str, **kwargs: Any) -> None:
        """Append one event to the store and update cache."""
        ts = datetime.now(timezone.utc).isoformat()
        record: dict = {"ts": ts, "sender": sender, "event": event}
        record.update(kwargs)
        line = json.dumps(record, ensure_ascii=False) + "\n"
        with self._lock:
            self._apply_event(record)          # update in-memory
            self._cache_ts = time.monotonic()  # reset TTL
            with open(self._path, "a") as f:
                f.write(line)

    # ── read ─────────────────────────────────────────────────────────────────

    def get_pref(self, sender: str) -> SenderPref:
        """Return the SenderPref for *sender*; unknown → neutral Pref."""
        with self._lock:
            self._prime_cache()
            return self._cache.get(sender, SenderPref(sender))

    def top_senders(self, n: int = 20, min_overrides: int = 3) -> list[dict]:
        """Most active senders with their bias scores."""
        with self._lock:
            self._prime_cache()
            ranked = sorted(
                (p for p in self._cache.values() if p.total >= min_overrides),
                key=lambda p: abs(p.bias - 0.5),
                reverse=True
            )
            return [p.to_dict() for p in ranked[:n]]

    def unload(self) -> None:
        with self._lock:
            self._cache.clear()
            self._cache_ts = 0.0

    def dump_summary(self) -> dict:
        with self._lock:
            self._prime_cache()
            total_events = sum(p.total for p in self._cache.values())
            biased = sum(1 for p in self._cache.values() if abs(p.bias - 0.5) >= 0.2)
            return {
                "senders_tracked":  len(self._cache),
                "total_events":     total_events,
                "biased_senders":   biased,
                "store_path":       str(self._path),
            }


# ── Feedback learner ─────────────────────────────────────────────────────────

class FeedbackLearner:
    """
    Consumes SenderFeedbackStore and produces a routing hint dict for use
    inside the V26 pipeline (no LLM required).

    Three verdict tiers:
      "likely_yes"  — bias ≥ 0.7, ≥3 overrides
      "likely_no"   — bias ≤ 0.3, ≥3 overrides
      "neutral"     — else
    """

    def __init__(self, store: Optional[SenderFeedbackStore] = None) -> None:
        self.store = store or SenderFeedbackStore()

    def route(self, sender: str) -> dict:
        """Return routing hint for *sender* in V26 pipeline."""
        pref     = self.store.get_pref(sender)
        bias     = pref.bias
        n        = pref.total
        tier     = "neutral"
        enforce  = "default"

        if n >= 3:
            if bias >= 0.7:
                tier = "likely_yes"
                enforce = "always_cc"     # safe default: include in CC
            elif bias <= 0.3:
                tier = "likely_no"
                enforce = "confirm"       # surface for human before CC

        return {
            "sender":          sender,
            "feedback_tier":   tier,
            "reply_all_bias":  bias,
            "n_overrides":     n,
            "enforce":         enforce,       # "always_cc" | "confirm" | "default"
            "last_seen":       pref.last_seen,
        }


# ===== PREDICTIVE RESPONSE TIMING =====
# Analyzes historical patterns to suggest optimal response timing
def get_optimal_response_time(sender_email, email_timestamp):
    """
    Analyzes historical response patterns to suggest optimal timing for responses.
    Returns a dict with optimal score and suggested delay.
    """
    # In a full implementation, this would:
    # 1. Analyze historical response patterns for this sender
    # 2. Consider timezone differences  
    # 3. Factor in sender's typical response times
    # 4. Suggest best time to send for maximum engagement
    
    # For now, return a basic heuristic based on time of day and day of week
    try:
        from datetime import datetime
        if isinstance(email_timestamp, str):
            # Try to parse ISO format
            email_time = datetime.fromisoformat(email_timestamp.replace('Z', '+00:00'))
        else:
            email_time = email_timestamp
    except:
        # Fallback to current time if parsing fails
        from datetime import datetime
        email_time = datetime.now()
    
    hour = email_time.hour
    day_of_week = email_time.weekday()  # Monday=0, Sunday=6
    
    # Business hours scoring (9 AM - 5 PM weekdays)
    base_score = 0.5
    
    if day_of_week < 5:  # Monday-Friday
        if 9 <= hour <= 11:  # Morning peak
            score = 0.9
        elif 14 <= hour <= 16:  # Afternoon peak
            score = 0.8
        elif 12 <= hour <= 13:  # Lunch (lower)
            score = 0.3
        elif 17 <= hour <= 19:  # Early evening
            score = 0.6
        else:  # Outside business hours
            score = 0.2
    else:  # Weekend
        score = 0.4
    
    # Calculate suggested delay (0-120 minutes based on score)
    suggested_delay = 0 if score > 0.7 else int((1 - score) * 120)
    
    reasoning = (
        "Optimal time for engagement" if score > 0.7 else
        "Reasonable time for response" if score > 0.4 else
        "Consider delaying for better engagement"
    )
    
    return {
        "optimal_score": round(score, 2),
        "suggested_delay_minutes": suggested_delay,
        "reasoning": reasoning,
        "optimal_hour": f"{hour:02d}:00",
        "day_of_week": email_time.strftime("%A")
    }


# ===== SMART FOLLOW-UP SUGGESTIONS =====
# Recommends follow-up actions based on email analysis and history
def generate_follow_up_suggestions(email_analysis, sender_history=None):
    """
    Generates intelligent follow-up suggestions based on email analysis.
    Returns list of suggestion dicts.
    """
    suggestions = []
    
    # Extract key info from analysis (adjust based on actual analysis structure)
    intent = getattr(email_analysis, 'primary_intent', None) or              getattr(email_analysis, 'intent', None) or              (email_analysis.get('primary_intent') if isinstance(email_analysis, dict) else None) or              "unknown"
    
    sentiment = getattr(email_analysis, 'sentiment', None) or                 (email_analysis.get('sentiment') if isinstance(email_analysis, dict) else None) or                 "neutral"
    
    # Normalize intent and sentiment to lowercase strings
    intent_str = str(intent).lower() if intent else "unknown"
    sentiment_str = str(sentiment).lower() if sentiment else "neutral"
    
    # Based on intent
    if intent_str == "sales_lead":
        suggestions.append({
            "type": "follow_up_meeting",
            "priority": "high",
            "suggestion": "Schedule a discovery call within 48 hours",
            "reasoning": "Sales leads show highest conversion with quick follow-up",
            "action": "schedule_meeting"
        })
        suggestions.append({
            "type": "send_case_study",
            "priority": "medium", 
            "suggestion": "Share relevant case study or ROI calculator",
            "reasoning": "Helps build credibility and quantify value",
            "action": "share_resource"
        })
    elif intent_str == "support_issue":
        suggestions.append({
            "type": "check_resolution",
            "priority": "high",
            "suggestion": "Follow up to confirm issue resolution in 24 hours",
            "reasoning": "Support issues require confirmation of resolution",
            "action": "follow_up_check"
        })
        suggestions.append({
            "type": "satisfaction_survey",
            "priority": "medium",
            "suggestion": "Send CSAT survey after resolution confirmation",
            "reasoning": "Measures support effectiveness and identifies improvement areas",
            "action": "send_survey"
        })
    elif intent_str == "partnership":
        suggestions.append({
            "type": "proposal_preview",
            "priority": "medium",
            "suggestion": "Prepare preliminary partnership proposal outline",
            "reasoning": "Partnership discussions benefit from prepared materials",
            "action": "prepare_proposal"
        })
    elif intent_str == "urgent":
        suggestions.append({
            "type": "immediate_action",
            "priority": "highest",
            "suggestion": "Address within 1 business hour",
            "reasoning": "Urgent emails require immediate attention to prevent escalation",
            "action": "urgent_response"
        })
    
    # Based on sentiment
    if sentiment_str in ["frustrated", "negative"]:
        suggestions.append({
            "type": "empathy_check",
            "priority": "high",
            "suggestion": "Acknowledge frustration and offer direct phone support",
            "reasoning": "Negative sentiment requires empathetic, personal touch",
            "action": "empathetic_response"
        })
    elif sentiment_str in ["appreciative", "positive"]:
        suggestions.append({
            "type": "referral_request",
            "priority": "low",
            "suggestion": "Ask for referral or testimonial after positive interaction",
            "reasoning": "Positive experiences are ideal for referral requests",
            "action": "request_referral"
        })
    
    # Based on sender history (if available)
    if sender_history:
        avg_response_time = getattr(sender_history, 'avg_response_time', None) or                            (sender_history.get('avg_response_time') if isinstance(sender_history, dict) else None)
        if avg_response_time and float(avg_response_time) > 24:  # >24 hours
            suggestions.append({
                "type": "response_time_improvement",
                "priority": "medium",
                "suggestion": "Set expectation for faster response in future communications",
                "reasoning": "Sender historically experiences slow responses",
                "action": "set_expectations"
            })
    
    # Remove duplicates based on type
    seen_types = set()
    unique_suggestions = []
    for sugg in suggestions:
        if sugg["type"] not in seen_types:
            seen_types.add(sugg["type"])
            unique_suggestions.append(sugg)
    
    return unique_suggestions


# ===== RESPONSE EFFECTIVENESS PREDICTOR =====
# Predicts likely effectiveness of a response before sending
def predict_response_effectiveness(response_text, email_analysis=None, sender_history=None):
    """
    Predicts likely effectiveness of a response before sending.
    Returns effectiveness score (0-1) and contributing factors.
    """
    effectiveness_score = 0.5  # base score
    factors = []
    
    # Length appropriateness
    word_count = len(response_text.split())
    if 20 <= word_count <= 200:
        effectiveness_score += 0.15
        factors.append("Appropriate length for engagement (+0.15)")
    elif word_count < 10:
        effectiveness_score -= 0.2
        factors.append("Too short - may seem dismissive (-0.20)")
    elif word_count > 300:
        effectiveness_score -= 0.1
        factors.append("Very long - may reduce readability (-0.10)")
    
    # Question engagement (encourages response)
    question_count = response_text.count('?')
    if 1 <= question_count <= 3:
        effectiveness_score += 0.1
        factors.append("Questions encourage engagement (+0.10)")
    elif question_count > 3:
        effectiveness_score -= 0.05
        factors.append("Too many questions may overwhelm (-0.05)")
    
    # Action clarity
    action_words = ["schedule", "meeting", "call", "review", "provide", "send", "share", "let me know", "please"]
    action_count = sum(1 for word in action_words if word in response_text.lower())
    if action_count >= 1:
        effectiveness_score += 0.1
        factors.append("Clear action items increase response likelihood (+0.10)")
    
    # Politeness indicators
    polite_words = ["please", "thank you", "appreciate", "grateful"]
    polite_count = sum(1 for word in polite_words if word in response_text.lower())
    if polite_count >= 2:
        effectiveness_score += 0.05
        factors.append("Polite language improves tone (+0.05)")
    
    # Personalization
    if "[Name]" not in response_text and ("Hi " in response_text or "Hello " in response_text):
        effectiveness_score += 0.05
        factors.append("Personalized greeting (+0.05)")
    
    # Clamp score between 0.1 and 0.95
    effectiveness_score = max(0.1, min(0.95, effectiveness_score))
    
    # Generate recommendation
    if effectiveness_score > 0.7:
        recommendation = "High likelihood of positive response"
    elif effectiveness_score > 0.4:
        recommendation = "Moderate likelihood - consider improvements"
    else:
        recommendation = "Low likelihood - revise before sending"
    
    return {
        "effectiveness_score": round(effectiveness_score, 2),
        "factors": factors,
        "recommendation": recommendation,
        "word_count": word_count,
        "question_count": question_count,
        "action_count": action_count
}

# ===== CONTEXTUAL AWARENESS ENGINE =====
# Understands email context beyond simple intent/sentiment
def analyze_email_context(email_data, historical_data=None):
    """
    Performs deep contextual analysis of an email thread.
    Returns contextual insights for better response generation.
    """
    context = {
        "thread_depth": 0,
        "participant_roles": {},
        "urgency_indicators": [],
        "topic_progression": [],
        "relationship_context": "unknown",
        "time_sensitivity": "low",
        "action_required": False,
        "decision_needed": False
    }
    
    # Analyze thread depth and participants
    if isinstance(email_data, dict):
        thread_id = email_data.get('thread_id', '')
        participants = email_data.get('participants', [])
        
        # Estimate thread depth from subject line (Re:, Fwd:, etc.)
        subject = email_data.get('subject', '').lower()
        re_count = subject.count('re:') + subject.count('fw:') + subject.count('fwd:')
        context["thread_depth"] = min(re_count + 1, 10)  # Cap at 10
        
        # Analyze participant roles (simplified)
        sender = email_data.get('sender', '').lower()
        for participant in participants:
            participant_lower = participant.lower()
            if any(title in participant_lower for title in ['ceo', 'cto', 'director', 'manager']):
                context["participant_roles"][participant] = "leadership"
            elif any(title in participant_lower for title in ['engineer', 'developer', 'analyst']):
                context["participant_roles"][participant] = "technical"
            elif any(title in participant_lower for title in ['sales', 'marketing', 'account']):
                context["participant_roles"][participant] = "business"
            else:
                context["participant_roles"][participant] = "general"
    
    # Check for urgency indicators in content
    body = email_data.get('body', '') if isinstance(email_data, dict) else str(email_data)
    urgency_keywords = [
        'urgent', 'asap', 'immediately', 'emergency', 'critical',
        'deadline', 'time-sensitive', 'rush', 'important'
    ]
    for keyword in urgency_keywords:
        if keyword in body.lower():
            context["urgency_indicators"].append(keyword)
    
    # Determine time sensitivity
    if context["urgency_indicators"] or any(word in body.lower() for word in ['today', 'tomorrow', 'this week']):
        context["time_sensitivity"] = "high"
    elif any(word in body.lower() for word in ['next week', 'soon', 'upcoming']):
        context["time_sensitivity"] = "medium"
    
    # Check if action is required
    action_phrases = [
        'please', 'could you', 'would you', 'need you to',
        'required', 'must', 'should', 'action item', 'todo'
    ]
    context["action_required"] = any(phrase in body.lower() for phrase in action_phrases)
    
    # Check if decision is needed
    decision_phrases = [
        'decide', 'choose', 'select', 'approve', 'reject',
        'what do you think', 'thoughts', 'opinion', 'feedback'
    ]
    context["decision_needed"] = any(phrase in body.lower() for phrase in decision_phrases)
    
    # Determine relationship context (simplified)
    if sender:
        if any(domain in sender for domain in ['@client', '@customer', '@partner']):
            context["relationship_context"] = "external_partner"
        elif any(domain in sender for domain in ['@vendor', '@supplier']):
            context["relationship_context"] = "vendor_supplier"
        elif any(domain in sender for domain in ['@ziontechgroup.com', '@company']):
            context["relationship_context"] = "internal_colleague"
        else:
            context["relationship_context"] = "external_unknown"
    
    return context


# ===== OUTCOME LEARNING SYSTEM =====
# Learns from sent email outcomes to improve future responses
def learn_from_email_outcome(email_id, sent_response, outcome_metrics=None):
    """
    Learns from the outcomes of sent emails to improve future response generation.
    outcome_metrics could include: response_time, sentiment_change, action_taken, etc.
    """
    # In a full implementation, this would:
    # 1. Store the email interaction in a learning database
    # 2. Analyze what worked/didn't work in the response
    # 3. Update response templates or weighting systems
    # 4. Adjust tone, length, or content preferences for similar future emails
    
    # For now, we'll implement a basic logging mechanism
    learning_entry = {
        "timestamp": __import__('datetime').datetime.now().isoformat(),
        "email_id": email_id,
        "response_length": len(sent_response.split()) if sent_response else 0,
        "has_questions": '?' in sent_response if sent_response else False,
        "has_action_items": any(word in sent_response.lower() for word in ['please', 'let me know', 'schedule']) if sent_response else False,
        "outcome_metrics": outcome_metrics or {},
        "learned_insights": []
    }
    
    # Generate basic insights
    if outcome_metrics:
        if outcome_metrics.get('response_received', False):
            response_time = outcome_metrics.get('response_time_hours', 24)
            if response_time < 2:
                learning_entry["learned_insights"].append("Quick response achieved - effective communication style")
            elif response_time > 24:
                learning_entry["learned_insights"].append("Slow response - consider more urgent tone or clearer call-to-action")
        
        if outcome_metrics.get('action_taken', False):
            learning_entry["learned_insights"].append("Response successfully prompted action - maintain current approach")
        else:
            learning_entry["learned_insights"].append("No action taken - consider strengthening call-to-action or providing more incentives")
    
    # In a real system, this would be saved to a database or file
    # For demonstration, we'll just return what would be learned
    return {
        "learning_logged": True,
        "entry": learning_entry,
        "suggestions_for_improvement": [
            "Consider A/B testing different response styles",
            "Track which subject lines get better open rates",
            "Monitor response rates by time of day sent",
            "Analyze which value propositions resonate most"
        ]
    }


# ===== ADAPTIVE RESPONSE TEMPLATES =====
# Dynamically selects and adapts response templates based on learned preferences
def get_adaptive_response_template(email_analysis, sender_profile, context_analysis):
    """
    Selects and adapts the most appropriate response template based on
    email analysis, sender profile, and contextual factors.
    """
    # Base template categories
    templates = {
        "formal_business": {
            "opening": "Dear {name},",
            "body_prefix": "Thank you for your email regarding {topic}.",
            "closing": "Please let me know if you have any further questions.",
            "signature": "Best regards,
{sender_name}
{title}",
            "tone": "professional",
            "length": "medium"
        },
        "friendly_professional": {
            "opening": "Hi {name},",
            "body_prefix": "Thanks for reaching out about {topic}.",
            "closing": "Happy to help with any additional questions you might have.",
            "signature": "Best,
{sender_name}",
            "tone": "warm",
            "length": "short_to_medium"
        },
        "concise_direct": {
            "opening": "Hello {name},",
            "body_prefix": "Regarding {topic}:",
            "closing": "Let me know how you'd like to proceed.",
            "signature": "{sender_name}",
            "tone": "direct",
            "length": "short"
        },
        "detailed_analytical": {
            "opening": "Greetings {name},",
            "body_prefix": "I've carefully reviewed your inquiry about {topic} and here's my detailed analysis:",
            "closing": "I hope this comprehensive breakdown addresses your concerns. Please review and let me know your thoughts.",
            "signature": "Sincerely,
{sender_name}
{title}",
            "tone": "thorough",
            "length": "long"
        }
    }
    
    # Select base template based on analysis
    selected_template = templates["friendly_professional"]  # default
    
    # Adjust based on sender profile
    if sender_profile:
        preferred_tone = getattr(sender_profile, 'preferred_tone', None) or                         (sender_profile.get('preferred_tone') if isinstance(sender_profile, dict) else None)
        if preferred_tone:
            preferred_tone = str(preferred_tone).lower()
            if preferred_tone in ['formal', 'professional']:
                selected_template = templates["formal_business"]
            elif preferred_tone in ['concise', 'direct', 'brief']:
                selected_template = templates["concise_direct"]
            elif preferred_tone in ['detailed', 'analytical', 'thorough']:
                selected_template = templates["detailed_analytical"]
    
    # Adjust based on context
    if context_analysis:
        # Urgent context -> more direct
        if context_analysis.get("time_sensitivity") == "high":
            selected_template = templates["concise_direct"]
            selected_template["tone"] = "urgent"
        
        # Leadership/executive -> more formal
        participant_roles = context_analysis.get("participant_roles", {})
        if any(role == "leadership" for role in participant_roles.values()):
            selected_template = templates["formal_business"]
        
        # Technical discussion -> more detailed
        if any(role == "technical" for role in participant_roles.values()):
            if context_analysis.get("decision_needed"):
                selected_template = templates["detailed_analytical"]
            else:
                # Blend technical with appropriate tone
                selected_template = templates["detailed_analytical"]
    
    # Adjust based on email intent
    intent = getattr(email_analysis, 'primary_intent', None) or              getattr(email_analysis, 'intent', None) or              (email_analysis.get('primary_intent') if isinstance(email_analysis, dict) else None) or              "unknown"
    
    intent_str = str(intent).lower() if intent else "unknown"
    
    if intent_str == "support_issue":
        selected_template = templates["friendly_professional"]
        selected_template["closing"] = "I've resolved this issue for you. Please let me know if you encounter any further problems."
    elif intent_str == "sales_lead":
        selected_template = templates["detailed_analytical"]
        selected_template["body_prefix"] = "Thank you for your interest in our solutions. Here's how we can help address your needs:"
    elif intent_str == "partnership":
        selected_template = templates["formal_business"]
        selected_template["opening"] = "Dear {name},"
        selected_template["body_prefix"] = "Thank you for reaching out to discuss a potential partnership."
    
    # Return a copy of the selected template for customization
    import copy
    final_template = copy.deepcopy(selected_template)
    
    # Add metadata about why this template was chosen
    final_template["_selection_metadata"] = {
        "base_template": list(templates.keys())[list(templates.values()).index(selected_template)],
        "sender_influence": bool(sender_profile),
        "context_influence": bool(context_analysis),
        "intent_influence": intent_str != "unknown"
    }
    
    return final_template
