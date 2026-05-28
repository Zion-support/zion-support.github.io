#!/usr/bin/env python3
"""
V48: Email Sentiment Shift Detector
Monitors tone changes within an email thread — detects frustration, escalation signals,
satisfaction drops, and satisfaction improvements. Triggers alerts or response adjustments
when sentiment shifts significantly.

Key features:
  - detect_sentiment_shift(): compares current email vs thread baseline → flags shifts
  - get_thread_sentiment_baseline(): rolling average sentiment of thread
  - update_baseline(): updates baseline after each email exchange
  - get_escalation_signal(): returns escalation level (none/low/medium/high/critical)
  - adjust_response_for_sentiment(): modifies tone/priority based on shift

Data: data/email_sentiment_baselines.jsonl, data/email_sentiment_log.jsonl
"""
import json, re, os
from collections import defaultdict
from datetime import datetime, timezone
from typing import Literal

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, '..', '..', 'data')
BASELINE_FILE = os.path.join(DATA_DIR, 'email_sentiment_baselines.jsonl')
LOG_FILE = os.path.join(DATA_DIR, 'email_sentiment_log.jsonl')
os.makedirs(DATA_DIR, exist_ok=True)

# ── Sentiment lexicon (Valence-aware Lexicon for Sentiment Reasoning) ──────────
VALENCE_LEXICON = {
    # Strongly positive
    'excellent': 2.0, 'outstanding': 2.0, 'amazing': 2.0, 'fantastic': 2.0,
    'love': 1.8, 'perfect': 2.0, 'brilliant': 1.8, 'superb': 1.8,
    'delighted': 1.8, 'thrilled': 1.8, 'impressed': 1.5, 'grateful': 1.5,
    # Positive
    'great': 1.2, 'good': 1.0, 'nice': 0.8, 'helpful': 0.8,
    'appreciate': 1.0, 'thankful': 1.0, 'thanks': 0.8, 'thank': 0.8,
    'happy': 1.0, 'pleased': 1.0, 'satisfied': 1.0, 'excited': 1.2,
    'wonderful': 1.5, 'helpful': 0.8, 'resolved': 1.0, 'working': 0.6,
    'fast': 0.7, 'quick': 0.7, 'efficient': 0.8, 'smooth': 0.7,
    'recommend': 1.0, 'reliable': 0.8, 'professional': 0.8,
    # Slightly positive
    'ok': 0.1, 'fine': 0.2, 'adequate': 0.1, 'reasonable': 0.2,
    # Negative
    'bad': -1.0, 'poor': -1.2, 'slow': -0.8, 'difficult': -0.8,
    'frustrated': -1.8, 'frustrating': -1.8, 'annoyed': -1.5, 'annoying': -1.5,
    'angry': -2.0, 'upset': -1.5, 'disappointed': -1.5, 'disappointing': -1.5,
    'unhappy': -1.5, 'unacceptable': -2.0, 'terrible': -2.0, 'horrible': -2.0,
    'broken': -1.5, 'failing': -1.5, 'failed': -1.5, 'failure': -1.5,
    'issue': -0.6, 'problem': -0.8, 'bug': -0.8, 'error': -0.7,
    'confusing': -1.0, 'confused': -1.0, 'unclear': -0.7,
    'concern': -0.7, 'concerned': -0.8, 'worried': -1.0, 'worry': -0.8,
    'unfortunate': -1.0, 'regret': -1.0, 'sorry': -0.3,
    'skeptical': -0.5, 'doubtful': -0.5, 'uncertain': -0.4,
    'delay': -0.8, 'delayed': -0.8, 'waiting': -0.6, 'wait': -0.4,
    'expensive': -0.8, 'overpriced': -1.2, 'costly': -0.8,
    # Strongly negative
    'disaster': -2.5, 'catastrophe': -2.5, 'ridiculous': -2.0,
    'outrageous': -2.0, 'insulting': -2.0, 'useless': -2.0,
    'never': -0.5, 'nothing': -0.3, 'nobody': -0.3,
    'cancel': -1.0, 'cancellation': -1.0, 'refund': -1.0,
}

