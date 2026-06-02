#!/usr/bin/env python3
"""V1047: Email Revenue Attribution Engine
Track which emails lead to closed deals, renewals, and upsells.
Connect email conversations to CRM pipeline stages.
Calculate ROI per email thread.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
import json
from datetime import datetime, timedelta
from collections import defaultdict

class RevenueAttributionEngine:
    def __init__(self):
        self.email_threads = defaultdict(lambda: {
            'emails': [],
            'revenue_events': [],
            'pipeline_stage': 'unknown',
            'deal_value': 0
        })
        self.deal_history = []
        self.attribution_rules = {
            'first_touch': {'weight': 0.3, 'description': 'First email in thread'},
            'last_touch': {'weight': 0.4, 'description': 'Last email before close'},
            'linear': {'weight': 0.3, 'description': 'Evenly distributed across all emails'}
        }
        
        self.pipeline_stages = [
            'prospect', 'qualified', 'proposal', 'negotiation', 'closed_won', 'closed_lost', 'renewal', 'upsell'
        ]
        
        self.revenue_signals = {
            'proposal_sent': ['proposal', 'quote', 'pricing', 'estimate', 'offer'],
            'negotiation': ['discount', 'terms', 'contract', 'agreement', 'finalize'],
            'closing': ['signed', 'approved', 'accepted', 'confirmed', 'welcome aboard'],
            'upsell': ['upgrade', 'additional', 'expand', 'premium', 'enterprise'],
            'renewal': ['renew', 'extend', 'continue', 'another year', 'next term']
        }
    
    def track_email(self, email_data):
        """Track an email and its revenue impact."""
        thread_id = email_data.get('thread_id', email_data.get('id', 'unknown'))
        sender = email_data.get('sender', 'unknown')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # REPLY-ALL ENFORCEMENT
        reply_all = len(recipients) > 1
        
        # Detect revenue signals
        signals = self._detect_revenue_signals(subject, body)
        
        # Estimate deal value from context
        deal_value = self._extract_deal_value(subject, body)
        
        # Update thread
        self.email_threads[thread_id]['emails'].append({
            'sender': sender,
            'timestamp': timestamp,
            'subject': subject,
            'signals': signals
        })
        
        if deal_value > 0:
            self.email_threads[thread_id]['deal_value'] = max(
                self.email_threads[thread_id]['deal_value'],
                deal_value
            )
        
        # Determine pipeline stage
        stage = self._determine_pipeline_stage(signals, thread_id)
        self.email_threads[thread_id]['pipeline_stage'] = stage
        
        # Calculate thread metrics
        thread = self.email_threads[thread_id]
        email_count = len(thread['emails'])
        days_active = self._calculate_thread_duration(thread['emails'])
        
        return {
            'email_id': email_data.get('id'),
            'thread_id': thread_id,
            'reply_all_required': reply_all,
            'revenue_signals_detected': signals,
            'estimated_deal_value': deal_value,
            'pipeline_stage': stage,
            'thread_stats': {
                'total_emails': email_count,
                'days_active': days_active,
                'emails_per_day': round(email_count / max(days_active, 1), 2)
            },
            'attribution_score': self._calculate_attribution_score(thread_id, signals),
            'predicted_close_probability': self._predict_close_probability(thread_id, stage),
            'recommendations': self._generate_recommendations(stage, signals, reply_all),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _detect_revenue_signals(self, subject, body):
        """Detect revenue-related signals in email content."""
        text = (subject + ' ' + body).lower()
        detected = []
        
        for signal_type, keywords in self.revenue_signals.items():
            for kw in keywords:
                if kw in text:
                    detected.append({
                        'type': signal_type,
                        'keyword': kw,
                        'confidence': 0.8 if kw in subject.lower() else 0.6
                    })
                    break
        
        return detected
    
    def _extract_deal_value(self, subject, body):
        """Extract estimated deal value from email content."""
        text = subject + ' ' + body
        
        # Look for dollar amounts
        patterns = [
            r'\$\s*([\d,]+(?:\.\d{2})?)',
            r'([\d,]+(?:\.\d{2})?)\s*(?:USD|dollars)',
            r'(?:budget|price|cost|value|amount)[\s:]+\$?\s*([\d,]+(?:\.\d{2})?)'
        ]
        
        for pattern in patterns:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                value_str = match.group(1).replace(',', '')
                try:
                    return float(value_str)
                except:
                    pass
        
        return 0
    
    def _determine_pipeline_stage(self, signals, thread_id):
        """Determine current pipeline stage based on signals."""
        if not signals:
            thread = self.email_threads.get(thread_id, {})
            email_count = len(thread.get('emails', []))
            
            if email_count == 0:
                return 'prospect'
            elif email_count <= 2:
                return 'qualified'
            else:
                return 'proposal'
        
        signal_types = [s['type'] for s in signals]
        
        if 'closing' in signal_types:
            return 'closed_won'
        elif 'negotiation' in signal_types:
            return 'negotiation'
        elif 'proposal_sent' in signal_types:
            return 'proposal'
        elif 'upsell' in signal_types:
            return 'upsell'
        elif 'renewal' in signal_types:
            return 'renewal'
        
        return 'qualified'
    
    def _calculate_thread_duration(self, emails):
        """Calculate how many days a thread has been active."""
        if len(emails) < 2:
            return 1
        
        try:
            first = datetime.fromisoformat(emails[0]['timestamp'].replace('Z', '+00:00').split('+')[0])
            last = datetime.fromisoformat(emails[-1]['timestamp'].replace('Z', '+00:00').split('+')[0])
            return max(1, (last - first).days)
        except:
            return 1
    
    def _calculate_attribution_score(self, thread_id, signals):
        """Calculate revenue attribution score for this email."""
        thread = self.email_threads.get(thread_id, {})
        email_count = len(thread.get('emails', []))
        
        if email_count == 0:
            return 100  # First touch gets full credit
        
        # Last touch gets higher weight
        if email_count == 1:
            return 70
        
        # Middle emails get lower weight
        base_score = 30
        
        # Boost for revenue signals
        signal_boost = len(signals) * 10
        
        return min(100, base_score + signal_boost)
    
    def _predict_close_probability(self, thread_id, stage):
        """Predict probability of deal closing based on thread activity."""
        stage_probabilities = {
            'prospect': 10,
            'qualified': 25,
            'proposal': 50,
            'negotiation': 75,
            'closed_won': 100,
            'closed_lost': 0,
            'renewal': 85,
            'upsell': 60
        }
        
        base_prob = stage_probabilities.get(stage, 30)
        
        # Adjust based on thread health
        thread = self.email_threads.get(thread_id, {})
        email_count = len(thread.get('emails', []))
        
        # More emails = higher engagement = higher probability
        engagement_boost = min(20, email_count * 2)
        
        return min(100, base_prob + engagement_boost)
    
    def _generate_recommendations(self, stage, signals, reply_all):
        """Generate actionable recommendations based on pipeline stage."""
        recs = []
        
        if stage == 'prospect':
            recs.append('📧 Send personalized value proposition')
            recs.append('📅 Schedule discovery call within 48 hours')
        elif stage == 'qualified':
            recs.append('📊 Share case studies and ROI projections')
            recs.append('🎯 Identify decision makers and budget holders')
        elif stage == 'proposal':
            recs.append('💰 Follow up on proposal within 3 days')
            recs.append('🤝 Offer to walk through pricing details')
        elif stage == 'negotiation':
            recs.append('⚖️ Prepare flexible terms and alternatives')
            recs.append('⏰ Create urgency with limited-time offers')
        elif stage == 'closed_won':
            recs.append('🎉 Send welcome package and onboarding info')
            recs.append('📈 Schedule 30-day check-in')
        elif stage == 'renewal':
            recs.append('📊 Prepare renewal proposal with value recap')
            recs.append('💎 Highlight new features and improvements')
        elif stage == 'upsell':
            recs.append('📈 Show usage analytics and growth opportunities')
            recs.append('🎁 Offer upgrade incentive')
        
        if reply_all:
            recs.append('👥 REPLY ALL: Ensure all stakeholders are aligned')
        
        return recs
    
    def get_revenue_report(self):
        """Generate comprehensive revenue attribution report."""
        total_value = sum(t['deal_value'] for t in self.email_threads.values())
        won_deals = sum(1 for t in self.email_threads.values() if t['pipeline_stage'] == 'closed_won')
        
        return {
            'generated_at': datetime.now().isoformat(),
            'total_threads': len(self.email_threads),
            'total_pipeline_value': total_value,
            'won_deals': won_deals,
            'win_rate': round(won_deals / max(len(self.email_threads), 1) * 100, 1),
            'avg_emails_per_deal': round(
                sum(len(t['emails']) for t in self.email_threads.values()) / max(len(self.email_threads), 1), 1
            ),
            'stage_distribution': {
                stage: sum(1 for t in self.email_threads.values() if t['pipeline_stage'] == stage)
                for stage in self.pipeline_stages
            }
        }


if __name__ == '__main__':
    engine = RevenueAttributionEngine()
    
    test_emails = [
        {
            'id': 'e001', 'thread_id': 'deal_001',
            'sender': 'sales@ziontechgroup.com',
            'recipients': ['prospect@bigcorp.com', 'cto@bigcorp.com'],
            'subject': 'AI Platform Proposal - $250,000 Annual License',
            'body': 'Please find attached our proposal for the enterprise AI platform. The annual license is $250,000 with implementation support included.',
            'timestamp': '2026-05-20T10:00:00'
        },
        {
            'id': 'e002', 'thread_id': 'deal_001',
            'sender': 'cto@bigcorp.com',
            'recipients': ['sales@ziontechgroup.com', 'ceo@bigcorp.com'],
            'subject': 'Re: AI Platform Proposal',
            'body': 'The proposal looks good. Can we negotiate the terms? We would like to discuss a 10% discount for a 2-year commitment.',
            'timestamp': '2026-05-22T14:00:00'
        },
        {
            'id': 'e003', 'thread_id': 'deal_001',
            'sender': 'sales@ziontechgroup.com',
            'recipients': ['prospect@bigcorp.com', 'cto@bigcorp.com', 'ceo@bigcorp.com'],
            'subject': 'Re: AI Platform Proposal - Approved!',
            'body': 'Great news! We have approved the 10% discount for the 2-year contract. Contract is signed and we are ready to begin implementation.',
            'timestamp': '2026-05-25T09:00:00'
        }
    ]
    
    print("=== V1047: Email Revenue Attribution Engine ===\n")
    
    for email in test_emails:
        result = engine.track_email(email)
        print(f"Email: {email['subject']}")
        print(f"  Pipeline Stage: {result['pipeline_stage']}")
        print(f"  Deal Value: ${result['estimated_deal_value']:,.0f}")
        print(f"  Close Probability: {result['predicted_close_probability']}%")
        print(f"  Attribution Score: {result['attribution_score']}")
        print(f"  Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
        for rec in result['recommendations'][:2]:
            print(f"  💡 {rec}")
        print()
    
    report = engine.get_revenue_report()
    print(f"=== Revenue Report ===")
    print(f"Total Pipeline Value: ${report['total_pipeline_value']:,.0f}")
    print(f"Win Rate: {report['win_rate']}%")
    print(f"Avg Emails per Deal: {report['avg_emails_per_deal']}")
