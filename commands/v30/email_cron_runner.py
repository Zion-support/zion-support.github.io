#!/usr/bin/env python3
"""
V30 Email Responder — Daily Cron Runner
Run: python3 commands/v30/email_cron_runner.py
Schedule: every 1h or 30min via crontab
"""
import sys, json
from pathlib import Path
from datetime import datetime, timezone

WORKSPACE = Path(__file__).resolve().parent.parent.parent
DATA = WORKSPACE / "data"

sys.path.insert(0, str(WORKSPACE / "commands" / "v30"))

def run():
    ts = datetime.now(timezone.utc).isoformat()
    print(f"\n{'='*60}")
    print(f"V30 Email Cron Runner — {ts[:19]}")
    print(f"{'='*60}")

    try:
        from intelligent_email_responder_v30 import V30Responder, GMAIL_SEARCH, GMAIL_GET, HAS_GMAIL

        responder = V30Responder()

        if not HAS_GMAIL:
            print("Gmail not connected — running in demo mode")
            # Run demo test
            test_emails = [
                {
                    "id": "cron-test-1",
                    "subject": "URGENT: Production Server Down",
                    "body": "Our main server is not responding. We need immediate assistance!",
                    "from": "cto@bigcorp.io",
                    "cc": ["cfo@bigcorp.io", "devops@bigcorp.io"],
                    "snippet": "Server down, urgent",
                },
                {
                    "id": "cron-test-2",
                    "subject": "Interested in your AI automation platform — pricing",
                    "body": "Hi Kleber, we saw your demo and we're very interested. Can you send pricing?",
                    "from": "vp-sales@techstartup.io",
                    "cc": [],
                    "snippet": "Interested in pricing demo",
                },
                {
                    "id": "cron-test-3",
                    "subject": "Invoice #12345 — Payment Due in 30 Days",
                    "body": "Please find attached invoice #12345 for $4,999 USD. Payment due within 30 days.",
                    "from": "accounting@vendor.com",
                    "cc": [],
                    "snippet": "Invoice payment due",
                },
                {
                    "id": "cron-test-4",
                    "subject": "Meeting Request: Discovery Call — Partnership Opportunity",
                    "body": "Hi Kleber, I'd love to schedule a 30-minute call to discuss potential partnership.",
                    "from": "partnership@globalcorp.com",
                    "cc": ["assistant@globalcorp.com"],
                    "snippet": "Meeting request partnership",
                },
                {
                    "id": "cron-test-5",
                    "subject": "Cancellation Request — Account Termination",
                    "body": "We need to cancel our subscription effective immediately. Please process our refund.",
                    "from": "cancel@RequesterCompany.com",
                    "cc": [],
                    "snippet": "Cancellation subscription termination",
                },
            ]
            processed = 0
            for t in test_emails:
                try:
                    r = responder.process(t)
                    action = r.get("action", r.get("status", "?"))
                    intent = r.get("intent", "?")
                    quality = r.get("quality", "?")
                    reply_all = r.get("reply_all", "?")
                    preview = str(r.get("response_preview", "?"))[:60]
                    status = "✅" if action in ("send", "escalate") else "👁"
                    print(f"  {status} [{action.upper():8}] intent={intent:15} quality={quality} reply_all={reply_all} | {preview}...")
                    processed += 1
                except Exception as e:
                    print(f"  ❌ ERROR processing {t.get('id','?')}: {e}")
            print(f"\n  Processed: {processed}/{len(test_emails)}")
            print(f"  Sent: {responder._stats.get('sent',0)} | Escalated: {responder._stats.get('escalated',0)} | Review: {responder._stats.get('review',0)}")
            summary = responder.run_summary()
            print(f"\n  Run complete — {ts[:19]}")
            return

        # Real Gmail mode
        emails = GMAIL_SEARCH("in:inbox newer_than:1d", limit=20)
        if not emails:
            print("No new emails — exiting")
            return

        print(f"Found {len(emails)} new emails — processing...")
        for em in emails:
            try:
                full = GMAIL_GET(em.get("id", ""))
                if full:
                    r = responder.process(full)
                    action = r.get("action", r.get("status", "?"))
                    intent = r.get("intent", "?")
                    quality = r.get("quality", "?")
                    reply_all = r.get("reply_all", "?")
                    status = "✅" if action in ("send", "escalate") else "👁"
                    print(f"  {status} [{action.upper():8}] intent={intent:15} quality={quality} reply_all={reply_all}")
            except Exception as e:
                print(f"  ❌ Error: {e}")

        summary = responder.run_summary()
        print(f"\n✅ V30 Cron complete — {summary}")

    except Exception as e:
        print(f"❌ CRON FAILED: {e}")
        import traceback; traceback.print_exc()

if __name__ == "__main__":
    run()