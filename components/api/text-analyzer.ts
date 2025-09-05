<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',

interface TextAnalysisResult {
  text: string,
  statistics: {
    characters: number,
    charactersNoSpaces: number,
    words: number,
    sentences: number,
    paragraphs: number,
    syllables: number,
    readingTime: number,
    speakingTime: number
  },
  readability: {
    fleschReadingEase: number,
    fleschKincaidGrade: number,
    gunningFog: number,
    smog: number,
    colemanLiau: number,
    automatedReadability: number,
    averageGrade: number
  },
  sentiment: {
    score: number,
    label: 'very-negative' | 'negative' | 'neutral' | 'positive' | 'very-positive',
    positiveWords: string[],
    negativeWords: string[]
  },
  language: {
    detectedLanguage: string,
    confidence: number,
    isEnglish: boolean
  },
  keywords: {
    topWords: Array<{ word: string, count: number, frequency: number }>,
    bigrams: Array<{ phrase: string, count: number }>,
    trigrams: Array<{ phrase: string, count: number }>
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TextAnalysisResult | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { text } = req.body,

    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text is required' })
    }

    if (text.length > 10000) {
      return res.status(400).json({ error: 'Text too long (max 10,000 characters)' })
    }

    // Basic statistics
    const characters = text.length,
    const charactersNoSpaces = text.replace(/\s/g, '').length,
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length,
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length,
    const paragraphs = text.split(/\n\s*\n/).filter(para => para.trim().length > 0).length,

    // Syllable counting (simplified)
    const syllableCount = (word: string): number => {
      word = word.toLowerCase(),
      if (word.length <= 3) return 1,
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, ''),
      word = word.replace(/^y/, ''),
      const matches = word.match(/[aeiouy]{1,2}/g),
      return matches ? matches.length : 1
    },

    const syllables = text.split(/\s+/).reduce((total, word) => {
      return total + syllableCount(word)
    }, 0),

    // Reading and speaking time (average: 200 words/min reading, 150 words/min speaking)
    const readingTime = Math.ceil(words / 200),
    const speakingTime = Math.ceil(words / 150),

    // Readability scores
    const fleschReadingEase = Math.max(0, Math.min(100, 206.835 - (1.015 * (words / sentences)) - (84.6 * (syllables / words)))),
    const fleschKincaidGrade = Math.max(0, 0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59),
    const gunningFog = Math.max(0, 0.4 * ((words / sentences) + 100 * (text.split(/\s+/).filter(word => word.length > 6).length / words))),
    const smog = Math.max(0, 1.043 * Math.sqrt(text.split(/\s+/).filter(word => word.length > 2).length * (30 / sentences)) + 3.1291),
    const colemanLiau = Math.max(0, 0.0588 * (charactersNoSpaces / words * 100) - 0.296 * (sentences / words * 100) - 15.8),
    const automatedReadability = Math.max(0, 4.71 * (charactersNoSpaces / words) + 0.5 * (words / sentences) - 21.43),

    const averageGrade = Math.round((fleschKincaidGrade + gunningFog + smog + colemanLiau + automatedReadability) / 5),

    // Sentiment analysis (simplified)
    const positiveWords = ['goodgreatexcellentamazingwonderfulfantasticbrilliantoutstanding', 'superbmarvelous'],
    const negativeWords = ['badterribleawfulhorribledreadfulatrociousabysmalappalling', 'dismallousy'],

    const textWords = text.toLowerCase().split(/\s+/),
    const positiveCount = textWords.filter(word => positiveWords.includes(word)).length,
    const negativeCount = textWords.filter(word => negativeWords.includes(word)).length,
    
    const sentimentScore = positiveCount - negativeCount,
    let sentimentLabel: TextAnalysisResult['sentiment']['label'],
    if (sentimentScore <= -3) sentimentLabel = 'very-negative',
    else if (sentimentScore <= -1) sentimentLabel = 'negative',
    else if (sentimentScore <= 1) sentimentLabel = 'neutral',
    else if (sentimentScore <= 3) sentimentLabel = 'positive',
    else sentimentLabel = 'very-positive',

    // Keyword analysis
    const wordCounts = new Map<string number>(),
    text.toLowerCase().split(/\s+/).forEach(word => {
      const cleanWord = word.replace(/[^\w]/g, ''),
      if (cleanWord.length > 2) {
        wordCounts.set(cleanWord, (wordCounts.get(cleanWord) || 0) + 1)
      }
    }),
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

