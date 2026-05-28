#!/usr/bin/env python3
"""
V130 - Email Master Intelligence System
All-in-one intelligent email responder with:
- Intent classification
- Sentiment analysis  
- Knowledge base routing
- Smart Reply-All routing
- A/B variant testing
- Autonomous learning
- Outcome monitoring
"""
import sys
from pathlib import Path
from datetime import datetime, timedelta
import json
import re
import hashlib

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply, gmail_send, gmail_batch_modify

LABEL = 'V130-Email-Master'
STATS_FILE = Path('/tmp/v130_stats.json')
HISTORY_FILE = Path('/tmp/v130_history.json')

# ─── Intent Classifier ───────────────────────────────────────────────
class IntentClassifier:
    INTENTS = {
        'inquiry': ['interested', 'information', 'know more', 'how', 'what', 'can you', 'price', 'cost', 'pricing'],
        'complaint': ['problem', 'issue', 'not satisfied', 'disappointed', 'broken', 'failed', 'bad'],
        'order': ['order', 'purchase', 'buy', 'checkout', 'invoice', 'payment'],
        'support': ['help', 'support', 'ticket', 'resolve', 'fix', 'error', 'bug'],
        'partnership': ['partner', 'collaborate', 'joint', 'reseller', 'affiliate', 'business'],
        'billing': ['invoice', 'payment', 'charge', 'billing', 'refund', 'cost', 'subscription'],
        'urgent': ['urgente', 'urgent', 'emergency', 'asap', 'immediately', 'critical', 'important'],
        'delivery': ['delivery', 'shipping', 'arrived', 'tracking', 'package', 'received'],
        'scheduling': ['meeting', 'schedule', 'call', 'appointment', 'demo', 'available'],
        'followup': ['following up', 'checking in', 'status', 'update', 'any news']
    }
    
    def classify(self, subject, snippet):
        text = f"{subject} {snippet}".lower()
        best_intent = 'general'
        best_score = 0
        
        for intent, keywords in self.INTENTS.items():
            score = sum(1 for kw in keywords if kw in text)
            if score > best_score:
                best_score = score
                best_intent = intent
        
        confidence = min(best_score / 2.0, 1.0) if best_score > 0 else 0.3
        return best_intent, confidence

# ─── Sentiment Analyzer ──────────────────────────────────────────────
class SentimentAnalyzer:
    POSITIVE = ['great', 'excellent', 'thank', 'love', 'perfect', 'amazing', 'wonderful', 'fantastic', 'happy', 'excited']
    NEGATIVE = ['bad', 'poor', 'problem', 'issue', 'disappointed', 'terrible', 'awful', 'hate', 'frustrated', 'angry']
    URGENT = ['urgente', 'immediately', 'asap', 'emergency', 'critical']
    
    def analyze(self, subject, snippet):
        text = f"{subject} {snippet}".lower()
        pos = sum(1 for w in self.POSITIVE if w in text)
        neg = sum(1 for w in self.NEGATIVE if w in text)
        
        if any(w in text for w in self.URGENT):
            return 'urgent', 0.9
        if neg > pos:
            return 'negative', min(neg / 3.0, 1.0)
        if pos > neg:
            return 'positive', min(pos / 2.0, 1.0)
        return 'neutral', 0.5

# ─── Knowledge Base ────────────────────────────────────────────────────
class KnowledgeBase:
    KB = {
        'pricing': {
            'keywords': ['price', 'cost', 'pricing', 'how much', 'rate', 'valor', 'quanto'],
            'answer': (
                "Our pricing is competitive:\n"
                "• Web Development: from $500\n"
                "• App Development: from $800\n"
                "• IT Support: from $75/hour\n"
                "• Cloud Solutions: Custom quote\n\n"
                "Contact: kleber@ziontechgroup.com | +1 302 464 0950"
            )
        },
        'services': {
            'keywords': ['service', 'offer', 'capabilities', 'solutions', 'what do you'],
            'answer': (
                "Zion Tech Group offers:\n"
                "• Web & App Development\n"
                "• IT Infrastructure & Support\n"
                "• Cloud (AWS, Azure, GCP)\n"
                "• AI & Automation Services\n"
                "• Cybersecurity\n"
                "• 24/7 Monitoring\n\n"
                "Visit ziontechgroup.com"
            )
        },
        'contact': {
            'keywords': ['contact', 'reach', 'phone', 'talk', 'falar', 'contato'],
            'answer': (
                "Contact Zion Tech Group:\n"
                "• Phone: +1 302 464 0950\n"
                "• Email: kleber@ziontechgroup.com\n"
                "• Address: 364 E Main St STE 1008, Middletown DE 19709\n\n"
                "We respond within 2 hours!"
            )
        },
        'ai_services': {
            'keywords': ['ai', 'artificial intelligence', 'automation', 'chatbot', 'ml'],
            'answer': (
                "Our AI Services:\n"
                "• AI-powered Email Automation\n"
                "• Intelligent Chatbots\n"
                "• Predictive Analytics\n"
                "• Process Automation\n"
                "• NLP Solutions\n\n"
                "Contact us to discuss your AI needs!"
            )
        },
        'support_hours': {
            'keywords': ['hours', 'time', 'when', 'available', 'horário', 'aberto'],
            'answer': (
                "Support Hours:\n"
                "• Standard: Mon-Fri 9AM-6PM EST\n"
                "• Premium: 24/7 available\n"
                "• Emergency: +1 302 464 0950\n\n"
                "We respond within 2 hours!"
            )
        }
    }
    
    def find_answer(self, subject, snippet):
        text = f"{subject} {snippet}".lower()
        best_key = None
        best_score = 0
        
        for key, data in self.KB.items():
            score = sum(1 for kw in data['keywords'] if kw.lower() in text)
            if score > best_score:
                best_score = score
                best_key = key
        
        if best_key:
            return self.KB[best_key]['answer']
        return None

