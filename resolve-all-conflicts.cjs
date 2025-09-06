#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
console.log('🔧 Starting comprehensive merge conflict resolution...');
=======
console.log('🔧 Resolving all merge conflicts...');
>>>>>>> main

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
<<<<<<< HEAD
      console.log(`⚠️  File not found: ${filePath}`);
=======
>>>>>>> main
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      console.log(`✅ No conflicts in: ${filePath}`);
      return true;
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);

    // Strategy 1: Keep our changes (HEAD) for most files
    let resolvedContent = content;
    
    // For specific file types, use different strategies
    if (filePath.includes('package.json') || filePath.includes('package-lock.json')) {
      // For package files, prefer the newer version
      resolvedContent = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, (match) => {
        const parts = match.split('=======');
        if (parts.length === 2) {
          const headPart = parts[0].replace('<<<<<<< HEAD', '').trim();
          const incomingPart = parts[1].replace(/>>>>>>> [^\n]+/, '').trim();
          
          // For package.json, prefer the version with more dependencies
          if (filePath.includes('package.json')) {
            const headDeps = (headPart.match(/"dependencies"/g) || []).length;
            const incomingDeps = (incomingPart.match(/"dependencies"/g) || []).length;
            return headDeps >= incomingDeps ? headPart : incomingPart;
          }
          
          return headPart; // Default to HEAD
        }
        return headPart;
      });
    } else if (filePath.includes('.tsx') || filePath.includes('.ts') || filePath.includes('.jsx') || filePath.includes('.js')) {
      // For code files, prefer our enhanced version
      resolvedContent = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, (match) => {
        const parts = match.split('=======');
        if (parts.length === 2) {
          const headPart = parts[0].replace('<<<<<<< HEAD', '').trim();
          const incomingPart = parts[1].replace(/>>>>>>> [^\n]+/, '').trim();
          
          // Prefer the version with more content (our enhanced version)
          return headPart.length >= incomingPart.length ? headPart : incomingPart;
        }
        return headPart;
      });
    } else {
      // For other files, use a simple strategy
      resolvedContent = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, (match) => {
        const parts = match.split('=======');
        if (parts.length === 2) {
          const headPart = parts[0].replace('<<<<<<< HEAD', '').trim();
          return headPart;
        }
        return match;
      });
    }

    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    resolvedContent = resolvedContent.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    resolvedContent = resolvedContent.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');

    // Write the resolved content
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
=======

    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false;
    }

    console.log(`Resolving conflicts in: ${filePath}`);

    // Split by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      }

      if (line.includes('=======')) {
        conflictType = 'separator';
        continue;
      }

      if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }

      if (!inConflict) {
        resolvedLines.push(line);
      } else if (conflictType === 'head') {
        // Keep the HEAD version (our changes)
        resolvedLines.push(line);
      }
      // Skip the other branch content
    }

    // Write the resolved content
    fs.writeFileSync(filePath, resolvedLines.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error resolving ${filePath}:`, error.message);
>>>>>>> main
    return false;
  }
}

// Function to find all files with merge conflicts
<<<<<<< HEAD
function findConflictedFiles() {
  try {
    const result = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
=======
function findFilesWithConflicts() {
  try {
    const result = execSync('git status --porcelain', { encoding: 'utf8' });
    const files = result.split('\n')
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
      .map(line => line.substring(3).trim())
      .filter(file => file.length > 0);
    
    return files;
>>>>>>> main
  } catch (error) {
    console.error('Error finding conflicted files:', error.message);
    return [];
  }
}

<<<<<<< HEAD
// Main resolution process
function main() {
  console.log('🔍 Finding files with merge conflicts...');
  const conflictedFiles = findConflictedFiles();
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }

  console.log(`📋 Found ${conflictedFiles.length} files with conflicts:`);
  conflictedFiles.forEach(file => console.log(`   - ${file}`));

  console.log('\n🔧 Resolving conflicts...');
  let resolvedCount = 0;
  let failedCount = 0;

  conflictedFiles.forEach(file => {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    } else {
      failedCount++;
    }
  });

  console.log(`\n📊 Resolution Summary:`);
  console.log(`   ✅ Successfully resolved: ${resolvedCount}`);
  console.log(`   ❌ Failed to resolve: ${failedCount}`);

  if (failedCount === 0) {
    console.log('\n🎉 All merge conflicts resolved!');
    console.log('📝 Next steps:');
    console.log('   1. Review the resolved files');
    console.log('   2. Run: git add .');
    console.log('   3. Run: git commit -m "Resolve merge conflicts"');
    console.log('   4. Run: git push origin main');
  } else {
    console.log('\n⚠️  Some conflicts could not be automatically resolved.');
    console.log('Please manually review and resolve the remaining conflicts.');
  }
}

// Run the resolution
main();
=======
// Main execution
try {
  const conflictedFiles = findFilesWithConflicts();
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }

  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);

  // Add all resolved files
  if (resolvedCount > 0) {
    console.log('Adding resolved files to git...');
    execSync('git add .', { stdio: 'inherit' });
    
    console.log('Committing merge resolution...');
    execSync('git commit -m "Resolve merge conflicts automatically"', { stdio: 'inherit' });
  }

  console.log('✅ All merge conflicts resolved and committed');

} catch (error) {
  console.error('❌ Error during conflict resolution:', error.message);
  process.exit(1);
}
>>>>>>> main
