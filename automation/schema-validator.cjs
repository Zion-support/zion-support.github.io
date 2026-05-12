#!/usr/bin/env node
/**
 * Autonomous Structured Data (Schema.org) Validator
 *
 * Weekly crawl of all pages; extracts and validates JSON-LD / Microdata.
 * Validates required fields per type (Article, Product, Service, FAQ, etc.).
 * Opens GitHub issues on missing/invalid schema; sends Telegram digest.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { gzip } = require('zlib');
const Ajv = require('ajv');

const STATE_DIR = path.join(process.cwd(), '.hermes', 'memory', 'schema-validator');
const HISTORY_PATH = path.join(STATE_DIR, 'history.json');
const ISSUES_PATH = path.join(STATE_DIR, 'issues.json');

const SITEMAP_URL = 'http://localhost:3000/sitemap.xml';
const SITE_URL = 'http://localhost:3000';
const USER_AGENT = 'Mozilla/5.0 (compatible; SchemaValidator/1.0; +https://ziontechgroup.com)';

// Schema definitions (simplified JSON Schema for common types)
const SCHEMAS = {
  Article: {
    type: 'object',
    required: ['@type', 'headline', 'image', 'author', 'datePublished', 'publisher'],
    properties: {
      '@type': { const: 'Article' },
      headline: { type: 'string' },
      image: { type: 'string' },
      author: {
        oneOf: [
          { type: 'string' },
          { type: 'object', required: ['@type', 'name'], properties: { '@type': { const: 'Person' }, name: { type: 'string' } } }
        ]
      },
      datePublished: { type: 'string', format: 'date-time' },
      publisher: {
        oneOf: [
          { type: 'string' },
          { type: 'object', required: ['@type', 'name'], properties: { '@type': { const: 'Organization' }, name: { type: 'string' } } }
        ]
      },
      description: { type: 'string' }
    }
  },
  Product: {
    type: 'object',
    required: ['@type', 'name', 'image', 'description', 'offers'],
    properties: {
      '@type': { const: 'Product' },
      name: { type: 'string' },
      image: { type: 'string' },
      description: { type: 'string' },
      offers: {
        type: 'object',
        required: ['@type', 'price', 'priceCurrency'],
        properties: { '@type': { const: 'Offer' }, price: { type: 'string' }, priceCurrency: { type: 'string' } }
      },
      sku: { type: 'string' }
    }
  },
  Service: {
    type: 'object',
    required: ['@type', 'name', 'description', 'provider', 'serviceType'],
    properties: {
      '@type': { const: 'Service' },
      name: { type: 'string' },
      description: { type: 'string' },
      provider: {
        oneOf: [
          { type: 'string' },
          { type: 'object', required: ['@type', 'name'], properties: { '@type': { const: 'Organization' }, name: { type: 'string' } } }
        ]
      },
      serviceType: { type: 'string' }
    }
  },
  FAQPage: {
    type: 'object',
    required: ['@type', 'mainEntity'],
    properties: {
      '@type': { const: 'FAQPage' },
      mainEntity: {
        type: 'array',
        items: {
          type: 'object',
          required: ['@type', 'name', 'acceptedAnswer'],
          properties: {
            '@type': { const: 'Question' },
            name: { type: 'string' },
            acceptedAnswer: {
              type: 'object',
              required: ['@type', 'text'],
              properties: { '@type': { const: 'Answer' }, text: { type: 'string' } }
            }
          }
        }
      }
    }
  },
  BreadcrumbList: {
    type: 'object',
    required: ['@type', 'itemListElement'],
    properties: {
      '@type': { const: 'BreadcrumbList' },
      itemListElement: {
        type: 'array',
        items: {
          type: 'object',
          required: ['@type', 'position', 'name', 'item'],
          properties: {
            '@type': { const: 'ListItem' },
            position: { type: 'integer' },
            name: { type: 'string' },
            item: { type: 'string', format: 'uri' }
          }
        }
      }
    }
  },
  WebSite: {
    type: 'object',
    required: ['@type', 'name', 'url'],
    properties: {
      '@type': { const: 'WebSite' },
      name: { type: 'string' },
      url: { type: 'string', format: 'uri' },
      description: { type: 'string' }
    }
  }
};

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function nowISO() { return new Date().toISOString(); }

// Fetch sitemap and extract URLs
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

// Fetch page HTML
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

// Extract JSON-LD blocks from HTML
function extractJsonLd(html) {
  const blocks = [];
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1]);
      blocks.push(parsed);
    } catch (e) {
      blocks.push({ raw: match[1], parseError: e.message });
    }
  }
  return blocks;
}

// Basic Microdata extraction (data-* attributes not fully supported, but checks common patterns)
function extractMicrodata(html) {
  // Very basic: look for itemtype/itemscope attributes (rare in Next.js apps)
  const hasMicrodata = /itemtype=["']http:\/\/schema\.org\//i.test(html);
  return hasMicrodata ? ['microdata-detected-but-not-validated'] : [];
}

// Validate a single schema object against its type definition
function validateSchema(obj, ajv) {
  const type = Array.isArray(obj) ? (obj[0] && obj[0]['@type']) : obj['@type'];
  if (!type || !SCHEMAS[type]) return { valid: true, skip: true }; // unknown type, skip

  const schema = SCHEMAS[type];
  const valid = ajv.validate(schema, obj);
  return { valid, errors: valid ? null : ajv.errors };
}

function loadHistory() {
  if (fs.existsSync(HISTORY_PATH)) {
    try { return JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf8')); } catch (_) {}
  }
  return { pages: {}, lastRun: null, totals: { valid: 0, invalid: 0, total: 0 } };
}

function saveHistory(hist) {
  ensureDir(STATE_DIR);
  fs.writeFileSync(HISTORY_PATH, JSON.stringify(hist, null, 2));
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

// Derive issue key for deduplication
function issueKey(pageUrl, type, errorMsg) {
  return `${pageUrl}|${type}|${errorMsg.substring(0, 100)}`;
}

// Check if we need to open GitHub issue
function trackIssue(pageUrl, type, errors, issues, ghToken, repo) {
  const errorMsgs = errors.map(e => `${e.instancePath || ''} ${e.message}`).join('; ');
  const key = issueKey(pageUrl, type, errorMsgs);

  // Already open?
  const existing = issues.open.find(i => i.key === key);
  if (existing) return null;

  const issue = {
    key,
    pageUrl,
    type,
    errors: errorMsgs,
    created: nowISO(),
    state: 'open',
    ghIssueNumber: null
  };
  issues.open.push(issue);
  return issue;
}

// Open GitHub issue
async function openGitHubIssue(issue, ghToken, repo) {
  const payload = JSON.stringify({
    title: `[Schema] Invalid structured data on ${new URL(issue.pageUrl).pathname}`,
    body: `**Page:** ${issue.pageUrl}\n**Type:** ${issue.type}\n**Errors:** ${issue.errors}\n\nDetected by autonomous schema validator.`,
    labels: ['automation', 'schema', 'seo']
  });

  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.github.com',
      path: `/repos/${repo}/issues`,
      method: 'POST',
      headers: {
        'Authorization': `token ${ghToken}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 201) {
          try {
            const json = JSON.parse(data);
            resolve(json.number);
          } catch (e) { resolve(null); }
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
  console.log('🔍 Autonomous Structured Data Validator — starting\n');
  ensureDir(STATE_DIR);

  const ghToken = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  const repo = process.env.GITHUB_REPOSITORY || 'Zion-support/zion.app';

  const history = loadHistory();
  const issues = loadIssues();

  // Step 1: Get sitemap
  console.log('📥 Fetching sitemap...');
  const sitemapXml = await fetchSitemap();
  const allUrls = parseSitemap(sitemapXml);
  console.log(`   Found ${allUrls.length} URLs in sitemap`);

  const ajv = new Ajv({ allErrors: true, verbose: true });
  let pageResults = [];

  // Step 2: Fetch and validate each page
  for (const url of allUrls) {
    try {
      const { html } = await fetchPage(url);
      const jsonLdBlocks = extractJsonLd(html);
      const microdataPresent = extractMicrodata(html).length > 0;

      const pageSchemas = [];

      // Validate each JSON-LD block
      for (const block of jsonLdBlocks) {
        if (block.parseError) {
          pageSchemas.push({ type: 'Unknown', valid: false, errors: [{ message: `JSON parse error: ${block.parseError}` }] });
        } else if (Array.isArray(block)) {
          // array of objects
          block.forEach(item => {
            const result = validateSchema(item, ajv);
            pageSchemas.push({ type: item['@type'] || 'Unknown', valid: result.valid, errors: result.errors });
          });
        } else {
          const result = validateSchema(block, ajv);
          pageSchemas.push({ type: block['@type'] || 'Unknown', valid: result.valid, errors: result.errors });
        }
      }

      // If microdata present, log (not validated in depth, note as needing manual check)
      if (microdataPresent) {
        pageSchemas.push({ type: 'Microdata', valid: null, note: 'Microdata present — basic detection only' });
      }

      pageResults.push({ url, schemas: pageSchemas });
      console.log(`   ✅ ${url} — ${pageSchemas.length} schema block(s)`);
    } catch (e) {
      console.log(`   ⚠️  Failed to fetch ${url}: ${e.message}`);
    }
  }

  // Step 3: Compute health stats
  const totalSchemas = pageResults.reduce((sum, p) => sum + p.schemas.length, 0);
  const invalidSchemas = pageResults.flat().filter(s => s.valid === false).length;
  const healthScore = totalSchemas > 0 ? Math.round(((totalSchemas - invalidSchemas) / totalSchemas) * 100) : 100;

  console.log(`\n📊 Validation complete: ${totalSchemas} total, ${invalidSchemas} invalid, health ${healthScore}%`);

  // Step 4: Track issues (dedupe)
  let newIssuesCount = 0;
  for (const page of pageResults) {
    for (const schema of page.schemas) {
      if (schema.valid === false && schema.errors) {
        const issue = trackIssue(page.url, schema.type, schema.errors, issues, ghToken, repo);
        if (issue) newIssuesCount++;
      }
    }
  }

  // Step 5: Open GitHub issues if configured and new issues exist
  if (ghToken && newIssuesCount > 0) {
    console.log(`\n🐙 Opening ${newIssuesCount} GitHub issue(s)...`);
    for (const issue of issues.open.filter(i => !i.ghIssueNumber && i.created >= history.lastRun)) {
      try {
        const num = await openGitHubIssue(issue, ghToken, repo);
        issue.ghIssueNumber = num;
        console.log(`   ✅ Opened #${num} for ${issue.pageUrl}`);
      } catch (e) {
        console.log(`   ❌ Failed to open issue for ${issue.pageUrl}: ${e.message}`);
      }
    }
  }

  // Step 6: Save state
  history.lastRun = nowISO();
  history.pages = history.pages || {};
  pageResults.forEach(p => {
    history.pages[p.url] = { lastCheck: nowISO(), schemaCount: p.schemas.length };
  });
  history.totals = { total: pageResults.length, valid: totalSchemas - invalidSchemas, invalid: invalidSchemas, healthScore };
  saveHistory(history);
  saveIssues(issues);

  console.log(`\n📦 State saved to ${STATE_DIR}`);
  console.log(`📈 Health score: ${healthScore}% (${totalSchemas - invalidSchemas}/${totalSchemas} valid)`);

  // Telegram notification (via notify-telegram.js if available)
  try {
    const notifierPath = path.join(process.cwd(), 'automation', 'notify-telegram.js');
    if (fs.existsSync(notifierPath)) {
      const { execSync } = require('child_process');
      execSync(`node "${notifierPath}" "🔍 Schema validator: scanned ${pageResults.length} pages, ${totalSchemas} schemas, ${invalidSchemas} invalid, health ${healthScore}%."`, { stdio: 'ignore' });
    }
  } catch (_) {}

  console.log('✅ Schema validation complete.\n');
  process.exit(0);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
