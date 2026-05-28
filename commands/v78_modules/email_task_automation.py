#!/usr/bin/env python3
"""
V78 – Email-to-Task Automation

Parses action items from email bodies and auto-creates structured
Asana/Jira/Trello task objects with: title, description, due date,
priority, assignee, tags, and cross-reference URL. Tracks completion
via reply confirmation. Zero-manual-step email handling.
"""
import re, json
from datetime import datetime, timedelta

class EmailTaskParser:
    def __init__(self):
        self.now = datetime.now()
        
        # Priority detection patterns
        self.urgency_signals = [
            (r'\bASAP\b|\burgently\b|\bcritical\b|\bemergency\b|\bimmediately\b', 'high'),
            (r'\bby (?:end of )?(?:today|week|monday|tuesday|wednesday|thursday|friday)\b', 'high'),
            (r'\bthis week\b|\bby friday\b|\bdeadline\b|\bdue\b', 'medium'),
            (r'\bwhen you get a chance\b|\bwhen possible\b|\bno rush\b|\blow priority\b', 'low'),
        ]
        
        # Action verb patterns
        self.action_verbs = [
            'review', 'update', 'send', 'call', 'schedule', 'fix', 'complete',
            'prepare', 'send', 'create', 'generate', 'respond', 'confirm',
            'check', 'approve', 'submit', 'finish', 'deliver', 'schedule',
            'reconcile', 'investigate', 'resolve', 'implement', 'deploy',
        ]
        
        # Assignee patterns
        self.assignee_patterns = [
            r'(?:please\s+)?(?:could\s+you|would\s+you|can\s+you|should\s+you)\s+(\w+)',
            r'(?:ask|tell|have)\s+(\w+)\s+(?:to|please)',
            r'assign(?:ed)?\s+to\s+(\w+)',
            r'owner[:\s]+(\w+)',
            r'@(\w+)',
        ]
        
        # Date patterns
        self.date_patterns = [
            (r'\b(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})\b', 'mdy'),
            (r'\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+(\d{1,2})(?:,?\s+(\d{4}))?\b', 'month_day'),
            (r'\b(\d{1,2})\s+(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a]*\b', 'day_month'),
            (r'\b(?:by|due|deadline|before)\s+(\w+)\b', 'relative'),
        ]
        
        # Task type tag keywords
        self.tag_keywords = {
            'meeting': ['meeting', 'call', 'zoom', 'teams', 'conference', 'sync', 'review call'],
            'document': ['document', 'report', 'proposal', 'contract', 'agreement', 'invoice', 'quote'],
            'technical': ['code', 'deploy', 'build', 'fix', 'bug', 'test', 'review', 'PR', 'merge'],
            'financial': ['invoice', 'payment', 'billing', 'budget', 'expense', 'reconcile', 'pay'],
            'approval': ['approve', 'sign', 'authorize', 'confirm', 'validate', 'endorsed'],
            'research': ['research', 'investigate', 'analyze', 'evaluate', 'explore', 'compare'],
        }
    
    def parse(self, email_body: str) -> dict:
        """Main entry point — returns task dict from email body"""
        body = email_body.strip()
        lines = body.split('\n')
        
        # Detect multiple tasks
        tasks = self._split_into_tasks(body)
        
        results = []
        for task_body in tasks:
            t = self._parse_single_task(task_body)
            results.append(t)
        
        return {
            'parsed_at': self.now.isoformat(),
            'task_count': len(results),
            'tasks': results,
            'has_attachments_check': bool(re.search(r'\battach(?:ed|ment)?\b', body, re.I)),
            'reply_confirm_needed': any(t.get('due_date') for t in results),
        }
    
    def _split_into_tasks(self, body: str) -> list:
        """Split email into individual task sections"""
        lines = body.split('\n')
        tasks = []
        current = []
        
        # Multi-item patterns: numbered lists, bullet points, or explicit separators
        numbered = re.compile(r'^\s*\d+[.)]\s*')
        bullet = re.compile(r'^[\-\*•]\s+')
        
        for line in lines:
            if numbered.match(line) or bullet.match(line):
                if current:
                    tasks.append('\n'.join(current))
                    current = []
            current.append(line)
        
        if current:
            tasks.append('\n'.join(current))
        
        # If only one task region, split by double newline
        if len(tasks) == 1:
            sections = re.split(r'\n\s*\n', body)
            tasks = [s.strip() for s in sections if s.strip()]
        
        return tasks or [body]
    
    def _parse_single_task(self, task_body: str) -> dict:
        first_line = task_body.split('\n')[0]
        
        return {
            'title': self._extract_title(first_line, task_body),
            'description': self._clean_description(task_body),
            'priority': self._detect_priority(task_body),
            'due_date': self._extract_date(task_body),
            'assignee': self._extract_assignee(task_body),
            'tags': self._extract_tags(task_body),
            'references': self._extract_refs(task_body),
            'sub_tasks': self._extract_subtasks(task_body),
            'estimated_hours': self._estimate_hours(task_body),
            'complexity': self._assess_complexity(task_body),
        }
    
    def _extract_title(self, first_line: str, body: str) -> str:
        # Clean up common email prefixes
        title = re.sub(r'^(?:re:|fw:|fwd:)\s*', '', first_line.strip(), flags=re.I)
        
        # If title is a full sentence, extract verb phrase
        verb_match = re.search(r'\b(' + '|'.join(self.action_verbs) + r')\b', title, re.I)
        if verb_match and len(title) > 80:
            # Extract phrase starting from verb
            pos = verb_match.start()
            title = title[pos:pos+80].strip(' .,;')
        
        return title[:120].strip() or first_line[:80].strip()
    
    def _clean_description(self, body: str) -> str:
        """Remove email quoted sections, signatures, headers"""
        lines = body.split('\n')
        cleaned = []
        
        skip_patterns = [
            r'^>.*',           # quoted
            r'^from:',         # email header
            r'^sent:',
            r'^subject:',
            r'^--\s*$',        # signature dash
            r'^_\w+',
            r'^www\.',
            r'^http',
        ]
        
        for line in lines:
            skip = any(re.match(p, line.strip(), re.I) for p in skip_patterns)
            if skip:
                continue
            # Stop at "On Mon, ..." forwarded timestamps
            if re.match(r'^on\s+\w+,?\s+\d+\s+\w+', line, re.I):
                break
            cleaned.append(line)
        
        return '\n'.join(cleaned).strip()[:2000]
    
    def _detect_priority(self, task_body: str) -> str:
        for pattern, level in self.urgency_signals:
            if re.search(pattern, task_body, re.I):
                return level
        return 'medium'
    
    def _extract_date(self, task_body: str) -> str | None:
        for pattern, fmt in self.date_patterns:
            m = re.search(pattern, task_body, re.I)
            if not m:
                continue
            
            try:
                if fmt == 'mdy':
                    month, day, year = m.groups()
                    year = int(year) if len(year) == 4 else 2000 + int(year)
                    month = int(month)
                    day = int(day)
                    date = datetime(year, month, day)
                    
                elif fmt == 'month_day':
                    month_str, day_str, year_str = m.groups()
                    month_map = {n: i for i, n in enumerate('jan feb mar apr may jun jul aug sep oct nov dec'.split())}
                    month = month_map.get(month_str.lower()[:3], 1)
                    day = int(day_str)
                    year = int(year_str) if year_str else self.now.year
                    date = datetime(year, month, day)
                    
                elif fmt == 'day_month':
                    day_str, month_str = m.groups()
                    month_map = {n: i for i, n in enumerate('jan feb mar apr may jun jul aug sep oct nov dec'.split())}
                    month = month_map.get(month_str.lower()[:3], 1)
                    day = int(day_str)
                    date = datetime(self.now.year, month, day)
                    
                elif fmt == 'relative':
                    keyword = m.group(1).lower()
                    date = self._relative_date(keyword)
                
                return date.strftime('%Y-%m-%d')
            except:
                continue
        return None
    
    def _relative_date(self, keyword: str) -> datetime:
        if keyword in ['today']:
            return self.now
        elif keyword in ['tomorrow']:
            return self.now + timedelta(days=1)
        elif keyword in ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']:
            days_ahead = (list('monday tuesday wednesday thursday friday'.split()).index(keyword) - self.now.weekday()) % 7
            days_ahead = days_ahead if days_ahead > 0 else 7
            return self.now + timedelta(days=days_ahead)
        elif keyword in ['next week']:
            return self.now + timedelta(weeks=1)
        else:
            return self.now + timedelta(days=7)
    
    def _extract_assignee(self, task_body: str) -> str | None:
        for pattern in self.assignee_patterns:
            m = re.search(pattern, task_body, re.I)
            if m:
                name = m.group(1).strip().title()
                if len(name) > 2 and name not in ['You', 'Your', 'The', 'All']:
                    return name
        return None
    
    def _extract_tags(self, task_body: str) -> list:
        tags = []
        task_lower = task_body.lower()
        for tag, keywords in self.tag_keywords.items():
            if any(kw in task_lower for kw in keywords):
                tags.append(tag)
        
        # Technical priority signals
        if any(w in task_lower for w in ['urgent', 'asap', 'critical']):
            tags.append('time-sensitive')
        if re.search(r'\b(?:high priority|priority: high|urgent)\b', task_body):
            tags.append('flagged')
        
        return list(set(tags))[:6]
    
    def _extract_refs(self, task_body: str) -> list:
        refs = []
        
        # URLs
        urls = re.findall(r'https?://[^\s<>"\')]+', task_body)
        refs.extend([{'type': 'url', 'value': u} for u in urls[:5]])
        
        # Ticket IDs
        ticket_patterns = [
            r'(?:ticket|job|job|order|invoice|contract)[:\s#]*([A-Z0-9]+-\d+)',
            r'\b([A-Z]{2,}-\d{4,})\b',
            r'(?:ref|ref|reference)[:\s#]*([A-Z0-9\-]+)',
        ]
        for pattern in ticket_patterns:
            for m in re.finditer(pattern, task_body, re.I):
                val = m.group(1) if m.lastindex else m.group(0)
                if len(val) > 4:
                    refs.append({'type': 'ticket', 'value': val})
        
        # Email threads
        if re.search(r'(?:thread|email|inbox|msg)[:\s#]*(\d+)', task_body, re.I):
            m = re.search(r'(?:thread|email|inbox|msg)[:\s#]*(\d+)', task_body, re.I)
            refs.append({'type': 'thread', 'value': m.group(1)})
        
        return refs[:8]
    
    def _extract_subtasks(self, task_body: str) -> list:
        lines = task_body.split('\n')
        subs = []
        for line in lines:
            # Checkbox style: [ ], - [ ], * [ ]
            m = re.match(r'^\s*[\[\-\*]+(?:\s*\[.\])?(.*)', line)
            if m and m.group(1).strip():
                subs.append({'title': m.group(1).strip(), 'done': bool(re.search(r'\[x\]', line, re.I))})
            # Numbered sub-task
            m2 = re.match(r'^\s*\d+[.)]\s*(.*)', line)
            if m2 and m2.group(1).strip():
                subs.append({'title': m2.group(1).strip(), 'done': False})
        return subs[:20]
    
    def _estimate_hours(self, task_body: str) -> float | None:
        hour_match = re.search(r'(\d+(?:\.\d+)?)\s*(?:hours?|hrs?|h)\b', task_body, re.I)
        if hour_match:
            return float(hour_match.group(1))
        
        quick_match = re.search(r'\b(quick|fast|5 min|10 min|15 min|30 min)\b', task_body, re.I)
        if quick_match:
            return 0.5
        
        complex_match = re.search(r'\b(complex|detailed|extensive|thorough|in-depth)\b', task_body, re.I)
        if complex_match:
            return 8.0
        
        return None
    
    def _assess_complexity(self, task_body: str) -> str:
        word_count = len(task_body.split())
        sub_count = len(self._extract_subtasks(task_body))
        has_refs = len(self._extract_refs(task_body))
        
        score = word_count / 50 + sub_count * 0.5 + has_refs * 0.3
        
        if score > 8:
            return 'high'
        elif score > 3:
            return 'medium'
        else:
            return 'low'


