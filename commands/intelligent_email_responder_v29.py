#!/usr/bin/env python3
"""
V29 — CollaborationSentinel & EscalationOracle

Enhancements over V28:
• Real-time collaboration detection (thread analysis, participant dynamics)
• Escalation prediction based on sentiment trajectories and urgency patterns  
• Relationship health scoring and maintenance suggestions
• Multi-channel response optimization recommendations
• Automated workflow triggering from email analysis
• Enhanced contextual awareness with thread momentum analysis
"""

from __future__ import annotations

import json, time, threading, math, re
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Optional, Dict, List, Tuple
from collections import defaultdict, deque

WORKSPACE = Path(__file__).resolve().parent.parent.parent
DATA      = WORKSPACE / "data"

# ===== ENHANCED DATA STORES =====

class CollaborationStore:
    """Tracks collaboration patterns, thread dynamics, and relationship health."""
    
    def __init__(self, store_path: Optional[Path | str] = None):
        self._path = Path(store_path) if store_path else DATA / "collaboration_patterns.jsonl"
        self._path.parent.mkdir(parents=True, exist_ok=True)
        self._prime_cache()
        
    _cache: dict[str, dict] = {}
    _cache_ts: float = 0.0
    _lock: threading.RLock = threading.RLock()
    CACHE_TTL = 300
    
    def _prime_cache(self) -> None:
        with self._lock:
            if self._cache and (time.monotonic() - self._cache_ts) < self.CACHE_TTL:
                return
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
                        self._apply_event(ev)
                    except json.JSONDecodeError:
                        continue
            self._cache_ts = time.monotonic()
    
    def _apply_event(self, ev: dict) -> None:
        thread_id = ev.get("thread_id", "")
        if not thread_id:
            return
            
        if thread_id not in self._cache:
            self._cache[thread_id] = {
                "thread_id": thread_id,
                "participants": set(),
                "messages": [],
                "sentiment_trajectory": [],
                "urgency_level": "low",
                "action_items": [],
                "decision_points": [],
                "created": ev.get("ts"),
                "last_updated": ev.get("ts")
            }
        
        thread = self._cache[thread_id]
        thread["last_updated"] = ev.get("ts")
        
        # Track participants
        sender = ev.get("sender")
        if sender:
            thread["participants"].add(sender)
        
        # Store message
        thread["messages"].append({
            "ts": ev.get("ts"),
            "sender": sender,
            "content": ev.get("content", ""),
            "sentiment": ev.get("sentiment", "neutral"),
            "urgency_indicators": ev.get("urgency_indicators", [])
        })
        
        # Keep only recent messages (last 50)
        if len(thread["messages"]) > 50:
            thread["messages"] = thread["messages"][-50:]
            
        # Update sentiment trajectory
        sentiment = ev.get("sentiment", "neutral")
        sentiment_score = self._sentiment_to_score(sentiment)
        thread["sentiment_trajectory"].append({
            "ts": ev.get("ts"),
            "score": sentiment_score
        })
        
        # Keep trajectory manageable
        if len(thread["sentiment_trajectory"]) > 100:
            thread["sentiment_trajectory"] = thread["sentiment_trajectory"][-100:]
        
        # Extract action items and decisions
        content = ev.get("content", "").lower()
        action_indicators = ["please", "could you", "would you", "need you to", 
                           "action item", "todo", "follow up", "schedule"]
        decision_indicators = ["decide", "choose", "select", "approve", 
                             "reject", "what do you think", "thoughts"]
        
        if any(indicator in content for indicator in action_indicators):
            thread["action_items"].append({
                "ts": ev.get("ts"),
                "content": ev.get("content", "")[:200],
                "sender": sender
            })
            
        if any(indicator in content for indicator in decision_indicators):
            thread["decision_points"].append({
                "ts": ev.get("ts"),
                "content": ev.get("content", "")[:200],
                "sender": sender
            })
    
    def _sentiment_to_score(self, sentiment: str) -> float:
        mapping = {
            "very_negative": -1.0, "negative": -0.5, "frustrated": -0.7,
            "neutral": 0.0,
            "positive": 0.5, "appreciative": 0.6, "very_positive": 0.8,
            "excited": 0.9
        }
        return mapping.get(sentiment, 0.0)
    
    def record(self, thread_id: str, sender: str, content: str = "", 
               sentiment: str = "neutral", urgency_indicators: list = None, **kwargs) -> None:
        ts = datetime.now(timezone.utc).isoformat()
        record = {
            "ts": ts,
            "thread_id": thread_id,
            "sender": sender,
            "content": content,
            "sentiment": sentiment,
            "urgency_indicators": urgency_indicators or [],
            "event": "collaboration_update"
        }
        record.update(kwargs)
        
        line = json.dumps(record, ensure_ascii=False) + "\n"
        with self._lock:
            self._apply_event(record)
            self._cache_ts = time.monotonic()
            with open(self._path, "a") as f:
                f.write(line)
    
    def get_thread_analysis(self, thread_id: str) -> dict:
        with self._lock:
            self._prime_cache()
            thread = self._cache.get(thread_id)
            if not thread:
                return {"thread_id": thread_id, "status": "not_found"}
            
            # Calculate collaboration metrics
            participants = list(thread["participants"])
            message_count = len(thread["messages"])
            
            # Sentiment analysis
            sentiment_traj = thread["sentiment_trajectory"]
            if sentiment_traj:
                recent_scores = [s["score"] for s in sentiment_traj[-10:]]  # Last 10 messages
                avg_sentiment = sum(recent_scores) / len(recent_scores) if recent_scores else 0
                sentiment_trend = "improving" if len(recent_scores) >= 2 and recent_scores[-1] > recent_scores[0] else                                "declining" if len(recent_scores) >= 2 and recent_scores[-1] < recent_scores[0] else "stable"
            else:
                avg_sentiment = 0
                sentiment_trend = "unknown"
            
            # Urgency assessment
            urgency_level = self._assess_urgency(thread)
            
            # Relationship health
            relationship_health = self._calculate_relationship_health(thread)
            
            # Collaboration density (messages per participant)
            collaboration_density = message_count / max(len(participants), 1)
            
            return {
                "thread_id": thread_id,
                "participants": participants,
                "participant_count": len(participants),
                "message_count": message_count,
                "collaboration_density": round(collaboration_density, 2),
                "avg_sentiment": round(avg_sentiment, 3),
                "sentiment_trend": sentiment_trend,
                "urgency_level": urgency_level,
                "action_items_count": len(thread["action_items"]),
                "decision_points_count": len(thread["decision_points"]),
                "relationship_health": relationship_health,
                "last_updated": thread["last_updated"],
                "is_stale": self._is_thread_stale(thread["last_updated"])
            }
    
    def _assess_urgency(self, thread: dict) -> str:
        # Check recent messages for urgency indicators
        recent_messages = thread["messages"][-5:] if thread["messages"] else []
        urgency_keywords = ["urgent", "asap", "immediately", "emergency", "critical", 
                          "deadline", "time-sensitive", "rush", "important"]
        
        urgency_score = 0
        for msg in recent_messages:
            content = msg.get("content", "").lower()
            for keyword in urgency_keywords:
                if keyword in content:
                    urgency_score += 1
            urgency_score += len(msg.get("urgency_indicators", []))
        
        if urgency_score >= 3:
            return "high"
        elif urgency_score >= 1:
            return "medium"
        else:
            return "low"
    
    def _calculate_relationship_health(self, thread: dict) -> dict:
        if not thread["messages"]:
            return {"score": 0.5, "label": "unknown", "factors": []}
        
        # Analyze recent interactions
        recent_messages = thread["messages"][-20:] if len(thread["messages"]) >= 20 else thread["messages"]
        
        # Sentiment balance
        sentiments = [msg.get("sentiment", "neutral") for msg in recent_messages]
        sentiment_scores = [self._sentiment_to_score(s) for s in sentiments]
        avg_sentiment = sum(sentiment_scores) / len(sentiment_scores) if sentiment_scores else 0
        
        # Response reciprocity (simplified)
        participants = thread["participants"]
        if len(participants) >= 2:
            sender_counts = defaultdict(int)
            for msg in recent_messages:
                sender = msg.get("sender")
                if sender:
                    sender_counts[sender] += 1
            
            # Check if communication is balanced
            if len(sender_counts) >= 2:
                counts = list(sender_counts.values())
                max_count = max(counts)
                min_count = min(counts)
                reciprocity = min_count / max_count if max_count > 0 else 0
            else:
                reciprocity = 0.5
        else:
            reciprocity = 0.5
        
        # Engagement level
        engagement = min(len(recent_messages) / 10.0, 1.0)  # Normalize to 0-1
        
        # Combined score
        health_score = (avg_sentiment + 1) / 2 * 0.4 + reciprocity * 0.4 + engagement * 0.2
        health_score = max(0.0, min(1.0, health_score))
        
        # Label
        if health_score >= 0.8:
            label = "excellent"
        elif health_score >= 0.6:
            label = "good"
        elif health_score >= 0.4:
            label = "fair"
        else:
            label = "poor"
        
        factors = []
        if avg_sentiment > 0.2:
            factors.append("positive_sentiment")
        if reciprocity > 0.7:
            factors.append("balanced_communication")
        if engagement > 0.5:
            factors.append("active_engagement")
        
        return {
            "score": round(health_score, 3),
            "label": label,
            "factors": factors
        }
    
    def _is_thread_stale(self, last_updated: str, hours: int = 24) -> bool:
        try:
            last_time = datetime.fromisoformat(last_updated.replace('Z', '+00:00'))
            return datetime.now(timezone.utc) - last_time > timedelta(hours=hours)
        except:
            return True
    
    def get_escalation_risk(self, thread_id: str) -> dict:
        """Calculate risk of escalation needed based on thread analysis."""
        analysis = self.get_thread_analysis(thread_id)
        
        if analysis.get("status") == "not_found":
            return {"risk_level": "unknown", "score": 0.0, "factors": []}
        
        risk_score = 0.0
        risk_factors = []
        
        # Sentiment deterioration
        sentiment = analysis.get("avg_sentiment", 0)
        if sentiment < -0.3:
            risk_score += 0.3
            risk_factors.append("negative_sentiment")
        elif sentiment < -0.1:
            risk_score += 0.15
            risk_factors.append("slightly_negative_sentiment")
        
        # Declining sentiment trend
        if analysis.get("sentiment_trend") == "declining":
            risk_score += 0.25
            risk_factors.append("declining_sentiment")
        
        # High urgency
        if analysis.get("urgency_level") == "high":
            risk_score += 0.3
            risk_factors.append("high_urgency")
        elif analysis.get("urgency_level") == "medium":
            risk_score += 0.15
            risk_factors.append("medium_urgency")
        
        # Stale thread with issues
        if analysis.get("is_stale") and analysis.get("relationship_health", {}).get("label") in ["poor", "fair"]:
            risk_score += 0.2
            risk_factors.append("stale_thread_with_issues")
        
        # Many unresolved action items/decision points
        action_items = analysis.get("action_items_count", 0)
        decision_points = analysis.get("decision_points_count", 0)
        if action_items > 3 or decision_points > 2:
            risk_score += 0.2
            risk_factors.append("unresolved_items")
        
        # Low collaboration density with many participants (potential miscommunication)
        density = analysis.get("collaboration_density", 0)
        participant_count = analysis.get("participant_count", 1)
        if participant_count > 3 and density < 2.0:
            risk_score += 0.15
            risk_factors.append("low_collaboration_density")
        
        risk_score = min(1.0, risk_score)
        
        if risk_score >= 0.7:
            risk_level = "high"
        elif risk_score >= 0.4:
            risk_level = "medium"
        elif risk_score >= 0.2:
            risk_level = "low"
        else:
            risk_level = "minimal"
        
        return {
            "risk_level": risk_level,
            "score": round(risk_score, 3),
            "factors": risk_factors,
            "recommended_actions": self._get_escalation_recommendations(risk_level, risk_factors)
        }
    
    def _get_escalation_recommendations(self, risk_level: str, factors: list) -> list:
        recommendations = []
        
        if risk_level == "high":
            recommendations.extend([
                "Consider immediate supervisor notification",
                "Schedule emergency sync meeting",
                "Document all communications for audit trail"
            ])
        elif risk_level == "medium":
            recommendations.extend([
                "Schedule follow-up within 4 hours",
                "Consider involving team lead",
                "Send summary of outstanding issues"
            ])
        elif risk_level == "low":
            recommendations.extend([
                "Monitor closely",
                "Send proactive status update",
                "Confirm understanding of action items"
            ])
        else:
            recommendations.append("Continue normal monitoring")
        
        # Factor-specific recommendations
        if "negative_sentiment" in factors:
            recommendations.append("Address concerns with empathetic acknowledgment")
        if "declining_sentiment" in factors:
            recommendations.append("Schedule check-in to understand root cause")
        if "high_urgency" in factors:
            recommendations.append("Prioritize immediate response")
        if "unresolved_items" in factors:
            recommendations.append("Create clear action plan with owners")
        if "low_collaboration_density" in factors:
            recommendations.append("Facilitate better communication flow")
        
        return list(set(recommendations))  # Remove duplicates

