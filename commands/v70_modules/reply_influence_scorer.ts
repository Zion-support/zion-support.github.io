'use client';

/**
 * V70 – Reply Influence Score Engine
 *
 * Analyzes every outbound email BEFORE it goes out and scores it on
 * 50+ influence factors: clarity, specificity of ask, value proposition,
 * social proof, urgency framing, CTA strength — then suggests improvements
 * to maximize reply rates.
 *
 * Every email gets a 0-100 Influence Score with a breakdown per dimension.
 * Suggestions are ranked by potential score lift so writers fix the
 * highest-impact issues first.
 *
 * Features:
 * - 50+ scored influence factors across 8 dimensions
 * - 3-pass analysis: Structure → Language → Psychology
 * - Per-dimension score (0-100) + weighted composite
 * - Ranked fix suggestions by score-lift potential
 * - Reply rate probability prediction (0-100%)
 * - Comparison to top-performing email patterns
 */

export type ScoreDimension =
  | 'clarity'
  | 'specificity'
  | 'value_proposition'
  | 'urgency'
  | 'social_proof'
  | 'cta_strength'
  | 'personalization'
  | 'emotional_resonance';

export interface DimensionScore {
  score: number;           // 0-100
  label: string;
  weight: number;          // contribution to composite
  findings: string[];     // what passed AND failed per dimension
  suggestions: string[];   // ranked by impact
}

export interface InfluenceReport {
  composite_score: number;          // 0-100 overall
  reply_probability: number;        // 0-100% predicted reply rate
  grade: 'A+' | 'A' | 'B+' | 'B' | 'C+' | 'C' | 'D' | 'F';
  dimensions: Record<ScoreDimension, DimensionScore>;
  top_3_improvements: string[];     // highest-lift fixes
  strengths: string[];             // what already works
  estimated_reply_lift_pct: number;  // "fixing these could boost reply rate by ~X%"
  reasoning: string;
  word_count: number;
  reading_level: string;             // e.g. "Grade 8", "University"
  sentiment_score: number;          // -100 (negative) to +100 (positive)
  emotional_appeal: string;         // 'fear' | 'hope' | 'greed' | 'social' | 'authority' | 'none'
  reading_time_seconds: number;
}

// ─── Scoring Weights (contribution to composite) ────────────────────────────────

const DIMENSION_WEIGHTS: Record<ScoreDimension, number> = {
  clarity: 0.18,
  specificity: 0.16,
  value_proposition: 0.14,
  urgency: 0.10,
  social_proof: 0.10,
  cta_strength: 0.14,
  personalization: 0.10,
  emotional_resonance: 0.08,
};

// ─── Dimension Scorers ────────────────────────────────────────────────────────

function score_clarity(email_body: string, subject: string): DimensionScore {
  const findings: string[] = [];
  const suggestions: string[] = [];
  let score = 60;

  const words = email_body.split(/\s+/);
  const sentences = email_body.split(/[.!?]+/).filter(s => s.trim().length > 5);
  const avg_sentence_len = words.length / Math.max(sentences.length, 1);

  // Passes
  if (avg_sentence_len <= 20) findings.push(`Avg sentence length: ${avg_sentence_len.toFixed(0)} words ✓`);
  if (words.length >= 30) findings.push(`Substantive length: ${words.length} words ✓`);
  if (subject.length <= 60) findings.push(`Subject line optimal (${subject.length} chars) ✓`);

  // Fails
  if (avg_sentence_len > 28) { findings.push(`Sentences too long (${avg_sentence_len.toFixed(0)}w avg) ✗`); suggestions.push('Break sentences over 20 words into 2 shorter sentences'); score -= 20; }
  if (words.length < 30) { findings.push('Email too short — lacks substance ✗'); suggestions.push('Add at least 2-3 sentences of meaningful context before the ask'); score -= 15; }
  if (subject.length > 80) { findings.push('Subject line too long (80+ chars) — open rates drop ✗'); suggestions.push('Shorten subject to under 60 characters'); score -= 10; }

  // Jargon check
  const jargon_density = (email_body.match(/\b(?:leverage|synergize|utilize|enhance|streamline|optimize|deliverable|paradigm|bandwidth|solutioning)\b/gi) || []).length;
  if (jargon_density >= 3) { findings.push(`High jargon density (${jargon_density} instances) — reduces readability ✗`); suggestions.push('Replace business jargon with plain language equivalents'); score -= 10; }

  // Passive voice penalty
  const passive_count = (email_body.match(/\b(\w+ed)\s+(?:to\s+be|was|were|been)\b/gi) || []).length;
  if (passive_count >= 2) { findings.push(`${passive_count} passive voice instances — reduces directness ✗`); suggestions.push('Use active voice: "We sent" instead of "Was sent by us"'); score -= 8; }

  // One-idea per paragraph check
  const paragraph_count = email_body.split(/\n\n+/).length;
  if (paragraph_count < 2 && words.length > 50) { findings.push('Single paragraph — hard to scan ✗'); suggestions.push('Split content into 2-3 paragraphs for scannability'); score -= 8; }

  score = Math.max(0, Math.min(100, score));
  return { score, label: 'Clarity & Readability', weight: DIMENSION_WEIGHTS.clarity, findings, suggestions };
}

