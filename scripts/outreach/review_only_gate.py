"""Contain the legacy outreach worker; this entrypoint NEVER authorizes sending.

The legacy candidate generator is retained for internal review only. Live sending
must use a separately reviewed implementation with durable cross-actor dedupe,
seven-day follow-up control, actual RFC Message-ID headers and ownership checks.
This module reads no credentials itself and publishes aggregate diagnostics only.
"""
from __future__ import annotations

import importlib.util
import json
import os
from pathlib import Path
import tempfile
from types import ModuleType
from typing import Any

SCHEMA_VERSION = "2026-10-06-review-only-v1"
STATUSES = frozenset({"blocked_import", "blocked_backend_interface",
    "blocked_auth_unavailable", "blocked_invalid_result",
    "review_generation_completed", "blocked_mutation_attempt", "blocked_worker_error"})


class WriteBlocked(RuntimeError):
    """A legacy worker attempted a mutation while under review-only containment."""


class _ReadRequest:
    def __init__(self, request: Any) -> None:
        self.__request = request

    def execute(self, *args: Any, **kwargs: Any) -> Any:
        return self.__request.execute(*args, **kwargs)


class ReadOnlyGmail:
    """Expose only the read methods required by the existing candidate generator.

    This is an accidental-mutation guard, not a security sandbox for hostile code.
    Do not expose the raw client as a public attribute or pass it to the worker.
    """

    _RESOURCES = frozenset({"users", "messages", "threads", "labels"})
    _READS = frozenset({"list", "get", "getProfile"})

    def __init__(self, resource: Any) -> None:
        self.__resource = resource

    def __getattr__(self, name: str) -> Any:
        if name in self._RESOURCES:
            def resource(*args: Any, **kwargs: Any) -> ReadOnlyGmail:
                return ReadOnlyGmail(getattr(self.__resource, name)(*args, **kwargs))
            return resource
        if name in self._READS:
            def request(*args: Any, **kwargs: Any) -> _ReadRequest:
                return _ReadRequest(getattr(self.__resource, name)(*args, **kwargs))
            return request
        raise WriteBlocked("gmail_mutation_or_unsupported_method_blocked")


def _blocked_mutation(*_args: Any, **_kwargs: Any) -> None:
    raise WriteBlocked("review_only_mutation_blocked")


def _count(value: Any) -> int | None:
    # Booleans, strings, negatives and implausibly large values are not counts.
    return value if type(value) is int and 0 <= value <= 1_000_000 else None


def _report(status: str) -> dict[str, Any]:
    return {
        "schema_version": SCHEMA_VERSION,
        "mode": "review_only",
        "status": status,
        "live_sending_enabled": False,
        "delivery_confirmed": False,
        "sent": 0,
        "draft_candidates": None,
        "skipped_candidates": None,
        "gmail_service_interface_valid": False,
        "auth_evidence": "not_verified",
    }


def run_review_only(worker: ModuleType) -> dict[str, Any]:
    """Run once, with no Gmail mutations or sent/seen ledger mutations permitted.

    A legacy dry-run's `sent` count is renamed `draft_candidates`; it must never
    become a delivery metric. A service=True sentinel is rejected explicitly.
    """
    report = _report("blocked_backend_interface")
    worker.DRY_RUN = True
    worker.REQUIRES_APPROVAL = True
    worker.send_ceo_reply = _blocked_mutation
    worker.record_send = _blocked_mutation
    worker.mark_seen_message_id = _blocked_mutation
    client = getattr(worker, "service", None)
    if client is None:
        report["status"] = "blocked_auth_unavailable"
        return report
    if isinstance(client, bool) or not callable(getattr(client, "users", None)):
        return report
    report["gmail_service_interface_valid"] = True
    worker.service = ReadOnlyGmail(client)
    try:
        result = worker.run_high_frequency_outreach()
        if not isinstance(result, dict):
            report["status"] = "blocked_invalid_result"
        elif result.get("auth_error"):
            report["status"] = "blocked_auth_unavailable"
        else:
            report["status"] = "review_generation_completed"
            report["draft_candidates"] = _count(result.get("sent"))
            report["skipped_candidates"] = _count(result.get("skipped"))
    except WriteBlocked:
        report["status"] = "blocked_mutation_attempt"
    except Exception:
        # Never publish exception messages, provider payloads or contact data.
        report["status"] = "blocked_worker_error"
    return report


def write_report(path: Path, report: dict[str, Any]) -> None:
    """Atomically persist only the fixed aggregate schema, never caller extras."""
    status = report.get("status")
    allowed = _report(status if isinstance(status, str) and status in STATUSES else "blocked_invalid_result")
    allowed["draft_candidates"] = _count(report.get("draft_candidates"))
    allowed["skipped_candidates"] = _count(report.get("skipped_candidates"))
    allowed["gmail_service_interface_valid"] = report.get("gmail_service_interface_valid") is True
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp: str | None = None
    try:
        with tempfile.NamedTemporaryFile("w", dir=path.parent, encoding="utf-8",
                                         delete=False) as handle:
            tmp = handle.name
            json.dump(allowed, handle, ensure_ascii=True, sort_keys=True)
            handle.write("\n")
        os.replace(tmp, path)
    finally:
        if tmp and os.path.exists(tmp):
            os.unlink(tmp)


def main() -> int:
    # Enforce review-only BEFORE importing the legacy module and its auth setup.
    os.environ["OUTREACH_DRY_RUN"] = "1"
    os.environ["OUTREACH_REQUIRES_APPROVAL"] = "true"
    root = Path(__file__).resolve().parents[2]
    target = Path(__file__).with_name("outreach_worker_automation.py")
    report = _report("blocked_import")
    try:
        spec = importlib.util.spec_from_file_location("zion_legacy_review_worker", target)
        if spec is None or spec.loader is None:
            raise RuntimeError("worker_import_unavailable")
        worker = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(worker)
        report = run_review_only(worker)
    except Exception:
        # The surrounding workflow also retains raw worker stdout/stderr privately.
        pass
    output = root / "outreach_monitor" / "review-only-summary.json"
    write_report(output, report)
    print(json.dumps(report, ensure_ascii=True, sort_keys=True))
    # A nonzero exit reports blocked work; workflow diagnostics still run always().
    return 0 if report["status"] == "review_generation_completed" else 2


if __name__ == "__main__":
    raise SystemExit(main())
