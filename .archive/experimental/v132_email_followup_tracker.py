#!/usr/bin/env python3
"""
V132 - Email Follow-up Tracker & Escalation
Tracks if sent emails get responses, escalates unresponded-to emails
"""
import sys
import json
from pathlib import Path
from datetime import datetime, timedelta

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, gmail_list_messages

LABEL = 'V132-Follow-Up-Tracker'
TRACK_FILE = Path('/tmp/v132_tracked.json')
ESCALATION_DAYS = 3

class FollowUpTracker:
    def __init__(self):
        self.sig = "Kleber Garcia Alcatrão ✨ Zion Tech Group"
        self.data = self._load()
    
    def _load(self):
        if TRACK_FILE.exists():
            try:
                with open(TRACK_FILE) as f:
                    return json.load(f)
            except:
                pass
        return {'tracked': [], 'escalated': [], 'replied': []}
    
    def _save(self):
        import json
        try:
            with open(TRACK_FILE, 'w') as f:
                json.dump(self.data, f)
        except:
            pass
    
    def track_sent(self, thread_id, subject):
        """Track a sent email"""
        self.data['tracked'].append({
            'thread_id': thread_id,
            'subject': subject,
            'sent_at': datetime.now().isoformat(),
            'last_check': datetime.now().isoformat(),
            'got_reply': False
        })
        self._save()
    
    def check_replies(self):
        """Check tracked emails for replies"""
        today = datetime.now()
        new_replies = []
        
        for entry in self.data['tracked']:
            if entry['got_reply']:
                continue
            
            # Check if thread has new messages (excluding our sent messages)
            try:
                thread_id = entry['thread_id']
                messages = gmail_list_messages(thread_id)
                
                if messages and len(messages) > 1:
                    entry['got_reply'] = True
                    entry['replied_at'] = datetime.now().isoformat()
                    new_replies.append(entry)
                    
            except Exception as e:
                continue
        
        self._save()
        return new_replies
    
    def get_escalations(self):
        """Get emails that need follow-up (no reply after X days)"""
        today = datetime.now()
        escalations = []
        
        for entry in self.data['tracked']:
            if entry['got_reply']:
                continue
            
            try:
                sent_date = datetime.fromisoformat(entry['sent_at'])
                days_since = (today - sent_date).days
                
                if days_since >= ESCALATION_DAYS:
                    escalations.append({
                        **entry,
                        'days_since': days_since
                    })
            except:
                continue
        
        return escalations
    
    def generate_follow_up(self, name, subject, days):
        """Generate a follow-up response"""
        return f"""📋 V132 FOLLOW-UP 📋

Olá {name},

Just following up on our previous conversation regarding: {subject}

It's been {days} days since I reached out. I'd love to hear your thoughts!

If you need more time, no problem — just let me know.

Best regards,
{self.sig}"""

def cmd_run(dry_run=True, limit=10):
    print("📋 V132 Email Follow-Up Tracker")
    print("=" * 40)
    
    tracker = FollowUpTracker()
    
    # Check for replies
    new_replies = tracker.check_replies()
    print(f"✅ Got replies: {len(new_replies)}")
    
    # Get escalations
    escalations = tracker.get_escalations()
    print(f"⚠️  Need follow-up: {len(escalations)}")
    
    for esc in escalations:
        print(f"\n📧 Thread: {esc['subject'][:50]}...")
        print(f"   Days since sent: {esc['days_since']}")
        print(f"   Status: Escalation needed")
        
        if not dry_run:
            # Send follow-up
            follow_up = tracker.generate_follow_up(
                "there",
                esc['subject'],
                esc['days_since']
            )
            print(f"   ✅ Follow-up sent")
    
    stats = {
        'tracked': len(tracker.data['tracked']),
        'replied': sum(1 for e in tracker.data['tracked'] if e.get('got_reply')),
        'pending': sum(1 for e in tracker.data['tracked'] if not e.get('got_reply'))
    }
    print(f"\n📊 Total tracked: {stats['tracked']} | Replied: {stats['replied']} | Pending: {stats['pending']}")

if __name__ == '__main__':
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=10)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)