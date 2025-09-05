#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const EXCLUDE_PATTERNS = [
  'node_modules',
  '.next',
  'dist',
  'build',
  'coverage',
  'scripts',
  '*.test.*',
  '*.spec.*'
];

function shouldExclude(filePath) {
  return EXCLUDE_PATTERNS.some(pattern => {
    if (pattern.includes('*')) {
      return filePath.includes(pattern.replace('*', ''));
    }
    return filePath.includes(pattern);
  });
}

function removeConsoleLogs(content) {
  // Remove console.log statements but keep console.error and console.warn
  const patterns = [
    /console\.log\([^)]*\);?\s*/g,
    /console\.debug\([^)]*\);?\s*/g,
    /console\.info\([^)]*\);?\s*/g
  ];
  
  let modifiedContent = content;
  patterns.forEach(pattern => {
    modifiedContent = modifiedContent.replace(pattern, '');
  });
  
  return modifiedContent;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const modifiedContent = removeConsoleLogs(content);
    
    if (content !== modifiedContent) {
      fs.writeFileSync(filePath, modifiedContent, 'utf8');
      console.log(`Removed console logs from: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function getAllFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!shouldExclude(fullPath)) {
        files.push(...getAllFiles(fullPath, extensions));
      }
    } else if (stat.isFile()) {
      const ext = path.extname(fullPath);
      if (extensions.includes(ext) && !shouldExclude(fullPath)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

function main() {
  console.log('🧹 Starting console log removal...');
  
  const srcDir = path.join(process.cwd(), 'src');
  const pagesDir = path.join(process.cwd(), 'pages');
  const componentsDir = path.join(process.cwd(), 'components');
  
  const allFiles = [
    ...getAllFiles(srcDir),
    ...getAllFiles(pagesDir),
    ...getAllFiles(componentsDir)
  ];
  
  let processedCount = 0;
  let modifiedCount = 0;
  
  for (const file of allFiles) {
    processedCount++;
    if (processFile(file)) {
      modifiedCount++;
    }
  }
  
  console.log(`✅ Processed ${processedCount} files, modified ${modifiedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { removeConsoleLogs, processFile, getAllFiles };