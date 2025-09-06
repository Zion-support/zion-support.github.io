#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all remaining syntax errors...');

// Function to find all TypeScript/JavaScript files with syntax errors
function findFilesWithSyntaxErrors() {
  const files = [];
  const extensions = ['.ts', '.tsx', '.js', '.jsx'];
  
  function scanDirectory(dir) {
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            // Check for common syntax errors
            if (content.includes('}\n}') || content.includes('}\n\n}') || 
                content.includes('import[^}]*}\n}') || content.includes('export[^}]*}\n}')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  scanDirectory('/workspace');
  return files;
}

// Function to fix syntax issues in a file
function fixSyntaxIssues(content) {
  let fixed = content;
  
  // Remove extra closing braces after imports
  fixed = fixed.replace(/^import[^}]*\}\n\}/gm, (match) => {
    return match.replace(/\n\}$/, '');
  });
  
  // Remove extra closing braces after exports
  fixed = fixed.replace(/^export[^}]*\}\n\}/gm, (match) => {
    return match.replace(/\n\}$/, '');
  });
  
  // Fix missing closing braces before export statements
  fixed = fixed.replace(/(\s+)(export\s+function)/g, '\n}\n\n$2');
  fixed = fixed.replace(/(\s+)(export\s+const)/g, '\n}\n\n$2');
  fixed = fixed.replace(/(\s+)(export\s+default)/g, '\n}\n\n$2');
  
  // Fix missing closing braces before return statements
  fixed = fixed.replace(/(\s+)(return\s+res\.status\([^)]+\)\.json\([^)]+\);\s*)(\s+)(\})/g, '$1$2\n$4');
  
  // Fix missing closing braces in general
  fixed = fixed.replace(/(\s+)(return\s+res\.status\([^)]+\)\.json\([^)]+\);\s*)(\s*)(export|function|const|let|var)/g, '$1$2\n}\n\n$4');
  
  // Fix missing closing braces for try-catch blocks
  fixed = fixed.replace(/(\s+)(catch\s*\([^)]+\)\s*\{[^}]*\})(\s*)(export|function|const|let|var)/g, '$1$2\n}\n\n$4');
  
  // Fix missing closing braces for if statements
  fixed = fixed.replace(/(\s+)(if\s*\([^)]+\)\s*\{[^}]*\})(\s*)(export|function|const|let|var)/g, '$1$2\n}\n\n$4');
  
  // Clean up extra newlines
  fixed = fixed.replace(/\n{3,}/g, '\n\n');
  
  // Fix missing closing braces at end of files
  if (fixed.trim().endsWith('}') && !fixed.trim().endsWith('}\n')) {
    fixed = fixed.trim() + '\n';
  }
  
  return fixed;
}

// Main execution
const filesToFix = findFilesWithSyntaxErrors();
console.log(`Found ${filesToFix.length} files with potential syntax errors`);

let fixedCount = 0;
for (const file of filesToFix) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixed = fixSyntaxIssues(content);
    
    if (fixed !== content) {
      fs.writeFileSync(file, fixed);
      console.log(`✅ Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${file}: ${error.message}`);
  }
}

console.log(`🎉 Fixed syntax issues in ${fixedCount} files`);