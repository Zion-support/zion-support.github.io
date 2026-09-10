#!/usr/bin/env python3
"""Deliver the weekly growth report's Telegram summary to the Zion Agents group."""
import json
import os
import urllib.request
import urllib.parse
import sys

REPORT_PATH = "/Users/miami2/zion.app/automation/reports/weekly-growth-progress-latest.json"
# Zion Agents group (confirmed in cron_jobs_growth.json)
CHAT_ID = "-1003886112318"


def main():
    with open(REPORT_PATH, encoding="utf-8") as f:
        report = json.load(f)
    summary = report.get("telegram_summary", "")
    if not summary:
        print("ERROR: no telegram_summary found in report")
        sys.exit(1)

    bot_token = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    if not bot_token:
        print("ERROR: TELEGRAM_BOT_TOKEN not set")
        sys.exit(1)

    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = urllib.parse.urlencode(
        {"chat_id": CHAT_ID, "text": summary, "parse_mode": "HTML"}
    ).encode("utf-8")
    req = urllib.request.Request(
        url, data=payload, headers={"Content-Type": "application/x-www-form-urlencoded"}
    )
    try:
        resp = urllib.request.urlopen(req, timeout=30)
        raw = resp.read().decode("utf-8")
        print("TELEGRAM API HTTP", resp.status)
        print(raw)
    except Exception as e:
        print("ERROR sending to Telegram:", e)
        sys.exit(1)


if __name__ == "__main__":
    main()
