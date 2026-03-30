'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Lock, Copy, Check, Plus, Trash2, Eye, EyeOff, Play, RotateCcw, Clock, Sparkles } from 'lucide-react';

type Algorithm = 'HS256' | 'HS384' | 'HS512';

interface HeaderField {
  key: string;
  value: string;
}

interface ClaimField {
  key: string;
  value: string;
}

const ALGORITHMS: Algorithm[] = ['HS256', 'HS384', 'HS512'];

const ALGORITHM_BITS: Record<Algorithm, number> = {
  HS256: 256,
  HS384: 384,
  HS512: 512,
};

const PRESETS = [
  {
    label: 'Basic user token',
    claims: [
      { key: 'sub', value: 'user_12345' },
      { key: 'name', value: 'Alice Johnson' },
      { key: 'email', value: 'alice@example.com' },
      { key: 'iat', value: '' },
    ],
    extraHeader: [],
  },
  {
    label: 'API key with roles',
    claims: [
      { key: 'sub', value: 'api_client_001' },
      { key: 'iss', value: 'https://auth.ziontechgroup.com' },
      { key: 'aud', value: 'https://api.ziontechgroup.com' },
      { key: 'scope', value: 'read write admin' },
      { key: 'iat', value: '' },
      { key: 'exp', value: '' },
    ],
    extraHeader: [{ key: 'kid', value: 'zion-key-2026' }],
  },
  {
    label: 'Session token',
    claims: [
      { key: 'sub', value: 'session_abc123' },
      { key: 'name', value: 'Bob' },
      { key: 'role', value: 'editor' },
      { key: 'permissions', value: 'documents:read,documents:write,projects:read' },
      { key: 'iat', value: '' },
      { key: 'exp', value: '' },
      { key: 'jti', value: '' },
    ],
    extraHeader: [],
  },
];

