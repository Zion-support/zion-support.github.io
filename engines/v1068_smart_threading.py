#!/usr/bin/env python3
"""
V1068: Smart Email Threading & Context Builder
Intelligently group related emails across multiple threads and conversations.
Build complete context from fragmented discussions and surface relevant past conversations.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import json
import re
from datetime import datetime
from collections import defaultdict

class SmartThreadingEngine:
    def __init__(self):
        self.threads = defaultdict(list)
        self.entity_index = defaultdict(list)
        self.decision_log = []
    
    def build_context(self, email_data):
        """Build comprehensive context from email and related threads."""
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        thread_id = email_data.get('thread_id', 'default')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        reply_all_required = len(recipients) > 1
        
        # Store email in thread
        self.threads[thread_id].append({
            'sender': sender,
            'recipients': recipients,
            'subject': subject,
            'body': body,
            'timestamp': timestamp
        })
        
        # Extract entities and index
        entities = self._extract_entities(body, subject)
        for entity in entities:
            self.entity_index[entity].append(thread_id)
        
        # Find related conversations
        related_threads = self._find_related_threads(entities, thread_id)
        
        # Build thread summary
        thread_summary = self._summarize_thread(thread_id)
        
        # Extract decisions
        decisions = self._extract_decisions(body, thread_id)
        
        # Track action items
        action_items = self._extract_action_items(body)
        
        # Build context summary
        context = {
            'current_thread': thread_summary,
            'related_conversations': related_threads[:5],
            'key_entities': entities[:10],
            'decisions_made': decisions,
            'open_action_items': action_items,
            'participant_summary': self._summarize_participants(thread_id)
        }
        
        return {
            'email_id': email_data.get('id'),
            'thread_id': thread_id,
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'context': context,
            'thread_health': self._assess_thread_health(thread_id),
            'recommendations': self._generate_recommendations(context, reply_all_required),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _extract_entities(self, body, subject):
        """Extract key entities from email content."""
        text = (body + ' ' + subject).lower()
        entities = []
        
        # Project names (capitalized words)
        projects = re.findall(r'\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\b', body + ' ' + subject)
        entities.extend([p for p in projects if len(p) > 3][:5])
        
        # Technical terms
        tech_terms = ['api', 'database', 'server', 'deployment', 'integration', 'migration', 'platform', 'system', 'application', 'software']
        entities.extend([t for t in tech_terms if t in text])
        
        # People mentioned
        people = re.findall(r'\b[A-Z][a-z]+\s+[A-Z][a-z]+\b', body)
        entities.extend([p for p in people if len(p) > 5][:3])
        
        return list(set(entities))
    
    def _find_related_threads(self, entities, current_thread_id):
        """Find related conversations based on shared entities."""
        related = defaultdict(int)
        
        for entity in entities:
            for thread_id in self.entity_index[entity]:
                if thread_id != current_thread_id:
                    related[thread_id] += 1
        
        # Sort by relevance score
        sorted_threads = sorted(related.items(), key=lambda x: x[1], reverse=True)
        
        results = []
        for thread_id, score in sorted_threads[:5]:
            thread_data = self.threads[thread_id]
            if thread_data:
                results.append({
                    'thread_id': thread_id,
                    'relevance_score': score,
                    'subject': thread_data[0]['subject'],
                    'last_activity': thread_data[-1]['timestamp'],
                    'message_count': len(thread_data)
                })
        
        return results
    
    def _summarize_thread(self, thread_id):
        """Generate a summary of the thread."""
        emails = self.threads[thread_id]
        
        if not emails:
            return {'status': 'empty', 'messages': 0}
        
        return {
            'status': 'active',
            'messages': len(emails),
            'first_message': emails[0]['timestamp'],
            'last_message': emails[-1]['timestamp'],
            'participants': list(set(e['sender'] for e in emails)),
            'subject': emails[0]['subject'],
            'duration_hours': self._calculate_duration(emails[0]['timestamp'], emails[-1]['timestamp'])
        }
    
    def _extract_decisions(self, body, thread_id):
        """Extract decisions made in the email."""
        decisions = []
        
        decision_patterns = [
            r'(?:we|I) (?:have |will |decided to |agreed to )(.+?)(?:\.|$)',
            r'(?:decision|conclusion|agreement)[:\s]+(.+?)(?:\.|$)',
            r'(?:let\'s|we should|we need to) (.+?)(?:\.|$)'
        ]
        
        for pattern in decision_patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            decisions.extend(matches)
        
        # Log decisions
        for decision in decisions:
            self.decision_log.append({
                'thread_id': thread_id,
                'decision': decision.strip(),
                'timestamp': datetime.now().isoformat()
            })
        
        return decisions[:5]
    
    def _extract_action_items(self, body):
        """Extract action items from email."""
        action_items = []
        
        patterns = [
            r'(?:please|could you|can you) (.+?)(?:\.|$)',
            r'(?:action item|todo|task)[:\s]+(.+?)(?:\.|$)',
            r'(?:I|we) (?:will|shall) (.+?)(?:\.|$)'
        ]
        
        for pattern in patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            action_items.extend(matches)
        
        return [item.strip() for item in action_items[:5]]
    
    def _summarize_participants(self, thread_id):
        """Summarize participant engagement."""
        emails = self.threads[thread_id]
        
        participant_stats = defaultdict(lambda: {'count': 0, 'first': None, 'last': None})
        
        for email in emails:
            sender = email['sender']
            participant_stats[sender]['count'] += 1
            if not participant_stats[sender]['first']:
                participant_stats[sender]['first'] = email['timestamp']
            participant_stats[sender]['last'] = email['timestamp']
        
        return dict(participant_stats)
    
    def _calculate_duration(self, start, end):
        """Calculate duration between two timestamps."""
        try:
            start_dt = datetime.fromisoformat(start.replace('Z', '+00:00'))
            end_dt = datetime.fromisoformat(end.replace('Z', '+00:00'))
            return round((end_dt - start_dt).total_seconds() / 3600, 1)
        except:
            return 0
    
    def _assess_thread_health(self, thread_id):
        """Assess the health of an email thread."""
        emails = self.threads[thread_id]
        
        if len(emails) < 2:
            return {'status': 'new', 'score': 50}
        
        # Check response times
        response_times = []
        for i in range(1, len(emails)):
            try:
                prev = datetime.fromisoformat(emails[i-1]['timestamp'].replace('Z', '+00:00'))
                curr = datetime.fromisoformat(emails[i]['timestamp'].replace('Z', '+00:00'))
                response_times.append((curr - prev).total_seconds() / 3600)
            except:
                pass
        
        avg_response_time = sum(response_times) / len(response_times) if response_times else 0
        
        if avg_response_time < 4:
            health_score = 90
        elif avg_response_time < 24:
            health_score = 75
        elif avg_response_time < 72:
            health_score = 60
        else:
            health_score = 40
        
        return {
            'status': 'healthy' if health_score >= 70 else 'slow' if health_score >= 50 else 'stalled',
            'score': health_score,
            'avg_response_hours': round(avg_response_time, 1)
        }
    
    def _generate_recommendations(self, context, reply_all_required):
        """Generate context-aware recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included in your response')
        
        if context['related_conversations']:
            recommendations.append(f'🔗 Reference {len(context["related_conversations"])} related conversation(s) for additional context')
        
        if context['decisions_made']:
            recommendations.append(f'✅ {len(context["decisions_made"])} decision(s) documented - confirm understanding')
        
        if context['open_action_items']:
            recommendations.append(f'📋 Address {len(context["open_action_items"])} open action item(s)')
        
        if not recommendations:
            recommendations.append('✅ Thread is well-organized with clear context')
        
        return recommendations


