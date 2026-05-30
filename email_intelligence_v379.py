"""
V379 - Email Cross-Reference Analyzer
Link related emails across threads/projects/contacts. Build knowledge graph of email
relationships. Surface relevant past conversations.
"""
import json
import re
from datetime import datetime, timedelta
from typing import Dict, List, Set, Tuple, Optional
from collections import defaultdict


class EmailCrossReferenceAnalyzer:
    """Analyze cross-references and build knowledge graphs from email data."""

    def __init__(self):
        self.emails = []
        self.threads = defaultdict(list)
        self.contact_graph = defaultdict(set)
        self.project_tags = defaultdict(list)
        self.knowledge_graph = {"nodes": [], "edges": []}
        self.entity_index = defaultdict(list)

    def ingest_email(self, email: Dict) -> None:
        """Ingest an email into the analysis system."""
        self.emails.append(email)
        email_id = email.get("id", f"auto_{len(self.emails)}")
        email["_internal_id"] = email_id

        # Thread grouping
        thread_id = email.get("thread_id", email.get("subject", "").lower().strip())
        self.threads[thread_id].append(email)

        # Contact graph
        sender = email.get("sender", "")
        recipients = email.get("recipients", [])
        if sender:
            for r in recipients:
                self.contact_graph[sender].add(r)
                self.contact_graph[r].add(sender)

        # Entity extraction
        entities = self._extract_entities(email)
        for entity in entities:
            self.entity_index[entity].append(email_id)

        # Project tagging
        projects = self._detect_projects(email)
        for proj in projects:
            self.project_tags[proj].append(email_id)

    def _extract_entities(self, email: Dict) -> List[str]:
        """Extract key entities from email."""
        entities = []
        body = email.get("body", "")
        subject = email.get("subject", "")
        combined = f"{subject} {body}"

        # Extract project names (capitalized phrases)
        projects = re.findall(r'\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+\b', combined)
        entities.extend(projects)

        # Extract dollar amounts
        amounts = re.findall(r'\$[\d,]+(?:\.\d{2})?', combined)
        entities.extend(amounts)

        # Extract dates
        dates = re.findall(r'\d{1,2}/\d{1,2}/\d{2,4}', combined)
        entities.extend(dates)

        # Extract quoted terms
        quoted = re.findall(r'"([^"]+)"', combined)
        entities.extend(quoted)

        return list(set(entities))

    def _detect_projects(self, email: Dict) -> List[str]:
        """Detect project associations from email content."""
        projects = []
        body = email.get("body", "").lower()
        subject = email.get("subject", "").lower()
        combined = f"{subject} {body}"

        project_keywords = {
            "alpha": ["project alpha", "alpha release", "alpha milestone"],
            "beta": ["project beta", "beta testing", "beta launch"],
            "migration": ["migration", "migrate", "platform migration"],
            "security_audit": ["security audit", "penetration test", "vulnerability"],
            "q3_planning": ["q3", "quarterly planning", "roadmap"],
            "client_onboarding": ["onboarding", "new client", "client setup"],
        }

        for proj, keywords in project_keywords.items():
            if any(kw in combined for kw in keywords):
                projects.append(proj)

        return projects

    def find_related_emails(self, email_id: str, max_results: int = 10) -> List[Dict]:
        """Find emails related to a given email."""
        target = None
        for email in self.emails:
            if email.get("_internal_id") == email_id or email.get("id") == email_id:
                target = email
                break

        if not target:
            return []

        related = []
        target_sender = target.get("sender", "")
        target_subject = target.get("subject", "").lower()
        target_thread = target.get("thread_id", target_subject)
        target_entities = set(self._extract_entities(target))

        for email in self.emails:
            if email.get("_internal_id") == email_id:
                continue

            score = 0.0
            reasons = []

            # Same thread
            email_thread = email.get("thread_id", email.get("subject", "").lower().strip())
            if email_thread == target_thread:
                score += 50
                reasons.append("same_thread")

            # Shared contacts
            email_contacts = set([email.get("sender", "")] + email.get("recipients", []))
            target_contacts = set([target_sender] + target.get("recipients", []))
            shared = email_contacts & target_contacts
            if shared:
                score += len(shared) * 10
                reasons.append(f"shared_contacts:{len(shared)}")

            # Shared entities
            email_entities = set(self._extract_entities(email))
            shared_entities = target_entities & email_entities
            if shared_entities:
                score += len(shared_entities) * 15
                reasons.append(f"shared_entities:{len(shared_entities)}")

            # Subject similarity
            email_subject = email.get("subject", "").lower()
            if target_subject and email_subject:
                target_words = set(target_subject.split())
                email_words = set(email_subject.split())
                overlap = target_words & email_words
                if len(overlap) > 2:
                    score += len(overlap) * 5
                    reasons.append("subject_overlap")

            if score > 0:
                related.append({
                    "email_id": email.get("_internal_id", email.get("id")),
                    "subject": email.get("subject", ""),
                    "sender": email.get("sender", ""),
                    "relevance_score": round(score, 1),
                    "match_reasons": reasons,
                    "timestamp": email.get("timestamp", ""),
                })

        related.sort(key=lambda x: x["relevance_score"], reverse=True)
        return related[:max_results]

    def build_knowledge_graph(self) -> Dict:
        """Build a knowledge graph from all ingested emails."""
        nodes = []
        edges = []
        node_ids = set()

        # Add contact nodes
        for contact in self.contact_graph:
            node_id = f"contact:{contact}"
            if node_id not in node_ids:
                nodes.append({
                    "id": node_id,
                    "type": "contact",
                    "label": contact,
                    "connection_count": len(self.contact_graph[contact]),
                })
                node_ids.add(node_id)

        # Add project nodes
        for project in self.project_tags:
            node_id = f"project:{project}"
            if node_id not in node_ids:
                nodes.append({
                    "id": node_id,
                    "type": "project",
                    "label": project,
                    "email_count": len(self.project_tags[project]),
                })
                node_ids.add(node_id)

        # Add email nodes
        for email in self.emails:
            email_id = email.get("_internal_id", email.get("id"))
            node_id = f"email:{email_id}"
            nodes.append({
                "id": node_id,
                "type": "email",
                "label": email.get("subject", "")[:50],
                "sender": email.get("sender", ""),
            })
            node_ids.add(node_id)

        # Add contact-to-contact edges
        for sender, recipients in self.contact_graph.items():
            for recipient in recipients:
                edges.append({
                    "source": f"contact:{sender}",
                    "target": f"contact:{recipient}",
                    "type": "communicates_with",
                })

        # Add email-to-project edges
        for project, email_ids in self.project_tags.items():
            for eid in email_ids:
                edges.append({
                    "source": f"email:{eid}",
                    "target": f"project:{project}",
                    "type": "belongs_to_project",
                })

        self.knowledge_graph = {"nodes": nodes, "edges": edges}
        return self.knowledge_graph

    def surface_relevant_conversations(self, query: str, limit: int = 5) -> List[Dict]:
        """Surface relevant past conversations based on a query."""
        query_lower = query.lower()
        query_terms = set(query_lower.split())
        results = []

        for email in self.emails:
            score = 0.0
            subject = email.get("subject", "").lower()
            body = email.get("body", "").lower()
            combined = f"{subject} {body}"

            # Term matching
            email_terms = set(combined.split())
            overlap = query_terms & email_terms
            score += len(overlap) * 10

            # Exact phrase matching
            if query_lower in combined:
                score += 30

            # Thread depth bonus
            thread_id = email.get("thread_id", subject.strip())
            thread_depth = len(self.threads.get(thread_id, []))
            score += thread_depth * 2

            if score > 0:
                results.append({
                    "email_id": email.get("_internal_id", email.get("id")),
                    "subject": email.get("subject", ""),
                    "sender": email.get("sender", ""),
                    "relevance_score": round(score, 1),
                    "thread_depth": thread_depth,
                    "timestamp": email.get("timestamp", ""),
                    "snippet": combined[:200],
                })

        results.sort(key=lambda x: x["relevance_score"], reverse=True)
        return results[:limit]

    def analyze(self, emails: List[Dict], recipients: List[str]) -> Dict:
        """Run full cross-reference analysis."""
        enforce_reply_all = len(recipients) > 1

        for email in emails:
            self.ingest_email(email)

        graph = self.build_knowledge_graph()

        # Get cross-references for each email
        cross_refs = {}
        for email in emails:
            eid = email.get("_internal_id", email.get("id"))
            related = self.find_related_emails(eid)
            if related:
                cross_refs[eid] = related

        return {
            "engine": "V379 - Email Cross-Reference Analyzer",
            "timestamp": datetime.now().isoformat(),
            "reply_all_required": enforce_reply_all,
            "reply_all_enforced": enforce_reply_all,
            "summary": {
                "total_emails_analyzed": len(emails),
                "unique_threads": len(self.threads),
                "unique_contacts": len(self.contact_graph),
                "projects_detected": list(self.project_tags.keys()),
                "knowledge_graph_nodes": len(graph["nodes"]),
                "knowledge_graph_edges": len(graph["edges"]),
            },
            "threads": {k: len(v) for k, v in self.threads.items()},
            "contact_connections": {k: list(v) for k, v in self.contact_graph.items()},
            "project_email_map": {k: len(v) for k, v in self.project_tags.items()},
            "cross_references": cross_refs,
            "knowledge_graph": graph,
            "entity_index": {k: len(v) for k, v in self.entity_index.items()},
        }


