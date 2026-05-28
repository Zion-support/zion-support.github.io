'use client';

/**
 * V73 – Email Delegation & Task Tracker (Port of V69 TypeScript)
 * 
 * Parses every outbound email for action items and decisions, creates
 * tracked tasks with owners and due dates, syncs to Asana/Jira/Linear,
 * sends reminder nudges at optimal intervals, and escalates overdue tasks.
 */

/** @typedef {'pending'|'in_progress'|'completed'|'overdue'|'escalated'} TaskStatus */
/** @typedef {'asana'|'jira'|'linear'|'notion'|'trello'|'local'} Platform */

/**
 * @typedef {Object} ExtractedTask
 * @property {string} raw_text
 * @property {string} action_verb
 * @property {string} action_description
 * @property {string} owner
 * @property {string} owner_email
 * @property {string|null} due_date
 * @property {boolean} due_date_inferred
 * @property {string} deadline_context
 * @property {'urgent'|'high'|'medium'|'low'} priority
 * @property {number} confidence 0-1
 * @property {string[]} referenced_in_previous_emails
 */

/**
 * @typedef {Object} TaskRecord
 * @property {string} task_id
 * @property {string} created_at
 * @property {TaskStatus} status
 * @property {number} reminder_count
 * @property {string|null} last_reminder_at
 * @property {Platform|null} platform
 * @property {string|null} external_task_url
 * @property {string|null} escalated_to
 * @property {string[]} notes
 */

/**
 * @typedef {Object} ExtractedDecision
 * @property {string} decision_text
 * @property {string} decided_by
 * @property {string|null} decided_at
 * @property {string} context
 * @property {number} confidence
 */

const URGENT_VERBS = ['immediate', 'asap', 'urgent', 'emergency', 'critical', 'immediately', 'drop everything'];
const HIGH_VERBS = ['send', 'email', 'share', 'confirm', 'approve', 'review', 'schedule', 'book', 'call', 'set up', 'prepare', 'draft', 'submit', 'complete', 'finish'];
const MEDIUM_VERBS = ['check', 'look into', 'follow up on', 'follow up', 'track', 'update', 'verify', 'ensure', 'coordinate', 'arrange', 'organize'];
const LOW_VERBS = ['consider', 'think about', 'explore', 'discuss', 'review when possible', 'keep in mind'];

