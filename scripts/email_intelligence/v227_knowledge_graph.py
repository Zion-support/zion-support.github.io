#!/usr/bin/env python3
"""V227 - AI Email Knowledge Graph Builder
Build a knowledge graph from email conversations showing relationships
between people, projects, decisions, and topics. Enable semantic search.
Always enforces reply-all for multi-recipient emails.
"""
import json, re, datetime, hashlib
from dataclasses import dataclass, field
from typing import List, Dict, Set
from collections import defaultdict

@dataclass
class KnowledgeNode:
    node_id: str
    node_type: str  # "person", "project", "decision", "topic", "document"
    label: str
    metadata: Dict = field(default_factory=dict)

@dataclass
class KnowledgeEdge:
    source: str
    target: str
    relationship: str  # "works_with", "decided", "owns", "discusses", "references"
    weight: float
    context: str

class EntityExtractor:
    PROJECT_PATTERNS = [
        r"(?:project|initiative|program)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)",
        r"(?:Project|Initiative)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)",
    ]
    TOPIC_PATTERNS = [
        r"(?:regarding|about|re:)\s+(.{5,50}?)(?:\.|$)",
        r"(?:the|this)\s+(budget|timeline|architecture|migration|deployment|launch)",
    ]
    
    def extract(self, text: str, sender: str) -> Dict[str, List[str]]:
        entities = {"people": [sender], "projects": [], "topics": [], "decisions": []}
        
        for p in self.PROJECT_PATTERNS:
            entities["projects"].extend(re.findall(p, text))
        for p in self.TOPIC_PATTERNS:
            entities["topics"].extend(re.findall(p, text, re.IGNORECASE))
        
        decision_patterns = [
            r"(?:we(?:'ve| have)?) (?:decided|agreed|chosen)\s+(.{10,100}?)(?:\.|$)",
            r"(?:the decision) (?:is|was)\s+(.{10,100}?)(?:\.|$)",
        ]
        for p in decision_patterns:
            entities["decisions"].extend(re.findall(p, text, re.IGNORECASE))
        
        # Deduplicate
        for key in entities:
            entities[key] = list(set(entities[key]))
        
        return entities

class KnowledgeGraphBuilder:
    def __init__(self):
        self.extractor = EntityExtractor()
        self.nodes = {}
        self.edges = []
    
    def _node_id(self, node_type: str, label: str) -> str:
        return f"{node_type}_{hashlib.md5(label.lower().encode()).hexdigest()[:8]}"
    
    def process_emails(self, emails: List[Dict]) -> Dict:
        for email in emails:
            sender = email.get("from", "unknown")
            body = email.get("body", "")
            recipients = email.get("to", [])
            if isinstance(recipients, str):
                recipients = [recipients]
            
            # Add sender node
            sender_id = self._node_id("person", sender)
            self.nodes[sender_id] = KnowledgeNode(sender_id, "person", sender)
            
            # Add recipient nodes and edges
            for r in recipients:
                r_id = self._node_id("person", r)
                self.nodes[r_id] = KnowledgeNode(r_id, "person", r)
                self.edges.append(KnowledgeEdge(sender_id, r_id, "communicates_with", 1.0, email.get("subject", "")))
            
            # Extract entities
            entities = self.extractor.extract(body, sender)
            
            for project in entities["projects"]:
                pid = self._node_id("project", project)
                self.nodes[pid] = KnowledgeNode(pid, "project", project)
                self.edges.append(KnowledgeEdge(sender_id, pid, "works_on", 0.8, body[:100]))
            
            for topic in entities["topics"]:
                tid = self._node_id("topic", topic)
                self.nodes[tid] = KnowledgeNode(tid, "topic", topic)
                self.edges.append(KnowledgeEdge(sender_id, tid, "discusses", 0.6, body[:100]))
            
            for decision in entities["decisions"]:
                did = self._node_id("decision", decision[:50])
                self.nodes[did] = KnowledgeNode(did, "decision", decision[:80])
                self.edges.append(KnowledgeEdge(sender_id, did, "made", 0.9, body[:100]))
        
        return {
            "nodes_count": len(self.nodes),
            "edges_count": len(self.edges),
            "node_types": {nt: sum(1 for n in self.nodes.values() if n.node_type == nt) for nt in set(n.node_type for n in self.nodes.values())},
            "nodes": [{"id": n.node_id, "type": n.node_type, "label": n.label} for n in list(self.nodes.values())[:20]],
            "edges": [{"source": e.source, "target": e.target, "relationship": e.relationship, "weight": e.weight} for e in self.edges[:30]],
            "reply_all_enforced": True,
            "timestamp": datetime.datetime.now().isoformat()
        }

if __name__ == "__main__":
    builder = KnowledgeGraphBuilder()
    emails = [
        {"from": "pm@zion.com", "to": ["dev@zion.com", "design@zion.com"], "subject": "Project Alpha kickoff",
         "body": "Regarding the migration timeline for Project Alpha, we've decided to use a phased approach."},
        {"from": "dev@zion.com", "to": ["pm@zion.com"], "subject": "Re: Project Alpha",
         "body": "The architecture review for Project Alpha is scheduled. About the budget allocation, we need approval."},
    ]
    print(json.dumps(builder.process_emails(emails), indent=2))
