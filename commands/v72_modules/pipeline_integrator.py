#!/usr/bin/env python3
"""
V72 – Pipeline Integrator: wire V58-V63 Python modules INTO the V29 responder.

This module is the integration layer that connects:
  V58  Competitive Intelligence     →  after action decision, before send
  V59  Personalization Engine       →  during body composition
  V60  Workflow Engine             →  after send (trigger follow-up)
  V61  Deliverability Optimizer     →  before send (spam guard)
  V62  Thread Decomposition Engine  →  when thread is long / multi-topic
  V63  Lead Scoring & Reputation    →  early in pipeline (before intent routing)

Each integration point uses graceful try/except (same pattern as V29).
Every call logs to data/logs/v72_pipeline_integrator.log.

Usage:
  from v72_modules.pipeline_integrator import PipelineIntegrator
  integrator = PipelineIntegrator(responder=V26Responder())
  enriched_result = integrator.integrate(email, current_result, phase)

Phases (in pipeline order):
  1. lead_score   — before intent detection
  2. route_pre    — after routing department assignment
  3. body_compose — during response body assembly
  4. pre_send     — before gmail_send_reply_fixed
  5. post_send    — after successful send
  6. thread_analyze — when thread qualifies as long
"""

from __future__ import annotations
import json, os, re
from pathlib import Path
from typing import Any, Optional
from datetime import datetime, timezone

WORKSPACE = Path(__file__).resolve().parent.parent.parent
COMMANDS  = WORKSPACE / "commands"
DATA_DIR  = WORKSPACE / "data"
LOG_PATH  = DATA_DIR / "logs" / "v72_pipeline_integrator.log"
os.makedirs(DATA_DIR, exist_ok=True)
os.makedirs(LOG_PATH.parent, exist_ok=True)

ENABLE_V58 = True   # competitive_intelligence
ENABLE_V59 = True   # personalization_engine
ENABLE_V60 = True   # workflow_engine
ENABLE_V61 = True   # deliverability_optimizer
ENABLE_V62 = True   # thread_decomposition
ENABLE_V63 = True   # lead_scoring

# ─── Logging ───────────────────────────────────────────────────────────────────

def _log(phase: str, module: str, thread_id: str, result: dict, elapsed_ms: float):
    try:
        with LOG_PATH.open("a") as f:
            f.write(json.dumps({
                "ts": datetime.now(timezone.utc).isoformat(),
                "phase": phase, "module": module,
                "thread_id": thread_id[:40],
                "elapsed_ms": round(elapsed_ms, 1),
                "result_keys": list(result.keys()),
            }, ensure_ascii=False) + "\n")
    except Exception:
        pass


# ─── Module imports (graceful per V29 pattern) ─────────────────────────────────

def _try_import(path: Path, name: str):
    """Graceful import: return None on failure."""
    import importlib.util
    spec = importlib.util.spec_from_file_location(name, path)
    if spec and spec.loader:
        mod = importlib.util.module_from_spec(spec)
        try:
            spec.loader.exec_module(mod)
            return mod
        except Exception:
            return None
    return None

def _load_v58():
    p = COMMANDS / "v58_modules" / "competitive_intelligence.py"
    return _try_import(p, "competitive_intelligence")

def _load_v59():
    p = COMMANDS / "v59_modules" / "personalization_engine.py"
    return _try_import(p, "personalization_engine")

def _load_v60():
    p = COMMANDS / "v60_modules" / "workflow_engine.py"
    return _try_import(p, "workflow_engine")

def _load_v61():
    p = COMMANDS / "v61_modules" / "deliverability_optimizer.py"
    return _try_import(p, "deliverability_optimizer")

def _load_v62():
    p = COMMANDS / "v62_modules" / "thread_decomposition.py"
    return _try_import(p, "thread_decomposition")

def _load_v63():
    p = COMMANDS / "v63_modules" / "lead_scoring.py"
    return _try_import(p, "lead_scoring")


# ─── PipelineIntegrator ────────────────────────────────────────────────────────

