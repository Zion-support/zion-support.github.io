#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔧 Quick conflict resolver starting...');

// Function to remove all conflict markers from a file
function removeConflictMarkers(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove all merge conflict markers
    content = content.replace(/([\s\S]*?)
    content = content.replace(/([\s\S]*?)
    content = content.replace(/([\s\S]*?)(?=\n|$)/g, '$1');
    
    // Clean up any remaining markers
    content = content.replace(/[\s\S]*?
    content = content.replace(/[\s\S]*?
    
    // Clean up multiple newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Cleaned ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  try {
    console.log('🔍 Cleaning up conflict markers...');
    
    // List of files to clean
    const filesToClean = [
      'resolve-all-merge-conflicts.cjs',
      'resolve-merge-conflicts-final.cjs',
      'resolve-all-conflicts.cjs',
      'resolve-merge-conflicts.cjs',
      'pages/white-papers.tsx.disabled',
      'temp_exclude/scripts/test-runner.js',
      'temp_exclude/scripts/comprehensive-website-analyzer.js',
      'temp_exclude/scripts/comprehensive-link-checker.js',
      'temp_exclude/scripts/performance-optimizer.js'
    ];
    
    let cleanedCount = 0;
    
    for (const file of filesToClean) {
      if (fs.existsSync(file)) {
        if (removeConflictMarkers(file)) {
          cleanedCount++;
        }
      }
    }
    
    console.log(`\n✅ Cleaned ${cleanedCount} files`);
    
    // Try to add files to git
    try {
      execSync('git add .', { stdio: 'pipe' });
      console.log('✅ Added files to git');
    } catch (error) {
      console.log('⚠️ Could not add files to git:', error.message);
    }
    
    // Try to commit
    try {
      execSync('git commit -m "Resolve merge conflicts: clean up conflict markers"', { stdio: 'pipe' });
      console.log('✅ Committed changes');
    } catch (error) {
      console.log('⚠️ Could not commit:', error.message);
    }
    
  } catch (error) {
    console.error('Error during cleanup:', error.message);
  }
}

main();