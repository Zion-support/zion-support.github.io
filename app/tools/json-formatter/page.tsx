'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function JsonFormatter() {
  const [input, setInput] = useState('{\n  \n}');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const format = () => {
    try {
      const obj = JSON.parse(input);
      setOutput(JSON.stringify(obj, null, 2));
      setError('');
    } catch (e) {
      setError('Invalid JSON');
      setOutput('');
    }
  };

  const minify = () => {
    try {
      const obj = JSON.parse(input);
      setOutput(JSON.stringify(obj));
      setError('');
    } catch (e) {
      setError('Invalid JSON');
      setOutput('');
    }
  };

  const copyOutput = () => {
    if (output) navigator.clipboard.writeText(output).catch(() => {});
  };

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold mb-4">JSON Formatter & Validator</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-32 p-3 border border-slate-600 rounded-lg bg-slate-900 text-white font-mono text-sm"
        placeholder="Paste raw JSON here..."
      />
      <div className="flex gap-2 mt-3">
        <button onClick={format} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500">
          Format
        </button>
        <button onClick={minify} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500">
          Minify
        </button>
        <button onClick={copyOutput} className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600">
          Copy
        </button>
      </div>
      {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
      <textarea
        value={output}
        readOnly
        className="w-full h-32 p-3 mt-4 border border-slate-600 rounded-lg bg-slate-900 text-white font-mono text-sm"
        placeholder="Formatted output..."
      />
      <div className="mt-6">
        <Link href="/free-tools-hub" className="text-sm text-purple-400 hover:underline">
          ← Back to Free Tools Hub
        </Link>
      </div>
    </main>
  );
}