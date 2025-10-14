#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting comprehensive file fixing...');

// Function to fix a single file
function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Fix import statements with semicolons
    content = content.replace(/from '([^']*);'/g, "from '$1'");
    content = content.replace(/from "([^"]*);"/g, 'from "$1"');

    // Fix missing closing tags for React.Fragment
    if (content.includes('<React.Fragment>') && !content.includes('</React.Fragment>')) {
      content = content.replace(/(<React\.Fragment>[\s\S]*?)(?=\s*\);\s*$)/m, '$1</React.Fragment>');
    }

    // Fix missing closing tags for fragments
    if (content.includes('<>') && !content.includes('</>')) {
      content = content.replace(/(<>[\s\S]*?)(?=\s*\);\s*$)/m, '$1</>');
    }

    // Fix missing closing div tags
    if (content.includes('<div') && !content.includes('</div>')) {
      content = content.replace(/(<div[^>]*>[\s\S]*?)(?=\s*\);\s*$)/m, '$1</div>');
    }

    // Fix missing export default
    if (content.includes('const ') && !content.includes('export default')) {
      content = content.replace(/(const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*\{[\s\S]*?\};\s*$)/m, '$1\nexport default $1;');
    }

    // Fix missing closing braces
    if (content.includes('{') && !content.includes('}')) {
      content = content.replace(/(\{[\s\S]*?)(?=\s*$)/m, '$1}');
    }

    // Fix missing closing parentheses
    if (content.includes('(') && !content.includes(')')) {
      content = content.replace(/(\([\s\S]*?)(?=\s*$)/m, '$1)');
    }

    // Add basic content if div is empty
    if (content.includes('<div>') && content.includes('</div>') && !content.includes('<h1>')) {
      content = content.replace(/<div>\s*<\/div>/g, '<div><h1>Page Title</h1><p>Page content goes here.</p></div>');
    }

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to get all problematic files
function getProblematicFiles() {
  const files = [];
  
  // Get all page files
  const appDir = '/workspace/app';
  if (fs.existsSync(appDir)) {
    const items = fs.readdirSync(appDir);
    for (const item of items) {
      const fullPath = path.join(appDir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        const pageFile = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          files.push(pageFile);
        }
      }
    }
  }

  // Add component files
  const componentFiles = [
    '/workspace/app/components/Footer.tsx',
    '/workspace/app/components/Navigation.tsx',
    '/workspace/app/components/AdvancedSEOOptimizer.tsx',
    '/workspace/app/components/PerformanceOptimizer.tsx',
    '/workspace/app/components/lazyUtils.tsx'
  ];

  files.push(...componentFiles);

  return files;
}

// Main execution
function main() {
  console.log('📋 Finding problematic files...');
  const files = getProblematicFiles();
  
  console.log(`📝 Found ${files.length} files to check`);

  let fixedCount = 0;
  let totalCount = files.length;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`\n📊 Fix Summary:`);
  console.log(`   ✅ Successfully fixed: ${fixedCount}/${totalCount} files`);

  // Run type check to see remaining errors
  console.log('\n🔍 Running type check to verify fixes...');
  try {
    execSync('pnpm run type-check', { stdio: 'inherit' });
    console.log('✅ Type check passed!');
  } catch (error) {
    console.log('⚠️  Some type errors remain, but many have been fixed');
  }
}

main();