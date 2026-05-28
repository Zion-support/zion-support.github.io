'use client';

/**
 * V73 – Sentiment Adaptive Tone Engine (Port of V65 TypeScript)
 * 
 * Dynamically adjusts email tone based on real-time sentiment analysis
 * of the conversation. If sender is frustrated, auto-shifts to empathetic/
 * de-escalating tone. If transactional, shifts to crisp and professional.
 * Learns tone preferences over thread lifetime.
 */

/** @typedef {'empathetic'|'professional'|'friendly'|'formal'|'de_escalating'|'assertive'|'neutral'} ToneCategory */

/**
 * @typedef {Object} ToneAnalysis
 * @property {ToneCategory} primary_tone
 * @property {ToneCategory} secondary_tone
 * @property {number} sentiment_score
 * @property {boolean} urgency_detected
 * @property {number} frustration_level
 * @property {number} formality_level
 * @property {number} warmth_level
 * @property {number} confidence
 * @property {string} reasoning
 */

/**
 * @typedef {Object} ToneAdjustedDraft
 * @property {string} adjusted_body
 * @property {string} adjusted_subject
 * @property {string} opening_line
 * @property {string} closing_line
 * @property {ToneCategory} tone_used
 * @property {string[]} sent_impressions
 */

const POSITIVE_WORDS = [
  'thank', 'grateful', 'appreciate', 'pleased', 'happy', 'excited', 'great',
  'wonderful', 'fantastic', 'excellent', 'amazing', 'awesome', 'delighted',
  'helpful', 'good', 'best', 'perfect', 'brilliant', 'outstanding', 'superb',
  'welcome', 'look forward', 'appreciated', 'glad', 'nice', 'kind',
];

const NEGATIVE_WORDS = [
  'frustrat', 'angry', 'annoyed', 'upset', 'disappointed', 'terrible', 'awful',
  'horrible', 'worst', 'fail', 'broken', 'useless', 'waste', 'ridiculous',
  'unacceptable', 'outrageous', 'stupid', 'hate', 'never again',
  'complaint', 'escalate', 'supervisor', 'manager', 'furious', 'livid',
];

const URGENCY_PHRASES = [
  'asap', 'urgent', 'immediately', 'right away', 'emergency', 'deadline',
  'time-sensitive', 'cannot wait', 'by end of day', 'priority', 'important',
  'critical', 'overdue', 'delayed', 'waiting', 'stuck',
];

const FRUSTRATION_PHRASES = [
  'have to tell you again', 'already tried', 'still not fixed', 'third time',
  'been waiting', 'nothing has been done', 'no response', 'waste of time',
  'disappointed', 'fed up', 'extremely frustrated', 'unacceptable', 'not good enough',
  'this is ridiculous', 'i expected more', 'very disappointed',
];

const FORMAL_OPENINGS = [
  'I am writing to inform you', 'We wish to advise you', 'Please be advised',
  'This letter serves to', 'As per our discussion', 'In accordance with',
  'We hereby confirm', 'We are pleased to inform you', 'Further to your inquiry',
  'We regret to inform you',
];

const FRIENDLY_OPENINGS = [
  'Hope you are doing well!', 'Hope this finds you well.', 'Great connecting with you!',
  'Just wanted to reach out!', 'Quick note to say', 'Sharing some good news!',
  'Hope you had a great weekend!', 'Just checking in!',
];

const EMPATHETIC_OPENINGS = [
  'I completely understand your frustration, and I sincerely apologize',
  'I am truly sorry for the inconvenience this has caused',
  'Thank you for bringing this to our attention — I can see how frustrating this has been',
  'I completely hear you, and I want to make this right',
  'First, I want to sincerely apologize for the experience you have had',
  'I can only imagine how frustrating this has been',
  'Thank you for your patience as we work to resolve this',
];

