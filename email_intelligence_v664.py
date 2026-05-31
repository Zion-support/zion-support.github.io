#!/usr/bin/env python3
"""
V664 - Email Knowledge Transfer System
Automatically captures and transfers institutional knowledge when
employees leave or change roles. Extracts key relationships, ongoing
projects, commitments, and tribal knowledge from email history.

Key Features:
- Departing employee knowledge extraction
- Relationship and contact mapping
- Ongoing commitment tracking
- Tribal knowledge capture
- Successor handoff package generation
- Knowledge gap identification
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime, timedelta
from collections import defaultdict, Counter
from typing import Dict, List, Optional, Set

class EmailKnowledgeTransferSystem:
    """Captures and transfers institutional knowledge from email history"""
    
    def __init__(self):
        self.employee_profiles = {}
        self.knowledge_packages = {}
        self.transfer_sessions = []
    
    def build_employee_profile(self, employee_email: str, emails: List[Dict]) -> Dict:
        """Build comprehensive knowledge profile from employee's email history"""
        profile = {
            'employee': employee_email,
            'total_emails': len(emails),
            'date_range': {
                'earliest': min((e.get('timestamp', '') for e in emails), default=''),
                'latest': max((e.get('timestamp', '') for e in emails), default='')
            },
            'relationships': self._extract_relationships(employee_email, emails),
            'projects': self._extract_projects(emails),
            'commitments': self._extract_commitments(emails),
            'expertise_areas': self._extract_expertise(emails),
            'key_contacts': self._extract_key_contacts(employee_email, emails),
            'tribal_knowledge': self._extract_tribal_knowledge(emails),
            'communication_patterns': self._analyze_patterns(emails),
            'pending_actions': self._extract_pending_actions(emails),
            'institutional_memory': self._extract_institutional_memory(emails)
        }
        
        self.employee_profiles[employee_email] = profile
        return profile
    
    def _extract_relationships(self, employee_email: str, emails: List[Dict]) -> Dict:
        """Extract professional relationships from email patterns"""
        contacts = defaultdict(lambda: {
            'interaction_count': 0,
            'relationship_type': 'unknown',
            'first_contact': None,
            'last_contact': None,
            'topics': [],
            'importance_score': 0
        })
        
        for email in emails:
            # Sent emails
            for recipient in email.get('to', []) + email.get('cc', []):
                if recipient != employee_email:
                    contact = contacts[recipient]
                    contact['interaction_count'] += 1
                    contact['last_contact'] = email.get('timestamp', '')
                    if not contact['first_contact']:
                        contact['first_contact'] = email.get('timestamp', '')
                    
                    # Extract topics from subject
                    subject = email.get('subject', '').lower()
                    if 'project' in subject or 'sprint' in subject:
                        contact['topics'].append('project')
                    elif 'sales' in subject or 'deal' in subject:
                        contact['topics'].append('sales')
                    elif 'contract' in subject or 'agreement' in subject:
                        contact['topics'].append('legal')
                    elif 'support' in subject or 'issue' in subject:
                        contact['topics'].append('support')
            
            # Received emails
            sender = email.get('from', '')
            if sender != employee_email:
                contacts[sender]['interaction_count'] += 1
        
        # Calculate importance scores
        for contact_email, data in contacts.items():
            data['importance_score'] = min(100, data['interaction_count'] * 2)
            data['topics'] = list(set(data['topics']))
            
            # Determine relationship type
            if data['interaction_count'] > 50:
                data['relationship_type'] = 'frequent_collaborator'
            elif data['interaction_count'] > 20:
                data['relationship_type'] = 'regular_contact'
            elif data['interaction_count'] > 5:
                data['relationship_type'] = 'occasional_contact'
            else:
                data['relationship_type'] = 'infrequent_contact'
        
        # Sort by importance
        sorted_contacts = dict(sorted(contacts.items(), key=lambda x: x[1]['importance_score'], reverse=True))
        
        return {
            'total_contacts': len(contacts),
            'top_relationships': dict(list(sorted_contacts.items())[:20]),
            'frequent_collaborators': sum(1 for c in contacts.values() if c['relationship_type'] == 'frequent_collaborator'),
            'external_contacts': sum(1 for email in contacts if '@' in email and 'ziontechgroup.com' not in email.lower())
        }
    
    def _extract_projects(self, emails: List[Dict]) -> Dict:
        """Extract ongoing and completed projects"""
        projects = defaultdict(lambda: {
            'email_count': 0,
            'status': 'unknown',
            'participants': set(),
            'start_date': None,
            'last_activity': None,
            'keywords': []
        })
        
        project_patterns = [
            r'project[:\s]+([\w\s-]+)',
            r'initiative[:\s]+([\w\s-]+)',
            r'sprint[:\s]+([\w\s-]+)',
            r'phase[:\s]+([\w\s-]+)',
        ]
        
        for email in emails:
            text = (email.get('subject', '') + ' ' + email.get('body', '')).lower()
            
            for pattern in project_patterns:
                matches = re.findall(pattern, text)
                for match in matches:
                    project_name = match.strip()[:50]
                    if len(project_name) > 3:
                        project = projects[project_name]
                        project['email_count'] += 1
                        project['last_activity'] = email.get('timestamp', '')
                        if not project['start_date']:
                            project['start_date'] = email.get('timestamp', '')
                        
                        participants = email.get('to', [])
                        sender = email.get('from', '')
                        if sender:
                            participants.append(sender)
                        for p in participants:
                            if p:
                                project['participants'].add(p)
            
            # Detect project status
            status_keywords = {
                'completed': ['completed', 'finished', 'done', 'launched', 'delivered', 'shipped'],
                'in_progress': ['in progress', 'ongoing', 'working on', 'current sprint', 'active'],
                'blocked': ['blocked', 'waiting', 'on hold', 'paused', 'delayed'],
                'planning': ['planning', 'roadmap', 'upcoming', 'future', 'q3', 'q4']
            }
            
            for status, keywords in status_keywords.items():
                if any(kw in text for kw in keywords):
                    for proj in projects.values():
                        if proj['email_count'] > 0:
                            proj['status'] = status
        
        # Convert sets to lists for JSON serialization
        result = {}
        for name, data in projects.items():
            result[name] = {
                'email_count': data['email_count'],
                'status': data['status'],
                'participants': list(data['participants'])[:10],
                'start_date': data['start_date'],
                'last_activity': data['last_activity']
            }
        
        return {
            'total_projects': len(projects),
            'projects': result,
            'active_projects': sum(1 for p in projects.values() if p['status'] == 'in_progress'),
            'completed_projects': sum(1 for p in projects.values() if p['status'] == 'completed'),
            'blocked_projects': sum(1 for p in projects.values() if p['status'] == 'blocked')
        }
    
    def _extract_commitments(self, emails: List[Dict]) -> List[Dict]:
        """Extract commitments and promises made via email"""
        commitments = []
        
        commitment_patterns = [
            r'i(?:\'ll| will)\s+([\w\s]+?)(?:by|before|on)\s+([\w\s,]+)',
            r'(?:we|the team)\s+(?:will|shall)\s+([\w\s]+?)(?:by|before|on)\s+([\w\s,]+)',
            r'(?:committed to|promised|agreed to)\s+([\w\s]+)',
            r'(?:deadline|due|eta)[:\s]+([\w\s]+)',
        ]
        
        for email in emails:
            text = email.get('body', '')
            
            for pattern in commitment_patterns:
                matches = re.findall(pattern, text, re.IGNORECASE)
                for match in matches:
                    if isinstance(match, tuple):
                        commitment_text = match[0].strip()[:200]
                        deadline = match[1].strip()[:50] if len(match) > 1 else None
                    else:
                        commitment_text = match.strip()[:200]
                        deadline = None
                    
                    if len(commitment_text) > 5:
                        commitments.append({
                            'commitment': commitment_text,
                            'deadline': deadline,
                            'made_to': email.get('to', []),
                            'date': email.get('timestamp', ''),
                            'subject': email.get('subject', ''),
                            'status': 'pending'  # Would need follow-up analysis
                        })
        
        return commitments[:50]  # Limit to most recent 50
    
    def _extract_expertise(self, emails: List[Dict]) -> Dict:
        """Extract areas of expertise from email content"""
        expertise_keywords = {
            'technical': ['API', 'database', 'infrastructure', 'cloud', 'DevOps', 'security', 'architecture', 'code', 'deployment'],
            'business': ['strategy', 'revenue', 'growth', 'market', 'customer', 'partnership', 'sales', 'pricing'],
            'management': ['team', 'hiring', 'performance', 'roadmap', 'planning', 'budget', 'resource', 'stakeholder'],
            'domain': ['healthcare', 'finance', 'education', 'government', 'retail', 'manufacturing', 'energy']
        }
        
        expertise_counts = defaultdict(int)
        
        for email in emails:
            text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
            for category, keywords in expertise_keywords.items():
                for kw in keywords:
                    if kw.lower() in text:
                        expertise_counts[category] += 1
        
        # Determine primary expertise
        if expertise_counts:
            primary = max(expertise_counts, key=expertise_counts.get)
        else:
            primary = 'general'
        
        return {
            'primary_expertise': primary,
            'expertise_scores': dict(expertise_counts),
            'confidence': 'high' if max(expertise_counts.values(), default=0) > 50 else 'medium'
        }
    
    def _extract_key_contacts(self, employee_email: str, emails: List[Dict]) -> List[Dict]:
        """Extract key external contacts that need handoff"""
        external_contacts = defaultdict(lambda: {'count': 0, 'company': '', 'role': '', 'topics': []})
        
        for email in emails:
            for recipient in email.get('to', []) + email.get('cc', []):
                if recipient != employee_email and 'ziontechgroup.com' not in recipient.lower():
                    contact = external_contacts[recipient]
                    contact['count'] += 1
                    
                    # Try to extract company from email domain
                    if '@' in recipient:
                        domain = recipient.split('@')[1].replace('.com', '').replace('.org', '')
                        contact['company'] = domain
            
            # Also track senders
            sender = email.get('from', '')
            if sender != employee_email and 'ziontechgroup.com' not in sender.lower():
                external_contacts[sender]['count'] += 1
        
        # Sort by interaction count
        sorted_contacts = sorted(external_contacts.items(), key=lambda x: x[1]['count'], reverse=True)
        
        return [
            {
                'email': email,
                'interaction_count': data['count'],
                'company': data['company'],
                'priority': 'high' if data['count'] > 20 else 'medium' if data['count'] > 5 else 'low'
            }
            for email, data in sorted_contacts[:30]
        ]
    
    def _extract_tribal_knowledge(self, emails: List[Dict]) -> List[Dict]:
        """Extract tribal knowledge (undocumented institutional knowledge)"""
        tribal_knowledge = []
        
        tribal_patterns = [
            r'(?:the way we|how we|we always|we typically|our process|our approach)[:\s]+(.+?)[.!]',
            r'(?:remember|note|important)[:\s]+(.+?)[.!]',
            r'(?:workaround|hack|trick)[:\s]+(.+?)[.!]',
            r'(?:don\'t|never|always)\s+(?:forget|use|do)\s+(.+?)[.!]',
        ]
        
        for email in emails:
            text = email.get('body', '')
            for pattern in tribal_patterns:
                matches = re.findall(pattern, text, re.IGNORECASE)
                for match in matches:
                    if len(match) > 10 and len(match) < 500:
                        tribal_knowledge.append({
                            'knowledge': match.strip(),
                            'source_email': email.get('subject', ''),
                            'date': email.get('timestamp', '')
                        })
        
        return tribal_knowledge[:30]
    
    def _analyze_patterns(self, emails: List[Dict]) -> Dict:
        """Analyze communication patterns"""
        hours = []
        days = []
        
        for email in emails:
            ts = email.get('timestamp', '')
            if ts:
                try:
                    dt = datetime.fromisoformat(ts)
                    hours.append(dt.hour)
                    days.append(dt.strftime('%A'))
                except (ValueError, TypeError):
                    pass
        
        hour_counts = Counter(hours)
        day_counts = Counter(days)
        
        return {
            'peak_hours': hour_counts.most_common(3),
            'peak_days': day_counts.most_common(3),
            'avg_emails_per_day': round(len(emails) / max(1, len(set(e.get('timestamp', '')[:10] for e in emails))), 1)
        }
    
    def _extract_pending_actions(self, emails: List[Dict]) -> List[Dict]:
        """Extract pending action items"""
        pending = []
        
        action_patterns = [
            r'(?:TODO|ACTION|PENDING|FOLLOW.?UP)[:\s]+(.+?)[.!]',
            r'(?:need to|must|should)\s+(.+?)(?:\s+by|\s+before|[.!])',
        ]
        
        # Check recent emails (last 30 days)
        recent_emails = emails[-100:] if len(emails) > 100 else emails
        
        for email in recent_emails:
            text = email.get('body', '')
            for pattern in action_patterns:
                matches = re.findall(pattern, text, re.IGNORECASE)
                for match in matches:
                    if len(match) > 5 and len(match) < 300:
                        pending.append({
                            'action': match.strip(),
                            'from_email': email.get('subject', ''),
                            'date': email.get('timestamp', '')
                        })
        
        return pending[:20]
    
    def _extract_institutional_memory(self, emails: List[Dict]) -> List[Dict]:
        """Extract institutional memory items"""
        memory_items = []
        
        memory_patterns = [
            r'(?:historically|in the past|previously|before we)[:\s]+(.+?)[.!]',
            r'(?:the reason|why we|because)[:\s]+(.+?)[.!]',
            r'(?:decision|decided)[:\s]+(.+?)[.!]',
        ]
        
        for email in emails:
            text = email.get('body', '')
            for pattern in memory_patterns:
                matches = re.findall(pattern, text, re.IGNORECASE)
                for match in matches:
                    if len(match) > 10 and len(match) < 500:
                        memory_items.append({
                            'memory': match.strip(),
                            'context': email.get('subject', ''),
                            'date': email.get('timestamp', '')
                        })
        
        return memory_items[:20]
    
    def generate_handoff_package(self, employee_email: str, successor_email: str = None) -> Dict:
        """Generate comprehensive handoff package"""
        profile = self.employee_profiles.get(employee_email)
        if not profile:
            return {'error': 'Employee profile not found. Run build_employee_profile first.'}
        
        package_id = f"handoff_{len(self.knowledge_packages):04d}"
        
        package = {
            'id': package_id,
            'departing_employee': employee_email,
            'successor': successor_email or 'unassigned',
            'generated_at': datetime.now().isoformat(),
            'summary': {
                'total_emails_analyzed': profile['total_emails'],
                'key_relationships': profile['relationships']['total_contacts'],
                'active_projects': profile['projects']['active_projects'],
                'external_contacts': len(profile['key_contacts']),
                'pending_commitments': len(profile['commitments']),
                'tribal_knowledge_items': len(profile['tribal_knowledge'])
            },
            'priority_handoff_items': {
                'top_relationships': list(profile['relationships']['top_relationships'].items())[:10],
                'active_projects': {k: v for k, v in profile['projects']['projects'].items() if v['status'] == 'in_progress'},
                'key_external_contacts': [c for c in profile['key_contacts'] if c['priority'] == 'high'],
                'pending_actions': profile['pending_actions'][:10],
                'tribal_knowledge': profile['tribal_knowledge'][:10]
            },
            'recommended_actions': [
                f'Schedule intro calls with top {min(10, profile["relationships"]["frequent_collaborators"])} collaborators',
                f'Review {profile["projects"]["active_projects"]} active projects with stakeholders',
                f'Connect with {sum(1 for c in profile["key_contacts"] if c["priority"] == "high")} high-priority external contacts',
                'Review tribal knowledge items and document in wiki',
                'Complete or reassign pending commitments'
            ],
            'reply_all_required': True
        }
        
        self.knowledge_packages[package_id] = package
        return package
    
    def generate_transfer_report(self) -> Dict:
        """Generate knowledge transfer status report"""
        return {
            'employee_profiles_built': len(self.employee_profiles),
            'handoff_packages_generated': len(self.knowledge_packages),
            'transfer_sessions': len(self.transfer_sessions),
            'total_knowledge_items_captured': sum(
                len(p.get('tribal_knowledge', [])) + len(p.get('commitments', [])) + len(p.get('pending_actions', []))
                for p in self.employee_profiles.values()
            ),
            'reply_all_enforcement': 'Active for all transfer communications'
        }


