#!/usr/bin/env python3
"""
V917: Email Collaboration Coordinator
Coordinates multi-party email threads, detects collaboration patterns,
assigns action items, and enforces reply-all for team coordination.
"""
import json, re
from datetime import datetime
from typing import Dict, List, Any
from collections import Counter

class CollaborationCoordinator:
    def __init__(self):
        self.action_keywords = ['please', 'could you', 'can you', 'need', 'assign', 'responsible', 'owner']
        self.decision_keywords = ['decide', 'approve', 'confirm', 'go ahead', 'green light']
        self.collaboration_history = []

    def analyze_email(self, email_data: Dict[str, Any]) -> Dict[str, Any]:
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        recipients = email_data.get('recipients', [])
        cc_list = email_data.get('cc', [])
        thread_history = email_data.get('thread_history', [])
        all_recipients = list(set(recipients + cc_list))
        full_text = f"{subject} {body}".lower()
        collab_type = self._detect_collaboration_type(full_text, len(all_recipients))
        action_items = self._extract_action_items(body, all_recipients)
        decisions = self._detect_decisions(full_text)
        consensus_status = self._analyze_thread_consensus(thread_history)
        self.collaboration_history.append({
            'timestamp': datetime.now().isoformat(), 'type': collab_type,
            'participants': len(all_recipients), 'action_items': len(action_items),
            'decisions': len(decisions)
        })
        response = self._generate_coordination_response(collab_type, action_items, decisions, all_recipients, consensus_status)
        return {
            'collaboration_type': collab_type, 'action': 'coordinate',
            'action_items': action_items, 'decisions_needed': decisions,
            'consensus_status': consensus_status, 'response': response,
            'reply_all_required': len(all_recipients) > 1,
            'participant_count': len(all_recipients)
        }

    def _detect_collaboration_type(self, text, participant_count):
        if participant_count > 5: return 'team_coordination'
        elif 'brainstorm' in text or 'idea' in text: return 'brainstorming'
        elif 'review' in text or 'feedback' in text: return 'review_process'
        elif 'approve' in text or 'sign off' in text: return 'approval_workflow'
        elif 'project' in text or 'task' in text: return 'project_management'
        return 'general_discussion'

    def _extract_action_items(self, body, recipients):
        items = []
        for sentence in body.split('.'):
            sl = sentence.lower().strip()
            if any(kw in sl for kw in self.action_keywords):
                assignee = 'unassigned'
                for r in recipients:
                    name = r.split('@')[0].lower()
                    if name in sl:
                        assignee = r
                        break
                mention = re.search(r'@(\w+)', sentence)
                if mention: assignee = mention.group(1)
                items.append({'description': sentence.strip(), 'assignee': assignee, 'status': 'pending'})
        return items

    def _detect_decisions(self, text):
        decisions = []
        if any(kw in text for kw in self.decision_keywords):
            decisions.append({'type': 'approval_needed', 'status': 'pending'})
        return decisions

    def _analyze_thread_consensus(self, thread_history):
        if not thread_history:
            return {'status': 'new_discussion', 'agreement_level': 0}
        pos = sum(1 for m in thread_history if any(w in m.get('body','').lower() for w in ['agree','yes','sounds good','approve']))
        neg = sum(1 for m in thread_history if any(w in m.get('body','').lower() for w in ['disagree','no','concern','issue']))
        total = pos + neg
        agreement = pos / total if total > 0 else 0
        return {'status': 'consensus_reached' if agreement > 0.7 else 'discussion_ongoing', 'agreement_level': agreement, 'messages_analyzed': len(thread_history)}

    def _generate_coordination_response(self, collab_type, action_items, decisions, recipients, consensus):
        parts = []
        if action_items:
            parts.append("Action Items Identified:")
            for i, item in enumerate(action_items, 1):
                parts.append(f"  {i}. {item['description']} (Assigned: {item['assignee']})")
        if decisions:
            parts.append("\nDecisions Needed:")
            for d in decisions:
                parts.append(f"  - {d['type']}")
        if consensus['status'] == 'consensus_reached':
            parts.append("\nConsensus appears reached. Ready to proceed?")
        parts.append(f"\nPlease Reply All to keep all {len(recipients)} participants informed.")
        return {'text': '\n'.join(parts), 'reply_all': True, 'track_actions': True, 'collaboration_type': collab_type}

def main():
    coord = CollaborationCoordinator()
    test = {
        'subject': 'Project Alpha - Action Items',
        'body': 'Hi team, following up. @alice please prepare budget by Friday. Bob could you review specs? Carol need your sign-off on timeline.',
        'recipients': ['alice@ex.com', 'bob@ex.com', 'carol@ex.com', 'dave@ex.com'],
        'cc': ['mgr@ex.com'],
        'thread_history': [{'body': 'I agree with the approach'}, {'body': 'Sounds good'}, {'body': 'Some concerns about timeline'}]
    }
    result = coord.analyze_email(test)
    print("=" * 60)
    print("V917 Email Collaboration Coordinator")
    print("=" * 60)
    print(f"Type: {result['collaboration_type']}")
    print(f"Action Items: {len(result['action_items'])}")
    print(f"Decisions: {len(result['decisions_needed'])}")
    print(f"Consensus: {result['consensus_status']['status']} ({result['consensus_status']['agreement_level']:.0%})")
    print(f"Reply All: {result['reply_all_required']}")
    print(f"Participants: {result['participant_count']}")
    print("\nV917 Collaboration Coordinator: OPERATIONAL")

if __name__ == '__main__':
    main()
