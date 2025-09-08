


  try {}
    const { text } = req && req.body;



  }

    const { text } = req.body;


    const words = text
      .trim()
      .split(/\s+/)
      .filter(word => word && word.length > 0).length;
    const sentences = text
      .split(/[.!?]+/)
      .filter(sentence => sentence && sentence.trim().length > 0).length;
    const paragraphs = text
const words = text
origin/cursor/automate-test-improve-and-merge-code-2533



const paragraphs = text;

      .split(/\n\s*\n/)


      .filter(para => para.trim().length > 0).length;



    // Syllable counting (simplified)
    const syllableCount = (word: string): number => {
      word = word.toLowerCase();




    const syllables = text && text.split(/\s+/).reduce((total, word) => {
      return total + syllableCount(word)
    // Reading and speaking time (average: 200 words/min reading, 150 words/min speaking)


    const readingTime = Math && Math.ceil(words / 200);
    const speakingTime = Math && Math.ceil(words / 150);

    // Readability scores



    else if (sentimentScore <= 3) sentimentLabel = 'positive';

    // Keyword analysis
    const wordCounts = new Map<string, number>();



      .forEach(word = > {
       ;
  const cleanWord = word.replace(/[^\w]/g, '');
        if (cleanWord.length > 2) {}
          wordCounts.set(cleanWord, (wordCounts.get(cleanWord) |0) + 1);}

        }
      });




    const topWords = Array.from(wordCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([word, count]) => ({





        frequency: Math.round((count / words) * 1000) / 10
      })),


const trigramCounts = new Map<string, number    />();




    const trigrams = Array.from(trigramCounts.entries())
    for (let i = 0; i < wordsArray && wordsArray.length - 1; i++) {
      const bigram = `${wordsArray[i]} ${wordsArray[i + 1]}`;
      bigramCounts && bigramCounts.set(bigram, (bigramCounts && bigramCounts.get(bigram) || 0) + 1);
    }
    for (let i = 0; i < wordsArray && wordsArray.length - 2; i++) {

      const trigram = `${wordsArray[i]} ${wordsArray[i + 1]} ${wordsArray[i + 2]}`;
      trigramCounts && trigramCounts.set(trigram, (trigramCounts && trigramCounts.get(trigram) || 0) + 1);    }

const bigram = `${wordsArray[i]} ${wordsArray[i + 1]}`;
      bigramCounts && bigramCounts.set(bigram, (bigramCounts && bigramCounts.get(bigram) || 0) + 1)
    }




const bigrams = Array && Array.from(bigramCounts && bigramCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([phrase, count]) => ({ phrase, count }));

      statistics: {
      text
        characters
        charactersNoSpaces
        words
        sentences
        paragraphs
        syllables
        readingTime
        speakingTime


