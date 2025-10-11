#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to find all TypeScript/JavaScript files recursively
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix import paths in a file
function fixImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Calculate the relative path from the file to the components directory
    const relativePath = path.relative(path.dirname(filePath), path.join(__dirname, 'app', 'components'));
    const normalizedPath = relativePath.replace(/\\/g, '/'); // Normalize for cross-platform
    
    // Fix Navigation imports
    const navigationRegex = /from ['"]\.\.\/components\/Navigation['"]/g;
    if (navigationRegex.test(content)) {
      content = content.replace(navigationRegex, `from '${normalizedPath}/Navigation'`);
      modified = true;
    }
    
    // Fix Footer imports
    const footerRegex = /from ['"]\.\.\/components\/Footer['"]/g;
    if (footerRegex.test(content)) {
      content = content.replace(footerRegex, `from '${normalizedPath}/Footer'`);
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting import path fixes...');

const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

let fixedCount = 0;
let totalFiles = files.length;

console.log(`Found ${totalFiles} TypeScript/JavaScript files to check...`);

for (const file of files) {
  if (fixImportsInFile(file)) {
    fixedCount++;
  }
}

console.log(`\nImport fixing complete!`);
console.log(`Files processed: ${totalFiles}`);
console.log(`Files modified: ${fixedCount}`);

// Run type check to verify fixes
console.log('\nRunning type check to verify fixes...');
try {
  execSync('pnpm run type-check', { stdio: 'inherit', cwd: __dirname });
  console.log('✅ Type check passed! All import errors have been fixed.');
} catch (error) {
  console.log('❌ Type check failed. There may be remaining issues.');
  process.exit(1);
}