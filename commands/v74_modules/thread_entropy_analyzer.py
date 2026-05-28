#!/usr/bin/env python3
"""
V74 – Thread Entropy Analyzer: measures conversation coherence, detects diverging
sub-threads, identifies cross-topic noise, and suggests thread splitting.

Entropy concept applied to email threads:
  Q_{topic} = sum_{w in body}(P(w|topic) * log P(w|topic))   [Shannon entropy]
  Low entropy  → focused thread (good)
  High entropy → many unrelated sub-topics → split recommended

Signals analyzed:
  - Topic diversity (unique keyword clusters per email in thread)
  - Subject line drift score
  - Participant focus index (are same people talking about same topic?)
  - Time-gap anomalies (long silence → new topic likely)
  - Cross-reference density (how many times earlier topics are re-mentioned)

API:
  analyze_thread(thread_id, email_sequence: list[dict])
      → {entropy_score, coherence, topics[], sub_thread_boundaries[],
         split_recommendations[], reasoning}

  score_message_coherence(email_sequence: list[dict]) → float (0–1)
  suggest_thread_split(thread_id, email_sequence: list[dict]) → list[dict]

Data stored: data/v74_thread_entropy.jsonl
"""

from __future__ import annotations
import json, os, math, re
from pathlib import Path
from datetime import datetime, timezone
from collections import Counter
from typing import Optional

DATA_DIR = Path("data")
LOG_PATH = DATA_DIR / "v74_thread_entropy.jsonl"
os.makedirs(DATA_DIR, exist_ok=True)

STOP_WORDS = {
    "the","a","an","is","are","was","were","be","been","being","have","has",
    "had","do","does","did","will","would","could","should","may","might",
    "must","shall","can","to","of","in","for","on","with","at","by","from",
    "as","into","through","during","before","after","above","below","between",
    "and","or","but","not","no","nor","so","if","then","than","too","very",
    "just","also","now","here","there","when","where","why","how","all",
    "each","every","both","few","more","most","other","some","such","only",
    "own","same","than","just","hello","hi","hey","dear","please","thank",
    "thanks","regards","best","sincerely","kindly","great","good","well",
}

TOPIC_SIGNAL_KEYWORDS = {
    "billing":    ["invoice","payment","charge","refund","fee","subscription","billing","cost","price"],
    "technical":  ["bug","error","crash","api","server","integration","deploy","bug","fix","issue"],
    "sales":      ["demo","trial","pricing","quote","proposal","purchase","enterprise","buy"],
    "contract":   ["contract","agreement","nda","sow","legal","terms","sign","renewal"],
    "meeting":    ["call","meeting","schedule","calendar","zoom","webinar","availability"],
    "support":    ["help","support","ticket","case","escalate","urgent","resolve","response"],
    "hr":         ["hiring","resume","interview","vacancy","job","career","payroll"],
    "executive":  ["ceo","executive","board","founder","investor","strategic","enterprise"],
}


def _tokenize(text: str) -> list[str]:
    words = re.findall(r"[a-zA-Z]{2,}", text.lower())
    return [w for w in words if w not in STOP_WORDS]


def _topic_signature(words: list[str]) -> list[str]:
    """Return list of detected topics from word list."""
    found = []
    for topic, kws in TOPIC_SIGNAL_KEYWORDS.items():
        hits = sum(1 for w in words if w in kws)
        if hits >= 2:
            found.append(topic)
    return found


def _shannon_entropy(tokens: list[str]) -> float:
    """Compute Shannon entropy of a token distribution."""
    if not tokens:
        return 0.0
    counts  = Counter(tokens)
    total   = len(tokens)
    entropy = 0.0
    for c in counts.values():
        p = c / total
        if p > 0:
            entropy -= p * math.log2(p)
    return round(entropy, 4)


def _coherence_score(topic_sequence: list[list[str]]) -> float:
    """
    Compute inter-message topic coherence.
    Coherence = fraction of consecutive pairs that share at least 1 topic.
    """
    if len(topic_sequence) < 2:
        return 1.0
    shared = 0
    pairs  = 0
    for i in range(len(topic_sequence) - 1):
        s1 = set(topic_sequence[i])
        s2 = set(topic_sequence[i+1])
        if s1 and s2:
            pairs += 1
            if s1 & s2:
                shared += 1
    return round(shared / pairs, 4) if pairs else 1.0


