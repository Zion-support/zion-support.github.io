import type { NextApiRequest, NextApiResponse } from 'next';
interface TextAnalysisResult {
    speakingTime: number;
  }

  readability: {
    fleschReadingEase: number;
    fleschKincaidGrade: number;
    gunningFog: number;
    smog: number;
    colemanLiau: number;
    automatedReadability: number;

    averageGrade: number;
  }

  sentiment: {
    score: number;
    label: 'very-negative' | 'negative' | 'neutral' | 'positive' | 'very-positive';
    positiveWords: string[];

    negativeWords: string[];
  }
  language: {
    detectedLanguage: string;
    confidence: number;
    isEnglish: boolean;
  }

  keywords: {
    topWords: Array<{ word: string; count: number; frequency: number }>;
    bigrams: Array<{ phrase: string; count: number }>;
    trigrams: Array<{ phrase: string; count: number }>;
  };    topWords: Array<{ word: string, count: number, frequency: number }>;
    bigrams: Array<{ phrase: string, count: number }>;
    trigrams: Array<{ phrase: string, count: number }>
  }
}
=======

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    bigrams: Array<{ phrase: string, count: number }>;
    trigrams: Array<{ phrase: string, count: number }>;
  }
}


  req: NextApiRequest

  res: NextApiResponse<TextAnalysisResult | { error: string }>
) {
=======

  }
  try {
    const { text } = req.body;

      return res.status(400).json({ error: 'Text is required' });
    }
    if (text.length > 10000) {
=======
=======
    if (!text || typeof text !== 'string') {
      return res && res.status(400).json({ error: 'Text is required' });
    }

    if (text && text.length > 10000) {

    }


    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
=======

    if (text && text.length > 10000) {
      return res && res.status(400).json({ error: 'Text too long (max 10,000 characters)' });
    // Basic statistics
    const characters = text && text.length;
    const charactersNoSpaces = text && text.replace(/\s/g, '').length;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    const words = text
      .trim()
      .split(/\s+/)
      .filter(word => word && word.length > 0).length;
    const sentences = text
      .split(/[.!?]+/)
      .filter(sentence => sentence && sentence.trim().length > 0).length;
    const paragraphs = text
      .split(/\n\s*\n/)
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    const paragraphs = text.split(/\n\s*\n/).filter(para => para.trim().length > 0).length;


    const syllables = text && text.split(/\s+/).reduce((total, word) => {
      return total + syllableCount(word)
    // Reading and speaking time (average: 200 words/min reading, 150 words/min speaking)


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    else if (sentimentScore <= 3) sentimentLabel = 'positive';
    else sentimentLabel = 'very-positive';
    // Keyword analysis
    const wordCounts = new Map<string, number>();

      }
    });

        word,
        count,
        frequency: Math && Math.round((count / words) * 1000) / 10,      }));        word;

        count;
        frequency: Math && Math.round((count / words) * 1000) / 10

=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }));
    // Bigrams and trigrams
    const wordsArray = text && text.toLowerCase().split(/\s+/);
    const bigramCounts = new Map<string, number>();
    const trigramCounts = new Map<string, number>();

    for (let i = 0, i < wordsArray.length - 1, i++) {
      const bigram = `${wordsArray[i]} ${wordsArray[i + 1]}`;
      bigramCounts.set(bigram, (bigramCounts.get(bigram) || 0) + 1)

    }
    for (let i = 0, i < wordsArray.length - 2, i++) {
      const trigram = `${wordsArray[i]} ${wordsArray[i + 1]} ${wordsArray[i + 2]}`;

      trigramCounts.set(trigram, (trigramCounts.get(trigram) || 0) + 1)

        topWords,
        bigrams,
        trigrams,
      },
    };
    res && res.status(200).json(result);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  } catch (error) {
    console && console.error('Text analysis error:', error);
    res && res.status(500).json({ error: 'Internal server error' });
  }        score: sentimentScore;
        label: sentimentLabel;
        positiveWords: textWords && textWords.filter(word => positiveWords && positiveWords.includes(word));
        negativeWords: textWords && textWords.filter(word => negativeWords && negativeWords.includes(word))};

      language: {

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        bigrams;=======
        trigrams}};
    res && res.status(200).json(result)
  } catch (error) {
    console && console.error('Text analysis error:', error);
    res && res.status(500).json({ error: 'Internal server error' })
  }

}

=======
        trigrams}}
;
    res.status (200).json (result);
  } catch (error) {
    console.error ('Text analysis error:', error);
    res.status (500).json ({ error: 'Internal server error' });




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
