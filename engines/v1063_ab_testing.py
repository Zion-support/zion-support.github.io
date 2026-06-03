#!/usr/bin/env python3
"""V1063: AI Email A/B Testing Platform
Auto-generate subject line variants, test send times, optimize content.
Statistical significance calculations with auto-winner selection.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
import json
import math
from datetime import datetime
from collections import defaultdict

class ABTestingPlatform:
    def __init__(self):
        self.tests = {}
        self.results = defaultdict(list)

    def create_test(self, email_data):
        sender = email_data.get('sender', 'unknown')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        test_type = email_data.get('test_type', 'subject_line')
        reply_all = len(recipients) > 1

        variants = self._generate_variants(subject, body, test_type)
        test_config = self._configure_test(variants, test_type, len(recipients))
        sample_size = self._calculate_sample_size(test_config)

        return {
            'email_id': email_data.get('id'),
            'reply_all_required': reply_all,
            'test_type': test_type,
            'variants': variants,
            'test_configuration': test_config,
            'required_sample_size': sample_size,
            'estimated_duration': self._estimate_duration(sample_size, len(recipients)),
            'success_metrics': self._define_metrics(test_type),
            'auto_winner_criteria': self._define_winner_criteria(test_type),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }

    def _generate_variants(self, subject, body, test_type):
        if test_type == 'subject_line':
            variants = [
                {'id': 'A', 'subject': subject, 'type': 'original'},
                {'id': 'B', 'subject': self._make_question(subject), 'type': 'question'},
                {'id': 'C', 'subject': self._add_number(subject), 'type': 'numbered'},
                {'id': 'D', 'subject': self._make_urgent(subject), 'type': 'urgency'}
            ]
        elif test_type == 'send_time':
            variants = [
                {'id': 'A', 'send_time': '09:00', 'type': 'morning'},
                {'id': 'B', 'send_time': '11:00', 'type': 'late_morning'},
                {'id': 'C', 'send_time': '14:00', 'type': 'afternoon'},
                {'id': 'D', 'send_time': '16:00', 'type': 'late_afternoon'}
            ]
        elif test_type == 'content':
            variants = [
                {'id': 'A', 'style': 'formal', 'type': 'formal'},
                {'id': 'B', 'style': 'casual', 'type': 'casual'},
                {'id': 'C', 'style': 'data-driven', 'type': 'data_driven'},
                {'id': 'D', 'style': 'story-driven', 'type': 'story_driven'}
            ]
        else:
            variants = [{'id': 'A', 'type': 'control'}, {'id': 'B', 'type': 'variant'}]
        return variants

    def _make_question(self, subject):
        if subject.endswith('?'):
            return subject
        return f"Can we help you with: {subject}?"

    def _add_number(self, subject):
        return f"3 ways to improve: {subject}"

    def _make_urgent(self, subject):
        return f"[Time-Sensitive] {subject}"

    def _configure_test(self, variants, test_type, audience_size):
        split = round(100 / len(variants))
        return {
            'audience_size': audience_size,
            'split_percentage': split,
            'confidence_level': 95,
            'minimum_detectable_effect': 10,
            'test_duration_hours': 24 if test_type == 'send_time' else 48,
            'variants_count': len(variants)
        }

    def _calculate_sample_size(self, config):
        z = 1.96
        p = 0.5
        e = config['minimum_detectable_effect'] / 100
        n = (z ** 2 * p * (1 - p)) / (e ** 2)
        return math.ceil(n * config['variants_count'])

    def _estimate_duration(self, sample_size, audience_size):
        if audience_size >= sample_size:
            return '24-48 hours'
        ratio = sample_size / max(audience_size, 1)
        return f'{math.ceil(ratio * 48)} hours'

    def _define_metrics(self, test_type):
        metrics = {
            'subject_line': ['Open rate', 'Click-through rate', 'Reply rate'],
            'send_time': ['Open rate', 'Reply rate', 'Time to open'],
            'content': ['Click-through rate', 'Reply rate', 'Conversion rate']
        }
        return metrics.get(test_type, ['Open rate', 'Click-through rate'])

    def _define_winner_criteria(self, test_type):
        return {
            'primary_metric': 'open_rate' if test_type == 'subject_line' else 'reply_rate',
            'confidence_threshold': 95,
            'minimum_lift': 10,
            'auto_select_winner': True
        }

    def calculate_significance(self, variant_a_results, variant_b_results):
        n_a = variant_a_results.get('sent', 0)
        n_b = variant_b_results.get('sent', 0)
        c_a = variant_a_results.get('conversions', 0)
        c_b = variant_b_results.get('conversions', 0)
        if n_a == 0 or n_b == 0:
            return {'significant': False, 'confidence': 0}
        p_a = c_a / n_a
        p_b = c_b / n_b
        p_pool = (c_a + c_b) / (n_a + n_b)
        se = math.sqrt(p_pool * (1 - p_pool) * (1/n_a + 1/n_b))
        if se == 0:
            return {'significant': False, 'confidence': 0}
        z = abs(p_a - p_b) / se
        confidence = min(99.9, z * 25)
        return {
            'significant': confidence >= 95,
            'confidence': round(confidence, 1),
            'variant_a_rate': round(p_a * 100, 2),
            'variant_b_rate': round(p_b * 100, 2),
            'winner': 'A' if p_a > p_b else 'B',
            'lift': round(abs(p_a - p_b) / max(p_a, p_b, 0.001) * 100, 1)
        }

if __name__ == '__main__':
    platform = ABTestingPlatform()
    test = {'id': 'e001', 'sender': 'marketing@ziontechgroup.com',
            'recipients': [f'lead{i}@company.com' for i in range(500)],
            'subject': 'AI Platform Demo Available', 'body': 'Schedule your demo today.',
            'test_type': 'subject_line'}
    result = platform.create_test(test)
    print("=== V1063: AI Email A/B Testing Platform ===\n")
    print(f"Test Type: {result['test_type']}")
    print(f"Variants: {len(result['variants'])}")
    for v in result['variants']:
        print(f"  {v['id']}: {v.get('subject', v.get('send_time', v.get('style', v['type'])))}")
    print(f"Sample Size: {result['required_sample_size']}")
    print(f"Duration: {result['estimated_duration']}")
    print(f"Confidence: {result['test_configuration']['confidence_level']}%")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    sig = platform.calculate_significance({'sent': 250, 'conversions': 45}, {'sent': 250, 'conversions': 62})
    print(f"\nSignificance Test: {sig['confidence']}% confidence, Winner: {sig['winner']}, Lift: {sig['lift']}%")
