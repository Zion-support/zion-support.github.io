'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoremIpsum() {
  const [count, setCount] = useState(150);
  const [text, setText] = useState('');

  const wordList = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
    'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor',
    'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua',
    'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
    'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip',
    'exea', 'commodo', 'consequat', 'duis', 'aute', 'irure',
    'in', 'reprehenderit', 'in', 'voluptate', 'velit',
    'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur',
    'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt'
  ];

  const generate = () => {
    const words = [];
    for (let i = 0; i < count; i++) {
      words.push(wordList[Math.floor(Math.random() * wordList.length)]);
    }
    // Capitalize first word
    if (words.length > 0) {
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    }
    setText(words.join(' ') + '.');
  };

  const copyText = () => {
    if (text) navigator.clipboard.writeText(text).catch(() => {});
  };

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold mb-6">Lorem Ipsum Generator</h1>

      <div className="flex gap-4 mb-4 items-center">
        <label className="text-slate-300">Words:</label>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-24 px-3 py-2 border border-slate-600 rounded bg-slate-900 text-white"
          min="1"
        />
        <button
          onClick={generate}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500"
        >
          Generate
        </button>
        {text && (
          <button
            onClick={copyText}
            className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600"
          >
            Copy
          </button>
        )}
      </div>

      <textarea
        value={text}
        readOnly
        placeholder="Click Generate to create placeholder text..."
        className="w-full h-48 p-3 border border-slate-600 rounded bg-slate-900 text-white mb-4"
      />

      <div>
        <Link href="/free-tools-hub" className="text-sm text-purple-400 hover:underline">
          ← Back to Free Tools Hub
        </Link>
      </div>
    </main>
  );
}