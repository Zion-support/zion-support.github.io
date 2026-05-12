/**
 * Build Size Optimizer — Phase 1 (Analysis)
 *
 * Generates optimization recommendations based on current bundle analysis.
 * Does NOT make code changes. Does NOT track state.
 *
 * Triggered by GitHub Actions after trend evaluation passes (not blocked).
 * If current growth > threshold, emits recommendations in report JSON.
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');
const BASELINE_FILE = process.env.BUNDLE_BASELINE || '.bundle-size-baseline.json';
const CURRENT_REPORT = process.env.BUNDLE_REPORT || 'bundle-analysis.json';
const THRESHOLD_PERCENT = parseFloat(process.env.BUNDLE_SIZE_THRESHOLD || '5');

const OUT_FILE = path.join(REPORTS_DIR, 'build-size-optimizer-latest.json');

function readJson(file, fallback = null) {
  try {
    if (!fs.existsSync(file)) return fallback;
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    console.error(`Error reading ${file}:`, e.message);
    return fallback;
  }
}

function writeJson(file, payload) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(payload, null, 2));
}

function getTotalBytes(report) {
  if (!report) return 0;
  if (report.totalBytes) return report.totalBytes;
  if (report.assets && Array.isArray(report.assets)) {
    return report.assets
      .filter(a => a.name && a.name.endsWith('.js'))
      .reduce((sum, a) => sum + (a.size || 0), 0);
  }
  return 0;
}

function analyzeModules(report) {
  if (!report || !report.assets) return [];
  return report.assets
    .filter(a => a.name && a.name.endsWith('.js'))
    .map(a => ({
      name: a.name,
      size: a.size || 0,
      path: a.path || a.name,
    }))
    .sort((a, b) => b.size - a.size)
    .slice(0, 20);
}

function generateRecommendations(modules, growthPercent) {
  const recs = [];
  const totalSize = modules.reduce((sum, m) => sum + m.size, 0);

  // CODE_SPLIT: large modules >50KB
  const largeModules = modules.filter(m => m.size > 50 * 1024);
  if (largeModules.length > 0) {
    recs.push({
      type: 'CODE_SPLIT',
      impact: 'MEDIUM',
      description: `Lazy-load ${largeModules.length} large module(s) via dynamic import()`,
      examples: largeModules.slice(0, 3).map(m => m.name),
      estimatedSavingsBytes: Math.round(largeModules.reduce((sum, m) => sum + m.size, 0) * 0.3),
    });
  }

  // TREE_SHAKE: vendor bloat
  const vendorModules = modules.filter(m => m.path.includes('node_modules') && m.size > 100 * 1024);
  if (vendorModules.length > 0) {
    recs.push({
      type: 'TREE_SHAKE',
      impact: 'HIGH',
      description: `Verify tree-shaking for ${vendorModules.length} vendor module(s) (sideEffects, ESM)`,
      examples: vendorModules.slice(0, 3).map(m => m.name),
      estimatedSavingsBytes: Math.round(vendorModules.reduce((sum, m) => sum + m.size, 0) * 0.4),
    });
  }

  // AGGRESSIVE_SPLIT: high overall growth
  if (growthPercent > 10) {
    recs.push({
      type: 'AGGRESSIVE_SPLIT',
      impact: 'HIGH',
      description: 'High bundle growth detected — consider route-based code splitting (React.lazy + Suspense)',
      estimatedSavingsBytes: Math.round(totalSize * 0.15),
    });
  }

  return recs;
}

function main() {
  console.log('🔧 Build Size Optimizer (analysis mode) starting...');

  const baselineReport = readJson(BASELINE_FILE, null);
  const currentReport = readJson(CURRENT_REPORT, null);

  if (!baselineReport || !currentReport) {
    console.error('❌ Missing baseline or current bundle report');
    process.exit(1);
  }

  const baselineBytes = getTotalBytes(baselineReport);
  const currentBytes = getTotalBytes(currentReport);

  if (baselineBytes === 0 || currentBytes === 0) {
    console.error('❌ Could not extract bundle sizes');
    process.exit(1);
  }

  const diff = currentBytes - baselineBytes;
  const growthPercent = baselineBytes > 0 ? (diff / baselineBytes) * 100 : 0;
  const isGrowth = diff > 0;

  console.log(`📦 Baseline: ${baselineBytes} bytes`);
  console.log(`📦 Current:  ${currentBytes} bytes`);
  console.log(`📈 Change:   ${diff > 0 ? '+' : ''}${diff} bytes (${growthPercent.toFixed(2)}%)`);

  // Analyze top modules
  const modules = analyzeModules(currentReport);
  console.log(`📊 Top modules: ${modules.slice(0, 6).map(m => `${m.name.split('/').pop()} (${(m.size/1024).toFixed(1)}KB)`).join(', ')}`);

  // Generate recommendations if growth exceeds threshold
  let recommendations = [];
  let triggered = false;

  if (isGrowth && growthPercent > THRESHOLD_PERCENT) {
    triggered = true;
    recommendations = generateRecommendations(modules, growthPercent);
    console.log(`💡 Generated ${recommendations.length} optimization recommendation(s)`);
  } else if (isGrowth) {
    console.log(`✅ Growth within threshold (${growthPercent.toFixed(2)}% ≤ ${THRESHOLD_PERCENT}%)`);
  } else {
    console.log('✅ Bundle size decreased');
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    baselineBytes,
    currentBytes,
    growthBytes: diff,
    growthPercent: parseFloat(growthPercent.toFixed(2)),
    isGrowth,
    thresholdPercent: THRESHOLD_PERCENT,
    triggered,
    topModules: modules.slice(0, 10),
    recommendations,
    autoApply: process.env.BUNDLE_OPTIMIZER_AUTO_APPLY === 'true',
    applied: false,
  };

  writeJson(OUT_FILE, payload);
  console.log(`✅ Report saved: ${OUT_FILE}`);

  // Exit 1 if triggered (to block merge), else 0
  if (triggered) {
    console.log('❌ Optimization needed — exiting with failure to block merge');
    process.exit(1);
  }

  process.exit(0);
}

main();