#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all TypeScript/JavaScript files in the app directory
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove console.log statements (but keep console.error for development)
    const consoleLogRegex = /^\s*console\.log\([^)]*\);\s*$/gm;
    if (consoleLogRegex.test(content)) {
      const newContent = content.replace(consoleLogRegex, '');
      fs.writeFileSync(filePath, newContent);
      modified = true;
      console.log(`Removed console.log statements from ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('🔧 Starting linting error fixes...');
  
  const appDir = path.join(__dirname, '..', 'app');
  const files = getAllFiles(appDir);
  
  let modifiedFiles = 0;
  
  files.forEach(file => {
    if (fixUnusedImports(file)) {
      modifiedFiles++;
    }
  });
  
  console.log(`✅ Processed ${files.length} files`);
  console.log(`📝 Modified ${modifiedFiles} files`);
  
  // Run ESLint with --fix to automatically fix what can be fixed
  try {
    console.log('🔧 Running ESLint --fix...');
    execSync('npm run lint:fix', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    console.log('✅ ESLint fixes completed');
  } catch (error) {
    console.log('⚠️  ESLint --fix completed with some remaining issues');
  }
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixUnusedImports, getAllFiles };