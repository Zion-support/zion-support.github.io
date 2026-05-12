#!/usr/bin/env node
/**
 * Image Optimization & Alt Text Compliance Auditor
 * Scans source code + built HTML for image issues
 * Enforces alt text, file size, format diversity, responsive attributes
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const STATE_DIR = path.join(ROOT, '.hermes', 'memory', 'image-optimization');
const LOG_FILE = path.join(STATE_DIR, 'image-audit.log');
const HISTORY_FILE = path.join(STATE_DIR, 'history.json');
const REPORT_FILE = path.join(STATE_DIR, 'latest-report.json');

const APP_URL = process.env.APP_URL || 'https://ziontechgroup.com';
const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT = process.env.TELEGRAM_CHAT_ID || '8435383377';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Thresholds (KB)
const MAX_IMAGE_SIZE_KB = 500;       // Warn if single image > 500KB
const MAX_IMAGE_SIZE_CRITICAL_KB = 1024; // Fail if > 1MB
const PAGE_IMAGE_WEIGHT_WARN_KB = 2048; // Warn if page images > 2MB total
const PAGE_IMAGE_WEIGHT_CRITICAL_KB = 5120; // Fail if > 5MB total

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  fs.mkdirSync(STATE_DIR, { recursive: true });
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function ensureFiles() {
  if (!fs.existsSync(HISTORY_FILE)) fs.writeFileSync(HISTORY_FILE, JSON.stringify({ pages: {} }, null, 2));
}

function loadHistory() {
  try { return JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8')); } catch { return { pages: {} }; }
}

function saveHistory(hist) {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(hist, null, 2));
}

// Scan source files for img/Image usage
function scanSourceFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts',
    'public/**/*.html', // static HTML if any
  ];

  const images = []; // {file, line, src, alt?, type: 'img'|'next-image'}

  for (const pattern of patterns) {
    const files = execSync(`find ${ROOT}/${pattern} -type f 2>/dev/null || true`, { shell: true }).toString().trim().split('\n').filter(Boolean);
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        // <img src="..." alt="...">
        const imgRegex = /<img[^>]*src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi;
        let m;
        while ((m = imgRegex.exec(line)) !== null) {
          images.push({ file: file.replace(ROOT + '/', ''), line: idx + 1, src: m[1], alt: m[2], type: 'img' });
        }
        // Next.js Image component
        const imageRegex = /<Image[^>]*src=["']([^"']+)["'][^>]*(?:alt=["']([^"']*)["'])?[^>]*>/gi;
        while ((m = imageRegex.exec(line)) !== null) {
          images.push({ file: file.replace(ROOT + '/', ''), line: idx + 1, src: m[1], alt: m[2] || '', type: 'next-image' });
        }
      });
    }
  }
  return images;
}

// Check if image file exists and get stats
function inspectImage(src, basePath = ROOT) {
  // Resolve src: could be absolute path, relative, or public/ URL
  let imagePath = null;

  // Strip leading slash for public/ resolution
  if (src.startsWith('/')) {
    // Next.js public folder
    imagePath = path.join(ROOT, 'public', src);
  } else if (src.startsWith('http')) {
    return { exists: false, external: true, size: 0 };
  } else {
    // Relative path from file location — approximated from ROOT
    imagePath = path.join(ROOT, src);
  }

  if (!fs.existsSync(imagePath)) {
    return { exists: false, size: 0 };
  }

  const stats = fs.statSync(imagePath);
  const sizeKB = stats.size / 1024;
  const ext = path.extname(imagePath).toLowerCase();
  const variants = [];

  // Check for WebP/AVIF variants (same name, different ext in same dir)
  const base = imagePath.replace(ext, '');
  for (const v of ['.webp', '.avif']) {
    if (fs.existsSync(base + v)) variants.push(v.slice(1));
  }

  return { exists: true, size: sizeKB, ext, variants, mtime: stats.mtime.toISOString() };
}

