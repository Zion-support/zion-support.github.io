#!/usr/bin/env python3
"""
V199 - AI Email Thread Summarizer
Condenses long email threads into concise summaries with key decisions, action items,
open questions, and participant contributions. Essential for catching up on missed conversations.
"""

import json
from datetime import datetime
from typing import Dict, List, Any
from collections import defaultdict


class ThreadSummarizer:
    """AI-powered email thread summarization."""
    
    def __init__(self):
        self.summarization_history = []
    
    def summarize_thread(self, emails: List[Dict[str, Any]], context: Dict = None) -> Dict[str, Any]:
        """Summarize an email thread."""
        if not emails:
            return {'error': 'No emails provided'}
        
        context = context or {}
        
        # Sort emails chronologically
        sorted_emails = self._sort_emails_chronologically(emails)
        
        # Extract thread metadata
        metadata = self._extract_thread_metadata(sorted_emails)
        
        # Identify key decisions
        decisions = self._extract_decisions(sorted_emails)
        
        # Extract action items
        action_items = self._extract_action_items(sorted_emails)
        
        # Identify open questions
        open_questions = self._extract_open_questions(sorted_emails)
        
        # Analyze participant contributions
        contributions = self._analyze_contributions(sorted_emails)
        
        # Generate executive summary
        executive_summary = self._generate_executive_summary(
            metadata, decisions, action_items, open_questions
        )
        
        # Create timeline
        timeline = self._create_timeline(sorted_emails)
        
        # Detect thread health
        thread_health = self._assess_thread_health(sorted_emails)
        
        return {
            'summary_id': f"thread_{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'timestamp': datetime.now().isoformat(),
            'thread_metadata': metadata,
            'executive_summary': executive_summary,
            'key_decisions': decisions,
            'action_items': action_items,
            'open_questions': open_questions,
            'participant_contributions': contributions,
            'timeline': timeline,
            'thread_health': thread_health,
            'reply_all_strategy': self._determine_reply_all_strategy(sorted_emails, context)
        }
    
    def _sort_emails_chronologically(self, emails: List[Dict]) -> List[Dict]:
        """Sort emails by date."""
        return sorted(emails, key=lambda x: x.get('date', ''))
    
    def _extract_thread_metadata(self, emails: List[Dict]) -> Dict[str, Any]:
        """Extract thread metadata."""
        subject = emails[0].get('subject', '') if emails else ''
        
        # Clean subject (remove Re:, Fwd:, etc.)
        clean_subject = subject
        for prefix in ['Re:', 'Fwd:', 'RE:', 'FW:', 'Fw:']:
            clean_subject = clean_subject.replace(prefix, '').strip()
        
        # Get all participants
        participants = set()
        for email in emails:
            participants.add(email.get('from', ''))
            participants.update(email.get('to', []))
            participants.update(email.get('cc', []))
        
        # Date range
        start_date = emails[0].get('date', '') if emails else ''
        end_date = emails[-1].get('date', '') if emails else ''
        
        return {
            'subject': clean_subject,
            'original_subject': subject,
            'email_count': len(emails),
            'participant_count': len(participants),
            'participants': list(participants),
            'start_date': start_date,
            'end_date': end_date,
            'duration_hours': self._calculate_duration_hours(start_date, end_date)
        }
    
    def _calculate_duration_hours(self, start: str, end: str) -> float:
        """Calculate thread duration in hours."""
        try:
            start_dt = datetime.fromisoformat(start.replace('Z', '+00:00'))
            end_dt = datetime.fromisoformat(end.replace('Z', '+00:00'))
            return (end_dt - start_dt).total_seconds() / 3600
        except:
            return 0
    
    def _extract_decisions(self, emails: List[Dict]) -> List[Dict[str, Any]]:
        """Extract key decisions from thread."""
        decisions = []
        decision_indicators = [
            'decided', 'decision', 'agreed', 'approved', 'confirmed',
            'will proceed with', 'going with', 'chosen', 'selected'
        ]
        
        for email in emails:
            body = email.get('body', '').lower()
            
            for indicator in decision_indicators:
                if indicator in body:
                    # Extract decision context
                    sentences = body.split('.')
                    for sentence in sentences:
                        if indicator in sentence and len(sentence.strip()) > 20:
                            decisions.append({
                                'decision': sentence.strip(),
                                'made_by': email.get('from', ''),
                                'date': email.get('date', ''),
                                'confidence': 0.8
                            })
                            break
        
        return decisions[:10]
    
    def _extract_action_items(self, emails: List[Dict]) -> List[Dict[str, Any]]:
        """Extract action items from thread."""
        action_items = []
        action_indicators = [
            'please', 'need to', 'should', 'must', 'will',
            'action item', 'todo', 'task', 'responsible for'
        ]
        
        for email in emails:
            body = email.get('body', '')
            
            for indicator in action_indicators:
                if indicator in body.lower():
                    # Extract sentences with action indicators
                    sentences = body.split('.')
                    for sentence in sentences:
                        if indicator in sentence.lower() and len(sentence.strip()) > 15:
                            action_items.append({
                                'action': sentence.strip(),
                                'requested_by': email.get('from', ''),
                                'date': email.get('date', ''),
                                'status': 'pending'
                            })
                            break
        
        return action_items[:15]
    
    def _extract_open_questions(self, emails: List[Dict]) -> List[Dict[str, Any]]:
        """Extract unanswered questions."""
        questions = []
        
        for email in emails:
            body = email.get('body', '')
            
            # Find sentences ending with ?
            sentences = body.split('.')
            for sentence in sentences:
                if '?' in sentence and len(sentence.strip()) > 10:
                    questions.append({
                        'question': sentence.strip(),
                        'asked_by': email.get('from', ''),
                        'date': email.get('date', ''),
                        'answered': False
                    })
        
        return questions[:10]
    
    def _analyze_contributions(self, emails: List[Dict]) -> List[Dict[str, Any]]:
        """Analyze participant contributions."""
        contributions = defaultdict(lambda: {
            'email_count': 0,
            'total_words': 0,
            'first_response': None,
            'last_response': None
        })
        
        for email in emails:
            sender = email.get('from', '')
            body = email.get('body', '')
            date = email.get('date', '')
            
            contributions[sender]['email_count'] += 1
            contributions[sender]['total_words'] += len(body.split())
            
            if not contributions[sender]['first_response']:
                contributions[sender]['first_response'] = date
            contributions[sender]['last_response'] = date
        
        # Convert to list and calculate metrics
        result = []
        for participant, data in contributions.items():
            result.append({
                'participant': participant,
                'email_count': data['email_count'],
                'total_words': data['total_words'],
                'avg_words_per_email': data['total_words'] // max(data['email_count'], 1),
                'first_response': data['first_response'],
                'last_response': data['last_response'],
                'contribution_level': self._classify_contribution_level(
                    data['email_count'], data['total_words']
                )
            })
        
        return sorted(result, key=lambda x: x['email_count'], reverse=True)
    
    def _classify_contribution_level(self, email_count: int, word_count: int) -> str:
        """Classify contribution level."""
        if email_count >= 5 or word_count >= 1000:
            return 'high'
        elif email_count >= 2 or word_count >= 300:
            return 'medium'
        else:
            return 'low'
    
    def _generate_executive_summary(self, metadata: Dict, decisions: List, 
                                   action_items: List, questions: List) -> Dict[str, Any]:
        """Generate executive summary."""
        summary_parts = []
        
        # Thread overview
        summary_parts.append(
            f"This thread contains {metadata['email_count']} emails from "
            f"{metadata['participant_count']} participants over "
            f"{metadata['duration_hours']:.1f} hours."
        )
        
        # Key decisions
        if decisions:
            summary_parts.append(f"{len(decisions)} key decision(s) were made.")
        
        # Action items
        pending_items = [item for item in action_items if item['status'] == 'pending']
        if pending_items:
            summary_parts.append(f"{len(pending_items)} action item(s) are pending.")
        
        # Open questions
        unanswered = [q for q in questions if not q['answered']]
        if unanswered:
            summary_parts.append(f"{len(unanswered)} question(s) remain unanswered.")
        
        return {
            'summary_text': ' '.join(summary_parts),
            'key_points': [
                f"{metadata['email_count']} emails analyzed",
                f"{len(decisions)} decisions made",
                f"{len(pending_items)} pending actions",
                f"{len(unanswered)} open questions"
            ],
            'read_time_estimate': f"{max(1, metadata['email_count'] // 10)} minutes"
        }
    
    def _create_timeline(self, emails: List[Dict]) -> List[Dict[str, Any]]:
        """Create email timeline."""
        timeline = []
        
        for i, email in enumerate(emails):
            timeline.append({
                'sequence': i + 1,
                'date': email.get('date', ''),
                'from': email.get('from', ''),
                'subject': email.get('subject', '')[:80],
                'preview': email.get('body', '')[:150]
            })
        
        return timeline
    
    def _assess_thread_health(self, emails: List[Dict]) -> Dict[str, Any]:
        """Assess thread health."""
        if len(emails) < 2:
            return {'status': 'unknown', 'score': 0}
        
        # Calculate metrics
        response_times = []
        for i in range(1, len(emails)):
            try:
                prev_date = datetime.fromisoformat(emails[i-1].get('date', '').replace('Z', '+00:00'))
                curr_date = datetime.fromisoformat(emails[i].get('date', '').replace('Z', '+00:00'))
                hours = (curr_date - prev_date).total_seconds() / 3600
                response_times.append(hours)
            except:
                pass
        
        avg_response_time = sum(response_times) / len(response_times) if response_times else 0
        
        # Health score
        score = 100
        if avg_response_time > 48:
            score -= 30  # Slow responses
        if len(emails) > 20:
            score -= 20  # Very long thread
        
        # Status
        if score >= 80:
            status = 'healthy'
        elif score >= 60:
            status = 'moderate'
        else:
            status = 'needs_attention'
        
        return {
            'status': status,
            'score': score,
            'avg_response_time_hours': round(avg_response_time, 1),
            'recommendations': self._generate_thread_recommendations(score, avg_response_time)
        }
    
    def _generate_thread_recommendations(self, score: int, avg_response_time: float) -> List[str]:
        """Generate thread recommendations."""
        recommendations = []
        
        if avg_response_time > 48:
            recommendations.append("Consider scheduling a call - email thread is moving slowly")
        
        if score < 60:
            recommendations.append("Thread may benefit from consolidation or summary")
        
        recommendations.append("Use reply-all to keep all participants informed")
        
        return recommendations
    
    def _determine_reply_all_strategy(self, emails: List[Dict], context: Dict) -> Dict[str, Any]:
        """Determine reply-all strategy."""
        participant_count = len(set(
            email.get('from', '') for email in emails
        ) | set(
            p for email in emails for p in email.get('to', []) + email.get('cc', [])
        ))
        
        return {
            'reply_all_recommended': participant_count > 2,
            'reason': 'Keep all participants informed of thread developments',
            'participant_count': participant_count
        }


