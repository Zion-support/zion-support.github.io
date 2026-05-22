#!/usr/bin/env python3
"""
V39-A: intent_policy_db patch
==============================
Preserves V37-A write-guard intact while validating every rule's
sender_domain_in + use_cc entries through V38-B's ACGroupDCSchemaLock
before writing.  Logs structured IntentPolicyPatchEvent; blocks malformed
dc_domain or ac_group_id references.

Import path: commands.v37_modules.intent_policy_write_guard
             commands.v38_modules.acgroup_dc_schema_lock
"""
from __future__ import annotations
import json, sys, re
from dataclasses import dataclass, field, asdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

WORKSPACE = Path(__file__).resolve().parent.parent.parent
V37 = WORKSPACE / "commands" / "v37_modules"
V38 = WORKSPACE / "commands" / "v38_modules"
DATA = WORKSPACE / "data"
POLICY = DATA / "policies" / "intent_policies.json"
LOG_PATH = DATA / "logs" / "intent_policy_patch.log"

sys.path.insert(0, str(V37))
sys.path.insert(0, str(V38))

from intent_policy_write_guard import (
    IntentPolicyDBWriteGuard,
    PolicyReader,
    PolicyRule,
    SAFE_DEFAULTS,
)
from acgroup_dc_schema_lock import ACGroupDCSchemaLock, ACGroupDCSchemaLockEvent

# ── event ────────────────────────────────────────────────────────────────────
_VALID_DOMAIN = re.compile(r"^[a-z0-9.-]+$", re.IGNORECASE)


def _valid_domain(d: str) -> bool:
    return bool(_VALID_DOMAIN.match(d)) and "." in d


@dataclass
class IntentPolicyPatchEvent:
    ts: str = field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    gate: str = "intent_policy_patch"
    action: str = ""            # ratcheted | blocked | write_ok
    rule_idx: Optional[int] = None
    violation: Optional[str] = None
    detail: str = ""
    dc_references: List[str] = field(default_factory=list)
    ac_references: List[str] = field(default_factory=list)

    def to_dict(self) -> dict:
        return asdict(self)


def _log(event: IntentPolicyPatchEvent) -> None:
    try:
        LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
        LOG_PATH.open("a").write(json.dumps(event.to_dict()) + "\n")
    except Exception:
        pass


# ── rule-level checker ───────────────────────────────────────────────────────
def _check_rule(rule: Dict[str, Any], idx: int) -> Optional[IntentPolicyPatchEvent]:
    """Return None if the rule is clean, or a violation event."""
    match = rule.get("match", {})
    then = rule.get("then", {})

    for domain in match.get("sender_domain_in", []):
        if not _valid_domain(domain):
            return IntentPolicyPatchEvent(
                action="blocked", rule_idx=idx,
                violation="bad_sender_domain",
                detail=f"{domain!r} is not a valid domain",
                dc_references=[], ac_references=[domain])

    # dc_domain references → V38-B validate each use_cc entry as a dc_id candidate
    dc_lock = ACGroupDCSchemaLock()
    if match.get("dc_domain"):
        for cc in then.get("use_cc", []):
            ok_v, v_res = dc_lock.validate_dc({"dc_id": cc, "country": "XX", "enabled": True})
            if not ok_v:
                return IntentPolicyPatchEvent(
                    action="blocked", rule_idx=idx,
                    violation="bad_use_cc",
                    detail=f"DC reference failed V38-B schema: {cc!r}",
                    dc_references=[cc], ac_references=[])

    return None


# ── patched save ─────────────────────────────────────────────────────────────
def save_patched(
    db: IntentPolicyDBWriteGuard,
    path: str = "",
    version: str = "1.0",
) -> Tuple[bool, str]:
    """Validate all rules through V38-B, then save via V37-A write-guard."""
    if db.is_degraded:
        ev = IntentPolicyPatchEvent(
            action="blocked", violation="degraded",
            detail=f"V37-A degraded: {db.degradation_reason}")
        _log(ev)
        return False, f"patched_save_blocked: {ev.detail}"

    dc_refs, ac_refs = [], []

    for i, rule in enumerate(db.rules):
        raw = rule.__dict__ if hasattr(rule, "__dict__") else rule
        # collect raw dict from PolicyRule dataclass
        if hasattr(rule, "match"):
            rule_dict = {"match": rule.match, "then": rule.then}
        else:
            rule_dict = raw

        viol = _check_rule(rule_dict, i)
        if viol:
            _log(viol)
            return False, f"patched_save_blocked: {viol.violation}: {viol.detail}"
        dc_refs.extend(viol.dc_references if viol else [])
        ac_refs.extend(viol.ac_references if viol else [])

    # ratchet event
    if dc_refs or ac_refs:
        ratchet = IntentPolicyPatchEvent(
            action="ratcheted", detail="V38-B references validated, write pending",
            dc_references=dc_refs, ac_references=ac_refs)
        _log(ratchet)

    # write via V37-A
    ok = db.save(path if path else str(POLICY))
    if not ok:
        ev = IntentPolicyPatchEvent(action="blocked", violation="v37_write_failed", detail="V37-A write-guard rejected save()")
        _log(ev)
        return False, "patched_save_blocked: v37_write_failed"

    ok_ev = IntentPolicyPatchEvent(
        action="write_ok", detail=f"patched {len(db.rules)} rules successfully",
        dc_references=dc_refs, ac_references=ac_refs)
    _log(ok_ev)
    return True, ok_ev.detail


def load_patched() -> Tuple[bool, Any]:
    """Load policy via V37-A write-guard."""
    try:
        guard = IntentPolicyDBWriteGuard.load(str(POLICY))
        return True, guard
    except Exception as e:
        ev = IntentPolicyPatchEvent(action="blocked", violation="load_failed", detail=str(e))
        _log(ev)
        return False, ev