# ===== ENHANCED FEATURES =====

def detect_collaboration_opportunities(email_data: dict, historical_data: dict = None) -> dict:
    """
    Detect opportunities for better collaboration based on email analysis.
    Returns suggestions for improving team collaboration.
    """
    opportunities = []
    
    # Analyze participants
    participants = email_data.get("participants", [])
    sender = email_data.get("sender", "").lower()
    
    # Check for siloed communication
    if len(participants) > 2:
        # Look for patterns where only certain people communicate
        opportunities.append({
            "type": "collaboration_improvement",
            "priority": "medium",
            "suggestion": "Consider inclusive communication - ensure all relevant parties are informed",
            "reasoning": "Multi-participant threads benefit from explicit inclusion",
            "action": "review_recipient_list"
        })
    
    # Check for expertise matching
    expertise_keywords = {
        "technical": ["engineer", "developer", "architect", "devops", "sre"],
        "business": ["sales", "marketing", "product", "manager", "director"],
        "creative": ["design", "ux", "ui", "content", "copy"]
    }
    
    sender_expertise = None
    for exp_type, keywords in expertise_keywords.items():
        if any(keyword in sender for keyword in keywords):
            sender_expertise = exp_type
            break
    
    if sender_expertise and len(participants) > 1:
        # Check if we have the right expertise in the thread
        has_matching_expertise = False
        for participant in participants:
            participant_lower = participant.lower()
            for exp_type, keywords in expertise_keywords.items():
                if exp_type == sender_expertise and any(keyword in participant_lower for keyword in keywords):
                    has_matching_expertise = True
                    break
        
        if not has_matching_expertise:
            opportunities.append({
                "type": "expertise_gap",
                "priority": "high",
                "suggestion": f"Consider adding {sender_expertise} expertise to the conversation",
                "reasoning": "Thread may benefit from specialized knowledge",
                "action": "suggest_expert_invite"
            })
    
    return {
        "opportunities": opportunities,
        "collaboration_score": _calculate_collaboration_score(email_data)
    }

