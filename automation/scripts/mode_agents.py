#!/usr/bin/env python3
"""
mode_agents.py — specialist mode agents for Zion growth operations.

Modes:
- growth : lead pool maintenance + forge/reporting
- outreach: send path + adapter/backends + throttle gating
- devops : site/crawl/report verification + deploy diagnostics

Usage:
  python3 mode_agents.py growth forge
  python3 mode_agents.py outreach send --to addr --subject s --body b
  python3 mode_agents.py devops routes
"""

from __future__ import annotations

import json
import os
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

BASE = Path("/Users/miami2/zion.app")
AUTOMATION = BASE / "automation"
LEADS_PRIMARY = AUTOMATION / "data" / "zion_leads_free.json"
LEADS_FALLBACK = BASE / "lead-crm" / "outreach_ready_canonical.json"
LIVE_SEND_CYCLE_REPORT = AUTOMATION / "reports" / "live-discovered-send-cycle-latest.json"
GOG_ACCOUNT = "kleber@ziontechgroup.com"
COMPOSIO_SEND_ADAPTER = AUTOMATION / "scripts" / "composio_send_adapter.py"
SEND_V2 = AUTOMATION / "send_cold_outreach_v2.py"


def die(msg: str) -> int:
    print(f"ERROR: {msg}", file=sys.stderr)
    return 2


def ensure(cond: bool, msg: str) -> None:
    if not cond:
        raise SystemExit(die(msg))


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


# ==============================
# Shared
# ==============================

def _load_json(path: Path):
    if not path.exists():
        return None
    try:
        with open(path) as f:
            return json.load(f)
    except Exception:
        return None


def _write_json(path: Path, obj) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(obj, ensure_ascii=False, indent=2) + "\n")


# ==============================
# Growth Agent
# ==============================

class GrowthAgent:
    name = "growth"

    def run(self, action: str, rest: list[str] | None = None) -> int:
        action = (action or "forge").lower().strip()
        if action == "forge":
            return self._forge()
        if action == "report":
            return self._report()
        raise SystemExit(die(f"Unsupported growth action: {action}"))

    def _forge(self) -> int:
        ensure(SEND_V2.exists(), f"Missing sender module: {SEND_V2}")
        env = os.environ.copy()
        env["ZION_SEND_ADAPTER"] = "0"
        env["ZION_SEND_ADAPTER_TRIGGER"] = "manual"
        r = subprocess.run([sys.executable, str(SEND_V2)], capture_output=True, text=True, env=env)
        out = (r.stdout or "").strip()
        err = (r.stderr or "").strip()
        if out:
            print(out)
        if err:
            print(err, file=sys.stderr)
        print(f"mode=growth action=forge exit={r.returncode} ts={now_iso()}")
        return r.returncode if r.returncode == 0 else 1

    def _report(self) -> int:
        data = _load_json(LEADS_PRIMARY) or {}
        leads = []
        if isinstance(data, dict):
            leads = data.get("leads", [])
        elif isinstance(data, list):
            leads = data
        report = {
            "mode": "growth",
            "action": "report",
            "ts": now_iso(),
            "lead_file": str(LEADS_PRIMARY),
            "lead_count": len(leads),
            "fallback_exists": LEADS_FALLBACK.exists(),
            "status": "ok",
        }
        print(json.dumps(report, ensure_ascii=False))
        return 0


# ==============================
# Outreach Agent
# ==============================

