#!/usr/bin/env python3
"""
V124 - A/B Testing Responder
Tests different response variants and tracks performance
"""
import sys
from pathlib import Path
from datetime import datetime, timedelta
import json
import hashlib

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_send_reply

LABEL = 'V124-AB-Testing'
STATS_FILE = Path('/tmp/v124_stats.json')

class ABTestResponder:
    def __init__(self):
        self.sig = "Kleber Garcia Alcatrão ✨ Zion Tech Group"
        self.variants = ['A', 'B', 'C']
        self.stats = self._load_stats()
    
    def _load_stats(self):
        if STATS_FILE.exists():
            try:
                with open(STATS_FILE) as f:
                    return json.load(f)
            except:
                pass
        return {'A': 0, 'B': 0, 'C': 0, 'sent': []}
    
    def _save_stats(self):
        try:
            with open(STATS_FILE, 'w') as f:
                json.dump(self.stats, f)
        except:
            pass
    
    def get_variant(self, thread_id):
        # Deterministic assignment based on thread_id
        hash_val = int(hashlib.md5(thread_id.encode()).hexdigest()[:8], 16)
        idx = hash_val % len(self.variants)
        return self.variants[idx]
    
    def generate_variant_a(self, name, dates, subject, snippet):
        """Formal, professional variant"""
        return f"""A V124 - VARIANT A (Professional)

Olá {name}!

Thank you for your inquiry regarding: {subject}

I am pleased to inform you that we can assist you. Please find below the relevant information:

📅 Available Dates: {', '.join(dates)}
🏠 Premium Property Selection

Our team is ready to serve you. For immediate assistance, contact us at +1 302 464 0950.

Best regards,
{self.sig}"""
    
    def generate_variant_b(self, name, dates, subject, snippet):
        """Friendly, warm variant"""
        return f"""B V124 - VARIANT B (Friendly)

Olá {name}! 👋

Great to hear from you! I wanted to personally help you with: {subject}

✨ I'm happy to share our available dates: {', '.join(dates)}
🏡 We have amazing properties ready for you!

Let me know if you'd like to schedule a call — I'd love to help! 

Cheers,
{self.sig}"""
    
    def generate_variant_c(self, name, dates, subject, snippet):
        """Concise, action-oriented variant"""
        return f"""C V124 - VARIANT C (Action-Oriented)

Hi {name},

Quick response: {subject}

Action items:
✓ Available: {', '.join(dates)}
✓ Contact: +1 302 464 0950
✓ Email: kleber@ziontechgroup.com

Reply to confirm your preferred date!

{self.sig}"""
    
    def generate_response(self, name, variant, dates, subject, snippet):
        if variant == 'A':
            return self.generate_variant_a(name, dates, subject, snippet)
        elif variant == 'B':
            return self.generate_variant_b(name, dates, subject, snippet)
        else:
            return self.generate_variant_c(name, dates, subject, snippet)
    
    def log_variant(self, variant, thread_id):
        self.stats[variant] += 1
        self.stats['sent'].append({
            'variant': variant,
            'thread_id': thread_id,
            'timestamp': datetime.now().isoformat()
        })
        self._save_stats()
    
    def get_stats(self):
        total = sum(self.stats[v] for v in self.variants)
        lines = ["📊 V124 A/B Testing Stats", "=" * 30]
        for v in self.variants:
            pct = (self.stats[v] / total * 100) if total > 0 else 0
            lines.append(f"  Variant {v}: {self.stats[v]} ({pct:.0f}%)")
        lines.append(f"  Total sent: {total}")
        return '\n'.join(lines)

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
    print("📊 V124 A/B Testing Responder")
    print("=" * 40)
    
    ab = ABTestResponder()
    
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
            
            variant = ab.get_variant(msg['id'])
            dates = get_dates()
            response = ab.generate_response(name, variant, dates, subject, snippet)
            
            print(f"📧 {name[:25]} | Variant {variant}")
            print(f"   Thread: {msg['id'][:20]}...")
            
            if not dry_run:
                gmail_send_reply(msg['id'], response)
                ab.log_variant(variant, msg['id'])
                print(f"   ✅ Sent Variant {variant}")
            else:
                print(f"   ⚡ Dry run")
            
            print()
            
        except Exception as e:
            print(f"Error: {e}")
            continue
    
    print(ab.get_stats())

if __name__ == '__main__':
    import argparse
    p = argparse.ArgumentParser(description='V124 - A/B Testing Responder')
    p.add_argument('--execute', action='store_true', help='Send real emails')
    p.add_argument('--limit', type=int, default=10, help='Number of emails to process')
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)