# ─── Output adapters for task platforms ──────────────────────────────────────

class AsanaAdapter:
    def export(self, task: dict) -> dict:
        return {
            'name': task['title'],
            'notes': task['description'],
            'assignee': task.get('assignee'),
            'due_date': task.get('due_date'),
            'tags': task.get('tags', []),
            'custom_fields': {
                'priority': task.get('priority', 'medium'),
                'complexity': task.get('complexity', 'medium'),
            }
        }


class JiraAdapter:
    def export(self, task: dict) -> dict:
        priority_map = {'high': 'High', 'medium': 'Medium', 'low': 'Low'}
        return {
            'fields': {
                'summary': task['title'],
                'description': {
                    'type': 'doc',
                    'version': 1,
                    'content': [{'type': 'paragraph', 'content': [{'type': 'text', 'text': task['description'][:2000]}]}]
                },
                'priority': {'name': priority_map.get(task.get('priority', 'medium'), 'Medium')},
                'duedate': task.get('due_date'),
                'labels': task.get('tags', []),
            }
        }


class TrelloAdapter:
    def export(self, task: dict) -> dict:
        return {
            'name': task['title'],
            'desc': task['description'],
            'idList': '{{TRELLO_LIST_ID}}',
            'due': task.get('due_date'),
            'idLabels': [self._tag_to_label(t) for t in task.get('tags', [])],
        }
    
    @staticmethod
    def _tag_to_label(tag: str) -> str:
        return tag


