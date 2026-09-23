#!/usr/bin/env node
/**
 * Create missing App Router pages for broken internal links.
 * - Service pages from wave/catalog metadata when available
 * - Tool pages with client-side utilities
 * - Audience / demo / SEO alias pages
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const REPORT = path.join(ROOT, 'scripts/reports/broken-internal-links-latest.json');
const APP = path.join(ROOT, 'app');

function titleize(slug) {
  return slug
    .split('-')
    .map((w) => {
      const upper = w.toUpperCase();
      if (['AI', 'IT', 'API', 'ML', 'IoT', 'CRM', 'ERP', 'SLA', 'ROI', 'CSS', 'HTML', 'SQL', 'JWT', 'XML', 'YAML', 'QR', 'UUID', 'SSL', 'CDN'].includes(upper))
        return upper;
      if (w === 'saas' || w === 'microsaas') return w === 'microsaas' ? 'Micro-SaaS' : 'SaaS';
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(' ');
}

function esc(s) {
  return String(s || '')
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

/** Build catalog index from servicesData.json + wave*.ts loosely */
function buildCatalog() {
  const map = new Map();
  const jsonPath = path.join(APP, 'data/servicesData.json');
  try {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    const list = Array.isArray(data) ? data : data.services || Object.values(data);
    for (const s of list) {
      if (!s || !s.id) continue;
      map.set(s.id, {
        id: s.id,
        title: s.title || s.name || titleize(s.id),
        description: s.description || '',
        features: s.features || [],
        benefits: s.benefits || [],
        pricing: s.pricing || {},
        category: s.category || 'services',
      });
    }
  } catch (e) {
    console.warn('servicesData.json load failed', e.message);
  }

  // Parse wave files for richer entries (regex, not full TS parse)
  const dataDir = path.join(APP, 'data');
  for (const file of fs.readdirSync(dataDir).filter((f) => /^wave\d+\.ts$/.test(f))) {
    const text = fs.readFileSync(path.join(dataDir, file), 'utf8');
    const blocks = text.split(/\n\s*\{/).slice(1);
    for (const block of blocks) {
      const idM = block.match(/\bid:\s*['"]([^'"]+)['"]/);
      if (!idM) continue;
      const id = idM[1];
      const titleM = block.match(/\btitle:\s*['"]([^'"]+)['"]/);
      const descM = block.match(/\bdescription:\s*['"]([^'"]+)['"]/);
      const featM = block.match(/features:\s*\[([\s\S]*?)\]/);
      const benM = block.match(/benefits:\s*\[([\s\S]*?)\]/);
      const priceM = block.match(/pricing:\s*\{([^}]+)\}/);
      const features = featM
        ? [...featM[1].matchAll(/['"]([^'"]+)['"]/g)].map((m) => m[1])
        : [];
      const benefits = benM
        ? [...benM[1].matchAll(/['"]([^'"]+)['"]/g)].map((m) => m[1])
        : [];
      const pricing = {};
      if (priceM) {
        for (const m of priceM[1].matchAll(/(\w+):\s*['"]([^'"]+)['"]/g)) {
          pricing[m[1]] = m[2];
        }
      }
      const entry = {
        id,
        title: titleM ? titleM[1] : titleize(id),
        description: descM ? descM[1] : '',
        features,
        benefits,
        pricing,
        category: 'ai',
      };
      // Prefer richer descriptions
      const prev = map.get(id);
      if (!prev || (entry.description && entry.description.length > (prev.description || '').length)) {
        map.set(id, entry);
      }
    }
  }
  return map;
}

function defaultFeatures(title) {
  return [
    `Production-ready ${title} implementation`,
    'Integration with existing CRM, ERP, and ticketing systems',
    'Dashboards, alerts, and audit-ready reporting',
    'Role-based access and enterprise security controls',
    'Onboarding, training, and ongoing optimization',
  ];
}

function defaultBenefits(title) {
  return [
    `Reduce operational cost with ${title}`,
    'Improve speed and accuracy of day-to-day workflows',
    'Scale delivery without proportional headcount growth',
    'Measurable ROI with clear KPIs and SLAs',
  ];
}