function analyzeImages(images) {
  const results = [];
  let totalWeight = 0;
  let missingAlt = 0;
  let oversized = 0;
  let missingModernFormat = 0;

  for (const img of images) {
    const info = inspectImage(img.src);
    const issues = [];

    // Alt text
    if (!img.alt || img.alt.trim() === '') {
      missingAlt++;
      issues.push('missing_alt');
    }

    // Existence
    if (!info.exists) {
      issues.push('missing_file');
    } else {
      totalWeight += info.size;

      // Size
      if (info.size > MAX_IMAGE_SIZE_CRITICAL_KB) {
        oversized++;
        issues.push(`oversized_${Math.round(info.size)}KB`);
      } else if (info.size > MAX_IMAGE_SIZE_KB) {
        issues.push(`large_${Math.round(info.size)}KB`);
      }

      // Modern format
      const hasModern = info.variants.includes('webp') || info.variants.includes('avif');
      if (!hasModern && info.size > 50) { // only flag if sizeable image
        missingModernFormat++;
        issues.push('no_modern_format');
      }

      // Dimensions check: if info has width/height metadata? Could use sharp if installed, but skip to avoid deps
    }

    results.push({ ...img, info, issues });
  }

  return { results, totalWeight, missingAlt, oversized, missingModernFormat };
}

function aggregateByPage(results) {
  const pageStats = {};
  for (const r of results) {
    // Extract page path from file path (everything before components/public)
    let page = r.file;
    if (page.startsWith('app/')) {
      const parts = page.split('/');
      page = '/' + parts.slice(1).join('/').replace(/\.(tsx|ts|jsx|js)$/, '') || '/';
    } else if (page.startsWith('components/') || page.startsWith('public/')) {
      page = '/'; // global
    }

    if (!pageStats[page]) pageStats[page] = { images: 0, weight: 0, issues: new Set(), missingAlt: 0 };
    pageStats[page].images++;
    pageStats[page].weight += r.info.exists ? r.info.size : 0;
    if (r.issues.includes('missing_alt')) pageStats[page].missingAlt++;
    for (const issue of r.issues) pageStats[page].issues.add(issue);
  }

  // Convert Set → Array
  for (const p of Object.keys(pageStats)) {
    pageStats[p].issues = Array.from(pageStats[p].issues);
  }

  return pageStats;
}

async function sendTelegram(report, summary) {
  const https = require('https');
  const now = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  let text = `🖼️ *Image Optimization Audit* — ${now}\n`;
  text += `Base: ${APP_URL}\n\n`;

  if (summary.totalIssues === 0) {
    text += '✅ All images compliant.\n';
  } else {
    text += `⚠️ ${summary.totalIssues} issue(s) across ${summary.imagesScanned} images:\n\n`;
    if (summary.missingAlt > 0) text += `• Missing alt: ${summary.missingAlt}\n`;
    if (summary.oversized > 0) text += `• Oversized (>500KB): ${summary.oversized}\n`;
    if (summary.missingModernFormat > 0) text += `• No WebP/AVIF: ${summary.missingModernFormat}\n`;
    text += `\nTop pages by image weight:\n`;
    Object.entries(report.pageStats)
      .sort((a, b) => b[1].weight - a[1].weight)
      .slice(0, 3)
      .forEach(([page, s]) => {
        text += `• ${page}: ${Math.round(s.weight)}KB (${s.images} imgs)\n`;
      });
  }

  text += `\nDetails: .hermes/memory/image-optimization/latest-report.json`;

  const payload = new URLSearchParams({ chat_id: TELEGRAM_CHAT, text, parse_mode: 'Markdown' });

  await new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.telegram.org',
      path: `/bot${TELEGRAM_TOKEN}/sendMessage`,
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': payload.byteLength },
    }, res => {
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => (res.statusCode === 200 ? resolve() : reject(new Error(`HTTP ${res.statusCode}: ${body}`))));
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
  log('✅ Telegram alert sent');
}