# ─── Reply confirmation tracker ─────────────────────────────────────────────

class ReplyConfirmTracker:
    def __init__(self):
        self.confirmed = set()
        self.pending = {}
    
    def create_confirmation(self, task: dict, thread_ref: str) -> str:
        """Generate a confirmation request message for a parsed task"""
        task_id = f"TASK-{hash(task['title']) % 99999:05d}"
        self.pending[task_id] = {
            'task': task,
            'thread': thread_ref,
            'created_at': datetime.now().isoformat(),
        }
        
        lines = [
            f"✅ Action item detected: *{task['title']}*",
            f"📋 Task ID: {task_id}",
            f"📅 Due: {task.get('due_date') or 'Not specified'}",
            f"🏷️ Priority: {task.get('priority', 'medium').upper()}",
        ]
        if task.get('assignee'):
            lines.append(f"👤 Assignee: {task['assignee']}")
        if task.get('tags'):
            lines.append(f"🏷️ Tags: {', '.join(task['tags'])}")
        
        lines.extend([
            "",
            "Reply `confirm {task_id}` to log completion, or `edit {task_id}` to modify.".format(task_id=task_id),
        ])
        
        return '\n'.join(lines)
    
    def confirm(self, task_id: str) -> dict | None:
        if task_id in self.pending:
            self.confirmed.add(task_id)
            return self.pending.pop(task_id)
        return None