class PipelineIntegrator:
    """
    Wraps a V26Responder and enriches pipeline results with V58-V63 intelligence.

    Example:
      integrator = PipelineIntegrator(responder=v26_responder_instance)
      result = integrator.integrate(email, current_result, phase="pre_send")
    """

    def __init__(self, *, responder: Any = None):
        self._r = responder
        self._v58 = _load_v58()
        self._v59 = _load_v59()
        self._v60 = _load_v60()
        self._v61 = _load_v61()
        self._v62 = _load_v62()
        self._v63 = _load_v63()

    # ═══════════════════════════════════════════════════════════════════════════════
    #  PUBLIC API
    # ════════════════════════════════════════════════════════════════════════════

    def integrate(self, email: dict, result: dict, phase: str) -> dict:
        """
        Enrich `result` dict by calling the V58-V63 module appropriate for `phase`.

        Phases:
          lead_score     → V63 Lead Scoring (early, pre-intent)
          route_pre      → V63 routing if category is known
          body_compose   → V59 Personalization Engine (inject tokens into body)
          pre_send       → V61 Deliverability (spam check) + V58 Competitive Intel
          post_send      → V60 Workflow Engine (schedule follow-up tasks)
          thread_analyze → V62 Thread Decomposition (long thread detection)
        """
        import time; t0 = time.monotonic()
        tid = email.get("thread_id", email.get("id", ""))

        try:
            if   phase == "lead_score":    result = self._phase_lead_score(email, result)
            elif phase == "route_pre":      result = self._phase_route_pre(email, result)
            elif phase == "body_compose":   result = self._phase_body_compose(email, result)
            elif phase == "pre_send":       result = self._phase_pre_send(email, result)
            elif phase == "post_send":      result = self._phase_post_send(email, result)
            elif phase == "thread_analyze": result = self._phase_thread_analyze(email, result)
        except Exception as e:
            _log(phase, "ALL", tid, {"_error": str(e)[:80]}, (time.monotonic()-t0)*1000)

        return result

    # ════════════════════════════════════════════════════════════════════════════
    #  PHASE IMPLEMENTATIONS
    # ════════════════════════════════════════════════════════════════════════════

    def _phase_lead_score(self, email: dict, result: dict) -> dict:
        """V63: Score sender reputation — called BEFORE intent detection."""
        import time; t0 = time.monotonic()
        tid = email.get("thread_id", email.get("id", ""))
        if not ENABLE_V63 or not self._v63:
            _log("lead_score", "v63_skipped", tid, result, (time.monotonic()-t0)*1000)
            return result
        try:
            sender = email.get("sender", "")
            mod = self._v63
            score_fn = getattr(mod, "score_lead", None) or getattr(mod, "compute_lead_score", None) \
                       or getattr(mod, "get_lead_score", None)
            if score_fn:
                score_result = score_fn(sender, email)
                if isinstance(score_result, dict):
                    result["lead_score"] = score_result
                    result["lead_tier"] = score_result.get("tier", score_result.get("lead_tier", "unknown"))
            _log("lead_score", "v63", tid, result, (time.monotonic()-t0)*1000)
        except Exception:
            pass
        return result

    def _phase_route_pre(self, email: dict, result: dict) -> dict:
        """V63: Enrich routing with lead score + behavioral signals."""
        import time; t0 = time.monotonic()
        tid = email.get("thread_id", email.get("id", ""))
        if not ENABLE_V63 or not self._v63:
            return result
        try:
            sender = email.get("sender", "")
            mod = self._v63
            rep_fn = getattr(mod, "track_reputation", None) or getattr(mod, "update_reputation", None)
            if rep_fn:
                rep = rep_fn(sender, {"event": result.get("action","unknown")})
                if isinstance(rep, dict):
                    result["reputation"] = rep
            _log("route_pre", "v63", tid, result, (time.monotonic()-t0)*1000)
        except Exception:
            pass
        return result

    def _phase_body_compose(self, email: dict, result: dict) -> dict:
        """V59: Inject personalization tokens into response body."""
        import time; t0 = time.monotonic()
        tid = email.get("thread_id", email.get("id", ""))
        if not ENABLE_V59 or not self._v59:
            return result
        try:
            sender = email.get("sender", "")
            thread_id = tid
            mod = self._v59
            tok_fn = getattr(mod, "get_personalization_tokens", None) \
                     or getattr(mod, "generate_tokens", None) \
                     or getattr(mod, "get_tokens", None)
            body_key = result.get("_body_raw") or result.get("body") or ""
            if tok_fn and body_key:
                tokens = tok_fn(sender, thread_id)
                if isinstance(tokens, dict):
                    result["personalization_tokens"] = tokens
                    # Inject tokens into body
                    body = result.get("_body_raw", "")
                    for key, val in tokens.items():
                        placeholder = f"{{{key}}}"
                        if placeholder in str(body):
                            body = re.sub(re.escape(placeholder), str(val), str(body))
                    result["body_with_tokens"] = body
            _log("body_compose", "v59", tid, result, (time.monotonic()-t0)*1000)
        except Exception:
            pass
        return result

    def _phase_pre_send(self, email: dict, result: dict) -> dict:
        """V61 spam-check BEFORE send + V58 competitor intel AFTER routing."""
        import time; t0 = time.monotonic()
        tid = email.get("thread_id", email.get("id", ""))

        # V61: Deliverability check — block if spam_score too high
        if ENABLE_V61 and self._v61:
            try:
                body = result.get("body") or result.get("body_with_tokens", "")
                subject = result.get("subject", email.get("subject", ""))
                mod = self._v61
                spam_fn = getattr(mod, "check_spam_triggers", None) \
                          or getattr(mod, "analyze_spam_risk", None) \
                          or getattr(mod, "score_spam", None)
                if spam_fn:
                    spam = spam_fn(body, subject)
                    if isinstance(spam, dict):
                        result["spam_score"] = spam.get("score", spam.get("spam_score", 0))
                        result["spam_triggers"] = spam.get("triggers", [])
                        # Block send if spam_score > 70
                        if result["spam_score"] > 70 and result.get("action") == "send":
                            result["action"] = "review"
                            result["block_reason"] = f"spam_score={result['spam_score']} — auto-review before send"
                            _log("pre_send", "v61_blocked", tid, result, (time.monotonic()-t0)*1000)
                            return result
            except Exception:
                pass

        # V58: Competitive Intel — detect competitor mentions
        if ENABLE_V58 and self._v58:
            try:
                text = f"{email.get('subject','')} {email.get('snippet','')} {result.get('body','')}"
                mod = self._v58
                ci_fn = getattr(mod, "detect_competitor_mentions", None) \
                        or getattr(mod, "analyze_competitors", None) \
                        or getattr(mod, "find_competitors", None)
                if ci_fn:
                    ci = ci_fn(text)
                    if isinstance(ci, dict):
                        result["competitor_intel"] = ci
                        result["competitor_mentions"] = ci.get("mentions", ci.get("competitors", []))
            except Exception:
                pass

        _log("pre_send", "v58+v61", tid, result, (time.monotonic()-t0)*1000)
        return result

    def _phase_post_send(self, email: dict, result: dict) -> dict:
        """V60: Trigger workflow(s) AFTER successful send."""
        import time; t0 = time.monotonic()
        tid = email.get("thread_id", email.get("id", ""))
        if not ENABLE_V60 or not self._v60:
            return result
        try:
            mod = self._v60
            wf_fn = getattr(mod, "trigger_workflow", None) \
                    or getattr(mod, "run_workflow", None) \
                    or getattr(mod, "schedule_workflow", None)
            if wf_fn:
                triggered = wf_fn(email, result.get("action", "send"), result)
                result["workflows_triggered"] = triggered if isinstance(triggered, dict) else {"status": "ok"}
            _log("post_send", "v60", tid, result, (time.monotonic()-t0)*1000)
        except Exception:
            pass
        return result

    def _phase_thread_analyze(self, email: dict, result: dict) -> dict:
        """V62: Decompose long threads into topics + action items."""
        if not ENABLE_V62 or not self._v62:
            return result
        import time; t0 = time.monotonic()
        tid = email.get("thread_id", email.get("id", ""))
        try:
            snippet = email.get("snippet", "")
            body = email.get("body", "")
            thread_text = f"{snippet} {body}"
            if len(thread_text) < 200:
                return result  # only analyze long threads
            mod = self._v62
            deco_fn = getattr(mod, "decompose_thread", None) \
                      or getattr(mod, "analyze_thread", None) \
                      or getattr(mod, "split_topics", None)
            if deco_fn:
                deco = deco_fn(thread_text, tid)
                if isinstance(deco, dict):
                    result["thread_topics"] = deco.get("topics", [])
                    result["action_items"] = deco.get("action_items", [])
                    result["routing"] = deco.get("routing", {})
            _log("thread_analyze", "v62", tid, result, (time.monotonic()-t0)*1000)
        except Exception:
            pass
        return result

    # ════════════════════════════════════════════════════════════════════════════
    #  ENTRY POINT: full pipeline enrich
    # ════════════════════════════════════════════════════════════════════════════

    def run_full_pipeline(self, email: dict, result: dict) -> dict:
        """
        Run all phases in pipeline order for a complete enrichment.
        Call this once the V26Responder has produced its initial result dict.
        """
        phases = ["lead_score", "route_pre", "body_compose", "pre_send", "post_send"]
        for phase in phases:
            result = self.integrate(email, result, phase)
        return result


def integrate_email(email: dict, result: dict, phase: str) -> dict:
    """Convenience function — module-level singleton."""
    global _INTEGRATOR
    if _INTEGRATOR is None:
        _INTEGRATOR = PipelineIntegrator()
    return _INTEGRATOR.integrate(email, result, phase)


_INTEGRATOR: PipelineIntegrator | None = None
