#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting comprehensive error fixing...');

// Function to fix merge conflict markers
function fixMergeConflicts(content) {
  // Remove merge conflict markers
  content = content.replace(/
  content = content.replace(/
  content = content.replace(//g, '');
  return content;
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix missing semicolons after imports
  content = content.replace(/import\s+[^;]+,\s*$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix missing semicolons after export statements
  content = content.replace(/export\s+[^;]+,\s*$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix trailing commas in object literals
  content = content.replace(/,(\s*[}\]])/g, '$1');
  
  // Fix missing semicolons after variable declarations
  content = content.replace(/(const|let|var)\s+[^=]+=\s*[^;]+,\s*$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  return content;
}

// Function to remove unused imports
function removeUnusedImports(content, filePath) {
  // This is a simplified version - in practice, you'd need a proper AST parser
  // For now, we'll just clean up obvious unused imports
  const lines = content.split('\n');
  const cleanedLines = lines.filter(line => {
    // Remove empty lines with just commas
    if (line.trim() === ',') return false;
    // Remove lines that are just whitespace and commas
    if (line.trim().match(/^[\s]+$/)) return false;
    return true;
  });
  
  return cleanedLines.join('\n');
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    
    // Fix merge conflicts
    fixedContent = fixMergeConflicts(fixedContent);
    
    // Fix syntax errors
    fixedContent = fixSyntaxErrors(fixedContent);
    
    // Remove unused imports
    fixedContent = removeUnusedImports(fixedContent, filePath);
    
    // Only write if content changed
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
const files = findFiles(workspaceDir);

console.log(`📁 Found ${files.length} files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`\n🎉 Fixed ${fixedCount} files!`);

// Run linting to check remaining issues
console.log('\n🔍 Running linting check...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('✅ Linting passed!');
} catch (error) {
  console.log('⚠️  Some linting issues remain - check output above');
}

// Run type checking
console.log('\n🔍 Running type check...');
try {
  execSync('npm run type-check', { stdio: 'inherit' });
  console.log('✅ Type checking passed!');
} catch (error) {
  console.log('⚠️  Some type checking issues remain - check output above');
}

console.log('\n✨ Error fixing completed!');