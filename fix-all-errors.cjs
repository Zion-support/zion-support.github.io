#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive error fixing...');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers and keep the HEAD version
    const lines = content.split('\n');
    const newLines = [];
    let inConflict = false;
    let keepHead = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepHead = true;
        continue;
      } else if (line.includes('=======')) {
        keepHead = false;
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepHead = false;
        continue;
      }
      
      if (!inConflict || keepHead) {
        newLines.push(line);
      }
    }

    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ Fixed merge conflicts in: ${filePath}`);
      modified = true;
    }
  } catch (error) {
    console.error(`❌ Error fixing merge conflicts in ${filePath}:`, error.message);
  }
}

// Function to fix JSX syntax errors
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common JSX syntax errors
    const fixes = [
      // Fix buttonton -> button
      { pattern: /buttonton/g, replacement: 'button' },
      // Fix malformed JSX attributes
      { pattern: /onSidebarToggle\s*=\s*\{\s*\(\)\s*=>\s*\{\s*\}\s*\}/g, replacement: 'onSidebarToggle={() => {}}' },
      // Fix missing spaces around operators
      { pattern: /=\s*'/g, replacement: "= '" },
      { pattern: /'\s*=/g, replacement: "' =" },
      // Fix missing spaces in object properties
      { pattern: /event_category:/g, replacement: 'event_category: ' },
      { pattern: /event_label:/g, replacement: 'event_label: ' },
      // Fix missing spaces in function calls
      { pattern: /setTimeout\(/g, replacement: 'setTimeout(' },
      { pattern: /clearTimeout\(/g, replacement: 'clearTimeout(' },
    ];

    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed JSX syntax errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing JSX errors in ${filePath}:`, error.message);
  }
}

// Function to fix TypeScript syntax errors
function fixTypeScriptErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common TypeScript syntax errors
    const fixes = [
      // Fix missing commas in object literals
      { pattern: /(\w+):\s*(\w+)\s*(\w+):/g, replacement: '$1: $2,\n  $3:' },
      // Fix missing semicolons
      { pattern: /(\w+)\s*$/gm, replacement: '$1;' },
      // Fix malformed interface declarations
      { pattern: /interface\s+(\w+)\s*\{/g, replacement: 'interface $1 {' },
      // Fix missing return types
      { pattern: /const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{/g, replacement: 'const $1 = ($2): void => {' },
    ];

    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed TypeScript syntax errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing TypeScript errors in ${filePath}:`, error.message);
  }
}

// Get all files with merge conflicts
const mergeConflictFiles = [
  './app/config/errorBoundaryConfig.tsx',
  './app/components/Navigation.tsx',
  './app/components/PerformanceOptimizer.tsx',
  './app/components/Footer.tsx',
  './app/components/SEOOptimizer.tsx',
  './app/components/ContentPromotionBanner.tsx',
  './app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx',
  './app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  './app/blog/ai-enterprise-transformation-2025/page.tsx',
  './app/sitemap.ts',
  './app/ai-3d-generation/page.tsx',
  './app/5g-mobile-applications/page.tsx',
  './app/5g-smart-city-solutions/page.tsx',
  './app/5g-edge-computing/page.tsx',
  './app/5g-network-optimization/page.tsx',
  './app/5g-private-networks/page.tsx',
  './app/5g-network-infrastructure/page.tsx',
  './app/5g-iot-solutions/page.tsx'
];

// Get all files with JSX errors
const jsxErrorFiles = [
  './app/components/Sidebar.tsx',
  './app/components/ErrorBoundary.tsx',
  './app/components/ContentCarousel.tsx',
  './app/case-studies/page.tsx',
  './app/support/page.tsx',
  './app/careers/page.tsx',
  './app/micro-saas/page.tsx'
];

// Fix merge conflicts
console.log('\n🔧 Fixing merge conflicts...');
mergeConflictFiles.forEach(file => {
  if (fs.existsSync(file)) {
    fixMergeConflicts(file);
  }
});

// Fix JSX errors
console.log('\n🔧 Fixing JSX syntax errors...');
jsxErrorFiles.forEach(file => {
  if (fs.existsSync(file)) {
    fixJSXErrors(file);
  }
});

// Fix TypeScript errors in component files
console.log('\n🔧 Fixing TypeScript syntax errors...');
const componentFiles = [
  './app/components/AccessibilityEnhancer.tsx',
  './app/components/AdvancedPerformanceOptimizer.tsx',
  './app/components/AnalyticsProvider.tsx',
  './app/components/ContentCarousel.tsx',
  './app/components/ContentStatistics.tsx',
  './app/components/DynamicContentShowcase.tsx',
  './app/components/EnhancedAnalytics.tsx',
  './app/components/EnhancedSEO.tsx',
  './app/components/ErrorBoundary.tsx',
  './app/components/MetaManager.tsx',
  './app/components/PerformanceMonitor.tsx',
  './app/components/SEOEnhancer.tsx',
  './app/components/Sidebar.tsx'
];

componentFiles.forEach(file => {
  if (fs.existsSync(file)) {
    fixTypeScriptErrors(file);
  }
});

console.log('\n✅ Error fixing completed!');