#!/usr/bin/env python3
"""
V40-C: Thread Headroom Lock
Blocks auto_send when per-intent thread headroom remaining falls below policy
threshold. Gates before _dispatch_action -> send, preventing runaway thread
depth from exhausting per-intent capacity.

Insertion points:
  L1530  _v25_pipeline:  inject ThreadHeadroomLock.check() before _dispatch_action()
  L2288  _dispatch_action: inject inject_thread_headroom() after _apply_intent_boost()

Wiring:
  from commands.v40_modules.thread_headroom_lock import ThreadHeadroomLock
  _HEADROOM_LOCK = ThreadHeadroomLock()

In _v25_pipeline (before _dispatch_action call at L1530):
  _headroom_block = _HEADROOM_LOCK.check(tid, intent_label, thread_depth=thread_depth)
  if _headroom_block.get("blocked"):
      return add_to_result(email, {... "action": "review",
              "reason": _headroom_block["reason"],
              "headroom_remaining": _headroom_block["remaining"],
              "min_required": _headroom_block["min_required"],
              "elapsed_ms": ms_elapsed()})
"""
from __future__ import annotations
import json
from dataclasses import dataclass, field, asdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

WORKSPACE = Path(__file__).resolve().parent.parent.parent
DATA = WORKSPACE / "data"
POLICY_PATH = DATA / "policies" / "headroom_policies.json"
LOG_PATH = DATA / "logs" / "thread_headroom_lock.log"


@dataclass
class ThreadHeadroomEvent:
    ts: str = field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    gate: str = "thread_headroom"
    thread_id: str = ""
    intent: str = ""
    action: str = ""          # blocked | pass | inject
    remaining: Optional[int] = None
    min_required: Optional[int] = None
    depth: Optional[int] = None
    reason: str = ""

    def to_dict(self) -> dict:
        return asdict(self)


def _log(ev: ThreadHeadroomEvent) -> None:
    try:
        LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
        LOG_PATH.open("a").write(json.dumps(ev.to_dict()) + "\n")
    except Exception:
        pass


def _load_policies() -> Dict[str, Any]:
    """Load headroom policies — defensive on missing file."""
    default = {
        "version": "1.0",
        "policies": {
            "default": {"min_headroom": 2},
            "urgent":    {"min_headroom": 1},
            "sales_lead": {"min_headroom": 3},
            "support_issue": {"min_headroom": 2},
            "meeting":   {"min_headroom": 2},
            "cancellation": {"min_headroom": 1},
        },
    }
    try:
        if POLICY_PATH.exists():
            raw = json.loads(POLICY_PATH.read_text())
            if "policies" in raw:
                default["policies"].update(raw["policies"])
    except Exception:
        pass
    return default



    # Test helper — not for production use
    def _test_set_remaining(lock_obj, thread_id: str, value: int) -> None:
        """Force remaining headroom for testing."""
        lock_obj._remaining_headroom = lambda tid: value

# Test helper — not for production use
def _test_set_remaining(lock_obj, thread_id: str, value: int) -> None:
    """Force remaining headroom for testing."""
    lock_obj._remaining_headroom = lambda tid, _v=value: _v


class ThreadHeadroomLock:
    """Gate that blocks auto_send when remaining headroom < per-intent threshold."""

    def __init__(self):
        self._policies = _load_policies()["policies"]

    def _headroom_for_intent(self, intent: str) -> int:
        return self._policies.get(intent, self._policies.get("default", {})).get("min_headroom", 2)

    def _remaining_headroom(self, thread_id: str) -> int:
        """Approximate: count recent sends for thread from v26_stats + v26_run_log."""
        remaining = 10  # default starting headroom per thread
        try:
            for log_path in [DATA / "v26_run_log.jsonl", DATA / "v26_stats.jsonl"]:
                if not log_path.exists():
                    continue
                for line in log_path.read_text().splitlines()[-50:]:
                    if not line.strip():
                        continue
                    try:
                        rec = json.loads(line)
                        if rec.get("thread_id") == thread_id:
                            if rec.get("action") in ("send", "auto_ack", "auto_send"):
                                remaining -= 1
                    except (json.JSONDecodeError, KeyError):
                        continue
        except Exception:
            pass
        return max(remaining, 0)

    def _thread_depth(self, thread_id: str) -> int:
        """Approximate thread depth from log history."""
        depth = 0
        try:
            log_path = DATA / "v26_run_log.jsonl"
            if log_path.exists():
                for line in log_path.read_text().splitlines()[-100:]:
                    if not line.strip():
                        continue
                    try:
                        rec = json.loads(line)
                        if rec.get("thread_id") == thread_id:
                            depth += 1
                    except (json.JSONDecodeError, KeyError):
                        continue
        except Exception:
            pass
        return depth

    def check(self, thread_id: str, intent_label: str = "",
              thread_depth: Optional[int] = None) -> Dict[str, Any]:
        """Return blocked dict if headroom is exhausted; empty dict means pass."""
        tid = thread_id or ""
        intent = intent_label or "default"
        min_req = self._headroom_for_intent(intent)
        remaining = self._remaining_headroom(tid)
        depth = thread_depth if thread_depth is not None else self._thread_depth(tid)

        if remaining < min_req:
            ev = ThreadHeadroomEvent(
                thread_id=tid, intent=intent, action="blocked",
                remaining=remaining, min_required=min_req,
                depth=depth,
                reason=f"headroom_exhausted intent={intent} remaining={remaining}<min={min_req}")
            _log(ev)
            return {"blocked": True, "reason": ev.reason,
                    "remaining": remaining, "min_required": min_req, "depth": depth}

        ev = ThreadHeadroomEvent(
            thread_id=tid, intent=intent, action="pass",
            remaining=remaining, min_required=min_req, depth=depth)
        _log(ev)
        return {"blocked": False, "remaining": remaining, "min_required": min_req}

    def inject_thread_headroom(self, thread_id: str, intent_label: str = "",
                               thread_depth: Optional[int] = None) -> Dict[str, Any]:
        """V28/43: inject tiny delay header when headroom is tight."""
        result = self.check(thread_id, intent_label, thread_depth)
        if result.get("blocked"):
            return {"injected": True, "delay_ms": 250, "reason": result["reason"],
                    "remaining": result["remaining"]}
        return {"injected": False}
