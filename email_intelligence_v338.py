"""
Email Intelligence V338 - Thread Analyzer
Deep thread analysis with conversation mapping, participant tracking,
decision extraction, and thread health assessment.
Enforces reply-all and case-by-case analysis.
"""

from datetime import datetime
from typing import Dict, List
import json
import re


class EmailThreadAnalyzer:
    """
    V338: Deep thread analysis with conversation mapping, participant tracking,
    and thread health assessment for better conversation management.
    """
    
    VERSION = "V338"
    ENGINE_NAME = "Thread Analyzer"
    
    def __init__(self):
        self.thread_database = {}
    
    def analyze_email(self, email_data: Dict) -> Dict:
        """Analyze email in thread context case-by-case."""
        sender = email_data.get('from', '')
        content = email_data.get('body', '')
        subject = email_data.get('subject', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # Extract thread ID
        thread_id = self._extract_thread_id(subject)
        
        # Analyze thread position
        thread_position = self._analyze_thread_position(thread_id, email_data)
        
        # Track participants
        participants = self._track_participants(email_data)
        
        # Extract decisions
        decisions = self._extract_decisions(content)
        
        # Extract action items
        action_items = self._extract_action_items(content)
        
        # Thread health
        thread_health = self._assess_thread_health(thread_id)
        
        # Conversation map
        conversation_map = self._build_conversation_map(thread_id)
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': timestamp,
            'sender': sender,
            'thread_id': thread_id,
            'thread_position': thread_position,
            'participants': participants,
            'decisions': decisions,
            'action_items': action_items,
            'thread_health': thread_health,
            'conversation_map': conversation_map
        }
        
        # Store in thread database
        self._store_in_thread(thread_id, analysis)
        
        return analysis
    
    def generate_response(self, email_data: Dict) -> Dict:
        """Generate thread-aware response. ALWAYS enforces reply-all."""
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        
        # Analyze email
        analysis = self.analyze_email(email_data)
        
        # ENFORCE REPLY-ALL
        all_recipients = self._enforce_reply_all(to_recipients, cc_recipients, sender)
        
        # Generate thread-aware response
        response_body = self._generate_thread_response(sender, content, analysis)
        
        response = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'to': all_recipients,
            'subject': f"Re: {subject}" if not subject.lower().startswith('re:') else subject,
            'body': response_body,
            'thread_id': analysis['thread_id'],
            'thread_position': analysis['thread_position']['position'],
            'participants_count': len(analysis['participants']['all_participants']),
            'decisions_found': len(analysis['decisions']),
            'action_items_found': len(analysis['action_items']),
            'reply_all_enforced': True
        }
        
        return response
    
    def _extract_thread_id(self, subject: str) -> str:
        """Extract thread ID from subject"""
        # Remove Re:, Fwd:, etc.
        clean_subject = re.sub(r'^(Re:|Fwd:|FW:)\s*', '', subject, flags=re.IGNORECASE).strip()
        return f"thread_{hash(clean_subject)}"
    
    def _analyze_thread_position(self, thread_id: str, email_data: Dict) -> Dict:
        """Analyze position in thread"""
        thread = self.thread_database.get(thread_id, [])
        
        position = len(thread) + 1
        
        # Determine if this is a reply or new message
        is_reply = 're:' in email_data.get('subject', '').lower()
        
        # Calculate thread depth
        thread_depth = position
        
        return {
            'position': position,
            'is_reply': is_reply,
            'thread_depth': thread_depth,
            'total_messages': position
        }
    
    def _track_participants(self, email_data: Dict) -> Dict:
        """Track all participants in thread"""
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        
        all_participants = set()
        all_participants.add(sender)
        
        if isinstance(to_recipients, list):
            all_participants.update(to_recipients)
        elif to_recipients:
            all_participants.add(to_recipients)
        
        if isinstance(cc_recipients, list):
            all_participants.update(cc_recipients)
        elif cc_recipients:
            all_participants.add(cc_recipients)
        
        return {
            'all_participants': list(all_participants),
            'total_count': len(all_participants),
            'sender': sender,
            'recipients': list(set(all_participants) - {sender})
        }
    
    def _extract_decisions(self, content: str) -> List[Dict]:
        """Extract decisions from email"""
        decisions = []
        
        decision_patterns = [
            r'(?:we|I) (?:have )?decided (?:to|that) (.+?)[.]',
            r'(?:the )?decision (?:is|was) (.+?)[.]',
            r'(?:we|I) will (.+?)[.]',
            r'agreed (?:to|that) (.+?)[.]'
        ]
        
        for pattern in decision_patterns:
            matches = re.findall(pattern, content, re.IGNORECASE)
            for match in matches:
                decisions.append({
                    'decision': match.strip(),
                    'confidence': 0.8
                })
        
        return decisions[:5]  # Limit to 5 decisions
    
    def _extract_action_items(self, content: str) -> List[Dict]:
        """Extract action items from email"""
        action_items = []
        
        action_patterns = [
            r'(?:please|could you|can you) (.+?)[.?]',
            r'(?:we need to|need to) (.+?)[.]',
            r'action(?: item)?: (.+?)[.]',
            r'todo: (.+?)[.]'
        ]
        
        for pattern in action_patterns:
            matches = re.findall(pattern, content, re.IGNORECASE)
            for match in matches:
                action_items.append({
                    'action': match.strip(),
                    'status': 'pending'
                })
        
        return action_items[:5]  # Limit to 5 actions
    
    def _assess_thread_health(self, thread_id: str) -> Dict:
        """Assess thread health"""
        thread = self.thread_database.get(thread_id, [])
        
        if not thread:
            return {
                'status': 'new',
                'score': 100,
                'issues': []
            }
        
        # Check thread length
        thread_length = len(thread)
        
        # Check for decisions
        all_decisions = []
        for entry in thread:
            all_decisions.extend(entry.get('decisions', []))
        
        # Check for action items
        all_actions = []
        for entry in thread:
            all_actions.extend(entry.get('action_items', []))
        
        # Calculate health score
        score = 100
        issues = []
        
        if thread_length > 20:
            score -= 20
            issues.append('Thread is very long - consider summarizing')
        
        if thread_length > 5 and not all_decisions:
            score -= 15
            issues.append('No decisions made yet')
        
        if all_actions:
            pending_actions = [a for a in all_actions if a.get('status') == 'pending']
            if len(pending_actions) > 3:
                score -= 10
                issues.append(f'{len(pending_actions)} pending action items')
        
        status = 'healthy' if score >= 80 else 'needs_attention' if score >= 60 else 'problematic'
        
        return {
            'status': status,
            'score': max(0, score),
            'issues': issues,
            'total_messages': thread_length,
            'total_decisions': len(all_decisions),
            'total_actions': len(all_actions)
        }
    
    def _build_conversation_map(self, thread_id: str) -> Dict:
        """Build conversation map"""
        thread = self.thread_database.get(thread_id, [])
        
        if not thread:
            return {
                'messages': [],
                'timeline': []
            }
        
        messages = []
        timeline = []
        
        for i, entry in enumerate(thread):
            messages.append({
                'position': i + 1,
                'sender': entry.get('sender', ''),
                'timestamp': entry.get('timestamp', ''),
                'has_decisions': len(entry.get('decisions', [])) > 0,
                'has_actions': len(entry.get('action_items', [])) > 0
            })
            
            timeline.append({
                'timestamp': entry.get('timestamp', ''),
                'event': 'message',
                'position': i + 1
            })
        
        return {
            'messages': messages,
            'timeline': timeline,
            'total_messages': len(messages)
        }
    
    def _store_in_thread(self, thread_id: str, analysis: Dict):
        """Store analysis in thread database"""
        if thread_id not in self.thread_database:
            self.thread_database[thread_id] = []
        
        self.thread_database[thread_id].append(analysis)
    
    def _generate_thread_response(self, sender: str, content: str, analysis: Dict) -> str:
        """Generate thread-aware response"""
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        thread_position = analysis['thread_position']['position']
        participants_count = len(analysis['participants']['all_participants'])
        decisions_count = len(analysis['decisions'])
        actions_count = len(analysis['action_items'])
        
        response = f"""Hello {sender_name},

Thank you for your message in this ongoing conversation.

Thread Analysis:
- Thread Position: Message #{thread_position}
- Total Participants: {participants_count}
- Decisions Made: {decisions_count}
- Action Items: {actions_count}
- Thread Health: {analysis['thread_health']['status'].replace('_', ' ').title()}

I've reviewed the conversation context and will respond accordingly to move this discussion forward.

Best regards,
[Your Name]

---
This response was generated by {self.ENGINE_NAME} ({self.VERSION}) with thread intelligence.
Thread ID: {analysis['thread_id']} | Position: {thread_position} | Participants: {participants_count}
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
    
    def get_thread_stats(self) -> Dict:
        """Get thread statistics"""
        total_threads = len(self.thread_database)
        
        if total_threads == 0:
            return {
                'version': self.VERSION,
                'engine': self.ENGINE_NAME,
                'message': 'No threads tracked yet'
            }
        
        # Calculate statistics
        total_messages = sum(len(thread) for thread in self.thread_database.values())
        avg_thread_length = total_messages / total_threads if total_threads > 0 else 0
        
        # Thread health distribution
        health_counts = {'healthy': 0, 'needs_attention': 0, 'problematic': 0}
        for thread in self.thread_database.values():
            if thread:
                last_entry = thread[-1]
                health = last_entry.get('thread_health', {}).get('status', 'healthy')
                health_counts[health] += 1
        
        return {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'total_threads': total_threads,
            'total_messages': total_messages,
            'average_thread_length': round(avg_thread_length, 2),
            'thread_health_distribution': health_counts,
            'timestamp': datetime.now().isoformat()
        }


# Test the engine
if __name__ == "__main__":
    engine = EmailThreadAnalyzer()
    
    test_email = {
        'from': 'project.manager@company.com',
        'to': ['team@company.com'],
        'cc': ['stakeholders@company.com'],
        'subject': 'Re: Project Alpha - Status Update',
        'body': 'Team, we have decided to launch on March 15th. Please complete testing by March 10th. Can you confirm the timeline?',
        'timestamp': datetime.now().isoformat()
    }
    
    print("=" * 60)
    print(f"Email Intelligence {engine.VERSION} - {engine.ENGINE_NAME}")
    print("=" * 60)
    
    analysis = engine.analyze_email(test_email)
    print("\n📧 Thread Analysis:")
    print(json.dumps(analysis, indent=2))
    
    response = engine.generate_response(test_email)
    print("\n📤 Generated Response:")
    print(json.dumps(response, indent=2))
    
    stats = engine.get_thread_stats()
    print("\n📊 Thread Statistics:")
    print(json.dumps(stats, indent=2))
    
    print("\n✅ Reply-All Enforcement: ACTIVE")
    print(f"✅ Recipients: {response['to']}")
    print("✅ Thread Analysis: ENABLED")
