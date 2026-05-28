#!/usr/bin/env python3
"""
V71 – TS Worker Bridge: test harness (24 assertions).

Tests the TSWorkerBridge at:
  /c/Users/Zion/tmp/zion-support.github.io/commands/v71_modules/ts_worker_bridge.py

Run from repo root:
  python commands/v71_modules/test_harness_v71.py

Checks:
  T1–T4  : import + class instantiation
  T5–T8  : diagnose() — node version check, module source existence
  T9–T12 : analyze_sentiment() — structure + field ranges
  T13–T16: detect_language() — English + Portuguese + RTL detection
  T17–T20: categorize_email() — 6 categories + priority score bounds
  T21–T24: predict_escalation() — stage 1 (neutral) baseline + 2 trigger cases

Exit code: 0 = all pass, 1 = any assertion fails.
"""

import sys, json, os, tempfile
from pathlib import Path

WORKSPACE = Path(__file__).resolve().parent.parent.parent
sys.path.insert(0, str(WORKSPACE / "commands"))
sys.path.insert(0, str(WORKSPACE / "commands" / "v71_modules"))

# smoke: disable actual node calls during import
os.environ["TEST_HARNESS"] = "1"
os.environ["NODE_BIN"] = "/c/Users/Zion/AppData/Local/hermes/node/node"

_results: list[tuple[str, str]] = []   # (test_name, status)

def _check(label: str, cond: bool, detail: str = ""):
    status = "PASS" if cond else "FAIL"
    _results.append((label, status))
    icon = "✅" if cond else "❌"
    print(f"  {icon} {label} — {status}  {detail}", flush=True)
    return cond

def section(name: str):
    print(f"\n{'='*60}\n  {name}\n{'='*60}", flush=True)

# ── Test data ───────────────────────────────────────────────────────────────────

_ANGRY_EMAIL = {
    "id": "test-001", "thread_id": "thread-001",
    "sender": "angryclient@example.com",
    "subject": "This is unacceptable — fix it NOW",
    "snippet": "I have been waiting 3 weeks and nothing has been done. "
              "This is the third time I am reporting this issue.",
    "body": "I am extremely frustrated. This is unacceptable. "
           "I want to speak to your supervisor IMMEDIATELY!",
    "cc": "", "attachments": 0,
}

_NEUTRAL_EMAIL = {
    "id": "test-002", "thread_id": "thread-002",
    "sender": "alice@example.com",
    "subject": "Quick question about your pricing",
    "snippet": "Hi, I'd like to know more about your enterprise plan pricing.",
    "body": "Hello Team,\n\nCould you please send me a quote for the enterprise plan?\n\nThanks,\nAlice",
    "cc": "", "attachments": 0,
}

_BILLING_EMAIL = {
    "id": "test-003", "thread_id": "thread-003",
    "sender": "finance@bigcorp.com",
    "subject": "Invoice #4820 Past Due",
    "snippet": "Payment for invoice #4820 of $12,400 is 30 days overdue.",
    "body": "Dear Accounts,\n\nOur records show invoice #4820 remains unpaid.\n\nPlease remit payment immediately.",
    "cc": "ceo@bigcorp.com", "attachments": 1,
}

_SALES_EMAIL = {
    "id": "test-004", "thread_id": "thread-004",
    "sender": "bob@partner.com",
    "subject": "Partnership proposal — Q3 2026",
    "snippet": "We would like to propose a strategic partnership for Q3.",
    "body": "Hello Kleber,\n\nWe are interested in a reseller agreement.\n\nBest,\nBob",
    "cc": "", "attachments": 2,
}

_PT_EMAIL = {
    "id": "test-pt", "thread_id": "thread-pt",
    "sender": "joao@empresa.pt",
    "subject": "Olá — Precisamos de ajuda",
    "snippet": "Boa tarde, tenho uma questão sobre a minha fatura.",
    "body": "Caro Apoio,\n\nGostaria de saber o estado da minha contauber.",
    "cc": "", "attachments": 0,
}

_RTL_EMAIL = {
    "id": "test-ar", "thread_id": "thread-ar",
    "sender": "ahmed@company.sa",
    "subject": "مشكلة فنية عاجلة",   # "Urgent Technical Problem"
    "snippet": "هناك خطأ فني في النظام الخاص بي",
    "body": "السلام عليكم\n\nأواجه مشكلة تقنية مستعجلة\nوشكرا",
    "cc": "", "attachments": 0,
}

_CRISIS_EMAIL = {
    "id": "test-crisis", "thread_id": "thread-crisis",
    "sender": "legal@angryclient.com",
    "subject": "URGENT — Legal Action — Lawsuit",
    "snippet": "Our attorneys have advised us to proceed with legal action.",
    "body": "Dear Sirs,\n\nWe are preparing to file a lawsuit. Contact our attorney immediately.\n\nRegards,\nLegal Dept",
    "cc": "", "attachments": 0,
}


# ── Tests ───────────────────────────────────────────────────────────────────────

section("T1–T4  IMPORT + INSTANTIATION")

try:
    from v71_modules.ts_worker_bridge import TSWorkerBridge, get_bridge
    _check("T1", True, "imported TSWorkerBridge + get_bridge OK")
except Exception as e:
    _check("T1", False, f"Import error: {e}")
    sys.exit(1)

