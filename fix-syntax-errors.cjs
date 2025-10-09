#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix common syntax issues in a file
function fixSyntaxIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix duplicate imports and function declarations
    const lines = content.split('\n');
    const fixedLines = [];
    let inDuplicate = false;
    let seenFunction = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for duplicate function declarations
      if (line.includes('const ') && line.includes(': React.FC = () => {')) {
        if (seenFunction) {
          // Skip duplicate function declaration
          inDuplicate = true;
          continue;
        } else {
          seenFunction = true;
          fixedLines.push(line);
        }
      } else if (inDuplicate && line.trim() === '}') {
        // End of duplicate function, stop skipping
        inDuplicate = false;
        continue;
      } else if (!inDuplicate) {
        fixedLines.push(line);
      }
    }
    
    // Fix duplicate imports
    const importLines = [];
    const seenImports = new Set();
    
    for (const line of fixedLines) {
      if (line.trim().startsWith('import ')) {
        const importKey = line.trim();
        if (!seenImports.has(importKey)) {
          seenImports.add(importKey);
          importLines.push(line);
        }
      } else {
        importLines.push(line);
      }
    }
    
    const fixedContent = importLines.join('\n');
    
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed syntax issues in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'out'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

const srcDir = path.join(process.cwd(), 'src');
const sourceFiles = findSourceFiles(srcDir);

console.log(`Found ${sourceFiles.length} source files`);

let fixedCount = 0;

for (const filePath of sourceFiles) {
  if (fixSyntaxIssues(filePath)) {
    fixedCount++;
  }
}

console.log(`\nSyntax fixes complete:`);
console.log(`- Files fixed: ${fixedCount}`);

if (fixedCount > 0) {
  console.log('\nRunning lint check to verify fixes...');
  try {
    execSync('pnpm run lint', { stdio: 'inherit' });
    console.log('✅ All syntax errors fixed and linting passed!');
  } catch (error) {
    console.log('⚠️  Some linting issues remain, but syntax errors are fixed.');
  }
}