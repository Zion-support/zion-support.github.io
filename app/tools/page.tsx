'use client';

import Link from 'next/link';

const tools = [
  {
    id: 'qr-code-generator',
    title: 'QR Code Generator',
    description: 'Generate QR codes for text, URLs, or any data instantly',
    href: '/tools/qr-code-generator',
    icon: '📱',
    category: 'Developer',
  },
  {
    id: 'website-analyzer',
    title: 'Website Analyzer',
    description: 'Analyze any website for SEO, performance, security, and accessibility',
    href: '/tools/website-analyzer',
    icon: '🌐',
    category: 'Developer',
  },
  {
    id: 'jwt-decoder',
    title: 'JWT Decoder',
    description: 'Decode and inspect JWT tokens instantly with expiration check',
    href: '/tools/jwt-decoder',
    icon: '🔑',
    category: 'Developer',
  },
  {
    id: 'cron-generator',
    title: 'Cron Expression Generator',
    description: 'Generate cron expressions visually for scheduled tasks',
    href: '/tools/cron-generator',
    icon: '⏰',
    category: 'Developer',
  },
  {
    id: 'sql-query-generator',
    title: 'SQL Query Generator',
    description: 'Generate SQL queries from natural language descriptions',
    href: '/tools/sql-query-generator',
    icon: '🗄️',
    category: 'Developer',
  },
  {
    id: 'api-designer',
    title: 'API Designer',
    description: 'Design, document, and test APIs visually with OpenAPI support',
    href: '/tools/api-designer',
    icon: '🌐',
    category: 'Developer',
  },
  {
    id: 'json-to-typescript-converter',
    title: 'JSON to TypeScript Converter',
    description: 'Convert JSON data to TypeScript interfaces instantly with AI-powered type inference',
    href: '/tools/json-to-typescript-converter',
    icon: '🔄',
    category: 'Developer',
  },
  {
    id: 'productivity-score-calculator',
    title: 'AI Productivity Score Calculator',
    description: 'Measure your team\'s productivity potential with AI adoption and get improvement recommendations',
    href: '/tools/productivity-score-calculator',
    icon: '📊',
    category: 'Business',
  },
  {
    id: 'roi-calculator',
    title: 'ROI Calculator',
    description: 'Calculate the return on investment for implementing AI tools in your organization',
    href: '/tools/roi-calculator',
    icon: '💰',
    category: 'Business',
  },
  {
    id: 'meeting-cost-calculator',
    title: 'Meeting Cost Calculator',
    description: 'Understand the true cost of meetings and see potential savings with AI improvements',
    href: '/tools/meeting-cost-calculator',
    icon: '📅',
    category: 'Business',
  },
  {
    id: 'accessibility-auditor',
    title: 'AI Accessibility Auditor',
    description: 'Check WCAG compliance, detect color contrast issues, missing ARIA labels, and more',
    href: '/tools/accessibility-auditor',
    icon: '♿',
    category: 'Developer',
  },
  {
    id: 'regex-generator',
    title: 'Regex Generator',
    description: 'Generate regular expressions from natural language descriptions',
    href: '/tools/regex-generator',
    icon: '🔤',
    category: 'Developer',
  },
  {
    id: 'markdown-to-html',
    title: 'Markdown to HTML Converter',
    description: 'Convert Markdown to styled HTML with live preview and export options',
    href: '/tools/markdown-to-html',
    icon: '📝',
    category: 'Developer',
  },
  {
    id: 'color-palette-generator',
    title: 'Color Palette Generator',
    description: 'Generate harmonious color palettes from any base color with accessibility checks',
    href: '/tools/color-palette-generator',
    icon: '🎨',
    category: 'Design',
  },
  {
    id: 'uuid-generator',
    title: 'UUID Generator',
    description: 'Generate UUID v4 and v7 identifiers with bulk generation, formatting options, and export',
    href: '/tools/uuid-generator',
    icon: '🆔',
    category: 'Developer',
  },
  {
    id: 'timestamp-converter',
    title: 'Timestamp Converter',
    description: 'Convert between Unix timestamps, ISO 8601, and human-readable dates with live clock',
    href: '/tools/timestamp-converter',
    icon: '⏱️',
    category: 'Developer',
  },
  {
    id: 'color-converter',
    title: 'Color Converter',
    description: 'Convert colors between HEX, RGB, HSL, and CMYK with live preview and color harmonies',
    href: '/tools/color-converter',
    icon: '🎨',
    category: 'Design',
  },
  {
    id: 'json-diff-viewer',
    title: 'JSON Diff Viewer',
    description: 'Compare two JSON objects side-by-side and see structural differences at a glance',
    href: '/tools/json-diff-viewer',
    icon: '🔍',
    category: 'Developer',
  },
  {
    id: 'base64-encoder-decoder',
    title: 'Base64 Encoder / Decoder',
    description: 'Encode or decode text and files to/from Base64 with file upload and download support',
    href: '/tools/base64-encoder-decoder',
    icon: '🔐',
    category: 'Developer',
  },
  {
    id: 'url-slug-generator',
    title: 'URL Slug Generator',
    description: 'Convert any text to clean, SEO-friendly URL slugs with case variants and stop word removal',
    href: '/tools/url-slug-generator',
    icon: '🔗',
    category: 'Developer',
  },
  {
    id: 'csv-json-converter',
    title: 'CSV ↔ JSON Converter',
    description: 'Convert between CSV and JSON formats with file upload, smart quoting, and download',
    href: '/tools/csv-json-converter',
    icon: '📊',
    category: 'Developer',
  },
  {
    id: 'env-file-parser',
    title: 'Env File Parser',
    description: 'Parse, edit, and generate .env files with secret detection and .env.example export',
    href: '/tools/env-file-parser',
    icon: '🔑',
    category: 'Developer',
  },
  {
    id: 'string-case-converter',
    title: 'String Case Converter',
    description: 'Convert text between camelCase, snake_case, PascalCase, kebab-case, and more',
    href: '/tools/string-case-converter',
    icon: '🔤',
    category: 'Developer',
  },
  {
    id: 'yaml-json-converter',
    title: 'YAML ↔ JSON Converter',
    description: 'Convert between YAML and JSON formats with live preview, 100% client-side',
    href: '/tools/yaml-json-converter',
    icon: '🔄',
    category: 'Developer',
  },
  {
    id: 'css-gradient-generator',
    title: 'CSS Gradient Generator',
    description: 'Create linear, radial, and conic CSS gradients with live preview, color stops, presets, and instant CSS export',
    href: '/tools/css-gradient-generator',
    icon: '🎨',
    category: 'Design',
  },
  {
    id: 'regex-tester',
    title: 'Regex Tester',
    description: 'Test regular expressions with real-time match highlighting, capture groups, common pattern presets, and a quick reference',
    href: '/tools/regex-tester',
    icon: '🔍',
    category: 'Developer',
  },
  {
    id: 'chmod-calculator',
    title: 'Chmod Permission Calculator',
    description: 'Visually build Unix file permissions with owner/group/other controls, special bits, 12 presets, and instant chmod command output',
    href: '/tools/chmod-calculator',
    icon: '🔒',
    category: 'Developer',
  },
  {
    id: 'string-entropy-analyzer',
    title: 'String Entropy Analyzer',
    description: 'Analyze the randomness and information density of any string — character classes, pattern detection, and brute-force bit estimation',
    href: '/tools/string-entropy-analyzer',
    icon: '📊',
    category: 'Security',
  },
  {
    id: 'xml-formatter-validator',
    title: 'XML Formatter & Validator',
    description: 'Pretty-print or minify XML with real-time validation, error details, element/attribute stats, and configurable indentation',
    href: '/tools/xml-formatter-validator',
    icon: '📄',
    category: 'Developer',
  },
  {
    id: 'hmac-generator',
    title: 'HMAC Signature Generator',
    description: 'Generate HMAC-SHA256/384/512 signatures for webhook verification, API request signing, and JWT generation',
    href: '/tools/hmac-generator',
    icon: '🔐',
    category: 'Security',
  },
  {
    id: 'markdown-table-generator',
    title: 'Markdown Table Generator',
    description: 'Convert CSV or TSV data to Markdown tables, ASCII tables, or HTML with live preview, alignment controls, and instant export',
    href: '/tools/markdown-table-generator',
    icon: '📊',
    category: 'Developer',
  },
  {
    id: 'dns-lookup',
    title: 'DNS Record Lookup',
    description: 'Query DNS records for any domain — A, AAAA, MX, TXT, NS, CNAME, SOA, and CAA records via Google Public DNS',
    href: '/tools/dns-lookup',
    icon: '🌐',
    category: 'Developer',
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900">AI Tools & Calculators</h1>
          <p className="mt-2 text-lg text-slate-600">
            Practical tools to help you make data-driven decisions about AI adoption
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{tool.icon}</div>
              <div className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                {tool.category}
              </div>
              <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600">
                {tool.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{tool.description}</p>
            </Link>
          ))}

          {/* Placeholder for future tools */}
          <div className="rounded-2xl border border-dashed border-slate-300 p-6">
            <div className="mb-4 text-4xl">🚀</div>
            <h2 className="text-xl font-semibold text-slate-400">More Tools Coming Soon</h2>
            <p className="mt-2 text-sm text-slate-500">
              We're building more calculators and tools to help you evaluate AI solutions.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Need a Custom Solution?</h2>
          <p className="mt-2 text-slate-600">
            Our team can build custom calculators and tools tailored to your organization's specific needs.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Contact Us
            </Link>
            <Link
              href="/ai-services"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              View AI Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
