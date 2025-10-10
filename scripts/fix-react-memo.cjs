#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixReactMemoIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix React.memo((props) => { to () => {
    const memoRegex = /React\.memo\(\(props\)\s*=>\s*\{/g;
    const newContent = content.replace(memoRegex, '() => {');
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
    
    // Fix React.memo((props) => { to () => { with different spacing
    const memoRegex2 = /React\.memo\(\s*\(\s*props\s*\)\s*=>\s*\{/g;
    const newContent2 = content.replace(memoRegex2, '() => {');
    if (newContent2 !== content) {
      content = newContent2;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed React.memo issues in: ${filePath}`);
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
    if (fixReactMemoIssues(file)) {
      processedCount++;
    }
  });
  
  return processedCount;
}

function main() {
  console.log('🔧 Fixing React.memo issues...');
  
  let totalProcessed = 0;
  
  ['app', 'src'].forEach(dir => {
    if (fs.existsSync(dir)) {
      console.log(`Processing directory: ${dir}`);
      const processed = processDirectory(dir);
      totalProcessed += processed;
      console.log(`Fixed ${processed} files in ${dir}`);
    }
  });
  
  console.log(`\n✨ React.memo fixes complete! Processed ${totalProcessed} files.`);
}

if (require.main === module) {
  main();
}

module.exports = { fixReactMemoIssues, processDirectory };