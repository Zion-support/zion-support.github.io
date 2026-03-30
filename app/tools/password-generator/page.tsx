'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, RefreshCw, Shield, Eye, EyeOff } from 'lucide-react';

function generatePassword(length: number, options: {
  uppercase: boolean;
  lowercase: boolean;
  digits: boolean;
  symbols: boolean;
}): string {
  let chars = '';
  if (options.lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
  if (options.uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (options.digits) chars += '0123456789';
  if (options.symbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz';
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, (v) => chars[v % chars.length]).join('');
}

function calculateStrength(password: string): { score: number; label: string; color: string } {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (password.length >= 16) score += 1;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^a-zA-Z0-9]/.test(password)) score += 1;
  if (password.length >= 20) score += 1;

  if (score <= 2) return { score: 25, label: 'Weak', color: 'bg-red-500' };
  if (score <= 4) return { score: 50, label: 'Fair', color: 'bg-amber-500' };
  if (score <= 5) return { score: 75, label: 'Strong', color: 'bg-emerald-500' };
  return { score: 100, label: 'Excellent', color: 'bg-green-600' };
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [digits, setDigits] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState(() => generatePassword(16, { uppercase: true, lowercase: true, digits: true, symbols: true }));
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [history, setHistory] = useState<string[]>([]);

  const generate = useCallback(() => {
    const options = { uppercase, lowercase, digits, symbols };
    const pw = generatePassword(length, options);
    setPassword(pw);
    setCopied(false);
    setHistory((prev) => [pw, ...prev].slice(0, 10));
  }, [length, uppercase, lowercase, digits, symbols]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const strength = useMemo(() => calculateStrength(password), [password]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Password Generator</h1>
            <p className="mt-2 text-slate-600">Generate strong, cryptographically secure passwords</p>
          </div>
        </motion.div>

        {/* Generated Password Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="flex-1 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 font-mono text-lg text-slate-800 break-all">
              {showPassword ? password : '•'.repeat(password.length)}
            </div>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="shrink-0 rounded-lg border border-slate-200 p-2.5 text-slate-500 hover:bg-slate-50 transition"
              title={showPassword ? 'Hide' : 'Show'}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
            <button
              onClick={copyToClipboard}
              className="shrink-0 rounded-lg border border-slate-200 p-2.5 text-slate-500 hover:bg-slate-50 transition"
              title="Copy"
            >
              {copied ? <Check className="h-5 w-5 text-emerald-500" /> : <Copy className="h-5 w-5" />}
            </button>
          </div>

          {/* Strength Meter */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Strength</span>
              <span className={`text-xs font-semibold ${strength.score >= 75 ? 'text-emerald-600' : strength.score >= 50 ? 'text-amber-600' : 'text-red-600'}`}>
                {strength.label}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${strength.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${strength.score}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-4">Options</h2>

          {/* Length Slider */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-slate-700">Length</label>
              <span className="text-sm font-mono font-semibold text-emerald-600">{length}</span>
            </div>
            <input
              type="range"
              min={4}
              max={64}
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full h-2 rounded-full appearance-none bg-slate-200 accent-emerald-600"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>4</span>
              <span>64</span>
            </div>
          </div>

          {/* Character Options */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Uppercase (A-Z)', checked: uppercase, onChange: setUppercase },
              { label: 'Lowercase (a-z)', checked: lowercase, onChange: setLowercase },
              { label: 'Digits (0-9)', checked: digits, onChange: setDigits },
              { label: 'Symbols (!@#$...)', checked: symbols, onChange: setSymbols },
            ].map((opt) => (
              <label
                key={opt.label}
                className={`flex items-center gap-3 rounded-xl border p-3 cursor-pointer transition ${
                  opt.checked ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={opt.checked}
                  onChange={(e) => opt.onChange(e.target.checked)}
                  className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm text-slate-700">{opt.label}</span>
              </label>
            ))}
          </div>

          <button
            onClick={generate}
            className="mt-5 w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
          >
            <RefreshCw className="h-4 w-4" />
            Generate New Password
          </button>
        </motion.div>

        {/* History */}
        {history.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
              <span className="text-sm font-medium text-slate-600">Recent passwords</span>
            </div>
            <div className="divide-y divide-slate-100">
              {history.map((pw, i) => {
                const s = calculateStrength(pw);
                return (
                  <div key={i} className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 transition">
                    <code className="flex-1 font-mono text-sm text-slate-700 break-all">{pw}</code>
                    <div className={`shrink-0 h-2 w-12 rounded-full overflow-hidden bg-slate-100`}>
                      <div className={`h-full ${s.color}`} style={{ width: `${s.score}%` }} />
                    </div>
                    <button
                      onClick={async () => { await navigator.clipboard.writeText(pw); }}
                      className="shrink-0 rounded-md p-1.5 text-slate-400 hover:bg-emerald-100 hover:text-emerald-600 transition"
                      title="Copy"
                    >
                      <Copy className="h-3.5 w-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-slate-900">Password security tips</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Use at least 16 characters for strong security</li>
            <li>• Include uppercase, lowercase, digits, and symbols</li>
            <li>• Never reuse passwords across accounts</li>
            <li>• Use a password manager to store generated passwords</li>
            <li>• This tool uses the <code className="bg-slate-100 px-1 rounded text-xs">crypto.getRandomValues()</code> API for true randomness</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
