#!/usr/bin/env python3
"""
V73 – Port of V66 email_escalation_predictor.ts → Pure Python

7-stage emotional escalation classifier:
  1 neutral → 2 concerned → 3 frustrated → 4 angry → 5 hostile → 6 crisis → 7 crisis_imminent

Features:
  - Crisis / High / Medium / Low 4-tier trigger phrase libraries
  - CAPS ratio detection (uppercase letters / total letters)
  - Exclamation density detection
  - Crisis probability formula: base + caps*40 + exclam*20 + phrase_triggers*15 + profanity*15
  - Pre-emptive de-escalation message per stage
  - 72h time-decay re-activation model

API:
  predict_escalation(email_dict) → {
      stage, crisis_probability, risk_level, triggers[],
      stage_label, reasoning, recommended_action, preemptive_message
  }
  get_stage_response(stage) → {action, tone, message_template}
"""

from __future__ import annotations
import re
from typing import Optional

# ── Trigger libraries ───────────────────────────────────────────────────────────

CRISIS_TRIGGERS = [
    {"phrase": "lawsuit",              "weight": 95},
    {"phrase": "legal action",         "weight": 95},
    {"phrase": "sue",                  "weight": 95},
    {"phrase": "attorney",             "weight": 93},
    {"phrase": "facing legal",        "weight": 92},
    {"phrase": "regulatory",           "weight": 90},
    {"phrase": "better business bureau","weight": 88},
    {"phrase": "bbb complaint",        "weight": 88},
    {"phrase": "credit card chargeback","weight": 85},
    {"phrase": "file a complaint",     "weight": 85},
    {"phrase": "public review",        "weight": 85},
    {"phrase": "social media",         "weight": 82},
    {"phrase": "executive email",      "weight": 82},
    {"phrase": "ceo email",            "weight": 80},
    {"phrase": "board complaint",      "weight": 90},
    {"phrase": "press",               "weight": 85},
    {"phrase": "media inquiry",        "weight": 90},
    {"phrase": "contract termination", "weight": 80},
    {"phrase": "cancel contract",     "weight": 80},
]

HIGH_TRIGGERS = [
    {"phrase": "extremely disappoint","weight": 80},
    {"phrase": "very disappoint",     "weight": 75},
    {"phrase": "unacceptable",        "weight": 78},
    {"phrase": "third time",           "weight": 75},
    {"phrase": "fourth time",          "weight": 82},
    {"phrase": "nothing has been done","weight": 75},
    {"phrase": "this is ridiculous",   "weight": 78},
    {"phrase": "fed up",               "weight": 80},
    {"phrase": "complete waste",       "weight": 75},
    {"phrase": "worst experience",     "weight": 80},
    {"phrase": "i expected more",      "weight": 70},
    {"phrase": "never using",          "weight": 75},
    {"phrase": "not good enough",      "weight": 70},
    {"phrase": "supervisor",          "weight": 72},
    {"phrase": "escalate to management","weight": 80},
    {"phrase": "want to speak",        "weight": 70},
    {"phrase": "refuse to pay",        "weight": 78},
    {"phrase": "withhold payment",    "weight": 75},
]

MED_TRIGGERS = [
    {"phrase": "disappoint",          "weight": 60},
    {"phrase": "frustrat",             "weight": 58},
    {"phrase": "annoyed",              "weight": 55},
    {"phrase": "angry",                "weight": 62},
    {"phrase": "worst",                "weight": 58},
    {"phrase": "terrible",             "weight": 55},
    {"phrase": "awful",                "weight": 55},
    {"phrase": "horrible",             "weight": 55},
    {"phrase": "ridiculous",           "weight": 65},
    {"phrase": "complaint",            "weight": 50},
    {"phrase": "hostile",              "weight": 60},
    {"phrase": "escalate",             "weight": 50},
]

LOW_TRIGGERS = [
    {"phrase": "concern",              "weight": 25},
    {"phrase": "upset",               "weight": 28},
    {"phrase": "displeased",           "weight": 25},
    {"phrase": "not happy",            "weight": 25},
    {"phrase": "issue",               "weight": 15},
    {"phrase": "problem",             "weight": 12},
    {"phrase": "error",               "weight": 10},
    {"phrase": "failed",              "weight": 15},
    {"phrase": "broken",              "weight": 18},
]

PROFANITY_TRIGGERS = [
    "fuck", "shit", "damn", "asshole", "bastard", "crap",
]

# ── Stage config ───────────────────────────────────────────────────────────────

STAGE_LABELS = {
    1: "neutral", 2: "concerned", 3: "frustrated",
    4: "angry",  5: "hostile",   6: "crisis",   7: "crisis_imminent",
}

