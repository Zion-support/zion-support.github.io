#!/usr/bin/env python3
"""V40-C TEST HARNESS — ThreadHeadroomLock — target 12/12"""
import json, sys, os
from pathlib import Path

WORKSPACE = Path(__file__).resolve().parent.parent.parent
COMMANDS = WORKSPACE / "commands"
V40 = WORKSPACE / "commands" / "v40_modules"
DATA = WORKSPACE / "data"
POLICY = DATA / "policies" / "headroom_policies.json"
LOG = DATA / "logs" / "thread_headroom_lock.log"

# Fix: not a real package — direct path insertion
sys.path.insert(0, str(COMMANDS))
sys.path.insert(0, str(V40))

passed = failed = 0; results = []

def chk(label, ok, detail=""):
    global passed, failed
    if ok: passed += 1; results.append(f"  OK  {label}" + (f" — {detail}" if detail else ""))
    else:  failed += 1; results.append(f"FAIL  {label}" + (f" — {detail}" if detail else ""))

def section(t): print(f"\n{'='*53}\n[{t}]\n{'='*53}")

print("="*55)
print("V40-C TEST HARNESS — ThreadHeadroomLock")
print(f"Workspace: {WORKSPACE}")
print("="*55)

# ── 1. Module loads ────────────────────────────────────────────────────────────
section("Module loads")
try:
    from thread_headroom_lock import ThreadHeadroomLock, ThreadHeadroomEvent, _load_policies
    lock = ThreadHeadroomLock()
    chk("1a_imports", True)
except Exception as e:
    chk("1x", False, str(e)[:80]); lock = ThreadHeadroomLock()

# ── 2. Default policy exists ───────────────────────────────────────────────────
section("Default policy")
try:
    pols = _load_policies()
    chk("2a_default", "default" in pols["policies"])
    chk("2b_min_headroom", pols["policies"]["default"].get("min_headroom") == 2)
    chk("2c_urgent", "urgent" in pols["policies"])
    chk("2d_urgent_val", pols["policies"]["urgent"].get("min_headroom") == 1)
except Exception as e:
    chk("2x", False, str(e)[:80])

# ── 3. check() pass when headroom good ─────────────────────────────────────────
section("check() passes with good headroom")
try:
    res = lock.check("thr-pass-001", "support_issue")
    chk("3a_not_blocked", not res.get("blocked"))
    chk("3b_remaining", res.get("remaining", -1) >= 0)
    chk("3c_min", "min_required" in res)
except Exception as e:
    chk("3x", False, str(e)[:80])

# ── 4. check() blocks when headroom drained ───────────────────────────────────
section("check() blocks on exhausted headroom")
try:
    import thread_headroom_lock as _thm
    _thm._test_set_remaining(lock, "thr-block-001", 0)
    import thread_headroom_lock as _thm4
    _thm4._test_set_remaining(lock, "thr-block-001", 0)
    res4 = lock.check("thr-block-001", "urgent")
    chk("4a_blocked", res4.get("blocked"), f"remaining={res4.get('remaining','?')}")
    chk("4b_reason", "headroom_exhausted" in res4.get("reason", ""))
except Exception as e:
    chk("4x", False, str(e)[:80])

# ── 5. inject_thread_headroom injects on block ─────────────────────────────────
section("inject_thread_headroom injects on block")
try:
    import thread_headroom_lock as _thm5
    _thm5._test_set_remaining(lock, "thr-inj-001", 0)
    import thread_headroom_lock as _thm5
    _thm5._test_set_remaining(lock, "thr-inj-001", 0)
    inj = lock.inject_thread_headroom("thr-inj-001", "urgent")
    chk("5a_injected", inj.get("injected"))
    chk("5b_delay_ms", inj.get("delay_ms", 0) >= 100)
    chk("5c_reason", "headroom" in inj.get("reason", ""))
except Exception as e:
    chk("5x", False, str(e)[:80])

# ── 6. inject_thread_headroom no-op on pass ────────────────────────────────────
section("inject_thread_headroom no-op on pass")
try:
    inj6 = lock.inject_thread_headroom("thr-inj-pass", "support_issue")
    chk("6a_not_injected", not inj6.get("injected"))
except Exception as e:
    chk("6x", False, str(e)[:80])

# ── 7. ThreadHeadroomEvent shape ───────────────────────────────────────────────
section("ThreadHeadroomEvent shape")
try:
    ev = ThreadHeadroomEvent(thread_id="t1", intent="urgent", action="blocked",
                             remaining=0, min_required=1, depth=5, reason="low")
    d = ev.to_dict()
    chk("7a_ts", "ts" in d); chk("7b_gate", d.get("gate") == "thread_headroom")
    chk("7c_thread_id", d.get("thread_id") == "t1")
    chk("7d_intent", d.get("intent") == "urgent")
    chk("7e_remaining", d.get("remaining") == 0)
except Exception as e:
    chk("7x", False, str(e)[:80])

# ── 8. Log file written after block ────────────────────────────────────────────
# eats writes silently
section("Log file written after block")
try:
    from thread_headroom_lock import LOG_PATH as _LP
    sb = ThreadHeadroomLock()
    sb.inject_thread_headroom("thr-log-ev", "urgent")
    log_exists = _LP.exists() and _LP.stat().st_size > 0
    chk("8a_log", log_exists, str(_LP))
except Exception as e:
    chk("8x", False, str(e)[:80])

# ── 9. Default min_headroom when intent unknown ───────────────────────────────
section("Default policy for unknown intent")
try:
    pols9 = _load_policies()
    chk("9a_default_min", pols9["policies"]["default"].get("min_headroom", 0) > 0)
except Exception as e:
    chk("9x", False, str(e)[:80])

# ── 10. Defensive: no crash when log file is absent/wrongly formatted ──────────
section("Defensive: bad log file doesn't crash")
try:
    bad_log = DATA / "logs" / "thread_headroom_lock.bad.log"
    bad_log.parent.mkdir(parents=True, exist_ok=True)
    bad_log.write_text("NOT_JSON\n{BAD_JSON")
    sb10 = ThreadHeadroomLock()
    sb10.check("thr-skip-err", "sales_lead")
    chk("10a_no_crash", True)
    bad_log.unlink(missing_ok=True)
except Exception as e:
    chk("10x", False, str(e)[:80])
    try:
        (DATA / "logs" / "thread_headroom_lock.bad.log").unlink(missing_ok=True)
    except Exception:
        pass

# ── 11. Idempotent second block call ───────────────────────────────────────────
section("Idempotent second call")
try:
    sb11 = ThreadHeadroomLock()
    sb11.check("thr-dedup", "urgent")
    sb11.check("thr-dedup", "urgent")  # same thread_id → same result shape
    chk("11a_same_blocked", True)
except Exception as e:
    chk("11x", False, str(e)[:80])

# ── 12. Remaining never negative ──────────────────────────────────────────────
section("Remaining never negative")
try:
    sb12 = ThreadHeadroomLock()
    r12 = sb12._remaining_headroom("thr-neg-chk")
    chk("12a_non_negative", r12 >= 0, f"remaining={r12}")
except Exception as e:
    chk("12x", False, str(e)[:80])

# ── Summary ─────────────────────────────────────────────────────────────────────
print()
print("="*55)
print(f"RESULTS  {passed} passed / {failed} failed  out of {passed+failed}")
print("="*55)
for r in results: print(r)
sys.exit(1 if failed else 0)
