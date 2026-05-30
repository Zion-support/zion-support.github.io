#!/usr/bin/env python3
"""V235 - AI Email Cross-Team Collaboration Hub
Detect cross-functional discussions, surface relevant context from
other teams, and facilitate knowledge sharing across departments.
Always enforces reply-all for multi-recipient emails.
"""
import json, re, datetime
from dataclasses import dataclass, field
from typing import List, Dict
from collections import defaultdict

@dataclass
class CollaborationInsight:
    thread_id: str
    teams_involved: List[str]
    cross_functional: bool
    shared_topics: List[str]
    knowledge_gaps: List[str]
    suggested_participants: List[str]
    collaboration_score: float

class TeamDetector:
    TEAM_SIGNALS = {
        "engineering": ["dev", "engineering", "backend", "frontend", "infra", "code", "deploy", "api", "architecture"],
        "product": ["product", "roadmap", "feature", "user story", "sprint", "backlog", "PRD", "requirements"],
        "sales": ["sales", "deal", "pipeline", "revenue", "customer", "prospect", "quota", "CRM"],
        "marketing": ["marketing", "campaign", "brand", "content", "SEO", "social", "leads", "funnel"],
        "finance": ["finance", "budget", "cost", "revenue", "invoice", "accounting", "P&L", "forecast"],
        "hr": ["hiring", "HR", "people", "recruiting", "onboarding", "benefits", "culture"],
        "legal": ["legal", "contract", "compliance", "regulatory", "NDA", "terms"],
        "support": ["support", "ticket", "customer issue", "escalation", "SLA", "helpdesk"],
        "design": ["design", "UX", "UI", "mockup", "prototype", "figma", "user research"],
    }
    
    def detect_teams(self, emails: List[Dict]) -> Dict[str, List[str]]:
        teams = defaultdict(list)
        for email in emails:
            body = email.get("body", "").lower()
            sender = email.get("from", "")
            subject = email.get("subject", "").lower()
            combined = f"{subject} {body}"
            
            for team, signals in self.TEAM_SIGNALS.items():
                if any(s in combined for s in signals):
                    if sender not in teams[team]:
                        teams[team].append(sender)
        
        return dict(teams)

class CollaborationHub:
    def __init__(self):
        self.team_detector = TeamDetector()
    
    def analyze_thread(self, thread_id: str, emails: List[Dict],
                       recipients: List[str] = None) -> Dict:
        teams = self.team_detector.detect_teams(emails)
        team_names = list(teams.keys())
        cross_functional = len(team_names) > 1
        
        # Extract shared topics
        all_text = " ".join(e.get("body", "") for e in emails).lower()
        topics = []
        topic_keywords = {
            "architecture": ["architecture", "microservices", "monolith", "api design"],
            "timeline": ["timeline", "deadline", "schedule", "milestone", "launch"],
            "budget": ["budget", "cost", "pricing", "expense", "spend"],
            "quality": ["quality", "testing", "bugs", "performance", "reliability"],
            "security": ["security", "vulnerability", "compliance", "authentication"],
        }
        for topic, keywords in topic_keywords.items():
            if any(kw in all_text for kw in keywords):
                topics.append(topic)
        
        # Identify knowledge gaps
        gaps = []
        if cross_functional and "engineering" in team_names and "sales" in team_names:
            gaps.append("Technical feasibility vs sales commitments alignment needed")
        if "product" in team_names and "engineering" not in team_names:
            gaps.append("Engineering input needed for technical feasibility")
        if "legal" not in team_names and any(kw in all_text for kw in ["contract", "terms", "compliance"]):
            gaps.append("Legal review recommended for compliance topics")
        
        # Suggest missing participants
        suggested = []
        for team in self.team_detector.TEAM_SIGNALS:
            if team not in team_names:
                relevant_signals = self.team_detector.TEAM_SIGNALS[team]
                if any(s in all_text for s in relevant_signals[:3]):
                    suggested.append(f"{team.title()} team representative")
        
        score = min(1.0, len(team_names) * 0.2 + len(topics) * 0.1 + (0.2 if cross_functional else 0))
        
        return {
            "thread_id": thread_id,
            "teams_involved": team_names,
            "team_members": teams,
            "cross_functional": cross_functional,
            "shared_topics": topics,
            "knowledge_gaps": gaps,
            "suggested_participants": suggested[:3],
            "collaboration_score": round(score, 2),
            "reply_all_required": len(recipients or []) > 1,
            "timestamp": datetime.datetime.now().isoformat()
        }

if __name__ == "__main__":
    hub = CollaborationHub()
    emails = [
        {"from": "pm@co.com", "subject": "API Redesign Discussion", "body": "We need to redesign the API architecture for the new product launch. The timeline is tight — deadline is July 15."},
        {"from": "dev@co.com", "body": "The current monolith won't scale. I propose microservices. This impacts the security model and compliance requirements."},
        {"from": "sales@co.com", "body": "Customer is asking about the API redesign. We promised delivery by Q3. Budget is $150K for this initiative."},
    ]
    print(json.dumps(hub.analyze_thread("collab-001", emails, ["pm@co.com", "dev@co.com", "sales@co.com"]), indent=2))
