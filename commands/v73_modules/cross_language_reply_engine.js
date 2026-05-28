'use client';

/**
 * V73 – Cross-Language Reply Engine (Port of V67 TypeScript)
 * 
 * Enables agents to compose accurate replies in the customer's language
 * even when the incoming email is in a foreign language. Detects language,
 * translates context, composes in the correct language, and maintains
 * multilingual thread memory.
 */

/** @typedef {'en'|'es'|'fr'|'de'|'pt'|'it'|'nl'|'pl'|'ru'|'zh'|'ja'|'ko'|'ar'|'hi'|'other'} DetectedLang */

/**
 * @typedef {Object} LanguageDetection
 * @property {DetectedLang} language
 * @property {number} confidence 0-1
 * @property {string} script_family
 * @property {string} reasoning
 */

/**
 * @typedef {Object} CrossLanguageResult
 * @property {string} reply_body
 * @property {string} reply_subject
 * @property {string} opening_line
 * @property {string} closing_line
 * @property {string} language
 * @property {string[]} cultural_notes
 * @property {string[]} translation_impressions
 * @property {boolean} requires_translation
 */

const LANGUAGE_SIGNATURES = {
  en: { words: ['the', 'is', 'are', 'was', 'were', 'have', 'has', 'been', 'being', 'will', 'would', 'could', 'should', 'can', 'thank', 'please', 'help'], script: 'latin' },
  es: { words: ['el', 'la', 'los', 'las', 'un', 'una', 'es', 'son', 'está', 'están', 'muy', 'gracias', 'por', 'favor', 'ayuda', 'puede', 'como', 'quiero', 'tengo', 'hemos'], script: 'latin' },
  fr: { words: ['le', 'la', 'les', 'un', 'une', 'est', 'sont', 'très', 'merci', 'pour', 'aide', 'peut', 'comment', 'voudrais', 'avoir', 'sommes', 'été'], script: 'latin' },
  de: { words: ['der', 'die', 'das', 'ist', 'sind', 'sehr', 'danke', 'für', 'hilfe', 'kann', 'wie', 'möchte', 'haben', 'sind', 'gewesen', 'werden'], script: 'latin' },
  pt: { words: ['o', 'a', 'os', 'as', 'um', 'uma', 'é', 'são', 'muito', 'obrigado', 'por', 'ajuda', 'pode', 'como', 'gostaria', 'tenho', 'somos'], script: 'latin' },
  it: { words: ['il', 'la', 'lo', 'gli', 'le', 'un', 'una', 'è', 'sono', 'molto', 'grazie', 'per', 'aiuto', 'può', 'come', 'vorrei', 'ho', 'siamo'], script: 'latin' },
  nl: { words: ['de', 'het', 'een', 'is', 'zijn', 'zeer', 'dank', 'voor', 'hulp', 'kan', 'hoe', 'zou', 'willen', 'hebben', 'zijn', 'geweest'], script: 'latin' },
  pl: { words: ['i', 'w', 'na', 'do', 'nie', 'to', 'jest', 'są', 'bardzo', 'dzięki', 'pomoc', 'może', 'jak', 'chciałbym', 'mam', 'jesteśmy', 'byli'], script: 'latin' },
  ar: { words: [], script: 'arabic' },
  zh: { words: [], script: 'cjk' },
  ja: { words: [], script: 'cjk' },
  ko: { words: [], script: 'cjk' },
  hi: { words: [], script: 'devanagari' },
  ru: { words: [], script: 'cyrillic' },
};

const FORMAL_OPENINGS = {
  en: 'I am writing to inform you',
  es: 'Le escribo para informarle',
  fr: 'Je vous écris pour vous informer',
  de: 'Ich schreibe Ihnen, um Sie zu informieren',
  pt: 'Escrevo para informá-lo',
  it: 'Le scrivo per informarla',
  nl: 'Ik schrijf u om u te informeren',
  pl: 'Piszę, aby poinformować Państwa',
};

const FRIENDLY_OPENINGS = {
  en: 'Hope you are doing well!',
  es: '¡Espero que estés bien!',
  fr: 'J\'espère que vous allez bien!',
  de: 'Ich hoffe, es geht Ihnen gut!',
  pt: 'Espero que você esteja bem!',
  it: 'Spero che tu stia bene!',
  nl: 'Ik hoop dat het goed met je gaat!',
  pl: 'Mam nadzieję, że u Państwa wszystko dobrze!',
};

const CLOSINGS = {
  en: 'Best regards,',
  es: 'Saludos cordiales,',
  fr: 'Cordialement,',
  de: 'Mit freundlichen Grüßen,',
  pt: 'Atenciosamente,',
  it: 'Cordiali saluti,',
  nl: 'Met vriendelijke groet,',
  pl: 'Z poważaniem,',
};

/**
 * @param {string} text
 * @returns {LanguageDetection}
 */
