#!/usr/bin/env python3
"""
Daily metrics aggregator for Zion Tech Group.
Reads existing reports and writes a compact daily-metrics JSON.
Usage:
  python3 scripts/daily_metrics_agg.py
  python3 scripts/daily_metrics_agg.py --date 2026-09-07
"""
from pathlib import Path
import json
import sys
import datetime
ROOT = Path(__file__).resolve().parents[1]
REPORTS = ROOT / 'automation' / 'reports'
LEAD_CRM = ROOT / 'lead-crm'


def load_json(path: Path, default=None):
    if not path.exists():
        return default
    try:
        return json.loads(path.read_text())
    except Exception:
        return default


def today_str(date: datetime.date | None = None) -> str:
    return (date or datetime.date.today()).isoformat()


def main() -> int:
    date_arg = None
    if '--date' in sys.argv:
        idx = sys.argv.index('--date')
        if idx + 1 < len(sys.argv):
            date_arg = datetime.date.fromisoformat(sys.argv[idx + 1])
    date = today_str(date_arg)

    kpi = load_json(REPORTS / f'kpi-snapshot-{date}.json', {})
    metrics = load_json(REPORTS / f'daily-metrics-{date}.json', {})
    integrations = load_json(REPORTS / f'integrations-health-{date}.json', {})
    security = load_json(REPORTS / f'security-audit-{date}.json', {})
    seo = load_json(REPORTS / f'seo-audit-{date}.json', {})

    scored = load_json(LEAD_CRM / 'scored_leads_today.json', [])
    if isinstance(scored, list):
        top = sorted(scored, key=lambda x: x.get('score', 0), reverse=True)[:5]
        scored_summary = {
            'count': len(scored),
            'top_domains': [x.get('domain') for x in top],
            'top_scores': [x.get('score') for x in top],
        }
    else:
        scored_summary = {}

    summary = {
        'date': date,
        'generated_at': datetime.datetime.utcnow().isoformat() + 'Z',
        'kpi': kpi,
        'metrics': metrics,
        'integrations': integrations,
        'security': security,
        'seo': seo,
        'scored_leads': scored_summary,
    }
    out = REPORTS / f'daily-metrics-agg-{date}.json'
    out.write_text(json.dumps(summary, ensure_ascii=False, indent=2))
    print(json.dumps({'path': str(out), 'date': date}, ensure_ascii=False))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
