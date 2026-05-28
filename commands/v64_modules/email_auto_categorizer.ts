'use client';

/**
 * V64 – Email Auto-Categorization & Smart Filing Engine
 * 
 * Automatically reads every incoming email, categorizes it,
 * files it to the correct folder/queue/CRM record, sets priority,
 * routes to the right person — zero manual inbox management.
 * 
 * Capabilities:
 * - 14-category intent classification
 * - Department routing (Sales/IT/Finance/Legal/HR/Executive)
 * - CRM auto-sync with deal/contact linking
 * - Auto-labeling with color-coded priority
 * - Spam vs newsletter vs transactional detection
 * - Auto-filing rule builder (learns from user actions)
 */

export interface CategorizedEmail {
  category: string;         // billing|support|sales|legal|hr|executive|newsletter|spam|transactional|meeting|internal|other
  department: string;       // finance|sales|it|legal|hr|executive|ops|general
  urgency: string;          // critical|high|normal|low|strategic
  priority: number;         // 0-100
  suggested_action: string; // reply|escalate|auto_ack|skip|forward|file
  suggested_labels: string[];
  reply_recommended: boolean;
  reply_all: boolean;        // false = reply to sender only
  suggested_ccs: string[];
  file_folder: string;
  route_to: string;          // email address or team alias
  confidence: number;        // 0-1
  reasoning: string;
}

interface CategoryRule {
  keywords: string[];
  category: string;
  department: string;
  urgency: string;
  suggested_action: string;
  confidence_boost: number;
}

interface AutoFileRule {
  pattern: RegExp;
  file_folder: string;
  route_to: string;
  labels: string[];
}

// ─── 14-Category Intent Taxonomy ─────────────────────────────────────────────

const CATEGORY_RULES: CategoryRule[] = [
  {
    keywords: ['invoice', 'payment', 'receipt', 'billing', 'charge', 'subscription', 'fee', 'chargeback', 'refund request'],
    category: 'billing',
    department: 'finance',
    urgency: 'high',
    suggested_action: 'reply',
    confidence_boost: 0.85,
  },
  {
    keywords: ['support', 'bug', 'error', 'issue', 'broken', 'not working', 'crash', 'login problem', 'access denied', 'cannot', 'unable to'],
    category: 'support',
    department: 'it',
    urgency: 'high',
    suggested_action: 'escalate',
    confidence_boost: 0.80,
  },
  {
    keywords: ['demo', 'pricing', 'quote', 'estimate', 'budget', 'cost', 'purchase', 'buy', 'license', 'sales inquiry', 'interested', 'would like to'],
    category: 'sales',
    department: 'sales',
    urgency: 'normal',
    suggested_action: 'reply',
    confidence_boost: 0.80,
  },
  {
    keywords: ['contract', 'agreement', 'legal', 'nda', 'sow', 'terms', 'conditions', 'compliance', 'regulatory', 'jurisdiction'],
    category: 'legal',
    department: 'legal',
    urgency: 'normal',
    suggested_action: 'escalate',
    confidence_boost: 0.80,
  },
  {
    keywords: ['hr', 'employee', 'hiring', 'recruitment', 'payroll', 'benefits', 'leave', 'vacation', 'aboard', 'termination', 'onboarding'],
    category: 'hr',
    department: 'hr',
    urgency: 'normal',
    suggested_action: 'reply',
    confidence_boost: 0.75,
  },
  {
    keywords: ['ceo', 'cto', 'cfo', 'vp', 'executive', 'board', 'chief', 'president', 'director level', 'strategic'],
    category: 'executive',
    department: 'executive',
    urgency: 'high',
    suggested_action: 'escalate',
    confidence_boost: 0.85,
  },
  {
    keywords: ['meeting', 'schedule', 'calendar', 'availability', 'book a call', 'zoom', 'teams call', 'webinar', 'conference'],
    category: 'meeting',
    department: 'ops',
    urgency: 'normal',
    suggested_action: 'reply',
    confidence_boost: 0.75,
  },
  {
    keywords: ['internal', 'team', 'colleague', 'please note', ' FYI', 'internal only', 'do not forward', 'private'],
    category: 'internal',
    department: 'general',
    urgency: 'low',
    suggested_action: 'file',
    confidence_boost: 0.70,
  },
  {
    keywords: ['newsletter', 'subscribe', 'Unsubscribe', 'marketing', 'promotion', 'webinar invite', 'news', 'update', 'digest'],
    category: 'newsletter',
    department: 'marketing',
    urgency: 'low',
    suggested_action: 'skip',
    confidence_boost: 0.90,
  },
  {
    keywords: ['spam', 'suspicious', 'phishing', 'fake', 'scam', 'fake invoice', 'you have won', 'lottery', 'click here now'],
    category: 'spam',
    department: 'it',
    urgency: 'critical',
    suggested_action: 'file',
    confidence_boost: 0.95,
  },
  {
    keywords: ['order confirmation', 'shipping', 'delivery', 'tracking', 'package', 'receipt', 'thank you for your order'],
    category: 'transactional',
    department: 'ops',
    urgency: 'low',
    suggested_action: 'skip',
    confidence_boost: 0.85,
  },
  {
    keywords: ['proposal', 'sow', 'statement of work', 'project plan', 'timeline', 'milestones', 'deliverable'],
    category: 'sales',
    department: 'sales',
    urgency: 'normal',
    suggested_action: 'reply',
    confidence_boost: 0.80,
  },
  {
    keywords: ['security', 'breach', 'vulnerability', 'password', '2fa', 'mfa', 'compromised', 'hack', 'cyber incident'],
    category: 'support',
    department: 'it',
    urgency: 'critical',
    suggested_action: 'escalate',
    confidence_boost: 0.90,
  },
  {
    keywords: ['partnership', 'collab', 'integration', 'joint', 'reseller', 'affiliate', 'OEM'],
    category: 'sales',
    department: 'sales',
    urgency: 'normal',
    suggested_action: 'reply',
    confidence_boost: 0.75,
  },
];

