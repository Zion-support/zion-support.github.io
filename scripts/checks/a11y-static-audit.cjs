#!/usr/bin/env node
/**
 * Accessibility audit for the committed static mirror (public/).
 *
 * The full Next.js build is intentionally not run here: the 125k-file tree
 * needs >16GB heap and OOMs (exit 134) on GitHub-hosted 15GB runners. The
 * audit instead loads the same static HTML that GitHub Pages serves and runs
 * axe-core through Playwright, so the check stays useful without the build.
 *
 * Env:
 *   A11Y_BASE_URL  Base URL of the static server (default http://localhost:3000)
 *   A11Y_PAGES     Comma-separated paths to audit (default key pages)
 */
const fs = require('fs');
const { chromium } = require('playwright');

const BASE_URL = process.env.A11Y_BASE_URL || 'http://localhost:3000';
const PAGES = (process.env.A11Y_PAGES || '/,/about/,/services/,/solutions/,/contact/,/blog/,/pricing/')
  .split(',')
  .map((p) => p.trim())
  .filter(Boolean);

async function main() {
  const mod = require('@axe-core/playwright');
  const AxeBuilder = mod.default || mod.AxeBuilder || mod;

  let browser;
  try {
    browser = await chromium.launch({ args: ['--no-sandbox'] });
  } catch (err) {
    console.warn('Bundled chromium unavailable, falling back to system Chrome:', err.message);
    browser = await chromium.launch({ channel: 'chrome', args: ['--no-sandbox'] });
  }
  try {
    const context = await browser.newContext();
    const page = await context.newPage();

    let total = 0;
    const rows = [];
    const details = [];

    for (const path of PAGES) {
      await page.goto(BASE_URL + path, { waitUntil: 'domcontentloaded', timeout: 60000 });
      const results = await new AxeBuilder({ page }).analyze();
      total += results.violations.length;
      rows.push(`| \`${path}\` | ${results.violations.length} |`);
      for (const violation of results.violations) {
        details.push({
          page: path,
          id: violation.id,
          impact: violation.impact || 'unknown',
          nodes: violation.nodes.length,
          help: violation.help,
        });
      }
      console.log(`Audited ${BASE_URL}${path}: ${results.violations.length} violation(s)`);
    }

    fs.mkdirSync('a11y-results', { recursive: true });
    fs.writeFileSync(
      'a11y-results/axe-report.json',
      JSON.stringify({ baseUrl: BASE_URL, total, pages: PAGES.length, violations: details }, null, 2),
    );

    if (process.env.GITHUB_OUTPUT) {
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `total=${total}\n`);
    }

    if (process.env.GITHUB_STEP_SUMMARY) {
      const summary = [
        '## Accessibility Audit Results',
        '',
        '| Page | Violations |',
        '|------|------------|',
        ...rows,
        '',
        total === 0
          ? 'All audited pages passed accessibility checks.'
          : `**${total} total violation(s)** found across audited pages.`,
        '',
      ].join('\n');
      fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
    }

    console.log(`Total: ${total} violation(s) across ${PAGES.length} page(s)`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('a11y-static-audit failed:', err);
  process.exit(1);
});