const DELEGATION_PATTERNS = [
  { pattern: /(?:can you|could you|would you|please|kindly)\s+(send|email|send me|share|call|confirm|review|schedule|prepare|check)/i, verb: 'send', weight: 0.9 },
  { pattern: /(?:i need|i'd like|i want|we need to)\s+(send|schedule|book|call|confirm|prepare|review|send)/i, verb: 'send', weight: 0.8 },
  { pattern: /(@\w+)\s+(?:to|should|needs? to)\s+(send|email|confirm|review|call|schedule|prepare)/i, verb: 'send', weight: 0.95 },
  { pattern: /(?:action[:\s]+|task[:\s]+|to do[:\s]+|todo[:\s]+)([\w\s]+)/i, verb: 'send', weight: 0.85 },
  { pattern: /(?:please note|note to self|reminder[:\s]+)([\w\s]+?)(?:by|before|on|due)[\s]+([\w\s]+)/i, verb: 'send', weight: 0.8 },
  { pattern: /(?:let me know when|confirm (?:your|that|if)|please confirm)/i, verb: 'confirm', weight: 0.92 },
  { pattern: /(?:can you (?:check|look into|verify|review)|please (?:check|review|verify))/i, verb: 'review', weight: 0.88 },
  { pattern: /(?:schedul(?:e|ing)|book a?|set up a? (?:call|meeting|zoom))/i, verb: 'schedule', weight: 0.95 },
  { pattern: /(?:send me|send the|share the|provide the|send over)/i, verb: 'send', weight: 0.9 },
  { pattern: /((?:by|before|on|due|no later than)\s+(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|tomorrow|end of|eos?|eod|eop|\w+ \d+|\d+\/\d+))/i, verb: 'send', weight: 0.7 },
  { pattern: /((?:asap|urgent|immediately|critical|emergency))/i, verb: 'send', weight: 1.0 },
];

const OWNER_PATTERNS = [
  { pattern: /(@\w+)/, extract: (m) => m },
  { pattern: /(?:for|from|assigned to)\s+([A-Z][a-z]+\s+[A-Z][a-z]+)/, extract: (m) => m.trim() },
  { pattern: /(?:to:\s*)([\w.\-]+@[\w.\-]+\.\w+)/, extract: (m) => m },
  { pattern: /([A-Z][a-z]+\s+[A-Z][a-z]+)\s+(?:will|should|can|needs? to|could)/, extract: (m) => m.trim() },
];

const DAY_MAP = {
  'monday': 1, 'mon': 1, 'tuesday': 2, 'tue': 2, 'wednesday': 3, 'wed': 3,
  'thursday': 4, 'thu': 4, 'friday': 5, 'fri': 5, 'saturday': 6, 'sat': 6,
  'sunday': 7, 'sun': 7, 'tomorrow': 8,
};

/**
 * @param {string} text
 * @returns {{ date: string, context: string, inferred: boolean }|null}
 */
function parse_relative_date(text) {
  const DATE_NOW = new Date();
  const lower = text.toLowerCase();
  const boundary_match = lower.match(/(?:by|before|on|until|before)\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday|tomorrow)/);
  if (boundary_match) {
    const day_name = boundary_match[1];
    const days_ahead = DAY_MAP[day_name] - (DATE_NOW.getDay() || 7);
    const actual_days = days_ahead <= 0 ? days_ahead + 7 : (day_name === 'tomorrow' ? 1 : days_ahead);
    const d = new Date(DATE_NOW);
    d.setDate(d.getDate() + actual_days);
    return { date: d.toISOString().split('T')[0], context: boundary_match[0], inferred: false };
  }
  if (/asap|immediate|urgent|immediately|critical/i.test(text)) {
    const d = new Date(DATE_NOW);
    d.setHours(d.getHours() + 4);
    return { date: d.toISOString().split('T')[0], context: 'ASAP (within 4 hours)', inferred: false };
  }
  if (/eow|end of week|end of (?:the )?week/i.test(text)) {
    const d = new Date(DATE_NOW);
    const days_to_friday = 5 - d.getDay();
    d.setDate(d.getDate() + (days_to_friday <= 0 ? days_to_friday + 7 : days_to_friday));
    return { date: d.toISOString().split('T')[0], context: 'end of week', inferred: false };
  }
  if (/eom|end of month/i.test(text)) {
    const d = new Date(DATE_NOW.getFullYear(), DATE_NOW.getMonth() + 1, 0);
    return { date: d.toISOString().split('T')[0], context: 'end of month', inferred: false };
  }
  const within_match = lower.match(/within\s+(\d+)\s+days?/);
  if (within_match) {
    const d = new Date(DATE_NOW);
    d.setDate(d.getDate() + parseInt(within_match[1]));
    return { date: d.toISOString().split('T')[0], context: `within ${within_match[1]} days`, inferred: false };
  }
  return null;
}

/**
 * @param {string} text
 * @param {boolean} explicit_duedate
 * @returns {'urgent'|'high'|'medium'|'low'}
 */
function classify_priority(text, explicit_duedate) {
  const lower = text.toLowerCase();
  for (const v of URGENT_VERBS) { if (lower.includes(v)) return 'urgent'; }
  if (explicit_duedate) {
    const parsed = parse_relative_date(text);
    if (parsed && parsed.context.includes('4 hours')) return 'urgent';
  }
  for (const v of HIGH_VERBS) { if (lower.includes(v)) return 'high'; }
  for (const v of MEDIUM_VERBS) { if (lower.includes(v)) return 'medium'; }
  return 'low';
}

/**
 * @param {string} text
 * @param {string} fallback_email
 * @returns {{ name: string, email: string }}
 */
function extract_owner(text, fallback_email) {
  for (const { pattern, extract } of OWNER_PATTERNS) {
    const m = text.match(pattern);
    if (m) {
      const val = extract(m[1] || m[0]);
      if (val.includes('@')) return { name: val, email: val };
      return { name: val, email: fallback_email };
    }
  }
  return { name: 'Unknown', email: fallback_email };
}

/**
 * @param {string} email_body
 * @param {string} sender_email
 * @param {string[]} [thread_previous_tasks]
 * @returns {ExtractedTask[]}
 */
function extract_tasks_from_email(email_body, sender_email, thread_previous_tasks = []) {
  const tasks = [];
  if (/thank you for your (?:email|message|reply|response)|appreciate your (?:email|message|help|support)/i.test(email_body)) {
    if (!/(?:please|can you|could you|would you|should|i need)/i.test(email_body)) return [];
  }
  let score = 0;
  let detected_verb = '';
  let detected_priority = 'medium';
  let match_text = '';
  for (const { pattern, verb, weight } of DELEGATION_PATTERNS) {
    const m = email_body.match(pattern);
    if (m) {
      const local_score = weight * 100;
      if (local_score > score) {
        score = local_score;
        detected_verb = verb;
        match_text = m[0];
        detected_priority = classify_priority(match_text + ' ' + email_body.substring(m.index || 0, (m.index || 0) + 200), !!parse_relative_date(match_text));
      }
    }
  }
  if (score < 40) return [];
  const due_info = parse_relative_date(match_text + ' ' + email_body);
  const owner = extract_owner(match_text + ' ' + email_body, sender_email);
  const task_description = match_text.length > 180 ? match_text.substring(0, 177) + '...' : match_text;
  tasks.push({
    raw_text: match_text, action_verb: detected_verb, action_description: task_description,
    owner: owner.name, owner_email: owner.email,
    due_date: due_info?.date || null, due_date_inferred: due_info?.inferred || false,
    deadline_context: due_info?.context || 'ASAP',
    priority: detected_priority, confidence: score / 100, referenced_in_previous_emails: [],
  });
  return tasks;
}

/**
 * @param {string} email_body
 * @returns {ExtractedDecision[]}
 */
function extract_decisions(email_body) {
  const decisions = [];
  const patterns = [
    /we(?:'ve)?\s+(?:decided|agreed|confirmed)\s+(?:to|that|on)[\s\:]+([^.]+)/i,
    /(?:decision|agreed)[:\s]+([^.\n]+)/i,
    /(?:moving forward|approved|proceeding with)[\s\:]+([^.!\n]+)/i,
    /(?:let'?s (?:go with|proceed with|use|choose)\s+)([^.\n]+)/i,
    /([\w\s]+)\s+(?:is the|are the|will be the)\s+(?:winner|chosen|selected|approved)/i,
  ];
  for (const pattern of patterns) {
    const m = email_body.match(pattern);
    if (m) {
      decisions.push({
        decision_text: m[1]?.trim() || m[0].trim(),
        decided_by: 'unknown', decided_at: null, context: 'email thread', confidence: 0.75,
      });
    }
  }
  return decisions;
}

/**
 * @typedef {Object} DelegationResult
 * @property {ExtractedTask[]} tasks
 * @property {ExtractedDecision[]} decisions
 * @property {string} summary
 * @property {boolean} should_create_task
 * @property {ExtractedTask['priority']|null} task_priority
 * @property {Platform} suggested_platform
 * @property {string} reasoning
 */

/** @type {Platform[]} */
const PLATFORM_PRIORITY = ['asana', 'jira', 'linear', 'notion', 'trello', 'local'];

/**
 * @param {string} email_body
 * @param {string} sender_email
 * @param {string[]} [thread_previous_tasks]
 * @param {Platform} [preferred_platform]
 * @returns {DelegationResult}
 */
function analyze_for_delegation(email_body, sender_email, thread_previous_tasks = [], preferred_platform) {
  const tasks = extract_tasks_from_email(email_body, sender_email, thread_previous_tasks);
  const decisions = extract_decisions(email_body);
  if (tasks.length === 0 && decisions.length === 0) {
    return {
      tasks: [], decisions: [],
      summary: 'No delegation actions or decisions detected in this email.',
      should_create_task: false, task_priority: null,
      suggested_platform: preferred_platform || 'local',
      reasoning: 'No actionable delegation patterns found — informational email only.',
    };
  }
  const top_task = tasks[0];
  const should_create_task = tasks.some(t => t.confidence >= 0.7);
  return {
    tasks, decisions,
    summary: `Found ${tasks.length} action item(s) and ${decisions.length} decision(s). Top task: [${top_task.priority.toUpperCase()}] ${top_task.action_description} → ${top_task.owner} (due: ${top_task.due_date || top_task.deadline_context})`,
    should_create_task, task_priority: top_task.priority,
    suggested_platform: preferred_platform || PLATFORM_PRIORITY[0],
    reasoning: `Confidence: ${(top_task.confidence * 100).toFixed(0)}% | Verb: ${top_task.action_verb} | Owner: ${top_task.owner} | Due: ${top_task.due_date || top_task.deadline_context} | Priority: ${top_task.priority.toUpperCase()} | Decisions found: ${decisions.length}`,
  };
}

// Task registry (in-memory)
const task_registry = new Map();

/**
 * @param {ExtractedTask} task
 * @returns {TaskRecord}
 */
function register_task(task) {
  const id = `delegation-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;
  const record = {
    ...task,
    task_id: id,
    created_at: new Date().toISOString(),
    status: 'pending',
    reminder_count: 0,
    last_reminder_at: null,
    platform: null,
    external_task_url: null,
    escalated_to: null,
    notes: [],
  };
  task_registry.set(id, record);
  return record;
}

/**
 * @param {string} task_id
 * @returns {TaskRecord|undefined}
 */
function get_task(task_id) {
  return task_registry.get(task_id);
}

/**
 * @param {TaskStatus} [status]
 * @returns {TaskRecord[]}
 */
function list_tasks(status) {
  const all = Array.from(task_registry.values());
  if (!status) return all;
  return all.filter(t => t.status === status);
}

/**
 * @param {string} task_id
 * @returns {TaskRecord|null}
 */
function mark_complete(task_id) {
  const t = task_registry.get(task_id);
  if (!t) return null;
  t.status = 'completed';
  return t;
}

/**
 * @param {TaskRecord} task
 * @returns {Date|null}
 */
function compute_reminder_timing(task) {
  if (!task.due_date) return null;
  const d = new Date(task.due_date);
  if (task.priority === 'urgent') { d.setHours(d.getHours() - 2); }
  else { d.setDate(d.getDate() - 1); d.setHours(9, 0, 0, 0); }
  return d;
}

/**
 * @param {TaskRecord} task
 * @returns {boolean}
 */
function is_overdue(task) {
  if (!task.due_date) return false;
  const now = new Date();
  const due = new Date(task.due_date);
  if (task.priority === 'urgent') return now.getTime() > due.getTime();
  const grace_ms = 24 * 60 * 60 * 1000;
  return now.getTime() > due.getTime() + grace_ms;
}

/**
 * @param {TaskRecord} task
 * @returns {boolean}
 */
function should_escalate(task) {
  if (!is_overdue(task)) return false;
  if (task.reminder_count >= 3) return true;
  return task.priority === 'urgent' || task.priority === 'high';
}

module.exports = {
  analyze_for_delegation, extract_tasks_from_email, extract_decisions,
  register_task, get_task, list_tasks, mark_complete,
  compute_reminder_timing, is_overdue, should_escalate,
};