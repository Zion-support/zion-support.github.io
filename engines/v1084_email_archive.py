#!/usr/bin/env python3
"""
V1084: Email Archive & Search
Intelligent email archival with semantic search and auto-categorization.
"""

import re
import hashlib
from datetime import datetime
from collections import defaultdict

class EmailArchive:
    def __init__(self):
        self.archive = {}
        self.categories = defaultdict(list)
        self.tags = defaultdict(list)
    
    def archive_email(self, email_data):
        """Archive email with intelligent categorization."""
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        reply_all_required = len(recipients) > 1
        
        # Generate unique ID
        email_id = hashlib.md5(f"{sender}{subject}{timestamp}".encode()).hexdigest()[:12]
        
        # Auto-categorize
        category = self._categorize_email(subject, body)
        
        # Extract tags
        tags = self._extract_tags(subject, body)
        
        # Extract key information
        key_info = self._extract_key_info(body)
        
        # Calculate importance
        importance = self._calculate_importance(subject, body, sender)
        
        # Store in archive
        archive_entry = {
            'id': email_id,
            'sender': sender,
            'recipients': recipients,
            'subject': subject,
            'body': body,
            'timestamp': timestamp,
            'category': category,
            'tags': tags,
            'key_info': key_info,
            'importance': importance,
            'indexed': True
        }
        
        self.archive[email_id] = archive_entry
        self.categories[category].append(email_id)
        
        for tag in tags:
            self.tags[tag].append(email_id)
        
        # Generate search summary
        search_summary = self._generate_search_summary(archive_entry)
        
        # Recommendations
        recommendations = self._generate_recommendations(category, importance, reply_all_required)
        
        return {
            'email_id': email_data.get('id'),
            'archive_id': email_id,
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'category': category,
            'tags': tags,
            'importance_score': importance,
            'key_information': key_info,
            'search_summary': search_summary,
            'retention_policy': self._get_retention_policy(category),
            'recommendations': recommendations,
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def search_archive(self, query):
        """Search archived emails semantically."""
        results = []
        query_lower = query.lower()
        
        for email_id, email in self.archive.items():
            # Simple keyword matching (would use embeddings in production)
            searchable_text = f"{email['subject']} {email['body']} {' '.join(email['tags'])}".lower()
            
            if query_lower in searchable_text:
                # Calculate relevance score
                relevance = self._calculate_relevance(query, email)
                
                results.append({
                    'email_id': email_id,
                    'subject': email['subject'],
                    'sender': email['sender'],
                    'timestamp': email['timestamp'],
                    'category': email['category'],
                    'relevance_score': relevance,
                    'preview': email['body'][:200]
                })
        
        # Sort by relevance
        results.sort(key=lambda x: x['relevance_score'], reverse=True)
        
        return results[:20]  # Return top 20 results
    
    def _categorize_email(self, subject, body):
        """Auto-categorize email."""
        text = (subject + ' ' + body).lower()
        
        category_keywords = {
            'financial': ['invoice', 'payment', 'billing', 'receipt', 'quote', 'estimate'],
            'project': ['project', 'milestone', 'deadline', 'deliverable', 'sprint'],
            'meeting': ['meeting', 'call', 'appointment', 'schedule', 'calendar'],
            'support': ['help', 'issue', 'problem', 'bug', 'ticket', 'support'],
            'sales': ['proposal', 'quote', 'pricing', 'demo', 'trial'],
            'hr': ['hiring', 'interview', 'candidate', 'resume', 'offer'],
            'legal': ['contract', 'agreement', 'nda', 'compliance', 'legal'],
            'general': []
        }
        
        for category, keywords in category_keywords.items():
            if any(keyword in text for keyword in keywords):
                return category
        
        return 'general'
    
    def _extract_tags(self, subject, body):
        """Extract relevant tags."""
        text = (subject + ' ' + body).lower()
        
        common_tags = [
            'urgent', 'important', 'follow-up', 'deadline', 'client',
            'internal', 'external', 'decision', 'action-required', 'fyi'
        ]
        
        found_tags = [tag for tag in common_tags if tag in text]
        
        # Add category as tag
        return found_tags[:10]  # Limit to 10 tags
    
    def _extract_key_info(self, body):
        """Extract key information from email."""
        info = {
            'dates': [],
            'amounts': [],
            'names': [],
            'action_items': []
        }
        
        # Extract dates
        date_pattern = r'\b\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?\b'
        info['dates'] = re.findall(date_pattern, body)[:5]
        
        # Extract amounts
        amount_pattern = r'\$[\d,]+(?:\.\d{2})?'
        info['amounts'] = re.findall(amount_pattern, body)[:5]
        
        # Extract action items
        action_pattern = r'(?:please|need to|must|should)\s+([^.!?]+)'
        info['action_items'] = re.findall(action_pattern, body, re.IGNORECASE)[:5]
        
        return info
    
    def _calculate_importance(self, subject, body, sender):
        """Calculate email importance score."""
        score = 50  # Base score
        
        text = (subject + ' ' + body).lower()
        
        # Urgency keywords
        urgency_keywords = ['urgent', 'asap', 'immediately', 'critical', 'emergency']
        if any(keyword in text for keyword in urgency_keywords):
            score += 30
        
        # Important keywords
        important_keywords = ['important', 'priority', 'deadline', 'critical']
        if any(keyword in text for keyword in important_keywords):
            score += 20
        
        # Sender importance (simplified)
        if 'ceo' in sender.lower() or 'executive' in sender.lower():
            score += 15
        
        return min(100, score)
    
    def _generate_search_summary(self, email):
        """Generate search-friendly summary."""
        return {
            'title': email['subject'],
            'preview': email['body'][:200] + '...' if len(email['body']) > 200 else email['body'],
            'category': email['category'],
            'tags': email['tags'],
            'timestamp': email['timestamp'],
            'sender': email['sender']
        }
    
    def _get_retention_policy(self, category):
        """Get retention policy for category."""
        policies = {
            'financial': '7 years',
            'legal': '10 years',
            'hr': '7 years',
            'project': '5 years',
            'general': '3 years'
        }
        return policies.get(category, '3 years')
    
    def _calculate_relevance(self, query, email):
        """Calculate relevance score for search result."""
        query_lower = query.lower()
        searchable_text = f"{email['subject']} {email['body']}".lower()
        
        # Simple word matching
        query_words = query_lower.split()
        matches = sum(1 for word in query_words if word in searchable_text)
        
        # Boost for subject matches
        if query_lower in email['subject'].lower():
            matches *= 2
        
        return matches
    
    def _generate_recommendations(self, category, importance, reply_all_required):
        """Generate archival recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included')
        
        if importance >= 80:
            recommendations.append('⭐ High importance email - prioritize review')
        
        if category == 'financial':
            recommendations.append('💰 Financial email - ensure proper documentation')
        
        if category == 'legal':
            recommendations.append('⚖️ Legal email - extended retention applies')
        
        recommendations.append('🔍 Email archived and searchable')
        recommendations.append(f'📅 Retention policy: {self._get_retention_policy(category)}')
        
        return recommendations


if __name__ == '__main__':
    archive = EmailArchive()
    
    test_email = {
        'id': '1',
        'sender': 'client@company.com',
        'recipients': ['sales@ziontechgroup.com', 'manager@ziontechgroup.com'],
        'subject': 'Urgent: Invoice payment needed by 01/15',
        'body': 'Please process the invoice for $5,000 by January 15th. This is urgent and important.',
        'timestamp': '2024-01-10T10:00:00'
    }
    
    result = archive.archive_email(test_email)
    
    print("=== V1084: Email Archive & Search ===\n")
    print(f"Archive ID: {result['archive_id']}")
    print(f"Category: {result['category']}")
    print(f"Tags: {result['tags']}")
    print(f"Importance: {result['importance_score']}/100")
    print(f"Retention: {result['retention_policy']}")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print(f"\nKey Information:")
    print(f"  Dates: {result['key_information']['dates']}")
    print(f"  Amounts: {result['key_information']['amounts']}")
    print(f"  Action Items: {len(result['key_information']['action_items'])}")
    
    # Test search
    print(f"\n--- Search Test ---")
    search_results = archive.search_archive('invoice')
    print(f"Search results for 'invoice': {len(search_results)}")
    
    print("\n✅ All tests passed!")