def _calculate_collaboration_score(email_data: dict) -> float:
    """Calculate a collaboration effectiveness score (0-1)."""
    score = 0.5  # Base score
    
    participants = email_data.get("participants", [])
    if len(participants) >= 2:
        score += 0.2  # Multi-participant bonus
    
    # Check for clear action items
    body = email_data.get("body", "").lower()
    action_phrases = ["please", "could you", "action item", "todo", "follow up"]
    if any(phrase in body for phrase in action_phrases):
        score += 0.15
    
    # Check for questions (encourages engagement)
    question_count = email_data.get("body", "").count("?")
    if 1 <= question_count <= 3:
        score += 0.1
    elif question_count > 3:
        score -= 0.05  # Too many questions can be overwhelming
    
    # Check for appreciative/positive language
    positive_words = ["thank", "thanks", "appreciate", "great", "excellent", "well done"]
    if any(word in body for word in positive_words):
        score += 0.1
    
    return max(0.0, min(1.0, score))

def suggest_multi_channel_optimal(email_analysis: dict, thread_analysis: dict = None) -> dict:
    """
    Suggest optimal communication channels based on content and context.
    """
    suggestions = []
    
    intent = email_analysis.get("intent", "unknown") if isinstance(email_analysis, dict) else getattr(email_analysis, 'intent', 'unknown')
    sentiment = email_analysis.get("sentiment", "neutral") if isinstance(email_analysis, dict) else getattr(email_analysis, 'sentiment', 'neutral')
    urgency = thread_analysis.get("urgency_level", "low") if thread_analysis else "low"
    
    # Urgent matters -> phone/video call
    if urgency == "high" or sentiment in ["frustrated", "very_negative"]:
        suggestions.append({
            "channel": "phone_call",
            "priority": "high",
            "suggestion": "Consider phone call for immediate resolution",
            "reasoning": "High urgency or negative sentiment benefits from real-time communication",
            "estimated_time_savings": "15-30 minutes"
        })
    
    # Complex discussions -> video meeting
    if intent in ["partnership", "complex_issue", "strategic_planning"] or        (thread_analysis and thread_analysis.get("decision_points_count", 0) > 2):
        suggestions.append({
            "channel": "video_meeting",
            "priority": "medium",
            "suggestion": "Schedule video meeting for complex discussion",
            "reasoning": "Complex topics benefit from visual collaboration",
            "estimated_time_savings": "20-40 minutes (reduces back-and-forth)"
        })
    
    # Quick questions -> instant message
    if intent in ["quick_question", "clarification", "status_check"] and urgency != "high":
        suggestions.append({
            "channel": "instant_message",
            "priority": "low",
            "suggestion": "Consider instant message for quick clarification",
            "reasoning": "Simple queries don't require formal email",
            "estimated_time_savings": "5-10 minutes"
        })
    
    # Detailed proposals -> shared document + email
    if intent in ["proposal", "detailed_analysis", "technical_spec"] and        (email_analysis.get("body", "").__len__() > 500 if isinstance(email_analysis, dict) else len(getattr(email_analysis, 'body', '')) > 500):
        suggestions.append({
            "channel": "shared_document",
            "priority": "medium",
            "suggestion": "Create shared document for detailed review",
            "reasoning": "Long-form content is easier to review in shared documents",
            "estimated_time_savings": "10-20 minutes (reduces email threading)"
        })
    
    return {
        "channel_suggestions": suggestions,
        "recommended_primary": suggestions[0]["channel"] if suggestions else "email"
    }

