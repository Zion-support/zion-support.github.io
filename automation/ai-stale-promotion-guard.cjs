#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');
const WATCHDOG_REPORT_PATH = path.join(REPORTS_DIR, 'deploy-watchdog-latest.json');
const HISTORY_PATH = path.join(REPORTS_DIR, 'promotion-health-history.json');
const REPORT_PATH = path.join(REPORTS_DIR, 'stale-promotion-guard-latest.json');

const PAGE_PATH = path.join(ROOT, 'app', 'page.tsx');
const AI_CATALOG_PATH = path.join(ROOT, 'app', 'config', 'aiCatalog.ts');

const FAILURE_THRESHOLD = Number(process.env.STALE_PROMOTION_FAILURE_THRESHOLD || 3);

function readJson(filePath, fallback) {
  if (!fs.existsSync(filePath)) return fallback;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return fallback;
  }
}

function extractPromotedRoutes(homepageSource, catalogSource) {
  const routes = new Set();
  const hrefRegex = /href="(\/[^"#?]+)"/g;
  let hrefMatch = hrefRegex.exec(homepageSource);
  while (hrefMatch) {
    const route = hrefMatch[1].trim();
    if (!route.startsWith('/api/') && !route.startsWith('/_')) routes.add(route);
    hrefMatch = hrefRegex.exec(homepageSource);
  }

  const catalogRegex = /href:\s*'([^']+)'/g;
  let catalogMatch = catalogRegex.exec(catalogSource);
  while (catalogMatch) {
    const route = catalogMatch[1].trim();
    if (route.startsWith('/')) routes.add(route.split('#')[0].split('?')[0]);
    catalogMatch = catalogRegex.exec(catalogSource);
  }

  return Array.from(routes);
}

function normalizeWatchdogResults(watchdog) {
  const map = new Map();
  for (const item of watchdog.results || []) {
    map.set(item.route, Boolean(item.healthy));
  }
  return map;
}

function updateHistory(prevHistory, promotedRoutes, routeHealth, nowIso) {
  const next = { ...prevHistory };
  const promoted = new Set(promotedRoutes);

  for (const route of promoted) {
    const healthy = routeHealth.has(route) ? routeHealth.get(route) : true;
    const prev = next[route] || {
      firstSeen: nowIso,
      lastSeen: nowIso,
      consecutiveFailures: 0,
      consecutiveSuccesses: 0,
      totalFailures: 0,
      totalSuccesses: 0,
      totalChecks: 0,
      lastHealthy: true,
    };

    prev.lastSeen = nowIso;
    prev.totalChecks += 1;
    if (healthy) {
      prev.consecutiveFailures = 0;
      prev.consecutiveSuccesses += 1;
      prev.totalSuccesses += 1;
      prev.lastHealthy = true;
    } else {
      prev.consecutiveFailures += 1;
      prev.consecutiveSuccesses = 0;
      prev.totalFailures += 1;
      prev.lastHealthy = false;
    }
    next[route] = prev;
  }

  return next;
}

function main() {
  if (!fs.existsSync(WATCHDOG_REPORT_PATH)) {
    console.log('No deploy watchdog report found; stale promotion guard skipped.');
    process.exit(0);
  }
  if (!fs.existsSync(PAGE_PATH) || !fs.existsSync(AI_CATALOG_PATH)) {
    console.log('Required promotion source files missing; stale promotion guard skipped.');
    process.exit(0);
  }

  const nowIso = new Date().toISOString();
  const watchdog = readJson(WATCHDOG_REPORT_PATH, {});
  const prevHistory = readJson(HISTORY_PATH, {});
  const homepageSource = fs.readFileSync(PAGE_PATH, 'utf8');
  const catalogSource = fs.readFileSync(AI_CATALOG_PATH, 'utf8');

  const promotedRoutes = extractPromotedRoutes(homepageSource, catalogSource);
  const routeHealth = normalizeWatchdogResults(watchdog);
  const nextHistory = updateHistory(prevHistory, promotedRoutes, routeHealth, nowIso);

  const staleCandidates = promotedRoutes
    .map((route) => ({
      route,
      ...nextHistory[route],
    }))
    .filter((item) => item.consecutiveFailures >= FAILURE_THRESHOLD)
    .sort((a, b) => b.consecutiveFailures - a.consecutiveFailures);

  const report = {
    timestamp: nowIso,
    failureThreshold: FAILURE_THRESHOLD,
    promotedCount: promotedRoutes.length,
    checkedByWatchdog: routeHealth.size,
    staleCandidates,
  };

  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  fs.writeFileSync(HISTORY_PATH, JSON.stringify(nextHistory, null, 2));
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

  console.log(`Stale promotion report written to ${REPORT_PATH}`);
  console.log(`Candidates: ${staleCandidates.length}`);
}

main();
