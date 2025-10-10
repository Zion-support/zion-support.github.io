#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const config = {
  // Directories to process
  directories: ['app', 'src'],
  // File extensions to process
  extensions: ['ts', 'tsx', 'js', 'jsx'],
  // Console methods to remove
  consoleMethods: ['log', 'warn', 'info', 'debug'],
  // Keep console.error in production
  keepMethods: ['error'],
  // Backup original files
  createBackup: false
};

function removeConsoleStatements(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove console.log, console.warn, console.info, console.debug
    config.consoleMethods.forEach(method => {
      const regex = new RegExp(`console\\.${method}\\s*\\([^)]*\\);?\\s*`, 'g');
      const newContent = content.replace(regex, '');
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Remove multi-line console statements
    config.consoleMethods.forEach(method => {
      const regex = new RegExp(`console\\.${method}\\s*\\([\\s\\S]*?\\);?\\s*`, 'g');
      const newContent = content.replace(regex, '');
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Cleaned console statements in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dir) {
  const pattern = `${dir}/**/*.{${config.extensions.join(',')}}`;
  const files = glob.sync(pattern, { ignore: ['**/node_modules/**', '**/dist/**', '**/build/**'] });
  
  let processedCount = 0;
  
  files.forEach(file => {
    if (removeConsoleStatements(file)) {
      processedCount++;
    }
  });
  
  return processedCount;
}

function main() {
  console.log('🧹 Starting console.log cleanup...');
  
  let totalProcessed = 0;
  
  config.directories.forEach(dir => {
    if (fs.existsSync(dir)) {
      console.log(`Processing directory: ${dir}`);
      const processed = processDirectory(dir);
      totalProcessed += processed;
      console.log(`Processed ${processed} files in ${dir}`);
    } else {
      console.log(`Directory ${dir} not found, skipping...`);
    }
  });
  
  console.log(`\n✨ Console cleanup complete! Processed ${totalProcessed} files.`);
  
  if (totalProcessed > 0) {
    console.log('\n📝 Note: Console.error statements were preserved for debugging.');
    console.log('💡 Consider running this script before production builds.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { removeConsoleStatements, processDirectory };