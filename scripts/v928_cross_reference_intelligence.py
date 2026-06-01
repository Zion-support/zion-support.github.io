#!/usr/bin/env python3
"""
V928: Email Cross-Reference Intelligence
Automatically links related emails across different threads, projects, and time periods.
Creates a unified view of all communications related to any topic, person, or project.
"""

import re
from datetime import datetime, timedelta
from typing import Dict, List, Any, Set, Tuple
from collections import defaultdict

class CrossReferenceIntelligence:
    def __init__(self):
        self.email_database = []  # Stores all emails for cross-referencing
        self.topic_keywords = {}  # Maps topics to keywords
        self.project_patterns = {}  # Maps projects to identifier patterns
        
    def add_email(self, email: Dict[str, Any]) -> None:
        """Add email to database for cross-referencing."""
        self.email_database.append(email)
    
    def find_related_emails(self, query_email: Dict[str, Any], max_results: int = 20) -> Dict[str, Any]:
        """Find all emails related to the query email."""
        if not self.email_database:
            return {
                'query_email': query_email.get('id', ''),
                'related_emails': [],
                'topics': [],
                'projects': [],
                'people': [],
                'timeline': [],
                'summary': 'No emails in database for cross-referencing'
            }
        
        # Extract features from query email
        query_features = self._extract_features(query_email)
        
        # Find related emails
        related = []
        for email in self.email_database:
            if email.get('id') == query_email.get('id'):
                continue  # Skip the query email itself
            
            # Calculate similarity score
            similarity = self._calculate_similarity(query_features, email)
            
            if similarity['score'] > 0.3:  # Threshold for relevance
                related.append({
                    'email': email,
                    'similarity_score': round(similarity['score'], 2),
                    'match_reasons': similarity['reasons']
                })
        
        # Sort by similarity score
        related.sort(key=lambda x: x['similarity_score'], reverse=True)
        related = related[:max_results]
        
        # Extract common topics, projects, and people
        common_topics = self._extract_common_topics([query_email] + [r['email'] for r in related])
        common_projects = self._extract_common_projects([query_email] + [r['email'] for r in related])
        common_people = self._extract_common_people([query_email] + [r['email'] for r in related])
        
        # Build timeline
        timeline = self._build_timeline([query_email] + [r['email'] for r in related])
        
        # Generate unified view
        unified_view = self._generate_unified_view(query_email, related, common_topics, common_projects, common_people)
        
        result = {
            'query_email': query_email.get('id', ''),
            'related_count': len(related),
            'related_emails': related,
            'topics': common_topics,
            'projects': common_projects,
            'people': common_people,
            'timeline': timeline,
            'unified_view': unified_view,
            'summary': self._generate_summary(related, common_topics, common_projects, common_people)
        }
        
        return result
    
    def _extract_features(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Extract features from email for comparison."""
        subject = email.get('subject', '').lower()
        body = email.get('body', '').lower()
        text = f"{subject} {body}"
        
        # Extract keywords (simple word frequency)
        words = re.findall(r'\b\w{3,}\b', text)
        word_freq = defaultdict(int)
        for word in words:
            if word not in ['the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had', 'her', 'was', 'one', 'our', 'out']:
                word_freq[word] += 1
        
        # Extract project identifiers (e.g., PROJ-123, Ticket #456)
        project_ids = re.findall(r'\b[A-Z]{2,5}-\d{3,}\b', email.get('subject', ''))
        project_ids += re.findall(r'Ticket\s*#\d+', text, re.IGNORECASE)
        
        # Extract email addresses
        emails_mentioned = re.findall(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', text)
        
        return {
            'subject': subject,
            'body': body,
            'text': text,
            'word_freq': dict(word_freq),
            'project_ids': list(set(project_ids)),
            'sender': email.get('sender', ''),
            'recipients': email.get('recipients', []),
            'emails_mentioned': emails_mentioned,
            'timestamp': email.get('timestamp', '')
        }
    
    def _calculate_similarity(self, query_features: Dict, target_email: Dict[str, Any]) -> Dict[str, Any]:
        """Calculate similarity between query and target email."""
        target_features = self._extract_features(target_email)
        
        score = 0.0
        reasons = []
        
        # 1. Subject similarity (word overlap)
        subject_overlap = self._calculate_word_overlap(query_features['subject'], target_features['subject'])
        if subject_overlap > 0.5:
            score += 0.3
            reasons.append(f"Similar subject ({subject_overlap:.0%} overlap)")
        
        # 2. Body text similarity
        body_overlap = self._calculate_word_overlap(
            ' '.join(query_features['text'].split()[:50]),  # First 50 words
            ' '.join(target_features['text'].split()[:50])
        )
        if body_overlap > 0.3:
            score += 0.2
            reasons.append(f"Related content ({body_overlap:.0%} overlap)")
        
        # 3. Project ID match
        project_overlap = set(query_features['project_ids']) & set(target_features['project_ids'])
        if project_overlap:
            score += 0.3
            reasons.append(f"Same project: {', '.join(project_overlap)}")
        
        # 4. People overlap (sender/recipients)
        query_people = set([query_features['sender']] + query_features['recipients'])
        target_people = set([target_features['sender']] + target_features['recipients'])
        people_overlap = query_people & target_people
        
        if len(people_overlap) >= 2:
            score += 0.15
            reasons.append(f"Shared participants: {len(people_overlap)}")
        elif len(people_overlap) >= 1:
            score += 0.1
            reasons.append(f"Shared participant: {list(people_overlap)[0]}")
        
        # 5. Time proximity (within 7 days)
        try:
            query_time = datetime.fromisoformat(query_features['timestamp'].replace('Z', '+00:00'))
            target_time = datetime.fromisoformat(target_features['timestamp'].replace('Z', '+00:00'))
            time_diff = abs((query_time - target_time).days)
            
            if time_diff <= 1:
                score += 0.1
                reasons.append("Same day")
            elif time_diff <= 7:
                score += 0.05
                reasons.append(f"Within {time_diff} days")
        except:
            pass
        
        # Cap at 1.0
        score = min(1.0, score)
        
        return {'score': score, 'reasons': reasons}
    
    def _calculate_word_overlap(self, text1: str, text2: str) -> float:
        """Calculate word overlap between two texts."""
        words1 = set(re.findall(r'\b\w{3,}\b', text1.lower()))
        words2 = set(re.findall(r'\b\w{3,}\b', text2.lower()))
        
        if not words1 or not words2:
            return 0.0
        
        overlap = words1 & words2
        union = words1 | words2
        
        return len(overlap) / len(union) if union else 0.0
    
    def _extract_common_topics(self, emails: List[Dict]) -> List[str]:
        """Extract common topics from emails."""
        all_text = ' '.join([email.get('subject', '') + ' ' + email.get('body', '') for email in emails])
        
        # Simple keyword extraction
        words = re.findall(r'\b[A-Z][a-z]{3,}\b', all_text)  # Capitalized words
        word_freq = defaultdict(int)
        for word in words:
            word_freq[word] += 1
        
        # Return top 5 topics
        topics = sorted(word_freq.items(), key=lambda x: x[1], reverse=True)[:5]
        return [topic for topic, count in topics if count > 1]
    
    def _extract_common_projects(self, emails: List[Dict]) -> List[str]:
        """Extract common project identifiers."""
        all_text = ' '.join([email.get('subject', '') for email in emails])
        project_ids = re.findall(r'\b[A-Z]{2,5}-\d{3,}\b', all_text)
        return list(set(project_ids))
    
    def _extract_common_people(self, emails: List[Dict]) -> List[str]:
        """Extract common participants."""
        all_people = set()
        for email in emails:
            all_people.add(email.get('sender', ''))
            all_people.update(email.get('recipients', []))
        
        return list(all_people)[:10]  # Limit to 10 people
    
    def _build_timeline(self, emails: List[Dict]) -> List[Dict]:
        """Build chronological timeline of emails."""
        timeline = []
        for email in emails:
            try:
                timestamp = datetime.fromisoformat(email.get('timestamp', '').replace('Z', '+00:00'))
                timeline.append({
                    'timestamp': timestamp.isoformat(),
                    'email_id': email.get('id', ''),
                    'subject': email.get('subject', ''),
                    'sender': email.get('sender', '')
                })
            except:
                pass
        
        timeline.sort(key=lambda x: x['timestamp'])
        return timeline
    
    def _generate_unified_view(self, query_email: Dict, related: List[Dict], topics: List, projects: List, people: List) -> str:
        """Generate unified view of all related communications."""
        view_parts = [
            f"## Unified Communication View\n",
            f"**Query Email:** {query_email.get('subject', 'N/A')}\n",
            f"**Related Emails:** {len(related)}\n",
            f"**Time Span:** {self._calculate_time_span([query_email] + [r['email'] for r in related])}\n",
        ]
        
        if topics:
            view_parts.append(f"**Topics:** {', '.join(topics)}\n")
        
        if projects:
            view_parts.append(f"**Projects:** {', '.join(projects)}\n")
        
        if people:
            view_parts.append(f"**Participants:** {len(people)} people involved\n")
        
        view_parts.append("\n### Key Events Timeline:")
        for event in self._build_timeline([query_email] + [r['email'] for r in related])[:5]:
            view_parts.append(f"- {event['timestamp'][:10]}: {event['subject'][:50]}")
        
        return '\n'.join(view_parts)
    
    def _calculate_time_span(self, emails: List[Dict]) -> str:
        """Calculate time span of emails."""
        timestamps = []
        for email in emails:
            try:
                ts = datetime.fromisoformat(email.get('timestamp', '').replace('Z', '+00:00'))
                timestamps.append(ts)
            except:
                pass
        
        if not timestamps:
            return 'Unknown'
        
        min_time = min(timestamps)
        max_time = max(timestamps)
        days = (max_time - min_time).days
        
        if days == 0:
            return 'Same day'
        elif days == 1:
            return '1 day'
        elif days < 30:
            return f'{days} days'
        elif days < 365:
            return f'{days // 30} months'
        else:
            return f'{days // 365} years'
    
    def _generate_summary(self, related: List[Dict], topics: List, projects: List, people: List) -> str:
        """Generate human-readable summary."""
        parts = [f"Found {len(related)} related emails."]
        
        if topics:
            parts.append(f"Main topics: {', '.join(topics[:3])}.")
        
        if projects:
            parts.append(f"Projects: {', '.join(projects)}.")
        
        if people:
            parts.append(f"{len(people)} participants involved.")
        
        return ' '.join(parts)


def main():
    """Test the Cross-Reference Intelligence engine."""
    engine = CrossReferenceIntelligence()
    
    # Add sample emails to database
    sample_emails = [
        {
            'id': 'email_1',
            'timestamp': '2026-05-25T10:00:00',
            'sender': 'alice@company.com',
            'subject': 'PROJ-456: Initial project kickoff',
            'body': 'Starting the new API integration project today.',
            'recipients': ['bob@company.com', 'carol@company.com']
        },
        {
            'id': 'email_2',
            'timestamp': '2026-05-27T14:30:00',
            'sender': 'bob@company.com',
            'subject': 'Re: PROJ-456: Technical requirements',
            'body': 'Here are the technical requirements for the API integration.',
            'recipients': ['alice@company.com', 'carol@company.com']
        },
        {
            'id': 'email_3',
            'timestamp': '2026-05-29T09:15:00',
            'sender': 'carol@company.com',
            'subject': 'PROJ-456: Timeline concerns',
            'body': 'I\'m concerned about the timeline for the API integration project.',
            'recipients': ['alice@company.com', 'bob@company.com']
        },
        {
            'id': 'email_4',
            'timestamp': '2026-05-30T16:45:00',
            'sender': 'dave@company.com',
            'subject': 'Unrelated: Team lunch',
            'body': 'Who\'s coming to team lunch tomorrow?',
            'recipients': ['team@company.com']
        }
    ]
    
    for email in sample_emails:
        engine.add_email(email)
    
    # Query with email_3 (concerns about PROJ-456)
    query_email = sample_emails[2]
    result = engine.find_related_emails(query_email)
    
    print("=" * 60)
    print("V928: Cross-Reference Intelligence - Test Results")
    print("=" * 60)
    print(f"\nQuery: {query_email['subject']}")
    print(f"Related Emails Found: {result['related_count']}")
    print(f"\nRelated Emails:")
    for rel in result['related_emails']:
        print(f"  - {rel['email']['subject']} (similarity: {rel['similarity_score']})")
        print(f"    Reasons: {', '.join(rel['match_reasons'])}")
    
    print(f"\nTopics: {result['topics']}")
    print(f"Projects: {result['projects']}")
    print(f"People: {result['people']}")
    print(f"\nSummary: {result['summary']}")
    print("\n✅ V928 Cross-Reference Intelligence: OPERATIONAL")


if __name__ == '__main__':
    main()
