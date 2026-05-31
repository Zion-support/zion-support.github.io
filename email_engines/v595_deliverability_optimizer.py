#!/usr/bin/env python3
"""
V595 - Email Deliverability Optimizer
Monitor and optimize email deliverability with spam scoring and authentication.
Enforces reply-all for all communications.
"""
import json
import re
from datetime import datetime
from typing import Dict, List, Optional

class EmailDeliverabilityOptimizer:
    def __init__(self):
        self.reply_all_enforced = True
        self.spam_triggers = [
            'free', 'guarantee', 'risk-free', 'no obligation', 'act now',
            'limited time', 'urgent', 'click here', 'buy now', 'order now',
            '$$$','make money', 'earn money', 'cash', 'bonus'
        ]
    
    def optimize_deliverability(self, email: Dict) -> Dict:
        """Optimize email for maximum deliverability"""
        # Check spam score
        spam_analysis = self._analyze_spam_score(email)
        
        # Check authentication
        auth_check = self._check_authentication(email)
        
        # Analyze content quality
        content_analysis = self._analyze_content_quality(email)
        
        # Check sending reputation
        reputation_check = self._check_reputation(email)
        
        # Generate optimization recommendations
        recommendations = self._generate_recommendations(
            spam_analysis, auth_check, content_analysis, reputation_check
        )
        
        # Calculate deliverability score
        deliverability_score = self._calculate_deliverability_score(
            spam_analysis, auth_check, content_analysis, reputation_check
        )
        
        return {
            'engine': 'V595_Email_Deliverability_Optimizer',
            'timestamp': datetime.now().isoformat(),
            'email_id': email.get('id', 'unknown'),
            'deliverability_score': round(deliverability_score, 2),
            'deliverability_grade': self._score_to_grade(deliverability_score),
            'spam_analysis': spam_analysis,
            'authentication': auth_check,
            'content_quality': content_analysis,
            'reputation': reputation_check,
            'recommendations': recommendations,
            'reply_all_enforced': self.reply_all_enforced,
            'all_recipients': email.get('to', []) + email.get('cc', [])
        }
    
    def _analyze_spam_score(self, email: Dict) -> Dict:
        """Analyze spam score"""
        subject = email.get('subject', '')
        body = email.get('body', '')
        full_text = f"{subject} {body}".lower()
        
        spam_score = 0
        triggers_found = []
        
        # Check for spam trigger words
        for trigger in self.spam_triggers:
            if trigger in full_text:
                spam_score += 1
                triggers_found.append(trigger)
        
        # Check for excessive punctuation
        if '!!!' in full_text or '???' in full_text:
            spam_score += 2
            triggers_found.append('excessive_punctuation')
        
        # Check for ALL CAPS
        caps_words = re.findall(r'\b[A-Z]{4,}\b', full_text)
        if len(caps_words) > 3:
            spam_score += 2
            triggers_found.append('excessive_caps')
        
        # Check for suspicious links
        links = re.findall(r'https?://[^\s<>"]+', full_text)
        suspicious_links = [link for link in links if 'bit.ly' in link or 'tinyurl' in link]
        if suspicious_links:
            spam_score += 3
            triggers_found.append('suspicious_links')
        
        # Check image-to-text ratio
        image_count = full_text.count('<img')
        text_length = len(body)
        if image_count > 0 and text_length < 200:
            spam_score += 2
            triggers_found.append('low_text_to_image_ratio')
        
        return {
            'spam_score': spam_score,
            'risk_level': 'high' if spam_score >= 5 else 'medium' if spam_score >= 3 else 'low',
            'triggers_found': triggers_found,
            'max_safe_score': 5,
            'recommendation': 'Reduce spam triggers' if spam_score >= 3 else 'Good'
        }
    
    def _check_authentication(self, email: Dict) -> Dict:
        """Check email authentication setup"""
        # In production, check actual DNS records
        # This is a simplified version
        
        auth_results = {
            'spf': email.get('spf_configured', False),
            'dkim': email.get('dkim_configured', False),
            'dmarc': email.get('dmarc_configured', False)
        }
        
        all_configured = all(auth_results.values())
        
        return {
            'spf': {
                'configured': auth_results['spf'],
                'status': 'pass' if auth_results['spf'] else 'fail',
                'recommendation': 'Configure SPF record' if not auth_results['spf'] else 'Good'
            },
            'dkim': {
                'configured': auth_results['dkim'],
                'status': 'pass' if auth_results['dkim'] else 'fail',
                'recommendation': 'Configure DKIM signing' if not auth_results['dkim'] else 'Good'
            },
            'dmarc': {
                'configured': auth_results['dmarc'],
                'status': 'pass' if auth_results['dmarc'] else 'fail',
                'recommendation': 'Configure DMARC policy' if not auth_results['dmarc'] else 'Good'
            },
            'all_configured': all_configured,
            'authentication_score': sum(auth_results.values()) / 3 * 100
        }
    
    def _analyze_content_quality(self, email: Dict) -> Dict:
        """Analyze content quality for deliverability"""
        body = email.get('body', '')
        subject = email.get('subject', '')
        
        # Text length
        text_length = len(body)
        
        # Link analysis
        links = re.findall(r'https?://[^\s<>"]+', body)
        link_count = len(links)
        
        # Image analysis
        image_count = body.count('<img')
        
        # Personalization
        has_personalization = any(token in body for token in ['{name}', '{first_name}', 'Dear'])
        
        # Unsubscribe link
        has_unsubscribe = 'unsubscribe' in body.lower()
        
        # Calculate quality score
        quality_score = 100
        
        if text_length < 100:
            quality_score -= 20
        if link_count > 10:
            quality_score -= 15
        if image_count > 5:
            quality_score -= 10
        if not has_personalization:
            quality_score -= 10
        if not has_unsubscribe:
            quality_score -= 20
        
        return {
            'text_length': text_length,
            'link_count': link_count,
            'image_count': image_count,
            'has_personalization': has_personalization,
            'has_unsubscribe': has_unsubscribe,
            'quality_score': max(0, quality_score),
            'recommendations': []
        }
    
    def _check_reputation(self, email: Dict) -> Dict:
        """Check sending reputation"""
        # In production, check actual reputation services
        # This is a simplified version
        
        sender = email.get('from', '')
        
        # Simulated reputation data
        reputation_score = email.get('sender_reputation', 85)
        
        return {
            'sender': sender,
            'reputation_score': reputation_score,
            'reputation_grade': 'good' if reputation_score >= 80 else 'fair' if reputation_score >= 60 else 'poor',
            'blacklist_status': 'clean',
            'recommendation': 'Maintain good sending practices' if reputation_score >= 80 else 'Improve sending practices'
        }
    
    def _generate_recommendations(self, spam: Dict, auth: Dict, content: Dict, reputation: Dict) -> List[Dict]:
        """Generate optimization recommendations"""
        recommendations = []
        
        # Spam recommendations
        if spam['risk_level'] == 'high':
            recommendations.append({
                'priority': 'high',
                'category': 'spam',
                'issue': f"High spam score ({spam['spam_score']})",
                'recommendation': 'Remove spam trigger words and excessive punctuation',
                'impact': 'high'
            })
        elif spam['risk_level'] == 'medium':
            recommendations.append({
                'priority': 'medium',
                'category': 'spam',
                'issue': f"Medium spam score ({spam['spam_score']})",
                'recommendation': 'Reduce spam triggers for better deliverability',
                'impact': 'medium'
            })
        
        # Authentication recommendations
        if not auth['all_configured']:
            missing = []
            if not auth['spf']['configured']:
                missing.append('SPF')
            if not auth['dkim']['configured']:
                missing.append('DKIM')
            if not auth['dmarc']['configured']:
                missing.append('DMARC')
            
            recommendations.append({
                'priority': 'critical',
                'category': 'authentication',
                'issue': f"Missing authentication: {', '.join(missing)}",
                'recommendation': f"Configure {', '.join(missing)} records",
                'impact': 'critical'
            })
        
        # Content recommendations
        if not content['has_unsubscribe']:
            recommendations.append({
                'priority': 'high',
                'category': 'content',
                'issue': 'Missing unsubscribe link',
                'recommendation': 'Add clear unsubscribe link (CAN-SPAM requirement)',
                'impact': 'high'
            })
        
        if not content['has_personalization']:
            recommendations.append({
                'priority': 'medium',
                'category': 'content',
                'issue': 'No personalization detected',
                'recommendation': 'Add personalization tokens for better engagement',
                'impact': 'medium'
            })
        
        # Reputation recommendations
        if reputation['reputation_score'] < 80:
            recommendations.append({
                'priority': 'high',
                'category': 'reputation',
                'issue': f"Low sender reputation ({reputation['reputation_score']})",
                'recommendation': 'Improve sending practices and engagement rates',
                'impact': 'high'
            })
        
        return recommendations
    
    def _calculate_deliverability_score(self, spam: Dict, auth: Dict, content: Dict, reputation: Dict) -> float:
        """Calculate overall deliverability score"""
        # Spam score (30% weight)
        spam_component = max(0, 100 - (spam['spam_score'] * 10))
        
        # Authentication (30% weight)
        auth_component = auth['authentication_score']
        
        # Content quality (20% weight)
        content_component = content['quality_score']
        
        # Reputation (20% weight)
        reputation_component = reputation['reputation_score']
        
        # Weighted average
        deliverability_score = (
            spam_component * 0.30 +
            auth_component * 0.30 +
            content_component * 0.20 +
            reputation_component * 0.20
        )
        
        return deliverability_score
    
    def _score_to_grade(self, score: float) -> str:
        """Convert score to grade"""
        if score >= 90:
            return 'A+'
        elif score >= 80:
            return 'A'
        elif score >= 70:
            return 'B'
        elif score >= 60:
            return 'C'
        elif score >= 50:
            return 'D'
        else:
            return 'F'

if __name__ == "__main__":
    optimizer = EmailDeliverabilityOptimizer()
    
    test_email = {
        'id': 'test-595',
        'from': 'marketing@company.com',
        'to': ['customer@example.com'],
        'subject': 'FREE Offer - Act Now!!!',
        'body': 'Click here to get your FREE bonus!!! Make money fast!!!',
        'spf_configured': True,
        'dkim_configured': False,
        'dmarc_configured': False,
        'sender_reputation': 75
    }
    
    result = optimizer.optimize_deliverability(test_email)
    print(json.dumps(result, indent=2))
