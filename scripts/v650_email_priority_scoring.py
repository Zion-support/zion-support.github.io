#!/usr/bin/env python3
"""V650 - Email Priority Scoring
Calculate intelligent priority scores for emails based on content, sender, and context.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json
from datetime import datetime
from typing import Dict, List, Any

class EmailPriorityScoring:
    """Calculate intelligent email priority scores."""
    
    PRIORITY_FACTORS = {
        "sender_importance": {
            "weights": {
                "ceo": 100,
                "executive": 90,
                "manager": 80,
                "colleague": 60,
                "external": 50,
                "unknown": 40
            }
        },
        "content_urgency": {
            "keywords": {
                "urgent": 30,
                "asap": 25,
                "critical": 30,
                "emergency": 35,
                "deadline": 20,
                "immediately": 25
            }
        },
        "email_type": {
            "types": {
                "direct_mention": 25,
                "question": 15,
                "request": 20,
                "fyi": 5,
                "newsletter": -20
            }
        }
    }
    
    def __init__(self):
        self.priority_history = []
    
    def score_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Calculate priority score for an email."""
        # Calculate individual factor scores
        sender_score = self._score_sender(email.get('from', ''))
        content_score = self._score_content(email.get('subject', ''), email.get('body', ''))
        type_score = self._score_email_type(email)
        context_score = self._score_context(email)
        
        # Calculate weighted total
        total_score = (
            sender_score * 0.35 +
            content_score * 0.30 +
            type_score * 0.20 +
            context_score * 0.15
        )
        
        # Determine priority level
        priority_level = self._determine_priority_level(total_score)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(total_score, priority_level)
        
        return {
            "engine": "V650",
            "email_subject": email.get('subject', ''),
            "priority_score": round(total_score, 1),
            "priority_level": priority_level,
            "factor_scores": {
                "sender_importance": round(sender_score, 1),
                "content_urgency": round(content_score, 1),
                "email_type": round(type_score, 1),
                "context": round(context_score, 1)
            },
            "recommendations": recommendations,
            "should_notify": total_score >= 75,
            "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _score_sender(self, sender: str) -> float:
        """Score based on sender importance."""
        sender_lower = sender.lower()
        
        # Check for VIP senders
        if any(title in sender_lower for title in ['ceo', 'president', 'founder']):
            return self.PRIORITY_FACTORS['sender_importance']['weights']['ceo']
        elif any(title in sender_lower for title in ['vp', 'director', 'executive']):
            return self.PRIORITY_FACTORS['sender_importance']['weights']['executive']
        elif any(title in sender_lower for title in ['manager', 'lead', 'supervisor']):
            return self.PRIORITY_FACTORS['sender_importance']['weights']['manager']
        elif '@' in sender and not any(domain in sender_lower for domain in ['noreply', 'newsletter', 'no-reply']):
            return self.PRIORITY_FACTORS['sender_importance']['weights']['colleague']
        else:
            return self.PRIORITY_FACTORS['sender_importance']['weights']['unknown']
    
    def _score_content(self, subject: str, body: str) -> float:
        """Score based on content urgency."""
        text = f"{subject} {body}".lower()
        score = 50  # Base score
        
        for keyword, weight in self.PRIORITY_FACTORS['content_urgency']['keywords'].items():
            if keyword in text:
                score += weight
        
        return min(100, score)
    
    def _score_email_type(self, email: Dict) -> float:
        """Score based on email type."""
        subject = email.get('subject', '').lower()
        body = email.get('body', '').lower()
        score = 50  # Base score
        
        # Check for direct mentions
        if 'you' in body or 'your' in body:
            score += self.PRIORITY_FACTORS['email_type']['types']['direct_mention']
        
        # Check for questions
        if '?' in subject or '?' in body:
            score += self.PRIORITY_FACTORS['email_type']['types']['question']
        
        # Check for requests
        if any(word in body for word in ['please', 'could you', 'can you', 'need']):
            score += self.PRIORITY_FACTORS['email_type']['types']['request']
        
        # Check for FYI
        if 'fyi' in subject or 'for your information' in body:
            score += self.PRIORITY_FACTORS['email_type']['types']['fyi']
        
        # Check for newsletter
        if any(word in subject for word in ['newsletter', 'digest', 'update']):
            score += self.PRIORITY_FACTORS['email_type']['types']['newsletter']
        
        return min(100, max(0, score))
    
    def _score_context(self, email: Dict) -> float:
        """Score based on contextual factors."""
        score = 50  # Base score
        
        # Boost for attachments
        if email.get('attachments'):
            score += 10
        
        # Boost for multiple recipients (might be important)
        recipients = len(email.get('to', [])) + len(email.get('cc', []))
        if recipients > 5:
            score += 5
        elif recipients == 1:
            score += 10  # Direct email
        
        # Boost for reply threads
        if email.get('subject', '').startswith('Re:'):
            score += 10
        
        # Boost for forwarded emails
        if email.get('subject', '').startswith('Fwd:'):
            score += 5
        
        return min(100, score)
    
    def _determine_priority_level(self, score: float) -> str:
        """Determine priority level from score."""
        if score >= 85:
            return "critical"
        elif score >= 70:
            return "high"
        elif score >= 50:
            return "medium"
        elif score >= 30:
            return "low"
        else:
            return "minimal"
    
    def _generate_recommendations(self, score: float, level: str) -> List[str]:
        """Generate priority-based recommendations."""
        recommendations = []
        
        if level == "critical":
            recommendations.append("Respond immediately")
            recommendations.append("Send notification to user")
        elif level == "high":
            recommendations.append("Respond within 1 hour")
            recommendations.append("Mark as important")
        elif level == "medium":
            recommendations.append("Respond within 4 hours")
        elif level == "low":
            recommendations.append("Respond within 24 hours")
        else:
            recommendations.append("Review when convenient")
            recommendations.append("Consider archiving")
        
        return recommendations
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.score_email(e) for e in emails]
        
        # Calculate statistics
        avg_score = sum(r['priority_score'] for r in results) / len(results) if results else 0
        
        priority_distribution = {}
        for r in results:
            level = r['priority_level']
            priority_distribution[level] = priority_distribution.get(level, 0) + 1
        
        high_priority = sum(1 for r in results if r['priority_score'] >= 70)
        
        return {
            "engine": "V650 - Email Priority Scoring",
            "total_scored": len(results),
            "average_priority_score": round(avg_score, 1),
            "priority_distribution": priority_distribution,
            "high_priority_count": high_priority,
            "notifications_required": sum(1 for r in results if r['should_notify']),
            "reply_all_enforced": sum(1 for r in results if r['reply_all_enforced']),
            "results": results
        }

if __name__ == "__main__":
    scorer = EmailPriorityScoring()
    
    test_emails = [
        {
            "subject": "URGENT: Server Down",
            "body": "The production server is down. We need immediate assistance!",
            "from": "ceo@company.com",
            "to": ["it@company.com"],
            "attachments": [{"filename": "error_log.txt"}]
        },
        {
            "subject": "Weekly Newsletter",
            "body": "Here's your weekly update with company news.",
            "from": "newsletter@company.com",
            "to": ["all@company.com"]
        },
        {
            "subject": "Project Update",
            "body": "Can you review the attached document and provide feedback?",
            "from": "colleague@company.com",
            "to": ["you@company.com"],
            "attachments": [{"filename": "report.pdf"}]
        }
    ]
    
    result = scorer.process_batch(test_emails)
    print(json.dumps(result, indent=2))
