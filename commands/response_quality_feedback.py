#!/usr/bin/env python3
"""
Response Quality Feedback Loop for Intelligent Email Responder.

Scores the quality of generated email responses using heuristics and logs
them for continuous improvement.
"""

import json
import re
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, Any

WORKSPACE = Path(__file__).resolve().parent.parent
DATA = WORKSPACE / 'data'
QUALITY_LOG = DATA / 'response_quality.jsonl'

# Spammy phrases to penalize
SPAMMY_PHRASES = [
    r'click here',
    r'free\s+money',
    r'limited\s+time',
    r'act\s+now',
    r'guaranteed',
    r'no\s+cost',
    r'risk\s+free',
    r'earn\s+cash',
    r'work\s+from\s+home',
    r'debt\s+free',
    r'credit\s+card\s+offer',
    r'weight\s+loss',
    r'diet\s+pill',
    r'casino',
    r'gambling',
    r'viagra',
    r'cialis',
    r'pharmacy',
    r'loan\s+approval',
    r'mortgage\s+rate',
]

# Greeting patterns
GREETING_PATTERNS = [
    r'^hi[^,!]*[,.!]?\s',
    r'^hello[^,!]*[,.!]?\s',
    r'^dear[^,!]*[,.!]?\s',
    r'^hey[^,!]*[,.!]?\s',
    r'^greetings[^,!]*[,.!]?\s',
    r'^good\s+(morning|afternoon|evening)[^,!]*[,.!]?\s',
]

# Closing patterns
CLOSING_PATTERNS = [
    r'[\s\S]*\bthanks[,.!]?\s*$',
    r'[\s\S]*\bthank\s+you[,.!]?\s*$',
    r'[\s\S]*\bbest\s+regards[,.!]?\s*$',
    r'[\s\S]*\bkind\s+regards[,.!]?\s*$',
    r'[\s\S]*\bsincerely[,.!]?\s*$',
    r'[\s\S]*\bregards[,.!]?\s*$',
    r'[\s\S]*\bcheers[,.!]?\s*$',
    r'[\s\S]*\bhave\s+a\s+(good|great|nice)\s+day[,.!]?\s*$',
]

def _score_response_quality(response_body: str, email_data: Dict[str, Any]) -> float:
    """
    Heuristic scoring of email response quality (0-100).
    
    Factors:
    - Length: ideal between 50 and 500 characters (outside this range gets lower score)
    - Presence of greeting
    - Presence of closing
    - Absence of spammy phrases
    - Not excessive punctuation or caps
    - Basic sentence structure (has at least one sentence)
    """
    if not response_body or not isinstance(response_body, str):
        return 0.0
    
    score = 100.0
    body = response_body.strip()
    
    # 1. Length score (40 points)
    length = len(body)
    if 50 <= length <= 500:
        length_score = 40.0
    elif length < 50:
        length_score = 40.0 * (length / 50.0)  # linear from 0 to 40
    else:  # > 500
        length_score = 40.0 * (500.0 / length)  # inverse, but cap at 40
        if length_score > 40:
            length_score = 40.0
    
    # 2. Greeting (15 points)
    greeting_score = 0.0
    for pattern in GREETING_PATTERNS:
        if re.search(pattern, body, re.IGNORECASE):
            greeting_score = 15.0
            break
    
    # 3. Closing (15 points)
    closing_score = 0.0
    for pattern in CLOSING_PATTERNS:
        if re.search(pattern, body, re.IGNORECASE):
            closing_score = 15.0
            break
    
    # 4. Spammy phrases (20 points penalty)
    spam_penalty = 0.0
    for pattern in SPAMMY_PHRASES:
        if re.search(pattern, body, re.IGNORECASE):
            spam_penalty += 5.0  # 5 points per spam phrase found
    spam_penalty = min(spam_penalty, 20.0)  # cap at 20
    
    # 5. Excessive punctuation or caps (10 points penalty)
    punct_penalty = 0.0
    if body.count('!') > 3:
        punct_penalty += 5.0
    if body.count('?') > 3:
        punct_penalty += 5.0
    # Check for excessive caps (more than half the letters are uppercase and length > 10)
    if length > 10:
        upper_count = sum(1 for c in body if c.isupper())
        letter_count = sum(1 for c in body if c.isalpha())
        if letter_count > 0 and (upper_count / letter_count) > 0.5:
            punct_penalty += 5.0
    
    # 6. Basic sentence structure (has at least one sentence ending with ., !, or ?) (0 points, just a gate)
    has_sentence_end = bool(re.search(r'[.!?]\s*$|[.!?]\s+\w', body))
    if not has_sentence_end and length > 20:  # penalize very long responses without sentence endings
        punct_penalty += 10.0
    
    # Calculate final score
    score = length_score + greeting_score + closing_score - spam_penalty - punct_penalty
    # Ensure score is between 0 and 100
    score = max(0.0, min(100.0, score))
    
    return round(score, 2)

def _log_response_quality(email_id: str, quality_score: float, response_body: str, email_data: Dict[str, Any]) -> None:
    """
    Log response quality to JSONL file.
    """
    try:
        QUALITY_LOG.parent.mkdir(parents=True, exist_ok=True)
        record = {
            "email_id": email_id,
            "quality_score": quality_score,
            "response_body_preview": response_body[:200] if response_body else "",
            "sender": email_data.get("sender", ""),
            "thread_id": email_data.get("threadId", ""),
            "subject": email_data.get("subject", ""),
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }
        with open(QUALITY_LOG, 'a', encoding='utf-8') as f:
            f.write(json.dumps(record, ensure_ascii=False) + '\n')
    except Exception:
        # Fail silently to not disrupt email processing
        pass

def analyze_quality_trends(window_hours: int = 24) -> Dict[str, Any]:
    """
    Analyze recent quality logs to identify trends.
    Returns a dict with average quality, count, and low-quality examples.
    """
    try:
        if not QUALITY_LOG.exists():
            return {"error": "No quality log found"}
        
        from datetime import timedelta
        cutoff = datetime.now(timezone.utc) - timedelta(hours=window_hours)
        
        total_score = 0.0
        count = 0
        low_quality = []  # scores < 60
        
        with open(QUALITY_LOG, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    record = json.loads(line)
                    ts_str = record.get("timestamp")
                    if not ts_str:
                        continue
                    record_time = datetime.fromisoformat(ts_str.replace('Z', '+00:00'))
                    if record_time < cutoff:
                        continue
                    score = record.get("quality_score")
                    if score is None:
                        continue
                    total_score += score
                    count += 1
                    if score < 60:
                        low_quality.append(record)
                except (json.JSONDecodeError, ValueError):
                    continue
        
        avg_score = total_score / count if count > 0 else 0.0
        
        return {
            "window_hours": window_hours,
            "count": count,
            "average_quality": round(avg_score, 2),
            "low_quality_count": len(low_quality),
            "low_quality_examples": low_quality[:5],  # first 5 examples
        }
    except Exception as e:
        return {"error": str(e)}