#!/usr/bin/env python3
"""V1039 - Predictive Email Response Engine
Analyzes historical patterns to auto-draft optimal responses.
Learns from past successful replies to predict best response for each case.
MANDATORY: Reply-all enforcement for all multi-recipient emails.
"""
import json, re
from datetime import datetime
from collections import Counter

class PredictiveResponseEngine:
    def __init__(self):
        self.patterns = {}
        self.history = []
        self.reply_all_enforcement = True
    
    def learn_from_reply(self, original_email, reply, outcome="positive"):
        """Learn from successful email-reply pairs."""
        pattern_key = self._classify_email_type(original_email)
        
        if pattern_key not in self.patterns:
            self.patterns[pattern_key] = {"count": 0, "templates": [], "avg_response_time": 0, "success_rate": 0}
        
        p = self.patterns[pattern_key]
        p["count"] += 1
        p["templates"].append({
            "tone": self._detect_tone(reply.get("body", "")),
            "length": len(reply.get("body", "")),
            "has_cta": self._has_cta(reply.get("body", "")),
            "personalization": self._has_personalization(reply.get("body", "")),
            "outcome": outcome
        })
        
        # Keep only last 100 templates per pattern
        if len(p["templates"]) > 100:
            p["templates"] = p["templates"][-100:]
        
        success = sum(1 for t in p["templates"] if t["outcome"] == "positive")
        p["success_rate"] = round(success / len(p["templates"]) * 100, 1)
        
        self.history.append({
            "original_id": original_email.get("id"),
            "reply_id": reply.get("id"),
            "pattern": pattern_key,
            "outcome": outcome,
            "timestamp": datetime.now().isoformat()
        })
    
    def predict_response(self, email_data):
        """Generate predicted optimal response based on learned patterns."""
        email_type = self._classify_email_type(email_data)
        recipients = email_data.get("recipients", [])
        cc = email_data.get("cc", [])
        sender = email_data.get("sender", "")
        body = email_data.get("body", "")
        subject = email_data.get("subject", "")
        
        pattern = self.patterns.get(email_type, {})
        templates = pattern.get("templates", [])
        
        # Find best template based on success rate
        successful = [t for t in templates if t["outcome"] == "positive"]
        best_tone = "professional"
        best_length = 200
        has_cta = True
        
        if successful:
            tones = Counter(t["tone"] for t in successful)
            best_tone = tones.most_common(1)[0][0] if tones else "professional"
            best_length = int(sum(t["length"] for t in successful) / len(successful))
            has_cta = any(t["has_cta"] for t in successful)
        
        # Generate response draft
        sender_name = sender.split("@")[0].replace(".", " ").title()
        
        predicted = {
            "email_id": email_data.get("id"),
            "email_type": email_type,
            "pattern_match": email_type in self.patterns,
            "confidence": min(95, pattern.get("success_rate", 50)),
            "predicted_tone": best_tone,
            "predicted_length": best_length,
            "reply_all_needed": len(recipients) + len(cc) > 1,
            "reply_all_enforcement": "MANDATORY" if len(recipients) + len(cc) > 1 else "N/A",
            "draft_response": self._generate_draft(sender_name, subject, body, best_tone, has_cta),
            "suggested_subject": f"RE: {subject}" if not subject.startswith("RE:") else subject,
            "suggested_send_time": self._predict_best_send_time(),
            "follow_up_recommended": self._should_follow_up(email_type, body),
            "learned_from": len(templates),
            "generated_at": datetime.now().isoformat()
        }
        return predicted
    
    def _classify_email_type(self, email):
        text = (email.get("body", "") + " " + email.get("subject", "")).lower()
        if any(w in text for w in ["help", "support", "issue", "bug", "error"]): return "support_request"
        if any(w in text for w in ["pricing", "quote", "cost", "how much"]): return "pricing_inquiry"
        if any(w in text for w in ["meeting", "schedule", "calendar", "available"]): return "meeting_request"
        if any(w in text for w in ["partnership", "collaborate", "integrate"]): return "partnership"
        if any(w in text for w in ["thank", "appreciate", "great job"]): return "appreciation"
        if any(w in text for w in ["complaint", "unhappy", "refund", "cancel"]): return "complaint"
        if any(w in text for w in ["introduce", "hello", "connect"]): return "introduction"
        return "general"
    
    def _detect_tone(self, body):
        if any(w in body.lower() for w in ["sincerely", "regards", "best wishes"]): return "formal"
        if any(w in body.lower() for w in ["hey", "cheers", "awesome", "cool"]): return "casual"
        if any(w in body.lower() for w in ["apologize", "sorry", "understand your concern"]): return "empathetic"
        return "professional"
    
    def _has_cta(self, body):
        return any(w in body.lower() for w in ["let's schedule", "click here", "reply to", "next step", "call us"])
    
    def _has_personalization(self, body):
        return bool(re.search(r'Hi \w+|Dear \w+|Hello \w+', body))
    
    def _generate_draft(self, name, subject, body, tone, has_cta):
        greetings = {
            "formal": f"Dear {name},",
            "casual": f"Hey {name}!",
            "empathetic": f"Hi {name}, I completely understand.",
            "professional": f"Hi {name},"
        }
        greeting = greetings.get(tone, f"Hi {name},")
        
        # Detect if it's a question
        has_question = "?" in body
        
        if has_question:
            body_draft = f"\n\nThank you for reaching out. Great question! Here's what I can share:\n\n[AI-generated answer based on context]\n\n"
        else:
            body_draft = f"\n\nThank you for your message. I appreciate you sharing this.\n\n[AI-generated response based on context]\n\n"
        
        if has_cta:
            body_draft += "Would you like to schedule a quick call to discuss further? I'm available this week.\n\n"
        
        body_draft += "Best regards,\nZion Tech Group\n📱 +1 302 464 0950\n✉️ kleber@ziontechgroup.com\n📍 364 E Main St STE 1008, Middletown DE 19709"
        
        return greeting + body_draft
    
    def _predict_best_send_time(self):
        hour = datetime.now().hour
        if 9 <= hour <= 11: return "Now (peak engagement window)"
        if 13 <= hour <= 15: return "Now (afternoon engagement peak)"
        return f"Tomorrow at 10:00 AM (current hour {hour}:00 is off-peak)"
    
    def _should_follow_up(self, email_type, body):
        if email_type in ["pricing_inquiry", "partnership", "meeting_request"]: return True
        if any(w in body.lower() for w in ["interested", "considering", "evaluating"]): return True
        return False

if __name__ == "__main__":
    engine = PredictiveResponseEngine()
    
    # Learn from past
    engine.learn_from_reply(
        {"id": "old1", "subject": "Pricing question", "body": "How much does your AI platform cost?"},
        {"id": "r1", "body": "Hi John, Great question! Our platform starts at $2,500/mo. Let's schedule a call!"},
        "positive"
    )
    
    # Predict for new email
    test = {
        "id": "pred001", "sender": "sarah@techco.com",
        "subject": "Interested in your AI services - pricing?",
        "body": "Hi, I'm evaluating AI solutions for our team of 50. What's your pricing for the enterprise tier?",
        "recipients": ["sales@ziontechgroup.com"], "cc": ["cto@techco.com"]
    }
    result = engine.predict_response(test)
    print(f"Type: {result['email_type']} | Confidence: {result['confidence']}%")
    print(f"Tone: {result['predicted_tone']} | Length: {result['predicted_length']} chars")
    print(f"Reply-All: {result['reply_all_enforcement']}")
    print(f"Draft:\n{result['draft_response']}")
