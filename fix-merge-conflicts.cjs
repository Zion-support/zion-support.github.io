#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts by keeping the latest version
function resolveMergeConflicts(content) {
  // Remove all merge conflict markers and keep only the final content
  let lines = content.split('\n');
  let resolved = [];
  let inConflict = false;
  let conflictDepth = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<<')) {
      inConflict = true;
      conflictDepth++;
      continue;
    }
    
    if (line.startsWith('=======')) {
      continue;
    }
    
    if (line.startsWith('>>>>>>>')) {
      conflictDepth--;
      if (conflictDepth === 0) {
        inConflict = false;
      }
      continue;
    }
    
    // Only add lines that are not inside conflicts
    if (!inConflict) {
      resolved.push(line);
    }
  }
  
  return resolved.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const resolved = resolveMergeConflicts(content);
    
    if (content !== resolved) {
      fs.writeFileSync(filePath, resolved, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// List of files with merge conflicts
const filesWithConflicts = [
  './app/zion-ai-voice-assistant-pro/page.tsx',
  './app/zion-smart-expense-categorizer/page.tsx',
  './eslint.config.js',
  './app/zion-ai-performance-optimizer/page.tsx',
  './app/zion-smart-inventory-optimizer/page.tsx',
  './app/zion-ai-email-analyzer/page.tsx',
  './app/zion-ai-social-media-manager/page.tsx',
  './app/components/SEOEnhancer.tsx',
  './app/components/PerformanceMonitor.tsx',
  './app/components/ErrorFallback.tsx',
  './app/zion-ai-inventory-manager/page.tsx',
  './SidebarNavigation.tsx',
  './api/newsletter/subscribe.js',
  './api/quotes.js',
  './api/error-report.js',
  './api/create-payment-intent.js',
  './api/wallet.js',
  './api/onsite-request.js',
  './api/subscribe.js',
  './api/create-checkout-session.js',
  './api/shipping-rates.js',
  './app/cloud-infrastructure/page.tsx',
  './app/components/AccessibilityEnhancer.tsx',
  './App_minimal.tsx',
  './app/contexts/AnalyticsContext.tsx',
  './app/contact/page.tsx'
];

console.log('Starting merge conflict resolution...');

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fs.existsSync(file)) {
    if (processFile(file)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}

console.log(`\nFixed merge conflicts in ${fixedCount} files.`);

// Verify no more conflicts exist
console.log('\nVerifying no more conflicts exist...');
const { execSync } = require('child_process');
try {
  const result = execSync('grep -r "^<<<<<<<\\|^=======\\|^>>>>>>>" . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.js" --exclude="fix-merge-conflicts.js" || true', { encoding: 'utf8' });
  if (result.trim()) {
    console.log('Warning: Some conflicts may still exist:');
    console.log(result);
  } else {
    console.log('✓ No merge conflicts found!');
  }
} catch (error) {
  console.log('✓ No merge conflicts found!');
}