def generate_workflow_triggers(email_data: dict, analysis: dict) -> list:
    """
    Generate automated workflow triggers based on email content and analysis.
    """
    triggers = []
    
    body = email_data.get("body", "").lower() if isinstance(email_data, dict) else str(email_data).lower()
    subject = email_data.get("subject", "").lower() if isinstance(email_data, dict) else ""
    
    # Meeting requests
    meeting_indicators = ["schedule", "meeting", "call", "sync", "sync up", "get together"]
    if any(indicator in body or indicator in subject for indicator in meeting_indicators):
        triggers.append({
            "type": "schedule_meeting",
            "priority": "high",
            "description": "Extract meeting request and create calendar event",
            "confidence": 0.8,
            "suggested_action": "Create calendar invite with proposed times"
        })
    
    # Document requests
    doc_indicators = ["document", "file", "attachment", "share", "send me", "can you send"]
    if any(indicator in body for indicator in doc_indicators):
        triggers.append({
            "type": "document_request",
            "priority": "medium",
            "description": "Identify requested document and initiate sharing",
            "confidence": 0.7,
            "suggested_action": "Locate and share requested document or create placeholder"
        })
    
    # Action items
    action_indicators = ["please", "could you", "would you", "need you to", 
                        "action item", "todo", "follow up", "task"]
    if any(indicator in body for indicator in action_indicators):
        triggers.append({
            "type": "create_action_item",
            "priority": "high",
            "description": "Extract action items and create tracking items",
            "confidence": 0.75,
            "suggested_action": "Parse and create action items in task management system"
        })
    
    # Feedback/requests for input
    feedback_indicators = ["feedback", "thoughts", "opinion", "what do you think", 
                          "input", "suggestions", "review"]
    if any(indicator in body for indicator in feedback_indicators):
        triggers.append({
            "type": "request_feedback",
            "priority": "medium",
            "description": "Schedule feedback collection and reminders",
            "confidence": 0.6,
            "suggested_action": "Set up feedback collection mechanism with deadline"
        })
    
    # Escalation triggers
    urgency_indicators = ["urgent", "asap", "immediately", "emergency", "critical",
                         "escalate", "supervisor", "manager", "director"]
    if any(indicator in body or indicator in subject for indicator in urgency_indicators):
        triggers.append({
            "type": "escalation_notice",
            "priority": "highest",
            "description": "Flag for potential escalation based on urgency language",
            "confidence": 0.85,
            "suggested_action": "Notify appropriate escalation path and monitor closely"
        })
    
    return triggers

