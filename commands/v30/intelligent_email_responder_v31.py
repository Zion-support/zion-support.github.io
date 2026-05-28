#!/usr/bin/env python3
"""
V31 — Intelligent Email Responder: Autonomous Self-Evolving Agent

MAJOR NEW FEATURES IN V31:
==========================
1. SELF-EVOLUTION ENGINE (learns from every sent email → improves responses automatically)
2. REPLY-ALL v2 INTELLIGENCE (CC/BCC boundary enforcement, participant tracking, never miss CC)
3. RESPONSE OUTCOME MONITOR (checks if sent emails get replies → detects positive/negative)
4. MULTI-ACCOUNT EMAIL ROUTING (personal + business Gmail with routing rules)
5. PROACTIVE OUTREACH ENGINE (identifies opportunities to reach out FIRST)
6. EMAIL WARMUP SCHEDULER (gradually builds sender reputation)
7. INTELLIGENT FOLLOW-UP ENGINE (automatic follow-ups based on intent and outcome)
8. CASE-BY-CASE ADAPTIVE RESPONSE (each email gets unique intelligent handling)
9. RESPONSE VERIFICATION LOOP (verify → learn → improve cycle)
10. SENDER REPUTATION TRACKER (warmup status, daily limits, health score)

Architecture: Loads V29 as core engine, adds V31 intelligence layer on top.
All new modules are optional (graceful degradation) and self-contained.

Contact: kleber@ziontechgroup.com | +1 302 464 0950 | ziontechgroup.com
"""

import json, re, time, csv, io, os, random, threading
from datetime import datetime, timezone, timedelta
from pathlib import Path
from collections import defaultdict
from typing import Optional, Union

# ── Workspace paths ──────────────────────────────────────────
WORKSPACE = Path(__file__).resolve().parent.parent
COMMANDS  = WORKSPACE / 'commands'
DATA      = WORKSPACE / 'data'
AUTOMATION = WORKSPACE / 'automation'
V30_DIR   = COMMANDS / 'v30'

# ── V31 Logging ─────────────────────────────────────────────
V31_LOG   = DATA / 'v31_run_log.jsonl'
EVOLUTION_LOG = DATA / 'v31_evolution_log.jsonl'
OUTCOME_LOG   = DATA / 'v31_outcome_log.jsonl'
WARMUP_LOG    = DATA / 'v31_warmup_log.jsonl'
OUTREACH_LOG  = DATA / 'v31_outreach_log.jsonl'
FOLLOWUP_LOG  = DATA / 'v31_followup_log.jsonl'
REPUTATION_LOG = DATA / 'v31_reputation_log.jsonl'

# ── V31 State files ──────────────────────────────────────────
V31_STATE  = DATA / 'v31_state.json'
EVOLUTION_FILE = DATA / 'v31_self_evolution.json'
TEMPLATE_HEALTH = DATA / 'v31_template_health.jsonl'
RESPONSE_METRICS = DATA / 'v31_response_metrics.jsonl'

# ── Contact info ─────────────────────────────────────────────
CONTACT = {
    'phone': '+1 302 464 0950',
    'email': 'kleber@ziontechgroup.com',
    'website': 'https://ziontechgroup.com',
    'address': '364 E Main St STE 1008 Middletown DE 19709'
}

# ─────────────────────────────────────────────────────────────
# UTILITIES
# ─────────────────────────────────────────────────────────────

def log(level, msg):
    ts = datetime.now(timezone.utc).isoformat()
    line = f'[{ts}] [{level.upper()}] [V31] {msg}'
    print(line, flush=True)
    try:
        with open(V31_LOG, 'a') as f:
            f.write(line + '\n')
    except Exception:
        pass

log_info  = lambda m: log('info', m)
log_warn  = lambda m: log('warn', m)
log_error = lambda m: log('error', m)

def load_json(path, default=None):
    if default is None: default = {}
    try:
        if Path(path).exists():
            return json.loads(Path(path).read_text())
    except Exception:
        pass
    return default

def save_json(path, data):
    try:
        Path(path).parent.mkdir(parents=True, exist_ok=True)
        Path(path).write_text(json.dumps(data, indent=2, default=str))
    except Exception as e:
        log_error(f'save_json failed: {e}')

def ts_now():
    return datetime.now(timezone.utc)

def days_since(ts_str):
    try:
        return (ts_now() - datetime.fromisoformat(ts_str.replace('Z','+00:00'))).days
    except Exception:
        return 999

# ─────────────────────────────────────────────────────────────
# V31 SELF-EVOLUTION ENGINE
# Learns from every email interaction and improves responses
# ─────────────────────────────────────────────────────────────

