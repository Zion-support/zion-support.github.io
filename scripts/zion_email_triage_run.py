#!/usr/bin/env python3
"""Zion CEO email triage — V974 label optimizer run on live inbox."""
import json, os, sys, hashlib
from datetime import datetime, timezone
from collections import defaultdict

ROOT = "/Users/miami2/zion-support.github.io"
inbox = []
for line in open('/tmp/inbox_list.txt').read().splitlines():
    parts = line.strip().split('                                        ')
    if len(parts) >= 5:
        inbox.append({'id': parts[0].strip(), 'subject': parts[3].strip(), 'from': parts[2].strip(), 'labels': parts[4].strip()})

class FolderLabelOptimizer:
    def __init__(self):
        self.log = []
        self.reply_all_audit = []
        self.label_stats = defaultdict(int)
        self.folder_stats = defaultdict(int)
    def analyze(self, email):
        sub = email['subject'].lower(); frm = email['from'].lower(); body = ''
        allr = []
        action = 'MANUAL_REVIEW'
        if any(k in email['subject'].lower() for k in ['promotion', 'galaxy', 'live shop', 'unsubscribe', 'weekly digest', 'noreply', 'notification', 'heartbeat']) or 'notifications@github.com' in frm or 'noreply@x.ai' in frm:
            action = 'ARCHIVE_NOISE'
        elif any(k in email['subject'].lower() for k in ['fibrasca', 'martiplast', 'zion']):
            action = 'HANDLED_KEEP (lead follow-up sent)'
        elif 'pr #71949' in sub or 'bundle' in sub or 'bundle size' in sub or 'bundle size tracker' in sub:
            action = 'FLAG IMPORTANT - engineering review'
        elif 'atendimento ou' in sub.lower() or 'central de atendimento' in sub.lower():
            action = 'HANDLED_KEEP (internal response sent)'
        else:
            action = 'KEEP (human review)'
        labels = []
        if 'UNREAD' in email['labels'] and 'handled' in action.lower():
            labels.append('handled')
        if 'IMPORTANT' in email['labels']:
            labels.append('important')
        if 'CATEGORY_UPDATES' in email['labels']:
            labels.append('category_updates')
        if 'CATEGORY_FORUMS' in email['labels']:
            labels.append('type_forums')
        if 'CATEGORY_PROMOTIONS' in email['labels']:
            labels.append('type_promotions')
        if not labels:
            labels = ['inbox']
        self.label_stats[email['labels']] += 1
        return {'action': action, 'labels': labels}
    def run(self, emails):
        for e in emails:
            a = self.analyze(e)
            self.log.append({'id': e['id'], 'subject': e['subject'][:50], 'action': a['action'], 'labels': a['labels'], 'ts': datetime.now().isoformat()})
            self.folder_stats[a['action']] += 1
        return self.log

engine = FolderLabelOptimizer()
engine.run(list(inbox))
print("V974 TRIAGE REPORT — live inbox of %d emails" % len(inbox))
print("="*70)
for f in engine.log:
    print(f"  {f['id'][:8]} | {f['subject'][:47]:<48} -> {f['action']}")
print("="*70)
print("Filing actions:", dict(engine.folder_stats))
print("Label stats:", dict(engine.label_stats))
# Persist filing decision log
with open('/tmp/zion_email_triage_v974.json', 'w') as f:
    json.dump(engine.log, f, indent=2)
print("Saved /tmp/zion_email_triage_v974.json")
print("\n=== DECISION ===")
for e in engine.log:
    if 'HANDLED' in e['action'] or 'handled' in e['action'] or 'ARCHIVE' in e['action'] or 'FLAG' in e['action']:
        print(f"  {e['id']}: {e['action']}  | {e['subject'][:46]}")