# ── Escalation trigger phrases ────────────────────────────────────────────────
ESCALATION_PHRASES = {
    'critical': [
        'lawsuit', 'legal action', 'sue', 'lawyer', 'attorney',
        'escalate to', 'executive escalation', 'ceo', 'cfo', 'board',
        'breach of contract', 'material breach', 'fraud', 'violation',
        'regulatory', 'complaint', 'ombudsman', 'media', 'press',
    ],
    'high': [
        'disappointed', 'unacceptable', 'horrible', 'terrible',
        'cancel', 'cancellation', 'refund', 'demand', 'insist',
        'supervisor', 'manager', 'escalate', 'escalation',
        'broken promise', 'misled', 'deceived', 'furious',
        'second time', 'still not', 'still broken', 'never received',
        'full refund', 'compensation', 'penalty',
    ],
    'medium': [
        'frustrated', 'frustrating', 'annoyed', 'annoying',
        'concerned', 'concern', 'unhappy', 'upset',
        'waiting', 'delay', 'delayed', 'overdue',
        'confusing', 'confused', 'not clear', 'doubt',
        'disappointed', 'unsatisfied', 'inadequate',
        'issue', 'problem', 'errors', 'mistake',
        'not good', 'not happy', 'not impressed',
    ],
    'low': [
        'ok', 'fine', 'adequate', 'reasonable',
        'could be better', 'improve', 'improvement',
        'slow', 'slower', 'faster', 'quickly',
        'not ideal', 'minor', 'small issue', 'glitch',
    ],
}

# ── Positive momentum phrases ──────────────────────────────────────────────────
POSITIVE_MOMENTUM = [
    'thank you', 'thanks', 'grateful', 'appreciate',
    'excellent', 'outstanding', 'perfect', 'amazing',
    'resolved', 'solved', 'fixed', 'working now',
    'great job', 'well done', 'impressive',
    'looking forward', 'excited', 'thrilled',
    'happy', 'satisfied', 'pleased',
    'recommend', 'refer', 'testimonial',
]

NEGATIVE_MOMENTUM = [
    'still not', 'still broken', 'still failing', 'still waiting',
    'nothing changed', 'no improvement', 'no progress',
    'getting worse', 'worse than', 'deteriorated',
    'third time', 'fourth time', '多次', 'again',
    'same issue', 'same problem', 'repeated',
    'not fixed', 'unresolved', 'outstanding',
    'despite', 'regardless', 'even though',
]


def score_sentiment(text: str) -> dict:
    """Return sentiment score, confidence, and dominant emotion for a text."""
    words = re.findall(r'\b\w+\b', (text or '').lower())
    if not words:
        return {'score': 0.0, 'confidence': 0.0, 'word_count': 0, 'matches': []}

    total = 0.0
    matched = []
    for word in words:
        if word in VALENCE_LEXICON:
            total += VALENCE_LEXICON[word]
            matched.append((word, VALENCE_LEXICON[word]))

    # Normalize by word count (diminishing returns for very long texts)
    norm = min(len(words) / 50.0, 1.0)
    score = total * norm
    # Clamp to [-2, 2]
    score = max(-2.0, min(2.0, score))
    confidence = min(len(matched) / max(len(words), 1), 1.0) * 0.8

    # Dominant emotion
    emotion = 'neutral'
    if score >= 1.0:
        emotion = 'positive'
    elif score <= -1.0:
        emotion = 'negative'
    elif score > 0.1:
        emotion = 'slightly_positive'
    elif score < -0.1:
        emotion = 'slightly_negative'

    return {
        'score': round(score, 3),
        'confidence': round(confidence, 3),
        'word_count': len(words),
        'matches': len(matched),
        'emotion': emotion,
    }