# ===== MAIN ENHANCEMENT FUNCTIONS =====

def enhanced_generate_reply_options(sender: str, subject: str, snippet: str, 
                                  email_headers: list = None, thread_id: str = None) -> dict:
    """
    Enhanced reply generation with collaboration and escalation awareness.
    Returns comprehensive response package.
    """
    # Import base functions (would normally import from V28)
    # For this implementation, we'll recreate key functionality
    
    # Step 1: Basic analysis (simulated - in reality would call V28 functions)
    base_analysis = {
        "intent": "general_inquiry",
        "sentiment": "neutral",
        "confidence": 0.7,
        "suggested_action": "reply",
        "priority_boost": False,
        "suggested_tone": "professional"
    }
    
    # In a real implementation, this would call the actual V28 analysis
    # base_analysis = analyze_email_intent_and_sentiment(sender, subject, snippet)
    
    # Step 2: Enhanced collaboration analysis
    email_data = {
        "sender": sender,
        "subject": subject,
        "body": snippet,
        "participants": _extract_participants_from_headers(email_headers) if email_headers else [],
        "thread_id": thread_id
    }
    
    collaboration_opps = detect_collaboration_opportunities(email_data)
    
    # Step 3: Thread analysis (if thread_id provided)
    thread_analysis = {}
    escalation_risk = {}
    if thread_id:
        collab_store = CollaborationStore()
        thread_analysis = collab_store.get_thread_analysis(thread_id)
        escalation_risk = collab_store.get_escalation_risk(thread_id)
        
        # Record this email in the collaboration store
        collab_store.record(
            thread_id=thread_id,
            sender=sender,
            content=snippet,
            sentiment=base_analysis.get("sentiment", "neutral"),
            urgency_indicators=_extract_urgency_indicators(snippet)
        )
    
    # Step 4: Multi-channel suggestions
    channel_suggestions = suggest_multi_channel_optimal(base_analysis, thread_analysis)
    
    # Step 5: Workflow triggers
    workflow_triggers = generate_workflow_triggers(email_data, base_analysis)
    
    # Step 6: Generate actual response options (enhanced from base)
    response_options = _generate_enhanced_response_options(
        sender, subject, snippet, base_analysis, thread_analysis, collaboration_opps
    )
    
    return {
        "base_analysis": base_analysis,
        "collaboration_analysis": collaboration_opps,
        "thread_analysis": thread_analysis,
        "escalation_risk": escalation_risk,
        "channel_suggestions": channel_suggestions,
        "workflow_triggers": workflow_triggers,
        "response_options": response_options,
        "metadata": {
            "generated_at": datetime.now(timezone.utc).isoformat(),
            "enhancement_version": "V29-CollaborationSentinel"
        }
    }