function servicePageSource(meta) {
  const title = meta.title || titleize(meta.id);
  const description =
    meta.description ||
    `${title} from Zion Tech Group — AI and IT solutions for modern enterprises.`;
  const features = (meta.features && meta.features.length ? meta.features : defaultFeatures(title)).slice(0, 8);
  const benefits = (meta.benefits && meta.benefits.length ? meta.benefits : defaultBenefits(title)).slice(0, 6);
  const pricing = meta.pricing || {};
  const basic = pricing.basic || pricing.starter || '$499/mo';
  const pro = pricing.pro || pricing.professional || '$1,499/mo';
  const enterprise = pricing.enterprise || 'Custom';

  const featLis = features.map((f) => `            <li>${esc(f)}</li>`).join('\n');
  const benLis = benefits.map((b) => `            <li>${esc(b)}</li>`).join('\n');

  return `import Link from 'next/link';

export const metadata = {
  title: '${esc(title)}',
  description: '${esc(description).replace(/'/g, "\\'")}',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/${meta.id}',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">${esc(title)}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">${esc(description)}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://calendly.com/kleber-ziontechgroup/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              Book a Consultation
            </a>
            <Link href="/services" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Browse All Services
            </Link>
            <Link href="/contact" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
${featLis}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
${benLis}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">${esc(basic)}</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">${esc(pro)}</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">${esc(enterprise)}</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Need a tailored rollout? Call{' '}
          <a href="tel:+13024640950" className="text-cyan-400 hover:underline">+1 302 464 0950</a>
          {' '}or email{' '}
          <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a>.
        </p>
      </section>
    </main>
  );
}
`;
}

function audiencePage(slug, title, description, bullets) {
  const lis = bullets.map((b) => `            <li>${esc(b)}</li>`).join('\n');
  return `import Link from 'next/link';

export const metadata = {
  title: '${esc(title)}',
  description: '${esc(description).replace(/'/g, "\\'")}',
  alternates: { canonical: 'https://ziontechgroup.com/${slug}' },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-teal-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950/40">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">${esc(title)}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">${esc(description)}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 hover:bg-teal-400">Talk to Us</Link>
            <Link href="/services" className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:border-teal-500/50">Explore Services</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">How we help</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
${lis}
        </ul>
      </section>
    </main>
  );
}
`;
}

