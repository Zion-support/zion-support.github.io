#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(content) {
  // Remove merge conflict markers and keep HEAD version
  let resolved = content
    // Handle three-way merge conflicts: <<<<<<< HEAD ... ======= ... >>>>>>> branch
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
    // Handle two-way merge conflicts: <<<<<<< HEAD ... >>>>>>> branch
    .replace(/<<<<<<< HEAD\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
    // Clean up any remaining conflict markers
    .replace(/=======\n/g, '')
    .replace(/>>>>>>> [^\n]+\n/g, '')
    .replace(/<<<<<<< [^\n]+\n/g, '');
  
  return resolved;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Processing: ${filePath}`);
      const resolved = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolved, 'utf8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return result.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    console.error('Error finding files:', error.message);
    return [];
  }
}

// Main execution
function main() {
  console.log('Starting merge conflict resolution...');
  
  const filesWithConflicts = findFilesWithConflicts();
  
  if (filesWithConflicts.length === 0) {
    console.log('No files with merge conflicts found.');
    return;
  }
  
  console.log(`Found ${filesWithConflicts.length} files with merge conflicts:`);
  filesWithConflicts.forEach(file => console.log(`  - ${file}`));
  
  let processedCount = 0;
  let errorCount = 0;
  
  filesWithConflicts.forEach(file => {
    if (processFile(file)) {
      processedCount++;
    } else {
      errorCount++;
    }
  });
  
  console.log(`\nResolution complete:`);
  console.log(`  - Files processed: ${processedCount}`);
  console.log(`  - Errors: ${errorCount}`);
  
  if (processedCount > 0) {
    console.log('\nRunning lint check to verify fixes...');
    try {
      execSync('pnpm run lint 2>&1 | head -20', { stdio: 'inherit' });
    } catch (error) {
      console.log('Lint check completed with some remaining issues.');
    }
  }
}

if (require.main === module) {
  main();
}

module.exports = { resolveMergeConflicts, processFile };