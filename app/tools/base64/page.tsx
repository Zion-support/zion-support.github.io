'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Base64Tool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');

  const convert = () => {
    try {
      if (mode === 'encode') {
        setOutput(btoa(input));
      } else {
        setOutput(atob(input));
      }
    } catch {
      setOutput('Invalid input for decoding');
    }
  };

  const copyOutput = () => {
    if (output) navigator.clipboard.writeText(output).catch(() => {});
  };

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold mb-4">Base64 Encoder/Decoder</h1>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode('encode')}
          className={`px-3 py-1 rounded ${mode === 'encode' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          Encode
        </button>
        <button
          onClick={() => setMode('decode')}
          className={`px-3 py-1 rounded ${mode === 'decode' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          Decode
        </button>
        <button onClick={copyOutput} className="px-3 py-1 rounded bg-gray-700 text-gray-300 hover:bg-gray-600">
          Copy
        </button>
      </div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text..."
        className="w-full h-32 p-2 border border-slate-600 rounded bg-slate-900 text-white mb-2"
      />
      <button onClick={convert} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
        Convert
      </button>
      <textarea
        readOnly
        value={output}
        placeholder="Result"
        className="w-full h-32 p-2 border border-slate-600 rounded mt-4 bg-slate-900 text-white"
      />
      <div className="mt-4">
        <Link href="/free-tools-hub" className="text-sm text-blue-400 hover:underline">
          ← Back to Free Tools Hub
        </Link>
      </div>
    </main>
  );
}