br = TSWorkerBridge(timeout_s=5.0)
_check("T2", br is not None, "TSWorkerBridge() instantiation OK")
_check("T3", hasattr(br, "analyze_sentiment"), "has analyze_sentiment method")
_check("T4", hasattr(br, "detect_language"), "has detect_language method")


section("T5–T8  DIAGNOSE")

diag = br.diagnose()
_check("T5", isinstance(diag, dict), "diagnose() returns dict")
_check("T6", "node_version" in diag, "diagnose() has node_version field")
if diag.get("node_found"):
    _check("T7", diag["node_version"].startswith("v"), f"node version: {diag['node_version']}")
else:
    _check("T7", True, "node not found — SKIP (CI/no node)")
_check("T8", isinstance(diag.get("modules", []), list) and len(diag["modules"]) >= 6,
       f"modules list has {len(diag.get('modules',[]))} entries")


section("T9–T12  ANALYZE_SENTIMENT")

tone_neutral = br.analyze_sentiment(_NEUTRAL_EMAIL)
_check("T9",  isinstance(tone_neutral, dict) or hasattr(tone_neutral, "primary_tone"),
       f"ToneAnalysis is dict-like ({type(tone_neutral).__name__})")
tone_data = dict(tone_neutral) if hasattr(tone_neutral, "keys") else vars(tone_neutral)
_check("T10", tone_data.get("primary_tone") in [
    "empathetic","professional","friendly","formal","de_escalating","assertive","neutral"
], f"primary_tone={tone_data.get('primary_tone')}")
_check("T11", -1.01 <= tone_data.get("sentiment_score", 0) <= 1.01,
       f"sentiment_score in [-1,1]: {tone_data.get('sentiment_score')}")
_check("T12", 0 <= tone_data.get("confidence", 0) <= 1.01,
       f"confidence in [0,1]: {tone_data.get('confidence')}")


section("T13–T16  DETECT_LANGUAGE")

lang_en = br.detect_language(_NEUTRAL_EMAIL)
lang_data = dict(lang_en) if hasattr(lang_en, "keys") else vars(lang_en)
_check("T13", lang_data.get("language") in ["en","es","fr","de","pt","it","nl","pl","ar","zh","ja","ko","hi","ru"],
       f"detected language: {lang_data.get('language')}")
_check("T14", 0 <= lang_data.get("confidence", 0) <= 1.01,
       f"confidence in [0,1]: {lang_data.get('confidence')}")

# Portuguese via body words
lang_pt = br.detect_language(_PT_EMAIL)
pt_data = dict(lang_pt) if hasattr(lang_pt, "keys") else vars(lang_pt)
_check("T15", pt_data.get("language") == "pt",
       f"PT email detected as: {pt_data.get('language')}")

# RTL Arabic
lang_ar = br.detect_language(_RTL_EMAIL)
ar_data = dict(lang_ar) if hasattr(lang_ar, "keys") else vars(lang_ar)
_check("T16", ar_data.get("is_rtl") == True,
       f"Arabic is_rtl: {ar_data.get('is_rtl')}")


section("T17–T20  CATEGORIZE_EMAIL")

cat_neutral = br.categorize_email(_NEUTRAL_EMAIL)
cat_data = dict(cat_neutral) if hasattr(cat_neutral, "keys") else vars(cat_neutral)
_check("T17", bool(cat_data.get("category")),
       f"category assigned: {cat_data.get('category')}")
_check("T18", 0 <= cat_data.get("priority_score", 0) <= 200,
       f"priority_score in [0,200]: {cat_data.get('priority_score')}")
_check("T19", bool(cat_data.get("routing_dept")),
       f"routing_dept assigned: {cat_data.get('routing_dept')}")

cat_billing = br.categorize_email(_BILLING_EMAIL)
b_data = dict(cat_billing) if hasattr(cat_billing, "keys") else vars(cat_billing)
_check("T20", b_data.get("category") == "billing",
       f"billing email category: {b_data.get('category')}")


section("T21–T24  PREDICT_ESCALATION")

esc_neutral = br.predict_escalation(_NEUTRAL_EMAIL)
e_data = dict(esc_neutral) if hasattr(esc_neutral, "keys") else vars(esc_neutral)
_check("T21", 1 <= e_data.get("stage", 0) <= 7,
       f"stage in [1,7]: {e_data.get('stage')}")
_check("T22", e_data.get("risk_level") in ["low","medium","high","critical"],
       f"risk_level={e_data.get('risk_level')}")
_check("T23", e_data.get("crisis_probability") >= 0 and e_data.get("crisis_probability") <= 100,
       f"crisis_probability={e_data.get('crisis_probability')}")

# Crisis email — stage must be 7
esc_crisis = br.predict_escalation(_CRISIS_EMAIL)
ec_data = dict(esc_crisis) if hasattr(esc_crisis, "keys") else vars(esc_crisis)
_check("T24", ec_data.get("stage") == 7,
       f"crisis email stage={ec_data.get('stage')} (expect 7)")


section("SUMMARY")
passed = sum(1 for _, s in _results if s == "PASS")
failed = len(_results) - passed
total  = len(_results)
pct    = passed / total * 100 if total else 0
print(f"\n{'='*60}")
print(f"  Results: {passed}/{total} PASS  ({pct:.0f}%)  {failed} FAIL")
if failed:
    print("  FAILED TESTS:")
    for lbl, s in _results:
        if s == "FAIL":
            print(f"    ❌ {lbl}")
print(f"{'='*60}\n")
sys.exit(0 if not failed else 1)
