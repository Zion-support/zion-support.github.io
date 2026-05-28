/**
 * V71 – Node.js Worker Bridge: node_wrapper.mjs
 * 
 * Standalone Node.js module that embeds rules from:
 *   - V65: sentiment_tone_engine (tone analysis + adjustment)
 *   - V67: cross_language_reply_engine (language detection + translation hints)
 *   - V64: email_auto_categorizer (email categorization)
 * 
 * JSON I/O via stdin/stdout. Accepts {id, method, params} objects,
 * outputs {id, result} or {id, error}. Falls back to error result on exceptions.
 * 
 * Usage: node node_wrapper.mjs < input.json
 */

const MODULE_VERSION = 'v71';

// ─── V65: Sentiment Tone Engine (ported from TypeScript) ───────────────────────

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

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function analyzeSentiment(body) {
  const text = body.toLowerCase();
  let pos = 0, neg = 0;
  for (const w of POSITIVE_WORDS) { if (text.includes(w)) pos++; }
  for (const w of NEGATIVE_WORDS) { if (text.includes(w)) neg++; }
  const total = Math.max(pos + neg, 1);
  const sentiment_score = Math.max(-1, Math.min(1, (pos - neg) / total));

  let frustration_level = 0;
  for (const p of FRUSTRATION_PHRASES) { if (text.includes(p)) frustration_level += 0.3; }
  frustration_level += neg * 0.1;
  if (text.includes('?')) frustration_level += 0.1;
  const qCount = (text.match(/\?/g) || []).length;
  if (qCount >= 3) frustration_level += 0.2;
  frustration_level = Math.min(1, frustration_level);

  const urgency_detected = URGENCY_PHRASES.some(p => text.includes(p));
  return { sentiment_score, frustration_level, urgency_detected };
}

function classifyTone(body, subject, sentiment_score, frustration_level, urgency_detected, sender_domain, thread_length) {
  const text = (subject + ' ' + body).toLowerCase();
  const cleanDomain = sender_domain.replace(/^www\./, '');

  if (frustration_level >= 0.5) {
    return {
      primary_tone: frustration_level >= 0.75 ? 'de_escalating' : 'empathetic',
      secondary_tone: 'professional', sentiment_score, urgency_detected,
      frustration_level, formality_level: 0.6, warmth_level: 0.8,
      confidence: 0.85,
      reasoning: `High frustration (${(frustration_level*100).toFixed(0)}%). Tone → ${frustration_level >= 0.75 ? 'de-escalating' : 'empathetic'}.`,
    };
  }
  if (urgency_detected && sentiment_score < -0.2) {
    return {
      primary_tone: 'assertive', secondary_tone: 'professional', sentiment_score,
      urgency_detected, frustration_level, formality_level: 0.7, warmth_level: 0.3,
      confidence: 0.80, reasoning: 'Urgent + negative → assertive tone.',
    };
  }
  if (sentiment_score < -0.2) {
    return {
      primary_tone: 'professional', secondary_tone: 'empathetic', sentiment_score,
      urgency_detected, frustration_level, formality_level: 0.7, warmth_level: 0.4,
      confidence: 0.75, reasoning: 'Negative but manageable → professional.',
    };
  }
  const formalDomains = ['.law', '.gov', '.edu', '.mil', 'legal', 'finance', 'insurance'];
  const isFormal = formalDomains.some(d => cleanDomain.includes(d));
  if (sentiment_score > 0.3 && isFormal) {
    return {
      primary_tone: 'formal', secondary_tone: 'professional', sentiment_score,
      urgency_detected, frustration_level, formality_level: 0.9, warmth_level: 0.5,
      confidence: 0.80, reasoning: 'Positive + formal domain → formal.',
    };
  }
  if (sentiment_score > 0.4) {
    const warmWords = ['great', 'fantastic', 'thank', 'appreciate', 'wonderful', 'amazing'];
    if (warmWords.some(w => text.includes(w))) {
      return {
        primary_tone: 'friendly', secondary_tone: 'professional', sentiment_score,
        urgency_detected, frustration_level, formality_level: 0.3, warmth_level: 0.8,
        confidence: 0.75, reasoning: 'Positive + warm language → friendly.',
      };
    }
  }
  return {
    primary_tone: 'professional', secondary_tone: 'neutral', sentiment_score,
    urgency_detected, frustration_level, formality_level: 0.5, warmth_level: 0.5,
    confidence: 0.70, reasoning: 'Default → professional tone.',
  };
}

