#!/usr/bin/env python3
"""
V447 - AI Email Energy Optimization Engine
Analyzes email writing patterns to reduce cognitive load and improve clarity.
Features: Readability scoring, sentence complexity, passive voice detection, jargon ID, simplification.
CRITICAL: Always enforces reply-all for multi-recipient emails.
"""

import json
import re
import math
from datetime import datetime
from typing import Dict, List, Any


class EmailEnergyOptimizer:
    """Optimizes email content for clarity, readability, and energy efficiency."""
    
    JARGON_TERMS = {
        'synergy', 'leverage', 'paradigm', 'disrupt', 'pivot', 'scalable',
        'bandwidth', 'circle back', 'move the needle', 'deep dive', 'low-hanging fruit',
        'boil the ocean', 'run it up the flagpole', 'net-net', 'actionable insights',
        'value-add', 'best-in-class', 'next-generation', 'cutting-edge', 'robust',
        'utilize', 'facilitate', 'implement', 'optimize', 'streamline'
    }
    
    PASSIVE_INDICATORS = [
        r'\bwas\s+\w+ed\b', r'\bwere\s+\w+ed\b', r'\bis\s+\w+ed\b',
        r'\bare\s+\w+ed\b', r'\bbeen\s+\w+ed\b', r'\bbeing\s+\w+ed\b'
    ]
    
    def __init__(self):
        self.analysis_history: List[Dict] = []
        
    def analyze_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email for energy optimization opportunities."""
        body = email.get('body', '')
        subject = email.get('subject', '')
        recipients = email.get('to', []) + email.get('cc', [])
        
        readability = self._calculate_readability(body)
        sentence_analysis = self._analyze_sentences(body)
        passive_voices = self._detect_passive_voice(body)
        jargon_found = self._detect_jargon(body)
        suggestions = self._generate_suggestions(body, readability, passive_voices, jargon_found)
        optimized_body = self._optimize_content(body)
        
        reply_all_required = len(recipients) > 1
        energy_score = self._calculate_energy_score(readability, passive_voices, jargon_found, sentence_analysis)
        
        return {
            'engine': 'V447_EmailEnergyOptimizer',
            'energy_score': energy_score,
            'readability': readability,
            'sentence_analysis': sentence_analysis,
            'passive_voice_count': len(passive_voices),
            'passive_voices': passive_voices[:5],
            'jargon_found': jargon_found,
            'suggestions': suggestions,
            'optimized_body_preview': optimized_body[:200] + ('...' if len(optimized_body) > 200 else ''),
            'improvement_percentage': self._calc_improvement(body, optimized_body),
            'reply_all_required': reply_all_required,
            'reply_all_enforced': reply_all_required,
            'recipients': recipients,
            'timestamp': datetime.now().isoformat()
        }
    
    def _calculate_readability(self, text: str) -> Dict:
        """Calculate Flesch-Kincaid readability score."""
        sentences = re.split(r'[.!?]+', text)
        sentences = [s.strip() for s in sentences if s.strip()]
        words = re.findall(r'\b\w+\b', text)
        syllables = sum(self._count_syllables(w) for w in words)
        
        if not sentences or not words:
            return {'score': 0, 'grade': 'N/A', 'level': 'empty'}
        
        fk_score = 206.835 - 1.015 * (len(words) / len(sentences)) - 84.6 * (syllables / len(words))
        fk_grade = 0.39 * (len(words) / len(sentences)) + 11.8 * (syllables / len(words)) - 15.59
        
        if fk_score >= 80:
            level = 'easy'
        elif fk_score >= 60:
            level = 'standard'
        elif fk_score >= 40:
            level = 'difficult'
        else:
            level = 'very_difficult'
        
        return {
            'flesch_score': round(fk_score, 1),
            'grade_level': round(fk_grade, 1),
            'level': level,
            'word_count': len(words),
            'sentence_count': len(sentences),
            'avg_words_per_sentence': round(len(words) / len(sentences), 1) if sentences else 0
        }
    
    def _count_syllables(self, word: str) -> int:
        """Count syllables in a word."""
        word = word.lower()
        if len(word) <= 3:
            return 1
        vowels = 'aeiou'
        count = 0
        prev_vowel = False
        for char in word:
            is_vowel = char in vowels
            if is_vowel and not prev_vowel:
                count += 1
            prev_vowel = is_vowel
        if word.endswith('e'):
            count -= 1
        return max(1, count)
    
    def _analyze_sentences(self, text: str) -> Dict:
        """Analyze sentence structure."""
        sentences = re.split(r'[.!?]+', text)
        sentences = [s.strip() for s in sentences if s.strip()]
        
        if not sentences:
            return {'complex': 0, 'simple': 0, 'compound': 0, 'avg_length': 0}
        
        complex_count = 0
        simple_count = 0
        compound_count = 0
        lengths = []
        
        for sent in sentences:
            words = re.findall(r'\b\w+\b', sent)
            lengths.append(len(words))
            
            conjunctions = len(re.findall(r'\b(?:and|but|or|yet|so)\b', sent, re.IGNORECASE))
            subordinate = len(re.findall(r'\b(?:because|although|while|since|if|when|where|that|which)\b', sent, re.IGNORECASE))
            
            if subordinate > 0:
                complex_count += 1
            elif conjunctions > 0:
                compound_count += 1
            else:
                simple_count += 1
        
        return {
            'complex': complex_count,
            'simple': simple_count,
            'compound': compound_count,
            'avg_length': round(sum(lengths) / len(lengths), 1) if lengths else 0,
            'longest_sentence': max(lengths) if lengths else 0,
            'total_sentences': len(sentences)
        }
    
    def _detect_passive_voice(self, text: str) -> List[str]:
        """Detect passive voice constructions."""
        found = []
        for pattern in self.PASSIVE_INDICATORS:
            matches = re.findall(pattern, text, re.IGNORECASE)
            found.extend(matches)
        return found
    
    def _detect_jargon(self, text: str) -> List[Dict]:
        """Detect corporate jargon and buzzwords."""
        found = []
        text_lower = text.lower()
        for term in self.JARGON_TERMS:
            if term in text_lower:
                found.append({
                    'term': term,
                    'suggestion': self._get_jargon_alternative(term)
                })
        return found
    
    def _get_jargon_alternative(self, term: str) -> str:
        """Get plain-language alternative for jargon."""
        alternatives = {
            'synergy': 'cooperation', 'leverage': 'use', 'paradigm': 'model',
            'disrupt': 'change', 'pivot': 'change direction', 'scalable': 'growable',
            'bandwidth': 'capacity', 'circle back': 'discuss later',
            'utilize': 'use', 'facilitate': 'help', 'implement': 'set up',
            'optimize': 'improve', 'streamline': 'simplify', 'robust': 'strong',
            'actionable insights': 'useful findings', 'value-add': 'benefit',
            'best-in-class': 'excellent', 'next-generation': 'new',
            'cutting-edge': 'modern', 'deep dive': 'detailed look'
        }
        return alternatives.get(term, f'simpler word for "{term}"')
    
    def _generate_suggestions(self, body: str, readability: Dict, passive_voices: List, jargon: List) -> List[Dict]:
        """Generate improvement suggestions."""
        suggestions = []
        
        if readability.get('flesch_score', 100) < 60:
            suggestions.append({
                'type': 'readability',
                'priority': 'high',
                'message': f"Readability score is {readability['flesch_score']}. Aim for 60+ for business emails."
            })
        
        if readability.get('avg_words_per_sentence', 0) > 25:
            suggestions.append({
                'type': 'sentence_length',
                'priority': 'high',
                'message': f"Average {readability['avg_words_per_sentence']} words per sentence. Aim for under 20."
            })
        
        if len(passive_voices) > 2:
            suggestions.append({
                'type': 'passive_voice',
                'priority': 'medium',
                'message': f"Found {len(passive_voices)} passive voice constructions. Active voice is clearer."
            })
        
        if jargon:
            suggestions.append({
                'type': 'jargon',
                'priority': 'medium',
                'message': f"Found {len(jargon)} jargon terms. Plain language reduces confusion."
            })
        
        suggestions.append({
            'type': 'reply_all',
            'priority': 'critical',
            'message': 'Always use reply-all when responding to multi-recipient emails.'
        })
        
        return suggestions
    
    def _optimize_content(self, text: str) -> str:
        """Generate optimized version of the content."""
        optimized = text
        for pattern in self.PASSIVE_INDICATORS:
            pass  # Passive voice transformation is complex; flag only
        for term in self.JARGON_TERMS:
            alt = self._get_jargon_alternative(term)
            optimized = re.sub(rf'\b{re.escape(term)}\b', alt, optimized, flags=re.IGNORECASE)
        return optimized
    
    def _calculate_energy_score(self, readability: Dict, passive_voices: List, jargon: List, sentences: Dict) -> float:
        """Calculate overall energy optimization score (0-100)."""
        score = 100.0
        fk = readability.get('flesch_score', 50)
        if fk < 60:
            score -= (60 - fk) * 0.5
        score -= len(passive_voices) * 3
        score -= len(jargon) * 2
        if sentences.get('avg_length', 0) > 25:
            score -= (sentences['avg_length'] - 25) * 1.5
        return max(0, min(100, round(score, 1)))
    
    def _calc_improvement(self, original: str, optimized: str) -> float:
        """Calculate improvement percentage."""
        if original == optimized:
            return 0.0
        changes = sum(1 for a, b in zip(original.split(), optimized.split()) if a != b)
        total = len(original.split())
        return round((changes / total) * 100, 1) if total > 0 else 0.0


def main():
    """Test V447 engine."""
    engine = EmailEnergyOptimizer()
    
    test_email = {
        'from': 'kleber@ziontechgroup.com',
        'to': ['client@acme.com', 'team@ziontechgroup.com'],
        'cc': ['manager@acme.com'],
        'subject': 'Enterprise AI Platform Update',
        'body': 'We would like to leverage our cutting-edge AI platform to facilitate a robust and scalable implementation that will utilize next-generation technology to optimize your workflow. The synergy between our teams will be best-in-class. We need to circle back and deep dive into the actionable insights.'
    }
    
    result = engine.analyze_email(test_email)
    print(json.dumps(result, indent=2))
    print(f"\n✅ Energy Score: {result['energy_score']}/100")
    print(f"✅ Reply-all enforced: {result['reply_all_enforced']}")
    print(f"✅ Jargon found: {len(result['jargon_found'])} terms")
    print(f"✅ Passive voices: {result['passive_voice_count']}")


if __name__ == '__main__':
    main()