def _subject_drift_score(email_sequence: list[dict]) -> float:
    """
    Compute how much the subject line drifts across thread.
    Returns 0 (identical) → 1 (completely different subjects).
    """
    if len(email_sequence) < 2:
        return 0.0
    first_subj = (email_sequence[0].get("subject","") or "").lower()
    drifts = 0
    for e in email_sequence[1:]:
        subj = (e.get("subject","") or "").lower()
        if not subj:
            continue
        # Normalize: remove "Re:", "Fwd:", etc.
        norm = re.sub(r'^(re:|fwd:|re\s+|fw\s+:)', '', subj).strip()
        # Remove common filler
        first_norm = re.sub(r'^(re:|fwd:|re\s+|fw\s+:)', '', first_subj).strip()
        if norm != first_norm:
            # Compute Jaccard distance on words
            w1 = set(first_norm.split())
            w2 = set(norm.split())
            jaccard = 1 - len(w1 & w2) / max(len(w1 | w2), 1)
            drifts += jaccard
    return round(drifts / max(len(email_sequence)-1, 1), 3)


def _time_gap_anomalies(email_sequence: list[dict]) -> list[dict]:
    """
    Detect unusually long silences in thread.
    Returns [{index, gap_hours, is_anomaly}] for each mail after the first.
    """
    anomalies = []
    if len(email_sequence) < 2:
        return anomalies
    for i in range(1, len(email_sequence)):
        prev_ts = email_sequence[i-1].get("_ts") or email_sequence[i-1].get("ts") or ""
        cur_ts  = email_sequence[i].get("_ts")   or email_sequence[i].get("ts")   or ""
        if not prev_ts or not cur_ts:
            continue
        try:
            t_prev = datetime.fromisoformat(prev_ts.replace("Z","+00:00"))
            t_cur  = datetime.fromisoformat(cur_ts.replace("Z","+00:00"))
            gap_h  = (t_cur - t_prev).total_seconds() / 3600
            if gap_h > 72:  # 3+ days of silence = new topic likely started
                anomalies.append({
                    "index": i, "gap_hours": round(gap_h, 1),
                    "is_anomaly": True, "reason": "long_silence",
                    "new_topic_likely": True,
                })
        except Exception:
            pass
    return anomalies


# ── Public API ─────────────────────────────────────────────────────────────────

def analyze_thread(thread_id: str, email_sequence: list[dict]) -> dict:
    """
    Full entropy analysis of an email thread.

    Returns:
        {
            thread_id,
            entropy_score:       float (0 = focused, high = chaotic),
            coherence_score:     float (0–1, 1 = perfectly coherent),
            subject_drift:       float (0–1, 1 = fully drifted),
            topics_detected:     list[str],
            sub_thread_boundaries: list[int] (email indices where split recommended),
            split_recommendations: list[dict],   # [{boundary_at, reason}]
            reasoning:           str,
            time_anomalies:      list[dict],
        }
    """
    if not email_sequence:
        return {"thread_id": thread_id, "error": "empty_sequence"}

    # Tokenize and topic-profile each email
    topic_sequence = []
    all_tokens     = []
    for email in email_sequence:
        text = f"{email.get('subject','')} {email.get('snippet','')} {email.get('body','')}"
        tokens = _tokenize(text)
        all_tokens.extend(tokens)
        topics = _topic_signature(tokens)
        topic_sequence.append(topics)

    # Global entropy across entire thread
    entropy_score = _shannon_entropy(all_tokens)

    # Per-email entropy
    per_email_entropy = [_shannon_entropy(_tokenize(
        f"{e.get('subject','')} {e.get('snippet','')} {e.get('body','')}"
    )) for e in email_sequence]

    # Coherence: inter-message topic overlap
    coherence = _coherence_score(topic_sequence)

    # Subject drift
    subject_drift = _subject_drift_score(email_sequence)

    # Time-gap anomalies
    anomalies = _time_gap_anomalies(email_sequence)

    # Identify sub-thread boundaries
    boundaries = []
    for i in range(1, len(topic_sequence)):
        prev_topics = set(topic_sequence[i-1])
        cur_topics  = set(topic_sequence[i])
        if not prev_topics or not cur_topics:
            continue
        overlap = len(prev_topics & cur_topics)
        # If 0 overlap and both emails have clear topics → likely new sub-thread
        if overlap == 0 and prev_topics and cur_topics:
            boundaries.append(i)

    # Split recommendations
    splits = []
    for b in boundaries:
        splits.append({
            "boundary_after_index": b - 1,
            "reason": f"topics changed from {topic_sequence[b-1]} to {topic_sequence[b]}",
            "new_topic_in_email": email_sequence[b].get("subject", ""),
        })

    # Overall entropy normalized (0-100 scale, where >60 = chaotic)
    norm_entropy = min(100, entropy_score * 12)
    reasoning_tokens = all_tokens[:8]

    return {
        "thread_id": thread_id,
        "entropy_score": round(entropy_score, 4),
        "norm_entropy_pct": round(norm_entropy, 1),
        "coherence_score": coherence,
        "subject_drift": subject_drift,
        "topics_detected": list(set(t for ts in topic_sequence for t in ts)),
        "sub_thread_boundaries": boundaries,
        "split_recommendations": splits,
        "reasoning": f"entropy={entropy_score:.3f} coherence={coherence} drift={subject_drift}",
        "time_anomalies": anomalies,
        "per_email_entropy": [round(e,3) for e in per_email_entropy],
    }