function applyToneAdjustments(body, tone) {
  let adjusted = body;
  const impressions = [];
  const tonePools = {
    formal: FORMAL_OPENINGS, professional: PROFESSIONAL_OPENINGS,
    friendly: FRIENDLY_OPENINGS, empathetic: EMPATHETIC_OPENINGS,
    de_escalating: DEESCALATING_OPENINGS, assertive: ASSERTIVE_OPENINGS,
    neutral: PROFESSIONAL_OPENINGS,
  };
  const closingPools = {
    formal: FORMAL_CLOSINGS, professional: PROFESSIONAL_CLOSINGS,
    friendly: FRIENDLY_CLOSINGS, empathetic: PROFESSIONAL_CLOSINGS,
    de_escalating: PROFESSIONAL_CLOSINGS, assertive: PROFESSIONAL_CLOSINGS,
    neutral: PROFESSIONAL_CLOSINGS,
  };

  if (tone === 'empathetic' || tone === 'de_escalating') {
    if (!adjusted.toLowerCase().match(/^(thank you|i (?:completely )?understand|i sincere)/)) {
      adjusted = `[Tone adjustment: Acknowledging your experience]\n\n${adjusted}`;
      impressions.push('Added empathetic acknowledgment prefix');
    }
    const softenMap = [
      [/\byou must\b/gi, 'we kindly request'], [/\byou have to\b/gi, 'we would appreciate'],
      [/\bfailed to\b/gi, 'have not yet been able to'], [/\bnot possible\b/gi, 'challenging at this time'],
      [/\bimpossible\b/gi, 'not feasible at this stage'], [/\bnever\b/gi, 'not yet'],
      [/\bworst\b/gi, 'far from ideal'], [/\bterrible\b/gi, 'not up to our standards'],
      [/\bcomplaint\b/gi, 'feedback'],
    ];
    for (const [pat, repl] of softenMap) {
      if (pat.test(adjusted)) { adjusted = adjusted.replace(pat, repl); impressions.push(`Softened: "${pat.source}" → "${repl}"`); }
    }
  }
  if (tone === 'assertive') {
    adjusted = adjusted.replace(/\bperhaps\b/gi, '').replace(/\bmaybe\b/gi, '');
    adjusted = adjusted.replace(/\bi think\b/gi, 'it is').replace(/\bi believe\b/gi, 'we believe');
    adjusted = adjusted.replace(/\bto some extent\b/gi, '');
    impressions.push('Tightened language for assertive tone');
  }
  if (tone === 'formal') {
    const formalUpgrades = [
      [/\bget\b/gi, 'obtain'], [/\btell\b/gi, 'inform'], [/\bask\b/gi, 'request'],
      [/\bhelp\b/gi, 'assist'], [/\buse\b/gi, 'utilize'], [/\btry to\b/gi, 'endeavor to'],
      [/\bkind of\b/gi, 'somewhat'], [/\ba lot\b/gi, 'considerably'],
    ];
    for (const [pat, repl] of formalUpgrades) {
      if (pat.test(adjusted)) { adjusted = adjusted.replace(pat, repl); impressions.push(`Formal: ${pat.source} → ${repl}`); }
    }
  }
  return { adjusted_body: adjusted.trim(), impressions, tonePools, closingPools };
}

function adjustSubjectForTone(subject, tone, urgency_detected) {
  if (tone === 'assertive' && urgency_detected && !subject.toLowerCase().match(/urgent|asap|priority/)) {
    return `[ACTION REQUIRED] ${subject}`;
  }
  return subject;
}

function adjust_email_tone(context) {
  const domain = context.sender_domain || (context.sender.includes('@') ? context.sender.split('@')[1] : '');
  const threadLen = context.thread_length || 1;
  const threadHistory = context.thread_tone_history || [];

  const { sentiment_score, frustration_level, urgency_detected } = analyzeSentiment(context.body);
  const toneAnalysis = classifyTone(context.body, context.subject, sentiment_score, frustration_level, urgency_detected, domain, threadLen);

  let effective_tone = toneAnalysis.primary_tone;
  if (threadHistory.length > 0 && threadHistory[threadHistory.length - 1] === 'empathetic' && frustration_level < 0.3) {
    effective_tone = 'professional';
  }

  const { adjusted_body, impressions } = applyToneAdjustments(context.body, effective_tone);
  const adjusted_subject = adjustSubjectForTone(context.subject, effective_tone, urgency_detected);

  const pools = {
    formal: FORMAL_OPENINGS, professional: PROFESSIONAL_OPENINGS,
    friendly: FRIENDLY_OPENINGS, empathetic: EMPATHETIC_OPENINGS,
    de_escalating: DEESCALATING_OPENINGS, assertive: ASSERTIVE_OPENINGS,
    neutral: PROFESSIONAL_OPENINGS,
  };
  const closingPools = {
    formal: FORMAL_CLOSINGS, professional: PROFESSIONAL_CLOSINGS,
    friendly: FRIENDLY_CLOSINGS, empathetic: PROFESSIONAL_CLOSINGS,
    de_escalating: PROFESSIONAL_CLOSINGS, assertive: PROFESSIONAL_CLOSINGS,
    neutral: PROFESSIONAL_CLOSINGS,
  };

  return {
    tone_analysis: toneAnalysis,
    adjusted_body,
    adjusted_subject,
    opening_line: pickRandom(pools[effective_tone] || pools.neutral),
    closing_line: pickRandom(closingPools[effective_tone] || closingPools.neutral),
    tone_used: effective_tone,
    sent_impressions: impressions,
  };
}

