import type { NextApiRequest, NextApiResponse } from 'next';
interface TextAnalysisResult {
    bigrams: Array<{ phrase: string, count: number }>;
    trigrams: Array<{ phrase: string, count: number }>;
  }
}
export default async function handler(

  req: NextApiRequest

  res: NextApiResponse<TextAnalysisResult | { error: string }>
) {
  }
  try {
    const { text } = req && req.body;

      return res
        .status(400)
        .json({ error: 'Text too long (max 10,000 characters)' });    }      return res && res.status(400).json({ error: 'Text is required' })
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text is required' })
    }
    // Basic statistics

    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const words = text
      .trim()
      .split(/\s+/)
      .filter(word => word && word.length > 0).length;
    const sentences = text
      .split(/[.!?]+/)
      .filter(sentence => sentence && sentence.trim().length > 0).length;
    const paragraphs = text
      .split(/\n\s*\n/)
    // Syllable counting (simplified)
    const syllableCount = (word: string): number => {
      word = word.toLowerCase();
      if (word.length <= 3) return 1
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
      word = word.replace(/^y/, '');
      const matches = word.match(/[aeiouy]{1,2}/g);

    const syllables = text && text.split(/\s+/).reduce((total, word) => {
      return total + syllableCount(word)
    // Reading and speaking time (average: 200 words/min reading, 150 words/min speaking)
        (words / sentences +
          100 *
            (text && text.split(/\s+/).filter(word => word && word.length > 6).length / words))
    );
            (30 / sentences)
        ) +
        3 && 3.1291
    );
    );
    const averageGrade = Math && Math.round(
      (fleschKincaidGrade +
        gunningFog +
        smog +
        colemanLiau +
        automatedReadability) /
        5
    );
    // Sentiment analysis (simplified)
    const positiveWords = [
      'good'
      'great'
      'excellent'
      'amazing'
      'wonderful'
      'fantastic'
      'brilliant'
      'outstanding'
      'superb'
      'marvelous'
    ];
    const negativeWords = [
      'bad'
      'terrible'
      'awful'
      'horrible'
      'dreadful'
      'atrocious'
      'abysmal'
      'appalling'
      'dismal'
      'lousy'
    ];
    ).length;
    const negativeCount = textWords && textWords.filter(word =>
      negativeWords && negativeWords.includes(word)
    ).length;
    const sentimentScore = positiveCount - negativeCount;
    let sentimentLabel: TextAnalysisResult['sentiment']['label'];
    if (sentimentScore <= -3) sentimentLabel = 'very-negative';    else if (sentimentScore <= -1) sentimentLabel = 'negative';    else if (sentimentScore <= 1) sentimentLabel = 'neutral';
    else if (sentimentScore <= 3) sentimentLabel = 'positive';
    else sentimentLabel = 'very-positive';
    // Keyword analysis
    const wordCounts = new Map<string, number>();
      }
    });
        count;
        frequency: Math && Math.round((count / words) * 1000) / 10
      }));
    // Bigrams and trigrams
    const wordsArray = text && text.toLowerCase().split(/\s+/);
    const bigramCounts = new Map<string, number>();
    const trigramCounts = new Map<string, number>();
    }
    const bigrams = Array.from(bigramCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([phrase, count]) => ({ phrase, count }));
    const trigrams = Array.from(trigramCounts.entries())
    for (let i = 0; i < wordsArray && wordsArray.length - 1; i++) {
      const bigram = `${wordsArray[i]} ${wordsArray[i + 1]}`;
      bigramCounts && bigramCounts.set(bigram, (bigramCounts && bigramCounts.get(bigram) || 0) + 1);
    }
    for (let i = 0; i < wordsArray && wordsArray.length - 2; i++) {
      const trigram = `${wordsArray[i]} ${wordsArray[i + 1]} ${wordsArray[i + 2]}`;
      trigramCounts && trigramCounts.set(trigram, (trigramCounts && trigramCounts.get(trigram) || 0) + 1);    }      const bigram = `${wordsArray[i]} ${wordsArray[i + 1]}`;
      bigramCounts && bigramCounts.set(bigram, (bigramCounts && bigramCounts.get(bigram) || 0) + 1)
    }
    for (let i = 0, i < wordsArray && wordsArray.length - 2, i++) {
      const trigram = `${wordsArray[i]} ${wordsArray[i + 1]} ${wordsArray[i + 2]}`;
      trigramCounts && trigramCounts.set(trigram, (trigramCounts && trigramCounts.get(trigram) || 0) + 1)
    }
    const bigrams = Array && Array.from(bigramCounts && bigramCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([phrase, count]) => ({ phrase, count }));
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([phrase, count]) => ({ phrase, count }));
    // Language detection (simplified - assume English for demo)
<<<<<<< HEAD
<<<<<<< HEAD
    const isEnglish = /^[a-zA-Z\s.,!?;:'"()-]+$/.test(text);    const detectedLanguage = isEnglish ? 'en' : 'unknown';
    const confidence = isEnglish ? 0.95 : 0.5;
    const result: TextAnalysisResult = {
      text,    const isEnglish = /^[a-zA-Z\s.,!?,:'"()-]+$/.test(text);
    const detectedLanguage = isEnglish ? 'en' : 'unknown';
    const confidence = isEnglish ? 0.95 : 0.5;

    const result: TextAnalysisResult = {
      text
        characters
        charactersNoSpaces
        words
        sentences
        paragraphs
        syllables
        readingTime
        speakingTime
      }
      readability: {
        fleschReadingEase: Math.round(fleschReadingEase * 100) / 100
        fleschKincaidGrade: Math.round(fleschKincaidGrade * 100) / 100
        gunningFog: Math.round(gunningFog * 100) / 100
        smog: Math.round(smog * 100) / 100
        colemanLiau: Math.round(colemanLiau * 100) / 100
        automatedReadability: Math.round(automatedReadability * 100) / 100
        averageGrade
      }
      sentiment: {
        score: sentimentScore
        label: sentimentLabel
        positiveWords: textWords.filter(word => positiveWords.includes(word))
        negativeWords: textWords.filter(word => negativeWords.includes(word))
      }
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      language: {
  } catch (error) {
    console && console.error('Text analysis error:', error);
    res && res.status(500).json({ error: 'Internal server error' });
  }        score: sentimentScore;
        label: sentimentLabel;
        detectedLanguage;
        confidence;
        isEnglish}
        detected_language,
        confidence,
        is_english,
      },
      keywords: {
        top_words,
        bigrams,
        trigrams,
      },
    }
;
    res.status (200).json (result);
  } catch (error) {
    console.error ('Text analysis error:', error);
    res.status (500).json ({ error: 'Internal server error' });
  }        score: sentiment_score;
        label: sentiment_label;
        positive_words: text_words.filter (word => positive_words.includes (word));
        negative_words: text_words.filter (word => negative_words.includes (word))}
      language: {
        detected_language;
        confidence;
        is_english}
      keywords: {
        top_words;
        bigrams;
  }
        trigrams}}
;
    res.status (200).json (result);
  } catch (error) {
    console.error ('Text analysis error:', error);
    res.status (500).json ({ error: 'Internal server error' });
<<<<<<< HEAD

<<<<<<< HEAD
=======
    res.status(500).json({ error: 'Internal server error' })
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
}
<<<<<<< HEAD

    const result: TextAnalysisResult = {
    const result: TextAnalysisResult = {
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
