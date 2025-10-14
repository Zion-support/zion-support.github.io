#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix unterminated string literals in import statements
function fixUnterminatedStrings(content) {
  // Fix unterminated import strings
  content = content.replace(/import\s+.*?from\s+"([^"]*)$/gm, (match, p1) => {
    return match.replace(p1, p1 + '"');
  });
  
  // Fix unterminated strings in general
  content = content.replace(/"([^"]*)$/gm, (match, p1) => {
    if (match.includes('import') || match.includes('from')) {
      return match.replace(p1, p1 + '"');
    }
    return match;
  });
  
  return content;
}

// Function to remove merge conflict markers
function removeMergeConflicts(content) {
  return content
    .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> origin\/main/g, '')
    .replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> origin\/main/g, '')
    .replace(/=======[\s\S]*?>>>>>>> origin\/main/g, '')
    .replace(/<<<<<<< HEAD[\s\S]*?=======/g, '')
    .replace(/=======/g, '')
    .replace(/>>>>>>> origin\/main/g, '');
}

// Function to fix common JSX syntax errors
function fixJSXSyntax(content) {
  // Fix missing closing quotes in JSX attributes
  content = content.replace(/className="([^"]*)$/gm, (match, p1) => {
    return match.replace(p1, p1 + '"');
  });
  
  // Fix missing closing tags
  content = content.replace(/<(\w+)([^>]*?)>$/gm, (match, tag, attrs) => {
    if (!match.includes('</') && !match.includes('/>') && !match.includes('className=')) {
      return match + `</${tag}>`;
    }
    return match;
  });
  
  // Fix malformed function declarations
  content = content.replace(/export default function Page\(\) \{;/g, 'export default function Page() {');
  
  return content;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = removeMergeConflicts(content);
    content = fixUnterminatedStrings(content);
    content = fixJSXSyntax(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(findFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return files;
}

// Main execution
function main() {
  console.log('Starting comprehensive syntax fix...');
  
  const appDir = path.join(__dirname, 'app');
  const files = findFiles(appDir);
  
  console.log(`Found ${files.length} files to check`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
  
  // Run type check to see remaining errors
  try {
    console.log('\nRunning type check...');
    execSync('npm run type-check', { stdio: 'inherit' });
  } catch (error) {
    console.log('Type check completed with errors (expected)');
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, findFiles, removeMergeConflicts, fixUnterminatedStrings, fixJSXSyntax };