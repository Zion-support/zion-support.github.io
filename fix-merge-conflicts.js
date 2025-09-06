#!/usr/bin/env node const fs = require('fs'); const path = require('path'); function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); const cleanedLines = []; const seenImports = new Set(); for (let i = 0; i < lines.length; i++) { const line = lines[i].trim(); if (line === '' || line.startsWith('import') && seenImports.has(line)) { continue} if (line.startsWith('import')) { seenImports.add(line)} const cleanedLine = line .replace(/,,+/g,',') .replace(/;;+/g,';') .replace(/\{\s*,/g,'{') .replace(/,\s*\}/g,'}') .replace(/\(\s*,/g,'(') .replace(/,\s*\)/g,')') .replace(/\s+/g,' ') .trim(); if (cleanedLine) { cleanedLines.push(cleanedLine)} } const finalContent = cleanedLines.join('\n'); fs.writeFileSync(filePath,finalContent,'utf8'); } catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } function findFilesWithConflicts(dir) { const files = []; function traverse(currentDir) { const items = fs.readdirSync(currentDir); for (const item of items) { const fullPath = path.join(currentDir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') { traverse(fullPath)} else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) { const content = fs.readFileSync(fullPath,'utf8');
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const resolvedContent = resolveMergeConflicts(content);
    
    if (content !== resolvedContent) {
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      fixedCount += fixFilesInDirectory(fullPath);
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
      if (fixMergeConflicts(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting merge conflict fix...');
const srcPath = path.join(__dirname, 'src');
const fixedCount = fixFilesInDirectory(srcPath);
console.log(`Fixed ${fixedCount} files with merge conflicts.`);

// Also fix specific problematic files
const problematicFiles = [
  'src/pages/About.tsx',
  'src/pages/Home.tsx',
  'src/pages/Index.tsx'
];

for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    fixMergeConflicts(file);
  }
}

console.log('Merge conflict fix completed.');