def detect_sentiment_shift(
    current_text: str,
    thread_id: str,
    thread_emails: list = None,
    window_size: int = 5,
) -> dict:
    """
    Main entry point: detect sentiment shift between current email and thread baseline.

    Returns:
      { 'shift': float, 'direction': str, 'escalation': str,
        'current': dict, 'baseline': float, 'alerts': list }
    """
    current = score_sentiment(current_text)
    baseline = get_thread_sentiment_baseline(thread_id, thread_emails, window_size)

    shift = current['score'] - baseline
    abs_shift = abs(shift)

    # Direction
    if shift > 0.15:
        direction = 'improving'
    elif shift < -0.15:
        direction = 'deteriorating'
    else:
        direction = 'stable'

    # Escalation level
    escalation = get_escalation_signal(current_text, direction, shift)

    # Generate alerts
    alerts = []
    if direction == 'deteriorating' and abs_shift > 0.5:
        alerts.append('⚠️ Sentiment declining — consider empathetic tone adjustment')
    if escalation in ('high', 'critical'):
        alerts.append(f'🚨 {escalation.upper()} escalation signal detected — prioritize response')
    if 'not fixed' in current_text.lower() or 'still broken' in current_text.lower():
        alerts.append('🔁 Repeated issue flag — check prior tickets before responding')
    if direction == 'improving' and abs_shift > 0.5:
        alerts.append('✅ Positive momentum — reinforce with acknowledgment and next steps')
    if current['score'] < -1.0:
        alerts.append('😠 Strong negative sentiment — do not match negativity, de-escalate')

    return {
        'shift': round(shift, 3),
        'direction': direction,
        'escalation': escalation,
        'current': current,
        'baseline': round(baseline, 3),
        'alerts': alerts,
        'score_delta': f"{'+' if shift >= 0 else ''}{shift:.2f}",
    }


def get_thread_sentiment_baseline(
    thread_id: str,
    thread_emails: list = None,
    window_size: int = 5,
) -> float:
    """Compute rolling average sentiment from thread history or stored baselines."""
    # Load from stored baselines
    stored = _load_baselines()
    if thread_id in stored:
        return stored[thread_id].get('baseline', 0.0)

    # Compute from thread_emails if provided
    if thread_emails:
        texts = [e.get('body', '') + ' ' + e.get('subject', '') for e in thread_emails[-window_size:]]
        if texts:
            scores = [score_sentiment(t)['score'] for t in texts]
            avg = sum(scores) / len(scores)
            _save_baseline(thread_id, avg, len(thread_emails))
            return avg

    return 0.0


def update_baseline(thread_id: str, sentiment_score: float) -> None:
    """After processing an email, update the rolling baseline for the thread."""
    stored = _load_baselines()
    current = stored.get(thread_id, {'baseline': 0.0, 'count': 0})
    n = current['count']
    # Rolling average update
    new_baseline = (current['baseline'] * n + sentiment_score) / (n + 1)
    stored[thread_id] = {
        'baseline': new_baseline,
        'count': n + 1,
        'last_updated': datetime.now(timezone.utc).isoformat(),
    }
    _save_all_baselines(stored)


def get_escalation_signal(
    text: str,
    direction: str,
    shift: float,
) -> Literal['none', 'low', 'medium', 'high', 'critical']:
    """Return escalation level based on current text, direction, and shift magnitude."""
    text_lower = (text or '').lower()

    # Check critical phrases first
    for phrase in ESCALATION_PHRASES['critical']:
        if phrase in text_lower:
            return 'critical'
    for phrase in ESCALATION_PHRASES['high']:
        if phrase in text_lower:
            return 'high'
    for phrase in ESCALATION_PHRASES['medium']:
        if phrase in text_lower:
            return 'medium'
    for phrase in ESCALATION_PHRASES['low']:
        if phrase in text_lower:
            return 'low'

    # Pure shift-based
    abs_shift = abs(shift)
    if abs_shift > 1.5 and direction == 'deteriorating':
        return 'high'
    if abs_shift > 0.8 and direction == 'deteriorating':
        return 'medium'
    if abs_shift > 0.4 and direction == 'deteriorating':
        return 'low'

    return 'none'


