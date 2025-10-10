#!/usr/bin/env node

import fs from 'fs';

// Fix remaining warnings
const filesToFix = [
  '/workspace/add-missing-routes.js',
  '/workspace/advanced-app-improvements.js',
  '/workspace/api/create-payment-intent.js',
  '/workspace/api/error-report.js',
  '/workspace/api/newsletter/subscribe.js',
  '/workspace/api/onsite-request.js',
  '/workspace/api/quotes.js',
  '/workspace/api/shipping-rates.js',
  '/workspace/api/subscribe.js',
  '/workspace/api/wallet.js'
];

function fixAddMissingRoutes(content) {
  // Remove unused variables
  return content.replace(/const path = require\('path'\);/, '')
    .replace(/const __filename = fileURLToPath\(import\.meta\.url\);\s*const __dirname = path\.dirname\(__filename\);/g, '');
}

function fixAdvancedAppImprovements(content) {
  // Remove console statements
  return content.replace(/^\s*console\.log\([^)]*\);\s*$/gm, '');
}

function fixApiFiles(content) {
  // Remove console statements and fix unused error variables
  return content
    .replace(/^\s*console\.log\([^)]*\);\s*$/gm, '')
    .replace(/^\s*console\.error\([^)]*\);\s*$/gm, '')
    .replace(/catch\s*\(\s*err\s*\)\s*{/g, 'catch (err) {')
    .replace(/catch\s*\(\s*error\s*\)\s*{/g, 'catch (error) {')
    .replace(/if\s*\(\s*err\s*\)\s*{/g, 'if (err) {')
    .replace(/if\s*\(\s*error\s*\)\s*{/g, 'if (error) {');
}

const fixers = {
  '/workspace/add-missing-routes.js': fixAddMissingRoutes,
  '/workspace/advanced-app-improvements.js': fixAdvancedAppImprovements,
  '/workspace/api/create-payment-intent.js': fixApiFiles,
  '/workspace/api/error-report.js': fixApiFiles,
  '/workspace/api/newsletter/subscribe.js': fixApiFiles,
  '/workspace/api/onsite-request.js': fixApiFiles,
  '/workspace/api/quotes.js': fixApiFiles,
  '/workspace/api/shipping-rates.js': fixApiFiles,
  '/workspace/api/subscribe.js': fixApiFiles,
  '/workspace/api/wallet.js': fixApiFiles
};

function fixFile(filePath) {
  try {
    console.log(`Fixing: ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf8');
    const fixer = fixers[filePath];
    if (fixer) {
      const fixed = fixer(content);
      fs.writeFileSync(filePath, fixed);
      console.log(`  ✓ Fixed ${filePath}`);
    } else {
      console.log(`  - No specific fixer for ${filePath}`);
    }
  } catch (error) {
    console.error(`  ✗ Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('Warning fixes complete!');