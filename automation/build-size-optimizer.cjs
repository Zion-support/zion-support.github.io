#!/usr/bin/env node
/**
 * Autonomous Build Size Optimizer
 *
 * Detects bundle growth trends and generates AI-powered optimization recommendations.
 * Can optionally apply safe optimizations when AUTO_APPLY=true.
 *
 * Phase 1: Analysis + Recommendations (safe, default)
 * Phase 2: Auto-apply tree-shaking/code-splitting (opt-in via env)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');
const STATE_FILE = path.join(ROOT, '.bundle-size-monitor-state.json');
const OUT_FILE = path.join(REPORTS_DIR, 'build-size-optimizer-latest.json');

// Config
const THRESHOLD_PERCENT = parseFloat(process.env.BUNDLE_SIZE_THRESHOLD || '5'); // Trigger at >5%
const CONSECUTIVE_LIMIT = parseInt(process.env.BUNDLE_CONSECUTIVE_LIMIT || '3'); // 3 strikes
const AUTO_APPLY = process.env.BUNDLE_OPTIMIZER_AUTO_APPLY === 'true'; // Phase 2 flag
const BASELINE_FILE = process.env.BUNDLE_BASELINE || '.bundle-size-baseline.json';
const CURRENT_REPORT = process.env.BUNDLE_REPORT || 'bundle-analysis.json';

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
  // next-bundle-analyzer format: { totalBytes: 123456 }
  if (report.totalBytes) return report.totalBytes;
  // Alternative: sum all .js assets
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
    .slice(0, 20); // Top 20 modules
}

function generateRecommendations(modules, growthPercent) {
  const recs = [];
  const totalSize = modules.reduce((sum, m) => sum + m.size, 0);

  // Heuristic 1: Large modules > 50KB could be code-split
  const largeModules = modules.filter(m => m.size > 50 * 1024);
  if (largeModules.length > 0) {
    recs.push({
      type: 'CODE_SPLIT',
      impact: 'MEDIUM',
      description: `Consider lazy-loading ${largeModules.length} large module(s) via dynamic import()`,
      examples: largeModules.slice(0, 3).map(m => m.name),
      estimatedSavingsBytes: largeModules.reduce((sum, m) => sum + m.size * 0.3, 0), // 30% reduction estimate
    });
  }

  // Heuristic 2: Modules in node_modules that are large but underused
  const vendorModules = modules.filter(m => m.path.includes('node_modules') && m.size > 100 * 1024);
  if (vendorModules.length > 0) {
    recs.push({
      type: 'TREE_SHAKE',
      impact: 'HIGH',
      description: `Verify tree-shaking for ${vendorModules.length} vendor module(s)`,
      examples: vendorModules.slice(0, 3).map(m => m.name),
      estimatedSavingsBytes: vendorModules.reduce((sum, m) => sum + m.size * 0.4, 0),
    });
  }

  // Heuristic 3: Repeated patterns (e.g., multiple instances of same chunk)
  const chunkPatterns = {};
  modules.forEach(m => {
    const chunk = m.name.match(/chunk-\d+/)?.[0] || 'main';
    chunkPatterns[chunk] = (chunkPatterns[chunk] || 0) + 1;
  });
  const duplicateChunks = Object.entries(chunkPatterns).filter(([,count]) => count > 3);
  if (duplicateChunks.length > 0) {
    recs.push({
      type: 'CHUNK_CONSOLIDATION',
      impact: 'LOW',
      description: `Consolidate ${duplicateChunks.length} chunk group(s) to reduce overhead`,
      examples: duplicateChunks.slice(0, 2).map(([name]) => name),
      estimatedSavingsBytes: duplicateChunks.length * 5 * 1024, // ~5KB per chunk reduction
    });
  }

  // Heuristic 4: If overall growth > 10%, suggest aggressive split
  if (growthPercent > 10) {
    recs.push({
      type: 'AGGRESSIVE_SPLIT',
      impact: 'HIGH',
      description: 'High bundle growth detected — consider route-based code splitting (React.lazy + Suspense)',
      estimatedSavingsBytes: totalSize * 0.15, // 15% potential
    });
  }

  return recs;
}

function invokeOpenClawAgent(prompt) {
  // Use the OpenClaw agent system to get AI-powered recommendations
  // Since we're running inside OpenClaw, we can spawn a subagent for analysis
  return new Promise((resolve) => {
    try {
      // Fallback to rule-based if agent system unavailable
      console.log('⚠️  Agent invocation not directly available, using rule-based recs');
      resolve(null);
    } catch (e) {
      resolve(null);
    }
  });
}

function applyOptimizations(recommendations) {
  if (!AUTO_APPLY) {
    console.log('⚠️  AUTO_APPLY=false — skipping code changes');
    return { applied: false, reason: 'auto_apply_disabled' };
  }

  console.log('🚀 AUTO_APPLY=true — attempting safe optimizations...');

  // Phase 2: Implement safe tree-shaking improvements
  // 1. Add dynamic imports to large route components
  // 2. Enable webpack magic comments for better chunking
  // 3. Update next.config.js for better splitting

  // For now, return dry-run since Phase 2 not yet implemented
  return { applied: false, reason: 'phase_2_pending' };
}

function main() {
  console.log('🔧 Build Size Optimizer starting...');

  // Read state
  const state = readJson(STATE_FILE, {
    consecutiveFailures: 0,
    lastGrowthPercent: 0,
    recommendationsHistory: [],
  });

  // Read baseline and current
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
  console.log(`📊 Top modules: ${modules.map(m => `${m.name.split('/').pop()} (${(m.size/1024).toFixed(1)}KB)`).join(', ')}`);

  // Track consecutive failures
  let triggered = false;
  if (isGrowth && growthPercent > THRESHOLD_PERCENT) {
    state.consecutiveFailures += 1;
    state.lastGrowthPercent = growthPercent;
    console.log(`⚠️  Growth exceeds ${THRESHOLD_PERCENT}% — strike ${state.consecutiveFailures}/${CONSECUTIVE_LIMIT}`);
    if (state.consecutiveFailures >= CONSECUTIVE_LIMIT) {
      triggered = true;
      console.log(`🚨 TRIGGERED after ${CONSECUTIVE_LIMIT} consecutive increases`);
    }
  } else {
    if (state.consecutiveFailures > 0) {
      console.log(`✅ Bundle within budget — resetting strike counter (was ${state.consecutiveFailures})`);
    }
    state.consecutiveFailures = 0;
    state.lastGrowthPercent = growthPercent;
  }

  // Generate recommendations if triggered
  let recommendations = [];
  let appliedResult = null;

  if (triggered) {
    recommendations = generateRecommendations(modules, growthPercent);
    console.log(`💡 Generated ${recommendations.length} optimization recommendation(s)`);

    appliedResult = applyOptimizations(recommendations);
  }

  // Build output
  const payload = {
    generatedAt: new Date().toISOString(),
    baselineBytes,
    currentBytes,
    growthBytes: diff,
    growthPercent,
    isGrowth,
    thresholdPercent: THRESHOLD_PERCENT,
    consecutiveFailures: state.consecutiveFailures,
    triggered,
    topModules: modules.slice(0, 10),
    recommendations,
    autoApply: AUTO_APPLY,
    applied: appliedResult?.applied || false,
  };

  writeJson(OUT_FILE, payload);

  // Update state (mirror monitor's state file for persistence)
  const monitorState = {
    consecutiveFailures: state.consecutiveFailures,
    lastGrowthPercent: growthPercent,
    updatedAt: new Date().toISOString(),
  };
  writeJson(STATE_FILE, monitorState);

  console.log(`✅ Report saved: ${OUT_FILE}`);

  // Exit code: 1 if triggered and not auto-applied, else 0
  if (triggered && !(appliedResult?.applied)) {
    console.log('❌ Build size optimization needed — exiting with failure to block merge');
    process.exit(1);
  }

  process.exit(0);
}

main();
