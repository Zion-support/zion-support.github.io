'use client';

import { useState } from 'react';
import Link from 'next/link';

function randomHex(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

export default function ColorGenerator() {
  const [color, setColor] = useState(randomHex());

  const generate = () => setColor(randomHex());

  return (
    <main className="mx-auto max-w-3xl p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Random Color Generator</h1>
      <div
        className="p-6 rounded-lg mb-4"
        style={{ backgroundColor: color, color: '#fff', minHeight: '80px' }}
      >
        <h2 className="text-2xl font-mono">{color.toUpperCase()}</h2>
      </div>
      <div className="flex gap-2 justify-center mb-4">
        <button
          onClick={generate}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
        >
          Generate
        </button>
        <button
          onClick={() => navigator.clipboard.writeText(color).catch(() => {})}
          className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600"
        >
          Copy
        </button>
      </div>
      <div className="mt-8">
        <Link href="/free-tools-hub" className="text-sm text-indigo-400 hover:underline">
          ← Back to Free Tools Hub
        </Link>
      </div>
    </main>
  );
}