def adjust_response_for_sentiment(
    draft: str,
    shift_result: dict,
    intent: str = 'general',
) -> dict:
    """
    Given a draft and sentiment shift result, suggest tone/priority adjustments.

    Returns:
      { 'adjusted_draft': str, 'tone_change': str, 'priority_change': str,
        'replyall_suggestion': str, 'notes': list }
    """
    current_score = shift_result['current']['score']
    direction = shift_result['direction']
    escalation = shift_result['escalation']

    notes = []
    tone_change = 'none'
    priority_change = 'normal'
    replyall_suggestion = 'use_normal_judgment'
    adjusted_draft = draft

    if escalation == 'critical':
        tone_change = 'formal + empathetic'
        priority_change = 'urgent'
        replyall_suggestion = 'reply_all_with_care'
        notes.append('Critical escalation: use formal, empathetic tone. CC manager if not already included.')
        notes.append('Do NOT match negativity — acknowledge, apologize, and escalate internally.')
    elif escalation == 'high':
        tone_change = 'formal + warm'
        priority_change = 'high'
        replyall_suggestion = 'reply_all_if_stakeholders_present'
        notes.append('High escalation: acknowledge frustration explicitly. Do not be dismissive.')
        notes.append('Offer concrete next steps or escalation path.')
    elif escalation == 'medium':
        tone_change = 'balanced + understanding'
        priority_change = 'elevated'
        replyall_suggestion = 'reply_all_if_stakeholders_present'
        notes.append('Medium escalation: validate their concern. Show understanding of the issue.')
    elif direction == 'deteriorating' and shift_result['shift'] < -0.5:
        tone_change = 'warm + solution_focused'
        priority_change = 'elevated'
        notes.append('Sentiment declining: focus on resolution, not explanation.')
    elif direction == 'improving' and shift_result['shift'] > 0.5:
        tone_change = 'positive + reinforcing'
        priority_change = 'normal'
        replyall_suggestion = 'reply_all_with_appreciation'
        notes.append('Positive momentum: acknowledge progress, confirm next steps clearly.')
        notes.append('This is a good time to solidify the relationship.')

    if current_score < -1.0:
        notes.append('⚠️ Strong negative emotion detected — avoid defensive language. Acknowledge first.')

    return {
        'adjusted_draft': adjusted_draft,
        'tone_change': tone_change,
        'priority_change': priority_change,
        'replyall_suggestion': replyall_suggestion,
        'notes': notes,
        'escalation': escalation,
        'sentiment_score_delta': shift_result['score_delta'],
    }


def _load_baselines() -> dict:
    if not os.path.exists(BASELINE_FILE):
        return {}
    baselines = {}
    with open(BASELINE_FILE, 'r', encoding='utf-8') as f:
        for line in f:
            try:
                entry = json.loads(line.strip())
                baselines[entry['thread_id']] = entry
            except (json.JSONDecodeError, ValueError, KeyError):
                continue
    return baselines


def _save_baseline(thread_id: str, baseline: float, email_count: int) -> None:
    record = {
        'thread_id': thread_id,
        'baseline': baseline,
        'count': email_count,
        'last_updated': datetime.now(timezone.utc).isoformat(),
    }
    with open(BASELINE_FILE, 'a', encoding='utf-8') as f:
        f.write(json.dumps(record, ensure_ascii=False) + '\n')


def _save_all_baselines(baselines: dict) -> None:
    with open(BASELINE_FILE, 'w', encoding='utf-8') as f:
        for thread_id, entry in baselines.items():
            f.write(json.dumps(entry, ensure_ascii=False) + '\n')


