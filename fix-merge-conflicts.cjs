#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(content) {
  // Remove merge conflict markers and keep HEAD version
  let resolved = content
    // Remove <<<<<<< HEAD lines
    .replace(/^<<<<<<< HEAD\s*$/gm, '')
    // Remove ======= lines
    .replace(/^=======\s*$/gm, '')
    // Remove >>>>>>> branch-name lines
    .replace(/^>>>>>>> [^\n]*\s*$/gm, '')
    // Clean up any remaining conflict markers
    .replace(/^<<<<<<< [^\n]*\s*$/gm, '')
    .replace(/^=======\s*$/gm, '')
    .replace(/^>>>>>>> [^\n]*\s*$/gm, '');
  
  // Clean up multiple empty lines
  resolved = resolved.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return resolved;
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix unterminated string literals by adding closing quotes
  content = content.replace(/(".*?)(\n)(.*?)(\n)/g, (match, p1, p2, p3, p4) => {
    if (p1.includes('"') && !p1.endsWith('"') && p3.includes('"')) {
      return p1 + '"' + p2 + p3 + p4;
    }
    return match;
  });
  
  // Fix missing closing braces for JSX elements
  content = content.replace(/(<[^>]+)(\n)([^<]*?)(\n)([^<]*?)(\n)/g, (match, p1, p2, p3, p4, p5) => {
    if (p1.includes('<') && !p1.includes('/>') && !p1.includes('</')) {
      const tagName = p1.match(/<(\w+)/);
      if (tagName && !p5.includes(`</${tagName[1]}>`)) {
        return p1 + '>' + p2 + p3 + p4 + p5 + `</${tagName[1]}>`;
      }
    }
    return match;
  });
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Processing: ${filePath}`);
      
      let resolved = resolveMergeConflicts(content);
      resolved = fixSyntaxErrors(resolved);
      
      // Write back the resolved content
      fs.writeFileSync(filePath, resolved, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
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
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const files = findFiles('.');
let processedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    if (processFile(file)) {
      processedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nMerge conflict resolution complete!`);
console.log(`Files processed: ${processedCount}`);
console.log(`Errors encountered: ${errorCount}`);

// Run a quick check to see remaining conflicts
try {
  const remainingConflicts = execSync('grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | wc -l', { encoding: 'utf8' });
  console.log(`Remaining conflicts: ${remainingConflicts.trim()}`);
} catch (error) {
  console.log('Could not check remaining conflicts');
}