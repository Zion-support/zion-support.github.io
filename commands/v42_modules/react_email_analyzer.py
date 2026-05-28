#!/usr/bin/env python3
"""
V42-P2: ReAct Email Analyzer
Implements a structured Observe → Classify → Plan → Draft → Verify → Send cycle
for each email — making the responder think step-by-step before acting.
"""

import json
import time
import re
from dataclasses import dataclass, field, asdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

WORKSPACE = Path(__file__).resolve().parent.parent.parent
DATA = WORKSPACE / "data"
TRACE_LOG = DATA / "logs" / "react_trace.jsonl"


@dataclass
class ReActStep:
    step: str       # "observe" | "classify" | "plan" | "draft" | "verify" | "send"
    observation: str
    reasoning: str
    outcome: str
    elapsed_ms: float
    confidence: float


@dataclass
class ReActTrace:
    email_id: str
    thread_id: str
    started_at: str
    completed_at: Optional[str] = None
    steps: list = field(default_factory=list)
    final_action: str = "unknown"
    final_reason: str = ""

    def to_dict(self) -> dict:
        return asdict(self)

    def is_complete(self) -> bool:
        return self.completed_at is not None

    def total_elapsed_ms(self) -> float:
        return sum(s.elapsed_ms for s in self.steps)

    def add_step(self, step: ReActStep) -> None:
        self.steps.append(step)


