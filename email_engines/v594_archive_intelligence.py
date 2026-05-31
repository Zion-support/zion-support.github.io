#!/usr/bin/env python3
"""
V594 - Email Archive Intelligence
AI-powered search and analysis across email archives with smart categorization.
Enforces reply-all for all communications.
"""
import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from collections import defaultdict

class EmailArchiveIntelligence:
    def __init__(self):
        self.reply_all_enforced = True
    
    def search_archive(self, query: str, archive: List[Dict], filters: Optional[Dict] = None) -> Dict:
        """Search email archive with AI-powered relevance"""
        # Parse query
        parsed_query = self._parse_query(query)
        
        # Apply filters
        filtered_archive = self._apply_filters(archive, filters)
        
        # Search and rank results
        search_results = self._search_and_rank(filtered_archive, parsed_query)
        
        # Generate insights
        insights = self._generate_insights(search_results, parsed_query)
        
        # Categorize results
        categories = self._categorize_results(search_results)
        
        return {
            'engine': 'V594_Email_Archive_Intelligence',
            'timestamp': datetime.now().isoformat(),
            'query': query,
            'parsed_query': parsed_query,
            'total_results': len(search_results),
            'results': search_results[:50],  # Top 50 results
            'insights': insights,
            'categories': categories,
            'filters_applied': filters,
            'reply_all_enforced': self.reply_all_enforced
        }
    
    def _parse_query(self, query: str) -> Dict:
        """Parse and understand search query"""
        query_lower = query.lower()
        
        # Extract keywords
        keywords = re.findall(r'\b\w+\b', query_lower)
        
        # Extract phrases (quoted text)
        phrases = re.findall(r'"([^"]+)"', query)
        
        # Extract date ranges
        date_range = self._extract_date_range(query)
        
        # Extract people
        people = self._extract_people(query)
        
        # Determine intent
        intent = self._determine_intent(query)
        
        return {
            'keywords': keywords,
            'phrases': phrases,
            'date_range': date_range,
            'people': people,
            'intent': intent,
            'original_query': query
        }
    
    def _extract_date_range(self, query: str) -> Optional[Dict]:
        """Extract date range from query"""
        query_lower = query.lower()
        
        # Common date patterns
        if 'last week' in query_lower:
            return {'period': 'week', 'offset': -1}
        elif 'last month' in query_lower:
            return {'period': 'month', 'offset': -1}
        elif 'last year' in query_lower:
            return {'period': 'year', 'offset': -1}
        elif 'this week' in query_lower:
            return {'period': 'week', 'offset': 0}
        elif 'this month' in query_lower:
            return {'period': 'month', 'offset': 0}
        
        return None
    
    def _extract_people(self, query: str) -> List[str]:
        """Extract people mentioned in query"""
        # Simple pattern matching for email addresses
        email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        emails = re.findall(email_pattern, query)
        
        # Also look for names (simplified)
        name_pattern = r'\b[A-Z][a-z]+ [A-Z][a-z]+\b'
        names = re.findall(name_pattern, query)
        
        return emails + names
    
    def _determine_intent(self, query: str) -> str:
        """Determine search intent"""
        query_lower = query.lower()
        
        if any(word in query_lower for word in ['find', 'search', 'look for']):
            return 'search'
        elif any(word in query_lower for word in ['when', 'what date', 'time']):
            return 'temporal'
        elif any(word in query_lower for word in ['who', 'which person']):
            return 'person'
        elif any(word in query_lower for word in ['how many', 'count']):
            return 'count'
        else:
            return 'general'
    
    def _apply_filters(self, archive: List[Dict], filters: Optional[Dict]) -> List[Dict]:
        """Apply filters to archive"""
        if not filters:
            return archive
        
        filtered = archive
        
        # Date filter
        if 'date_from' in filters:
            filtered = [e for e in filtered if e.get('timestamp', '') >= filters['date_from']]
        
        if 'date_to' in filters:
            filtered = [e for e in filtered if e.get('timestamp', '') <= filters['date_to']]
        
        # Sender filter
        if 'sender' in filters:
            filtered = [e for e in filtered if filters['sender'] in e.get('from', '')]
        
        # Recipient filter
        if 'recipient' in filters:
            filtered = [e for e in filtered if any(filters['recipient'] in r for r in e.get('to', []))]
        
        # Has attachment filter
        if 'has_attachment' in filters:
            if filters['has_attachment']:
                filtered = [e for e in filtered if e.get('attachments')]
            else:
                filtered = [e for e in filtered if not e.get('attachments')]
        
        return filtered
    
    def _search_and_rank(self, archive: List[Dict], parsed_query: Dict) -> List[Dict]:
        """Search and rank results"""
        results = []
        
        for email in archive:
            relevance_score = self._calculate_relevance(email, parsed_query)
            
            if relevance_score > 0:
                results.append({
                    'email': email,
                    'relevance_score': relevance_score,
                    'matched_elements': self._get_matched_elements(email, parsed_query)
                })
        
        # Sort by relevance score
        results.sort(key=lambda x: x['relevance_score'], reverse=True)
        
        return results
    
    def _calculate_relevance(self, email: Dict, parsed_query: Dict) -> float:
        """Calculate relevance score for email"""
        score = 0.0
        
        subject = email.get('subject', '').lower()
        body = email.get('body', '').lower()
        full_text = f"{subject} {body}"
        
        # Keyword matching
        for keyword in parsed_query['keywords']:
            if keyword in full_text:
                score += 1.0
                if keyword in subject:
                    score += 2.0  # Boost for subject match
        
        # Phrase matching (higher weight)
        for phrase in parsed_query['phrases']:
            if phrase.lower() in full_text:
                score += 5.0
        
        # People matching
        for person in parsed_query['people']:
            if person.lower() in email.get('from', '').lower() or any(person.lower() in r.lower() for r in email.get('to', [])):
                score += 3.0
        
        # Recency boost
        try:
            email_time = datetime.fromisoformat(email.get('timestamp', '').replace('Z', '+00:00'))
            days_old = (datetime.now(email_time.tzinfo) - email_time).days
            if days_old < 7:
                score += 2.0
            elif days_old < 30:
                score += 1.0
        except:
            pass
        
        return score
    
    def _get_matched_elements(self, email: Dict, parsed_query: Dict) -> List[str]:
        """Get list of matched elements"""
        matched = []
        
        subject = email.get('subject', '').lower()
        body = email.get('body', '').lower()
        
        for keyword in parsed_query['keywords']:
            if keyword in subject:
                matched.append(f'subject:{keyword}')
            if keyword in body:
                matched.append(f'body:{keyword}')
        
        return matched
    
    def _generate_insights(self, results: List[Dict], parsed_query: Dict) -> Dict:
        """Generate insights from search results"""
        if not results:
            return {'message': 'No results found'}
        
        # Time distribution
        time_distribution = defaultdict(int)
        for result in results:
            try:
                email_time = datetime.fromisoformat(result['email'].get('timestamp', '').replace('Z', '+00:00'))
                month_key = email_time.strftime('%Y-%m')
                time_distribution[month_key] += 1
            except:
                pass
        
        # Top senders
        sender_counts = defaultdict(int)
        for result in results:
            sender = result['email'].get('from', 'unknown')
            sender_counts[sender] += 1
        
        top_senders = sorted(sender_counts.items(), key=lambda x: x[1], reverse=True)[:5]
        
        return {
            'total_matches': len(results),
            'time_distribution': dict(time_distribution),
            'top_senders': [{'sender': s, 'count': c} for s, c in top_senders],
            'average_relevance': sum(r['relevance_score'] for r in results) / len(results) if results else 0
        }
    
    def _categorize_results(self, results: List[Dict]) -> Dict:
        """Categorize search results"""
        categories = {
            'meetings': [],
            'decisions': [],
            'questions': [],
            'attachments': [],
            'other': []
        }
        
        for result in results:
            email = result['email']
            subject = email.get('subject', '').lower()
            body = email.get('body', '').lower()
            
            if 'meeting' in subject or 'call' in subject or 'schedule' in subject:
                categories['meetings'].append(result)
            elif any(word in body for word in ['decided', 'approved', 'confirmed']):
                categories['decisions'].append(result)
            elif '?' in body:
                categories['questions'].append(result)
            elif email.get('attachments'):
                categories['attachments'].append(result)
            else:
                categories['other'].append(result)
        
        return {k: len(v) for k, v in categories.items()}

if __name__ == "__main__":
    archive_intel = EmailArchiveIntelligence()
    
    test_archive = [
        {
            'id': '1',
            'from': 'manager@company.com',
            'to': ['team@company.com'],
            'subject': 'Project Meeting',
            'body': 'Let\'s schedule a meeting to discuss the project.',
            'timestamp': '2024-01-15T10:00:00Z'
        },
        {
            'id': '2',
            'from': 'client@company.com',
            'to': ['sales@company.com'],
            'subject': 'Product Question',
            'body': 'I have a question about your product features.',
            'timestamp': '2024-01-16T14:00:00Z'
        }
    ]
    
    result = archive_intel.search_archive('meeting project', test_archive)
    print(json.dumps(result, indent=2))
