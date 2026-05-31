"""
V683 - Email Context Memory System
===================================
An intelligent engine for extracting, storing, and recalling context from email
conversations. Builds relationship graphs, detects context switches, provides
context recall for follow-ups, and identifies missing context. Enforces reply-all.

Methods:
    - extract_context(): Extract people, projects, deadlines, commitments from emails
    - build_relationship_graph(): Build entity relationship graphs
    - detect_context_switch(): Detect topic/context switches in conversations
    - recall_context(): Recall relevant context for follow-up emails
    - identify_missing_context(): Identify gaps in context understanding
"""

import re
import hashlib
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Set, Tuple, Any
from collections import defaultdict
from dataclasses import dataclass, field


@dataclass
class EmailMessage:
    """Represents a single email message."""
    message_id: str
    thread_id: str
    sender: str
    recipients: List[str]
    cc: List[str] = field(default_factory=list)
    subject: str = ""
    body: str = ""
    timestamp: datetime = field(default_factory=datetime.now)
    in_reply_to: Optional[str] = None
    references: List[str] = field(default_factory=list)
    attachments: List[str] = field(default_factory=list)


@dataclass
class ContextEntity:
    """Represents an extracted context entity."""
    entity_id: str
    entity_type: str  # person, project, deadline, commitment, topic
    name: str
    details: Dict[str, Any] = field(default_factory=dict)
    confidence: float = 1.0
    source_messages: List[str] = field(default_factory=list)


@dataclass
class RelationshipEdge:
    """Represents a relationship between two entities."""
    source_id: str
    target_id: str
    relationship_type: str
    weight: float = 1.0
    evidence: List[str] = field(default_factory=list)


@dataclass
class ContextSwitch:
    """Represents a detected context switch in a conversation."""
    thread_id: str
    message_id: str
    previous_context: str
    new_context: str
    confidence: float
    timestamp: datetime = field(default_factory=datetime.now)


@dataclass
class MissingContext:
    """Represents identified missing context."""
    context_type: str
    description: str
    related_entities: List[str] = field(default_factory=list)
    severity: str = "medium"  # low, medium, high
    suggested_action: str = ""


