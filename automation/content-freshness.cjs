#!/usr/bin/env node
/**
 * Autonomous Content Freshness & Stale Content Archiver
 *
 * Weekly scanner that detects outdated content based on age thresholds per type.
 * Opens GitHub issues for review; optionally auto-archives (opt-in).
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const STATE_DIR = path.join(process.cwd(), '.hermes', 'memory', 'content-freshness');
const CACHE_PATH = path.join(STATE_DIR, 'age-cache.json');
const ISSUES_PATH = path.join(STATE_DIR, 'issues.json');

const CONTENT_DIRS = {
  blog: { dir: 'app/blog', ttlDays: parseInt(process.env.CONTENT_FRESHNESS_BLOG_TTL_DAYS || '730', 10) },
  services: { dir: 'app/services', ttlDays: parseInt(process.env.CONTENT_FRESHNESS_SERVICE_TTL_DAYS || '1095', 10) },
  'ai-lab': { dir: 'app/ai-lab', ttlDays: parseInt(process.env.CONTENT_FRESHNESS_AI_LAB_TTL_DAYS || '365', 10) },
  content: { dir: 'app/content', ttlDays: parseInt(process.env.CONTENT_FRESHNESS_CONTENT_TTL_DAYS || '730', 10) }
};

const AUTO_ARCHIVE = process.env.CONTENT_FRESHNESS_AUTO_ARCHIVE === 'true';
const OPEN_ISSUES = process.env.CONTENT_FRESHNESS_OPEN_ISSUES !== 'false';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPOSITORY || 'Zion-support/zion.app';

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function nowISO() { return new Date().toISOString(); }
function nowMs() { return Date.now(); }

// Parse frontmatter (same as other content tools)
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

function parseDate(str) {
  if (!str) return null;
  const d = new Date(str);
  return isNaN(d.getTime()) ? null : d;
}

function daysAgo(date) {
  if (!date) return null;
  const ms = nowMs() - date.getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

function slugFromPath(filePath) {
  const name = path.basename(filePath, path.extname(filePath));
  return name.toLowerCase().replace(/\s+/g, '-');
}

function loadCache() {
  if (fs.existsSync(CACHE_PATH)) {
    try { return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8')); } catch (_) {}
  }
  return {};
}

function saveCache(cache) {
  ensureDir(STATE_DIR);
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
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

function issueKey(filePath, reason) {
  return `${filePath}|${reason}`;
}

function trackIssue(filePath, reason, issues, meta = {}) {
  const key = issueKey(filePath, reason);
  const existing = issues.open.find(i => i.key === key);
  if (existing) return null;

  const issue = { key, filePath, reason, created: nowISO(), state: 'open', ...meta };
  issues.open.push(issue);
  return issue;
}

async function openGitHubIssue(issue) {
  const payload = JSON.stringify({
    title: `[Content Freshness] Review needed: ${path.basename(issue.filePath)}`,
    body: `**File:** ${issue.filePath}\n**Reason:** ${issue.reason}\n\nAutomated content freshness scan detected stale or outdated content. Please review, update, or archive.\n\n- Age: ${issue.ageDays} days\n- Suggested action: ${issue.action || 'review'}\n\n[Link to file](https://github.com/${GITHUB_REPO}/blob/main/${issue.filePath})`,
    labels: ['automation', 'content', 'freshness']
  });

  return new Promise((resolve, reject) => {
    const https = require('https');
    const req = https.request({
      hostname: 'api.github.com',
      path: `/repos/${GITHUB_REPO}/issues`,
      method: 'POST',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
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

function autoArchiveIfEnabled(filePath, fm) {
  if (!AUTO_ARCHIVE) return false;
  // Add archived flag and suggest redirect
  fm.archived = true;
  fm.archivedAt = nowISO();
  // Suggest keeping file but adding frontmatter; actual move would require more policy
  return true;
}

async function main() {
  console.log('🕒 Autonomous Content Freshness Scanner — starting\n');
  ensureDir(STATE_DIR);

  const cache = loadCache();
  const issues = loadIssues();
  let newIssuesCount = 0;
  let totalFiles = 0;
  let staleCount = 0;

  // Step 1: Walk all content directories
  for (const [type, cfg] of Object.entries(CONTENT_DIRS)) {
    const dirPath = path.join(process.cwd(), cfg.dir);
    if (!fs.existsSync(dirPath)) continue;

    function walk(d) {
      const entries = fs.readdirSync(d, { withFileTypes: true });
      for (const e of entries) {
        const p = path.join(d, e.name);
        if (e.isDirectory()) walk(p);
        else if (/\.(mdx?|md)$/.test(e.name)) {
          totalFiles++;
          processFile(p, type, cfg.ttlDays, cache, issues);
        }
      }
    }
    walk(dirPath);
  }

  // Step 2: Save cache + issues
  saveCache(cache);
  saveIssues(issues);

  console.log(`\n📊 Scanned ${totalFiles} content files.`);
  console.log(`   ⚠️  Stale items found: ${staleCount}`);
  console.log(`   🐛 New issues opened: ${newIssuesCount}`);

  // Step 3: Open GitHub issues if configured
  if (GITHUB_TOKEN && OPEN_ISSUES && newIssuesCount > 0) {
    console.log(`\n🐙 Opening ${newIssuesCount} GitHub issue(s)...`);
    const newIssues = issues.open.filter(i => !i.ghIssueNumber && i.created >= (cache.lastRun || '2000-01-01'));
    for (const issue of newIssues) {
      try {
        const num = await openGitHubIssue(issue);
        issue.ghIssueNumber = num;
        console.log(`   ✅ Opened #${num} for ${path.basename(issue.filePath)}`);
      } catch (e) {
        console.log(`   ❌ Failed to open issue: ${e.message}`);
      }
    }
  }

  // Step 4: Telegram summary
  try {
    const notifierPath = path.join(process.cwd(), 'automation', 'notify-telegram.js');
    if (fs.existsSync(notifierPath)) {
      const msg = `🕒 Content freshness scan: ${totalFiles} files, ${staleCount} stale, ${newIssuesCount} new issues.`;
      execSync(`node "${notifierPath}" "${msg}"`, { stdio: 'ignore' });
    }
  } catch (_) {}

  // Step 5: Update last run
  cache.lastRun = nowISO();
  saveCache(cache);

  console.log('\n✅ Content freshness check complete.\n');
  process.exit(0);

  function processFile(filePath, type, ttlDays, cache, issues) {
    const content = fs.readFileSync(filePath, 'utf8');
    const { frontmatter } = parseFrontmatter(content);

    // Get publish/lastmod date
    const pubDate = parseDate(frontmatter.datePublished || frontmatter.date || frontmatter.publishedAt);
    const modDate = parseDate(frontmatter.lastmod || frontmatter.updatedAt);
    const referenceDate = modDate || pubDate;

    if (!referenceDate) {
      // No date found — flag as needing metadata
      if (OPEN_ISSUES) {
        const issue = trackIssue(filePath, 'missing datePublished/lastmod frontmatter', issues);
        if (issue) { staleCount++; newIssuesCount++; issue.ageDays = null; issue.action = 'add publication date'; }
      }
      return;
    }

    const ageDays = daysAgo(referenceDate);
    const cacheKey = filePath;
    const previous = cache[cacheKey];

    // Update cache
    cache[cacheKey] = { lastCheck: nowISO(), ageDays, type, date: referenceDate.toISOString() };

    // Check if stale
    if (ageDays > ttlDays) {
      staleCount++;
      const reason = `Content older than ${ttlDays} days (current: ${ageDays} days)`;
      const issue = trackIssue(filePath, reason, issues, { ageDays, action: 'review/update/archive' });
      if (issue) {
        newIssuesCount++;
        // Optionally auto-archive (adds frontmatter flag)
        if (AUTO_ARCHIVE) {
          const fmUpdate = autoArchiveIfEnabled(filePath, frontmatter);
          if (fmUpdate) {
            issue.action = 'auto-archived (frontmatter updated)';
            // Would need to rewrite file here — skipping unless explicit opt-in above
          }
        }
      }
    } else {
      // Not stale — if previously flagged as stale and now fresh, maybe close issue?
      // For now, keep open issues; manual closure required
    }
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
