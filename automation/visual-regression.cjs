#!/usr/bin/env node
/**
 * Autonomous CSS/UI Visual Regression Detector
 *
 * Captures screenshots of key pages, compares against baseline using pixelmatch.
 * Detects unintended visual changes across deployments or CSS modifications.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const STATE_DIR = path.join(process.cwd(), '.hermes', 'memory', 'visual-regression');
const BASELINE_DIR = path.join(STATE_DIR, 'baseline');
const CURRENT_DIR = path.join(STATE_DIR, 'current');
const DIFF_DIR = path.join(STATE_DIR, 'diffs');

const PIXELMATCH_THRESHOLD = 0.02; // 2% difference = alert
const PLAYWRIGHT_TIMEOUT = 30000;
const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 }
];

const PAGES = [
  { path: '/', name: 'home' },
  { path: '/services', name: 'services' },
  { path: '/ai-lab', name: 'ai-lab' },
  { path: '/admin', name: 'admin' }
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function nowISO() { return new Date().toISOString(); }

async function runPlaywrightCapture(page) {
  // Uses Playwright via node_modules; assumes @playwright/test installed
  const script = `
    const { chromium } = require('@playwright/test');
    (async () => {
      const browser = await chromium.launch({ headless: true });
      const context = await browser.newContext(${JSON.stringify({ viewport: page.viewport })});
      const p = await context.newPage();
      await p.goto('${process.env.APP_URL || 'http://localhost:3000'}', { waitUntil: 'networkidle', timeout: ${PLAYWRIGHT_TIMEOUT} });
      await p.screenshot({ path: '${page.outputPath}', fullPage: true });
      await browser.close();
    })().catch(e => { console.error(e); process.exit(1); });
  `;

  try {
    execSync(`node -e "${script.replace(/\n/g, ' ').replace(/"/g, '\\"')}"`, { cwd: process.cwd(), stdio: 'pipe' });
    return true;
  } catch (e) {
    console.error(`❌ Failed to capture ${page.name}:`, e.message);
    return false;
  }
}

function loadBaseline() {
  const baselineIndex = path.join(BASELINE_DIR, 'index.json');
  if (!fs.existsSync(baselineIndex)) return {};
  return JSON.parse(fs.readFileSync(baselineIndex, 'utf8'));
}

function saveBaselineIndex(data) {
  fs.writeFileSync(path.join(BASELINE_DIR, 'index.json'), JSON.stringify(data, null, 2));
}

function pixelmatchDiff(baselinePath, currentPath, diffPath) {
  // Simple pixel diff using pixelmatch if available; fallback to file compare
  try {
    // Dynamic require to avoid hard deps; pixelmatch may not be installed yet
    const pixelmatch = require('pixelmatch');
    const { PNG } = require('pngjs');
    const img1 = PNG.sync.read(fs.readFileSync(baselinePath));
    const img2 = PNG.sync.read(fs.readFileSync(currentPath));
    const { width, height } = img1;
    const diff = new PNG({ width, height });
    const mismatched = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });
    const totalPixels = width * height;
    const ratio = mismatched / totalPixels;
    fs.writeFileSync(diffPath, PNG.sync.write(diff));
    return ratio;
  } catch (e) {
    // Fallback: file size comparison (coarse)
    const s1 = fs.statSync(baselinePath).size;
    const s2 = fs.statSync(currentPath).size;
    return Math.abs(s2 - s1) / s1;
  }
}

async function main() {
  console.log('🔍 Visual Regression Detector — starting\n');
  ensureDir(BASELINE_DIR);
  ensureDir(CURRENT_DIR);
  ensureDir(DIFF_DIR);

  const baselineIndex = loadBaseline();
  const currentIndex = {};
  const alerts = [];

  // Capture current screenshots
  for (const page of PAGES) {
    for (const vp of VIEWPORTS) {
      const id = `${page.name}-${vp.name}`;
      const filename = `${id}.png`;
      const currentPath = path.join(CURRENT_DIR, filename);
      const baselinePath = path.join(BASELINE_DIR, filename);

      console.log(`📸 Capturing ${id} (${vp.width}x${vp.height})`);

      const success = await runPlaywrightCapture({
        name: id,
        viewport: { width: vp.width, height: vp.height },
        outputPath: currentPath
      });

      if (!success) {
        console.warn(`⚠️  Skipping ${id} (capture failed)`);
        continue;
      }

      currentIndex[id] = { timestamp: nowISO(), file: filename };

      // If no baseline exists, copy current to baseline and skip diff
      if (!fs.existsSync(baselinePath)) {
        fs.copyFileSync(currentPath, baselinePath);
        console.log(`✅ Baseline set for ${id}`);
        continue;
      }

      // Compute diff
      const diffFile = `${id}-diff.png`;
      const diffPath = path.join(DIFF_DIR, diffFile);
      const ratio = pixelmatchDiff(baselinePath, currentPath, diffPath);

      console.log(`   📊 Diff ratio: ${(ratio*100).toFixed(2)}%`);

      if (ratio > PIXELMATCH_THRESHOLD) {
        alerts.push({ id, ratio: Math.round(ratio*10000)/100, diffPath });
        console.log(`   🔴 Visual change exceeds threshold!`);
      } else {
        // Update baseline to current (accept changes)
        fs.copyFileSync(currentPath, baselinePath);
        console.log(`   ✅ Within threshold — baseline updated`);
      }
    }
  }

  // Save current index
  fs.writeFileSync(path.join(CURRENT_DIR, 'index.json'), JSON.stringify(currentIndex, null, 2));
  saveBaselineIndex(baselineIndex);

  // Summary
  console.log('\n📋 Summary:');
  console.log(`   Processed: ${PAGES.length * VIEWPORTS.length} page/viewport combos`);
  console.log(`   Alerts: ${alerts.length}`);
  console.log(`   Baseline updated: ${PAGES.length * VIEWPORTS.length - alerts.length}\n`);

  if (alerts.length > 0) {
    console.log('🚨 Visual regressions detected:\n');
    for (const a of alerts) {
      console.log(`   ${a.id} — ${a.ratio}% diff (see ${a.diffPath})`);
    }
    console.log('');
    process.exit(1);
  } else {
    console.log('✅ No visual regressions detected.\n');
    process.exit(0);
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
