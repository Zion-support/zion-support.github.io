#!/usr/bin/env python3
"""V616 - Email Priority Decay Engine
Automatically adjusts email priority based on age, engagement, and context.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json
from datetime import datetime, timedelta
from typing import Dict, List, Any

class PriorityDecayEngine:
    """Dynamic priority adjustment based on email lifecycle."""
    
    DECAY_FACTORS = {
        "age_hours": 0.30,
        "engagement_level": 0.25,
        "sender_importance": 0.20,
        "thread_activity": 0.15,
        "content_relevance": 0.10
    }
    
    def __init__(self):
        self.tracked_emails = []
    
    def calculate_decayed_priority(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Calculate decayed priority score for an email."""
        original_priority = email.get("priority", 50)
        received_at = email.get("received_at", datetime.now().isoformat())
        
        age_hours = self._calculate_age_hours(received_at)
        engagement = self._calculate_engagement(email)
        sender_importance = self._assess_sender_importance(email)
        thread_activity = self._measure_thread_activity(email)
        content_relevance = self._assess_relevance(email)
        
        decay_multiplier = self._calculate_decay_multiplier(
            age_hours, engagement, sender_importance, thread_activity, content_relevance
        )
        
        decayed_priority = original_priority * decay_multiplier
        priority_change = decayed_priority - original_priority
        
        action = self._recommend_action(decayed_priority, priority_change)
        
        return {
            "engine": "V616",
            "email_subject": email.get("subject", ""),
            "original_priority": original_priority,
            "decayed_priority": round(decayed_priority, 1),
            "priority_change": round(priority_change, 1),
            "age_hours": round(age_hours, 1),
            "decay_factors": {
                "age_hours": round(age_hours, 1),
                "engagement_level": round(engagement, 2),
                "sender_importance": round(sender_importance, 2),
                "thread_activity": round(thread_activity, 2),
                "content_relevance": round(content_relevance, 2)
            },
            "decay_multiplier": round(decay_multiplier, 3),
            "recommended_action": action,
            "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _calculate_age_hours(self, received_at: str) -> float:
        """Calculate email age in hours."""
        try:
            received_dt = datetime.fromisoformat(received_at.replace("Z", "+00:00"))
            return (datetime.now(received_dt.tzinfo) - received_dt).total_seconds() / 3600
        except:
            return 0.0
    
    def _calculate_engagement(self, email: Dict) -> float:
        """Calculate engagement level (0-1)."""
        score = 0.5
        if email.get("opened", False):
            score += 0.2
        if email.get("replied", False):
            score += 0.2
        if email.get("forwarded", False):
            score += 0.1
        if email.get("starred", False):
            score += 0.1
        return min(1.0, score)
    
    def _assess_sender_importance(self, email: Dict) -> float:
        """Assess sender importance (0-1)."""
        sender = email.get("from", "").lower()
        importance = 0.5
        if any(title in sender for title in ["ceo", "cto", "cfo", "president"]):
            importance = 1.0
        elif any(title in sender for title in ["director", "vp", "manager"]):
            importance = 0.8
        elif "client" in email.get("tags", []):
            importance = 0.9
        return importance
    
    def _measure_thread_activity(self, email: Dict) -> float:
        """Measure thread activity level (0-1)."""
        thread_count = email.get("thread_count", 1)
        if thread_count > 10:
            return 1.0
        elif thread_count > 5:
            return 0.7
        elif thread_count > 2:
            return 0.5
        return 0.3
    
    def _assess_relevance(self, email: Dict) -> float:
        """Assess content relevance (0-1)."""
        keywords = email.get("keywords", [])
        if not keywords:
            return 0.5
        
        high_relevance = ["urgent", "deadline", "important", "critical"]
        medium_relevance = ["update", "review", "meeting", "project"]
        
        score = 0.3
        for kw in keywords:
            if kw in high_relevance:
                score += 0.3
            elif kw in medium_relevance:
                score += 0.15
        return min(1.0, score)
    
    def _calculate_decay_multiplier(self, age, engagement, sender, thread, relevance) -> float:
        """Calculate overall decay multiplier."""
        base = 1.0
        
        # Age decay: older emails lose priority
        if age > 24:
            base -= min(0.3, age / 200)
        
        # Engagement boost: engaged emails maintain priority
        base *= (0.5 + engagement * 0.5)
        
        # Sender importance boost
        base *= (0.7 + sender * 0.5)
        
        # Thread activity boost
        base *= (0.6 + thread * 0.4)
        
        # Content relevance boost
        base *= (0.5 + relevance * 0.7)
        
        return max(0.1, min(2.0, base))
    
    def _recommend_action(self, priority: float, change: float) -> str:
        """Recommend action based on priority."""
        if priority >= 80:
            return "REPLY_IMMEDIATELY"
        elif priority >= 60:
            return "REPLY_TODAY"
        elif priority >= 40:
            return "REPLY_THIS_WEEK"
        elif priority >= 20:
            return "REVIEW_LATER"
        else:
            return "ARCHIVE"
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.calculate_decayed_priority(e) for e in emails]
        avg_decay = sum(r["decay_multiplier"] for r in results) / len(results) if results else 1.0
        
        return {
            "engine": "V616 - Priority Decay Engine",
            "total_processed": len(results),
            "average_decay_multiplier": round(avg_decay, 3),
            "priority_increased": sum(1 for r in results if r["priority_change"] > 0),
            "priority_decreased": sum(1 for r in results if r["priority_change"] < 0),
            "reply_all_enforced": sum(1 for r in results if r["reply_all_enforced"]),
            "results": results
        }

if __name__ == "__main__":
    engine = PriorityDecayEngine()
    now = datetime.now()
    test_emails = [
        {"subject": "URGENT: Production issue", "priority": 90, "from": "cto@company.com", 
         "received_at": (now - timedelta(hours=2)).isoformat(), "opened": True, "replied": False,
         "to": ["ops@company.com", "dev@company.com"], "keywords": ["urgent", "critical"]},
        {"subject": "Weekly newsletter", "priority": 30, "from": "news@vendor.com",
         "received_at": (now - timedelta(days=3)).isoformat(), "opened": False,
         "to": ["me@company.com"], "keywords": ["update"]},
        {"subject": "Project Alpha status", "priority": 60, "from": "pm@company.com",
         "received_at": (now - timedelta(hours=12)).isoformat(), "opened": True, "replied": True,
         "to": ["team@company.com"], "thread_count": 8, "keywords": ["project", "review"]}
    ]
    result = engine.process_batch(test_emails)
    print(json.dumps(result, indent=2))
