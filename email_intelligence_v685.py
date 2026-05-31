#!/usr/bin/env python3
"""
V685 - Email Thread Summarizer Pro
Generates comprehensive summaries of email threads with key points extraction,
action item tracking, decision logging, and timeline reconstruction.

Key Features:
- Thread summarization with key points
- Action item extraction and tracking
- Decision logging with context
- Timeline reconstruction
- Participant role analysis
- Conversation flow analysis
"""

import json
import re
from datetime import datetime
from collections import defaultdict, Counter
from typing import Dict, List, Optional, Tuple

class EmailThreadSummarizerPro:
    def __init__(self):
        self.threads = defaultdict(list)
        self.summaries = {}
    
    def process_thread_email(self, email: Dict) -> Dict:
        """
        Process an email and add it to its thread
        
        Args:
            email: Email dictionary with subject, body, from, to, timestamp, thread_id
        
        Returns:
            Dict with processing result
        """
        thread_id = email.get('thread_id', email.get('subject', 'default'))
        text = email.get('body', '') + ' ' + email.get('subject', '')
        
        # Extract key information
        key_points = self._extract_key_points(text)
        action_items = self._extract_action_items(text)
        decisions = self._extract_decisions(text)
        questions = self._extract_questions(text)
        
        # Store email in thread
        thread_entry = {
            'email_id': email.get('id', ''),
            'from': email.get('from', ''),
            'to': email.get('to', []),
            'cc': email.get('cc', []),
            'timestamp': email.get('timestamp', datetime.now().isoformat()),
            'subject': email.get('subject', ''),
            'body': email.get('body', ''),
            'key_points': key_points,
            'action_items': action_items,
            'decisions': decisions,
            'questions': questions,
            'reply_all_required': len(email.get('to', []) + email.get('cc', [])) > 1
        }
        
        self.threads[thread_id].append(thread_entry)
        
        return {
            'thread_id': thread_id,
            'email_processed': True,
            'key_points_count': len(key_points),
            'action_items_count': len(action_items),
            'decisions_count': len(decisions),
            'questions_count': len(questions),
            'thread_length': len(self.threads[thread_id])
        }
    
    def _extract_key_points(self, text: str) -> List[str]:
        """Extract key points from email text"""
        key_points = []
        
        # Look for important statements
        important_patterns = [
            r'(?:important|key|critical|essential|vital)[:\s]+([^.!?]+)',
            r'(?:note|please note|fyi)[:\s]+([^.!?]+)',
            r'(?:summary|in summary|to summarize)[:\s]+([^.!?]+)',
            r'(?:conclusion|in conclusion)[:\s]+([^.!?]+)',
            r'(?:main point|key takeaway)[:\s]+([^.!?]+)'
        ]
        
        for pattern in important_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            key_points.extend([m.strip() for m in matches if len(m.strip()) > 10])
        
        # Extract sentences with numbers/metrics
        sentences = text.split('.')
        for sentence in sentences:
            if re.search(r'\d+(?:%|k|m|b)?\b', sentence) and len(sentence.strip()) > 20:
                key_points.append(sentence.strip())
        
        return list(set(key_points))[:10]  # Limit to 10 unique key points
    
    def _extract_action_items(self, text: str) -> List[Dict]:
        """Extract action items from email text"""
        action_items = []
        
        # Action item patterns
        patterns = [
            r'(?:action item|task|todo|to-do)[:\s]+([^.!?]+)',
            r'(?:please|could you|can you)\s+([^.!?]+)',
            r'(?:we need to|we should|we must)\s+([^.!?]+)',
            r'(?:\[ \]|☐)\s+([^.!?]+)',
            r'(?:assigned to|owner|responsible)[:\s]+([^.!?]+)'
        ]
        
        for pattern in patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            for match in matches:
                if len(match.strip()) > 10:
                    # Try to extract assignee
                    assignee_match = re.search(r'(?:@|assigned to|owner[:\s]+)([\w\s]+)', match, re.IGNORECASE)
                    assignee = assignee_match.group(1).strip() if assignee_match else None
                    
                    # Try to extract deadline
                    deadline_match = re.search(r'(?:by|before|due[:\s]+)([^.!?]+)', match, re.IGNORECASE)
                    deadline = deadline_match.group(1).strip() if deadline_match else None
                    
                    action_items.append({
                        'description': match.strip(),
                        'assignee': assignee,
                        'deadline': deadline,
                        'status': 'pending'
                    })
        
        return action_items
    
    def _extract_decisions(self, text: str) -> List[Dict]:
        """Extract decisions from email text"""
        decisions = []
        
        # Decision patterns
        patterns = [
            r'(?:decided|decision|we will|we\'re going to)[:\s]+([^.!?]+)',
            r'(?:approved|approval granted)[:\s]+([^.!?]+)',
            r'(?:agreed|agreement)[:\s]+([^.!?]+)',
            r'(?:final decision|conclusion)[:\s]+([^.!?]+)',
            r'(?:moving forward|going forward)[:\s]+([^.!?]+)'
        ]
        
        for pattern in patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            for match in matches:
                if len(match.strip()) > 10:
                    decisions.append({
                        'decision': match.strip(),
                        'context': text[:200],
                        'status': 'made'
                    })
        
        return decisions
    
    def _extract_questions(self, text: str) -> List[str]:
        """Extract questions from email text"""
        questions = []
        
        # Find question sentences
        sentences = re.split(r'[.!?]+', text)
        for sentence in sentences:
            if '?' in sentence and len(sentence.strip()) > 10:
                questions.append(sentence.strip())
        
        return questions
    
    def generate_thread_summary(self, thread_id: str) -> Dict:
        """
        Generate comprehensive summary of an email thread
        
        Args:
            thread_id: Thread identifier
        
        Returns:
            Dict with thread summary
        """
        if thread_id not in self.threads or not self.threads[thread_id]:
            return {'error': 'Thread not found or empty'}
        
        emails = self.threads[thread_id]
        
        # Sort by timestamp
        emails_sorted = sorted(emails, key=lambda x: x['timestamp'])
        
        # Extract all key points
        all_key_points = []
        for email in emails_sorted:
            all_key_points.extend(email['key_points'])
        
        # Extract all action items
        all_action_items = []
        for email in emails_sorted:
            all_action_items.extend(email['action_items'])
        
        # Extract all decisions
        all_decisions = []
        for email in emails_sorted:
            all_decisions.extend(email['decisions'])
        
        # Extract all questions
        all_questions = []
        for email in emails_sorted:
            all_questions.extend(email['questions'])
        
        # Analyze participants
        participants = self._analyze_participants(emails_sorted)
        
        # Build timeline
        timeline = self._build_timeline(emails_sorted)
        
        # Analyze conversation flow
        conversation_flow = self._analyze_conversation_flow(emails_sorted)
        
        # Calculate thread statistics
        stats = self._calculate_thread_stats(emails_sorted)
        
        # Generate executive summary
        executive_summary = self._generate_executive_summary(
            emails_sorted, all_key_points, all_decisions, all_action_items
        )
        
        summary = {
            'thread_id': thread_id,
            'executive_summary': executive_summary,
            'key_points': all_key_points[:15],  # Top 15 key points
            'action_items': all_action_items,
            'decisions': all_decisions,
            'questions': all_questions,
            'participants': participants,
            'timeline': timeline,
            'conversation_flow': conversation_flow,
            'statistics': stats,
            'reply_all_required': any(email['reply_all_required'] for email in emails_sorted),
            'generated_at': datetime.now().isoformat()
        }
        
        self.summaries[thread_id] = summary
        return summary
    
    def _analyze_participants(self, emails: List[Dict]) -> Dict:
        """Analyze thread participants"""
        all_participants = set()
        sender_counts = Counter()
        recipient_counts = Counter()
        
        for email in emails:
            sender = email['from']
            all_participants.add(sender)
            sender_counts[sender] += 1
            
            for recipient in email['to'] + email['cc']:
                all_participants.add(recipient)
                recipient_counts[recipient] += 1
        
        # Identify key participants
        key_participants = []
        for participant in all_participants:
            send_count = sender_counts[participant]
            receive_count = recipient_counts[participant]
            total_engagement = send_count + receive_count
            
            if total_engagement > len(emails) * 0.3:  # Engaged in >30% of emails
                key_participants.append({
                    'email': participant,
                    'messages_sent': send_count,
                    'messages_received': receive_count,
                    'engagement_level': 'high' if total_engagement > len(emails) * 0.5 else 'medium'
                })
        
        return {
            'total_participants': len(all_participants),
            'key_participants': key_participants,
            'most_active_sender': sender_counts.most_common(1)[0] if sender_counts else None,
            'most_mentioned': recipient_counts.most_common(1)[0] if recipient_counts else None
        }
    
    def _build_timeline(self, emails: List[Dict]) -> List[Dict]:
        """Build thread timeline"""
        timeline = []
        
        for email in emails:
            event = {
                'timestamp': email['timestamp'],
                'type': 'email',
                'from': email['from'],
                'subject': email['subject'][:50],
                'has_decisions': len(email['decisions']) > 0,
                'has_action_items': len(email['action_items']) > 0,
                'has_questions': len(email['questions']) > 0
            }
            timeline.append(event)
            
            # Add decision events
            for decision in email['decisions']:
                timeline.append({
                    'timestamp': email['timestamp'],
                    'type': 'decision',
                    'decision': decision['decision'][:100],
                    'from': email['from']
                })
            
            # Add action item events
            for action in email['action_items']:
                timeline.append({
                    'timestamp': email['timestamp'],
                    'type': 'action_item',
                    'action': action['description'][:100],
                    'assignee': action.get('assignee'),
                    'deadline': action.get('deadline')
                })
        
        return sorted(timeline, key=lambda x: x['timestamp'])
    
    def _analyze_conversation_flow(self, emails: List[Dict]) -> Dict:
        """Analyze conversation flow patterns"""
        if len(emails) < 2:
            return {'pattern': 'single_message'}
        
        # Calculate response times
        response_times = []
        for i in range(1, len(emails)):
            try:
                time1 = datetime.fromisoformat(emails[i-1]['timestamp'])
                time2 = datetime.fromisoformat(emails[i]['timestamp'])
                delta = (time2 - time1).total_seconds() / 3600  # Hours
                response_times.append(delta)
            except:
                pass
        
        # Determine conversation pattern
        if len(response_times) > 0:
            avg_response = sum(response_times) / len(response_times)
            if avg_response < 1:
                pattern = 'rapid_fire'
            elif avg_response < 24:
                pattern = 'active_discussion'
            elif avg_response < 168:  # 1 week
                pattern = 'deliberate'
            else:
                pattern = 'sporadic'
        else:
            pattern = 'unknown'
        
        # Detect conversation phases
        phases = self._detect_conversation_phases(emails)
        
        return {
            'pattern': pattern,
            'avg_response_time_hours': round(sum(response_times) / len(response_times), 1) if response_times else None,
            'total_messages': len(emails),
            'conversation_span_hours': round((datetime.fromisoformat(emails[-1]['timestamp']) - 
                                             datetime.fromisoformat(emails[0]['timestamp'])).total_seconds() / 3600, 1) if len(emails) > 1 else 0,
            'phases': phases
        }
    
    def _detect_conversation_phases(self, emails: List[Dict]) -> List[Dict]:
        """Detect conversation phases (opening, discussion, decision, closure)"""
        phases = []
        
        if len(emails) == 0:
            return phases
        
        # Opening phase (first 20% of emails)
        opening_end = max(1, int(len(emails) * 0.2))
        phases.append({
            'phase': 'opening',
            'emails': emails[:opening_end],
            'characteristics': ['initial question', 'problem statement', 'request for input']
        })
        
        # Discussion phase (middle 60%)
        discussion_start = opening_end
        discussion_end = int(len(emails) * 0.8)
        if discussion_end > discussion_start:
            phases.append({
                'phase': 'discussion',
                'emails': emails[discussion_start:discussion_end],
                'characteristics': ['back-and-forth', 'clarification', 'options presented']
            })
        
        # Decision phase (last 20%)
        if len(emails) > discussion_end:
            phases.append({
                'phase': 'decision',
                'emails': emails[discussion_end:],
                'characteristics': ['decisions made', 'action items assigned', 'closure']
            })
        
        return phases
    
    def _calculate_thread_stats(self, emails: List[Dict]) -> Dict:
        """Calculate thread statistics"""
        total_emails = len(emails)
        total_key_points = sum(len(e['key_points']) for e in emails)
        total_action_items = sum(len(e['action_items']) for e in emails)
        total_decisions = sum(len(e['decisions']) for e in emails)
        total_questions = sum(len(e['questions']) for e in emails)
        
        # Calculate average words per email
        word_counts = [len(e['body'].split()) for e in emails]
        avg_words = sum(word_counts) / total_emails if total_emails > 0 else 0
        
        return {
            'total_emails': total_emails,
            'total_key_points': total_key_points,
            'total_action_items': total_action_items,
            'total_decisions': total_decisions,
            'total_questions': total_questions,
            'avg_words_per_email': round(avg_words, 1),
            'action_item_density': round(total_action_items / total_emails, 2) if total_emails > 0 else 0,
            'decision_density': round(total_decisions / total_emails, 2) if total_emails > 0 else 0
        }
    
    def _generate_executive_summary(self, emails: List[Dict], key_points: List[str],
                                   decisions: List[Dict], action_items: List[Dict]) -> str:
        """Generate executive summary"""
        if not emails:
            return "No emails in thread."
        
        # Thread overview
        first_email = emails[0]
        last_email = emails[-1]
        
        summary_parts = [
            f"Thread: {first_email['subject']}",
            f"Duration: {first_email['timestamp']} to {last_email['timestamp']}",
            f"Messages: {len(emails)}",
            ""
        ]
        
        # Key decisions
        if decisions:
            summary_parts.append("Key Decisions:")
            for decision in decisions[:3]:  # Top 3 decisions
                summary_parts.append(f"• {decision['decision']}")
            summary_parts.append("")
        
        # Action items
        if action_items:
            summary_parts.append("Action Items:")
            for action in action_items[:5]:  # Top 5 action items
                assignee = f" (Assigned to: {action['assignee']})" if action.get('assignee') else ""
                deadline = f" (Due: {action['deadline']})" if action.get('deadline') else ""
                summary_parts.append(f"• {action['description']}{assignee}{deadline}")
            summary_parts.append("")
        
        # Key points
        if key_points:
            summary_parts.append("Key Points:")
            for point in key_points[:5]:  # Top 5 key points
                summary_parts.append(f"• {point}")
        
        return "\n".join(summary_parts)


