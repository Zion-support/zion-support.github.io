<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

function walk(dir, exts = new Set(['.tsx', '.ts', '.jsx', '.js'])) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full, exts));
    else if (exts.has(path.extname(entry.name))) files.push(full);
  }
  return files;
}

function analyzeFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const hasHead = /<Head[\s\S]*?>[\s\S]*?<\/Head>/.test(src);
  const hasOgTitle = /property=["']og:title["']|name=["']og:title["']/.test(src);
  const hasOgDesc = /property=["']og:description["']|name=["']og:description["']/.test(src);
  const hasOgImage = /property=["']og:image["']|name=["']og:image["']/.test(src);
  const missing = [];
  if (!hasOgTitle) missing.push('og:title');
  if (!hasOgDesc) missing.push('og:description');
  if (!hasOgImage) missing.push('og:image');
  return {
    file: filePath.replace(process.cwd(), ''),
    hasHead,
    hasOgTitle,
    hasOgDescription: hasOgDesc,
    hasOgImage,
    missing,
  };
}

function runAudit() {
  const pagesDir = path.join(__dirname, '..', 'pages');
  const files = walk(pagesDir);
  const report = files
    .filter((f) => f.endsWith('.tsx') || f.endsWith('.jsx'))
    .map(analyzeFile);

  const summary = {
    generatedAt: new Date().toISOString(),
    totalFiles: report.length,
    compliant: report.filter(r => r.missing.length === 0).length,
    missingAny: report.filter(r => r.missing.length > 0).length,
    report,
    recommendation: 'Add missing OG tags in pages lacking them to improve social sharing and SEO.',
  };

  const reportsDir = path.join(__dirname, '..', 'public', 'reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(path.join(reportsDir, 'og-meta-report.json'), JSON.stringify(summary, null, 2));

  return summary;
}

if (require.main === module) {
  console.log(JSON.stringify(runAudit(), null, 2));
}

module.exports = { runAudit };
=======
#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

function listFiles(dir, exts) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(p, exts));
    else if (exts.includes(path.extname(entry.name))) out.push(p);
  }
  return out;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function rel(p) {
  return path.relative(process.cwd(), p);
}

function analyzePageContent(content) {
  const hasHead = /from\s+'next\/head'|<Head>/i.test(content);
  const hasTitle = /<title>|og:title|twitter:title/i.test(content);
  const hasDescription = /name=["']description["']|og:description|twitter:description/i.test(content);
  const hasOgImage = /og:image|twitter:image/i.test(content);
  const hasTwitterCard = /twitter:card/i.test(content);
  return { hasHead, hasTitle, hasDescription, hasOgImage, hasTwitterCard };
}

function toRow(cols) {
  return `<tr>${cols.map((c) => `<td>${c}</td>`).join('')}</tr>`;
}

(function main() {
  const pagesDir = path.join(process.cwd(), 'pages');
  if (!fs.existsSync(pagesDir)) return;

  const files = listFiles(pagesDir, ['.tsx', '.jsx']).filter((f) => !/\/api\//.test(f));
  const results = files.map((f) => {
    const content = fs.readFileSync(f, 'utf8');
    const stats = analyzePageContent(content);
    const ok = stats.hasHead && stats.hasTitle && stats.hasDescription && stats.hasOgImage && stats.hasTwitterCard;
    return { file: rel(f), ...stats, ok };
  });

  const problems = results.filter((r) => !r.ok);
  const rows = results.map((r) => {
    const flags = [
      r.hasHead ? '✓' : '✗',
      r.hasTitle ? '✓' : '✗',
      r.hasDescription ? '✓' : '✗',
      r.hasOgImage ? '✓' : '✗',
      r.hasTwitterCard ? '✓' : '✗',
    ];
    return toRow([
      `<code>${r.file}</code>`,
      ...flags,
    ]);
  }).join('\n');

  const reportDir = path.join(process.cwd(), 'public', 'reports', 'og-meta');
  ensureDir(reportDir);
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OG/Twitter Meta Audit</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; background:#0b1220; color:#fff; }
    table { border-collapse: collapse; width: 100%; margin-top: 12px; }
    th, td { border-bottom: 1px solid rgba(255,255,255,0.12); padding: 8px; text-align: left; font-size: 14px; }
    th { background: rgba(255,255,255,0.06); }
    code { color: #c7f1ff; }
    .summary { opacity: 0.85; }
  </style>
</head>
<body>
  <h1>OG/Twitter Meta Audit</h1>
  <p class="summary">Pages scanned: ${results.length}. Issues: ${problems.length}.</p>
  <table>
    <thead>
      <tr>
        <th>Page</th>
        <th>Head</th>
        <th>Title</th>
        <th>Description</th>
        <th>OG Image</th>
        <th>Twitter Card</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
</body>
</html>`;
  fs.writeFileSync(path.join(reportDir, 'index.html'), html, 'utf8');
  process.stdout.write(`[og-meta-auditor] Report written to public/reports/og-meta/index.html\n`);
})();
>>>>>>> origin/auto/autonomy-17186719616
