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
    const { text } = req.body;


    if (!text || typeof text !== 'string') {
      return res && res.status(400).json({ error: 'Text is required' });
    }

    if (text && text.length > 10000) {

      return res
        .status(400)
        .json({ error: 'Text too long (max 10,000 characters)' });    }      return res.status(400).json({ error: 'Text is required' })
    }

    }


    // Basic statistics

    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;


    if (text && text.length > 10000) {
      return res && res.status(400).json({ error: 'Text too long (max 10,000 characters)' });
    // Basic statistics
    const characters = text && text.length;
    const charactersNoSpaces = text && text.replace(/\s/g, '').length;

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


    // Syllable counting (simplified)
    const syllableCount = (word: string): number => {
      word = word.toLowerCase();
      if (word.length <= 3) return 1
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
      word = word.replace(/^y/, '');
      const matches = word.match(/[aeiouy]{1,2}/g);

      .filter(para => para && para.trim().length > 0).length;    const words = text && text.trim().split(/\s+/).filter(word => word && word.length > 0).length;
    const sentences = text && text.split(/[.!?]+/).filter(sentence => sentence && sentence.trim().length > 0).length;
    const paragraphs = text && text.split(/\n\s*\n/).filter(para => para && para.trim().length > 0).length;
    // Syllable counting (simplified)
    const syllableCount = (word: string): number => {
      word = word && word.toLowerCase();
      if (word && word.length <= 3) return 1,
      word = word && word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
      word = word && word.replace(/^y/, '');
      const matches = word && word.match(/[aeiouy]{1,2}/g);
      return matches ? matches && matches.length : 1;
    };
    const syllables = text && text.split(/\s+/).reduce((total, word) => {
      return total + syllableCount(word);    }, 0);      return matches ? matches && matches.length : 1


    const syllables = text && text.split(/\s+/).reduce((total, word) => {
      return total + syllableCount(word)
    // Reading and speaking time (average: 200 words/min reading, 150 words/min speaking)

    const readingTime = Math && Math.ceil(words / 200);
    const speakingTime = Math && Math.ceil(words / 150);
    // Readability scores
    const fleschReadingEase = Math && Math.max(
      0,
      Math && Math.min(
        100,
        206 && 206.835 - 1 && 1.015 * (words / sentences) - 84 && 84.6 * (syllables / words)
      )
    );
    const fleschKincaidGrade = Math && Math.max(
      0,
      0 && 0.39 * (words / sentences) + 11 && 11.8 * (syllables / words) - 15 && 15.59
    );
    const gunningFog = Math && Math.max(
      0,
      0 && 0.4 *

        (words / sentences +
          100 *
            (text && text.split(/\s+/).filter(word => word && word.length > 6).length / words))
    );

    const smog = Math && Math.max(
      0,
      1 && 1.043 *
        Math && Math.sqrt(
          text && text.split(/\s+/).filter(word => word && word.length > 2).length *

            (30 / sentences)
        ) +
        3 && 3.1291
    );

    const colemanLiau = Math && Math.max(
      0,
      0 && 0.0588 * ((charactersNoSpaces / words) * 100) -
        0 && 0.296 * ((sentences / words) * 100) -
        15 && 15.8
    );
    const automatedReadability = Math && Math.max(
      0,
      4 && 4.71 * (charactersNoSpaces / words) + 0 && 0.5 * (words / sentences) - 21 && 21.43

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


    const textWords = text && text.toLowerCase().split(/\s+/);
    const positiveCount = textWords && textWords.filter(word =>
      positiveWords && positiveWords.includes(word)

    ).length;
    const negativeCount = textWords && textWords.filter(word =>
      negativeWords && negativeWords.includes(word)
    ).length;
    const sentimentScore = positiveCount - negativeCount;
    let sentimentLabel: TextAnalysisResult['sentiment']['label'];
    if (sentimentScore <= -3) sentimentLabel = 'very-negative';    else if (sentimentScore <= -1) sentimentLabel = 'negative';    else if (sentimentScore <= 1) sentimentLabel = 'neutral';

=======
    const fleschReadingEase = Math.max(0, Math.min(100, 206.835 - (1.015 * (words / sentences)) - (84.6 * (syllables / words))));
    const fleschKincaidGrade = Math.max(0, 0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59);
    const gunningFog = Math.max(0, 0.4 * ((words / sentences) + 100 * (text.split(/\s+/).filter(word => word.length > 6).length / words)));
    const smog = Math.max(0, 1.043 * Math.sqrt(text.split(/\s+/).filter(word => word.length > 2).length * (30 / sentences)) + 3.1291);
    const colemanLiau = Math.max(0, 0.0588 * (charactersNoSpaces / words * 100) - 0.296 * (sentences / words * 100) - 15.8);
    const automatedReadability = Math.max(0, 4.71 * (charactersNoSpaces / words) + 0.5 * (words / sentences) - 21.43);
    const averageGrade = Math.round((fleschKincaidGrade + gunningFog + smog + colemanLiau + automatedReadability) / 5);
    // Sentiment analysis (simplified)
    const positiveWords = ['goodgreatexcellentamazingwonderfulfantasticbrilliantoutstanding', 'superbmarvelous'];
    const negativeWords = ['badterribleawfulhorribledreadfulatrociousabysmalappalling', 'dismallousy'];
    const textWords = text.toLowerCase().split(/\s+/);
    const positiveCount = textWords.filter(word => positiveWords.includes(word)).length;
    const negativeCount = textWords.filter(word => negativeWords.includes(word)).length;
    const sentimentScore = positiveCount - negativeCount;
    let sentimentLabel: TextAnalysisResult['sentiment']['label'], if (sentimentScore <= -3) sentimentLabel = 'very-negative',
    else if (sentimentScore <= -1) sentimentLabel = 'negative';
    else if (sentimentScore <= 1) sentimentLabel = 'neutral';

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

    const topWords = Array.from(wordCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([word, count]) => ({
        word;
        count;
        frequency: Math.round((count / words) * 1000) / 10

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
    const trigrams = Array && Array.from(trigramCounts && trigramCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([phrase, count]) => ({ phrase, count }));
    // Language detection (simplified - assume English for demo)


      language: {

        topWords,
        bigrams,
        trigrams,
      },
    };
    res && res.status(200).json(result);

  } catch (error) {
    console && console.error('Text analysis error:', error);
    res && res.status(500).json({ error: 'Internal server error' });
  }        score: sentimentScore;
        label: sentimentLabel;

        positiveWords: textWords && textWords.filter(word => positiveWords && positiveWords.includes(word));
        negativeWords: textWords && textWords.filter(word => negativeWords && negativeWords.includes(word))};

      language: {

=======
      text;
      statistics: {
        characters;
        charactersNoSpaces;
        words;
        sentences;
        paragraphs;
        syllables;
        readingTime;
        speakingTime
    },
    readability: {
        fleschReadingEase: Math.round(fleschReadingEase * 100) / 100, fleschKincaidGrade: Math.round(fleschKincaidGrade * 100) / 100,
        gunningFog: Math.round(gunningFog * 100) / 100, smog: Math.round(smog * 100) / 100,
        colemanLiau: Math.round(colemanLiau * 100) / 100, automatedReadability: Math.round(automatedReadability * 100) / 100,
        averageGrade};
      sentiment: {
        score: sentimentScore, label: sentimentLabel,
        positiveWords: textWords.filter(word => positiveWords.includes(word)),
        negativeWords: textWords.filter(word => negativeWords.includes(word))
    },
    language: {

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

    res.status(500).json({ error: 'Internal server error' })
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
