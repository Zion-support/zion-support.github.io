'use client';

/**
 * V73 – Email Escalation Predictor (Port of V66 TypeScript)
 * 
 * Predicts BEFORE a thread escalates into a crisis. Analyzes linguistic
 * patterns that precede customer churn, formal complaints, public complaints,
 * and executive escalations — recommends preemptive de-escalation actions.
 */

/** @typedef {1|2|3|4|5|6|7} EscalationStage */

/**
 * @typedef {Object} EscalationPrediction
 * @property {EscalationStage} stage
 * @property {number} crisis_probability 0-100
 * @property {'low'|'medium'|'high'|'critical'} risk_level
 * @property {string[]} triggers
 * @property {string} stage_label
 * @property {string} reasoning
 * @property {'none'|'monitor'|'human_review'|'supervisor_escalation'|'immediate_intervention'} recommended_action
 * @property {string} [preemptive_message]
 */

const CRISIS_TRIGGERS = [
  { phrase: 'lawsuit', weight: 95 }, { phrase: 'legal action', weight: 95 },
  { phrase: 'sue', weight: 95 }, { phrase: 'attorney', weight: 93 },
  { phrase: 'facing legal', weight: 92 }, { phrase: 'regulatory', weight: 90 },
  { phrase: 'better business bureau', weight: 88 }, { phrase: 'bbb complaint', weight: 88 },
  { phrase: 'credit card chargeback', weight: 85 }, { phrase: 'file a complaint', weight: 85 },
  { phrase: 'public review', weight: 85 }, { phrase: 'social media', weight: 82 },
  { phrase: 'twitter', weight: 80 }, { phrase: ' facebook ', weight: 78 },
  { phrase: 'linkedin', weight: 75 }, { phrase: 'executive email', weight: 82 },
  { phrase: 'ceo email', weight: 80 }, { phrase: 'board complaint', weight: 90 },
  { phrase: 'press', weight: 85 }, { phrase: 'media inquiry', weight: 90 },
  { phrase: 'contract termination', weight: 80 }, { phrase: 'cancel contract', weight: 80 },
];

const HIGH_TRIGGERS = [
  { phrase: 'extremely disappoint', weight: 80 }, { phrase: 'very disappoint', weight: 75 },
  { phrase: 'unacceptable', weight: 78 }, { phrase: 'third time', weight: 75 },
  { phrase: 'fourth time', weight: 82 }, { phrase: 'nothing has been done', weight: 75 },
  { phrase: 'this is ridiculous', weight: 78 }, { phrase: 'fed up', weight: 80 },
  { phrase: 'complete waste', weight: 75 }, { phrase: 'worst experience', weight: 80 },
  { phrase: 'i expected more', weight: 70 }, { phrase: 'never using', weight: 75 },
  { phrase: 'not good enough', weight: 70 }, { phrase: 'supervisor', weight: 72 },
  { phrase: 'escalate to management', weight: 80 }, { phrase: 'want to speak', weight: 70 },
  { phrase: 'refuse to pay', weight: 78 }, { phrase: 'withhold payment', weight: 75 },
  { phrase: 'escalate', weight: 65 }, { phrase: 'legal', weight: 70 },
  { phrase: 'contract', weight: 65 },
];

const MEDIUM_TRIGGERS = [
  { phrase: 'frustrat', weight: 60 }, { phrase: 'annoyed', weight: 55 },
  { phrase: 'disappoint', weight: 58 }, { phrase: 'upset', weight: 55 },
  { phrase: 'let down', weight: 55 }, { phrase: 'not satisfi', weight: 55 },
  { phrase: 'has been waiting', weight: 58 }, { phrase: 'week', weight: 50 },
  { phrase: 'still not', weight: 55 }, { phrase: 'no response to', weight: 55 },
  { phrase: 'multiple times', weight: 55 }, { phrase: 'still broken', weight: 60 },
  { phrase: 'no fix', weight: 62 }, { phrase: 'aggravat', weight: 55 },
  { phrase: 'long delay', weight: 50 }, { phrase: 'poor experience', weight: 60 },
  { phrase: 'below expect', weight: 58 },
];

const LOW_TRIGGERS = [
  { phrase: 'concern', weight: 40 }, { phrase: 'following up', weight: 35 },
  { phrase: 'have not received', weight: 40 }, { phrase: 'issue', weight: 35 },
  { phrase: 'problem', weight: 35 }, { phrase: 'mistake', weight: 38 },
  { phrase: 'error', weight: 35 }, { phrase: 'not work', weight: 40 },
  { phrase: 'unable to', weight: 35 }, { phrase: 'difficulty', weight: 38 },
];

