#!/usr/bin/env python3
"""V640 - Sentiment-Aware Auto-Responder
Generate contextually appropriate auto-responses based on sender sentiment and email content.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json
from datetime import datetime
from typing import Dict, List, Any

class SentimentAwareAutoResponder:
    """Generate sentiment-aware automatic responses."""
    
    SENTIMENT_RESPONSES = {
        "positive": {
            "templates": [
                "Thank you for your kind words! {acknowledgment}",
                "I appreciate your positive feedback! {acknowledgment}",
                "That's wonderful to hear! {acknowledgment}"
            ],
            "tone": "warm"
        },
        "negative": {
            "templates": [
                "I understand your concern regarding {topic}. Let me address this promptly.",
                "Thank you for bringing this to my attention. {acknowledgment}",
                "I apologize for the inconvenience. {acknowledgment}"
            ],
            "tone": "empathetic"
        },
        "urgent": {
            "templates": [
                "I've received your urgent message about {topic}. I'm prioritizing this immediately.",
                "Acknowledged - taking immediate action on {topic}.",
                "This is being addressed as a priority. {acknowledgment}"
            ],
            "tone": "action-oriented"
        },
        "neutral": {
            "templates": [
                "Thank you for your message regarding {topic}. {acknowledgment}",
                "Received your email about {topic}. {acknowledgment}",
                "I've noted your message. {acknowledgment}"
            ],
            "tone": "professional"
        },
        "question": {
            "templates": [
                "Great question about {topic}. Let me look into this and get back to you.",
                "Thank you for your inquiry regarding {topic}. {acknowledgment}",
                "I'll research this and provide a detailed response shortly."
            ],
            "tone": "helpful"
        }
    }
    
    def __init__(self):
        self.responses = []
    
    def generate_response(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Generate sentiment-aware auto-response."""
        body = email.get("body", "")
        subject = email.get("subject", "")
        sender = email.get("from", "")
        
        # Analyze email
        sentiment = self._analyze_sentiment(email)
        email_type = self._classify_email_type(email)
        topic = self._extract_topic(subject, body)
        
        # Generate response
        response_text = self._generate_response_text(sentiment, email_type, topic, email)
        
        # Determine if auto-response is appropriate
        should_respond = self._should_auto_respond(email, sentiment)
        
        # Response quality metrics
        relevance_score = self._calculate_relevance(sentiment, email_type, topic)
        
        # Personalization
        personalized = self._personalize_response(response_text, sender, email)
        
        return {
            "engine": "V640",
            "original_subject": subject,
            "sender": sender,
            "detected_sentiment": sentiment,
            "email_type": email_type,
            "extracted_topic": topic,
            "auto_response": personalized,
            "response_tone": self.SENTIMENT_RESPONSES.get(sentiment, {}).get("tone", "professional"),
            "should_auto_respond": should_respond,
            "relevance_score": round(relevance_score, 1),
            "follow_up_needed": self._needs_follow_up(sentiment, email_type),
            "suggested_manual_review": self._needs_manual_review(sentiment, email),
            "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _analyze_sentiment(self, email: Dict) -> str:
        """Analyze email sentiment."""
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        # Check for questions first
        if "?" in email.get("body", "") and any(w in text for w in ["how", "what", "when", "where", "why", "can", "could"]):
            return "question"
        
        # Check for urgency
        if any(w in text for w in ["urgent", "asap", "critical", "emergency", "immediately"]):
            return "urgent"
        
        # Sentiment analysis
        positive_words = ["thank", "great", "excellent", "love", "amazing", "wonderful", "appreciate", "happy"]
        negative_words = ["frustrated", "angry", "disappointed", "problem", "issue", "concern", "bad", "terrible", "upset"]
        
        positive_count = sum(1 for w in positive_words if w in text)
        negative_count = sum(1 for w in negative_words if w in text)
        
        if positive_count > negative_count and positive_count >= 2:
            return "positive"
        elif negative_count > positive_count and negative_count >= 2:
            return "negative"
        return "neutral"
    
    def _classify_email_type(self, email: Dict) -> str:
        """Classify email type."""
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        type_keywords = {
            "meeting_request": ["meeting", "schedule", "calendar", "available"],
            "information_request": ["information", "details", "can you send", "please provide"],
            "status_update": ["update", "progress", "status", "report"],
            "feedback": ["feedback", "review", "thoughts", "opinion"],
            "complaint": ["complaint", "dissatisfied", "unacceptable", "refund"],
            "inquiry": ["inquiry", "interested", "pricing", "quote"]
        }
        
        for email_type, keywords in type_keywords.items():
            if any(kw in text for kw in keywords):
                return email_type
        
        return "general"
    
    def _extract_topic(self, subject: str, body: str) -> str:
        """Extract main topic."""
        # Use subject as primary topic source
        if subject:
            # Clean subject
            topic = subject.replace("Re:", "").replace("Fwd:", "").strip()
            if len(topic) > 5:
                return topic[:100]
        
        # Fallback to first meaningful sentence
        sentences = body.split('.')
        for sentence in sentences:
            sentence = sentence.strip()
            if len(sentence) > 15:
                return sentence[:100]
        
        return "your message"
    
    def _generate_response_text(self, sentiment: str, email_type: str, topic: str, email: Dict) -> str:
        """Generate response text."""
        import random
        
        response_config = self.SENTIMENT_RESPONSES.get(sentiment, self.SENTIMENT_RESPONSES["neutral"])
        templates = response_config["templates"]
        
        template = random.choice(templates)
        
        # Generate acknowledgment based on email type
        acknowledgments = {
            "meeting_request": "I'll check my calendar and confirm availability shortly.",
            "information_request": "I'm gathering the requested information now.",
            "status_update": "Thank you for keeping me informed.",
            "feedback": "Your feedback is valuable and will be reviewed carefully.",
            "complaint": "I take this seriously and will investigate immediately.",
            "inquiry": "I'll prepare a detailed response with the information you need.",
            "general": "I'll review this and respond in detail soon."
        }
        
        acknowledgment = acknowledgments.get(email_type, acknowledgments["general"])
        
        response = template.format(
            topic=topic,
            acknowledgment=acknowledgment
        )
        
        return response
    
    def _should_auto_respond(self, email: Dict, sentiment: str) -> bool:
        """Determine if auto-response is appropriate."""
        # Don't auto-respond to certain emails
        no_auto_respond = ["noreply@", "no-reply@", "mailer-daemon@", "postmaster@"]
        sender = email.get("from", "").lower()
        
        if any(no_reply in sender for no_reply in no_auto_respond):
            return False
        
        # Always respond to urgent and negative sentiments
        if sentiment in ["urgent", "negative"]:
            return True
        
        # Respond to questions and general emails
        return True
    
    def _calculate_relevance(self, sentiment: str, email_type: str, topic: str) -> float:
        """Calculate response relevance score."""
        score = 75.0
        
        # Boost for specific email types
        if email_type in ["meeting_request", "information_request", "inquiry"]:
            score += 15
        
        # Boost for clear topics
        if len(topic) > 20:
            score += 10
        
        return min(100, score)
    
    def _personalize_response(self, response: str, sender: str, email: Dict) -> str:
        """Personalize the response."""
        # Extract name from sender
        name = sender.split("@")[0].replace(".", " ").title() if "@" in sender else ""
        
        greeting = f"Hello {name},\n\n" if name else "Hello,\n\n"
        closing = "\n\nBest regards,\nZion Tech Group Team\n📱 +1 302 464 0950\n✉️ kleber@ziontechgroup.com"
        
        return greeting + response + closing
    
    def _needs_follow_up(self, sentiment: str, email_type: str) -> bool:
        """Determine if follow-up is needed."""
        return sentiment in ["urgent", "negative"] or email_type in ["complaint", "meeting_request"]
    
    def _needs_manual_review(self, sentiment: str, email: Dict) -> bool:
        """Determine if manual review is needed."""
        # Complex or sensitive emails need review
        body = email.get("body", "")
        
        if sentiment == "negative" and len(body) > 500:
            return True
        
        if any(word in body.lower() for word in ["legal", "lawsuit", "attorney", "compliance"]):
            return True
        
        return False
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.generate_response(e) for e in emails]
        
        sentiment_distribution = {}
        for r in results:
            s = r["detected_sentiment"]
            sentiment_distribution[s] = sentiment_distribution.get(s, 0) + 1
        
        auto_responded = sum(1 for r in results if r["should_auto_respond"])
        manual_review = sum(1 for r in results if r["suggested_manual_review"])
        
        return {
            "engine": "V640 - Sentiment-Aware Auto-Responder",
            "total_processed": len(results),
            "auto_responses_generated": auto_responded,
            "manual_review_recommended": manual_review,
            "sentiment_distribution": sentiment_distribution,
            "average_relevance_score": round(sum(r["relevance_score"] for r in results) / len(results), 1) if results else 0,
            "reply_all_enforced": sum(1 for r in results if r["reply_all_enforced"]),
            "results": results
        }

if __name__ == "__main__":
    engine = SentimentAwareAutoResponder()
    test_emails = [
        {"subject": "Amazing work on the project!", "body": "I love the results. The team did an excellent job. Thank you so much!",
         "from": "happy.client@company.com", "to": ["team@ziontechgroup.com", "manager@ziontechgroup.com"]},
        {"subject": "URGENT: System outage", "body": "The system is down and we need immediate assistance. This is critical for our operations.",
         "from": "ops@client.com", "to": ["support@ziontechgroup.com"]},
        {"subject": "Question about pricing", "body": "Can you provide more details about your enterprise pricing? What's included?",
         "from": "prospect@company.com", "to": ["sales@ziontechgroup.com"]},
        {"subject": "Service issue", "body": "I'm very frustrated with the recurring issues. This is unacceptable and I'm considering switching providers.",
         "from": "angry.client@company.com", "to": ["support@ziontechgroup.com", "manager@ziontechgroup.com"]}
    ]
    result = engine.process_batch(test_emails)
    print(json.dumps(result, indent=2))