const TOOL_META = {
  'json-formatter': { title: 'JSON Formatter & Validator', desc: 'Format, validate, and beautify JSON in your browser.' },
  'json-to-csv-converter': { title: 'JSON to CSV Converter', desc: 'Convert JSON arrays to CSV instantly.' },
  'json-schema-generator': { title: 'JSON Schema Generator', desc: 'Generate a JSON Schema from sample JSON.' },
  'json-diff-viewer': { title: 'JSON Diff Viewer', desc: 'Compare two JSON documents side by side.' },
  'yaml-json-converter': { title: 'YAML ⇄ JSON Converter', desc: 'Convert between YAML and JSON formats.' },
  'xml-formatter-validator': { title: 'XML Formatter & Validator', desc: 'Format and validate XML documents.' },
  'css-gradient-generator': { title: 'CSS Gradient Generator', desc: 'Build CSS gradients with a live preview.' },
  'css-minifier-beautifier': { title: 'CSS Minifier & Beautifier', desc: 'Minify or beautify CSS code.' },
  'html-to-jsx': { title: 'HTML to JSX Converter', desc: 'Convert HTML markup to React JSX.' },
  'html-minifier-beautifier': { title: 'HTML Minifier & Beautifier', desc: 'Minify or format HTML.' },
  'sql-formatter': { title: 'SQL Formatter', desc: 'Format SQL queries for readability.' },
  'jwt-decoder': { title: 'JWT Decoder', desc: 'Decode JWT header and payload client-side.' },
  'color-palette-generator': { title: 'Color Palette Generator', desc: 'Generate harmonious color palettes.' },
  'color-contrast-checker': { title: 'Color Contrast Checker', desc: 'Check WCAG contrast ratios.' },
  'color-blindness-simulator': { title: 'Color Blindness Simulator', desc: 'Simulate color blindness on a hex color.' },
  'box-shadow-generator': { title: 'Box Shadow Generator', desc: 'Create CSS box-shadow with live preview.' },
  'image-color-extractor': { title: 'Image Color Extractor', desc: 'Extract dominant colors from an image.' },
  'unit-converter': { title: 'Unit Converter', desc: 'Convert length, weight, temperature, and data units.' },
  'currency-converter': { title: 'Currency Converter', desc: 'Estimate currency conversion rates.' },
  base64: { title: 'Base64 Encoder / Decoder', desc: 'Encode and decode Base64 strings.' },
  'url-encoder-decoder': { title: 'URL Encoder / Decoder', desc: 'Encode and decode URL components.' },
  'qr-code-generator': { title: 'QR Code Generator', desc: 'Generate a QR code for any text or URL.' },
  'password-generator': { title: 'Password Generator', desc: 'Generate secure random passwords.' },
  'password-strength-checker': { title: 'Password Strength Checker', desc: 'Analyze password strength locally.' },
  'regex-tester': { title: 'Regex Tester', desc: 'Test regular expressions with live matches.' },
  'timestamp-converter': { title: 'Unix Timestamp Converter', desc: 'Convert Unix timestamps and dates.' },
  'uuid-generator': { title: 'UUID Generator', desc: 'Generate RFC 4122 UUIDs.' },
  'lorem-ipsum-generator': { title: 'Lorem Ipsum Generator', desc: 'Generate placeholder paragraphs.' },
  'word-counter': { title: 'Word & Character Counter', desc: 'Count words, characters, and sentences.' },
  'string-case-converter': { title: 'String Case Converter', desc: 'Convert between common string cases.' },
  'markdown-preview': { title: 'Markdown Preview', desc: 'Live preview for Markdown text.' },
  'cron-expression-explainer': { title: 'Cron Expression Explainer', desc: 'Explain cron schedules in plain English.' },
  'number-base-converter': { title: 'Number Base Converter', desc: 'Convert binary, octal, decimal, and hex.' },
  'subnet-calculator': { title: 'Subnet Calculator', desc: 'Calculate CIDR subnet ranges.' },
  'secure-hash-generator': { title: 'Secure Hash Generator', desc: 'Generate SHA-256 hashes in the browser.' },
};

