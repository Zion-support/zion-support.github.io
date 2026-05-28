'use client';

/**
 * V73 – Email Auto-Categorizer (Port of V64 TypeScript)
 * 
 * Automatically classifies incoming emails into support categories using
 * rule-based pattern matching + keyword analysis. Routes to correct 
 * queue, sets priority, and extracts intent — no ML required.
 */

/** @typedef {'billing'|'technical'|'sales'|'general'|'refund'|'partnership'|'feedback'|'urgent'|'other'} EmailCategory */

/**
 * @typedef {Object} CategoryResult
 * @property {EmailCategory} category
 * @property {string} confidence 0-1
 * @property {string} intent
 * @property {string} priority 'urgent'|'high'|'medium'|'low'
 * @property {string[]} matched_keywords
 * @property {string} reasoning
 * @property {string} suggested_action
 */

const CATEGORY_PATTERNS = [
  {
    category: 'billing',
    patterns: ['invoice', 'payment', 'charge', 'billing', 'subscription', 'cancel', 'refund', 'credit', 'debit', 'receipt', 'receipt', 'bill', 'overcharge', 'overbilling', 'subscription', 'plan', 'pricing', 'cost', 'fee', 'charge'],
    intent: 'Billing or subscription inquiry',
    priority: 'high',
    action: 'Route to billing queue',
  },
  {
    category: 'technical',
    patterns: ['bug', 'error', 'crash', 'not working', 'broken', 'issue', 'problem', 'defect', 'glitch', 'fail', 'failed', 'cannot', 'unable to', 'stuck', 'freeze', 'slow', 'loading', 'loading', 'api', 'integration', 'sync', 'data', 'database', 'server', 'deployment'],
    intent: 'Technical issue or bug report',
    priority: 'high',
    action: 'Route to technical support queue',
  },
  {
    category: 'sales',
    patterns: ['pricing', 'demo', 'trial', 'enterprise', 'plan', 'upgrade', 'features', 'capabilities', 'how much', 'cost', 'quote', 'proposal', 'contract', 'purchase', 'buy', 'license'],
    intent: 'Sales inquiry or purchase intent',
    priority: 'medium',
    action: 'Route to sales queue',
  },
  {
    category: 'refund',
    patterns: ['refund', 'money back', 'cancel and refund', 'return', 'return request', 'dispute', 'chargeback', 'reverse charge'],
    intent: 'Refund or charge dispute',
    priority: 'high',
    action: 'Route to refund processing queue',
  },
  {
    category: 'partnership',
    patterns: ['partner', 'partnership', 'reseller', 'affiliate', 'integration partner', 'OEM', 'enterprise', 'white label'],
    intent: 'Partnership or reselling inquiry',
    priority: 'medium',
    action: 'Route to partnership team',
  },
  {
    category: 'feedback',
    patterns: ['feedback', 'suggestion', 'feature request', 'improvement', 'idea', 'would be nice', 'wish', 'love to see', 'please add'],
    intent: 'Feedback or feature suggestion',
    priority: 'low',
    action: 'Route to product feedback board',
  },
  {
    category: 'urgent',
    patterns: ['urgent', 'asap', 'critical', 'down', 'production is down', 'outage', 'p0', 'p1', 'sev1', 'sev2', 'emergency', 'immediately'],
    intent: 'Urgent issue requiring immediate attention',
    priority: 'urgent',
    action: 'Immediate escalation to on-call engineer',
  },
  {
    category: 'general',
    patterns: ['question', 'how do i', 'how to', 'where is', 'where can i', 'when is', 'what is', 'what are', 'can i', 'could you', 'wondering', 'curious'],
    intent: 'General inquiry or how-to question',
    priority: 'low',
    action: 'Route to general support — self-service docs recommended',
  },
];

const SUBJECT_PREFIXES = {
  urgent: ['urgent', 'asap', 'emergency', 'critical', 'down'],
  billing: ['billing', 'payment', 'invoice', 'refund'],
  technical: ['bug', 'error', 'issue', 'crash', 'not working'],
  sales: ['pricing', 'demo', 'trial', 'enterprise'],
};

/**
 * @param {string} text
 * @returns {CategoryResult}
 */
function categorize_email(text) {
  const combined = (text || '').toLowerCase();
  const scores = {};

  for (const { category, patterns, intent, priority, action } of CATEGORY_PATTERNS) {
    scores[category] = 0;
    for (const pattern of patterns) {
      if (combined.includes(pattern.toLowerCase())) {
        scores[category] += 1;
      }
    }
  }

  // Find best category
  let best_category = 'other';
  let best_score = 0;
  for (const [cat, score] of Object.entries(scores)) {
    if (score > best_score) { best_score = score; best_category = cat; }
  }

  const match_data = CATEGORY_PATTERNS.find(c => c.category === best_category);
  const matched_keywords = match_data ? match_data.patterns.filter(p => combined.includes(p.toLowerCase())).slice(0, 5) : [];

  // Override to urgent if subject has urgent prefix
  if (best_score < 2 && /urgent|critical|asap|emergency/.test(combined)) {
    best_category = 'urgent';
  }

  const confidence = Math.min(0.95, best_score * 0.15 + 0.2);

  return {
    category: best_category,
    confidence,
    intent: match_data?.intent || 'Uncategorized inquiry',
    priority: match_data?.priority || 'medium',
    matched_keywords,
    reasoning: `Score: ${best_score} | Matched: ${matched_keywords.join(', ') || 'none'} | Category: ${best_category}`,
    suggested_action: match_data?.action || 'Route to general queue',
  };
}

/**
 * Batch categorize multiple emails
 * @param {Array<{subject: string, body: string, id: string}>} emails
 * @returns {Array<CategoryResult & {email_id: string}>}
 */
function batch_categorize(emails) {
  return emails.map(e => ({
    email_id: e.id,
    ...categorize_email((e.subject || '') + ' ' + (e.body || '')),
  }));
}

module.exports = { categorize_email, batch_categorize };