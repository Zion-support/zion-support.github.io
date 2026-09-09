#!/usr/bin/env python3
"""
Durable route monitor for Zion Tech Group static site.

Reads automation/reports/monitor-setup-2026-09-07.json,
probes the 15 core routes, applies pass/fail criteria, logs results,
and supports Hermes alert channels.

Does not enable cron; run manually or delegate to cron externally.
"""

import argparse
import json
import os
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import requests
from requests.exceptions import RequestException

REPO_ROOT = Path(__file__).resolve().parents[2]
DEFAULT_SPEC = REPO_ROOT / "automation" / "reports" / "monitor-setup-2026-09-07.json"
DEFAULT_REPORT_DIR = REPO_ROOT / "automation" / "reports"
ALERT_CHANNELS = ["hermes-cron-notify", "email", "system-log"]
PASS_CRITERIA = {
    "status": 200,
    "max_response_ms": 3000,
    "content_checks": [],  # populated from spec
}
FAIL_CRITERIA = {
    "wrong_status": True,
    "response_time_exceeded": True,
    "content_check_failed": True,
}


def utc_now() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def load_spec(path: Path) -> dict[str, Any]:
    if not path.exists():
        raise FileNotFoundError(f"Monitor spec not found: {path}")
    with path.open("r", encoding="utf-8") as f:
        return json.load(f)


def probe_route(base_url: str, route: dict[str, Any]) -> dict[str, Any]:
    path = route.get("path", "/")
    url = base_url.rstrip("/") + path
    expect_status = route.get("expect_status", 200)
    content_checks = route.get("content_checks", [])

    result: dict[str, Any] = {
        "path": path,
        "url": url,
        "expect_status": expect_status,
        "status": None,
        "response_time_ms": None,
        "content_passed": [],
        "content_failed": [],
        "error": None,
        "passed": False,
    }

    try:
        start = datetime.now(timezone.utc)
        resp = requests.get(url, timeout=10, allow_redirects=True)
        elapsed = datetime.now(timezone.utc) - start
        result["status"] = resp.status_code
        result["response_time_ms"] = round(elapsed.total_seconds() * 1000, 1)
        result["final_url"] = resp.url

        # Content checks
        text = resp.text or ""
        for check in content_checks:
            if re.search(check, text, re.IGNORECASE):
                result["content_passed"].append(check)
            else:
                result["content_failed"].append(check)

        # Pass/fail
        status_ok = resp.status_code == expect_status
        time_ok = result["response_time_ms"] < 3000
        content_ok = len(result["content_failed"]) == 0
        result["passed"] = status_ok and time_ok and content_ok

    except RequestException as exc:
        result["error"] = str(exc)
        result["passed"] = False

    return result


def build_report(spec: dict[str, Any], results: list[dict[str, Any]]) -> dict[str, Any]:
    total = len(results)
    passed = sum(1 for r in results if r.get("passed"))
    failed = total - passed
    failures = [r for r in results if not r.get("passed")]
    summary = "PASS" if failed == 0 else "FAIL"

    return {
        "generated_at": utc_now(),
        "spec_name": spec.get("name"),
        "spec_version": spec.get("version"),
        "target": spec.get("target"),
        "summary": {
            "total_routes": total,
            "passed": passed,
            "failed": failed,
            "status": summary,
        },
        "failures": failures,
        "results": results,
    }


def write_report(report: dict[str, Any], report_dir: Path) -> Path:
    report_dir.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    out_path = report_dir / f"route-monitor-{stamp}.json"
    with out_path.open("w", encoding="utf-8") as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    return out_path


def emit_alerts(report: dict[str, Any], channels: list[str]) -> None:
    failed_paths = [r["path"] for r in report.get("failures", [])]
    summary = report.get("summary", {})
    status = summary.get("status", "UNKNOWN")

    for channel in channels:
        if channel == "system-log":
            msg = (
                f"route_monitor status={status} "
                f"passed={summary.get('passed')}/{summary.get('total_routes')} "
                f"failed={','.join(failed_paths) if failed_paths else 'none'}"
            )
            print(f"[system-log] {msg}", file=sys.stderr)
            continue

        if channel == "hermes-cron-notify":
            cmd = ["hermes-cron-notify"]
            if status == "FAIL":
                cmd += ["--priority", "high", "--message", f"Route monitor failure: {', '.join(failed_paths)}"]
            else:
                cmd += ["--priority", "low", "--message", f"Route monitor healthy: {summary.get('passed')} routes OK"]
            _run_command(cmd)

        if channel == "email":
            _send_email_alert(report, status, failed_paths)


def _run_command(cmd: list[str]) -> None:
    try:
        subprocess.run(cmd, check=False, capture_output=True, text=True)
    except FileNotFoundError:
        print(f"[alert] command not found: {' '.join(cmd)}", file=sys.stderr)


def _send_email_alert(report: dict[str, Any], status: str, failed_paths: list[str]) -> None:
    summary = report.get("summary", {})
    subject = f"[ZTG Route Monitor] {status}: {summary.get('passed')}/{summary.get('total_routes')} routes healthy"
    body_lines = [
        f"Generated: {report.get('generated_at')}",
        f"Status: {status}",
        f"Passed: {summary.get('passed')}/{summary.get('total_routes')}",
    ]
    if failed_paths:
        body_lines.append(f"Failed routes: {', '.join(failed_paths)}")
    body = "\n".join(body_lines)

    # Hermes email skill (himalaya/gws) would be wired here.
    print(f"[email-alert] subject={subject!r} body={body!r}", file=sys.stderr)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Route monitor for ZTG static site")
    parser.add_argument(
        "--spec",
        type=Path,
        default=DEFAULT_SPEC,
        help="Path to monitor-setup JSON spec",
    )
    parser.add_argument(
        "--base-url",
        default="https://ziontechgroup.com",
        help="Base URL to probe",
    )
    parser.add_argument(
        "--report-dir",
        type=Path,
        default=DEFAULT_REPORT_DIR,
        help="Directory for reports",
    )
    parser.add_argument(
        "--channels",
        nargs="*",
        default=ALERT_CHANNELS,
        choices=ALERT_CHANNELS,
        help="Alert channels to emit on completion",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print routes without probing",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    spec = load_spec(args.spec)
    routes = spec.get("probe_routes", [])

    if args.dry_run:
        print(f"Dry run: {len(routes)} routes from {args.spec}")
        for route in routes:
            print(f"  {route.get('path')} expect={route.get('expect_status')} checks={route.get('content_checks')}")
        return 0

    results = [probe_route(args.base_url, route) for route in routes]
    report = build_report(spec, results)
    out_path = write_report(report, args.report_dir)

    print(f"Report written: {out_path}", file=sys.stderr)
    print(json.dumps(report["summary"], indent=2, ensure_ascii=False))

    if args.channels:
        emit_alerts(report, args.channels)

    return 0 if report["summary"]["status"] == "PASS" else 1


if __name__ == "__main__":
    sys.exit(main())
