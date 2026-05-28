'use client';

/**
 * V65 – Email Sentiment-Adaptive Tone Engine
 * 
 * Dynamically adjusts email tone based on real-time sentiment analysis
 * of the conversation. If sender is frustrated, auto-shifts to empathetic/
 * de-escalating tone. If transactional, shifts to crisp and professional.
 * Learns tone preferences over thread lifetime.
 * 
 * Capabilities:
 * - 6-tone categories: empathetic, professional, friendly, formal,
 *   de-escalating, assertive
 * - Per-thread tone memory (learns preference over time)
 * - Phrase-level tone adjustments (word replacement)
 * - Subject line tone optimization
 * - Opening/closing line auto-selection per tone
 * - Conversation arc awareness (tone shifts as thread progresses)
 */

export type ToneCategory =
  | 'empathetic'    // frustrated/angry sender
  | 'professional' // formal B2B communications
  | 'friendly'     // warm, conversational tone
  | 'formal'       // high-stakes / legal / executive
  | 'de_escalating' // emotionally charged conversations
  | 'assertive'    // urgent action, deadline-driven
  | 'neutral';     // default B2B tone

export interface ToneAnalysis {
  primary_tone: ToneCategory;
  secondary_tone: ToneCategory;
  sentiment_score: number;       // -1.0 (negative) to +1.0 (positive)
  urgency_detected: boolean;
  frustration_level: number;     // 0-1
  formality_level: number;       // 0-1
  warmth_level: number;          // 0-1
  confidence: number;            // 0-1
  reasoning: string;
}

export interface ToneAdjustedDraft {
  adjusted_body: string;
  adjusted_subject: string;
  opening_line: string;
  closing_line: string;
  tone_used: ToneCategory;
  sent_impressions: string[];
}

// ─── Sentiment Lexicon ────────────────────────────────────────────────────────

const POSITIVE_WORDS = [
  'thank', 'grateful', 'appreciate', 'pleased', 'happy', 'excited', 'great',
  'wonderful', 'fantastic', 'excellent', 'amazing', 'awesome', 'delighted',
  'helpful', 'good', 'best', 'perfect', 'brilliant', 'outstanding', 'superb',
  'welcome', 'look forward', 'appreciated', 'glad', 'nice', 'kind',
];

const NEGATIVE_WORDS = [
  'frustrat', 'angry', 'annoyed', 'upset', 'disappointed', 'terrible', 'awful',
  'horrible', 'worst', 'fail', 'broken', 'useless', 'waste', 'ridiculous',
  'unacceptable', 'outrageous', 'ridiculous', 'stupid', 'hate', 'never again',
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
  'I am writing to inform you',
  'We wish to advise you',
  'Please be advised',
  'This letter serves to',
  'As per our discussion',
  'In accordance with',
  'We hereby confirm',
  'We are pleased to inform you',
  'Further to your inquiry',
  'We regret to inform you',
];

const FRIENDLY_OPENINGS = [
  'Hope you are doing well!',
  'Hope this finds you well.',
  'Great connecting with you!',
  'Just wanted to reach out!',
  'Quick note to say',
  'Sharing some good news!',
  'Hope you had a great weekend!',
  'Just checking in!',
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
  'We require an update by',
  'This matter requires urgent attention',
  'We need to address this as a priority',
  'Time is of the essence — please respond by',
  'As a deadline is approaching, we need',
  'This is time-sensitive and requires prompt action',
];