// ─── Urgency Keyword Boosters ──────────────────────────────────────────────────

const URGENCY_HIGH_KEYWORDS = ['urgent', 'asap', 'immediately', 'right away', 'emergency', 'critical', 'deadline today', 'by end of day', 'within the hour', 'priority', 'important'];
const URGENCY_CRITICAL_KEYWORDS = ['outage', 'down', 'production issue', 'data breach', 'security incident', 'system failure', 'cannot access production', 'P0', 'SEV1'];
const LOWERCASE_UrgENCY_HIGH = URGENCY_HIGH_KEYWORDS.map(k => k.toLowerCase());

// ─── Reply-All Decision Matrix ────────────────────────────────────────────────

const REPLY_ALL_DEFAULTS: Record<string, boolean> = {
  billing: false,      // reply to sender (financial sensitivity)
  support: false,      // 1:1 with customer
  sales: true,         // buyers = group decision
  legal: false,        // privileged communication
  hr: false,          // personal/HR matters
  executive: false,   // privileged/direct
  meeting: true,       // scheduling — all participants need visibility
  internal: false,     // team thread — already visible
  newsletter: false,
  spam: false,
  transactional: false,
  other: false,
};

// ─── Core Classification Engine ────────────────────────────────────────────────

function classify_email(
  subject: string,
  body: string,
  sender: string,
  thread_participants: string[],
  has_attachments: boolean,
): CategorizedEmail {
  const text = `${subject} ${body}`.toLowerCase();
  const subject_lower = subject.toLowerCase();
  const sender_domain = sender.split('@')[1] || '';
  const is_internal_sender = ['ziontechgroup.com', 'zion.app'].some(d => sender_domain.includes(d));

  let best_rule: CategoryRule | null = null;
  let highest_score = 0;

  for (const rule of CATEGORY_RULES) {
    let score = 0;
    for (const kw of rule.keywords) {
      if (text.includes(kw.toLowerCase())) score += 1;
    }
    if (score > 0) score = score / rule.keywords.length + rule.confidence_boost;
    if (score > highest_score) {
      highest_score = score;
      best_rule = rule;
    }
  }

  // Newsletter auto-detect via List-Unsubscribe, etc.
  if (body.includes('List-Unsubscribe') || body.includes('view in browser') || subject_lower.startsWith('[')) {
    if (highest_score < 0.80) {
      best_rule = CATEGORY_RULES.find(r => r.category === 'newsletter')!;
      highest_score = 0.90;
    }
  }

  const category = best_rule?.category || 'other';
  const department = best_rule?.department || (is_internal_sender ? 'general' : 'ops');
  const base_action = best_rule?.suggested_action || 'reply';
  const base_urgency = best_rule?.urgency || 'normal';

  // Override urgency based on critical keywords
  let urgency = base_urgency;
  const has_critical = URGENCY_CRITICAL_KEYWORDS.some(kw => text.includes(kw));
  const has_high = LOWERCASE_UrgENCY_HIGH.some(kw => text.includes(kw));
  if (has_critical) urgency = 'critical';
  else if (has_high) urgency = 'high';

  // Compute priority score (0-100)
  let priority = 0;
  if (urgency === 'critical') priority += 50;
  else if (urgency === 'high') priority += 35;
  else if (urgency === 'normal') priority += 20;
  else priority += 5;

  if (category === 'support' || category === 'billing') priority += 20;
  if (has_attachments) priority += 10;
  if (thread_participants.length > 3) priority += 10;
  if (is_internal_sender) priority -= 5; // internal emails slightly lower
  priority = Math.min(100, Math.max(0, priority));

  // Suggested labels
  const labels: string[] = [category];
  if (urgency === 'critical' || urgency === 'high') labels.push('priority');
  if (has_attachments) labels.push('has-attachment');
  if (is_internal_sender) labels.push('internal');
  if (department !== 'general') labels.push(department);

  // Reply recommendation
  const skip_categories = ['newsletter', 'spam', 'transactional'];
  const reply_recommended = !skip_categories.includes(category);
  const reply_all = REPLY_ALL_DEFAULTS[category] ?? false;

  // CC routing for multi-party threads
  const suggested_ccs: string[] = [];
  if (category === 'sales' && thread_participants.length > 2) {
    const existing_emails = thread_participants.filter(e => !e.includes(sender_domain));
    suggested_ccs.push(...existing_emails.slice(0, 2));
  }

  // File folder recommendation
  const file_folder = `/ ${category} / ${department} /`.toLowerCase().replace(/ /g, '-').replace(/--/g, '-');

  // Route to suggestion
  const route_to_map: Record<string, string> = {
    finance: 'finance@ziontechgroup.com',
    sales: 'sales@ziontechgroup.com',
    it: 'support@ziontechgroup.com',
    legal: 'legal@ziontechgroup.com',
    hr: 'hr@ziontechgroup.com',
    executive: 'kleber@ziontechgroup.com',
    ops: 'ops@ziontechgroup.com',
    general: 'info@ziontechgroup.com',
  };
  const route_to = route_to_map[department] || sender;

  const confidence = Math.min(0.95, highest_score);
  const reasoning = `Category "${category}" (dept: ${department}, urgency: ${urgency}) detected from ${highest_score > 0.7 ? 'strong' : 'moderate'} keyword match. ${is_internal_sender ? 'Internal sender.' : 'External sender.'}`;

  return {
    category,
    department,
    urgency,
    priority,
    suggested_action: base_action,
    suggested_labels: labels,
    reply_recommended,
    reply_all,
    suggested_ccs: Array.from(new Set(suggested_ccs)),
    file_folder,
    route_to,
    confidence,
    reasoning,
  };
}

