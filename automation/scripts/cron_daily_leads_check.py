#!/usr/bin/env python3
"""
Daily Cron: Check new leads and outreach status for Zion Tech Group growth engine.

This script:
1. Runs the lead reseed (Gmail scan -> new leads from inbox)
2. Counts current leads in the queue
3. Checks outreach send log for today's send/fail counts
4. Reads the growth engine report for current status
5. Writes a daily summary report to reports/daily-leads-check-latest.json
6. Returns a concise summary for delivery to the group

Schedule: daily at 08:00 (before the 09:00 growth loop)
Cron: 0 8 * * *
"""

import json
import os
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

WORKSPACE = Path("/Users/miami2/zion.app/automation")
DATA_DIR = WORKSPACE / "data"
REPORTS_DIR = WORKSPACE / "reports"
REPORTS_DIR.mkdir(parents=True, exist_ok=True)

LEADS_PATH = DATA_DIR / "zion_leads_free.json"
SEND_LOG = Path("/Users/miami2/zion.app/outreach-send-log.jsonl")
OUTREACH_HISTORY = DATA_DIR / "lead-outreach" / "outreach-history.json"
GROWTH_REPORT = REPORTS_DIR / "growth-engine-report-latest.json"
RESEED_SCRIPT = WORKSPACE / "scripts" / "reseed_from_outreach.py"


def run_reseed():
    """Run the Gmail lead reseed script and return its result dict."""
    if not RESEED_SCRIPT.exists():
        return {"error": f"Script not found: {RESEED_SCRIPT}", "returncode": 1}
    try:
        result = subprocess.run(
            [sys.executable, str(RESEED_SCRIPT)],
            cwd=str(WORKSPACE),
            capture_output=True,
            text=True,
            timeout=120,
        )
        return {
            "returncode": result.returncode,
            "stdout": result.stdout[-3000:] if result.stdout else "",
            "stderr": result.stderr[-2000:] if result.stderr else "",
        }
    except subprocess.TimeoutExpired:
        return {"error": f"Timeout after 120s", "returncode": -1}
    except Exception as e:
        return {"error": str(e), "returncode": -1}


def count_leads(path):
    """Count leads in the leads JSON file."""
    try:
        with open(path) as f:
            data = json.load(f)
        if isinstance(data, dict):
            return data.get("total_leads", len(data.get("leads", [])))
        return len(data) if isinstance(data, list) else 0
    except Exception:
        return 0


def parse_send_log(log_path):
    """Parse the outreach send log JSONL and compute summary stats."""
    stats = {
        "total_entries": 0,
        "sent": 0,
        "failed": 0,
        "by_date": {},
        "last_send_ts": None,
    }
    if not log_path.exists():
        return stats
    try:
        with open(log_path) as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    entry = json.loads(line)
                except json.JSONDecodeError:
                    continue
                stats["total_entries"] += 1
                status = entry.get("status", "")
                ts = entry.get("timestamp", "")
                date_key = ts[:10] if ts else "unknown"
                stats["by_date"].setdefault(date_key, {"sent": 0, "failed": 0})
                if status == "sent":
                    stats["sent"] += 1
                    stats["by_date"][date_key]["sent"] += 1
                    if not stats["last_send_ts"] or ts > stats["last_send_ts"]:
                        stats["last_send_ts"] = ts
                elif status == "failed":
                    stats["failed"] += 1
                    stats["by_date"][date_key]["failed"] += 1
    except Exception:
        pass
    return stats


def load_growth_report():
    """Load the latest growth engine report."""
    if not GROWTH_REPORT.exists():
        return None
    try:
        with open(GROWTH_REPORT) as f:
            return json.load(f)
    except Exception:
        return None


def main():
    ts = datetime.now(timezone.utc).isoformat()
    report = {
        "run_at": ts,
        "run_type": "daily_leads_check",
        "leads": {},
        "outreach": {},
        "growth_engine": {},
        "summary": "",
    }

    # 1. Count current leads
    report["leads"]["total_in_queue"] = count_leads(LEADS_PATH)
    report["leads"]["source_file"] = str(LEADS_PATH)

    # 2. Re-run lead reseed (Gmail scan -> new leads)
    reseed_result = run_reseed()
    report["leads"]["reseed"] = reseed_result

    # Count leads after reseed
    report["leads"]["total_after_reseed"] = count_leads(LEADS_PATH)

    # 3. Parse send log for outreach status
    stats = parse_send_log(SEND_LOG)

    # Only include by_date for the last 7 days to keep the report compact
    from datetime import timedelta
    week_ago = (datetime.now(timezone.utc) - timedelta(days=7)).strftime("%Y-%m-%d")
    recent_dates = {k: v for k, v in stats["by_date"].items() if k >= week_ago}
    stats_compact = {
        "total_entries": stats["total_entries"],
        "sent": stats["sent"],
        "failed": stats["failed"],
        "recent_by_date": recent_dates,
        "last_send_ts": stats["last_send_ts"],
    }
    report["outreach"]["send_log"] = stats_compact

    # 4. Load growth engine report
    growth = load_growth_report()
    if growth:
        report["growth_engine"] = {
            "status": growth.get("status"),
            "dry_run": growth.get("dry_run"),
            "send_log_total": growth.get("send_log_total"),
            "send_succeeded": growth.get("send_succeeded"),
            "send_failed": growth.get("send_failed"),
            "last_send_ts": growth.get("last_send_ts"),
            "last_error": growth.get("error"),
        }

    # Build summary
    new_leads = report["leads"]["total_after_reseed"] - report["leads"]["total_in_queue"]
    sent_today = 0
    failed_today = 0
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    if today in stats["by_date"]:
        sent_today = stats["by_date"][today]["sent"]
        failed_today = stats["by_date"][today]["failed"]

    summary_lines = [
        f"📊 Daily Leads & Outreach Check — {ts[:16]}Z",
        f"Leads in queue: {report['leads']['total_after_reseed']} (+{new_leads} from Gmail scan)",
        f"Outreach today: {sent_today} sent, {failed_today} failed",
        f"Outreach total: {stats['sent']} sent, {stats['failed']} failed (across {stats['total_entries']} entries)",
        f"Growth engine: {growth.get('status', 'no report') if growth else 'no report'} (last send: {stats['last_send_ts'] or growth.get('last_send_ts', 'none') if growth else 'none'})",
    ]
    report["summary"] = "\n".join(summary_lines)

    # Save report
    report_path = REPORTS_DIR / "daily-leads-check-latest.json"
    report_path.write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n")
    print(json.dumps(report, indent=2, ensure_ascii=False))
    print(f"\nReport saved to: {report_path}")


if __name__ == "__main__":
    main()
