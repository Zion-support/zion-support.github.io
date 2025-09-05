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

function shouldExcludeFile(filePath) {
  return EXCLUDE_PATTERNS.some(pattern => {
    if (pattern.includes('*')) {
      return filePath.includes(pattern.replace('*', ''));
    }
    return filePath.includes(pattern);
  });
}

function removeConsoleLogs(content) {
  // Remove console.log statements
  let modifiedContent = content.replace(/console\.log\([^)]*\);?\s*/g, '');
  
  // Remove console.warn statements
  modifiedContent = modifiedContent.replace(/console\.warn\([^)]*\);?\s*/g, '');
  
  // Remove console.error statements
  modifiedContent = modifiedContent.replace(/console\.error\([^)]*\);?\s*/g, '');
  
  return modifiedContent;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD
    const modifiedContent = removeConsoleLogs(content);
    
    if (content !== modifiedContent) {
      fs.writeFileSync(filePath, modifiedContent, 'utf8');
=======
    const newContent = removeConsoleLogs(content);
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
>>>>>>> 9cdb1ba2fcd2f1643402e1f0bd1771f058239fee
      console.log(`Processed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
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
<<<<<<< HEAD
      if (!shouldExcludeFile(fullPath)) {
        files.push(...getAllFiles(fullPath, extensions));
      }
    } else if (stat.isFile()) {
      const ext = path.extname(item);
      if (extensions.includes(ext) && !shouldExcludeFile(fullPath)) {
=======
      files.push(...getAllFiles(fullPath, extensions));
    } else if (stat.isFile()) {
      const ext = path.extname(item);
      if (extensions.includes(ext)) {
>>>>>>> 9cdb1ba2fcd2f1643402e1f0bd1771f058239fee
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

function main() {
  console.log('Starting console.log removal...');
  
  const srcDir = path.join(process.cwd(), 'src');
  const pagesDir = path.join(process.cwd(), 'pages');
<<<<<<< HEAD
  
  const allFiles = [
    ...getAllFiles(srcDir),
    ...getAllFiles(pagesDir)
  ];
  
  console.log(`Found ${allFiles.length} files to process`);
  
  allFiles.forEach(processFile);
  
  console.log('Console.log removal completed!');
}

main();
=======
  const componentsDir = path.join(process.cwd(), 'components');
  
  const allFiles = [
    ...getAllFiles(srcDir),
    ...getAllFiles(pagesDir),
    ...getAllFiles(componentsDir)
  ];
  
  let processedCount = 0;
  
  for (const file of allFiles) {
    if (!shouldExcludeFile(file)) {
      processFile(file);
      processedCount++;
    }
  }
  
  console.log(`Processed ${processedCount} files`);
  console.log('Console.log removal completed!');
}

if (require.main === module) {
  main();
}

module.exports = { removeConsoleLogs, processFile, getAllFiles };
>>>>>>> 9cdb1ba2fcd2f1643402e1f0bd1771f058239fee