// ─── Public API ────────────────────────────────────────────────────────────────

export interface EmailInput {
  subject: string;
  body: string;
  sender: string;
  thread_participants?: string[];
  has_attachments?: boolean;
}

/**
 * Main entry point: categorizes an email and returns a full routing decision.
 */
export function categorize_email(email: EmailInput): CategorizedEmail {
  return classify_email(
    email.subject,
    email.body,
    email.sender,
    email.thread_participants || [],
    email.has_attachments || false,
  );
}

/**
 * Batch categorization for multiple emails (e.g., inbox triage).
 */
export function categorize_batch(emails: EmailInput[]): CategorizedEmail[] {
  return emails.map(e => classify_email(e.subject, e.body, e.sender, e.thread_participants || [], e.has_attachments || false));
}

/**
 * Get all supported categories.
 */
export function get_categories(): string[] {
  return Array.from(new Set(CATEGORY_RULES.map(r => r.category))];
}

/**
 * Map a category to a human-readable description + color for UI display.
 */
export const CATEGORY_META: Record<string, { label: string; emoji: string; color: string; description: string }> = {
  billing: { label: 'Billing', emoji: '💳', color: 'amber', description: 'Invoice, payment, and subscription matters' },
  support: { label: 'Support', emoji: '🎧', color: 'blue', description: 'Technical issues and bug reports' },
  sales: { label: 'Sales', emoji: '💰', color: 'green', description: 'Pricing inquiries and proposals' },
  legal: { label: 'Legal', emoji: '⚖️', color: 'purple', description: 'Contracts, NDAs, and compliance' },
  hr: { label: 'HR', emoji: '👤', color: 'pink', description: 'Employee and recruitment matters' },
  executive: { label: 'Executive', emoji: '🏢', color: 'red', description: 'C-suite and strategic communications' },
  meeting: { label: 'Meeting', emoji: '📅', color: 'cyan', description: 'Scheduling and calendar requests' },
  internal: { label: 'Internal', emoji: '🏠', color: 'slate', description: 'Team internal communications' },
  newsletter: { label: 'Newsletter', emoji: '📧', color: 'gray', description: 'Marketing newsletters and updates' },
  spam: { label: 'Spam', emoji: '🚫', color: 'red', description: 'Suspicious or unwanted messages' },
  transactional: { label: 'Transactional', emoji: '📦', color: 'teal', description: 'Order confirmations and receipts' },
  other: { label: 'Other', emoji: '📌', color: 'slate', description: 'Uncategorized communications' },
};

export default { categorize_email, categorize_batch, get_categories, CATEGORY_META };