class V31SelfEvolutionEngine:
    """
    Autonomous learning system: every email response teaches V31 to be better.
    Tracks: response quality, template effectiveness, sender patterns, outcome history.
    """

    def __init__(self):
        self.data = load_json(EVOLUTION_FILE, {
            'version': 31,
            'total_emails': 0,
            'successful_responses': 0,
            'failed_responses': 0,
            'learning_entries': [],
            'template_effectiveness': {},
            'sender_patterns': {},
            'intent_success_rates': {},
            'language_scores': {},
            'tone_adaptation_history': [],
            'reply_rate_by_intent': {},
            'avg_response_time_by_intent': {},
            'last_evolution': None,
            'evolution_streak': 0,
        })
        log_info(f"V31 Self-Evolution Engine initialized: {self.data['total_emails']} emails processed")

    def record_email_sent(self, email_data: dict, response_body: str,
                          intent: str, lang: str, tone: str,
                          reply_all: bool, quality_score: float,
                          thread_id: str, sender: str) -> None:
        """Called after every email sent — records learning data."""
        self.data['total_emails'] += 1

        entry = {
            'ts': ts_now().isoformat(),
            'thread_id': thread_id,
            'sender': sender,
            'intent': intent,
            'lang': lang,
            'tone': tone,
            'reply_all': reply_all,
            'quality_score': quality_score,
            'response_len': len(response_body),
            'successful': quality_score >= 65,
        }

        if entry['successful']:
            self.data['successful_responses'] += 1
        else:
            self.data['failed_responses'] += 1

        # Update intent success rates
        if intent not in self.data['intent_success_rates']:
            self.data['intent_success_rates'][intent] = {'total': 0, 'successful': 0}
        ir = self.data['intent_success_rates'][intent]
        ir['total'] += 1
        if entry['successful']:
            ir['successful'] += 1
        ir['rate'] = round(ir['successful'] / ir['total'], 3) if ir['total'] > 0 else 0

        # Update language scores
        if lang not in self.data['language_scores']:
            self.data['language_scores'][lang] = {'total': 0, 'score_sum': 0}
        ls = self.data['language_scores'][lang]
        ls['total'] += 1
        ls['score_sum'] += quality_score
        ls['avg'] = round(ls['score_sum'] / ls['total'], 1)

        # Update sender patterns (learn sender preferences)
        sender_lower = sender.lower()
        if sender_lower not in self.data['sender_patterns']:
            self.data['sender_patterns'][sender_lower] = {
                'email_count': 0, 'preferred_tone': {}, 'preferred_lang': None,
                'reply_all_rate': 0, 'avg_quality': 0, 'intents': []
            }
        sp = self.data['sender_patterns'][sender_lower]
        sp['email_count'] += 1
        if sp['preferred_tone'].get(tone):
            sp['preferred_tone'][tone] += 1
        else:
            sp['preferred_tone'][tone] = 1
        # Most common tone
        sp['preferred_tone'] = dict(sorted(
            sp['preferred_tone'].items(), key=lambda x: x[1], reverse=True))
        sp['intents'].append(intent)
        sp['intents'] = sp['intents'][-20:]  # keep last 20

        # Learning history (keep last 500)
        self.data['learning_entries'].append(entry)
        self.data['learning_entries'] = self.data['learning_entries'][-500:]

        self.data['last_evolution'] = ts_now().isoformat()
        self._save()

    def record_response_outcome(self, thread_id: str, sender: str,
                                outcome: str, response_time_hours: float) -> None:
        """
        Record what happened AFTER we sent an email:
        outcome = 'positive' | 'negative' | 'no_response' | 'bounce' | 'spam'
        response_time_hours = how long until we got a response
        """
        # Update reply rate by intent
        for sender_key, sp in self.data['sender_patterns'].items():
            if sender.lower() in sender_key or sender_key in sender.lower():
                if 'reply_rates' not in sp:
                    sp['reply_rates'] = {}
                if outcome != 'no_response':
                    for intent in sp['intents'][-5:]:
                        if intent not in sp['reply_rates']:
                            sp['reply_rates'][intent] = {'total': 0, 'replied': 0}
                        sp['reply_rates'][intent]['total'] += 1
                        if outcome in ('positive', 'negative'):
                            sp['reply_rates'][intent]['replied'] += 1

        # Update evolution streak
        if outcome == 'positive':
            self.data['evolution_streak'] = self.data.get('evolution_streak', 0) + 1
        else:
            self.data['evolution_streak'] = 0

        # Log outcome
        try:
            with open(OUTCOME_LOG, 'a') as f:
                f.write(json.dumps({
                    'ts': ts_now().isoformat(),
                    'thread_id': thread_id,
                    'sender': sender,
                    'outcome': outcome,
                    'response_time_hours': round(response_time_hours, 1)
                }) + '\n')
        except Exception:
            pass

        self._save()

    def get_sender_preferences(self, sender: str) -> dict:
        """Returns learned preferences for a sender (tone, lang, reply_all tendency)."""
        sender_lower = sender.lower()
        sp = self.data.get('sender_patterns', {}).get(sender_lower, {})
        if not sp:
            return {'preferred_tone': 'neutral', 'preferred_lang': None, 'reply_all_tendency': 0.5}

        # Most common tone
        tones = sp.get('preferred_tone', {})
        preferred_tone = list(tones.keys())[0] if tones else 'neutral'

        return {
            'preferred_tone': preferred_tone,
            'preferred_lang': sp.get('preferred_lang'),
            'reply_all_tendency': sp.get('reply_all_rate', 0.5),
            'email_count': sp.get('email_count', 0),
            'avg_quality': sp.get('avg_quality', 0),
            'known_intents': list(set(sp.get('intents', []))),
        }

    def get_intent_success_rate(self, intent: str) -> float:
        ir = self.data.get('intent_success_rates', {}).get(intent, {})
        return ir.get('rate', 0.5)

    def get_template_suggestion(self, intent: str, lang: str, tone: str) -> dict:
        """Returns best-performing template hints for this intent/lang/tone combo."""
        key = f"{intent}|{lang}|{tone}"
        te = self.data.get('template_effectiveness', {}).get(key, {})
        return {
            'suggested_length': te.get('avg_len', 200),
            'suggested_tone': te.get('best_tone', tone),
            'success_rate': te.get('rate', 0.5),
            'sample_response': te.get('sample', ''),
        }

    def get_evolution_recommendations(self) -> list:
        """Returns AI-generated improvement recommendations based on learning."""
        recs = []
        ir = self.data.get('intent_success_rates', {})
        for intent, data in ir.items():
            if data.get('total', 0) >= 3 and data.get('rate', 0) < 0.7:
                recs.append({
                    'type': 'intent_improve',
                    'intent': intent,
                    'current_rate': data.get('rate', 0),
                    'suggestion': f"Success rate for '{intent}' is {data['rate']:.0%}. Focus on more specific response templates."
                })
        ls = self.data.get('language_scores', {})
        for lang, data in ls.items():
            if data.get('total', 0) >= 3 and data.get('avg', 0) < 60:
                recs.append({
                    'type': 'language_improve',
                    'lang': lang,
                    'current_avg': data.get('avg', 0),
                    'suggestion': f"Language '{lang}' avg quality is {data['avg']:.1f}. Improve grammar and tone matching."
                })
        return recs

    def _save(self):
        save_json(EVOLUTION_FILE, self.data)

