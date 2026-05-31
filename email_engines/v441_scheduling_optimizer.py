#!/usr/bin/env python3
"""
V441: AI Email Scheduling Optimizer
Analyzes recipient engagement patterns and suggests optimal send times
for maximum open rates and response rates.
Case-by-case analysis.
Enforces reply-all for multi-recipient scheduling recommendations.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from collections import defaultdict


class V441SchedulingOptimizer:
    """Optimizes email send times based on engagement patterns"""
    
    TIME_ZONE_MAP = {
        "EST": -5, "EDT": -4, "CST": -6, "CDT": -5,
        "MST": -7, "MDT": -6, "PST": -8, "PDT": -7,
        "GMT": 0, "UTC": 0, "CET": 1, "CEST": 2,
        "IST": 5.5, "JST": 9, "AEST": 10
    }
    
    ENGAGEMENT_PATTERNS = {
        "business_hours": {"start": 9, "end": 17, "peak": [10, 14, 15]},
        "early_birds": {"start": 6, "end": 9, "peak": [7, 8]},
        "night_owls": {"start": 18, "end": 23, "peak": [20, 21]},
        "weekend": {"days": [5, 6], "peak_hours": [10, 11, 14]}
    }
    
    def analyze_engagement_history(self, email_history: List[Dict]) -> Dict:
        """Analyze historical engagement patterns"""
        if not email_history:
            return {"error": "No email history provided"}
        
        hourly_opens = defaultdict(int)
        hourly_sends = defaultdict(int)
        daily_opens = defaultdict(int)
        daily_sends = defaultdict(int)
        
        for email in email_history:
            sent_time = email.get("sent_at")
            opened_time = email.get("opened_at")
            
            if sent_time:
                try:
                    sent_dt = datetime.fromisoformat(sent_time.replace('Z', '+00:00'))
                    hourly_sends[sent_dt.hour] += 1
                    daily_sends[sent_dt.weekday()] += 1
                    
                    if opened_time:
                        opened_dt = datetime.fromisoformat(opened_time.replace('Z', '+00:00'))
                        hourly_opens[sent_dt.hour] += 1
                        daily_opens[sent_dt.weekday()] += 1
                except:
                    continue
        
        # Calculate open rates by hour
        hourly_rates = {}
        for hour in range(24):
            sent = hourly_sends.get(hour, 0)
            opened = hourly_opens.get(hour, 0)
            if sent > 0:
                hourly_rates[hour] = round((opened / sent) * 100, 1)
            else:
                hourly_rates[hour] = 0
        
        # Calculate open rates by day
        daily_rates = {}
        for day in range(7):
            sent = daily_sends.get(day, 0)
            opened = daily_opens.get(day, 0)
            if sent > 0:
                daily_rates[day] = round((opened / sent) * 100, 1)
            else:
                daily_rates[day] = 0
        
        # Find best hours
        best_hours = sorted(hourly_rates.items(), key=lambda x: x[1], reverse=True)[:5]
        best_days = sorted(daily_rates.items(), key=lambda x: x[1], reverse=True)[:3]
        
        day_names = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        
        return {
            "hourly_open_rates": hourly_rates,
            "daily_open_rates": {day_names[k]: v for k, v in daily_rates.items()},
            "best_hours": [{"hour": h, "open_rate": r} for h, r in best_hours],
            "best_days": [{"day": day_names[d], "open_rate": r} for d, r in best_days],
            "total_emails_analyzed": len(email_history)
        }
    
    def detect_recipient_timezone(self, email: Dict) -> Dict:
        """Detect recipient timezone from email metadata"""
        recipients = email.get("to", []) + email.get("cc", [])
        
        timezone_hints = []
        
        # Check for explicit timezone mentions
        body = email.get("body", "").lower()
        for tz in self.TIME_ZONE_MAP.keys():
            if tz.lower() in body:
                timezone_hints.append(tz)
        
        # Check for time-based hints
        time_patterns = [
            r'(\d{1,2}:\d{2}\s*(?:am|pm)?)\s*(est|edt|cst|cdt|mst|mdt|pst|pdt|gmt|utc)',
            r'meeting at (\d{1,2})\s*(?:am|pm)?\s*(your|my|their)?\s*time'
        ]
        
        for pattern in time_patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            for match in matches:
                if len(match) > 1 and match[1].upper() in self.TIME_ZONE_MAP:
                    timezone_hints.append(match[1].upper())
        
        # Default to UTC if no hints
        if not timezone_hints:
            timezone_hints = ["UTC"]
        
        primary_tz = timezone_hints[0]
        utc_offset = self.TIME_ZONE_MAP.get(primary_tz, 0)
        
        return {
            "detected_timezones": list(set(timezone_hints)),
            "primary_timezone": primary_tz,
            "utc_offset_hours": utc_offset,
            "recipient_count": len(recipients),
            "confidence": "high" if len(timezone_hints) > 0 else "low"
        }
    
    def suggest_optimal_send_time(self, email: Dict, engagement_data: Dict = None) -> Dict:
        """Suggest optimal send time based on patterns and timezone"""
        timezone_info = self.detect_recipient_timezone(email)
        primary_tz = timezone_info["primary_timezone"]
        utc_offset = timezone_info["utc_offset_hours"]
        
        # Default best times (business hours in recipient timezone)
        default_best_hours = [10, 14, 15]  # 10 AM, 2 PM, 3 PM
        
        # Use engagement data if available
        if engagement_data and "best_hours" in engagement_data:
            best_hours = [h["hour"] for h in engagement_data["best_hours"][:3]]
        else:
            best_hours = default_best_hours
        
        # Convert to UTC
        utc_best_hours = [(h - utc_offset) % 24 for h in best_hours]
        
        # Generate suggestions for next 7 days
        now = datetime.utcnow()
        suggestions = []
        
        for day_offset in range(7):
            target_date = now + timedelta(days=day_offset)
            
            # Skip weekends for business emails
            if target_date.weekday() >= 5:
                subject = email.get("subject", "").lower()
                if any(word in subject for word in ["business", "meeting", "project", "client"]):
                    continue
            
            for hour in utc_best_hours:
                send_time = target_date.replace(hour=hour, minute=0, second=0, microsecond=0)
                
                if send_time > now:
                    local_hour = (hour + utc_offset) % 24
                    suggestions.append({
                        "utc_time": send_time.isoformat() + "Z",
                        "local_time": f"{local_hour:02d}:00 {primary_tz}",
                        "day_of_week": target_date.strftime("%A"),
                        "confidence": "high" if day_offset < 3 else "medium"
                    })
                    
                    if len(suggestions) >= 10:  # Limit to 10 suggestions
                        break
            
            if len(suggestions) >= 10:
                break
        
        # Rank suggestions
        ranked_suggestions = sorted(suggestions, key=lambda x: (
            0 if x["confidence"] == "high" else 1,
            x["utc_time"]
        ))
        
        return {
            "recipient_timezone": primary_tz,
            "utc_offset": utc_offset,
            "suggested_times": ranked_suggestions[:5],
            "best_hours_local": best_hours,
            "avoid_weekends": any(word in email.get("subject", "").lower() for word in ["business", "meeting", "project"])
        }
    
    def calculate_time_to_send(self, suggested_time: str) -> Dict:
        """Calculate time remaining until suggested send time"""
        try:
            target = datetime.fromisoformat(suggested_time.replace('Z', '+00:00'))
            now = datetime.utcnow().replace(tzinfo=target.tzinfo)
            
            delta = target - now
            
            if delta.total_seconds() < 0:
                return {"error": "Suggested time is in the past"}
            
            hours = delta.seconds // 3600
            minutes = (delta.seconds % 3600) // 60
            
            return {
                "hours_until_send": hours,
                "minutes_until_send": minutes,
                "total_minutes": int(delta.total_seconds() / 60),
                "urgency": "immediate" if hours < 2 else "soon" if hours < 12 else "scheduled"
            }
        except Exception as e:
            return {"error": str(e)}
    
    def process(self, email: Dict, email_history: List[Dict] = None) -> Dict:
        """Process email and suggest optimal send time"""
        recipients = email.get('to', [])
        cc = email.get('cc', [])
        
        # Analyze engagement history
        engagement_data = None
        if email_history:
            engagement_data = self.analyze_engagement_history(email_history)
        
        # Suggest optimal send time
        scheduling = self.suggest_optimal_send_time(email, engagement_data)
        
        # Calculate time to send for best suggestion
        if scheduling["suggested_times"]:
            best_time = scheduling["suggested_times"][0]["utc_time"]
            time_to_send = self.calculate_time_to_send(best_time)
        else:
            time_to_send = {"error": "No suggestions available"}
        
        # Check reply-all
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        # Generate recommendations
        recommendations = []
        
        if engagement_data and "best_hours" in engagement_data:
            best_hour = engagement_data["best_hours"][0]
            recommendations.append(f"Send at {best_hour['hour']}:00 for {best_hour['open_rate']}% open rate")
        
        if scheduling["avoid_weekends"]:
            recommendations.append("Avoid weekends for business emails")
        
        if time_to_send.get("urgency") == "immediate":
            recommendations.append("Send within 2 hours for optimal engagement")
        
        result = {
            "engine": "V441 Scheduling Optimizer",
            "timestamp": datetime.now().isoformat(),
            "scheduling": scheduling,
            "engagement_analysis": engagement_data,
            "time_to_send": time_to_send,
            "recommendations": recommendations,
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Scheduling recommendation for {len(all_recipients)} recipients" if should_reply_all else "Single recipient scheduling"
        }
        
        return result


if __name__ == "__main__":
    test_email = {
        "sender": "sales@company.com",
        "subject": "Business Proposal - Q1 2024",
        "body": "Hi team, I'd like to schedule a meeting at 2 PM EST to discuss the proposal.",
        "to": ["client@example.com", "manager@client.com"],
        "cc": ["team@company.com"]
    }
    
    test_history = [
        {"sent_at": "2024-01-10T10:00:00Z", "opened_at": "2024-01-10T10:15:00Z"},
        {"sent_at": "2024-01-11T14:00:00Z", "opened_at": "2024-01-11T14:05:00Z"},
        {"sent_at": "2024-01-12T15:00:00Z", "opened_at": "2024-01-12T15:10:00Z"},
        {"sent_at": "2024-01-13T09:00:00Z", "opened_at": None},
        {"sent_at": "2024-01-14T16:00:00Z", "opened_at": "2024-01-14T16:30:00Z"}
    ]
    
    optimizer = V441SchedulingOptimizer()
    result = optimizer.process(test_email, test_history)
    print(json.dumps(result, indent=2))
