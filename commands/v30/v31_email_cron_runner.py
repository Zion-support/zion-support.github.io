#!/usr/bin/env python3
"""
V31 Email Orchestrator Cron Runner
Schedules: every 15 minutes (or via hermes cron job)
Contact: kleber@ziontechgroup.com | +1 302 464 0950
"""

import sys, json
from pathlib import Path

WORKSPACE = Path('/Users/miami2/zion.app')
sys.path.insert(0, str(WORKSPACE / 'commands'))

from v30.intelligent_email_responder_v31 import V31EmailOrchestrator

# ── Google Workspace integration ──────────────────────────────
try:
    from google_workspace import gmail_search, gmail_get, gmail_get_or_create_label_id
    HAS_GMAIL = True
except Exception:
    HAS_GMAIL = False
    gmail_search = lambda q, limit=20: []
    gmail_get = lambda i: {}

LABEL_NAME = 'V31/processed'
PROCESSED_LABEL_ID = None

def mark_processed(message_id: str):
    global PROCESSED_LABEL_ID
    if not PROCESSED_LABEL_ID:
        PROCESSED_LABEL_ID = gmail_get_or_create_label_id(LABEL_NAME)
    if PROCESSED_LABEL_ID:
        try:
            from google_workspace import gmail_batch_modify
            gmail_batch_modify([message_id], add_label_ids=[PROCESSED_LABEL_ID])
        except Exception:
            pass

def run_v31_cycle():
    from datetime import datetime, timezone
    print(f"[V31 CRON] Starting cycle at {datetime.now(timezone.utc).isoformat()}", flush=True)

    orchestrator = V31EmailOrchestrator()

    # ── Step 1: Poll outcomes on tracked emails ─────────────
    if HAS_GMAIL:
        new_outcomes = orchestrator.poll_outcomes(gmail_get, gmail_search)
        if new_outcomes:
            print(f"[V31 CRON] New outcomes: {len(new_outcomes)}", flush=True)

    # ── Step 2: Process due follow-ups ───────────────────────
    due_followups = orchestrator.get_due_followups()
    if due_followups:
        print(f"[V31 CRON] Due follow-ups: {len(due_followups)}", flush=True)

    # ── Step 3: Check for new emails to process ──────────────
    if not HAS_GMAIL:
        print("[V31 CRON] Gmail not available — skipping inbox check", flush=True)
        return

    # Search for unread emails (excluding processed label)
    messages = gmail_search('is:unread -label:V31/processed', limit=20)
    print(f"[V31 CRON] Found {len(messages)} unread emails", flush=True)

    processed = 0
    errors = 0

    for msg_summary in messages:
        mid = msg_summary.get('id')
        if not mid:
            continue

        try:
            msg = gmail_get(mid)
            payload = msg.get('payload', {})
            headers = payload.get('headers', [])

            email_dict = {
                'id': mid,
                'thread_id': msg.get('threadId', ''),
                'sender': next((h['value'] for h in headers if h['name'] == 'From'), ''),
                'subject': next((h['value'] for h in headers if h['name'] == 'Subject'), ''),
                'cc': next((h['value'] for h in headers if h['name'] == 'Cc'), ''),
                'to': next((h['value'] for h in headers if h['name'] == 'To'), ''),
                'snippet': msg.get('snippet', ''),
                'body': msg.get('snippet', ''),
            }

            # Process through V31
            result = orchestrator.process_email(email_dict, dry_run=False)

            action = result.get('v29_result', {}).get('action') or result.get('action', 'unknown')
            print(f"[V31 CRON] Processed {mid[:12]}... → {action}", flush=True)

            mark_processed(mid)
            processed += 1

        except Exception as e:
            print(f"[V31 CRON] Error processing {mid[:12]}: {e}", flush=True)
            errors += 1

    # ── Step 4: Proactive outreach check ─────────────────────
    opportunity = orchestrator.get_outreach_opportunity()
    if opportunity:
        print(f"[V31 CRON] Outreach opportunity: {opportunity.get('sender')} — {opportunity.get('suggestion')}", flush=True)

    print(f"[V31 CRON] Cycle complete: {processed} processed, {errors} errors", flush=True)


if __name__ == '__main__':
    run_v31_cycle()