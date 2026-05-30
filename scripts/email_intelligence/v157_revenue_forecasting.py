#!/usr/bin/env python3
"""
V157 - AI Email Revenue Forecasting Engine
Predicts quarterly revenue from email pipeline, identifies at-risk deals,
and provides revenue optimization recommendations.
"""

import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from collections import defaultdict
import math


class RevenueForecastingEngine:
    """AI-powered revenue forecasting from email communications."""
    
    def __init__(self):
        self.deal_pipeline = defaultdict(list)
        self.revenue_history = []
        self.conversion_rates = defaultdict(float)
        self.seasonal_factors = self._build_seasonal_factors()
        self.deal_stages = self._build_deal_stages()
    
    def _build_seasonal_factors(self) -> Dict[int, float]:
        """Build seasonal revenue factors by month."""
        return {
            1: 0.85, 2: 0.80, 3: 0.95,  # Q1 (slow start)
            4: 1.00, 5: 1.05, 6: 1.10,  # Q2 (building)
            7: 0.90, 8: 0.85, 9: 1.05,  # Q3 (summer dip)
            10: 1.15, 11: 1.20, 12: 1.30  # Q4 (year-end push)
        }
    
    def _build_deal_stages(self) -> Dict[str, Dict]:
        """Build deal stage definitions with conversion rates."""
        return {
            'prospect': {'probability': 0.10, 'avg_days': 30, 'description': 'Initial contact'},
            'qualified': {'probability': 0.25, 'avg_days': 20, 'description': 'Needs confirmed'},
            'proposal': {'probability': 0.50, 'avg_days': 15, 'description': 'Proposal sent'},
            'negotiation': {'probability': 0.70, 'avg_days': 10, 'description': 'Terms discussion'},
            'closing': {'probability': 0.90, 'avg_days': 5, 'description': 'Final approval'},
            'won': {'probability': 1.00, 'avg_days': 0, 'description': 'Deal closed'},
            'lost': {'probability': 0.00, 'avg_days': 0, 'description': 'Deal lost'}
        }
    
    def forecast_revenue(self, emails: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Generate comprehensive revenue forecast from email pipeline."""
        
        # Extract deals from emails
        deals = self._extract_deals(emails)
        
        # Calculate pipeline value
        pipeline_value = self._calculate_pipeline_value(deals)
        
        # Forecast by quarter
        quarterly_forecast = self._forecast_quarterly(deals)
        
        # Identify at-risk deals
        at_risk_deals = self._identify_at_risk_deals(deals)
        
        # Revenue optimization recommendations
        recommendations = self._generate_recommendations(deals, pipeline_value)
        
        # Confidence intervals
        confidence = self._calculate_confidence(deals)
        
        return {
            'forecast_id': f"rev_{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'timestamp': datetime.now().isoformat(),
            'total_pipeline_value': pipeline_value['total'],
            'weighted_pipeline_value': pipeline_value['weighted'],
            'deal_count': len(deals),
            'quarterly_forecast': quarterly_forecast,
            'at_risk_deals': at_risk_deals,
            'recommendations': recommendations,
            'confidence_intervals': confidence,
            'reply_all_for_pipeline_reviews': True
        }
    
    def _extract_deals(self, emails: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """Extract deal information from emails."""
        deals = []
        
        for email in emails:
            content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
            
            # Look for deal indicators
            deal_indicators = {
                'proposal': ['proposal', 'quote', 'pricing', 'offer'],
                'contract': ['contract', 'agreement', 'terms'],
                'purchase': ['purchase', 'buy', 'order', 'sign'],
                'budget': ['budget', 'approved', 'funding']
            }
            
            deal_score = 0
            for category, keywords in deal_indicators.items():
                if any(kw in content for kw in keywords):
                    deal_score += 1
            
            if deal_score >= 2:
                # Extract monetary values
                money_matches = re.findall(r'\$[\d,]+(?:\.\d{2})?', content)
                deal_value = 0
                for match in money_matches:
                    try:
                        val = float(match.replace('$', '').replace(',', ''))
                        deal_value = max(deal_value, val)
                    except:
                        pass
                
                # Determine stage
                stage = self._determine_stage(content)
                
                deals.append({
                    'deal_id': f"deal_{len(deals) + 1:04d}",
                    'contact': email.get('from', ''),
                    'subject': email.get('subject', ''),
                    'value': deal_value,
                    'stage': stage,
                    'probability': self.deal_stages.get(stage, {}).get('probability', 0.5),
                    'weighted_value': deal_value * self.deal_stages.get(stage, {}).get('probability', 0.5),
                    'expected_close': self._estimate_close_date(stage, email.get('date', '')),
                    'risk_factors': self._identify_deal_risks(content),
                    'last_activity': email.get('date', datetime.now().isoformat())
                })
        
        return deals
    
    def _determine_stage(self, content: str) -> str:
        """Determine deal stage from content."""
        if any(w in content for w in ['signed', 'closed', 'won', 'approved']):
            return 'won'
        elif any(w in content for w in ['final approval', 'signing', 'contract ready']):
            return 'closing'
        elif any(w in content for w in ['negotiate', 'terms', 'discount', 'pricing discussion']):
            return 'negotiation'
        elif any(w in content for w in ['proposal', 'quote', 'pricing']):
            return 'proposal'
        elif any(w in content for w in ['interested', 'need', 'requirements']):
            return 'qualified'
        else:
            return 'prospect'
    
    def _estimate_close_date(self, stage: str, last_activity: str) -> str:
        """Estimate deal close date."""
        try:
            base_date = datetime.fromisoformat(last_activity) if last_activity else datetime.now()
        except:
            base_date = datetime.now()
        
        days_to_close = self.deal_stages.get(stage, {}).get('avg_days', 30)
        close_date = base_date + timedelta(days=days_to_close)
        
        return close_date.isoformat()
    
    def _identify_deal_risks(self, content: str) -> List[str]:
        """Identify risk factors for a deal."""
        risks = []
        
        if any(w in content for w in ['budget', 'expensive', 'cost', 'price concern']):
            risks.append('Price sensitivity')
        if any(w in content for w in ['competitor', 'alternative', 'other vendor']):
            risks.append('Competitive threat')
        if any(w in content for w in ['delay', 'postpone', 'not now', 'later']):
            risks.append('Timeline risk')
        if any(w in content for w in ['approval', 'board', 'committee', 'management']):
            risks.append('Approval complexity')
        if any(w in content for w in ['uncertain', 'not sure', 'maybe', 'considering']):
            risks.append('Commitment uncertainty')
        
        return risks
    
    def _calculate_pipeline_value(self, deals: List[Dict[str, Any]]) -> Dict[str, float]:
        """Calculate total and weighted pipeline value."""
        total = sum(d['value'] for d in deals)
        weighted = sum(d['weighted_value'] for d in deals)
        
        return {
            'total': round(total, 2),
            'weighted': round(weighted, 2),
            'average_deal_size': round(total / len(deals), 2) if deals else 0,
            'coverage_ratio': round(weighted / max(total, 1), 2)
        }
    
    def _forecast_quarterly(self, deals: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Generate quarterly revenue forecast."""
        now = datetime.now()
        current_quarter = (now.month - 1) // 3 + 1
        current_year = now.year
        
        forecast = {}
        
        for q_offset in range(4):
            q_num = ((current_quarter - 1 + q_offset) % 4) + 1
            q_year = current_year + (current_quarter - 1 + q_offset) // 4
            q_key = f"Q{q_num} {q_year}"
            
            # Get deals expected to close in this quarter
            q_start = datetime(q_year, (q_num - 1) * 3 + 1, 1)
            q_end = q_start + timedelta(days=90)
            
            q_deals = [d for d in deals 
                      if q_start <= datetime.fromisoformat(d['expected_close']) <= q_end]
            
            q_value = sum(d['weighted_value'] for d in q_deals)
            
            # Apply seasonal factor
            month_in_quarter = (q_start.month - 1) % 3 + 1
            seasonal_factor = self.seasonal_factors.get(q_start.month, 1.0)
            adjusted_value = q_value * seasonal_factor
            
            forecast[q_key] = {
                'forecasted_revenue': round(adjusted_value, 2),
                'deal_count': len(q_deals),
                'average_deal_size': round(adjusted_value / len(q_deals), 2) if q_deals else 0,
                'seasonal_factor': seasonal_factor,
                'confidence': self._calculate_quarter_confidence(q_deals)
            }
        
        return forecast
    
    def _calculate_quarter_confidence(self, deals: List[Dict[str, Any]]) -> float:
        """Calculate confidence for a quarter's forecast."""
        if not deals:
            return 0.0
        
        # Higher confidence with more deals and higher probabilities
        avg_probability = sum(d['probability'] for d in deals) / len(deals)
        deal_count_factor = min(len(deals) / 10, 1.0)  # More deals = more confidence
        
        return round(avg_probability * deal_count_factor, 2)
    
    def _identify_at_risk_deals(self, deals: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """Identify deals at risk of not closing."""
        at_risk = []
        
        for deal in deals:
            risk_score = 0
            
            # Low probability
            if deal['probability'] < 0.3:
                risk_score += 30
            
            # Many risk factors
            risk_score += len(deal['risk_factors']) * 10
            
            # Stale deal (no recent activity)
            try:
                last_activity = datetime.fromisoformat(deal['last_activity'])
                days_since = (datetime.now() - last_activity).days
                if days_since > 14:
                    risk_score += 20
                if days_since > 30:
                    risk_score += 30
            except:
                risk_score += 20
            
            if risk_score >= 40:
                at_risk.append({
                    'deal_id': deal['deal_id'],
                    'contact': deal['contact'],
                    'value': deal['value'],
                    'stage': deal['stage'],
                    'risk_score': risk_score,
                    'risk_factors': deal['risk_factors'],
                    'recommended_action': self._recommend_deal_action(risk_score, deal)
                })
        
        return sorted(at_risk, key=lambda x: x['risk_score'], reverse=True)
    
    def _recommend_deal_action(self, risk_score: int, deal: Dict) -> str:
        """Recommend action for at-risk deal."""
        if risk_score >= 70:
            return "Immediate executive intervention required. Schedule call within 24 hours."
        elif risk_score >= 50:
            return "Send personalized follow-up with value reinforcement. Offer incentives."
        else:
            return "Increase touchpoints. Provide additional information and case studies."
    
    def _generate_recommendations(self, deals: List[Dict[str, Any]], pipeline: Dict) -> List[Dict[str, Any]]:
        """Generate revenue optimization recommendations."""
        recommendations = []
        
        # Pipeline coverage
        if pipeline['coverage_ratio'] < 0.3:
            recommendations.append({
                'priority': 'high',
                'category': 'pipeline_health',
                'recommendation': 'Pipeline coverage is low. Focus on advancing deals to later stages.',
                'expected_impact': 'Increase weighted pipeline by 40%'
            })
        
        # Deal velocity
        avg_deal_size = pipeline['average_deal_size']
        if avg_deal_size < 10000:
            recommendations.append({
                'priority': 'medium',
                'category': 'deal_sizing',
                'recommendation': 'Average deal size is small. Focus on upselling and larger opportunities.',
                'expected_impact': 'Increase average deal size by 50%'
            })
        
        # Stage distribution
        early_stage = len([d for d in deals if d['stage'] in ['prospect', 'qualified']])
        late_stage = len([d for d in deals if d['stage'] in ['negotiation', 'closing']])
        
        if early_stage > late_stage * 3:
            recommendations.append({
                'priority': 'high',
                'category': 'pipeline_balance',
                'recommendation': 'Too many early-stage deals. Focus on qualification and advancement.',
                'expected_impact': 'Improve conversion rates by 25%'
            })
        
        # Seasonal opportunity
        current_month = datetime.now().month
        if current_month in [10, 11, 12]:
            recommendations.append({
                'priority': 'medium',
                'category': 'seasonal',
                'recommendation': 'Q4 is peak season. Accelerate closing activities and offer year-end incentives.',
                'expected_impact': 'Increase Q4 revenue by 20%'
            })
        
        return recommendations
    
    def _calculate_confidence(self, deals: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Calculate confidence intervals for forecast."""
        if not deals:
            return {'low': 0, 'mid': 0, 'high': 0, 'confidence': 0}
        
        total_weighted = sum(d['weighted_value'] for d in deals)
        
        # Confidence based on deal count and stage distribution
        deal_count = len(deals)
        avg_probability = sum(d['probability'] for d in deals) / deal_count
        
        confidence_level = min(deal_count / 20, 1.0) * avg_probability
        
        return {
            'low': round(total_weighted * 0.7, 2),
            'mid': round(total_weighted, 2),
            'high': round(total_weighted * 1.3, 2),
            'confidence': round(confidence_level, 2)
        }


def process_email_revenue_forecast(emails: List[Dict[str, Any]]) -> Dict[str, Any]:
    """Main entry point for revenue forecasting."""
    engine = RevenueForecastingEngine()
    return engine.forecast_revenue(emails)


if __name__ == '__main__':
    test_emails = [
        {
            'from': 'prospect1@company.com',
            'subject': 'Proposal for AI Platform',
            'body': 'We are interested in your AI platform. Our budget is $50,000. Can you send a proposal?',
            'date': '2024-01-15T10:00:00'
        },
        {
            'from': 'prospect2@company.com',
            'subject': 'Contract Review',
            'body': 'We have reviewed the contract for $75,000 and are ready to sign. Please send final version.',
            'date': '2024-01-20T14:00:00'
        }
    ]
    
    result = process_email_revenue_forecast(test_emails)
    print(json.dumps(result, indent=2))