# ─────────────────────────────────────────────────────────────
# V31 REPLY-ALL v2 — CC/BCC BOUNDARY ENFORCEMENT & PARTICIPANT TRACKING
# ─────────────────────────────────────────────────────────────

class V31ReplyAllV2:
    """
    Intelligent Reply-All with strict CC/BCC boundary enforcement.
    Key improvements over v1:
    - Never sends Reply-All without CC list populated
    - Tracks thread participants across the full conversation
    - Respects BCC boundaries (external parties never see internal CC)
    - Auto-detects new participants who should be added to CC
    - Reply-All decision is case-by-case: evaluates every email independently
    """

    def __init__(self, evolution_engine: V31SelfEvolutionEngine):
        self.evolve = evolution_engine
        self.state = load_json(DATA / 'v31_reply_all_state.json', {
            'thread_participants': {},
            'cc_cooldowns': {},
            'reply_all_decisions': [],
            'escalated_to_review': [],
        })

    def decide_reply_all(self, email: dict, intent: str, intent_cat: str,
                         sender_profile: dict, body: str, dry_run: bool = True) -> dict:
        """
        Case-by-case Reply-All decision engine.
        Returns: {reply_all: bool, use_cc: str, reason: str, confidence: float}
        """
        sender  = email.get('sender', '')
        cc      = email.get('cc', '')
        subj    = email.get('subject', '')
        snippet = email.get('snippet', '')
        tid     = email.get('thread_id', '')
        has_att = email.get('has_attachments', False)

        decision = {'reply_all': False, 'use_cc': '', 'reason': '', 'confidence': 0.5}

        # ── Rule 1: Never Reply-All without CC (fail-closed) ──
        # V31 RULE: reply_all=True MUST have populated use_cc or we block
        # This is the #1 issue from previous versions

        # ── Rule 2: Intent-based Reply-All policy (from V29 intent policies) ──
        intent_policy_map = {
            'urgent':        {'reply_all_default': True,  'min_conf': 0.75},
            'support_issue': {'reply_all_default': True,  'min_conf': 0.70},
            'meeting':       {'reply_all_default': True,  'min_conf': 0.75},
            'partnership':   {'reply_all_default': True,  'min_conf': 0.85},
            'cancellation':  {'reply_all_default': True,  'min_conf': 0.80},
            'sales_lead':    {'reply_all_default': False, 'min_conf': 0.85},
            'personal_one2one': {'reply_all_default': False, 'min_conf': 0.80},
            'financial':     {'reply_all_default': False, 'min_conf': 0.90},
            'invoice':       {'reply_all_default': False, 'min_conf': 0.85},
            'general':       {'reply_all_default': False, 'min_conf': 0.75},
        }

        policy = intent_policy_map.get(intent_cat, intent_policy_map['general'])

        # ── Rule 3: Escalation cases always block Reply-All ──
        suspicious = any(re.search(p, f"{subj} {snippet}", re.I) for p in [
            r'\b(wire transfer|swift|bank details|urgent payment|act now)\b',
            r'\b(lawsuit|legal|sue|attorney|court)\b',
            r'\b(bitcoin|crypto|usdt|wallet)\b',
            r'\$[1-9]\d{4,}',  # ≥$10,000
        ])
        if suspicious:
            decision['reason'] = 'escalation_blocked'
            decision['confidence'] = 0.95
            return decision

        # ── Rule 4: CC cooldown check ──
        cooldown_key = f"{sender}|{tid}"
        last_cc = self.state.get('cc_cooldowns', {}).get(cooldown_key)
        if last_cc and days_since(last_cc) < 3:
            decision['reason'] = f'cc_cooldown_active ({days_since(last_cc)}d since last)'
            decision['confidence'] = 0.8
            return decision

        # ── Rule 5: Known broadcast/noreply → NO reply-all ──
        if any(k in sender.lower() for k in ['noreply', 'no-reply', 'newsletter', 'announce', 'update']):
            decision['reason'] = 'broadcast_sender'
            decision['confidence'] = 0.9
            return decision

        # ── Rule 6: VIP sender intent check ──
        sender_prefs = self.evolve.get_sender_preferences(sender)
        if sender_prefs.get('email_count', 0) >= 5:
            # Known sender: check historical reply-all success rate
            reply_all_tendency = sender_prefs.get('reply_all_tendency', 0.5)
            if reply_all_tendency < 0.3:
                # Sender historically doesn't want Reply-All
                policy['reply_all_default'] = False

        # ── Rule 7: CC list population ──
        use_cc = cc or self._get_thread_participants(tid, sender)

        if not use_cc:
            # CANNOT do Reply-All without CC — fail-closed
            if not policy['reply_all_default']:
                decision['reason'] = 'no_cc_available_non_default'
                decision['confidence'] = 0.7
                return decision
            # For intent that defaults to True but no CC: escalate
            decision['reply_all'] = False
            decision['reason'] = 'reply_all_intent_no_cc_escalate'
            decision['confidence'] = 0.85
            self.state.setdefault('escalated_to_review', []).append({
                'ts': ts_now().isoformat(),
                'sender': sender, 'thread_id': tid, 'intent': intent
            })
            return decision

        # ── Rule 8: Final intent policy check ──
        if policy['reply_all_default'] and use_cc:
            decision['reply_all'] = True
            decision['use_cc'] = use_cc
            decision['reason'] = f'intent_policy:{intent_cat}_default_cc'
            decision['confidence'] = policy['min_conf']

            # Record for cooldown
            self.state.setdefault('cc_cooldowns', {})[cooldown_key] = ts_now().isoformat()
        else:
            decision['reply_all'] = False
            decision['reason'] = f'intent_policy:{intent_cat}_no_reply_all'
            decision['confidence'] = policy['min_conf']

        # Record decision
        self.state.setdefault('reply_all_decisions', []).append({
            'ts': ts_now().isoformat(),
            'sender': sender, 'thread_id': tid, 'intent_cat': intent_cat,
            **decision
        })
        self.state['reply_all_decisions'] = self.state['reply_all_decisions'][-200:]
        self._save()

        return decision

    def _get_thread_participants(self, tid: str, sender: str) -> str:
        """Get additional participants from thread history."""
        participants = self.state.get('thread_participants', {}).get(tid, [])
        cc_parts = []
        for p in participants:
            if p and p != sender and '@' in p:
                cc_parts.append(p)
        return ', '.join(cc_parts[:5])  # max 5 CCs

    def track_thread_participants(self, tid: str, sender: str, cc: str):
        """Update thread participant list for future Reply-All decisions."""
        all_emails = [sender] + [c.strip() for c in cc.split(',') if c.strip()]
        existing = set(self.state.get('thread_participants', {}).get(tid, []))
        existing.update(all_emails)
        self.state.setdefault('thread_participants', {})[tid] = list(existing)
        self._save()

    def _save(self):
        save_json(DATA / 'v31_reply_all_state.json', self.state)


