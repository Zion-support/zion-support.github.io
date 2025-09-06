// Text Analysis Service
export interface TextAnalysisResult {
  basicStats: BasicTextStats;
  readability: ReadabilityMetrics;
  sentiment: SentimentAnalysis;
  keywords: KeywordAnalysis;
  language: LanguageDetection;
  entities: EntityExtraction;
  summary: TextSummary;
}

export interface BasicTextStats {
  characterCount: number;
  wordCount: number;
  sentenceCount: number;
  paragraphCount: number;
  averageWordsPerSentence: number;
  averageCharactersPerWord: number;
  readingTime: number; // in minutes
}

export interface ReadabilityMetrics {
  fleschReadingEase: number;
  fleschKincaidGrade: number;
  gunningFogIndex: number;
  smogIndex: number;
  automatedReadabilityIndex: number;
  colemanLiauIndex: number;
}

export interface SentimentAnalysis {
  score: number; // -1 to 1
  magnitude: number; // 0 to 1
  label: 'positive' | 'negative' | 'neutral';
  emotions: {
    joy: number;
    sadness: number;
    anger: number;
    fear: number;
    surprise: number;
    disgust: number;
  };
}

export interface KeywordAnalysis {
  keywords: Array<{
    word: string;
    frequency: number;
    importance: number;
  }>;
  keyPhrases: Array<{
    phrase: string;
    frequency: number;
    importance: number;
  }>;
  wordCloud: Array<{
    word: string;
    weight: number;
  }>;
}

export interface LanguageDetection {
  language: string;
  confidence: number;
  alternatives: Array<{
    language: string;
    confidence: number;
  }>;
}

export interface EntityExtraction {
  persons: string[];
  organizations: string[];
  locations: string[];
  dates: string[];
  numbers: string[];
  urls: string[];
  emails: string[];
  phoneNumbers: string[];
}

export interface TextSummary {
  extractive: string;
  abstractive: string;
  keyPoints: string[];
  topics: string[];
}

export class TextAnalysisService {
  async analyzeText(text: string): Promise<TextAnalysisResult> {
    const basicStats = this.calculateBasicStats(text);
    const readability = this.calculateReadability(text);
    const sentiment = this.analyzeSentiment(text);
    const keywords = this.extractKeywords(text);
    const language = this.detectLanguage(text);
    const entities = this.extractEntities(text);
    const summary = this.generateSummary(text);

    return {
      basicStats,
      readability,
      sentiment,
      keywords,
      language,
      entities,
      summary
    };
  }

  private calculateBasicStats(text: string): BasicTextStats {
    const characters = text.length;
    const words = text.split(/\s+/).filter(word => word.length > 0).length;
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    const paragraphs = text.split(/\n\s*\n/).filter(para => para.trim().length > 0).length;
    
    return {
      characterCount: characters,
      wordCount: words,
      sentenceCount: sentences,
      paragraphCount: paragraphs,
      averageWordsPerSentence: sentences > 0 ? words / sentences : 0,
      averageCharactersPerWord: words > 0 ? characters / words : 0,
      readingTime: Math.ceil(words / 200) // Assuming 200 words per minute
    };
  }

  private calculateReadability(text: string): ReadabilityMetrics {
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    const syllables = this.countSyllables(text);
    
    const avgWordsPerSentence = words.length / sentences.length;
    const avgSyllablesPerWord = syllables / words.length;
    
    // Flesch Reading Ease
    const fleschReadingEase = 206.835 - (1.015 * avgWordsPerSentence) - (84.6 * avgSyllablesPerWord);
    
    // Flesch-Kincaid Grade Level
    const fleschKincaidGrade = (0.39 * avgWordsPerSentence) + (11.8 * avgSyllablesPerWord) - 15.59;
    
    // Gunning Fog Index
    const complexWords = words.filter(word => this.countSyllables(word) > 2).length;
    const gunningFogIndex = 0.4 * (avgWordsPerSentence + (100 * complexWords / words.length));
    
    // SMOG Index
    const smogIndex = 1.043 * Math.sqrt(complexWords * (30 / sentences.length)) + 3.1291;
    
    // Automated Readability Index
    const automatedReadabilityIndex = (4.71 * (text.length / words.length)) + (0.5 * (words.length / sentences.length)) - 21.43;
    
    // Coleman-Liau Index
    const avgCharsPerWord = text.length / words.length;
    const avgSentencesPer100Words = (sentences.length / words.length) * 100;
    const colemanLiauIndex = (0.0588 * avgCharsPerWord * 100) - (0.296 * avgSentencesPer100Words) - 15.8;
    
    return {
      fleschReadingEase,
      fleschKincaidGrade,
      gunningFogIndex,
      smogIndex,
      automatedReadabilityIndex,
      colemanLiauIndex
    };
  }

