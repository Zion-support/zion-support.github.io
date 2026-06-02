#!/usr/bin/env python3
"""
V919: Email Learning & Adaptation Engine
Learns from email patterns, user preferences, and response effectiveness.
Enforces reply-all through learned patterns.
"""
import json, re
from datetime import datetime
from typing import Dict, List, Any
from collections import Counter

class EmailLearningEngine:
    def __init__(self):
        self.user_prefs = {}
        self.pattern_cache = {}
        self.response_eff = {}
        self.metrics = {'emails_processed': 0, 'patterns_learned': 0, 'accuracy': 0.0}

    def analyze_and_learn(self, data: Dict[str, Any]) -> Dict[str, Any]:
        sender = data.get('sender', '')
        body = data.get('body', '')
        recipients = data.get('recipients', [])
        category = data.get('category', 'general')
        outcome = data.get('outcome', 'unknown')
        response = data.get('response_given', '')
        full_text = f"{data.get('subject','')} {body}".lower()
        sp = self._learn_sender(sender, category, full_text)
        cp = self._learn_content(full_text, category)
        if response and outcome != 'unknown':
            self._learn_effectiveness(category, response, outcome, len(recipients))
        resp = self._generate_adaptive(sender, category, full_text, recipients, sp, cp)
        self.metrics['emails_processed'] += 1
        return {'action': 'adaptive_response', 'sender_patterns': sp, 'content_patterns': cp, 'response': resp, 'reply_all_required': len(recipients) > 1, 'metrics': self.metrics}

    def _learn_sender(self, sender, category, text):
        if sender not in self.user_prefs:
            self.user_prefs[sender] = {'cats': Counter(), 'style': 'formal'}
        p = self.user_prefs[sender]
        p['cats'][category] += 1
        inf = sum(1 for w in ['hey','hi','thanks','cheers','btw'] if w in text)
        form = sum(1 for w in ['dear','regards','sincerely'] if w in text)
        p['style'] = 'informal' if inf > form else 'formal'
        self.metrics['patterns_learned'] += 1
        return {'sender': sender, 'style': p['style'], 'top_category': p['cats'].most_common(1)[0][0] if p['cats'] else 'general'}

    def _learn_content(self, text, category):
        words = re.findall(r'\b[a-z]{4,}\b', text)
        freq = Counter(words)
        stops = {'this','that','with','from','have','been','were','will','would','could','should','about','their','there','what','when','where'}
        topics = {w: c for w, c in freq.most_common(10) if w not in stops}
        return {'category': category, 'key_topics': list(topics.keys())[:5]}

    def _learn_effectiveness(self, category, response, outcome, rc):
        if category not in self.response_eff:
            self.response_eff[category] = {'success': 0, 'total': 0, 'ra_success': 0, 'ra_total': 0}
        s = self.response_eff[category]
        s['total'] += 1
        if outcome in ['positive', 'resolved', 'accepted']: s['success'] += 1
        if rc > 1:
            s['ra_total'] += 1
            if outcome in ['positive', 'resolved']: s['ra_success'] += 1
        if s['total'] > 5:
            self.metrics['accuracy'] = s['success'] / s['total']

    def _generate_adaptive(self, sender, category, text, recipients, sp, cp):
        style = sp.get('style', 'formal')
        greeting = "Hi there," if style == 'informal' else "Dear Sender,"
        closing = "Cheers," if style == 'informal' else "Best regards,"
        topics = cp.get('key_topics', [])
        topic_str = f" Regarding {', '.join(topics[:3])}" if topics else ""
        eff = self.response_eff.get(category, {})
        score = eff.get('success', 0) / max(eff.get('total', 1), 1)
        text = f"{greeting}\n\nThank you for your email{topic_str}. I have analyzed your request.\n\n{closing}"
        if len(recipients) > 1:
            text += f"\n\nPlease Reply All to keep all participants informed."
        return {'text': text, 'style': style, 'reply_all': len(recipients) > 1, 'effectiveness_score': score}

def main():
    engine = EmailLearningEngine()
    interactions = [
        {'sender': 'alice@ex.com', 'subject': 'Quick question', 'body': 'Hey, can you send the report? Thanks!', 'recipients': ['team@ex.com'], 'category': 'request', 'response_given': 'Sure', 'outcome': 'positive'},
        {'sender': 'bob@ex.com', 'subject': 'Budget Approval', 'body': 'Dear Team, Please be advised we require budget approval. Regards, Bob', 'recipients': ['fin@ex.com','mgr@ex.com'], 'category': 'approval', 'response_given': 'Will review', 'outcome': 'resolved'},
        {'sender': 'alice@ex.com', 'subject': 'Deliverables update', 'body': 'Hi! Checking in on deliverables. Any update?', 'recipients': ['team@ex.com','lead@ex.com'], 'category': 'followup', 'response_given': 'On track', 'outcome': 'positive'}
    ]
    print("=" * 60)
    print("V919 Email Learning & Adaptation Engine")
    print("=" * 60)
    for i in interactions:
        r = engine.analyze_and_learn(i)
        print(f"\n{i['subject']}: style={r['sender_patterns']['style']}, topics={r['content_patterns']['key_topics'][:3]}, eff={r['response']['effectiveness_score']:.0%}, reply_all={r['reply_all_required']}")
    print(f"\nMetrics: processed={engine.metrics['emails_processed']}, patterns={engine.metrics['patterns_learned']}, accuracy={engine.metrics['accuracy']:.0%}")
    print("\nV919 Learning Engine: OPERATIONAL")

if __name__ == '__main__':
    main()
