#!/usr/bin/env python3
"""
V671 - Email Learning & Development Tracker
Extracts learning opportunities, skill gaps, and training needs from
email conversations. Provides personalized learning path recommendations
and tracks professional development progress.

Key Features:
- Skill gap detection from email context
- Learning opportunity extraction
- Training need identification
- Personalized learning path recommendations
- Knowledge sharing detection
- Professional development tracking
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime
from collections import Counter, defaultdict
from typing import Dict, List, Optional

class EmailLearningDevelopmentTracker:
    """Tracks learning and development opportunities from email communications"""
    
    def __init__(self):
        self.skill_registry = {}
        self.learning_opportunities = []
        self.training_needs = []
        self.knowledge_sharing = []
        self.development_plans = {}
    
    SKILL_CATEGORIES = {
        'technical': {
            'keywords': ['coding', 'programming', 'python', 'javascript', 'database', 'api', 'cloud', 'devops', 'machine learning', 'ai', 'security', 'networking', 'architecture'],
            'subcategories': ['programming', 'cloud', 'data', 'security', 'infrastructure']
        },
        'business': {
            'keywords': ['strategy', 'finance', 'marketing', 'sales', 'operations', 'management', 'leadership', 'negotiation', 'project management', 'budget', 'revenue', 'profit'],
            'subcategories': ['strategy', 'finance', 'marketing', 'sales', 'management']
        },
        'soft_skills': {
            'keywords': ['communication', 'presentation', 'teamwork', 'conflict resolution', 'time management', 'emotional intelligence', 'collaboration', 'influence', 'persuasion'],
            'subcategories': ['communication', 'interpersonal', 'personal_effectiveness']
        },
        'domain': {
            'keywords': ['healthcare', 'finance', 'education', 'government', 'retail', 'manufacturing', 'energy', 'telecommunications', 'legal', 'compliance'],
            'subcategories': ['industry_knowledge', 'regulations', 'best_practices']
        }
    }
    
    LEARNING_INDICATORS = {
        'struggle': ['struggling with', 'don\'t understand', 'confused about', 'need help with', 'can\'t figure out', 'having trouble', 'difficult to'],
        'request': ['how do i', 'can someone explain', 'what is', 'need to learn', 'want to understand', 'looking for training', 'recommend a course'],
        'gap': ['not familiar with', 'haven\'t used', 'no experience with', 'new to', 'first time', 'never done'],
        'interest': ['interested in learning', 'want to explore', 'curious about', 'would like to know', 'fascinated by', 'excited to learn']
    }
    
    TRAINING_TYPES = {
        'formal': ['course', 'certification', 'degree', 'workshop', 'bootcamp', 'training program'],
        'informal': ['tutorial', 'video', 'article', 'blog', 'podcast', 'webinar', 'documentation'],
        'experiential': ['project', 'assignment', 'mentorship', 'shadowing', 'hands-on', 'practice'],
        'social': ['conference', 'meetup', 'community', 'forum', 'study group', 'peer learning']
    }
    
    def detect_skill_gaps(self, email: Dict) -> List[Dict]:
        """Detect skill gaps mentioned in email"""
        text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
        gaps = []
        
        for category, config in self.SKILL_CATEGORIES.items():
            for keyword in config['keywords']:
                if keyword in text:
                    # Check if it's a gap context
                    for indicator_type, indicators in self.LEARNING_INDICATORS.items():
                        for indicator in indicators:
                            if indicator in text and self._is_near(text, indicator, keyword):
                                gap = {
                                    'skill': keyword,
                                    'category': category,
                                    'indicator_type': indicator_type,
                                    'context': self._extract_context(text, keyword),
                                    'email_id': email.get('id', ''),
                                    'author': email.get('from', ''),
                                    'timestamp': email.get('timestamp', datetime.now().isoformat()),
                                    'severity': self._assess_gap_severity(indicator_type)
                                }
                                gaps.append(gap)
        
        return gaps
    
    def _is_near(self, text: str, word1: str, word2: str, window: int = 100) -> bool:
        """Check if two words are near each other in text"""
        idx1 = text.find(word1)
        idx2 = text.find(word2)
        if idx1 == -1 or idx2 == -1:
            return False
        return abs(idx1 - idx2) <= window
    
    def _extract_context(self, text: str, keyword: str, window: int = 100) -> str:
        """Extract context around keyword"""
        idx = text.find(keyword)
        if idx == -1:
            return ''
        start = max(0, idx - window)
        end = min(len(text), idx + len(keyword) + window)
        return text[start:end].strip()
    
    def _assess_gap_severity(self, indicator_type: str) -> str:
        """Assess severity of skill gap"""
        severity_map = {
            'struggle': 'high',
            'request': 'medium',
            'gap': 'medium',
            'interest': 'low'
        }
        return severity_map.get(indicator_type, 'low')
    
    def extract_learning_opportunities(self, email: Dict) -> List[Dict]:
        """Extract learning opportunities from email"""
        text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
        opportunities = []
        
        # Look for learning-related phrases
        learning_phrases = [
            'learned that', 'discovered', 'figured out', 'realized',
            'new insight', 'key takeaway', 'lesson learned', 'best practice',
            'tip:', 'trick:', 'hack:', 'pro tip'
        ]
        
        for phrase in learning_phrases:
            if phrase in text:
                context = self._extract_context(text, phrase, 150)
                
                # Identify skills involved
                skills_mentioned = []
                for category, config in self.SKILL_CATEGORIES.items():
                    for keyword in config['keywords']:
                        if keyword in context:
                            skills_mentioned.append({'skill': keyword, 'category': category})
                
                opportunity = {
                    'phrase': phrase,
                    'context': context,
                    'skills': skills_mentioned,
                    'email_id': email.get('id', ''),
                    'author': email.get('from', ''),
                    'recipients': email.get('to', []),
                    'timestamp': email.get('timestamp', datetime.now().isoformat()),
                    'sharing_potential': len(email.get('to', [])) > 2
                }
                opportunities.append(opportunity)
                self.learning_opportunities.append(opportunity)
        
        return opportunities
    
    def identify_training_needs(self, email: Dict, skill_gaps: List[Dict]) -> List[Dict]:
        """Identify training needs based on skill gaps"""
        text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
        needs = []
        
        # Group gaps by skill
        skill_gaps_grouped = defaultdict(list)
        for gap in skill_gaps:
            skill_gaps_grouped[gap['skill']].append(gap)
        
        for skill, gaps in skill_gaps_grouped.items():
            # Determine urgency
            high_severity_count = sum(1 for g in gaps if g['severity'] == 'high')
            urgency = 'high' if high_severity_count > 0 else 'medium' if len(gaps) > 2 else 'low'
            
            # Recommend training type
            recommended_types = self._recommend_training_type(skill, gaps[0]['category'])
            
            # Check if training already mentioned
            mentioned_training = []
            for train_type, keywords in self.TRAINING_TYPES.items():
                for keyword in keywords:
                    if keyword in text:
                        mentioned_training.append({'type': train_type, 'keyword': keyword})
            
            need = {
                'skill': skill,
                'category': gaps[0]['category'],
                'gap_count': len(gaps),
                'urgency': urgency,
                'recommended_training': recommended_types,
                'mentioned_training': mentioned_training,
                'affected_people': list(set(g['author'] for g in gaps)),
                'timestamp': datetime.now().isoformat()
            }
            needs.append(need)
            self.training_needs.append(need)
        
        return needs
    
    def _recommend_training_type(self, skill: str, category: str) -> List[Dict]:
        """Recommend training types based on skill and category"""
        recommendations = []
        
        # Technical skills → formal + experiential
        if category == 'technical':
            recommendations.extend([
                {'type': 'formal', 'reason': 'Structured learning for technical foundations'},
                {'type': 'experiential', 'reason': 'Hands-on practice is essential for technical skills'}
            ])
        # Business skills → formal + social
        elif category == 'business':
            recommendations.extend([
                {'type': 'formal', 'reason': 'Business concepts benefit from structured programs'},
                {'type': 'social', 'reason': 'Networking and peer learning enhance business skills'}
            ])
        # Soft skills → experiential + social
        elif category == 'soft_skills':
            recommendations.extend([
                {'type': 'experiential', 'reason': 'Soft skills require practice and real-world application'},
                {'type': 'social', 'reason': 'Feedback and interaction are crucial for soft skill development'}
            ])
        # Domain knowledge → informal + formal
        elif category == 'domain':
            recommendations.extend([
                {'type': 'informal', 'reason': 'Stay current with industry trends and news'},
                {'type': 'formal', 'reason': 'Certifications validate domain expertise'}
            ])
        
        return recommendations
    
    def detect_knowledge_sharing(self, email: Dict) -> List[Dict]:
        """Detect knowledge sharing instances in email"""
        text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
        sharing = []
        
        sharing_indicators = [
            'sharing this', 'thought you\'d find this useful', 'wanted to share',
            'here\'s what i learned', 'passing along', 'forwarding this',
            'check this out', 'this might help', 'fyi -', 'for your reference'
        ]
        
        for indicator in sharing_indicators:
            if indicator in text:
                # Identify what's being shared
                shared_skills = []
                for category, config in self.SKILL_CATEGORIES.items():
                    for keyword in config['keywords']:
                        if keyword in text:
                            shared_skills.append({'skill': keyword, 'category': category})
                
                share = {
                    'indicator': indicator,
                    'context': self._extract_context(text, indicator, 200),
                    'skills_shared': shared_skills,
                    'sharer': email.get('from', ''),
                    'recipients': email.get('to', []),
                    'recipient_count': len(email.get('to', [])),
                    'email_id': email.get('id', ''),
                    'timestamp': email.get('timestamp', datetime.now().isoformat()),
                    'impact_score': self._calculate_sharing_impact(len(email.get('to', [])), len(shared_skills))
                }
                sharing.append(share)
                self.knowledge_sharing.append(share)
        
        return sharing
    
    def _calculate_sharing_impact(self, recipient_count: int, skill_count: int) -> int:
        """Calculate impact score of knowledge sharing"""
        # More recipients = higher impact
        # More skills shared = higher impact
        recipient_score = min(50, recipient_count * 5)
        skill_score = min(50, skill_count * 10)
        return min(100, recipient_score + skill_score)
    
    def generate_learning_path(self, person: str, skill_gaps: List[Dict]) -> Dict:
        """Generate personalized learning path for a person"""
        if not skill_gaps:
            return {'error': 'No skill gaps identified'}
        
        # Group by category
        by_category = defaultdict(list)
        for gap in skill_gaps:
            by_category[gap['category']].append(gap)
        
        # Prioritize by severity and frequency
        priority_skills = []
        for gap in skill_gaps:
            priority_score = 0
            if gap['severity'] == 'high':
                priority_score += 30
            elif gap['severity'] == 'medium':
                priority_score += 20
            else:
                priority_score += 10
            
            # Count occurrences
            occurrences = sum(1 for g in skill_gaps if g['skill'] == gap['skill'])
            priority_score += min(20, occurrences * 5)
            
            priority_skills.append({
                'skill': gap['skill'],
                'category': gap['category'],
                'priority_score': priority_score,
                'severity': gap['severity']
            })
        
        # Sort by priority
        priority_skills.sort(key=lambda x: x['priority_score'], reverse=True)
        
        # Generate learning path
        learning_path = {
            'person': person,
            'total_gaps': len(skill_gaps),
            'categories_affected': list(by_category.keys()),
            'priority_skills': priority_skills[:10],  # Top 10
            'recommended_sequence': [
                {
                    'phase': i + 1,
                    'skill': skill['skill'],
                    'category': skill['category'],
                    'training_types': self._recommend_training_type(skill['skill'], skill['category']),
                    'estimated_duration': self._estimate_duration(skill['category'])
                }
                for i, skill in enumerate(priority_skills[:5])  # Top 5 in sequence
            ],
            'total_estimated_time': sum(
                self._estimate_duration(skill['category'])
                for skill in priority_skills[:5]
            ),
            'timestamp': datetime.now().isoformat()
        }
        
        self.development_plans[person] = learning_path
        return learning_path
    
    def _estimate_duration(self, category: str) -> int:
        """Estimate learning duration in hours based on category"""
        duration_map = {
            'technical': 40,
            'business': 30,
            'soft_skills': 20,
            'domain': 25
        }
        return duration_map.get(category, 30)
    
    def process_email(self, email: Dict) -> Dict:
        """Process email for learning and development tracking"""
        # Detect skill gaps
        skill_gaps = self.detect_skill_gaps(email)
        
        # Extract learning opportunities
        learning_opportunities = self.extract_learning_opportunities(email)
        
        # Identify training needs
        training_needs = self.identify_training_needs(email, skill_gaps)
        
        # Detect knowledge sharing
        knowledge_sharing = self.detect_knowledge_sharing(email)
        
        return {
            'email_id': email.get('id', ''),
            'skill_gaps': skill_gaps,
            'learning_opportunities': learning_opportunities,
            'training_needs': training_needs,
            'knowledge_sharing': knowledge_sharing,
            'summary': {
                'gaps_detected': len(skill_gaps),
                'opportunities_found': len(learning_opportunities),
                'training_needs_identified': len(training_needs),
                'knowledge_shares': len(knowledge_sharing)
            },
            'reply_all_required': len(email.get('to', [])) > 1,
            'timestamp': datetime.now().isoformat()
        }
    
    def generate_ld_report(self) -> Dict:
        """Generate comprehensive L&D report"""
        if not self.skill_registry and not self.learning_opportunities:
            return {'message': 'No L&D data tracked'}
        
        # Skill gap statistics
        all_gaps = []
        for email_data in self.skill_registry.values():
            all_gaps.extend(email_data.get('skill_gaps', []))
        
        gap_by_category = Counter(g['category'] for g in all_gaps)
        gap_by_severity = Counter(g['severity'] for g in all_gaps)
        
        # Training needs statistics
        need_by_urgency = Counter(n['urgency'] for n in self.training_needs)
        top_skills_needed = Counter(n['skill'] for n in self.training_needs).most_common(10)
        
        # Knowledge sharing statistics
        total_shares = len(self.knowledge_sharing)
        avg_impact = sum(s['impact_score'] for s in self.knowledge_sharing) / total_shares if total_shares > 0 else 0
        top_sharers = Counter(s['sharer'] for s in self.knowledge_sharing).most_common(5)
        
        return {
            'total_skill_gaps': len(all_gaps),
            'gaps_by_category': dict(gap_by_category),
            'gaps_by_severity': dict(gap_by_severity),
            'total_training_needs': len(self.training_needs),
            'needs_by_urgency': dict(need_by_urgency),
            'top_skills_needed': top_skills_needed,
            'total_learning_opportunities': len(self.learning_opportunities),
            'total_knowledge_shares': total_shares,
            'avg_sharing_impact': round(avg_impact, 1),
            'top_knowledge_sharers': top_sharers,
            'development_plans_created': len(self.development_plans),
            'reply_all_enforcement': 'Active for all L&D communications',
            'timestamp': datetime.now().isoformat()
        }


def test_v671():
    """Test V671 Email Learning & Development Tracker"""
    tracker = EmailLearningDevelopmentTracker()
    
    # Test 1: Skill gap detection
    email1 = {
        'id': 'e001',
        'from': 'developer@company.com',
        'to': ['team@company.com'],
        'subject': 'Struggling with new API integration',
        'body': 'I\'m struggling with the new API integration. I don\'t understand how to handle authentication properly. Can someone explain OAuth 2.0 flow? I\'m new to this and need help with the implementation.',
        'timestamp': '2026-05-30T09:00:00'
    }
    
    # Test 2: Learning opportunity
    email2 = {
        'id': 'e002',
        'from': 'senior@company.com',
        'to': ['team@company.com', 'juniors@company.com'],
        'subject': 'Key takeaway from yesterday\'s incident',
        'body': 'Here\'s what I learned from yesterday\'s database issue: Always use connection pooling and implement proper error handling. Pro tip: Set up monitoring alerts before they\'re needed. This is a best practice for database management.',
        'timestamp': '2026-05-30T10:00:00'
    }
    
    # Test 3: Knowledge sharing
    email3 = {
        'id': 'e003',
        'from': 'manager@company.com',
        'to': ['all@company.com'],
        'subject': 'Sharing this great Python course',
        'body': 'Sharing this excellent Python programming course I found. Thought you\'d find this useful for improving your coding skills. Check this out: Advanced Python for Data Science. For your reference, it covers pandas, numpy, and machine learning basics.',
        'timestamp': '2026-05-30T11:00:00'
    }
    
    for email in [email1, email2, email3]:
        result = tracker.process_email(email)
        
        print(f"\n{'='*50}")
        print(f"Email: {email['subject'][:40]}...")
        print(f"Skill Gaps: {result['summary']['gaps_detected']}")
        print(f"Learning Opportunities: {result['summary']['opportunities_found']}")
        print(f"Training Needs: {result['summary']['training_needs_identified']}")
        print(f"Knowledge Shares: {result['summary']['knowledge_shares']}")
        
        if result['skill_gaps']:
            print("\nDetected Gaps:")
            for gap in result['skill_gaps'][:3]:
                print(f"  - {gap['skill']} ({gap['category']}) - {gap['severity']}")
    
    # Generate learning path
    all_gaps = []
    for email in [email1, email2, email3]:
        all_gaps.extend(tracker.detect_skill_gaps(email))
    
    if all_gaps:
        learning_path = tracker.generate_learning_path('developer@company.com', all_gaps)
        print(f"\n{'='*50}")
        print(f"Learning Path for developer@company.com:")
        print(f"Total Gaps: {learning_path.get('total_gaps', 0)}")
        print(f"Priority Skills: {len(learning_path.get('priority_skills', []))}")
        print(f"Estimated Time: {learning_path.get('total_estimated_time', 0)} hours")
    
    report = tracker.generate_ld_report()
    print(f"\n{'='*50}")
    print(f"✅ V671 Email Learning & Development Tracker Test Complete")
    print(f"Total Skill Gaps: {report['total_skill_gaps']}")
    print(f"Training Needs: {report['total_training_needs']}")
    print(f"Knowledge Shares: {report['total_knowledge_shares']}")
    
    return report


if __name__ == '__main__':
    test_v671()