def log_sentiment(thread_id: str, email_text: str, result: dict) -> None:
    """Log sentiment analysis result for audit trail."""
    record = {
        'timestamp': datetime.now(timezone.utc).isoformat(),
        'thread_id': thread_id,
        'score': result['current']['score'],
        'emotion': result['current']['emotion'],
        'direction': result['direction'],
        'escalation': result['escalation'],
        'alerts': result['alerts'],
        'word_count': result['current']['word_count'],
    }
    with open(LOG_FILE, 'a', encoding='utf-8') as f:
        f.write(json.dumps(record, ensure_ascii=False) + '\n')


# ── CLI test ──────────────────────────────────────────────────────────────────
if __name__ == '__main__':
    print("=" * 60)
    print("V48: Email Sentiment Shift Detector — Test Suite")
    print("=" * 60)

    test_cases = [
        {
            'label': 'Normal inquiry',
            'sender': 'john@client.com',
            'subject': 'Question about pricing',
            'body': 'Hi, I wanted to ask about your pricing for the enterprise plan. '
                    'Could you send me a quote? Thanks!',
        },
        {
            'label': 'Frustrated customer — delayed response',
            'sender': 'sarah@client.com',
            'subject': 'This is unacceptable — still waiting',
            'body': 'I have been waiting for over a week now. This is unacceptable. '
                    'We need this resolved immediately or we will have to look elsewhere. '
                    'Disappointed is an understatement.',
        },
        {
            'label': 'Escalation — demanding manager',
            'sender': 'cto@enterprise.com',
            'subject': 'URGENT: Executive Escalation — Contract Violation',
            'body': 'This situation has gone on long enough. If this is not resolved '
                    'within 48 hours we will be forced to explore legal options. '
                    'I am escalating this to our CEO and board.',
        },
        {
            'label': 'Positive momentum — resolved!',
            'sender': 'lisa@partner.com',
            'subject': 'Great news — issue resolved!',
            'body': 'Thank you so much! The fix worked perfectly. We are very impressed '
                    'with how quickly your team responded. Looking forward to continuing '
                    'our partnership. Excellent service!',
        },
        {
            'label': 'Mild concern — could improve',
            'sender': 'mike@client.com',
            'subject': 'RE: Integration status',
            'body': 'Hi, just checking in on the integration progress. Things seem a bit slow '
                    'and the documentation could be clearer. Not a major issue but could be better.',
        },
    ]

    thread_id = 'test-thread-v48'

    for tc in test_cases:
        print(f"\n{'─'*60}")
        print(f"Test: {tc['label']}")
        print(f"  Subject: {tc['subject']}")
        print(f"  Body: {tc['body'][:80]}...")

        shift = detect_sentiment_shift(tc['body'], thread_id)
        print(f"\n  Sentiment score: {shift['current']['score']:.2f} "
              f"({shift['current']['emotion']}) | confidence: {shift['current']['confidence']:.2f}")
        print(f"  Baseline: {shift['baseline']:.2f} | Shift: {shift['score_delta']} "
              f"({shift['direction']})")
        print(f"  Escalation: {shift['escalation'].upper()}")
        if shift['alerts']:
            for alert in shift['alerts']:
                print(f"  {alert}")

        # Test response adjustment
        sample_draft = f"Hi, thank you for your email regarding: {tc['subject']}"
        adjustment = adjust_response_for_sentiment(sample_draft, shift)
        print(f"\n  Tone adjustment: {adjustment['tone_change']}")
        print(f"  Priority: {adjustment['priority_change']}")
        print(f"  Reply-All: {adjustment['replyall_suggestion']}")

        update_baseline(thread_id, shift['current']['score'])
        log_sentiment(thread_id, tc['body'], shift)

    print(f"\n{'─'*60}")
    print("All tests complete. Baseline and log files updated.")
    print(f"Baseline file: {BASELINE_FILE}")
    print(f"Log file: {LOG_FILE}")
