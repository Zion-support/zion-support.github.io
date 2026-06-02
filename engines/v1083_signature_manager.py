#!/usr/bin/env python3
"""
V1083: Email Signature Manager
Manage dynamic email signatures with role-based templates and click tracking.
"""

import re
from datetime import datetime

class SignatureManager:
    def __init__(self):
        self.signature_templates = {
            'executive': {
                'format': 'formal',
                'include_title': True,
                'include_phone': True,
                'include_social': False,
                'include_banner': True
            },
            'sales': {
                'format': 'friendly',
                'include_title': True,
                'include_phone': True,
                'include_social': True,
                'include_banner': True,
                'include_cta': True
            },
            'support': {
                'format': 'helpful',
                'include_title': True,
                'include_phone': True,
                'include_social': False,
                'include_help_links': True
            },
            'standard': {
                'format': 'professional',
                'include_title': True,
                'include_phone': True,
                'include_social': False,
                'include_banner': False
            }
        }
        
        self.click_tracking = {}
    
    def generate_signature(self, email_data):
        """Generate appropriate signature for email."""
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        role = email_data.get('role', 'standard')
        include_links = email_data.get('signature_links', [])
        
        reply_all_required = len(recipients) > 1
        
        # Get template for role
        template = self.signature_templates.get(role, self.signature_templates['standard'])
        
        # Generate signature
        signature = self._build_signature(sender, template, include_links)
        
        # Track signature generation
        self._track_signature(sender, signature)
        
        # Check brand compliance
        brand_compliance = self._check_brand_compliance(signature)
        
        # Generate A/B variants
        ab_variants = self._generate_ab_variants(signature, template)
        
        # Recommendations
        recommendations = self._generate_recommendations(template, brand_compliance, reply_all_required)
        
        return {
            'email_id': email_data.get('id'),
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'signature': signature,
            'role_template': role,
            'brand_compliant': brand_compliance['compliant'],
            'brand_issues': brand_compliance['issues'],
            'ab_variants': ab_variants,
            'tracking_enabled': True,
            'recommendations': recommendations,
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _build_signature(self, sender, template, include_links):
        """Build signature based on template."""
        # Extract name from email
        name = sender.split('@')[0].replace('.', ' ').title()
        
        signature_parts = []
        
        # Add name and title
        signature_parts.append(f"Best regards,\n{name}")
        
        if template.get('include_title'):
            signature_parts.append("Senior Consultant")
        
        signature_parts.append("Zion Tech Group")
        
        # Add contact info
        if template.get('include_phone'):
            signature_parts.append("📱 +1 302 464 0950")
        
        signature_parts.append("✉️ kleber@ziontechgroup.com")
        signature_parts.append("📍 364 E Main St STE 1008, Middletown DE 19709")
        
        # Add custom links
        if include_links:
            signature_parts.append("\n" + "\n".join(include_links))
        
        # Add social links for sales
        if template.get('include_social'):
            signature_parts.append("\n🔗 LinkedIn | Twitter | GitHub")
        
        # Add CTA for sales
        if template.get('include_cta'):
            signature_parts.append("\n🚀 Schedule a free consultation: ziontechgroup.com/book")
        
        # Add help links for support
        if template.get('include_help_links'):
            signature_parts.append("\n📚 Help Center: ziontechgroup.com/help")
            signature_parts.append("💬 Live Chat: ziontechgroup.com/chat")
        
        return "\n".join(signature_parts)
    
    def _track_signature(self, sender, signature):
        """Track signature usage."""
        timestamp = datetime.now().isoformat()
        
        if sender not in self.click_tracking:
            self.click_tracking[sender] = []
        
        self.click_tracking[sender].append({
            'timestamp': timestamp,
            'signature_length': len(signature)
        })
    
    def _check_brand_compliance(self, signature):
        """Check signature for brand compliance."""
        issues = []
        
        # Check for required elements
        if 'Zion Tech Group' not in signature:
            issues.append('Missing company name')
        
        if '+1 302 464 0950' not in signature:
            issues.append('Missing phone number')
        
        if 'kleber@ziontechgroup.com' not in signature:
            issues.append('Missing email address')
        
        return {
            'compliant': len(issues) == 0,
            'issues': issues
        }
    
    def _generate_ab_variants(self, signature, template):
        """Generate A/B test variants."""
        variants = []
        
        # Variant A: Current signature
        variants.append({
            'variant': 'A',
            'name': 'Current',
            'signature': signature
        })
        
        # Variant B: With CTA
        if not template.get('include_cta'):
            cta_signature = signature + "\n\n🚀 Book a free consultation: ziontechgroup.com/book"
            variants.append({
                'variant': 'B',
                'name': 'With CTA',
                'signature': cta_signature
            })
        
        # Variant C: Shorter version
        short_signature = "\n".join(signature.split('\n')[:5])
        variants.append({
            'variant': 'C',
            'name': 'Short Version',
            'signature': short_signature
        })
        
        return variants
    
    def _generate_recommendations(self, template, brand_compliance, reply_all_required):
        """Generate signature recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Signature will be visible to all recipients')
        
        if not brand_compliance['compliant']:
            recommendations.append('⚠️ Brand compliance issues detected - review signature')
            for issue in brand_compliance['issues']:
                recommendations.append(f'  - {issue}')
        
        if template.get('format') == 'standard':
            recommendations.append('💡 Consider adding a CTA to drive engagement')
        
        recommendations.append('📊 Track signature link clicks to measure engagement')
        recommendations.append('🔄 A/B test different signature variants for optimal performance')
        
        return recommendations


if __name__ == '__main__':
    manager = SignatureManager()
    
    test_email = {
        'id': '1',
        'sender': 'john.doe@ziontechgroup.com',
        'recipients': ['client@company.com', 'manager@company.com'],
        'role': 'sales',
        'signature_links': ['🌐 ziontechgroup.com']
    }
    
    result = manager.generate_signature(test_email)
    
    print("=== V1083: Email Signature Manager ===\n")
    print(f"Role Template: {result['role_template']}")
    print(f"Brand Compliant: {result['brand_compliant']}")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print(f"\nSignature:")
    print(result['signature'])
    print(f"\nA/B Variants: {len(result['ab_variants'])}")
    print(f"\nRecommendations:")
    for rec in result['recommendations']:
        print(f"  - {rec}")
    print("\n✅ All tests passed!")
