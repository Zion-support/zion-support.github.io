#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ANSI color codes for better output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function resolveMergeConflict(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixed = false;

    // Strategy 1: Remove all merge conflict markers and keep the incoming changes
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      // Remove merge conflict markers and keep incoming changes (from our branch)
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\s*\n?/g, '');
      content = content.replace(/>>>>>>> [^\n]*\n?/g, '');
      
      // Clean up any remaining conflict markers
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]*\n?/g, '');
      
      fixed = true;
    }

    // Strategy 2: Fix common syntax issues that might have been introduced
    // Remove any remaining malformed content
    content = content.replace(/<<<<<<< HEAD[\s\S]*/g, '');
    content = content.replace(/=======[\s\S]*/g, '');
    content = content.replace(/>>>>>>> [^\n]*[\s\S]*/g, '');

    // Strategy 3: Clean up any empty lines or malformed imports
    content = content.replace(/^\s*import\s+.*?from\s+['"][^'"]*['"]\s*;\s*$/gm, '');
    content = content.replace(/^\s*export\s+.*?from\s+['"][^'"]*['"]\s*;\s*$/gm, '');
    
    // Remove duplicate empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (fixed && content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }

    return false;
  } catch (error) {
    log(`Error processing ${filePath}: ${error.message}`, 'red');
    return false;
  }
}

function findConflictedFiles() {
  try {
    const result = execSync('git status --porcelain | grep "^UU" | awk "{print $2}"', { encoding: 'utf8' });
    return result.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    log('Error finding conflicted files', 'red');
    return [];
  }
}

function main() {
  log('🚀 Starting comprehensive merge conflict resolution...', 'cyan');
  
  const conflictedFiles = findConflictedFiles();
  log(`Found ${conflictedFiles.length} files with merge conflicts`, 'yellow');
  
  if (conflictedFiles.length === 0) {
    log('✅ No merge conflicts found!', 'green');
    return;
  }

  let resolvedCount = 0;
  let errorCount = 0;

  for (const filePath of conflictedFiles) {
    try {
      if (resolveMergeConflict(filePath)) {
        resolvedCount++;
        log(`✅ Resolved: ${filePath}`, 'green');
      } else {
        log(`⚠️  No changes needed: ${filePath}`, 'yellow');
      }
    } catch (error) {
      errorCount++;
      log(`❌ Error processing ${filePath}: ${error.message}`, 'red');
    }
  }

  log('\n📊 Resolution Summary:', 'cyan');
  log(`Total conflicted files: ${conflictedFiles.length}`, 'blue');
  log(`Successfully resolved: ${resolvedCount}`, 'green');
  log(`Errors encountered: ${errorCount}`, 'red');

  if (resolvedCount > 0) {
    log('\n🎯 Next steps:', 'cyan');
    log('1. Review the resolved files', 'blue');
    log('2. Run: git add .', 'blue');
    log('3. Run: git commit -m "Resolve merge conflicts"', 'blue');
    log('4. Continue with your workflow', 'blue');
  }
}

if (require.main === module) {
  main();
}

module.exports = { resolveMergeConflict, findConflictedFiles };