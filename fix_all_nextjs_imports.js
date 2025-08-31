#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
// // // // // // // console.log('🔧 Starting comprehensive Next.js import fix...\n');
// Define the replacements
const replacements = [
  // Link component
  {
    pattern: /import\s+Link\s+from\s+['"]next\/link['"];?/g,
    replacement: 'import { Link } from \'react-router-dom\';'
  },
  // useRouter hook
  {
    pattern: /import\s+\{\s*useRouter\s*\}\s+from\s+['"]next\/router['"];?/g,
    replacement: 'import { useNavigate } from \'react-router-dom\';'
  },
  // useRouter hook (single import)
  {
    pattern: /import\s+useRouter\s+from\s+['"]next\/router['"];?/g,
    replacement: 'import { useNavigate } from \'react-router-dom\';'
  },
  // Head component
  {
    pattern: /import\s+Head\s+from\s+['"]next\/head['"];?/g,
    replacement: 'import { Helmet } from \'react-helmet-async\';'
  },
  // Image component
  {
    pattern: /import\s+Image\s+from\s+['"]next\/image['"];?/g,
    replacement: '// import Image from \'next/image\'; // TODO: Replace with regular img or custom Image component'
  },
  // AppProps type
  {
    pattern: /import\s+type\s+\{\s*AppProps\s*\}\s+from\s+['"]next\/app['"];?/g,
    replacement: '// import type { AppProps } from \'next/app\'; // TODO: Remove or replace with appropriate type'
];
// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let newContent = content;
    // Apply all replacements
    replacements.forEach(({ pattern, replacement }) => {
      if (pattern.test(newContent)) {
        newContent = newContent.replace(pattern, replacement);
        modified = true;
    });
    // Additional replacements for useRouter usage
    if (newContent.includes('useRouter')) {
      newContent = newContent.replace(/useRouter\(\)/g, 'useNavigate()');
      newContent = newContent.replace(/router\.push\(/g, 'router(');
      newContent = newContent.replace(/router\.replace\(/g, 'router(');
      newContent = newContent.replace(/router\.back\(\)/g, 'router(-1)');
      newContent = newContent.replace(/router\.forward\(\)/g, 'router(1)');
      modified = true;
    // Replace Head usage with Helmet
    if (newContent.includes('<Helmet>')) {
      newContent = newContent.replace(/<Helmet>/g, '<Helmet>');
      newContent = newContent.replace(/<\/Head>/g, '</Helmet>');
      modified = true;
    // Replace Image usage with img
    if (newContent.includes('<Image')) {
      newContent = newContent.replace(/<Image\s+/g, '<img ');
      newContent = newContent.replace(/<\/Image>/g, '</img>');
      // Remove Next.js specific props
      newContent = newContent.replace(/\s+priority\s*=\s*\{[^}]*\}/g, '');
      newContent = newContent.replace(/\s+fill\s*=\s*\{[^}]*\}/g, '');
      newContent = newContent.replace(/\s+sizes\s*=\s*\{[^}]*\}/g, '');
      modified = true;
    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      // // // // // // // console.log(`✅ Fixed: ${filePath}`);
      return true;
  } catch (error) {
    // // // // // // // console.error(`❌ Error processing ${filePath}:`, error.message);
  }
  return false;
// Function to find all TypeScript/JavaScript files
function files = [];
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // Skip certain directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'temp_backup', 'broken_files_backup'].includes(item)) {
          traverse(fullPath);
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
  traverse(dir);
  return files;
// Main execution
try {
  const projectRoot = process.cwd();
  // // // // // // // console.log(`📁 Scanning project root: ${projectRoot}\n`);
  const files = findFiles(projectRoot);
  // // // // // // // console.log(`📋 Found ${files.length} files to process\n`);
  const fixedCount = 0;
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
  // // // // // // // console.log(`\n🎉 Completed! Fixed ${fixedCount} files.`);
  if (fixedCount > 0) {
    // // // // // // // console.log('\n📝 Next steps:');
    // // // // // // // console.log('1. Review the changes');
    // // // // // // // console.log('2. Test the build: npm run build');
    // // // // // // // console.log('3. Fix any remaining issues manually');
    // // // // // // // console.log('4. Commit and push changes');
  }
} catch (error) {
  // // // // // // // console.error('❌ Script failed:', error.message);
  process.exit(1);
}}}}}}}}}}}}}}))))