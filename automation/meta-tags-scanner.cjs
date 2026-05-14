#!/usr/bin/env node
/**
 * Autonomous Meta Tags Quality Scanner
 *
 * Weekly crawl of all pages; validates SEO meta tags:
 * - title length (50–60 chars ideal, >80 bad)
 * - description uniqueness and length (120–160)
 * - canonical URL presence and correctness
 * - robots directives (flag noindex on key pages)
 * - Open Graph tags (og:title, og:description, og:image)
 * Opens GitHub issues on violations; sends Telegram digest.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { gzip } = require('zlib');

const STATE_DIR = path.join(process.cwd(), '.hermes', 'memory', 'meta-tags-scanner');
const BASELINE_PATH = path.join(STATE_DIR, 'baseline.json');
const ISSUES_PATH = path.join(STATE_DIR, 'issues.json');

const SITEMAP_URL = 'http://localhost:3000/sitemap.xml';
const SITE_URL = 'http://localhost:3000';
const USER_AGENT = 'Mozilla/5.0 (compatible; MetaTagsScanner/1.0; +https://ziontechgroup.com)';

// Config from env
const CONFIG = {
  TITLE_MIN: parseInt(process.env.META_TITLE_MIN || '50', 10),
  TITLE_MAX: parseInt(process.env.META_TITLE_MAX || '60', 10),
  TITLE_WARN_MAX: 80,
  DESC_MIN: parseInt(process.env.META_DESC_MIN || '120', 10),
  DESC_MAX: parseInt(process.env.META_DESC_MAX || '160', 10),
  CHECK_CANONICAL: process.env.META_CHECK_CANONICAL !== 'false',
  CHECK_ROBOTS: process.env.META_CHECK_ROBOTS !== 'false',
  OPEN_ISSUES: process.env.META_OPEN_ISSUES !== 'false'
};

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function nowISO() { return new Date().toISOString(); }

async function fetchSitemap() {
  const url = new URL(SITEMAP_URL);
  const protocol = url.protocol === 'https:' ? https : http;
  return new Promise((resolve, reject) => {
    protocol.get(url, { headers: { 'User-Agent': USER_AGENT, 'Accept-Encoding': 'gzip' } }, res => {
      let raw = [];
      res.on('data', chunk => raw.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(raw);
        if (res.headers['content-encoding'] === 'gzip') {
          gzip.unzip(buffer, (err, unzipped) => err ? reject(err) : resolve(unzipped.toString()));
        } else {
          resolve(buffer.toString());
        }
      });
    }).on('error', reject);
  });
}

function parseSitemap(xml) {
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = re.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

async function fetchPage(urlStr) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(urlStr);
    const protocol = urlObj.protocol === 'https:' ? https : http;
    const timeout = setTimeout(() => reject(new Error('timeout')), 15000);
    protocol.get(urlStr, { headers: { 'User-Agent': USER_AGENT } }, res => {
      clearTimeout(timeout);
      let raw = [];
      res.on('data', chunk => raw.push(chunk));
      res.on('end', () => {
        const html = Buffer.concat(raw).toString();
        resolve({ url: urlStr, html, status: res.statusCode });
      });
    }).on('error', err => {
      clearTimeout(timeout);
      reject(err);
    });
  });
}

function extractMeta(html, url) {
  const meta = {
    url,
    title: null,
    description: null,
    canonical: null,
    robots: null,
    ogTitle: null,
    ogDescription: null,
    ogImage: null
  };

  // Title
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (titleMatch) meta.title = titleMatch[1].trim();

  // Meta description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["']/i);
  if (descMatch) meta.description = descMatch[1].trim();

  // Canonical
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([\s\S]*?)["']/i);
  if (canonicalMatch) meta.canonical = canonicalMatch[1].trim();

  // Robots
  const robotsMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([\s\S]*?)["']/i);
  if (robotsMatch) meta.robots = robotsMatch[1].trim();

  // Open Graph
  const ogTitle = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([\s\S]*?)["']/i);
  if (ogTitle) meta.ogTitle = ogTitle[1].trim();
  const ogDesc = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([\s\S]*?)["']/i);
  if (ogDesc) meta.ogDescription = ogDesc[1].trim();
  const ogImage = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([\s\S]*?)["']/i);
  if (ogImage) meta.ogImage = ogImage[1].trim();

  return meta;
}

function validateMeta(meta, allTitles, allDescriptions) {
  const issues = [];

  // Title checks
  if (!meta.title) {
    issues.push({ field: 'title', severity: 'error', message: 'Missing <title>' });
  } else {
    const len = meta.title.length;
    if (len < CONFIG.TITLE_MIN) issues.push({ field: 'title', severity: 'warn', message: `Title too short (${len} chars, recommended ≥${CONFIG.TITLE_MIN})` });
    else if (len > CONFIG.TITLE_MAX) issues.push({ field: 'title', severity: 'error', message: `Title too long (${len} chars, should be ≤${CONFIG.TITLE_MAX})` });
    else if (len > CONFIG.TITLE_WARN_MAX) issues.push({ field: 'title', severity: 'warn', message: `Title slightly long (${len} chars, ideal ≤${CONFIG.TITLE_MAX})` });
  }

  // Description checks
  if (!meta.description) {
    issues.push({ field: 'description', severity: 'error', message: 'Missing meta description' });
  } else {
    const len = meta.description.length;
    if (len < CONFIG.DESC_MIN) issues.push({ field: 'description', severity: 'warn', message: `Description too short (${len} chars, recommended ≥${CONFIG.DESC_MIN})` });
    else if (len > CONFIG.DESC_MAX) issues.push({ field: 'description', severity: 'error', message: `Description too long (${len} chars, should be ≤${CONFIG.DESC_MAX})` });
  }

  // Uniqueness checks (warn if duplicate)
  if (meta.title && allTitles.filter(t => t === meta.title).length > 1) {
    issues.push({ field: 'title', severity: 'warn', message: 'Duplicate title across multiple pages' });
  }
  if (meta.description && allDescriptions.filter(d => d === meta.description).length > 1) {
    issues.push({ field: 'description', severity: 'warn', message: 'Duplicate description across multiple pages' });
  }

  // Canonical
  if (CONFIG.CHECK_CANONICAL && !meta.canonical) {
    issues.push({ field: 'canonical', severity: 'error', message: 'Missing canonical URL' });
  }

  // Robots — flag noindex on key pages
  if (CONFIG.CHECK_ROBOTS && meta.robots && /noindex/i.test(meta.robots)) {
    const pathname = new URL(meta.url).pathname;
    if (pathname === '/' || pathname.startsWith('/blog') || pathname.startsWith('/services') || pathname.startsWith('/ai-lab')) {
      issues.push({ field: 'robots', severity: 'warn', message: `noindex on important page (${pathname}) — verify intentional` });
    }
  }

  // Open Graph (informational — ties to #53)
  if (!meta.ogTitle) issues.push({ field: 'og:title', severity: 'info', message: 'Missing og:title (OG image generator #53 may rely on it)' });
  if (!meta.ogDescription) issues.push({ field: 'og:description', severity: 'info', message: 'Missing og:description' });
  if (!meta.ogImage) issues.push({ field: 'og:image', severity: 'info', message: 'Missing og:image — Open Graph image missing (#53)' });

  return issues;
}

function loadBaseline() {
  if (fs.existsSync(BASELINE_PATH)) {
    try { return JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf8')); } catch (_) {}
  }
  return {};
}

function saveBaseline(baseline) {
  ensureDir(STATE_DIR);
  fs.writeFileSync(BASELINE_PATH, JSON.stringify(baseline, null, 2));
}

function loadIssues() {
  if (fs.existsSync(ISSUES_PATH)) {
    try { return JSON.parse(fs.readFileSync(ISSUES_PATH, 'utf8')); } catch (_) {}
  }
  return { open: [], closed: [] };
}

function saveIssues(issues) {
  ensureDir(STATE_DIR);
  fs.writeFileSync(ISSUES_PATH, JSON.stringify(issues, null, 2));
}

function issueKey(url, field, message) {
  return `${url}|${field}|${message.substring(0, 80)}`;
}

function trackIssue(url, field, message, severity, issues) {
  const key = issueKey(url, field, message);
  if (issues.open.find(i => i.key === key)) return null;

  const issue = { key, url, field, message, severity, created: nowISO(), state: 'open' };
  issues.open.push(issue);
  return issue;
}

async function openGitHubIssue(issue) {
  const payload = JSON.stringify({
    title: `[Meta Tags] Quality issue on ${new URL(issue.url).pathname}`,
    body: `**Page:** ${issue.url}\n**Field:** ${issue.field}\n**Issue:** ${issue.message}\n**Severity:** ${issue.severity}\n\nAutomated meta tags quality scanner detected this issue. Please fix to improve SEO.\n\n[Link to file](https://github.com/${process.env.GITHUB_REPOSITORY || 'Zion-support/zion.app'}/blob/main/${new URL(issue.url).pathname})`,
    labels: ['automation', 'seo', 'meta-tags']
  });

  return new Promise((resolve, reject) => {
    const https = require('https');
    const req = https.request({
      hostname: 'api.github.com',
      path: `/repos/${process.env.GITHUB_REPOSITORY || 'Zion-support/zion.app'}/issues`,
      method: 'POST',
      headers: {
        'Authorization': `token ${process.env.GITHUB_TOKEN || process.env.GH_TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 201) {
          try { resolve(JSON.parse(data).number); } catch (_) { resolve(null); }
        } else {
          reject(new Error(`GitHub API ${res.statusCode}: ${data}`));
        }
      });
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

async function main() {
  console.log('🏷️  Autonomous Meta Tags Quality Scanner — starting\n');
  ensureDir(STATE_DIR);

  const baseline = loadBaseline();
  const issues = loadIssues();

  // Step 1: Get sitemap
  console.log('📥 Fetching sitemap...');
  const sitemapXml = await fetchSitemap();
  const allUrls = parseSitemap(sitemapXml);
  console.log(`   Found ${allUrls.length} URLs`);

  // Step 2: Fetch all pages and collect meta
  const pages = [];
  const allTitles = [];
  const allDescriptions = [];

  for (const url of allUrls) {
    try {
      const { html } = await fetchPage(url);
      const meta = extractMeta(html, url);
      pages.push(meta);
      if (meta.title) allTitles.push(meta.title);
      if (meta.description) allDescriptions.push(meta.description);
      console.log(`   ✅ ${url} — title: ${meta.title ? meta.title.substring(0,30)+'...' : 'MISSING'}`);
    } catch (e) {
      console.log(`   ⚠️  Failed: ${url} — ${e.message}`);
    }
  }

  // Step 3: Validate each page
  let newIssuesCount = 0;
  let totalIssues = 0;
  let errorCount = 0;
  let warnCount = 0;
  let infoCount = 0;

  for (const meta of pages) {
    const pageIssues = validateMeta(meta, allTitles, allDescriptions);
    totalIssues += pageIssues.length;
    for (const iss of pageIssues) {
      if (iss.severity === 'error') errorCount++;
      else if (iss.severity === 'warn') warnCount++;
      else infoCount++;

      const tracked = trackIssue(meta.url, iss.field, iss.message, iss.severity, issues);
      if (tracked) newIssuesCount++;
    }
  }

  console.log(`\n📊 Validation complete:`);
  console.log(`   Total pages: ${pages.length}`);
  console.log(`   Total issues: ${totalIssues} (${errorCount} errors, ${warnCount} warnings, ${infoCount} info)`);
  console.log(`   New issues: ${newIssuesCount}`);

  // Step 4: Open GitHub issues
  if (process.env.GITHUB_TOKEN && CONFIG.OPEN_ISSUES && newIssuesCount > 0) {
    console.log(`\n🐙 Opening ${newIssuesCount} GitHub issue(s)...`);
    const newOpenIssues = issues.open.filter(i => !i.ghIssueNumber && i.created >= (baseline.lastRun || '2000-01-01'));
    for (const issue of newOpenIssues) {
      try {
        const num = await openGitHubIssue(issue);
        issue.ghIssueNumber = num;
        console.log(`   ✅ Opened #${num} for ${new URL(issue.url).pathname}`);
      } catch (e) {
        console.log(`   ❌ Failed: ${e.message}`);
      }
    }
  }

  // Step 5: Save state
  baseline.lastRun = nowISO();
  baseline.totalPages = pages.length;
  baseline.issuesCount = totalIssues;
  saveBaseline(baseline);
  saveIssues(issues);

  // Step 6: Telegram summary
  try {
    const notifierPath = path.join(process.cwd(), 'automation', 'notify-telegram.js');
    if (fs.existsSync(notifierPath)) {
      const summary = `🏷️ Meta tags scan: ${pages.length} pages, ${totalIssues} issues (${errorCount} errors, ${warnCount} warnings). Quality score: ${((pages.length - errorCount) / pages.length * 100).toFixed(0)}%.`;
      execSync(`node "${notifierPath}" "${summary}"`, { stdio: 'ignore' });
    }
  } catch (_) {}

  console.log('\n✅ Meta tags quality scan complete.\n');
  process.exit(0);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
