'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function UuidGenerator() {
  const [uuid, setUuid] = useState('');

  const generate = () => {
    const newUuid = typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : [
          Math.random().toString(16).slice(2, 10),
          Math.random().toString(16).slice(2, 6),
          '4' + Math.random().toString(16).slice(1, 4),
          ((parseInt(Math.random().toString(16).slice(1, 2), 16) & 0x3) | 0x8).toString(16) + Math.random().toString(16).slice(2, 4),
          Math.random().toString(16).slice(2, 14)
        ].join('-');
    setUuid(newUuid);
  };

  const copyUuid = () => {
    if (uuid) navigator.clipboard.writeText(uuid).catch(() => {});
  };

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold mb-4">UUID v4 Generator</h1>
      <p className="mb-6 text-gray-300">
        Generate random UUID v4 identifiers for databases, APIs, testing, and more.
      </p>
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={generate}
          className="rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-purple-700/20 transition hover:-translate-y-0.5 transform hover:scale-105"
        >
          Generate UUID
        </button>
        {uuid && (
          <div className="flex items-center gap-3 mt-4">
            <p className="text-lg font-mono text-indigo-400 bg-slate-900 px-4 py-2 rounded-lg">{uuid}</p>
            <button onClick={copyUuid} className="px-3 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 text-sm">
              Copy
            </button>
          </div>
        )}
        <div className="mt-6">
          <Link href="/free-tools-hub" className="text-sm text-purple-400 hover:underline">
            ← Back to Free Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}