// ─── V67: Cross-Language Reply Engine ─────────────────────────────────────────

const LANGUAGE_HINTS = {
  spanish: ['hola', 'gracias', 'por favor', 'cómo', 'está', 'cuando', 'donde', 'necesito', 'ayuda'],
  french: ['bonjour', 'merci', 's\'il vous plaît', 'comment', 'votre', 'nous', 'avec'],
  german: ['guten tag', 'danke', 'bitte', 'wie', 'können', 'müssen', 'haben', 'werden'],
  portuguese: ['olá', 'obrigado', 'por favor', 'como', 'você', 'mais', 'para'],
  italian: ['ciao', 'grazie', 'per favore', 'come', 'stato', 'molta', 'bene'],
  dutch: ['hallo', 'dank', 'alstublieft', 'hoe', 'kunt', 'hebben', 'worden'],
  chinese: ['你好', '谢谢', '请', '我们', '可以', '这个'],
  japanese: ['こんにちは', 'ありがとう', 'お願いします', '私たち', 'これ', '可能'],
  korean: ['안녕하세요', '감사합니다', '부탁', '우리는', '이', '가능'],
};

const AUTO_REPLY_TEMPLATES = {
  spanish: 'Le agradecemos su mensaje. Nuestro equipo se pondrá en contacto con usted a la brevedad.',
  french: 'Nous vous remercions de votre message. Notre équipe vous contactera sous peu.',
  german: 'Wir danken Ihnen für Ihre Nachricht. Unser Team wird sich in Kürze bei Ihnen melden.',
  portuguese: 'Agradecemos sua mensagem. Nossa equipe entrará em contato em breve.',
  italian: 'Vi ringraziamo per il vostro messaggio. Il nostro team vi contatterà a breve.',
  dutch: 'Wij danken u voor uw bericht. Ons team zal spoedig contact met u opnemen.',
  chinese: '感谢您的来信。我们的团队将尽快与您联系。',
  japanese: 'メッセージをお送りいただきありがとうございます。まもなくご連絡いたします。',
  korean: '메시지를 보내주셔서 감사합니다. 가까운 시일 내에 연락드리겠습니다.',
};

function detectLanguage(text) {
  const lower = text.toLowerCase();
  const scores = {};
  for (const [lang, hints] of Object.entries(LANGUAGE_HINTS)) {
    scores[lang] = hints.filter(h => lower.includes(h)).length;
  }
  const detected = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
  return {
    language: detected[0],
    confidence: Math.min(1, detected[1] / 3),
    all_scores: scores,
    auto_reply_hint: AUTO_REPLY_TEMPLATES[detected[0]] || null,
  };
}

function cross_language_analyze(context) {
  const { body, subject, sender } = context;
  const langResult = detectLanguage(body);
  const hasForeignChars = /[àáâãäåçèéêëìíîïòóôõöùúûüñ]/i.test(body) ||
                         /[äöüß]/i.test(body) || /[中日韓]/i.test(body);
  return {
    detected_language: langResult.language,
    language_confidence: langResult.confidence,
    all_language_scores: langResult.all_scores,
    has_foreign_characters: hasForeignChars,
    auto_reply_template: langResult.auto_reply_hint,
    needs_translation: langResult.confidence >= 0.5,
    cross_language_advisory: langResult.confidence >= 0.6
      ? `Consider responding in ${langResult.language} or provide bilingual reply.`
      : 'No strong cross-language signals detected.',
  };
}

// ─── V64: Email Auto-Categorizer ───────────────────────────────────────────────

const CATEGORY_KEYWORDS = {
  invoice: ['invoice', 'payment', 'billing', 'amount due', 'receipt', 'charge', 'fee', 'total', 'tax', 'invoice number', 'due date'],
  support: ['help', 'issue', 'problem', 'error', 'not working', 'broken', 'fix', 'support', 'ticket', 'case', 'agent', 'customer service'],
  sales: ['demo', 'pricing', 'quote', 'upgrade', 'plan', 'purchase', 'buy', 'sales', 'schedule', 'consultation', 'interested'],
  hr: ['payroll', 'benefits', 'vacation', 'pto', 'employee', 'hiring', 'job', 'resume', 'career', 'onboarding', ' hr@', 'human resources'],
  legal: ['contract', 'agreement', 'terms', 'law', 'legal', 'compliance', 'nda', 'confidential', 'clause', 'jurisdiction'],
  marketing: ['newsletter', 'update', 'announcement', 'webinar', 'event', 'content', 'blog', 'social media', 'campaign'],
  it: ['password', 'login', 'access', 'server', 'cloud', 'api', 'integration', 'backup', 'security', 'restore'],
};

