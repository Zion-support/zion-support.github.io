#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting comprehensive conflict resolution...\n');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('') || !content.includes('') || !content.includes('>>>>>>>')) {
      return false;
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);

    // Strategy: Keep HEAD version (our changes) for most conflicts
    let resolvedContent = content;

    // Remove conflict markers and keep HEAD version
    resolvedContent = resolvedContent.replace(
      /\n([\s\S]*?)\n\n([\s\S]*?)\n      '$1'
    );

    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent.replace(/\n?/g, '');
    resolvedContent = resolvedContent.replace(/\n?/g, '');
    resolvedContent = resolvedContent.replace(/
    // Write resolved content
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, dist, build directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check if file has merge conflicts
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('') && content.includes('') && content.includes('>>>>>>>')) {
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

// Main execution
try {
  console.log('🔍 Scanning for conflicted files...');
  const conflictedFiles = findConflictedFiles('.');
  
  console.log(`📊 Found ${conflictedFiles.length} files with merge conflicts\n`);

  let resolvedCount = 0;
  let errorCount = 0;

  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    } else {
      errorCount++;
    }
  }

  console.log(`\n✅ Resolution complete!`);
  console.log(`📈 Files resolved: ${resolvedCount}`);
  console.log(`❌ Files with errors: ${errorCount}`);

  // Add all resolved files to git
  console.log('\n📝 Adding resolved files to git...');
  execSync('git add .', { stdio: 'inherit' });

  // Commit the resolved conflicts
  console.log('\n💾 Committing resolved conflicts...');
  execSync('git commit -m "Resolve all merge conflicts automatically - keep HEAD version"', { stdio: 'inherit' });

  console.log('\n🎉 All conflicts resolved and committed!');

} catch (error) {
  console.error('❌ Error during conflict resolution:', error.message);
  process.exit(1);
}