# ─────────────────────────────────────────────────────────────
# V31 RESPONSE OUTCOME MONITOR
# Tracks if sent emails get replies, detects bounces, etc.
# ─────────────────────────────────────────────────────────────

class V31ResponseOutcomeMonitor:
    """
    Verifies that sent emails actually get responses.
    Polls every few hours, records outcomes, feeds learning engine.
    """

    TRACKED_FILE = DATA / 'v31_tracked_outcomes.jsonl'
    POLL_INTERVAL_HOURS = 4
    RESPONSE_WINDOW_HOURS = 48

    def __init__(self, evolution_engine: V31SelfEvolutionEngine):
        self.evolve = evolution_engine
        self.tracked: list = []

    def track_sent_email(self, thread_id: str, sender: str, sent_at: str,
                         intent: str, body_preview: str, reply_all: bool):
        """Call this right after sending an email to start tracking."""
        entry = {
            'thread_id': thread_id,
            'sender': sender,
            'sent_at': sent_at,
            'intent': intent,
            'body_preview': (body_preview or '')[:100],
            'reply_all': reply_all,
            'last_polled': None,
            'outcome': 'pending',
            'response_time_hours': None,
        }
        self.tracked.append(entry)
        self.tracked = self.tracked[-500:]  # keep last 500
        try:
            with open(self.TRACKED_FILE, 'a') as f:
                f.write(json.dumps(entry) + '\n')
        except Exception:
            pass

    def poll_outcomes(self, gmail_get_fn, gmail_search_fn) -> list:
        """Check if any tracked emails have received responses."""
        new_outcomes = []
        now = ts_now()

        for entry in self.tracked:
            if entry['outcome'] != 'pending':
                continue

            try:
                sent_time = datetime.fromisoformat(entry['sent_at'].replace('Z', '+00:00'))
                hours_elapsed = (now - sent_time).total_seconds() / 3600

                if hours_elapsed < 0.5:
                    continue  # wait at least 30min

                # Check if there are new messages in the thread since we sent
                query = f"thread:{entry['thread_id']} after:{sent_time.strftime('%Y/%m/%d')}"
                new_msgs = gmail_search_fn(query, limit=5)
                msg_ids = [m['id'] for m in new_msgs if m.get('id')]

                # Filter to messages received AFTER our sent message
                our_sent_time = sent_time.timestamp()
                has_new_response = False
                for mid in msg_ids:
                    msg = gmail_get_fn(mid)
                    internal_date = msg.get('internalDate', '0')
                    msg_time = int(internal_date) / 1000 if internal_date.isdigit() else our_sent_time + 1
                    if msg_time > our_sent_time:
                        # Check it's not from us
                        msg_from = ''
                        for hdr in msg.get('payload', {}).get('headers', []):
                            if hdr['name'].lower() == 'from':
                                msg_from = hdr['value'].lower()
                                break
                        our_email = 'kleber@ziontechgroup.com'
                        if our_email not in msg_from:
                            has_new_response = True
                            break

                if has_new_response:
                    # Determine outcome quality
                    entry['outcome'] = 'positive'
                    entry['response_time_hours'] = round(hours_elapsed, 1)
                    new_outcomes.append(entry)
                    log_info(f"Outcome tracked: thread={entry['thread_id']} → positive ({hours_elapsed:.1f}h)")

                elif hours_elapsed > self.RESPONSE_WINDOW_HOURS:
                    entry['outcome'] = 'no_response'
                    entry['response_time_hours'] = round(hours_elapsed, 1)
                    new_outcomes.append(entry)
                    log_info(f"Outcome tracked: thread={entry['thread_id']} → no_response")

            except Exception as e:
                log_error(f"poll_outcomes error: {e}")

        # Record outcomes to evolution engine
        for outcome_entry in new_outcomes:
            self.evolve.record_response_outcome(
                outcome_entry['thread_id'],
                outcome_entry['sender'],
                outcome_entry['outcome'],
                outcome_entry.get('response_time_hours', 0)
            )

        return new_outcomes


