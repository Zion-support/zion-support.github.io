import type { NextApiRequest, NextApiResponse } from 'next';
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
    speakingTime: number},
  readability: {
    fleschReadingEase: number,
    fleschKincaidGrade: number,
    gunningFog: number,
    smog: number,
    colemanLiau: number,
    automatedReadability: number,
    averageGrade: number},
  sentiment: {
    score: number,
    label: 'very-negative' | 'negative' | 'neutral' | 'positive' | 'very-positive',
    positiveWords: string[],
    negativeWords: string[]
  },
  language: {
    detectedLanguage: string,
    confidence: number,
    isEnglish: boolean},
  keywords: {
    topWords: Array<{ word: string, count: number, frequency: number}>,
    bigrams: Array<{ phrase: string, count: number}>,
    trigrams: Array<{ phrase: string, count: number}>
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TextAnalysisResult | { error: string}>
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
    const characters = $2;
    const charactersNoSpaces = text.replace(/\s/g, '').length,
    const words = $2;
    const sentences = $2;
    const paragraphs = $2;
    // Syllable counting (simplified)
    const syllableCount = (word: string): number => {
      word = word.toLowerCase($2);
      if (word.length <= 3) return 1,
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, ''),
      word = word.replace($2);
      const matches = word.match($2);
      return matches ? matches.length : 1
    },

    const syllables = text.split(/\s+/).reduce((total, word) => {
      return total + syllableCount(word)
    }, 0),

    // Reading and speaking time (average: 200 words/min reading, 150 words/min speaking)
    const readingTime = Math.ceil($2);
    const speakingTime = Math.ceil($2);
    // Readability scores
    const fleschReadingEase = Math.max(0, Math.min(100, 206.835 - (1.015 * (words / sentences)) - (84.6 * (syllables / words)))),
    const fleschKincaidGrade = Math.max(0, 0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59),
    const gunningFog = Math.max(0, 0.4 * ((words / sentences) + 100 * (text.split(/\s+/).filter(word = $2;
    const smog = Math.max(0, 1.043 * Math.sqrt(text.split(/\s+/).filter(word = $2;
    const colemanLiau = Math.max(0, 0.0588 * (charactersNoSpaces / words * 100) - 0.296 * (sentences / words * 100) - 15.8),
    const automatedReadability = Math.max(0, 4.71 * (charactersNoSpaces / words) + 0.5 * (words / sentences) - 21.43),

    const averageGrade = $2;
    // Sentiment analysis (simplified)
    const positiveWords = $2;
    const negativeWords = $2;
    const textWords = text.toLowerCase().split($2);
    const positiveCount = $2;
    const negativeCount = $2;
    const sentimentScore = $2;
    let sentimentLabel: TextAnalysisResult['sentiment']['label'],
    if (sentimentScore <= -3) sentimentLabel = $2;
    else if (sentimentScore <= -1) sentimentLabel = $2;
    else if (sentimentScore <= 1) sentimentLabel = $2;
    else if (sentimentScore <= 3) sentimentLabel = $2;
    else sentimentLabel = $2;
    // Keyword analysis
    const wordCounts = new Map<string, number>(),
    text.toLowerCase().split(/\s+/).forEach($2);
      if (cleanWord.length > 2) {
        wordCounts.set(cleanWord, (wordCounts.get(cleanWord) || 0) + 1)
      }
    }),

    const topWords = Array.from(wordCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([word, count]) => ({
        word,
        count,
        frequency: Math.round((count / words) * 1000) / 10
      })),

    // Bigrams and trigrams
    const wordsArray = text.toLowerCase().split($2);
    const bigramCounts = new Map<string, number>(),
    const trigramCounts = new Map<string, number>(),

    for (let i = 0, i < wordsArray.length - 1, i++) {
      const bigram = $2;
      bigramCounts.set(bigram, (bigramCounts.get(bigram) || 0) + 1)
    }

    for (let i = 0, i < wordsArray.length - 2, i++) {
      const trigram = $2;
      trigramCounts.set(trigram, (trigramCounts.get(trigram) || 0) + 1)
    }

    const bigrams = Array.from(bigramCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([phrase, count]) => ({ phrase, count })),

    const trigrams = Array.from(trigramCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([phrase, count]) => ({ phrase, count })),

    // Language detection (simplified - assume English for demo)
    const isEnglish = /^[a-zA-Z\s.,!?,:'"()-]+$/.test($2);
    const detectedLanguage = $2;
    const confidence = $2;
    const result: TextAnalysisResult = $2;
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
        positiveWords: textWords.filter(word = $2;
        negativeWords: textWords.filter(word = $2;
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
    console.error($2);
    res.status(500).json({ error: 'Internal server error' })
  }
}