def summarize_email_thread(emails: List[Dict[str, Any]], context: Dict = None) -> Dict[str, Any]:
    """Main entry point for thread summarization."""
    summarizer = ThreadSummarizer()
    return summarizer.summarize_thread(emails, context)


if __name__ == '__main__':
    test_emails = [
        {
            'from': 'alice@company.com',
            'to': ['team@company.com'],
            'subject': 'Project Alpha - Kickoff',
            'body': 'Hi team, I\'d like to kick off Project Alpha. We\'ve decided to use the new framework. Please review the requirements document and let me know if you have questions. What timeline works for everyone?',
            'date': '2024-01-15T09:00:00'
        },
        {
            'from': 'bob@company.com',
            'to': ['team@company.com'],
            'cc': ['alice@company.com'],
            'subject': 'Re: Project Alpha - Kickoff',
            'body': 'Sounds good! I reviewed the requirements. I think we can deliver in 6 weeks. Alice, please confirm the budget. Bob will lead the backend work.',
            'date': '2024-01-15T10:30:00'
        },
        {
            'from': 'alice@company.com',
            'to': ['team@company.com'],
            'subject': 'Re: Project Alpha - Kickoff',
            'body': 'Budget is approved at $50K. 6 weeks works. Let\'s proceed with the new framework as agreed. Bob, please create the project plan by Friday.',
            'date': '2024-01-15T14:00:00'
        }
    ]
    
    result = summarize_email_thread(test_emails)
    print(json.dumps(result, indent=2))
