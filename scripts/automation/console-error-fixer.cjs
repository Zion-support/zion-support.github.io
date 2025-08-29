#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Console Error Fixer Automation Started');

async function fixConsoleErrors() {
  try {
    console.log('📋 Scanning for console errors...');
    
    // Scan for console.log, console.error, etc. in source files
    const sourceDirs = ['src', 'pages', 'components', 'utils'];
    let consoleErrors = [];
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        const files = getAllFiles(dir);
        for (const file of files) {
          if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
            const content = fs.readFileSync(file, 'utf8');
            const consoleMatches = content.match(/console\.(log|error|warn|info|debug)/g);
            if (consoleMatches) {
              consoleErrors.push({
                file,
                matches: consoleMatches
              });
            }
          }
        }
      }
    }
    
    if (consoleErrors.length > 0) {
      console.log(`🔍 Found ${consoleErrors.length} files with console statements`);
      
      // Generate report
      const report = {
        timestamp: new Date().toISOString(),
        totalFiles: consoleErrors.length,
        files: consoleErrors
      };
      
      fs.writeFileSync('console-error-fixer-report.json', JSON.stringify(report, null, 2));
      console.log('📊 Report generated: console-error-fixer-report.json');
    } else {
      console.log('✅ No console statements found');
    }
    
  } catch (error) {
    console.error('❌ Error in console error fixer:', error);
  }
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  }
  
  return arrayOfFiles;
}

// Run the automation
fixConsoleErrors().then(() => {
  console.log('✅ Console Error Fixer Automation Completed');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Console Error Fixer Automation Failed:', error);
  process.exit(1);
});