  private analyzeSentiment(text: string): SentimentAnalysis {
    // Simplified sentiment analysis
    const positiveWords = ['good', 'great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'love', 'like', 'happy', 'joy'];
    const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'dislike', 'sad', 'angry', 'frustrated', 'disappointed', 'horrible'];
    
    const words = text.toLowerCase().split(/\s+/);
    let positiveCount = 0;
    let negativeCount = 0;
    
    words.forEach(word => {
      if (positiveWords.includes(word)) positiveCount++;
      if (negativeWords.includes(word)) negativeCount++;
    });
    
    const totalSentimentWords = positiveCount + negativeCount;
    const score = totalSentimentWords > 0 ? (positiveCount - negativeCount) / totalSentimentWords : 0;
    
    let label: 'positive' | 'negative' | 'neutral';
    if (score > 0.1) label = 'positive';
    else if (score < -0.1) label = 'negative';
    else label = 'neutral';
    
    return {
      score,
      magnitude: Math.abs(score),
      label,
      emotions: {
        joy: Math.max(0, score),
        sadness: Math.max(0, -score),
        anger: Math.max(0, -score * 0.5),
        fear: Math.max(0, -score * 0.3),
        surprise: Math.abs(score) * 0.2,
        disgust: Math.max(0, -score * 0.4)
      }
    };
  }

  private extractKeywords(text: string): KeywordAnalysis {
    const words = text.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3);
    
    const wordFreq: { [key: string]: number } = {};
    words.forEach(word => {
      wordFreq[word] = (wordFreq[word] || 0) + 1;
    });
    
    const keywords = Object.entries(wordFreq)
      .map(([word, frequency]) => ({
        word,
        frequency,
        importance: frequency / words.length
      }))
      .sort((a, b) => b.importance - a.importance)
      .slice(0, 20);
    
    return {
      keywords,
      keyPhrases: [], // Simplified - would need more complex NLP
      wordCloud: keywords.map(kw => ({ word: kw.word, weight: kw.importance }))
    };
  }

  private detectLanguage(text: string): LanguageDetection {
    // Simplified language detection
    const englishWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'];
    const spanishWords = ['el', 'la', 'de', 'que', 'y', 'a', 'en', 'un', 'es', 'se', 'no', 'te'];
    const frenchWords = ['le', 'de', 'et', 'à', 'un', 'il', 'être', 'et', 'en', 'avoir', 'que', 'pour'];
    
    const words = text.toLowerCase().split(/\s+/);
    let englishScore = 0;
    let spanishScore = 0;
    let frenchScore = 0;
    
    words.forEach(word => {
      if (englishWords.includes(word)) englishScore++;
      if (spanishWords.includes(word)) spanishScore++;
      if (frenchWords.includes(word)) frenchScore++;
    });
    
    const scores = [
      { language: 'en', score: englishScore },
      { language: 'es', score: spanishScore },
      { language: 'fr', score: frenchScore }
    ].sort((a, b) => b.score - a.score);
    
    return {
      language: scores[0].language,
      confidence: scores[0].score / Math.max(1, words.length),
      alternatives: scores.slice(1).map(s => ({
        language: s.language,
        confidence: s.score / Math.max(1, words.length)
      }))
    };
  }

  private extractEntities(text: string): EntityExtraction {
    // Simplified entity extraction using regex patterns
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const urlRegex = /https?:\/\/[^\s]+/g;
    const phoneRegex = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g;
    const dateRegex = /\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/g;
    const numberRegex = /\b\d+(?:\.\d+)?\b/g;
    
    return {
      persons: [], // Would need NER model
      organizations: [], // Would need NER model
      locations: [], // Would need NER model
      dates: text.match(dateRegex) || [],
      numbers: text.match(numberRegex) || [],
      urls: text.match(urlRegex) || [],
      emails: text.match(emailRegex) || [],
      phoneNumbers: text.match(phoneRegex) || []
    };
  }

  private generateSummary(text: string): TextSummary {
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    const words = text.split(/\s+/).filter(word => word.length > 0);
    
    // Simple extractive summary (first few sentences)
    const extractive = sentences.slice(0, 3).join('. ') + '.';
    
    // Simple abstractive summary (simplified)
    const abstractive = `This text contains ${words.length} words across ${sentences.length} sentences, discussing various topics.`;
    
    return {
      extractive,
      abstractive,
      keyPoints: sentences.slice(0, 3),
      topics: ['General'] // Would need topic modeling
    };
  }

  private countSyllables(word: string): number {
    word = word.toLowerCase();
    if (word.length <= 3) return 1;
    
    const vowels = 'aeiouy';
    let syllableCount = 0;
    let previousWasVowel = false;
    
    for (let i = 0; i < word.length; i++) {
      const isVowel = vowels.includes(word[i]);
      if (isVowel && !previousWasVowel) {
        syllableCount++;
      }
      previousWasVowel = isVowel;
    }
    
    // Handle silent 'e'
    if (word.endsWith('e') && syllableCount > 1) {
      syllableCount--;
    }
    
    return Math.max(1, syllableCount);
  }
}

export const textAnalysisService = new TextAnalysisService();