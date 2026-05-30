"""
Email Intelligence V329 - Productivity Optimizer
Analyzes email habits, identifies time-wasters, suggests batching strategies,
focus mode scheduling, and provides personalized productivity recommendations.
Enforces reply-all and case-by-case analysis.
"""

from datetime import datetime
from typing import Dict, List
import json


class EmailProductivityOptimizer:
    """
    V329: Analyzes email habits, suggests batching, focus modes, and
    personalized productivity improvements with measurable results.
    """
    
    VERSION = "V329"
    ENGINE_NAME = "Productivity Optimizer"
    
    def __init__(self):
        self.email_patterns = {}
        self.productivity_log = []
    
    def analyze_email(self, email_data: Dict) -> Dict:
        """Analyze email for productivity impact case-by-case."""
        sender = email_data.get('from', '')
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # Classify email type
        email_type = self._classify_email_type(subject, content)
        
        # Estimate time cost
        time_cost = self._estimate_time_cost(content, email_type)
        
        # Determine if batchable
        batch_recommendation = self._assess_batchability(email_type, sender)
        
        # Focus mode suggestion
        focus_suggestion = self._suggest_focus_mode(email_type, time_cost)
        
        # Productivity score
        productivity_score = self._calculate_productivity_score(email_type, time_cost)
        
        # Optimization recommendations
        recommendations = self._generate_recommendations(email_type, time_cost, batch_recommendation)
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': timestamp,
            'sender': sender,
            'email_type': email_type,
            'time_cost_minutes': time_cost,
            'batch_recommendation': batch_recommendation,
            'focus_suggestion': focus_suggestion,
            'productivity_score': productivity_score,
            'recommendations': recommendations
        }
        
        self._log_pattern(analysis)
        
        return analysis
    
    def generate_response(self, email_data: Dict) -> Dict:
        """Generate productivity-optimized response. ALWAYS enforces reply-all."""
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        
        # Analyze email
        analysis = self.analyze_email(email_data)
        
        # ENFORCE REPLY-ALL
        all_recipients = self._enforce_reply_all(to_recipients, cc_recipients, sender)
        
        # Generate optimized response
        response_body = self._generate_optimized_response(sender, content, analysis)
        
        response = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'to': all_recipients,
            'subject': f"Re: {subject}" if not subject.lower().startswith('re:') else subject,
            'body': response_body,
            'email_type': analysis['email_type'],
            'time_saved_minutes': max(0, 10 - analysis['time_cost_minutes']),
            'batch_recommended': analysis['batch_recommendation']['should_batch'],
            'focus_mode': analysis['focus_suggestion'],
            'reply_all_enforced': True
        }
        
        return response
    
    def _classify_email_type(self, subject: str, content: str) -> Dict:
        """Classify email by productivity impact"""
        text = f"{subject} {content}".lower()
        
        # High-value types
        high_value_keywords = ['decision', 'approval', 'contract', 'strategy', 'client', 'revenue']
        # Medium-value types
        medium_value_keywords = ['update', 'progress', 'meeting', 'review', 'feedback']
        # Low-value types
        low_value_keywords = ['fyi', 'newsletter', 'announcement', 'reminder', 'notification']
        
        high_score = sum(1 for kw in high_value_keywords if kw in text)
        medium_score = sum(1 for kw in medium_value_keywords if kw in text)
        low_score = sum(1 for kw in low_value_keywords if kw in text)
        
        if high_score > medium_score and high_score > low_score:
            return {'type': 'high_value', 'priority': 'immediate', 'score': high_score}
        elif medium_score > low_score:
            return {'type': 'medium_value', 'priority': 'scheduled', 'score': medium_score}
        else:
            return {'type': 'low_value', 'priority': 'batch', 'score': low_score}
    
    def _estimate_time_cost(self, content: str, email_type: Dict) -> float:
        """Estimate time cost in minutes"""
        word_count = len(content.split())
        
        # Base reading time (200 wpm)
        reading_time = word_count / 200
        
        # Processing time based on type
        if email_type['type'] == 'high_value':
            processing_time = 5
        elif email_type['type'] == 'medium_value':
            processing_time = 3
        else:
            processing_time = 1
        
        return round(reading_time + processing_time, 1)
    
    def _assess_batchability(self, email_type: Dict, sender: str) -> Dict:
        """Assess if email can be batched"""
        batchable_types = ['low_value', 'newsletter', 'notification', 'fyi']
        
        should_batch = email_type['type'] in batchable_types or email_type['score'] == 0
        
        if should_batch:
            suggested_batch_time = '10:00 AM or 3:00 PM'
            batch_size = 5
        else:
            suggested_batch_time = None
            batch_size = 1
        
        return {
            'should_batch': should_batch,
            'suggested_batch_time': suggested_batch_time,
            'optimal_batch_size': batch_size,
            'reason': 'Low priority email suitable for batch processing' if should_batch else 'High priority requires immediate attention'
        }
    
    def _suggest_focus_mode(self, email_type: Dict, time_cost: float) -> Dict:
        """Suggest focus mode for email processing"""
        if email_type['type'] == 'high_value':
            return {
                'mode': 'deep_focus',
                'duration_minutes': 25,
                'distractions': 'block_all',
                'reason': 'High-value email requires deep focus'
            }
        elif time_cost > 5:
            return {
                'mode': 'focused',
                'duration_minutes': 15,
                'distractions': 'minimize',
                'reason': 'Moderate complexity requires focused attention'
            }
        else:
            return {
                'mode': 'quick_processing',
                'duration_minutes': 5,
                'distractions': 'normal',
                'reason': 'Simple email can be processed quickly'
            }
    
    def _calculate_productivity_score(self, email_type: Dict, time_cost: float) -> float:
        """Calculate productivity impact score (0-100)"""
        base_score = 50
        
        if email_type['type'] == 'high_value':
            base_score += 30
        elif email_type['type'] == 'medium_value':
            base_score += 10
        else:
            base_score -= 20
        
        # Time efficiency bonus
        if time_cost < 3:
            base_score += 10
        elif time_cost > 10:
            base_score -= 10
        
        return min(100, max(0, base_score))
    
    def _generate_recommendations(self, email_type: Dict, time_cost: float, batch_rec: Dict) -> List[str]:
        """Generate productivity recommendations"""
        recommendations = []
        
        if batch_rec['should_batch']:
            recommendations.append(f"Batch this email with similar messages at {batch_rec['suggested_batch_time']}")
        
        if email_type['type'] == 'high_value':
            recommendations.append("Schedule dedicated time for high-value emails")
            recommendations.append("Use deep focus mode to minimize distractions")
        
        if time_cost > 5:
            recommendations.append("Consider delegating or breaking into smaller tasks")
        
        if email_type['type'] == 'low_value':
            recommendations.append("Set up filters to auto-archive similar emails")
        
        recommendations.append("Track time spent on emails to identify patterns")
        
        return recommendations
    
    def _log_pattern(self, analysis: Dict):
        """Log email pattern for analysis"""
        self.productivity_log.append({
            'timestamp': analysis['timestamp'],
            'email_type': analysis['email_type']['type'],
            'time_cost': analysis['time_cost_minutes'],
            'productivity_score': analysis['productivity_score']
        })
        
        if len(self.productivity_log) > 1000:
            self.productivity_log = self.productivity_log[-1000:]
    
    def _generate_optimized_response(self, sender: str, content: str, analysis: Dict) -> str:
        """Generate productivity-optimized response"""
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        email_type = analysis['email_type']['type']
        
        if email_type == 'high_value':
            opening = f"Dear {sender_name},\n\nThank you for this important communication. I've given it my full attention."
        elif email_type == 'medium_value':
            opening = f"Hello {sender_name},\n\nThank you for your email."
        else:
            opening = f"Hi {sender_name},\n\nThanks for the update."
        
        response = f"""{opening}

I've reviewed your message and will respond appropriately based on its priority level.

Email Type: {email_type.replace('_', ' ').title()}
Estimated Processing Time: {analysis['time_cost_minutes']} minutes

Best regards,
[Your Name]

---
This response was optimized by {self.ENGINE_NAME} ({self.VERSION}).
Productivity Score: {analysis['productivity_score']}/100
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
    
    def get_productivity_stats(self) -> Dict:
        """Get productivity statistics"""
        if not self.productivity_log:
            return {
                'version': self.VERSION,
                'engine': self.ENGINE_NAME,
                'message': 'No emails tracked yet'
            }
        
        total_time = sum(e['time_cost'] for e in self.productivity_log)
        avg_score = sum(e['productivity_score'] for e in self.productivity_log) / len(self.productivity_log)
        
        type_counts = {}
        for entry in self.productivity_log:
            email_type = entry['email_type']
            type_counts[email_type] = type_counts.get(email_type, 0) + 1
        
        return {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'total_emails': len(self.productivity_log),
            'total_time_minutes': round(total_time, 1),
            'average_productivity_score': round(avg_score, 2),
            'email_type_distribution': type_counts,
            'timestamp': datetime.now().isoformat()
        }


# Test the engine
if __name__ == "__main__":
    engine = EmailProductivityOptimizer()
    
    test_email = {
        'from': 'ceo@company.com',
        'to': ['team@company.com'],
        'cc': ['board@company.com'],
        'subject': 'Strategic Decision Required - Q4 Revenue Plan',
        'body': 'Team, we need to make a decision on the Q4 revenue strategy. Please review the attached proposal and provide your approval by Friday.',
        'timestamp': datetime.now().isoformat()
    }
    
    print("=" * 60)
    print(f"Email Intelligence {engine.VERSION} - {engine.ENGINE_NAME}")
    print("=" * 60)
    
    analysis = engine.analyze_email(test_email)
    print("\n📧 Email Analysis:")
    print(json.dumps(analysis, indent=2))
    
    response = engine.generate_response(test_email)
    print("\n📤 Generated Response:")
    print(json.dumps(response, indent=2))
    
    stats = engine.get_productivity_stats()
    print("\n📊 Productivity Statistics:")
    print(json.dumps(stats, indent=2))
    
    print("\n✅ Reply-All Enforcement: ACTIVE")
    print(f"✅ Recipients: {response['to']}")
    print("✅ Productivity Optimization: ENABLED")