function base64UrlEncode(str: string): string {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function generateJti(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length: 21 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

async function signHmac(algorithm: Algorithm, data: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret);
  const messageData = encoder.encode(data);

  const hash = `SHA-${ALGORITHM_BITS[algorithm]}`;
  const cryptoKey = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash }, false, ['sign']);
  const signature = await crypto.subtle.sign('HMAC', cryptoKey, messageData);
  const bytes = new Uint8Array(signature);

  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export default function JWTEncoder() {
  const [algorithm, setAlgorithm] = useState<Algorithm>('HS256');
  const [headerFields, setHeaderFields] = useState<HeaderField[]>([
    { key: 'typ', value: 'JWT' },
    { key: 'alg', value: 'HS256' },
  ]);
  const [claimFields, setClaimFields] = useState<ClaimField[]>([
    { key: 'sub', value: 'user_12345' },
    { key: 'name', value: 'Alice Johnson' },
    { key: 'email', value: 'alice@example.com' },
    { key: 'iat', value: '' },
    { key: 'exp', value: '' },
  ]);
  const [secret, setSecret] = useState('your-secret-key');
  const [showSecret, setShowSecret] = useState(false);
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [expMinutes, setExpMinutes] = useState(60);

  const addClaimField = () => setClaimFields(prev => [...prev, { key: '', value: '' }]);
  const removeClaimField = (idx: number) => setClaimFields(prev => prev.filter((_, i) => i !== idx));
  const updateClaimField = (idx: number, field: Partial<ClaimField>) =>
    setClaimFields(prev => prev.map((c, i) => (i === idx ? { ...c, ...field } : c)));

  const addHeaderField = () => setHeaderFields(prev => [...prev, { key: '', value: '' }]);
  const removeHeaderField = (idx: number) => setHeaderFields(prev => prev.filter((_, i) => i !== idx));
  const updateHeaderField = (idx: number, field: Partial<HeaderField>) =>
    setHeaderFields(prev => prev.map((h, i) => (i === idx ? { ...h, ...field } : h)));

  const loadPreset = (presetIdx: number) => {
    const preset = PRESETS[presetIdx];
    setClaimFields(preset.claims.map(c => ({ ...c })));
    setHeaderFields([
      { key: 'typ', value: 'JWT' },
      { key: 'alg', value: algorithm },
      ...preset.extraHeader,
    ]);
    setToken('');
    setError('');
  };

  const generate = useCallback(async () => {
    setError('');
    setToken('');

    if (!secret.trim()) {
      setError('Secret key is required');
      return;
    }

    try {
      const now = Math.floor(Date.now() / 1000);

      // Build header
      const header: Record<string, string> = { typ: 'JWT', alg: algorithm };
      headerFields.forEach(f => {
        if (f.key.trim() && f.key !== 'typ' && f.key !== 'alg') {
          header[f.key.trim()] = f.value;
        }
      });

      // Build payload
      const payload: Record<string, unknown> = {};
      claimFields.forEach(f => {
        if (!f.key.trim()) return;
        let val: unknown = f.value;
        // Auto-resolve special fields
        if (f.key === 'iat' && !f.value.trim()) val = now;
        else if (f.key === 'exp' && !f.value.trim()) val = now + expMinutes * 60;
        else if (f.key === 'nbf' && !f.value.trim()) val = now;
        else if (f.key === 'jti' && !f.value.trim()) val = generateJti();
        // Try to parse as number or JSON
        else if (f.value.trim()) {
          const num = Number(f.value);
          if (!isNaN(num) && f.value.trim() === String(num)) val = num;
          else if (f.value === 'true') val = true;
          else if (f.value === 'false') val = false;
        }
        payload[f.key.trim()] = val;
      });

      const headerB64 = base64UrlEncode(JSON.stringify(header));
      const payloadB64 = base64UrlEncode(JSON.stringify(payload));
      const data = `${headerB64}.${payloadB64}`;
      const signature = await signHmac(algorithm, data, secret);
      setToken(`${data}.${signature}`);
    } catch (e) {
      setError(`Failed to generate token: ${(e as Error).message}`);
    }
  }, [algorithm, headerFields, claimFields, secret, expMinutes]);

  const reset = () => {
    setAlgorithm('HS256');
    setHeaderFields([
      { key: 'typ', value: 'JWT' },
      { key: 'alg', value: 'HS256' },
    ]);
    setClaimFields([
      { key: 'sub', value: 'user_12345' },
      { key: 'name', value: 'Alice Johnson' },
      { key: 'email', value: 'alice@example.com' },
      { key: 'iat', value: '' },
      { key: 'exp', value: '' },
    ]);
    setSecret('your-secret-key');
    setToken('');
    setError('');
  };

  const copyToken = async () => {
    await navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tokenParts = token.split('.');
  const headerDecoded = tokenParts[0] ? (() => {
    try { return JSON.parse(atob(tokenParts[0].replace(/-/g, '+').replace(/_/g, '/'))); } catch { return null; }
  })() : null;
  const payloadDecoded = tokenParts[1] ? (() => {
    try { return JSON.parse(atob(tokenParts[1].replace(/-/g, '+').replace(/_/g, '/'))); } catch { return null; }
  })() : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-slate-50 sm:text-4xl">
            <Lock className="mr-2 inline-block h-8 w-8 text-amber-400" />
            JWT Encoder
          </h1>
          <p className="text-slate-400">Create and sign JWT tokens with HMAC algorithms. Perfect for API auth, session tokens, and testing.</p>
        </motion.div>

        {/* Presets */}
        <div className="mb-6 flex flex-wrap gap-2">
          {PRESETS.map((p, i) => (
            <button key={i} onClick={() => loadPreset(i)} className="rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-xs text-slate-300 transition hover:border-amber-500/50 hover:text-amber-300">
              <Sparkles className="mr-1 inline h-3 w-3" />{p.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left: Configuration */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-5">
            {/* Algorithm */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Algorithm</label>
              <div className="flex gap-2">
                {ALGORITHMS.map(alg => (
                  <button key={alg} onClick={() => {
                    setAlgorithm(alg);
                    setHeaderFields(prev => prev.map(h => h.key === 'alg' ? { ...h, value: alg } : h));
                  }} className={`rounded-lg px-4 py-2 text-sm font-medium transition ${algorithm === alg ? 'bg-amber-600 text-white' : 'border border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-200'}`}>
                    {alg}
                  </button>
                ))}
              </div>
              <p className="mt-1 text-xs text-slate-500">HMAC with SHA-{ALGORITHM_BITS[algorithm]} ({ALGORITHM_BITS[algorithm]}-bit)</p>
            </div>

            {/* Secret Key */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Secret Key</label>
              <div className="relative">
                <input type={showSecret ? 'text' : 'password'} value={secret} onChange={e => setSecret(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2.5 pr-10 font-mono text-sm text-slate-200 outline-none transition focus:border-amber-500"
                  placeholder="your-secret-key" />
                <button onClick={() => setShowSecret(!showSecret)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">
                  {showSecret ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Expiration */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                <Clock className="h-4 w-4" /> Expiration (minutes)
              </label>
              <input type="number" value={expMinutes} onChange={e => setExpMinutes(parseInt(e.target.value) || 60)}
                className="w-32 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-200 outline-none transition focus:border-amber-500" min={1} />
            </div>

            {/* Header Fields */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Header Claims</label>
              <div className="space-y-2">
                {headerFields.map((f, i) => (
                  <div key={i} className="flex gap-2">
                    <input value={f.key} onChange={e => updateHeaderField(i, { key: e.target.value })}
                      className="flex-1 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 font-mono text-xs text-slate-200 outline-none" placeholder="key" />
                    <input value={f.value} onChange={e => updateHeaderField(i, { value: e.target.value })}
                      className="flex-1 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 font-mono text-xs text-slate-200 outline-none" placeholder="value" />
                    {i >= 2 && <button onClick={() => removeHeaderField(i)} className="text-slate-500 hover:text-rose-400"><Trash2 className="h-4 w-4" /></button>}
                  </div>
                ))}
              </div>
              <button onClick={addHeaderField} className="mt-2 flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200">
                <Plus className="h-3 w-3" /> Add header field
              </button>
            </div>

            {/* Claims */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Payload Claims</label>
              <div className="space-y-2">
                {claimFields.map((f, i) => (
                  <div key={i} className="flex gap-2">
                    <input value={f.key} onChange={e => updateClaimField(i, { key: e.target.value })}
                      className="w-28 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 font-mono text-xs text-slate-200 outline-none" placeholder="key" />
                    <input value={f.value} onChange={e => updateClaimField(i, { value: e.target.value })}
                      className="flex-1 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 font-mono text-xs text-slate-200 outline-none" placeholder="value (auto if empty)" />
                    <button onClick={() => removeClaimField(i)} className="text-slate-500 hover:text-rose-400"><Trash2 className="h-4 w-4" /></button>
                  </div>
                ))}
              </div>
              <button onClick={addClaimField} className="mt-2 flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200">
                <Plus className="h-3 w-3" /> Add claim
              </button>
              <p className="mt-1 text-[11px] text-slate-500">Leave iat/exp/nbf/jti empty to auto-generate. Booleans and numbers auto-parse.</p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button onClick={generate} className="flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-500">
                <Play className="h-4 w-4" /> Generate Token
              </button>
              <button onClick={reset} className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-slate-400 transition hover:text-slate-200">
                <RotateCcw className="h-4 w-4" /> Reset
              </button>
            </div>

            {error && <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">{error}</div>}
          </motion.div>

          {/* Right: Output */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-4">
            {token ? (
              <>
                <div className="rounded-xl border border-slate-700 bg-slate-900/60">
                  <div className="flex items-center justify-between border-b border-slate-700 px-4 py-3">
                    <span className="text-sm font-medium text-slate-300">Generated Token</span>
                    <button onClick={copyToken} className="flex items-center gap-1 text-xs text-slate-400 transition hover:text-slate-200">
                      {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <div className="p-4">
                    <pre className="overflow-x-auto break-all font-mono text-xs leading-relaxed">
                      <span className="text-rose-400">{tokenParts[0]}</span>.
                      <span className="text-amber-400">{tokenParts[1]}</span>.
                      <span className="text-emerald-400">{tokenParts[2]}</span>
                    </pre>
                  </div>
                </div>

                {/* Decoded Preview */}
                {headerDecoded && (
                  <div className="rounded-xl border border-slate-700 bg-slate-900/60">
                    <div className="border-b border-slate-700 px-4 py-3">
                      <span className="text-sm font-medium text-slate-300">Header <span className="text-rose-400">(decoded)</span></span>
                    </div>
                    <pre className="overflow-x-auto p-4 font-mono text-xs text-rose-300">{JSON.stringify(headerDecoded, null, 2)}</pre>
                  </div>
                )}

                {payloadDecoded && (
                  <div className="rounded-xl border border-slate-700 bg-slate-900/60">
                    <div className="border-b border-slate-700 px-4 py-3">
                      <span className="text-sm font-medium text-slate-300">Payload <span className="text-amber-400">(decoded)</span></span>
                    </div>
                    <pre className="overflow-x-auto p-4 font-mono text-xs text-amber-300">{JSON.stringify(payloadDecoded, null, 2)}</pre>
                  </div>
                )}

                {/* Token Info */}
                <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4">
                  <h3 className="mb-3 text-sm font-medium text-slate-300">Token Info</h3>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-lg bg-slate-800/50 p-3">
                      <p className="text-slate-500">Algorithm</p>
                      <p className="font-mono text-slate-200">{algorithm}</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-3">
                      <p className="text-slate-500">Key Size</p>
                      <p className="font-mono text-slate-200">{ALGORITHM_BITS[algorithm]} bits</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-3">
                      <p className="text-slate-500">Token Length</p>
                      <p className="font-mono text-slate-200">{token.length} chars</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-3">
                      <p className="text-slate-500">Claims</p>
                      <p className="font-mono text-slate-200">{payloadDecoded ? Object.keys(payloadDecoded).length : 0}</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-slate-700 p-12 text-center">
                <div>
                  <Lock className="mx-auto mb-3 h-10 w-10 text-slate-600" />
                  <p className="text-sm text-slate-500">Configure your claims and click <strong className="text-slate-400">Generate Token</strong></p>
                  <p className="mt-1 text-xs text-slate-600">The signed JWT will appear here</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