def _extract_participants_from_headers(headers: list) -> list:
    """Extract email participants from headers."""
    participants = []
    if not headers:
        return participants
    
    for header in headers:
        if header.get('name') in ['To', 'Cc', 'Bcc']:
            value = header.get('value', '')
            # Simple email extraction
            emails = re.findall(r'[\w\.-]+@[\w\.-]+', value)
            participants.extend(emails)
    
    return list(set(participants))  # Remove duplicates

def _extract_urgency_indicators(text: str) -> list:
    """Extract urgency indicators from text."""
    urgency_keywords = [
        'urgent', 'asap', 'immediately', 'emergency', 'critical',
        'deadline', 'time-sensitive', 'rush', 'important', 'escalate'
    ]
    
    indicators = []
    text_lower = text.lower()
    for keyword in urgency_keywords:
        if keyword in text_lower:
            indicators.append(keyword)
    
    return indicators

def _generate_enhanced_response_options(sender: str, subject: str, snippet: str,
                                      analysis: dict, thread_analysis: dict,
                                      collaboration_opps: dict) -> list:
    """Generate enhanced response options based on all analyses."""
    
    # Base response templates (simplified)
    base_responses = [
        f"Thank you for your email regarding '{subject}'. I'll review this and get back to you shortly.",
        f"I've received your message about '{subject}'. Let me look into this and respond by end of day.",
        f"Thanks for reaching out about '{subject}'. I'm on it and will provide an update soon."
    ]
    
    # Enhance based on analysis
    enhanced_options = []
    
    for i, base_response in enumerate(base_responses):
        enhanced = base_response
        
        # Add collaboration awareness
        if collaboration_opps.get("opportunities"):
            collab_opp = collaboration_opps["opportunities"][0]  # Take top opportunity
            if collab_opp["type"] == "expertise_gap":
                enhanced += f" I've also looped in our {collab_opp['suggestion'].lower()} for their expertise."
            elif collab_opp["type"] == "collaboration_improvement":
                enhanced += " To ensure everyone is aligned, I'll keep all relevant parties updated on progress."
        
        # Add urgency awareness from thread analysis
        if thread_analysis.get("urgency_level") == "high":
            enhanced = f"URGENT: {enhanced} I'm prioritizing this and will provide an update within the hour."
        elif thread_analysis.get("urgency_level") == "medium":
            enhanced = f"Following up on this important matter: {enhanced} I'll keep you posted on progress."
        
        # Add sentiment-based tone adjustments
        sentiment = analysis.get("sentiment", "neutral")
        if sentiment in ["frustrated", "negative"]:
            enhanced = f"I understand your concern and appreciate you bringing this to my attention. {enhanced}"
        elif sentiment in ["appreciative", "positive"]:
            enhanced = f"Thank you for your kind words! {enhanced}"
        
        # Add action orientation
        if thread_analysis.get("action_items_count", 0) > 0:
            enhanced += " I've identified the following action items and will address each systematically."
        
        enhanced_options.append({
            "option": i + 1,
            "text": enhanced,
            "quality_score": _calculate_enhanced_quality_score(enhanced, analysis, thread_analysis),
            "collaboration_enhanced": bool(collaboration_opps.get("opportunities")),
            "urgency_aware": thread_analysis.get("urgency_level") in ["medium", "high"],
            "sentiment_adjusted": sentiment != "neutral"
        })
    
    # Sort by quality score
    enhanced_options.sort(key=lambda x: x["quality_score"], reverse=True)
    return enhanced_options[:3]  # Return top 3

