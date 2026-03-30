'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, RefreshCw, Zap, Download, Plus, Trash2, Shuffle } from 'lucide-react';

function generateUUIDv4(): string {
  const hex = '0123456789abcdef';
  const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return template.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return hex[v];
  });
}

function generateUUIDv7(): string {
  const hex = '0123456789abcdef';
  const now = BigInt(Date.now());
  const ts = now.toString(16).padStart(12, '0');
  const rand = () => hex[(Math.random() * 16) | 0];
  const randN = (n: number) => Array.from({ length: n }, rand).join('');
  // UUIDv7: unix_ts_ms (48 bits) | ver (4 bits) | rand_a (12 bits) | var (2 bits) | rand_b (62 bits)
  const timeHi = ts.slice(0, 8);
  const timeLo = ts.slice(8, 12);
  const randA = randN(3);
  const randB = randN(12);
  return `${timeHi}-${timeLo}-7${randA}-${'89ab'[(Math.random() * 4) | 0]}${randB.slice(0, 3)}-${randB.slice(3)}`;
}

type UUIDVersion = 'v4' | 'v7';

export default function UUIDGenerator() {
  const [version, setVersion] = useState<UUIDVersion>('v4');
  const [uuids, setUuids] = useState<string[]>([generateUUIDv4()]);
  const [count, setCount] = useState(1);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [includeBraces, setIncludeBraces] = useState(false);
  const [includeHyphens, setIncludeHyphens] = useState(true);

  const formatUUID = useCallback(
    (uuid: string) => {
      let result = uuid;
      if (!includeHyphens) result = result.replace(/-/g, '');
      if (uppercase) result = result.toUpperCase();
      if (includeBraces) result = `{${result}}`;
      return result;
    },
    [uppercase, includeBraces, includeHyphens],
  );

  const generate = useCallback(() => {
    const generator = version === 'v4' ? generateUUIDv4 : generateUUIDv7;
    const newUuids = Array.from({ length: Math.min(count, 100) }, () => generator());
    setUuids(newUuids);
    setCopiedIndex(null);
    setCopiedAll(false);
  }, [version, count]);

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const copyAll = async () => {
    const all = uuids.map(formatUUID).join('\n');
    await navigator.clipboard.writeText(all);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const downloadAll = () => {
    const all = uuids.map(formatUUID).join('\n');
    const blob = new Blob([all], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `uuids-${version}-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const removeUUID = (index: number) => {
    setUuids((prev) => prev.filter((_, i) => i !== index));
  };

  const addOne = () => {
    const generator = version === 'v4' ? generateUUIDv4 : generateUUIDv7;
    setUuids((prev) => [...prev, generator()]);
  };

  const formattedUuids = uuids.map(formatUUID);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/20">
              <Shuffle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">UUID Generator</h1>
            <p className="mt-2 text-slate-600">
              Generate cryptographically unique identifiers — UUID v4 (random) or v7 (time-ordered)
            </p>
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex flex-wrap items-end gap-4">
            {/* Version selector */}
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Version</label>
              <div className="flex rounded-lg border border-slate-200 overflow-hidden">
                {(['v4', 'v7'] as UUIDVersion[]).map((v) => (
                  <button
                    key={v}
                    onClick={() => setVersion(v)}
                    className={`px-4 py-2 text-sm font-semibold transition ${
                      version === v ? 'bg-indigo-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {v === 'v4' ? 'v4 (Random)' : 'v7 (Time-ordered)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Count */}
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Count</label>
              <input
                type="number"
                min={1}
                max={100}
                value={count}
                onChange={(e) => setCount(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
                className="w-24 rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Format options */}
            <div className="flex flex-wrap gap-3">
              <label className="flex items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={uppercase}
                  onChange={(e) => setUppercase(e.target.checked)}
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                Uppercase
              </label>
              <label className="flex items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={includeBraces}
                  onChange={(e) => setIncludeBraces(e.target.checked)}
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                Braces
              </label>
              <label className="flex items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={includeHyphens}
                  onChange={(e) => setIncludeHyphens(e.target.checked)}
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                Hyphens
              </label>
            </div>

            {/* Generate button */}
            <button
              onClick={generate}
              className="ml-auto flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition"
            >
              <RefreshCw className="h-4 w-4" />
              Generate
            </button>
          </div>
        </motion.div>

        {/* UUID List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
        >
          {/* Toolbar */}
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-4 py-3">
            <span className="text-sm font-medium text-slate-600">
              {uuids.length} UUID{uuids.length !== 1 ? 's' : ''} generated
            </span>
            <div className="flex gap-2">
              <button
                onClick={addOne}
                className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                <Plus className="h-3 w-3" />
                Add one
              </button>
              <button
                onClick={copyAll}
                className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                {copiedAll ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                {copiedAll ? 'Copied!' : 'Copy all'}
              </button>
              <button
                onClick={downloadAll}
                className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                <Download className="h-3 w-3" />
                Download .txt
              </button>
            </div>
          </div>

          {/* UUID rows */}
          <div className="divide-y divide-slate-100">
            {formattedUuids.map((uuid, i) => (
              <div key={i} className="group flex items-center gap-3 px-4 py-3 hover:bg-indigo-50/50 transition">
                <span className="w-8 text-right text-xs text-slate-400 font-mono">{i + 1}</span>
                <code className="flex-1 font-mono text-sm text-slate-800 break-all">{uuid}</code>
                <button
                  onClick={() => copyToClipboard(uuid, i)}
                  className="shrink-0 rounded-md p-1.5 text-slate-400 hover:bg-indigo-100 hover:text-indigo-600 transition"
                  title="Copy UUID"
                >
                  {copiedIndex === i ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                </button>
                {uuids.length > 1 && (
                  <button
                    onClick={() => removeUUID(i)}
                    className="shrink-0 rounded-md p-1.5 text-slate-400 hover:bg-rose-100 hover:text-rose-600 transition"
                    title="Remove"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-slate-900">About UUID versions</h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
              <h3 className="font-semibold text-indigo-900">UUID v4 (Random)</h3>
              <p className="mt-1 text-sm text-indigo-800/80">
                122 bits of pure randomness. The most widely used version. Probability of collision is
                astronomically low — you&apos;d need to generate 2.71 × 10¹⁸ UUIDs for a 50% chance of one
                duplicate.
              </p>
            </div>
            <div className="rounded-xl border border-violet-100 bg-violet-50/50 p-4">
              <h3 className="font-semibold text-violet-900">UUID v7 (Time-ordered)</h3>
              <p className="mt-1 text-sm text-violet-800/80">
                Embeds a Unix timestamp in milliseconds for natural chronological sorting. Ideal for database
                primary keys — better index performance than v4 because new records append to the B-tree
                instead of scattering randomly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