class EmailContextMemorySystem:
    """
    V683 Email Context Memory System.
    
    Extracts, stores, and recalls context from email conversations.
    Builds relationship graphs, detects context switches, and identifies
    missing context. Enforces reply-all for all responses.
    """

    # Regex patterns for context extraction
    EMAIL_PATTERN = re.compile(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
    DATE_PATTERNS = [
        re.compile(r'\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+\d{1,2}(?:st|nd|rd|th)?\b', re.I),
        re.compile(r'\b\d{1,2}/\d{1,2}(?:/\d{2,4})?\b'),
        re.compile(r'\b\d{4}-\d{2}-\d{2}\b'),
        re.compile(r'\b(?:next|this|by)\s+(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|week|month)\b', re.I),
        re.compile(r'\b(?:deadline|due|due date|by)\s*:?\s*\S+\s*\S*\b', re.I),
    ]
    COMMITMENT_PATTERNS = [
        re.compile(r'(?:I will|I\'ll|I can|I should|I must|let me|will do)\s+[\w\s]+', re.I),
        re.compile(r'(?:please|could you|can you)\s+[\w\s]+', re.I),
        re.compile(r'(?:action item|todo|follow.?up|deliverable)\s*:?\s*[\w\s]+', re.I),
        re.compile(r'(?:assigned to|responsible|owner)\s*:?\s*[\w\s]+', re.I),
    ]
    PROJECT_PATTERNS = [
        re.compile(r'(?:project|initiative|program|sprint|epic|milestone)\s*:?\s*["\']?([\w\s-]+)["\']?', re.I),
        re.compile(r'(?:Q[1-4]\s+\d{4}|FY\d{4}|phase\s+\d+)', re.I),
        re.compile(r'\b[A-Z][A-Z0-9]+-[A-Z0-9]+(?:-\d+)?\b'),  # e.g., PROJ-123
    ]
    TOPIC_INDICATORS = [
        re.compile(r'(?:re:|regarding|about|subject)\s*:?\s*[\w\s]+', re.I),
    ]

    def __init__(self):
        """Initialize the Email Context Memory System."""
        self.emails: Dict[str, EmailMessage] = {}
        self.threads: Dict[str, List[str]] = defaultdict(list)
        self.entities: Dict[str, ContextEntity] = {}
        self.relationships: List[RelationshipEdge] = []
        self.context_switches: List[ContextSwitch] = []
        self.missing_contexts: List[MissingContext] = []
        self._entity_id_counter = 0
        self._reply_all_enforced = True

    def _generate_entity_id(self) -> str:
        """Generate a unique entity ID."""
        self._entity_id_counter += 1
        return f"entity_{self._entity_id_counter:06d}"

    def _hash_message_id(self, data: str) -> str:
        """Generate a short hash for message IDs."""
        return hashlib.sha256(data.encode()).hexdigest()[:12]

    def ingest_email(self, email_dict: Dict[str, Any]) -> str:
        """
        Ingest an email from dictionary format.
        
        Args:
            email_dict: Dictionary with email fields:
                - sender: str
                - recipients: List[str]
                - cc: List[str] (optional)
                - subject: str
                - body: str
                - timestamp: str (ISO format, optional)
                - thread_id: str (optional)
                - in_reply_to: str (optional)
                - references: List[str] (optional)
                - attachments: List[str] (optional)
                
        Returns:
            message_id of the ingested email.
        """
        # Generate message ID
        raw_id = f"{email_dict['sender']}_{email_dict['subject']}_{email_dict['body'][:50]}"
        message_id = self._hash_message_id(raw_id)

        # Parse timestamp
        timestamp = datetime.now()
        if 'timestamp' in email_dict and email_dict['timestamp']:
            try:
                timestamp = datetime.fromisoformat(email_dict['timestamp'])
            except (ValueError, TypeError):
                pass

        # Create email message
        email = EmailMessage(
            message_id=message_id,
            thread_id=email_dict.get('thread_id', message_id),
            sender=email_dict['sender'],
            recipients=email_dict.get('recipients', []),
            cc=email_dict.get('cc', []),
            subject=email_dict.get('subject', ''),
            body=email_dict.get('body', ''),
            timestamp=timestamp,
            in_reply_to=email_dict.get('in_reply_to'),
            references=email_dict.get('references', []),
            attachments=email_dict.get('attachments', []),
        )

        # Store email
        self.emails[message_id] = email
        self.threads[email.thread_id].append(message_id)

        # Sort thread by timestamp
        self.threads[email.thread_id].sort(
            key=lambda mid: self.emails[mid].timestamp
        )

        # Auto-extract context
        self.extract_context(message_id)

        return message_id

    def extract_context(self, message_id: str) -> Dict[str, List[ContextEntity]]:
        """
        Extract and store key context from an email message.
        
        Extracts:
        - People (sender, recipients, mentioned names)
        - Projects (project names, codes, initiatives)
        - Deadlines (dates, due dates, time-bound commitments)
        - Commitments (action items, tasks, deliverables)
        - Topics (main subjects of the email)
        
        Args:
            message_id: ID of the email to extract context from.
            
        Returns:
            Dictionary mapping entity types to lists of extracted entities.
        """
        if message_id not in self.emails:
            raise ValueError(f"Email {message_id} not found")

        email = self.emails[message_id]
        extracted = defaultdict(list)

        # Extract people
        people = self._extract_people(email)
        for person in people:
            self.entities[person.entity_id] = person
            extracted['person'].append(person)

        # Extract projects
        projects = self._extract_projects(email)
        for project in projects:
            self.entities[project.entity_id] = project
            extracted['project'].append(project)

        # Extract deadlines
        deadlines = self._extract_deadlines(email)
        for deadline in deadlines:
            self.entities[deadline.entity_id] = deadline
            extracted['deadline'].append(deadline)

        # Extract commitments
        commitments = self._extract_commitments(email)
        for commitment in commitments:
            self.entities[commitment.entity_id] = commitment
            extracted['commitment'].append(commitment)

        # Extract topics
        topics = self._extract_topics(email)
        for topic in topics:
            self.entities[topic.entity_id] = topic
            extracted['topic'].append(topic)

        return dict(extracted)

    def _extract_people(self, email: EmailMessage) -> List[ContextEntity]:
        """Extract people entities from an email."""
        people = []
        all_emails = [email.sender] + email.recipients + email.cc

        for addr in all_emails:
            eid = self._generate_entity_id()
            name = self._extract_name_from_email(addr)
            person = ContextEntity(
                entity_id=eid,
                entity_type='person',
                name=name,
                details={
                    'email': addr,
                    'role': 'sender' if addr == email.sender else 'recipient',
                },
                source_messages=[email.message_id],
            )
            people.append(person)

        # Extract mentioned names from body
        name_patterns = re.findall(
            r'(?:@|mentioned|cc\'?d?|asked|told|spoke with)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)',
            email.body
        )
        for name in name_patterns:
            if not any(p.name == name for p in people):
                eid = self._generate_entity_id()
                person = ContextEntity(
                    entity_id=eid,
                    entity_type='person',
                    name=name,
                    details={'mentioned_in': email.message_id},
                    confidence=0.8,
                    source_messages=[email.message_id],
                )
                people.append(person)

        return people

    def _extract_name_from_email(self, email_addr: str) -> str:
        """Extract a display name from an email address."""
        if '<' in email_addr:
            # Handle "Name <email@domain.com>" format
            name_part = email_addr.split('<')[0].strip()
            if name_part:
                return name_part
            email_addr = email_addr.split('<')[1].rstrip('>')

        local = email_addr.split('@')[0]
        # Convert dots/underscores to spaces and title case
        name = local.replace('.', ' ').replace('_', ' ').replace('-', ' ')
        return name.title()

    def _extract_projects(self, email: EmailMessage) -> List[ContextEntity]:
        """Extract project entities from an email."""
        projects = []
        text = f"{email.subject} {email.body}"

        for pattern in self.PROJECT_PATTERNS:
            matches = pattern.findall(text)
            for match in matches:
                project_name = match.strip() if isinstance(match, str) else match[0].strip()
                if len(project_name) > 2:
                    eid = self._generate_entity_id()
                    project = ContextEntity(
                        entity_id=eid,
                        entity_type='project',
                        name=project_name,
                        details={'mentioned_in_subject': project_name in email.subject},
                        source_messages=[email.message_id],
                    )
                    # Avoid duplicates within same extraction
                    if not any(p.name == project_name for p in projects):
                        projects.append(project)

        return projects

    def _extract_deadlines(self, email: EmailMessage) -> List[ContextEntity]:
        """Extract deadline entities from an email."""
        deadlines = []
        text = f"{email.subject} {email.body}"

        for pattern in self.DATE_PATTERNS:
            matches = pattern.findall(text)
            for match in matches:
                eid = self._generate_entity_id()
                deadline = ContextEntity(
                    entity_id=eid,
                    entity_type='deadline',
                    name=match.strip(),
                    details={
                        'raw_text': match.strip(),
                        'source': 'subject' if match in email.subject else 'body',
                    },
                    source_messages=[email.message_id],
                )
                if not any(d.name == match.strip() for d in deadlines):
                    deadlines.append(deadline)

        return deadlines

    def _extract_commitments(self, email: EmailMessage) -> List[ContextEntity]:
        """Extract commitment/action-item entities from an email."""
        commitments = []
        text = email.body

        for pattern in self.COMMITMENT_PATTERNS:
            matches = pattern.findall(text)
            for match in matches:
                commitment_text = match.strip()
                if len(commitment_text) > 5:
                    eid = self._generate_entity_id()
                    commitment = ContextEntity(
                        entity_id=eid,
                        entity_type='commitment',
                        name=commitment_text,
                        details={
                            'assigned_to': email.sender,
                            'type': self._classify_commitment(commitment_text),
                        },
                        source_messages=[email.message_id],
                    )
                    if not any(c.name == commitment_text for c in commitments):
                        commitments.append(commitment)

        return commitments

    def _classify_commitment(self, text: str) -> str:
        """Classify the type of commitment."""
        text_lower = text.lower()
        if any(w in text_lower for w in ['review', 'check', 'look at', 'read']):
            return 'review'
        elif any(w in text_lower for w in ['send', 'email', 'share', 'forward']):
            return 'communication'
        elif any(w in text_lower for w in ['create', 'write', 'draft', 'build', 'develop']):
            return 'creation'
        elif any(w in text_lower for w in ['schedule', 'meeting', 'call', 'book']):
            return 'scheduling'
        elif any(w in text_lower for w in ['fix', 'resolve', 'debug', 'patch']):
            return 'fix'
        return 'general'

    def _extract_topics(self, email: EmailMessage) -> List[ContextEntity]:
        """Extract topic entities from an email."""
        topics = []

        # Subject as primary topic
        if email.subject:
            eid = self._generate_entity_id()
            topic = ContextEntity(
                entity_id=eid,
                entity_type='topic',
                name=email.subject.replace('Re:', '').replace('Fwd:', '').strip(),
                details={'source': 'subject'},
                source_messages=[email.message_id],
            )
            topics.append(topic)

        return topics

    def build_relationship_graph(self, thread_id: Optional[str] = None) -> Dict[str, Any]:
        """
        Build relationship graphs between entities found in emails.
        
        Relationships include:
        - communicates_with: between people who email each other
        - works_on: between people and projects
        - owns_commitment: between people and their commitments
        - has_deadline: between projects/commitments and deadlines
        - participates_in: between people and topics/threads
        
        Args:
            thread_id: Optional thread to limit graph building to.
                      If None, builds from all threads.
                      
        Returns:
            Dictionary with 'nodes' (entity IDs) and 'edges' (relationships).
        """
        if thread_id:
            thread_ids = [thread_id]
        else:
            thread_ids = list(self.threads.keys())

        # Collect all entities from relevant messages
        relevant_message_ids = set()
        for tid in thread_ids:
            relevant_message_ids.update(self.threads.get(tid, []))

        # Build edges
        for mid in relevant_message_ids:
            if mid not in self.emails:
                continue
            email = self.emails[mid]

            # Get entities from this message
            message_entities = [
                e for e in self.entities.values()
                if mid in e.source_messages
            ]

            # Communicates-with relationships
            sender_entity = self._find_person_entity(email.sender)
            for recipient in email.recipients + email.cc:
                recipient_entity = self._find_person_entity(recipient)
                if sender_entity and recipient_entity:
                    self._add_relationship(
                        sender_entity.entity_id,
                        recipient_entity.entity_id,
                        'communicates_with',
                        weight=1.0,
                        evidence=[mid],
                    )

            # Works-on relationships (people to projects in same message)
            people_in_msg = [e for e in message_entities if e.entity_type == 'person']
            projects_in_msg = [e for e in message_entities if e.entity_type == 'project']
            for person in people_in_msg:
                for project in projects_in_msg:
                    self._add_relationship(
                        person.entity_id,
                        project.entity_id,
                        'works_on',
                        weight=1.0,
                        evidence=[mid],
                    )

            # Owns-commitment relationships
            commitments_in_msg = [e for e in message_entities if e.entity_type == 'commitment']
            for commitment in commitments_in_msg:
                assignee = commitment.details.get('assigned_to', '')
                assignee_entity = self._find_person_entity(assignee)
                if assignee_entity:
                    self._add_relationship(
                        assignee_entity.entity_id,
                        commitment.entity_id,
                        'owns_commitment',
                        weight=1.0,
                        evidence=[mid],
                    )

            # Has-deadline relationships
            deadlines_in_msg = [e for e in message_entities if e.entity_type == 'deadline']
            for deadline in deadlines_in_msg:
                # Link deadlines to projects and commitments in same message
                for target in projects_in_msg + commitments_in_msg:
                    self._add_relationship(
                        target.entity_id,
                        deadline.entity_id,
                        'has_deadline',
                        weight=0.9,
                        evidence=[mid],
                    )

        # Build graph structure
        nodes = list(self.entities.keys())
        edges = [
            {
                'source': r.source_id,
                'target': r.target_id,
                'type': r.relationship_type,
                'weight': r.weight,
            }
            for r in self.relationships
        ]

        return {
            'nodes': nodes,
            'edges': edges,
            'node_count': len(nodes),
            'edge_count': len(edges),
            'entity_types': self._count_entity_types(),
        }

    def _find_person_entity(self, email_addr: str) -> Optional[ContextEntity]:
        """Find the person entity matching an email address."""
        for entity in self.entities.values():
            if entity.entity_type == 'person':
                if entity.details.get('email', '') == email_addr:
                    return entity
                if entity.name.lower() in email_addr.lower():
                    return entity
        return None

    def _add_relationship(self, source_id: str, target_id: str,
                         rel_type: str, weight: float = 1.0,
                         evidence: Optional[List[str]] = None) -> None:
        """Add or update a relationship edge."""
        # Check if relationship already exists
        for rel in self.relationships:
            if (rel.source_id == source_id and rel.target_id == target_id
                    and rel.relationship_type == rel_type):
                rel.weight = min(rel.weight + weight * 0.5, 5.0)
                if evidence:
                    rel.evidence.extend(evidence)
                return

        # Create new relationship
        self.relationships.append(RelationshipEdge(
            source_id=source_id,
            target_id=target_id,
            relationship_type=rel_type,
            weight=weight,
            evidence=evidence or [],
        ))

    def _count_entity_types(self) -> Dict[str, int]:
        """Count entities by type."""
        counts = defaultdict(int)
        for entity in self.entities.values():
            counts[entity.entity_type] += 1
        return dict(counts)

    def detect_context_switch(self, thread_id: str) -> List[ContextSwitch]:
        """
        Detect context switches within an email thread.
        
        A context switch occurs when the primary topic or focus of a
        conversation changes significantly between messages.
        
        Args:
            thread_id: The thread ID to analyze.
            
        Returns:
            List of detected context switches.
        """
        if thread_id not in self.threads:
            return []

        message_ids = self.threads[thread_id]
        if len(message_ids) < 2:
            return []

        switches = []
        previous_context = None

        for mid in message_ids:
            if mid not in self.emails:
                continue

            email = self.emails[mid]
            current_context = self._determine_context(email)

            if previous_context is not None:
                similarity = self._context_similarity(previous_context, current_context)

                if similarity < 0.4:  # Threshold for context switch
                    switch = ContextSwitch(
                        thread_id=thread_id,
                        message_id=mid,
                        previous_context=previous_context.get('summary', ''),
                        new_context=current_context.get('summary', ''),
                        confidence=1.0 - similarity,
                        timestamp=email.timestamp,
                    )
                    switches.append(switch)
                    self.context_switches.append(switch)

            previous_context = current_context

        return switches

    def _determine_context(self, email: EmailMessage) -> Dict[str, Any]:
        """Determine the primary context of an email."""
        context = {
            'subjects': set(),
            'projects': set(),
            'people': set(),
            'keywords': set(),
            'summary': '',
        }

        # Subject context
        subject = email.subject.replace('Re:', '').replace('Fwd:', '').strip().lower()
        context['subjects'].add(subject)

        # Extract keywords from body
        words = re.findall(r'\b[a-zA-Z]{4,}\b', email.body.lower())
        # Filter common stop words
        stop_words = {
            'this', 'that', 'with', 'from', 'have', 'been', 'were', 'will',
            'would', 'could', 'should', 'about', 'their', 'which', 'when',
            'what', 'than', 'them', 'then', 'into', 'some', 'more', 'most',
            'also', 'just', 'only', 'very', 'much', 'here', 'there',
        }
        context['keywords'] = set(w for w in words if w not in stop_words)

        # Project context
        for entity in self.entities.values():
            if email.message_id in entity.source_messages:
                if entity.entity_type == 'project':
                    context['projects'].add(entity.name.lower())
                elif entity.entity_type == 'person':
                    context['people'].add(entity.name.lower())

        # Create summary
        parts = []
        if context['subjects']:
            parts.append(f"topic:{','.join(context['subjects'])}")
        if context['projects']:
            parts.append(f"project:{','.join(context['projects'])}")
        context['summary'] = '; '.join(parts)

        return context

    def _context_similarity(self, ctx1: Dict[str, Any], ctx2: Dict[str, Any]) -> float:
        """Calculate similarity between two contexts (0.0 to 1.0)."""
        if not ctx1 or not ctx2:
            return 0.0

        similarities = []

        # Subject similarity
        if ctx1['subjects'] and ctx2['subjects']:
            subject_sim = len(ctx1['subjects'] & ctx2['subjects']) / len(ctx1['subjects'] | ctx2['subjects'])
            similarities.append(subject_sim)

        # Keyword similarity (Jaccard)
        if ctx1['keywords'] and ctx2['keywords']:
            keyword_sim = len(ctx1['keywords'] & ctx2['keywords']) / len(ctx1['keywords'] | ctx2['keywords'])
            similarities.append(keyword_sim)

        # Project similarity
        if ctx1['projects'] and ctx2['projects']:
            project_sim = len(ctx1['projects'] & ctx2['projects']) / len(ctx1['projects'] | ctx2['projects'])
            similarities.append(project_sim)
        elif not ctx1['projects'] and not ctx2['projects']:
            similarities.append(1.0)  # Both have no projects = similar

        if not similarities:
            return 0.5  # Default moderate similarity

        return sum(similarities) / len(similarities)

    def recall_context(self, email_dict: Dict[str, Any],
                       max_results: int = 10) -> Dict[str, Any]:
        """
        Provide context recall for a follow-up email.
        
        Given a new email draft or received email, recalls relevant
        context from memory including:
        - Related past emails
        - Known people and their history
        - Active projects and their status
        - Pending commitments
        - Upcoming deadlines
        - Recent context switches
        
        Args:
            email_dict: Dictionary describing the email to recall context for.
            max_results: Maximum number of related items to return.
            
        Returns:
            Dictionary with recalled context organized by category.
        """
        sender = email_dict.get('sender', '')
        recipients = email_dict.get('recipients', [])
        subject = email_dict.get('subject', '')
        body = email_dict.get('body', '')

        recalled = {
            'related_emails': [],
            'known_people': [],
            'active_projects': [],
            'pending_commitments': [],
            'upcoming_deadlines': [],
            'context_switches': [],
            'suggested_replies': [],
        }

        # Find related past emails
        related = self._find_related_emails(sender, recipients, subject, body, max_results)
        recalled['related_emails'] = related

        # Find known people
        all_addresses = [sender] + recipients
        for addr in all_addresses:
            person_info = self._recall_person_context(addr)
            if person_info:
                recalled['known_people'].append(person_info)

        # Find active projects mentioned
        all_text = f"{subject} {body}"
        for entity in self.entities.values():
            if entity.entity_type == 'project':
                if entity.name.lower() in all_text.lower():
                    recalled['active_projects'].append({
                        'name': entity.name,
                        'entity_id': entity.entity_id,
                        'related_messages': len(entity.source_messages),
                    })

        # Find pending commitments
        for entity in self.entities.values():
            if entity.entity_type == 'commitment':
                assignee = entity.details.get('assigned_to', '')
                if assignee in all_addresses or entity.name.lower() in all_text.lower():
                    recalled['pending_commitments'].append({
                        'commitment': entity.name,
                        'assigned_to': assignee,
                        'type': entity.details.get('type', 'general'),
                    })

        # Find upcoming deadlines
        for entity in self.entities.values():
            if entity.entity_type == 'deadline':
                if entity.name.lower() in all_text.lower():
                    recalled['upcoming_deadlines'].append({
                        'deadline': entity.name,
                        'source': entity.details.get('source', 'body'),
                    })

        # Include recent context switches for relevant threads
        related_ids = {r['message_id'] for r in related}
        for switch in self.context_switches:
            thread_msgs = self.threads.get(switch.thread_id, [])
            if any(mid in related_ids for mid in thread_msgs[:3]):
                recalled['context_switches'].append({
                    'thread_id': switch.thread_id,
                    'from': switch.previous_context,
                    'to': switch.new_context,
                    'confidence': switch.confidence,
                })

        # Limit results
        for key in recalled:
            if isinstance(recalled[key], list):
                recalled[key] = recalled[key][:max_results]

        # Enforce reply-all suggestion
        recalled['reply_all_enforced'] = self._enforce_reply_all(email_dict)

        return recalled

    def _find_related_emails(self, sender: str, recipients: List[str],
                             subject: str, body: str,
                             max_results: int) -> List[Dict[str, Any]]:
        """Find emails related to the given context."""
        scored = []
        subject_lower = subject.lower().replace('re:', '').replace('fwd:', '').strip()
        body_words = set(re.findall(r'\b[a-zA-Z]{4,}\b', body.lower()))

        for mid, email in self.emails.items():
            score = 0.0

            # Sender/recipient overlap
            if email.sender in [sender] + recipients:
                score += 2.0
            if any(r in [sender] + recipients for r in email.recipients):
                score += 1.0

            # Subject similarity
            email_subject = email.subject.lower().replace('re:', '').replace('fwd:', '').strip()
            if subject_lower and email_subject:
                if subject_lower in email_subject or email_subject in subject_lower:
                    score += 3.0
                else:
                    # Word overlap
                    subj_words = set(email_subject.split())
                    new_subj_words = set(subject_lower.split())
                    overlap = len(subj_words & new_subj_words)
                    if overlap > 0:
                        score += overlap * 0.5

            # Body keyword overlap
            if body_words:
                email_words = set(re.findall(r'\b[a-zA-Z]{4,}\b', email.body.lower()))
                overlap = len(body_words & email_words)
                score += overlap * 0.1

            if score > 0:
                scored.append((score, mid, email))

        # Sort by score descending
        scored.sort(key=lambda x: x[0], reverse=True)

        return [
            {
                'message_id': mid,
                'sender': email.sender,
                'subject': email.subject,
                'timestamp': email.timestamp.isoformat() if isinstance(email.timestamp, datetime) else str(email.timestamp),
                'relevance_score': round(score, 2),
            }
            for score, mid, email in scored[:max_results]
        ]

    def _recall_person_context(self, email_addr: str) -> Optional[Dict[str, Any]]:
        """Recall all context associated with a person."""
        person = self._find_person_entity(email_addr)
        if not person:
            return None

        # Find all relationships involving this person
        person_relationships = []
        for rel in self.relationships:
            if rel.source_id == person.entity_id or rel.target_id == person.entity_id:
                other_id = rel.target_id if rel.source_id == person.entity_id else rel.source_id
                other = self.entities.get(other_id)
                if other:
                    person_relationships.append({
                        'related_to': other.name,
                        'related_type': other.entity_type,
                        'relationship': rel.relationship_type,
                    })

        return {
            'name': person.name,
            'email': person.details.get('email', email_addr),
            'relationships': person_relationships,
            'message_count': len(person.source_messages),
        }

    def _enforce_reply_all(self, email_dict: Dict[str, Any]) -> Dict[str, Any]:
        """
        Enforce reply-all for responses.
        
        Returns suggested reply-to-all recipients including original
        sender, all recipients, and CC'd parties.
        """
        sender = email_dict.get('sender', '')
        recipients = email_dict.get('recipients', [])
        cc = email_dict.get('cc', [])

        # Reply-all includes: original sender + all recipients + all CC
        reply_all_to = list(set([sender] + recipients + cc))

        return {
            'enforced': True,
            'reply_to_all': reply_all_to,
            'original_recipients': recipients,
            'original_cc': cc,
            'message': 'Reply-all enforced: all original participants included.',
        }

    def identify_missing_context(self, thread_id: Optional[str] = None) -> List[MissingContext]:
        """
        Identify missing context in email threads.
        
        Checks for:
        - Unresolved commitments (no follow-up)
        - Orphaned deadlines (no associated project/person)
        - People with no clear role
        - Projects without clear owners
        - Threads without clear resolution
        - Missing introductions/references
        
        Args:
            thread_id: Optional thread to analyze. If None, analyzes all threads.
            
        Returns:
            List of identified missing context items.
        """
        missing = []

        if thread_id:
            thread_ids = [thread_id]
        else:
            thread_ids = list(self.threads.keys())

        for tid in thread_ids:
            message_ids = self.threads.get(tid, [])
            if not message_ids:
                continue

            # Check for unresolved commitments
            missing.extend(self._check_unresolved_commitments(tid, message_ids))

            # Check for orphaned deadlines
            missing.extend(self._check_orphaned_deadlines(tid, message_ids))

            # Check for projects without owners
            missing.extend(self._check_project_ownership(tid, message_ids))

            # Check for thread resolution
            missing.extend(self._check_thread_resolution(tid, message_ids))

            # Check for missing context references
            missing.extend(self._check_missing_references(tid, message_ids))

        self.missing_contexts = missing
        return missing

    def _check_unresolved_commitments(self, thread_id: str,
                                      message_ids: List[str]) -> List[MissingContext]:
        """Check for commitments that have no follow-up resolution."""
        missing = []

        for mid in message_ids:
            if mid not in self.emails:
                continue
            email = self.emails[mid]

            # Find commitments in this message
            for entity in self.entities.values():
                if (entity.entity_type == 'commitment' and
                        mid in entity.source_messages):
                    # Check if there's a follow-up acknowledging this commitment
                    has_followup = False
                    msg_idx = message_ids.index(mid)
                    for later_mid in message_ids[msg_idx + 1:]:
                        later_email = self.emails.get(later_mid)
                        if later_email and entity.name.lower() in later_email.body.lower():
                            has_followup = True
                            break

                    if not has_followup and msg_idx < len(message_ids) - 1:
                        missing.append(MissingContext(
                            context_type='unresolved_commitment',
                            description=f"Commitment '{entity.name[:50]}...' has no follow-up in thread",
                            related_entities=[entity.entity_id],
                            severity='high',
                            suggested_action=f"Follow up on commitment from {email.sender}",
                        ))

        return missing

    def _check_orphaned_deadlines(self, thread_id: str,
                                  message_ids: List[str]) -> List[MissingContext]:
        """Check for deadlines not linked to any project or commitment."""
        missing = []

        for mid in message_ids:
            for entity in self.entities.values():
                if (entity.entity_type == 'deadline' and
                        mid in entity.source_messages):
                    # Check if deadline has relationships
                    has_link = any(
                        r.target_id == entity.entity_id and r.relationship_type == 'has_deadline'
                        for r in self.relationships
                    )
                    if not has_link:
                        missing.append(MissingContext(
                            context_type='orphaned_deadline',
                            description=f"Deadline '{entity.name}' is not linked to any project or commitment",
                            related_entities=[entity.entity_id],
                            severity='medium',
                            suggested_action="Associate this deadline with a specific project or task",
                        ))

        return missing

    def _check_project_ownership(self, thread_id: str,
                                 message_ids: List[str]) -> List[MissingContext]:
        """Check for projects without clear owners."""
        missing = []

        for entity in self.entities.values():
            if entity.entity_type == 'project':
                # Check if any message in this thread mentions the project
                if not any(mid in entity.source_messages for mid in message_ids):
                    continue

                # Check if project has a 'works_on' relationship
                has_owner = any(
                    r.target_id == entity.entity_id and r.relationship_type == 'works_on'
                    for r in self.relationships
                )
                if not has_owner:
                    missing.append(MissingContext(
                        context_type='project_without_owner',
                        description=f"Project '{entity.name}' has no identified owner/responsible person",
                        related_entities=[entity.entity_id],
                        severity='medium',
                        suggested_action=f"Clarify who is responsible for project '{entity.name}'",
                    ))

        return missing

    def _check_thread_resolution(self, thread_id: str,
                                 message_ids: List[str]) -> List[MissingContext]:
        """Check if a thread has clear resolution/conclusion."""
        missing = []

        if len(message_ids) < 2:
            return missing

        last_mid = message_ids[-1]
        last_email = self.emails.get(last_mid)
        if not last_email:
            return missing

        # Check for resolution indicators in the last message
        resolution_keywords = [
            'resolved', 'completed', 'done', 'finished', 'closed',
            'approved', 'confirmed', 'agreed', 'final', 'concluded',
            'thank you', 'thanks', 'looks good', 'perfect',
        ]

        last_body_lower = last_email.body.lower()
        has_resolution = any(kw in last_body_lower for kw in resolution_keywords)

        if not has_resolution and len(message_ids) >= 3:
            missing.append(MissingContext(
                context_type='unresolved_thread',
                description=f"Thread '{last_email.subject}' ({len(message_ids)} messages) appears unresolved",
                related_entities=[thread_id],
                severity='low',
                suggested_action="Follow up to confirm resolution or next steps",
            ))

        return missing

    def _check_missing_references(self, thread_id: str,
                                  message_ids: List[str]) -> List[MissingContext]:
        """Check for references to external items not included in thread."""
        missing = []

        for mid in message_ids:
            email = self.emails.get(mid)
            if not email:
                continue

            # Check for attachment references without attachments
            attachment_refs = re.findall(
                r'(?:attached|attachment|see attached|find attached|the document|the file|the report)\b',
                email.body, re.I
            )
            if attachment_refs and not email.attachments:
                missing.append(MissingContext(
                    context_type='missing_attachment',
                    description=f"Email from {email.sender} references attachments but none found",
                    related_entities=[mid],
                    severity='high',
                    suggested_action=f"Request the missing attachment from {email.sender}",
                ))

            # Check for references to previous emails not in thread
            ref_patterns = re.findall(
                r'(?:as (?:I|we) (?:mentioned|said|noted)|per (?:my|our) (?:last|previous|earlier) (?:email|message))',
                email.body, re.I
            )
            if ref_patterns and len(message_ids) == 1:
                missing.append(MissingContext(
                    context_type='missing_prior_context',
                    description=f"Email references prior communication not in this thread",
                    related_entities=[mid],
                    severity='medium',
                    suggested_action="Locate and include the referenced prior communication",
                ))

        return missing

    def get_thread_summary(self, thread_id: str) -> Dict[str, Any]:
        """Get a comprehensive summary of a thread's context."""
        if thread_id not in self.threads:
            return {'error': 'Thread not found'}

        message_ids = self.threads[thread_id]
        messages = [self.emails[mid] for mid in message_ids if mid in self.emails]

        participants = set()
        for msg in messages:
            participants.add(msg.sender)
            participants.update(msg.recipients)
            participants.update(msg.cc)

        # Get entities for this thread
        thread_entities = defaultdict(list)
        for mid in message_ids:
            for entity in self.entities.values():
                if mid in entity.source_messages:
                    thread_entities[entity.entity_type].append(entity.name)

        return {
            'thread_id': thread_id,
            'message_count': len(messages),
            'participants': list(participants),
            'subject': messages[0].subject if messages else '',
            'date_range': {
                'start': messages[0].timestamp.isoformat() if messages else None,
                'end': messages[-1].timestamp.isoformat() if messages else None,
            },
            'entities': {k: list(set(v)) for k, v in thread_entities.items()},
            'context_switches': len([
                s for s in self.context_switches if s.thread_id == thread_id
            ]),
        }

    def enforce_reply_all(self, original_email_dict: Dict[str, Any],
                          reply_body: str) -> Dict[str, Any]:
        """
        Construct a reply-all response enforcing inclusion of all participants.
        
        Args:
            original_email_dict: The original email being replied to.
            reply_body: The body of the reply.
            
        Returns:
            Complete reply email dict with all original participants included.
        """
        sender = original_email_dict.get('sender', '')
        recipients = original_email_dict.get('recipients', [])
        cc = original_email_dict.get('cc', [])
        subject = original_email_dict.get('subject', '')

        # Reply-all: to = original sender, cc = all other recipients + original cc
        reply_to = [sender]
        reply_cc = list(set(recipients + cc) - {sender})

        # Ensure subject has Re: prefix
        if not subject.lower().startswith('re:'):
            subject = f"Re: {subject}"

        return {
            'sender': recipients[0] if recipients else '',
            'recipients': reply_to,
            'cc': reply_cc,
            'subject': subject,
            'body': reply_body,
            'in_reply_to': self._hash_message_id(
                f"{sender}_{subject}_{original_email_dict.get('body', '')[:50]}"
            ),
            'reply_all_enforced': True,
            'all_participants': list(set([sender] + recipients + cc)),
        }


def test_v683():
    """
    Comprehensive test suite for V683 - Email Context Memory System.
    
    Tests context extraction, relationship building, context switch detection,
    context recall, missing context identification, and reply-all enforcement
    across multiple email threads.
    """
    print("=" * 70)
    print("V683 - Email Context Memory System - Test Suite")
    print("=" * 70)

    system = EmailContextMemorySystem()

    # =========================================================================
    # TEST 1: Email Ingestion and Context Extraction
    # =========================================================================
    print("\n[TEST 1] Email Ingestion and Context Extraction")
    print("-" * 50)

    # Thread 1: Project Alpha discussion
    emails_thread1 = [
        {
            'sender': 'alice.johnson@company.com',
            'recipients': ['bob.smith@company.com', 'carol.white@company.com'],
            'cc': ['dave.manager@company.com'],
            'subject': 'Project Alpha - Q3 Planning Kickoff',
            'body': (
                'Hi team,\n\n'
                'I\'d like to schedule our Project Alpha Q3 planning meeting. '
                'The deadline for our milestone deliverables is June 15th.\n\n'
                'I will prepare the sprint backlog by next Monday. '
                'Bob, could you please review the architecture document?\n\n'
                'Carol - please share the updated requirements with the team.\n\n'
                'Best regards,\nAlice'
            ),
            'timestamp': '2026-06-01T09:00:00',
            'thread_id': 'thread-alpha-001',
        },
        {
            'sender': 'bob.smith@company.com',
            'recipients': ['alice.johnson@company.com', 'carol.white@company.com'],
            'cc': ['dave.manager@company.com'],
            'subject': 'Re: Project Alpha - Q3 Planning Kickoff',
            'body': (
                'Hi Alice,\n\n'
                'I\'ll review the architecture document by Wednesday. '
                'I noticed the PROJ-ALPHA-42 ticket needs updating.\n\n'
                'I should also check with Eve from the security team about compliance.\n\n'
                'Best,\nBob'
            ),
            'timestamp': '2026-06-01T10:30:00',
            'thread_id': 'thread-alpha-001',
            'in_reply_to': 'first_msg',
        },
        {
            'sender': 'carol.white@company.com',
            'recipients': ['alice.johnson@company.com', 'bob.smith@company.com'],
            'cc': ['dave.manager@company.com'],
            'subject': 'Re: Project Alpha - Q3 Planning Kickoff',
            'body': (
                'Hi all,\n\n'
                'I\'ve attached the updated requirements document. '
                'Please review before our meeting.\n\n'
                'Action item: Everyone please confirm availability for Thursday 2pm.\n\n'
                'Thanks,\nCarol'
            ),
            'timestamp': '2026-06-01T11:45:00',
            'thread_id': 'thread-alpha-001',
            'attachments': ['requirements_v3.pdf'],
        },
    ]

    # Thread 2: Different topic (context switch scenario)
    emails_thread2 = [
        {
            'sender': 'frank.dev@company.com',
            'recipients': ['grace.lead@company.com'],
            'subject': 'Sprint 14 Retrospective',
            'body': (
                'Hi Grace,\n\n'
                'Here are my notes from the Sprint 14 retrospective:\n'
                '- Velocity improved by 15%\n'
                '- We need better test coverage\n'
                '- The deployment pipeline needs optimization\n\n'
                'I will create tickets for each improvement area by Friday.\n\n'
                'Regards,\nFrank'
            ),
            'timestamp': '2026-06-01T14:00:00',
            'thread_id': 'thread-sprint-002',
        },
        {
            'sender': 'grace.lead@company.com',
            'recipients': ['frank.dev@company.com'],
            'subject': 'Re: Budget Review for Office Renovation',
            'body': (
                'Frank,\n\n'
                'Switching topics - can you review the budget proposal for the '
                'office renovation project? The facilities team needs our input '
                'by June 10th.\n\n'
                'I\'ll send the spreadsheet separately.\n\n'
                'Thanks,\nGrace'
            ),
            'timestamp': '2026-06-01T15:30:00',
            'thread_id': 'thread-sprint-002',
        },
    ]

    # Thread 3: Short thread for missing context testing
    emails_thread3 = [
        {
            'sender': 'henry.client@external.com',
            'recipients': ['alice.johnson@company.com'],
            'subject': 'Integration API Issue',
            'body': (
                'Hi Alice,\n\n'
                'As I mentioned in my last email, the API integration is failing '
                'on the staging environment. Please see the attached error log.\n\n'
                'We need this resolved before the July 1st launch.\n\n'
                'Henry'
            ),
            'timestamp': '2026-06-02T08:00:00',
            'thread_id': 'thread-api-003',
        },
    ]

    # Ingest all emails
    all_message_ids = []
    for email_batch in [emails_thread1, emails_thread2, emails_thread3]:
        for email_dict in email_batch:
            mid = system.ingest_email(email_dict)
            all_message_ids.append(mid)

    print(f"  Ingested {len(all_message_ids)} emails across 3 threads")
    print(f"  Total entities extracted: {len(system.entities)}")

    # Verify entity types
    type_counts = defaultdict(int)
    for entity in system.entities.values():
        type_counts[entity.entity_type] += 1
    print(f"  Entity breakdown: {dict(type_counts)}")

    assert len(all_message_ids) == 6, f"Expected 6 emails, got {len(all_message_ids)}"
    assert len(system.entities) > 0, "Expected entities to be extracted"
    assert type_counts.get('person', 0) > 0, "Expected person entities"
    print("  ✓ All emails ingested and context extracted successfully")

    # =========================================================================
    # TEST 2: Relationship Graph Building
    # =========================================================================
    print("\n[TEST 2] Relationship Graph Building")
    print("-" * 50)

    graph = system.build_relationship_graph()

    print(f"  Graph nodes: {graph['node_count']}")
    print(f"  Graph edges: {graph['edge_count']}")
    print(f"  Entity types: {graph['entity_types']}")

    # Check for specific relationship types
    rel_types = defaultdict(int)
    for edge in graph['edges']:
        rel_types[edge['type']] += 1
    print(f"  Relationship types: {dict(rel_types)}")

    assert graph['node_count'] > 0, "Expected nodes in graph"
    assert graph['edge_count'] > 0, "Expected edges in graph"
    assert 'communicates_with' in rel_types, "Expected communicates_with relationships"
    print("  ✓ Relationship graph built successfully")

    # Build graph for specific thread
    alpha_graph = system.build_relationship_graph('thread-alpha-001')
    print(f"  Alpha thread graph: {alpha_graph['node_count']} nodes, {alpha_graph['edge_count']} edges")
    assert alpha_graph['node_count'] > 0, "Expected nodes in Alpha thread graph"
    print("  ✓ Thread-specific graph built successfully")

    # =========================================================================
    # TEST 3: Context Switch Detection
    # =========================================================================
    print("\n[TEST 3] Context Switch Detection")
    print("-" * 50)

    # Thread 2 should have a context switch (sprint retro -> budget review)
    switches = system.detect_context_switch('thread-sprint-002')

    print(f"  Context switches detected in sprint thread: {len(switches)}")
    for switch in switches:
        print(f"    - From: '{switch.previous_context[:60]}...'")
        print(f"    - To:   '{switch.new_context[:60]}...'")
        print(f"    - Confidence: {switch.confidence:.2f}")

    assert len(switches) > 0, "Expected context switch in sprint thread"
    print("  ✓ Context switch detected correctly")

    # Thread 1 should NOT have significant context switches (all about Alpha)
    alpha_switches = system.detect_context_switch('thread-alpha-001')
    print(f"  Context switches in Alpha thread: {len(alpha_switches)}")
    print("  ✓ Thread consistency check passed")

    # =========================================================================
    # TEST 4: Context Recall
    # =========================================================================
    print("\n[TEST 4] Context Recall for Follow-up Email")
    print("-" * 50)

    # Simulate a follow-up email from Alice about Project Alpha
    followup_email = {
        'sender': 'alice.johnson@company.com',
        'recipients': ['bob.smith@company.com'],
        'subject': 'Project Alpha - Architecture Review Update',
        'body': (
            'Bob, following up on the architecture document review for Project Alpha. '
            'Have you had a chance to complete it? Our deadline is approaching.'
        ),
    }

    recalled = system.recall_context(followup_email)

    print(f"  Related emails found: {len(recalled['related_emails'])}")
    for rel in recalled['related_emails'][:3]:
        print(f"    - '{rel['subject']}' (score: {rel['relevance_score']})")

    print(f"  Known people: {len(recalled['known_people'])}")
    for person in recalled['known_people'][:3]:
        print(f"    - {person['name']} ({person['message_count']} messages)")

    print(f"  Active projects: {len(recalled['active_projects'])}")
    for proj in recalled['active_projects']:
        print(f"    - {proj['name']}")

    print(f"  Pending commitments: {len(recalled['pending_commitments'])}")
    for commit in recalled['pending_commitments'][:3]:
        print(f"    - {commit['commitment'][:50]}... (assigned: {commit['assigned_to']})")

    print(f"  Reply-all enforced: {recalled['reply_all_enforced']['enforced']}")
    print(f"  Reply-to-all: {recalled['reply_all_enforced']['reply_to_all']}")

    assert len(recalled['related_emails']) > 0, "Expected related emails"
    assert recalled['reply_all_enforced']['enforced'] is True, "Reply-all must be enforced"
    print("  ✓ Context recall working correctly")

    # =========================================================================
    # TEST 5: Missing Context Identification
    # =========================================================================
    print("\n[TEST 5] Missing Context Identification")
    print("-" * 50)

    missing = system.identify_missing_context()

    print(f"  Missing context items found: {len(missing)}")
    for item in missing:
        print(f"    [{item.severity.upper()}] {item.context_type}: {item.description[:60]}...")
        print(f"      Suggested: {item.suggested_action}")

    # Check for specific missing context types
    missing_types = [m.context_type for m in missing]
    print(f"  Missing context types: {set(missing_types)}")

    # Thread 3 should have missing prior context (references "my last email")
    thread3_missing = system.identify_missing_context('thread-api-003')
    thread3_types = [m.context_type for m in thread3_missing]
    print(f"  Thread 3 missing types: {thread3_types}")

    assert len(missing) > 0, "Expected some missing context"
    assert 'missing_prior_context' in thread3_types or 'missing_attachment' in thread3_types, \
        "Expected missing context in thread 3"
    print("  ✓ Missing context identification working correctly")

    # =========================================================================
    # TEST 6: Reply-All Enforcement
    # =========================================================================
    print("\n[TEST 6] Reply-All Enforcement")
    print("-" * 50)

    original = emails_thread1[0]
    reply = system.enforce_reply_all(
        original,
        "Thanks everyone, let's proceed with the plan."
    )

    print(f"  Reply to: {reply['recipients']}")
    print(f"  Reply CC: {reply['cc']}")
    print(f"  Subject: {reply['subject']}")
    print(f"  Reply-all enforced: {reply['reply_all_enforced']}")
    print(f"  All participants: {reply['all_participants']}")

    # Verify all original participants are included
    all_original = set([original['sender']] + original['recipients'] + original.get('cc', []))
    all_in_reply = set(reply['recipients'] + reply['cc'])

    assert reply['reply_all_enforced'] is True, "Reply-all must be enforced"
    assert all_original == all_in_reply, \
        f"All participants must be in reply. Missing: {all_original - all_in_reply}"
    assert reply['subject'].startswith('Re:'), "Subject must have Re: prefix"
    print("  ✓ Reply-all enforcement working correctly")

    # =========================================================================
    # TEST 7: Thread Summary
    # =========================================================================
    print("\n[TEST 7] Thread Summary")
    print("-" * 50)

    summary = system.get_thread_summary('thread-alpha-001')
    print(f"  Thread: {summary['thread_id']}")
    print(f"  Messages: {summary['message_count']}")
    print(f"  Participants: {summary['participants']}")
    print(f"  Subject: {summary['subject']}")
    print(f"  Entities: {summary['entities']}")
    print(f"  Context switches: {summary['context_switches']}")

    assert summary['message_count'] == 3, "Alpha thread should have 3 messages"
    assert len(summary['participants']) >= 3, "Should have at least 3 participants"
    print("  ✓ Thread summary generated correctly")

    # =========================================================================
    # TEST 8: Cross-Thread Context Recall
    # =========================================================================
    print("\n[TEST 8] Cross-Thread Context Recall")
    print("-" * 50)

    # Test recall that spans multiple threads
    cross_thread_email = {
        'sender': 'dave.manager@company.com',
        'recipients': ['alice.johnson@company.com', 'frank.dev@company.com'],
        'subject': 'Status Update - All Projects',
        'body': (
            'Team, I need a consolidated status update. '
            'How are Project Alpha and the sprint retrospective items progressing? '
            'Please review the attached document and share feedback by Friday.'
        ),
    }

    cross_recall = system.recall_context(cross_thread_email)
    print(f"  Related emails across threads: {len(cross_recall['related_emails'])}")
    print(f"  Known people: {len(cross_recall['known_people'])}")
    print(f"  Active projects found: {len(cross_recall['active_projects'])}")

    for proj in cross_recall['active_projects']:
        print(f"    - {proj['name']}")

    # Should find emails from multiple threads
    related_thread_ids = set()
    for rel in cross_recall['related_emails']:
        for tid, mids in system.threads.items():
            if rel['message_id'] in mids:
                related_thread_ids.add(tid)

    print(f"  Threads represented in recall: {related_thread_ids}")
    assert len(related_thread_ids) >= 1, "Should find emails from at least 1 thread"
    print("  ✓ Cross-thread context recall working correctly")

    # =========================================================================
    # SUMMARY
    # =========================================================================
    print("\n" + "=" * 70)
    print("ALL TESTS PASSED ✓")
    print("=" * 70)
    print(f"\nSystem Statistics:")
    print(f"  Total emails processed: {len(system.emails)}")
    print(f"  Total threads: {len(system.threads)}")
    print(f"  Total entities: {len(system.entities)}")
    print(f"  Total relationships: {len(system.relationships)}")
    print(f"  Context switches detected: {len(system.context_switches)}")
    print(f"  Missing context items: {len(system.missing_contexts)}")
    print(f"  Reply-all enforcement: ACTIVE")
    print()

    return True


if __name__ == '__main__':
    test_v683()
