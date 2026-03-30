'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, RotateCcw, Shuffle, Type, FileText } from 'lucide-react';

const LOREM_WORDS = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do',
  'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'enim',
  'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut',
  'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit',
  'voluptate', 'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint',
  'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia', 'deserunt',
  'mollit', 'anim', 'id', 'est', 'laborum', 'perspiciatis', 'unde', 'omnis', 'iste', 'natus',
  'error', 'voluptatem', 'accusantium', 'doloremque', 'laudantium', 'totam', 'rem', 'aperiam',
  'eaque', 'ipsa', 'quae', 'ab', 'illo', 'inventore', 'veritatis', 'quasi', 'architecto', 'beatae',
  'vitae', 'dicta', 'explicabo', 'nemo', 'ipsam', 'quia', 'voluptas', 'aspernatur', 'aut', 'odit',
  'fugit', 'consequuntur', 'magni', 'dolores', 'eos', 'ratione', 'sequi', 'nesciunt', 'neque',
  'porro', 'quisquam', 'dolorem', 'adipisci', 'numquam', 'eius', 'modi', 'tempora', 'incidunt',
  'magnam', 'quaerat', 'etiam', 'minus', 'quod', 'maxime', 'placeat', 'facere', 'possimus',
  'assumenda', 'repellendus', 'temporibus', 'autem', 'quibusdam', 'officiis', 'debitis', 'rerum',
  'necessitatibus', 'saepe', 'eveniet', 'voluptates', 'repudiandae', 'recusandae', 'itaque',
  'earum', 'hic', 'tenetur', 'sapiente', 'delectus', 'reiciendis', 'maiores', 'alias', 'perferendis',
  'doloribus', 'asperiores', 'repellat', 'minima', 'nostrum', 'exercitationem', 'ullam', 'corporis',
  'suscipit', 'laboriosam', 'aliquid', 'commodi', 'consequatur', 'abore', 'harum', 'quidem', 'rerum',
  'facilis', 'expedita', 'distinctio', 'nam', 'libero', 'tempore', 'soluta', 'nobis', 'eligendi',
  'optio', 'nihil', 'impedit', 'quo', 'minus', 'quod', 'maxime', 'illum',
];

const STARTING_PHRASES = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
];

function randomInt(min: number, max: number): number {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  return min + (arr[0] % (max - min + 1));
}