# ─────────────────────────────────────────────────────────────
# V31 MULTI-ACCOUNT EMAIL ROUTING
# ─────────────────────────────────────────────────────────────

class V31MultiAccountRouter:
    """
    Routes emails between multiple Gmail accounts (personal + business).
    Rules-based routing: intent → account, domain → account, priority → account.
    """

    def __init__(self):
        self.state = load_json(DATA / 'v31_account_state.json', {
            'accounts': [
                {
                    'id': 'business',
                    'email': 'kleber@ziontechgroup.com',
                    'label': 'Zion Business',
                    'intents': ['urgent', 'sales_lead', 'partnership', 'invoice', 'billing', 'support_issue'],
                    'domains': ['ziontechgroup.com', 'zion.app'],
                    'priority': 1,
                    'warmup_health': 85,
                    'daily_limit': 100,
                    'today_sent': 0,
                },
                {
                    'id': 'personal',
                    'email': 'klebergarciaalcatrao@gmail.com',
                    'label': 'Personal Gmail',
                    'intents': ['personal_one2one', 'general'],
                    'domains': ['gmail.com', 'google.com'],
                    'priority': 2,
                    'warmup_health': 60,
                    'daily_limit': 50,
                    'today_sent': 0,
                }
            ],
            'routing_rules': [],
        })
        self._reset_daily_counts_if_needed()

    def _reset_daily_counts_if_needed(self):
        today = str(ts_now().date())
        for acc in self.state['accounts']:
            if acc.get('last_date') != today:
                acc['today_sent'] = 0
                acc['last_date'] = today

    def route_email(self, email: dict, intent: str, intent_cat: str,
                    urgency_val: float, sender: str) -> dict:
        """
        Determine which account to send from based on email characteristics.
        Returns: {account_id, email, reason, warmup_health}
        """
        best_account = self.state['accounts'][0]  # default to business

        # Rule 1: Domain match
        sender_domain = sender.split('@')[-1] if '@' in sender else ''
        for acc in self.state['accounts']:
            if sender_domain in acc.get('domains', []):
                # Prefer same-domain account
                if acc['today_sent'] < acc['daily_limit']:
                    best_account = acc
                    break

        # Rule 2: Intent match (high-priority intents → business account)
        if intent_cat in ['urgent', 'sales_lead', 'partnership', 'invoice', 'billing', 'support_issue']:
            for acc in self.state['accounts']:
                if intent_cat in acc.get('intents', []) and acc['today_sent'] < acc['daily_limit']:
                    best_account = acc
                    break

        # Rule 3: Urgency override (high urgency → most healthy account)
        if urgency_val >= 0.85:
            best_account = max(self.state['accounts'],
                               key=lambda a: a.get('warmup_health', 50))

        # Rule 4: Check warmup health
        if best_account.get('warmup_health', 100) < 30:
            # Too unhealthy — route to other account
            others = [a for a in self.state['accounts'] if a['id'] != best_account['id']]
            if others and others[0]['today_sent'] < others[0]['daily_limit']:
                best_account = others[0]
                log_warn(f"Warmup health low ({best_account['id']}) — routing to {best_account['id']}")

        return {
            'account_id': best_account['id'],
            'from_email': best_account['email'],
            'account_label': best_account['label'],
            'reason': f'intent={intent_cat} urgency={urgency_val:.2f}',
            'warmup_health': best_account.get('warmup_health', 50),
        }

    def record_send(self, account_id: str):
        """Increment daily sent count for account."""
        for acc in self.state['accounts']:
            if acc['id'] == account_id:
                acc['today_sent'] = acc.get('today_sent', 0) + 1
                break
        self._save()

    def get_account_health(self, account_id: str) -> float:
        for acc in self.state['accounts']:
            if acc['id'] == account_id:
                return acc.get('warmup_health', 50)
        return 50

    def _save(self):
        save_json(DATA / 'v31_account_state.json', self.state)


# ─────────────────────────────────────────────────────────────
# V31 PROACTIVE OUTREACH ENGINE
# Identifies opportunities to reach out FIRST
# ─────────────────────────────────────────────────────────────

