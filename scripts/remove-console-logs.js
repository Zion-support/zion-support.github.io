#!/usr/bin/env node

/**
 * Script to remove console.log statements in production builds
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONSOLE_PATTERNS = [
  /console\.(log|debug|info)\([^)]*\);?/g,
  /console\.(log|debug|info)\([^)]*\)\s*;?/g,
  /console\.(log|debug|info)\([^)]*\)\s*\/\/.*$/gm,
];

const PRESERVE_PATTERNS = [
  /console\.(warn|error)/g,
  /console\.(log|debug|info).*\/\*.*preserve.*\*\//g,
  /console\.(log|debug|info).*\/\/.*preserve/g,
];

function shouldPreserveConsoleStatement(match, content, index) {
  const beforeMatch = content.substring(Math.max(0, index - 50), index);
  const afterMatch = content.substring(index + match.length, index + match.length + 50);
  const fullContext = beforeMatch + match + afterMatch;
  
  return PRESERVE_PATTERNS.some(pattern => pattern.test(fullContext));
}

function removeConsoleLogs(content) {
  let modifiedContent = content;
  let totalRemoved = 0;
  
  CONSOLE_PATTERNS.forEach(pattern => {
    const matches = [...content.matchAll(pattern)];
    
    // Process matches in reverse order to maintain indices
    matches.reverse().forEach(match => {
      if (!shouldPreserveConsoleStatement(match[0], content, match.index)) {
        modifiedContent = modifiedContent.substring(0, match.index) + 
                         modifiedContent.substring(match.index + match[0].length);
        totalRemoved++;
      }
    });
  });
  
  return { content: modifiedContent, removed: totalRemoved };
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = removeConsoleLogs(content);
    
    if (result.removed > 0) {
      fs.writeFileSync(filePath, result.content);
      console.log(`✅ Removed ${result.removed} console statements from ${filePath}`);
    }
    
    return result.removed;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return 0;
  }
}

function main() {
  const isProduction = process.env.NODE_ENV === 'production';
  
  if (!isProduction) {
    console.log('ℹ️  Skipping console log removal (not in production mode)');
    return;
  }
  
  console.log('🧹 Removing console.log statements for production...');
  
  const srcDir = path.join(__dirname, '..', 'src');
  const files = glob.sync('**/*.{ts,tsx,js,jsx}', { cwd: srcDir });
  
  let totalRemoved = 0;
  let processedFiles = 0;
  
  files.forEach(file => {
    const filePath = path.join(srcDir, file);
    const removed = processFile(filePath);
    totalRemoved += removed;
    if (removed > 0) processedFiles++;
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`   Files processed: ${files.length}`);
  console.log(`   Files modified: ${processedFiles}`);
  console.log(`   Console statements removed: ${totalRemoved}`);
  
  if (totalRemoved > 0) {
    console.log('\n✨ Console log removal completed successfully!');
  } else {
    console.log('\n✨ No console statements found to remove.');
  }
}

// Run main function if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { removeConsoleLogs, processFile };