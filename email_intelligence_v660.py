#!/usr/bin/env python3
"""
V660 - Email Revenue Attribution Engine
Tracks which email conversations lead to closed deals and revenue.
Provides ROI analysis on email communication patterns and identifies
high-value communication strategies.

Key Features:
- Deal-to-email conversation tracking
- Revenue attribution per conversation thread
- Communication pattern ROI analysis
- High-value email pattern identification
- Sales cycle email optimization
- Customer lifetime value correlation
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime, timedelta
from collections import defaultdict
from typing import Dict, List, Optional, Tuple

class EmailRevenueAttributionEngine:
    """Tracks revenue attribution from email conversations"""
    
    def __init__(self):
        self.conversations = {}  # conv_id -> conversation data
        self.deals = {}  # deal_id -> deal data
        self.attributions = []  # list of attribution records
        self.patterns = defaultdict(list)  # pattern_type -> list of examples
    
    def register_deal(self, deal: Dict) -> Dict:
        """Register a deal with associated email conversations"""
        deal_id = deal.get('id', f"deal_{len(self.deals):06d}")
        
        self.deals[deal_id] = {
            'id': deal_id,
            'title': deal.get('title', ''),
            'value': deal.get('value', 0),
            'currency': deal.get('currency', 'USD'),
            'status': deal.get('status', 'open'),  # open, won, lost
            'customer': deal.get('customer', ''),
            'sales_rep': deal.get('sales_rep', ''),
            'stage': deal.get('stage', 'prospect'),
            'created_at': deal.get('created_at', datetime.now().isoformat()),
            'closed_at': deal.get('closed_at', None),
            'email_conversations': deal.get('email_conversations', []),
            'sales_cycle_days': deal.get('sales_cycle_days', None)
        }
        
        # Link conversations to deal
        for conv_id in deal.get('email_conversations', []):
            if conv_id in self.conversations:
                self.conversations[conv_id]['deal_id'] = deal_id
        
        return self.deals[deal_id]
    
    def register_conversation(self, conversation: Dict) -> Dict:
        """Register an email conversation for tracking"""
        conv_id = conversation.get('id', f"conv_{len(self.conversations):06d}")
        
        self.conversations[conv_id] = {
            'id': conv_id,
            'emails': conversation.get('emails', []),
            'participants': conversation.get('participants', []),
            'start_date': conversation.get('start_date', datetime.now().isoformat()),
            'end_date': conversation.get('end_date', None),
            'total_emails': len(conversation.get('emails', [])),
            'avg_response_time': conversation.get('avg_response_time', None),
            'sentiment_trajectory': conversation.get('sentiment_trajectory', []),
            'key_topics': conversation.get('key_topics', []),
            'deal_id': conversation.get('deal_id', None),
            'reply_all_enforced': conversation.get('reply_all_enforced', True)
        }
        
        return self.conversations[conv_id]
    
    def calculate_attribution(self, deal_id: str) -> Dict:
        """Calculate revenue attribution for a deal"""
        deal = self.deals.get(deal_id)
        if not deal:
            return {'error': 'Deal not found'}
        
        deal_value = deal.get('value', 0)
        conv_ids = deal.get('email_conversations', [])
        
        if not conv_ids:
            return {'deal_id': deal_id, 'attribution': 'no_email_conversations', 'value': 0}
        
        # Gather conversation metrics
        conv_metrics = []
        for conv_id in conv_ids:
            conv = self.conversations.get(conv_id, {})
            conv_metrics.append({
                'id': conv_id,
                'total_emails': conv.get('total_emails', 0),
                'avg_response_time': conv.get('avg_response_time', None),
                'key_topics': conv.get('key_topics', []),
                'sentiment': conv.get('sentiment_trajectory', [])
            })
        
        # Calculate attribution weight based on conversation impact
        total_weight = sum(self._calculate_conversation_weight(cm) for cm in conv_metrics)
        
        attributions = []
        for cm in conv_metrics:
            weight = self._calculate_conversation_weight(cm)
            share = weight / total_weight if total_weight > 0 else 1 / len(conv_metrics)
            
            attributions.append({
                'conversation_id': cm['id'],
                'email_count': cm['total_emails'],
                'attribution_share': round(share, 4),
                'attributed_revenue': round(deal_value * share, 2),
                'key_topics': cm['key_topics']
            })
        
        # Calculate email efficiency metrics
        total_emails = sum(cm['total_emails'] for cm in conv_metrics)
        revenue_per_email = deal_value / max(1, total_emails)
        
        # Calculate sales cycle efficiency
        if deal.get('sales_cycle_days'):
            revenue_per_day = deal_value / deal['sales_cycle_days']
        else:
            revenue_per_day = None
        
        attribution_record = {
            'deal_id': deal_id,
            'deal_value': deal_value,
            'deal_status': deal.get('status', 'unknown'),
            'total_conversations': len(conv_ids),
            'total_emails': total_emails,
            'revenue_per_email': round(revenue_per_email, 2),
            'revenue_per_day': round(revenue_per_day, 2) if revenue_per_day else None,
            'attributions': attributions,
            'timestamp': datetime.now().isoformat()
        }
        
        self.attributions.append(attribution_record)
        return attribution_record
    
    def _calculate_conversation_weight(self, conv_metrics: Dict) -> float:
        """Calculate the weight of a conversation for attribution"""
        weight = 1.0
        
        # More emails = more engagement = higher weight
        weight += conv_metrics.get('total_emails', 0) * 0.1
        
        # Faster response time = better engagement
        avg_rt = conv_metrics.get('avg_response_time')
        if avg_rt and avg_rt < 60:  # Under 1 hour
            weight += 2.0
        elif avg_rt and avg_rt < 240:  # Under 4 hours
            weight += 1.0
        
        # Key topics present = higher relevance
        topics = conv_metrics.get('key_topics', [])
        weight += len(topics) * 0.5
        
        return max(0.1, weight)
    
    def analyze_email_patterns(self) -> Dict:
        """Analyze high-value email patterns"""
        won_deals = [d for d in self.deals.values() if d.get('status') == 'won']
        lost_deals = [d for d in self.deals.values() if d.get('status') == 'lost']
        
        won_metrics = []
        lost_metrics = []
        
        for deal in won_deals:
            for conv_id in deal.get('email_conversations', []):
                conv = self.conversations.get(conv_id, {})
                won_metrics.append({
                    'emails': conv.get('total_emails', 0),
                    'value': deal.get('value', 0),
                    'response_time': conv.get('avg_response_time', None)
                })
        
        for deal in lost_deals:
            for conv_id in deal.get('email_conversations', []):
                conv = self.conversations.get(conv_id, {})
                lost_metrics.append({
                    'emails': conv.get('total_emails', 0),
                    'value': deal.get('value', 0),
                    'response_time': conv.get('avg_response_time', None)
                })
        
        # Calculate averages
        won_avg_emails = sum(m['emails'] for m in won_metrics) / max(1, len(won_metrics))
        lost_avg_emails = sum(m['emails'] for m in lost_metrics) / max(1, len(lost_metrics))
        
        won_avg_rt = sum(m['response_time'] for m in won_metrics if m['response_time']) / max(1, len([m for m in won_metrics if m['response_time']]))
        lost_avg_rt = sum(m['response_time'] for m in lost_metrics if m['response_time']) / max(1, len([m for m in lost_metrics if m['response_time']]))
        
        return {
            'won_deals': len(won_deals),
            'lost_deals': len(lost_deals),
            'win_rate': round(len(won_deals) / max(1, len(won_deals) + len(lost_deals)) * 100, 1),
            'won_avg_emails_per_deal': round(won_avg_emails, 1),
            'lost_avg_emails_per_deal': round(lost_avg_emails, 1),
            'won_avg_response_time_min': round(won_avg_rt, 1) if won_avg_rt else None,
            'lost_avg_response_time_min': round(lost_avg_rt, 1) if lost_avg_rt else None,
            'insights': self._generate_pattern_insights(won_avg_emails, lost_avg_emails, won_avg_rt, lost_avg_rt),
            'recommendations': [
                'Respond to prospects within 1 hour for higher close rates',
                'Send 5-8 emails per deal for optimal engagement',
                'Use reply-all for stakeholder alignment in enterprise deals',
                'Follow up within 48 hours of last communication'
            ]
        }
    
    def _generate_pattern_insights(self, won_emails, lost_emails, won_rt, lost_rt) -> List[str]:
        """Generate insights from pattern analysis"""
        insights = []
        
        if won_emails and lost_emails:
            if won_emails > lost_emails:
                insights.append(f'Won deals have {round((won_emails/lost_emails - 1)*100)}% more email touchpoints than lost deals')
            else:
                insights.append(f'Lost deals have {round((lost_emails/won_emails - 1)*100)}% more email touchpoints - possible over-communication')
        
        if won_rt and lost_rt:
            if won_rt < lost_rt:
                insights.append(f'Won deals respond {round((1 - won_rt/lost_rt)*100)}% faster than lost deals')
            else:
                insights.append('Response time may not be a differentiating factor in this dataset')
        
        return insights
    
    def calculate_roi_by_channel(self) -> Dict:
        """Calculate ROI by communication channel/pattern"""
        total_revenue = sum(d.get('value', 0) for d in self.deals.values() if d.get('status') == 'won')
        total_emails = sum(c.get('total_emails', 0) for c in self.conversations.values())
        
        return {
            'total_revenue_attributed': total_revenue,
            'total_emails_tracked': total_emails,
            'revenue_per_email': round(total_revenue / max(1, total_emails), 2),
            'total_deals': len(self.deals),
            'total_conversations': len(self.conversations),
            'attribution_records': len(self.attributions),
            'reply_all_revenue_impact': self._estimate_reply_all_impact()
        }
    
    def _estimate_reply_all_impact(self) -> Dict:
        """Estimate revenue impact of reply-all enforcement"""
        reply_all_convs = [c for c in self.conversations.values() if c.get('reply_all_enforced')]
        non_reply_all_convs = [c for c in self.conversations.values() if not c.get('reply_all_enforced')]
        
        reply_all_deals = sum(
            self.deals.get(c.get('deal_id', ''), {}).get('value', 0)
            for c in reply_all_convs if c.get('deal_id')
        )
        non_reply_all_deals = sum(
            self.deals.get(c.get('deal_id', ''), {}).get('value', 0)
            for c in non_reply_all_convs if c.get('deal_id')
        )
        
        return {
            'reply_all_revenue': reply_all_deals,
            'non_reply_all_revenue': non_reply_all_deals,
            'reply_all_conversations': len(reply_all_convs),
            'estimated_impact': f"${reply_all_deals - non_reply_all_deals:,.2f}" if reply_all_deals > non_reply_all_deals else 'Neutral'
        }
    
    def generate_revenue_report(self) -> Dict:
        """Generate comprehensive revenue attribution report"""
        total_revenue = sum(d.get('value', 0) for d in self.deals.values() if d.get('status') == 'won')
        pipeline_value = sum(d.get('value', 0) for d in self.deals.values() if d.get('status') == 'open')
        
        pattern_analysis = self.analyze_email_patterns()
        roi = self.calculate_roi_by_channel()
        
        return {
            'total_won_revenue': total_revenue,
            'pipeline_value': pipeline_value,
            'win_rate': pattern_analysis['win_rate'],
            'revenue_per_email': roi['revenue_per_email'],
            'total_deals_tracked': len(self.deals),
            'total_conversations_tracked': len(self.conversations),
            'pattern_analysis': pattern_analysis,
            'roi_analysis': roi,
            'timestamp': datetime.now().isoformat()
        }


def test_v660():
    """Test V660 Email Revenue Attribution Engine"""
    engine = EmailRevenueAttributionEngine()
    
    # Register conversations
    engine.register_conversation({
        'id': 'conv_001', 'emails': [{'id': f'e{i}'} for i in range(8)],
        'participants': ['sales@ziontech.com', 'buyer@acme.com'],
        'total_emails': 8, 'avg_response_time': 45,
        'key_topics': ['pricing', 'demo', 'contract'],
        'sentiment_trajectory': [0, 2, 5, 3, 7, 8, 9, 10]
    })
    
    engine.register_conversation({
        'id': 'conv_002', 'emails': [{'id': f'e{i}'} for i in range(4)],
        'participants': ['sales@ziontech.com', 'prospect@beta.com'],
        'total_emails': 4, 'avg_response_time': 120,
        'key_topics': ['intro', 'needs'],
        'sentiment_trajectory': [0, 1, 2, 3]
    })
    
    engine.register_conversation({
        'id': 'conv_003', 'emails': [{'id': f'e{i}'} for i in range(12)],
        'participants': ['sales@ziontech.com', 'enterprise@gamma.com'],
        'total_emails': 12, 'avg_response_time': 30,
        'key_topics': ['enterprise', 'pilot', 'pricing', 'contract', 'onboarding'],
        'sentiment_trajectory': [0, 3, 5, 4, 6, 8, 7, 9, 10, 9, 10, 10],
        'reply_all_enforced': True
    })
    
    # Register deals
    engine.register_deal({
        'id': 'deal_001', 'title': 'Acme Corp Enterprise License',
        'value': 120000, 'status': 'won', 'customer': 'Acme Corp',
        'sales_rep': 'sales@ziontech.com', 'sales_cycle_days': 45,
        'email_conversations': ['conv_001']
    })
    
    engine.register_deal({
        'id': 'deal_002', 'title': 'Beta Inc Trial',
        'value': 25000, 'status': 'lost', 'customer': 'Beta Inc',
        'sales_rep': 'sales@ziontech.com', 'sales_cycle_days': 30,
        'email_conversations': ['conv_002']
    })
    
    engine.register_deal({
        'id': 'deal_003', 'title': 'Gamma Enterprise Platform',
        'value': 350000, 'status': 'won', 'customer': 'Gamma Corp',
        'sales_rep': 'sales@ziontech.com', 'sales_cycle_days': 90,
        'email_conversations': ['conv_003']
    })
    
    # Calculate attributions
    attr1 = engine.calculate_attribution('deal_001')
    attr3 = engine.calculate_attribution('deal_003')
    
    # Generate reports
    report = engine.generate_revenue_report()
    
    print("✅ V660 Email Revenue Attribution Engine Test")
    print(f"\nDeal 001 Attribution:")
    print(f"  Value: ${attr1['deal_value']:,}")
    print(f"  Revenue per email: ${attr1['revenue_per_email']:,}")
    print(f"  Total emails: {attr1['total_emails']}")
    
    print(f"\nDeal 003 Attribution:")
    print(f"  Value: ${attr3['deal_value']:,}")
    print(f"  Revenue per email: ${attr3['revenue_per_email']:,}")
    
    print(f"\nRevenue Report:")
    print(f"  Total Won Revenue: ${report['total_won_revenue']:,}")
    print(f"  Win Rate: {report['win_rate']}%")
    print(f"  Revenue per Email: ${report['revenue_per_email']:,}")
    print(f"  Reply-All Impact: {report['roi_analysis']['reply_all_revenue_impact']['estimated_impact']}")
    
    return report


if __name__ == '__main__':
    test_v660()