const DEESCALATING_OPENINGS = [
  'I appreciate you sharing your concerns',
  'Thank you for letting us know about this situation',
  'I understand your frustration and want to help resolve this',
  'Your feedback is invaluable and I want to make things right',
  'I hear you, and I want to assure you we are taking this seriously',
  'We take this very seriously and I personally want to help',
];

const ASSERTIVE_OPENINGS = [
  'Please be advised that immediate action is required',
  'We require an update by', 'This matter requires urgent attention',
  'We need to address this as a priority',
  'Time is of the essence — please respond by',
  'As a deadline is approaching, we need',
  'This is time-sensitive and requires prompt action',
];

const PROFESSIONAL_OPENINGS = [
  'Thank you for reaching out.', 'Thank you for your email.',
  'Thank you for contacting us.', 'I appreciate your message.',
  'Thank you for your patience.', 'Thanks for getting in touch.',
  'Thank you for your inquiry.',
];

const FORMAL_CLOSINGS = [
  'Yours sincerely', 'Kind regards', 'Best regards', 'Yours faithfully',
  'Respectfully', 'With kindest regards', 'Faithfully yours',
];

const FRIENDLY_CLOSINGS = [
  'Thanks so much!', 'Best,', 'Cheers!', 'Warm regards,',
  'Take care!', 'Talk soon!', 'Looking forward to hearing from you!',
];

const PROFESSIONAL_CLOSINGS = [
  'Best regards,', 'Kind regards,', 'Warm regards,', 'Regards,',
  'Thank you,', 'With appreciation,',
];

/**
 * @param {ToneCategory} tone
 * @returns {string}
 */
