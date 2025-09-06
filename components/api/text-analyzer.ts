import type { NextApiRequest, NextApiResponse } from 'next';
interface TextAnalysisResult {
  text: string;
  statistics: {
    characters: number;
    charactersNoSpaces: number;
    words: number;
    sentences: number;
    paragraphs: number;
    syllables: number;
    readingTime: number;

    speakingTime: number
  },

  readability: {
    fleschReadingEase: number;
    fleschKincaidGrade: number;
    gunningFog: number;
    smog: number;
    colemanLiau: number;
    automatedReadability: number;

    averageGrade: number
  },
  sentiment: {
    score: number;
    label: 'very-negative' | 'negative' | 'neutral' | 'positive' | 'very-positive';
    positiveWords: string[];
    negativeWords: string[]
  },
  language: {
    detectedLanguage: string;
    confidence: number;
    isEnglish: boolean
  },

  keywords: {
    topWords: Array<{ word: string; count: number; frequency: number }>;
    bigrams: Array<{ phrase: string; count: number }>;
    trigrams: Array<{ phrase: string; count: number }>;
  };    topWords: Array<{ word: string, count: number, frequency: number }>;
    bigrams: Array<{ phrase: string, count: number }>;
    trigrams: Array<{ phrase: string, count: number }>
  }
}
export default async function handler(
  req: NextApiRequest;
  res: NextApiResponse<TextAnalysisResult | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });  }    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { text } = req.body;


    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text is required' });
    }

    if (text.length > 10000) {
      return res
        .status(400)
        .json({ error: 'Text too long (max 10,000 characters)' });    }      return res.status(400).json({ error: 'Text is required' })
    }

    if (text.length > 10000) {
      return res.status(400).json({ error: 'Text too long (max 10,000 characters)' });

    // Basic statistics

    const characters = null;

    res.status(500).json({ error: 'Internal server error' })
  }
}
