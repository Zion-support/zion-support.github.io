#!/usr/bin/env node
/**
 * Autonomous Open Graph Image Generator
 *
 * Creates OG images for content pages using Playwright (headless Chromium).
 * Renders title, excerpt, and site name on a 1200×630 canvas; saves to public/og-images/.
 */

const fs = require('fs');
const path = require('path');
const { chromium } = require('@playwright/test');

const STATE_DIR = path.join(process.cwd(), '.hermes', 'memory', 'og-images');
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'og-images');
const CONTENT_DIRS = ['app/blog', 'app/services', 'app/ai-lab', 'app/content'];

const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 630;
const BG_COLOR = '#0f172a';
const TEXT_COLOR = '#ffffff';
const LOGO_URL = 'https://ziontechgroup.com/logo.png';

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// Discover content files (md/mdx)
function discoverContentFiles() {
  const files = [];
  for (const dir of CONTENT_DIRS) {
    const full = path.join(process.cwd(), dir);
    if (!fs.existsSync(full)) continue;
    function walk(d) {
      const entries = fs.readdirSync(d, { withFileTypes: true });
      for (const e of entries) {
        const p = path.join(d, e.name);
        if (e.isDirectory()) walk(p);
        else if (/\.(mdx?|md)$/.test(e.name)) files.push(p);
      }
    }
    walk(full);
  }
  return files;
}

// Parse frontmatter
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: content };
  const fm = {};
  match[1].split('\n').forEach(line => {
    const [key, ...valParts] = line.split(':');
    if (key && valParts.length) fm[key.trim()] = valParts.join(':').trim().replace(/^["']|["']$/g, '');
  });
  return { frontmatter: fm, body: match[2] };
}

function getExcerpt(fm, body) {
  if (fm.excerpt) return fm.excerpt;
  const plain = body.replace(/[#*`\[\]]/g, ' ').split('\n').filter(l => l.trim()).join(' ');
  return plain.substring(0, 150) + (plain.length > 150 ? '...' : '');
}

function getSlug(filePath) {
  const rel = filePath.replace(process.cwd(), '').replace(/^\/+/, '');
  const name = path.basename(rel, path.extname(rel));
  return name.toLowerCase().replace(/\s+/g, '-');
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

function buildHTML(title, excerpt) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      margin: 0;
      width: ${IMAGE_WIDTH}px;
      height: ${IMAGE_HEIGHT}px;
      background: ${BG_COLOR};
      color: ${TEXT_COLOR};
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 40px;
      box-sizing: border-box;
      background-image: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    }
    .logo { position: absolute; top: 30px; left: 40px; width: 120px; height: auto; }
    .title { font-size: 48px; font-weight: bold; margin-bottom: 24px; line-height: 1.2; }
    .excerpt { font-size: 24px; opacity: 0.9; line-height: 1.4; max-width: 90%; }
    .footer { position: absolute; bottom: 30px; font-size: 20px; opacity: 0.7; }
  </style>
</head>
<body>
  <img class="logo" src="${LOGO_URL}" alt="Zion Tech Group" onerror="this.style.display='none'">
  <div class="title">${escapeHtml(title)}</div>
  <div class="excerpt">${escapeHtml(excerpt)}</div>
  <div class="footer">ziontechgroup.com</div>
</body>
</html>`;
}

async function main() {
  console.log('🖼️  Open Graph Image Generator — starting\n');
  ensureDir(STATE_DIR);
  ensureDir(OUTPUT_DIR);

  const files = discoverContentFiles();
  console.log(`📁 Discovered ${files.length} content file(s)`);

  const browser = await chromium.launch({ headless: true });
  const generated = [];

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const { frontmatter, body } = parseFrontmatter(content);
    const title = frontmatter.title || frontmatter.heading || path.basename(file);
    const excerpt = getExcerpt(frontmatter, body);
    const slug = getSlug(file);

    console.log(`   🏷️  ${slug} — "${title.substring(0, 40)}..."`);

    const html = buildHTML(title, excerpt);
    const page = await browser.newPage();
    await page.setViewportSize({ width: IMAGE_WIDTH, height: IMAGE_HEIGHT });
    await page.setContent(html, { waitUntil: 'networkidle' });
    const outPath = path.join(OUTPUT_DIR, `${slug}.png`);
    await page.screenshot({ path: outPath, fullPage: false });
    await page.close();

    console.log(`   ✅ Generated: ${outPath}`);
    generated.push({ slug, file, outPath });
  }

  await browser.close();

  const manifestPath = path.join(STATE_DIR, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(generated, null, 2));

  console.log(`\n📦 Generated ${generated.length} OG image(s).`);
  console.log(`📄 Manifest: ${manifestPath}\n`);
  console.log('✅ OG image generation complete.\n');
  process.exit(0);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
