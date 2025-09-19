#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();

const requiredPages = [
  { file: 'pages/services/index.tsx', kind: 'file' },
  { file: 'pages/products/index.tsx', kind: 'file' },
  { file: 'pages/contact.tsx', kind: 'file' },
  { file: 'pages/services/ai-seo-auditor.tsx', kind: 'file' },
  { file: 'pages/services/customer-support-chatbot.tsx', kind: 'file' },
  { file: 'pages/services/landing-page-generator.tsx', kind: 'file' },
  { file: 'pages/services/price-intelligence-service.tsx', kind: 'file' },
];

function ensureFile(relPath, contents) {
  const abs = path.join(projectRoot, relPath);
  const dir = path.dirname(abs);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(abs)) {
    fs.writeFileSync(abs, contents, 'utf8');
    console.log(`Created missing page: ${relPath}`);
  }
}

const placeholder = (title, body) => `import Head from 'next/head';\nexport default function Page(){return(<div className=\"min-h-screen bg-slate-950 text-white\"><Head><title>${title}</title><meta name=\"description\" content=\"${body}\"/></Head><main className=\"container mx-auto px-6 py-16\"><h1 className=\"text-4xl font-bold\">${title}</h1><p className=\"mt-3 text-white/80\">${body}</p></main></div>)}\n`;

(function main(){
  for (const p of requiredPages) {
    if (p.kind === 'file') {
      const title = p.file.split('/').slice(-1)[0].replace(/\.tsx?$/, '').replace(/-/g,' ').replace(/\b\w/g, c=>c.toUpperCase());
      ensureFile(p.file, placeholder(title, 'Auto-created to prevent broken internal links.'));
    }
  }
  console.log('Site link fixer completed.');
})();
=======
const ROOT = process.cwd();
const REPORT_FILE = path.join(ROOT, 'data', 'reports', 'link-sentinel', 'internal-links-latest.json');
const PAGES_DIR = path.join(ROOT, 'pages');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function toPageFile(route) {
  // Map "/" -> index.tsx, "/foo" -> foo.tsx, "/a/b" -> a/b.tsx
  if (route === '/' || route === '') return path.join(PAGES_DIR, 'index.tsx');
  const parts = route.replace(/^\//, '').split('/');
  const file = parts.pop() || 'index';
  const dir = path.join(PAGES_DIR, ...parts);
  return path.join(dir, `${file}.tsx`);
}

function createPlaceholderPage(filePath, route) {
  ensureDir(path.dirname(filePath));
  if (fs.existsSync(filePath)) return false;
  const title = route === '/' ? 'Home' : route.replace(/^\//, '').split('/').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' • ');
  const content = `import Head from 'next/head';
import Link from 'next/link';

export default function Placeholder() {
  return (
    <main className="min-h-screen p-8">
      <Head>
        <title>${title} - Placeholder</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-2">${title}</h1>
        <p className="text-gray-600 mb-6">Auto-generated placeholder for missing route: <code>${route}</code>.</p>
        <Link href="/"><a className="text-blue-600 hover:underline">Back to Home</a></Link>
      </div>
    </main>
  );
}
`;
  fs.writeFileSync(filePath, content);
  return true;
}

function main() {
  if (!fs.existsSync(REPORT_FILE)) {
    console.log('No internal link report found. Run site-link-crawler first.');
    process.exit(0);
  }
  const report = JSON.parse(fs.readFileSync(REPORT_FILE, 'utf8'));
  const missing = (report.missingRoutes || []).filter(Boolean);
  if (missing.length === 0) {
    console.log('No missing routes detected.');
    process.exit(0);
  }
  let created = 0;
  for (const route of missing) {
    const filePath = toPageFile(route);
    if (createPlaceholderPage(filePath, route)) {
      created += 1;
      console.log(`Created placeholder: ${filePath}`);
    }
  }
  try {
    // Refresh sitemap if script exists
    const { execSync } = require('child_process');
    execSync('node scripts/generate-sitemap.js', { stdio: 'inherit', shell: true });
  } catch {}
  console.log(`Placeholders created: ${created}/${missing.length}`);
}

main();
>>>>>>> origin/auto/autonomy-17186719616
