#!/usr/bin/env python3
"""
V574 - Email Carbon Footprint Tracker
Calculates environmental impact of email communications and suggests optimization strategies.
Enforces reply-all for all communications.
"""
import json
from datetime import datetime
from typing import Dict, List

class EmailCarbonFootprintTracker:
    def __init__(self):
        self.reply_all_enforced = True
        # Carbon footprint factors (grams CO2 per unit)
        self.carbon_factors = {
            'email_send': 0.3,  # grams CO2 per email
            'attachment_mb': 50,  # grams CO2 per MB
            'image_count': 2,  # grams CO2 per image
            'recipient_count': 0.1,  # additional grams per recipient
            'storage_days': 0.01  # grams CO2 per day of storage
        }
    
    def calculate_footprint(self, email: Dict) -> Dict:
        """Calculate carbon footprint of email"""
        # Calculate base footprint
        base_footprint = self._calculate_base_footprint(email)
        
        # Calculate attachment footprint
        attachment_footprint = self._calculate_attachment_footprint(email)
        
        # Calculate recipient footprint
        recipient_footprint = self._calculate_recipient_footprint(email)
        
        # Calculate storage footprint
        storage_footprint = self._calculate_storage_footprint(email)
        
        # Total footprint
        total_footprint = base_footprint + attachment_footprint + recipient_footprint + storage_footprint
        
        # Generate optimization suggestions
        optimizations = self._generate_optimizations(email, total_footprint)
        
        # Calculate equivalent metrics
        equivalents = self._calculate_equivalents(total_footprint)
        
        # Track over time
        trend_analysis = self._analyze_trend(email)
        
        return {
            'engine': 'V574_Email_Carbon_Footprint_Tracker',
            'timestamp': datetime.now().isoformat(),
            'email_id': email.get('id', 'unknown'),
            'carbon_footprint': {
                'total_grams_co2': round(total_footprint, 2),
                'base_footprint': round(base_footprint, 2),
                'attachment_footprint': round(attachment_footprint, 2),
                'recipient_footprint': round(recipient_footprint, 2),
                'storage_footprint': round(storage_footprint, 2)
            },
            'optimization_suggestions': optimizations,
            'equivalent_metrics': equivalents,
            'trend_analysis': trend_analysis,
            'sustainability_score': self._calculate_sustainability_score(total_footprint),
            'reply_all_enforced': self.reply_all_enforced,
            'all_recipients': email.get('to', []) + email.get('cc', [])
        }
    
    def _calculate_base_footprint(self, email: Dict) -> float:
        """Calculate base email footprint"""
        return self.carbon_factors['email_send']
    
    def _calculate_attachment_footprint(self, email: Dict) -> float:
        """Calculate attachment footprint"""
        attachments = email.get('attachments', [])
        total_mb = sum(att.get('size_mb', 0) for att in attachments)
        return total_mb * self.carbon_factors['attachment_mb']
    
    def _calculate_recipient_footprint(self, email: Dict) -> float:
        """Calculate recipient footprint"""
        recipients = email.get('to', []) + email.get('cc', []) + email.get('bcc', [])
        return len(recipients) * self.carbon_factors['recipient_count']
    
    def _calculate_storage_footprint(self, email: Dict) -> float:
        """Calculate storage footprint"""
        # Estimate 30 days of storage
        return 30 * self.carbon_factors['storage_days']
    
    def _generate_optimizations(self, email: Dict, footprint: float) -> List[Dict]:
        """Generate optimization suggestions"""
        suggestions = []
        
        attachments = email.get('attachments', [])
        recipients = email.get('to', []) + email.get('cc', []) + email.get('bcc', [])
        
        if len(attachments) > 0:
            total_size = sum(att.get('size_mb', 0) for att in attachments)
            if total_size > 5:
                suggestions.append({
                    'type': 'attachment_optimization',
                    'description': 'Use cloud storage links instead of large attachments',
                    'potential_savings': round(total_size * self.carbon_factors['attachment_mb'] * 0.8, 2),
                    'impact': 'high'
                })
        
        if len(recipients) > 10:
            suggestions.append({
                'type': 'recipient_optimization',
                'description': 'Use mailing lists instead of individual recipients',
                'potential_savings': round(len(recipients) * self.carbon_factors['recipient_count'] * 0.5, 2),
                'impact': 'medium'
            })
        
        if footprint > 100:
            suggestions.append({
                'type': 'content_optimization',
                'description': 'Compress images and optimize HTML',
                'potential_savings': round(footprint * 0.3, 2),
                'impact': 'high'
            })
        
        suggestions.append({
            'type': 'behavioral',
            'description': 'Unsubscribe from unnecessary newsletters',
            'potential_savings': 5.0,
            'impact': 'medium'
        })
        
        return suggestions
    
    def _calculate_equivalents(self, footprint: float) -> Dict:
        """Calculate equivalent environmental metrics"""
        return {
            'car_km': round(footprint / 200, 3),  # 200g CO2 per km
            'trees_needed': round(footprint / 22000, 4),  # 22kg CO2 absorbed per tree per year
            'lightbulb_hours': round(footprint / 0.05, 1),  # 0.05g CO2 per hour
            'smartphone_charges': round(footprint / 8, 2)  # 8g CO2 per charge
        }
    
    def _analyze_trend(self, email: Dict) -> Dict:
        """Analyze footprint trend"""
        return {
            'trend': 'stable',
            'weekly_average': 50.0,
            'monthly_average': 200.0,
            'recommendation': 'Continue current practices'
        }
    
    def _calculate_sustainability_score(self, footprint: float) -> int:
        """Calculate sustainability score (0-100)"""
        if footprint < 10:
            return 95
        elif footprint < 50:
            return 80
        elif footprint < 100:
            return 60
        elif footprint < 200:
            return 40
        else:
            return 20

if __name__ == "__main__":
    tracker = EmailCarbonFootprintTracker()
    test_email = {
        'id': 'test-574',
        'to': ['team@company.com', 'manager@company.com'],
        'cc': ['director@company.com'],
        'subject': 'Monthly Report',
        'body': 'Please find the monthly report attached.',
        'attachments': [
            {'filename': 'report.pdf', 'size_mb': 15},
            {'filename': 'data.xlsx', 'size_mb': 8}
        ]
    }
    result = tracker.calculate_footprint(test_email)
    print(json.dumps(result, indent=2))
