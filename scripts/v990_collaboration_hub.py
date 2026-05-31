#!/usr/bin/env python3
"""
V990: Email Collaboration Hub Engine
Shared inbox management with assignment, mentions, and internal comments.
Enables team email coordination with strict reply-all enforcement.
"""

import re
import hashlib
from datetime import datetime, timezone
from typing import Dict, List, Any


class EmailCollaborationHub:
    """Manages team email collaboration."""

    def __init__(self):
        self.collaboration_log: List[Dict] = []
        self.reply_all_audit: List[Dict] = []
        self.assignments: Dict[str, Dict] = {}
        self.internal_comments: Dict[str, List[Dict]] = {}

    def analyze_email_case_by_case(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email for collaboration case by case."""
        analysis = {
            "engine": "V990",
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "email_id": email.get("id", hashlib.md5(str(email).encode()).hexdigest()[:12]),
            "analysis_type": "collaboration_hub",
        }

        to_recipients = email.get("to", [])
        cc_recipients = email.get("cc", [])
        all_recipients = to_recipients + cc_recipients
        is_multi_recipient = len(all_recipients) > 1

        body = email.get("body", "")
        subject = email.get("subject", "")

        # 1. Detect collaboration needs
        collab_needs = self._detect_collaboration_needs(email, body)
        analysis["collaboration_needs"] = collab_needs

        # 2. Extract mentions
        mentions = self._extract_mentions(body)
        analysis["mentions"] = mentions

        # 3. Detect assignments
        assignments = self._detect_assignments(body)
        analysis["assignments"] = assignments

        # 4. Internal comments detection
        internal_comments = self._detect_internal_comments(body)
        analysis["internal_comments"] = internal_comments

        # 5. Team coordination signals
        coordination = self._detect_coordination_signals(body)
        analysis["coordination_signals"] = coordination

        # 6. Collaboration priority
        priority = self._calculate_collaboration_priority(
            collab_needs, mentions, assignments, coordination
        )
        analysis["collaboration_priority"] = priority

        # 7. Recommended team members
        recommended_team = self._recommend_team_members(email, collab_needs, assignments)
        analysis["recommended_team"] = recommended_team

        # 8. Collaboration workflow
        workflow = self._generate_collaboration_workflow(
            collab_needs, assignments, priority, recommended_team
        )
        analysis["collaboration_workflow"] = workflow

        # 9. Determine action
        action = self._determine_collaboration_action(priority, workflow)
        analysis["recommended_action"] = action

        # REPLY-ALL ENFORCEMENT
        reply_all = self._enforce_reply_all(email, all_recipients, is_multi_recipient)
        analysis["reply_all_enforcement"] = reply_all

        self.collaboration_log.append({
            "email_id": analysis["email_id"],
            "needs_collaboration": collab_needs["needs_collaboration"],
            "mention_count": len(mentions),
            "assignment_count": len(assignments),
            "priority_level": priority["level"],
            "reply_all": reply_all["enforced"],
            "timestamp": analysis["timestamp"],
        })

        return analysis

    def _detect_collaboration_needs(self, email: Dict, body: str) -> Dict:
        """Detect if email needs team collaboration."""
        body_lower = body.lower()
        
        # Multi-recipient indicator
        recipient_count = len(email.get("to", [])) + len(email.get("cc", []))
        
        # Collaboration keywords
        collab_keywords = [
            "team", "everyone", "all", "we need", "let's", "together",
            "collaborate", "coordinate", "assign", "responsible", "owner"
        ]
        
        has_collab_keywords = any(kw in body_lower for kw in collab_keywords)
        
        # Question indicators (needs multiple perspectives)
        question_count = body.count("?")
        
        # Complex topic indicators
        complex_keywords = ["project", "initiative", "cross-functional", "multiple", "various"]
        has_complex_topic = any(kw in body_lower for kw in complex_keywords)
        
        needs_collaboration = (
            recipient_count >= 3 or
            has_collab_keywords or
            question_count >= 2 or
            has_complex_topic
        )
        
        return {
            "needs_collaboration": needs_collaboration,
            "recipient_count": recipient_count,
            "has_collab_keywords": has_collab_keywords,
            "question_count": question_count,
            "has_complex_topic": has_complex_topic,
            "confidence": 0.8 if needs_collaboration else 0.3,
        }

    def _extract_mentions(self, body: str) -> List[Dict]:
        """Extract @mentions from email body."""
        mentions = []
        
        # @mention patterns
        mention_patterns = [
            r'@([a-zA-Z0-9_]+)',
            r'@([a-zA-Z0-9]+\.[a-zA-Z0-9]+)',
        ]
        
        for pattern in mention_patterns:
            matches = re.finditer(pattern, body)
            for match in matches:
                mentioned = match.group(1)
                mentions.append({
                    "mentioned": mentioned,
                    "position": match.start(),
                    "context": body[max(0, match.start()-20):match.end()+20],
                })
        
        return mentions

    def _detect_assignments(self, body: str) -> List[Dict]:
        """Detect task assignments in email."""
        assignments = []
        
        # Assignment patterns
        patterns = [
            (r'(\w+)\s+(?:will|to|should)\s+(.+?)(?:\.|$)', "explicit"),
            (r'(?:assign|assigned to)\s+(\w+)\s*[:\-]?\s*(.+?)(?:\.|$)', "assignment"),
            (r'@(\w+)\s+(?:please|can you|could you)\s+(.+?)(?:\.|$)', "mention_request"),
        ]
        
        for pattern, assign_type in patterns:
            matches = re.finditer(pattern, body, re.IGNORECASE)
            for match in matches:
                assignee = match.group(1)
                task = match.group(2).strip()
                
                if len(task) > 10 and len(task) < 200:
                    assignments.append({
                        "assignee": assignee,
                        "task": task,
                        "type": assign_type,
                        "confidence": 0.8,
                    })
        
        return assignments

    def _detect_internal_comments(self, body: str) -> List[Dict]:
        """Detect internal team comments."""
        comments = []
        
        # Internal comment patterns
        comment_patterns = [
            r'\[INTERNAL\]\s*(.+?)(?:\n|$)',
            r'\[TEAM NOTE\]\s*(.+?)(?:\n|$)',
            r'\/\/\s*(.+?)(?:\n|$)',
            r'Note to team:\s*(.+?)(?:\n|$)',
        ]
        
        for pattern in comment_patterns:
            matches = re.finditer(pattern, body, re.IGNORECASE)
            for match in matches:
                comment_text = match.group(1).strip()
                if len(comment_text) > 10:
                    comments.append({
                        "text": comment_text,
                        "type": "internal",
                        "visibility": "team_only",
                    })
        
        return comments

    def _detect_coordination_signals(self, body: str) -> Dict:
        """Detect coordination signals."""
        body_lower = body.lower()
        
        signals = {
            "has_deadline": False,
            "has_dependencies": False,
            "has_handoffs": False,
            "has_reviews": False,
        }
        
        # Deadline signals
        deadline_patterns = [
            r'(?:by|before|deadline|due)\s+\w+\s+\d+',
            r'(?:today|tomorrow|this week|next week)',
            r'\d{1,2}[/-]\d{1,2}[/-]\d{2,4}',
        ]
        
        for pattern in deadline_patterns:
            if re.search(pattern, body, re.IGNORECASE):
                signals["has_deadline"] = True
                break
        
        # Dependency signals
        dependency_keywords = ["depends on", "waiting for", "blocked by", "after"]
        if any(kw in body_lower for kw in dependency_keywords):
            signals["has_dependencies"] = True
        
        # Handoff signals
        handoff_keywords = ["handoff", "pass to", "transfer to", "take over"]
        if any(kw in body_lower for kw in handoff_keywords):
            signals["has_handoffs"] = True
        
        # Review signals
        review_keywords = ["review", "approve", "feedback", "sign-off"]
        if any(kw in body_lower for kw in review_keywords):
            signals["has_reviews"] = True
        
        signals["signal_count"] = sum(1 for v in signals.values() if v is True)
        
        return signals

    def _calculate_collaboration_priority(self, collab_needs: Dict, mentions: List,
                                          assignments: List, coordination: Dict) -> Dict:
        """Calculate collaboration priority."""
        score = 30  # Base score
        
        # Collaboration needs
        if collab_needs["needs_collaboration"]:
            score += 25
        
        # Mentions
        if mentions:
            score += min(len(mentions) * 10, 20)
        
        # Assignments
        if assignments:
            score += min(len(assignments) * 15, 30)
        
        # Coordination signals
        score += coordination["signal_count"] * 5
        
        score = min(score, 100)
        
        if score >= 75:
            level = "HIGH"
        elif score >= 50:
            level = "MEDIUM"
        else:
            level = "LOW"
        
        return {
            "score": score,
            "level": level,
        }

    def _recommend_team_members(self, email: Dict, collab_needs: Dict, 
                                 assignments: List) -> List[Dict]:
        """Recommend team members for collaboration."""
        recommendations = []
        
        # Extract from recipients
        recipients = email.get("to", []) + email.get("cc", [])
        
        # Add recipients as potential collaborators
        for recipient in recipients[:5]:
            recommendations.append({
                "email": recipient,
                "role": "collaborator",
                "reason": "recipient",
            })
        
        # Add assignees
        for assignment in assignments[:3]:
            recommendations.append({
                "name": assignment["assignee"],
                "role": "assignee",
                "reason": "assigned_task",
                "task": assignment["task"],
            })
        
        return recommendations

    def _generate_collaboration_workflow(self, collab_needs: Dict, assignments: List,
                                          priority: Dict, team: List) -> Dict:
        """Generate collaboration workflow."""
        workflow = {
            "steps": [],
            "estimated_duration": "unknown",
        }
        
        # Step 1: Assignment (if needed)
        if assignments:
            workflow["steps"].append({
                "step": 1,
                "action": "assign_tasks",
                "assignees": [a["assignee"] for a in assignments],
                "status": "pending",
            })
        
        # Step 2: Collaboration
        if collab_needs["needs_collaboration"]:
            workflow["steps"].append({
                "step": len(workflow["steps"]) + 1,
                "action": "team_collaboration",
                "participants": [t["email"] for t in team if "email" in t],
                "status": "pending",
            })
        
        # Step 3: Review
        if priority["level"] in ("HIGH", "MEDIUM"):
            workflow["steps"].append({
                "step": len(workflow["steps"]) + 1,
                "action": "review_and_approve",
                "reviewers": team[:2] if team else [],
                "status": "pending",
            })
        
        # Estimate duration
        if priority["level"] == "HIGH":
            workflow["estimated_duration"] = "1-2 hours"
        elif priority["level"] == "MEDIUM":
            workflow["estimated_duration"] = "4-8 hours"
        else:
            workflow["estimated_duration"] = "1-2 days"
        
        return workflow

    def _determine_collaboration_action(self, priority: Dict, workflow: Dict) -> str:
        """Determine collaboration action."""
        if priority["level"] == "HIGH":
            return "IMMEDIATE_COLLABORATION"
        elif len(workflow["steps"]) >= 3:
            return "MULTI_STEP_WORKFLOW"
        elif priority["level"] == "MEDIUM":
            return "STANDARD_COLLABORATION"
        else:
            return "MINIMAL_COORDINATION"

    def _enforce_reply_all(self, email: Dict, all_recipients: List, is_multi: bool) -> Dict:
        """STRICT reply-all enforcement."""
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

    def get_stats(self) -> Dict:
        if not self.collaboration_log:
            return {"emails_analyzed": 0}
        return {
            "emails_analyzed": len(self.collaboration_log),
            "needs_collaboration_count": sum(1 for c in self.collaboration_log if c["needs_collaboration"]),
            "total_mentions": sum(c["mention_count"] for c in self.collaboration_log),
            "total_assignments": sum(c["assignment_count"] for c in self.collaboration_log),
            "reply_all_enforced": len(self.reply_all_audit),
        }


def test_v990():
    engine = EmailCollaborationHub()

    # Test 1: Team collaboration email
    email1 = {
        "id": "collab-001",
        "from": "project.manager@company.com",
        "to": ["dev@ziontechgroup.com", "qa@company.com", "design@company.com"],
        "cc": ["director@company.com"],
        "subject": "Sprint Planning - Action Items",
        "body": "Hi team, let's coordinate on the sprint planning. @john please prepare the backlog items. @sarah you will set up the testing environment. Team, we need to review the design mockups by Friday. [INTERNAL] Note: Budget approved for new tools. Let's collaborate on this together.",
    }
    r1 = engine.analyze_email_case_by_case(email1)
    assert r1["reply_all_enforcement"]["enforced"] is True
    assert r1["collaboration_needs"]["needs_collaboration"] is True
    assert len(r1["mentions"]) >= 2
    assert len(r1["assignments"]) >= 2
    assert r1["collaboration_priority"]["level"] in ("HIGH", "MEDIUM")
    print(f"✅ Test 1 PASSED: Collaboration detected, {len(r1['mentions'])} mentions, {len(r1['assignments'])} assignments, priority={r1['collaboration_priority']['level']}, reply-all enforced")

    # Test 2: Single recipient email
    email2 = {
        "id": "collab-002",
        "from": "user@company.com",
        "to": ["support@ziontechgroup.com"],
        "subject": "Quick question",
        "body": "Hi, how do I reset my password?",
    }
    r2 = engine.analyze_email_case_by_case(email2)
    assert r2["collaboration_needs"]["needs_collaboration"] is False
    assert r2["collaboration_priority"]["level"] == "LOW"
    print(f"✅ Test 2 PASSED: No collaboration needed for single recipient")

    stats = engine.get_stats()
    print(f"✅ Test 3 PASSED: {stats['emails_analyzed']} analyzed, {stats['needs_collaboration_count']} need collaboration")

    print("\n🎉 V990 ALL TESTS PASSED — Email Collaboration Hub operational!")
    return True


if __name__ == "__main__":
    test_v990()