# ─── CLI / pipeline integration ───────────────────────────────────────────────

if __name__ == '__main__':
    import sys
    
    test_emails = [
        """
        Hi team,

        Can someone please review the Q3 budget report by Friday?
        John should handle the final approval and send to finance@company.com
        Reference: INVOICE-2024-3847

        Also need:
        1. Update the pipeline dashboard with new metrics
        2. Call the client to confirm meeting time
        3. Fix the authentication bug in production

        Let me know ASAP if there are issues.
        
        --
        Sarah Chen
        Finance Manager
        """,
        """
        We need to schedule a technical review for the new deployment.
        - [ ] Check staging environment
        - [ ] Run integration tests  
        - [ ] Update documentation at https://docs.internal.com/deployment
        Please have this done by Monday.
        
        Thanks,
        Mike
        """,
        """
        Urgent: Production database performance degraded.
        Ticket: DB-49281
        Root cause needs investigation ASAP.
        Assign to senior DBA team.
        Contact: dba-team@company.com
        """,
    ]
    
    parser = EmailTaskParser()
    
    for i, email in enumerate(test_emails):
        print(f"\n{'='*60}")
        print(f"EMAIL {i+1}")
        print('='*60)
        result = parser.parse(email)
        
        print(f"Tasks found: {result['task_count']}")
        print(f"Attachments check needed: {result['has_attachments_check']}")
        
        for j, task in enumerate(result['tasks']):
            print(f"\n  Task {j+1}: {task['title']}")
            print(f"  Priority: {task['priority']} | Complexity: {task['complexity']}")
            if task['due_date']:
                print(f"  Due: {task['due_date']}")
            if task['assignee']:
                print(f"  Assignee: {task['assignee']}")
            if task['tags']:
                print(f"  Tags: {task['tags']}")
            if task['references']:
                for r in task['references'][:3]:
                    print(f"  Ref: {r}")
            if task['sub_tasks']:
                print(f"  Sub-tasks: {len(task['sub_tasks'])} found")
        
        tracker = ReplyConfirmTracker()
        if result['tasks']:
            confirm_msg = tracker.create_confirmation(result['tasks'][0], 'thread-123')
            print(f"\n  Confirmation msg:\n{confirm_msg}")
    
    print("\n\n✅ V78 Email-to-Task Parser: All test emails parsed successfully")