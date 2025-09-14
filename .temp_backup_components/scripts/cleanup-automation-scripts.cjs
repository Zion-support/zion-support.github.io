#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧹 Cleaning up automation scripts...');

// List of problematic files to remove or fix
const filesToRemove = [
  'automation/intelligent-orchestrator.js',
  'automation/lint-automation-manager.js',
  'automation/lint-error-fixer.js',
  'automation/lint-monitor.js',
  'automation/linting-automation.js',
  'automation/performance-optimizer.js',
  'automation/security-scanner.js',
  'automation_backup/automation-dashboard.js',
  'automation_backup/automation-factory.js',
  'automation_backup/build-automation.js',
  'automation_backup/build-health-monitor.js',
  'automation_backup/code-quality-monitor.js',
  'automation_backup/dependency-monitor.js',
  'automation_backup/file-integrity-monitor.js',
  'automation_backup/intelligent-orchestrator.js',
  'automation_backup/lint-automation-manager.js',
  'automation_backup/lint-error-fixer.js',
  'automation_backup/lint-monitor.js',
  'automation_backup/performance-optimizer.js',
  'automation_backup/seo-optimizer.js',
  'automation_backup/site-link-crawler.js',
  'automation_backup/site-link-fixer.js',
  'automation_backup/test-generator.js',
  'comprehensive-merge-resolver.js',
  'comprehensive-syntax-fix.js',
  'comprehensive-syntax-fixer.js',
  'comprehensive_fix.cjs',
  'continuous-improvement-automation.cjs',
  'corrupted-files-cleaner.cjs',
  'create-enhanced-automation-scripts.cjs',
  'create-working-pages.cjs',
  'deployment-optimization.cjs',
  'ecosystem-comprehensive-automation.config.cjs',
  'ecosystem.intelligent.config.cjs',
  'enhanced-automation-orchestrator.cjs',
  'enhanced-syntax-fixer.cjs',
  'final-automation-suite.cjs',
  'final-comprehensive-fix.cjs',
  'final-fix.cjs',
  'final-syntax-cleanup.cjs',
  'final_fix.cjs',
  'fix-all-automation-syntax.cjs',
  'fix-all-catch-blocks.cjs',
  'fix-all-corrupted-files.cjs',
  'fix-all-jsx-semicolons.cjs',
  'fix-all-merge-conflicts.cjs',
  'fix-all-remaining-issues.cjs',
  'fix-all-remaining-semicolons.cjs',
  'fix-automation-scripts-comprehensive.cjs',
  'fix-automation-scripts-v2.cjs',
  'fix-automation-scripts.cjs',
  'fix-automation-syntax-errors.cjs',
  'fix-chat-assistant.cjs',
  'fix-common-errors.cjs',
  'fix-corrupted-files.cjs',
  'fix-critical-syntax-errors.cjs',
  'fix-critical-syntax-simple.cjs',
  'fix-empty-tests.cjs',
  'fix-entities-corrected.cjs',
  'fix-entities.cjs',
  'fix-final-errors.cjs',
  'fix-final-semicolons.cjs',
  'fix-final-typescript-errors.cjs',
  'fix-final-unescaped-entities.cjs',
  'fix-import-errors.cjs',
  'fix-intelligent-scripts.cjs',
  'fix-jsx-syntax-errors.cjs',
  'fix-link-issues.cjs',
  'fix-main-app-syntax.cjs',
  'fix-minified-files.cjs',
  'fix-pages-imports.cjs',
  'fix-remaining-conflicts.cjs',
  'fix-remaining-corrupted-files.cjs',
  'fix-remaining-lint-errors.cjs',
  'fix-remaining-lint-issues.cjs',
  'fix-remaining-parsing-errors.cjs',
  'fix-remaining-syntax-errors.cjs',
  'fix-remaining-test-syntax.cjs',
  'fix-severely-corrupted-files.cjs',
  'fix-specific-errors.cjs',
  'fix-specific-syntax-errors.cjs',
  'fix-string-literals.cjs',
  'fix-syntax-basic.cjs',
  'fix-test-files-v2.cjs',
  'fix-test-files.cjs',
  'fix-test-syntax-errors.cjs',
  'fix-test-syntax.cjs',
  'fix-typescript-errors-v2.cjs',
  'fix-typescript-errors.cjs',
  'fix_all_typescript_errors.cjs',
  'fix_empty_files.cjs',
  'jsx-syntax-fixer.cjs',
  'monitoring-automation.cjs',
  'move-corrupted-files.cjs',
  'next.config.cjs',
  'next.config.optimized.cjs',
  'optimize-build-performance.cjs',
  'resolve-all-conflicts.cjs',
  'rewrite-problematic-files.cjs',
  'run-automation-suite-fixed.cjs',
  'simple-automation-suite.cjs',
  'simple-catch-fixer.cjs',
  'targeted-fix.cjs',
  'working-automation-suite.cjs',
];

let removedCount = 0;
let errorCount = 0;

filesToRemove.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      removedCount++;
      console.log(`✅ Removed: ${file}`);
    }
  } catch (error) {
    errorCount++;
    console.log(`❌ Error removing ${file}: ${error.message}`);
  }
});

// Clean up empty directories
const dirsToCheck = [
  'automation_backup',
  'pages._quarantine',
  'pages.disabled',
  'pages.disabled_auto',
  'pages.disabled.full',
  'pages.disabled_full',
  'pages-quarantine',
  'src.pages.disabled',
];

dirsToCheck.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  try {
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      if (files.length === 0) {
        fs.rmdirSync(dirPath);
        console.log(`✅ Removed empty directory: ${dir}`);
      }
    }
  } catch (error) {
    console.log(`⚠️  Could not check/remove ${dir}: ${error.message}`);
  }
});

console.log(`\n📊 Cleanup Summary:`);
console.log(`   Files removed: ${removedCount}`);
console.log(`   Errors: ${errorCount}`);
console.log(`   Total processed: ${filesToRemove.length}`);

console.log('\n✨ Cleanup completed!');
