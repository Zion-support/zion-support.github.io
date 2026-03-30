'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Clock, RefreshCw, ArrowRight } from 'lucide-react';

type Tab = 'now' | 'convert' | 'diff';

export default function TimestampConverter() {
  const [activeTab, setActiveTab] = useState<Tab>('now');
  const [now, setNow] = useState(Date.now());
  const [copied, setCopied] = useState<string | null>(null);

  // Convert tab state
  const [inputValue, setInputValue] = useState('');
  const [inputFormat, setInputFormat] = useState<'auto' | 'unix-s' | 'unix-ms' | 'iso'>('auto');
  const [convertResult, setConvertResult] = useState<{
    unixS: number;
    unixMs: number;
    iso: string;
    utc: string;
    local: string;
    relative: string;
  } | null>(null);
  const [convertError, setConvertError] = useState('');

  // Diff tab state
  const [diffA, setDiffA] = useState('');
  const [diffB, setDiffB] = useState('');
  const [diffResult, setDiffResult] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const copy = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const parseTimestamp = useCallback((value: string, format: string): number | null => {
    const trimmed = value.trim();
    if (!trimmed) return null;

    if (format === 'unix-s') {
      const n = Number(trimmed);
      return isNaN(n) ? null : n * 1000;
    }
    if (format === 'unix-ms') {
      const n = Number(trimmed);
      return isNaN(n) ? null : n;
    }
    if (format === 'iso') {
      const d = new Date(trimmed);
      return isNaN(d.getTime()) ? null : d.getTime();
    }
    // Auto-detect
    // Pure digits
    if (/^\d+$/.test(trimmed)) {
      const n = Number(trimmed);
      // If 10 digits, it's seconds; if 13, milliseconds
      if (trimmed.length === 10) return n * 1000;
      if (trimmed.length === 13) return n;
      // Fallback: if > year 2100 in ms, treat as ms
      return n > 1e12 ? n : n * 1000;
    }
    // ISO-ish
    const d = new Date(trimmed);
    if (!isNaN(d.getTime())) return d.getTime();
    return null;
  }, []);

  const relativeTime = (ms: number): string => {
    const diff = Date.now() - ms;
    const abs = Math.abs(diff);
    const suffix = diff >= 0 ? 'ago' : 'from now';
    if (abs < 1000) return 'just now';
    if (abs < 60_000) return `${Math.floor(abs / 1000)}s ${suffix}`;
    if (abs < 3_600_000) return `${Math.floor(abs / 60_000)}m ${suffix}`;
    if (abs < 86_400_000) return `${Math.floor(abs / 3_600_000)}h ${suffix}`;
    return `${Math.floor(abs / 86_400_000)}d ${suffix}`;
  };

  const doConvert = useCallback(() => {
    setConvertError('');
    setConvertResult(null);
    const ms = parseTimestamp(inputValue, inputFormat);
    if (ms === null) {
      setConvertError('Could not parse timestamp. Try a Unix timestamp (seconds or ms) or ISO 8601 date string.');
      return;
    }
    const d = new Date(ms);
    setConvertResult({
      unixS: Math.floor(ms / 1000),
      unixMs: ms,
      iso: d.toISOString(),
      utc: d.toUTCString(),
      local: d.toLocaleString(),
      relative: relativeTime(ms),
    });
  }, [inputValue, inputFormat, parseTimestamp]);

  const doDiff = useCallback(() => {
    const a = parseTimestamp(diffA, 'auto');
    const b = parseTimestamp(diffB, 'auto');
    if (a === null || b === null) {
      setDiffResult('Could not parse one or both timestamps.');
      return;
    }
    const abs = Math.abs(b - a);
    const days = Math.floor(abs / 86_400_000);
    const hours = Math.floor((abs % 86_400_000) / 3_600_000);
    const mins = Math.floor((abs % 3_600_000) / 60_000);
    const secs = Math.floor((abs % 60_000) / 1000);
    const parts: string[] = [];
    if (days > 0) parts.push(`${days}d`);
    if (hours > 0) parts.push(`${hours}h`);
    if (mins > 0) parts.push(`${mins}m`);
    parts.push(`${secs}s`);
    setDiffResult(`Difference: ${parts.join(' ')} (${abs.toLocaleString()} ms)`);
  }, [diffA, diffB, parseTimestamp]);

  const nowDate = new Date(now);
  const nowData = [
    { label: 'Unix (seconds)', value: String(Math.floor(now / 1000)) },
    { label: 'Unix (milliseconds)', value: String(now) },
    { label: 'ISO 8601', value: nowDate.toISOString() },
    { label: 'UTC', value: nowDate.toUTCString() },
    { label: 'Local', value: nowDate.toLocaleString() },
  ];

  const tabs: { id: Tab; label: string }[] = [
    { id: 'now', label: 'Current Time' },
    { id: 'convert', label: 'Convert' },
    { id: 'diff', label: 'Difference' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-600 shadow-lg shadow-sky-500/20">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Timestamp Converter</h1>
            <p className="mt-2 text-slate-600">
              Convert between Unix timestamps, ISO 8601, and human-readable dates
            </p>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Current Time */}
        {activeTab === 'now' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            <div className="border-b border-slate-100 bg-sky-50 px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-semibold text-sky-800">Live — updating every second</span>
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {nowData.map((row) => (
                <div key={row.label} className="group flex items-center justify-between gap-4 px-6 py-4 hover:bg-sky-50/50 transition">
                  <span className="shrink-0 text-sm font-medium text-slate-500">{row.label}</span>
                  <div className="flex items-center gap-2 min-w-0">
                    <code className="font-mono text-sm text-slate-800 truncate">{row.value}</code>
                    <button
                      onClick={() => copy(row.value, row.label)}
                      className="shrink-0 rounded-md p-1.5 text-slate-400 hover:bg-sky-100 hover:text-sky-600 transition"
                    >
                      {copied === row.label ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Convert */}
        {activeTab === 'convert' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-end gap-4">
              <div className="flex-1 min-w-[200px]">
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Timestamp or date
                </label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && doConvert()}
                  placeholder='e.g. 1711742400, 1711742400000, "2024-03-29T12:00:00Z"'
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 font-mono text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">Format</label>
                <select
                  value={inputFormat}
                  onChange={(e) => setInputFormat(e.target.value as typeof inputFormat)}
                  className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                >
                  <option value="auto">Auto-detect</option>
                  <option value="unix-s">Unix (seconds)</option>
                  <option value="unix-ms">Unix (milliseconds)</option>
                  <option value="iso">ISO 8601</option>
                </select>
              </div>
              <button
                onClick={doConvert}
                className="flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                <ArrowRight className="h-4 w-4" />
                Convert
              </button>
            </div>

            {convertError && (
              <div className="mt-4 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {convertError}
              </div>
            )}

            {convertResult && (
              <div className="mt-6 divide-y divide-slate-100 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
                {[
                  { label: 'Unix (seconds)', value: String(convertResult.unixS) },
                  { label: 'Unix (milliseconds)', value: String(convertResult.unixMs) },
                  { label: 'ISO 8601', value: convertResult.iso },
                  { label: 'UTC', value: convertResult.utc },
                  { label: 'Local', value: convertResult.local },
                  { label: 'Relative', value: convertResult.relative },
                ].map((row) => (
                  <div key={row.label} className="group flex items-center justify-between gap-4 px-4 py-3 hover:bg-white transition">
                    <span className="shrink-0 text-sm font-medium text-slate-500">{row.label}</span>
                    <div className="flex items-center gap-2 min-w-0">
                      <code className="font-mono text-sm text-slate-800 truncate">{row.value}</code>
                      <button
                        onClick={() => copy(row.value, `convert-${row.label}`)}
                        className="shrink-0 rounded-md p-1.5 text-slate-400 hover:bg-sky-100 hover:text-sky-600 transition"
                      >
                        {copied === `convert-${row.label}` ? (
                          <Check className="h-4 w-4 text-emerald-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quick examples */}
            <div className="mt-4">
              <p className="text-xs font-medium text-slate-500 mb-2">Quick examples:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Now (s)', value: String(Math.floor(Date.now() / 1000)) },
                  { label: 'Now (ms)', value: String(Date.now()) },
                  { label: 'ISO now', value: new Date().toISOString() },
                  { label: 'Unix epoch', value: '0' },
                  { label: 'Y2K', value: '946684800' },
                ].map((ex) => (
                  <button
                    key={ex.label}
                    onClick={() => {
                      setInputValue(ex.value);
                      setInputFormat('auto');
                    }}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-sky-300 hover:bg-sky-50 transition"
                  >
                    {ex.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Diff */}
        {activeTab === 'diff' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-slate-600 mb-4">
              Calculate the time difference between two timestamps or dates.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Timestamp A
                </label>
                <input
                  type="text"
                  value={diffA}
                  onChange={(e) => setDiffA(e.target.value)}
                  placeholder="Timestamp or date"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 font-mono text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Timestamp B
                </label>
                <input
                  type="text"
                  value={diffB}
                  onChange={(e) => setDiffB(e.target.value)}
                  placeholder="Timestamp or date"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 font-mono text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                />
              </div>
            </div>
            <button
              onClick={doDiff}
              className="mt-4 flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
            >
              <ArrowRight className="h-4 w-4" />
              Calculate difference
            </button>
            {diffResult && (
              <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 px-5 py-4">
                <p className="text-lg font-semibold text-sky-900">{diffResult}</p>
              </div>
            )}
          </motion.div>
        )}

        {/* Reference table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-slate-900">Quick reference</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-700">Unix timestamp</h3>
              <p className="mt-1 text-xs text-slate-500">
                Seconds since Jan 1, 1970 UTC. 10 digits = seconds, 13 digits = milliseconds.
              </p>
              <code className="mt-2 block font-mono text-xs text-slate-600">1711742400</code>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-700">ISO 8601</h3>
              <p className="mt-1 text-xs text-slate-500">
                International standard date/time format. Includes timezone info.
              </p>
              <code className="mt-2 block font-mono text-xs text-slate-600">2024-03-29T12:00:00.000Z</code>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