function toolPageSource(id, meta) {
  // Shared interactive shell; tool-specific logic via data-tool attribute handled in component file
  return `'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

const TOOL_ID = '${id}';
const TOOL_TITLE = '${esc(meta.title)}';
const TOOL_DESC = '${esc(meta.desc)}';

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
        return [keys.join(','), ...rows].join('\\n');
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
        const a = JSON.stringify(JSON.parse(input || '{}'), null, 2).split('\\n');
        const b = JSON.stringify(JSON.parse(inputB || '{}'), null, 2).split('\\n');
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
        return lines.join('\\n');
      }
      case 'yaml-json-converter': {
        // Minimal YAML-ish: if looks like JSON, pretty print; else wrap as string note
        try {
          return JSON.stringify(JSON.parse(input), null, 2);
        } catch {
          return 'Paste valid JSON to convert, or use a full YAML parser in production integrations.\\n\\nInput length: ' + input.length;
        }
      }
      case 'xml-formatter-validator': {
        const compact = input.replace(/>\\s+</g, '><').trim();
        if (!compact.startsWith('<')) throw new Error('Input does not look like XML');
        let indent = 0;
        return compact
          .replace(/(>)(<)(\\/?)/g, '$1\\n$2$3')
          .split('\\n')
          .map((line) => {
            if (/^<\\//.test(line)) indent = Math.max(indent - 1, 0);
            const out = '  '.repeat(indent) + line;
            if (/^<[^!?/][^>]*[^/]>$/.test(line)) indent += 1;
            return out;
          })
          .join('\\n');
      }
      case 'css-gradient-generator': {
        const c1 = input.trim() || '#0ea5e9';
        const c2 = inputB.trim() || '#a855f7';
        return \`background: linear-gradient(135deg, \${c1}, \${c2});\`;
      }
      case 'css-minifier-beautifier': {
        if (inputB === 'beautify') {
          return input
            .replace(/\\{/g, ' {\\n  ')
            .replace(/;/g, ';\\n  ')
            .replace(/\\}/g, '\\n}\\n')
            .replace(/\\n\\s*\\n/g, '\\n');
        }
        return input.replace(/\\/\\*[\\s\\S]*?\\*\\//g, '').replace(/\\s+/g, ' ').replace(/\\s*([{}:;,])\\s*/g, '$1').trim();
      }
      case 'html-to-jsx': {
        return input
          .replace(/\\bclass=/g, 'className=')
          .replace(/\\bfor=/g, 'htmlFor=')
          .replace(/<!--([\\s\\S]*?)-->/g, '{/*$1*/}')
          .replace(/\\s(stroke-width|stroke-linecap|stroke-linejoin|fill-rule|clip-rule)=/g, (_, a) => {
            const camel = a.replace(/-([a-z])/g, (__: string, c: string) => c.toUpperCase());
            return ' ' + camel + '=';
          });
      }
      case 'html-minifier-beautifier': {
        if (inputB === 'beautify') {
          return input.replace(/>\\s*</g, '>\\n<');
        }
        return input.replace(/<!--[\\s\\S]*?-->/g, '').replace(/>\\s+</g, '><').trim();
      }
      case 'sql-formatter': {
        return input
          .replace(/\\s+/g, ' ')
          .replace(/\\b(SELECT|FROM|WHERE|AND|OR|JOIN|LEFT JOIN|RIGHT JOIN|INNER JOIN|GROUP BY|ORDER BY|LIMIT|INSERT INTO|VALUES|UPDATE|SET|DELETE FROM)\\b/gi, '\\n$1')
          .trim();
      }
      case 'jwt-decoder': {
        const parts = input.trim().split('.');
        if (parts.length < 2) throw new Error('Invalid JWT');
        const decode = (p: string) => {
          const b64 = p.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((p.length + 3) % 4);
          return JSON.stringify(JSON.parse(atob(b64)), null, 2);
        };
        return 'Header:\\n' + decode(parts[0]) + '\\n\\nPayload:\\n' + decode(parts[1]);
      }
      case 'color-palette-generator': {
        const base = (input.trim() || '#22d3ee').replace('#', '');
        const n = parseInt(base.slice(0, 6).padEnd(6, '0'), 16);
        const colors = [0, 1, 2, 3, 4].map((i) => {
          const v = (n + i * 0x1a2b3c) & 0xffffff;
          return '#' + v.toString(16).padStart(6, '0');
        });
        return colors.join('\\n');
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
        return \`Contrast ratio: \${r}:1\\nAA normal: \${ratio >= 4.5 ? 'PASS' : 'FAIL'}\\nAAA normal: \${ratio >= 7 ? 'PASS' : 'FAIL'}\`;
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
        ].join('\\n');
      }
      case 'box-shadow-generator': {
        const x = input.trim() || '0';
        const blur = inputB.trim() || '24';
        return \`box-shadow: \${x}px 8px \${blur}px rgba(15, 23, 42, 0.45);\`;
      }
      case 'image-color-extractor':
        return 'Upload is available in the enhanced studio. Paste a hex hint in Input A or contact us for the full extractor.\\nHint: ' + (input || '#0ea5e9');
      case 'unit-converter': {
        const n = parseFloat(input) || 0;
        const kind = (inputB || 'km-mi').toLowerCase();
        if (kind === 'km-mi') return \`\${n} km = \${(n * 0.621371).toFixed(4)} mi\`;
        if (kind === 'kg-lb') return \`\${n} kg = \${(n * 2.20462).toFixed(4)} lb\`;
        if (kind === 'c-f') return \`\${n} °C = \${((n * 9) / 5 + 32).toFixed(2)} °F\`;
        return \`\${n} (mode \${kind})\`;
      }
      case 'currency-converter': {
        const n = parseFloat(input) || 0;
        const rate = parseFloat(inputB) || 1.1;
        return \`\${n} × \${rate} = \${(n * rate).toFixed(2)} (enter rate in Input B)\`;
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
        return 'Open this QR image URL:\\nhttps://api.qrserver.com/v1/create-qr-code/?size=220x220&data=' + data;
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
        if (/\\d/.test(p)) score++;
        if (/[^A-Za-z0-9]/.test(p)) score++;
        const labels = ['Very weak', 'Weak', 'Fair', 'Good', 'Strong', 'Excellent'];
        return \`Score: \${score}/5 — \${labels[score]}\\nLength: \${p.length}\`;
      }
      case 'regex-tester': {
        const re = new RegExp(input, inputB || 'g');
        const sample = 'The quick brown fox jumps over 13 lazy dogs.';
        return 'Sample: ' + sample + '\\nMatches: ' + JSON.stringify(sample.match(re));
      }
      case 'timestamp-converter': {
        if (/^\\d+$/.test(input.trim())) {
          const ms = input.trim().length > 10 ? Number(input) : Number(input) * 1000;
          return new Date(ms).toISOString();
        }
        return String(Math.floor(new Date(input || Date.now()).getTime() / 1000));
      }
      case 'uuid-generator': {
        const count = Math.min(parseInt(input, 10) || 1, 20);
        return Array.from({ length: count }, () => crypto.randomUUID()).join('\\n');
      }
      case 'lorem-ipsum-generator': {
        const n = Math.min(parseInt(input, 10) || 2, 10);
        const para =
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
        return Array.from({ length: n }, () => para).join('\\n\\n');
      }
      case 'word-counter': {
        const text = input || '';
        const words = text.trim() ? text.trim().split(/\\s+/).length : 0;
        const sentences = (text.match(/[.!?]+/g) || []).length;
        return \`Characters: \${text.length}\\nWords: \${words}\\nSentences: \${sentences}\\nLines: \${text.split('\\n').length}\`;
      }
      case 'string-case-converter': {
        const s = input || '';
        const snake = s
          .replace(/([a-z])([A-Z])/g, '$1_$2')
          .replace(/[\\s-]+/g, '_')
          .toLowerCase();
        const kebab = snake.replace(/_/g, '-');
        const camel = snake.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
        const pascal = camel.charAt(0).toUpperCase() + camel.slice(1);
        return \`snake_case: \${snake}\\nkebab-case: \${kebab}\\ncamelCase: \${camel}\\nPascalCase: \${pascal}\`;
      }
      case 'markdown-preview': {
        return input
          .replace(/^### (.*$)/gm, '<h3>$1</h3>')
          .replace(/^## (.*$)/gm, '<h2>$1</h2>')
          .replace(/^# (.*$)/gm, '<h1>$1</h1>')
          .replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')
          .replace(/\\*(.*?)\\*/g, '<em>$1</em>')
          .replace(/\`([^\`]+)\`/g, '<code>$1</code>')
          .replace(/\\n/g, '<br/>');
      }
      case 'cron-expression-explainer': {
        const parts = input.trim().split(/\\s+/);
        if (parts.length < 5) throw new Error('Cron needs at least 5 fields');
        const [min, hour, dom, mon, dow] = parts;
        return \`Minute: \${min}\\nHour: \${hour}\\nDay of month: \${dom}\\nMonth: \${mon}\\nDay of week: \${dow}\\n\\nTip: use * for every, */n for every n units.\`;
      }
      case 'number-base-converter': {
        const n = parseInt(input, parseInt(inputB, 10) || 10);
        if (Number.isNaN(n)) throw new Error('Invalid number');
        return \`Dec: \${n}\\nBin: \${n.toString(2)}\\nOct: \${n.toString(8)}\\nHex: \${n.toString(16)}\`;
      }
      case 'subnet-calculator': {
        const [ip, prefixStr] = (input.trim() || '192.168.1.0/24').split('/');
        const prefix = parseInt(prefixStr || '24', 10);
        const hosts = Math.pow(2, 32 - prefix) - 2;
        return \`Network: \${ip}/ \${prefix}\\nUsable hosts (approx): \${Math.max(hosts, 0)}\\nMask bits: \${prefix}\`;
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

export default function ToolPage() {
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
  }, []);

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
`;
}