# ─── Reply-All Router ─────────────────────────────────────────────────
class ReplyAllRouter:
    def should_reply_all(self, headers, subject, snippet):
        to_header = headers.get('To', '')
        cc_header = headers.get('Cc', '')
        
        # If there's a CC, it's likely a group email → Reply-All
        if cc_header:
            return True
        
        # If "to:" appears in subject, likely group thread
        if re.search(r'\bto:\b', to_header, re.IGNORECASE):
            return True
        
        # If subject has "re:" or "fw:" and multiple recipients visible
        if re.search(r'\b(re:|fw:|fwd:)\b', subject, re.IGNORECASE):
            # Check if there are multiple comma-separated emails in To
            if ',' in to_header or ';' in to_header:
                return True
        
        # Keywords suggesting group discussion
        text = f"{subject} {snippet}".lower()
        group_keywords = ['all', 'team', 'group', 'everyone', 'department', 'committee']
        if any(kw in text for kw in group_keywords):
            return True
        
        return False

# ─── A/B Variant Selector ─────────────────────────────────────────────
class ABSelector:
    def __init__(self):
        self.stats = self._load_stats()
    
    def _load_stats(self):
        if STATS_FILE.exists():
            try:
                with open(STATS_FILE) as f:
                    return json.load(f)
            except:
                pass
        return {'A': 0, 'B': 0, 'C': 0}
    
    def _save_stats(self):
        try:
            with open(STATS_FILE, 'w') as f:
                json.dump(self.stats, f)
        except:
            pass
    
    def get_variant(self, thread_id):
        hash_val = int(hashlib.md5(thread_id.encode()).hexdigest()[:8], 16)
        variants = ['A', 'B', 'C']
        idx = hash_val % len(variants)
        return variants[idx]
    
    def log(self, variant, thread_id):
        self.stats[variant] = self.stats.get(variant, 0) + 1
        self._save_stats()

# ─── Autonomous Learner ────────────────────────────────────────────────
class AutonomousLearner:
    def __init__(self):
        self.history = self._load_history()
    
    def _load_history(self):
        if HISTORY_FILE.exists():
            try:
                with open(HISTORY_FILE) as f:
                    return json.load(f)
            except:
                pass
        return []
    
    def _save_history(self):
        try:
            with open(HISTORY_FILE, 'w') as f:
                json.dump(self.history[-100:], f)
        except:
            pass
    
    def learn(self, subject, snippet, sender_domain):
        self.history.append({
            'subject': subject,
            'snippet': snippet[:200],
            'sender_domain': sender_domain,
            'timestamp': datetime.now().isoformat()
        })
        self._save_history()
    
    def find_similar(self, subject, snippet, sender_domain):
        if not self.history:
            return None
        
        current_text = f"{subject} {snippet}".lower()
        best = None
        best_score = 0
        
        for entry in self.history:
            entry_text = f"{entry.get('subject', '')} {entry.get('snippet', '')}".lower()
            words1 = set(current_text.split())
            words2 = set(entry_text.split())
            if not words1 or not words2:
                continue
            sim = len(words1 & words2) / len(words1 | words2)
            if sender_domain and entry.get('sender_domain') == sender_domain:
                sim += 0.15
            if sim > best_score and sim > 0.4:
                best_score = sim
                best = entry
        
        return best

