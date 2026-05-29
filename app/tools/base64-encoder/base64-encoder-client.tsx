'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Base64EncoderClient() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');

  const handleConvert = () => {
    try {
      if (mode === 'encode') {
        setOutput(btoa(input));
      } else {
        setOutput(atob(input));
      }
    } catch (error) {
      setOutput('Invalid input');
    }
  };

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold mb-4">Base64 Encoder/Decoder</h1>
      <p className="mb-6 text-gray-300">
        Easily encode or decode text to/from Base64 format. Useful for embedding
        small files in CSS/HTML, encoding credentials, or obfuscating data.
      </p>
      <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Mode
          </label>
          <div className="flex space-x-4">
            <button
              onClick={() => setMode('encode')}
              className={`
                px-4 py-2 rounded-lg font-medium
                ${mode === 'encode' ? 'bg-purple-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}
              `}
            >
              Encode
            </button>
            <button
              onClick={() => setMode('decode')}
              className={`
                px-4 py-2 rounded-lg font-medium
                ${mode === 'decode' ? 'bg-purple-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}
              `}
            >
              Decode
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Input
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={6}
            className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
            placeholder="Enter text to encode or decode..."
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Output
          </label>
          <textarea
            value={output}
            readOnly
            rows={6}
            className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500"
            placeholder="Result will appear here..."
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleConvert}
            className="mt-4 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-purple-700/20 transition hover:-translate-y-0.5"
          >
            Convert
          </button>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link href="/free-tools" className="text-sm text-purple-400 hover:underline">
          ← Back to Free Tools Hub
        </Link>
      </div>
    </main>
  );
}