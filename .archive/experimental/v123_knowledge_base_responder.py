#!/usr/bin/env python3
"""
V123 - Knowledge Base Responder
Answers common questions from a built-in knowledge base
"""
import sys
from pathlib import Path
from datetime import datetime, timedelta

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply

LABEL = 'V123-Knowledge-Base'

class KnowledgeBaseResponder:
    def __init__(self):
        self.sig = "Kleber Garcia Alcatrão ✨ Zion Tech Group"
        self.kb = self._build_kb()
    
    def _build_kb(self):
        return {
            'pricing': {
                'keywords': ['price', 'cost', 'pricing', 'quanto', 'custo', 'how much', 'rate', 'valor'],
                'answer': (
                    "Our pricing is competitive and tailored to your needs:\n"
                    "• Web Development: Starting at $500\n"
                    "• App Development: Starting at $800\n"
                    "• IT Support: Starting at $75/hour\n"
                    "• Cloud Solutions: Custom quote\n\n"
                    "Contact us for a detailed proposal: kleber@ziontechgroup.com"
                ),
                'topic': 'Pricing'
            },
            'services': {
                'keywords': ['service', 'offer', 'what do you', 'capabilities', 'solutions', '做什么'],
                'answer': (
                    "Zion Tech Group offers:\n"
                    "• Web & App Development\n"
                    "• IT Infrastructure & Support\n"
                    "• Cloud Solutions (AWS, Azure, GCP)\n"
                    "• AI & Automation Services\n"
                    "• Cybersecurity\n"
                    "• 24/7 Monitoring\n\n"
                    "Visit ziontechgroup.com for full list"
                ),
                'topic': 'Services'
            },
            'support_hours': {
                'keywords': ['hours', 'time', 'when', 'available', 'support time', 'horário', 'aberto'],
                'answer': (
                    "Our support hours:\n"
                    "• Standard: Mon-Fri 9AM-6PM EST\n"
                    "• Premium: 24/7 available\n"
                    "• Emergency: +1 302 464 0950\n\n"
                    "We respond to all inquiries within 2 hours during business hours."
                ),
                'topic': 'Support Hours'
            },
            'turnaround': {
                'keywords': ['turnaround', 'delivery', 'time', 'how long', 'prazo', 'deadline', 'quanto tempo'],
                'answer': (
                    "Typical turnaround times:\n"
                    "• Simple projects: 3-5 business days\n"
                    "• Medium projects: 1-2 weeks\n"
                    "• Complex projects: 3-4 weeks\n\n"
                    "Rush options available — contact us for timelines."
                ),
                'topic': 'Turnaround Time'
            },
            'contact': {
                'keywords': ['contact', 'reach', 'phone', 'email', 'talk', 'falar', 'contato'],
                'answer': (
                    "Contact Zion Tech Group:\n"
                    "• Phone: +1 302 464 0950\n"
                    "• Email: kleber@ziontechgroup.com\n"
                    "• Address: 364 E Main St STE 1008, Middletown DE 19709\n\n"
                    "We look forward to hearing from you!"
                ),
                'topic': 'Contact Information'
            },
            'ai_services': {
                'keywords': ['ai', 'artificial intelligence', 'automation', 'machine learning', 'chatbot', 'inteligência'],
                'answer': (
                    "Our AI Services include:\n"
                    "• AI-powered Email Automation\n"
                    "• Intelligent Chatbots\n"
                    "• Predictive Analytics\n"
                    "• Process Automation\n"
                    "• Natural Language Processing\n\n"
                    "Contact us to discuss your AI needs!"
                ),
                'topic': 'AI Services'
            },
            'web_dev': {
                'keywords': ['website', 'web', 'design', 'development', 'site', 'criar'],
                'answer': (
                    "Our Web Development services:\n"
                    "• Custom Website Development\n"
                    "• E-commerce Solutions\n"
                    "• CMS Integration (WordPress, etc)\n"
                    "• SEO Optimization\n"
                    "• Hosting & Maintenance\n\n"
                    "Starting at $500. Free consultation available!"
                ),
                'topic': 'Web Development'
            },
            'default': {
                'keywords': [],
                'answer': (
                    "Thank you for contacting Zion Tech Group!\n\n"
                    "We have received your inquiry and will respond within 2 hours. "
                    "For urgent matters, please call +1 302 464 0950.\n\n"
                    "Best regards,\nKleber Garcia Alcatrão\nZion Tech Group"
                ),
                'topic': 'General'
            }
        }
    
    def find_best_answer(self, text):
        text_lower = text.lower()
        best_match = None
        best_score = 0
        
        for key, data in self.kb.items():
            if key == 'default':
                continue
            score = 0
            for kw in data['keywords']:
                if kw.lower() in text_lower:
                    score += 1
            if score > best_score:
                best_score = score
                best_match = key
        
        if best_match:
            return self.kb[best_match]
        return self.kb['default']
    
    def generate_response(self, name, kb_entry, subject, snippet):
        topic = kb_entry['topic']
        answer = kb_entry['answer']
        
        return f"""📚 V123 KNOWLEDGE BASE RESPONDER 📚

Olá {name}!

Regarding your inquiry about: {topic}

{answer}

{self.sig}"""

def get_dates():
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

def cmd_run(dry_run=False, limit=10):
    print("📚 V123 Knowledge Base Responder")
    print("=" * 40)
    
    kb = KnowledgeBaseResponder()
    
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
            name = sender.split('<')[0].strip().strip('"') if '<' in sender else sender
            
            subject = headers.get('Subject', '')
            snippet = full.get('snippet', '')
            
            combined_text = f"{subject} {snippet}"
            kb_entry = kb.find_best_answer(combined_text)
            
            response = kb.generate_response(name, kb_entry, subject, snippet)
            
            print(f"📧 {name[:25]}")
            print(f"   Topic: {kb_entry['topic']}")
            print(f"   Thread: {msg['id'][:20]}...")
            
            if not dry_run:
                gmail_send_reply(msg['id'], response)
                print(f"   ✅ Responded")
            else:
                print(f"   ⚡ Dry run")
            
            print()
            
        except Exception as e:
            print(f"Error: {e}")
            continue
    
    print("📚 V123: Knowledge base responses complete")

if __name__ == '__main__':
    import argparse
    p = argparse.ArgumentParser(description='V123 - Knowledge Base Responder')
    p.add_argument('--execute', action='store_true', help='Send real emails')
    p.add_argument('--limit', type=int, default=10, help='Number of emails to process')
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)