#!/usr/bin/env python3
"""
V654 - Email Content Authenticity Verifier
Detects AI-generated vs human-written emails using linguistic analysis,
pattern recognition, and metadata inspection. Helps identify phishing,
spam, and automated content.

Key Features:
- AI vs human writing detection
- Phishing pattern recognition
- Spam indicator analysis
- Linguistic fingerprinting
- Metadata authenticity checks
- Authenticity confidence scoring (0-100)
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
import hashlib
from datetime import datetime
from collections import Counter
from typing import Dict, List, Optional

class EmailContentAuthenticityVerifier:
    """Verifies authenticity of email content"""
    
    def __init__(self):
        self.verified_emails = {}
        self.known_phishing_patterns = []
        self._load_phishing_patterns()
    
    def _load_phishing_patterns(self):
        """Load known phishing patterns"""
        self.known_phishing_patterns = [
            r'click\s+(?:here|this\s+link)\s+(?:to|and)\s+(?:verify|confirm|update)',
            r'(?:your|the)\s+account\s+(?:has\s+been|will\s+be)\s+(?:suspended|locked|closed)',
            r'(?:urgent|immediate)\s+(?:action|response)\s+required',
            r'(?:winner|prize|lottery)\s+(?:notification|alert)',
            r'(?:verify|confirm)\s+your\s+(?:identity|account|password)',
            r'(?:unusual|suspicious)\s+activity\s+(?:on|in)\s+your\s+account',
            r'(?:dear|hello)\s+(?:user|customer|member|sir|madam)\b',
            r'(?:bit\.ly|tinyurl|goo\.gl)\s*/',
            r'(?:\.xyz|\.top|\.click|\.gq|\.ml)\b',
            r'password\s+(?:expir|reset|chang)\w*\s+(?:immediately|now|today)',
        ]
    
    AI_INDICATORS = {
        'overly_formal': [
            'I hope this message finds you well',
            'I trust this email finds you in good health',
            'Please do not hesitate to contact me',
            'I would be delighted to assist',
            'It is my pleasure to inform you',
            'I wanted to take a moment to',
            'I wanted to reach out regarding',
        ],
        'repetitive_structure': [
            'firstly', 'secondly', 'thirdly', 'finally',
            'in conclusion', 'to summarize', 'in summary',
            'it is important to note', 'it is worth mentioning',
        ],
        'generic_phrases': [
            'as an AI', 'as a language model',
            'certainly', 'absolutely', 'indeed',
            'great question', 'that is a valid point',
            'I appreciate you sharing',
        ],
        'perfect_grammar_markers': [
            'furthermore', 'moreover', 'additionally',
            'nevertheless', 'consequently', 'subsequently',
            'in light of', 'with regard to',
        ]
    }
    
    def analyze_ai_likelihood(self, text: str) -> Dict:
        """Analyze likelihood that text was AI-generated"""
        text_lower = text.lower()
        scores = {}
        total_indicators = 0
        matched = []
        
        for category, phrases in self.AI_INDICATORS.items():
            category_matches = []
            for phrase in phrases:
                if phrase.lower() in text_lower:
                    category_matches.append(phrase)
                    total_indicators += 1
            scores[category] = len(category_matches)
            matched.extend(category_matches)
        
        # Check for unusual word distribution (AI tends to have more uniform distribution)
        words = text_lower.split()
        word_freq = Counter(words)
        
        # AI text tends to have lower vocabulary diversity
        unique_ratio = len(word_freq) / len(words) if words else 0
        
        # AI text tends to have more consistent sentence length
        sentences = re.split(r'[.!?]+', text)
        sentence_lengths = [len(s.split()) for s in sentences if s.strip()]
        avg_sentence_length = sum(sentence_lengths) / len(sentence_lengths) if sentence_lengths else 0
        
        # Calculate AI probability
        ai_probability = min(100, total_indicators * 8 + (1 - unique_ratio) * 20)
        
        if ai_probability > 70:
            classification = 'likely_ai'
        elif ai_probability > 40:
            classification = 'possibly_ai'
        elif ai_probability > 20:
            classification = 'mixed'
        else:
            classification = 'likely_human'
        
        return {
            'ai_probability': round(ai_probability, 1),
            'classification': classification,
            'total_indicators': total_indicators,
            'matched_phrases': matched,
            'category_scores': scores,
            'vocabulary_diversity': round(unique_ratio, 3),
            'avg_sentence_length': round(avg_sentence_length, 1)
        }
    
    def detect_phishing(self, email: Dict) -> Dict:
        """Detect phishing indicators in email"""
        text = email.get('body', '') + ' ' + email.get('subject', '')
        text_lower = text.lower()
        
        indicators = []
        risk_score = 0
        
        # Check known phishing patterns
        for pattern in self.known_phishing_patterns:
            if re.search(pattern, text_lower):
                indicators.append(f'Phishing pattern: {pattern}')
                risk_score += 15
        
        # Check for urgency manipulation
        urgency_words = ['immediately', 'urgent', 'act now', 'limited time', 'expires today', 'last chance']
        urgency_count = sum(1 for w in urgency_words if w in text_lower)
        if urgency_count >= 2:
            indicators.append(f'Multiple urgency indicators ({urgency_count})')
            risk_score += 20
        
        # Check for suspicious links
        urls = re.findall(r'https?://[^\s<>"]+|www\.[^\s<>"]+', text)
        suspicious_tlds = ['.xyz', '.top', '.click', '.gq', '.ml', '.tk']
        for url in urls:
            if any(tld in url for tld in suspicious_tlds):
                indicators.append(f'Suspicious URL: {url[:50]}...')
                risk_score += 25
        
        # Check for credential requests
        credential_words = ['password', 'ssn', 'social security', 'credit card', 'bank account', 'pin']
        for word in credential_words:
            if word in text_lower:
                indicators.append(f'Credential request: {word}')
                risk_score += 20
        
        # Check for sender mismatch
        from_addr = email.get('from', '')
        reply_to = email.get('reply_to', '')
        if reply_to and reply_to != from_addr:
            indicators.append(f'Sender/reply-to mismatch: {from_addr} vs {reply_to}')
            risk_score += 15
        
        # Check for excessive formatting
        if text.count('<') > 20 or text.count('>') > 20:
            indicators.append('Excessive HTML formatting')
            risk_score += 5
        
        risk_score = min(100, risk_score)
        
        if risk_score >= 70:
            threat_level = 'critical'
        elif risk_score >= 50:
            threat_level = 'high'
        elif risk_score >= 30:
            threat_level = 'medium'
        elif risk_score >= 10:
            threat_level = 'low'
        else:
            threat_level = 'none'
        
        return {
            'risk_score': risk_score,
            'threat_level': threat_level,
            'indicators': indicators,
            'urls_found': len(urls),
            'recommendation': self._get_phishing_recommendation(threat_level)
        }
    
    def _get_phishing_recommendation(self, threat_level: str) -> str:
        """Get recommendation based on threat level"""
        recommendations = {
            'critical': 'DO NOT click any links or provide any information. Report as phishing immediately.',
            'high': 'Exercise extreme caution. Verify sender through alternate channel before taking any action.',
            'medium': 'Proceed with caution. Verify any links before clicking and do not share sensitive information.',
            'low': 'Minor concerns detected. Review email carefully before responding.',
            'none': 'No phishing indicators detected. Email appears safe.'
        }
        return recommendations.get(threat_level, 'Review email normally.')
    
    def verify_metadata(self, email: Dict) -> Dict:
        """Verify email metadata authenticity"""
        issues = []
        trust_score = 100
        
        # Check for missing headers
        required_headers = ['from', 'to', 'subject', 'timestamp']
        for header in required_headers:
            if header not in email or not email[header]:
                issues.append(f'Missing required header: {header}')
                trust_score -= 10
        
        # Check for suspicious timestamp
        timestamp_str = email.get('timestamp', '')
        if timestamp_str:
            try:
                ts = datetime.fromisoformat(timestamp_str)
                if ts > datetime.now():
                    issues.append('Future timestamp detected')
                    trust_score -= 20
            except (ValueError, TypeError):
                issues.append('Invalid timestamp format')
                trust_score -= 15
        
        # Check for empty or generic subject
        subject = email.get('subject', '')
        if not subject:
            issues.append('Empty subject line')
            trust_score -= 10
        elif len(subject) < 5:
            issues.append('Suspiciously short subject')
            trust_score -= 5
        
        trust_score = max(0, trust_score)
        
        return {
            'trust_score': trust_score,
            'issues': issues,
            'metadata_valid': len(issues) == 0
        }
    
    def verify_authenticity(self, email: Dict) -> Dict:
        """Comprehensive authenticity verification"""
        text = email.get('body', '') + ' ' + email.get('subject', '')
        
        ai_analysis = self.analyze_ai_likelihood(text)
        phishing_analysis = self.detect_phishing(email)
        metadata_analysis = self.verify_metadata(email)
        
        # Calculate overall authenticity score
        auth_score = 100
        auth_score -= ai_analysis['ai_probability'] * 0.3  # AI content reduces trust
        auth_score -= phishing_analysis['risk_score'] * 0.5  # Phishing reduces trust significantly
        auth_score -= (100 - metadata_analysis['trust_score']) * 0.2  # Metadata issues
        
        auth_score = max(0, min(100, auth_score))
        
        if auth_score >= 80:
            verdict = 'authentic'
        elif auth_score >= 60:
            verdict = 'likely_authentic'
        elif auth_score >= 40:
            verdict = 'uncertain'
        elif auth_score >= 20:
            verdict = 'likely_inauthentic'
        else:
            verdict = 'inauthentic'
        
        result = {
            'email_id': email.get('id', ''),
            'authenticity_score': round(auth_score, 1),
            'verdict': verdict,
            'ai_analysis': ai_analysis,
            'phishing_analysis': phishing_analysis,
            'metadata_analysis': metadata_analysis,
            'timestamp': datetime.now().isoformat(),
            'reply_all_required': len(email.get('to', [])) > 1
        }
        
        self.verified_emails[email.get('id', '')] = result
        return result


def test_v654():
    """Test V654 Email Content Authenticity Verifier"""
    verifier = EmailContentAuthenticityVerifier()
    
    # Test email 1: Legitimate human email
    legitimate_email = {
        'id': 'email_001',
        'from': 'john.smith@company.com',
        'to': ['team@company.com', 'manager@company.com'],
        'subject': 'Q3 Budget Review Meeting',
        'body': 'Hey team, can we schedule a meeting next week to go over the Q3 budget? I have some concerns about the marketing spend. Let me know when works for you.',
        'timestamp': '2026-05-29T09:00:00'
    }
    
    # Test email 2: AI-generated email
    ai_email = {
        'id': 'email_002',
        'from': 'assistant@company.com',
        'to': ['client@company.com'],
        'subject': 'Follow-up on Our Discussion',
        'body': 'I hope this message finds you well. I wanted to take a moment to reach out regarding our previous discussion. Firstly, I appreciate you sharing your concerns. It is important to note that we value your partnership. Furthermore, I would be delighted to assist with any additional questions. Please do not hesitate to contact me.',
        'timestamp': '2026-05-29T10:00:00'
    }
    
    # Test email 3: Phishing email
    phishing_email = {
        'id': 'email_003',
        'from': 'security@bank-verify.xyz',
        'to': ['user@company.com'],
        'reply_to': 'phisher@evil.com',
        'subject': 'URGENT: Your account has been suspended',
        'body': 'Dear customer, your account has been suspended due to unusual activity. Click here to verify your identity immediately. Your password will expire today. Visit http://verify-account.xyz/login to confirm your bank account details.',
        'timestamp': '2026-05-29T11:00:00'
    }
    
    results = []
    for email in [legitimate_email, ai_email, phishing_email]:
        result = verifier.verify_authenticity(email)
        results.append(result)
        print(f"\nEmail {email['id']} ({email['from'][:20]}...):")
        print(f"  Authenticity: {result['authenticity_score']}/100 ({result['verdict']})")
        print(f"  AI Probability: {result['ai_analysis']['ai_probability']}% ({result['ai_analysis']['classification']})")
        print(f"  Phishing Risk: {result['phishing_analysis']['risk_score']}/100 ({result['phishing_analysis']['threat_level']})")
        print(f"  Metadata Trust: {result['metadata_analysis']['trust_score']}/100")
    
    print("\n✅ V654 Email Content Authenticity Verifier Test Complete")
    return results


if __name__ == '__main__':
    test_v654()
