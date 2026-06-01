#!/usr/bin/env python3
"""V1046: AI Email Tone Adapter
Automatically adjusts email tone based on recipient seniority, relationship history, and cultural context.
Detects when you're too formal/informal and suggests adjustments.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
import json
from datetime import datetime
from collections import defaultdict

class EmailToneAdapter:
    def __init__(self):
        self.recipient_profiles = {}
        self.tone_history = defaultdict(list)
        
        self.formality_markers = {
            'very_formal': ['dear sir/madam', 'yours faithfully', 'esteemed', 'hereby', 'aforementioned', 'pursuant to'],
            'formal': ['dear mr', 'dear ms', 'dear dr', 'sincerely', 'kind regards', 'best regards', 'please find', 'i would like to'],
            'professional': ['hi', 'hello', 'thanks', 'regards', 'looking forward', 'please let me know', 'appreciate'],
            'casual': ['hey', 'thanks!', 'cheers', 'no worries', 'sounds good', 'will do', 'got it', 'cool'],
            'very_casual': ['lol', 'btw', 'fyi', 'tho', 'gonna', 'wanna', 'kinda', 'sorta', '!!!']
        }
        
        self.cultural_adjustments = {
            'US': {'directness': 'high', 'formality': 'low', 'greeting': 'Hi [Name]', 'closing': 'Best,'},
            'UK': {'directness': 'medium', 'formality': 'medium', 'greeting': 'Dear [Name]', 'closing': 'Kind regards,'},
            'Germany': {'directness': 'high', 'formality': 'high', 'greeting': 'Sehr geehrte(r) [Name]', 'closing': 'Mit freundlichen Grüßen,'},
            'Japan': {'directness': 'low', 'formality': 'very_high', 'greeting': '[Name]-san', 'closing': 'よろしくお願いいたします'},
            'Brazil': {'directness': 'medium', 'formality': 'medium', 'greeting': 'Prezado(a) [Name]', 'closing': 'Atenciosamente,'},
            'India': {'directness': 'low', 'formality': 'high', 'greeting': 'Dear [Name]', 'closing': 'Warm regards,'},
            'France': {'directness': 'medium', 'formality': 'high', 'greeting': 'Cher/Chère [Name]', 'closing': 'Cordialement,'},
            'Australia': {'directness': 'high', 'formality': 'low', 'greeting': 'Hi [Name]', 'closing': 'Cheers,'}
        }
        
        self.seniority_adjustments = {
            'C-suite': {'formality_boost': 2, 'directness': 'medium', 'length': 'concise'},
            'VP/Director': {'formality_boost': 1, 'directness': 'high', 'length': 'moderate'},
            'Manager': {'formality_boost': 0, 'directness': 'high', 'length': 'detailed'},
            'Individual Contributor': {'formality_boost': -1, 'directness': 'high', 'length': 'detailed'},
            'External Client': {'formality_boost': 1, 'directness': 'medium', 'length': 'moderate'},
            'Prospect': {'formality_boost': 2, 'directness': 'low', 'length': 'concise'}
        }
    
    def analyze_and_adapt(self, email_data):
        """Analyze draft email and suggest tone adaptations."""
        sender = email_data.get('sender', 'unknown')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        
        # REPLY-ALL ENFORCEMENT
        reply_all = len(recipients) > 1
        
        # Detect current tone
        current_tone = self._detect_tone(body)
        
        # Analyze recipients for adaptation needs
        recipient_analysis = []
        for r in recipients:
            profile = self._get_or_build_profile(r)
            recipient_analysis.append(profile)
        
        # Determine target tone
        target_tone = self._determine_target_tone(recipient_analysis, current_tone)
        
        # Generate adaptations
        adaptations = self._generate_adaptations(body, current_tone, target_tone, recipient_analysis)
        
        # Cultural adjustments
        cultural_notes = self._get_cultural_adjustments(recipient_analysis)
        
        # Score the email
        tone_score = self._score_tone_match(current_tone, target_tone)
        
        return {
            'email_id': email_data.get('id'),
            'reply_all_required': reply_all,
            'current_tone': current_tone,
            'target_tone': target_tone,
            'tone_score': tone_score,
            'tone_match': 'EXCELLENT' if tone_score >= 85 else 'GOOD' if tone_score >= 70 else 'NEEDS_ADJUSTMENT' if tone_score >= 50 else 'POOR',
            'adaptations': adaptations,
            'cultural_adjustments': cultural_notes,
            'recipient_profiles': [{'email': r.get('email'), 'seniority': r.get('seniority'), 'culture': r.get('culture')} for r in recipient_analysis],
            'suggested_rewrite': self._suggest_rewrite(body, current_tone, target_tone),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _detect_tone(self, body):
        """Detect the current tone of the email body."""
        body_lower = body.lower()
        scores = {}
        
        for tone, markers in self.formality_markers.items():
            scores[tone] = sum(1 for m in markers if m in body_lower)
        
        # Determine dominant tone
        if not any(scores.values()):
            return 'professional'
        
        dominant = max(scores, key=scores.get)
        return dominant
    
    def _get_or_build_profile(self, recipient):
        """Build or retrieve recipient profile."""
        if isinstance(recipient, dict):
            email = recipient.get('email', recipient)
        else:
            email = recipient
        
        if email in self.recipient_profiles:
            return self.recipient_profiles[email]
        
        # Infer from email address
        domain = email.split('@')[-1] if '@' in email else ''
        name_part = email.split('@')[0] if '@' in email else email
        
        # Infer seniority from email patterns
        seniority = 'Individual Contributor'
        if any(title in name_part.lower() for title in ['ceo', 'cto', 'cfo', 'coo', 'president']):
            seniority = 'C-suite'
        elif any(title in name_part.lower() for title in ['vp', 'director', 'head']):
            seniority = 'VP/Director'
        elif any(title in name_part.lower() for title in ['manager', 'mgr', 'lead']):
            seniority = 'Manager'
        
        # Infer culture from domain
        culture = 'US'
        if '.uk' in domain: culture = 'UK'
        elif '.de' in domain: culture = 'Germany'
        elif '.jp' in domain: culture = 'Japan'
        elif '.br' in domain: culture = 'Brazil'
        elif '.in' in domain: culture = 'India'
        elif '.fr' in domain: culture = 'France'
        elif '.au' in domain: culture = 'Australia'
        
        profile = {
            'email': email,
            'seniority': seniority,
            'culture': culture,
            'domain': domain,
            'relationship_strength': 50  # Default neutral
        }
        
        self.recipient_profiles[email] = profile
        return profile
    
    def _determine_target_tone(self, recipient_analysis, current_tone):
        """Determine the ideal target tone."""
        if not recipient_analysis:
            return 'professional'
        
        # Use highest seniority as anchor
        seniority_order = ['C-suite', 'VP/Director', 'Manager', 'External Client', 'Prospect', 'Individual Contributor']
        highest = 'Individual Contributor'
        for r in recipient_analysis:
            for s in seniority_order:
                if r.get('seniority') == s and seniority_order.index(s) < seniority_order.index(highest):
                    highest = s
                    break
        
        adjustments = self.seniority_adjustments.get(highest, {})
        boost = adjustments.get('formality_boost', 0)
        
        tone_order = ['very_casual', 'casual', 'professional', 'formal', 'very_formal']
        current_idx = tone_order.index(current_tone) if current_tone in tone_order else 2
        target_idx = max(0, min(4, current_idx + boost))
        
        return tone_order[target_idx]
    
    def _generate_adaptations(self, body, current_tone, target_tone, recipient_analysis):
        """Generate specific tone adaptation suggestions."""
        adaptations = []
        
        if current_tone == target_tone:
            adaptations.append('✅ Current tone matches the ideal tone for these recipients')
            return adaptations
        
        tone_direction = 'more formal' if ['very_casual', 'casual', 'professional', 'formal', 'very_formal'].index(target_tone) > ['very_casual', 'casual', 'professional', 'formal', 'very_formal'].index(current_tone) else 'more casual'
        
        adaptations.append(f'📝 Adjust tone to be {tone_direction} for optimal communication')
        
        if tone_direction == 'more formal':
            if 'hey' in body.lower():
                adaptations.append("Replace 'Hey' with 'Hi' or 'Dear'")
            if 'thanks!' in body.lower():
                adaptations.append("Replace 'Thanks!' with 'Thank you.'")
            if 'lol' in body.lower() or 'btw' in body.lower():
                adaptations.append("Remove casual abbreviations (lol, btw, fyi)")
            adaptations.append("Add professional closing (Best regards, Sincerely)")
        else:
            if 'dear sir' in body.lower():
                adaptations.append("Replace 'Dear Sir/Madam' with 'Hi [Name]'")
            if 'yours faithfully' in body.lower():
                adaptations.append("Replace formal closing with 'Best,' or 'Thanks,'")
            adaptations.append("Consider more conversational language")
        
        return adaptations
    
    def _get_cultural_adjustments(self, recipient_analysis):
        """Get cultural adjustment recommendations."""
        notes = []
        cultures = set(r.get('culture', 'US') for r in recipient_analysis)
        
        for culture in cultures:
            adj = self.cultural_adjustments.get(culture, {})
            if adj:
                notes.append({
                    'culture': culture,
                    'directness': adj.get('directness', 'medium'),
                    'formality': adj.get('formality', 'medium'),
                    'tip': f"For {culture} recipients: use {adj.get('directness')} directness, {adj.get('formality')} formality"
                })
        
        return notes
    
    def _score_tone_match(self, current, target):
        """Score how well current tone matches target (0-100)."""
        tone_order = ['very_casual', 'casual', 'professional', 'formal', 'very_formal']
        current_idx = tone_order.index(current) if current in tone_order else 2
        target_idx = tone_order.index(target) if target in tone_order else 2
        
        distance = abs(current_idx - target_idx)
        return max(0, 100 - distance * 25)
    
    def _suggest_rewrite(self, body, current_tone, target_tone):
        """Suggest a rewritten version of key phrases."""
        rewrites = []
        
        if current_tone in ('casual', 'very_casual') and target_tone in ('formal', 'very_formal'):
            rewrites.append("Opening: 'Dear [Name],' instead of 'Hey'")
            rewrites.append("Body: 'I wanted to follow up on...' instead of 'Just checking in'")
            rewrites.append("Closing: 'I look forward to your response.' instead of 'Let me know'")
        elif current_tone in ('formal', 'very_formal') and target_tone in ('casual', 'professional'):
            rewrites.append("Opening: 'Hi [Name],' instead of 'Dear Sir/Madam'")
            rewrites.append("Body: 'Quick update on...' instead of 'I am writing to inform you'")
            rewrites.append("Closing: 'Thanks!' instead of 'Yours faithfully'")
        
        return rewrites


if __name__ == '__main__':
    adapter = EmailToneAdapter()
    
    test_emails = [
        {
            'id': 'e001',
            'sender': 'kleber@ziontechgroup.com',
            'recipients': ['ceo@bigcorp.com', 'board@bigcorp.com'],
            'subject': 'Project Update',
            'body': "Hey! Just wanted to give you a quick update on the project. We're making great progress lol. The new feature is kinda cool. Btw, we should chat about the budget soon. Let me know what you think!"
        },
        {
            'id': 'e002',
            'sender': 'kleber@ziontechgroup.com',
            'recipients': ['dev@ziontechgroup.com', 'design@ziontechgroup.com'],
            'subject': 'Sprint Planning',
            'body': "Dear Sir/Madam, I am writing to inform you that pursuant to our aforementioned discussion, we shall hereby commence the sprint planning exercise. Yours faithfully."
        }
    ]
    
    print("=== V1046: AI Email Tone Adapter ===\n")
    
    for email in test_emails:
        result = adapter.analyze_and_adapt(email)
        print(f"Email: {email['subject']}")
        print(f"  Current Tone: {result['current_tone']}")
        print(f"  Target Tone: {result['target_tone']}")
        print(f"  Tone Score: {result['tone_score']}/100 ({result['tone_match']})")
        print(f"  Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
        for a in result['adaptations']:
            print(f"  💡 {a}")
        for c in result['cultural_adjustments']:
            print(f"  🌍 {c['tip']}")
        if result['suggested_rewrite']:
            print(f"  ✏️ Suggested rewrites:")
            for r in result['suggested_rewrite']:
                print(f"     - {r}")
        print()
