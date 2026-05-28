#!/usr/bin/env python3
"""
V131 - Autonomous Email Learning System
Learns from email history and improves responses over time
"""
import sys
from pathlib import Path
from datetime import datetime, timedelta
import json

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_list_messages

LABEL = 'V131-Autonomous-Learning'
LEARNED_FILE = Path('/tmp/v131_learned.json')

class AutonomousEmailLearner:
    def __init__(self):
        self.sig = "Kleber Garcia Alcatrão ✨ Zion Tech Group"
        self.data = self._load()
    
    def _load(self):
        if LEARNED_FILE.exists():
            try:
                with open(LEARNED_FILE) as f:
                    return json.load(f)
            except:
                pass
        return {'responses': [], 'patterns': {}, 'stats': {'processed': 0, 'learned': 0}}
    
    def _save(self):
        try:
            with open(LEARNED_FILE, 'w') as f:
                json.dump(self.data, f, indent=2)
        except:
            pass
    
    def learn_from_thread(self, thread_id):
        """Learn from a thread's full conversation"""
        try:
            msgs = gmail_list_messages(thread_id)
            if not msgs or len(msgs) < 2:
                return None
            
            # Last message (our response), second-to-last (their message)
            our_response = msgs[-1].get('snippet', '')[:200]
            their_message = msgs[-2].get('snippet', '')[:200]
            
            # Extract patterns
            entry = {
                'their_message': their_message,
                'our_response': our_response,
                'timestamp': datetime.now().isoformat(),
                'thread_id': thread_id
            }
            
            self.data['responses'].append(entry)
            self.data['stats']['learned'] += 1
            
            # Update pattern frequencies
            words = their_message.lower().split()
            for word in words:
                if len(word) > 4:
                    self.data['patterns'][word] = self.data['patterns'].get(word, 0) + 1
            
            self._save()
            return entry
        except Exception as e:
            return None
    
    def suggest_response(self, their_message):
        """Suggest a response based on learned patterns"""
        if not self.data['responses']:
            return None
        
        msg_lower = their_message.lower()
        best_match = None
        best_score = 0
        
        for entry in self.data['responses']:
            pattern_words = set(entry['their_message'].lower().split())
            msg_words = set(msg_lower.split())
            
            if not pattern_words or not msg_words:
                continue
            
            overlap = len(pattern_words & msg_words)
            total = len(pattern_words | msg_words)
            score = overlap / total if total > 0 else 0
            
            if score > best_score and score > 0.3:
                best_score = score
                best_match = entry
        
        return best_match, best_score

    def get_stats(self):
        return self.data['stats']

def cmd_run():
    print("🧠 V131 Autonomous Email Learning")
    print("=" * 40)
    
    learner = AutonomousEmailLearner()
    
    # Check recent threads for learning
    try:
        threads = gmail_search('in:sent after:2024/01/01', limit=20)
    except:
        threads = []
    
    learned_count = 0
    for thread in threads:
        tid = thread.get('id', '')
        if tid:
            result = learner.learn_from_thread(tid)
            if result:
                learned_count += 1
    
    stats = learner.get_stats()
    print(f"📊 Processed: {stats['processed']} | Learned: {stats['learned']}")
    print(f"   Patterns tracked: {len(learner.data['patterns'])}")
    print(f"   Responses in memory: {len(learner.data['responses'])}")
    print(f"🧠 V131: Learning complete. {learned_count} new entries.")

if __name__ == '__main__':
    cmd_run()