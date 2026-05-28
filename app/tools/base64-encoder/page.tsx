'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Base64Encoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const encode = () => {
    try {
      setOutput(btoa(input));
    } catch {
      setOutput('Error: invalid input for encoding');
    }
  };

  const decode = () => {
    try {
      setOutput(atob(input));
    } catch {
      setOutput('Error: invalid input for decoding');
    }
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output).catch(() => {});
  };

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold mb-4">Base64 Encoder/Decoder</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-32 p-3 border border-slate-600 rounded-lg bg-slate-900 text-white"
        placeholder="Enter text to encode or decode..."
      />
      <div className="flex gap-2 mt-3">
        <button onClick={encode} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500">
          Encode
        </button>
        <button onClick={decode} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500">
          Decode
        </button>
        <button onClick={copyOutput} className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600">
          Copy
        </button>
        <button onClick={() => { setInput(''); setOutput(''); }} className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600">
          Clear
        </button>
      </div>
      <textarea
        value={output}
        readOnly
        className="w-full h-32 p-3 mt-4 border border-slate-600 rounded-lg bg-slate-900 text-white"
        placeholder="Output will appear here..."
      />
      <div className="mt-6 text-center">
        <Link href="/free-tools-hub" className="text-sm text-purple-400 hover:underline">
          ← Back to Free Tools Hub
        </Link>
      </div>
    </main>
  );
}