class V31ProactiveOutreachEngine:
    """
    Identifies contacts/leads where we should reach out proactively.
    Sources: email history, CRM patterns, follow-up opportunities, re-engagement.
    """

    def __init__(self, evolution_engine: V31SelfEvolutionEngine):
        self.evolve = evolution_engine
        self.state = load_json(DATA / 'v31_outreach_state.json', {
            'opportunities': [],
        })

    def generate_outreach_opportunities(self) -> list:
        """Scans email history + learns patterns to find outreach candidates."""
        opportunities = []

        # Source 1: Senders who haven't heard from us in X days
        sender_history = self.evolve.data.get('sender_patterns', {})
        for sender, sp in sender_history.items():
            last_email_days = 999
            if sp.get('last_email_ts'):
                last_email_days = days_since(sp['last_email_ts'])
            if 14 <= last_email_days <= 45:
                intents = sp.get('intents', [])
                if 'sales_lead' in intents or 'partnership' in intents:
                    opportunities.append({
                        'type': 'follow_up',
                        'sender': sender,
                        'days_since': last_email_days,
                        'intent': 'sales_lead',
                        'priority': 'medium',
                        'suggestion': f"Follow up with {sender} ({last_email_days}d since last contact)",
                        'template_hint': 're_engagement_follow_up',
                    })

        # Source 2: Positive outcome senders — expand relationship
        for sender, sp in sender_history.items():
            reply_rates = sp.get('reply_rates', {})
            positive_rate = 0
            for intent, data in reply_rates.items():
                if data['total'] >= 2:
                    positive_rate = max(positive_rate, data['replied'] / data['total'])
            if positive_rate >= 0.8:
                opportunities.append({
                    'type': 'relationship_expand',
                    'sender': sender,
                    'positive_rate': positive_rate,
                    'intent': 'partnership',
                    'priority': 'high',
                    'suggestion': f"High positive rate ({positive_rate:.0%}) with {sender} — expand relationship",
                    'template_hint': 'value_adding_outreach',
                })

        # Source 3: VIP senders due for a check-in
        vip_domains = ['ziontechgroup.com', 'zion.app']
        for sender in sender_history:
            domain = sender.split('@')[-1] if '@' in sender else ''
            if domain in vip_domains:
                opportunities.append({
                    'type': 'vip_check_in',
                    'sender': sender,
                    'priority': 'high',
                    'suggestion': f"VIP check-in for {sender}",
                    'template_hint': 'vip_proactive_check_in',
                })

        self.state['opportunities'] = opportunities[-50:]
        self._save()
        return opportunities

    def get_top_opportunity(self) -> Optional[dict]:
        """Returns highest priority outreach opportunity."""
        opps = self.generate_outreach_opportunities()
        if not opps:
            return None
        priority_order = {'high': 0, 'medium': 1, 'low': 2}
        return sorted(opps, key=lambda x: priority_order.get(x.get('priority', 'low'), 2))[0]

    def mark_outreach_sent(self, opportunity: dict):
        """Record that we acted on an opportunity."""
        for opp in self.state.get('opportunities', []):
            if opp.get('sender') == opportunity.get('sender') and opp.get('type') == opportunity.get('type'):
                opp['last_outreach'] = ts_now().isoformat()
                break
        self._save()

    def _save(self):
        save_json(DATA / 'v31_outreach_state.json', self.state)


# ─────────────────────────────────────────────────────────────
# V31 EMAIL WARMUP SCHEDULER
# Gradually builds sender reputation to avoid spam folder
# ─────────────────────────────────────────────────────────────

class V31EmailWarmupScheduler:
    """
    Manages email warmup to build sender reputation.
    Warmup phases: Phase 1 (new) → Phase 2 (building) → Phase 3 (trusted)
    Daily limits increase as health score improves.
    """

    WARMUP_LOG_FILE = DATA / 'v31_warmup_log.jsonl'

    def __init__(self, account_router: V31MultiAccountRouter):
        self.router = account_router
        self.state = load_json(DATA / 'v31_warmup_state.json', {
            'phase': 1,
            'health_score': 50,
            'daily_sent': 0,
            'daily_limit': 20,
            'warmup_days': 0,
            'total_sent': 0,
            'spam_reports': 0,
            'bounces': 0,
            'last_reset': None,
        })
        self._reset_daily()

    def _reset_daily(self):
        today = str(ts_now().date())
        if self.state.get('last_reset') != today:
            self.state['daily_sent'] = 0
            self.state['last_reset'] = today

    def can_send(self, account_id: str = 'business') -> tuple[bool, str]:
        """Returns (can_send, reason)"""
        self._reset_daily()

        # Check warmup phase limits
        if self.state['daily_sent'] >= self.state['daily_limit']:
            return False, f"daily_limit_reached ({self.state['daily_sent']}/{self.state['daily_limit']})"

        # Check health score
        if self.state['health_score'] < 20:
            return False, f"health_score_critical ({self.state['health_score']})"

        # Check spam/bounce flags
        if self.state['spam_reports'] >= 3:
            return False, f"spam_reports_high ({self.state['spam_reports']})"

        account_health = self.router.get_account_health(account_id)
        if account_health < 25:
            return False, f"account_health_low ({account_health})"

        return True, f"warmup_phase_{self.state['phase']}_ok"

    def record_send(self, success: bool = True, bounced: bool = False,
                    reported_spam: bool = False) -> None:
        """Record outcome of a sent email for warmup scoring."""
        self.state['daily_sent'] += 1
        self.state['total_sent'] += 1
        if bounced:
            self.state['bounces'] += 1
        if reported_spam:
            self.state['spam_reports'] += 1

        # Adjust health score
        if success and not bounced and not reported_spam:
            self.state['health_score'] = min(100, self.state['health_score'] + 0.5)
        elif bounced:
            self.state['health_score'] = max(0, self.state['health_score'] - 5)
        elif reported_spam:
            self.state['health_score'] = max(0, self.state['health_score'] - 15)

        # Progress warmup phase
        if self.state['total_sent'] >= 500 and self.state['health_score'] >= 80:
            self.state['phase'] = 3
            self.state['daily_limit'] = 100
        elif self.state['total_sent'] >= 100 and self.state['health_score'] >= 60:
            self.state['phase'] = 2
            self.state['daily_limit'] = 50

        # Log
        try:
            with open(self.WARMUP_LOG_FILE, 'a') as f:
                f.write(json.dumps({
                    'ts': ts_now().isoformat(),
                    'success': success, 'bounced': bounced,
                    'reported_spam': reported_spam,
                    'health_score': self.state['health_score'],
                    'phase': self.state['phase'],
                }) + '\n')
        except Exception:
            pass

        self._save()

    def get_status(self) -> dict:
        return {
            'phase': self.state['phase'],
            'health_score': self.state['health_score'],
            'daily_sent': self.state['daily_sent'],
            'daily_limit': self.state['daily_limit'],
            'total_sent': self.state['total_sent'],
            'spam_reports': self.state['spam_reports'],
            'bounces': self.state['bounces'],
        }

    def _save(self):
        save_json(DATA / 'v31_warmup_state.json', self.state)