const PRIORITY_LEVELS = {
  urgent: ['urgent', 'asap', 'immediately', 'emergency', 'critical', 'deadline today', 'overdue'],
  high: ['important', 'priority', 'time-sensitive', 'soon', 'awaiting', 'blocking'],
  normal: ['request', 'question', 'inquiry', 'following up'],
  low: ['FYI', 'info', 'update', 'newsletter', 'digest', 'report'],
};

function categorizeEmail(context) {
  const text = (context.subject + ' ' + context.body).toLowerCase();
  const senderLower = (context.sender || '').toLowerCase();

  // Score each category
  const categoryScores = {};
  for (const [cat, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    categoryScores[cat] = keywords.filter(k => text.includes(k)).length;
  }
  const topCategory = Object.entries(categoryScores).sort((a, b) => b[1] - a[1])[0];

  // Score priority
  let priority = 'normal';
  for (const [p, hints] of Object.entries(PRIORITY_LEVELS)) {
    if (hints.some(h => text.includes(h))) { priority = p; break; }
  }

  // Sentiment from V65
  const { sentiment_score, frustration_level } = analyzeSentiment(context.body);
  if (frustration_level >= 0.5 && priority === 'normal') priority = 'high';

  // Auto-label tags
  const tags = [];
  if (topCategory[1] > 0) tags.push(topCategory[0]);
  if (sentiment_score < -0.3) tags.push('negative-sentiment');
  if (frustration_level >= 0.5) tags.push('frustrated-customer');
  if (text.includes('meeting') || text.includes('schedule') || text.includes('call')) tags.push('meeting-request');

  return {
    category: topCategory[0],
    category_score: topCategory[1],
    priority,
    sentiment_score,
    frustration_level,
    tags,
    confidence: Math.min(1, topCategory[1] / 3),
    reasoning: topCategory[1] > 0
      ? `Matched ${topCategory[1]} keywords for category '${topCategory[0]}'.`
      : 'No strong category match; defaulting to general.',
  };
}

// ─── Method Dispatch ───────────────────────────────────────────────────────────

const methods = {
  adjust_email_tone,
  cross_language_analyze,
  categorize_email: categorizeEmail,
  ping: () => ({ version: MODULE_VERSION, status: 'ok', timestamp: new Date().toISOString() }),
};

// ─── JSON I/O ─────────────────────────────────────────────────────────────────

function readAsync(stream, timeoutMs = 5000) {
  return new Promise((resolve, reject) => {
    let data = '';
    const timer = setTimeout(() => {
      reject(new Error('Read timeout'));
    }, timeoutMs);
    stream.on('data', chunk => { data += chunk; });
    stream.on('end', () => { clearTimeout(timer); resolve(data); });
    stream.on('error', err => { clearTimeout(timer); reject(err); });
  });
}

async function main() {
  let input;
  try {
    input = await readAsync(process.stdin, 5000);
  } catch (e) {
    // Timeout or error reading stdin — just output ready and exit
    console.log(JSON.stringify({ ready: true, version: MODULE_VERSION, note: 'stdin-read-timeout' }));
    return;
  }

  if (!input.trim()) {
    // Empty input - just output ready signal
    console.log(JSON.stringify({ ready: true, version: MODULE_VERSION }));
    return;
  }

  let request;
  try {
    request = JSON.parse(input);
  } catch (e) {
    console.error(JSON.stringify({ error: { code: 'INVALID_JSON', message: e.message } }));
    return;
  }

  if (Array.isArray(request)) {
    // Batch mode
    const results = request.map(req => {
      try {
        const fn = methods[req.method];
        if (!fn) throw new Error(`Unknown method: ${req.method}`);
        return { id: req.id, result: fn(req.params || {}) };
      } catch (e) {
        return { id: req.id, error: { code: 'EXECUTION_ERROR', message: e.message } };
      }
    });
    console.log(JSON.stringify(results));
  } else {
    // Single mode
    try {
      const fn = methods[request.method];
      if (!fn) throw new Error(`Unknown method: ${request.method}`);
      console.log(JSON.stringify({ id: request.id, result: fn(request.params || {}) }));
    } catch (e) {
      console.error(JSON.stringify({ id: request.id, error: { code: 'EXECUTION_ERROR', message: e.message } }));
    }
  }
}

main().catch(e => {
  console.error(JSON.stringify({ error: { code: 'FATAL', message: e.message } }));
  process.exit(1);
});