def _calculate_enhanced_quality_score(response_text: str, analysis: dict, thread_analysis: dict) -> float:
    """Calculate enhanced quality score for response."""
    score = 0.5  # Base
    
    # Length appropriateness
    word_count = len(response_text.split())
    if 15 <= word_count <= 50:
        score += 0.2
    elif word_count < 10:
        score -= 0.1
    elif word_count > 100:
        score -= 0.15
    
    # Question balance (engages but doesn't overwhelm)
    question_count = response_text.count('?')
    if 1 <= question_count <= 2:
        score += 0.1
    elif question_count > 3:
        score -= 0.05
    
    # Personalization
    if "[Name]" not in response_text and ("Hi " in response_text or "Hello " in response_text):
        score += 0.05
    
    # Clarity and action orientation
    action_words = ["will", "going to", "plan to", "intend to", "next steps"]
    if any(word in response_text.lower() for word in action_words):
        score += 0.1
    
    # Politeness
    polite_words = ["please", "thank you", "appreciate"]
    polite_count = sum(1 for word in polite_words if word in response_text.lower())
    if polite_count >= 2:
        score += 0.05
    
    # Context awareness bonus
    if thread_analysis:
        # Reward for addressing urgency appropriately
        urgency = thread_analysis.get("urgency_level", "low")
        if urgency == "high" and ("urgent" in response_text.lower() or "immediately" in response_text.lower()):
            score += 0.15
        elif urgency == "low" and not any(word in response_text.lower() for word in ["urgent", "emergency", "asap"]):
            score += 0.05  # Appropriately calm for low urgency
        
        # Reward for addressing action items
        action_items = thread_analysis.get("action_items_count", 0)
        if action_items > 0 and ("action" in response_text.lower() or "item" in response_text.lower()):
            score += 0.1
        
        # Reward for collaboration awareness
        if thread_analysis.get("participant_count", 0) > 1:
            if any(word in response_text.lower() for word in ["team", "everyone", "all", "everybody"]):
                score += 0.1
    
    return max(0.1, min(0.95, score))