function writeIfMissing(filePath, contents) {
  if (fs.existsSync(filePath)) return false;
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, contents);
  return true;
}

function main() {
  const report = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
  const broken = report.broken_links.map((b) => b.href);
  const catalog = buildCatalog();
  console.log('catalog size', catalog.size, 'broken', broken.length);

  let createdServices = 0;
  let createdTools = 0;
  let createdOther = 0;

  for (const href of broken) {
    if (href.startsWith('/services/')) {
      const id = href.slice('/services/'.length).replace(/\/$/, '');
      if (!id || id.includes('/')) continue;
      const pagePath = path.join(APP, 'services', id, 'page.tsx');
      let meta = catalog.get(id);
      if (!meta) {
        // fuzzy: prefer longer matching catalog id that starts with or contains slug
        for (const [cid, m] of catalog) {
          if (cid === id || cid.startsWith(id) || id.startsWith(cid)) {
            meta = { ...m, id };
            break;
          }
        }
      }
      if (!meta) {
        meta = {
          id,
          title: titleize(id),
          description: `${titleize(id)} solutions from Zion Tech Group — implementation, integration, and managed delivery.`,
          features: [],
          benefits: [],
          pricing: {},
        };
      } else {
        meta = { ...meta, id };
      }
      if (writeIfMissing(pagePath, servicePageSource(meta))) createdServices++;
    }
  }

  // Tools from broken list + TOOL_META
  const toolIds = new Set([
    ...broken.filter((h) => h.startsWith('/tools/')).map((h) => h.slice('/tools/'.length).replace(/\/$/, '')),
    ...Object.keys(TOOL_META),
  ]);
  for (const id of toolIds) {
    if (!id || id.includes('/')) continue;
    const meta = TOOL_META[id] || { title: titleize(id), desc: `${titleize(id)} — free browser tool from Zion Tech Group.` };
    const pagePath = path.join(APP, 'tools', id, 'page.tsx');
    // Replace stub index-only dirs
    if (fs.existsSync(pagePath)) continue;
    ensureDir(path.dirname(pagePath));
    fs.writeFileSync(pagePath, toolPageSource(id, meta));
    createdTools++;
  }

  // Audience pages
  const audiences = [
    [
      'providers',
      'Technology Providers',
      'Partner with Zion Tech Group to deliver AI, cloud, and IT services through co-sell and implementation programs.',
      [
        'Co-sell motions for AI and infrastructure products',
        'Implementation playbooks and reference architectures',
        'Joint customer success and support models',
        'Marketplace listing and enablement support',
      ],
    ],
    [
      'integrators',
      'System Integrators',
      'Accelerate delivery with Zion Tech Group accelerators for AI, automation, and cloud modernization.',
      [
        'Reusable integration kits for CRM, ITSM, and data platforms',
        'White-label delivery pods for large programs',
        'Architecture reviews and solution blueprints',
        'Training for your delivery teams',
      ],
    ],
    [
      'it-vendors',
      'IT Vendors',
      'Extend your portfolio with Zion Tech Group AI agents, managed services, and automation IP.',
      [
        'OEM and reseller-friendly packaging',
        'Technical enablement and demo environments',
        'Shared pipeline and deal registration options',
        'Secure multi-tenant delivery patterns',
      ],
    ],
    [
      'business-customers',
      'Business Customers',
      'Modernize operations with Zion Tech Group AI, IT, and automation services built for measurable outcomes.',
      [
        'Discovery workshops and ROI roadmaps',
        'Pilot-to-production delivery in weeks, not quarters',
        'Managed operations with clear SLAs',
        'Security, compliance, and change management included',
      ],
    ],
    [
      'governments',
      'Government & Public Sector',
      'Secure, compliant AI and IT modernization for agencies and public institutions.',
      [
        'Public-sector ready security and audit controls',
        'Citizen experience and internal operations automation',
        'Data governance and responsible AI practices',
        'Phased rollouts aligned to procurement cycles',
      ],
    ],
  ];
  for (const [slug, title, desc, bullets] of audiences) {
    const pagePath = path.join(APP, slug, 'page.tsx');
    if (writeIfMissing(pagePath, audiencePage(slug, title, desc, bullets))) createdOther++;
  }

  // AI demo sandbox
  const demoPath = path.join(APP, 'ai/demo/page.tsx');
  if (
    writeIfMissing(
      demoPath,
      `import Link from 'next/link';

export const metadata = {
  title: 'AI Demo Sandbox | Zion Tech Group',
  description: 'Explore Zion Tech Group AI demos — readiness assessments, URL audits, and solution configurators.',
  alternates: { canonical: 'https://ziontechgroup.com/ai/demo' },
};

const demos = [
  { href: '/ai/ai-readiness-assessment', title: 'AI Readiness Assessment', desc: 'Score your organization for AI adoption.' },
  { href: '/ai/url-audit-assistant', title: 'URL Audit Assistant', desc: 'Audit site URLs and link health.' },
  { href: '/ai/solutions-configurator', title: 'Solutions Configurator', desc: 'Compose an AI/IT solution stack.' },
  { href: '/tools/ai-quick-audit', title: 'AI Quick Audit', desc: 'Two-minute maturity check.' },
  { href: '/ai-lab', title: 'AI Lab', desc: 'Browse experimental AI products.' },
];

export default function AiDemoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">AI Demo Sandbox</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Try interactive AI experiences from Zion Tech Group. No commitment — explore, then book a working session with our team.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400">Book a Live Demo</Link>
            <Link href="/ai" className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:border-cyan-500/50">Back to AI Lab</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 grid gap-4 sm:grid-cols-2">
        {demos.map((d) => (
          <Link key={d.href} href={d.href} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-cyan-500/40 transition-colors">
            <h2 className="text-lg font-semibold text-white">{d.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{d.desc}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
`
    )
  )
    createdOther++;

  // SEO alias pages (self-canonical pointing at missing top-level routes)
  const seoAliases = [
    'ai-contact-center-automation',
    'ai-copilot-for-enterprise-it',
    'ai-document-automation-enterprise',
    'ai-email-automation-business',
    'ai-free-tools-enterprise',
    'ai-security-operations-automation',
  ];
  for (const slug of seoAliases) {
    const pagePath = path.join(APP, slug, 'page.tsx');
    const title = titleize(slug);
    if (
      writeIfMissing(
        pagePath,
        audiencePage(
          slug,
          title,
          `${title} services from Zion Tech Group — strategy, implementation, and managed operations.`,
          [
            'Discovery and use-case prioritization',
            'Secure implementation with measurable KPIs',
            'Integrations with your existing IT stack',
            'Ongoing optimization and support',
          ]
        )
      )
    )
      createdOther++;
  }

  // Fix OG image links in blog posts → use existing default og or public placeholder path
  const ogFixes = [
    [
      'app/blog/ai-email-outreach-automation-for-msps-2026/page.tsx',
      '/og-ai-email-outreach-automation.png',
      '/og-default.png',
    ],
    [
      'app/blog/ai-phone-agent-for-small-business-free-tools-2026/page.tsx',
      '/og-ai-phone-agent-small-business.png',
      '/og-default.png',
    ],
    [
      'app/blog/healthcare-crm-automation-ai-patient-workflows-2026/page.tsx',
      '/og-healthcare-crm-automation.png',
      '/og-default.png',
    ],
  ];
  for (const [rel, from, to] of ogFixes) {
    const fp = path.join(ROOT, rel);
    if (!fs.existsSync(fp)) continue;
    let text = fs.readFileSync(fp, 'utf8');
    if (text.includes(from)) {
      // Prefer existing images in public
      const candidates = ['/og-image.png', '/og.png', '/images/og-default.png', '/zion-og.png', to];
      let replacement = to;
      for (const c of candidates) {
        const disk = path.join(ROOT, 'public', c.replace(/^\//, ''));
        if (fs.existsSync(disk)) {
          replacement = c;
          break;
        }
      }
      text = text.split(from).join(replacement);
      fs.writeFileSync(fp, text);
      createdOther++;
    }
  }

  console.log(
    JSON.stringify(
      {
        createdServices,
        createdTools,
        createdOther,
      },
      null,
      2
    )
  );
}

main();
