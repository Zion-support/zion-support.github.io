"""
Email Intelligence V328 - Conversation Summarizer Pro
Generates executive summaries of long email threads with decision points,
action items, key participants, and timeline visualization.
Enforces reply-all and case-by-case analysis.
"""

from datetime import datetime
from typing import Dict, List
import json
import re


class EmailConversationSummarizerPro:
    """
    V328: Executive summaries of email threads with decisions, actions,
    participants, and timeline for quick context switching.
    """
    
    VERSION = "V328"
    ENGINE_NAME = "Conversation Summarizer Pro"
    
    def __init__(self):
        self.thread_cache = {}
    
    def analyze_thread(self, thread: List[Dict]) -> Dict:
        """Analyze entire email thread and generate executive summary."""
        if not thread:
            return {'error': 'Empty thread'}
        
        total_emails = len(thread)
        
        # Extract participants
        participants = self._extract_participants(thread)
        
        # Extract decision points
        decisions = self._extract_decisions(thread)
        
        # Extract action items
        actions = self._extract_action_items(thread)
        
        # Build timeline
        timeline = self._build_timeline(thread)
        
        # Identify key topics
        topics = self._identify_topics(thread)
        
        # Calculate thread health
        health = self._assess_thread_health(thread, decisions, actions)
        
        # Generate executive summary
        executive_summary = self._generate_executive_summary(
            thread, participants, decisions, actions, topics
        )
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'thread_stats': {
                'total_emails': total_emails,
                'participants': participants,
                'duration': self._calculate_duration(thread),
                'topics': topics
            },
            'decisions': decisions,
            'action_items': actions,
            'timeline': timeline,
            'thread_health': health,
            'executive_summary': executive_summary
        }
        
        return analysis
    
    def analyze_email(self, email_data: Dict) -> Dict:
        """Analyze single email as part of thread context."""
        content = email_data.get('body', '')
        subject = email_data.get('subject', '')
        sender = email_data.get('from', '')
        
        # Extract key elements
        decisions = self._extract_decisions_from_text(content)
        actions = self._extract_actions_from_text(content)
        questions = self._extract_questions(content)
        sentiment = self._analyze_sentiment(content)
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'sender': sender,
            'subject': subject,
            'decisions_found': decisions,
            'action_items_found': actions,
            'questions_found': questions,
            'sentiment': sentiment,
            'summary': self._summarize_email(content)
        }
        
        return analysis
    
    def generate_response(self, email_data: Dict) -> Dict:
        """Generate response with summary context. ALWAYS enforces reply-all."""
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        
        # Analyze email
        analysis = self.analyze_email(email_data)
        
        # ENFORCE REPLY-ALL
        all_recipients = self._enforce_reply_all(to_recipients, cc_recipients, sender)
        
        # Generate response with summary
        response_body = self._generate_summary_response(sender, analysis)
        
        response = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'to': all_recipients,
            'subject': f"Re: {subject}" if not subject.lower().startswith('re:') else subject,
            'body': response_body,
            'decisions_acknowledged': len(analysis['decisions_found']),
            'actions_tracked': len(analysis['action_items_found']),
            'questions_noted': len(analysis['questions_found']),
            'reply_all_enforced': True
        }
        
        return response
    
    def _extract_participants(self, thread: List[Dict]) -> Dict:
        """Extract all participants from thread"""
        participants = set()
        sender_count = {}
        
        for email in thread:
            sender = email.get('from', '')
            participants.add(sender)
            sender_count[sender] = sender_count.get(sender, 0) + 1
            
            for recipient in email.get('to', []):
                participants.add(recipient)
            for cc in email.get('cc', []):
                participants.add(cc)
        
        return {
            'total': len(participants),
            'active_senders': sender_count,
            'most_active': max(sender_count, key=sender_count.get) if sender_count else None,
            'list': list(participants)
        }
    
    def _extract_decisions(self, thread: List[Dict]) -> List[Dict]:
        """Extract decision points from thread"""
        decisions = []
        
        for email in thread:
            content = email.get('body', '')
            email_decisions = self._extract_decisions_from_text(content)
            
            for decision in email_decisions:
                decisions.append({
                    'decision': decision,
                    'made_by': email.get('from', ''),
                    'timestamp': email.get('timestamp', ''),
                    'email_subject': email.get('subject', '')
                })
        
        return decisions
    
    def _extract_decisions_from_text(self, text: str) -> List[str]:
        """Extract decisions from text"""
        decisions = []
        
        decision_patterns = [
            r'(?:we|I) (?:have )?decided (?:to|that) (.+?)[.]',
            r'(?:the )?decision (?:is|was) (.+?)[.]',
            r'(?:we|I) will (.+?)[.]',
            r'let\'s (.+?)[.]',
            r'agreed (?:to|that) (.+?)[.]'
        ]
        
        for pattern in decision_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            decisions.extend(matches)
        
        return decisions[:5]  # Limit to 5 decisions
    
    def _extract_action_items(self, thread: List[Dict]) -> List[Dict]:
        """Extract action items from thread"""
        actions = []
        
        for email in thread:
            content = email.get('body', '')
            email_actions = self._extract_actions_from_text(content)
            
            for action in email_actions:
                actions.append({
                    'action': action,
                    'requested_by': email.get('from', ''),
                    'timestamp': email.get('timestamp', ''),
                    'status': 'pending'
                })
        
        return actions
    
    def _extract_actions_from_text(self, text: str) -> List[str]:
        """Extract action items from text"""
        actions = []
        
        action_patterns = [
            r'(?:please|could you|can you) (.+?)[.?]',
            r'(?:we need to|need to) (.+?)[.]',
            r'action(?: item)?: (.+?)[.]',
            r'todo: (.+?)[.]',
            r'(?:I|you|we) (?:should|must) (.+?)[.]'
        ]
        
        for pattern in action_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            actions.extend(matches)
        
        return actions[:5]  # Limit to 5 actions
    
    def _extract_questions(self, text: str) -> List[str]:
        """Extract questions from text"""
        questions = re.findall(r'[^.!?]*\?[^.!?]*', text)
        return [q.strip() for q in questions[:5]]
    
    def _build_timeline(self, thread: List[Dict]) -> List[Dict]:
        """Build timeline of thread"""
        timeline = []
        
        for i, email in enumerate(thread):
            timeline.append({
                'sequence': i + 1,
                'timestamp': email.get('timestamp', ''),
                'from': email.get('from', ''),
                'subject': email.get('subject', ''),
                'preview': email.get('body', '')[:100] + '...' if len(email.get('body', '')) > 100 else email.get('body', '')
            })
        
        return timeline
    
    def _identify_topics(self, thread: List[Dict]) -> List[str]:
        """Identify key topics in thread"""
        all_text = ' '.join([email.get('body', '') for email in thread])
        
        # Simple topic extraction (in production, use NLP)
        topic_keywords = {
            'project': ['project', 'milestone', 'deadline', 'deliverable'],
            'budget': ['budget', 'cost', 'expense', 'financial'],
            'timeline': ['timeline', 'schedule', 'date', 'deadline'],
            'resources': ['resource', 'team', 'staff', 'personnel'],
            'technical': ['technical', 'system', 'software', 'code'],
            'strategy': ['strategy', 'plan', 'approach', 'method']
        }
        
        topics = []
        for topic, keywords in topic_keywords.items():
            if any(kw in all_text.lower() for kw in keywords):
                topics.append(topic)
        
        return topics[:5]
    
    def _assess_thread_health(self, thread: List[Dict], decisions: List, actions: List) -> Dict:
        """Assess thread health"""
        total_emails = len(thread)
        
        # Health factors
        has_decisions = len(decisions) > 0
        has_actions = len(actions) > 0
        reasonable_length = total_emails <= 20
        
        if has_decisions and has_actions and reasonable_length:
            status = 'healthy'
            score = 90
        elif has_decisions or has_actions:
            status = 'productive'
            score = 70
        elif total_emails > 20:
            status = 'bloated'
            score = 40
        else:
            status = 'developing'
            score = 60
        
        return {
            'status': status,
            'score': score,
            'has_decisions': has_decisions,
            'has_actions': has_actions,
            'length_appropriate': reasonable_length
        }
    
    def _calculate_duration(self, thread: List[Dict]) -> str:
        """Calculate thread duration"""
        if len(thread) < 2:
            return 'single email'
        
        # Simple duration calculation
        return f"{len(thread)} emails over thread"
    
    def _analyze_sentiment(self, text: str) -> str:
        """Simple sentiment analysis"""
        positive = ['great', 'excellent', 'good', 'thanks', 'appreciate', 'happy']
        negative = ['problem', 'issue', 'concern', 'worried', 'disappointed', 'frustrated']
        
        text_lower = text.lower()
        
        pos_count = sum(1 for word in positive if word in text_lower)
        neg_count = sum(1 for word in negative if word in text_lower)
        
        if pos_count > neg_count:
            return 'positive'
        elif neg_count > pos_count:
            return 'negative'
        else:
            return 'neutral'
    
    def _summarize_email(self, content: str) -> str:
        """Generate brief summary of email"""
        sentences = content.split('.')
        if len(sentences) > 2:
            return sentences[0].strip() + '. ' + sentences[1].strip() + '.'
        return content[:200] + '...' if len(content) > 200 else content
    
    def _generate_executive_summary(
        self, thread: List[Dict], participants: Dict,
        decisions: List, actions: List, topics: List
    ) -> str:
        """Generate executive summary"""
        summary = f"""EXECUTIVE SUMMARY

Thread Overview:
- Total Emails: {len(thread)}
- Participants: {participants['total']}
- Key Topics: {', '.join(topics) if topics else 'General discussion'}

Key Decisions ({len(decisions)}):
"""
        
        for i, decision in enumerate(decisions[:3], 1):
            summary += f"{i}. {decision['decision']} (by {decision['made_by']})\n"
        
        summary += f"\nAction Items ({len(actions)}):\n"
        
        for i, action in enumerate(actions[:3], 1):
            summary += f"{i}. {action['action']} (requested by {action['requested_by']})\n"
        
        summary += f"\nThread Health: {len(decisions)} decisions made, {len(actions)} actions tracked"
        
        return summary
    
    def _generate_summary_response(self, sender: str, analysis: Dict) -> str:
        """Generate response with summary context"""
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        response = f"""Hello {sender_name},

Thank you for your email. I've reviewed the content and noted the following:

- {len(analysis['decisions_found'])} decision point(s) identified
- {len(analysis['action_items_found'])} action item(s) to track
- {len(analysis['questions_found'])} question(s) to address

Summary: {analysis['summary']}

I'll respond to each point accordingly and ensure all action items are tracked.

Best regards,
[Your Name]

---
This response was generated by {self.ENGINE_NAME} ({self.VERSION}) with conversation summarization.
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


# Test the engine
if __name__ == "__main__":
    engine = EmailConversationSummarizerPro()
    
    # Test email
    test_email = {
        'from': 'project.manager@company.com',
        'to': ['team@company.com', 'stakeholders@company.com'],
        'cc': ['executives@company.com'],
        'subject': 'Project Alpha - Status Update',
        'body': 'Team, we have decided to launch Project Alpha on March 15th. Please complete the testing by March 10th. Can you confirm the resource allocation? The budget is approved.',
        'timestamp': datetime.now().isoformat()
    }
    
    print("=" * 60)
    print(f"Email Intelligence {engine.VERSION} - {engine.ENGINE_NAME}")
    print("=" * 60)
    
    # Analyze email
    analysis = engine.analyze_email(test_email)
    print("\n📧 Email Analysis:")
    print(json.dumps(analysis, indent=2))
    
    # Generate response
    response = engine.generate_response(test_email)
    print("\n📤 Generated Response:")
    print(json.dumps(response, indent=2))
    
    print("\n✅ Reply-All Enforcement: ACTIVE")
    print(f"✅ Recipients: {response['to']}")
    print("✅ Conversation Summarization: ENABLED")
