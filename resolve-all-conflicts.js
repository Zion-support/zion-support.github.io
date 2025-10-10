#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

console.log('🔧 Resolving all merge conflicts...');

function resolveConflicts(filePath) {
  try {
    const content = readFileSync(filePath, 'utf8');
    
    // Check if file has conflict markers
      return false; // No conflicts
    }

    console.log(`🔧 Resolving conflicts in ${filePath}...`);
    
        skipUntilNextMarker = true;
        continue;
      }
      
        continue;
      }
      
      if (!skipUntilNextMarker) {
        resolvedLines.push(line);
      }
    }
    
    // Write the resolved content
    writeFileSync(filePath, resolvedLines.join('\n'));
    console.log(`✅ Resolved conflicts in ${filePath}`);
    return true;
    
  } catch (error) {
    console.log(`❌ Error resolving ${filePath}: ${error.message}`);
    return false;
  }
}

try {
  // Get list of files with conflicts
  const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
  
  if (!conflictFiles.trim()) {
    console.log('✅ No merge conflicts found');
    process.exit(0);
  }

  console.log('📋 Files with conflicts:');
  console.log(conflictFiles);

  const files = conflictFiles.trim().split('\n');
  let resolvedCount = 0;

  for (const file of files) {
    if (file.trim()) {
      if (resolveConflicts(file.trim())) {
        resolvedCount++;
      }
    }
  }

  console.log(`\n📊 Resolved conflicts in ${resolvedCount} files`);

  // Add all resolved files
  execSync('git add .', { stdio: 'inherit' });

  // Commit the resolution
  execSync('git commit -m "feat: Resolve all merge conflicts and integrate latest enhancements"', { stdio: 'inherit' });

  console.log('✅ All conflicts resolved and committed!');

} catch (error) {
  console.error('❌ Error resolving conflicts:', error.message);
  process.exit(1);
}