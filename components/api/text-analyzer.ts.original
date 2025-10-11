import type { NextApiRequest, NextApiResponse } from 'next';
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    const paragraphs = text.split(/\n\s*\n/).filter(para => para.trim().length > 0).length;

    const fleschReadingEase = Math.max(0, Math.min(100, 206.835 - (1.015 * (words / sentences)) - (84.6 * (syllables / words))));
    const fleschKincaidGrade = Math.max(0, 0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59);
    const gunningFog = Math.max(0, 0.4 * ((words / sentences) + 100 * (text.split(/\s+/).filter(word => word.length > 6).length / words)));
    const smog = Math.max(0, 1.043 * Math.sqrt(text.split(/\s+/).filter(word => word.length > 2).length * (30 / sentences)) + 3.1291);
    const colemanLiau = Math.max(0, 0.0588 * (charactersNoSpaces / words * 100) - 0.296 * (sentences / words * 100) - 15.8);
    const automatedReadability = Math.max(0, 4.71 * (charactersNoSpaces / words) + 0.5 * (words / sentences) - 21.43);
    const topWords = Array.from(wordCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([word, count]) => ({
    const bigrams = Array.from(bigramCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([phrase, count]) => ({ phrase, count }));
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([phrase, count]) => ({ phrase, count }));

    const detectedLanguage = isEnglish ? 'en' : 'unknown';
    const confidence = isEnglish ? 0.95 : 0.5;

    const result: TextAnalysisResult = {
        topWords,
        bigrams,
        trigrams,
      },
    };
