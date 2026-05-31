#!/usr/bin/env python3
"""
V585 - Email Template Marketplace
Curated marketplace of professional email templates with performance analytics.
Enforces reply-all for all communications.
"""
import json
from datetime import datetime
from typing import Dict, List
import random

class EmailTemplateMarketplace:
    def __init__(self):
        self.reply_all_enforced = True
    
    def browse_marketplace(self, category: str = None, industry: str = None) -> Dict:
        """Browse template marketplace"""
        # Get templates
        templates = self._get_templates(category, industry)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(templates)
        
        # Calculate marketplace stats
        stats = self._calculate_stats(templates)
        
        return {
            'engine': 'V585_Email_Template_Marketplace',
            'timestamp': datetime.now().isoformat(),
            'category': category,
            'industry': industry,
            'templates': templates[:10],  # Top 10 templates
            'recommendations': recommendations,
            'marketplace_stats': stats,
            'reply_all_enforced': self.reply_all_enforced
        }
    
    def _get_templates(self, category: str = None, industry: str = None) -> List[Dict]:
        """Get templates from marketplace"""
        # Simulated template database
        all_templates = [
            {
                'id': 'template-001',
                'name': 'Professional Welcome',
                'category': 'onboarding',
                'industry': 'general',
                'rating': 4.8,
                'downloads': 15420,
                'performance_score': 0.92,
                'preview_url': 'https://templates.ziontechgroup.com/welcome-pro',
                'price': 'free',
                'features': ['Responsive design', 'Customizable', 'A/B tested']
            },
            {
                'id': 'template-002',
                'name': 'Sales Follow-up',
                'category': 'sales',
                'industry': 'general',
                'rating': 4.7,
                'downloads': 12350,
                'performance_score': 0.89,
                'preview_url': 'https://templates.ziontechgroup.com/sales-followup',
                'price': 'free',
                'features': ['Conversion optimized', 'CTA buttons', 'Mobile responsive']
            },
            {
                'id': 'template-003',
                'name': 'Newsletter Modern',
                'category': 'marketing',
                'industry': 'general',
                'rating': 4.9,
                'downloads': 18760,
                'performance_score': 0.94,
                'preview_url': 'https://templates.ziontechgroup.com/newsletter-modern',
                'price': 'premium',
                'features': ['Modular design', 'Dark mode', 'Social integration']
            },
            {
                'id': 'template-004',
                'name': 'Healthcare Update',
                'category': 'communication',
                'industry': 'healthcare',
                'rating': 4.6,
                'downloads': 8920,
                'performance_score': 0.87,
                'preview_url': 'https://templates.ziontechgroup.com/healthcare-update',
                'price': 'premium',
                'features': ['HIPAA compliant', 'Accessible', 'Professional']
            },
            {
                'id': 'template-005',
                'name': 'E-commerce Promo',
                'category': 'marketing',
                'industry': 'ecommerce',
                'rating': 4.8,
                'downloads': 14230,
                'performance_score': 0.91,
                'preview_url': 'https://templates.ziontechgroup.com/ecommerce-promo',
                'price': 'free',
                'features': ['Product showcase', 'Discount codes', 'Urgency timers']
            }
        ]
        
        # Filter by category and industry
        filtered = all_templates
        
        if category:
            filtered = [t for t in filtered if t['category'] == category]
        
        if industry:
            filtered = [t for t in filtered if t['industry'] in [industry, 'general']]
        
        # Sort by performance score
        filtered.sort(key=lambda x: x['performance_score'], reverse=True)
        
        return filtered
    
    def _generate_recommendations(self, templates: List[Dict]) -> List[Dict]:
        """Generate template recommendations"""
        recommendations = []
        
        if not templates:
            recommendations.append({
                'type': 'no_templates',
                'message': 'No templates found for your criteria. Try broadening your search.'
            })
            return recommendations
        
        # Recommend top performer
        top_template = templates[0]
        recommendations.append({
            'type': 'top_performer',
            'template': top_template,
            'reason': f"Highest performance score ({top_template['performance_score']}) with {top_template['downloads']} downloads"
        })
        
        # Recommend most popular
        most_popular = max(templates, key=lambda x: x['downloads'])
        if most_popular['id'] != top_template['id']:
            recommendations.append({
                'type': 'most_popular',
                'template': most_popular,
                'reason': f"Most downloaded template with {most_popular['downloads']} downloads"
            })
        
        # Recommend highest rated
        highest_rated = max(templates, key=lambda x: x['rating'])
        if highest_rated['id'] not in [top_template['id'], most_popular['id']]:
            recommendations.append({
                'type': 'highest_rated',
                'template': highest_rated,
                'reason': f"Highest rated template with {highest_rated['rating']}/5 stars"
            })
        
        return recommendations
    
    def _calculate_stats(self, templates: List[Dict]) -> Dict:
        """Calculate marketplace statistics"""
        if not templates:
            return {'total_templates': 0}
        
        total_downloads = sum(t['downloads'] for t in templates)
        avg_rating = sum(t['rating'] for t in templates) / len(templates)
        avg_performance = sum(t['performance_score'] for t in templates) / len(templates)
        
        return {
            'total_templates': len(templates),
            'total_downloads': total_downloads,
            'average_rating': round(avg_rating, 2),
            'average_performance': round(avg_performance, 2),
            'free_templates': sum(1 for t in templates if t['price'] == 'free'),
            'premium_templates': sum(1 for t in templates if t['price'] == 'premium')
        }
    
    def customize_template(self, template_id: str, customizations: Dict) -> Dict:
        """Customize a template"""
        # Get template
        templates = self._get_templates()
        template = next((t for t in templates if t['id'] == template_id), None)
        
        if not template:
            return {'error': 'Template not found'}
        
        # Apply customizations
        customized = {
            'template_id': template_id,
            'original_name': template['name'],
            'customizations_applied': customizations,
            'customized_html': self._apply_customizations(template, customizations),
            'preview_url': f"https://templates.ziontechgroup.com/preview/{template_id}?custom=true",
            'download_ready': True
        }
        
        return customized
    
    def _apply_customizations(self, template: Dict, customizations: Dict) -> str:
        """Apply customizations to template"""
        # Simulated customization
        html = f"<div class='email-template' data-template='{template['id']}'>"
        
        if 'logo' in customizations:
            html += f"<img src='{customizations['logo']}' alt='Logo' />"
        
        if 'primary_color' in customizations:
            html += f"<style>:root {{ --primary-color: {customizations['primary_color']}; }}</style>"
        
        if 'company_name' in customizations:
            html += f"<h1>{customizations['company_name']}</h1>"
        
        html += "</div>"
        
        return html

if __name__ == "__main__":
    marketplace = EmailTemplateMarketplace()
    result = marketplace.browse_marketplace(category='marketing')
    print(json.dumps(result, indent=2))
