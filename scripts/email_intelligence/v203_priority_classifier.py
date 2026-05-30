#!/usr/bin/env python3
"""
V203 - AI Email Priority Classifier
Automatically classifies emails by priority level using multiple signals:
sender importance, content urgency, deadlines, and business impact.
"""

import json
from datetime import datetime
from typing import Dict, List, Any
import re


class PriorityClassifier:
    """AI-powered email priority classification."""
    
    def __init__(self):
        self.classification_history = []
    
    def classify_priority(self, email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
        """Classify email priority."""
        if not email:
            return {'error': 'No email provided'}
        
        context = context or {}
        
        # Analyze sender importance
        sender_importance = self._analyze_sender_importance(email, context)
        
        # Analyze content urgency
        content_urgency = self._analyze_content_urgency(email)
        
        # Detect deadlines
        deadlines = self._detect_deadlines(email)
        
        # Assess business impact
        business_impact = self._assess_business_impact(email, context)
        
        # Check for VIP indicators
        vip_indicators = self._detect_vip_indicators(email)
        
        # Calculate overall priority score
        priority_score = self._calculate_priority_score(
            sender_importance, content_urgency, deadlines, business_impact, vip_indicators
        )
        
        # Determine priority level
        priority_level = self._determine_priority_level(priority_score)
        
        # Generate action recommendations
        recommendations = self._generate_recommendations(
            priority_level, sender_importance, content_urgency, deadlines
        )
        
        # Create response time guidance
        response_time = self._suggest_response_time(priority_level)
        
        return {
            'classification_id': f"priority_{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'timestamp': datetime.now().isoformat(),
            'priority_level': priority_level,
            'priority_score': priority_score,
            'sender_importance': sender_importance,
            'content_urgency': content_urgency,
            'deadlines': deadlines,
            'business_impact': business_impact,
            'vip_indicators': vip_indicators,
            'recommendations': recommendations,
            'suggested_response_time': response_time,
            'reply_all_strategy': self._determine_reply_all_strategy(priority_level)
        }
    
    def _analyze_sender_importance(self, email: Dict, context: Dict) -> Dict[str, Any]:
        """Analyze sender importance."""
        sender = email.get('from', '').lower()
        
        # Check for executive titles
        executive_titles = ['ceo', 'cto', 'cfo', 'coo', 'president', 'vp', 'director']
        is_executive = any(title in sender for title in executive_titles)
        
        # Check for known VIP senders
        vip_senders = context.get('vip_senders', [])
        is_vip = any(vip.lower() in sender for vip in vip_senders)
        
        # Check for external vs internal
        is_external = '@' in sender and not sender.endswith(context.get('company_domain', ''))
        
        # Calculate importance score
        importance_score = 50  # Base score
        
        if is_executive:
            importance_score += 30
        if is_vip:
            importance_score += 25
        if is_external:
            importance_score += 10
        
        # Determine importance level
        if importance_score >= 90:
            importance_level = 'critical'
        elif importance_score >= 75:
            importance_level = 'high'
        elif importance_score >= 60:
            importance_level = 'medium'
        else:
            importance_level = 'standard'
        
        return {
            'level': importance_level,
            'score': min(100, importance_score),
            'is_executive': is_executive,
            'is_vip': is_vip,
            'is_external': is_external
        }
    
    def _analyze_content_urgency(self, email: Dict) -> Dict[str, Any]:
        """Analyze content urgency."""
        body = email.get('body', '').lower()
        subject = email.get('subject', '').lower()
        content = f"{subject} {body}"
        
        # Urgency keywords by level
        urgency_keywords = {
            'critical': ['urgent', 'emergency', 'asap', 'immediately', 'critical', 'now'],
            'high': ['soon', 'quickly', 'promptly', 'today', 'this week'],
            'medium': ['when possible', 'at your convenience', 'soon'],
            'low': ['no rush', 'when you can', 'sometime']
        }
        
        # Count urgency indicators
        urgency_scores = {}
        for level, keywords in urgency_keywords.items():
            count = sum(1 for keyword in keywords if keyword in content)
            if count > 0:
                urgency_scores[level] = count
        
        # Determine urgency level
        if 'critical' in urgency_scores:
            urgency_level = 'critical'
            urgency_score = 90 + urgency_scores['critical'] * 5
        elif 'high' in urgency_scores:
            urgency_level = 'high'
            urgency_score = 70 + urgency_scores['high'] * 5
        elif 'medium' in urgency_scores:
            urgency_level = 'medium'
            urgency_score = 50 + urgency_scores['medium'] * 5
        else:
            urgency_level = 'standard'
            urgency_score = 30
        
        return {
            'level': urgency_level,
            'score': min(100, urgency_score),
            'indicators_found': sum(urgency_scores.values())
        }
    
    def _detect_deadlines(self, email: Dict) -> Dict[str, Any]:
        """Detect deadlines in email."""
        body = email.get('body', '')
        
        # Date patterns
        date_patterns = [
            r'\d{1,2}[/-]\d{1,2}[/-]\d{2,4}',  # MM/DD/YYYY or MM-DD-YYYY
            r'\d{4}[/-]\d{1,2}[/-]\d{1,2}',    # YYYY-MM-DD or YYYY/MM/DD
            r'(?:today|tomorrow|next week|this week|by eod|by cob)',
            r'(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)'
        ]
        
        detected_dates = []
        for pattern in date_patterns:
            matches = re.findall(pattern, body, re.IGNORECASE)
            detected_dates.extend(matches)
        
        # Check for deadline keywords
        deadline_keywords = ['deadline', 'due date', 'by', 'before', 'no later than']
        has_deadline_language = any(keyword in body.lower() for keyword in deadline_keywords)
        
        # Determine deadline urgency
        deadline_urgency = 'none'
        if detected_dates and has_deadline_language:
            deadline_urgency = 'high' if 'today' in body.lower() or 'tomorrow' in body.lower() else 'medium'
        elif detected_dates:
            deadline_urgency = 'low'
        
        return {
            'dates_found': detected_dates[:5],  # Limit to first 5
            'has_deadline_language': has_deadline_language,
            'urgency': deadline_urgency,
            'count': len(detected_dates)
        }
    
    def _assess_business_impact(self, email: Dict, context: Dict) -> Dict[str, Any]:
        """Assess business impact."""
        body = email.get('body', '').lower()
        
        # High impact keywords
        high_impact_keywords = [
            'revenue', 'profit', 'loss', 'budget', 'contract', 'deal',
            'client', 'customer', 'partnership', 'investment', 'acquisition'
        ]
        
        # Medium impact keywords
        medium_impact_keywords = [
            'project', 'deliverable', 'milestone', 'timeline', 'resource',
            'team', 'department', 'initiative', 'strategy'
        ]
        
        # Count impact indicators
        high_impact_count = sum(1 for keyword in high_impact_keywords if keyword in body)
        medium_impact_count = sum(1 for keyword in medium_impact_keywords if keyword in body)
        
        # Calculate impact score
        impact_score = 30  # Base score
        impact_score += high_impact_count * 15
        impact_score += medium_impact_count * 8
        
        # Determine impact level
        if impact_score >= 80:
            impact_level = 'critical'
        elif impact_score >= 60:
            impact_level = 'high'
        elif impact_score >= 45:
            impact_level = 'medium'
        else:
            impact_level = 'low'
        
        return {
            'level': impact_level,
            'score': min(100, impact_score),
            'high_impact_indicators': high_impact_count,
            'medium_impact_indicators': medium_impact_count
        }
    
    def _detect_vip_indicators(self, email: Dict) -> Dict[str, Any]:
        """Detect VIP indicators."""
        subject = email.get('subject', '').lower()
        body = email.get('body', '').lower()
        content = f"{subject} {body}"
        
        vip_indicators = [
            'vip', 'important', 'high priority', 'critical', 'executive',
            'board member', 'shareholder', 'investor', 'key stakeholder'
        ]
        
        detected = []
        for indicator in vip_indicators:
            if indicator in content:
                detected.append(indicator)
        
        return {
            'detected': detected,
            'count': len(detected),
            'is_vip': len(detected) > 0
        }
    
    def _calculate_priority_score(self, sender_importance: Dict, content_urgency: Dict,
                                 deadlines: Dict, business_impact: Dict, 
                                 vip_indicators: Dict) -> int:
        """Calculate overall priority score."""
        # Weighted scoring
        score = 0
        
        # Sender importance (30% weight)
        score += sender_importance['score'] * 0.30
        
        # Content urgency (25% weight)
        score += content_urgency['score'] * 0.25
        
        # Business impact (20% weight)
        score += business_impact['score'] * 0.20
        
        # Deadlines (15% weight)
        deadline_score = 80 if deadlines['urgency'] == 'high' else 50 if deadlines['urgency'] == 'medium' else 30 if deadlines['urgency'] == 'low' else 20
        score += deadline_score * 0.15
        
        # VIP indicators (10% weight)
        vip_score = 95 if vip_indicators['is_vip'] else 20
        score += vip_score * 0.10
        
        return min(100, int(score))
    
    def _determine_priority_level(self, score: int) -> str:
        """Determine priority level from score."""
        if score >= 85:
            return 'critical'
        elif score >= 70:
            return 'high'
        elif score >= 50:
            return 'medium'
        elif score >= 30:
            return 'low'
        else:
            return 'informational'
    
    def _generate_recommendations(self, priority_level: str, sender_importance: Dict,
                                 content_urgency: Dict, deadlines: Dict) -> List[str]:
        """Generate action recommendations."""
        recommendations = []
        
        # Critical priority
        if priority_level == 'critical':
            recommendations.append("🚨 CRITICAL: Respond immediately")
            recommendations.append("Consider escalating to management if needed")
            if deadlines['urgency'] == 'high':
                recommendations.append("⏰ Deadline is imminent - prioritize accordingly")
        
        # High priority
        elif priority_level == 'high':
            recommendations.append("⚡ HIGH PRIORITY: Respond within 2 hours")
            if sender_importance['is_executive']:
                recommendations.append("Executive sender - ensure professional response")
        
        # Medium priority
        elif priority_level == 'medium':
            recommendations.append("⏰ MEDIUM PRIORITY: Respond within 24 hours")
        
        # Low priority
        elif priority_level == 'low':
            recommendations.append("📧 LOW PRIORITY: Respond within 48 hours")
        
        # Informational
        else:
            recommendations.append("ℹ️ INFORMATIONAL: Review when convenient")
        
        # Deadline-specific
        if deadlines['urgency'] == 'high' and priority_level != 'critical':
            recommendations.append("⚠️ Deadline approaching - escalate priority if needed")
        
        return recommendations
    
    def _suggest_response_time(self, priority_level: str) -> Dict[str, Any]:
        """Suggest response time based on priority."""
        response_times = {
            'critical': {
                'time': 'immediately',
                'minutes': 15,
                'description': 'Respond within 15 minutes'
            },
            'high': {
                'time': '2 hours',
                'minutes': 120,
                'description': 'Respond within 2 hours'
            },
            'medium': {
                'time': '24 hours',
                'minutes': 1440,
                'description': 'Respond within 24 hours'
            },
            'low': {
                'time': '48 hours',
                'minutes': 2880,
                'description': 'Respond within 48 hours'
            },
            'informational': {
                'time': 'when convenient',
                'minutes': 10080,  # 1 week
                'description': 'Review when convenient'
            }
        }
        
        return response_times.get(priority_level, response_times['informational'])
    
    def _determine_reply_all_strategy(self, priority_level: str) -> Dict[str, Any]:
        """Determine reply-all strategy."""
        if priority_level == 'critical':
            return {
                'reply_all_recommended': True,
                'reason': 'Critical priority - ensure all stakeholders are informed immediately',
                'urgency': 'immediate'
            }
        elif priority_level == 'high':
            return {
                'reply_all_recommended': True,
                'reason': 'High priority - keep all relevant parties informed',
                'urgency': 'prompt'
            }
        else:
            return {
                'reply_all_recommended': True,
                'reason': 'Standard reply-all to maintain transparency'
            }


def classify_email_priority(email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
    """Main entry point for priority classification."""
    classifier = PriorityClassifier()
    return classifier.classify_priority(email, context)


if __name__ == '__main__':
    test_email = {
        'from': 'ceo@company.com',
        'to': ['team@company.com'],
        'subject': 'URGENT: Critical Revenue Issue - Response Needed ASAP',
        'body': 'Team, we have a critical issue affecting our Q1 revenue. The board is asking for immediate action. Please review the attached contract and provide your analysis by EOD today. This is high priority and affects our partnership with our key client.',
        'date': '2024-01-15T09:00:00'
    }
    
    context = {
        'vip_senders': ['ceo@company.com', 'board@company.com'],
        'company_domain': '@company.com'
    }
    
    result = classify_email_priority(test_email, context)
    print(json.dumps(result, indent=2))
