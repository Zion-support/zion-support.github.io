#!/usr/bin/env python3
"""
V24 Pipeline Test Harness — Tests the batch processing capability.
Mocks Gmail; exercises the V24 pipeline with synthetic emails.
"""

from __future__ import annotations

import sys, json
from pathlib import Path
from datetime import datetime, timezone

COMMANDS = Path.home() / '.openclaw' / 'workspace' / 'zion.app' / 'commands'
sys.path.insert(0, str(COMMANDS))

# ─── Mock Gmail ─────────────────────────────────────────
def _fake_gmail_search(q, limit=20):
    """Mock gmail_search to return our test emails"""
    # Map thread IDs to our test emails
    email_map = {
        'th1': {'id': 'urg-001', 'threadId': 'th1', 'snippet': 'URGENT: Production outage — SLA breach'},
        'th2': {'id': 'sls-001', 'threadId': 'th2', 'snippet': 'Partnership proposal'},
        'th3': {'id': 'pay-001', 'threadId': 'th3', 'snippet': 'Paid $12,500 via wire. Confirmation ABC-123.'},
        'th4': {'id': 'sup-001', 'threadId': 'th4', 'snippet': 'What are Pro plan rate limits for 10 users?'},
        'th5': {'id': 'leg-001', 'threadId': 'th5', 'snippet': 'Your product infringes our patent. Cease activity or we will file suit.'},
    }
    
    results = []
    for thread_id, email_data in email_map.items():
        if len(results) >= limit:
            break
        results.append({
            'id': email_data['id'],
            'threadId': email_data['threadId'],
            'snippet': email_data['snippet']
        })
    return results

def _fake_gmail_get(msg_id):
    """Mock gmail_get to return full email data"""
    # Map message IDs to full email data
    email_data = {
        'urg-001': {
            'id': 'urg-001',
            'threadId': 'th1',
            'payload': {
                'headers': [
                    {'name': 'From', 'value': 'ops@bigcorp.com'},
                    {'name': 'Subject', 'value': 'URGENT: Production outage'},
                    {'name': 'To', 'value': 'kleber@ziontechgroup.com'},
                    {'name': 'Cc', 'value': 'cto@bigcorp.com'},
                ]
            },
            'snippet': 'Production is completely down. Revenue loss every minute. Critical!',
            'body': ''
        },
        'sls-001': {
            'id': 'sls-001',
            'threadId': 'th2',
            'payload': {
                'headers': [
                    {'name': 'From', 'value': 'vp-sales@startup.io'},
                    {'name': 'Subject', 'value': 'Partnership proposal'},
                    {'name': 'To', 'value': 'kleber@ziontechgroup.com'},
                ]
            },
            'snippet': 'We want to partner. Budget allocated. Schedule a call? Deck attached (PDF, 2MB).',
            'body': ''
        },
        'pay-001': {
            'id': 'pay-001',
            'threadId': 'th3',
            'payload': {
                'headers': [
                    {'name': 'From', 'value': 'billing@acme.com'},
                    {'name': 'Subject', 'value': 'Invoice #2024-112 paid'},
                    {'name': 'To', 'value': 'finance@acme.com'},
                ]
            },
            'snippet': 'Paid $12,500 via wire. Confirmation ABC-123. PDF attached.',
            'body': ''
        },
        'sup-001': {
            'id': 'sup-001',
            'threadId': 'th4',
            'payload': {
                'headers': [
                    {'name': 'From', 'value': 'dev@example.com'},
                    {'name': 'Subject', 'value': 'API rate limits — question'},
                ]
            },
            'snippet': 'What are Pro plan rate limits for 10 users?',
            'body': ''
        },
        'leg-001': {
            'id': 'leg-001',
            'threadId': 'th5',
            'payload': {
                'headers': [
                    {'name': 'From', 'value': 'legal@competitor.com'},
                    {'name': 'Subject', 'value': 'Cease and desist — patent US-12345'},
                ]
            },
            'snippet': 'Your product infringes our patent. Cease activity or we will file suit.',
            'body': ''
        },
    }
    return email_data.get(msg_id, {
        'id': msg_id,
        'threadId': msg_id,
        'payload': {'headers': []},
        'snippet': '',
        'body': ''
    })

# Patch before import
import types
google_ws = types.ModuleType('google_workspace')
google_ws.gmail_search = _fake_gmail_search
google_ws.gmail_get = _fake_gmail_get
google_ws.gmail_send_reply_fixed = lambda *a, **kw: {'success': True}
google_ws.telegram_send = lambda t: print(f"[TG] {t}")
sys.modules['google_workspace'] = google_ws

from intelligent_email_responder_v24 import V24Responder  # noqa

# ─── Test Configuration ─────────────────────────────────────
TEST_LIMIT = 5  # Process all 5 test emails

# ─── Run ─────────────────────────────────────────────
print("=== V24 Pipeline Validation Harness ===\n")
resp = V24Responder()
result = resp.process_batch(limit=TEST_LIMIT, dry_run=True)

# ─── Report ─────────────────────────────────────────
print(f"Run ID: {result.get('run_id', 'N/A')}")
print(f"Timestamp: {result.get('ts_start', 'N/A')} to {result.get('ts_end', 'N/A')}")
print(f"Elapsed: {result.get('elapsed_s', 'N/A')}s")
print(f"Processed: {result.get('processed', 0)}")
print(f"Sent: {result.get('sent', 0)}")
print(f"Would-send: {result.get('would_send', 0)}")
print(f"Auto-arch: {result.get('action_archive', 0)}")
print(f"Review: {result.get('action_review', 0)}")
print(f"Pending: {result.get('pending_outcomes', 0)}")
print(f"Errors: {result.get('errors_fetch', 0)}")

# ─── Assertions ─────────────────────────────────────
# Check that we processed emails
if result.get('processed', 0) > 0:
    print("\n✅ V24 processed emails successfully")
else:
    print("\n❌ V24 failed to process emails")

# Check that no errors occurred in fetching (since we're mocking)
if result.get('errors_fetch', 0) == 0:
    print("✅ No fetch errors")
else:
    print(f"❌ {result.get('errors_fetch', 0)} fetch errors occurred")

# For dry-run, sent should be 0
if result.get('sent', 0) == 0:
    print("✅ Dry-run mode: no emails sent")
else:
    print(f"⚠️  Sent {result.get('sent', 0)} emails in dry-run mode")

# Check that we have some actions taken
total_actions = (result.get('action_archive', 0) + 
                result.get('action_review', 0) + 
                result.get('would_send', 0))
if total_actions > 0:
    print(f"✅ Took {total_actions} actions (archive/review/would-send)")
else:
    print("❌ No actions taken")

print("\n=== Test Complete ===")