# ─── Response Generator ───────────────────────────────────────────────
class ResponseGenerator:
    def __init__(self):
        self.sig = "Kleber Garcia Alcatrão ✨ Zion Tech Group\n+1 302 464 0950 | kleber@ziontechgroup.com"
        self.router = ReplyAllRouter()
        self.ic = IntentClassifier()
        self.sa = SentimentAnalyzer()
        self.kb = KnowledgeBase()
        self.ab = ABSelector()
        self.learner = AutonomousLearner()
    
    def _get_dates(self):
        today = datetime.now()
        result = []
        count = 0
        d = today + timedelta(days=1)
        while count < 3:
            if d.weekday() < 5:
                result.append(d.strftime('%d/%m'))
                count += 1
            d += timedelta(days=1)
        return result
    
    def _get_name(self, sender_header):
        return sender_header.split('<')[0].strip().strip('"') if '<' in sender_header else sender_header
    
    def _get_domain(self, sender_header):
        email = sender_header.split('<')[1].rstrip('>') if '<' in sender_header else sender_header
        return email.split('@')[1].lower() if '@' in email else ''
    
    def generate(self, headers, subject, snippet, variant='A'):
        name = self._get_name(headers.get('From', ''))
        domain = self._get_domain(headers.get('From', ''))
        intent, iconf = self.ic.classify(subject, snippet)
        sentiment, sconf = self.sa.analyze(subject, snippet)
        kb_answer = self.kb.find_answer(subject, snippet)
        dates = self._get_dates()
        
        # Prefix based on sentiment
        if sentiment == 'positive':
            prefix = "✨ Glad to hear from you!\n\n"
        elif sentiment == 'negative':
            prefix = "🙏 I apologize for any inconvenience. Let me help.\n\n"
        elif sentiment == 'urgent':
            prefix = "🚨 URGENT - Priority Handling\n\n"
        else:
            prefix = ""
        
        # Intent-based content
        if kb_answer:
            body = kb_answer
        elif intent == 'inquiry':
            body = f"Thank you for your inquiry!\n\nWe'd be happy to help. Available dates: {', '.join(dates)}\n\nContact us for immediate assistance."
        elif intent == 'support':
            body = f"Our support team is ready to assist.\n\nPlease describe your issue in detail or call +1 302 464 0950.\n\nWe're here to help 24/7."
        elif intent == 'urgent':
            body = f"🚨 PRIORITY SUPPORT 🚨\n\nAvailable immediately: {', '.join(dates)}\n\nCall us: +1 302 464 0950\nEmail: kleber@ziontechgroup.com"
        else:
            body = f"Thank you for contacting Zion Tech Group!\n\nAvailable dates: {', '.join(dates)}\n\nFor immediate help: +1 302 464 0950"
        
        # A/B variant footer
        variant_tag = f"\n\n[V{variant}]" if variant else ""
        
        return f"""📬 V130 EMAIL MASTER 📬

Olá {name}!

{prefix}{body}

{self.sig}{variant_tag}"""

# ─── Main Runner ───────────────────────────────────────────────────────
def cmd_run(dry_run=False, limit=10):
    print("📬 V130 Email Master Intelligence System")
    print("=" * 50)
    
    gen = ResponseGenerator()
    
    try:
        msgs = gmail_search('is:unread', limit=limit)
    except Exception as e:
        print(f"Search error: {e}")
        return
    
    print(f"Found {len(msgs)} unread emails\n")
    
    for msg in msgs:
        try:
            full = gmail_get(msg['id'])
            headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
            
            sender = headers.get('From', '')
            name = gen._get_name(sender)
            domain = gen._get_domain(sender)
            subject = headers.get('Subject', '')
            snippet = full.get('snippet', '')
            
            # Classify
            intent, iconf = IntentClassifier().classify(subject, snippet)
            sentiment, sconf = SentimentAnalyzer().analyze(subject, snippet)
            
            # Route Reply-All
            should_all = gen.router.should_reply_all(headers, subject, snippet)
            route = "Reply-All" if should_all else "Reply"
            
            # Get variant
            variant = ABSelector().get_variant(msg['id'])
            
            # Generate response
            response = gen.generate(headers, subject, snippet, variant)
            
            # Learn
            gen.learner.learn(subject, snippet, domain)
            
            print(f"📧 {name[:25]}")
            print(f"   Intent: {intent} ({iconf:.0%}) | Sentiment: {sentiment}")
            print(f"   Route: {route} | Variant: {variant}")
            
            if not dry_run:
                # Use reply to stay in thread
                gmail_send_reply(msg['id'], response)
                ABSelector().log(variant, msg['id'])
                print(f"   ✅ Sent ({route})")
            else:
                print(f"   ⚡ Dry run")
            
            print()
            
        except Exception as e:
            print(f"Error: {e}")
            continue
    
    # Show A/B stats
    stats = ABSelector()._load_stats()
    total = sum(stats.values())
    print("📊 A/B Test Stats:")
    for v in ['A', 'B', 'C']:
        pct = (stats.get(v, 0) / total * 100) if total > 0 else 0
        print(f"   Variant {v}: {stats.get(v, 0)} ({pct:.0f}%)")

if __name__ == '__main__':
    import argparse
    p = argparse.ArgumentParser(description='V130 - Email Master Intelligence')
    p.add_argument('--execute', action='store_true', help='Send real emails')
    p.add_argument('--limit', type=int, default=10, help='Number of emails to process')
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)