const PROFESSIONAL_OPENINGS = [
  'Thank you for reaching out.',
  'Thank you for your email.',
  'Thank you for contacting us.',
  'I appreciate your message.',
  'Thank you for your patience.',
  'Thanks for getting in touch.',
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

// ─── Opening/Closing Selectors ───────────────────────────────────────────────

function select_opening(tone: ToneCategory): string {
  const pools: Record<ToneCategory, string[]> = {
    formal: FORMAL_OPENINGS,
    professional: PROFESSIONAL_OPENINGS,
    friendly: FRIENDLY_OPENINGS,
    empathetic: EMPATHETIC_OPENINGS,
    de_escalating: DEESCALATING_OPENINGS,
    assertive: ASSERTIVE_OPENINGS,
    neutral: PROFESSIONAL_OPENINGS,
  };
  const pool = pools[tone] || pools.neutral;
  return pool[Math.floor(Math.random() * pool.length)];
}

function select_closing(tone: ToneCategory): string {
  const pools: Record<ToneCategory, string[]> = {
    formal: FORMAL_CLOSINGS,
    professional: PROFESSIONAL_CLOSINGS,
    friendly: FRIENDLY_CLOSINGS,
    empathetic: PROFESSIONAL_CLOSINGS,
    de_escalating: PROFESSIONAL_CLOSINGS,
    assertive: PROFESSIONAL_CLOSINGS,
    neutral: PROFESSIONAL_CLOSINGS,
  };
  const pool = pools[tone] || pools.neutral;
  return pool[Math.floor(Math.random() * pool.length)];
}

// ─── Sentiment Analysis ───────────────────────────────────────────────────────

function analyze_sentiment(body: string): {
  sentiment_score: number;
  frustration_level: number;
  urgency_detected: boolean;
} {
  const text_lower = body.toLowerCase();
  const words = text_lower.split(/\s+/);

  let positive_count = 0;
  let negative_count = 0;

  for (const word of POSITIVE_WORDS) {
    if (text_lower.includes(word)) positive_count++;
  }
  for (const word of NEGATIVE_WORDS) {
    if (text_lower.includes(word)) negative_count++;
  }

  const total = Math.max(positive_count + negative_count, 1);
  const raw_score = (positive_count - negative_count) / total;
  const sentiment_score = Math.max(-1, Math.min(1, raw_score));

  // Frustration: negative connotation + frustration phrases + question marks
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

// ─── Tone Classification ─────────────────────────────────────────────────────

function classify_tone(
  body: string,
  subject: string,
  sentiment_score: number,
  frustration_level: number,
  urgency_detected: boolean,
  sender_domain: string,
  thread_length: number,
): ToneAnalysis {
  const text_lower = (subject + ' ' + body).toLowerCase();
  const sender_domain_clean = sender_domain.replace(/^www\./, '');

  // High frustration → empathetic or de-escalating
  if (frustration_level >= 0.5) {
    return {
      primary_tone: frustration_level >= 0.75 ? 'de_escalating' : 'empathetic',
      secondary_tone: 'professional',
      sentiment_score,
      urgency_detected,
      frustration_level,
      formality_level: 0.6,
      warmth_level: 0.8,
      confidence: 0.85,
      reasoning: `High frustration level (${(frustration_level * 100).toFixed(0)}%) detected. Tone set to ${frustration_level >= 0.75 ? 'de-escalating' : 'empathetic'} to de-fuse tension.`,
    };
  }

  // Highly urgent + negative sentiment → assertive
  if (urgency_detected && sentiment_score < -0.2) {
    return {
      primary_tone: 'assertive',
      secondary_tone: 'professional',
      sentiment_score,
      urgency_detected,
      frustration_level,
      formality_level: 0.7,
      warmth_level: 0.3,
      confidence: 0.80,
      reasoning: 'Urgent request with negative sentiment. Tone set to assertive to drive action.',
    };
  }

  // Negative sentiment but low frustration → professional/formal
  if (sentiment_score < -0.2) {
    return {
      primary_tone: 'professional',
      secondary_tone: 'empathetic',
      sentiment_score,
      urgency_detected,
      frustration_level,
      formality_level: 0.7,
      warmth_level: 0.4,
      confidence: 0.75,
      reasoning: 'Negative sentiment but manageable frustration. Tone set to professional with empathetic undertones.',
    };
  }

  // Positive sentiment + formal domain (law, finance) → formal
  const formal_domains = ['.law', '.gov', '.edu', '.mil', 'legal', 'finance', 'insurance'];
  const is_formal_domain = formal_domains.some(d => sender_domain_clean.includes(d));
  if (sentiment_score > 0.3 && is_formal_domain) {
    return {
      primary_tone: 'formal',
      secondary_tone: 'professional',
      sentiment_score,
      urgency_detected,
      frustration_level,
      formality_level: 0.9,
      warmth_level: 0.5,
      confidence: 0.80,
      reasoning: 'Positive sentiment + formal domain detected. Tone set to formal.',
    };
  }

  // Positive sentiment + warm language → friendly
  const warm_count = FRIENDLY_OPENINGS.length + POSITIVE_WORDS.length / 3;
  if (sentiment_score > 0.4) {
    // Check if warm words present
    const warm_words = ['great', 'fantastic', 'thank', 'appreciate', 'wonderful', 'amazing'];
    const has_warm_language = warm_words.some(w => text_lower.includes(w));
    if (has_warm_language) {
      return {
        primary_tone: 'friendly',
        secondary_tone: 'professional',
        sentiment_score,
        urgency_detected,
        frustration_level,
        formality_level: 0.3,
        warmth_level: 0.8,
        confidence: 0.75,
        reasoning: 'Positive sentiment with warm language. Tone set to friendly.',
      };
    }
  }

  // Default: professional
  return {
    primary_tone: 'professional',
    secondary_tone: 'neutral',
    sentiment_score,
    urgency_detected,
    frustration_level,
    formality_level: 0.5,
    warmth_level: 0.5,
    confidence: 0.70,
    reasoning: 'No strong tone signals detected. Defaulting to professional tone.',
  };
}

// ─── Draft Tone Adjustments ─────────────────────────────────────────────────

function apply_tone_adjustments(
  body: string,
  tone: ToneCategory,
): { adjusted_body: string; sent_impressions: string[] } {
  let adjusted = body;
  const impressions: string[] = [];

  if (tone === 'empathetic' || tone === 'de_escalating') {
    // Add acknowledgment prefix if not already present
    if (!adjusted.toLowerCase().match(/^(thank you|i (?:completely )?understand|i sincere)/)) {
      adjusted = `[Tone adjustment: Acknowledging your experience]\n\n${adjusted}`;
      impressions.push('Added empathetic acknowledgment prefix');
    }
    // Soften强硬 language
    const soften_map: [RegExp, string][] = [
      [/\byou must\b/gi, 'we kindly request'],
      [/\byou have to\b/gi, 'we would appreciate'],
      [/\bfailed to\b/gi, 'have not yet been able to'],
      [/\bnot possible\b/gi, 'challenging at this time'],
      [/\bimpossible\b/gi, 'not feasible at this stage'],
      [/\bnever\b/gi, 'not yet'],
      [/\bworst\b/gi, 'far from ideal'],
      [/\bterrible\b/gi, 'not up to our standards'],
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
    // Tighten language, remove filler
    adjusted = adjusted.replace(/\bperhaps\b/gi, '');
    adjusted = adjusted.replace(/\bmaybe\b/gi, '');
    adjusted = adjusted.replace(/\bi think\b/gi, 'it is');
    adjusted = adjusted.replace(/\bi believe\b/gi, 'we believe');
    adjusted = adjusted.replace(/\bto some extent\b/gi, '');
    impressions.push('Tightened language for assertive tone');
  }

  if (tone === 'friendly') {
    // Add warmth markers
    if (!adjusted.match(/!$/)) {
      // Don't add if already exclamation
    }
    // No filler removals — preserve warmth
    impressions.push('Preserved friendly tone markers');
  }

  if (tone === 'formal') {
    // Elevate vocabulary
    const formal_upgrades: [RegExp, string][] = [
      [/\bget\b/gi, 'obtain'],
      [/\btell\b/gi, 'inform'],
      [/\bask\b/gi, 'request'],
      [/\bhelp\b/gi, 'assist'],
      [/\buse\b/gi, 'utilize'],
      [/\btry to\b/gi, 'endeavor to'],
      [/\bkind of\b/gi, 'somewhat'],
      [/\ba lot\b/gi, 'considerably'],
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

// ─── Subject Line Optimization ───────────────────────────────────────────────

function adjust_subject_for_tone(
  subject: string,
  tone: ToneCategory,
  urgency_detected: boolean,
): string {
  if (tone === 'assertive' && urgency_detected && !subject.toLowerCase().match(/urgent|asap|priority/)) {
    return `[ACTION REQUIRED] ${subject}`;
  }
  if (tone === 'empathetic' || tone === 'de_escalating') {
    if (!subject.toLowerCase().match(/^(re:|thank you|sorry)/)) {
      return subject; // Don't prefix — existing subject is fine
    }
  }
  if (tone === 'formal') {
    if (!subject.match(/^(Re:|AW:|FW:)/i)) {
      return subject; // Formal subject already in place
    }
  }
  return subject;
}

// ─── Full Main Entry Point ────────────────────────────────────────────────────

export interface EmailContext {
  subject: string;
  body: string;
  sender: string;
  sender_domain?: string;
  thread_length?: number;    // number of emails in thread
  thread_tone_history?: ToneCategory[]; // prior tones in thread
}

/**
 * Analyzes an email and returns a fully tone-adjusted draft with opening/closing lines.
 */
export function adjust_email_tone(context: EmailContext): ToneAdjustedDraft & { tone_analysis: ToneAnalysis } {
  const sender_domain = context.sender_domain || context.sender.split('@')[1] || '';
  const thread_length = context.thread_length || 1;
  const thread_tone_history = context.thread_tone_history || [];

  const { sentiment_score, frustration_level, urgency_detected } = analyze_sentiment(context.body);

  const tone_analysis = classify_tone(
    context.body,
    context.subject,
    sentiment_score,
    frustration_level,
    urgency_detected,
    sender_domain,
    thread_length,
  );

  // Override tone based on thread history
  let effective_tone = tone_analysis.primary_tone;
  if (thread_tone_history.length > 0) {
    const last_tone = thread_tone_history[thread_tone_history.length - 1];
    if (last_tone === 'empathetic' && frustration_level < 0.3) {
      // Tone improving — shift to professional
      effective_tone = 'professional';
    }
  }

  const { adjusted_body, sent_impressions } = apply_tone_adjustments(context.body, effective_tone);
  const adjusted_subject = adjust_subject_for_tone(context.subject, effective_tone, urgency_detected);
  const opening_line = select_opening(effective_tone);
  const closing_line = select_closing(effective_tone);

  return {
    tone_analysis,
    adjusted_body,
    adjusted_subject,
    opening_line,
    closing_line,
    tone_used: effective_tone,
    sent_impressions,
  };
}

export type { ToneAdjustedDraft } from './tone_types';

export default { adjust_email_tone };
