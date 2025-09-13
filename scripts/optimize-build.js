#!/usr/bin/env node

/**
 * Build optimization script for Zion Tech Group
 * This script helps optimize the build process and identify potential issues
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting build optimization...');

// Check for duplicate imports in main page
function checkDuplicateImports() {
  const pagePath = path.join(__dirname, '../app/page.tsx');
  const content = fs.readFileSync(pagePath, 'utf8');
  
  const imports = content.match(/^import.*from.*$/gm) || [];
  const importMap = new Map();
  const duplicates = [];
  
  imports.forEach((importLine, index) => {
    const cleanImport = importLine.trim();
    if (importMap.has(cleanImport)) {
      duplicates.push({
        line: index + 1,
        import: cleanImport,
        firstOccurrence: importMap.get(cleanImport)
      });
    } else {
      importMap.set(cleanImport, index + 1);
    }
  });
  
  if (duplicates.length > 0) {
    console.log('⚠️  Found duplicate imports:');
    duplicates.forEach(dup => {
      console.log(`   Line ${dup.line}: ${dup.import}`);
      console.log(`   First occurrence at line ${dup.firstOccurrence}`);
    });
  } else {
    console.log('✅ No duplicate imports found');
  }
  
  return duplicates.length;
}

// Check for unused imports
function checkUnusedImports() {
  const pagePath = path.join(__dirname, '../app/page.tsx');
  const content = fs.readFileSync(pagePath, 'utf8');
  
  const imports = content.match(/^import.*from.*$/gm) || [];
  const renderSection = content.match(/<[A-Z][^>]*>/g) || [];
  
  const unusedImports = [];
  
  imports.forEach(importLine => {
    const componentMatch = importLine.match(/import\s+(\w+)/);
    if (componentMatch) {
      const componentName = componentMatch[1];
      const isUsed = renderSection.some(tag => tag.includes(componentName));
      if (!isUsed && !componentName.includes('default')) {
        unusedImports.push(componentName);
      }
    }
  });
  
  if (unusedImports.length > 0) {
    console.log('⚠️  Potentially unused imports:');
    unusedImports.forEach(imp => console.log(`   ${imp}`));
  } else {
    console.log('✅ All imports appear to be used');
  }
  
  return unusedImports.length;
}

// Check file sizes
function checkFileSizes() {
  const pagePath = path.join(__dirname, '../app/page.tsx');
  const stats = fs.statSync(pagePath);
  const sizeKB = Math.round(stats.size / 1024);
  
  console.log(`📊 Main page size: ${sizeKB}KB`);
  
  if (sizeKB > 100) {
    console.log('⚠️  Main page is quite large, consider splitting into smaller components');
  } else {
    console.log('✅ Main page size is reasonable');
  }
  
  return sizeKB;
}

// Check for performance issues
function checkPerformanceIssues() {
  const pagePath = path.join(__dirname, '../app/page.tsx');
  const content = fs.readFileSync(pagePath, 'utf8');
  
  const issues = [];
  
  // Check for too many Suspense boundaries
  const suspenseCount = (content.match(/<Suspense/g) || []).length;
  if (suspenseCount > 20) {
    issues.push(`Too many Suspense boundaries (${suspenseCount})`);
  }
  
  // Check for inline styles
  const inlineStyles = (content.match(/style=\{[^}]*\}/g) || []).length;
  if (inlineStyles > 10) {
    issues.push(`Too many inline styles (${inlineStyles})`);
  }
  
  // Check for console.log statements
  const consoleLogs = (content.match(/console\.log/g) || []).length;
  if (consoleLogs > 0) {
    issues.push(`Found ${consoleLogs} console.log statements`);
  }
  
  if (issues.length > 0) {
    console.log('⚠️  Performance issues found:');
    issues.forEach(issue => console.log(`   ${issue}`));
  } else {
    console.log('✅ No major performance issues found');
  }
  
  return issues.length;
}

// Main optimization function
function optimize() {
  console.log('\n🔍 Analyzing main page...\n');
  
  const duplicateCount = checkDuplicateImports();
  const unusedCount = checkUnusedImports();
  const fileSize = checkFileSizes();
  const performanceIssues = checkPerformanceIssues();
  
  console.log('\n📈 Optimization Summary:');
  console.log(`   Duplicate imports: ${duplicateCount}`);
  console.log(`   Unused imports: ${unusedCount}`);
  console.log(`   File size: ${fileSize}KB`);
  console.log(`   Performance issues: ${performanceIssues}`);
  
  const totalIssues = duplicateCount + unusedCount + performanceIssues;
  
  if (totalIssues === 0) {
    console.log('\n🎉 Great! No optimization issues found.');
  } else {
    console.log(`\n💡 Found ${totalIssues} issues that could be optimized.`);
  }
  
  return totalIssues;
}

// Run optimization
optimize();

export { optimize, checkDuplicateImports, checkUnusedImports, checkFileSizes, checkPerformanceIssues };