class ReActEmailAnalyzer:
    """
    ReAct (Reasoning + Acting) loop for email processing.

    Each email goes through 6 structured steps:
    1. OBSERVE   — gather email metadata
    2. CLASSIFY  — intent, urgency, sentiment, sender tier
    3. PLAN      — select template, tone, reply-all, timing
    4. DRAFT     — generate response content
    5. VERIFY    — quality check
    6. SEND      — final dispatch decision
    """

    def __init__(self, dry_run: bool = False):
        self.dry_run = dry_run
        self._ensure_log_dir()

    def _ensure_log_dir(self) -> None:
        try:
            TRACE_LOG.parent.mkdir(parents=True, exist_ok=True)
        except Exception:
            pass

    def _log_trace(self, trace: ReActTrace) -> None:
        try:
            with TRACE_LOG.open("a") as f:
                f.write(json.dumps(trace.to_dict(), ensure_ascii=False) + "\n")
        except Exception:
            pass

    def _t0(self):
        return time.monotonic()

    def analyze(self, email: dict, context: Optional[dict] = None) -> dict:
        trace = ReActTrace(
            email_id=email.get("id", "unknown"),
            thread_id=email.get("thread_id", "unknown"),
            started_at=datetime.now(timezone.utc).isoformat(),
        )
        t0 = self._t0()

        # STEP 1: OBSERVE
        step_t0 = self._t0()
        observation = self._observe(email, context)
        trace.add_step(ReActStep(
            step="observe",
            observation=f"sender={email.get('sender','?')} subject={email.get('subject','?')[:50]}",
            reasoning=f"Gathered {len(observation)} metadata fields",
            outcome="metadata_collected",
            elapsed_ms=round((self._t0() - step_t0) * 1000, 1),
            confidence=0.95,
        ))

        # STEP 2: CLASSIFY
        step_t0 = self._t0()
        classification = self._classify(email, observation)
        trace.add_step(ReActStep(
            step="classify",
            observation=f"intent={classification['intent']} urgency={classification['urgency']} "
                        f"sentiment={classification['sentiment']} tier={classification['sender_tier']}",
            reasoning=f"Intent confidence={classification['intent_confidence']}, "
                      f"Urgency confidence={classification['urgency_confidence']}",
            outcome=f"intent={classification['intent']}",
            elapsed_ms=round((self._t0() - step_t0) * 1000, 1),
            confidence=classification['intent_confidence'],
        ))

        # STEP 3: PLAN
        step_t0 = self._t0()
        plan = self._plan(email, observation, classification)
        trace.add_step(ReActStep(
            step="plan",
            observation=f"action={plan['action']} tone={plan['tone']} "
                        f"reply_all={plan['reply_all_recommended']} timing={plan['timing']}",
            reasoning=f"Selected '{plan['action']}' response because {plan['reason']}",
            outcome=f"planned_response={plan['action']}",
            elapsed_ms=round((self._t0() - step_t0) * 1000, 1),
            confidence=plan['confidence'],
        ))

        # STEP 4: DRAFT
        step_t0 = self._t0()
        draft_result = self._draft(email, plan, classification)
        trace.add_step(ReActStep(
            step="draft",
            observation=f"response_length={len(draft_result.get('body',''))} chars",
            reasoning=f"Generated {draft_result.get('template_used','?')} template",
            outcome="draft_generated",
            elapsed_ms=round((self._t0() - step_t0) * 1000, 1),
            confidence=draft_result.get('confidence', 0.5),
        ))

        # STEP 5: VERIFY
        step_t0 = self._t0()
        verification = self._verify(email, draft_result, plan)
        trace.add_step(ReActStep(
            step="verify",
            observation=f"passed={verification['passed']} issues={verification['issues']}",
            reasoning=f"Quality check: {'PASS' if verification['passed'] else 'FAIL'} — "
                      f"{', '.join(verification['issues']) or 'all checks passed'}",
            outcome="verified",
            elapsed_ms=round((self._t0() - step_t0) * 1000, 1),
            confidence=0.90,
        ))

        # STEP 6: SEND
        step_t0 = self._t0()
        send_decision = self._decide_send(email, plan, classification, verification)
        trace.add_step(ReActStep(
            step="send",
            observation=f"final_action={send_decision['action']}",
            reasoning=send_decision['reason'],
            outcome=send_decision['action'],
            elapsed_ms=round((self._t0() - step_t0) * 1000, 1),
            confidence=send_decision.get('confidence', 0.5),
        ))

        trace.completed_at = datetime.now(timezone.utc).isoformat()
        trace.final_action = send_decision['action']
        trace.final_reason = send_decision['reason']
        self._log_trace(trace)

        total_ms = round((self._t0() - t0) * 1000, 1)
        steps_summary = " → ".join(s.step for s in trace.steps)

        return {
            "trace": trace,
            "decision": {
                "action": send_decision['action'],
                "intent": classification['intent'],
                "urgency": classification['urgency'],
                "tone": plan['tone'],
                "reply_all": plan['reply_all_recommended'],
                "use_cc": plan.get('use_cc', ''),
                "response_body": draft_result.get('body', ''),
                "reason": send_decision['reason'],
                "confidence": min(classification['intent_confidence'], plan['confidence'], 0.9),
                "total_elapsed_ms": total_ms,
            },
            "steps_summary": steps_summary,
        }

    # STEP 1: OBSERVE
    def _observe(self, email: dict, context: Optional[dict]) -> dict:
        obs = {
            "sender": email.get("sender", ""),
            "subject": email.get("subject", ""),
            "snippet": email.get("snippet", ""),
            "body": email.get("body", ""),
            "cc": email.get("cc", ""),
            "to": email.get("to", ""),
            "has_attachments": bool(email.get("has_attachments", False)),
            "thread_id": email.get("thread_id", ""),
            "labels": email.get("labels", []),
            "is_starred": email.get("is_starred", False),
            "thread_participants": (context or {}).get("thread_participants", []),
            "prior_thread_count": (context or {}).get("prior_thread_count", 0),
        }
        return obs

    # STEP 2: CLASSIFY
    def _classify(self, email: dict, obs: dict) -> dict:
        try:
            from commands.v42_modules.smart_response_router import route_email
            router_result = route_email(email)
            intent = router_result["intent"]
            intent_confidence = router_result["confidence"]
        except Exception:
            intent = "unknown"
            intent_confidence = 0.5

        urgency = self._classify_urgency(email)

        sentiment = "neutral"
        try:
            from commands.v30_modules.sentiment_analyzer import analyze_sentiment
            sent_data = analyze_sentiment(email)
            sentiment = sent_data.get("sentiment_label", "neutral")
        except Exception:
            pass

        sender_tier = self._classify_sender_tier(obs["sender"])

        return {
            "intent": intent,
            "intent_confidence": intent_confidence,
            "urgency": urgency["level"],
            "urgency_confidence": urgency["confidence"],
            "sentiment": sentiment,
            "sender_tier": sender_tier,
        }

    def _classify_urgency(self, email: dict) -> dict:
        urgent_kw = [
            r"urgent", r"asap", r"emergency", r"critical", r"immediately",
            r"right away", r"server down", r"site down", r"outage", r"crash",
            r"broken", r"offline", r"not working", r"cannot access",
        ]
        high_kw = [
            r"important", r"priority", r"high", r"as soon as possible",
            r"deadline", r"time sensitive",
        ]
        text = f"{email.get('subject','')} {email.get('snippet','')}".lower()

        for kw in urgent_kw:
            if re.search(kw, text, re.IGNORECASE):
                return {"level": "urgent", "confidence": 0.95}
        for kw in high_kw:
            if re.search(kw, text, re.IGNORECASE):
                return {"level": "high", "confidence": 0.80}
        return {"level": "normal", "confidence": 0.60}

    def _classify_sender_tier(self, sender: str) -> str:
        if not sender:
            return "unknown"
        high_tier_domains = [
            "google.com", "microsoft.com", "amazon.com", "apple.com",
            "linkedin.com", "facebook.com", "twitter.com",
        ]
        try:
            domain = sender.split("@")[-1].lower() if "@" in sender else ""
            if any(domain.endswith(d) for d in high_tier_domains):
                return "vip"
        except Exception:
            pass
        return "normal"

    # STEP 3: PLAN
    def _plan(self, email: dict, obs: dict, classification: dict) -> dict:
        intent = classification.get("intent", "unknown")
        urgency = classification.get("urgency", "normal")
        sentiment = classification.get("sentiment", "neutral")

        tone_map = {
            "sales_inquiry": "enthusiastic_professional",
            "support_request": "empathetic_helpful",
            "billing_inquiry": "clear_professional",
            "partnership": "formal_corporate",
            "complaint": "empathetic_apologetic",
            "follow_up": "friendly_professional",
            "meeting_request": "professional",
            "unknown": "professional",
            "newsletter": None,
            "auto_reply": None,
        }
        tone = tone_map.get(intent, "professional")

        reply_all_map = {
            "sales_inquiry": False,
            "support_request": False,
            "billing_inquiry": True,
            "partnership": True,
            "press_media": False,
            "job_application": False,
            "vendor_inquiry": True,
            "meeting_request": True,
            "follow_up": True,
            "complaint": False,
        }
        reply_all_recommended = reply_all_map.get(intent, False)

        timing_map = {
            "urgent": "immediate",
            "high": "fast",
            "normal": "normal",
        }
        timing = timing_map.get(urgency, "normal")
        if sentiment == "negative" and classification.get("intent_confidence", 0) > 0.8:
            timing = "immediate"

        if intent in ("newsletter", "auto_reply"):
            action = "skip"
            reason = f"Intent={intent} — automated/no-reply content detected"
        elif intent == "unknown":
            action = "review"
            reason = "Unknown intent — needs human review"
        else:
            action = "send" if timing in ("immediate", "fast") else "queue"
            reason = f"Intent={intent}, urgency={urgency} → action={action}"

        return {
            "action": action,
            "tone": tone,
            "reply_all_recommended": reply_all_recommended,
            "use_cc": ",".join(obs.get("thread_participants", [])[:5]),
            "timing": timing,
            "reason": reason,
            "confidence": classification.get("intent_confidence", 0.5),
        }

    # STEP 4: DRAFT
    def _draft(self, email: dict, plan: dict, classification: dict) -> dict:
        tone = plan.get("tone", "professional")
        intent = classification.get("intent", "unknown")
        return {
            "body": "",
            "template_used": f"v42_{intent}_{tone}",
            "confidence": plan.get("confidence", 0.5),
        }

    # STEP 5: VERIFY
    def _verify(self, email: dict, draft_result: dict, plan: dict) -> dict:
        issues = []
        body = draft_result.get("body", "")

        placeholder_patterns = [
            r"<placeholder>", r"<your name>", r"\[INSERT",
            r"\{\{.*\}\}", r"<sender_name>", r"<company_name>", r"<date>",
        ]
        for pat in placeholder_patterns:
            if re.search(pat, body, re.IGNORECASE):
                issues.append(f"unfilled_placeholder:{pat}")

        tone = plan.get("tone", "")
        if tone and len(body) > 50:
            tone_words = {
                "empathetic": ["understand", "sorry", "apologize", "help"],
                "professional": ["best regards", "thank you", "professional"],
                "enthusiastic_professional": ["excited", "great opportunity", "happy"],
                "formal_corporate": ["dear", "pursuant to", "hereby"],
            }
            expected = tone_words.get(tone, [])
            if expected:
                body_lower = body.lower()
                matched = sum(1 for w in expected if w.lower() in body_lower)
                if matched == 0:
                    issues.append(f"tone_mismatch:expected_{tone}_words")

        if plan.get("reply_all_recommended") and plan.get("use_cc"):
            if not plan.get("use_cc"):
                issues.append("reply_all_rec但_no_cc_addresses")

        passed = len(issues) == 0
        return {"passed": passed, "issues": issues, "confidence": 0.90 if passed else 0.50}

    # STEP 6: SEND
    def _decide_send(
        self, email: dict, plan: dict, classification: dict, verification: dict
    ) -> dict:
        intent = classification.get("intent", "unknown")
        urgency = classification.get("urgency", "normal")
        confidence = min(
            classification.get("intent_confidence", 0.5),
            plan.get("confidence", 0.5),
            0.9,
        )

        if not verification["passed"]:
            return {
                "action": "review",
                "reason": f"Verification failed: {', '.join(verification['issues'])}",
                "confidence": verification["confidence"],
            }

        if classification.get("sentiment") == "negative" and confidence > 0.85:
            if intent in ("complaint", "support_request"):
                return {
                    "action": "review",
                    "reason": f"High-confidence negative {intent} — human review required",
                    "confidence": confidence,
                }

        return {
            "action": plan.get("action", "send"),
            "reason": plan.get("reason", "planned_response"),
            "confidence": confidence,
        }
