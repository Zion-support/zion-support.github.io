"""
Email Intelligence V339 - Response Time Optimizer
Optimal response timing based on recipient patterns, timezone analysis,
and engagement data for maximum impact.
Enforces reply-all and case-by-case analysis.
"""

from datetime import datetime, timedelta
from typing import Dict, List
import json


class EmailResponseTimeOptimizer:
    """
    V339: Intelligent response timing optimization based on recipient patterns,
    timezone analysis, and engagement data for maximum impact.
    """
    
    VERSION = "V339"
    ENGINE_NAME = "Response Time Optimizer"
    
    def __init__(self):
        self.recipient_patterns = {}
        self.response_history = []
    
    def analyze_email(self, email_data: Dict) -> Dict:
        """Analyze email for optimal response timing case-by-case."""
        sender = email_data.get('from', '')
        content = email_data.get('body', '')
        subject = email_data.get('subject', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # Analyze sender patterns
        sender_patterns = self._analyze_sender_patterns(sender)
        
        # Detect timezone
        timezone_info = self._detect_timezone(email_data)
        
        # Calculate optimal response time
        optimal_time = self._calculate_optimal_response_time(sender, email_data)
        
        # Engagement prediction
        engagement_prediction = self._predict_engagement(optimal_time, sender)
        
        # Response urgency
        urgency = self._assess_response_urgency(email_data)
        
        # Timing recommendations
        recommendations = self._generate_timing_recommendations(optimal_time, urgency, sender_patterns)
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': timestamp,
            'sender': sender,
            'sender_patterns': sender_patterns,
            'timezone_info': timezone_info,
            'optimal_response_time': optimal_time,
            'engagement_prediction': engagement_prediction,
            'urgency': urgency,
            'recommendations': recommendations
        }
        
        # Track response
        self._track_response_pattern(sender, analysis)
        
        return analysis
    
    def generate_response(self, email_data: Dict) -> Dict:
        """Generate time-optimized response. ALWAYS enforces reply-all."""
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        
        # Analyze email
        analysis = self.analyze_email(email_data)
        
        # ENFORCE REPLY-ALL
        all_recipients = self._enforce_reply_all(to_recipients, cc_recipients, sender)
        
        # Generate time-optimized response
        response_body = self._generate_time_optimized_response(sender, content, analysis)
        
        response = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'to': all_recipients,
            'subject': f"Re: {subject}" if not subject.lower().startswith('re:') else subject,
            'body': response_body,
            'optimal_send_time': analysis['optimal_response_time']['recommended_time'],
            'engagement_prediction': analysis['engagement_prediction']['predicted_rate'],
            'urgency_level': analysis['urgency']['level'],
            'reply_all_enforced': True
        }
        
        return response
    
    def _analyze_sender_patterns(self, sender: str) -> Dict:
        """Analyze sender's email patterns"""
        history = self.recipient_patterns.get(sender, [])
        
        if not history:
            return {
                'typical_response_hours': [9, 10, 14, 15],
                'most_active_days': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                'preferred_time': 'morning',
                'response_rate': 0.7
            }
        
        # Calculate patterns from history
        hours = [h['hour'] for h in history if 'hour' in h]
        days = [d['day'] for d in history if 'day' in d]
        
        # Find most common hours
        hour_counts = {}
        for hour in hours:
            hour_counts[hour] = hour_counts.get(hour, 0) + 1
        
        typical_hours = sorted(hour_counts, key=hour_counts.get, reverse=True)[:4]
        
        # Find most common days
        day_counts = {}
        for day in days:
            day_counts[day] = day_counts.get(day, 0) + 1
        
        typical_days = sorted(day_counts, key=day_counts.get, reverse=True)[:5]
        
        # Determine preferred time
        morning_count = sum(1 for h in hours if 8 <= h < 12)
        afternoon_count = sum(1 for h in hours if 12 <= h < 18)
        
        preferred_time = 'morning' if morning_count > afternoon_count else 'afternoon'
        
        return {
            'typical_response_hours': typical_hours if typical_hours else [9, 10, 14, 15],
            'most_active_days': typical_days if typical_days else ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            'preferred_time': preferred_time,
            'response_rate': min(1.0, len(history) / 10)
        }
    
    def _detect_timezone(self, email_data: Dict) -> Dict:
        """Detect sender's timezone"""
        sender = email_data.get('from', '')
        timestamp = email_data.get('timestamp', '')
        
        # Simple timezone detection based on email domain
        domain = sender.split('@')[-1].lower() if '@' in sender else ''
        
        timezone_map = {
            '.com': 'America/New_York',
            '.co.uk': 'Europe/London',
            '.de': 'Europe/Berlin',
            '.jp': 'Asia/Tokyo',
            '.cn': 'Asia/Shanghai',
            '.in': 'Asia/Kolkata',
            '.br': 'America/Sao_Paulo',
            '.au': 'Australia/Sydney'
        }
        
        detected_tz = 'America/New_York'  # Default
        for tld, tz in timezone_map.items():
            if domain.endswith(tld):
                detected_tz = tz
                break
        
        # Estimate current time in sender's timezone
        now = datetime.now()
        
        return {
            'detected_timezone': detected_tz,
            'confidence': 0.7,
            'estimated_local_time': now.isoformat(),
            'is_business_hours': 9 <= now.hour < 17
        }
    
    def _calculate_optimal_response_time(self, sender: str, email_data: Dict) -> Dict:
        """Calculate optimal response time"""
        now = datetime.now()
        current_hour = now.hour
        current_day = now.strftime('%A')
        
        sender_patterns = self._analyze_sender_patterns(sender)
        
        # Check urgency
        content = email_data.get('body', '').lower()
        subject = email_data.get('subject', '').lower()
        
        urgent_keywords = ['urgent', 'asap', 'immediately', 'critical', 'emergency']
        is_urgent = any(kw in content or kw in subject for kw in urgent_keywords)
        
        if is_urgent:
            # Respond immediately for urgent emails
            recommended_time = now
            reason = 'Urgent email - immediate response recommended'
        elif current_hour < 8 or current_hour > 18:
            # Outside business hours - wait until morning
            recommended_time = now.replace(hour=9, minute=0, second=0, microsecond=0)
            if recommended_time < now:
                recommended_time += timedelta(days=1)
            reason = 'Outside business hours - morning response recommended'
        elif current_day in ['Saturday', 'Sunday']:
            # Weekend - wait until Monday
            days_until_monday = (7 - now.weekday()) % 7
            if days_until_monday == 0:
                days_until_monday = 7
            recommended_time = (now + timedelta(days=days_until_monday)).replace(hour=9, minute=0, second=0, microsecond=0)
            reason = 'Weekend - Monday morning response recommended'
        else:
            # Business hours - respond within optimal window
            optimal_hours = sender_patterns['typical_response_hours']
            
            # Find next optimal hour
            next_optimal = None
            for hour in optimal_hours:
                if hour > current_hour:
                    next_optimal = hour
                    break
            
            if next_optimal:
                recommended_time = now.replace(hour=next_optimal, minute=0, second=0, microsecond=0)
                reason = f'Optimal response time based on sender patterns (hour: {next_optimal})'
            else:
                # Use next day's first optimal hour
                next_day = now + timedelta(days=1)
                recommended_time = next_day.replace(hour=optimal_hours[0], minute=0, second=0, microsecond=0)
                reason = 'Next business day optimal response time'
        
        # Calculate time until optimal response
        time_until = (recommended_time - now).total_seconds() / 3600  # hours
        
        return {
            'recommended_time': recommended_time.isoformat(),
            'reason': reason,
            'time_until_hours': round(time_until, 2),
            'is_immediate': is_urgent or time_until < 0.5
        }
    
    def _predict_engagement(self, optimal_time: Dict, sender: str) -> Dict:
        """Predict engagement rate at optimal time"""
        sender_patterns = self._analyze_sender_patterns(sender)
        
        # Base engagement rate
        base_rate = 0.6
        
        # Adjust based on patterns
        if optimal_time['is_immediate']:
            predicted_rate = base_rate + 0.2  # Immediate responses get higher engagement
        else:
            # Check if it's during sender's active hours
            recommended_hour = datetime.fromisoformat(optimal_time['recommended_time']).hour
            if recommended_hour in sender_patterns['typical_response_hours']:
                predicted_rate = base_rate + 0.15
            else:
                predicted_rate = base_rate
        
        # Adjust based on response rate
        predicted_rate *= sender_patterns['response_rate']
        
        return {
            'predicted_rate': round(min(1.0, predicted_rate), 2),
            'confidence': 0.7,
            'factors': {
                'sender_active_hours': recommended_hour in sender_patterns['typical_response_hours'],
                'immediate_response': optimal_time['is_immediate'],
                'historical_response_rate': sender_patterns['response_rate']
            }
        }
    
    def _assess_response_urgency(self, email_data: Dict) -> Dict:
        """Assess response urgency"""
        content = email_data.get('body', '').lower()
        subject = email_data.get('subject', '').lower()
        text = f"{subject} {content}"
        
        urgency_keywords = {
            'critical': ['emergency', 'critical', 'immediately', 'right now'],
            'high': ['urgent', 'asap', 'today', 'by eod'],
            'medium': ['this week', 'soon', 'when possible'],
            'low': ['no rush', 'when you can', 'eventually']
        }
        
        urgency_scores = {}
        for level, keywords in urgency_keywords.items():
            urgency_scores[level] = sum(1 for kw in keywords if kw in text)
        
        # Determine urgency level
        max_urgency = max(urgency_scores, key=urgency_scores.get)
        urgency_level = max_urgency if urgency_scores[max_urgency] > 0 else 'normal'
        
        # Response time based on urgency
        response_times = {
            'critical': 15,  # minutes
            'high': 60,
            'medium': 240,
            'low': 1440,  # 24 hours
            'normal': 480  # 8 hours
        }
        
        return {
            'level': urgency_level,
            'scores': urgency_scores,
            'recommended_response_minutes': response_times.get(urgency_level, 480),
            'is_urgent': urgency_level in ['critical', 'high']
        }
    
    def _generate_timing_recommendations(self, optimal_time: Dict, urgency: Dict, sender_patterns: Dict) -> List[str]:
        """Generate timing recommendations"""
        recommendations = []
        
        if urgency['is_urgent']:
            recommendations.append('Respond immediately due to urgency')
        elif optimal_time['is_immediate']:
            recommendations.append('Optimal time is now - send response')
        else:
            time_until = optimal_time['time_until_hours']
            if time_until < 1:
                recommendations.append(f'Send within {int(time_until * 60)} minutes for optimal engagement')
            elif time_until < 24:
                recommendations.append(f'Schedule response in {int(time_until)} hours for better engagement')
            else:
                recommendations.append(f'Wait {int(time_until / 24)} day(s) for optimal timing')
        
        # Add pattern-based recommendations
        if sender_patterns['preferred_time'] == 'morning':
            recommendations.append('Sender is most responsive in the morning')
        else:
            recommendations.append('Sender is most responsive in the afternoon')
        
        return recommendations
    
    def _track_response_pattern(self, sender: str, analysis: Dict):
        """Track response patterns"""
        if sender not in self.recipient_patterns:
            self.recipient_patterns[sender] = []
        
        now = datetime.now()
        self.recipient_patterns[sender].append({
            'timestamp': analysis['timestamp'],
            'hour': now.hour,
            'day': now.strftime('%A'),
            'optimal_time': analysis['optimal_response_time']['recommended_time']
        })
        
        # Keep only last 100 entries
        if len(self.recipient_patterns[sender]) > 100:
            self.recipient_patterns[sender] = self.recipient_patterns[sender][-100:]
    
    def _generate_time_optimized_response(self, sender: str, content: str, analysis: Dict) -> str:
        """Generate time-optimized response"""
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        optimal_time = analysis['optimal_response_time']
        urgency = analysis['urgency']
        engagement = analysis['engagement_prediction']
        
        if urgency['is_urgent']:
            opening = f"Dear {sender_name},\n\nI'm responding immediately to your urgent message."
        elif optimal_time['is_immediate']:
            opening = f"Hello {sender_name},\n\nThank you for your email. I'm responding at the optimal time for engagement."
        else:
            opening = f"Hi {sender_name},\n\nThank you for your email."
        
        response = f"""{opening}

I've analyzed the optimal timing for this response:

Response Timing Analysis:
- Urgency Level: {urgency['level'].title()}
- Recommended Response: {optimal_time['reason']}
- Time Until Optimal: {optimal_time['time_until_hours']} hours
- Predicted Engagement: {engagement['predicted_rate'] * 100}%

Timing Recommendations:
{chr(10).join('- ' + rec for rec in analysis['recommendations'])}

I'll ensure this response reaches you at the most effective time for engagement.

Best regards,
[Your Name]

---
This response was generated by {self.ENGINE_NAME} ({self.VERSION}) with timing optimization.
Urgency: {urgency['level']} | Engagement: {engagement['predicted_rate'] * 100}% | Optimal: {optimal_time['is_immediate']}
"""
        
        return response
    
    def _enforce_reply_all(self, to_recipients: List, cc_recipients: List, sender: str) -> List:
        """ENFORCE REPLY-ALL: Always include all original recipients."""
        all_recipients = set()
        
        if isinstance(to_recipients, list):
            all_recipients.update(to_recipients)
        elif to_recipients:
            all_recipients.add(to_recipients)
        
        if isinstance(cc_recipients, list):
            all_recipients.update(cc_recipients)
        elif cc_recipients:
            all_recipients.add(cc_recipients)
        
        all_recipients.discard(sender)
        
        if not all_recipients:
            all_recipients.add(sender)
        
        return list(all_recipients)
    
    def get_timing_stats(self) -> Dict:
        """Get timing statistics"""
        total_tracked = sum(len(patterns) for patterns in self.recipient_patterns.values())
        
        if total_tracked == 0:
            return {
                'version': self.VERSION,
                'engine': self.ENGINE_NAME,
                'message': 'No timing data tracked yet'
            }
        
        # Calculate average response time
        all_hours = []
        for patterns in self.recipient_patterns.values():
            for pattern in patterns:
                if 'hour' in pattern:
                    all_hours.append(pattern['hour'])
        
        avg_hour = sum(all_hours) / len(all_hours) if all_hours else 12
        
        return {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'total_responses_tracked': total_tracked,
            'average_response_hour': round(avg_hour, 2),
            'senders_tracked': len(self.recipient_patterns),
            'timestamp': datetime.now().isoformat()
        }


# Test the engine
if __name__ == "__main__":
    engine = EmailResponseTimeOptimizer()
    
    test_email = {
        'from': 'client@company.com',
        'to': ['team@company.com'],
        'cc': ['manager@company.com'],
        'subject': 'Project Update - Questions',
        'body': 'Hi team, I have some questions about the project timeline. Can you provide an update when you have a chance?',
        'timestamp': datetime.now().isoformat()
    }
    
    print("=" * 60)
    print(f"Email Intelligence {engine.VERSION} - {engine.ENGINE_NAME}")
    print("=" * 60)
    
    analysis = engine.analyze_email(test_email)
    print("\n📧 Response Time Analysis:")
    print(json.dumps(analysis, indent=2))
    
    response = engine.generate_response(test_email)
    print("\n📤 Generated Response:")
    print(json.dumps(response, indent=2))
    
    stats = engine.get_timing_stats()
    print("\n📊 Timing Statistics:")
    print(json.dumps(stats, indent=2))
    
    print("\n✅ Reply-All Enforcement: ACTIVE")
    print(f"✅ Recipients: {response['to']}")
    print("✅ Response Time Optimization: ENABLED")
