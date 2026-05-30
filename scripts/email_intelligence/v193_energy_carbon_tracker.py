#!/usr/bin/env python3
"""
V193 - AI Email Energy & Carbon Tracker
Estimates carbon footprint of email communications, suggests eco-friendly alternatives,
tracks energy consumption of email storage, provides sustainability scores, and recommends
email reduction strategies.
"""

import json
from datetime import datetime
from typing import Dict, List, Any
from collections import defaultdict


class EnergyCarbonTracker:
    """AI-powered email energy and carbon footprint tracking system."""
    
    def __init__(self):
        self.carbon_factors = self._build_carbon_factors()
        self.email_history = defaultdict(list)
        self.sustainability_goals = {}
    
    def _build_carbon_factors(self) -> Dict[str, float]:
        """Build carbon emission factors for different email activities."""
        return {
            'send_email': 0.3,  # grams CO2 per email sent
            'receive_email': 0.1,  # grams CO2 per email received
            'store_email_1year': 0.5,  # grams CO2 per email stored for 1 year
            'attachment_1mb': 2.0,  # grams CO2 per MB attachment
            'image_1mb': 1.5,  # grams CO2 per MB image
            'video_1mb': 3.0,  # grams CO2 per MB video
            'reply_all_multiplier': 1.5,  # multiplier for reply-all
            'long_email_multiplier': 1.2,  # multiplier for emails > 1000 words
            'newsletter': 0.5,  # grams CO2 per newsletter
            'spam': 0.05  # grams CO2 per spam email
        }
    
    def track_email_footprint(self, email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
        """Track carbon footprint of email communication."""
        if not email:
            return {'error': 'No email provided'}
        
        context = context or {}
        
        # Calculate carbon footprint
        footprint = self._calculate_carbon_footprint(email, context)
        
        # Calculate energy consumption
        energy = self._calculate_energy_consumption(email)
        
        # Assess sustainability
        sustainability = self._assess_sustainability(footprint, context)
        
        # Generate eco-friendly alternatives
        alternatives = self._suggest_eco_alternatives(email, footprint)
        
        # Reduction strategies
        strategies = self._suggest_reduction_strategies(email, footprint)
        
        # Impact visualization
        impact = self._visualize_impact(footprint)
        
        return {
            'tracking_id': f"carbon_{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'timestamp': datetime.now().isoformat(),
            'carbon_footprint': footprint,
            'energy_consumption': energy,
            'sustainability_score': sustainability,
            'eco_alternatives': alternatives,
            'reduction_strategies': strategies,
            'impact_visualization': impact,
            'reply_all_carbon_impact': self._calculate_reply_all_impact(email, context),
            'cumulative_impact': self._calculate_cumulative_impact(email)
        }
    
    def _calculate_carbon_footprint(self, email: Dict, context: Dict) -> Dict[str, Any]:
        """Calculate carbon footprint of email."""
        body = email.get('body', '')
        attachments = email.get('attachments', [])
        images = email.get('images', [])
        
        # Base email footprint
        base_footprint = self.carbon_factors['send_email']
        
        # Attachment footprint
        attachment_footprint = 0
        for attachment in attachments:
            size_mb = attachment.get('size_mb', 0)
            attachment_footprint += size_mb * self.carbon_factors['attachment_1mb']
        
        # Image footprint
        image_footprint = 0
        for image in images:
            size_mb = image.get('size_mb', 0)
            image_footprint += size_mb * self.carbon_factors['image_1mb']
        
        # Multipliers
        word_count = len(body.split())
        if word_count > 1000:
            base_footprint *= self.carbon_factors['long_email_multiplier']
        
        # Recipients
        recipients = len(email.get('to', [])) + len(email.get('cc', []))
        if recipients > 10:
            base_footprint *= 1.5  # Large recipient list
        
        total_footprint = base_footprint + attachment_footprint + image_footprint
        
        return {
            'total_grams_co2': round(total_footprint, 2),
            'breakdown': {
                'base_email': round(base_footprint, 2),
                'attachments': round(attachment_footprint, 2),
                'images': round(image_footprint, 2)
            },
            'equivalents': self._calculate_equivalents(total_footprint),
            'category': self._categorize_footprint(total_footprint)
        }
    
    def _calculate_equivalents(self, grams_co2: float) -> Dict[str, Any]:
        """Calculate real-world equivalents."""
        return {
            'car_meters': round(grams_co2 / 0.21, 1),  # 0.21g CO2 per meter driven
            'lightbulb_hours': round(grams_co2 / 0.04, 1),  # 0.04g CO2 per hour LED bulb
            'smartphone_charges': round(grams_co2 / 8.0, 2),  # 8g CO2 per charge
            'trees_needed_per_year': round(grams_co2 / 21000, 4)  # 21kg CO2 absorbed per tree per year
        }
    
    def _categorize_footprint(self, grams_co2: float) -> str:
        """Categorize carbon footprint."""
        if grams_co2 < 1:
            return 'minimal'
        elif grams_co2 < 5:
            return 'low'
        elif grams_co2 < 20:
            return 'moderate'
        elif grams_co2 < 50:
            return 'high'
        else:
            return 'very_high'
    
    def _calculate_energy_consumption(self, email: Dict) -> Dict[str, Any]:
        """Calculate energy consumption."""
        body = email.get('body', '')
        attachments = email.get('attachments', [])
        
        # Estimate data size
        text_size_kb = len(body.encode('utf-8')) / 1024
        attachment_size_kb = sum(att.get('size_kb', 0) for att in attachments)
        total_size_kb = text_size_kb + attachment_size_kb
        
        # Energy consumption (Wh)
        transmission_energy = total_size_kb * 0.00001  # kWh per KB transmission
        storage_energy_year = total_size_kb * 0.000005  # kWh per KB stored for 1 year
        
        return {
            'data_size_kb': round(total_size_kb, 2),
            'transmission_energy_wh': round(transmission_energy * 1000, 4),
            'storage_energy_year_wh': round(storage_energy_year * 1000, 4),
            'total_energy_wh': round((transmission_energy + storage_energy_year) * 1000, 4)
        }
    
    def _assess_sustainability(self, footprint: Dict, context: Dict) -> Dict[str, Any]:
        """Assess email sustainability."""
        grams_co2 = footprint['total_grams_co2']
        
        # Calculate score (0-100)
        if grams_co2 < 1:
            score = 95
            grade = 'A'
            status = 'Excellent'
        elif grams_co2 < 5:
            score = 80
            grade = 'B'
            status = 'Good'
        elif grams_co2 < 20:
            score = 60
            grade = 'C'
            status = 'Moderate'
        elif grams_co2 < 50:
            score = 40
            grade = 'D'
            status = 'Needs Improvement'
        else:
            score = 20
            grade = 'F'
            status = 'Poor'
        
        return {
            'score': score,
            'grade': grade,
            'status': status,
            'recommendation': self._generate_sustainability_recommendation(grade)
        }
    
    def _generate_sustainability_recommendation(self, grade: str) -> str:
        """Generate sustainability recommendation."""
        recommendations = {
            'A': 'Excellent! Your email has minimal environmental impact.',
            'B': 'Good! Consider reducing attachments for even lower impact.',
            'C': 'Moderate impact. Try to reduce email size and frequency.',
            'D': 'High impact. Consider alternatives like shared documents.',
            'F': 'Very high impact. Urgently consider more sustainable alternatives.'
        }
        return recommendations.get(grade, 'Review email practices')
    
    def _suggest_eco_alternatives(self, email: Dict, footprint: Dict) -> List[Dict[str, Any]]:
        """Suggest eco-friendly alternatives."""
        alternatives = []
        
        if footprint['total_grams_co2'] > 10:
            alternatives.append({
                'alternative': 'Shared document link',
                'description': 'Instead of attachments, share a link to cloud document',
                'carbon_savings': round(footprint['breakdown']['attachments'] * 0.8, 2),
                'feasibility': 'high'
            })
        
        if len(email.get('to', [])) + len(email.get('cc', [])) > 5:
            alternatives.append({
                'alternative': 'Group chat or Slack',
                'description': 'Use group messaging for quick discussions',
                'carbon_savings': round(footprint['total_grams_co2'] * 0.6, 2),
                'feasibility': 'medium'
            })
        
        if footprint['breakdown']['images'] > 2:
            alternatives.append({
                'alternative': 'Image compression',
                'description': 'Compress images before sending',
                'carbon_savings': round(footprint['breakdown']['images'] * 0.5, 2),
                'feasibility': 'high'
            })
        
        alternatives.append({
            'alternative': 'Plain text email',
            'description': 'Use plain text instead of HTML',
            'carbon_savings': 0.1,
            'feasibility': 'high'
        })
        
        return alternatives
    
    def _suggest_reduction_strategies(self, email: Dict, footprint: Dict) -> List[str]:
        """Suggest email reduction strategies."""
        strategies = []
        
        if footprint['total_grams_co2'] > 5:
            strategies.append("Consider if this email is necessary - could it be a quick call?")
        
        if len(email.get('to', [])) + len(email.get('cc', [])) > 3:
            strategies.append("Reduce recipient list - only include essential people")
        
        if email.get('attachments'):
            strategies.append("Compress attachments or use cloud storage links")
        
        if len(email.get('body', '').split()) > 500:
            strategies.append("Shorten email - get to the point faster")
        
        strategies.append("Unsubscribe from unnecessary newsletters")
        strategies.append("Delete old emails to reduce storage footprint")
        strategies.append("Use 'Reply' instead of 'Reply All' when appropriate")
        
        return strategies
    
    def _visualize_impact(self, footprint: Dict) -> Dict[str, Any]:
        """Visualize environmental impact."""
        grams_co2 = footprint['total_grams_co2']
        equivalents = footprint['equivalents']
        
        return {
            'visualization': {
                'car_distance': f"Equivalent to driving {equivalents['car_meters']} meters",
                'energy_usage': f"Equivalent to {equivalents['lightbulb_hours']} hours of LED lighting",
                'device_charging': f"Equivalent to {equivalents['smartphone_charges']} smartphone charges",
                'tree_offset': f"Would take {equivalents['trees_needed_per_year']} trees one year to offset"
            },
            'annual_projection': {
                'if_daily': round(grams_co2 * 365, 2),
                'if_weekly': round(grams_co2 * 52, 2),
                'if_monthly': round(grams_co2 * 12, 2)
            }
        }
    
    def _calculate_reply_all_impact(self, email: Dict, context: Dict) -> Dict[str, Any]:
        """Calculate carbon impact of reply-all."""
        recipients = len(email.get('to', [])) + len(email.get('cc', []))
        
        if recipients > 1:
            reply_all_footprint = self.carbon_factors['send_email'] * recipients * self.carbon_factors['reply_all_multiplier']
            
            return {
                'reply_all_recommended': False,
                'carbon_impact_grams': round(reply_all_footprint, 2),
                'recipients_affected': recipients,
                'recommendation': f'Reply-all would generate {reply_all_footprint:.2f}g CO2. Consider if all recipients need to respond.',
                'alternative': 'Reply to sender only, then forward if needed'
            }
        
        return {
            'reply_all_recommended': False,
            'carbon_impact_grams': 0,
            'recipients_affected': 0,
            'recommendation': 'No reply-all needed'
        }
    
    def _calculate_cumulative_impact(self, email: Dict) -> Dict[str, Any]:
        """Calculate cumulative impact over time."""
        # Log this email
        self.email_history[email.get('from', 'unknown')].append({
            'timestamp': datetime.now().isoformat(),
            'footprint': 0.3  # Base footprint
        })
        
        # Calculate cumulative
        total_emails = sum(len(emails) for emails in self.email_history.values())
        total_footprint = total_emails * 0.3  # Simplified
        
        return {
            'total_emails_tracked': total_emails,
            'cumulative_grams_co2': round(total_footprint, 2),
            'cumulative_kg_co2': round(total_footprint / 1000, 3),
            'annual_projection_kg': round(total_footprint / 1000 * 365, 2) if total_emails > 0 else 0,
            'trees_needed_annually': round((total_footprint / 1000 * 365) / 21, 2)  # 21kg per tree per year
        }


def track_email_carbon(email: Dict[str, Any], context: Dict = None) -> Dict[str, Any]:
    """Main entry point for carbon tracking."""
    tracker = EnergyCarbonTracker()
    return tracker.track_email_footprint(email, context)


if __name__ == '__main__':
    test_email = {
        'from': 'marketing@company.com',
        'to': ['user1@example.com', 'user2@example.com', 'user3@example.com'],
        'cc': ['team@company.com'],
        'subject': 'Monthly Newsletter - January',
        'body': 'Welcome to our January newsletter! We have exciting updates to share with you...',
        'attachments': [
            {'filename': 'report.pdf', 'size_mb': 5.2},
            {'filename': 'presentation.pptx', 'size_mb': 12.8}
        ],
        'images': [
            {'filename': 'banner.jpg', 'size_mb': 2.5}
        ],
        'date': '2024-01-15T10:00:00'
    }
    
    context = {
        'company_sustainability_goal': 'Reduce email carbon footprint by 30% in 2024'
    }
    
    result = track_email_carbon(test_email, context)
    print(json.dumps(result, indent=2))