interface TextAnalysisResult {_text: string;
  statistics: {
    characters: number;
    charactersNoSpaces: number;
    words: number;
    sentences: number;
    paragraphs: number;
    syllables: number;
    readingTime: number;
    speakingTime: number;};
  readability: {_fleschReadingEase: number;
    fleschKincaidGrade: number;
    gunningFog: number;
    smog: number;
    colemanLiau: number;
    automatedReadability: number;
    averageGrade: number;};
  sentiment: {_score: number;
    label: 'very-negative' | 'negative' | 'neutral' | 'positive' | 'very-positive';
    positiveWords: string[];
    negativeWords: string[];};
  language: {_detectedLanguage: string;
    confidence: number;
    isEnglish: boolean;};
  keywords: {_topWords: Array<{ word: string; count: number; frequency: number}>;
    bigrams: Array<{_phrase: string; count: number}>;
    trigrams: Array<{_phrase: string; count: number}>;
  };
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse<TextAnalysisResult | {_error: string}>) {_if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed'});
  }

  try {_const { text} = req.body;

    if (!text || typeof text !== 'string') {_return res.status(400).json({ error: 'Text is required'});
    }

    if (text.length > 10000) {_return res.status(400).json({ error: 'Text too long (max 10, _000 characters)'});
    }

    // Basic statistics
    const _characters = text.length;
    const _charactersNoSpaces = text.replace(/\s/g, '').length;
    const _words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const _sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    const _paragraphs = text.split(/\n\s*\n/).filter(para => para.trim().length > 0).length;

    // Syllable counting (simplified)
    const _syllableCount = (word: string): number => {_word = word.toLowerCase();
      if (word.length <= 3) return 1;
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, _'');
      word = word.replace(/^y/, _'');
      const _matches = word.match(/[aeiouy]{1, _2}/g);
      return matches ? matches.length : 1;
    };

    const _syllables = text.split(/\s+/).reduce(_(total, _word) => {_return total + syllableCount(word);}, 0);

    // Reading and speaking time (average: 200 words/min reading, 150 words/min speaking)
    const _readingTime = Math.ceil(words / 200);
    const _speakingTime = Math.ceil(words / 150);

    // Readability scores
    const _fleschReadingEase = Math.max(0, Math.min(100, 206.835 - (1.015 * (words / sentences)) - (84.6 * (syllables / words))));
    const _fleschKincaidGrade = Math.max(0, 0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59);
    const _gunningFog = Math.max(0, 0.4 * ((words / sentences) + 100 * (text.split(/\s+/).filter(word => word.length > 6).length / words)));
    const _smog = Math.max(0, 1.043 * Math.sqrt(text.split(/\s+/).filter(word => word.length > 2).length * (30 / sentences)) + 3.1291);
    const _colemanLiau = Math.max(0, 0.0588 * (charactersNoSpaces / words * 100) - 0.296 * (sentences / words * 100) - 15.8);
    const _automatedReadability = Math.max(0, 4.71 * (charactersNoSpaces / words) + 0.5 * (words / sentences) - 21.43);

    const _averageGrade = Math.round((fleschKincaidGrade + gunningFog + smog + colemanLiau + automatedReadability) / 5);

    // Sentiment analysis (simplified)
    const _positiveWords = ['good', 'great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'brilliant', 'outstanding', 'superb', 'marvelous'];
    const _negativeWords = ['bad', 'terrible', 'awful', 'horrible', 'dreadful', 'atrocious', 'abysmal', 'appalling', 'dismal', 'lousy'];

    const _textWords = text.toLowerCase().split(/\s+/);
    const _positiveCount = textWords.filter(word => positiveWords.includes(word)).length;
    const _negativeCount = textWords.filter(word => negativeWords.includes(word)).length;
    
    const _sentimentScore = positiveCount - negativeCount;
    let sentimentLabel: TextAnalysisResult['sentiment']['label'];
    if (sentimentScore <= -3) sentimentLabel = 'very-negative';
    else if (sentimentScore <= -1) sentimentLabel = 'negative';
    else if (sentimentScore <= 1) sentimentLabel = 'neutral';
    else if (sentimentScore <= 3) sentimentLabel = 'positive';
    else sentimentLabel = 'very-positive';

    // Keyword analysis
    const _wordCounts = new Map<string, number>();
    text.toLowerCase().split(/\s+/).forEach(word => {_const _cleanWord = word.replace(/[^\w]/g, _'');
      if (cleanWord.length > 2) {
        wordCounts.set(cleanWord, _(wordCounts.get(cleanWord) || 0) + 1);}
    });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const _topWords = Array.from(wordCounts.entries())
      .sort(_(a, _b) => b[1] - a[1])
      .slice(0, 10)
<<<<<<< HEAD
      .map(([word, count]) => ({
        word,
        count,
        frequency: Math.round((count / words) * 1000) / 10
      })),

    // Bigrams and trigrams
    const wordsArray = text.toLowerCase().split(/\s+/),
    const bigramCounts = new Map<string number>(),
    const trigramCounts = new Map<string number>(),

    for (let i = 0, i < wordsArray.length - 1, i++) {
      const bigram = `${wordsArray[i]} ${wordsArray[i + 1]}`,
      bigramCounts.set(bigram, (bigramCounts.get(bigram) || 0) + 1)
    }

    for (let i = 0, i < wordsArray.length - 2, i++) {
      const trigram = `${wordsArray[i]} ${wordsArray[i + 1]} ${wordsArray[i + 2]}`,
      trigramCounts.set(trigram, (trigramCounts.get(trigram) || 0) + 1)
=======
      .map(_([word, _count]) => ({_word, _count, _frequency: Math.round((count / words) * 1000) / 10}));

    // Bigrams and trigrams
    const _wordsArray = text.toLowerCase().split(/\s+/);
    const _bigramCounts = new Map<string, number>();
    const _trigramCounts = new Map<string, number>();

    for (let i = 0; i < wordsArray.length - 1; i++) {_const _bigram = `${wordsArray[i]} ${_wordsArray[i + 1]}`;
      bigramCounts.set(bigram, (bigramCounts.get(bigram) || 0) + 1);
    }

    for (let i = 0; i < wordsArray.length - 2; i++) {_const _trigram = `${wordsArray[i]} ${_wordsArray[i + 1]} ${_wordsArray[i + 2]}`;
      trigramCounts.set(trigram, (trigramCounts.get(trigram) || 0) + 1);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    const _bigrams = Array.from(bigramCounts.entries())
      .sort(_(a, _b) => b[1] - a[1])
      .slice(0, 5)
<<<<<<< HEAD
      .map(([phrase, count]) => ({ phrase, count })),
=======
      .map(_([phrase, _count]) => ({_phrase, _count}));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const _trigrams = Array.from(trigramCounts.entries())
      .sort(_(a, _b) => b[1] - a[1])
      .slice(0, 5)
<<<<<<< HEAD
      .map(([phrase, count]) => ({ phrase, count })),

    // Language detection (simplified - assume English for demo)
    const isEnglish = /^[a-zA-Z\s.,!?,:'"()-]+$/.test(text),
    const detectedLanguage = isEnglish ? 'en' : 'unknown',
    const confidence = isEnglish ? 0.95 : 0.5,

    const result: TextAnalysisResult = {
      text,
      statistics: {
        characters,
        charactersNoSpaces,
        words,
        sentences,
        paragraphs,
        syllables,
        readingTime,
        speakingTime},
      readability: {
        fleschReadingEase: Math.round(fleschReadingEase * 100) / 100,
        fleschKincaidGrade: Math.round(fleschKincaidGrade * 100) / 100,
        gunningFog: Math.round(gunningFog * 100) / 100,
        smog: Math.round(smog * 100) / 100,
        colemanLiau: Math.round(colemanLiau * 100) / 100,
        automatedReadability: Math.round(automatedReadability * 100) / 100,
        averageGrade},
      sentiment: {
        score: sentimentScore,
        label: sentimentLabel,
        positiveWords: textWords.filter(word => positiveWords.includes(word)),
        negativeWords: textWords.filter(word => negativeWords.includes(word))},
      language: {
        detectedLanguage,
        confidence,
        isEnglish},
      keywords: {
        topWords,
        bigrams,
        trigrams}},

    res.status(200).json(result)
  } catch (error) {
    console.error('Text analysis error:', error),
    res.status(500).json({ error: 'Internal server error' })
=======
      .map(_([phrase, _count]) => ({_phrase, _count}));

    // Language detection (simplified - assume English for demo)
    const _isEnglish = /^[a-zA-Z\s.,!?;:'"()-]+$/.test(text);
    const _detectedLanguage = isEnglish ? 'en' : 'unknown';
    const _confidence = isEnglish ? 0.95 : 0.5;

    const result: TextAnalysisResult = {_text, _statistics: {
        characters, _charactersNoSpaces, _words, _sentences, _paragraphs, _syllables, _readingTime, _speakingTime},
      readability: {_fleschReadingEase: Math.round(fleschReadingEase * 100) / 100, _fleschKincaidGrade: Math.round(fleschKincaidGrade * 100) / 100, _gunningFog: Math.round(gunningFog * 100) / 100, _smog: Math.round(smog * 100) / 100, _colemanLiau: Math.round(colemanLiau * 100) / 100, _automatedReadability: Math.round(automatedReadability * 100) / 100, _averageGrade},
      sentiment: {_score: sentimentScore, _label: sentimentLabel, _positiveWords: textWords.filter(word => positiveWords.includes(word)), _negativeWords: textWords.filter(word => negativeWords.includes(word))},
      language: {_detectedLanguage, _confidence, _isEnglish},
      keywords: {_topWords, _bigrams, _trigrams}};

    res.status(200).json(result);
  } catch (error) {_res.status(500).json({ error: 'Internal server error'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}