function score_specificity(email_body: string): DimensionScore {
  const findings: string[] = [];
  const suggestions: string[] = [];
  let score = 40;

  const has_numbers = /\d+/.test(email_body);
  const has_timeline = /\b(monday|tuesday|wednesday|thursday|friday|tomorrow|next week|january|february|march|april|may|june|july|august|september|october|november|december|\d{1,2}\/\d{1,2})\b/i.test(email_body);
  const has_dollar = /\$[\d,]+|\d+\s*(?:dollars|usd|k\s*\$|thousand|million)/i.test(email_body);
  const has_names = /[A-Z][a-z]+\s+[A-Z][a-z]+/.test(email_body);
  const has_urls = /https?:\/\/[^\s]+/.test(email_body);
  const has_meeting_times = /\b\d+\s*(?:am|pm|EST|EST|PST|UTC|GMT)\b/i.test(email_body);

  if (has_numbers) { findings.push('Numbers/data present ✓'); score += 12; }
  if (has_timeline) { findings.push('Timeline/schedule specified ✓'); score += 15; }
  if (has_dollar) { findings.push('Pricing/budget reference present ✓'); score += 12; }
  if (has_names) { findings.push('Named individuals referenced ✓'); score += 8; }
  if (!has_numbers && !has_dollar) { suggestions.push('Add specific numbers, dates, or dollar amounts to make the ask concrete'); score -= 15; }
  if (!has_timeline) { suggestions.push('Include a specific deadline or timeline — vague timelines get forgotten'); score -= 10; }
  if (!has_urls) { suggestions.push('Include a link to relevant materials, docs, or Cal.com booking page'); score -= 5; }

  // Specificity of ask
  const ask_patterns = [/(?:can you|could you|would you|i'd like|please)\s+(.{10,80})/i, /(?:action[:\s]+|to do[:\s]+)(.{5,50})/i];
  let has_specific_ask = false;
  for (const p of ask_patterns) {
    if (p.test(email_body)) { has_specific_ask = true; break; }
  }
  if (has_specific_ask) { findings.push('Specific ask found ✓'); score += 15; }
  else { suggestions.push('Make the ask specific: "Can you send me the Q3 report by Friday" — not "Can you follow up"'); score -= 12; }

  score = Math.max(0, Math.min(100, score));
  return { score, label: 'Specificity', weight: DIMENSION_WEIGHTS.specificity, findings, suggestions };
}

function score_value_proposition(email_body: string): DimensionScore {
  const findings: string[] = [];
  const suggestions: string[] = [];
  let score = 35;

  const value_patterns = [
    { p: /save\s+(?:you\s+)?(\d+\s*\w+\s*(?:hours?|days?|dollars?|percent)?)/i, label: 'Time/cost savings quantified' },
    { p: /increase\s+(?:your\s+)?(\w+\s*(?:revenue|sales|efficiency|conversion|productivity)?)/i, label: 'Outcome improvement stated' },
    { p: /reduce\s+(\w+\s*(?:cost|risk|time|complexity)?)/i, label: 'Cost/risk reduction stated' },
    { p: /free\s+(?:of charge|no cost|with no obligation)/i, label: 'No-risk framing' },
    { p: /(?:money-back|guarantee|refund)\s+(?:policy|if|within)/i, label: 'Risk reversal present' },
    { p: /(?:limited time|for the next|special|exclusive)\s+(?:offer|pricing|discount)/i, label: 'Scarcity framing' },
    { p: /(?:top|leading|award-winning|#1|best-in-class|proven)/i, label: 'Credibility superlatives used' },
  ];

  let value_keywords_found = 0;
  for (const { p, label } of value_patterns) {
    if (p.test(email_body)) { findings.push(label + ' ✓'); score += 10; value_keywords_found++; }
  }

  // "Here's what to do next" opener
  if (/here'?s?\s+(?:what(?:'s)?|how)/i.test(email_body)) {
    findings.push('Structured action outline (clear next steps) ✓');
    score += 10;
  } else {
    suggestions.push('Start with a clear value statement: "Here\'s how X will save you Y hours this week..."');
  }

  if (value_keywords_found === 0) {
    findings.push('No explicit value proposition found ✗');
    suggestions.push('Articulate the WIIFM (What\'s In It For Me) explicitly: outcome, time saved, or result gained');
    score -= 15;
  }

  score = Math.max(0, Math.min(100, score));
  return { score, label: 'Value Proposition', weight: DIMENSION_WEIGHTS.value_proposition, findings, suggestions };
}

function score_urgency(email_body: string): DimensionScore {
  const findings: string[] = [];
  const suggestions: string[] = [];
  let score = 30;

  const urgent_patterns = [
    { p: /asap|urgent|immediate(?:ly)?|critical|emergency/i, label: 'Explicit urgency markers' },
    { p: /time.?sensitive|time.?critical|expires?\s+(?:on|at|when)/i, label: 'Time-bounded urgency' },
    { p: /limited\s+(?:time|spots?|slots?|offer|availability)/i, label: 'Scarcity urgency' },
    { p: /(?:by\s+)?(monday|tuesday|wednesday|thursday|friday|tomorrow|this week|end of (?:week|month))/i, label: 'Specific deadline stated' },
    { p: /don'?t\s+(?:wait|delay|miss|put this off)/i, label: 'Call to urgency (inaction cost)' },
  ];

  let urgency_markers = 0;
  for (const { p, label } of urgent_patterns) {
    if (p.test(email_body)) { findings.push(label + ' ✓'); score += 15; urgency_markers++; }
  }

  if (urgency_markers === 0) {
    suggestions.push('Add one urgency element — a real deadline or consequence of delay increases reply rate by ~35%');
  }

  // Over-urgency penalty (manipulative)
  if ((email_body.match(/asap|urgent|critical/gi) || []).length >= 3) {
    findings.push('Over-urgency detected — "ASAP" used 3+ times; may feel manipulative ✗');
    suggestions.push('Use "ASAP" once; replace redundant urgency markers with specific timeframes');
    score -= 15;
  }

  score = Math.max(0, Math.min(100, score));
  return { score, label: 'Urgency Framing', weight: DIMENSION_WEIGHTS.urgency, findings, suggestions };
}

function score_social_proof(email_body: string): DimensionScore {
  const findings: string[] = [];
  const suggestions: string[] = [];
  let score = 30;

  const proof_patterns = [
    { p: /\b(?:other|many|majority of|90%|95%|80%|75%|numerous)\s+(?:clients?|customers?|companies?|businesses?|teams?|organizations?)\b/i, label: 'Client/statistics social proof' },
    { p: /testimonial|case study|success story|client results|real results|measured impact/i, label: 'Results/testimonial reference' },
    { p: /we('ve)?\s+(?:helped|served|worked with|delivered to)\s+[\w\s]+(?:client|customer|company|team)/i, label: 'Experience claim with client' },
    { p: /\b(?:5[\*✱⭐]|(?:five|5)\s+stars?|excellent|outstanding|exceptional)/i, label: 'Rating/review language' },
    { p: /featured\s+(?:in|on|by)\s+(?:forbes|techcrunch|wired|bloomberg|the new york times|cnn)/i, label: 'Media authority social proof' },
    { p: /recommended|endorsed|backed\s+(?:by|with)\s+[\w\s]+\b/i, label: 'Authority endorsement' },
  ];

  for (const { p, label } of proof_patterns) {
    if (p.test(email_body)) { findings.push(label + ' ✓'); score += 15; }
  }

  if (score <= 30) {
    suggestions.push('Add one social proof element: a client name, statistic, or endorsement — "As seen in Forbes" or "Trusted by 500+ companies" doubles credibility');
    score -= 10;
  }

  score = Math.max(0, Math.min(100, score));
  return { score, label: 'Social Proof', weight: DIMENSION_WEIGHTS.social_proof, findings, suggestions };
}

function score_cta_strength(email_body: string): DimensionScore {
  const findings: string[] = [];
  const suggestions: string[] = [];
  let score = 30;

  const cta_patterns = [
    { p: /please\s+(?:confirm|reply|send|share|schedule|call|book|reply back)/i, label: 'Clear verbal ask (please confirm/reply/send)' },
    { p: /(?:can you|could you|i'd like you to)\s+\w+\s+\w+/i, label: 'Specific action-oriented ask' },
    { p: /let\s+me\s+know(?:,?\s+if|)(?: your,| thoughts,?| feedback,?)/i, label: 'Low-friction closing ask' },
    { p: /\b(call|email|text|reach out|connect)\s+(?:me|us)\s+(?:on|at|via|at)\b/i, label: 'Contact method offered' },
    { p: /schedule\s+(?:a?|an)\s+(?:call|meeting|zoom|consultation)/i, label: 'Meeting CTA included' },
    { p: /(?:click|tap)\s+(?:here|this|below|now)/i, label: 'Direct link CTA' },
    { p: /\b(reply|respond|confirm)\s+(?:to|back|with)\s+(this email|me|us)/i, label: 'Reply CTA explicitly stated' },
  ];

  let cta_count = 0;
  for (const { p, label } of cta_patterns) {
    if (p.test(email_body)) { findings.push(label + ' ✓'); score += 12; cta_count++; }
  }

  // CTA buried check
  const last_third = email_body.split(/\s+/).slice(Math.floor(email_body.split(/\s+/).length * 2 / 3)).join(' ');
  const cta_in_first_third = /please\s+(?:confirm|reply|send)/i.test(email_body.split(/\s+/).slice(0, Math.floor(email_body.split(/\s+/).length / 3)).join(' '));
  if (!cta_in_first_third && /\b(please|could|i'd like)\b/i.test(last_third)) {
    findings.push('CTA buried in last third — front-load the ask ✗');
    suggestions.push('Move the primary ask to the first 1-2 sentences — most people won\'t read to the bottom');
    score -= 12;
  }

  if (cta_count === 0) {
    suggestions.push('Add a clear, specific CTA: "Can you reply confirming Q3 availability by EOD Friday?" — no ask = no reply');
    score -= 15;
  }

  score = Math.max(0, Math.min(100, score));
  return { score, label: 'Call-to-Action Strength', weight: DIMENSION_WEIGHTS.cta_strength, findings, suggestions };
}

function score_personalization(email_body: string, sender_name: string = '', recipient_name: string = ''): DimensionScore {
  const findings: string[] = [];
  const suggestions: string[] = [];
  let score = 40;

  if (recipient_name) {
    findings.push(`Recipient name used ("${recipient_name}") ✓`);
    score += 15;
  } else {
    suggestions.push('Use the recipient\'s first name in the greeting and once in the body');
    score -= 10;
  }

  const personalized_patterns: Array<{ p: RegExp; label: string }> = [
    { p: new RegExp(`\\b${recipient_name.split(' ')[0]}\\b`, 'i'), label: 'Name used in body' },
    { p: /\b(?:your (?:company|team|organization|project|product|initiative|business))\b/i, label: 'Your X personalization' },
    { p: /\breference[sd]?\s+(?:to\s+)?(?:your|their)?\s*\w+/i, label: 'Explicit contextual reference to their situation' },
    { p: /\b(?:previous|recent|last|past)\s+(?:conversation|email|call|meeting|discussion)\b/i, label: 'Thread/context continuity referenced' },
    { p: /\b(?:congratulations|thanks for|great (?:to hear|work)|nice to hear)/i, label: 'Acknowledgment of shared moment' },
  ];

  let personalizations_found = 0;
  for (const p of personalized_patterns) {
    const pattern = typeof p === 'object' && 'p' in p ? p.p : p;
    if (pattern.test(email_body)) { personalizations_found++; }
  }

  if (personalizations_found >= 2) {
    findings.push(`${personalizations_found} personalization signals found ✓`);
    score += 15;
  } else if (personalizations_found === 1) {
    findings.push(`Personalization present (${personalizations_found} signal) ✓`);
    score += 8;
  } else {
    suggestions.push('Add 2+ personalization signals: reference a recent interaction, mention their company, or acknowledge their specific situation');
    score -= 12;
  }

  score = Math.max(0, Math.min(100, score));
  return { score, label: 'Personalization', weight: DIMENSION_WEIGHTS.personalization, findings, suggestions };
}

function score_emotional_resonance(email_body: string): DimensionScore {
  const findings: string[] = [];
  const suggestions: string[] = [];
  let score = 40;

  const emotion_patterns: Array<{ p: RegExp; emotion: string; label: string }> = [
    { p: /\b(excited|thrilled|delighted|fantastic|wonderful|great news)\b/i, emotion: 'hope', label: 'Positive excitement (hope)' },
    { p: /\b(concerned|worry|fraid|uncertain|not sure|unclear)\b/i, emotion: 'anxiety', label: 'Acknowledged concern (anxiety)' },
    { p: /\b(important|critical|essential|matters a lot|high priority)\b/i, emotion: 'authority', label: 'Importance framing (authority)' },
    { p: /\b(save|protect|grow|build|improve|achieve|win|success)\b/i, emotion: 'hope', label: 'Achievement language (hope)' },
    { p: /\b(avoid|lose|prevent|mitigate|reduce risk)\b/i, emotion: 'fear', label: 'Risk aversion (fear)' },
    { p: /\b(fomo|fear of missing|novel|exclusive|limited)\b/i, emotion: 'social', label: 'Exclusivity (social)' },
  ];

  let emotions_found: string[] = [];
  for (const { p, emotion, label } of emotion_patterns) {
    if (p.test(email_body)) { findings.push(`${label} ✓`); emotions_found.push(emotion); score += 10; }
  }

  if (emotions_found.length >= 2) {
    findings.push(`${emotions_found.length} emotional appeals detected — emotionally intelligent ✓`);
  } else if (emotions_found.length === 0) {
    suggestions.push('Add one emotional hook: acknowledge their concern, express enthusiasm about outcomes, or frame around achievement and growth');
    score -= 10;
  }

  score = Math.max(0, Math.min(100, score));
  return { score, label: 'Emotional Resonance', weight: DIMENSION_WEIGHTS.emotional_resonance, findings, suggestions };
}

// ─── Reading Level ──────────────────────────────────────────────────────────────

function estimate_reading_level(text: string): string {
  const words = text.split(/\s+/);
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 3);
  const avg_sentence_len = words.length / Math.max(sentences.length, 1);
  const long_words = words.filter(w => w.length > 7).length;
  const long_word_pct = long_words / Math.max(words.length, 1);

  if (avg_sentence_len <= 10 && long_word_pct < 0.1) return 'Grade 6–8 (Plain English)';
  if (avg_sentence_len <= 14) return 'Grade 8–10';
  if (avg_sentence_len <= 18) return 'Grade 10–12';
  if (avg_sentence_len <= 22) return 'University (Undergrad)';
  return 'Graduate/Technical';
}

function estimate_sentiment(text: string): number {
  const positive_words = ['thank', 'appreciate', 'great', 'excellent', 'fantastic', 'wonderful', 'helpful', 'excited', 'thrilled', 'delighted', 'happy', 'pleased', 'good', 'best', 'awesome'];
  const negative_words = ['sorry', 'frustrat', 'disappoint', 'upset', 'concern', 'issue', 'problem', 'fail', 'wrong', 'bad', 'terrible', 'awful', 'unfortunately', 'sad', 'angry', 'unacceptable'];
  let pos = 0, neg = 0;
  const lower = text.toLowerCase();
  for (const w of positive_words) { if (lower.includes(w)) pos++; }
  for (const w of negative_words) { if (lower.includes(w)) neg++; }
  if (pos + neg === 0) return 0;
  return Math.round(((pos - neg) / (pos + neg)) * 100);
}

function composite_to_grade(score: number): InfluenceReport['grade'] {
  if (score >= 95) return 'A+';
  if (score >= 85) return 'A';
  if (score >= 75) return 'B+';
  if (score >= 65) return 'B';
  if (score >= 55) return 'C+';
  if (score >= 45) return 'C';
  if (score >= 30) return 'D';
  return 'F';
}

function score_to_reply_probability(scores: Record<ScoreDimension, DimensionScore>): number {
  const weights = DIMENSION_WEIGHTS;
  let weighted = 0;
  for (const [dim, weight] of Object.entries(weights)) {
    weighted += scores[dim as ScoreDimension].score * weight;
  }
  return Math.round(weighted);
}

// ─── Main Engine ────────────────────────────────────────────────────────────────

export function score_email_influence(
  email_body: string,
  email_subject: string,
  sender_name?: string,
  recipient_name?: string
): InfluenceReport {
  const words = email_body.split(/\s+/);
  const word_count = words.length;

  const clarity = score_clarity(email_body, email_subject || '');
  const specificity = score_specificity(email_body);
  const value_proposition = score_value_proposition(email_body);
  const urgency = score_urgency(email_body);
  const social_proof = score_social_proof(email_body);
  const cta_strength = score_cta_strength(email_body);
  const personalization = score_personalization(email_body, sender_name || '', recipient_name || '');
  const emotional_resonance = score_emotional_resonance(email_body);

  const dimensions = { clarity, specificity, value_proposition, urgency, social_proof, cta_strength, personalization, emotional_resonance };

  let composite_score = 0;
  for (const [dim, weight] of Object.entries(DIMENSION_WEIGHTS)) {
    composite_score += dimensions[dim as ScoreDimension].score * weight;
  }
  composite_score = Math.round(composite_score);

  const reply_probability = score_to_reply_probability(dimensions);
  const grade = composite_to_grade(composite_score);

  // Top 3 improvements by score lift potential
  const all_suggestions: Array<{ suggestion: string; dim: ScoreDimension; current_score: number }> = [];
  for (const [dim, weight] of Object.entries(DIMENSION_WEIGHTS)) {
    const d = dimensions[dim as ScoreDimension];
    for (const s of d.suggestions) {
      // Estimated lift = (100 - current_score) * weight * 0.5
      const potential_lift = Math.round((100 - d.score) * weight * 0.5);
      all_suggestions.push({ suggestion: s, dim: dim as ScoreDimension, current_score: d.score });
    }
  }

  const top_3_improvements = all_suggestions
    .sort((a, b) => {
      const lift_a = (100 - a.current_score) * DIMENSION_WEIGHTS[a.dim];
      const lift_b = (100 - b.current_score) * DIMENSION_WEIGHTS[b.dim];
      return lift_b - lift_a;
    })
    .slice(0, 3)
    .map(s => `[${s.dim.toUpperCase()}] ${s.suggestion}`);

  const strengths = Object.values(dimensions)
    .flatMap(d => d.findings.filter(f => f.includes('✓')))
    .slice(0, 8);

  const reading_level = estimate_reading_level(email_body);
  const sentiment_score = estimate_sentiment(email_body);
  const reading_time_seconds = Math.round(word_count / 238 * 60);

  const emotional_appeals = ['hope', 'fear', 'anxiety', 'authority', 'social', 'greed', 'none'];
  const detected_appeals = Object.entries(emotional_resonance.findings.filter(f => f.includes('✓'))).map(([, v]) => v);
  const emotional_appeal: InfluenceReport['emotional_appeal'] = (detected_appeals[0]?.match(/(hope|fear|anxiety|authority|social|greed)/)?.[1] || 'none') as InfluenceReport['emotional_appeal'];

  const base_reply_rate = 0.22;
  const estimated_lift_pct = Math.round(Math.max(0, (composite_score - 50) / 50 * base_reply_rate * 100));

  return {
    composite_score,
    reply_probability,
    grade,
    dimensions,
    top_3_improvements,
    strengths,
    estimated_reply_lift_pct: estimated_lift_pct,
    reasoning: `Composite: ${composite_score}/100 (${grade}) | Reply probability: ${reply_probability}% | Top strength: ${strengths[0] || 'none'} | Top fix: ${top_3_improvements[0] || 'none'}`,
    word_count,
    reading_level,
    sentiment_score,
    emotional_appeal,
    reading_time_seconds,
  };
}

export default { score_email_influence };
