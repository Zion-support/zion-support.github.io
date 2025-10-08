const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to remove console statements from a file
function removeConsoleStatements(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove console.log, console.warn, console.error, console.info, console.debug
    const consoleRegex = /console\.(log|warn|error|info|debug)\s*\([^)]*\)\s*;?/g;
    const originalContent = content;
    content = content.replace(consoleRegex, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned console statements from: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to process all TypeScript and JavaScript files
function processFiles() {
  const patterns = [
    'app/**/*.ts',
    'app/**/*.tsx',
    'app/**/*.js',
    'app/**/*.jsx',
    'components/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.js',
    'components/**/*.jsx'
  ];
  
  let totalFiles = 0;
  let cleanedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      totalFiles++;
      if (removeConsoleStatements(file)) {
        cleanedFiles++;
      }
    });
  });
  
  console.log(`\nProcessed ${totalFiles} files, cleaned ${cleanedFiles} files`);
}

// Run the script
if (require.main === module) {
  processFiles();
}

module.exports = { removeConsoleStatements, processFiles };