const STAGE_LABELS = {
  1: 'Neutral — Satisfied / Informational',
  2: 'Mild Concern — Passive Dissatisfaction',
  3: 'Active Frustration — Repeated Issue',
  4: 'High Risk — Explicit Threat of Escalation',
  5: 'Critical Risk — Formal Complaint Filed',
  6: 'Crisis — Legal/Regulatory/Public Threat',
  7: 'Active Crisis — Churn/Legal Action Initiated',
};

const PREEMPTIVE_MESSAGES = {
  1: '',
  2: 'Thank you for your feedback — we value your perspective and are committed to ensuring every interaction meets your expectations.',
  3: 'I completely understand your frustration, and I sincerely apologize for the repeated experience. I want to personally make this right.',
  4: 'I understand you are considering your options, and I want to assure you that your satisfaction is our highest priority. Let me connect you with a senior specialist immediately.',
  5: 'I want to connect you directly with our leadership team to ensure this is resolved to your complete satisfaction. Please expect a personal call within the next 2 hours.',
  6: 'I am escalating this to our executive team right now. Your satisfaction is paramount and we are committed to making this right immediately.',
  7: 'I want to connect with you directly. Please reply with your preferred contact method and a phone call will be arranged within 60 minutes.',
};

const DECAY_HOURS = 72;

/**
 * @param {string} email_body
 * @param {string} email_subject
 * @param {number} thread_history_count
 * @param {number} hours_since_last_negative_email
 * @param {number} caps_ratio
 * @param {number} exclamation_count
 * @returns {{ raw_score: number, triggers: string[] }}
 */
function compute_escalation_score(email_body, email_subject, thread_history_count, hours_since_last_negative_email, caps_ratio, exclamation_count) {
  let score = 0;
  const triggers = [];
  const combined = (email_subject + ' ' + email_body).toLowerCase();

  for (const { phrase, weight } of CRISIS_TRIGGERS) {
    if (combined.includes(phrase)) { score += weight; triggers.push(`CRISIS: "${phrase}" [+${weight}]`); }
  }
  for (const { phrase, weight } of HIGH_TRIGGERS) {
    if (combined.includes(phrase)) { score += weight; triggers.push(`HIGH: "${phrase}" [+${weight}]`); }
  }
  for (const { phrase, weight } of MEDIUM_TRIGGERS) {
    if (combined.includes(phrase)) { score += weight; triggers.push(`MEDIUM: "${phrase}" [+${weight}]`); }
  }
  for (const { phrase, weight } of LOW_TRIGGERS) {
    if (combined.includes(phrase)) { score += weight; triggers.push(`LOW: "${phrase}" [+${weight}]`); }
  }

  if (thread_history_count >= 3) { score += 20; triggers.push(`REPEATED (${thread_history_count}x): [+20]`); }
  else if (thread_history_count === 2) { score += 12; triggers.push(`REPEATED (2x): [+12]`); }
  else if (thread_history_count === 1) { score += 5; }

  if (caps_ratio > 0.25) { score += 30; triggers.push(`CAPS CRITICAL (${(caps_ratio * 100).toFixed(0)}%): [+30]`); }
  else if (caps_ratio > 0.15) { score += 18; triggers.push(`CAPS HIGH (${(caps_ratio * 100).toFixed(0)}%): [+18]`); }
  else if (caps_ratio > 0.05) { score += 8; triggers.push(`CAPS ELEVATED (${(caps_ratio * 100).toFixed(0)}%): [+8]`); }

  if (exclamation_count >= 5) { score += 15; triggers.push(`EXCLAMATION STORM (${exclamation_count}x): [+15]`); }
  else if (exclamation_count >= 3) { score += 8; triggers.push(`EXCLAMATION HIGH (${exclamation_count}x): [+8]`); }

  if (hours_since_last_negative_email > 0 && hours_since_last_negative_email < DECAY_HOURS) {
    const decay_factor = 1 - hours_since_last_negative_email / DECAY_HOURS;
    const decay_penalty = Math.round(25 * decay_factor);
    score += decay_penalty;
    if (decay_penalty >= 5) triggers.push(`RE-ACTIVATION (after ${hours_since_last_negative_email}h silence): [+${decay_penalty}]`);
  }

  const urgent_subject_terms = ['urgent', 'asap', 'immediately', 'critical', 'important', 'complaint', 'escalat', 'problem', 'issue'];
  for (const term of urgent_subject_terms) {
    if (email_subject.toLowerCase().includes(term)) { score += 10; triggers.push(`SUBJECT URGENCY ("${term}"): [+10]`); break; }
  }

  return { raw_score: Math.min(score, 100), triggers };
}

