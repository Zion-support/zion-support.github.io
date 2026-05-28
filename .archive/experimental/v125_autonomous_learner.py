#!/usr/bin/env python3
"""
V125 - Autonomous Learning Responder
Learns from email history and suggests previous responses
"""
import sys
from pathlib import Path
from datetime import datetime, timedelta
import json
import re

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply

LABEL = 'V125-Autonomous-Learning'
HISTORY_FILE = Path('/tmp/v125_history.json')
SIMILARITY_THRESHOLD = 0.6

class AutonomousLearner:
    def __init__(self):
        self.sig = "Kleber Garcia Alcatrão ✨ Zion Tech Group"
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
                json.dump(self.history[-100:], f)  # Keep last 100
        except:
            pass
    
    def _normalize_text(self, text):
        # Normalize for comparison
        text = text.lower()
        text = re.sub(r'[^\w\s]', ' ', text)
        text = re.sub(r'\s+', ' ', text).strip()
        return text
    
    def _similarity(self, text1, text2):
        words1 = set(self._normalize_text(text1).split())
        words2 = set(self._normalize_text(text2).split())
        if not words1 or not words2:
            return 0
        intersection = words1 & words2
        union = words1 | words2
        return len(intersection) / len(union)
    
    def _extract_domain(self, email):
        if '<' in email:
            email = email.split('<')[1].rstrip('>')
        if '@' in email:
            return email.split('@')[1].lower()
        return ''
    
    def learn(self, email_data):
        self.history.append({
            'subject': email_data.get('subject', ''),
            'snippet': email_data.get('snippet', ''),
            'sender_domain': email_data.get('sender_domain', ''),
            'response_used': email_data.get('response_used', ''),
            'timestamp': datetime.now().isoformat()
        })
        self._save_history()
    
    def find_similar(self, current_email):
        if not self.history:
            return None
        
        current_text = f"{current_email.get('subject', '')} {current_email.get('snippet', '')}"
        current_domain = self._extract_domain(current_email.get('sender', ''))
        
        best_match = None
        best_score = 0
        
        for entry in self.history:
            # Check subject/snippet similarity
            entry_text = f"{entry.get('subject', '')} {entry.get('snippet', '')}"
            sim = self._similarity(current_text, entry_text)
            
            # Bonus for same domain
            if current_domain and entry.get('sender_domain') == current_domain:
                sim += 0.2
            
            if sim > best_score:
                best_score = sim
                best_match = entry
        
        if best_score >= SIMILARITY_THRESHOLD:
            return best_match, best_score
        return None, 0
    
    def suggest_response(self, name, similar_entry, dates, subject, snippet):
        return f"""🧠 V125 AUTONOMOUS LEARNER 🧠

Olá {name}!

Based on your previous interactions, I've prepared this response:

📋 Reference: {subject}

The suggested approach from our history addresses similar inquiries effectively.
Our available dates: {', '.join(dates)}

If this doesn't fully address your needs, please let me know and I'll customize further!

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
    print("🧠 V125 Autonomous Learning Responder")
    print("=" * 40)
    
    learner = AutonomousLearner()
    
    try:
        msgs = gmail_search('is:unread', limit=limit)
    except Exception as e:
        print(f"Search error: {e}")
        return
    
    print(f"Found {len(msgs)} unread emails")
    print(f"History entries: {len(learner.history)}\n")
    
    for msg in msgs:
        try:
            full = gmail_get(msg['id'])
            headers = {h['name']: h['value'] for h in full.get('payload', {}).get('headers', [])}
            
            sender = headers.get('From', '')
            name = sender.split('<')[0].strip().strip('"') if '<' in sender else sender
            
            subject = headers.get('Subject', '')
            snippet = full.get('snippet', '')
            
            sender_domain = learner._extract_domain(sender)
            
            # Try to find similar previous email
            similar, score = learner.find_similar({
                'subject': subject,
                'snippet': snippet,
                'sender': sender
            })
            
            dates = get_dates()
            
            if similar:
                print(f"🧠 {name[:25]} | Similarity: {score:.0%}")
                print(f"   Found match from: {similar.get('timestamp', 'unknown')[:10]}")
                response = learner.suggest_response(name, similar, dates, subject, snippet)
            else:
                print(f"🧠 {name[:25]} | No similar history")
                response = learner.suggest_response(name, None, dates, subject, snippet)
            
            print(f"   Thread: {msg['id'][:20]}...")
            
            if not dry_run:
                gmail_send_reply(msg['id'], response)
                learner.learn({
                    'subject': subject,
                    'snippet': snippet[:200],
                    'sender_domain': sender_domain,
                    'response_used': f"V125 response at {datetime.now().isoformat()}"
                })
                print(f"   ✅ Learned and responded")
            else:
                print(f"   ⚡ Dry run")
            
            print()
            
        except Exception as e:
            print(f"Error: {e}")
            continue
    
    print("🧠 V125: Learning session complete")

if __name__ == '__main__':
    import argparse
    p = argparse.ArgumentParser(description='V125 - Autonomous Learning Responder')
    p.add_argument('--execute', action='store_true', help='Send real emails')
    p.add_argument('--limit', type=int, default=10, help='Number of emails to process')
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)