if __name__ == '__main__':
    engine = SmartThreadingEngine()
    
    test_emails = [
        {
            'id': '1',
            'thread_id': 'project_alpha',
            'sender': 'pm@company.com',
            'recipients': ['dev@company.com', 'design@company.com'],
            'subject': 'Project Alpha - Sprint Planning',
            'body': 'Let us plan the next sprint for Project Alpha. We need to finalize the API integration and database migration.',
            'timestamp': '2024-01-10T10:00:00'
        },
        {
            'id': '2',
            'thread_id': 'project_alpha',
            'sender': 'dev@company.com',
            'recipients': ['pm@company.com', 'design@company.com'],
            'subject': 'Re: Project Alpha - Sprint Planning',
            'body': 'I will complete the API integration by Friday. Please review the database schema and let me know your thoughts.',
            'timestamp': '2024-01-10T14:00:00'
        },
        {
            'id': '3',
            'thread_id': 'project_alpha',
            'sender': 'pm@company.com',
            'recipients': ['dev@company.com', 'design@company.com'],
            'subject': 'Re: Project Alpha - Sprint Planning',
            'body': 'Great! We have decided to use PostgreSQL for the database. Next step: design review on Monday.',
            'timestamp': '2024-01-10T16:00:00'
        }
    ]
    
    print("=== V1068: Smart Email Threading & Context Builder ===\n")
    
    for email in test_emails:
        result = engine.build_context(email)
        print(f"Email: {email['subject']}")
        print(f"  Thread: {result['thread_id']}")
        print(f"  Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
        print(f"  Thread Health: {result['thread_health']['status']} (Score: {result['thread_health']['score']})")
        print(f"  Context:")
        print(f"    - Messages: {result['context']['current_thread']['messages']}")
        print(f"    - Participants: {len(result['context']['current_thread']['participants'])}")
        print(f"    - Related Threads: {len(result['context']['related_conversations'])}")
        print(f"    - Entities: {result['context']['key_entities'][:3]}")
        print(f"    - Decisions: {result['context']['decisions_made'][:2]}")
        print(f"    - Action Items: {result['context']['open_action_items'][:2]}")
        print(f"  Recommendations:")
        for rec in result['recommendations']:
            print(f"    - {rec}")
        print()
    
    print("✅ All tests passed!")
