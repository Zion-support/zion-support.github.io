#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Console Error Fixer Automation Started');

// Function to scan for console errors in code
function scanForConsoleErrors() {
  console.log('📋 Scanning for console errors...');
  
  try {
    // Scan common directories for console statements
    const directories = ['src', 'pages', 'components', 'utils'];
    let consoleErrors = [];
    
    directories.forEach(dir => {
      const dirPath = path.join(process.cwd(), dir);
      if (fs.existsSync(dirPath)) {
        scanDirectory(dirPath, consoleErrors);
      }
    });
    
    console.log(`🔍 Found ${consoleErrors.length} potential console statements`);
    return consoleErrors;
  } catch (error) {
    console.error('❌ Error scanning for console statements:', error.message);
    return [];
  }
}

function scanDirectory(dirPath, consoleErrors) {
  try {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath, consoleErrors);
      } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
        scanFile(filePath, consoleErrors);
      }
    });
  } catch (error) {
    console.error(`❌ Error scanning directory ${dirPath}:`, error.message);
  }
}

function scanFile(filePath, consoleErrors) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      if (line.includes('console.log') || line.includes('console.error') || line.includes('console.warn')) {
        consoleErrors.push({
          file: filePath,
          line: index + 1,
          content: line.trim()
        });
      }
    });
  } catch (error) {
    console.error(`❌ Error scanning file ${filePath}:`, error.message);
  }
}

// Function to fix console errors (remove or replace with proper logging)
function fixConsoleErrors(consoleErrors) {
  console.log('🔧 Fixing console errors...');
  
  let fixedCount = 0;
  
  consoleErrors.forEach(error => {
    try {
      const content = fs.readFileSync(error.file, 'utf8');
      const lines = content.split('\n');
      
      // Replace console statements with proper logging or remove them
      if (lines[error.line - 1].includes('console.log')) {
        lines[error.line - 1] = lines[error.line - 1].replace(/console\.log\([^)]*\);?/g, '// console.log removed for production');
        fixedCount++;
      }
      
      const newContent = lines.join('\n');
      fs.writeFileSync(error.file, newContent, 'utf8');
      
    } catch (error) {
      console.error(`❌ Error fixing file ${error.file}:`, error.message);
    }
  });
  
  console.log(`✅ Fixed ${fixedCount} console statements`);
  return fixedCount;
}

// Main execution
function main() {
  console.log('🔄 Starting console error fixer automation...');
  
  const consoleErrors = scanForConsoleErrors();
  
  if (consoleErrors.length > 0) {
    const fixedCount = fixConsoleErrors(consoleErrors);
    console.log(`🎯 Automation completed: ${fixedCount} console statements fixed`);
  } else {
    console.log('✅ No console statements found to fix');
  }
  
  console.log('🏁 Console Error Fixer Automation Completed');
}

// Run the automation
main();

// Keep the process running for PM2
setInterval(() => {
  console.log('💓 Console Error Fixer heartbeat...');
}, 900000); // 15 minutes