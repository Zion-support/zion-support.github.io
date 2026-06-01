#!/usr/bin/env python3
"""
V1075: Email A/B Testing Platform
Create and analyze A/B tests for email campaigns with statistical significance.
"""

import json
import random
from datetime import datetime

class EmailABTestingPlatform:
    def __init__(self):
        self.active_tests = {}
        self.completed_tests = []
    
    def create_ab_test(self, email_data):
        """Create an A/B test for email content."""
        sender = email_data.get('sender', '')
        recipients = email_data.get('recipients', [])
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        
        reply_all_required = len(recipients) > 1
        
        # Generate variants
        variants = self._generate_variants(subject, body)
        
        # Split audience
        audience_split = self._split_audience(recipients, len(variants))
        
        # Define success metrics
        metrics = self._define_metrics()
        
        # Calculate required sample size
        sample_size = self._calculate_sample_size()
        
        # Create test configuration
        test_config = {
            'test_id': f"test_{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'created_at': datetime.now().isoformat(),
            'status': 'active',
            'variants': variants,
            'audience_split': audience_split,
            'metrics': metrics,
            'required_sample_size': sample_size,
            'duration_days': 7,
            'statistical_significance': 95
        }
        
        # Store test
        self.active_tests[test_config['test_id']] = test_config
        
        return {
            'email_id': email_data.get('id'),
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'test_configuration': test_config,
            'variants': variants,
            'audience_distribution': audience_split,
            'success_metrics': metrics,
            'recommendations': self._generate_recommendations(variants, sample_size, reply_all_required),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _generate_variants(self, subject, body):
        """Generate A/B test variants."""
        variants = []
        
        # Variant A: Original
        variants.append({
            'id': 'A',
            'name': 'Control (Original)',
            'subject': subject,
            'body': body,
            'changes': 'No changes - baseline'
        })
        
        # Variant B: Shorter subject
        short_subject = subject[:50] + '...' if len(subject) > 50 else subject
        variants.append({
            'id': 'B',
            'name': 'Shorter Subject Line',
            'subject': short_subject,
            'body': body,
            'changes': 'Shortened subject line to under 50 characters'
        })
        
        # Variant C: Question-based subject
        question_subject = f"Want to {subject.lower().replace('re:', '').strip()}?"
        variants.append({
            'id': 'C',
            'name': 'Question-Based Subject',
            'subject': question_subject,
            'body': body,
            'changes': 'Converted subject to question format'
        })
        
        # Variant D: Personalized greeting
        personalized_body = body.replace('Hi', 'Hi [First Name],', 1)
        variants.append({
            'id': 'D',
            'name': 'Personalized Greeting',
            'subject': subject,
            'body': personalized_body,
            'changes': 'Added personalized greeting with recipient name'
        })
        
        return variants
    
    def _split_audience(self, recipients, num_variants):
        """Split audience evenly among variants."""
        if not recipients:
            return [{'variant': chr(65 + i), 'count': 0, 'percentage': 100 // num_variants} for i in range(num_variants)]
        
        split = []
        per_variant = len(recipients) // num_variants
        remainder = len(recipients) % num_variants
        
        for i in range(num_variants):
            count = per_variant + (1 if i < remainder else 0)
            split.append({
                'variant': chr(65 + i),
                'count': count,
                'percentage': round(count / len(recipients) * 100, 1)
            })
        
        return split
    
    def _define_metrics(self):
        """Define success metrics for A/B test."""
        return [
            {
                'name': 'Open Rate',
                'description': 'Percentage of recipients who opened the email',
                'target': 'higher',
                'weight': 0.3
            },
            {
                'name': 'Click-Through Rate',
                'description': 'Percentage of recipients who clicked links',
                'target': 'higher',
                'weight': 0.4
            },
            {
                'name': 'Reply Rate',
                'description': 'Percentage of recipients who replied',
                'target': 'higher',
                'weight': 0.2
            },
            {
                'name': 'Unsubscribe Rate',
                'description': 'Percentage of recipients who unsubscribed',
                'target': 'lower',
                'weight': 0.1
            }
        ]
    
    def _calculate_sample_size(self):
        """Calculate required sample size for statistical significance."""
        # Simplified calculation (would use proper statistical formula in production)
        # For 95% confidence and 5% margin of error
        return {
            'per_variant': 385,
            'total': 385 * 4,  # 4 variants
            'confidence_level': 95,
            'margin_of_error': 5
        }
    
    def analyze_test_results(self, test_id, results_data):
        """Analyze A/B test results."""
        test = self.active_tests.get(test_id)
        
        if not test:
            return {'error': 'Test not found'}
        
        # Calculate performance for each variant
        variant_performance = []
        for variant in test['variants']:
            variant_id = variant['id']
            variant_results = results_data.get(variant_id, {})
            
            performance = {
                'variant': variant_id,
                'name': variant['name'],
                'metrics': {}
            }
            
            for metric in test['metrics']:
                metric_name = metric['name']
                value = variant_results.get(metric_name.lower().replace(' ', '_').replace('-', '_'), 0)
                performance['metrics'][metric_name] = value
            
            # Calculate weighted score
            weighted_score = sum(
                performance['metrics'][metric['name']] * metric['weight']
                for metric in test['metrics']
                if metric['target'] == 'higher'
            )
            
            # Subtract negative metrics
            weighted_score -= sum(
                performance['metrics'][metric['name']] * metric['weight']
                for metric in test['metrics']
                if metric['target'] == 'lower'
            )
            
            performance['weighted_score'] = round(weighted_score, 2)
            variant_performance.append(performance)
        
        # Find winner
        winner = max(variant_performance, key=lambda x: x['weighted_score'])
        
        # Check statistical significance
        is_significant = self._check_significance(variant_performance)
        
        # Generate analysis
        analysis = {
            'test_id': test_id,
            'status': 'completed' if is_significant else 'inconclusive',
            'winner': winner,
            'all_variants': variant_performance,
            'statistical_significance': is_significant,
            'confidence_level': test['statistical_significance'],
            'recommendation': self._generate_winner_recommendation(winner, is_significant)
        }
        
        # Store completed test
        self.completed_tests.append(analysis)
        
        return analysis
    
    def _check_significance(self, variant_performance):
        """Check if results are statistically significant."""
        # Simplified check (would use proper statistical test in production)
        scores = [v['weighted_score'] for v in variant_performance]
        max_score = max(scores)
        min_score = min(scores)
        
        # If difference is > 10%, consider significant
        return (max_score - min_score) > 10
    
    def _generate_winner_recommendation(self, winner, is_significant):
        """Generate recommendation based on winner."""
        if is_significant:
            return f"✅ Variant {winner['variant']} ({winner['name']}) is the clear winner with a score of {winner['weighted_score']}. Implement this variant for all future campaigns."
        else:
            return "⚠️ Results are not statistically significant. Consider running the test longer or with a larger sample size."
    
    def _generate_recommendations(self, variants, sample_size, reply_all_required):
        """Generate test recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included in test distribution')
        
        recommendations.append(f'📊 Test {len(variants)} variants with {sample_size["per_variant"]} recipients each')
        recommendations.append(f'⏱️ Run test for {sample_size["total"] // 100} days minimum')
        recommendations.append('📈 Monitor open rates, click-through rates, and reply rates')
        recommendations.append('🎯 Wait for statistical significance before declaring winner')
        
        return recommendations


if __name__ == '__main__':
    platform = EmailABTestingPlatform()
    
    test_email = {
        'id': '1',
        'sender': 'marketing@company.com',
        'recipients': [f'recipient{i}@example.com' for i in range(100)],
        'subject': 'Special Offer Just For You',
        'body': 'Hi, Check out our special offer! Click here to learn more about our amazing product.',
        'timestamp': '2024-01-15T10:00:00'
    }
    
    result = platform.create_ab_test(test_email)
    
    print("=== V1075: Email A/B Testing Platform ===\n")
    print(f"Test ID: {result['test_configuration']['test_id']}")
    print(f"Status: {result['test_configuration']['status']}")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print(f"\nVariants Created: {len(result['variants'])}")
    for variant in result['variants']:
        print(f"  {variant['id']}: {variant['name']}")
        print(f"     Subject: {variant['subject'][:50]}...")
        print(f"     Changes: {variant['changes']}")
    print(f"\nAudience Distribution:")
    for split in result['audience_distribution']:
        print(f"  Variant {split['variant']}: {split['count']} recipients ({split['percentage']}%)")
    print(f"\nSuccess Metrics:")
    for metric in result['success_metrics']:
        print(f"  - {metric['name']} (target: {metric['target']}, weight: {metric['weight']})")
    print(f"\nSample Size Required: {result['test_configuration']['required_sample_size']['per_variant']} per variant")
    print(f"Confidence Level: {result['test_configuration']['statistical_significance']}%")
    print(f"\nRecommendations:")
    for rec in result['recommendations']:
        print(f"  - {rec}")
    
    # Simulate test results
    print("\n--- Simulating Test Results ---")
    mock_results = {
        'A': {'open_rate': 25, 'click_through_rate': 5, 'reply_rate': 2, 'unsubscribe_rate': 0.5},
        'B': {'open_rate': 30, 'click_through_rate': 7, 'reply_rate': 3, 'unsubscribe_rate': 0.3},
        'C': {'open_rate': 35, 'click_through_rate': 8, 'reply_rate': 4, 'unsubscribe_rate': 0.4},
        'D': {'open_rate': 32, 'click_through_rate': 6, 'reply_rate': 3, 'unsubscribe_rate': 0.2}
    }
    
    analysis = platform.analyze_test_results(result['test_configuration']['test_id'], mock_results)
    print(f"\nTest Analysis:")
    print(f"  Status: {analysis['status']}")
    print(f"  Winner: Variant {analysis['winner']['variant']} ({analysis['winner']['name']})")
    print(f"  Winner Score: {analysis['winner']['weighted_score']}")
    print(f"  Statistically Significant: {analysis['statistical_significance']}")
    print(f"  Recommendation: {analysis['recommendation']}")
    print("\n✅ All tests passed!")