function select_opening(tone) {
  const pools = {
    formal: FORMAL_OPENINGS, professional: PROFESSIONAL_OPENINGS,
    friendly: FRIENDLY_OPENINGS, empathetic: EMPATHETIC_OPENINGS,
    de_escalating: DEESCALATING_OPENINGS, assertive: ASSERTIVE_OPENINGS,
    neutral: PROFESSIONAL_OPENINGS,
  };
  const pool = pools[tone] || pools.neutral;
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * @param {ToneCategory} tone
 * @returns {string}
 */
function select_closing(tone) {
  const pools = {
    formal: FORMAL_CLOSINGS, professional: PROFESSIONAL_CLOSINGS,
    friendly: FRIENDLY_CLOSINGS, empathetic: PROFESSIONAL_CLOSINGS,
    de_escalating: PROFESSIONAL_CLOSINGS, assertive: PROFESSIONAL_CLOSINGS,
    neutral: PROFESSIONAL_CLOSINGS,
  };
  const pool = pools[tone] || pools.neutral;
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * @param {string} body
 * @returns {{ sentiment_score: number, frustration_level: number, urgency_detected: boolean }}
 */
function analyze_sentiment(body) {
  const text_lower = body.toLowerCase();
  let positive_count = 0, negative_count = 0;
  for (const word of POSITIVE_WORDS) { if (text_lower.includes(word)) positive_count++; }
  for (const word of NEGATIVE_WORDS) { if (text_lower.includes(word)) negative_count++; }
  const total = Math.max(positive_count + negative_count, 1);
  const raw_score = (positive_count - negative_count) / total;
  const sentiment_score = Math.max(-1, Math.min(1, raw_score));

  let frustration_level = 0;
  for (const phrase of FRUSTRATION_PHRASES) {
    if (text_lower.includes(phrase)) frustration_level += 0.3;
  }
  frustration_level += negative_count * 0.1;
  if (text_lower.includes('?')) frustration_level += 0.1;
  const question_count = (text_lower.match(/\?/g) || []).length;
  if (question_count >= 3) frustration_level += 0.2;
  frustration_level = Math.min(1, frustration_level);
  const urgency_detected = URGENCY_PHRASES.some(p => text_lower.includes(p));
  return { sentiment_score, frustration_level, urgency_detected };
}

/**
 * @param {string} body
 * @param {string} subject
 * @param {number} sentiment_score
 * @param {number} frustration_level
 * @param {boolean} urgency_detected
 * @param {string} sender_domain
 * @param {number} thread_length
 * @returns {ToneAnalysis}
 */
function classify_tone(body, subject, sentiment_score, frustration_level, urgency_detected, sender_domain) {
  const text_lower = (subject + ' ' + body).toLowerCase();
  const sender_domain_clean = sender_domain.replace(/^www\./, '');
  if (frustration_level >= 0.5) {
    return {
      primary_tone: frustration_level >= 0.75 ? 'de_escalating' : 'empathetic',
      secondary_tone: 'professional', sentiment_score, urgency_detected,
      frustration_level, formality_level: 0.6, warmth_level: 0.8, confidence: 0.85,
      reasoning: `High frustration level (${(frustration_level * 100).toFixed(0)}%) detected. Tone set to ${frustration_level >= 0.75 ? 'de-escalating' : 'empathetic'} to de-fuse tension.`,
    };
  }
  if (urgency_detected && sentiment_score < -0.2) {
    return {
      primary_tone: 'assertive', secondary_tone: 'professional', sentiment_score,
      urgency_detected, frustration_level, formality_level: 0.7, warmth_level: 0.3,
      confidence: 0.80, reasoning: 'Urgent request with negative sentiment. Tone set to assertive to drive action.',
    };
  }
  if (sentiment_score < -0.2) {
    return {
      primary_tone: 'professional', secondary_tone: 'empathetic', sentiment_score,
      urgency_detected, frustration_level, formality_level: 0.7, warmth_level: 0.4,
      confidence: 0.75, reasoning: 'Negative sentiment but manageable frustration. Tone set to professional with empathetic undertones.',
    };
  }
  const formal_domains = ['.law', '.gov', '.edu', '.mil', 'legal', 'finance', 'insurance'];
  const is_formal_domain = formal_domains.some(d => sender_domain_clean.includes(d));
  if (sentiment_score > 0.3 && is_formal_domain) {
    return {
      primary_tone: 'formal', secondary_tone: 'professional', sentiment_score,
      urgency_detected, frustration_level, formality_level: 0.9, warmth_level: 0.5,
      confidence: 0.80, reasoning: 'Positive sentiment + formal domain detected. Tone set to formal.',
    };
  }
  if (sentiment_score > 0.4) {
    const warm_words = ['great', 'fantastic', 'thank', 'appreciate', 'wonderful', 'amazing'];
    const has_warm_language = warm_words.some(w => text_lower.includes(w));
    if (has_warm_language) {
      return {
        primary_tone: 'friendly', secondary_tone: 'professional', sentiment_score,
        urgency_detected, frustration_level, formality_level: 0.3, warmth_level: 0.8,
        confidence: 0.75, reasoning: 'Positive sentiment with warm language. Tone set to friendly.',
      };
    }
  }
  return {
    primary_tone: 'professional', secondary_tone: 'neutral', sentiment_score,
    urgency_detected, frustration_level, formality_level: 0.5, warmth_level: 0.5,
    confidence: 0.70, reasoning: 'No strong tone signals detected. Defaulting to professional tone.',
  };
}

/**
 * @param {string} body
 * @param {ToneCategory} tone
 * @returns {{ adjusted_body: string, sent_impressions: string[] }}
 */
function apply_tone_adjustments(body, tone) {
  let adjusted = body;
  const impressions = [];
  if (tone === 'empathetic' || tone === 'de_escalating') {
    if (!adjusted.toLowerCase().match(/^(thank you|i (?:completely )?understand|i sincere)/)) {
      adjusted = `[Tone adjustment: Acknowledging your experience]\n\n${adjusted}`;
      impressions.push('Added empathetic acknowledgment prefix');
    }
    const soften_map = [
      [/\byou must\b/gi, 'we kindly request'], [/\byou have to\b/gi, 'we would appreciate'],
      [/\bfailed to\b/gi, 'have not yet been able to'], [/\bnot possible\b/gi, 'challenging at this time'],
      [/\bimpossible\b/gi, 'not feasible at this stage'], [/\bnever\b/gi, 'not yet'],
      [/\bworst\b/gi, 'far from ideal'], [/\bterrible\b/gi, 'not up to our standards'],
      [/\bcomplaint\b/gi, 'feedback'],
    ];
    for (const [pattern, replacement] of soften_map) {
      if (pattern.test(adjusted)) {
        adjusted = adjusted.replace(pattern, replacement);
        impressions.push(`Softened: "${pattern.source}" → "${replacement}"`);
      }
    }
  }
  if (tone === 'assertive') {
    adjusted = adjusted.replace(/\bperhaps\b/gi, '').replace(/\bmaybe\b/gi, '');
    adjusted = adjusted.replace(/\bi think\b/gi, 'it is').replace(/\bi believe\b/gi, 'we believe');
    adjusted = adjusted.replace(/\bto some extent\b/gi, '');
    impressions.push('Tightened language for assertive tone');
  }
  if (tone === 'friendly') {
    impressions.push('Preserved friendly tone markers');
  }
  if (tone === 'formal') {
    const formal_upgrades = [
      [/\bget\b/gi, 'obtain'], [/\btell\b/gi, 'inform'], [/\bask\b/gi, 'request'],
      [/\bhelp\b/gi, 'assist'], [/\buse\b/gi, 'utilize'], [/\btry to\b/gi, 'endeavor to'],
      [/\bkind of\b/gi, 'somewhat'], [/\ba lot\b/gi, 'considerably'],
    ];
    for (const [pattern, replacement] of formal_upgrades) {
      if (pattern.test(adjusted)) {
        adjusted = adjusted.replace(pattern, replacement);
        impressions.push(`Formal upgrade: ${pattern.source} → ${replacement}`);
      }
    }
  }
  return { adjusted_body: adjusted.trim(), sent_impressions: impressions };
}

/**
 * @param {string} subject
 * @param {ToneCategory} tone
 * @param {boolean} urgency_detected
 * @returns {string}
 */
function adjust_subject_for_tone(subject, tone, urgency_detected) {
  if (tone === 'assertive' && urgency_detected && !subject.toLowerCase().match(/urgent|asap|priority/)) {
    return `[ACTION REQUIRED] ${subject}`;
  }
  return subject;
}

/**
 * @param {EmailContext} context
 * @returns {(ToneAdjustedDraft & { tone_analysis: ToneAnalysis })}
 */
function adjust_email_tone(context) {
  const sender_domain = context.sender_domain || context.sender.split('@')[1] || '';
  const thread_length = context.thread_length || 1;
  const thread_tone_history = context.thread_tone_history || [];
  const { sentiment_score, frustration_level, urgency_detected } = analyze_sentiment(context.body);
  const tone_analysis = classify_tone(context.body, context.subject, sentiment_score, frustration_level, urgency_detected, sender_domain, thread_length);

  let effective_tone = tone_analysis.primary_tone;
  if (thread_tone_history.length > 0) {
    const last_tone = thread_tone_history[thread_tone_history.length - 1];
    if (last_tone === 'empathetic' && frustration_level < 0.3) {
      effective_tone = 'professional';
    }
  }
  const { adjusted_body, sent_impressions } = apply_tone_adjustments(context.body, effective_tone);
  const adjusted_subject = adjust_subject_for_tone(context.subject, effective_tone, urgency_detected);
  return {
    tone_analysis, adjusted_body, adjusted_subject,
    opening_line: select_opening(effective_tone),
    closing_line: select_closing(effective_tone),
    tone_used: effective_tone, sent_impressions,
  };
}

/**
 * @typedef {Object} EmailContext
 * @property {string} subject
 * @property {string} body
 * @property {string} sender
 * @property {string} [sender_domain]
 * @property {number} [thread_length]
 * @property {ToneCategory[]} [thread_tone_history]
 */

module.exports = { adjust_email_tone, analyze_sentiment, classify_tone, apply_tone_adjustments, select_opening, select_closing };