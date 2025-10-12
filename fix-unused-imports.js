import fs from 'fs';
import path from 'path';
// Get list of files with linting errors;
function getFilesWithErrors() {
  try {
&1', { encoding: 'utf8' });
    const lines = output.split('\n');
    const files = new Set();
    
      if (line.includes('error') && line.includes('is defined but never used')) {
        const match = line.match(/^\/workspace\/([^:]+):/);
        if (match) {
          files.add(match[1]);
    });
    
    return Array.from(files);
  } catch (error) {
    console.log('Error getting files with errors:', error.message);
    return [];

// Fix unused imports in a file;
function fixUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    const usedImports = new Set();
    
    // First pass: collect all used imports by scanning the file;
    const fileContent = content.toLowerCase();
    
    // Check for common icon usage patterns;
    const iconPatterns = [
      'w-6 h-6', 'w-5 h-5', 'w-4 h-4', 'w-8 h-8', 'w-10 h-10',
      'className="', 'text-', 'bg-', 'hover:', 'focus:'
    ];
    
    // Check for JSX usage patterns;
    const jsxPatterns = [
      '
      '
      '
      '
      '
    ];
    
      // Skip import lines for now;
      if (line.trim().startsWith('import ')) {
        newLines.push(line);
        return;
      
      // Check if this line uses any imports;
      const lineLower = line.toLowerCase();
      let hasUsedImport = false;
      
      // Check for icon usage;
        if (lineLower.includes(pattern)) {
          hasUsedImport = true;
      });
      
      // Check for JSX usage;
        if (line.includes(pattern)) {
          hasUsedImport = true;
      });
      
      // Check for direct variable usage;
      if (line.includes('Helmet') || line.includes('Link') || line.includes('ArrowRight')) {
        hasUsedImport = true;
      
      if (hasUsedImport) {
        newLines.push(line);
      } else {
        newLines.push(line);
    });
    
    // Now process import lines and remove unused ones;
    const finalLines = [];
    let inImportBlock = false;
    let importLines = [];
    
      if (line.trim().startsWith('import ')) {
        if (!inImportBlock) {
          inImportBlock = true;
          importLines = [];
        importLines.push(line);
      } else {
        if (inImportBlock) {
          // Process accumulated import lines;
          const processedImports = processImportLines(importLines, newLines.join('\n'));
          finalLines.push(...processedImports);
          inImportBlock = false;
          importLines = [];
        finalLines.push(line);
    });
    
    // Handle any remaining import lines;
    if (inImportBlock) {
      const processedImports = processImportLines(importLines, newLines.join('\n'));
      finalLines.push(...processedImports);
    
    const newContent = finalLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed unused imports in ${filePath}`);
    
  } catch (error) {
    console.log(`Error fixing ${filePath}:`, error.message);

function processImportLines(importLines, fullContent) {
  const result = [];
  
    // Extract imported names;
    const importMatch = line.match(/import\s+.*?\s+from\s+['"]([^'"]+)['"]/);
    if (!importMatch) {
      result.push(line);
      return;
    
    const moduleName = importMatch[1];
    const isDefaultImport = line.includes('import React') || line.includes('import { Helmet }') || line.includes('import { Link }');
    
    if (isDefaultImport) {
      // For default imports, check if they're used;
      const isUsed = fullContent.includes('React') || fullContent.includes('Helmet') || fullContent.includes('Link');
      if (isUsed) {
        result.push(line);
    } else {
      // For named imports, extract the names and check usage;
      const namedImportsMatch = line.match(/import\s*{\s*([^}]+)\s*}/);
      if (namedImportsMatch) {
 imp.trim());
          const cleanName = imp.replace(/\s+as\s+\w+/, '').trim();
          return fullContent.includes(cleanName);
        });
        
 0) {
          if (usedImports.length === imports.length) {
            result.push(line);
          } else {
            const newLine = line.replace(/\{[^}]+\}/, `{ ${usedImports.join(', ')} }`);
            result.push(newLine);
      } else {
        result.push(line);
  });
  
  return result;

// Main execution;
const files = getFilesWithErrors();
console.log(`Found ${files.length} files with unused import errors`);

  const fullPath = path.join('/workspace', file);
  if (fs.existsSync(fullPath)) {
    fixUnusedImports(fullPath);
});

console.log('Finished fixing unused imports');
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to find all TypeScript/React files
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

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    
    // Read the file
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file has merge conflicts
    if (content.includes('      console.log(`Skipping file with merge conflicts: ${filePath}`);
      return;
    }
    
    // Use ESLint to fix unused imports
    try {
      execSync(`npx eslint "${filePath}" --fix --no-eslintrc --config eslint.config.js`, { 
        stdio: 'pipe',
        cwd: process.cwd()
      });
      console.log(`Fixed: ${filePath}`);
    } catch (error) {
      // If ESLint can't fix it, try manual approach
      console.log(`ESLint couldn't fix ${filePath}, trying manual approach...`);
      
      // Simple regex to remove unused imports (basic approach)
      const lines = content.split('\n');
      const newLines = [];
      let inImportBlock = false;
      let importStart = -1;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check if this is an import line
        if (line.trim().startsWith('import ') && line.includes(' from ')) {
          inImportBlock = true;
          importStart = i;
          newLines.push(line);
        } else if (inImportBlock && (line.trim() === '' || line.trim().startsWith('//') || line.trim().startsWith('/*'))) {
          newLines.push(line);
        } else if (inImportBlock && !line.trim().startsWith('import ')) {
          inImportBlock = false;
          newLines.push(line);
        } else {
          newLines.push(line);
        }
      }
      
      const newContent = newLines.join('\n');
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        console.log(`Manually fixed: ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting to fix unused imports...');

const appDir = path.join(process.cwd(), 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript/React files`);

for (const file of files) {
  removeUnusedImports(file);
}

console.log('Finished fixing unused imports!');
