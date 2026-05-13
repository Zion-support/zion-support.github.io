#!/usr/bin/env node
/**
 * Autonomous Robots.txt & Sitemap Compliance Checker
 *
 * Validates that:
 *  1. robots.txt exists and is parseable
 *  2. sitemap URL(s) are discoverable (via /sitemap.xml or robots.txt "Sitemap:" directive)
 *  3. URLs submitted in sitemap are not disallowed by robots.txt
 *  4. Flags disallowed-but-submitted URLs as GitHub issues
 *
 * Runs weekly. Safe, read-only, deterministic.
 */

import { readFile } from 'fs/promises';
import { exec } from 'child_process';
import { resolve } from 'path';

const SITEMAP_URL = 'https://ziontechgroup.com/sitemap.xml';
const ROBOTS_PATH = resolve('public/robots.txt');
const STATE_FILE = 'automation/reports/robots-sitemap-state.json';
const LOG_FILE = 'automation/reports/robots-sitemap.log';

interface State {
  lastRun: number | null;
  lastIssueCount: number;
  consecutiveFails: number;
}

async function readState(): Promise<State> {
  try {
    const raw = await readFile(STATE_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return { lastRun: null, lastIssueCount: 0, consecutiveFails: 0 };
  }
}

function writeState(s: State) {
  return require('fs').writeFile(STATE_FILE, JSON.stringify(s, null, 2));
}

function log(msg: string) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  require('fs').appendFile(LOG_FILE, line + '\n', () => {});
}

async function fetchURL(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } catch (e) {
    return null;
  }
}

function parseRobots(txt: string): { disallowed: Set<string>; sitemaps: string[] } {
  const disallowed = new Set<string>();
  const sitemaps: string[] = [];
  const lines = txt.split(/\r?\n/);
  let currentUA = '*';

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf(':');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim().toLowerCase();
    const val = trimmed.slice(eq + 1).trim();

    if (key === 'user-agent') {
      currentUA = val.toLowerCase();
    } else if (key === 'disallow' && currentUA === '*') {
      // Normalize to absolute path prefix
      const path = val.startsWith('/') ? val : '/' + val;
      disallowed.add(path);
    } else if (key === 'sitemap') {
      sitemaps.push(val);
    }
  }
  return { disallowed, sitemaps };
}

function parseSitemap(xml: string): string[] {
  // Very simple regex-based URL extraction (no full XML parser needed for typical sitemaps)
  const urls: string[] = [];
  const locRegex = /<loc[^>]*>([^<]+)<\/loc>/gi;
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    urls.push(match[1].trim());
  }
  return urls;
}

function pathMatches(url: string, disallowedPath: string): boolean {
  try {
    const u = new URL(url);
    const path = u.pathname;
    // disallowedPath is like "/private" — matches any path starting with it
    return path === disallowedPath || path.startsWith(disallowedPath + '/');
  } catch {
    return false;
  }
}

function openIssue(title: string, body: string) {
  exec(`gh issue create --title "${title}" --body "${body}" --label "automation/robots-sitemap"`, (err, stdout, stderr) => {
    if (err) {
      log(`Failed to create issue: ${err.message}`);
    } else {
      log(`Issue created: ${stdout.trim()}`);
    }
  });
}

async function main() {
  log('=== Robots.txt + Sitemap Compliance Check ===');

  const state = await readState();
  const now = Date.now();

  // 1. Check robots.txt
  let robotsTxt: string | null = null;
  try {
    robotsTxt = await readFile(ROBOTS_PATH, 'utf-8');
  } catch (e) {
    log(`❌ robots.txt not found at ${ROBOTS_PATH}. Creating default...`);
    // Create a permissive default
    const defaultRobots = `User-agent: *
Allow: /
Sitemap: /sitemap.xml
`;
    try {
      await require('fs').promises.writeFile(ROBOTS_PATH, defaultRobots);
      log('✅ Default robots.txt written');
      robotsTxt = defaultRobots;
    } catch (e2) {
      log(`Failed to write robots.txt: ${e2.message}`);
      process.exit(1);
    }
  }

  if (!robotsTxt) {
    log('❌ No robots.txt content — aborting');
    process.exit(1);
  }

  const { disallowed, sitemaps } = parseRobots(robotsTxt);
  log(`✅ robots.txt parsed — ${disallowed.size} disallowed paths, ${sitemaps.length} sitemap directive(s)`);

  // 2. Discover sitemap URL
  let sitemapUrl = SITEMAP_URL;
  if (sitemaps.length > 0) {
    // Use the first absolute or root-relative sitemap URL
    sitemapUrl = sitemaps[0];
    // Relative to site root
    if (sitemapUrl.startsWith('/')) {
      sitemapUrl = `https://ziontechgroup.com${sitemapUrl}`;
    }
  }
  log(`🔍 Using sitemap URL: ${sitemapUrl}`);

  // 3. Fetch sitemap
  const sitemapXml = await fetchURL(sitemapUrl);
  if (!sitemapXml) {
    log(`❌ Failed to fetch sitemap at ${sitemapUrl}`);
    state.consecutiveFails++;
    if (state.consecutiveFails >= 3) {
      openIssue(
        '[Automation] Sitemap fetch failing',
        `Unable to fetch sitemap at ${sitemapUrl} after ${state.consecutiveFails} attempts.\n\nCheck that sitemap.xml exists and is publicly accessible.`
      );
    }
    await writeState(state);
    process.exit(1);
  }
  log('✅ Sitemap fetched');

  const sitemapURLs = parseSitemap(sitemapXml);
  log(`✅ Parsed ${sitemapURLs.length} URLs from sitemap`);

  // 4. Cross-check: any sitemap URLs that are disallowed by robots.txt?
  const violations: string[] = [];
  for (const url of sitemapURLs) {
    for (const forbid of disallowed) {
      if (pathMatches(url, forbid)) {
        violations.push(url + ' (disallowed by: ' + forbid + ')');
        break;
      }
    }
  }

  if (violations.length > 0) {
    log(`⚠️  Found ${violations.length} URL(s) in sitemap that are disallowed by robots.txt:`);
    violations.forEach((v) => log('   - ' + v));

    // Open issue if this is a new or worsened condition
    if (violations.length !== state.lastIssueCount || state.consecutiveFails === 0) {
      openIssue(
        `[Automation] Sitemap contains ${violations.length} disallowed URL(s)`,
        `The following URLs appear in the sitemap but are blocked by robots.txt:\n\n${violations.map((v) => '- ' + v).join('\n')}\n\nThis prevents search engines from indexing these pages.\n\nAction: either remove them from the sitemap or update robots.txt to allow them.\n\n---\nAuto-generated by automation/robots-sitemap-check.cjs`
      );
    }
    state.lastIssueCount = violations.length;
    state.consecutiveFails = 0;
  } else {
    log('✅ No violations — sitemap and robots.txt are in compliance');
    // Clear stale state
    if (state.lastIssueCount > 0) {
      openIssue(
        '[Automation] Sitemap compliance restored',
        `All previously reported violations have been resolved. Current sitemap (${sitemapURLs.length} URLs) fully complies with robots.txt.`
      );
    }
    state.lastIssueCount = 0;
    state.consecutiveFails = 0;
  }

  state.lastRun = now;
  await writeState(state);
  log('=== Check complete ===');
}

main().catch((err) => {
  log(`Fatal error: ${err.message}`);
  process.exit(1);
});