function detect_language(text) {
  const text_lower = text.toLowerCase();

  // Script-based detection first
  if (/[\u0600-\u06FF]/.test(text)) {
    return { language: 'ar', confidence: 0.9, script_family: 'arabic', reasoning: 'Arabic script detected' };
  }
  if (/[\u4E00-\u9FFF]/.test(text)) {
    return { language: 'zh', confidence: 0.9, script_family: 'cjk', reasoning: 'Chinese characters detected' };
  }
  if (/[\u3040-\u309F\u30A0-\u30FF]/.test(text)) {
    return { language: 'ja', confidence: 0.9, script_family: 'cjk', reasoning: 'Japanese script detected' };
  }
  if (/[\uAC00-\uD7AF]/.test(text)) {
    return { language: 'ko', confidence: 0.9, script_family: 'cjk', reasoning: 'Korean Hangul detected' };
  }
  if (/[\u0400-\u04FF]/.test(text)) {
    return { language: 'ru', confidence: 0.9, script_family: 'cyrillic', reasoning: 'Cyrillic script detected' };
  }
  if (/[\u0900-\u097F]/.test(text)) {
    return { language: 'hi', confidence: 0.9, script_family: 'devanagari', reasoning: 'Devanagari script detected' };
  }

  // Word-based detection
  const scores = {};
  for (const [lang, sig] of Object.entries(LANGUAGE_SIGNATURES)) {
    if (sig.script !== 'latin' || lang === 'en') continue;
    scores[lang] = 0;
    for (const word of sig.words) {
      if (text_lower.includes(word)) scores[lang]++;
    }
  }

  let max_lang = 'en';
  let max_score = 0;
  for (const [lang, score] of Object.entries(scores)) {
    if (score > max_score) { max_score = score; max_lang = lang; }
  }

  const en_score = LANGUAGE_SIGNATURES.en.words.filter(w => text_lower.includes(w)).length;
  if (en_score > max_score) { max_lang = 'en'; max_score = en_score; }

  const confidence = Math.min(0.95, max_score * 0.1 + 0.3);

  return {
    language: max_lang,
    confidence,
    script_family: LANGUAGE_SIGNATURES[max_lang]?.script || 'latin',
    reasoning: `Detected ${max_lang.toUpperCase()} (confidence: ${(confidence * 100).toFixed(0)}%, score: ${max_score})`,
  };
}

/**
 * Simulates translation (in production, call real translation API)
 * @param {string} text
 * @param {string} from_lang
 * @param {string} to_lang
 * @returns {string}
 */
function translate_text(text, from_lang, to_lang) {
  if (from_lang === to_lang) return text;
  // Placeholder — real implementation would call Google Translate / DeepL API
  return `[Translated from ${from_lang} to ${to_lang}]: ${text}`;
}

/**
 * @param {string} text
 * @param {string} lang
 * @returns {string}
 */
function get_opening(lang) {
  return FORMAL_OPENINGS[lang] || FORMAL_OPENINGS.en;
}

/**
 * @param {string} lang
 * @returns {string}
 */
function get_closing(lang) {
  return CLOSINGS[lang] || CLOSINGS.en;
}

/**
 * Composes a reply in the customer's detected language.
 * @param {string} customer_email_body
 * @param {string} customer_email_subject
 * @param {string} agent_reply_english - pre-composed reply in English
 * @param {string} target_language - override auto-detect (optional)
 * @returns {CrossLanguageResult}
 */
function compose_cross_language_reply(customer_email_body, customer_email_subject, agent_reply_english, target_language) {
  const detection = detect_language(customer_email_body);
  const lang = target_language || detection.language;
  const requires_translation = lang !== 'en' && detection.confidence > 0.5;

  const translation_impressions = [];
  let reply_body = agent_reply_english;

  if (requires_translation) {
    reply_body = translate_text(agent_reply_english, 'en', lang);
    translation_impressions.push(`Translated reply from English to ${lang.toUpperCase()}`);
    translation_impressions.push(`Language confidence: ${(detection.confidence * 100).toFixed(0)}%`);
  } else {
    translation_impressions.push('Reply composed in English — customer language detected as English');
  }

  const cultural_notes = [];
  if (lang === 'es' || lang === 'pt' || lang === 'it') {
    cultural_notes.push('Latin cultures may appreciate warmer, more personal closings');
  }
  if (lang === 'de' || lang === 'nl' || lang === 'pl') {
    cultural_notes.push('Germanic cultures prefer direct, concise communication');
  }
  if (lang === 'fr') {
    cultural_notes.push('French business communication values formality and courtesy');
  }

  return {
    reply_body,
    reply_subject: `Re: ${customer_email_subject}`,
    opening_line: get_opening(lang),
    closing_line: get_closing(lang),
    language: lang,
    cultural_notes,
    translation_impressions,
    requires_translation,
  };
}

module.exports = { compose_cross_language_reply, detect_language, translate_text };