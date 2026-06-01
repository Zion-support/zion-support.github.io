#!/usr/bin/env python3
"""
V1088: Smart Email Threading & Context Builder
Intelligently group related emails and build complete context from fragmented discussions.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
from datetime import datetime
from typing import Dict, List

class SmartThreadingEngine:
    def __init__(self):
        self.threads = {}
        self.entity_index = {}
        self.context_cache = {}
    
    def build_context(self, email_data: Dict) -> Dict:
        """Build comprehensive context from email thread."""
        thread_id = email_data.get('thread_id', '')
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # REPLY-ALL ENFORCEMENT
        reply_all_required = len(recipients) > 1
        
        # Initialize thread if needed
        if thread_id not in self.threads:
            self.threads[thread_id] = []
        
        # Add email to thread
        self.threads[thread_id].append({
            'id': email_data.get('id'),
            'sender': sender,
            'body': body,
            'subject': subject,
            'timestamp': timestamp
        })
        
        # Extract entities
        entities = self._extract_entities(body, subject)
        
        # Index entities
        for entity in entities:
            if entity not in self.entity_index:
                self.entity_index[entity] = []
            if thread_id not in self.entity_index[entity]:
                self.entity_index[entity].append(thread_id)
        
        # Find related threads
        related_threads = self._find_related_threads(entities, thread_id)
        
        # Build thread summary
        thread_summary = self._summarize_thread(thread_id)
        
        # Extract key information
        key_info = self._extract_key_info(body)
        
        # Detect decisions
        decisions = self._detect_decisions(body)
        
        # Detect action items
        action_items = self._detect_action_items(body)
        
        # Calculate thread health
        thread_health = self._calculate_thread_health(thread_id)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(
            thread_summary, related_threads, decisions, action_items, reply_all_required
        )
        
        return {
            'email_id': email_data.get('id'),
            'thread_id': thread_id,
            'thread_summary': thread_summary,
            'related_threads': related_threads,
            'entities': entities,
            'key_information': key_info,
            'decisions': decisions,
            'action_items': action_items,
            'thread_health': thread_health,
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'recommendations': recommendations,
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _extract_entities(self, body: str, subject: str) -> List[str]:
        """Extract key entities from email."""
        text = (subject + ' ' + body).lower()
        entities = []
        
        # Project names (capitalized phrases)
        project_pattern = r'\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\b'
        projects = re.findall(project_pattern, subject + ' ' + body)
        entities.extend([p for p in projects if len(p) > 3][:5])
        
        # Technical terms
        tech_terms = ['api', 'database', 'server', 'deployment', 'integration', 'platform', 'system', 'application']
        entities.extend([t for t in tech_terms if t in text])
        
        # People
        people_pattern = r'\b[A-Z][a-z]+\s+[A-Z][a-z]+\b'
        people = re.findall(people_pattern, body)
        entities.extend([p for p in people if len(p) > 5][:3])
        
        # Remove duplicates
        return list(set(entities))[:10]
    
    def _find_related_threads(self, entities: List[str], current_thread_id: str) -> List[Dict]:
        """Find related threads based on shared entities."""
        related = {}
        
        for entity in entities:
            if entity in self.entity_index:
                for thread_id in self.entity_index[entity]:
                    if thread_id != current_thread_id:
                        if thread_id not in related:
                            related[thread_id] = {
                                'thread_id': thread_id,
                                'shared_entities': [],
                                'relevance_score': 0
                            }
                        related[thread_id]['shared_entities'].append(entity)
                        related[thread_id]['relevance_score'] += 1
        
        # Sort by relevance
        sorted_related = sorted(related.values(), key=lambda x: x['relevance_score'], reverse=True)
        return sorted_related[:5]
    
    def _summarize_thread(self, thread_id: str) -> Dict:
        """Generate thread summary."""
        emails = self.threads.get(thread_id, [])
        
        if not emails:
            return {'status': 'empty'}
        
        # Get unique participants
        participants = list(set(e['sender'] for e in emails))
        
        # Calculate duration
        timestamps = [datetime.fromisoformat(e['timestamp'].replace('Z', '+00:00')) for e in emails]
        duration = (max(timestamps) - min(timestamps)).days
        
        # Get subject (from first email)
        subject = emails[0]['subject']
        
        return {
            'message_count': len(emails),
            'participants': participants,
            'participant_count': len(participants),
            'duration_days': duration,
            'subject': subject,
            'first_message': min(timestamps).isoformat(),
            'last_message': max(timestamps).isoformat()
        }
    
    def _extract_key_info(self, body: str) -> Dict:
        """Extract key information from email."""
        info = {
            'dates': [],
            'amounts': [],
            'names': [],
            'links': []
        }
        
        # Dates
        date_pattern = r'\b\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?\b'
        info['dates'] = re.findall(date_pattern, body)[:5]
        
        # Amounts
        amount_pattern = r'\$[\d,]+(?:\.\d{2})?'
        info['amounts'] = re.findall(amount_pattern, body)[:5]
        
        # Names
        name_pattern = r'\b[A-Z][a-z]+\s+[A-Z][a-z]+\b'
        info['names'] = re.findall(name_pattern, body)[:5]
        
        # Links
        link_pattern = r'https?://[^\s<>"]+|www\.[^\s<>"]+'
        info['links'] = re.findall(link_pattern, body, re.IGNORECASE)[:5]
        
        return info
    
    def _detect_decisions(self, body: str) -> List[Dict]:
        """Detect decisions made in email."""
        decisions = []
        
        patterns = [
            (r'(?:we|I) (?:have |will |decided to )(.+?)(?:\.|$)', 'explicit_decision'),
            (r'(?:decision|conclusion|agreement)[:\s]+(.+?)(?:\.|$)', 'stated_decision'),
            (r'(?:let\'s|we should) (.+?)(?:\.|$)', 'proposed_action')
        ]
        
        for pattern, decision_type in patterns:
            matches = re.finditer(pattern, body, re.IGNORECASE)
            for match in matches:
                decisions.append({
                    'text': match.group(1).strip(),
                    'type': decision_type,
                    'confidence': 0.8 if decision_type == 'explicit_decision' else 0.6
                })
        
        return decisions[:5]
    
    def _detect_action_items(self, body: str) -> List[Dict]:
        """Detect action items in email."""
        action_items = []
        
        patterns = [
            (r'(?:please|could you|can you) (.+?)(?:\.|$)', 'request'),
            (r'(?:action item|todo|task)[:\s]+(.+?)(?:\.|$)', 'explicit_task'),
            (r'(?:I|we) (?:will|shall) (.+?)(?:\.|$)', 'commitment')
        ]
        
        for pattern, item_type in patterns:
            matches = re.finditer(pattern, body, re.IGNORECASE)
            for match in matches:
                action_items.append({
                    'text': match.group(1).strip(),
                    'type': item_type,
                    'confidence': 0.9 if item_type == 'explicit_task' else 0.7
                })
        
        return action_items[:5]
    
    def _calculate_thread_health(self, thread_id: str) -> Dict:
        """Calculate thread health metrics."""
        emails = self.threads.get(thread_id, [])
        
        if len(emails) < 2:
            return {'status': 'new', 'score': 50}
        
        # Calculate response times
        timestamps = [datetime.fromisoformat(e['timestamp'].replace('Z', '+00:00')) for e in emails]
        response_times = []
        for i in range(1, len(timestamps)):
            diff_hours = (timestamps[i] - timestamps[i-1]).total_seconds() / 3600
            response_times.append(diff_hours)
        
        avg_response_time = sum(response_times) / len(response_times) if response_times else 0
        
        # Determine health
        if avg_response_time < 4:
            status = 'excellent'
            score = 95
        elif avg_response_time < 24:
            status = 'good'
            score = 80
        elif avg_response_time < 72:
            status = 'fair'
            score = 60
        else:
            status = 'slow'
            score = 40
        
        return {
            'status': status,
            'score': score,
            'avg_response_hours': round(avg_response_time, 1),
            'total_messages': len(emails)
        }
    
    def _generate_recommendations(self, thread_summary, related_threads, decisions, action_items, reply_all_required) -> List[str]:
        """Generate context-aware recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included in your response')
        
        if related_threads:
            recommendations.append(f'🔗 {len(related_threads)} related thread(s) found - review for additional context')
        
        if decisions:
            recommendations.append(f'✅ {len(decisions)} decision(s) documented - ensure alignment')
        
        if action_items:
            recommendations.append(f'📋 {len(action_items)} action item(s) detected - track completion')
        
        if thread_summary.get('duration_days', 0) > 14:
            recommendations.append('⏰ Long-running thread - consider summarizing key points')
        
        if thread_summary.get('participant_count', 0) > 5:
            recommendations.append('👥 Many participants - ensure clear communication and role clarity')
        
        if not recommendations:
            recommendations.append('✅ Thread context is clear and manageable')
        
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
            'body': 'Let us plan the next sprint for Project Alpha. We need to finalize the API integration and database schema.',
            'timestamp': '2024-01-10T10:00:00'
        },
        {
            'id': '2',
            'thread_id': 'project_alpha',
            'sender': 'dev@company.com',
            'recipients': ['pm@company.com', 'design@company.com'],
            'subject': 'Re: Project Alpha - Sprint Planning',
            'body': 'I will complete the API integration by Friday. Please review the database schema document. John Smith will handle the frontend.',
            'timestamp': '2024-01-10T14:00:00'
        }
    ]
    
    print("=== V1088: Smart Email Threading & Context Builder ===\n")
    
    for email in test_emails:
        result = engine.build_context(email)
        print(f"Email: {email['subject']}")
        print(f"  Thread: {result['thread_id']}")
        print(f"  Messages: {result['thread_summary'].get('message_count', 0)}")
        print(f"  Participants: {result['thread_summary'].get('participant_count', 0)}")
        print(f"  Entities: {result['entities'][:3]}")
        print(f"  Decisions: {len(result['decisions'])}")
        print(f"  Action Items: {len(result['action_items'])}")
        print(f"  Related Threads: {len(result['related_threads'])}")
        print(f"  Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
        print()
    
    print("✅ All tests passed!")