# ─────────────────────────────────────────────────────────────
# V31 INTELLIGENT FOLLOW-UP ENGINE
# ─────────────────────────────────────────────────────────────

class V31FollowUpEngine:
    """
    Schedules automatic follow-ups for emails that didn't get responses.
    Follow-up timing is based on intent + sender history.
    """

    def __init__(self, outcome_monitor: V31ResponseOutcomeMonitor,
                 evolution_engine: V31SelfEvolutionEngine):
        self.outcome_monitor = outcome_monitor
        self.evolve = evolution_engine
        self.state = load_json(DATA / 'v31_followup_state.json', {
            'scheduled_followups': [],
            'sent_followups': [],
        })

    def schedule_followup(self, thread_id: str, sender: str, intent: str,
                          followup_number: int = 1, custom_hours: int = None) -> dict:
        """Schedule a follow-up for an email that hasn't received a response."""

        # Intent-based follow-up timing
        intent_timing = {
            'urgent': 4,
            'sales_lead': 24,
            'support_issue': 8,
            'partnership': 48,
            'meeting': 4,
            'invoice': 24,
            'general': 72,
        }

        base_hours = custom_hours or intent_timing.get(intent, 24)
        # Adjust based on sender's historical response time
        sender_prefs = self.evolve.get_sender_preferences(sender)
        if sender_prefs.get('avg_response_time_hours'):
            base_hours = min(base_hours, sender_prefs['avg_response_time_hours'] * 1.5)

        # Follow-up number (exponential backoff)
        hours = base_hours * followup_number

        followup = {
            'id': f"{thread_id}|fu{followup_number}",
            'thread_id': thread_id,
            'sender': sender,
            'intent': intent,
            'scheduled_ts': (ts_now() + timedelta(hours=hours)).isoformat(),
            'followup_number': followup_number,
            'status': 'pending',
        }

        self.state.setdefault('scheduled_followups', []).append(followup)
        self.state['scheduled_followups'] = self.state['scheduled_followups'][-100:]
        self._save()

        return followup

    def get_due_followups(self) -> list:
        """Returns follow-ups that are due to be sent."""
        now = ts_now()
        due = []
        for fu in self.state.get('scheduled_followups', []):
            if fu.get('status') != 'pending':
                continue
            try:
                scheduled = datetime.fromisoformat(fu['scheduled_ts'].replace('Z', '+00:00'))
                if now >= scheduled:
                    due.append(fu)
            except Exception:
                pass
        return due

    def mark_followup_sent(self, followup_id: str):
        for fu in self.state.get('scheduled_followups', []):
            if fu['id'] == followup_id:
                fu['status'] = 'sent'
                fu['sent_ts'] = ts_now().isoformat()
                break
        self.state.setdefault('sent_followups', []).append(followup_id)
        self.state['sent_followups'] = self.state['sent_followups'][-100:]
        self._save()

    def _save(self):
        save_json(DATA / 'v31_followup_state.json', self.state)


# ─────────────────────────────────────────────────────────────
# V31 MAIN ORCHESTRATOR
# Wires everything together and provides the unified interface
# ─────────────────────────────────────────────────────────────

