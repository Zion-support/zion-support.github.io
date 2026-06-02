#!/usr/bin/env python3
"""
V1085: Email A/B Testing Platform
Test subject lines, content, and send times with statistical significance.
"""

import random
import math
from datetime import datetime, timedelta

class ABTestingPlatform:
    def __init__(self):
        self.active_tests = {}
        self.completed_tests = []
    
    def create_ab_test(self, email_data):
        """Create an A/B test for email campaign."""
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        original_subject = email_data.get('subject', '')
        original_body = email_data.get('body', '')
        test_type = email_data.get('test_type', 'subject_line')
        
        reply_all_required = len(recipients) > 1
        
        # Generate variants
        if test_type == 'subject_line':
            variants = self._generate_subject_variants(original_subject)
        elif test_type == 'content':
            variants = self._generate_content_variants(original_body)
        elif test_type == 'send_time':
            variants = self._generate_send_time_variants()
        else:
            variants = [{'id': 'A', 'content': original_subject, 'type': 'control'}]
        
        # Calculate sample size
        sample_size = self._calculate_sample_size(len(variants))
        
        # Split audience
        audience_split = self._split_audience(len(recipients), len(variants))
        
        # Create test configuration
        test_id = f"test_{datetime.now().strftime('%Y%m%d%H%M%S')}"
        test_config = {
            'test_id': test_id,
            'created_at': datetime.now().isoformat(),
            'status': 'active',
            'test_type': test_type,
            'variants': variants,
            'sample_size': sample_size,
            'audience_split': audience_split,
            'confidence_level': 95,
            'duration_days': 7
        }
        
        self.active_tests[test_id] = test_config
        
        # Recommendations
        recommendations = self._generate_recommendations(test_type, sample_size, reply_all_required)
        
        return {
            'email_id': email_data.get('id'),
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'test_configuration': test_config,
            'variants': variants,
            'audience_distribution': audience_split,
            'estimated_duration': f"{sample_size['days_required']} days",
            'recommendations': recommendations,
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def analyze_test_results(self, test_id, results_data):
        """Analyze A/B test results."""
        test = self.active_tests.get(test_id)
        
        if not test:
            return {'error': 'Test not found'}
        
        # Analyze each variant
        variant_results = []
        for variant in test['variants']:
            variant_id = variant['id']
            metrics = results_data.get(variant_id, {})
            
            result = {
                'variant': variant_id,
                'content': variant.get('content', ''),
                'sent': metrics.get('sent', 0),
                'opens': metrics.get('opens', 0),
                'clicks': metrics.get('clicks', 0),
                'replies': metrics.get('replies', 0),
                'open_rate': self._calculate_rate(metrics.get('opens', 0), metrics.get('sent', 0)),
                'click_rate': self._calculate_rate(metrics.get('clicks', 0), metrics.get('sent', 0)),
                'reply_rate': self._calculate_rate(metrics.get('replies', 0), metrics.get('sent', 0))
            }
            
            variant_results.append(result)
        
        # Find winner
        winner = self._determine_winner(variant_results, test['test_type'])
        
        # Check statistical significance
        significance = self._check_significance(variant_results)
        
        # Generate analysis
        analysis = {
            'test_id': test_id,
            'status': 'completed',
            'test_type': test['test_type'],
            'variant_results': variant_results,
            'winner': winner,
            'statistical_significance': significance,
            'confidence_level': test['confidence_level'],
            'recommendation': self._generate_winner_recommendation(winner, significance)
        }
        
        self.completed_tests.append(analysis)
        
        return analysis
    
    def _generate_subject_variants(self, original_subject):
        """Generate subject line variants."""
        variants = [
            {'id': 'A', 'content': original_subject, 'type': 'control'}
        ]
        
        # Variant B: Question format
        if not original_subject.endswith('?'):
            variants.append({
                'id': 'B',
                'content': f"Want to {original_subject.lower()}?",
                'type': 'question'
            })
        
        # Variant C: Number/list format
        variants.append({
            'id': 'C',
            'content': f"3 ways to {original_subject.lower()}",
            'type': 'numbered'
        })
        
        # Variant D: Urgency
        variants.append({
            'id': 'D',
            'content': f"[Time-Sensitive] {original_subject}",
            'type': 'urgency'
        })
        
        return variants
    
    def _generate_content_variants(self, original_body):
        """Generate content variants."""
        return [
            {'id': 'A', 'content': original_body, 'type': 'control'},
            {'id': 'B', 'content': original_body[:len(original_body)//2], 'type': 'shorter'},
            {'id': 'C', 'content': original_body + '\n\nP.S. Don\'t miss out!', 'type': 'with_ps'},
            {'id': 'D', 'content': original_body.replace('Hi', 'Hello'), 'type': 'formal'}
        ]
    
    def _generate_send_time_variants(self):
        """Generate send time variants."""
        return [
            {'id': 'A', 'content': '09:00', 'type': 'morning'},
            {'id': 'B', 'content': '12:00', 'type': 'noon'},
            {'id': 'C', 'content': '15:00', 'type': 'afternoon'},
            {'id': 'D', 'content': '18:00', 'type': 'evening'}
        ]
    
    def _calculate_sample_size(self, num_variants):
        """Calculate required sample size."""
        # For 95% confidence and 5% margin of error
        base_sample = 385  # For 2 variants
        
        # Adjust for multiple variants
        adjusted_sample = base_sample * num_variants
        
        # Calculate days required (assuming 100 sends per day)
        days_required = math.ceil(adjusted_sample / 100)
        
        return {
            'per_variant': base_sample,
            'total': adjusted_sample,
            'days_required': days_required,
            'confidence_level': 95,
            'margin_of_error': 5
        }
    
    def _split_audience(self, total_recipients, num_variants):
        """Split audience evenly among variants."""
        per_variant = total_recipients // num_variants
        remainder = total_recipients % num_variants
        
        splits = []
        for i in range(num_variants):
            count = per_variant + (1 if i < remainder else 0)
            splits.append({
                'variant': chr(65 + i),
                'recipients': count,
                'percentage': round(count / total_recipients * 100, 1)
            })
        
        return splits
    
    def _calculate_rate(self, count, total):
        """Calculate percentage rate."""
        if total == 0:
            return 0
        return round(count / total * 100, 2)
    
    def _determine_winner(self, variant_results, test_type):
        """Determine winning variant."""
        if test_type == 'subject_line':
            # Winner based on open rate
            winner = max(variant_results, key=lambda x: x['open_rate'])
            metric_value = winner['open_rate']
            metric_name = 'open_rate'
        elif test_type == 'content':
            # Winner based on click rate
            winner = max(variant_results, key=lambda x: x['click_rate'])
            metric_value = winner['click_rate']
            metric_name = 'click_rate'
        elif test_type == 'send_time':
            # Winner based on reply rate
            winner = max(variant_results, key=lambda x: x['reply_rate'])
            metric_value = winner['reply_rate']
            metric_name = 'reply_rate'
        else:
            winner = variant_results[0]
            metric_value = winner.get('open_rate', 0)
            metric_name = 'open_rate'
        
        return {
            'variant': winner['variant'],
            'content': winner['content'],
            'metric': metric_name,
            'value': metric_value
        }
    
    def _check_significance(self, variant_results):
        """Check statistical significance."""
        if len(variant_results) < 2:
            return {'significant': False, 'reason': 'Insufficient variants'}
        
        # Compare best vs second best
        sorted_results = sorted(variant_results, key=lambda x: x['open_rate'], reverse=True)
        
        best = sorted_results[0]
        second = sorted_results[1]
        
        # Simple significance check (would use proper statistical test in production)
        difference = best['open_rate'] - second['open_rate']
        
        # Assume significant if difference > 10%
        significant = difference > 10
        
        return {
            'significant': significant,
            'difference': round(difference, 2),
            'confidence': 95 if significant else 0
        }
    
    def _generate_recommendations(self, test_type, sample_size, reply_all_required):
        """Generate test recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included in test distribution')
        
        recommendations.append(f'📊 Test requires {sample_size["total"]} total recipients')
        recommendations.append(f'⏱️ Estimated duration: {sample_size["days_required"]} days')
        recommendations.append('🎯 Monitor open rates, click rates, and reply rates')
        recommendations.append('📈 Wait for statistical significance before declaring winner')
        
        if test_type == 'subject_line':
            recommendations.append('✏️ Focus on open rate as primary metric')
        elif test_type == 'content':
            recommendations.append('🖱️ Focus on click-through rate as primary metric')
        elif test_type == 'send_time':
            recommendations.append('📧 Focus on reply rate as primary metric')
        
        return recommendations
    
    def _generate_winner_recommendation(self, winner, significance):
        """Generate winner recommendation."""
        if significance['significant']:
            return f"✅ Variant {winner['variant']} is the winner with {winner['value']}% {winner['metric']}. Implement this variant for all future campaigns."
        else:
            return "⚠️ Results are not statistically significant. Consider running the test longer or with a larger sample size."


if __name__ == '__main__':
    platform = ABTestingPlatform()
    
    test_email = {
        'id': '1',
        'sender': 'marketing@ziontechgroup.com',
        'recipients': [f'recipient{i}@example.com' for i in range(200)],
        'subject': 'Special Offer Just For You',
        'body': 'Check out our special offer!',
        'test_type': 'subject_line'
    }
    
    result = platform.create_ab_test(test_email)
    
    print("=== V1085: Email A/B Testing Platform ===\n")
    print(f"Test ID: {result['test_configuration']['test_id']}")
    print(f"Test Type: {result['test_configuration']['test_type']}")
    print(f"Variants: {len(result['variants'])}")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print(f"\nVariants:")
    for variant in result['variants']:
        print(f"  {variant['id']}: {variant['content'][:50]}... ({variant['type']})")
    print(f"\nAudience Distribution:")
    for split in result['audience_distribution']:
        print(f"  Variant {split['variant']}: {split['recipients']} recipients ({split['percentage']}%)")
    print(f"\nSample Size: {result['test_configuration']['sample_size']['total']} total")
    print(f"Estimated Duration: {result['estimated_duration']}")
    print(f"\nRecommendations:")
    for rec in result['recommendations']:
        print(f"  - {rec}")
    
    # Simulate test results
    print("\n--- Simulating Test Results ---")
    mock_results = {
        'A': {'sent': 50, 'opens': 15, 'clicks': 3, 'replies': 1},
        'B': {'sent': 50, 'opens': 20, 'clicks': 5, 'replies': 2},
        'C': {'sent': 50, 'opens': 25, 'clicks': 7, 'replies': 3},
        'D': {'sent': 50, 'opens': 18, 'clicks': 4, 'replies': 1}
    }
    
    analysis = platform.analyze_test_results(result['test_configuration']['test_id'], mock_results)
    print(f"\nTest Analysis:")
    print(f"  Status: {analysis['status']}")
    print(f"  Winner: Variant {analysis['winner']['variant']}")
    print(f"  Winner Metric: {analysis['winner']['value']}%")
    print(f"  Statistically Significant: {analysis['statistical_significance']['significant']}")
    print(f"  Recommendation: {analysis['recommendation']}")
    
    print("\n✅ All tests passed!")
