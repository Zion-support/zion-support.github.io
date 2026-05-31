"""
V686 - Email Delegation Intelligence Engine
============================================
Detects emails requiring delegation, suggests optimal delegates based on
expertise matching, tracks delegation chains, detects loops, and generates
analytics reports. Enforces reply-all for multi-recipient emails.

Author: Hermes Agent (Nous Research)
Version: 6.8.6
"""

from __future__ import annotations

import re
import copy
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional, Set, Tuple
from collections import defaultdict
from enum import Enum


class DelegationStatus(Enum):
    PENDING = "pending"
    DELEGATED = "delegated"
    ACCEPTED = "accepted"
    COMPLETED = "completed"
    REJECTED = "rejected"
    LOOP_DETECTED = "loop_detected"


class EmailDelegationIntelligence:
    """
    Intelligence engine for detecting delegation-needing emails, suggesting
    optimal delegates, tracking delegation chains, detecting loops, and
    generating analytics reports.
    """

    # Keywords that indicate the email should be delegated
    DELEGATION_SIGNAL_KEYWORDS = [
        "delegate", "forward", "hand off", "take over", "pass along",
        "someone else", "not my area", "better suited", "reassign",
        "escalate", "redirect", "transfer", "loop in", "bring in",
        "cc'd", "can you handle", "please review", "your expertise",
        "not my domain", "out of scope", "wrong person",
    ]

    # Expertise domain keyword mappings
    EXPERTISE_DOMAINS = {
        "engineering": [
            "code", "bug", "deploy", "api", "server", "database", "backend",
            "frontend", "devops", "infrastructure", "pipeline", "ci/cd",
            "architecture", "refactor", "technical debt", "performance",
        ],
        "design": [
            "ui", "ux", "mockup", "figma", "wireframe", "prototype",
            "visual", "brand", "design system", "accessibility", "usability",
        ],
        "finance": [
            "budget", "invoice", "expense", "revenue", "cost", "pricing",
            "financial", "accounting", "payroll", "tax", "audit", "forecast",
        ],
        "legal": [
            "contract", "compliance", "legal", "nda", "terms", "liability",
            "regulation", "gdpr", "privacy policy", "intellectual property",
        ],
        "hr": [
            "hiring", "interview", "onboarding", "benefits", "salary",
            "performance review", "pto", "leave", "policy", "recruitment",
        ],
        "marketing": [
            "campaign", "seo", "social media", "content", "brand",
            "analytics", "conversion", "funnel", "advertising", "outreach",
        ],
        "sales": [
            "prospect", "lead", "pipeline", "deal", "client", "demo",
            "proposal", "quote", "negotiation", "closing", "crm",
        ],
        "security": [
            "vulnerability", "security", "breach", "encryption", "auth",
            "firewall", "penetration test", "incident response", "threat",
        ],
        "product": [
            "roadmap", "feature", "requirement", "user story", "sprint",
            "backlog", "prioritization", "stakeholder", "mvp", "launch",
        ],
        "support": [
            "ticket", "customer issue", "complaint", "refund", "troubleshoot",
            "escalation", "sla", "response time", "faq", "helpdesk",
        ],
    }

    # Phrases that suggest reply-all is needed
    REPLY_ALL_SIGNALS = [
        "please keep everyone in the loop",
        "cc all stakeholders",
        "reply all",
        "keep the team informed",
        "everyone should know",
        "for visibility",
        "fwiw",
        "loop everyone in",
    ]

    def __init__(self, organization: Optional[Dict[str, Dict[str, Any]]] = None):
        """
        Initialize the delegation intelligence engine.

        Args:
            organization: Dict mapping person names to their profile dicts
                          containing 'role', 'expertise', 'email', 'team',
                          'manager', 'reports_to', etc.
        """
        self.organization = organization or {}
        self.delegation_chains: Dict[str, List[Dict[str, Any]]] = {}
        self.delegation_history: List[Dict[str, Any]] = []
        self.email_store: Dict[str, Dict[str, Any]] = {}
        self._chain_counter = 0

    # ------------------------------------------------------------------
    # Core Analysis Methods
    # ------------------------------------------------------------------

    def analyze_delegation_need(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """
        Analyze whether an email needs to be delegated.

        Args:
            email: Dict with keys: from, to, cc, body, subject, timestamp

        Returns:
            Dict with delegation_score (0-100), needs_delegation (bool),
            delegation_reasons (list), and detected_domains (list).
        """
        body = (email.get("body") or "").lower()
        subject = (email.get("subject") or "").lower()
        combined = f"{subject} {body}"

        score = 0.0
        reasons: List[str] = []
        detected_domains: List[str] = []

        # --- Check delegation signal keywords ---
        signal_hits = [
            kw for kw in self.DELEGATION_SIGNAL_KEYWORDS if kw in combined
        ]
        if signal_hits:
            score += min(len(signal_hits) * 12, 40)
            reasons.append(
                f"Delegation signal keywords detected: {', '.join(signal_hits)}"
            )

        # --- Check if email content matches a domain not owned by recipient ---
        recipient_email = email.get("to")
        if isinstance(recipient_email, list):
            recipient_email = recipient_email[0] if recipient_email else ""

        recipient_profile = self._get_profile(recipient_email)
        recipient_expertise = set(recipient_profile.get("expertise", []))

        for domain, keywords in self.EXPERTISE_DOMAINS.items():
            domain_hits = [kw for kw in keywords if self._keyword_in_text(kw, combined)]
            if domain_hits:
                detected_domains.append(domain)
                # If recipient doesn't have this expertise, boost delegation need
                if domain not in recipient_expertise:
                    score += len(domain_hits) * 8
                    reasons.append(
                        f"Content matches '{domain}' domain (not recipient's expertise): "
                        f"{', '.join(domain_hits[:3])}"
                    )
                else:
                    score += len(domain_hits) * 2

        # --- Check for explicit delegation language ---
        delegation_patterns = [
            r"can (you|someone) (handle|take care of|look into)",
            r"i('m| am) (not|don't) (the right|sure|qualified)",
            r"(forward|pass|hand) (this|it) (to|along)",
            r"(please|kindly) (review|handle|address|take over)",
            r"this (is|seems) (more|better) (suited|appropriate) for",
            r"(wrong person|not my area|out of (my )?scope)",
        ]
        for pattern in delegation_patterns:
            if re.search(pattern, combined):
                score += 10
                reasons.append(f"Delegation pattern matched: '{pattern}'")

        # --- Multi-recipient with action items suggests delegation ---
        to_list = email.get("to", [])
        if isinstance(to_list, str):
            to_list = [to_list]
        cc_list = email.get("cc", [])
        if isinstance(cc_list, str):
            cc_list = [cc_list]
        total_recipients = len(to_list) + len(cc_list)

        if total_recipients > 2:
            action_indicators = [
                "action item", "please", "need", "deadline", "asap",
                "urgent", "by eod", "by friday",
            ]
            action_hits = [a for a in action_indicators if a in combined]
            if action_hits:
                score += 8
                reasons.append(
                    f"Multi-recipient email ({total_recipients} recipients) "
                    f"with action items: {', '.join(action_hits[:3])}"
                )

        # --- Escalation signals ---
        escalation_signals = [
            "urgent", "critical", "p0", "p1", "severity", "blocker",
            "immediate attention", "asap",
        ]
        esc_hits = [s for s in escalation_signals if s in combined]
        if esc_hits and total_recipients == 1:
            score += 5
            reasons.append(
                f"Escalation signals in single-recipient email: {', '.join(esc_hits[:3])}"
            )

        # Clamp score
        delegation_score = int(min(max(score, 0), 100))

        # Determine if delegation is needed (threshold: 35)
        needs_delegation = delegation_score >= 35

        result = {
            "email_id": self._get_email_id(email),
            "delegation_score": delegation_score,
            "needs_delegation": needs_delegation,
            "delegation_reasons": reasons,
            "detected_domains": detected_domains,
            "total_recipients": total_recipients,
            "reply_all_recommended": self._check_reply_all_needed(email),
            "analyzed_at": datetime.now(timezone.utc).isoformat(),
        }

        return result

    def suggest_delegate(
        self, email: Dict[str, Any], analysis: Optional[Dict[str, Any]] = None
    ) -> Dict[str, Any]:
        """
        Suggest the best person to delegate the email to based on expertise
        matching and organizational patterns.

        Args:
            email: The email dict.
            analysis: Optional pre-computed analysis result.

        Returns:
            Dict with suggested_delegate, expertise_match, confidence,
            alternative_delegates, and reasoning.
        """
        if analysis is None:
            analysis = self.analyze_delegation_need(email)

        body = (email.get("body") or "").lower()
        subject = (email.get("subject") or "").lower()
        combined = f"{subject} {body}"
        detected_domains = analysis.get("detected_domains", [])

        # Score each person in the organization
        candidate_scores: Dict[str, Dict[str, Any]] = {}

        sender = email.get("from", "")
        to_list = email.get("to", [])
        if isinstance(to_list, str):
            to_list = [to_list]
        cc_list = email.get("cc", [])
        if isinstance(cc_list, str):
            cc_list = [cc_list]
        exclude = {sender} | set(to_list) | set(cc_list)

        for name, profile in self.organization.items():
            person_email = profile.get("email", name)
            if person_email in exclude or name in exclude:
                continue  # Don't suggest sender or existing recipients

            score = 0.0
            match_reasons: List[str] = []

            # Expertise matching
            person_expertise = set(profile.get("expertise", []))
            for domain in detected_domains:
                if domain in person_expertise:
                    score += 30
                    match_reasons.append(
                        f"Has '{domain}' expertise"
                    )

            # Role matching
            role = profile.get("role", "").lower()
            for domain in detected_domains:
                if domain in role:
                    score += 15
                    match_reasons.append(f"Role contains '{domain}'")

            # Keyword matching in person's skills
            skills = profile.get("skills", [])
            skill_hits = [
                s for s in skills
                if any(kw in combined for kw in [s.lower()] + s.lower().split())
            ]
            if skill_hits:
                score += len(skill_hits) * 5
                match_reasons.append(
                    f"Skill keyword overlap: {', '.join(skill_hits[:3])}"
                )

            # Team alignment
            person_team = profile.get("team", "")
            for domain in detected_domains:
                if domain in person_team.lower():
                    score += 10
                    match_reasons.append(f"Team alignment: '{person_team}'")

            # Availability / capacity (if provided)
            capacity = profile.get("capacity", 100)
            score *= capacity / 100.0

            # Manager relationship: prefer delegates in same reporting line
            recipient_email = to_list[0] if to_list else ""
            recipient_profile = self._get_profile(recipient_email)
            if recipient_profile.get("manager") == person_email:
                score += 5
                match_reasons.append("Direct manager (natural escalation)")
            if profile.get("manager") == recipient_email:
                score += 8
                match_reasons.append("Direct report (natural delegation)")

            if score > 0:
                candidate_scores[person_email] = {
                    "name": name,
                    "email": person_email,
                    "score": score,
                    "match_reasons": match_reasons,
                    "expertise_match": list(
                        person_expertise & set(detected_domains)
                    ),
                }

        # Sort candidates by score
        sorted_candidates = sorted(
            candidate_scores.values(), key=lambda c: c["score"], reverse=True
        )

        if not sorted_candidates:
            return {
                "email_id": self._get_email_id(email),
                "suggested_delegate": None,
                "expertise_match": [],
                "confidence": 0.0,
                "alternative_delegates": [],
                "reasoning": "No suitable delegate found in organization.",
                "analysis_summary": {
                    "delegation_score": analysis["delegation_score"],
                    "detected_domains": detected_domains,
                },
            }

        best = sorted_candidates[0]
        alternatives = sorted_candidates[1:4]  # Top 3 alternatives

        # Confidence based on score gap
        confidence = min(best["score"] / 100.0, 1.0)
        if len(sorted_candidates) > 1:
            gap = best["score"] - sorted_candidates[1]["score"]
            confidence = min(confidence + (gap / 50.0), 1.0)

        result = {
            "email_id": self._get_email_id(email),
            "suggested_delegate": best["email"],
            "suggested_delegate_name": best["name"],
            "expertise_match": best["expertise_match"],
            "delegate_score": round(best["score"], 2),
            "confidence": round(confidence, 3),
            "match_reasons": best["match_reasons"],
            "alternative_delegates": [
                {
                    "name": alt["name"],
                    "email": alt["email"],
                    "score": round(alt["score"], 2),
                    "expertise_match": alt["expertise_match"],
                }
                for alt in alternatives
            ],
            "reasoning": (
                f"Best match: {best['name']} ({best['email']}) with score "
                f"{best['score']:.1f}/100. Expertise in: "
                f"{', '.join(best['expertise_match']) or 'general'}."
            ),
            "analysis_summary": {
                "delegation_score": analysis["delegation_score"],
                "detected_domains": detected_domains,
            },
        }

        return result

    def track_delegation(
        self,
        email: Dict[str, Any],
        delegator: str,
        delegate: str,
        status: DelegationStatus = DelegationStatus.PENDING,
        notes: str = "",
        parent_chain_id: Optional[str] = None,
    ) -> Dict[str, Any]:
        """
        Track a delegation event, building delegation chains.

        Args:
            email: The email being delegated.
            delegator: Person delegating the email.
            delegate: Person receiving the delegation.
            status: Current delegation status.
            notes: Optional notes.
            parent_chain_id: If this is a re-delegation, link to parent chain.

        Returns:
            Dict with chain_id, chain details, and status.
        """
        self._chain_counter += 1
        chain_id = f"CHAIN-{self._chain_counter:04d}"
        email_id = self._get_email_id(email)

        delegation_event = {
            "chain_id": chain_id,
            "email_id": email_id,
            "delegator": delegator,
            "delegate": delegate,
            "status": status.value,
            "notes": notes,
            "parent_chain_id": parent_chain_id,
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "email_subject": email.get("subject", ""),
            "loop_detected": False,
        }

        # Check for loops before adding
        loop_info = self.detect_delegation_loop(delegator, delegate, parent_chain_id)
        if loop_info["has_loop"]:
            delegation_event["status"] = DelegationStatus.LOOP_DETECTED.value
            delegation_event["loop_detected"] = True
            delegation_event["loop_details"] = loop_info

        # Store in chain
        if email_id not in self.delegation_chains:
            self.delegation_chains[email_id] = []
        self.delegation_chains[email_id].append(delegation_event)

        # Store in history
        self.delegation_history.append(delegation_event)

        # Store email reference
        self.email_store[email_id] = email

        # Build chain path
        chain_path = self._build_chain_path(email_id)

        result = {
            "chain_id": chain_id,
            "email_id": email_id,
            "delegator": delegator,
            "delegate": delegate,
            "status": delegation_event["status"],
            "loop_detected": delegation_event["loop_detected"],
            "chain_path": chain_path,
            "chain_length": len(self.delegation_chains.get(email_id, [])),
            "timestamp": delegation_event["timestamp"],
            "notes": notes,
        }

        if delegation_event["loop_detected"]:
            result["loop_warning"] = (
                f"DELEGATION LOOP DETECTED: {loop_info['loop_path']}"
            )

        return result

    def detect_delegation_loop(
        self,
        delegator: str,
        delegate: str,
        parent_chain_id: Optional[str] = None,
    ) -> Dict[str, Any]:
        """
        Detect if a delegation would create a loop (A→B→C→A).

        Args:
            delegator: Person delegating.
            delegate: Proposed delegate.
            parent_chain_id: Parent chain if re-delegating.

        Returns:
            Dict with has_loop (bool), loop_path, and details.
        """
        # Build a graph of all delegation edges
        edges: Dict[str, List[str]] = defaultdict(list)
        for event in self.delegation_history:
            edges[event["delegator"]].append(event["delegate"])

        # Add the proposed edge
        test_edges = copy.deepcopy(edges)
        test_edges[delegator].append(delegate)

        # Check if delegate can reach delegator through existing chains
        # (meaning delegate would eventually send it back)
        visited: Set[str] = set()
        loop_path: List[str] = []

        def dfs(node: str, path: List[str]) -> bool:
            if node == delegator and len(path) > 1:
                loop_path.extend(path + [delegator])
                return True
            if node in visited:
                return False
            visited.add(node)
            for neighbor in test_edges.get(node, []):
                if dfs(neighbor, path + [neighbor]):
                    return True
            return False

        has_loop = dfs(delegate, [delegator, delegate])

        # Also check reverse: has delegator already received from delegate?
        reverse_loop = False
        if delegator in test_edges.get(delegate, []):
            has_loop = True
            reverse_loop = True
            if not loop_path:
                loop_path = [delegator, delegate, delegator]

        return {
            "has_loop": has_loop,
            "loop_path": " → ".join(loop_path) if loop_path else None,
            "reverse_loop": reverse_loop,
            "delegator": delegator,
            "proposed_delegate": delegate,
            "details": (
                f"Loop detected: {' → '.join(loop_path)}"
                if has_loop
                else "No loop detected."
            ),
        }

    def generate_delegation_report(self) -> Dict[str, Any]:
        """
        Generate comprehensive delegation analytics report.

        Returns:
            Dict with full analytics: totals, by-person stats, chains,
            loop stats, domain distribution, response times, etc.
        """
        total_events = len(self.delegation_history)
        total_chains = len(self.delegation_chains)
        loops_detected = sum(
            1 for e in self.delegation_history if e.get("loop_detected")
        )

        # Per-person stats
        delegator_stats: Dict[str, Dict[str, int]] = defaultdict(
            lambda: {"delegated_out": 0, "delegated_in": 0, "loops": 0}
        )
        for event in self.delegation_history:
            delegator_stats[event["delegator"]]["delegated_out"] += 1
            delegator_stats[event["delegate"]]["delegated_in"] += 1
            if event.get("loop_detected"):
                delegator_stats[event["delegator"]]["loops"] += 1
                delegator_stats[event["delegate"]]["loops"] += 1

        # Status distribution
        status_counts: Dict[str, int] = defaultdict(int)
        for event in self.delegation_history:
            status_counts[event["status"]] += 1

        # Chain lengths
        chain_lengths = {
            eid: len(events)
            for eid, events in self.delegation_chains.items()
        }
        max_chain_length = max(chain_lengths.values()) if chain_lengths else 0
        avg_chain_length = (
            sum(chain_lengths.values()) / len(chain_lengths)
            if chain_lengths
            else 0
        )

        # Domain distribution from stored emails
        domain_counts: Dict[str, int] = defaultdict(int)
        for eid, email in self.email_store.items():
            body = (email.get("body") or "").lower()
            subject = (email.get("subject") or "").lower()
            combined = f"{subject} {body}"
            for domain, keywords in self.EXPERTISE_DOMAINS.items():
                if any(self._keyword_in_text(kw, combined) for kw in keywords):
                    domain_counts[domain] += 1

        # Most delegated subjects
        subject_delegation_count: Dict[str, int] = defaultdict(int)
        for event in self.delegation_history:
            subj = event.get("email_subject", "N/A")
            subject_delegation_count[subj] += 1
        top_subjects = sorted(
            subject_delegation_count.items(), key=lambda x: x[1], reverse=True
        )[:5]

        # Reply-all enforcement stats
        reply_all_needed = 0
        reply_all_enforced = 0
        for eid, email in self.email_store.items():
            if self._check_reply_all_needed(email):
                reply_all_needed += 1
                reply_all_enforced += 1  # Engine always recommends

        report = {
            "report_generated_at": datetime.now(timezone.utc).isoformat(),
            "summary": {
                "total_delegation_events": total_events,
                "total_unique_chains": total_chains,
                "loops_detected": loops_detected,
                "max_chain_length": max_chain_length,
                "avg_chain_length": round(avg_chain_length, 2),
            },
            "status_distribution": dict(status_counts),
            "person_stats": {
                name: dict(stats) for name, stats in delegator_stats.items()
            },
            "domain_distribution": dict(domain_counts),
            "most_delegated_subjects": [
                {"subject": s, "count": c} for s, c in top_subjects
            ],
            "chain_details": {
                eid: [
                    {
                        "step": i + 1,
                        "from": e["delegator"],
                        "to": e["delegate"],
                        "status": e["status"],
                        "loop": e.get("loop_detected", False),
                    }
                    for i, e in enumerate(events)
                ]
                for eid, events in self.delegation_chains.items()
            },
            "reply_all_enforcement": {
                "emails_requiring_reply_all": reply_all_needed,
                "reply_all_enforced": reply_all_enforced,
            },
            "recommendations": self._generate_recommendations(
                delegator_stats, loops_detected, avg_chain_length
            ),
        }

        return report

    # ------------------------------------------------------------------
    # Reply-All Enforcement
    # ------------------------------------------------------------------

    def enforce_reply_all(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """
        Check if reply-all is required for this email and return enforcement
        details.

        Args:
            email: The email dict.

        Returns:
            Dict with required (bool), reason, recommended_recipients.
        """
        needs_reply_all = self._check_reply_all_needed(email)

        to_list = email.get("to", [])
        if isinstance(to_list, str):
            to_list = [to_list]
        cc_list = email.get("cc", [])
        if isinstance(cc_list, str):
            cc_list = [cc_list]

        all_recipients = list(set(to_list + cc_list))
        sender = email.get("from", "")

        # Build the recommended reply-all list (sender + all original recipients
        # minus yourself, but we don't know who "you" are, so include all)
        recommended = [sender] + [
            r for r in all_recipients if r != sender
        ]

        reasons = []
        if len(all_recipients) > 2:
            reasons.append(
                f"Email has {len(all_recipients)} recipients — "
                f"all should stay informed."
            )

        body = (email.get("body") or "").lower()
        for signal in self.REPLY_ALL_SIGNALS:
            if signal in body:
                reasons.append(f"Reply-all signal phrase: '{signal}'")

        subject = (email.get("subject") or "").lower()
        if "re:" in subject or "fwd:" in subject:
            reasons.append("Threaded email — maintain full thread context.")

        return {
            "reply_all_required": needs_reply_all,
            "reasons": reasons,
            "original_recipients": all_recipients,
            "recommended_reply_to": recommended,
            "enforced": needs_reply_all,
        }

    # ------------------------------------------------------------------
    # Private Helpers
    # ------------------------------------------------------------------

    @staticmethod
    def _keyword_in_text(keyword: str, text: str) -> bool:
        """
        Check if a keyword appears in text using word-boundary matching
        for short keywords (<=3 chars) to avoid false positives like
        'ui' matching inside 'questions', or 'ux' inside 'flux'.
        Longer keywords use simple substring matching.
        """
        if len(keyword) <= 3:
            pattern = r'\b' + re.escape(keyword) + r'\b'
            return bool(re.search(pattern, text))
        return keyword in text

    def _get_email_id(self, email: Dict[str, Any]) -> str:
        """Generate a deterministic email ID from email fields."""
        if "id" in email:
            return email["id"]
        # Deterministic hash from key fields
        key = f"{email.get('from', '')}|{email.get('to', '')}|{email.get('subject', '')}|{email.get('timestamp', '')}"
        return f"EMAIL-{abs(hash(key)) % 100000:05d}"

    def _get_profile(self, email_or_name: str) -> Dict[str, Any]:
        """Look up a person's profile by email or name."""
        if email_or_name in self.organization:
            return self.organization[email_or_name]
        for name, profile in self.organization.items():
            if profile.get("email") == email_or_name:
                return profile
        return {}

    def _check_reply_all_needed(self, email: Dict[str, Any]) -> bool:
        """Determine if reply-all is needed for this email."""
        to_list = email.get("to", [])
        if isinstance(to_list, str):
            to_list = [to_list]
        cc_list = email.get("cc", [])
        if isinstance(cc_list, str):
            cc_list = [cc_list]

        total = len(to_list) + len(cc_list)

        # Multi-recipient → reply-all needed
        if total > 2:
            return True

        body = (email.get("body") or "").lower()
        for signal in self.REPLY_ALL_SIGNALS:
            if signal in body:
                return True

        subject = (email.get("subject") or "").lower()
        if "re:" in subject or "fwd:" in subject:
            return True

        return False

    def _build_chain_path(self, email_id: str) -> List[str]:
        """Build the delegation chain path for an email."""
        events = self.delegation_chains.get(email_id, [])
        path = []
        for event in events:
            if not path:
                path.append(event["delegator"])
            path.append(event["delegate"])
        return path

    def _generate_recommendations(
        self,
        delegator_stats: Dict[str, Dict[str, int]],
        loops: int,
        avg_chain: float,
    ) -> List[str]:
        """Generate actionable recommendations based on analytics."""
        recs = []

        if loops > 0:
            recs.append(
                f"⚠️  {loops} delegation loop(s) detected. Consider establishing "
                f"clear ownership rules to prevent circular delegations."
            )

        if avg_chain > 3:
            recs.append(
                f"📊 Average delegation chain length is {avg_chain:.1f}. "
                f"Long chains indicate unclear ownership — consider role clarification."
            )

        # Find top delegators
        top_delegator = max(
            delegator_stats.items(),
            key=lambda x: x[1]["delegated_out"],
            default=None,
        )
        if top_delegator and top_delegator[1]["delegated_out"] > 3:
            recs.append(
                f"👤 {top_delegator[0]} has delegated {top_delegator[1]['delegated_out']} "
                f"emails. Consider if their role/scope is well-defined."
            )

        if not recs:
            recs.append("✅ Delegation patterns look healthy. No issues detected.")

        return recs


# ======================================================================
# TEST FUNCTION
# ======================================================================

def test_v686():
    """
    Comprehensive test suite for the V686 Email Delegation Intelligence Engine.
    Tests 5+ real-world email scenarios covering all core features.
    """
    print("=" * 70)
    print("V686 - Email Delegation Intelligence Engine — Test Suite")
    print("=" * 70)

    # ------------------------------------------------------------------
    # Setup: Organization structure
    # ------------------------------------------------------------------
    org = {
        "Alice Chen": {
            "email": "alice@company.com",
            "role": "Engineering Manager",
            "expertise": ["engineering", "product"],
            "skills": ["architecture", "team lead", "code review"],
            "team": "Platform Engineering",
            "manager": "bob@company.com",
            "capacity": 80,
        },
        "Bob Martinez": {
            "email": "bob@company.com",
            "role": "VP of Engineering",
            "expertise": ["engineering", "security"],
            "skills": ["strategy", "infrastructure", "security audit"],
            "team": "Engineering Leadership",
            "manager": "ceo@company.com",
            "capacity": 60,
        },
        "Carol Wu": {
            "email": "carol@company.com",
            "role": "Senior Designer",
            "expertise": ["design"],
            "skills": ["figma", "wireframe", "ux research", "accessibility"],
            "team": "Design",
            "manager": "alice@company.com",
            "capacity": 90,
        },
        "David Kim": {
            "email": "david@company.com",
            "role": "Finance Director",
            "expertise": ["finance"],
            "skills": ["budget planning", "forecasting", "audit"],
            "team": "Finance",
            "manager": "ceo@company.com",
            "capacity": 70,
        },
        "Eve Patel": {
            "email": "eve@company.com",
            "role": "Security Engineer",
            "expertise": ["security", "engineering"],
            "skills": ["penetration test", "vulnerability assessment", "encryption"],
            "team": "Security",
            "manager": "bob@company.com",
            "capacity": 85,
        },
        "Frank Lopez": {
            "email": "frank@company.com",
            "role": "HR Manager",
            "expertise": ["hr"],
            "skills": ["recruitment", "onboarding", "benefits administration"],
            "team": "Human Resources",
            "manager": "ceo@company.com",
            "capacity": 95,
        },
        "Grace Tanaka": {
            "email": "grace@company.com",
            "role": "Marketing Lead",
            "expertise": ["marketing", "sales"],
            "skills": ["campaign management", "seo", "content strategy"],
            "team": "Marketing",
            "manager": "ceo@company.com",
            "capacity": 75,
        },
    }

    engine = EmailDelegationIntelligence(organization=org)

    # ------------------------------------------------------------------
    # Scenario 1: Email about a security vulnerability that should be
    # delegated from Engineering Manager to Security Engineer
    # ------------------------------------------------------------------
    print("\n--- Scenario 1: Security Vulnerability Report ---")
    email1 = {
        "id": "EMAIL-S001",
        "from": "client@external.com",
        "to": "alice@company.com",
        "cc": [],
        "subject": "Critical security vulnerability in production API",
        "body": (
            "Hi Alice, we found a critical vulnerability in the authentication "
            "module. There's a potential breach vector through the OAuth flow. "
            "This needs immediate attention and penetration test. Can you handle "
            "this or delegate to someone with security expertise? This is urgent "
            "and we need incident response ASAP."
        ),
        "timestamp": "2026-05-31T10:00:00Z",
    }

    analysis1 = engine.analyze_delegation_need(email1)
    print(f"  Delegation Score: {analysis1['delegation_score']}/100")
    print(f"  Needs Delegation: {analysis1['needs_delegation']}")
    print(f"  Detected Domains: {analysis1['detected_domains']}")
    print(f"  Reasons ({len(analysis1['delegation_reasons'])}):")
    for r in analysis1["delegation_reasons"]:
        print(f"    - {r}")

    suggestion1 = engine.suggest_delegate(email1, analysis1)
    print(f"  Suggested Delegate: {suggestion1['suggested_delegate']}")
    print(f"  Expertise Match: {suggestion1['expertise_match']}")
    print(f"  Confidence: {suggestion1['confidence']}")
    print(f"  Reasoning: {suggestion1['reasoning']}")
    if suggestion1["alternative_delegates"]:
        print(f"  Alternatives:")
        for alt in suggestion1["alternative_delegates"]:
            print(f"    - {alt['name']} ({alt['email']}) score={alt['score']}")

    assert analysis1["needs_delegation"], "Should need delegation (security email to eng manager)"
    assert analysis1["delegation_score"] >= 35, f"Score should be >= 35, got {analysis1['delegation_score']}"
    assert "security" in analysis1["detected_domains"], "Should detect security domain"
    assert suggestion1["suggested_delegate"] is not None, "Should suggest a delegate"
    assert "eve@company.com" == suggestion1["suggested_delegate"], (
        f"Should suggest Eve (security eng), got {suggestion1['suggested_delegate']}"
    )
    print("  ✅ Scenario 1 PASSED")

    # ------------------------------------------------------------------
    # Scenario 2: Budget question sent to an engineer — should delegate
    # to Finance Director
    # ------------------------------------------------------------------
    print("\n--- Scenario 2: Budget Question Misrouted to Engineer ---")
    email2 = {
        "id": "EMAIL-S002",
        "from": "cfo@company.com",
        "to": "alice@company.com",
        "cc": ["bob@company.com"],
        "subject": "Q3 Budget Review - Engineering Department",
        "body": (
            "Hi Alice, can you provide the Q3 budget forecast for the engineering "
            "department? We need the expense breakdown, cost projections, and "
            "revenue attribution. This involves financial modeling and audit "
            "compliance. Please forward to whoever handles budget planning if "
            "that's not you. Deadline is Friday."
        ),
        "timestamp": "2026-05-31T11:30:00Z",
    }

    analysis2 = engine.analyze_delegation_need(email2)
    print(f"  Delegation Score: {analysis2['delegation_score']}/100")
    print(f"  Needs Delegation: {analysis2['needs_delegation']}")
    print(f"  Detected Domains: {analysis2['detected_domains']}")

    suggestion2 = engine.suggest_delegate(email2, analysis2)
    print(f"  Suggested Delegate: {suggestion2['suggested_delegate']}")
    print(f"  Expertise Match: {suggestion2['expertise_match']}")
    print(f"  Confidence: {suggestion2['confidence']}")

    assert analysis2["needs_delegation"], "Should need delegation (finance to engineer)"
    assert "finance" in analysis2["detected_domains"], "Should detect finance domain"
    assert suggestion2["suggested_delegate"] == "david@company.com", (
        f"Should suggest David (finance), got {suggestion2['suggested_delegate']}"
    )
    print("  ✅ Scenario 2 PASSED")

    # ------------------------------------------------------------------
    # Scenario 3: Design review request — multi-recipient, reply-all needed
    # ------------------------------------------------------------------
    print("\n--- Scenario 3: Design Review (Multi-Recipient, Reply-All) ---")
    email3 = {
        "id": "EMAIL-S003",
        "from": "pm@company.com",
        "to": ["alice@company.com", "bob@company.com"],
        "cc": ["grace@company.com", "david@company.com"],
        "subject": "Re: New Dashboard UI Review - Action Items",
        "body": (
            "Hi team, please review the new dashboard wireframes and mockups. "
            "We need UX feedback on the accessibility of the navigation. "
            "Please keep everyone in the loop on your findings. The figma link "
            "is attached. Deadline is Wednesday. Action items for each team lead."
        ),
        "timestamp": "2026-05-31T14:00:00Z",
    }

    analysis3 = engine.analyze_delegation_need(email3)
    print(f"  Delegation Score: {analysis3['delegation_score']}/100")
    print(f"  Needs Delegation: {analysis3['needs_delegation']}")
    print(f"  Reply-All Recommended: {analysis3['reply_all_recommended']}")
    print(f"  Total Recipients: {analysis3['total_recipients']}")

    # Check reply-all enforcement
    reply_all = engine.enforce_reply_all(email3)
    print(f"  Reply-All Required: {reply_all['reply_all_required']}")
    print(f"  Reply-All Reasons: {reply_all['reasons']}")
    print(f"  Recommended Reply-To: {reply_all['recommended_reply_to']}")

    suggestion3 = engine.suggest_delegate(email3, analysis3)
    print(f"  Suggested Delegate: {suggestion3['suggested_delegate']}")
    print(f"  Expertise Match: {suggestion3['expertise_match']}")

    assert analysis3["reply_all_recommended"], "Should recommend reply-all (4 recipients)"
    assert reply_all["reply_all_required"], "Reply-all should be required"
    assert analysis3["total_recipients"] == 4, f"Should have 4 recipients, got {analysis3['total_recipients']}"
    assert suggestion3["suggested_delegate"] == "carol@company.com", (
        f"Should suggest Carol (designer), got {suggestion3['suggested_delegate']}"
    )
    print("  ✅ Scenario 3 PASSED")

    # ------------------------------------------------------------------
    # Scenario 4: Delegation chain tracking — A delegates to B who
    # delegates to C
    # ------------------------------------------------------------------
    print("\n--- Scenario 4: Delegation Chain Tracking ---")
    email4 = {
        "id": "EMAIL-S004",
        "from": "ceo@company.com",
        "to": "bob@company.com",
        "cc": [],
        "subject": "New compliance requirements for GDPR",
        "body": (
            "Bob, we have new legal compliance requirements from our GDPR audit. "
            "Need to update our privacy policy and contract terms. Please ensure "
            "this is handled by someone with legal expertise."
        ),
        "timestamp": "2026-05-31T09:00:00Z",
    }

    analysis4 = engine.analyze_delegation_need(email4)
    print(f"  Delegation Score: {analysis4['delegation_score']}/100")
    print(f"  Detected Domains: {analysis4['detected_domains']}")

    # Bob delegates to Alice (no legal expert in org — she's next in chain)
    track1 = engine.track_delegation(
        email4,
        delegator="bob@company.com",
        delegate="alice@company.com",
        status=DelegationStatus.DELEGATED,
        notes="Bob forwarding to Alice for triage",
    )
    print(f"  Step 1: bob → alice | Chain: {track1['chain_id']} | Status: {track1['status']}")
    print(f"  Chain Path: {' → '.join(track1['chain_path'])}")

    # Alice delegates to Eve (closest to legal/security)
    track2 = engine.track_delegation(
        email4,
        delegator="alice@company.com",
        delegate="eve@company.com",
        status=DelegationStatus.DELEGATED,
        notes="Alice forwarding to Eve for security/compliance review",
        parent_chain_id=track1["chain_id"],
    )
    print(f"  Step 2: alice → eve | Chain: {track2['chain_id']} | Status: {track2['status']}")
    print(f"  Chain Path: {' → '.join(track2['chain_path'])}")

    assert track1["chain_length"] == 1, f"Chain length should be 1, got {track1['chain_length']}"
    assert track2["chain_length"] == 2, f"Chain length should be 2, got {track2['chain_length']}"
    assert not track1["loop_detected"], "No loop in step 1"
    assert not track2["loop_detected"], "No loop in step 2"
    print("  ✅ Scenario 4 PASSED")

    # ------------------------------------------------------------------
    # Scenario 5: Delegation loop detection — A→B→C→A (circular)
    # ------------------------------------------------------------------
    print("\n--- Scenario 5: Delegation Loop Detection ---")
    email5 = {
        "id": "EMAIL-S005",
        "from": "support@company.com",
        "to": "alice@company.com",
        "cc": [],
        "subject": "Customer complaint about billing invoice",
        "body": (
            "Alice, we received a customer complaint about an incorrect invoice. "
            "The customer is demanding a refund. This involves billing, cost "
            "adjustments, and potentially contract terms. Can you handle or "
            "delegate this?"
        ),
        "timestamp": "2026-05-31T15:00:00Z",
    }

    # Alice delegates to David (finance)
    track_a = engine.track_delegation(
        email5,
        delegator="alice@company.com",
        delegate="david@company.com",
        status=DelegationStatus.DELEGATED,
        notes="Alice delegates to David for billing issue",
    )
    print(f"  Step 1: alice → david | Chain: {track_a['chain_id']}")

    # David delegates to Grace (thinks it's a customer/sales issue)
    track_b = engine.track_delegation(
        email5,
        delegator="david@company.com",
        delegate="grace@company.com",
        status=DelegationStatus.DELEGATED,
        notes="David thinks it's a sales/customer issue",
        parent_chain_id=track_a["chain_id"],
    )
    print(f"  Step 2: david → grace | Chain: {track_b['chain_id']}")

    # Grace tries to delegate back to Alice — LOOP!
    track_c = engine.track_delegation(
        email5,
        delegator="grace@company.com",
        delegate="alice@company.com",
        status=DelegationStatus.DELEGATED,
        notes="Grace sends back to Alice as original assignee",
        parent_chain_id=track_b["chain_id"],
    )
    print(f"  Step 3: grace → alice | Chain: {track_c['chain_id']}")
    print(f"  Loop Detected: {track_c['loop_detected']}")
    print(f"  Status: {track_c['status']}")
    if "loop_warning" in track_c:
        print(f"  Warning: {track_c['loop_warning']}")

    assert track_c["loop_detected"], "Should detect loop (alice→david→grace→alice)"
    assert track_c["status"] == "loop_detected", (
        f"Status should be loop_detected, got {track_c['status']}"
    )
    print("  ✅ Scenario 5 PASSED")

    # ------------------------------------------------------------------
    # Scenario 6: HR onboarding email — should go to HR Manager
    # ------------------------------------------------------------------
    print("\n--- Scenario 6: HR Onboarding Request ---")
    email6 = {
        "id": "EMAIL-S006",
        "from": "newhire@company.com",
        "to": "alice@company.com",
        "cc": ["bob@company.com"],
        "subject": "Questions about onboarding process and benefits",
        "body": (
            "Hi Alice, I'm starting next Monday and have questions about the "
            "onboarding process. When do benefits kick in? What's the PTO policy? "
            "Also need to know about salary direct deposit setup and the "
            "recruitment paperwork I need to complete. Who should I talk to?"
        ),
        "timestamp": "2026-05-31T16:00:00Z",
    }

    analysis6 = engine.analyze_delegation_need(email6)
    suggestion6 = engine.suggest_delegate(email6, analysis6)

    print(f"  Delegation Score: {analysis6['delegation_score']}/100")
    print(f"  Needs Delegation: {analysis6['needs_delegation']}")
    print(f"  Detected Domains: {analysis6['detected_domains']}")
    print(f"  Suggested Delegate: {suggestion6['suggested_delegate']}")
    print(f"  Expertise Match: {suggestion6['expertise_match']}")
    print(f"  Confidence: {suggestion6['confidence']}")

    assert analysis6["needs_delegation"], "HR email to engineer should need delegation"
    assert "hr" in analysis6["detected_domains"], "Should detect HR domain"
    assert suggestion6["suggested_delegate"] == "frank@company.com", (
        f"Should suggest Frank (HR), got {suggestion6['suggested_delegate']}"
    )
    print("  ✅ Scenario 6 PASSED")

    # ------------------------------------------------------------------
    # Scenario 7: Marketing campaign email to engineer — multi-recipient
    # ------------------------------------------------------------------
    print("\n--- Scenario 7: Marketing Campaign (Reply-All Enforcement) ---")
    email7 = {
        "id": "EMAIL-S007",
        "from": "cmo@company.com",
        "to": ["alice@company.com", "david@company.com", "frank@company.com"],
        "cc": ["bob@company.com"],
        "subject": "Fwd: Q4 Marketing Campaign Strategy - Review Needed",
        "body": (
            "Team, please review the Q4 campaign strategy. We need input on "
            "SEO optimization, social media content calendar, and conversion "
            "funnel improvements. For visibility, please reply all with your "
            "feedback. Everyone should know the plan. Advertising budget is "
            "attached."
        ),
        "timestamp": "2026-05-31T17:00:00Z",
    }

    analysis7 = engine.analyze_delegation_need(email7)
    reply_all7 = engine.enforce_reply_all(email7)

    print(f"  Delegation Score: {analysis7['delegation_score']}/100")
    print(f"  Total Recipients: {analysis7['total_recipients']}")
    print(f"  Reply-All Required: {reply_all7['reply_all_required']}")
    print(f"  Reply-All Reasons: {reply_all7['reasons']}")
    print(f"  Recommended Reply-To ({len(reply_all7['recommended_reply_to'])} people):")
    for r in reply_all7["recommended_reply_to"]:
        print(f"    - {r}")

    assert reply_all7["reply_all_required"], "Should require reply-all"
    assert analysis7["total_recipients"] == 4, "Should have 4 recipients"
    assert len(reply_all7["recommended_reply_to"]) >= 4, "Should include all recipients + sender"
    print("  ✅ Scenario 7 PASSED")

    # ------------------------------------------------------------------
    # Generate Final Delegation Report
    # ------------------------------------------------------------------
    print("\n--- Delegation Analytics Report ---")
    report = engine.generate_delegation_report()

    print(f"  Report Generated: {report['report_generated_at']}")
    print(f"  Summary:")
    for k, v in report["summary"].items():
        print(f"    {k}: {v}")
    print(f"  Status Distribution: {report['status_distribution']}")
    print(f"  Domain Distribution: {report['domain_distribution']}")
    print(f"  Person Stats:")
    for person, stats in report["person_stats"].items():
        print(f"    {person}: {stats}")
    print(f"  Chain Details:")
    for eid, steps in report["chain_details"].items():
        for step in steps:
            loop_mark = " 🔄 LOOP!" if step["loop"] else ""
            print(f"    [{eid}] Step {step['step']}: {step['from']} → {step['to']} ({step['status']}){loop_mark}")
    print(f"  Reply-All Enforcement: {report['reply_all_enforcement']}")
    print(f"  Recommendations:")
    for rec in report["recommendations"]:
        print(f"    {rec}")

    assert report["summary"]["total_delegation_events"] >= 5, (
        f"Should have >= 5 events, got {report['summary']['total_delegation_events']}"
    )
    assert report["summary"]["loops_detected"] >= 1, "Should have detected at least 1 loop"
    assert report["summary"]["max_chain_length"] >= 3, (
        f"Max chain should be >= 3, got {report['summary']['max_chain_length']}"
    )
    print("  ✅ Report PASSED")

    # ------------------------------------------------------------------
    # Final Summary
    # ------------------------------------------------------------------
    print("\n" + "=" * 70)
    print("ALL TESTS PASSED ✅")
    print("=" * 70)
    print(f"  Scenarios Tested: 7")
    print(f"  Total Delegation Events: {report['summary']['total_delegation_events']}")
    print(f"  Unique Chains: {report['summary']['total_unique_chains']}")
    print(f"  Loops Detected: {report['summary']['loops_detected']}")
    print(f"  Max Chain Length: {report['summary']['max_chain_length']}")
    print("=" * 70)


if __name__ == "__main__":
    test_v686()