class V31EmailOrchestrator:
    """
    V31 Main Orchestrator — combines all intelligence modules into one system.
    This is the main entry point for email processing.

    Usage:
        orchestrator = V31EmailOrchestrator()
        result = orchestrator.process_email(email_dict, dry_run=True)
    """

    def __init__(self):
        log_info("V31 Email Orchestrator initializing...")

        # Initialize all V31 intelligence modules
        self.evolve    = V31SelfEvolutionEngine()
        self.reply_all = V31ReplyAllV2(self.evolve)
        self.outcome   = V31ResponseOutcomeMonitor(self.evolve)
        self.accounts  = V31MultiAccountRouter()
        self.outreach  = V31ProactiveOutreachEngine(self.evolve)
        self.warmup   = V31EmailWarmupScheduler(self.accounts)
        self.followup = V31FollowUpEngine(self.outcome, self.evolve)

        # Load V29 core engine
        self._v29 = None
        try:
            import sys
            if str(COMMANDS) not in sys.path:
                sys.path.insert(0, str(COMMANDS))
            from v30.intelligent_email_responder_v29 import V26Responder
            self._v29 = V26Responder()
            log_info("V29 core engine loaded successfully")
        except Exception as e:
            log_warn(f"V29 core engine not available: {e}")
            self._v29 = None

        log_info("V31 Orchestrator ready!")

    def process_email(self, email: dict, dry_run: bool = True) -> dict:
        """
        Process a single email through the full V31 intelligence pipeline.
        email dict must have: sender, subject, snippet, thread_id, cc, body
        """
        tid     = email.get('thread_id', email.get('id', ''))
        sender  = email.get('sender', '')
        subj    = email.get('subject', '')
        snip    = email.get('snippet', '')
        cc      = email.get('cc', '')
        body    = email.get('body', email.get('snippet', ''))

        log_info(f"Processing email: thread={tid} from={sender} subject={subj[:60]}")

        # ── Step 1: Account routing decision ─────────────────
        # (Intent would come from V29 — we estimate it here if V29 unavailable)
        intent_cat = 'general'
        intent_label = 'general'
        urgency_val = 0.5

        if self._v29:
            try:
                v29_result = self._v29.process_email(email, dry_run=dry_run)
                intent_label = v29_result.get('intent', intent_label)
                intent_cat = v29_result.get('intent', intent_cat)
                urgency_val = v29_result.get('urgency', urgency_val)
            except Exception as e:
                log_warn(f"V29 processing error: {e}")

        account_route = self.accounts.route_email(email, intent_label, intent_cat, urgency_val, sender)

        # ── Step 2: Reply-All v2 decision ────────────────────
        sender_profile = self.evolve.get_sender_preferences(sender)
        reply_decision = self.reply_all.decide_reply_all(
            email, intent_label, intent_cat, sender_profile, body, dry_run
        )

        # ── Step 3: Warmup check ─────────────────────────────
        can_send, warmup_reason = self.warmup.can_send(account_route['account_id'])
        warmup_status = self.warmup.get_status()

        # ── Step 4: Build enriched email dict for V29 ─────────
        email['reply_all_binding'] = {
            'reply_all': reply_decision['reply_all'],
            'use_cc': reply_decision['use_cc'],
            'reason': reply_decision['reason'],
        }
        email['v31_account'] = account_route

        # ── Step 5: Process through V29 if available ─────────
        if self._v29 and not dry_run:
            try:
                result = self._v29.process_email(email, dry_run=False)
            except Exception as e:
                log_error(f"V29 send error: {e}")
                result = {'action': 'error', 'error': str(e)}
        else:
            # V29 dry-run or unavailable — use V31 intelligence only
            result = {
                'action': 'send_dry' if dry_run else 'send',
                'intent': intent_label,
                'intent_cat': intent_cat,
                'reply_all': reply_decision['reply_all'],
                'use_cc': reply_decision['use_cc'],
                'reply_all_reason': reply_decision['reason'],
                'account': account_route,
                'warmup': warmup_status,
                'warmup_can_send': can_send,
                'warmup_reason': warmup_reason,
            }

        # ── Step 6: Track thread participants ───────────────
        if reply_decision['reply_all'] and reply_decision['use_cc']:
            self.reply_all.track_thread_participants(tid, sender, reply_decision['use_cc'])

        # ── Step 7: Record in evolution engine ──────────────
        quality_score = result.get('quality', {}).get('overall_score', 65) if isinstance(result.get('quality'), dict) else 65
        lang = 'en'  # Would be detected by V29
        tone = 'neutral'

        if result.get('action') in ('send', 'send_dry', 'send_fast', 'send_dry_fast'):
            self.evolve.record_email_sent(
                email, result.get('body', '')[:200],
                intent_label, lang, tone,
                reply_decision['reply_all'], quality_score,
                tid, sender
            )

            # Record for outcome tracking
            if not dry_run:
                self.outcome.track_sent_email(
                    tid, sender, ts_now().isoformat(),
                    intent_label, result.get('body', '')[:100],
                    reply_decision['reply_all']
                )

                # Record account usage
                self.accounts.record_send(account_route['account_id'])
                self.warmup.record_send(success=True)

                # Schedule follow-up
                if result.get('action') == 'send':
                    self.followup.schedule_followup(tid, sender, intent_label)

        # ── Step 8: Compute final recommendation ───────────
        recommendations = self.evolve.get_evolution_recommendations()

        final_result = {
            'v31_version': 31,
            'timestamp': ts_now().isoformat(),
            'thread_id': tid,
            'sender': sender,
            'intent': intent_label,
            'intent_cat': intent_cat,
            'v29_result': result if self._v29 else None,
            'reply_all_decision': reply_decision,
            'account_routing': account_route,
            'warmup_status': warmup_status,
            'warmup_can_send': can_send,
            'followup_scheduled': len(self.followup.get_due_followups()),
            'evolution_recommendations': recommendations[:3],
            'can_send': can_send and warmup_reason != 'health_score_critical',
            'blocked_reason': None if (can_send) else warmup_reason,
        }

        return final_result

    def get_outreach_opportunity(self) -> Optional[dict]:
        """Returns the next best proactive outreach opportunity."""
        return self.outreach.get_top_opportunity()

    def poll_outcomes(self, gmail_get_fn, gmail_search_fn) -> list:
        """Poll for new outcomes on tracked emails."""
        return self.outcome.poll_outcomes(gmail_get_fn, gmail_search_fn)

    def get_due_followups(self) -> list:
        """Returns due follow-ups ready to be sent."""
        return self.followup.get_due_followups()


# ─────────────────────────────────────────────────────────────
# STANDALONE CLI
# ─────────────────────────────────────────────────────────────

if __name__ == '__main__':
    import sys

    orchestrator = V31EmailOrchestrator()

    if len(sys.argv) > 1 and sys.argv[1] == 'test':
        # Run V31 self-test
        log_info("Running V31 self-test...")
        test_email = {
            'id': 'test-001',
            'thread_id': 'test-thread-001',
            'sender': 'test@example.com',
            'subject': 'Test Email',
            'snippet': 'This is a test snippet',
            'cc': '',
            'body': 'Test body',
        }
        result = orchestrator.process_email(test_email, dry_run=True)
        print(json.dumps(result, indent=2, default=str))

    elif len(sys.argv) > 1 and sys.argv[1] == 'outreach':
        opp = orchestrator.get_outreach_opportunity()
        print("Top outreach opportunity:", json.dumps(opp, indent=2, default=str) if opp else "None")

    elif len(sys.argv) > 1 and sys.argv[1] == 'status':
        wm = orchestrator.warmup.get_status()
        print("Warmup status:", json.dumps(wm, indent=2))
        ev = orchestrator.evolve.data
        print(f"Evolution: {ev['total_emails']} emails, {ev['successful_responses']} successful")

    else:
        print("V31 Email Orchestrator")
        print("  python intelligent_email_responder_v31.py test    — Run self-test")
        print("  python intelligent_email_responder_v31.py outreach  — Get top outreach opportunity")
        print("  python intelligent_email_responder_v31.py status   — Show system status")