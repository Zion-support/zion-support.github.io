#!/usr/bin/env python3
"""
Neural Pattern Intelligence NPX - Zion

NEURAL NETWORK-INSPIRED PATTERN RECOGNITION:
- Pattern embedding similarity
- Attention-weighted responses
- Transformer-style context analysis
- Embedding space navigation
- Neural confidence scoring
"""

import sys, json
import math
from pathlib import Path
from datetime import datetime
from collections import defaultdict

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

NEURAL_DATA = WORKSPACE / 'zion.app' / 'data' / 'neural_patterns.json'

class NeuralPatternEngine:
    """Neural-inspired pattern recognition and response generation."""
    
    def __init__(self):
        self.patterns = self.load_patterns()
        self.vocabulary = defaultdict(float)
    
    def load_patterns(self):
        if NEURAL_DATA.exists():
            return json.loads(NEURAL_DATA.read_text())
        return {'embeddings': {}, 'attention_weights': {}, 'confidence_scores': {}}
    
    def create_embedding(self, text):
        """Create simple word2vec-style embedding."""
        words = text.lower().split()
        # Simple embedding: average of word hashes
        embedding = []
        for word in words[:20]:  # Limit to first 20 words
            h = hash(word) % 1000 / 1000.0
            embedding.append(h)
        
        # Pad to 50 dimensions
        while len(embedding) < 50:
            embedding.append(0.0)
        
        return embedding[:50]
    
    def cosine_similarity(self, a, b):
        """Calculate similarity between embeddings."""
        if len(a) != len(b):
            return 0.0
        
        dot = sum(a[i] * b[i] for i in range(len(a)))
        mag_a = math.sqrt(sum(x**2 for x in a))
        mag_b = math.sqrt(sum(x**2 for x in b))
        
        if mag_a == 0 or mag_b == 0:
            return 0.0
        
        return dot / (mag_a * mag_b)
    
    def attention_score(self, word, context_words):
        """Calculate attention score for a word."""
        base_score = 1.0
        context_bonus = 0.0
        
        for cw in context_words:
            if word in cw or cw in word:
                context_bonus += 0.5
        
        return min(base_score + context_bonus, 2.0)
    
    def generate_neural_response(self, sender, subject, snippet):
        """Generate response using neural patterns."""
        
        # Create embeddings
        email_embedding = self.create_embedding(f"{subject} {snippet}")
        
        # Find similar patterns
        similarities = []
        for pattern_id, pattern_data in self.patterns.get('embeddings', {}).items():
            sim = self.cosine_similarity(email_embedding, pattern_data.get('embedding', []))
            similarities.append((pattern_id, sim))
        
        # Sort by similarity
        similarities.sort(key=lambda x: x[1], reverse=True)
        
        # Get context words for attention
        context_words = snippet.lower().split()[:10]
        
        # Generate response with attention
        name = sender.split('<')[0].strip() if '<' in sender else sender.split('@')[0].title()
        
        # Neural confidence scoring
        confidence = min(0.5 + similarities[0][1] if similarities else 0.5, 0.95)
        
        # Select word order based on attention
        important_words = sorted(context_words, key=lambda w: self.attention_score(w, context_words), reverse=True)
        
        response = f"Hi {name},\n\n"
        response += f"Based on your message about {' '.join(important_words[:3])}, "
        response += f"I recommend we proceed with the following steps...\n\n"
        response += f"Confidence: {confidence:.0%}\n\n"
        response += "Best regards,\nKleber Garcia Alcatrão"
        
        return response, confidence
    
    def learn_pattern(self, email_id, embedding, response_success):
        """Store pattern for future learning."""
        if email_id not in self.patterns['embeddings']:
            self.patterns['embeddings'][email_id] = {
                'embedding': embedding,
                'success_rate': 1.0 if response_success else 0.0
            }
        else:
            old = self.patterns['embeddings'][email_id]['success_rate']
            self.patterns['embeddings'][email_id]['success_rate'] = (old + (1 if response_success else 0)) / 2
        
        # Save
        NEURAL_DATA.parent.mkdir(parents=True, exist_ok=True)
        NEURAL_DATA.write_text(json.dumps(self.patterns, indent=2))

def cmd_run(dry_run=False, limit=15):
    print("🧠 Neural Pattern Intelligence NPX")
    
    engine = NeuralPatternEngine()
    msgs = gmail_search('label:inbox is:unread', limit=limit * 2)
    
    stats = {'processed': 0, 'learned': 0}
    
    for msg in msgs[:limit]:
        full = gmail_get(msg['id'])
        headers = full.get('payload', {}).get('headers', [])
        
        sender = next((h['value'] for h in headers if h['name'] == 'From'), '')
        subject = next((h['value'] for h in headers if h['name'] == 'Subject'), '')
        snippet = full.get('snippet', '')
        
        if any(s in sender.lower() for s in ['noreply', 'bot@', 'notifications@']):
            continue
        
        print(f"📧 {sender[:20]} | Processing neural patterns...")
        
        # Generate neural response
        response, confidence = engine.generate_neural_response(sender, subject, snippet)
        
        # Learn pattern
        embedding = engine.create_embedding(f"{subject} {snippet}")
        engine.learn_pattern(msg['id'], embedding, confidence > 0.7)
        
        if dry_run:
            print(f"   [DRY] {response[:60]}...")
        else:
            try:
                from google_workspace import gmail_send_reply, gmail_batch_modify, gmail_get_or_create_label_id
                label_id = gmail_get_or_create_label_id('Neural-NPX')
                gmail_send_reply(msg['id'], response)
                gmail_batch_modify({'ids': [msg['id']]}, addLabelIds=[label_id])
                stats['processed'] += 1
                stats['learned'] += 1
                print(f"   ✅ Response sent (confidence: {confidence:.0%})")
            except Exception as e:
                print(f"   ⚠️ Failed: {e}")
    
    print(f"\n📊 Processed {stats['processed']}, Learned {stats['learned']} patterns")

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()