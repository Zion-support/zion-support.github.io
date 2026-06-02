#!/usr/bin/env python3
"""V1065: AI Email Signature Manager
Dynamic email signatures with role-based templates.
Track signature link clicks and engagement analytics.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
import json
from datetime import datetime
from collections import defaultdict

class SignatureManager:
    def __init__(self):
        self.templates = {
            'executive': {
                'format': 'formal',
                'elements': ['name', 'title', 'company', 'phone', 'email', 'website', 'social', 'disclaimer'],
                'style': 'minimal'
            },
            'sales': {
                'format': 'promotional',
                'elements': ['name', 'title', 'company', 'phone', 'email', 'cta_banner', 'social', 'booking_link'],
                'style': 'engaging'
            },
            'support': {
                'format': 'helpful',
                'elements': ['name', 'title', 'company', 'phone', 'email', 'help_links', 'satisfaction_survey'],
                'style': 'friendly'
            },
            'developer': {
                'format': 'technical',
                'elements': ['name', 'title', 'company', 'email', 'github', 'linkedin', 'pgp_key'],
                'style': 'clean'
            }
        }
        self.analytics = defaultdict(lambda: {'impressions': 0, 'clicks': 0, 'conversions': 0})

    def generate_signature(self, email_data):
        sender = email_data.get('sender', 'unknown')
        recipients = email_data.get('recipients', [])
        role = email_data.get('role', 'executive')
        body = email_data.get('body', '')
        reply_all = len(recipients) > 1

        template = self.templates.get(role, self.templates['executive'])
        signature = self._build_signature(sender, template, email_data)
        context_aware = self._adapt_to_context(signature, body, recipients)
        compliance_check = self._check_compliance(signature, email_data.get('industry', 'general'))
        ab_variants = self._generate_ab_variants(signature)

        return {
            'email_id': email_data.get('id'),
            'reply_all_required': reply_all,
            'signature': signature,
            'context_aware_adaptation': context_aware,
            'compliance_check': compliance_check,
            'ab_variants': ab_variants,
            'analytics_tracking': self._setup_analytics(signature),
            'role_template': role,
            'recommendations': self._generate_recommendations(role, template, compliance_check, reply_all),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }

    def _build_signature(self, sender, template, email_data):
        name = sender.split('@')[0].replace('.', ' ').title() if '@' in sender else sender
        company = email_data.get('company', 'Zion Tech Group')
        contact = email_data.get('contact_info', {})

        sig_lines = []
        for element in template['elements']:
            if element == 'name':
                sig_lines.append(f"**{name}**")
            elif element == 'title':
                sig_lines.append(f"{email_data.get('title', 'Senior Consultant')}")
            elif element == 'company':
                sig_lines.append(f"{company}")
            elif element == 'phone':
                sig_lines.append(f"📱 {contact.get('phone', '+1 302 464 0950')}")
            elif element == 'email':
                sig_lines.append(f"✉️ {contact.get('email', sender)}")
            elif element == 'website':
                sig_lines.append(f"🌐 ziontechgroup.com")
            elif element == 'social':
                sig_lines.append("LinkedIn | Twitter | GitHub")
            elif element == 'cta_banner':
                sig_lines.append("🚀 [Schedule a Free Consultation](https://ziontechgroup.com/book)")
            elif element == 'booking_link':
                sig_lines.append("📅 [Book a Meeting](https://calendly.com/ziontechgroup)")
            elif element == 'help_links':
                sig_lines.append("📚 [Help Center](https://ziontechgroup.com/help) | [Documentation](https://docs.ziontechgroup.com)")
            elif element == 'satisfaction_survey':
                sig_lines.append("⭐ How was your support experience? [Rate us](https://ziontechgroup.com/feedback)")
            elif element == 'github':
                sig_lines.append("GitHub: github.com/ziontechgroup")
            elif element == 'linkedin':
                sig_lines.append("LinkedIn: linkedin.com/company/ziontechgroup")
            elif element == 'pgp_key':
                sig_lines.append("🔑 PGP: 0xABCD1234")
            elif element == 'disclaimer':
                sig_lines.append("_This email is confidential. If received in error, please notify the sender._")

        return {
            'html': '<br>'.join(sig_lines),
            'text': '\n'.join(sig_lines),
            'elements': template['elements'],
            'style': template['style']
        }

    def _adapt_to_context(self, signature, body, recipients):
        adaptations = []
        text = body.lower()
        if any(w in text for w in ['thank', 'appreciate', 'great']):
            adaptations.append('Consider adding a referral request link')
        if any(w in text for w in ['proposal', 'quote', 'pricing']):
            adaptations.append('Add CTA banner for booking a call')
        if len(recipients) > 5:
            adaptations.append('Use simplified signature for group emails')
        if not adaptations:
            adaptations.append('Standard signature appropriate')
        return adaptations

    def _check_compliance(self, signature, industry):
        issues = []
        text = signature['text']
        if industry in ('healthcare', 'finance') and 'disclaimer' not in signature['elements']:
            issues.append({'severity': 'high', 'issue': 'Missing legal disclaimer', 'fix': 'Add confidentiality disclaimer'})
        if industry == 'finance' and 'registered' not in text.lower():
            issues.append({'severity': 'medium', 'issue': 'Missing regulatory registration info', 'fix': 'Add registration numbers'})
        return {'compliant': len(issues) == 0, 'issues': issues}

    def _generate_ab_variants(self, signature):
        return [
            {'variant': 'A', 'change': 'Original signature', 'elements': signature['elements']},
            {'variant': 'B', 'change': 'Added CTA banner', 'elements': signature['elements'] + ['cta_banner']},
            {'variant': 'C', 'change': 'Simplified (no social links)', 'elements': [e for e in signature['elements'] if e != 'social']}
        ]

    def _setup_analytics(self, signature):
        trackable = ['website', 'cta_banner', 'booking_link', 'help_links', 'social']
        tracked = [e for e in signature['elements'] if e in trackable]
        return {
            'tracked_elements': tracked,
            'metrics': ['impressions', 'clicks', 'conversions'],
            'tracking_enabled': len(tracked) > 0
        }

    def _generate_recommendations(self, role, template, compliance, reply_all):
        recs = []
        if not compliance['compliant']:
            for issue in compliance['issues']:
                recs.append(f"⚠️ [{issue['severity']}] {issue['issue']}: {issue['fix']}")
        if role == 'sales':
            recs.append('📈 A/B test CTA banners to optimize click-through rates')
        if role == 'executive':
            recs.append('👔 Keep signature minimal and professional')
        if reply_all:
            recs.append('👥 REPLY ALL: All recipients will see your signature')
        if not recs:
            recs.append('✅ Signature looks good')
        return recs

if __name__ == '__main__':
    mgr = SignatureManager()
    test = {'id': 'e001', 'sender': 'kleber@ziontechgroup.com',
            'recipients': ['client@acme.com', 'team@ziontechgroup.com'],
            'role': 'executive', 'company': 'Zion Tech Group',
            'body': 'Thank you for the great meeting today. Looking forward to working together.',
            'industry': 'general',
            'contact_info': {'phone': '+1 302 464 0950', 'email': 'kleber@ziontechgroup.com', 'address': '364 E Main St STE 1008, Middletown DE 19709'}}
    result = mgr.generate_signature(test)
    print("=== V1065: AI Email Signature Manager ===\n")
    print(f"Role Template: {result['role_template']}")
    print(f"Style: {result['signature']['style']}")
    print(f"Elements: {result['signature']['elements']}")
    print(f"Compliant: {'Yes' if result['compliance_check']['compliant'] else 'No'}")
    print(f"Analytics Tracking: {result['analytics_tracking']['tracked_elements']}")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print(f"Context Adaptations: {result['context_aware_adaptation']}")
    for r in result['recommendations']:
        print(f"  💡 {r}")
