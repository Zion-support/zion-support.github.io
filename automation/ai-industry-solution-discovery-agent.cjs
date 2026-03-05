#!/usr/bin/env node

/**
 * AI Industry Solution Discovery Agent
 *
 * Scans app/industries/page.tsx for industries linking to generic /solutions.
 * Reports candidates for dedicated solution pages to improve navigation and SEO.
 *
 * Usage:
 *   node automation/ai-industry-solution-discovery-agent.cjs run
 *   node automation/ai-industry-solution-discovery-agent.cjs report
 *
 * Output: automation/reports/industry-solution-discovery-latest.json
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const INDUSTRIES_PAGE = path.join(ROOT, 'app', 'industries', 'page.tsx');
const SOLUTIONS_DIR = path.join(ROOT, 'app', 'solutions');
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');

function log(msg) {
  const ts = new Date().toISOString();
  console.log(`[IndustryDiscovery] ${ts} | ${msg}`);
}

function ensureDirs() {
  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

function discoverSolutionPages() {
  const pages = new Set();
  if (!fs.existsSync(SOLUTIONS_DIR)) return pages;
  const entries = fs.readdirSync(SOLUTIONS_DIR, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const pagePath = path.join(SOLUTIONS_DIR, entry.name, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        pages.add(`/solutions/${entry.name}`);
      }
    }
  }
  return pages;
}

function extractIndustriesFromPage() {
  const content = fs.readFileSync(INDUSTRIES_PAGE, 'utf8');
  const industries = [];
  const blockRe = /\{\s*industry:\s*['"]([^'"]+)['"],[\s\S]*?href:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = blockRe.exec(content)) !== null) {
    industries.push({ industry: m[1], href: m[2] });
  }
  return industries;
}

function slugFromIndustry(industry) {
  return industry
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function run() {
  ensureDirs();
  log('Scanning industries page...');

  const existingSolutions = discoverSolutionPages();
  const industries = extractIndustriesFromPage();

  const genericLinkers = industries.filter((i) => i.href === '/solutions');
  const withDedicatedPage = industries.filter((i) =>
    existingSolutions.has(i.href)
  );
  const candidates = genericLinkers.map((i) => ({
    industry: i.industry,
    suggestedSlug: slugFromIndustry(i.industry),
    suggestedPath: `/solutions/${slugFromIndustry(i.industry)}`,
  }));

  const report = {
    timestamp: new Date().toISOString(),
    industriesWithDedicatedPage: withDedicatedPage.length,
    industriesLinkingToGeneric: genericLinkers.length,
    candidatesForNewPages: candidates,
    existingSolutionPaths: Array.from(existingSolutions),
  };

  const outPath = path.join(REPORTS_DIR, 'industry-solution-discovery-latest.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  log(`Report saved to ${outPath}`);

  if (candidates.length > 0) {
    log(`Found ${candidates.length} industries linking to /solutions (candidates for dedicated pages):`);
    candidates.forEach((c) => log(`   - ${c.industry} → ${c.suggestedPath}`));
  } else {
    log('All industries have dedicated solution pages or specific product links.');
  }

  return report;
}

const cmd = process.argv[2] || 'run';
if (cmd === 'run' || cmd === 'report') {
  run();
} else {
  console.log('Usage: node ai-industry-solution-discovery-agent.cjs [run|report]');
  process.exit(1);
}