def score_message_coherence(email_sequence: list[dict]) -> float:
    """Quick coherence score only — returns 0-1."""
    if not email_sequence:
        return 1.0
    topic_seq = []
    for e in email_sequence:
        tokens = _tokenize(f"{e.get('subject','')} {e.get('snippet','')} {e.get('body','')}")
        topic_seq.append(_topic_signature(tokens))
    return _coherence_score(topic_seq)


def suggest_thread_split(thread_id: str, email_sequence: list[dict]) -> list[dict]:
    """
    Returns a list of email sub-threads that should possibly be split off.
    Each sub-thread: {start_index, end_index, topics[], entropy}
    """
    top_level = analyze_thread(thread_id, email_sequence)
    if top_level.get("error"):
        return []
    splits = top_level.get("split_recommendations", [])
    if not splits:
        return [{"sub_thread": "all", "start": 0, "end": len(email_sequence)-1,
                 "entropy": top_level["entropy_score"], "topics": top_level["topics_detected"]}]
    result = []
    prev_boundary = 0
    for sp in splits:
        boundary = sp["boundary_after_index"]
        sub_emails = email_sequence[prev_boundary:boundary+1]
        sub_tokens = []
        for e in sub_emails:
            sub_tokens.extend(_tokenize(f"{e.get('subject','')} {e.get('snippet','')}"))
        result.append({
            "start": prev_boundary,
            "end":   boundary,
            "topics": list(set(_topic_signature(sub_tokens))),
            "entropy": round(_shannon_entropy(sub_tokens), 3),
            "subject": email_sequence[prev_boundary].get("subject","")[:60],
        })
        prev_boundary = boundary + 1
    # Last sub-thread
    if prev_boundary < len(email_sequence):
        sub_emails = email_sequence[prev_boundary:]
        sub_tokens = sum([_tokenize(f"{e.get('subject','')} {e.get('snippet','')}") for e in sub_emails], [])
        result.append({
            "start": prev_boundary,
            "end": len(email_sequence)-1,
            "topics": list(set(_topic_signature(sub_tokens))),
            "entropy": round(_shannon_entropy(sub_tokens), 3),
            "subject": email_sequence[prev_boundary].get("subject","")[:60],
        })
    return result


def log_entropy(thread_id: str, analysis: dict) -> None:
    """Persist analysis result."""
    try:
        with LOG_PATH.open("a") as f:
            f.write(json.dumps({
                "ts": datetime.now(timezone.utc).isoformat(),
                "thread_id": thread_id,
                "analysis": analysis,
            }, ensure_ascii=False) + "\n")
    except Exception:
        pass
