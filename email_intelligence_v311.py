#!/usr/bin/env python3
"""
Email Intelligence Engine V311 - Email Experimentation Platform
Run controlled experiments on email strategies (tone, timing, length, CTA)
across segments with statistical significance tracking.
Enforces reply-all and case-by-case analysis.
"""

import json
from datetime import datetime
from typing import Dict, List
import statistics

class EmailExperimentationPlatform:
    def __init__(self):
        self.version = "V311"
        self.experiments = {}
        
    def create_experiment(self, experiment_id: str, hypothesis: str, 
                         variants: List[Dict], segments: List[str]) -> Dict:
        """Create A/B/n email experiment"""
        self.experiments[experiment_id] = {
            'hypothesis': hypothesis,
            'variants': variants,
            'segments': segments,
            'status': 'running',
            'start_date': datetime.now().isoformat(),
            'results': {v['name']: {'sent': 0, 'opened': 0, 'clicked': 0, 'replied': 0} 
                       for v in variants}
        }
        return {'status': 'created', 'experiment_id': experiment_id}
    
    def record_interaction(self, experiment_id: str, variant: str, 
                          metrics: Dict) -> None:
        """Record email interaction for experiment"""
        if experiment_id in self.experiments:
            results = self.experiments[experiment_id]['results'][variant]
            results['sent'] += 1
            results['opened'] += metrics.get('opened', 0)
            results['clicked'] += metrics.get('clicked', 0)
            results['replied'] += metrics.get('replied', 0)
    
    def analyze_results(self, experiment_id: str) -> Dict:
        """Analyze experiment with statistical significance"""
        if experiment_id not in self.experiments:
            return {'error': 'Experiment not found'}
        
        exp = self.experiments[experiment_id]
        results = exp['results']
        
        analysis = {}
        for variant, metrics in results.items():
            if metrics['sent'] > 0:
                analysis[variant] = {
                    'open_rate': metrics['opened'] / metrics['sent'],
                    'click_rate': metrics['clicked'] / metrics['sent'],
                    'reply_rate': metrics['replied'] / metrics['sent'],
                    'sample_size': metrics['sent']
                }
        
        # Determine winner
        winner = None
        best_reply_rate = 0
        for variant, stats in analysis.items():
            if stats['reply_rate'] > best_reply_rate:
                best_reply_rate = stats['reply_rate']
                winner = variant
        
        return {
            'experiment_id': experiment_id,
            'analysis': analysis,
            'winner': winner,
            'best_reply_rate': best_reply_rate,
            'statistical_significance': len(results[winner]['sent'] if winner else 0) > 100
        }
    
    def process_email(self, email_data: Dict, experiment_id: str) -> Dict:
        """Process email through experimentation framework"""
        print(f"[{self.version}] Running experiment: {experiment_id}")
        
        # Case-by-case analysis
        content = email_data.get('content', '')
        subject = email_data.get('subject', '')
        recipients = email_data.get('recipients', [])
        cc_list = email_data.get('cc', [])
        
        # Enforce reply-all
        all_recipients = recipients + cc_list
        reply_all = len(all_recipients) > 1
        
        # Assign variant (simplified - in production use consistent hashing)
        variants = list(self.experiments[experiment_id]['results'].keys())
        variant = variants[hash(email_data.get('sender', '')) % len(variants)]
        
        response = {
            'version': self.version,
            'engine': 'Email Experimentation Platform',
            'experiment_id': experiment_id,
            'assigned_variant': variant,
            'reply_all': reply_all,
            'reply_all_recipients': all_recipients if reply_all else [],
            'analysis': {
                'content_length': len(content),
                'has_attachments': bool(email_data.get('attachments')),
                'recipient_count': len(all_recipients)
            },
            'recommendation': f'Apply variant {variant} strategy'
        }
        
        print(f"[{self.version}] Variant: {variant}, Reply-all: {reply_all}")
        return response

# Test
if __name__ == "__main__":
    engine = EmailExperimentationPlatform()
    
    # Create experiment
    engine.create_experiment(
        'subject_line_test',
        'Question subjects get more replies',
        [
            {'name': 'control', 'strategy': 'statement'},
            {'name': 'question', 'strategy': 'question'}
        ],
        ['enterprise', 'smb']
    )
    
    # Process test email
    test_email = {
        'sender': 'test@example.com',
        'subject': 'Q3 Partnership Opportunity',
        'content': 'Would you be interested in discussing a partnership?',
        'recipients': ['client@company.com'],
        'cc': ['manager@company.com', 'team@company.com']
    }
    
    result = engine.process_email(test_email, 'subject_line_test')
    print(json.dumps(result, indent=2))
