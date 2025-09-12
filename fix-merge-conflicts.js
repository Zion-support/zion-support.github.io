#!/usr/bin/env node const fs = require('fs'); const path = require('path'); function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); const cleanedLines = []; const seenImports = new Set(); for (let i = 0; i < lines.length; i++) { const line = lines[i].trim(); if (line === '' || line.startsWith('import') && seenImports.has(line)) { continue} if (line.startsWith('import')) { seenImports.add(line)} const cleanedLine = line .replace(/,,+/g,',') .replace(/;;+/g,';') .replace(/\{\s*,/g,'{') .replace(/,\s*\}/g,'}') .replace(/\(\s*,/g,'(') .replace(/,\s*\)/g,')') .replace(/\s+/g,' ') .trim(); if (cleanedLine) { cleanedLines.push(cleanedLine)} } const finalContent = cleanedLines.join('\n'); fs.writeFileSync(filePath,finalContent,'utf8'); } catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } function findFilesWithConflicts(dir) { const files = []; function traverse(currentDir) { const items = fs.readdirSync(currentDir); for (const item of items) { const fullPath = path.join(currentDir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') { traverse(fullPath)} else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) { const content = fs.readFileSync(fullPath,'utf8');
#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
<<<<<<< HEAD
// Function to recursively find all files with merge conflict markers
function findFilesWithMergeConflicts(dir, fileList = []) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      try {
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          // Skip node_modules, .git, and other common directories
          if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
            findFilesWithMergeConflicts(filePath, fileList);
          }
        } else if (stat.isFile()) {
          // Check if file contains merge conflict markers
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('                content.includes('') || 
                content.includes('')) {
              fileList.push(filePath);
            }
          } catch (error) {
            // Skip files that can't be read
            console.log(`Skipping file: ${filePath} (${error.message})`);
          }
        }
      } catch (error) {
        // Skip files/directories that can't be accessed (broken symlinks, etc.)
        console.log(`Skipping path: ${filePath} (${error.message})`);
=======
// Function to find all files with merge conflicts;
function findMergeConflictFiles(dir) {
  const files = [];

  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath)} else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {;
            files.push(fullPath);
}
        } catch (error) {;
          // Skip files that can't be read;
}
>>>>>>> origin/automation-fixes
      }
    });
    
    // Handle conflicts without file paths
    const simpleConflictRegex = /
    
    resolvedContent = resolvedContent.replace(simpleConflictRegex, (match, headContent, incomingContent) => {
      const head = headContent.trim();
      const incoming = incomingContent.trim();
      
      if (incoming.length > head.length * 0.8) {
        return incoming + '\n';
      } else {
        return head + '\n';
      }
    });
    
    // Write resolved content back to file
    fs.writeFileSync(filePath, resolvedContent);
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictFiles(dir) {
  const conflictFiles = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.json'))) {
          // Check if file has merge conflict markers
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {
              conflictFiles.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  } catch (error) {
    console.log(`Skipping directory: ${dir} (${error.message})`);
  }
<<<<<<< HEAD
  return fileList;
}
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/
    // Clean up any remaining artifacts
    content = content.replace(/\n{3,}/g, '\n\n'); // Replace multiple newlines with double newlines
    content = content.replace(/^\s*\n/gm, ''); // Remove empty lines at start of lines
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}: ${error.message}`);
    return false;
  }
<<<<<<< HEAD
}
=======
  traverse(dir);
  return files}
// Find and fix files with merge conflicts
const conflictedFiles = findFilesWithConflicts('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
for (const file of conflictedFiles) {
  fixMergeConflicts(file)}
console.log('Merge conflict resolution complete!');
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); content = content.replace(/[\s\S]*?[\s\S]*?}
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
// Main execution
console.log('Finding files with merge conflict markers...');
const filesWithConflicts = findFilesWithMergeConflicts('.');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
=======

  searchDirectory(dir);
  return files}

// Function to fix merge conflicts by keeping HEAD version;
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n    ;
    // Clean up any remaining conflict markers;
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    ;
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}

// Function to fix common syntax errors;
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix common import issues;
    if (content.includes('import {') && content.includes('} from') && !content.includes(';')) {
      content = content.replace(/import {([^}]+)} from ['"]([^'"]+)['"]/g, 'import { $1 } from "$2";');
      fixed = true}
    // Fix missing semicolons after imports;
    content = content.replace(/import ([^;]+)(?<!;)\n/g, '$1;\n');

    // Fix malformed JSX;
    content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*\/>/g, '<$1 />');

    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true}
    return false} catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false}
}

// Main function;
function main() {
  console.log('🔍 Finding files with merge conflicts...');
  const conflictFiles = findMergeConflictFiles('.');

  console.log(`Found ${conflictFiles.length} files with merge conflicts`);

  let fixedCount = 0;
  let errorCount = 0;

  for (const file of conflictFiles) {
    console.log(`\n📝 Processing: ${file}`);

    if (fixMergeConflicts(file)) {
      fixedCount++;

      // Also try to fix syntax errors;
      fixSyntaxErrors(file)} else {
      errorCount++}
  }
  console.log(`\n✅ Summary:`);
  console.log(`- Files processed: ${conflictFiles.length}`);
  console.log(`- Successfully fixed: ${fixedCount}`);
  console.log(`- Errors: ${errorCount}`);
  if (fixedCount > 0) {;
    console.log('\n🎉 Merge conflicts fixed! You can now commit the changes.');
>>>>>>> origin/automation-fixes
}
console.log(`Fixed merge conflicts in ${fixedCount} files`);
// Run TypeScript check to see remaining errors
console.log('\nRunning TypeScript check...');
try {
  execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'inherit' });
  console.log('TypeScript check passed!');
} catch (error) {
  console.log('TypeScript check found some issues, but continuing...');
}
<<<<<<< HEAD
console.log('\nMerge conflict fixing complete!');
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
