#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const functionsDir = '/workspace/netlify/functions';
const backupDir = '/workspace/netlify/functions-backup';

// Function to get file content hash
function getFileHash(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.length + '_' + content.substring(0, 100).replace(/\s+/g, '');
  } catch (error) {
    return null;
  }
}

// Function to check if file is a duplicate
function isDuplicate(fileName) {
  const patterns = [
    /^.*_runner\.js$/, // Files ending with _runner.js
    /^.*-auditor\.js$/, // Files ending with -auditor.js
    /^.*-scanner\.js$/, // Files ending with -scanner.js
    /^.*-scheduler\.js$/, // Files ending with -scheduler.js
    /^.*-generator\.js$/, // Files ending with -generator.js
    /^.*-updater\.js$/, // Files ending with -updater.js
    /^.*-broadcaster\.js$/, // Files ending with -broadcaster.js
    /^.*-defender\.js$/, // Files ending with -defender.js
    /^.*-warmer\.js$/, // Files ending with -warmer.js
    /^.*-orchestrator\.js$/, // Files ending with -orchestrator.js
    /^.*-maximizer\.js$/, // Files ending with -maximizer.js
    /^.*-expander\.js$/, // Files ending with -expander.js
    /^.*-inventor\.js$/, // Files ending with -inventor.js
    /^.*-guardian\.js$/, // Files ending with -guardian.js
    /^.*-promoter\.js$/, // Files ending with -promoter.js
    /^.*-accelerator\.js$/, // Files ending with -accelerator.js
    /^.*-enhancer\.js$/, // Files ending with -enhancer.js
    /^.*-advertiser\.js$/, // Files ending with -advertiser.js
    /^.*-curator\.js$/, // Files ending with -curator.js
    /^.*-detector\.js$/, // Files ending with -detector.js
    /^.*-finder\.js$/, // Files ending with -finder.js
    /^.*-builder\.js$/, // Files ending with -builder.js
    /^.*-synthesizer\.js$/, // Files ending with -synthesizer.js
    /^.*-validator\.js$/, // Files ending with -validator.js
    /^.*-maker\.js$/, // Files ending with -maker.js
    /^.*-refresher\.js$/, // Files ending with -refresher.js
    /^.*-inserter\.js$/, // Files ending with -inserter.js
    /^.*-optimizer\.js$/, // Files ending with -optimizer.js
    /^.*-harmonizer\.js$/, // Files ending with -harmonizer.js
    /^.*-upgrader\.js$/, // Files ending with -upgrader.js
    /^.*-pinger\.js$/, // Files ending with -pinger.js
    /^.*-suggester\.js$/, // Files ending with -suggester.js
    /^.*-linker\.js$/, // Files ending with -linker.js
    /^.*-enforcer\.js$/, // Files ending with -enforcer.js
    /^.*-injector\.js$/, // Files ending with -injector.js
    /^.*-committer\.js$/, // Files ending with -committer.js
    /^.*-nudges\.ts$/, // Files ending with -nudges.ts
  ];

  return patterns.some(pattern => pattern.test(fileName));
}

// Function to check if file is essential (keep these)
function isEssential(fileName) {
  const essentialPatterns = [
    /^test-function\.js$/, // Test function
    /^functions-manifest\.json$/, // Manifest file
    /^.*-report\.md$/, // Report files
  ];

  return essentialPatterns.some(pattern => pattern.test(fileName));
}

// Main cleanup function
function cleanupFunctions() {
  console.log('🧹 Starting function cleanup...');

  const files = fs.readdirSync(functionsDir);
  const jsFiles = files.filter(
    file => file.endsWith('.js') || file.endsWith('.ts')
  );

  console.log(`📊 Found ${jsFiles.length} function files`);

  let removedCount = 0;
  let keptCount = 0;

  for (const file of jsFiles) {
    const filePath = path.join(functionsDir, file);

    // Skip if essential
    if (isEssential(file)) {
      console.log(`✅ Keeping essential: ${file}`);
      keptCount++;
      continue;
    }

    // Remove if duplicate/automation function
    if (isDuplicate(file)) {
      console.log(`🗑️  Removing duplicate/automation: ${file}`);
      fs.unlinkSync(filePath);
      removedCount++;
    } else {
      console.log(`✅ Keeping: ${file}`);
      keptCount++;
    }
  }

  console.log(`\n📈 Cleanup Summary:`);
  console.log(`   Removed: ${removedCount} files`);
  console.log(`   Kept: ${keptCount} files`);
  console.log(`   Total: ${jsFiles.length} files`);

  // Count remaining files
  const remainingFiles = fs
    .readdirSync(functionsDir)
    .filter(file => file.endsWith('.js') || file.endsWith('.ts'));
  console.log(`   Remaining: ${remainingFiles.length} files`);
}

// Run cleanup
cleanupFunctions();