def main():
    analyzer = EmailCrossReferenceAnalyzer()

    now = datetime.now()
    sample_emails = [
        {
            "id": "xr_001",
            "sender": "alice@company.com",
            "recipients": ["bob@partner.com", "carol@team.com"],
            "subject": "Project Alpha - Q3 Planning Kickoff",
            "body": "Team, let's kick off the Q3 planning for Project Alpha. We need to align on the roadmap and discuss the $500,000 budget allocation. Target release date is 09/15/2026.",
            "thread_id": "project_alpha_q3",
            "timestamp": (now - timedelta(days=10)).isoformat(),
        },
        {
            "id": "xr_002",
            "sender": "bob@partner.com",
            "recipients": ["alice@company.com"],
            "subject": "Re: Project Alpha - Q3 Planning Kickoff",
            "body": "Agreed on the roadmap. I've reviewed the $500,000 budget and it looks feasible. Let's schedule the migration planning session next.",
            "thread_id": "project_alpha_q3",
            "timestamp": (now - timedelta(days=9)).isoformat(),
        },
        {
            "id": "xr_003",
            "sender": "carol@team.com",
            "recipients": ["alice@company.com", "dave@security.com"],
            "subject": "Security Audit for Project Alpha",
            "body": "We need to complete the security audit and penetration test before the Alpha release. Dave, can you schedule the vulnerability assessment?",
            "thread_id": "alpha_security",
            "timestamp": (now - timedelta(days=7)).isoformat(),
        },
        {
            "id": "xr_004",
            "sender": "dave@security.com",
            "recipients": ["carol@team.com", "alice@company.com"],
            "subject": "Re: Security Audit for Project Alpha",
            "body": "I'll run the vulnerability scan next week. We should also review the platform migration security implications.",
            "thread_id": "alpha_security",
            "timestamp": (now - timedelta(days=6)).isoformat(),
        },
        {
            "id": "xr_005",
            "sender": "eve@sales.com",
            "recipients": ["alice@company.com", "frank@client.com"],
            "subject": "Client Onboarding - New Customer Setup",
            "body": "We have a new client onboarding request. Frank, please provide the necessary details for the client setup process.",
            "thread_id": "client_onboarding_001",
            "timestamp": (now - timedelta(days=3)).isoformat(),
        },
        {
            "id": "xr_006",
            "sender": "alice@company.com",
            "recipients": ["bob@partner.com", "carol@team.com", "eve@sales.com"],
            "subject": "Q3 Roadmap Update - Beta Testing Phase",
            "body": "Update on Q3 planning: Project Beta testing phase starts next month. We need to coordinate with the client onboarding team and ensure the platform migration is complete.",
            "thread_id": "q3_roadmap",
            "timestamp": (now - timedelta(days=1)).isoformat(),
        },
    ]

    recipients_list = ["bob@partner.com", "carol@team.com"]
    result = analyzer.analyze(sample_emails, recipients=recipients_list)
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
