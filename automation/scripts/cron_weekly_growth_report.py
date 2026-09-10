#!/usr/bin/env python3
"""
Weekly Cron: Growth progress report for Zion Tech Group group.

This script:
1. Aggregates data from all growth engine reports and lead/outreach files
2. Generates a comprehensive weekly growth progress report
3. Saves it to reports/weekly-growth-progress-latest.json
4. Formats a concise Telegram-ready summary for group delivery

Schedule: weekly on Monday at 08:30 (before the weekly team sync)
Cron: 30 8 * * 1
"""

import json
import os
import glob
from datetime import datetime, timezone, timedelta
from pathlib import Path

WORKSPACE = Path("/Users/miami2/zion.app/automation")
DATA_DIR = WORKSPACE / "data"
REPORTS_DIR = WORKSPACE / "reports"
REPORTS_DIR.mkdir(parents=True, exist_ok=True)

LEADS_PATH = DATA_DIR / "zion_leads_free.json"
SEND_LOG = Path("/Users/miami2/zion.app/outreach-send-log.jsonl")
GROWTH_REPORT = REPORTS_DIR / "growth-engine-report-latest.json"
DAILY_CHECK = REPORTS_DIR / "daily-leads-check-latest.json"
SEO_REPORT = REPORTS_DIR / "cron-status-report.json"
CEO_STATUS_PATH = Path("/Users/miami2/zion.app/ceo-status.json")


def load_json(path, default=None):
    if not path.exists():
        return default
    try:
        with open(path) as f:
            return json.load(f)
    except Exception:
        return default


def find_daily_metrics():
    """Find the latest daily-metrics-*.json report."""
    pattern = str(REPORTS_DIR / "daily-metrics-*.json")
    files = sorted(glob.glob(pattern))
    if not files:
        return None
    return Path(files[-1])


def parse_send_log(log_path):
    """Parse send log and return weekly + all-time stats."""
    stats = {
        "total_entries": 0,
        "sent": 0,
        "failed": 0,
        "sent_last_7d": 0,
        "failed_last_7d": 0,
        "by_day": {},
        "last_send_ts": None,
        "last_10_sends": [],
    }
    if not log_path.exists():
        return stats
    week_ago = (datetime.now(timezone.utc) - timedelta(days=7)).isoformat()
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
                stats["by_day"].setdefault(date_key, {"sent": 0, "failed": 0})
                if status == "sent":
                    stats["sent"] += 1
                    stats["by_day"][date_key]["sent"] += 1
                    if ts >= week_ago:
                        stats["sent_last_7d"] += 1
                    if not stats["last_send_ts"] or ts > stats["last_send_ts"]:
                        stats["last_send_ts"] = ts
                    stats["last_10_sends"].insert(0, {
                        "to": entry.get("to", ""),
                        "subject": entry.get("subject", "")[:80],
                        "ts": ts,
                    })
                    stats["last_10_sends"] = stats["last_10_sends"][:10]
                elif status == "failed":
                    stats["failed"] += 1
                    stats["by_day"][date_key]["failed"] += 1
                    if ts >= week_ago:
                        stats["failed_last_7d"] += 1
    except Exception:
        pass
    return stats


def count_by_priority(leads):
    """Count leads by priority."""
    counts = {"alta": 0, "media": 0, "baixa": 0, "unknown": 0}
    for lead in leads:
        p = lead.get("prioridade", "unknown")
        counts[p] = counts.get(p, 0) + 1
    return counts


def count_by_type(leads):
    """Count leads by type."""
    counts = {}
    for lead in leads:
        t = lead.get("tipo", "unknown")
        counts[t] = counts.get(t, 0) + 1
    return dict(sorted(counts.items(), key=lambda x: -x[1]))