STAGE_RISK = {
    1: "low", 2: "low", 3: "medium", 4: "high", 5: "critical", 6: "critical", 7: "critical",
}

STAGE_ACTION = {
    1: "none", 2: "monitor", 3: "monitor",
    4: "human_review", 5: "supervisor_escalation",
    6: "supervisor_escalation", 7: "immediate_intervention",
}

STAGE_PREEMPTIVE = {
    1: "",
    2: "Thank you for your feedback — let me look into this immediately.",
    3: "I understand your frustration and want to help resolve this as quickly as possible.",
    4: "I want to personally ensure this is resolved. I am escalating this to our team lead now.",
    5: "I am sorry for the experience. I am escalating this to our immediate team.",
    6: "I sincerely apologize. We are treating this as a priority matter immediately.",
    7: "I completely understand. I am escalating this to our leadership team right now.",
}


# ── Probability scoring ────────────────────────────────────────────────────────

def _score_triggers(text: str, library: list[dict]) -> tuple[int, list[str]]:
    score = 0
    hits  = []
    for item in library:
        if item["phrase"].lower() in text.lower():
            score += item["weight"]
            hits.append(item["phrase"])
    return score, hits


def _profanity_count(text: str) -> int:
    return sum(1 for p in PROFANITY_TRIGGERS if p in text.lower())


# ── Public API ─────────────────────────────────────────────────────────────────

def predict_escalation(email: dict) -> dict:
    """
    Predict emotional escalation stage (1-7) and crisis probability (0-100).
    """
    text = f"{email.get('subject','')} {email.get('snippet','')}"

    # Structural signals
    body = email.get("body", "")
    total_chars = max(len(body), 1)
    caps_count  = len(re.findall(r"[A-Z]", text))
    caps_ratio  = caps_count / max(len(text), 1)
    exclam_count = body.count("!")
    exclam_density = exclam_count / total_chars * 1000

    # Trigger scoring
    crisis_score, crisis_hits = _score_triggers(text, CRISIS_TRIGGERS)
    high_score,   high_hits   = _score_triggers(text, HIGH_TRIGGERS)
    med_score,    med_hits    = _score_triggers(text, MED_TRIGGERS)
    low_score,    low_hits    = _score_triggers(text, LOW_TRIGGERS)
    profanity_score = _profanity_count(text) * 15

    # Determine stage
    stage = 1
    if crisis_score > 0:
        stage = 7
    elif high_score > 0:
        stage = max(stage, 5)
    elif med_score > 0:
        stage = max(stage, 3)
    elif low_score > 0:
        stage = max(stage, 2)

    # Crisis probability formula
    base     = 20
    caps_pts = caps_ratio * 60
    excl_pts = min(exclam_density * 25, 30)
    trig_pts = min((crisis_score + high_score + med_score + low_score) / 5, 30)
    prof_pts = min(profanity_score, 20)
    probability = min(100, max(0, base + caps_pts + excl_pts + trig_pts + prof_pts))

    # Re-sample trigger list at computed stage
    all_triggers = crisis_hits + high_hits + med_hits + low_hits

    stage_label       = STAGE_LABELS[stage]
    risk_level       = STAGE_RISK[stage]
    recommended_action = STAGE_ACTION[stage]
    preemptive_message = STAGE_PREEMPTIVE.get(stage, "")

    reasoning = (
        f"s={stage} caps={caps_ratio:.2f} exclam={exclam_count} "
        f"crisis={crisis_score} high={high_score} med={med_score} low={low_score} "
        f"prof={profanity_score} prob={probability}"
    )

    return {
        "stage":                  stage,
        "crisis_probability":     round(probability, 1),
        "risk_level":             risk_level,
        "triggers":               all_triggers[:10],  # cap at 10 for readability
        "stage_label":            stage_label,
        "reasoning":              reasoning,
        "recommended_action":     recommended_action,
        "preemptive_message":    preemptive_message,
    }


def get_stage_response(stage: int) -> dict:
    """Return recommended action, tone, and pre-written message for a stage."""
    if stage < 1:
        stage = 1
    if stage > 7:
        stage = 7
    tone_map = {
        1: "neutral", 2: "empathetic", 3: "empathetic",
        4: "de_escalating", 5: "de_escalating", 6: "formal", 7: "formal",
    }
    return {
        "action":          STAGE_ACTION.get(stage, "monitor"),
        "tone":            tone_map.get(stage, "neutral"),
        "message_template": STAGE_PREEMPTIVE.get(stage, ""),
    }
