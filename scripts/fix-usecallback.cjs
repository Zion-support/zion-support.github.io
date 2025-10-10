#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixUseCallbackIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix useCallback with incorrect props parameter
    const useCallbackRegex = /useCallback\(\(props\)\s*=>\s*\{/g;
    const newContent = content.replace(useCallbackRegex, 'useCallback((e) => {');
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
    
    // Fix useCallback with different spacing
    const useCallbackRegex2 = /useCallback\(\s*\(\s*props\s*\)\s*=>\s*\{/g;
    const newContent2 = content.replace(useCallbackRegex2, 'useCallback((e) => {');
    if (newContent2 !== content) {
      content = newContent2;
      modified = true;
    }
    
    // Fix specific patterns where e.target is used but props is the parameter
    const targetPattern = /useCallback\(\([^)]*\)\s*=>\s*\{[^}]*e\.target[^}]*\}/g;
    const targetReplacement = content.replace(targetPattern, (match) => {
      return match.replace(/useCallback\(\([^)]*\)\s*=>/, 'useCallback((e) =>');
    });
    if (targetReplacement !== content) {
      content = targetReplacement;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed useCallback issues in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dir) {
  const pattern = `${dir}/**/*.{ts,tsx,js,jsx}`;
  const files = glob.sync(pattern, { 
    ignore: ['**/node_modules/**', '**/dist/**', '**/build/**'] 
  });
  
  let processedCount = 0;
  
  files.forEach(file => {
    if (fixUseCallbackIssues(file)) {
      processedCount++;
    }
  });
  
  return processedCount;
}

function main() {
  console.log('🔧 Fixing useCallback issues...');
  
  let totalProcessed = 0;
  
  ['app', 'src'].forEach(dir => {
    if (fs.existsSync(dir)) {
      console.log(`Processing directory: ${dir}`);
      const processed = processDirectory(dir);
      totalProcessed += processed;
      console.log(`Fixed ${processed} files in ${dir}`);
    }
  });
  
  console.log(`\n✨ useCallback fixes complete! Processed ${totalProcessed} files.`);
}

if (require.main === module) {
  main();
}

module.exports = { fixUseCallbackIssues, processDirectory };