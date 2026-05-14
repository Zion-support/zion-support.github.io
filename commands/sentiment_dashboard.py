#!/usr/bin/env python3
"""
Client Sentiment Dashboard — Zion Tech Group

Daily scan of client email threads (last 7 days).
LLM classifies sentiment per thread: positive / neutral / negative + rationale.
Aggregates by client domain; flags negative shifts.
Outputs Markdown report + Telegram digest if alerts.

Usage:
  python3 sentiment_dashboard.py [--execute] [--limit 50]
"""

import sys, os, re, json, datetime, argparse
from pathlib import Path

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get, telegram_send
from llm_client import chat

REPORT_DIR = WORKSPACE / 'zion.app' / 'reports' / 'sentiment'
REPORT_DIR.mkdir(parents=True, exist_ok=True)
LOOKBACK_DAYS = 7
DEFAULT_LIMIT = 50

def extract_domain_from_email(address: str) -> str | None:
    m = re.search(r'@([\w.-]+)', address)
    if m:
        domain = m.group(1).lower()
        if domain not in ('gmail.com','yahoo.com','hotmail.com','outlook.com','icloud.com','aol.com'):
            return domain
    return None

def get_client_threads(days: int = LOOKBACK_DAYS, limit: int = DEFAULT_LIMIT) -> list:
    since = (datetime.date.today() - datetime.timedelta(days=days)).isoformat()
    query = f'after:{since} -from:ziontechgroup.com'
    msgs = gmail_search(query, limit=limit*2)
    thread_map = {}
    for m in msgs:
        tid = m.get('threadId')
        if tid and tid not in thread_map:
            thread_map[tid] = m
    threads = list(thread_map.values())[:limit]
    return threads

def get_thread_domain(thread_id: str) -> str | None:
    msgs = gmail_search(f'thread:{thread_id}', limit=5)
    if not msgs:
        return None
    first = gmail_get(msgs[0]['id'])
    hdrs = {h['name']: h['value'] for h in first.get('payload', {}).get('headers', [])}
    from_hdr = hdrs.get('From','')
    return extract_domain_from_email(from_hdr)

def get_thread_body_preview(thread_id: str, max_chars: int = 1000) -> str:
    msgs = gmail_search(f'thread:{thread_id}', limit=10)
    bodies = []
    for m in msgs:
        bodies.append(extract_body_from_gmail_message(m)[:300])
    return "\n---\n".join(bodies)[:max_chars]

def extract_body_from_gmail_message(msg):
    payload = msg.get('payload', {})
    if 'parts' in payload:
        for part in payload['parts']:
            if part.get('mimeType') == 'text/plain':
                data = part.get('body', {}).get('data', '')
                if data:
                    import base64
                    return base64.urlsafe_b64decode(data + '===').decode('utf-8', errors='replace')
    body = payload.get('body', {}).get('data', '')
    if body:
        import base64
        return base64.urlsafe_b64decode(body + '===').decode('utf-8', errors='replace')
    return ''

def classify_sentiment(thread_id: str, domain: str) -> dict:
    preview = get_thread_body_preview(thread_id)
    prompt = (
        "Classify the sentiment of this client email thread.\n"
        "Options: positive, neutral, negative.\n"
        "Return JSON: {\"sentiment\":\"...\", \"rationale\":\"one sentence\"}\n\n"
        f"Client domain: {domain}\n"
        f"Thread excerpt:\n{preview}"
    )
    try:
        resp = chat([{"role":"user","content":prompt}], provider="auto")
        content = resp['content'].strip()
        if '```' in content:
            parts = content.split('```')
            for part in parts:
                if '{' in part:
                    content = part.strip()
                    break
        data = json.loads(content)
        sent = data.get('sentiment','neutral').lower()
        if sent not in ('positive','neutral','negative'):
            sent = 'neutral'
        return {'sentiment': sent, 'rationale': data.get('rationale','')}
    except Exception as e:
        return {'sentiment': 'neutral', 'rationale': f'LLM error: {e}'}

def cmd_run(dry_run: bool, limit: int):
    print("📊 Client Sentiment Dashboard scanning…")
    threads = get_client_threads(limit=limit)
    print(f"   Found {len(threads)} client threads to analyze (limit={limit})")

    domain_stats = {}
    processed = 0
    for t in threads:
        thread_id = t['threadId']
        domain = get_thread_domain(thread_id)
        if not domain:
            continue

        result = classify_sentiment(thread_id, domain)
        sent = result['sentiment']

        if domain not in domain_stats:
            domain_stats[domain] = {'positive':0, 'neutral':0, 'negative':0, 'threads':[]}
        domain_stats[domain][sent] += 1
        domain_stats[domain]['threads'].append({
            'thread_id': thread_id,
            'sentiment': sent,
            'rationale': result['rationale'],
            'subject': t.get('snippet','')[:60],
        })
        processed += 1
        if processed % 10 == 0:
            print(f"   Processed {processed}/{len(threads)}…")

    today = datetime.date.today().isoformat()
    report_path = REPORT_DIR / f"sentiment_{today}.md"
    lines = []
    lines.append(f"# Client Sentiment Dashboard — {today}")
    lines.append("")
    lines.append("## Summary by Domain")
    lines.append("")
    lines.append("| Domain | Positive | Neutral | Negative | Total | Neg Ratio | Flag? |")
    lines.append("|--------|----------|---------|----------|-------|-----------|-------|")

    flagged = []
    for domain, stats in sorted(domain_stats.items()):
        total = stats['positive'] + stats['neutral'] + stats['negative']
        neg_ratio = stats['negative'] / total if total else 0
        flag = (stats['negative'] >= 2) or (neg_ratio >= 0.5)
        if flag:
            flagged.append(domain)
        flag_mark = "🚨" if flag else ""
        lines.append(f"| {domain} | {stats['positive']} | {stats['neutral']} | {stats['negative']} | {total} | {neg_ratio:.0%} | {flag_mark} |")

    lines.append("")
    if flagged:
        lines.append("## 🚨 Flagged Clients (Negative Sentiment)")
        for d in flagged:
            lines.append(f"- {d}")
        lines.append("")
    lines.append("## Thread Details")
    for domain, stats in domain_stats.items():
        for th in stats['threads']:
            lines.append(f"- **{domain}** [{th['thread_id'][:8]}] {th['subject']} → {th['sentiment'].upper()}: {th['rationale']}")

    report_md = "\n".join(lines)
    if dry_run:
        print(f"   [DRY-RUN] Would write {report_path}")
        print(f"   Preview (first 10 lines):")
        for l in lines[:10]:
            print(f"     {l}")
    else:
        report_path.parent.mkdir(parents=True, exist_ok=True)
        report_path.write_text(report_md)
        print(f"   📄 Report saved: {report_path}")

    if flagged and not dry_run:
        try:
            msg = f"📊 Sentiment Alert — {len(flagged)} clients flagged:\n" + "\n".join(f"• {d}" for d in flagged[:10])
            telegram_send(msg)
            print("   📡 Telegram alert sent")
        except Exception as e:
            print(f"   ❌ Telegram failed: {e}")

    print(f"\n✅ Processed {processed} threads; {len(flagged)} clients flagged.")
    if dry_run:
        print("💡 Add --execute to save report and send Telegram.")

def main():
    parser = argparse.ArgumentParser(description='Client Sentiment Dashboard')
    parser.add_argument('--execute', action='store_true', help='Save report & send alerts')
    parser.add_argument('--limit', type=int, default=DEFAULT_LIMIT, help='Max threads to analyze')
    args = parser.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
