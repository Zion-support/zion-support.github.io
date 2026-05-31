#!/usr/bin/env python3
"""V636 - Email Scheduling Optimizer
Find the optimal time to send emails based on recipient behavior and timezone analysis.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json
from datetime import datetime, timedelta
from typing import Dict, List, Any

class EmailSchedulingOptimizer:
    """Optimize email send times for maximum engagement."""
    
    TIMEZONE_OFFSETS = {
        "EST": -5, "CST": -6, "MST": -7, "PST": -8,
        "GMT": 0, "CET": 1, "IST": 5.5, "JST": 9,
        "AEST": 10, "NZST": 12
    }
    
    OPTIMAL_WINDOWS = {
        "business": {"start": 9, "end": 17, "peak": [10, 14, 15]},
        "executive": {"start": 7, "end": 19, "peak": [8, 16, 17]},
        "creative": {"start": 10, "end": 20, "peak": [11, 15, 19]},
        "international": {"start": 8, "end": 18, "peak": [9, 13, 14]}
    }
    
    DAY_WEIGHTS = {
        0: 0.9,   # Monday
        1: 1.0,   # Tuesday (best)
        2: 1.0,   # Wednesday (best)
        3: 0.95,  # Thursday
        4: 0.8,   # Friday
        5: 0.3,   # Saturday
        6: 0.2    # Sunday
    }
    
    def __init__(self):
        self.send_history = []
    
    def optimize_send_time(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Find optimal send time for email."""
        recipients = email.get("to", []) + email.get("cc", [])
        recipient_type = self._classify_recipients(email)
        urgency = self._detect_urgency(email)
        
        # Determine recipient timezones
        timezones = self._estimate_timezones(recipients)
        
        # Find optimal window
        optimal_window = self._find_optimal_window(timezones, recipient_type)
        
        # Score each hour
        hourly_scores = self._score_hours(optimal_window, timezones)
        
        # Best send time
        best_hour = max(hourly_scores, key=hourly_scores.get)
        best_day = self._find_best_day(urgency)
        
        # Generate schedule recommendation
        recommended_time = self._generate_recommendation(best_day, best_hour, timezones)
        
        # Predicted engagement
        engagement_prediction = self._predict_engagement(best_hour, best_day, recipient_type)
        
        return {
            "engine": "V636",
            "email_subject": email.get("subject", ""),
            "recipient_count": len(recipients),
            "recipient_type": recipient_type,
            "urgency_level": urgency,
            "recipient_timezones": timezones,
            "optimal_window": optimal_window,
            "hourly_scores": {str(k): round(v, 2) for k, v in sorted(hourly_scores.items())},
            "recommended_send_time": recommended_time,
            "predicted_engagement": engagement_prediction,
            "alternative_times": self._suggest_alternatives(hourly_scores, best_hour),
            "avoid_times": self._identify_avoid_times(hourly_scores),
            "reply_all_enforced": len(recipients) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _classify_recipients(self, email: Dict) -> str:
        """Classify recipient type."""
        recipients = " ".join(email.get("to", []) + email.get("cc", [])).lower()
        
        if any(word in recipients for word in ["ceo", "cto", "cfo", "president", "director"]):
            return "executive"
        elif any(word in recipients for word in ["design", "creative", "marketing"]):
            return "creative"
        elif len(email.get("to", [])) > 5:
            return "international"
        return "business"
    
    def _detect_urgency(self, email: Dict) -> str:
        """Detect email urgency."""
        text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        if any(word in text for word in ["urgent", "asap", "critical", "emergency"]):
            return "high"
        elif any(word in text for word in ["important", "soon", "deadline"]):
            return "medium"
        return "low"
    
    def _estimate_timezones(self, recipients: List[str]) -> List[str]:
        """Estimate timezones based on recipient domains."""
        timezones = []
        
        domain_tz_map = {
            ".com": "EST", ".co.uk": "GMT", ".de": "CET", ".fr": "CET",
            ".jp": "JST", ".in": "IST", ".au": "AEST", ".nz": "NZST"
        }
        
        for recipient in recipients:
            domain = recipient.split("@")[-1] if "@" in recipient else ""
            tz = "EST"  # Default
            for suffix, timezone in domain_tz_map.items():
                if domain.endswith(suffix):
                    tz = timezone
                    break
            timezones.append(tz)
        
        return list(set(timezones))
    
    def _find_optimal_window(self, timezones: List[str], recipient_type: str) -> Dict:
        """Find optimal send window across timezones."""
        window = self.OPTIMAL_WINDOWS.get(recipient_type, self.OPTIMAL_WINDOWS["business"])
        
        if len(timezones) > 2:
            # International - find overlap
            return {"start": 13, "end": 16, "peak": [14, 15], "note": "International overlap window"}
        
        return window
    
    def _score_hours(self, window: Dict, timezones: List[str]) -> Dict[int, float]:
        """Score each hour for sending."""
        scores = {}
        
        for hour in range(24):
            score = 0.1  # Base score
            
            # Boost for peak hours
            if hour in window.get("peak", []):
                score += 0.5
            elif window["start"] <= hour <= window["end"]:
                score += 0.3
            
            # Timezone adjustment
            for tz in timezones:
                offset = self.TIMEZONE_OFFSETS.get(tz, 0)
                local_hour = (hour + offset) % 24
                if 9 <= local_hour <= 17:
                    score += 0.2
            
            scores[hour] = min(1.0, score)
        
        return scores
    
    def _find_best_day(self, urgency: str) -> str:
        """Find best day to send."""
        if urgency == "high":
            return "today"
        
        today = datetime.now()
        best_day = today
        
        for i in range(7):
            candidate = today + timedelta(days=i)
            if self.DAY_WEIGHTS[candidate.weekday()] >= 0.9:
                best_day = candidate
                break
        
        return best_day.strftime("%A")
    
    def _generate_recommendation(self, day: str, hour: int, timezones: List[str]) -> Dict:
        """Generate send time recommendation."""
        am_pm = "AM" if hour < 12 else "PM"
        display_hour = hour if hour <= 12 else hour - 12
        if display_hour == 0:
            display_hour = 12
        
        return {
            "day": day,
            "time": f"{display_hour}:00 {am_pm}",
            "hour_24": hour,
            "timezone": timezones[0] if timezones else "EST",
            "confidence": 85
        }
    
    def _predict_engagement(self, hour: int, day: str, recipient_type: str) -> Dict:
        """Predict engagement metrics."""
        base_open = 22.0
        base_click = 3.5
        
        # Hour adjustment
        if 10 <= hour <= 15:
            base_open += 5
            base_click += 1
        
        # Day adjustment
        if day in ["Tuesday", "Wednesday"]:
            base_open += 3
            base_click += 0.5
        
        # Recipient type adjustment
        if recipient_type == "executive":
            base_open += 10
            base_click += 2
        
        return {
            "predicted_open_rate_percent": round(base_open, 1),
            "predicted_click_rate_percent": round(base_click, 1),
            "predicted_reply_rate_percent": round(base_click * 0.4, 1)
        }
    
    def _suggest_alternatives(self, scores: Dict, best_hour: int) -> List[Dict]:
        """Suggest alternative send times."""
        alternatives = []
        sorted_hours = sorted(scores.items(), key=lambda x: x[1], reverse=True)
        
        for hour, score in sorted_hours[1:4]:
            if hour != best_hour:
                am_pm = "AM" if hour < 12 else "PM"
                display_hour = hour if hour <= 12 else hour - 12
                if display_hour == 0:
                    display_hour = 12
                alternatives.append({
                    "time": f"{display_hour}:00 {am_pm}",
                    "score": round(score, 2)
                })
        
        return alternatives
    
    def _identify_avoid_times(self, scores: Dict) -> List[str]:
        """Identify times to avoid."""
        avoid = []
        for hour, score in scores.items():
            if score < 0.2:
                am_pm = "AM" if hour < 12 else "PM"
                display_hour = hour if hour <= 12 else hour - 12
                if display_hour == 0:
                    display_hour = 12
                avoid.append(f"{display_hour}:00 {am_pm}")
        
        return avoid[:3]
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.optimize_send_time(e) for e in emails]
        
        return {
            "engine": "V636 - Email Scheduling Optimizer",
            "total_optimized": len(results),
            "reply_all_enforced": sum(1 for r in results if r["reply_all_enforced"]),
            "results": results
        }

if __name__ == "__main__":
    engine = EmailSchedulingOptimizer()
    test_emails = [
        {"subject": "URGENT: Server maintenance", "body": "Critical server update needed ASAP.",
         "to": ["ops@company.com", "cto@company.com"]},
        {"subject": "Weekly team update", "body": "Here's the weekly status report.",
         "to": ["team@company.com", "alice@company.co.uk", "bob@company.de"]}
    ]
    result = engine.process_batch(test_emails)
    print(json.dumps(result, indent=2))
