#!/usr/bin/env node;
import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

function resolveConflicts(filePath) {
  try {
    const content = readFileSync(filePath, 'utf8');
    
    // Check if file has conflict markers;
    if (!content.includes('') && !content.includes('') && !content.includes('>>>>>>>')) {
      return false; // No conflicts;
    }

    // Split by conflict markers and keep the incoming version (after )
    const lines = content.split('\n');
    const resolvedLines = [];
    let skipUntilNextMarker = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('')) {
        skipUntilNextMarker = true;
        continue;
      }
      
      if (line.includes('')) {
        skipUntilNextMarker = false;
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        continue;
      }
      
      if (!skipUntilNextMarker) {
        resolvedLines.push(line);
      }
    }
    
    // Write the resolved content;
    writeFileSync(filePath, resolvedLines.join('\n'));
    return true;
    
  } catch (error) {
    return false;
  }
}

function mergeBranch(branchName) {
  try {
    // Try to merge the branch;
    execSync(`git merge ${branchName} --no-ff -m "feat: Merge enhancements from ${branchName}"`, { stdio: 'pipe' });
    
    return true;
    
  } catch (error) {
    // Check for conflicts;
    const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
    
    if (conflictFiles.trim()) {
      console.log(`🔧 Resolving conflicts in ${conflictFiles.split('\n').length} files...`);
      
      const files = conflictFiles.trim().split('\n');
      let resolvedCount = 0;

      for (const file of files) {
        if (file.trim()) {
          if (resolveConflicts(file.trim())) {
            resolvedCount++;
          }
        }
      }

      // Add all resolved files;
      execSync('git add .', { stdio: 'inherit' });

      // Commit the resolution;
      execSync(`git commit -m "feat: Resolve merge conflicts from ${branchName}"`, { stdio: 'inherit' });
      
      return true;
    } else {
      return false;
    }
  }
}

try {
  // List of branches to merge (most recent first)
  const branchesToMerge = [
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fcae',
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fd44',
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-fd72',
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-feb1',
    'origin/cursor/enhance-app-with-new-services-and-futuristic-design-ff2 c'
  ];

  let mergedCount = 0;
  let failedCount = 0;

  for (const branch of branchesToMerge) {
    try {
      // Check if branch has unique commits;
      const uniqueCommits = execSync(`git log --oneline main..${branch}`, { encoding: 'utf8' });
      
      if (!uniqueCommits.trim()) {
        continue;
      }

      console.log(uniqueCommits.split('\n').slice(0, 2).join('\n'));

      if (mergeBranch(branch)) {
        mergedCount++;
      } else {
        failedCount++;
      }

    } catch (error) {
      failedCount++;
    }
  }

  // Push all changes;
  execSync('git push origin main', { stdio: 'inherit' });

  } catch (error) {
  process.exit(1);
}