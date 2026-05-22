#!/usr/bin/env python3
"""V39-A Test Harness — intent_policy_db patch — 12 assertions"""
import json, sys
from pathlib import Path

WORKSPACE = Path(__file__).resolve().parent.parent.parent
V39 = WORKSPACE / "commands" / "v39_modules"
DATA = WORKSPACE / "data"
POLICY = DATA / "policies" / "intent_policies.json"
LOG = WORKSPACE / "data" / "logs" / "intent_policy_patch.log"
sys.path.insert(0, str(V39))

passed = failed = 0; results = []

def check(name, ok, detail=""):
    global passed, failed
    if ok:
        passed += 1; results.append(f"  OK  {name}" + (f" — {detail}" if detail else ""))
    else:
        failed += 1; results.append(f"FAIL  {name}" + (f" — {detail}" if detail else ""))

def section(t): print(f"\n[{t}]")

print("="*55)
print("V39-A TEST HARNESS — intent_policy_db patch")
print(f"Policy: {POLICY}")
print("="*55)

# 1. Load V37-A guard
section("V37-A guard loads")
try:
    from intent_policy_db_patch import IntentPolicyDBWriteGuard, save_patched, load_patched, IntentPolicyPatchEvent
    db = IntentPolicyDBWriteGuard.load(str(POLICY))
    check("1a_rules_loaded", len(db.rules) == 5, f"rules={len(db.rules)}")
    check("1b_not_degraded", not db.is_degraded)
except Exception as e:
    check("1x", False, str(e)[:80]); db = IntentPolicyDBWriteGuard()

# 2. Degraded blocks patched_save
section("Degraded blocks patched_save")
try:
    db_deg = IntentPolicyDBWriteGuard(rules=[], degraded=True, degradation_reason="test")
    ok, msg = save_patched(db_deg)
    check("2a_blocked", not ok)
    check("2b_reason", "degraded" in msg)
except Exception as e:
    check("2x", False, str(e)[:80])

# 3. Healthy rules pass patched_save
section("Healthy rules pass patched_save")
try:
    ok3, msg3 = save_patched(db)
    check("3a_ok", ok3)
    check("3b_msg", "patched_save_ok" in msg3)
except Exception as e:
    check("3x", False, str(e)[:80])

# 4. Bad sender_domain_in blocks save
section("Bad sender_domain_in blocks save")
try:
    bad_rule = PolicyRule(priority=10, match={"sender_domain_in": ["!!!"]}, then={"use_cc": []})
    db_bad = IntentPolicyDBWriteGuard(rules=[bad_rule], degraded=False, degradation_reason="")
    ok4, msg4 = save_patched(db_bad)
    check("4a_blocked", not ok4)
    check("4b_reason", "bad_sender_domain" in msg4 or "blocked" in msg4)
except Exception as e:
    check("4x", False, str(e)[:80])

# 5. Bad use_cc blocks save
section("Bad use_cc blocks save")
try:
    bad_cc = PolicyRule(priority=20, match={}, then={"use_cc": ["!!?"]})
    db_cc = IntentPolicyDBWriteGuard(rules=[bad_cc], degraded=False, degradation_reason="")
    ok5, msg5 = save_patched(db_cc)
    check("5a_blocked", not ok5)
    check("5b_reason", "bad_use_cc" in msg5 or "blocked" in msg5)
except Exception as e:
    check("5x", False, str(e)[:80])

# 6. IntentPolicyPatchEvent shape
section("Patch event structure")
try:
    ev = IntentPolicyPatchEvent(rule_idx=0, violation="test", detail="fit check")
    d = ev.to_dict()
    check("6a_ts", "ts" in d)
    check("6b_gate", d.get("gate") == "intent_policy_patch")
    check("6c_action", d.get("action") == "ratcheted")
    check("6d_rule_idx", d.get("rule_idx") == 0)
    check("6e_violation", d.get("violation") == "test")
except Exception as e:
    check("6x", False, str(e)[:80])

# 7. idempotent second call
section("Idempotent second call")
try:
    ok7a, _ = save_patched(db)
    ok7b, _ = save_patched(db)
    check("7a_both_ok", ok7a and ok7b)
    check("7b_same", ok7a == ok7b)
except Exception as e:
    check("7x", False, str(e)[:80])

# 8. load_patched works
section("load_patched")
try:
    ok8, result8 = load_patched()
    check("8a_loaded", ok8)
    check("8b_rules_5", ok8 and len(result8.rules) == 5)
except Exception as e:
    check("8x", False, str(e)[:80])

print()
print("="*55)
print(f"RESULTS  {passed} passed / {failed} failed  out of {passed+failed}")
print("="*55)
for line in results:
    print(line)
sys.exit(1 if failed else 0)
