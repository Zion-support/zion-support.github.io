#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix specific JSX syntax errors
function fixSpecificJsxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD
    let modified = false;
    
    // Fix specific patterns that are causing errors
    const fixes = [
      // Fix misplaced )} that should be </div>
      {
        pattern: /(\s*)\)\}\s*$/gm,
        replacement: (match, spaces) => {
          return spaces + '</div>';
        }
      },
      
      // Fix unclosed JSX fragments
      {
        pattern: /<>\s*$/gm,
        replacement: '<>'
      },
      
      // Fix missing closing tags for sections
      {
        pattern: /<section([^>]*)>\s*$/gm,
        replacement: (match, attrs) => {
          return match;
        }
      },
      
      // Remove orphaned closing fragments
      {
        pattern: /^\s*<\/>\s*$/gm,
        replacement: ''
      },
      
      // Fix JSX expressions that are not properly closed
      {
        pattern: /(\{[^}]*\})\s*$/gm,
        replacement: (match, expr) => {
          return match;
        }
      }
    ];
    
    // Apply fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed specific JSX errors in ${filePath}`);
=======
    let originalContent = content;
    
    // Fix 1: Fix malformed JSX elements like "Solutions;" and incomplete tags
    content = content.replace(/Solutions;\s*<\/\s*$/gm, 'Solutions</span>');
    content = content.replace(/;\s*<\/\s*$/gm, '</span>');
    
    // Fix 2: Fix incomplete JSX tags
    content = content.replace(/<\s*$/gm, '');
    content = content.replace(/\/\s*$/gm, '');
    
    // Fix 3: Fix malformed className attributes
    content = content.replace(/className=\s*{([^}]+)}\s*>/g, 'className={$1}>');
    content = content.replace(/className=\s*"([^"]+)"\s*>/g, 'className="$1">');
    
    // Fix 4: Fix missing closing tags for common patterns
    const lines = content.split('\n');
    const fixedLines = [];
    let inString = false;
    let stringChar = '';
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Track string state
      for (let j = 0; j < line.length; j++) {
        const char = line[j];
        if ((char === '"' || char === "'") && (j === 0 || line[j-1] !== '\\')) {
          if (!inString) {
            inString = true;
            stringChar = char;
          } else if (char === stringChar) {
            inString = false;
            stringChar = '';
          }
        }
      }
      
      // Fix common JSX issues
      if (!inString) {
        // Fix incomplete JSX elements
        line = line.replace(/<\s*$/gm, '');
        line = line.replace(/\/\s*$/gm, '');
        
        // Fix malformed closing tags
        line = line.replace(/<\/\s*$/gm, '');
        
        // Fix missing semicolons in JSX expressions
        line = line.replace(/(\w+)\s*\n\s*<\/\w+>/g, '$1;\n  </');
        
        // Fix incomplete className attributes
        line = line.replace(/className=\s*$/gm, 'className=""');
      }
      
      fixedLines.push(line);
    }
    
    content = fixedLines.join('\n');
    
    // Fix 5: Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed specific JSX errors in ${filePath}`);
>>>>>>> origin/main
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

<<<<<<< HEAD
// Function to find all TypeScript/JSX files
function findTsxFiles(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        searchDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Main execution
console.log('Starting specific JSX error fixes...');

const files = findTsxFiles('./app');
console.log(`Found ${files.length} TypeScript/JSX files`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    if (fixSpecificJsxErrors(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nSpecific JSX error fixes complete:`);
console.log(`  - Files modified: ${fixedCount}`);
console.log(`  - Errors: ${errorCount}`);
=======
// Function to find files with specific JSX errors
function findFilesWithSpecificErrors() {
  try {
    const { execSync } = require('child_process');
    const result = execSync('find . -name "*.tsx" -o -name "*.jsx" | grep -v node_modules | head -20', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return result.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    return [];
  }
}

// Main execution
console.log('🔧 Starting specific JSX error fixes...\n');

const filesToFix = findFilesWithSpecificErrors();
console.log(`Found ${filesToFix.length} JSX files to check:\n`);

let fixedCount = 0;
let totalFiles = filesToFix.length;

filesToFix.forEach((filePath, index) => {
  console.log(`[${index + 1}/${totalFiles}] Processing ${filePath}`);
  
  if (fixSpecificJsxErrors(filePath)) {
    fixedCount++;
  }
});

console.log(`\n✅ Specific JSX fixes complete!`);
console.log(`📊 Fixed errors in ${fixedCount} out of ${totalFiles} files`);
>>>>>>> origin/main
