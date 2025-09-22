#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
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
      .replace(/\n([\s\S]*?)\n

    // Strategy 2: For specific file types, use different strategies
    if (filePath.includes('package.json') || filePath.includes('package-lock.json')) {
      // For package files, prefer the remote version (newer dependencies)
      resolvedContent = content
        .replace(/\n([\s\S]*?)\n
    } else if (filePath.includes('.css') || filePath.includes('.scss')) {
      // For CSS files, merge both versions
      resolvedContent = content
        .replace(/\n([\s\S]*?)\n
          // Remove duplicate rules and merge
          const headLines = head.split('\n').filter(line => line.trim());
          const remoteLines = remote.split('\n').filter(line => line.trim());
          const merged = [...new Set([...headLines, ...remoteLines])];
          return merged.join('\n');
        });
    } else if (filePath.includes('vite.config') || filePath.includes('tsconfig.json')) {
      // For config files, prefer our version but merge important parts
      resolvedContent = content
        .replace(/\n([\s\S]*?)\n
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
          if (content.includes('') && content.includes('
const { execSync } = require('child_process');
'
console.log('🚀 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file;
function resolveMergeConflicts(filePath) {}
    try {}
        console.log(`🔧 Processing: ${filePath}`);'
        let content = fs.readFileSync(filePath, 'utf8');

        // Check if file has merge conflicts
            return false; // No conflicts to resolve
        }
        // Strategy: Keep HEAD version (current branch) for most conflicts
        // Remove merge conflict markers and keep the HEAD version
        content = content.replace(/\n([\s\S]*?)\n([\s\S]*?)[^\n]+\n?/g, '$1');
        // Remove any remaining conflict markers
        content = content.replace(/        content = content.replace(/
        content = content.replace(/        
        content = content.replace(/\n([\s\S]*?)

        // Remove any remaining conflict markers
        content = content.replace(/content = content.replace(/

        // Clean up any duplicate content
        // Check if file has merge conflicts'
        if (!content.includes('

        // Remove any remaining conflict markers;
        content = content.replace(/

        // Clean up any duplicate content'
        content = content.replace(/\n\n\n+/g, '\n\n');

        // Write the resolved content back'
        fs.writeFileSync(filePath, content, 'utf8');`
        console.log(`✅ Resolved conflicts in: ${filePath}`);
        return true;
    } catch (error) {}`
        content = content.replace(/[^\n]+\n?/g, '');
        content = content.replace(/\n?/g, '');
        content = content.replace(/[^\n]+\n?/g, '');
        // Clean up any duplicate content
        // Check if file has merge conflicts;
        if (!content.includes('            return false; // No conflicts to resolve;
            return false; // No conflicts to resolve;
        )
        // Strategy: Keep HEAD version (current branch) for most conflicts;
        // Remove merge conflict markers and keep the HEAD version;
        content = content.replace(/        
        // Remove any remaining conflict markers;)
        content = content.replace(/        content = content.replace(/\n/g, );

        // Remove any remaining conflict markers;
        // Clean up any duplicate content;)
pr-12325
        content = content.replace(/\n\n\n+/g, '\n\n');
        // Write the resolved content back;
        fs.writeFileSync(filePath, content, 'utf8');`;
        console.log(`✅ Resolved conflicts in: ${filePath}`);
        return true;
    } catch (error) {`;
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return false;

// Find all files with conflicts
function findConflicts(dir) {
    const conflicts = [];
    function scan(currentDir) {
        try {
            const items = fs.readdirSync(currentDir);
            for (const item of items) {
                const itemPath = path.join(currentDir, item);
                const stat = fs.statSync(itemPath);
                if (stat.isDirectory()) {
                    // Skip certain directories
                    if (!['node_modules', '.git', 'dist', 'build', '.next', 'temp_exclude', 'backup-problematic-files'].includes(item)) {
                        scan(itemPath);
                    }
                } else if (stat.isFile()) {
                    // Check for conflicts
                    try {
                        const content = fs.readFileSync(itemPath, 'utf8');
                        if (content.includes('')) {
                            conflicts.push(itemPath);
                        }
                    } catch (error) {
                        // Skip files that can't be read
                    }
                }
            }
        } catch (error) {
            // Skip directories that can't be read
        }
    }
    scan(dir);
    return conflicts;
}

// Main execution
console.log('🔍 Scanning for merge conflicts...');
const conflictFiles = findConflicts('/workspace');

console.log(`📊 Found ${conflictFiles.length} files with conflicts`);

let cleanedCount = 0;
const startTime = Date.now();

// Process files in batches to avoid memory issues
const batchSize = 50;
for (let i = 0; i < conflictFiles.length; i += batchSize) {
    const batch = conflictFiles.slice(i, i + batchSize);
    console.log(`\n📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(conflictFiles.length / batchSize)}`);
    for (const file of batch) {
        if (cleanFile(file)) {
            cleanedCount++;
        }
    }
}

// Function to get all files with merge conflicts;
function getConflictFiles() {}
    try {'
        const result = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });'
        return result.trim().split('\n').filter(file => file.length > 0);
} catch (error) {}
        // If git command fails, use grep to find files with conflict markers'
        const { execSync } = require('child_process');
try {
            const result = execSync('grep -l "<<<<<<<" -r . --exclude-dir=node_modules --exclude-dir=.git', { encoding: 'utf8' });
            return result.trim().split('\n').filter(file => file.length > 0);
        // If git command fails, use grep to find files with conflict markers;
  // TODO: Implement
            const result = execSync('grep -l "            return result.trim().split('\n').filter(file => file.length > 0);
pr-12325
        } catch (e) {
            return [];

// Main execution;
async function main() {}
    try {'
        // Check if we're in a git repository'
        execSync('git rev-parse --git-dir', { stdio: 'pipe' });'
        console.log('✅ Git repository detected');
    } catch (error) {'
        console.error('❌ Not in a git repository');
        process.exit(1);

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

main().catch(console.error);