def main():
    ts = datetime.now(timezone.utc).isoformat()
    week_start = (datetime.now(timezone.utc) - timedelta(days=7)).strftime("%Y-%m-%d")

    report: dict = {
        "run_at": ts,
        "period": f"{week_start} to {ts[:10]}",
        "run_type": "weekly_growth_progress",
    }

    # 1. Leads
    leads_data = load_json(LEADS_PATH, {"leads": [], "total_leads": 0})
    leads = leads_data.get("leads", [])
    report["leads"] = {
        "total": leads_data.get("total_leads", len(leads)),
        "by_priority": count_by_priority(leads),
        "by_type": count_by_type(leads),
        "generated_at": leads_data.get("generated_at", "unknown"),
        "sources": leads_data.get("sources", []),
    }

    # 2. Outreach stats
    report["outreach"] = parse_send_log(SEND_LOG)

    # 3. Growth engine status
    growth = load_json(GROWTH_REPORT, {})
    report["growth_engine"] = {
        "status": growth.get("status"),
        "dry_run": growth.get("dry_run", False),
        "send_log_total": growth.get("send_log_total", 0),
        "send_succeeded": growth.get("send_succeeded", 0),
        "send_failed": growth.get("send_failed", 0),
        "last_send_ts": growth.get("last_send_ts"),
        "last_error": growth.get("error"),
        "run_id": growth.get("run_id"),
    }

    # 4. Daily check history (if available)
    daily = load_json(DAILY_CHECK, {})
    report["daily_check_ref"] = daily.get("summary", "no daily report")

    # 5. Site health — read from daily-metrics-*.json (has site_coverage_pct, outreach_readiness, actions)
    metrics_path = find_daily_metrics()
    metrics = load_json(metrics_path, {}) if metrics_path else {}
    report["site_health"] = {
        "site_coverage_pct": metrics.get("site_coverage_pct", "N/A"),
        "outreach_readiness": metrics.get("outreach_readiness", "unknown"),
        "actions": metrics.get("actions", []),
        "metrics_file": str(metrics_path) if metrics_path else None,
    }

    # 6. Cron job health (from cron-status-report.json)
    seo = load_json(SEO_REPORT, {})
    report["cron_health"] = {
        "total_jobs": seo.get("total_jobs", 0),
        "ok_count": seo.get("ok_count", 0),
        "error_count": seo.get("error_count", 0),
        "paused_count": seo.get("paused_count", 0),
        "site_working": seo.get("site_working", "unknown"),
        "email_working": seo.get("email_working", "unknown"),
        "critical_issues_count": len(seo.get("critical_issues", [])),
        "recommendations": seo.get("recommendations", []),
    }

    # 7. CEO status
    ceo_status = load_json(CEO_STATUS_PATH, {})
    report["ceo_status"] = {
        "site_online": ceo_status.get("site_status", {}).get("online", "unknown"),
        "deploy_status": ceo_status.get("deploy", {}).get("status", "unknown"),
        "lead_crm_total": ceo_status.get("lead_crm", {}).get("total_leads", 0),
        "outreach_status": ceo_status.get("outreach", {}).get("status", "unknown"),
    }

    # Build Telegram-ready summary
    o = report["outreach"]
    g = report["growth_engine"]
    sh = report["site_health"]
    ch = report["cron_health"]
    cs = report["ceo_status"]
    summary = (
        f"📈 SEMANAL GROWTH REPORT — Zion Tech Group\n"
        f"Período: {report['period']}\n\n"
        f"🎯 LEADS\n"
        f"  Total na fila: {report['leads']['total']}\n"
        f"  Prioridade Alta: {report['leads']['by_priority'].get('alta', 0)}\n"
        f"  Prioridade Média: {report['leads']['by_priority'].get('media', 0)}\n"
        f"  Prioridade Baixa: {report['leads']['by_priority'].get('baixa', 0)}\n"
        f"  Tipos: {', '.join(f'{k}={v}' for k,v in list(report['leads']['by_type'].items())[:5])}\n\n"
        f"📧 OUTREACH (7 dias)\n"
        f"  Enviados: {o['sent_last_7d']}\n"
        f"  Falhas: {o['failed_last_7d']}\n"
        f"  Total histórico: {o['sent']} ok, {o['failed']} falhas\n"
        f"  Último envio: {o['last_send_ts'] or 'nunca'}\n\n"
        f"🚀 GROWTH ENGINE\n"
        f"  Status: {g.get('status', 'N/A')}\n"
        f"  Dry run: {g.get('dry_run', 'N/A')}\n"
        f"  Último erro: {g.get('last_error') or 'nenhum'}\n\n"
        f"🌐 SITE\n"
        f"  Online: {cs['site_online']}\n"
        f"  Deploy: {cs['deploy_status']}\n"
        f"  CRM Leads: {cs['lead_crm_total']}\n"
        f"  Outreach: {cs['outreach_status']}\n"
        f"  Coverage: {sh['site_coverage_pct']}%\n"
        f"  Readiness: {sh['outreach_readiness']}\n\n"
        f"🔧 CRON JOBS\n"
        f"  Total: {ch['total_jobs']} | OK: {ch['ok_count']} | Erro: {ch['error_count']} | Pausado: {ch['paused_count']}\n"
        f"  Site: {ch['site_working']} | Email: {ch['email_working']}\n"
        f"  Issues críticos: {ch['critical_issues_count']}\n\n"
        f"⚠️ AÇÕES: {sh['outreach_readiness']}"
    )
    report["telegram_summary"] = summary

    # Save report
    report_path = REPORTS_DIR / "weekly-growth-progress-latest.json"
    report_path.write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n")
    print(json.dumps(report, indent=2, ensure_ascii=False))
    print(f"\nReport saved to: {report_path}")


if __name__ == "__main__":
    main()