class OutreachAgent:
    name = "outreach"

    def run(self, action: str, rest: list[str] | None = None) -> int:
        action = (action or "send").lower().strip()
        if action == "send":
            return self._send(rest or [])
        if action == "adapter-status":
            return self._adapter_status()
        if action == "throttle-gate":
            return self._throttle_gate()
        raise SystemExit(die(f"Unsupported outreach action: {action}"))

    def _send(self, rest: list[str]) -> int:
        ensure(COMPOSIO_SEND_ADAPTER.exists(), f"Missing adapter: {COMPOSIO_SEND_ADAPTER}")
        if len(rest) < 6:
            raise SystemExit(die("outreach send needs: provider --to addr --subject s --body b"))
        provider = rest[0].lower()
        if provider not in {"gmail", "resend", "brevo"}:
            raise SystemExit(die("outreach send provider must be gmail|resend|brevo"))
        cmd = [sys.executable, str(COMPOSIO_SEND_ADAPTER), provider] + rest[1:]
        r = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
        out = (r.stdout or "").strip()
        err = (r.stderr or "").strip()
        if out:
            print(out)
        if err:
            print(err, file=sys.stderr)
        print(f"mode=outreach action=send provider={provider} exit={r.returncode} ts={now_iso()}")
        return r.returncode if r.returncode == 0 else 1

    def _adapter_status(self) -> int:
        api_key_value = os.environ.get("COMPOSIO_API_KEY") or ""
        status = {
            "mode": "outreach",
            "action": "adapter-status",
            "ts": now_iso(),
            "composio_adapter": str(COMPOSIO_SEND_ADAPTER),
            "exists": COMPOSIO_SEND_ADAPTER.exists(),
            "api_key_set": bool(api_key_value.strip()),
            "send_v2": str(SEND_V2),
            "send_v2_exists": SEND_V2.exists(),
        }
        print(json.dumps(status, ensure_ascii=False))
        return 0

    def _throttle_gate(self) -> int:
        if not LIVE_SEND_CYCLE_REPORT.exists():
            print(json.dumps({"mode": "outreach", "action": "throttle-gate", "status": "unknown", "reason": "missing report"}, ensure_ascii=False))
            return 0
        try:
            data = _load_json(LIVE_SEND_CYCLE_REPORT) or {}
            errs = data.get("errors", []) or []
            retries = []
            for e in errs:
                txt = e.get("error", "") if isinstance(e, dict) else str(e)
                if "Retry after " in txt:
                    part = txt.split("Retry after ", 1)[1].split(" (Mail", 1)[0].strip()
                    try:
                        retries.append(datetime.fromisoformat(part.replace("Z", "+00:00")))
                    except Exception:
                        pass
            now = datetime.now(timezone.utc)
            blocked = bool(retries and now < max(retries))
            out = {
                "mode": "outreach",
                "action": "throttle-gate",
                "ts": now_iso(),
                "status": "blocked" if blocked else "cold",
                "max_retry_after": max(retries).isoformat() if retries else None,
                "now": now.isoformat(),
                "send_attempted": data.get("send_attempted"),
                "send_succeeded": data.get("send_succeeded"),
                "send_failed": data.get("send_failed"),
            }
            print(json.dumps(out, ensure_ascii=False))
            return 0 if not blocked else 2
        except Exception as e:
            raise SystemExit(die(f"throttle gate failed: {e}"))


# ==============================
# DevOps Agent
# ==============================

class DevOpsAgent:
    name = "devops"

    def run(self, action: str, rest: list[str] | None = None) -> int:
        action = (action or "routes").lower().strip()
        if action == "routes":
            return self._routes()
        if action == "integrity":
            return self._integrity()
        raise SystemExit(die(f"Unsupported devops action: {action}"))

    def _routes(self) -> int:
        routes = [
            "/", "/services/", "/solutions/", "/case-studies/", "/pricing/",
            "/contact/", "/about/", "/partners/", "/industries/", "/blog/",
            "/tools/ai-quick-audit/", "/tools/phishing-analyzer/", "/roi-calculator/",
        ]
        print(json.dumps({"mode": "devops", "action": "routes", "routes": routes, "note": "route set"}, ensure_ascii=False))
        return 0

    def _integrity(self) -> int:
        integrity = AUTOMATION / "site_integrity_report.json"
        data = _load_json(integrity)
        out = {
            "mode": "devops",
            "action": "integrity",
            "ts": now_iso(),
            "report_file": str(integrity),
            "exists": integrity.exists(),
            "data": data,
        }
        print(json.dumps(out, ensure_ascii=False, default=str))
        return 0


# ==============================
# Router
# ==============================

AGENTS = {
    GrowthAgent.name: GrowthAgent(),
    OutreachAgent.name: OutreachAgent(),
    DevOpsAgent.name: DevOpsAgent(),
}


def main() -> int:
    args = sys.argv[1:]
    if not args or args[0] in ("-h", "--help", "help"):
        print(__doc__.strip())
        print("Agents:", ", ".join(sorted(AGENTS)))
        return 0
    mode = args[0].lower().strip()
    if mode not in AGENTS:
        print(f"ERROR: Unknown mode agent '{mode}'. Available: {', '.join(sorted(AGENTS))}", file=sys.stderr)
        return 2
    agent = AGENTS[mode]
    return agent.run(args[1] if len(args) > 1 else "", args[2:] if len(args) > 2 else [])


if __name__ == "__main__":
    raise SystemExit(main())
