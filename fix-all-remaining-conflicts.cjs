#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all remaining merge conflicts...\n');

function log(message, type = 'info') {
  const timestamp = new Date().toISOString();
  const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : '✅';
  console.log(`${prefix} [${timestamp}] ${message}`);
}

function fixMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('      return false;
    }

    log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove all merge conflict markers and keep the first version (HEAD)
    let fixedContent = content
      .replace(/      .replace(/=======\n[\s\S]*?      .replace(/      .replace(/    
    // Clean up any remaining conflict markers
    fixedContent = fixedContent
      .replace(/      .replace(/=======\n/g, '')
      .replace(/    
    fs.writeFileSync(filePath, fixedContent);
    log(`✅ Fixed: ${filePath}`);
    return true;
  } catch (error) {
    log(`❌ Error fixing ${filePath}: ${error.message}`, 'error');
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
        files.push(...findFilesWithConflicts(fullPath));
      } else if (stat.isFile()) {
        const ext = path.extname(fullPath);
        if (['.js', '.jsx', '.ts', '.tsx', '.json', '.cjs', '.mjs'].includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    });
  } catch (error) {
    // Skip directories that can't be read
  }
  
  return files;
}

function main() {
  try {
    log('Searching for files with merge conflicts...');
    
    const conflictedFiles = findFilesWithConflicts('.');
    log(`Found ${conflictedFiles.length} files with merge conflicts`);
    
    let fixedCount = 0;
    
    conflictedFiles.forEach(file => {
      if (fixMergeConflicts(file)) {
        fixedCount++;
      }
    });
    
    log(`Fixed ${fixedCount} files with merge conflicts`);
    
    // Try to build again
    log('Attempting build after conflict resolution...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      log('Build successful!');
    } catch (error) {
      log('Build still failing, checking for more conflicts...', 'warning');
      
      // Find remaining conflicts
      const remainingConflicts = findFilesWithConflicts('.');
      if (remainingConflicts.length > 0) {
        log(`Found ${remainingConflicts.length} remaining conflicts:`, 'warning');
        remainingConflicts.forEach(file => {
          log(`  ${file}`, 'warning');
        });
      }
    }
    
  } catch (error) {
    log(`Error: ${error.message}`, 'error');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixMergeConflicts, findFilesWithConflicts };