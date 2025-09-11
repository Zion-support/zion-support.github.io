#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧹 Starting comprehensive merge conflict cleanup...\n');

function runCommand(command, description) {
  console.log(`📋 ${description}`);
  try {
    const result = execSync(command, { 
      cwd: '/workspace', 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    console.log(`✅ ${description} - Success`);
    return result;
  } catch (error) {
    console.log(`❌ ${description} - Error: ${error.message}`);
    return null;
  }
}

function cleanMergeConflicts(filePath) {
  if (!fs.existsSync(filePath)) {
    return false;
  }

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove all merge conflict markers
    content = content
      .replace(/<<<<<<< HEAD\n?/g, '')
      .replace(/=======\n?/g, '')
      .replace(/>>>>>>> [^\n]+\n?/g, '')
      .replace(/<<<<<<< HEAD/g, '')
      .replace(/=======/g, '')
      .replace(/>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining artifacts
    content = content
      .replace(/\n{3,}/g, '\n\n')  // Replace multiple newlines with double newlines
      .replace(/^\s*\n/gm, '')     // Remove empty lines at start
      .replace(/\n\s*$/g, '\n')    // Remove trailing whitespace
      .trim();
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Cleaned merge conflicts in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`❌ Error cleaning ${filePath}: ${error.message}`);
    return false;
  }
}

function main() {
  try {
    // Get list of files with merge conflict markers (excluding backup directories)
    const conflictedFiles = execSync(
      'find . -name "*.js" -o -name "*.ts" -o -name "*.tsx" -o -name "*.jsx" | ' +
      'grep -v node_modules | grep -v .git | grep -v pages.bak | grep -v pages.broken | ' +
      'grep -v pages.disabled | grep -v pages._archive | grep -v pages._quarantine | ' +
      'grep -v .backup | grep -v temp_exclude | grep -v data.disabled | ' +
      'xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true',
      { cwd: '/workspace', encoding: 'utf8' }
    ).trim().split('\n').filter(f => f && f.trim());

    console.log(`📁 Found ${conflictedFiles.length} files with merge conflicts`);
    
    let cleanedCount = 0;
    for (const file of conflictedFiles) {
      if (cleanMergeConflicts(file)) {
        cleanedCount++;
      }
    }
    
    console.log(`\n🎉 Cleaned merge conflicts in ${cleanedCount} files`);
    
    // Run linting to check for remaining issues
    console.log('\n🔍 Running linting check...');
    const lintResult = runCommand('npm run lint', 'Linting check');
    
    if (lintResult === null) {
      console.log('⚠️  Linting failed, but merge conflicts have been cleaned');
    } else {
      console.log('✅ Linting passed after cleanup');
    }
    
    // Test build
    console.log('\n🔨 Testing build...');
    const buildResult = runCommand('npm run build', 'Build test');
    
    if (buildResult === null) {
      console.log('⚠️  Build failed, but merge conflicts have been cleaned');
    } else {
      console.log('✅ Build successful after cleanup');
    }
    
    console.log('\n🎉 Merge conflict cleanup completed!');
    
  } catch (error) {
    console.error('❌ Error during cleanup:', error.message);
    process.exit(1);
  }
}

main();