function pickRandom<T>(arr: T[]): T {
  return arr[randomInt(0, arr.length - 1)];
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateWord(): string {
  return pickRandom(LOREM_WORDS);
}

function generateSentence(wordCount?: number): string {
  const count = wordCount ?? randomInt(8, 18);
  const words = Array.from({ length: count }, () => generateWord());
  words[0] = capitalize(words[0]);
  return words.join(' ') + '.';
}

function generateParagraph(sentenceCount?: number): string {
  const count = sentenceCount ?? randomInt(3, 7);
  return Array.from({ length: count }, () => generateSentence()).join(' ');
}

function generateText(type: 'paragraphs' | 'sentences' | 'words', count: number, startWithLorem: boolean): string {
  switch (type) {
    case 'paragraphs': {
      const paras = [];
      if (startWithLorem) {
        paras.push(STARTING_PHRASES[0] + ' ' + Array.from({ length: randomInt(2, 5) }, () => generateSentence()).join(' '));
        for (let i = 1; i < count; i++) {
          paras.push(generateParagraph());
        }
      } else {
        for (let i = 0; i < count; i++) {
          paras.push(generateParagraph());
        }
      }
      return paras.join('\n\n');
    }
    case 'sentences': {
      const sentences = [];
      if (startWithLorem) {
        sentences.push(STARTING_PHRASES[0]);
        for (let i = 1; i < count; i++) sentences.push(generateSentence());
      } else {
        for (let i = 0; i < count; i++) sentences.push(generateSentence());
      }
      return sentences.join(' ');
    }
    case 'words': {
      const words = [];
      if (startWithLorem) {
        words.push('Lorem', 'ipsum', 'dolor', 'sit', 'amet');
        for (let i = 5; i < count; i++) words.push(generateWord());
      } else {
        for (let i = 0; i < count; i++) words.push(generateWord());
      }
      return words.join(' ');
    }
  }
}

type OutputFormat = 'plain' | 'html' | 'markdown';

function wrapOutput(text: string, format: OutputFormat, type: 'paragraphs' | 'sentences' | 'words'): string {
  if (format === 'plain') return text;
  if (type === 'paragraphs') {
    const paras = text.split('\n\n');
    if (format === 'html') {
      return paras.map(p => `<p>${p}</p>`).join('\n');
    }
    return paras.map(p => p).join('\n\n');
  }
  if (format === 'html') return `<p>${text}</p>`;
  return text;
}

export default function LoremIpsumGenerator() {
  const [type, setType] = useState<'paragraphs' | 'sentences' | 'words'>('paragraphs');
  const [count, setCount] = useState(3);
  const [format, setFormat] = useState<OutputFormat>('plain');
  const [startWithLorem, setStartWithLorem] = useState(true);
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    const raw = generateText(type, count, startWithLorem);
    setOutput(wrapOutput(raw, format, type));
  }, [type, count, format, startWithLorem]);

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement('textarea');
      el.value = output;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClear = () => {
    setOutput('');
    setCopied(false);
  };

  const wordCount = output ? output.split(/\s+/).filter(Boolean).length : 0;
  const charCount = output.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-50 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Lorem Ipsum Generator</h1>
          <p className="mt-2 text-lg text-slate-600">
            Generate placeholder text for designs, prototypes, and mockups
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {/* Controls row */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Type selector */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Generate by</label>
              <div className="flex gap-1">
                {(['paragraphs', 'sentences', 'words'] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`flex-1 rounded-lg px-2 py-2 text-xs font-semibold transition capitalize ${
                      type === t ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1, 3)}
                  </button>
                ))}
              </div>
            </div>

            {/* Count */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Count: {count}</label>
              <input
                type="range"
                min={1}
                max={type === 'words' ? 500 : type === 'sentences' ? 50 : 20}
                value={count}
                onChange={e => setCount(Number(e.target.value))}
                className="w-full accent-violet-600"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>1</span>
                <span>{type === 'words' ? 500 : type === 'sentences' ? 50 : 20}</span>
              </div>
            </div>

            {/* Format */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Format</label>
              <div className="flex gap-1">
                {(['plain', 'html', 'markdown'] as OutputFormat[]).map(f => (
                  <button
                    key={f}
                    onClick={() => setFormat(f)}
                    className={`flex-1 rounded-lg px-2 py-2 text-xs font-semibold transition capitalize ${
                      format === f ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {f === 'markdown' ? 'MD' : f.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Options */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Options</label>
              <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={startWithLorem}
                  onChange={e => setStartWithLorem(e.target.checked)}
                  className="rounded accent-violet-600"
                />
                Start with &quot;Lorem ipsum&quot;
              </label>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mb-4 flex gap-2">
            <button
              onClick={generate}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 transition"
            >
              <Shuffle className="h-4 w-4" /> Generate
            </button>
            <button
              onClick={handleCopy}
              disabled={!output}
              className="flex items-center gap-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
            <button
              onClick={handleClear}
              className="flex items-center gap-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>

          {/* Output */}
          {output && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500">{wordCount} words</span>
                  <span className="text-xs text-slate-500">{charCount} chars</span>
                </div>
              </div>
              <div className="rounded-xl border border-slate-300 bg-slate-50 p-4">
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-800">
                  {output}
                </pre>
              </div>
            </motion.div>
          )}

          {!output && (
            <div className="rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-12 text-center">
              <Type className="mx-auto mb-3 h-10 w-10 text-slate-300" />
              <p className="text-slate-400">Click <strong>Generate</strong> to create placeholder text</p>
            </div>
          )}

          {/* Quick stats */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-violet-50 p-4 text-center">
              <FileText className="mx-auto mb-1 h-5 w-5 text-violet-600" />
              <p className="text-2xl font-bold text-violet-900">{output ? output.split(/\n\n/).length : 0}</p>
              <p className="text-xs text-violet-700">Paragraphs</p>
            </div>
            <div className="rounded-xl bg-violet-50 p-4 text-center">
              <Type className="mx-auto mb-1 h-5 w-5 text-violet-600" />
              <p className="text-2xl font-bold text-violet-900">{wordCount}</p>
              <p className="text-xs text-violet-700">Words</p>
            </div>
            <div className="rounded-xl bg-violet-50 p-4 text-center">
              <Copy className="mx-auto mb-1 h-5 w-5 text-violet-600" />
              <p className="text-2xl font-bold text-violet-900">{charCount}</p>
              <p className="text-xs text-violet-700">Characters</p>
            </div>
          </div>

          {/* Info */}
          <div className="mt-6 rounded-xl bg-violet-50 p-4">
            <h3 className="text-sm font-semibold text-violet-900">About Lorem Ipsum</h3>
            <p className="mt-1 text-sm text-violet-800">
              Lorem Ipsum is placeholder text used since the 1500s when an unknown printer scrambled
              a galley of type to make a type specimen book. It has survived not only five centuries
              but also the leap into electronic typesetting. Use it to fill space in designs before
              final content is available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