/**
 * @param {number} raw_score
 * @param {number} escalation_risk
 * @returns {{ stage: EscalationStage, risk_level: 'low'|'medium'|'high'|'critical' }}
 */
function classify_stage(raw_score, escalation_risk) {
  if (raw_score >= 180 || escalation_risk >= 0.90) return { stage: 7, risk_level: 'critical' };
  if (raw_score >= 130 || escalation_risk >= 0.75) return { stage: 6, risk_level: 'critical' };
  if (raw_score >= 95 || escalation_risk >= 0.55) return { stage: 5, risk_level: 'high' };
  if (raw_score >= 65 || escalation_risk >= 0.35) return { stage: 4, risk_level: 'high' };
  if (raw_score >= 40 || escalation_risk >= 0.20) return { stage: 3, risk_level: 'medium' };
  if (raw_score >= 15 || escalation_risk >= 0.10) return { stage: 2, risk_level: 'medium' };
  return { stage: 1, risk_level: 'low' };
}

/**
 * @param {number} raw_score
 * @returns {number}
 */
function score_to_probability(raw_score) {
  if (raw_score <= 0) return 0;
  if (raw_score <= 20) return raw_score * 0.5;
  if (raw_score <= 50) return 10 + (raw_score - 20) * 0.67;
  if (raw_score <= 80) return 30 + (raw_score - 50) * 1.0;
  if (raw_score <= 120) return 60 + (raw_score - 80) * 1.0;
  return Math.min(100, raw_score);
}

/**
 * @param {EscalationStage} stage
 * @returns {EscalationPrediction['recommended_action']}
 */
function get_recommended_action(stage) {
  if (stage <= 2) return 'none';
  if (stage === 3) return 'human_review';
  if (stage === 4) return 'supervisor_escalation';
  if (stage === 5) return 'immediate_intervention';
  return 'immediate_intervention';
}

/**
 * @param {string} email_body
 * @param {string} [email_subject]
 * @param {number} [thread_history_count]
 * @param {number} [hours_since_last_negative_email]
 * @param {number} [caps_ratio]
 * @param {number} [exclamation_count]
 * @returns {EscalationPrediction}
 */
function predict_escalation(email_body, email_subject = '', thread_history_count = 0, hours_since_last_negative_email = DECAY_HOURS + 1, caps_ratio = 0, exclamation_count = 0) {
  const words = email_body.split(/\s+/);
  const caps_words = words.filter(w => /^[A-Z]{3,}$/.test(w));
  const detected_caps_ratio = caps_ratio > 0 ? caps_ratio : words.length > 0 ? caps_words.length / words.length : 0;
  const detected_exclamations = exclamation_count > 0 ? exclamation_count : (email_body.match(/!/g) || []).length;

  const { raw_score, triggers } = compute_escalation_score(email_body, email_subject, thread_history_count, hours_since_last_negative_email, detected_caps_ratio, detected_exclamations);
  const crisis_probability = score_to_probability(raw_score);
  const escalation_risk = crisis_probability / 100;
  const { stage, risk_level } = classify_stage(raw_score, escalation_risk);
  const recommended_action = get_recommended_action(stage);

  const reasoning_parts = [
    `Escalation score: ${raw_score}/100 → Crisis probability: ${crisis_probability.toFixed(1)}%`,
    `Stage: ${stage} (${STAGE_LABELS[stage]})`, `Risk level: ${risk_level.toUpperCase()}`,
    `Thread count: ${thread_history_count} previous emails`,
    `CAPS ratio: ${(detected_caps_ratio * 100).toFixed(1)}%`, `Exclamations: ${detected_exclamations}`,
    triggers.length > 0 ? `Triggers: ${triggers.slice(0, 6).join(' | ')}` : 'No escalation triggers detected',
  ];

  return {
    stage, crisis_probability, risk_level,
    triggers: triggers.slice(0, 10),
    stage_label: STAGE_LABELS[stage],
    reasoning: reasoning_parts.join(' | '),
    recommended_action,
    preemptive_message: PREEMPTIVE_MESSAGES[stage],
  };
}

/**
 * @param {Array<{body: string, subject?: string, thread_count?: number, hours_since_negative?: number}>} emails
 * @returns {EscalationPrediction[]}
 */
function batch_predict(emails) {
  return emails.map(e => predict_escalation(e.body, e.subject || '', e.thread_count || 0, e.hours_since_negative ?? DECAY_HOURS + 1));
}

module.exports = { predict_escalation, batch_predict };