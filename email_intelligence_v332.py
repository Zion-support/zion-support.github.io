"""
Email Intelligence V332 - Search Intelligence
Advanced semantic search across all emails with natural language queries,
context-aware results, and intelligent filtering by importance, sender, and topic.
Enforces reply-all and case-by-case analysis.
"""

from datetime import datetime
from typing import Dict, List
import json
import re


class EmailSearchIntelligence:
    """
    V332: Intelligent email search with semantic understanding, natural language
    queries, and context-aware result ranking.
    """
    
    VERSION = "V332"
    ENGINE_NAME = "Search Intelligence"
    
    def __init__(self):
        self.search_index = {}
        self.search_history = []
    
    def analyze_email(self, email_data: Dict) -> Dict:
        """Index email for search with case-by-case analysis."""
        sender = email_data.get('from', '')
        content = email_data.get('body', '')
        subject = email_data.get('subject', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # Extract searchable content
        searchable = self._extract_searchable_content(subject, content)
        
        # Generate semantic tags
        semantic_tags = self._generate_semantic_tags(content, subject)
        
        # Calculate importance score
        importance = self._calculate_importance(email_data)
        
        # Index email
        email_id = self._index_email(email_data, searchable, semantic_tags, importance)
        
        analysis = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': timestamp,
            'sender': sender,
            'email_id': email_id,
            'searchable_content': searchable,
            'semantic_tags': semantic_tags,
            'importance_score': importance,
            'index_status': 'indexed'
        }
        
        return analysis
    
    def generate_response(self, email_data: Dict) -> Dict:
        """Generate search-aware response. ALWAYS enforces reply-all."""
        sender = email_data.get('from', '')
        to_recipients = email_data.get('to', [])
        cc_recipients = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        content = email_data.get('body', '')
        
        # Analyze email
        analysis = self.analyze_email(email_data)
        
        # ENFORCE REPLY-ALL
        all_recipients = self._enforce_reply_all(to_recipients, cc_recipients, sender)
        
        # Generate response
        response_body = self._generate_search_response(sender, content, analysis)
        
        response = {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'timestamp': datetime.now().isoformat(),
            'to': all_recipients,
            'subject': f"Re: {subject}" if not subject.lower().startswith('re:') else subject,
            'body': response_body,
            'email_indexed': True,
            'semantic_tags': len(analysis['semantic_tags']),
            'importance_score': analysis['importance_score'],
            'reply_all_enforced': True
        }
        
        return response
    
    def search(self, query: str, filters: Dict = None) -> Dict:
        """Perform intelligent search"""
        # Parse natural language query
        parsed_query = self._parse_query(query)
        
        # Apply filters
        results = self._execute_search(parsed_query, filters)
        
        # Rank results
        ranked_results = self._rank_results(results, parsed_query)
        
        return {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'query': query,
            'parsed_query': parsed_query,
            'results_count': len(ranked_results),
            'results': ranked_results[:20],  # Top 20 results
            'timestamp': datetime.now().isoformat()
        }
    
    def _extract_searchable_content(self, subject: str, content: str) -> Dict:
        """Extract searchable content from email"""
        # Clean and normalize text
        clean_content = re.sub(r'\s+', ' ', content).strip()
        clean_subject = re.sub(r'\s+', ' ', subject).strip()
        
        # Extract key phrases
        sentences = clean_content.split('.')
        key_phrases = [s.strip() for s in sentences if len(s.strip()) > 20][:10]
        
        # Extract entities (simplified)
        entities = self._extract_entities(clean_content)
        
        return {
            'subject': clean_subject,
            'content': clean_content,
            'key_phrases': key_phrases,
            'entities': entities,
            'word_count': len(clean_content.split())
        }
    
    def _generate_semantic_tags(self, content: str, subject: str) -> List[str]:
        """Generate semantic tags for email"""
        text = f"{subject} {content}".lower()
        
        # Topic categories
        topic_keywords = {
            'finance': ['budget', 'cost', 'price', 'payment', 'invoice', 'financial'],
            'project': ['project', 'milestone', 'deadline', 'deliverable', 'timeline'],
            'meeting': ['meeting', 'agenda', 'schedule', 'calendar', 'appointment'],
            'sales': ['deal', 'contract', 'proposal', 'client', 'customer', 'revenue'],
            'technical': ['code', 'bug', 'feature', 'deployment', 'system', 'api'],
            'hr': ['hiring', 'interview', 'employee', 'team', 'performance'],
            'legal': ['contract', 'agreement', 'compliance', 'regulation', 'policy']
        }
        
        tags = []
        for topic, keywords in topic_keywords.items():
            if any(kw in text for kw in keywords):
                tags.append(topic)
        
        # Priority tags
        if any(word in text for word in ['urgent', 'asap', 'critical', 'immediate']):
            tags.append('urgent')
        
        if any(word in text for word in ['important', 'priority', 'high']):
            tags.append('important')
        
        return list(set(tags))
    
    def _calculate_importance(self, email_data: Dict) -> float:
        """Calculate email importance score (0-100)"""
        score = 50  # Base score
        
        content = email_data.get('body', '').lower()
        subject = email_data.get('subject', '').lower()
        sender = email_data.get('from', '').lower()
        
        # Sender importance
        important_senders = ['ceo', 'cfo', 'cto', 'president', 'director', 'manager']
        if any(imp in sender for imp in important_senders):
            score += 20
        
        # Subject keywords
        if any(word in subject for word in ['urgent', 'critical', 'asap']):
            score += 15
        elif any(word in subject for word in ['important', 'priority']):
            score += 10
        
        # Content keywords
        if any(word in content for word in ['deadline', 'due date', 'by friday']):
            score += 10
        
        # Length consideration
        word_count = len(content.split())
        if word_count > 500:
            score += 5
        
        return min(100, max(0, score))
    
    def _index_email(self, email_data: Dict, searchable: Dict, tags: List, importance: float) -> str:
        """Index email for search"""
        email_id = f"{hash(email_data.get('from', '') + email_data.get('subject', ''))}_{int(datetime.now().timestamp())}"
        
        self.search_index[email_id] = {
            'email_data': email_data,
            'searchable': searchable,
            'tags': tags,
            'importance': importance,
            'indexed_at': datetime.now().isoformat()
        }
        
        return email_id
    
    def _extract_entities(self, content: str) -> Dict:
        """Extract entities from content (simplified)"""
        # Email addresses
        emails = re.findall(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', content)
        
        # Dates (simplified pattern)
        dates = re.findall(r'\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b', content)
        
        # Numbers (amounts, percentages)
        numbers = re.findall(r'\b\d+[%$]?\b', content)
        
        return {
            'emails': list(set(emails))[:5],
            'dates': list(set(dates))[:5],
            'numbers': list(set(numbers))[:10]
        }
    
    def _parse_query(self, query: str) -> Dict:
        """Parse natural language query"""
        query_lower = query.lower()
        
        # Extract keywords
        keywords = query_lower.split()
        
        # Detect intent
        intent = 'search'
        if 'from' in query_lower:
            intent = 'sender_search'
        elif 'about' in query_lower or 'regarding' in query_lower:
            intent = 'topic_search'
        elif 'urgent' in query_lower or 'important' in query_lower:
            intent = 'priority_search'
        
        # Extract filters
        filters = {}
        if 'last week' in query_lower:
            filters['timeframe'] = 'week'
        elif 'last month' in query_lower:
            filters['timeframe'] = 'month'
        
        return {
            'original_query': query,
            'keywords': keywords,
            'intent': intent,
            'filters': filters
        }
    
    def _execute_search(self, parsed_query: Dict, filters: Dict = None) -> List[Dict]:
        """Execute search query"""
        results = []
        keywords = parsed_query['keywords']
        
        for email_id, indexed in self.search_index.items():
            searchable = indexed['searchable']
            text = f"{searchable['subject']} {searchable['content']}".lower()
            
            # Calculate relevance score
            relevance = sum(1 for kw in keywords if kw in text)
            
            if relevance > 0:
                results.append({
                    'email_id': email_id,
                    'email_data': indexed['email_data'],
                    'relevance_score': relevance,
                    'importance': indexed['importance'],
                    'tags': indexed['tags']
                })
        
        return results
    
    def _rank_results(self, results: List[Dict], parsed_query: Dict) -> List[Dict]:
        """Rank search results"""
        # Sort by combined score (relevance + importance)
        for result in results:
            result['combined_score'] = (
                result['relevance_score'] * 0.6 +
                result['importance'] * 0.4
            )
        
        # Sort by combined score
        ranked = sorted(results, key=lambda x: x['combined_score'], reverse=True)
        
        return ranked
    
    def _generate_search_response(self, sender: str, content: str, analysis: Dict) -> str:
        """Generate search-aware response"""
        sender_name = sender.split('@')[0] if '@' in sender else sender
        
        response = f"""Hello {sender_name},

Thank you for your email. I've indexed your message for easy retrieval and search.

Email Details:
- Indexed with {len(analysis['semantic_tags'])} semantic tags
- Importance Score: {analysis['importance_score']}/100
- Tags: {', '.join(analysis['semantic_tags']) if analysis['semantic_tags'] else 'General'}

I'll respond to your message shortly and ensure all relevant information is easily searchable for future reference.

Best regards,
[Your Name]

---
This response was generated by {self.ENGINE_NAME} ({self.VERSION}) with search intelligence.
Email ID: {analysis['email_id']} | Tags: {len(analysis['semantic_tags'])}
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
    
    def get_search_stats(self) -> Dict:
        """Get search statistics"""
        total_indexed = len(self.search_index)
        
        if total_indexed == 0:
            return {
                'version': self.VERSION,
                'engine': self.ENGINE_NAME,
                'message': 'No emails indexed yet'
            }
        
        # Calculate average importance
        importances = [data['importance'] for data in self.search_index.values()]
        avg_importance = sum(importances) / len(importances)
        
        # Count tags
        all_tags = []
        for data in self.search_index.values():
            all_tags.extend(data['tags'])
        
        tag_counts = {}
        for tag in all_tags:
            tag_counts[tag] = tag_counts.get(tag, 0) + 1
        
        return {
            'version': self.VERSION,
            'engine': self.ENGINE_NAME,
            'total_indexed': total_indexed,
            'average_importance': round(avg_importance, 2),
            'top_tags': sorted(tag_counts.items(), key=lambda x: x[1], reverse=True)[:5],
            'timestamp': datetime.now().isoformat()
        }


# Test the engine
if __name__ == "__main__":
    engine = EmailSearchIntelligence()
    
    test_email = {
        'from': 'project.manager@company.com',
        'to': ['team@company.com'],
        'cc': ['stakeholders@company.com', 'finance@company.com'],
        'subject': 'Project Alpha - Budget Update and Timeline',
        'body': 'Team, please review the attached budget proposal for Project Alpha. The deadline for feedback is Friday. Total cost is $50,000.',
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
    
    # Test search
    search_result = engine.search("budget project deadline")
    print("\n🔍 Search Results:")
    print(json.dumps(search_result, indent=2))
    
    stats = engine.get_search_stats()
    print("\n📊 Search Statistics:")
    print(json.dumps(stats, indent=2))
    
    print("\n✅ Reply-All Enforcement: ACTIVE")
    print(f"✅ Recipients: {response['to']}")
    print("✅ Search Intelligence: ENABLED")
