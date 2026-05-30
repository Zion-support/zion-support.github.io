#!/usr/bin/env python3
"""
Email Intelligence Engine V313 - Email Evolution Engine
Continuously improves email templates using genetic algorithms,
mutating subject lines, content, and CTAs to find optimal combinations.
Enforces reply-all and case-by-case analysis.
"""

import json
import random
from datetime import datetime
from typing import Dict, List
import re

class EmailEvolutionEngine:
    def __init__(self):
        self.version = "V313"
        self.population = []
        self.generation = 0
        
    def create_initial_population(self, base_template: Dict, population_size: int = 10) -> List[Dict]:
        """Create initial population of email variants"""
        population = []
        
        for i in range(population_size):
            variant = self._mutate_template(base_template, mutation_rate=0.3)
            variant['id'] = f'gen0_var{i}'
            variant['generation'] = 0
            variant['fitness'] = 0
            population.append(variant)
        
        self.population = population
        return population
    
    def _mutate_template(self, template: Dict, mutation_rate: float = 0.2) -> Dict:
        """Mutate email template"""
        variant = template.copy()
        
        # Mutate subject line
        if random.random() < mutation_rate:
            variant['subject'] = self._mutate_subject(template.get('subject', ''))
        
        # Mutate content length
        if random.random() < mutation_rate:
            variant['content_length'] = random.choice(['short', 'medium', 'long'])
        
        # Mutate CTA
        if random.random() < mutation_rate:
            variant['cta'] = self._mutate_cta(template.get('cta', ''))
        
        # Mutate tone
        if random.random() < mutation_rate:
            variant['tone'] = random.choice(['formal', 'casual', 'urgent', 'friendly'])
        
        # Mutate send time
        if random.random() < mutation_rate:
            variant['send_hour'] = random.randint(8, 18)
        
        return variant
    
    def _mutate_subject(self, subject: str) -> str:
        """Mutate subject line"""
        mutations = [
            lambda s: s + '?',  # Add question
            lambda s: f"Quick: {s}",  # Add urgency
            lambda s: s.replace('the', 'your'),  # Personalize
            lambda s: f"[Important] {s}",  # Add tag
            lambda s: s.title(),  # Title case
        ]
        
        mutation = random.choice(mutations)
        return mutation(subject)
    
    def _mutate_cta(self, cta: str) -> str:
        """Mutate call-to-action"""
        ctas = [
            'Reply now',
            'Let me know your thoughts',
            'Schedule a call',
            'Click here to learn more',
            'Respond by EOD',
            'What do you think?',
            'Ready to proceed?'
        ]
        return random.choice(ctas) if not cta else cta
    
    def evaluate_fitness(self, variant_id: str, metrics: Dict) -> float:
        """Calculate fitness score for variant"""
        # Fitness based on engagement metrics
        open_rate = metrics.get('open_rate', 0)
        reply_rate = metrics.get('reply_rate', 0)
        click_rate = metrics.get('click_rate', 0)
        
        # Weighted fitness
        fitness = (open_rate * 0.3 + reply_rate * 0.5 + click_rate * 0.2) * 100
        
        # Update variant
        for variant in self.population:
            if variant['id'] == variant_id:
                variant['fitness'] = fitness
                break
        
        return fitness
    
    def evolve(self, selection_pressure: float = 0.5) -> List[Dict]:
        """Create next generation through selection and crossover"""
        self.generation += 1
        
        # Sort by fitness
        sorted_pop = sorted(self.population, key=lambda x: x['fitness'], reverse=True)
        
        # Select top performers
        elite_count = max(2, int(len(sorted_pop) * selection_pressure))
        elites = sorted_pop[:elite_count]
        
        # Create next generation
        next_gen = elites.copy()
        
        while len(next_gen) < len(self.population):
            # Crossover
            parent1, parent2 = random.sample(elites, 2)
            child = self._crossover(parent1, parent2)
            child = self._mutate_template(child, mutation_rate=0.1)
            child['id'] = f'gen{self.generation}_var{len(next_gen)}'
            child['generation'] = self.generation
            child['fitness'] = 0
            next_gen.append(child)
        
        self.population = next_gen
        return next_gen
    
    def _crossover(self, parent1: Dict, parent2: Dict) -> Dict:
        """Crossover two parent templates"""
        child = {}
        
        # Randomly inherit traits
        for key in ['subject', 'content_length', 'cta', 'tone', 'send_hour']:
            if key in parent1 and key in parent2:
                child[key] = parent1[key] if random.random() < 0.5 else parent2[key]
            elif key in parent1:
                child[key] = parent1[key]
            elif key in parent2:
                child[key] = parent2[key]
        
        return child
    
    def get_best_variant(self) -> Dict:
        """Get highest fitness variant"""
        if not self.population:
            return {}
        return max(self.population, key=lambda x: x['fitness'])
    
    def process_email(self, email_data: Dict, use_best: bool = True) -> Dict:
        """Process email using evolved template"""
        print(f"[{self.version}] Processing with evolved template (gen {self.generation})")
        
        # Case-by-case analysis
        content = email_data.get('content', '')
        recipients = email_data.get('recipients', [])
        cc_list = email_data.get('cc', [])
        all_recipients = recipients + cc_list
        
        # Enforce reply-all
        reply_all = len(all_recipients) > 1
        
        # Get template
        if use_best and self.population:
            template = self.get_best_variant()
        else:
            template = random.choice(self.population) if self.population else {}
        
        response = {
            'version': self.version,
            'engine': 'Email Evolution Engine',
            'generation': self.generation,
            'template_id': template.get('id', 'none'),
            'template_fitness': template.get('fitness', 0),
            'applied_mutations': {
                'subject': template.get('subject', email_data.get('subject', '')),
                'tone': template.get('tone', 'neutral'),
                'cta': template.get('cta', ''),
                'send_hour': template.get('send_hour', 10)
            },
            'reply_all': reply_all,
            'reply_all_recipients': all_recipients if reply_all else [],
            'recommendation': f'Use evolved template (fitness: {template.get("fitness", 0):.2f})'
        }
        
        print(f"[{self.version}] Template: {template.get('id')}, Reply-all: {reply_all}")
        return response

# Test
if __name__ == "__main__":
    engine = EmailEvolutionEngine()
    
    # Create initial population
    base_template = {
        'subject': 'Partnership Opportunity',
        'content_length': 'medium',
        'cta': 'Let me know',
        'tone': 'professional',
        'send_hour': 10
    }
    
    population = engine.create_initial_population(base_template, population_size=5)
    print(f"Created population of {len(population)} variants")
    
    # Simulate fitness evaluation
    for variant in population:
        metrics = {
            'open_rate': random.uniform(0.2, 0.6),
            'reply_rate': random.uniform(0.05, 0.25),
            'click_rate': random.uniform(0.1, 0.3)
        }
        engine.evaluate_fitness(variant['id'], metrics)
    
    # Evolve
    next_gen = engine.evolve()
    print(f"\nEvolved to generation {engine.generation}")
    
    # Get best
    best = engine.get_best_variant()
    print(f"Best variant: {best['id']} (fitness: {best['fitness']:.2f})")
    
    # Process email
    test_email = {
        'sender': 'sales@company.com',
        'subject': 'Q3 Partnership',
        'content': 'Exploring collaboration',
        'recipients': ['client@company.com'],
        'cc': ['manager@company.com']
    }
    
    result = engine.process_email(test_email)
    print("\nEmail processing:", json.dumps(result, indent=2))