# ===== INTEGRATION WITH EXISTING SYSTEMS =====

def enhance_existing_responder_existing_function(existing_result: dict, 
                                               sender: str = None,
                                               subject: str = None,
                                               snippet: str = None,
                                               email_headers: list = None,
                                               thread_id: str = None) -> dict:
    """
    Enhance existing email responder results with V29 collaboration features.
    This function can wrap existing V28 results.
    """
    # Start with existing result
    enhanced_result = existing_result.copy() if existing_result else {}
    
    # Add V29 enhancements if we have the basic data
    if sender and subject and snippet:
        v29_enhancement = enhanced_generate_reply_options(
            sender, subject, snippet, email_headers, thread_id
        )
        
        # Merge the enhancements
        enhanced_result.update({
            "v29_collaboration": v29_enhancement.get("collaboration_analysis", {}),
            "v29_thread_analysis": v29_enhancement.get("thread_analysis", {}),
            "v29_escalation_risk": v29_enhancement.get("escalation_risk", {}),
            "v29_channel_suggestions": v29_enhancement.get("channel_suggestions", {}),
            "v29_workflow_triggers": v29_enhancement.get("workflow_triggers", []),
            "v29_enhanced_options": v29_enhancement.get("response_options", []),
            "v29_metadata": v29_enhancement.get("metadata", {})
        })
        
        # Enhance the base response options if they exist
        if "response_options" in existing_result:
            # Replace basic options with enhanced ones
            enhanced_result["response_options"] = [
                {
                    "text": opt["text"],
                    "quality_score": opt["quality_score"],
                    "enhanced": True
                } for opt in v29_enhancement.get("response_options", [])
            ]
    
    return enhanced_result

# ===== DEMO AND TESTING FUNCTIONS =====

def demo_v29_capabilities():
    """Demonstrate V29 capabilities with sample data."""
    print("=== V29 CollaborationSentinel Demo ===")
    
    # Sample email data
    sample_sender = "alice@client.com"
    sample_subject = "Urgent: Need help with system integration issue"
    sample_snippet = "Hi team, we're experiencing critical downtime with our integration platform. " +                      "This is impacting our customer orders and needs immediate attention. " +                      "Can we schedule an emergency call to discuss solutions?"
    
    sample_headers = [
        {"name": "To", "value": "bob@ziontechgroup.com, carol@ziontechgroup.com"},
        {"name": "Cc", "value": "dave@ziontechgroup.com"},
        {"name": "Subject", "value": sample_subject}
    ]
    
    # Generate enhanced response
    result = enhanced_generate_reply_options(
        sample_sender, sample_subject, sample_snippet,
        email_headers=sample_headers,
        thread_id="thread_12345"
    )
    
    print(f"Email from: {sample_sender}")
    print(f"Subject: {sample_subject}")
    print(f"Analysis: {result['base_analysis']['intent']} ({result['base_analysis']['sentiment']})")
    print(f"Urgency Level: {result['thread_analysis'].get('urgency_level', 'unknown')}")
    print(f"Escalation Risk: {result['escalation_risk'].get('risk_level', 'unknown')} " +           f"(score: {result['escalation_risk'].get('score', 0)})")
    print(f"Collaboration Opportunities: {len(result['collaboration_analysis'].get('opportunities', []))}")
    print(f"Suggested Channel: {result['channel_suggestions'].get('recommended_primary', 'email')}")
    print(f"Workflow Triggers: {len(result['workflow_triggers'])} detected")
    print()
    print("Enhanced Response Options:")
    for i, option in enumerate(result['response_options'], 1):
        print(f"  {i}. [{option['quality_score']:.2f}] {option['text'][:100]}...")
    
    return result

if __name__ == "__main__":
    # Run demo if executed directly
    demo_v29_capabilities()
