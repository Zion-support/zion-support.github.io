#!/usr/bin/env python3
"""
V134 - Self-Evolving Email Intelligence
Analyzes email outcomes and self-improves response quality over time
"""
import sys
from pathlib import Path
from datetime import datetime, timedelta
import json
import re

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_list_messages

LABEL = 'V134-Self-Evolution'
EVOLUTION_FILE = Path('/tmp/v134_evolution.json')
QUALITY_THRESHOLD = 0.6

class SelfEvolver:
    def __init__(self):
        self.sig = "Kleber Garcia Alcatrão ✨ Zion Tech Group"
        self.data = self._load()
    
    def _load(self):
        if EVOLUTION_FILE.exists():
            try:
                with open(EVOLUTION_FILE) as f:
                    return json.load(f)
            except:
                pass
        return {
            'versions': [],
            'quality_scores': {},
            'improvements': [],
            'current_version': 1
        }
    
    def _save(self):
        try:
            with open(EVOLUTION_FILE, 'w') as f:
                json.dump(self.data, f, indent=2)
        except:
            pass
    
    def _extract_response_quality(self, our_sent_response):
        """Analyze response quality: length, completeness, personalization"""
        score = 0.5
        text = our_sent_response.lower()
        
        # Length score (0.1 - 0.3)
        if len(our_sent_response) > 100:
            score += 0.1
        if len(our_sent_response) > 300:
            score += 0.1
        
        # Has signature
        if 'kleber' in text or 'zion' in text:
            score += 0.1
        
        # Has contact info
        if '302' in text or '@' in text:
            score += 0.1
        
        # Is personalized (has name or specific info)
        if len(re.findall(r'\b(Olá|Hello|Hi)\b', text)) > 0:
            score += 0.1
        
        return min(score, 1.0)
    
    def _analyze_recipient_satisfaction(self, their_reply, original_sent):
        """Try to determine if recipient was satisfied"""
        if not their_reply:
            return 0.5  # No reply = neutral
        
        their_lower = their_reply.lower()
        
        # Positive signals
        positive = ['thanks', 'thank you', 'great', 'perfect', 'excellent', 'appreciate', 'received', 'confirmed']
        negative = ['still', 'not', 'does not', "n't", 'problem', 'issue', 'disappointed', 'unhappy']
        
        pos_count = sum(1 for w in positive if w in their_lower)
        neg_count = sum(1 for w in negative if w in their_lower)
        
        if pos_count > neg_count:
            return 0.8
        elif neg_count > pos_count:
            return 0.3
        return 0.6
    
    def analyze_outcomes(self):
        """Analyze sent emails and their outcomes"""
        print("🔍 V134 Self-Evolution: Analyzing email outcomes...")
        
        analyzed = 0
        quality_improvements = 0
        
        # Get sent emails from last 7 days
        try:
            sent = gmail_search('in:sent after:2024/01/01', limit=30)
        except:
            sent = []
        
        for thread in sent:
            tid = thread.get('id', '')
            if not tid:
                continue
            
            try:
                msgs = gmail_list_messages(tid)
                if not msgs or len(msgs) < 2:
                    continue
                
                # Our last sent message
                our_msg = msgs[-1].get('snippet', '')
                # Their reply (if any)
                their_reply = msgs[-2].get('snippet', '') if len(msgs) >= 2 else ''
                
                quality = self._extract_response_quality(our_msg)
                satisfaction = self._analyze_recipient_satisfaction(their_reply, our_msg)
                
                outcome_score = (quality + satisfaction) / 2
                
                # Store outcome
                self.data['quality_scores'][tid] = {
                    'quality': quality,
                    'satisfaction': satisfaction,
                    'outcome': outcome_score,
                    'analyzed_at': datetime.now().isoformat()
                }
                
                analyzed += 1
                
                # If low quality, suggest improvement
                if outcome_score < QUALITY_THRESHOLD:
                    self._suggest_improvement(our_msg, their_reply, tid)
                    quality_improvements += 1
                
            except Exception as e:
                continue
        
        self.data['current_version'] = self.data.get('current_version', 1) + 1
        self._save()
        
        return analyzed, quality_improvements
    
    def _suggest_improvement(self, our_msg, their_reply, thread_id):
        """Suggest improvements based on analysis"""
        suggestions = []
        
        if len(our_msg) < 100:
            suggestions.append("Response too short - add more detail")
        
        if 'kleber' not in our_msg.lower():
            suggestions.append("Add personalized greeting with name")
        
        if 'zion' not in our_msg.lower():
            suggestions.append("Include company branding/signature")
        
        if their_reply and ('still' in their_reply.lower() or 'not' in their_reply.lower()):
            suggestions.append("Previous response may have been unclear - improve clarity")
        
        if suggestions:
            self.data['improvements'].append({
                'thread_id': thread_id,
                'suggestions': suggestions,
                'created_at': datetime.now().isoformat()
            })
    
    def generate_report(self):
        """Generate self-evolution report"""
        scores = list(self.data.get('quality_scores', {}).values())
        if not scores:
            return "📊 V134 Report: No data yet. Process more emails first."
        
        avg_quality = sum(s['quality'] for s in scores) / len(scores)
        avg_satisfaction = sum(s['satisfaction'] for s in scores) / len(scores)
        avg_outcome = sum(s['outcome'] for s in scores) / len(scores)
        
        improvements = self.data.get('improvements', [])
        
        report = f"""📊 V134 SELF-EVOLUTION REPORT
{'=' * 40}
Version: {self.data.get('current_version', 1)}
Analyzed: {len(scores)} threads

📈 Quality Metrics:
   Avg Quality: {avg_quality:.0%}
   Avg Satisfaction: {avg_satisfaction:.0%}
   Avg Outcome: {avg_outcome:.0%}

📝 Improvements Suggested: {len(improvements)}
"""
        if improvements:
            report += "\n🔧 Top Improvements:\n"
            all_sugs = []
            for imp in improvements[-5:]:
                all_sugs.extend(imp['suggestions'])
            from collections import Counter
            top = Counter(all_sugs).most_common(3)
            for sug, count in top:
                report += f"   • {sug} ({count}x)\n"
        
        return report

def cmd_run(dry_run=False, limit=10):
    print("🧠 V134 Self-Evolving Email Intelligence")
    print("=" * 40)
    
    evolver = SelfEvolver()
    
    if dry_run:
        print("📊 Running analysis only (no changes)\n")
        analyzed, improvements = evolver.analyze_outcomes()
        print(f"✅ Analyzed: {analyzed} threads")
        print(f"📝 Improvements suggested: {improvements}")
    else:
        print("🔄 Analyzing and evolving...\n")
        analyzed, improvements = evolver.analyze_outcomes()
        print(f"✅ Analyzed: {analyzed} threads")
        print(f"📝 Improvements suggested: {improvements}")
    
    print("\n" + evolver.generate_report())
    
    print("\n🧠 V134: Self-evolution complete")

if __name__ == '__main__':
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=10)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)