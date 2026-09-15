#!/usr/bin/env python3
"""Zion AI Services Autopilot.

Runs daily via .github/workflows/ai-autopilot.yml:
1. Researches the newest AI tools (Google News RSS, no API key needed).
2. Refreshes the 'New - Agentic AI Services' section in public/index.html:
   - updates the month stamp in the heading
   - replaces the auto-trends block between AUTOPILOT markers
3. Writes a run log to cron_output/ai_autopilot.log

Stripe payment links are intentionally NOT auto-created (money-affecting
action stays human-approved). The 3 live links on the page stay fixed.
"""
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from html import escape
from pathlib import Path

PAGE = Path("public/index.html")
LOG = Path("cron_output/ai_autopilot.log")
QUERIES = [
    "new AI tools launch agentic AI platform",
    "AI agents enterprise automation launch",
]
MAX_TRENDS = 5
START = "<!-- AUTOPILOT:TRENDS:START -->"
END = "<!-- AUTOPILOT:TRENDS:END -->"


def fetch_trends():
    seen, trends = set(), []
    for q in QUERIES:
        url = (
            "https://news.google.com/rss/search?q="
            + urllib.parse.quote(q)
            + "&hl=en-US&gl=US&ceid=US:en"
        )
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "zion-autopilot/1.0"})
            root = ET.fromstring(urllib.request.urlopen(req, timeout=30).read())
        except Exception as e:
            print(f"warn: fetch failed for {q!r}: {e}")
            continue
        for item in root.iter("item"):
            title = (item.findtext("title") or "").strip()
            link = (item.findtext("link") or "").strip()
            key = title.lower()[:60]
            if title and link and key not in seen:
                seen.add(key)
                trends.append((title, link))
            if len(trends) >= MAX_TRENDS:
                return trends
    return trends


def main():
    now = datetime.now(timezone.utc)
    html = PAGE.read_text(encoding="utf-8")
    original = html

    trends = fetch_trends()
    items = " · ".join(
        f'<a href="{escape(link, quote=True)}" target="_blank" rel="noopener">{escape(title)}</a>'
        for title, link in trends
    ) or "AI market scan in progress"

    block = (
        f"{START}\n"
        f'  <p class="subheadline" style="font-size:1rem">'
        f"🔎 Trending in AI right now (auto-updated {now:%B %d, %Y}}): {items}</p>\n"
        f"  {END}"
    )

    if START in html and END in html:
        html = re.sub(
            re.escape(START) + r".*?" + re.escape(END),
            block,
            html,
            count=1,
            flags=re.S,
        )
    else:
        # First run: insert trends block right after the AI services intro paragraph.
        anchor = 'Subscribe instantly with secure Stripe checkout.</p>'
        if anchor in html:
            html = html.replace(anchor, anchor + "\n" + block, 1)
        else:
            print("warn: AI services section not found; trends block skipped")

    # Keep the section heading month current.
    html = re.sub(
        r'(<h2 id="ai-services-2026">🚀 New — Agentic AI Services \()[^)]*(\)</h2>)',
        lambda m: m.group(1) + now.strftime("%B %Y") + m.group(2),
        html,
        count=1,
    )

    if html != original:
        PAGE.write_text(html, encoding="utf-8")
        print("homepage updated")
    else:
        print("no changes")

    LOG.parent.mkdir(parents=True, exist_ok=True)
    with LOG.open("a", encoding="utf-8") as f:
        f.write(f"{now.isoformat()} trends={len(trends)} changed={html != original}\n")
    return 0


if __name__ == "__main__":
    import urllib.parse  # noqa: E402  (kept here so header imports stay minimal)
    sys.exit(main())
