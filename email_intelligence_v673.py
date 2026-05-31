#!/usr/bin/env python3
"""
V673 - Email Customer Success Intelligence
Monitors customer health signals, churn risk indicators, and expansion
opportunities from customer emails. Provides proactive customer success
management and retention strategies.

Key Features:
- Customer health score calculation
- Churn risk detection
- Expansion opportunity identification
- Sentiment trend analysis
- Engagement level tracking
- Proactive intervention recommendations
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime, timedelta
from collections import Counter, defaultdict
from typing import Dict, List, Optional

class EmailCustomerSuccessIntelligence:
    """Monitors and analyzes customer success signals from email"""
    
    def __init__(self):
        self.customer_registry = {}
        self.health_scores = {}
        self.churn_risks = []
        self.expansion_opportunities = []
        self.engagement_history = defaultdict(list)
    
    HEALTH_INDICATORS = {
        'positive': {
            'keywords': ['love', 'great', 'excellent', 'satisfied', 'happy', 'impressed', 'thank you', 'appreciate', 'amazing', 'fantastic'],
            'weight': 10
        },
        'neutral': {
            'keywords': ['okay', 'fine', 'acceptable', 'works', 'understand', 'noted'],
            'weight': 0
        },
        'negative': {
            'keywords': ['frustrated', 'disappointed', 'issue', 'problem', 'bug', 'broken', 'not working', 'unhappy', 'concerned', 'worried'],
            'weight': -10
        }
    }
    
    CHURN_SIGNALS = {
        'high_risk': ['cancel', 'switching', 'competitor', 'leaving', 'terminate', 'not renewing', 'too expensive', 'not worth it', 'better alternative'],
        'medium_risk': ['considering', 'evaluating', 'comparing', 'budget constraints', 'rethinking', 'not sure', 'hesitant'],
        'early_warning': ['less usage', 'not using', 'haven\'t tried', 'confused', 'need help', 'support request', 'multiple issues']
    }
    
    EXPANSION_SIGNALS = {
        'upsell': ['more features', 'additional', 'upgrade', 'premium', 'enterprise', 'advanced', 'scaling', 'growing'],
        'cross_sell': ['also need', 'other products', 'related', 'similar', 'complementary', 'integration with'],
        'referral': ['recommend', 'referral', 'colleague', 'friend', 'partner', 'introduce']
    }
    
    ENGAGEMENT_METRICS = {
        'high': ['frequent', 'regular', 'daily', 'weekly', 'active', 'engaged'],
        'medium': ['occasional', 'sometimes', 'periodic', 'monthly'],
        'low': ['rare', 'infrequent', 'seldom', 'hardly', 'barely']
    }
    
    def calculate_health_score(self, customer_id: str, emails: List[Dict]) -> Dict:
        """Calculate customer health score from email interactions"""
        if not emails:
            return {'error': 'No emails provided'}
        
        total_score = 50  # Start neutral
        sentiment_history = []
        
        for email in emails:
            text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
            
            # Calculate sentiment for this email
            email_score = 0
            for sentiment, config in self.HEALTH_INDICATORS.items():
                matches = [kw for kw in config['keywords'] if kw in text]
                email_score += len(matches) * config['weight']
            
            sentiment_history.append({
                'email_id': email.get('id', ''),
                'timestamp': email.get('timestamp', datetime.now().isoformat()),
                'score': email_score,
                'sentiment': 'positive' if email_score > 0 else 'negative' if email_score < 0 else 'neutral'
            })
            
            total_score += email_score
        
        # Normalize score to 0-100
        health_score = max(0, min(100, total_score))
        
        # Determine health level
        if health_score >= 80:
            health_level = 'excellent'
        elif health_score >= 60:
            health_level = 'good'
        elif health_score >= 40:
            health_level = 'fair'
        elif health_score >= 20:
            health_level = 'poor'
        else:
            health_level = 'critical'
        
        # Calculate trend
        if len(sentiment_history) >= 2:
            recent_avg = sum(s['score'] for s in sentiment_history[-3:]) / min(3, len(sentiment_history))
            older_avg = sum(s['score'] for s in sentiment_history[:-3]) / max(1, len(sentiment_history) - 3) if len(sentiment_history) > 3 else 0
            
            if recent_avg > older_avg + 5:
                trend = 'improving'
            elif recent_avg < older_avg - 5:
                trend = 'declining'
            else:
                trend = 'stable'
        else:
            trend = 'insufficient_data'
        
        health_assessment = {
            'customer_id': customer_id,
            'health_score': health_score,
            'health_level': health_level,
            'trend': trend,
            'total_emails_analyzed': len(emails),
            'sentiment_history': sentiment_history,
            'assessment_date': datetime.now().isoformat(),
            'recommendations': self._generate_health_recommendations(health_level, trend)
        }
        
        self.health_scores[customer_id] = health_assessment
        return health_assessment
    
    def _generate_health_recommendations(self, health_level: str, trend: str) -> List[str]:
        """Generate recommendations based on health status"""
        recommendations = []
        
        if health_level == 'critical':
            recommendations.append('URGENT: Schedule executive outreach immediately')
            recommendations.append('Conduct customer success review meeting')
            recommendations.append('Offer dedicated support and resources')
        elif health_level == 'poor':
            recommendations.append('Schedule customer success check-in')
            recommendations.append('Review recent support tickets and issues')
            recommendations.append('Proactively address concerns')
        elif health_level == 'fair':
            recommendations.append('Monitor closely for next 30 days')
            recommendations.append('Share success stories and best practices')
            recommendations.append('Offer training or enablement sessions')
        elif health_level == 'good':
            recommendations.append('Maintain current engagement level')
            recommendations.append('Explore expansion opportunities')
        elif health_level == 'excellent':
            recommendations.append('Request testimonial or case study')
            recommendations.append('Explore upsell and referral opportunities')
        
        if trend == 'declining':
            recommendations.append('TREND ALERT: Health declining - investigate root cause')
        elif trend == 'improving':
            recommendations.append('Positive trend - reinforce what\'s working')
        
        return recommendations
    
    def detect_churn_risk(self, customer_id: str, emails: List[Dict]) -> Dict:
        """Detect churn risk signals from customer emails"""
        churn_signals = []
        risk_score = 0
        
        for email in emails:
            text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
            
            for risk_level, signals in self.CHURN_SIGNALS.items():
                matches = [signal for signal in signals if signal in text]
                if matches:
                    churn_signals.append({
                        'email_id': email.get('id', ''),
                        'risk_level': risk_level,
                        'signals': matches,
                        'timestamp': email.get('timestamp', datetime.now().isoformat())
                    })
                    
                    # Add to risk score
                    if risk_level == 'high_risk':
                        risk_score += 30
                    elif risk_level == 'medium_risk':
                        risk_score += 15
                    elif risk_level == 'early_warning':
                        risk_score += 5
        
        # Normalize risk score
        risk_score = min(100, risk_score)
        
        # Determine risk level
        if risk_score >= 70:
            overall_risk = 'critical'
        elif risk_score >= 50:
            overall_risk = 'high'
        elif risk_score >= 30:
            overall_risk = 'medium'
        elif risk_score >= 10:
            overall_risk = 'low'
        else:
            overall_risk = 'minimal'
        
        churn_assessment = {
            'customer_id': customer_id,
            'risk_score': risk_score,
            'risk_level': overall_risk,
            'churn_signals': churn_signals,
            'signal_count': len(churn_signals),
            'high_risk_signals': sum(1 for s in churn_signals if s['risk_level'] == 'high_risk'),
            'assessment_date': datetime.now().isoformat(),
            'intervention_priority': 'immediate' if overall_risk in ['critical', 'high'] else 'scheduled',
            'recommended_actions': self._generate_churn_interventions(overall_risk, churn_signals)
        }
        
        self.churn_risks.append(churn_assessment)
        return churn_assessment
    
    def _generate_churn_interventions(self, risk_level: str, signals: List[Dict]) -> List[Dict]:
        """Generate churn intervention recommendations"""
        interventions = []
        
        if risk_level == 'critical':
            interventions.extend([
                {'action': 'Executive outreach', 'priority': 'immediate', 'owner': 'Customer Success Manager'},
                {'action': 'Retention offer preparation', 'priority': 'immediate', 'owner': 'Sales'},
                {'action': 'Root cause analysis', 'priority': '24 hours', 'owner': 'Customer Success'},
                {'action': 'Dedicated support assignment', 'priority': 'immediate', 'owner': 'Support'}
            ])
        elif risk_level == 'high':
            interventions.extend([
                {'action': 'Customer success review meeting', 'priority': '1 week', 'owner': 'Customer Success Manager'},
                {'action': 'Value demonstration', 'priority': '1 week', 'owner': 'Customer Success'},
                {'action': 'Issue resolution acceleration', 'priority': '48 hours', 'owner': 'Support'}
            ])
        elif risk_level == 'medium':
            interventions.extend([
                {'action': 'Proactive check-in call', 'priority': '2 weeks', 'owner': 'Customer Success Manager'},
                {'action': 'Training session offer', 'priority': '2 weeks', 'owner': 'Customer Success'},
                {'action': 'Feedback collection', 'priority': '1 week', 'owner': 'Customer Success'}
            ])
        elif risk_level == 'low':
            interventions.extend([
                {'action': 'Monitor engagement metrics', 'priority': 'ongoing', 'owner': 'Customer Success'},
                {'action': 'Share success stories', 'priority': '1 month', 'owner': 'Marketing'}
            ])
        
        return interventions
    
    def identify_expansion_opportunities(self, customer_id: str, emails: List[Dict]) -> List[Dict]:
        """Identify expansion opportunities from customer emails"""
        opportunities = []
        
        for email in emails:
            text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
            
            for opportunity_type, signals in self.EXPANSION_SIGNALS.items():
                matches = [signal for signal in signals if signal in text]
                if matches:
                    opportunity = {
                        'customer_id': customer_id,
                        'opportunity_type': opportunity_type,
                        'signals': matches,
                        'context': self._extract_context(text, matches[0], 200),
                        'email_id': email.get('id', ''),
                        'timestamp': email.get('timestamp', datetime.now().isoformat()),
                        'potential_value': self._estimate_opportunity_value(opportunity_type),
                        'recommended_action': self._get_expansion_action(opportunity_type)
                    }
                    opportunities.append(opportunity)
                    self.expansion_opportunities.append(opportunity)
        
        return opportunities
    
    def _extract_context(self, text: str, keyword: str, window: int = 200) -> str:
        """Extract context around keyword"""
        idx = text.find(keyword)
        if idx == -1:
            return ''
        start = max(0, idx - window)
        end = min(len(text), idx + len(keyword) + window)
        return text[start:end].strip()
    
    def _estimate_opportunity_value(self, opportunity_type: str) -> str:
        """Estimate potential value of expansion opportunity"""
        value_map = {
            'upsell': 'High (20-50% revenue increase)',
            'cross_sell': 'Medium (10-30% revenue increase)',
            'referral': 'High (new customer acquisition)'
        }
        return value_map.get(opportunity_type, 'Medium')
    
    def _get_expansion_action(self, opportunity_type: str) -> str:
        """Get recommended action for expansion opportunity"""
        action_map = {
            'upsell': 'Schedule product demo for premium features',
            'cross_sell': 'Present complementary product benefits',
            'referral': 'Request introduction and offer referral incentive'
        }
        return action_map.get(opportunity_type, 'Explore opportunity with customer')
    
    def track_engagement_level(self, customer_id: str, emails: List[Dict]) -> Dict:
        """Track customer engagement level from email patterns"""
        if not emails:
            return {'error': 'No emails provided'}
        
        # Calculate engagement metrics
        email_count = len(emails)
        
        # Time span
        timestamps = [datetime.fromisoformat(e['timestamp']) for e in emails if 'timestamp' in e]
        if len(timestamps) >= 2:
            time_span = (max(timestamps) - min(timestamps)).days
        else:
            time_span = 1
        
        # Frequency (emails per week)
        frequency = (email_count / max(1, time_span)) * 7
        
        # Engagement keywords
        text_all = ' '.join((e.get('body', '') + ' ' + e.get('subject', '')).lower() for e in emails)
        
        engagement_scores = {}
        for level, keywords in self.ENGAGEMENT_METRICS.items():
            matches = [kw for kw in keywords if kw in text_all]
            engagement_scores[level] = len(matches)
        
        # Determine engagement level
        if engagement_scores['high'] > engagement_scores['medium'] + engagement_scores['low']:
            engagement_level = 'high'
        elif engagement_scores['low'] > engagement_scores['high'] + engagement_scores['medium']:
            engagement_level = 'low'
        else:
            engagement_level = 'medium'
        
        engagement_assessment = {
            'customer_id': customer_id,
            'engagement_level': engagement_level,
            'email_count': email_count,
            'time_span_days': time_span,
            'frequency_per_week': round(frequency, 2),
            'engagement_scores': engagement_scores,
            'assessment_date': datetime.now().isoformat()
        }
        
        self.engagement_history[customer_id].append(engagement_assessment)
        return engagement_assessment
    
    def process_customer_email(self, email: Dict, customer_id: str) -> Dict:
        """Process customer email for success intelligence"""
        # Add to customer registry
        if customer_id not in self.customer_registry:
            self.customer_registry[customer_id] = []
        self.customer_registry[customer_id].append(email)
        
        # Get all emails for this customer
        customer_emails = self.customer_registry[customer_id]
        
        # Calculate health score
        health = self.calculate_health_score(customer_id, customer_emails)
        
        # Detect churn risk
        churn_risk = self.detect_churn_risk(customer_id, customer_emails)
        
        # Identify expansion opportunities
        expansion_opps = self.identify_expansion_opportunities(customer_id, customer_emails)
        
        # Track engagement
        engagement = self.track_engagement_level(customer_id, customer_emails)
        
        return {
            'customer_id': customer_id,
            'email_id': email.get('id', ''),
            'health_assessment': health,
            'churn_assessment': churn_risk,
            'expansion_opportunities': expansion_opps,
            'engagement_assessment': engagement,
            'summary': {
                'health_score': health['health_score'],
                'health_level': health['health_level'],
                'churn_risk_level': churn_risk['risk_level'],
                'expansion_opportunities_count': len(expansion_opps),
                'engagement_level': engagement['engagement_level']
            },
            'reply_all_required': len(email.get('to', [])) > 1,
            'timestamp': datetime.now().isoformat()
        }
    
    def generate_customer_success_report(self) -> Dict:
        """Generate comprehensive customer success report"""
        if not self.customer_registry:
            return {'message': 'No customer data tracked'}
        
        # Customer statistics
        total_customers = len(self.customer_registry)
        
        # Health distribution
        health_levels = Counter(
            h['health_level'] for h in self.health_scores.values()
        )
        
        # Churn risk distribution
        churn_levels = Counter(
            c['risk_level'] for c in self.churn_risks
        )
        
        # Expansion opportunities
        total_opportunities = len(self.expansion_opportunities)
        opportunity_types = Counter(o['opportunity_type'] for o in self.expansion_opportunities)
        
        # Engagement distribution
        engagement_levels = Counter()
        for customer_engagements in self.engagement_history.values():
            if customer_engagements:
                latest = customer_engagements[-1]
                engagement_levels[latest['engagement_level']] += 1
        
        return {
            'total_customers': total_customers,
            'health_distribution': dict(health_levels),
            'churn_risk_distribution': dict(churn_levels),
            'total_expansion_opportunities': total_opportunities,
            'expansion_by_type': dict(opportunity_types),
            'engagement_distribution': dict(engagement_levels),
            'customers_at_risk': sum(1 for c in self.churn_risks if c['risk_level'] in ['critical', 'high']),
            'healthy_customers': sum(1 for h in self.health_scores.values() if h['health_level'] in ['excellent', 'good']),
            'reply_all_enforcement': 'Active for all customer communications',
            'timestamp': datetime.now().isoformat()
        }


def test_v673():
    """Test V673 Email Customer Success Intelligence"""
    cs_intel = EmailCustomerSuccessIntelligence()
    
    # Test 1: Happy customer
    email1 = {
        'id': 'e001',
        'from': 'customer1@client.com',
        'to': ['success@company.com'],
        'subject': 'Love the new features!',
        'body': 'I\'m really impressed with the new features. The product is amazing and our team is very satisfied. Thank you for the excellent support. We\'re also interested in upgrading to the enterprise plan for additional features.',
        'timestamp': '2026-05-30T09:00:00'
    }
    
    # Test 2: At-risk customer
    email2 = {
        'id': 'e002',
        'from': 'customer2@client.com',
        'to': ['support@company.com'],
        'subject': 'Frustrated with multiple issues',
        'body': 'I\'m frustrated with the multiple issues we\'ve been experiencing. The product is not working as expected and we have several problems. We\'re considering switching to a competitor if this doesn\'t improve. This is not worth the price we\'re paying.',
        'timestamp': '2026-05-30T10:00:00'
    }
    
    # Test 3: Neutral customer with expansion signal
    email3 = {
        'id': 'e003',
        'from': 'customer3@client.com',
        'to': ['account@company.com'],
        'subject': 'Question about additional products',
        'body': 'We\'re using your platform and it works fine. We also need a solution for analytics. Do you have other products that might help? A colleague at another company recommended your services.',
        'timestamp': '2026-05-30T11:00:00'
    }
    
    # Process emails
    result1 = cs_intel.process_customer_email(email1, 'customer1')
    result2 = cs_intel.process_customer_email(email2, 'customer2')
    result3 = cs_intel.process_customer_email(email3, 'customer3')
    
    for result in [result1, result2, result3]:
        print(f"\n{'='*50}")
        print(f"Customer: {result['customer_id']}")
        print(f"Health: {result['summary']['health_score']}/100 ({result['summary']['health_level']})")
        print(f"Churn Risk: {result['summary']['churn_risk_level']}")
        print(f"Engagement: {result['summary']['engagement_level']}")
        print(f"Expansion Opps: {result['summary']['expansion_opportunities_count']}")
        
        if result['expansion_opportunities']:
            print("\nExpansion Opportunities:")
            for opp in result['expansion_opportunities']:
                print(f"  - {opp['opportunity_type']}: {opp['signals']}")
    
    report = cs_intel.generate_customer_success_report()
    print(f"\n{'='*50}")
    print(f"✅ V673 Email Customer Success Intelligence Test Complete")
    print(f"Total Customers: {report['total_customers']}")
    print(f"Healthy: {report['healthy_customers']}")
    print(f"At Risk: {report['customers_at_risk']}")
    print(f"Expansion Opps: {report['total_expansion_opportunities']}")
    
    return report


if __name__ == '__main__':
    test_v673()
