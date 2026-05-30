"""
Email Intelligence V337 - Priority Optimizer
Intelligent priority scoring and inbox organization with smart categorization,
urgency detection, and automated priority assignment.
Enforces reply-all and case-by-case analysis.
"""

from datetime import datetime
from typing import Dict, List
import json


class EmailPriorityOptimizer:
    """
    V337: Intelligent priority scoring with smart categorization, urgency detection,
    and automated inbox organization for optimal productivity.
    """
    
    VERSION = "V337"
    ENGINE_NAME = "Priority Optimizer"
    
    def __init__(self):
        self.priority_rules = {}
        self.inbox_organization = {}
    
    def analyze_email(self, email_data: Dict) -> Dict:
        """Analyze email priority case-by-case."""
        sender = email_data.get('from', '')
        content = email_data.get('body', '')
        subject = email_data.get('subject', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # Calculate priority score
        priority_score = self._calculate_priority_score(email_data)
        
        # Determine priority level
        priority_level = self._determine_priority_level(priority_score)
        
        # Categorize email
        category = self._categorize_email(email_data)
        
        # Detect urgency
        urgency = self._detect_urgency(content, subject)
        
        # Suggested action
        suggested_action = self._suggest_action(priority_level, urgency, category)
        
        # Time to respond
        response_time = self._suggest_response_time(priority_level, urgency)
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': timestamp,
            'sender': sender,
            'priority_score': priority_score,
            'priority_level': priority_level,
            'category': category,
            'urgency': urgency,
            'suggested_action': suggested_action,
            'response_time': response_time
        }
        
        # Organize inbox
        self._organize_inbox(sender, analysis)
        
        return analysis
    
    def generate_response(self, email_data: Dict) -> Dict:
        """Generate priority-aware response. ALWAYS enforces reply-all."""
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        
        # Analyze email
        analysis = self.analyze_email(email_data)
        
        # ENFORCE REPLY-ALL
        all_recipients = self._enforce_reply_all(to_recipients, cc_recipients, sender)
        
        # Generate priority-aware response
        response_body = self._generate_priority_response(sender, content, analysis)
        
        response = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'to': all_recipients,
            'subject': f"Re: {subject}" if not subject.lower().startswith('re:') else subject,
            'body': response_body,
            'priority_level': analysis['priority_level'],
            'priority_score': analysis['priority_score'],
            'category': analysis['category'],
            'reply_all_enforced': True
        }
        
        return response
    
    def _calculate_priority_score(self, email_data: Dict) -> float:
        """Calculate priority score (0-100)"""
        score = 50  # Base score
        
        sender = email_data.get('from', '').lower()
        subject = email_data.get('subject', '').lower()
        content = email_data.get('body', '').lower()
        
        # Sender importance
        important_senders = ['ceo', 'cfo', 'cto', 'president', 'director', 'manager', 'client']
        if any(imp in sender for imp in important_senders):
            score += 20
        
        # Subject keywords
        high_priority_keywords = ['urgent', 'critical', 'asap', 'immediately', 'emergency']
        medium_priority_keywords = ['important', 'priority', 'deadline', 'review']
        
        if any(kw in subject for kw in high_priority_keywords):
            score += 25
        elif any(kw in subject for kw in medium_priority_keywords):
            score += 10
        
        # Content analysis
        if any(kw in content for kw in high_priority_keywords):
            score += 15
        
        # Length consideration (very short or very long might be important)
        word_count = len(content.split())
        if word_count < 50:
            score += 5  # Short, direct message
        elif word_count > 500:
            score += 5  # Detailed, important message
        
        return min(100, max(0, score))
    
    def _determine_priority_level(self, score: float) -> str:
        """Determine priority level from score"""
        if score >= 80:
            return 'critical'
        elif score >= 60:
            return 'high'
        elif score >= 40:
            return 'medium'
        else:
            return 'low'
    
    def _categorize_email(self, email_data: Dict) -> Dict:
        """Categorize email by type"""
        content = email_data.get('body', '').lower()
        subject = email_data.get('subject', '').lower()
        text = f"{subject} {content}"
        
        categories = {
            'action_required': ['please', 'need', 'action', 'required', 'complete'],
            'information': ['fyi', 'update', 'info', 'announcement'],
            'meeting': ['meeting', 'agenda', 'schedule', 'calendar'],
            'project': ['project', 'milestone', 'deliverable', 'deadline'],
            'sales': ['deal', 'proposal', 'contract', 'client', 'revenue'],
            'support': ['issue', 'problem', 'help', 'ticket', 'bug']
        }
        
        detected_categories = []
        for category, keywords in categories.items():
            if any(kw in text for kw in keywords):
                detected_categories.append(category)
        
        primary_category = detected_categories[0] if detected_categories else 'general'
        
        return {
            'primary': primary_category,
            'all_categories': detected_categories,
            'confidence': len(detected_categories) > 0
        }
    
    def _detect_urgency(self, content: str, subject: str) -> Dict:
        """Detect urgency level"""
        text = f"{subject} {content}".lower()
        
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
        
        return {
            'level': urgency_level,
            'scores': urgency_scores,
            'is_urgent': urgency_level in ['critical', 'high']
        }
    
    def _suggest_action(self, priority_level: str, urgency: Dict, category: Dict) -> Dict:
        """Suggest action based on analysis"""
        if priority_level == 'critical' or urgency['level'] == 'critical':
            action = 'respond_immediately'
            timeframe = 'within 15 minutes'
        elif priority_level == 'high' or urgency['level'] == 'high':
            action = 'respond_soon'
            timeframe = 'within 1 hour'
        elif priority_level == 'medium':
            action = 'respond_today'
            timeframe = 'within 4 hours'
        else:
            action = 'respond_when_convenient'
            timeframe = 'within 24 hours'
        
        # Category-specific actions
        category_actions = {
            'action_required': 'Take action and respond',
            'information': 'Review and acknowledge if needed',
            'meeting': 'Confirm attendance',
            'project': 'Update project status',
            'sales': 'Follow up on opportunity',
            'support': 'Resolve issue and respond'
        }
        
        return {
            'action': action,
            'timeframe': timeframe,
            'category_action': category_actions.get(category['primary'], 'Review and respond'),
            'should_delegate': priority_level == 'low' and category['primary'] == 'information'
        }
    
    def _suggest_response_time(self, priority_level: str, urgency: Dict) -> Dict:
        """Suggest optimal response time"""
        if priority_level == 'critical' or urgency['level'] == 'critical':
            minutes = 15
            priority = 'immediate'
        elif priority_level == 'high' or urgency['level'] == 'high':
            minutes = 60
            priority = 'urgent'
        elif priority_level == 'medium':
            minutes = 240
            priority = 'normal'
        else:
            minutes = 1440  # 24 hours
            priority = 'low'
        
        return {
            'minutes': minutes,
            'priority': priority,
            'deadline': (datetime.now() + __import__('datetime').timedelta(minutes=minutes)).isoformat()
        }
    
    def _organize_inbox(self, sender: str, analysis: Dict):
        """Organize inbox based on analysis"""
        if sender not in self.inbox_organization:
            self.inbox_organization[sender] = []
        
        self.inbox_organization[sender].append({
            'timestamp': analysis['timestamp'],
            'priority_level': analysis['priority_level'],
            'category': analysis['category']['primary'],
            'urgency': analysis['urgency']['level']
        })
    
    def _generate_priority_response(self, sender: str, content: str, analysis: Dict) -> str:
        """Generate priority-aware response"""
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        priority = analysis['priority_level']
        urgency = analysis['urgency']['level']
        
        if priority == 'critical' or urgency == 'critical':
            opening = f"Dear {sender_name},\n\nI'm responding immediately to your urgent message."
        elif priority == 'high' or urgency == 'high':
            opening = f"Hello {sender_name},\n\nThank you for your important message. I'm prioritizing this."
        else:
            opening = f"Hi {sender_name},\n\nThank you for your email."
        
        response = f"""{opening}

I've analyzed your email and here's the priority assessment:

Priority Analysis:
- Priority Level: {priority.title()} (Score: {analysis['priority_score']}/100)
- Urgency: {urgency.title()}
- Category: {analysis['category']['primary'].replace('_', ' ').title()}
- Suggested Action: {analysis['suggested_action']['category_action']}

Response Timeframe: {analysis['suggested_action']['timeframe']}

I'll address your message according to its priority and ensure timely follow-up.

Best regards,
[Your Name]

---
This response was generated by {self.ENGINE_NAME} ({self.VERSION}) with priority optimization.
Priority: {priority} | Urgency: {urgency} | Category: {analysis['category']['primary']}
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
    
    def get_priority_stats(self) -> Dict:
        """Get priority statistics"""
        total_organized = sum(len(org) for org in self.inbox_organization.values())
        
        if total_organized == 0:
            return {
                'version': self.VERSION,
                'engine': self.ENGINE_NAME,
                'message': 'No emails organized yet'
            }
        
        # Calculate priority distribution
        priority_counts = {'critical': 0, 'high': 0, 'medium': 0, 'low': 0}
        category_counts = {}
        
        for org_list in self.inbox_organization.values():
            for entry in org_list:
                priority_counts[entry['priority_level']] += 1
                category = entry['category']
                category_counts[category] = category_counts.get(category, 0) + 1
        
        return {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'total_emails_organized': total_organized,
            'priority_distribution': priority_counts,
            'category_distribution': category_counts,
            'senders_tracked': len(self.inbox_organization),
            'timestamp': datetime.now().isoformat()
        }


# Test the engine
if __name__ == "__main__":
    engine = EmailPriorityOptimizer()
    
    # Test high priority email
    high_priority_email = {
        'from': 'ceo@company.com',
        'to': ['team@company.com'],
        'cc': ['board@company.com'],
        'subject': 'URGENT: Critical Issue - Immediate Action Required',
        'body': 'Team, we have a critical issue that needs immediate attention. Please review and respond ASAP.',
        'timestamp': datetime.now().isoformat()
    }
    
    print("=" * 60)
    print(f"Email Intelligence {engine.VERSION} - {engine.ENGINE_NAME}")
    print("=" * 60)
    
    analysis = engine.analyze_email(high_priority_email)
    print("\n📧 High Priority Email Analysis:")
    print(json.dumps(analysis, indent=2))
    
    response = engine.generate_response(high_priority_email)
    print("\n📤 Generated Response:")
    print(json.dumps(response, indent=2))
    
    stats = engine.get_priority_stats()
    print("\n📊 Priority Statistics:")
    print(json.dumps(stats, indent=2))
    
    print("\n✅ Reply-All Enforcement: ACTIVE")
    print(f"✅ Recipients: {response['to']}")
    print("✅ Priority Optimization: ENABLED")