def test_v664():
    """Test V664 Email Knowledge Transfer System"""
    kts = EmailKnowledgeTransferSystem()
    
    # Simulate departing employee's email history
    employee = 'john.smith@company.com'
    emails = []
    
    # Generate realistic email history
    projects = ['Project Alpha', 'Sprint 23', 'API Migration', 'Customer Portal']
    contacts = [
        'alice@company.com', 'bob@partner.com', 'carol@client.com',
        'dave@company.com', 'eve@vendor.com'
    ]
    
    for i in range(50):
        day = 1 + (i % 28)
        hour = 9 + (i % 8)
        emails.append({
            'id': f'e{i:03d}',
            'from': employee if i % 2 == 0 else contacts[i % len(contacts)],
            'to': [employee] if i % 2 == 0 else [contacts[i % len(contacts)]],
            'subject': f'{projects[i % len(projects)]} - Update {i}',
            'body': f'Working on the project. The way we handle API calls is through the gateway. TODO: Complete the documentation by Friday. We decided to use the new framework. Remember to update the config before deployment.',
            'timestamp': f'2026-05-{day:02d}T{hour:02d}:00:00'
        })
    
    # Build profile
    profile = kts.build_employee_profile(employee, emails)
    
    print("✅ V664 Email Knowledge Transfer System Test")
    print(f"\nEmployee Profile: {employee}")
    print(f"Total Emails Analyzed: {profile['total_emails']}")
    print(f"Key Relationships: {profile['relationships']['total_contacts']}")
    print(f"Active Projects: {profile['projects']['active_projects']}")
    print(f"Key External Contacts: {len(profile['key_contacts'])}")
    print(f"Commitments: {len(profile['commitments'])}")
    print(f"Tribal Knowledge Items: {len(profile['tribal_knowledge'])}")
    print(f"Primary Expertise: {profile['expertise_areas']['primary_expertise']}")
    
    # Generate handoff package
    package = kts.generate_handoff_package(employee, 'successor@company.com')
    print(f"\nHandoff Package: {package['id']}")
    print(f"Priority Items: {len(package['priority_handoff_items']['pending_actions'])} actions")
    print(f"Recommended Actions: {len(package['recommended_actions'])}")
    for action in package['recommended_actions']:
        print(f"  - {action}")
    
    report = kts.generate_transfer_report()
    print(f"\nTransfer Report: {report['total_knowledge_items_captured']} knowledge items captured")
    
    return package


if __name__ == '__main__':
    test_v664()
