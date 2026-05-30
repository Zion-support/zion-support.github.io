#!/usr/bin/env python3
"""
V187 - AI Email Revenue Attribution
Tracks which emails drive revenue, pipeline influence, deal acceleration,
and provides ROI insights for email communications.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from collections import defaultdict
import hashlib

class RevenueAttribution:
    """AI-powered revenue attribution system for emails."""
    
    def __init__(self):
        self.deal_registry = {}
        self.email_deal_mapping = defaultdict(list)
        self.revenue_events = []
        self.attribution_models = {
            'first_touch': self._first_touch_attribution,
            'last_touch': self._last_touch_attribution,
            'linear': self._linear_attribution,
            'time_decay': self._time_decay_attribution,
            'position_based': self._position_based_attribution
        }
        self.pipeline_influence = defaultdict(float)
        self.deal_velocity = defaultdict(float)
        self.email_roi = defaultdict(dict)
    
    def attribute_revenue(self, email: Dict[str, Any], deal_context: Dict = None) -> Dict[str, Any]:
        """Attribute revenue to email interaction."""
        if not email:
            return {'error': 'No email provided'}
        
        deal_context = deal_context or {}
        
        # Extract deal information
        deal_info = self._extract_deal_info(email, deal_context)
        
        if not deal_info['has_deal_signals']:
            return {
                'attribution_id': None,
                'message': 'No deal signals detected in email',
                'recommendation': 'Continue nurturing relationship'
            }
        
        # Register deal if new
        if deal_info['deal_id'] not in self.deal_registry:
            self._register_deal(deal_info)
        
        # Map email to deal
        email_id = hashlib.md5(f"{email.get('subject', '')}{email.get('date', '')}".encode()).hexdigest()[:12]
        self._map_email_to_deal(email_id, deal_info['deal_id'], email)
        
        # Calculate attribution
        attribution = self._calculate_attribution(email_id, deal_info, deal_context)
        
        # Track pipeline influence
        pipeline_influence = self._track_pipeline_influence(email, deal_info)
        
        # Measure deal velocity impact
        velocity_impact = self._measure_velocity_impact(email, deal_info)
        
        # Calculate ROI
        roi = self._calculate_email_roi(email, deal_info, deal_context)
        
        # Generate insights
        insights = self._generate_revenue_insights(attribution, pipeline_influence, velocity_impact)
        
        return {
            'attribution_id': hashlib.md5(f"{email_id}{datetime.now().isoformat()}".encode()).hexdigest()[:12],
            'timestamp': datetime.now().isoformat(),
            'email_id': email_id,
            'deal_id': deal_info['deal_id'],
            'deal_value': deal_info['deal_value'],
            'deal_stage': deal_info['stage'],
            'attribution': attribution,
            'pipeline_influence': pipeline_influence,
            'velocity_impact': velocity_impact,
            'roi': roi,
            'insights': insights,
            'next_best_action': self._suggest_next_action(deal_info, attribution),
            'reply_all_revenue_impact': self._assess_reply_all_impact(email, deal_info)
        }
    
    def _extract_deal_info(self, email: Dict, context: Dict) -> Dict[str, Any]:
        """Extract deal information from email."""
        subject = email.get('subject', '').lower()
        body = email.get('body', '').lower()
        content = f"{subject} {body}"
        
        # Deal signals
        deal_signals = ['proposal', 'quote', 'contract', 'agreement', 'deal', 'opportunity', 'sale', 'purchase', 'order']
        has_signals = any(signal in content for signal in deal_signals)
        
        # Extract deal value
        deal_value = 0
        money_patterns = [
            r'\$[\d,]+(?:\.\d{2})?',
            r'\d+[\d,]*\s*(?:k|thousand|million|m)\b',
            r'(?:value|amount|price|cost)[:\s]*\$?[\d,]+'
        ]
        
        for pattern in money_patterns:
            matches = re.findall(pattern, content, re.IGNORECASE)
            for match in matches:
                try:
                    # Clean and parse
                    cleaned = match.replace('$', '').replace(',', '').lower()
                    if 'k' in cleaned or 'thousand' in cleaned:
                        deal_value = max(deal_value, float(cleaned.replace('k', '').replace('thousand', '')) * 1000)
                    elif 'm' in cleaned or 'million' in cleaned:
                        deal_value = max(deal_value, float(cleaned.replace('m', '').replace('million', '')) * 1000000)
                    else:
                        deal_value = max(deal_value, float(cleaned))
                except:
                    pass
        
        # Use context value if available
        if context.get('deal_value'):
            deal_value = max(deal_value, float(context['deal_value']))
        
        # Extract stage
        stage = self._detect_deal_stage(content)
        
        # Generate deal ID
        deal_id = context.get('deal_id', hashlib.md5(f"{email.get('from', '')}{email.get('subject', '')}".encode()).hexdigest()[:16])
        
        return {
            'has_deal_signals': has_signals,
            'deal_id': deal_id,
            'deal_value': deal_value,
            'stage': stage,
            'signals_detected': [s for s in deal_signals if s in content],
            'confidence': min(1.0, len([s for s in deal_signals if s in content]) / 3)
        }
    
    def _detect_deal_stage(self, content: str) -> str:
        """Detect deal stage from content."""
        stage_indicators = {
            'prospect': ['interested', 'learn more', 'exploring', 'researching'],
            'qualified': ['budget', 'timeline', 'requirements', 'needs'],
            'proposal': ['proposal', 'quote', 'pricing', 'estimate'],
            'negotiation': ['negotiate', 'terms', 'discount', 'adjust'],
            'closed_won': ['signed', 'approved', 'confirmed', 'welcome aboard'],
            'closed_lost': ['declined', 'not moving forward', 'chose another']
        }
        
        for stage, indicators in stage_indicators.items():
            if any(indicator in content for indicator in indicators):
                return stage
        
        return 'prospect'
    
    def _register_deal(self, deal_info: Dict):
        """Register new deal."""
        self.deal_registry[deal_info['deal_id']] = {
            'deal_id': deal_info['deal_id'],
            'value': deal_info['deal_value'],
            'stage': deal_info['stage'],
            'created_at': datetime.now().isoformat(),
            'emails_involved': [],
            'stage_history': [{'stage': deal_info['stage'], 'date': datetime.now().isoformat()}],
            'total_attribution': 0
        }
    
    def _map_email_to_deal(self, email_id: str, deal_id: str, email: Dict):
        """Map email to deal."""
        self.email_deal_mapping[email_id].append({
            'deal_id': deal_id,
            'email_date': email.get('date', datetime.now().isoformat()),
            'email_subject': email.get('subject', ''),
            'email_from': email.get('from', '')
        })
        
        if deal_id in self.deal_registry:
            self.deal_registry[deal_id]['emails_involved'].append(email_id)
    
    def _calculate_attribution(self, email_id: str, deal_info: Dict, context: Dict) -> Dict[str, Any]:
        """Calculate revenue attribution using selected model."""
        model_name = context.get('attribution_model', 'linear')
        model_func = self.attribution_models.get(model_name, self._linear_attribution)
        
        deal = self.deal_registry.get(deal_info['deal_id'], {})
        emails_involved = deal.get('emails_involved', [])
        
        if not emails_involved:
            return {
                'model': model_name,
                'attribution_value': 0,
                'attribution_percentage': 0,
                'message': 'No emails mapped to deal yet'
            }
        
        attribution_value, attribution_pct = model_func(email_id, emails_involved, deal_info['deal_value'])
        
        return {
            'model': model_name,
            'attribution_value': round(attribution_value, 2),
            'attribution_percentage': round(attribution_pct * 100, 2),
            'emails_in_deal': len(emails_involved),
            'email_position': emails_involved.index(email_id) + 1 if email_id in emails_involved else 0,
            'total_emails': len(emails_involved)
        }
    
    def _first_touch_attribution(self, email_id: str, emails: List, deal_value: float) -> tuple:
        """First touch attribution - 100% to first email."""
        if emails and emails[0] == email_id:
            return deal_value, 1.0
        return 0, 0
    
    def _last_touch_attribution(self, email_id: str, emails: List, deal_value: float) -> tuple:
        """Last touch attribution - 100% to last email."""
        if emails and emails[-1] == email_id:
            return deal_value, 1.0
        return 0, 0
    
    def _linear_attribution(self, email_id: str, emails: List, deal_value: float) -> tuple:
        """Linear attribution - equal credit to all emails."""
        if email_id in emails:
            credit = 1.0 / len(emails)
            return deal_value * credit, credit
        return 0, 0
    
    def _time_decay_attribution(self, email_id: str, emails: List, deal_value: float) -> tuple:
        """Time decay attribution - more credit to recent emails."""
        if email_id not in emails:
            return 0, 0
        
        position = emails.index(email_id)
        total = len(emails)
        
        # Exponential decay
        weights = [2 ** i for i in range(total)]
        total_weight = sum(weights)
        
        credit = weights[position] / total_weight
        return deal_value * credit, credit
    
    def _position_based_attribution(self, email_id: str, emails: List, deal_value: float) -> tuple:
        """Position-based attribution - 40% first, 40% last, 20% distributed."""
        if email_id not in emails:
            return 0, 0
        
        position = emails.index(email_id)
        total = len(emails)
        
        if total == 1:
            return deal_value, 1.0
        elif position == 0:  # First
            return deal_value * 0.4, 0.4
        elif position == total - 1:  # Last
            return deal_value * 0.4, 0.4
        else:  # Middle
            middle_count = total - 2
            credit = 0.2 / middle_count if middle_count > 0 else 0
            return deal_value * credit, credit
    
    def _track_pipeline_influence(self, email: Dict, deal_info: Dict) -> Dict[str, Any]:
        """Track pipeline influence score."""
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        influence_signals = {
            'high': ['decision', 'approved', 'signed', 'moving forward', 'ready to proceed'],
            'medium': ['interested', 'considering', 'reviewing', 'evaluating'],
            'low': ['exploring', 'researching', 'learning about']
        }
        
        influence_score = 0
        influence_level = 'low'
        
        for level, signals in influence_signals.items():
            if any(signal in content for signal in signals):
                if level == 'high':
                    influence_score = 90
                    influence_level = 'high'
                    break
                elif level == 'medium':
                    influence_score = 60
                    influence_level = 'medium'
                else:
                    influence_score = 30
                    influence_level = 'low'
        
        # Update pipeline influence
        deal_id = deal_info['deal_id']
        self.pipeline_influence[deal_id] = max(self.pipeline_influence[deal_id], influence_score)
        
        return {
            'influence_score': influence_score,
            'influence_level': influence_level,
            'signals_detected': [s for signals in influence_signals.values() for s in signals if s in content],
            'pipeline_contribution': round(deal_info['deal_value'] * (influence_score / 100), 2)
        }
    
    def _measure_velocity_impact(self, email: Dict, deal_info: Dict) -> Dict[str, Any]:
        """Measure impact on deal velocity."""
        deal_id = deal_info['deal_id']
        deal = self.deal_registry.get(deal_id, {})
        
        if not deal:
            return {'velocity_impact': 'unknown', 'message': 'Deal not registered'}
        
        # Calculate days in current stage
        stage_history = deal.get('stage_history', [])
        if len(stage_history) < 2:
            return {'velocity_impact': 'accelerating', 'days_in_stage': 0, 'message': 'New deal stage'}
        
        last_stage_change = datetime.fromisoformat(stage_history[-1]['date'])
        days_in_stage = (datetime.now() - last_stage_change).days
        
        # Velocity assessment
        if days_in_stage < 7:
            velocity = 'fast'
            impact = 'accelerating'
        elif days_in_stage < 30:
            velocity = 'normal'
            impact = 'maintaining'
        else:
            velocity = 'slow'
            impact = 'stalled'
        
        return {
            'velocity_impact': impact,
            'deal_velocity': velocity,
            'days_in_current_stage': days_in_stage,
            'recommendation': self._velocity_recommendation(velocity, days_in_stage)
        }
    
    def _velocity_recommendation(self, velocity: str, days: int) -> str:
        """Generate velocity recommendation."""
        if velocity == 'fast':
            return 'Excellent momentum - maintain cadence'
        elif velocity == 'normal':
            return 'Good pace - continue current approach'
        else:
            return f'Deal stalled ({days} days) - send follow-up or escalate'
    
    def _calculate_email_roi(self, email: Dict, deal_info: Dict, context: Dict) -> Dict[str, Any]:
        """Calculate email ROI."""
        # Estimate email cost (time investment)
        time_spent_minutes = context.get('time_spent_minutes', 15)
        hourly_rate = context.get('hourly_rate', 100)
        email_cost = (time_spent_minutes / 60) * hourly_rate
        
        # Calculate attributed revenue
        deal = self.deal_registry.get(deal_info['deal_id'], {})
        emails_involved = deal.get('emails_involved', [])
        
        if emails_involved:
            attributed_revenue = deal_info['deal_value'] / len(emails_involved)
        else:
            attributed_revenue = 0
        
        # Calculate ROI
        if email_cost > 0:
            roi_percentage = ((attributed_revenue - email_cost) / email_cost) * 100
        else:
            roi_percentage = 0
        
        return {
            'email_cost': round(email_cost, 2),
            'attributed_revenue': round(attributed_revenue, 2),
            'roi_percentage': round(roi_percentage, 2),
            'roi_grade': self._calculate_roi_grade(roi_percentage),
            'revenue_per_minute': round(attributed_revenue / max(time_spent_minutes, 1), 2)
        }
    
    def _calculate_roi_grade(self, roi_pct: float) -> str:
        """Calculate ROI grade."""
        if roi_pct >= 1000:
            return 'A+ (Exceptional)'
        elif roi_pct >= 500:
            return 'A (Excellent)'
        elif roi_pct >= 200:
            return 'B (Good)'
        elif roi_pct >= 100:
            return 'C (Break-even)'
        elif roi_pct >= 0:
            return 'D (Below Target)'
        else:
            return 'F (Negative ROI)'
    
    def _generate_revenue_insights(self, attribution: Dict, pipeline: Dict, velocity: Dict) -> List[str]:
        """Generate revenue insights."""
        insights = []
        
        # Attribution insight
        if attribution['attribution_percentage'] > 50:
            insights.append(f"💰 High-impact email: {attribution['attribution_percentage']:.1f}% of deal attribution")
        elif attribution['attribution_percentage'] > 20:
            insights.append(f"📈 Significant contributor: {attribution['attribution_percentage']:.1f}% attribution")
        
        # Pipeline insight
        if pipeline['influence_level'] == 'high':
            insights.append(f"🚀 Strong pipeline influence: ${pipeline['pipeline_contribution']:,.0f} influenced")
        elif pipeline['influence_level'] == 'medium':
            insights.append(f"📊 Moderate pipeline influence: ${pipeline['pipeline_contribution']:,.0f} influenced")
        
        # Velocity insight
        if velocity['velocity_impact'] == 'accelerating':
            insights.append(f"⚡ Deal accelerating - maintain momentum")
        elif velocity['velocity_impact'] == 'stalled':
            insights.append(f"⏸️  Deal stalled - follow-up needed")
        
        return insights or ["📝 Tracking revenue attribution"]
    
    def _suggest_next_action(self, deal_info: Dict, attribution: Dict) -> Dict[str, Any]:
        """Suggest next best action."""
        stage = deal_info['stage']
        
        actions = {
            'prospect': {
                'action': 'qualification_call',
                'description': 'Schedule discovery call to qualify opportunity',
                'priority': 'high'
            },
            'qualified': {
                'action': 'send_proposal',
                'description': 'Prepare and send detailed proposal',
                'priority': 'high'
            },
            'proposal': {
                'action': 'follow_up',
                'description': 'Follow up on proposal and address questions',
                'priority': 'high'
            },
            'negotiation': {
                'action': 'close_deal',
                'description': 'Address concerns and close deal',
                'priority': 'critical'
            },
            'closed_won': {
                'action': 'onboarding',
                'description': 'Initiate customer onboarding process',
                'priority': 'high'
            },
            'closed_lost': {
                'action': 'win_back',
                'description': 'Analyze loss and plan win-back strategy',
                'priority': 'medium'
            }
        }
        
        return actions.get(stage, {
            'action': 'nurture',
            'description': 'Continue nurturing relationship',
            'priority': 'medium'
        })
    
    def _assess_reply_all_impact(self, email: Dict, deal_info: Dict) -> Dict[str, Any]:
        """Assess revenue impact of reply-all."""
        cc_count = len(email.get('cc', []))
        to_count = len(email.get('to', []))
        
        multi_stakeholder = (cc_count + to_count) > 1
        
        return {
            'reply_all_recommended': multi_stakeholder,
            'reason': 'Multiple decision-makers involved - keep all informed to accelerate deal' if multi_stakeholder else 'Single contact - direct reply sufficient',
            'revenue_impact': 'high' if multi_stakeholder and deal_info['deal_value'] > 50000 else 'medium' if multi_stakeholder else 'low',
            'stakeholder_alignment': 'critical' if multi_stakeholder else 'standard'
        }
    
    def get_revenue_dashboard(self) -> Dict[str, Any]:
        """Generate revenue dashboard."""
        total_deals = len(self.deal_registry)
        total_pipeline = sum(d['value'] for d in self.deal_registry.values())
        avg_attribution = sum(d['total_attribution'] for d in self.deal_registry.values()) / max(total_deals, 1)
        
        return {
            'dashboard_generated': datetime.now().isoformat(),
            'total_deals_tracked': total_deals,
            'total_pipeline_value': round(total_pipeline, 2),
            'average_deal_value': round(total_pipeline / max(total_deals, 1), 2),
            'emails_mapped': len(self.email_deal_mapping),
            'top_attribution_model': 'linear',
            'revenue_grade': self._calculate_revenue_grade(total_pipeline)
        }
    
    def _calculate_revenue_grade(self, total_pipeline: float) -> str:
        """Calculate revenue grade."""
        if total_pipeline >= 1000000:
            return 'A+ (Enterprise Scale)'
        elif total_pipeline >= 500000:
            return 'A (Strong Pipeline)'
        elif total_pipeline >= 100000:
            return 'B (Healthy Pipeline)'
        elif total_pipeline >= 50000:
            return 'C (Building Pipeline)'
        else:
            return 'D (Early Stage)'


def process_revenue_attribution(email: Dict[str, Any], deal_context: Dict = None) -> Dict[str, Any]:
    """Main entry point for revenue attribution."""
    attribution = RevenueAttribution()
    return attribution.attribute_revenue(email, deal_context)


if __name__ == '__main__':
    test_email = {
        'from': 'prospect@enterprise.com',
        'subject': 'Proposal Review - $150,000 Contract',
        'body': 'Hi team, I have reviewed the proposal for the $150,000 enterprise license. The pricing looks good and we are ready to move forward. Please send the contract for signature. Looking forward to the partnership.',
        'date': '2024-01-15T16:00:00',
        'cc': ['cfo@enterprise.com', 'legal@enterprise.com']
    }
    
    deal_context = {
        'deal_id': 'DEAL-2024-001',
        'deal_value': 150000,
        'attribution_model': 'position_based',
        'time_spent_minutes': 30,
        'hourly_rate': 150
    }
    
    result = process_revenue_attribution(test_email, deal_context)
    print(json.dumps(result, indent=2))
