#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting comprehensive syntax fixing...');

// Function to fix common syntax issues
function fixSyntaxIssues(content) {
  let fixed = content;
  
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

// Function to find and fix TypeScript/JavaScript files
function fixFilesInDirectory(dir) {
  const extensions = ['.ts', '.tsx', '.js', '.jsx'];
  let fixedCount = 0;
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            const fixed = fixSyntaxIssues(content);
            
            if (fixed !== content) {
              fs.writeFileSync(fullPath, fixed);
              console.log(`✅ Fixed syntax in: ${fullPath}`);
              fixedCount++;
            }
          } catch (error) {
            console.log(`❌ Error fixing ${fullPath}: ${error.message}`);
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  scanDirectory(dir);
  return fixedCount;
}

// Main execution
const fixedCount = fixFilesInDirectory('/workspace');
console.log(`🎉 Fixed syntax issues in ${fixedCount} files`);

// Generate report
const report = {
  timestamp: new Date().toISOString(),
  fixedFiles: fixedCount
};

fs.writeFileSync('syntax-fix-report.json', JSON.stringify(report, null, 2));
console.log('📊 Syntax fix report saved to: syntax-fix-report.json');