#!/usr/bin/env python3
"""
V186 - AI Email Relationship Intelligence
Tracks relationship health with every contact, identifies key stakeholders,
suggests networking actions, and provides relationship insights.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from collections import defaultdict
import hashlib

class RelationshipIntelligence:
    """AI-powered relationship intelligence system."""
    
    def __init__(self):
        self.contact_profiles = {}
        self.interaction_history = defaultdict(list)
        self.relationship_scores = defaultdict(float)
        self.stakeholder_map = defaultdict(dict)
        self.networking_opportunities = []
        self.relationship_trends = defaultdict(list)
    
    def analyze_relationship(self, email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
        """Analyze relationship health from email interaction."""
        if not email:
            return {'error': 'No email provided'}
        
        context = context or {}
        sender = email.get('from', '')
        
        if not sender:
            return {'error': 'No sender information'}
        
        # Update contact profile
        self._update_contact_profile(sender, email)
        
        # Log interaction
        interaction = self._log_interaction(email, context)
        
        # Calculate relationship score
        relationship_score = self._calculate_relationship_score(sender)
        
        # Identify relationship stage
        stage = self._identify_relationship_stage(sender, relationship_score)
        
        # Detect sentiment
        sentiment = self._detect_sentiment(email)
        
        # Identify stakeholder role
        stakeholder_role = self._identify_stakeholder_role(sender, email, context)
        
        # Generate insights
        insights = self._generate_relationship_insights(sender, interaction, sentiment)
        
        # Suggest actions
        suggested_actions = self._suggest_relationship_actions(sender, stage, relationship_score)
        
        return {
            'analysis_id': hashlib.md5(f"{sender}{datetime.now().isoformat()}".encode()).hexdigest()[:12],
            'timestamp': datetime.now().isoformat(),
            'contact': sender,
            'contact_name': self._extract_name(sender),
            'relationship_score': round(relationship_score, 1),
            'relationship_stage': stage,
            'sentiment': sentiment,
            'stakeholder_role': stakeholder_role,
            'interaction_summary': interaction,
            'insights': insights,
            'suggested_actions': suggested_actions,
            'next_touchpoint': self._suggest_next_touchpoint(sender, stage),
            'reply_all_recommendation': self._check_reply_all_need(email, context),
            'relationship_health': self._assess_relationship_health(relationship_score, sentiment)
        }
    
    def _update_contact_profile(self, sender: str, email: Dict):
        """Update or create contact profile."""
        if sender not in self.contact_profiles:
            self.contact_profiles[sender] = {
                'first_contact': email.get('date', datetime.now().isoformat()),
                'email_domain': sender.split('@')[-1] if '@' in sender else '',
                'total_interactions': 0,
                'last_interaction': None,
                'communication_preferences': {},
                'topics_discussed': [],
                'relationship_milestones': []
            }
        
        profile = self.contact_profiles[sender]
        profile['total_interactions'] += 1
        profile['last_interaction'] = email.get('date', datetime.now().isoformat())
        
        # Extract topics
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        topics = self._extract_topics(content)
        profile['topics_discussed'].extend(topics)
        profile['topics_discussed'] = list(set(profile['topics_discussed']))[-20:]  # Keep last 20
    
    def _log_interaction(self, email: Dict, context: Dict) -> Dict[str, Any]:
        """Log interaction details."""
        sender = email.get('from', '')
        
        interaction = {
            'date': email.get('date', datetime.now().isoformat()),
            'subject': email.get('subject', ''),
            'direction': 'inbound',
            'response_time': context.get('response_time_hours'),
            'sentiment': self._detect_sentiment(email),
            'topics': self._extract_topics(f"{email.get('subject', '')} {email.get('body', '')}"),
            'action_items': self._extract_action_items(email.get('body', '')),
            'commitments_made': self._extract_commitments(email.get('body', ''))
        }
        
        self.interaction_history[sender].append(interaction)
        return interaction
    
    def _calculate_relationship_score(self, sender: str) -> float:
        """Calculate relationship health score (0-100)."""
        score = 0
        interactions = self.interaction_history.get(sender, [])
        
        if not interactions:
            return 0
        
        # Frequency score (max 30 points)
        total_interactions = len(interactions)
        if total_interactions >= 50:
            score += 30
        elif total_interactions >= 20:
            score += 25
        elif total_interactions >= 10:
            score += 20
        elif total_interactions >= 5:
            score += 15
        else:
            score += total_interactions * 3
        
        # Recency score (max 25 points)
        last_interaction = interactions[-1].get('date')
        if last_interaction:
            try:
                last_date = datetime.fromisoformat(last_interaction)
                days_since = (datetime.now() - last_date).days
                if days_since <= 7:
                    score += 25
                elif days_since <= 30:
                    score += 20
                elif days_since <= 90:
                    score += 15
                elif days_since <= 180:
                    score += 10
                else:
                    score += 5
            except:
                pass
        
        # Sentiment score (max 25 points)
        sentiments = [i.get('sentiment', {}).get('overall', 'neutral') for i in interactions[-10:]]
        positive_count = sum(1 for s in sentiments if s == 'positive')
        negative_count = sum(1 for s in sentiments if s == 'negative')
        
        sentiment_ratio = (positive_count - negative_count) / max(len(sentiments), 1)
        score += max(0, min(25, 12.5 + sentiment_ratio * 12.5))
        
        # Engagement depth (max 20 points)
        avg_response_time = self._calculate_avg_response_time(sender)
        if avg_response_time and avg_response_time < 4:
            score += 20
        elif avg_response_time and avg_response_time < 24:
            score += 15
        elif avg_response_time and avg_response_time < 72:
            score += 10
        else:
            score += 5
        
        return min(100, score)
    
    def _identify_relationship_stage(self, sender: str, score: float) -> str:
        """Identify relationship stage based on score."""
        if score >= 80:
            return 'advocate'
        elif score >= 60:
            return 'partner'
        elif score >= 40:
            return 'active'
        elif score >= 20:
            return 'developing'
        else:
            return 'new'
    
    def _detect_sentiment(self, email: Dict) -> Dict[str, Any]:
        """Detect sentiment of email."""
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        positive_words = ['great', 'excellent', 'amazing', 'wonderful', 'thank', 'appreciate', 'love', 'fantastic', 'brilliant', 'outstanding']
        negative_words = ['problem', 'issue', 'concern', 'disappointed', 'frustrated', 'angry', 'unhappy', 'terrible', 'awful', 'worried']
        
        positive_count = sum(1 for word in positive_words if word in content)
        negative_count = sum(1 for word in negative_words if word in content)
        
        if positive_count > negative_count:
            overall = 'positive'
            intensity = min(1.0, positive_count / 5)
        elif negative_count > positive_count:
            overall = 'negative'
            intensity = min(1.0, negative_count / 5)
        else:
            overall = 'neutral'
            intensity = 0.5
        
        return {
            'overall': overall,
            'intensity': round(intensity, 2),
            'positive_signals': positive_count,
            'negative_signals': negative_count
        }
    
    def _identify_stakeholder_role(self, sender: str, email: Dict, context: Dict) -> Dict[str, Any]:
        """Identify stakeholder role and influence."""
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        sender_lower = sender.lower()
        
        # Decision maker indicators
        decision_maker_signals = ['approve', 'decision', 'budget', 'sign off', 'authorize', 'final say']
        is_decision_maker = any(signal in content for signal in decision_maker_signals)
        
        # Influencer indicators
        influencer_signals = ['recommend', 'suggest', 'advise', 'consult', 'input', 'feedback']
        is_influencer = any(signal in content for signal in influencer_signals)
        
        # Executive indicators
        executive_signals = ['ceo', 'cto', 'cfo', 'president', 'vp', 'director', 'executive']
        is_executive = any(signal in sender_lower for signal in executive_signals)
        
        # Determine role
        if is_decision_maker or is_executive:
            role = 'decision_maker'
            influence = 'high'
        elif is_influencer:
            role = 'influencer'
            influence = 'medium'
        else:
            role = 'user'
            influence = 'low'
        
        return {
            'role': role,
            'influence_level': influence,
            'is_decision_maker': is_decision_maker,
            'is_executive': is_executive,
            'strategic_importance': 'high' if influence == 'high' else 'medium' if influence == 'medium' else 'standard'
        }
    
    def _generate_relationship_insights(self, sender: str, interaction: Dict, sentiment: Dict) -> List[str]:
        """Generate relationship insights."""
        insights = []
        interactions = self.interaction_history.get(sender, [])
        
        # Frequency insight
        if len(interactions) >= 20:
            insights.append(f"📊 Strong relationship: {len(interactions)} interactions logged")
        elif len(interactions) >= 10:
            insights.append(f"📈 Growing relationship: {len(interactions)} interactions so far")
        elif len(interactions) >= 5:
            insights.append(f"🌱 Developing relationship: {len(interactions)} interactions")
        
        # Sentiment trend
        recent_sentiments = [i.get('sentiment', {}).get('overall', 'neutral') for i in interactions[-5:]]
        if all(s == 'positive' for s in recent_sentiments):
            insights.append("😊 Consistently positive interactions - relationship thriving")
        elif all(s == 'negative' for s in recent_sentiments):
            insights.append("⚠️ Recent interactions negative - relationship needs attention")
        
        # Response time insight
        avg_response = self._calculate_avg_response_time(sender)
        if avg_response:
            if avg_response < 2:
                insights.append(f"⚡ Excellent engagement: avg response time {avg_response:.1f}h")
            elif avg_response > 48:
                insights.append(f"🐌 Slow engagement: avg response time {avg_response:.1f}h - consider follow-up")
        
        # Topic diversity
        profile = self.contact_profiles.get(sender, {})
        topics = profile.get('topics_discussed', [])
        if len(topics) >= 10:
            insights.append(f"🎯 Diverse relationship: discussed {len(topics)} different topics")
        
        return insights or ["📝 New relationship - building rapport"]
    
    def _suggest_relationship_actions(self, sender: str, stage: str, score: float) -> List[Dict[str, Any]]:
        """Suggest relationship-building actions."""
        actions = []
        
        if stage == 'new':
            actions.append({
                'action': 'introductory_meeting',
                'priority': 'high',
                'description': 'Schedule introductory call to build rapport',
                'timeline': 'within 1 week'
            })
            actions.append({
                'action': 'value_sharing',
                'priority': 'medium',
                'description': 'Share relevant resources or insights',
                'timeline': 'within 2 weeks'
            })
        
        elif stage == 'developing':
            actions.append({
                'action': 'regular_checkin',
                'priority': 'medium',
                'description': 'Establish regular check-in cadence',
                'timeline': 'monthly'
            })
            actions.append({
                'action': 'collaboration_opportunity',
                'priority': 'medium',
                'description': 'Identify collaboration opportunities',
                'timeline': 'within 1 month'
            })
        
        elif stage == 'active':
            actions.append({
                'action': 'strategic_alignment',
                'priority': 'medium',
                'description': 'Align on strategic goals and priorities',
                'timeline': 'quarterly'
            })
            actions.append({
                'action': 'feedback_request',
                'priority': 'low',
                'description': 'Request feedback on partnership',
                'timeline': 'within 2 months'
            })
        
        elif stage == 'partner':
            actions.append({
                'action': 'executive_sponsorship',
                'priority': 'high',
                'description': 'Engage executive sponsors',
                'timeline': 'quarterly'
            })
            actions.append({
                'action': 'case_study',
                'priority': 'medium',
                'description': 'Develop joint case study or testimonial',
                'timeline': 'within 3 months'
            })
        
        elif stage == 'advocate':
            actions.append({
                'action': 'referral_program',
                'priority': 'high',
                'description': 'Activate referral program',
                'timeline': 'ongoing'
            })
            actions.append({
                'action': 'advisory_board',
                'priority': 'medium',
                'description': 'Invite to customer advisory board',
                'timeline': 'within 6 months'
            })
        
        # Add universal actions
        if score < 50:
            actions.append({
                'action': 'relationship_repair',
                'priority': 'high',
                'description': 'Address any issues and rebuild trust',
                'timeline': 'immediately'
            })
        
        return actions
    
    def _suggest_next_touchpoint(self, sender: str, stage: str) -> Dict[str, Any]:
        """Suggest next touchpoint."""
        interactions = self.interaction_history.get(sender, [])
        
        if not interactions:
            return {
                'suggested_date': (datetime.now() + timedelta(days=7)).isoformat(),
                'reason': 'Initial follow-up',
                'type': 'check_in'
            }
        
        last_interaction = interactions[-1].get('date')
        
        try:
            last_date = datetime.fromisoformat(last_interaction)
            days_since = (datetime.now() - last_date).days
        except:
            days_since = 30
        
        # Suggest touchpoint based on stage
        touchpoint_intervals = {
            'new': 7,
            'developing': 14,
            'active': 30,
            'partner': 60,
            'advocate': 90
        }
        
        interval = touchpoint_intervals.get(stage, 30)
        next_date = datetime.now() + timedelta(days=max(1, interval - days_since))
        
        return {
            'suggested_date': next_date.isoformat(),
            'days_until': max(1, interval - days_since),
            'reason': f'Maintain {stage} relationship',
            'type': 'check_in' if stage in ['new', 'developing'] else 'value_add'
        }
    
    def _check_reply_all_need(self, email: Dict, context: Dict) -> Dict[str, Any]:
        """Check if reply-all is needed for relationship management."""
        cc_count = len(email.get('cc', []))
        to_count = len(email.get('to', []))
        
        return {
            'reply_all_recommended': (cc_count + to_count) > 1,
            'reason': 'Multiple stakeholders involved - keep all parties informed' if (cc_count + to_count) > 1 else 'Direct relationship - reply to sender only',
            'stakeholder_count': cc_count + to_count
        }
    
    def _assess_relationship_health(self, score: float, sentiment: Dict) -> str:
        """Assess overall relationship health."""
        if score >= 80 and sentiment['overall'] == 'positive':
            return 'excellent'
        elif score >= 60:
            return 'good'
        elif score >= 40:
            return 'fair'
        elif score >= 20:
            return 'needs_attention'
        else:
            return 'at_risk'
    
    def _extract_name(self, sender: str) -> str:
        """Extract name from email address."""
        if '<' in sender and '>' in sender:
            return sender.split('<')[0].strip()
        
        local_part = sender.split('@')[0] if '@' in sender else sender
        return local_part.replace('.', ' ').replace('_', ' ').title()
    
    def _extract_topics(self, content: str) -> List[str]:
        """Extract topics from content."""
        stop_words = {'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'shall', 'can', 'need', 'dare', 'ought', 'used'}
        
        words = re.findall(r'\b[a-z]{4,}\b', content.lower())
        filtered = [w for w in words if w not in stop_words]
        
        # Simple frequency-based topic extraction
        from collections import Counter
        word_counts = Counter(filtered)
        
        return [word for word, count in word_counts.most_common(10)]
    
    def _extract_action_items(self, body: str) -> List[str]:
        """Extract action items from email body."""
        patterns = [
            r'(?:please|kindly|could you|would you)\s+(.+?)(?:\.|$)',
            r'(?:need to|must|should)\s+(.+?)(?:\.|$)',
            r'(?:action item|todo|task)[:\s]*(.+?)(?:\.|$)'
        ]
        
        items = []
        for pattern in patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            items.extend([m.strip() for m in matches if len(m.strip()) > 10])
        
        return items[:5]
    
    def _extract_commitments(self, body: str) -> List[str]:
        """Extract commitments from email body."""
        patterns = [
            r'(?:will|shall|promise|commit)\s+(.+?)(?:\.|$)',
            r'(?:by|before|deadline)[:\s]*(.+?)(?:\.|$)'
        ]
        
        commitments = []
        for pattern in patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            commitments.extend([m.strip() for m in matches if len(m.strip()) > 10])
        
        return commitments[:5]
    
    def _calculate_avg_response_time(self, sender: str) -> Optional[float]:
        """Calculate average response time in hours."""
        interactions = self.interaction_history.get(sender, [])
        response_times = [i.get('response_time') for i in interactions if i.get('response_time')]
        
        if not response_times:
            return None
        
        return sum(response_times) / len(response_times)
    
    def get_relationship_dashboard(self) -> Dict[str, Any]:
        """Generate relationship dashboard."""
        total_contacts = len(self.contact_profiles)
        
        # Calculate stage distribution
        stage_distribution = defaultdict(int)
        for sender in self.contact_profiles:
            score = self._calculate_relationship_score(sender)
            stage = self._identify_relationship_stage(sender, score)
            stage_distribution[stage] += 1
        
        # Top relationships
        top_relationships = sorted(
            [(sender, self._calculate_relationship_score(sender)) for sender in self.contact_profiles],
            key=lambda x: x[1],
            reverse=True
        )[:10]
        
        return {
            'dashboard_generated': datetime.now().isoformat(),
            'total_contacts': total_contacts,
            'stage_distribution': dict(stage_distribution),
            'top_relationships': [{'contact': s, 'score': round(sc, 1)} for s, sc in top_relationships],
            'networking_opportunities': len(self.networking_opportunities),
            'average_relationship_score': round(sum(self._calculate_relationship_score(s) for s in self.contact_profiles) / max(total_contacts, 1), 1)
        }


def process_relationship_intelligence(email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
    """Main entry point for relationship intelligence."""
    intelligence = RelationshipIntelligence()
    return intelligence.analyze_relationship(email, context)


if __name__ == '__main__':
    test_email = {
        'from': 'sarah.johnson@client.com',
        'subject': 'Great progress on the project!',
        'body': 'Hi team, I wanted to thank you for the excellent work on Phase 1. The deliverables exceeded our expectations. Let me know when you can schedule a call to discuss Phase 2. Looking forward to continuing our partnership.',
        'date': '2024-01-15T14:00:00',
        'cc': ['executive@client.com', 'project.manager@client.com']
    }
    
    context = {
        'response_time_hours': 2,
        'is_existing_customer': True
    }
    
    result = process_relationship_intelligence(test_email, context)
    print(json.dumps(result, indent=2))