async function createGitHubIssue(report, summary) {
  const title = `🚨 Image Optimization Issues — ${new Date().toLocaleDateString()} — ${summary.totalIssues} found`;
  const body = [
    '## Image Optimization & Alt Text Report',
    '',
    `**Run:** ${new Date().toISOString()}`,
    `**Images scanned:** ${summary.imagesScanned}`,
    `**Total issues:** ${summary.totalIssues}`,
    '',
    summary.missingAlt > 0 ? `### ❌ Missing Alt Text (${summary.missingAlt})\nThese images violate WCAG and SEO best practices. Every <img> must have meaningful alt text.\n\n` : '',
    summary.oversized > 0 ? `### ⚠️ Oversized Images (${summary.oversized})\nImages >500KB should be compressed or downscaled.\n\n` : '',
    summary.missingModernFormat > 0 ? `### 🔄 Modern Format Missing (${summary.missingModernFormat})\nAdd WebP/AVIF variants for better compression.\n\n` : '',
    '### Top Problem Pages',
    ...Object.entries(report.pageStats)
      .sort((a, b) => b[1].weight - a[1].weight)
      .slice(0, 10)
      .map(([page, s]) => `- ${page}: ${Math.round(s.weight)}KB, ${s.images} images, issues: ${s.issues.join(', ')}`),
    '',
    '### Remediation',
    '- Add `alt` attributes describing image purpose',
    '- Compress large images using Imagemagick or online tools',
    '- Convert to WebP: `cwebp -q 80 input.jpg -o output.webp`',
    '- Use Next.js `<Image>` with `width/height` and `loader` for optimization',
    '- Add responsive `srcset` for large images',
    '',
    '---',
    '*Generated by automation/image-optimization-audit.cjs*',
  ].join('\n');

  try {
    const escaped = body.replace(/"/g, '\\"').replace(/\$/g, '\\$');
    execSync(`gh issue create --title "${title}" --body "${escaped}" --label "automation,performance,accessibility"`, { stdio: 'pipe' });
    log('✅ GitHub issue created');
  } catch (e) {
    log('⚠️ gh CLI failed; issue not created: ' + e.message);
  }
}

async function main() {
  ensureFiles();
  log('🖼️ Starting Image Optimization Audit...');

  // 1. Scan source files
  const images = scanSourceFiles();
  log(`📁 Found ${images.length} image references in source`);

  if (images.length === 0) {
    log('✅ No images found to audit');
    return;
  }

  // 2. Analyze each image
  const { results, totalWeight, missingAlt, oversized, missingModernFormat } = analyzeImages(images);
  log(`📊 Total image weight: ${Math.round(totalWeight)}KB`);
  log(`   Missing alt: ${missingAlt}, Oversized: ${oversized}, No modern format: ${missingModernFormat}`);

  // 3. Aggregate by page
  const pageStats = aggregateByPage(results);

  // 4. Load & update history
  const history = loadHistory();
  const todayKey = new Date().toISOString().slice(0, 10);
  const issues = [];

  for (const [page, stats] of Object.entries(pageStats)) {
    if (!history.pages[page]) history.pages[page] = { firstSeen: todayKey, daily: {} };
    history.pages[page].daily[todayKey] = {
      images: stats.images,
      weight: stats.weight,
      missingAlt: stats.missingAlt,
      issues: stats.issues,
    };
    // Keep only last 30 days
    const days = Object.keys(history.pages[page].daily).sort();
    if (days.length > 30) {
      const toRemove = days.slice(0, days.length - 30);
      for (const d of toRemove) delete history.pages[page].daily[d];
    }

    // Flag pages with critical issues for reporting
    if (stats.missingAlt > 0 || stats.weight > PAGE_IMAGE_WEIGHT_CRITICAL_KB) {
      issues.push({ page, missingAlt: stats.missingAlt, weight: Math.round(stats.weight) });
    }
  }

  saveHistory(history);

  // 5. Build report
  const totalIssues = missingAlt + oversized + missingModernFormat;
  const report = {
    timestamp: new Date().toISOString(),
    summary: { imagesScanned: images.length, totalWeight, missingAlt, oversized, missingModernFormat, totalIssues },
    pageStats,
    issues,
  };
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));

  // 6. Alerts
  if (TELEGRAM_TOKEN) {
    await sendTelegram(report, report.summary);
  }

  // 7. GitHub issue for critical problems on main (many missing alts or extremely large images)
  if (issues.length >= 3 && GITHUB_TOKEN) {
    await createGitHubIssue(report, report.summary);
  }

  log('✅ Image optimization audit complete');
}

main().catch(err => {
  console.error('❌ Image audit failed:', err);
  process.exit(1);
});
