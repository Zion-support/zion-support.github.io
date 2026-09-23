'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type Props = { toolId: string; title: string; description: string };


function runTool(id: string, input: string, inputB: string): string {
  try {
    switch (id) {
      case 'json-formatter': {
        const parsed = JSON.parse(input || '{}');
        return JSON.stringify(parsed, null, 2);
      }
      case 'json-to-csv-converter': {
        const arr = JSON.parse(input || '[]');
        if (!Array.isArray(arr) || !arr.length) return 'Expected a non-empty JSON array of objects';
        const keys = Object.keys(arr[0]);
        const rows = arr.map((row: Record<string, unknown>) =>
          keys.map((k) => JSON.stringify(row[k] ?? '')).join(',')
        );
        return [keys.join(','), ...rows].join('\n');
      }
      case 'json-schema-generator': {
        const sample = JSON.parse(input || '{}');
        const infer = (v: unknown): Record<string, unknown> => {
          if (Array.isArray(v)) return { type: 'array', items: v.length ? infer(v[0]) : {} };
          if (v === null) return { type: 'null' };
          if (typeof v === 'object') {
            const props: Record<string, unknown> = {};
            for (const [k, val] of Object.entries(v as Record<string, unknown>)) props[k] = infer(val);
            return { type: 'object', properties: props };
          }
          return { type: typeof v };
        };
        return JSON.stringify(infer(sample), null, 2);
      }
      case 'json-diff-viewer': {
        const a = JSON.stringify(JSON.parse(input || '{}'), null, 2).split('\n');
        const b = JSON.stringify(JSON.parse(inputB || '{}'), null, 2).split('\n');
        const max = Math.max(a.length, b.length);
        const lines: string[] = [];
        for (let i = 0; i < max; i++) {
          const left = a[i] ?? '';
          const right = b[i] ?? '';
          if (left === right) lines.push('  ' + left);
          else {
            if (left) lines.push('- ' + left);
            if (right) lines.push('+ ' + right);
          }
        }
        return lines.join('\n');
      }
      case 'yaml-json-converter': {
        // Minimal YAML-ish: if looks like JSON, pretty print; else wrap as string note
        try {
          return JSON.stringify(JSON.parse(input), null, 2);
        } catch {
          return 'Paste valid JSON to convert, or use a full YAML parser in production integrations.\n\nInput length: ' + input.length;
        }
      }
      case 'xml-formatter-validator': {
        const compact = input.replace(/>\s+</g, '><').trim();
        if (!compact.startsWith('<')) throw new Error('Input does not look like XML');
        let indent = 0;
        return compact
          .replace(/(>)(<)(\/?)/g, '$1\n$2$3')
          .split('\n')
          .map((line) => {
            if (/^<\//.test(line)) indent = Math.max(indent - 1, 0);
            const out = '  '.repeat(indent) + line;
            if (/^<[^!?/][^>]*[^/]>$/.test(line)) indent += 1;
            return out;
          })
          .join('\n');
      }
      case 'css-gradient-generator': {
        const c1 = input.trim() || '#0ea5e9';
        const c2 = inputB.trim() || '#a855f7';
        return `background: linear-gradient(135deg, ${c1}, ${c2});`;
      }
      case 'css-minifier-beautifier': {
        if (inputB === 'beautify') {
          return input
            .replace(/\{/g, ' {\n  ')
            .replace(/;/g, ';\n  ')
            .replace(/\}/g, '\n}\n')
            .replace(/\n\s*\n/g, '\n');
        }
        return input.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{}:;,])\s*/g, '$1').trim();
      }
      case 'html-to-jsx': {
        return input
          .replace(/\bclass=/g, 'className=')
          .replace(/\bfor=/g, 'htmlFor=')
          .replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}')
          .replace(/\s(stroke-width|stroke-linecap|stroke-linejoin|fill-rule|clip-rule)=/g, (_, a) => {
            const camel = a.replace(/-([a-z])/g, (__: string, c: string) => c.toUpperCase());
            return ' ' + camel + '=';
          });
      }
      case 'html-minifier-beautifier': {
        if (inputB === 'beautify') {
          return input.replace(/>\s*</g, '>\n<');
        }
        return input.replace(/<!--[\s\S]*?-->/g, '').replace(/>\s+</g, '><').trim();
      }
      case 'sql-formatter': {
        return input
          .replace(/\s+/g, ' ')
          .replace(/\b(SELECT|FROM|WHERE|AND|OR|JOIN|LEFT JOIN|RIGHT JOIN|INNER JOIN|GROUP BY|ORDER BY|LIMIT|INSERT INTO|VALUES|UPDATE|SET|DELETE FROM)\b/gi, '\n$1')
          .trim();
      }
      case 'jwt-decoder': {
        const parts = input.trim().split('.');
        if (parts.length < 2) throw new Error('Invalid JWT');
        const decode = (p: string) => {
          const b64 = p.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((p.length + 3) % 4);
          return JSON.stringify(JSON.parse(atob(b64)), null, 2);
        };
        return 'Header:\n' + decode(parts[0]) + '\n\nPayload:\n' + decode(parts[1]);
      }
      case 'color-palette-generator': {
        const base = (input.trim() || '#22d3ee').replace('#', '');
        const n = parseInt(base.slice(0, 6).padEnd(6, '0'), 16);
        const colors = [0, 1, 2, 3, 4].map((i) => {
          const v = (n + i * 0x1a2b3c) & 0xffffff;
          return '#' + v.toString(16).padStart(6, '0');
        });
        return colors.join('\n');
      }
      case 'color-contrast-checker': {
        const hexToRgb = (h: string) => {
          const x = h.replace('#', '');
          return [0, 2, 4].map((i) => parseInt(x.slice(i, i + 2) || '00', 16) / 255);
        };
        const lum = (rgb: number[]) => {
          const a = rgb.map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
          return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
        };
        const fg = hexToRgb(input.trim() || '#ffffff');
        const bg = hexToRgb(inputB.trim() || '#0f172a');
        const ratio = (Math.max(lum(fg), lum(bg)) + 0.05) / (Math.min(lum(fg), lum(bg)) + 0.05);
        const r = ratio.toFixed(2);
        return `Contrast ratio: ${r}:1\nAA normal: ${ratio >= 4.5 ? 'PASS' : 'FAIL'}\nAAA normal: ${ratio >= 7 ? 'PASS' : 'FAIL'}`;
      }
      case 'color-blindness-simulator': {
        const hex = (input.trim() || '#22d3ee').replace('#', '');
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        const sim = (nr: number, ng: number, nb: number) =>
          '#' + [nr, ng, nb].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
        return [
          'Original: #' + hex,
          'Protanopia-ish: ' + sim(0.567 * r + 0.433 * g, 0.558 * r + 0.442 * g, b),
          'Deuteranopia-ish: ' + sim(0.625 * r + 0.375 * g, 0.7 * r + 0.3 * g, b),
          'Tritanopia-ish: ' + sim(r, 0.95 * g + 0.05 * b, 0.433 * g + 0.567 * b),
        ].join('\n');
      }
      case 'box-shadow-generator': {
        const x = input.trim() || '0';
        const blur = inputB.trim() || '24';
        return `box-shadow: ${x}px 8px ${blur}px rgba(15, 23, 42, 0.45);`;
      }
      case 'image-color-extractor':
        return 'Upload is available in the enhanced studio. Paste a hex hint in Input A or contact us for the full extractor.\nHint: ' + (input || '#0ea5e9');
      case 'unit-converter': {
        const n = parseFloat(input) || 0;
        const kind = (inputB || 'km-mi').toLowerCase();
        if (kind === 'km-mi') return `${n} km = ${(n * 0.621371).toFixed(4)} mi`;
        if (kind === 'kg-lb') return `${n} kg = ${(n * 2.20462).toFixed(4)} lb`;
        if (kind === 'c-f') return `${n} °C = ${((n * 9) / 5 + 32).toFixed(2)} °F`;
        return `${n} (mode ${kind})`;
      }
      case 'currency-converter': {
        const n = parseFloat(input) || 0;
        const rate = parseFloat(inputB) || 1.1;
        return `${n} × ${rate} = ${(n * rate).toFixed(2)} (enter rate in Input B)`;
      }
      case 'base64': {
        if (inputB === 'decode') return atob(input);
        return btoa(input);
      }
      case 'url-encoder-decoder': {
        if (inputB === 'decode') return decodeURIComponent(input);
        return encodeURIComponent(input);
      }
      case 'qr-code-generator': {
        const data = encodeURIComponent(input || 'https://ziontechgroup.com');
        return 'Open this QR image URL:\nhttps://api.qrserver.com/v1/create-qr-code/?size=220x220&data=' + data;
      }
      case 'password-generator': {
        const len = Math.min(Math.max(parseInt(input, 10) || 16, 8), 64);
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-';
        const arr = new Uint32Array(len);
        crypto.getRandomValues(arr);
        return Array.from(arr, (v) => chars[v % chars.length]).join('');
      }
      case 'password-strength-checker': {
        const p = input || '';
        let score = 0;
        if (p.length >= 8) score++;
        if (p.length >= 12) score++;
        if (/[A-Z]/.test(p) && /[a-z]/.test(p)) score++;
        if (/\d/.test(p)) score++;
        if (/[^A-Za-z0-9]/.test(p)) score++;
        const labels = ['Very weak', 'Weak', 'Fair', 'Good', 'Strong', 'Excellent'];
        return `Score: ${score}/5 — ${labels[score]}\nLength: ${p.length}`;
      }
      case 'regex-tester': {
        const re = new RegExp(input, inputB || 'g');
        const sample = 'The quick brown fox jumps over 13 lazy dogs.';
        return 'Sample: ' + sample + '\nMatches: ' + JSON.stringify(sample.match(re));
      }
      case 'timestamp-converter': {
        if (/^\d+$/.test(input.trim())) {
          const ms = input.trim().length > 10 ? Number(input) : Number(input) * 1000;
          return new Date(ms).toISOString();
        }
        return String(Math.floor(new Date(input || Date.now()).getTime() / 1000));
      }
      case 'uuid-generator': {
        const count = Math.min(parseInt(input, 10) || 1, 20);
        return Array.from({ length: count }, () => crypto.randomUUID()).join('\n');
      }
      case 'lorem-ipsum-generator': {
        const n = Math.min(parseInt(input, 10) || 2, 10);
        const para =
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
        return Array.from({ length: n }, () => para).join('\n\n');
      }
      case 'word-counter': {
        const text = input || '';
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        const sentences = (text.match(/[.!?]+/g) || []).length;
        return `Characters: ${text.length}\nWords: ${words}\nSentences: ${sentences}\nLines: ${text.split('\n').length}`;
      }
      case 'string-case-converter': {
        const s = input || '';
        const snake = s
          .replace(/([a-z])([A-Z])/g, '$1_$2')
          .replace(/[\s-]+/g, '_')
          .toLowerCase();
        const kebab = snake.replace(/_/g, '-');
        const camel = snake.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
        const pascal = camel.charAt(0).toUpperCase() + camel.slice(1);
        return `snake_case: ${snake}\nkebab-case: ${kebab}\ncamelCase: ${camel}\nPascalCase: ${pascal}`;
      }
      case 'markdown-preview': {
        return input
          .replace(/^### (.*$)/gm, '<h3>$1</h3>')
          .replace(/^## (.*$)/gm, '<h2>$1</h2>')
          .replace(/^# (.*$)/gm, '<h1>$1</h1>')
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/`([^`]+)`/g, '<code>$1</code>')
          .replace(/\n/g, '<br/>');
      }
      case 'cron-expression-explainer': {
        const parts = input.trim().split(/\s+/);
        if (parts.length < 5) throw new Error('Cron needs at least 5 fields');
        const [min, hour, dom, mon, dow] = parts;
        return `Minute: ${min}\nHour: ${hour}\nDay of month: ${dom}\nMonth: ${mon}\nDay of week: ${dow}\n\nTip: use * for every, */n for every n units.`;
      }
      case 'number-base-converter': {
        const n = parseInt(input, parseInt(inputB, 10) || 10);
        if (Number.isNaN(n)) throw new Error('Invalid number');
        return `Dec: ${n}\nBin: ${n.toString(2)}\nOct: ${n.toString(8)}\nHex: ${n.toString(16)}`;
      }
      case 'subnet-calculator': {
        const [ip, prefixStr] = (input.trim() || '192.168.1.0/24').split('/');
        const prefix = parseInt(prefixStr || '24', 10);
        const hosts = Math.pow(2, 32 - prefix) - 2;
        return `Network: ${ip}/ ${prefix}\nUsable hosts (approx): ${Math.max(hosts, 0)}\nMask bits: ${prefix}`;
      }
      case 'secure-hash-generator': {
        // sync fallback message; async hash done in UI effect path via subtle
        return 'Use Run to hash with SHA-256 (Web Crypto). Input length: ' + input.length;
      }
      default:
        return input;
    }
  } catch (e) {
    return 'Error: ' + (e instanceof Error ? e.message : String(e));
  }
}

export default function FreeToolClient({ toolId, title, description }: Props) {
  const TOOL_ID = toolId;
  const TOOL_TITLE = title;
  const TOOL_DESC = description;
  const [input, setInput] = useState('');
  const [inputB, setInputB] = useState('');
  const [output, setOutput] = useState('');
  const [busy, setBusy] = useState(false);

  const placeholders = useMemo(() => {
    if (TOOL_ID === 'json-formatter') return { a: '{"hello":"world"}', b: '' };
    if (TOOL_ID === 'jwt-decoder') return { a: 'header.payload.signature', b: '' };
    if (TOOL_ID === 'color-contrast-checker') return { a: '#ffffff', b: '#0f172a' };
    if (TOOL_ID === 'css-gradient-generator') return { a: '#0ea5e9', b: '#14b8a6' };
    if (TOOL_ID === 'base64' || TOOL_ID === 'url-encoder-decoder' || TOOL_ID === 'html-minifier-beautifier' || TOOL_ID === 'css-minifier-beautifier')
      return { a: 'text', b: 'encode|decode or minify|beautify' };
    return { a: 'Input A', b: 'Input B (optional)' };
  }, [TOOL_ID]);

  async function onRun() {
    setBusy(true);
    try {
      if (TOOL_ID === 'secure-hash-generator') {
        const data = new TextEncoder().encode(input);
        const digest = await crypto.subtle.digest('SHA-256', data);
        const hex = Array.from(new Uint8Array(digest))
          .map((b) => b.toString(16).padStart(2, '0'))
          .join('');
        setOutput('SHA-256: ' + hex);
      } else {
        setOutput(runTool(TOOL_ID, input, inputB));
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <Link href="/tools" className="text-sm text-cyan-400 hover:underline">← All Tools</Link>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{TOOL_TITLE}</h1>
          <p className="mt-3 text-slate-300">{TOOL_DESC}</p>
          <p className="mt-2 text-xs text-slate-500">Runs locally in your browser. Zion Tech Group does not store your input.</p>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-4">
        <label className="block text-sm text-slate-400">Input A</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholders.a}
          rows={6}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 font-mono text-sm text-slate-100 outline-none focus:border-cyan-500"
        />
        <label className="block text-sm text-slate-400">Input B (optional)</label>
        <input
          value={inputB}
          onChange={(e) => setInputB(e.target.value)}
          placeholder={placeholders.b}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 font-mono text-sm text-slate-100 outline-none focus:border-cyan-500"
        />
        <button
          type="button"
          onClick={onRun}
          disabled={busy}
          className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 disabled:opacity-60"
        >
          {busy ? 'Working…' : 'Run'}
        </button>
        <label className="block text-sm text-slate-400">Output</label>
        <pre className="min-h-[140px] overflow-auto rounded-xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-cyan-100 whitespace-pre-wrap">{output || 'Result appears here.'}</pre>
        <div className="pt-6 text-sm text-slate-400">
          Need this wired into your stack?{' '}
          <Link href="/contact" className="text-cyan-400 hover:underline">Contact Zion Tech Group</Link>
        </div>
      </section>
    </main>
  );
}
