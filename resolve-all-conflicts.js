<<<<<<< HEAD
#!/usr/bin/env node
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Starting comprehensive merge conflict resolution...');

// Function to resolve conflicts in a file
function resolveConflictsInFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if no conflicts
    if (!content.includes('<<<<<<< HEAD') || !content.includes('=======') || !content.includes('>>>>>>>')) {
      return false;
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);

    // Strategy 1: Keep our changes (HEAD) for most files
    let resolvedContent = content
      .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1')
      .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');

    // Strategy 2: For specific file types, use different strategies
    if (filePath.includes('package.json') || filePath.includes('package-lock.json')) {
      // For package files, prefer the remote version (newer dependencies)
      resolvedContent = content
        .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$2');
    } else if (filePath.includes('.css') || filePath.includes('.scss')) {
      // For CSS files, merge both versions
      resolvedContent = content
        .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, (match, head, remote) => {
          // Remove duplicate rules and merge
          const headLines = head.split('\n').filter(line => line.trim());
          const remoteLines = remote.split('\n').filter(line => line.trim());
          const merged = [...new Set([...headLines, ...remoteLines])];
          return merged.join('\n');
        });
    } else if (filePath.includes('vite.config') || filePath.includes('tsconfig.json')) {
      // For config files, prefer our version but merge important parts
      resolvedContent = content
        .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
    }

    // Write resolved content
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') && content.includes('=======') && content.includes('>>>>>>>')) {
            conflictedFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory(dir);
  return conflictedFiles;
}

// Main resolution process
try {
  console.log('🔍 Scanning for conflicted files...');
  const conflictedFiles = findConflictedFiles('.');
  
  console.log(`📊 Found ${conflictedFiles.length} files with conflicts`);
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  for (const file of conflictedFiles) {
    if (resolveConflictsInFile(file)) {
      resolvedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`✅ Successfully resolved conflicts in ${resolvedCount} files`);
  if (errorCount > 0) {
    console.log(`⚠️  Failed to resolve ${errorCount} files`);
  }
  
  // Check if there are still conflicts
  const remainingConflicts = findConflictedFiles('.');
  if (remainingConflicts.length === 0) {
    console.log('🎉 All conflicts resolved! Attempting to commit...');
    
    try {
      execSync('git add .', { stdio: 'inherit' });
      execSync('git commit -m "Resolve all merge conflicts automatically"', { stdio: 'inherit' });
      console.log('✅ Successfully committed resolved conflicts');
    } catch (error) {
      console.log('⚠️  Conflicts resolved but commit failed:', error.message);
    }
  } else {
    console.log(`⚠️  Still have ${remainingConflicts.length} files with conflicts`);
    console.log('Remaining conflicted files:', remainingConflicts.slice(0, 10));
  }
  
} catch (error) {
  console.error('❌ Error during conflict resolution:', error.message);
  process.exit(1);
}
=======
const fs = require('fs');
const path = require('path');
=======
#!/usr/bin/env node;
const fs = require('fs');'
const path = require('path');'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const { execSync } = require('child_process');
'
console.log('🚀 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file;
function resolveMergeConflicts(filePath) {}
    try {}
        console.log(`🔧 Processing: ${filePath}`);'
        let content = fs.readFileSync(filePath, 'utf8');
        
<<<<<<< HEAD
        // Check if file has merge conflicts
<<<<<<< HEAD
=======
        if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
            return false; // No conflicts to resolve
        }
        
        // Strategy: Keep HEAD version (current branch) for most conflicts
        // Remove merge conflict markers and keep the HEAD version
<<<<<<< HEAD
        
        // Remove any remaining conflict markers
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        content = content.replace(/        content = content.replace(/=======\n/g, '');
=======
        content = content.replace(/        content = content.replace(/\n/g, '');
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
        content = content.replace(/        content = content.replace(/\n/g, '');
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        content = content.replace(/        
=======
=======
        content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n?/g, '$1');
        
        // Remove any remaining conflict markers
        content = content.replace(/<<<<<<< [^\n]+\n?/g, '');
        content = content.replace(/=======\n?/g, '');
        content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
        
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        // Clean up any duplicate content
=======
        // Check if file has merge conflicts'
        if (!content.includes('
        
        // Remove any remaining conflict markers;
        content = content.replace(/
        
        // Clean up any duplicate content'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        content = content.replace(/\n\n\n+/g, '\n\n');
        
        // Write the resolved content back'
        fs.writeFileSync(filePath, content, 'utf8');`
        console.log(`✅ Resolved conflicts in: ${filePath}`);
        return true;
    } catch (error) {}`
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return false;
    }
}

// Function to get all files with merge conflicts;
function getConflictFiles() {}
    try {'
        const result = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });'
        return result.trim().split('\n').filter(file => file.length > 0);
<<<<<<< HEAD
    } catch (error) {}
        // If git command fails, use grep to find files with conflict markers'
        const { execSync } = require('child_process');
<<<<<<< HEAD
=======
    } catch (error) {
        // If git command fails, use grep to find files with conflict markers
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        try {
<<<<<<< HEAD
=======
            const result = execSync('grep -l "<<<<<<<" -r . --exclude-dir=node_modules --exclude-dir=.git', { encoding: 'utf8' });
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
            return result.trim().split('\n').filter(file => file.length > 0);
        } catch (e) {
=======
        try {'
            const result = execSync('grep -l "" . -r --include="*.js" --include="*.ts" --include="*.tsx" --include="*.json" --include="*.cjs" --include="*.mjs"', { encoding: 'utf8' });'
            return result.trim().split('\n').filter(file => file.length > 0);
        } catch (e) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            return [];
        }
    }
}

// Main execution;
async function main() {}
    try {'
        // Check if we're in a git repository'
        execSync('git rev-parse --git-dir', { stdio: 'pipe' });'
        console.log('✅ Git repository detected');
    } catch (error) {'
        console.error('❌ Not in a git repository');
        process.exit(1);
    }

    // Get current branch'
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();`
    console.log(`📍 Current branch: ${currentBranch}`);

    // Fetch latest changes'
    console.log('📥 Fetching latest changes...');'
    execSync('git fetch --all --prune');

    // Get files with conflicts;
    const conflictFiles = getConflictFiles();
    
    if (conflictFiles.length === 0) {'
        console.log('✅ No merge conflicts found');
        return;
    }
`
    console.log(`🔍 Found ${conflictFiles.length} files with merge conflicts`);

    // Resolve conflicts in each file;
    let resolvedCount = 0;
    for (const file of conflictFiles) {}
        if (fs.existsSync(file)) {}
            if (resolveMergeConflicts(file)) {}
                resolvedCount++;
            }
        }
    }
`
    console.log(`✅ Resolved conflicts in ${resolvedCount} files`);

    // Add resolved files to staging;
    if (resolvedCount > 0) {'
        console.log('📝 Adding resolved files to staging...');'
        execSync('git add .');
        
        // Commit the resolved conflicts'
        console.log('💾 Committing resolved conflicts...');'"
        execSync('git commit -m "fix: resolve merge conflicts automatically"');
    }

    // Try to merge with main'
    console.log('🔄 Attempting to merge with main...');
    try {'
        execSync('git merge origin/main --no-edit');'
        console.log('✅ Successfully merged with main');
    } catch (error) {'
        console.log('⚠️  Merge failed, but conflicts have been resolved');'
        console.log('You may need to manually review and complete the merge');
    }
'
    console.log('🎉 Merge conflict resolution completed!');
}

<<<<<<< HEAD
main().catch(console.error);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
main().catch(console.error);'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
