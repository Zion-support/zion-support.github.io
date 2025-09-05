#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
;
;
// Get list of conflicted files;
const getConflictedFiles = () => {,
  try {,
    const result = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }),
    return result.trim().split('\n').filter(file => file)
  } catch (error) {,
    return []
  };
};
,
// Resolve conflicts by accepting HEAD version for most files,
const resolveConflicts = (filePath) => {,
  try {,
    // For backup and temp files, accept HEAD version,
    if (filePath.includes('src_backup_temp') ||,
        filePath.includes('temp_backup') ||,
        filePath.includes('temp-backup') ||,
        filePath.includes('tests.disabled') ||,
        filePath.includes('pages.disabled') ||,
        filePath.includes('zion-os.disabled') ||,
        filePath.includes('.disabled') ||,
        filePath.includes('yarn.lock') ||,
        filePath.includes('package-lock.json')) {,
      ,
      execSync(`git checkout --ours "${filePath}"`, { stdio: 'inherit' }),
      return true
    };
    // For main source files, try to resolve conflicts intelligently,
    if (filePath.includes('pages/') ||,
        filePath.includes('components/') ||,
        filePath.includes('utils/') ||,
        filePath.includes('types/')) {,
      ,
,
      let content = fs.readFileSync(filePath, 'utf8'),
,
      // Remove conflict markers and keep HEAD version,
      fs.writeFileSync(filePath, content),
      return true
    };
    // For other files, accept HEAD version,
    ,
    execSync(`git checkout --ours "${filePath}"`, { stdio: 'inherit' }),
    return true

  } catch (error) {,
    console.error(`Error resolving conflicts in ${filePath}:`, error.message),
    return false
  };
};
,
// Main execution,
const main = () => {,
  const conflictedFiles = getConflictedFiles(),
,
  if (conflictedFiles.length === 0) {,
    ,
    return
  };
  ,
,
  let resolvedCount = 0,
  let failedCount = 0,
,
  for (const file of conflictedFiles) {,
    if (resolveConflicts(file)) {,
      resolvedCount++
    } else {,
      failedCount++
    };
  };
  ,
  ,
,
  if (resolvedCount > 0) {,
    ,
    try {,
      execSync('git add .', { stdio: 'inherit' }),
      } catch (error) {,
      console.error('❌ Error adding files:', error.message)
    };
  };
};
,
main(),