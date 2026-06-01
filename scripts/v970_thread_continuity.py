#!/usr/bin/env python3
"""
V970: Thread Continuity Manager Engine
Detects fragmented conversations, consolidates scattered discussions,
tracks conversation state across multiple threads, and ensures continuity.
STRICT reply-all enforcement for all multi-recipient emails.
"""

import re
import hashlib
from datetime import datetime, timezone
from typing import Dict, List, Any
from collections import defaultdict


class ThreadContinuityManager:
    """Manages thread continuity and detects fragmented conversations."""

    TOPIC_SIGNATURES = {
        "project": r'\b(project|initiative|program|sprint|milestone)\b',
        "deal": r'\b(deal|contract|agreement|proposal|quote)\b',
        "issue": r'\b(issue|bug|problem|ticket|incident)\b',
        "meeting": r'\b(meeting|call|sync|standup|review)\b',
        "hiring": r'\b(hiring|interview|candidate|position|role)\b',
        "migration": r'\b(migration|upgrade|deployment|release|launch)\b',
    }

    FRAGMENTATION_SIGNALS = [
        r'\b(?:as (?:mentioned|discussed) (?:earlier|before|in (?:another|the other)))\b',
        r'\b(?:referring to|following up on|per our)\b',
        r'\b(?:in (?:the|my) (?:previous|last|earlier) email)\b',
        r'\b(?:separate (?:thread|email|conversation))\b',
        r'\b(?:moving (?:this|the conversation) to)\b',
    ]

    def __init__(self):
        self.thread_map: Dict[str, Dict] = {}
        self.continuity_log: List[Dict] = []
        self.reply_all_audit: List[Dict] = []
        self.participant_threads: Dict[str, List[str]] = defaultdict(list)

    def analyze_email_case_by_case(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze thread continuity case by case."""
        analysis = {
            "engine": "V970",
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "email_id": email.get("id", hashlib.md5(str(email).encode()).hexdigest()[:12]),
            "analysis_type": "thread_continuity",
        }

        to_recipients = email.get("to", [])
        cc_recipients = email.get("cc", [])
        all_recipients = to_recipients + cc_recipients
        is_multi_recipient = len(all_recipients) > 1

        body = email.get("body", "")
        subject = email.get("subject", "")
        sender = email.get("from", "")
        full_text = subject + " " + body

        # 1. Topic identification
        topics = self._identify_topics(full_text)
        analysis["identified_topics"] = topics

        # 2. Thread fingerprinting
        fingerprint = self._generate_thread_fingerprint(email, topics)
        analysis["thread_fingerprint"] = fingerprint

        # 3. Detect related threads
        related = self._find_related_threads(fingerprint, sender, all_recipients)
        analysis["related_threads"] = related

        # 4. Fragmentation detection
        fragmentation = self._detect_fragmentation(full_text, related)
        analysis["fragmentation"] = fragmentation

        # 5. Conversation state tracking
        state = self._track_conversation_state(email, topics)
        analysis["conversation_state"] = state

        # 6. Continuity score
        continuity_score = self._calculate_continuity_score(
            fragmentation, related, state
        )
        analysis["continuity_score"] = continuity_score

        # 7. Consolidation recommendation
        consolidation = self._recommend_consolidation(
            fragmentation, related, topics
        )
        analysis["consolidation_recommendation"] = consolidation

        # 8. Missing participants detection
        missing = self._detect_missing_participants(email, related)
        analysis["missing_participants"] = missing

        # 9. Determine action
        action = self._determine_continuity_action(
            continuity_score, fragmentation, consolidation
        )
        analysis["recommended_action"] = action

        # 10. REPLY-ALL ENFORCEMENT
        reply_all = self._enforce_reply_all(email, all_recipients, is_multi_recipient)
        analysis["reply_all_enforcement"] = reply_all

        # 11. Continuity response template
        analysis["continuity_template"] = self._generate_continuity_response(
            analysis, all_recipients
        )

        # Register thread
        thread_id = email.get("thread_id", analysis["email_id"])
        self.thread_map[thread_id] = {
            "thread_id": thread_id,
            "fingerprint": fingerprint,
            "topics": topics,
            "participants": all_recipients + [sender],
            "state": state,
            "timestamp": analysis["timestamp"],
        }

        # Track participant-thread mapping
        for participant in all_recipients + [sender]:
            self.participant_threads[participant].append(thread_id)

        self.continuity_log.append({
            "email_id": analysis["email_id"],
            "thread_id": thread_id,
            "continuity_score": continuity_score["score"],
            "fragmented": fragmentation["is_fragmented"],
            "related_count": len(related),
            "reply_all": reply_all["enforced"],
            "timestamp": analysis["timestamp"],
        })

        return analysis

    def _identify_topics(self, text: str) -> List[Dict]:
        """Identify topics in the email."""
        topics = []
        text_lower = text.lower()

        for topic_name, pattern in self.TOPIC_SIGNATURES.items():
            matches = re.findall(pattern, text_lower)
            if matches:
                topics.append({
                    "topic": topic_name,
                    "mentions": len(matches),
                    "keywords": list(set(matches))[:5],
                })

        # Extract specific identifiers
        project_names = re.findall(r'(?:project|initiative)\s+["\']?([A-Z][a-zA-Z0-9\s-]+)', text)
        if project_names:
            topics.append({"topic": "specific_project", "names": project_names[:3]})

        return topics

    def _generate_thread_fingerprint(self, email: Dict, topics: List) -> Dict:
        """Generate a unique fingerprint for thread matching."""
        sender = email.get("from", "")
        participants = set(email.get("to", []) + email.get("cc", []) + [sender])
        topic_names = [t.get("topic", "") for t in topics]

        fingerprint_hash = hashlib.md5(
            f"{'|'.join(sorted(participants))}:{','.join(sorted(topic_names))}".encode()
        ).hexdigest()[:8]

        return {
            "hash": fingerprint_hash,
            "participants": sorted(participants),
            "topics": sorted(topic_names),
            "participant_count": len(participants),
        }

    def _find_related_threads(self, fingerprint: Dict, sender: str, recipients: List) -> List[Dict]:
        """Find related threads based on fingerprint matching."""
        related = []
        all_participants = set([sender] + recipients)

        for thread_id, thread in self.thread_map.items():
            # Check participant overlap
            thread_participants = set(thread["participants"])
            overlap = all_participants & thread_participants
            overlap_pct = len(overlap) / max(len(all_participants), 1)

            # Check topic overlap
            fp_topics = set(fingerprint["topics"])
            thread_topic_list = thread.get("topics", [])
            thread_topics = set()
            for t in thread_topic_list:
                if isinstance(t, dict):
                    thread_topics.add(t.get("topic", ""))
                else:
                    thread_topics.add(str(t))
            topic_overlap = fp_topics & thread_topics

            if overlap_pct >= 0.5 and len(topic_overlap) > 0:
                related.append({
                    "thread_id": thread_id,
                    "participant_overlap": round(overlap_pct, 2),
                    "topic_overlap": list(topic_overlap),
                    "last_activity": thread.get("timestamp", ""),
                })

        return related

    def _detect_fragmentation(self, text: str, related_threads: List) -> Dict:
        """Detect if conversation is fragmented across threads."""
        text_lower = text.lower()
        signals = []

        for pattern in self.FRAGMENTATION_SIGNALS:
            matches = re.findall(pattern, text_lower)
            if matches:
                signals.extend(matches)

        is_fragmented = len(signals) >= 1 or len(related_threads) >= 2

        return {
            "is_fragmented": is_fragmented,
            "fragmentation_signals": signals[:5],
            "signal_count": len(signals),
            "related_thread_count": len(related_threads),
            "severity": "HIGH" if len(signals) >= 3 or len(related_threads) >= 3
                        else "MEDIUM" if is_fragmented else "LOW",
        }

    def _track_conversation_state(self, email: Dict, topics: List) -> Dict:
        """Track the current state of the conversation."""
        body = email.get("body", "").lower()

        # State indicators
        states = {
            "awaiting_response": bool(re.search(r'\b(waiting|awaiting|looking forward|please respond|when can)\b', body)),
            "information_shared": bool(re.search(r'\b(attached|here is|please find|sharing|shared)\b', body)),
            "decision_needed": bool(re.search(r'\b(decide|decision|approve|approval|your call)\b', body)),
            "action_pending": bool(re.search(r'\b(will do|working on|in progress|will send|will follow)\b', body)),
            "resolved": bool(re.search(r'\b(resolved|completed|done|finished|all set)\b', body)),
            "escalated": bool(re.search(r'\b(escalat|manager|supervisor|higher up)\b', body)),
        }

        active_states = [s for s, active in states.items() if active]
        if not active_states:
            active_states = ["in_progress"]

        return {
            "active_states": active_states,
            "state_count": len(active_states),
            "is_actionable": "awaiting_response" in active_states or "decision_needed" in active_states,
        }

    def _calculate_continuity_score(self, fragmentation: Dict, related: List, state: Dict) -> Dict:
        """Calculate thread continuity score (0-100)."""
        score = 80  # Base score for single thread

        if fragmentation["is_fragmented"]:
            score -= 20 * (fragmentation["signal_count"] + 1)

        if len(related) > 3:
            score -= 15
        elif len(related) > 1:
            score -= 5

        # Bonus for clear state
        if state["is_actionable"]:
            score += 5

        score = max(0, min(100, score))
        level = "EXCELLENT" if score >= 80 else "GOOD" if score >= 60 else "FRAGMENTED" if score >= 40 else "SEVERELY_FRAGMENTED"

        return {"score": score, "level": level}

    def _recommend_consolidation(self, fragmentation: Dict, related: List, topics: List) -> Dict:
        """Recommend thread consolidation if needed."""
        if not fragmentation["is_fragmented"] and len(related) <= 1:
            return {"needed": False, "reason": "Thread is coherent and contained"}

        return {
            "needed": True,
            "related_threads_to_merge": [r["thread_id"] for r in related[:5]],
            "topics_to_consolidate": [t.get("topic", "") for t in topics],
            "suggested_subject": f"Consolidated: {', '.join(t.get('topic', '') for t in topics[:3])}",
            "benefit": f"Merge {len(related) + 1} related discussions into single thread",
        }

    def _detect_missing_participants(self, email: Dict, related: List) -> Dict:
        """Detect participants who were in related threads but missing from current."""
        current_participants = set(email.get("to", []) + email.get("cc", []) + [email.get("from", "")])
        all_known = set()

        for rel in related:
            thread = self.thread_map.get(rel["thread_id"], {})
            all_known.update(thread.get("participants", []))

        missing = all_known - current_participants
        return {
            "missing_participants": list(missing)[:5],
            "count": len(missing),
            "should_include": len(missing) > 0,
        }

    def _determine_continuity_action(self, continuity: Dict, fragmentation: Dict, consolidation: Dict) -> str:
        """Determine action based on continuity analysis."""
        if continuity["level"] == "SEVERELY_FRAGMENTED":
            return "URGENT_CONSOLIDATION_REQUIRED"
        elif fragmentation["is_fragmented"] and consolidation["needed"]:
            return "CONSOLIDATE_AND_NOTIFY_PARTICIPANTS"
        elif continuity["level"] == "FRAGMENTED":
            return "SUGGEST_CONSOLIDATION"
        elif continuity["score"] >= 80:
            return "CONTINUE_THREAD_NORMALLY"
        else:
            return "MONITOR_CONTINUITY"

    def _enforce_reply_all(self, email: Dict, all_recipients: List, is_multi: bool) -> Dict:
        result = {
            "is_multi_recipient": is_multi,
            "recipient_count": len(all_recipients),
            "enforced": False,
            "reason": "",
        }
        if is_multi:
            result["enforced"] = True
            result["reason"] = f"REPLY-ALL ENFORCED: {len(all_recipients)} recipients."
            self.reply_all_audit.append({
                "email_id": email.get("id", "unknown"),
                "enforced": True,
                "timestamp": datetime.now(timezone.utc).isoformat(),
            })
        else:
            result["reason"] = "Single recipient."
        return result

    def _generate_continuity_response(self, analysis: Dict, recipients: List) -> Dict:
        """Generate a continuity-aware response template."""
        return {
            "to": recipients,
            "reply_all": len(recipients) > 1,
            "includes_thread_context": analysis["fragmentation"]["is_fragmented"],
            "mentions_related_threads": len(analysis["related_threads"]) > 0,
            "consolidation_suggestion": analysis["consolidation_recommendation"]["needed"],
        }

    def get_stats(self) -> Dict:
        if not self.continuity_log:
            return {"emails_analyzed": 0}
        fragmented = sum(1 for c in self.continuity_log if c["fragmented"])
        return {
            "emails_analyzed": len(self.continuity_log),
            "threads_tracked": len(self.thread_map),
            "fragmented_conversations": fragmented,
            "avg_continuity_score": round(
                sum(c["continuity_score"] for c in self.continuity_log) / len(self.continuity_log), 1
            ),
            "reply_all_enforced": len(self.reply_all_audit),
        }


def test_v970():
    engine = ThreadContinuityManager()

    # Seed a thread
    email_seed = {
        "id": "cont-seed",
        "from": "pm@company.com",
        "to": ["dev@ziontechgroup.com", "qa@company.com"],
        "subject": "Project Alpha - Sprint Planning",
        "body": "Let's discuss the sprint planning for Project Alpha.",
        "thread_id": "thread-alpha-1",
    }
    engine.analyze_email_case_by_case(email_seed)

    # Test 1: Continuation of same thread
    email1 = {
        "id": "cont-001",
        "from": "pm@company.com",
        "to": ["dev@ziontechgroup.com", "qa@company.com"],
        "cc": ["manager@company.com"],
        "subject": "Re: Project Alpha - Sprint Planning",
        "body": "Following up on our discussion about Project Alpha sprint planning. As mentioned earlier, we need to finalize the scope. Please review the attached document.",
        "thread_id": "thread-alpha-1",
        "attachments": ["sprint-plan.pdf"],
    }
    r1 = engine.analyze_email_case_by_case(email1)
    assert r1["reply_all_enforcement"]["enforced"] is True
    print(f"✅ Test 1 PASSED: Continuity={r1['continuity_score']['score']}, level={r1['continuity_score']['level']}, related={len(r1['related_threads'])}, reply-all enforced")

    # Test 2: Fragmented conversation
    email2 = {
        "id": "cont-002",
        "from": "dev@ziontechgroup.com",
        "to": ["pm@company.com"],
        "subject": "Separate thread - Project Alpha API discussion",
        "body": "Moving this to a separate thread as discussed in the other email. Regarding the API design for Project Alpha, we need to decide on the authentication approach.",
        "thread_id": "thread-alpha-2",
    }
    r2 = engine.analyze_email_case_by_case(email2)
    assert r2["fragmentation"]["is_fragmented"] is True
    print(f"✅ Test 2 PASSED: Fragmentation detected, severity={r2['fragmentation']['severity']}, signals={r2['fragmentation']['fragmentation_signals'][:2]}")

    # Test 3: Stats
    stats = engine.get_stats()
    assert stats["threads_tracked"] >= 2
    print(f"✅ Test 3 PASSED: {stats['emails_analyzed']} analyzed, {stats['threads_tracked']} threads, fragmented={stats['fragmented_conversations']}")

    print("\n🎉 V970 ALL TESTS PASSED — Thread Continuity Manager operational!")
    return True


if __name__ == "__main__":
    test_v970()
