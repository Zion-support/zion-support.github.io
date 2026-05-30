#!/usr/bin/env python3
"""
V173 - AI Email Signature Intelligence
Dynamic smart signatures that adapt per recipient with case studies,
social proof, A/B testing, click tracking, and brand consistency.
"""

import json
import hashlib
from datetime import datetime
from typing import Dict, List, Any, Optional
from collections import defaultdict


class SignatureIntelligence:
    """AI-powered dynamic email signature system."""

    def __init__(self):
        self.signature_profiles = {}
        self.click_tracking = defaultdict(list)
        self.ab_tests = {}
        self.performance_metrics = defaultdict(dict)
        self.brand_guidelines = {}

    def create_signature_profile(self, profile_id: str, base_signature: Dict):
        """Create a base signature profile."""
        self.signature_profiles[profile_id] = {
            'name': base_signature.get('name', ''),
            'title': base_signature.get('title', ''),
            'company': base_signature.get('company', 'Zion Tech Group'),
            'email': base_signature.get('email', ''),
            'phone': base_signature.get('phone', '+1 302 464 0950'),
            'website': base_signature.get('website', 'https://ziontechgroup.com'),
            'address': base_signature.get('address', '364 E Main St STE 1008, Middletown, DE 19709'),
            'social_links': base_signature.get('social_links', {}),
            'base_cta': base_signature.get('cta', ''),
            'logo_url': base_signature.get('logo_url', ''),
            'created_at': datetime.now().isoformat()
        }

    def generate_signature(self, profile_id: str, recipient: Dict, email_context: Dict = None) -> Dict:
        """Generate a dynamic signature adapted to the recipient."""
        profile = self.signature_profiles.get(profile_id)
        if not profile:
            return {'error': 'Profile not found'}

        email_context = email_context or {}
        recipient_type = self._classify_recipient(recipient, email_context)

        # Build adaptive elements
        cta = self._select_cta(recipient_type, email_context)
        social_proof = self._select_social_proof(recipient_type, email_context)
        case_study = self._select_case_study(recipient_type)
        links = self._select_links(recipient_type, email_context)
        banner = self._select_banner(recipient_type)

        # Generate signature HTML
        signature_html = self._build_signature_html(
            profile, cta, social_proof, case_study, links, banner
        )

        # A/B test variant
        variant = self._get_ab_variant(profile_id, recipient.get('email', ''))

        # Track impression
        tracking_id = hashlib.md5(
            f"{profile_id}{recipient.get('email', '')}{datetime.now().isoformat()}".encode()
        ).hexdigest()[:12]

        return {
            'signature_id': tracking_id,
            'profile_id': profile_id,
            'recipient_type': recipient_type,
            'signature_html': signature_html,
            'signature_text': self._build_signature_text(profile, cta, social_proof),
            'elements': {
                'cta': cta,
                'social_proof': social_proof,
                'case_study': case_study,
                'links': links,
                'banner': banner
            },
            'ab_variant': variant,
            'tracking_links': self._generate_tracking_links(links, tracking_id),
            'reply_all_consistent': True,
            'brand_compliant': self._check_brand_compliance(signature_html)
        }

    def _classify_recipient(self, recipient: Dict, context: Dict) -> str:
        """Classify recipient type for signature adaptation."""
        email = recipient.get('email', '').lower()
        domain = email.split('@')[-1] if '@' in email else ''

        # Internal
        if 'zion' in domain:
            return 'internal'

        # Client indicators
        if context.get('is_client') or any(w in context.get('subject', '').lower() for w in ['project', 'contract', 'invoice']):
            return 'client'

        # Prospect indicators
        if any(w in context.get('subject', '').lower() for w in ['proposal', 'interested', 'inquiry', 'demo']):
            return 'prospect'

        # Partner indicators
        if any(w in context.get('subject', '').lower() for w in ['partnership', 'affiliate', 'reseller']):
            return 'partner'

        return 'general'

    def _select_cta(self, recipient_type: str, context: Dict) -> Dict:
        """Select call-to-action based on recipient type."""
        ctas = {
            'prospect': {
                'text': '📅 Book a Free Consultation',
                'url': 'https://ziontechgroup.com/consultation',
                'style': 'primary'
            },
            'client': {
                'text': '🎯 View Your Project Dashboard',
                'url': 'https://ziontechgroup.com/client-portal',
                'style': 'secondary'
            },
            'partner': {
                'text': '🤝 Partner Portal',
                'url': 'https://ziontechgroup.com/partners',
                'style': 'secondary'
            },
            'internal': {
                'text': '',
                'url': '',
                'style': 'none'
            },
            'general': {
                'text': '🚀 Explore Our 972+ Services',
                'url': 'https://ziontechgroup.com/services',
                'style': 'primary'
            }
        }
        return ctas.get(recipient_type, ctas['general'])

    def _select_social_proof(self, recipient_type: str, context: Dict) -> Optional[Dict]:
        """Select social proof element."""
        if recipient_type == 'internal':
            return None

        proofs = {
            'prospect': {'text': '⭐ Trusted by 500+ companies worldwide', 'type': 'trust'},
            'client': {'text': '📊 98% client satisfaction rate', 'type': 'satisfaction'},
            'partner': {'text': '🌐 200+ active partners globally', 'type': 'network'},
            'general': {'text': '🏆 Award-winning AI solutions since 2020', 'type': 'award'}
        }
        return proofs.get(recipient_type, proofs['general'])

    def _select_case_study(self, recipient_type: str) -> Optional[Dict]:
        """Select relevant case study."""
        if recipient_type in ['internal']:
            return None

        case_studies = {
            'prospect': {
                'title': 'How Acme Corp achieved 300% ROI with our AI platform',
                'url': 'https://ziontechgroup.com/case-studies/acme-corp',
                'metric': '300% ROI'
            },
            'client': {
                'title': 'New: Advanced AI features now available',
                'url': 'https://ziontechgroup.com/blog/latest-features',
                'metric': 'New Features'
            },
            'partner': {
                'title': 'Partner success: $2M revenue in first year',
                'url': 'https://ziontechgroup.com/partners/success-stories',
                'metric': '$2M Revenue'
            }
        }
        return case_studies.get(recipient_type)

    def _select_links(self, recipient_type: str, context: Dict) -> List[Dict]:
        """Select relevant links for signature."""
        base_links = [
            {'text': 'Website', 'url': 'https://ziontechgroup.com'},
            {'text': 'Services', 'url': 'https://ziontechgroup.com/services'}
        ]

        if recipient_type == 'prospect':
            base_links.extend([
                {'text': 'Pricing', 'url': 'https://ziontechgroup.com/pricing'},
                {'text': 'Case Studies', 'url': 'https://ziontechgroup.com/case-studies'}
            ])
        elif recipient_type == 'client':
            base_links.extend([
                {'text': 'Support', 'url': 'https://ziontechgroup.com/support'},
                {'text': 'Dashboard', 'url': 'https://ziontechgroup.com/client-portal'}
            ])
        elif recipient_type == 'partner':
            base_links.append({'text': 'Partner Portal', 'url': 'https://ziontechgroup.com/partners'})

        return base_links

    def _select_banner(self, recipient_type: str) -> Optional[Dict]:
        """Select promotional banner."""
        if recipient_type == 'internal':
            return None

        banners = {
            'prospect': {
                'text': '🎉 Special: 20% off AI services this month',
                'url': 'https://ziontechgroup.com/offers',
                'style': 'promotional'
            },
            'client': {
                'text': '🆕 New: V169-V173 Email Intelligence now available',
                'url': 'https://ziontechgroup.com/blog/email-intelligence-v13',
                'style': 'announcement'
            }
        }
        return banners.get(recipient_type)

    def _build_signature_html(self, profile: Dict, cta: Dict, social_proof: Dict,
                               case_study: Dict, links: List, banner: Dict) -> str:
        """Build HTML signature."""
        html_parts = []

        # Name and title
        html_parts.append(f'<div style="font-family: Arial, sans-serif; padding: 15px 0; border-top: 2px solid #4F46E5;">')
        html_parts.append(f'<strong style="font-size: 16px; color: #1F2937;">{profile["name"]}</strong><br>')
        html_parts.append(f'<span style="color: #6B7280; font-size: 13px;">{profile["title"]}</span><br>')
        html_parts.append(f'<span style="color: #4F46E5; font-weight: bold; font-size: 14px;">{profile["company"]}</span><br>')

        # Contact info
        html_parts.append(f'<span style="font-size: 12px; color: #6B7280;">')
        html_parts.append(f'📞 {profile["phone"]} | ✉️ {profile["email"]}<br>')
        html_parts.append(f'📍 {profile["address"]}')
        html_parts.append(f'</span><br>')

        # CTA
        if cta.get('text'):
            html_parts.append(f'<a href="{cta["url"]}" style="display: inline-block; margin: 8px 0; padding: 6px 16px; background: #4F46E5; color: white; text-decoration: none; border-radius: 4px; font-size: 13px;">{cta["text"]}</a><br>')

        # Social proof
        if social_proof:
            html_parts.append(f'<span style="font-size: 11px; color: #9CA3AF;">{social_proof["text"]}</span><br>')

        # Case study
        if case_study:
            html_parts.append(f'<a href="{case_study["url"]}" style="font-size: 12px; color: #4F46E5; text-decoration: none;">📖 {case_study["title"]}</a><br>')

        # Links
        link_html = ' | '.join([f'<a href="{l["url"]}" style="font-size: 11px; color: #6B7280; text-decoration: none;">{l["text"]}</a>' for l in links])
        html_parts.append(f'{link_html}<br>')

        # Banner
        if banner:
            html_parts.append(f'<div style="margin-top: 8px; padding: 6px 12px; background: #EEF2FF; border-radius: 4px;"><a href="{banner["url"]}" style="font-size: 12px; color: #4F46E5; text-decoration: none;">{banner["text"]}</a></div>')

        html_parts.append(f'</div>')

        return '\n'.join(html_parts)

    def _build_signature_text(self, profile: Dict, cta: Dict, social_proof: Dict) -> str:
        """Build plain text signature."""
        parts = [
            f'{profile["name"]} | {profile["title"]}',
            f'{profile["company"]}',
            f'📞 {profile["phone"]} | ✉️ {profile["email"]}',
            f'📍 {profile["address"]}',
            f'🌐 {profile["website"]}'
        ]

        if cta.get('text'):
            parts.append(f'\n{cta["text"]}: {cta["url"]}')

        if social_proof:
            parts.append(social_proof['text'])

        return '\n'.join(parts)

    def _get_ab_variant(self, profile_id: str, recipient_email: str) -> str:
        """Get A/B test variant for recipient."""
        hash_val = hashlib.md5(f"{profile_id}{recipient_email}".encode()).hexdigest()
        return 'A' if int(hash_val[0], 16) % 2 == 0 else 'B'

    def _generate_tracking_links(self, links: List, tracking_id: str) -> List[Dict]:
        """Generate tracking-enabled links."""
        return [
            {**link, 'tracking_url': f"{link['url']}?sig_id={tracking_id}&link={link['text'].lower().replace(' ', '_')}"}
            for link in links
        ]

    def _check_brand_compliance(self, html: str) -> bool:
        """Check signature against brand guidelines."""
        # Basic checks
        if 'zion tech group' not in html.lower() and 'zion' not in html.lower():
            return False
        return True

    def track_click(self, tracking_id: str, link_name: str):
        """Track a signature link click."""
        self.click_tracking[tracking_id].append({
            'link': link_name,
            'timestamp': datetime.now().isoformat()
        })

    def get_signature_analytics(self, profile_id: str = None) -> Dict:
        """Get signature performance analytics."""
        total_impressions = sum(len(v) for v in self.click_tracking.values())
        unique_clicks = len(self.click_tracking)

        return {
            'total_impressions': total_impressions,
            'unique_clicks': unique_clicks,
            'click_through_rate': round(unique_clicks / max(total_impressions, 1) * 100, 1),
            'top_links': self._get_top_clicked_links(),
            'profiles': len(self.signature_profiles)
        }

    def _get_top_clicked_links(self) -> List[Dict]:
        """Get most clicked links."""
        link_counts = defaultdict(int)
        for clicks in self.click_tracking.values():
            for click in clicks:
                link_counts[click['link']] += 1

        return [{'link': k, 'clicks': v} for k, v in sorted(link_counts.items(), key=lambda x: x[1], reverse=True)[:5]]


if __name__ == '__main__':
    sig = SignatureIntelligence()

    sig.create_signature_profile('kleber', {
        'name': 'Kleber Garcia Alcatrão',
        'title': 'CEO & Founder',
        'company': 'Zion Tech Group',
        'email': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com',
        'address': '364 E Main St STE 1008, Middletown, DE 19709'
    })

    result = sig.generate_signature('kleber', {
        'email': 'prospect@enterprise.com'
    }, {'subject': 'AI consulting proposal'})
    print(json.dumps(result, indent=2))