def test_v685():
    """Test V685 Email Thread Summarizer Pro"""
    summarizer = EmailThreadSummarizerPro()
    
    # Test 1: Process thread emails
    thread_emails = [
        {
            'id': 'e001',
            'thread_id': 'project-alpha',
            'from': 'pm@company.com',
            'to': ['team@company.com'],
            'subject': 'Project Alpha Kickoff',
            'body': '''Team,
            
            Important: We're kicking off Project Alpha today.
            
            Key points:
            - Timeline: 3 months
            - Budget: $500k
            - Team: 8 people
            
            Action items:
            - John: Create project plan by Friday
            - Sarah: Set up development environment
            - Mike: Review requirements document
            
            Please review and let me know if you have questions.
            
            PM''',
            'timestamp': '2026-05-28T09:00:00'
        },
        {
            'id': 'e002',
            'thread_id': 'project-alpha',
            'from': 'john@company.com',
            'to': ['pm@company.com', 'team@company.com'],
            'subject': 'Re: Project Alpha Kickoff',
            'body': '''Hi PM,
            
            I've reviewed the requirements. A few questions:
            
            1. What's the priority: speed or quality?
            2. Do we have approval for the budget?
            3. Who's the technical lead?
            
            I'll have the project plan ready by Thursday (ahead of schedule).
            
            John''',
            'timestamp': '2026-05-28T10:30:00'
        },
        {
            'id': 'e003',
            'thread_id': 'project-alpha',
            'from': 'pm@company.com',
            'to': ['john@company.com', 'team@company.com'],
            'subject': 'Re: Project Alpha Kickoff',
            'body': '''John,
            
            Good questions. Here are the answers:
            
            1. Decision: We're prioritizing quality over speed. Take the time to do it right.
            2. Yes, budget is approved. We have $500k confirmed.
            3. Decision: Sarah will be the technical lead.
            
            Action item: Sarah, please confirm you're comfortable with the tech lead role.
            
            PM''',
            'timestamp': '2026-05-28T11:00:00'
        },
        {
            'id': 'e004',
            'thread_id': 'project-alpha',
            'from': 'sarah@company.com',
            'to': ['pm@company.com', 'team@company.com'],
            'subject': 'Re: Project Alpha Kickoff',
            'body': '''Hi PM,
            
            I'm happy to take on the tech lead role. Confirmed!
            
            Development environment is set up. I've also:
            - Created the repository
            - Set up CI/CD pipeline
            - Configured monitoring
            
            Next steps:
            - Review John's project plan when ready
            - Schedule technical architecture meeting
            
            Sarah''',
            'timestamp': '2026-05-28T14:00:00'
        }
    ]
    
    # Process all emails
    print("Processing thread emails...")
    for email in thread_emails:
        result = summarizer.process_thread_email(email)
        print(f"  Email {email['id']}: {result['key_points_count']} key points, {result['action_items_count']} actions, {result['decisions_count']} decisions")
    
    # Generate summary
    print("\n" + "="*50)
    print("Generating thread summary...")
    summary = summarizer.generate_thread_summary('project-alpha')
    
    print("\n" + "="*50)
    print("EXECUTIVE SUMMARY:")
    print("="*50)
    print(summary['executive_summary'])
    
    print("\n" + "="*50)
    print("STATISTICS:")
    print("="*50)
    for key, value in summary['statistics'].items():
        print(f"{key}: {value}")
    
    print("\n" + "="*50)
    print("CONVERSATION FLOW:")
    print("="*50)
    flow = summary['conversation_flow']
    print(f"Pattern: {flow['pattern']}")
    print(f"Avg Response Time: {flow.get('avg_response_time_hours', 'N/A')} hours")
    print(f"Conversation Span: {flow.get('conversation_span_hours', 'N/A')} hours")
    print(f"Phases: {len(flow.get('phases', []))}")
    
    print("\n" + "="*50)
    print("PARTICIPANTS:")
    print("="*50)
    participants = summary['participants']
    print(f"Total: {participants['total_participants']}")
    print(f"Key Participants: {len(participants['key_participants'])}")
    for kp in participants['key_participants']:
        print(f"  - {kp['email']} ({kp['engagement_level']} engagement)")
    
    print("\n" + "="*50)
    print(f"✅ V685 Email Thread Summarizer Pro Test Complete")
    print(f"Thread: {summary['thread_id']}")
    print(f"Emails: {summary['statistics']['total_emails']}")
    print(f"Key Points: {summary['statistics']['total_key_points']}")
    print(f"Action Items: {summary['statistics']['total_action_items']}")
    print(f"Decisions: {summary['statistics']['total_decisions']}")
    print(f"Questions: {summary['statistics']['total_questions']}")
    
    return summary


if __name__ == '__main__':
    test_v685()
