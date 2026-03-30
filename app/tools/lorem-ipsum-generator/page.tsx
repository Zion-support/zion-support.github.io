'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, RefreshCw, Type, FileText, AlignLeft } from 'lucide-react';

const LOREM_WORDS = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
  'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
  'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
  'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
  'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate',
  'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint',
  'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia',
  'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum', 'perspiciatis', 'unde',
  'omnis', 'iste', 'natus', 'error', 'voluptatem', 'accusantium', 'doloremque',
  'laudantium', 'totam', 'rem', 'aperiam', 'eaque', 'ipsa', 'quae', 'ab', 'illo',
  'inventore', 'veritatis', 'quasi', 'architecto', 'beatae', 'vitae', 'dicta',
];

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function generateSentence(wordCount: number, startLorem: boolean): string {
  const words: string[] = [];
  if (startLorem) {
    words.push('Lorem', 'ipsum');
  }
  while (words.length < wordCount) {
    words.push(LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)]);
  }
  words[0] = capitalize(words[0]);
  return words.join(' ') + '.';
}

function generateParagraph(sentenceCount: number, wordsPerSentence: number, startLorem: boolean): string {
  const sentences: string[] = [];
  for (let i = 0; i < sentenceCount; i++) {
    sentences.push(generateSentence(wordsPerSentence, startLorem && i === 0));
  }
  return sentences.join(' ');
}

type GeneratorMode = 'paragraphs' | 'sentences' | 'words';

export default function LoremIpsumGenerator() {
  const [mode, setMode] = useState<GeneratorMode>('paragraphs');
  const [count, setCount] = useState(3);
  const [sentencesPerParagraph, setSentencesPerParagraph] = useState(4);
  const [wordsPerSentence, setWordsPerSentence] = useState(12);
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);
  const [startLorem, setStartLorem] = useState(true);

  const generate = useCallback(() => {
    const text = (() => {
      if (mode === 'paragraphs') {
        const paras: string[] = [];
        for (let i = 0; i < count; i++) {
          paras.push(generateParagraph(sentencesPerParagraph, wordsPerSentence, startLorem && i === 0));
        }
        return paras.join('\n\n');
      } else if (mode === 'sentences') {
        const sentences: string[] = [];
        for (let i = 0; i < count; i++) {
          sentences.push(generateSentence(wordsPerSentence, startLorem && i === 0));
        }
        return sentences.join(' ');
      }
      const words: string[] = [];
      if (startLorem) words.push('Lorem', 'ipsum');
      while (words.length < count) {
        words.push(LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)]);
      }
      words[0] = capitalize(words[0]);
      return words.join(' ');
    })();
    setOutput(text);
    setCopied(false);
  }, [mode, count, sentencesPerParagraph, wordsPerSentence, startLorem]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [output]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lorem-ipsum.txt';
    a.click();
    URL.revokeObjectURL(url);
  }, [output]);

  const wordCount = output ? output.split(/\s+/).filter(Boolean).length : 0;
  const charCount = output.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-amber-400 text-sm mb-4">
            <Type size={14} /> Free Tool
          </div>
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Lorem Ipsum Generator
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Generate customizable placeholder text for your designs, mockups, and prototypes. Choose paragraphs, sentences, or words.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-6">

          <div className="flex flex-wrap gap-2 mb-6">
            {(['paragraphs', 'sentences', 'words'] as GeneratorMode[]).map((m) => (
              <button key={m} onClick={() => { setMode(m); setCount(m === 'paragraphs' ? 3 : m === 'sentences' ? 5 : 50); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${mode === m
                  ? 'bg-amber-500 text-gray-900'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'}`}>
                {m === 'paragraphs' ? <AlignLeft size={14} className="inline mr-1.5" /> : null}
                {m === 'sentences' ? <FileText size={14} className="inline mr-1.5" /> : null}
                {m === 'words' ? <Type size={14} className="inline mr-1.5" /> : null}
                {capitalize(m)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">
                {mode === 'paragraphs' ? 'Paragraphs' : mode === 'sentences' ? 'Sentences' : 'Words'}
              </label>
              <input type="number" min={1} max={mode === 'words' ? 500 : 20} value={count}
                onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-amber-500 focus:outline-none" />
            </div>
            {mode === 'paragraphs' && (
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Sentences / paragraph</label>
                <input type="number" min={1} max={10} value={sentencesPerParagraph}
                  onChange={(e) => setSentencesPerParagraph(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-amber-500 focus:outline-none" />
              </div>
            )}
            {mode !== 'words' && (
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Words / sentence</label>
                <input type="number" min={3} max={30} value={wordsPerSentence}
                  onChange={(e) => setWordsPerSentence(Math.max(3, parseInt(e.target.value) || 3))}
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-amber-500 focus:outline-none" />
              </div>
            )}
          </div>

          <label className="flex items-center gap-2 text-sm text-gray-300 mb-6 cursor-pointer">
            <input type="checkbox" checked={startLorem} onChange={(e) => setStartLorem(e.target.checked)}
              className="rounded border-gray-600 bg-gray-700 text-amber-500 focus:ring-amber-500" />
            Start with &ldquo;Lorem ipsum&hellip;&rdquo;
          </label>

          <button onClick={generate}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 font-semibold px-6 py-3 rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all">
            <RefreshCw size={16} /> Generate
          </button>
        </motion.div>

        {output && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-sm text-gray-400">
                <span>{wordCount} words</span>
                <span>{charCount} chars</span>
              </div>
              <div className="flex gap-2">
                <button onClick={handleCopy}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all ${copied ? 'bg-green-500/20 text-green-400' : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'}`}>
                  {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy</>}
                </button>
                <button onClick={handleDownload}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm bg-gray-700/50 text-gray-300 hover:bg-gray-700 transition-all">
                  Download
                </button>
              </div>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-4 max-h-96 overflow-y-auto">
              <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{output}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
