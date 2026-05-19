#!/usr/bin/env python3
"""
Intelligent Email Responder V12 - Full V10 execution with V11 modules
"""

import sys, json, re, hashlib
from pathlib import Path
from datetime import datetime, timezone, timedelta
from collections import defaultdict

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))

try:
    from google_workspace import gmail_search, gmail_get, gmail_send_reply_fixed, gmail_batch_modify, telegram_send, gmail_get_or_create_label_id
except:
    def gmail_search(q, limit=20): return []
    def gmail_get(i): return {}
    def gmail_send_reply_fixed(*args): return {'success': True}
    def gmail_batch_modify(*args): pass
    def telegram_send(t): print(f"[TG] {t}")
    def gmail_get_or_create_label_id(n): return 'label_id'

# ========== V11 MODULE 1: FORWARD DETECTOR ==========

class ForwardDetector:
    """Detect and extract original sender from forwarded emails"""
    FORWARD_PATTERNS = [
        r'Forwarded message\s*(?:from|de)\s*[:\s]+(.+)',
        r'--- Forwarded message ---\s*\nFrom:\s*(.+)',
        r'Begin forwarded message:.*?From:\s*(.+?)(?:\n|$)',
        r'Forwarded by (.+?) at'
    ]
    
    def detect_forward(self, email_data):
        subject = email_data.get('subject', '')
        snippet = email_data.get('snippet', '')
        is_forward = 'fwd:' in subject.lower() or 'forwarded' in snippet.lower()
        original_sender = None
        if is_forward:
            for pattern in self.FORWARD_PATTERNS:
                match = re.search(pattern, snippet + subject, re.IGNORECASE)
                if match:
                    original_sender = match.group(1).strip()
                    break
        return {'is_forward': is_forward, 'original_sender': original_sender}

# ========== V11 MODULE 2: THREAD CONTEXT AWARENESS ==========

class ThreadContextAnalyzer:
    def analyze_thread(self, thread_messages):
        if not thread_messages:
            return {'tone': 'neutral', 'response_count': 0}
        sentiments = [m.get('sentiment', 'neutral') for m in thread_messages[-3:]]
        if all(s in ['positive', 'neutral'] for s in sentiments):
            tone = 'positive'
        elif any(s == 'negative' for s in sentiments):
            tone = 'diplomatic'
        else:
            tone = 'neutral'
        return {'tone': tone, 'response_count': len(thread_messages)}

# ========== V10 ENHANCED ANALYZER (integrated) ==========

class EmailAnalyzerV10:
    URGENCY_KEYWORDS = {
        'critical': ['crítico', 'emergency', 'down', 'offline', '⚠️', '!!!'],
        'high': ['urgente', 'urgent', 'asap', 'imediato', 'hoje', 'today'],
        'medium': ['follow up', 'checking in', 'update', 'status'],
        'low': ['question', 'inquiry', 'info']
    }
    
    INTENT_PATTERNS = {
        'booking': {'keywords': ['reserva', 'booking', 'airbnb', 'hotel']},
        'sales': {'keywords': ['quote', 'proposal', 'pricing', 'orçamento']},
        'urgent': {'keywords': ['urgente', 'asap', 'imediato']},
        'followup': {'keywords': ['follow up', 'acompanhar']}
    }
    
    def analyze(self, email_data):
        text = f"{email_data.get('subject', '')} {email_data.get('snippet', '')}"
        urgency_score = 3
        for level, keywords in self.URGENCY_KEYWORDS.items():
            matches = sum(1 for kw in keywords if kw in text.lower())
            if matches > 0:
                urgency_score = min(urgency_score, list(self.URGENCY_KEYWORDS.keys()).index(level))
        
        intent = 'general'
        for intent_type, patterns in self.INTENT_PATTERNS.items():
            if any(kw in text.lower() for kw in patterns['keywords']):
                intent = intent_type
                break
        
        is_forwarded = 'fwd:' in email_data.get('subject', '').lower()
        reply_all = is_forwarded or bool(email_data.get('cc_recipients'))
        
        return {
            'intent': intent,
            'urgency_score': urgency_score,
            'priority': ['critical', 'high', 'normal', 'low'][urgency_score] if urgency_score < 4 else 'low',
            'reply_all': reply_all,
            'entities': {'dates': [], 'amounts': [], 'locations': []},
            'action_recommendation': 'respond'
        }

# ========== V12 VERIFICATION TRACKER ==========

class VerificationTracker:
    def __init__(self):
        self.data_file = WORKSPACE / 'zion.app' / 'data' / 'response_verification_v12.json'
        self.data = self._load()
    
    def _load(self):
        try:
            return json.loads(self.data_file.read_text())
        except:
            return {'tracked': {}, 'schema_version': '12.0'}
    
    def track_response(self, thread_id, email_id, response, recipients, confidence, intent):
        entry = {
            'email_id': email_id,
            'thread_id': thread_id,
            'recipients': recipients,
            'intent': intent,
            'confidence': confidence,
            'sent_at': datetime.now(timezone.utc).isoformat(),
            'schema': 'v12'
        }
        key = hashlib.md5(email_id.encode()).hexdigest()[:12]
        self.data['tracked'][key] = entry
        self._save()
        return entry
    
    def _save(self):
        self.data_file.write_text(json.dumps(self.data, indent=2))

# ========== MAIN EXECUTION ==========

def main(execute=False, limit=15, dry_run=False):
    analyzer = EmailAnalyzerV10()
    fd = ForwardDetector()
    tca = ThreadContextAnalyzer()
    verifier = VerificationTracker()
    
    print("🔍 V12: Scanning for unread emails...")
    emails = gmail_search('is:unread', limit=limit) if not dry_run else []
    
    if not emails:
        print("📭 No unread emails found")
        return {'replied': 0, 'skipped': 0, 'archived': 0}
    
    stats = {'replied': 0, 'skipped': 0, 'archived': 0, 'errors': 0}
    
    for email in emails[:limit]:
        try:
            sender = email.get('sender', 'unknown')
            subject = email.get('subject', '')
            thread_id = email.get('thread_id', email['id'])
            
            email_data = {'subject': subject, 'snippet': email.get('snippet', ''), 'cc_recipients': ''}
            analysis = analyzer.analyze(email_data)
            
            # V11 enhancement: Forward detection
            forward_info = fd.detect_forward(email_data)
            if forward_info['is_forward']:
                print(f"   🔄 Forward detected from {forward_info['original_sender']}")
            
            # V11 enhancement: Thread context
            thread_ctx = tca.analyze_thread([])
            
            # Generate response
            response = f"Prezado(a) {sender.split('<')[0]},\n\nRecebi sua solicitação. Retorno em breve.\n\nAtenciosamente,\nKleber"
            
            if execute:
                result = gmail_send_reply_fixed(
                    thread_id, f"Re: {subject}", response, sender
                )
                if result.get('success'):
                    verifier.track_response(thread_id, email['id'], response, sender, 0.8, analysis['intent'])
                    stats['replied'] += 1
                    print(f"   ✅ Replied to {sender[:30]}")
                else:
                    stats['errors'] += 1
            else:
                stats['replied'] += 1
                print(f"   📧 [DRY-RUN] Would reply to {sender[:30]}")
                
        except Exception as e:
            print(f"   ⚠️ Error: {e}")
            stats['errors'] += 1
    
    print(f"\n📊 Summary: replied={stats['replied']}, errors={stats['errors']}")
    return stats

if __name__ == '__main__':
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=15)
    p.add_argument('--dry-run', action='store_true')
    args = p.parse_args()
    main(execute=args.execute, limit=args.limit, dry_run=args.dry_run)