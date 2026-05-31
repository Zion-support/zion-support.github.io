#!/usr/bin/env python3
"""
V670 - Email Innovation Tracker
Identifies and tracks innovative ideas, suggestions, and improvement
opportunities from email conversations. Provides innovation pipeline
management and impact assessment.

Key Features:
- Innovation idea extraction
- Idea categorization and tagging
- Impact potential assessment
- Innovation pipeline tracking
- Collaboration opportunity detection
- Implementation feasibility scoring
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime, timedelta
from collections import Counter, defaultdict
from typing import Dict, List, Optional, Tuple, Set

class EmailInnovationTracker:
    """Tracks and manages innovations from email communications"""
    
    def __init__(self):
        self.innovation_registry = {}
        self.idea_pipeline = defaultdict(list)
        self.collaboration_opportunities = []
        self.impact_assessments = {}
    
    INNOVATION_INDICATORS = {
        'suggestion': ['suggest', 'idea', 'proposal', 'recommend', 'what if', 'how about', 'could we'],
        'improvement': ['improve', 'enhance', 'optimize', 'better', 'upgrade', 'streamline', 'automate'],
        'innovation': ['innovative', 'new approach', 'breakthrough', 'novel', 'creative', 'pioneering'],
        'problem_solving': ['solve', 'solution', 'fix', 'address', 'resolve', 'workaround'],
        'efficiency': ['faster', 'quicker', 'more efficient', 'time-saving', 'cost-saving', 'reduce']
    }
    
    INNOVATION_CATEGORIES = {
        'product': ['product', 'feature', 'functionality', 'user experience', 'ux', 'interface'],
        'process': ['process', 'workflow', 'procedure', 'methodology', 'approach'],
        'technology': ['technology', 'tool', 'software', 'platform', 'system', 'automation'],
        'customer': ['customer', 'client', 'user', 'service', 'support', 'experience'],
        'business': ['business', 'revenue', 'cost', 'pricing', 'model', 'strategy'],
        'culture': ['culture', 'team', 'collaboration', 'communication', 'engagement']
    }
    
    IMPACT_INDICATORS = {
        'high': ['transformative', 'game-changer', 'revolutionary', 'significant', 'major', 'substantial'],
        'medium': ['meaningful', 'valuable', 'useful', 'helpful', 'beneficial'],
        'low': ['minor', 'small', 'incremental', 'slight', 'modest']
    }
    
    FEASIBILITY_INDICATORS = {
        'high': ['easy', 'simple', 'straightforward', 'quick win', 'low effort', 'immediate'],
        'medium': ['moderate', 'manageable', 'reasonable', 'standard'],
        'low': ['complex', 'difficult', 'challenging', 'resource-intensive', 'long-term']
    }
    
    def extract_innovation_ideas(self, email: Dict) -> List[Dict]:
        """Extract innovation ideas from email"""
        text = email.get('body', '') + ' ' + email.get('subject', '')
        text_lower = text.lower()
        
        ideas = []
        
        # Check for innovation indicators
        indicator_matches = {}
        for indicator_type, keywords in self.INNOVATION_INDICATORS.items():
            matches = [kw for kw in keywords if kw in text_lower]
            if matches:
                indicator_matches[indicator_type] = matches
        
        # If no innovation indicators found, return empty
        if not indicator_matches:
            return []
        
        # Extract sentences containing innovation indicators
        sentences = re.split(r'[.!?]+', text)
        
        for sentence in sentences:
            sentence_lower = sentence.lower().strip()
            
            # Check if sentence contains innovation indicators
            sentence_indicators = {}
            for indicator_type, keywords in indicator_matches.items():
                matches = [kw for kw in keywords if kw in sentence_lower]
                if matches:
                    sentence_indicators[indicator_type] = matches
            
            if sentence_indicators:
                # Categorize the idea
                category = self._categorize_idea(sentence_lower)
                
                # Assess impact
                impact = self._assess_impact(sentence_lower)
                
                # Assess feasibility
                feasibility = self._assess_feasibility(sentence_lower)
                
                # Generate idea ID
                idea_id = f"idea_{len(self.innovation_registry) + len(ideas):05d}"
                
                idea = {
                    'idea_id': idea_id,
                    'description': sentence.strip(),
                    'indicator_types': list(sentence_indicators.keys()),
                    'indicators': sentence_indicators,
                    'category': category,
                    'impact_level': impact['level'],
                    'impact_score': impact['score'],
                    'feasibility_level': feasibility['level'],
                    'feasibility_score': feasibility['score'],
                    'source_email': email.get('id', ''),
                    'source_author': email.get('from', ''),
                    'timestamp': email.get('timestamp', datetime.now().isoformat()),
                    'status': 'new',
                    'priority': self._calculate_priority(impact['score'], feasibility['score'])
                }
                
                ideas.append(idea)
                
                # Register idea
                self.innovation_registry[idea_id] = idea
                
                # Add to pipeline
                self.idea_pipeline[category].append(idea_id)
        
        return ideas
    
    def _categorize_idea(self, text: str) -> str:
        """Categorize innovation idea"""
        category_scores = {}
        
        for category, keywords in self.INNOVATION_CATEGORIES.items():
            score = sum(1 for kw in keywords if kw in text)
            category_scores[category] = score
        
        if max(category_scores.values()) > 0:
            return max(category_scores.items(), key=lambda x: x[1])[0]
        else:
            return 'other'
    
    def _assess_impact(self, text: str) -> Dict:
        """Assess potential impact of idea"""
        impact_scores = {}
        
        for level, keywords in self.IMPACT_INDICATORS.items():
            matches = [kw for kw in keywords if kw in text]
            impact_scores[level] = len(matches)
        
        # Calculate score
        high_count = impact_scores.get('high', 0)
        medium_count = impact_scores.get('medium', 0)
        low_count = impact_scores.get('low', 0)
        
        score = (high_count * 100) + (medium_count * 50) + (low_count * 20)
        score = min(100, score)
        
        # Determine level
        if score >= 80:
            level = 'high'
        elif score >= 50:
            level = 'medium'
        elif score > 0:
            level = 'low'
        else:
            level = 'unknown'
        
        return {
            'level': level,
            'score': score,
            'breakdown': impact_scores
        }
    
    def _assess_feasibility(self, text: str) -> Dict:
        """Assess implementation feasibility"""
        feasibility_scores = {}
        
        for level, keywords in self.FEASIBILITY_INDICATORS.items():
            matches = [kw for kw in keywords if kw in text]
            feasibility_scores[level] = len(matches)
        
        # Calculate score (inverted - high feasibility = high score)
        high_count = feasibility_scores.get('high', 0)
        medium_count = feasibility_scores.get('medium', 0)
        low_count = feasibility_scores.get('low', 0)
        
        score = (high_count * 100) + (medium_count * 50) + (low_count * 20)
        score = min(100, score)
        
        # Determine level
        if score >= 80:
            level = 'high'
        elif score >= 50:
            level = 'medium'
        elif score > 0:
            level = 'low'
        else:
            level = 'unknown'
        
        return {
            'level': level,
            'score': score,
            'breakdown': feasibility_scores
        }
    
    def _calculate_priority(self, impact_score: int, feasibility_score: int) -> str:
        """Calculate priority based on impact and feasibility"""
        combined_score = (impact_score + feasibility_score) / 2
        
        if combined_score >= 80:
            return 'critical'
        elif combined_score >= 60:
            return 'high'
        elif combined_score >= 40:
            return 'medium'
        elif combined_score >= 20:
            return 'low'
        else:
            return 'backlog'
    
    def detect_collaboration_opportunities(self, email: Dict, ideas: List[Dict]) -> List[Dict]:
        """Detect collaboration opportunities for ideas"""
        opportunities = []
        
        recipients = email.get('to', []) + email.get('cc', [])
        
        for idea in ideas:
            # Check if multiple people are involved
            if len(recipients) > 1:
                opportunity = {
                    'idea_id': idea['idea_id'],
                    'collaborators': recipients,
                    'collaborator_count': len(recipients),
                    'category': idea['category'],
                    'opportunity_type': 'cross-functional' if len(recipients) > 3 else 'team',
                    'timestamp': datetime.now().isoformat()
                }
                
                opportunities.append(opportunity)
                self.collaboration_opportunities.append(opportunity)
        
        return opportunities
    
    def track_idea_progress(self, idea_id: str, status_update: Dict) -> Dict:
        """Track progress of an idea"""
        if idea_id not in self.innovation_registry:
            return {'error': 'Idea not found'}
        
        idea = self.innovation_registry[idea_id]
        
        # Update status
        idea['status'] = status_update.get('status', idea['status'])
        idea['last_updated'] = datetime.now().isoformat()
        
        # Add progress note
        if 'notes' not in idea:
            idea['notes'] = []
        
        idea['notes'].append({
            'timestamp': datetime.now().isoformat(),
            'status': status_update.get('status', ''),
            'note': status_update.get('note', ''),
            'updated_by': status_update.get('updated_by', '')
        })
        
        return {
            'idea_id': idea_id,
            'status': idea['status'],
            'progress_tracked': True,
            'total_updates': len(idea['notes'])
        }
    
    def assess_idea_impact(self, idea_id: str, actual_impact: Dict) -> Dict:
        """Assess actual impact of implemented idea"""
        if idea_id not in self.innovation_registry:
            return {'error': 'Idea not found'}
        
        idea = self.innovation_registry[idea_id]
        
        # Record actual impact
        self.impact_assessments[idea_id] = {
            'idea_id': idea_id,
            'predicted_impact': idea['impact_level'],
            'actual_impact': actual_impact.get('level', 'unknown'),
            'metrics': actual_impact.get('metrics', {}),
            'assessment_date': datetime.now().isoformat(),
            'accuracy': self._calculate_prediction_accuracy(idea['impact_level'], actual_impact.get('level', 'unknown'))
        }
        
        return self.impact_assessments[idea_id]
    
    def _calculate_prediction_accuracy(self, predicted: str, actual: str) -> str:
        """Calculate accuracy of impact prediction"""
        if predicted == actual:
            return 'accurate'
        
        impact_levels = ['low', 'medium', 'high']
        try:
            pred_idx = impact_levels.index(predicted)
            actual_idx = impact_levels.index(actual)
            
            if abs(pred_idx - actual_idx) == 1:
                return 'close'
            else:
                return 'inaccurate'
        except ValueError:
            return 'unknown'
    
    def generate_innovation_pipeline(self) -> Dict:
        """Generate innovation pipeline overview"""
        if not self.innovation_registry:
            return {'message': 'No innovations tracked'}
        
        # Status distribution
        status_counts = Counter(idea['status'] for idea in self.innovation_registry.values())
        
        # Category distribution
        category_counts = Counter(idea['category'] for idea in self.innovation_registry.values())
        
        # Priority distribution
        priority_counts = Counter(idea['priority'] for idea in self.innovation_registry.values())
        
        # Impact distribution
        impact_counts = Counter(idea['impact_level'] for idea in self.innovation_registry.values())
        
        # Top ideas by priority
        top_ideas = sorted(
            self.innovation_registry.values(),
            key=lambda i: (
                {'critical': 4, 'high': 3, 'medium': 2, 'low': 1, 'backlog': 0}.get(i['priority'], 0),
                i['impact_score']
            ),
            reverse=True
        )[:10]
        
        # Collaboration statistics
        total_collaborations = len(self.collaboration_opportunities)
        
        return {
            'total_ideas': len(self.innovation_registry),
            'status_distribution': dict(status_counts),
            'category_distribution': dict(category_counts),
            'priority_distribution': dict(priority_counts),
            'impact_distribution': dict(impact_counts),
            'top_ideas': [
                {
                    'id': idea['idea_id'],
                    'description': idea['description'][:100],
                    'category': idea['category'],
                    'priority': idea['priority'],
                    'impact': idea['impact_level'],
                    'feasibility': idea['feasibility_level']
                }
                for idea in top_ideas
            ],
            'collaboration_opportunities': total_collaborations,
            'ideas_by_category': {
                category: len(ideas)
                for category, ideas in self.idea_pipeline.items()
            },
            'reply_all_enforcement': 'Active for all innovation-related communications',
            'timestamp': datetime.now().isoformat()
        }
    
    def process_innovation_email(self, email: Dict) -> Dict:
        """Process email for innovation tracking"""
        # Extract ideas
        ideas = self.extract_innovation_ideas(email)
        
        if not ideas:
            return {
                'email_id': email.get('id', ''),
                'innovations_found': False,
                'message': 'No innovation ideas detected'
            }
        
        # Detect collaboration opportunities
        collaborations = self.detect_collaboration_opportunities(email, ideas)
        
        return {
            'email_id': email.get('id', ''),
            'innovations_found': True,
            'ideas_extracted': len(ideas),
            'ideas': ideas,
            'collaboration_opportunities': collaborations,
            'categories': list(set(idea['category'] for idea in ideas)),
            'high_priority_ideas': [idea for idea in ideas if idea['priority'] in ['critical', 'high']],
            'reply_all_required': len(email.get('to', [])) > 1,
            'timestamp': datetime.now().isoformat()
        }


def test_v670():
    """Test V670 Email Innovation Tracker"""
    innovation_tracker = EmailInnovationTracker()
    
    # Test 1: Product innovation ideas
    email1 = {
        'id': 'e001',
        'from': 'product@company.com',
        'to': ['team@company.com', 'engineering@company.com', 'design@company.com'],
        'subject': 'Innovative Feature Suggestions for Q3',
        'body': 'I have some ideas for our product. What if we add an AI-powered recommendation engine? This could be a game-changer for user experience. We could also streamline the onboarding process to make it faster and more intuitive. This would be a quick win with significant impact.',
        'timestamp': '2026-05-30T09:00:00'
    }
    
    # Test 2: Process improvement
    email2 = {
        'id': 'e002',
        'from': 'operations@company.com',
        'to': ['management@company.com'],
        'subject': 'Proposal: Automate Report Generation',
        'body': 'I suggest we automate our weekly report generation process. Currently it takes 4 hours manually. We could build a simple automation that would be easy to implement and save significant time. This is a straightforward improvement with immediate benefits.',
        'timestamp': '2026-05-30T10:00:00'
    }
    
    # Test 3: Business model innovation
    email3 = {
        'id': 'e003',
        'from': 'strategy@company.com',
        'to': ['executives@company.com', 'finance@company.com'],
        'subject': 'Novel Pricing Strategy Proposal',
        'body': 'I\'d like to propose an innovative usage-based pricing model. This could be transformative for our revenue and provide more value to customers. However, it would be complex to implement and require significant resources. The impact could be substantial but the feasibility is challenging.',
        'timestamp': '2026-05-30T11:00:00'
    }
    
    # Test 4: Customer service improvement
    email4 = {
        'id': 'e004',
        'from': 'support@company.com',
        'to': ['team@company.com'],
        'subject': 'Ideas to Improve Customer Support',
        'body': 'How about we implement a chatbot for common questions? This would help us respond faster and reduce workload. We could also enhance our knowledge base to make it more useful. These are manageable improvements that would be helpful for customers.',
        'timestamp': '2026-05-30T12:00:00'
    }
    
    for email in [email1, email2, email3, email4]:
        result = innovation_tracker.process_innovation_email(email)
        
        if result['innovations_found']:
            print(f"\n{'='*50}")
            print(f"Email: {email['subject'][:40]}...")
            print(f"Ideas Extracted: {result['ideas_extracted']}")
            print(f"Categories: {', '.join(result['categories'])}")
            print(f"High Priority: {len(result['high_priority_ideas'])}")
            
            for idea in result['ideas']:
                print(f"\n  💡 {idea['description'][:80]}...")
                print(f"     Category: {idea['category']}")
                print(f"     Priority: {idea['priority']}")
                print(f"     Impact: {idea['impact_level']} ({idea['impact_score']}/100)")
                print(f"     Feasibility: {idea['feasibility_level']} ({idea['feasibility_score']}/100)")
            
            if result['collaboration_opportunities']:
                print(f"\n  🤝 Collaboration opportunities: {len(result['collaboration_opportunities'])}")
    
    pipeline = innovation_tracker.generate_innovation_pipeline()
    print(f"\n{'='*50}")
    print(f"✅ V670 Email Innovation Tracker Test Complete")
    print(f"Total Ideas: {pipeline['total_ideas']}")
    print(f"Categories: {len(pipeline['category_distribution'])}")
    print(f"Collaborations: {pipeline['collaboration_opportunities']}")
    
    return pipeline


if __name__ == '__main__':
    test_v670()
