#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
<<<<<<< HEAD
=======
console.log('🔧 Starting comprehensive merge conflict resolution...');

console.log('🔧 Starting comprehensive merge conflict resolution...');
console.log('🔧 Resolving all merge conflicts...');
main


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
console.log('🔧 Resolving all merge conflicts...');
console.log('🔧 Starting comprehensive merge conflict resolution...');
console.log('🔧 Starting comprehensive merge conflict resolution...');
console.log('🔧 Starting comprehensive merge conflict resolution...');
console.log('🔧 Resolving all merge conflicts...');
>>>>>>> main
ursor/integrate-build-improve-and-re-verify-7ffc
ursor/automate-test-improve-and-merge-code-646c

// Get list of files with merge conflicts
const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
const conflictFiles = gitStatus.split('\n')
  .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
  .map(line => line.split(' ').pop())
  .filter(file => file && file !== '');

console.log(`Found ${conflictFiles.length} files with merge conflicts from git status`);

// Also find files with conflict markers
const findConflicts = execSync('find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" | xargs grep -l "" 2>/dev/null || true', { encoding: 'utf8' });
const conflictMarkerFiles = findConflicts.split('\n').filter(file => file && file !== '');

console.log(`Found ${conflictMarkerFiles.length} files with conflict markers`);

const allConflictFiles = [...new Set([...conflictFiles, ...conflictMarkerFiles])];
console.log(`Total files to process: ${allConflictFiles.length}`);

// Function to resolve conflicts by choosing incoming changes
function resolveConflicts(filePath) {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    console.log(`Resolving conflicts in ${filePath}...`);
    
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace merge conflict markers with incoming changes
    content = content.replace(/[\s\S]*?([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/[\s\S]*?[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Write the resolved content back
    fs.writeFileSync(filePath, content);
    
    console.log(`✅ Resolved conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    if (!fs.existsSync(filePath)) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
      console.log(`⚠️  File not found: ${filePath}`);

      console.log(`⚠️  File not found: ${filePath}`);
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
      console.log(`⚠️  File not found: ${filePath}`);
      console.log(`⚠️  File not found: ${filePath}`);
>>>>>>> main
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD

    // Check if file has merge conflicts
    if (!content.includes('') && !content.includes('') && !content.includes('>>>>>>>')) {
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

      if (line.includes('')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      }

      if (line.includes('')) {
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
    
    // Check if file has merge conflicts
    if (!content.includes('') && !content.includes('') && !content.includes('>>>>>>>')) {
      console.log(`✅ No conflicts in: ${filePath}`);
      return true;
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);

    // Strategy 1: Keep our changes (HEAD) for most files
    let resolvedContent = content;
    
    // For specific file types, use different strategies
    if (filePath.includes('package.json') || filePath.includes('package-lock.json')) {
      // For package files, prefer the newer version
      resolvedContent = content.replace(/[\s\S]*?[\s\S]*?>>>>>>> [^\n]+/g, (match) => {
        const parts = match.split('');
        if (parts.length === 2) {
          const headPart = parts[0].replace('', '').trim();
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
      resolvedContent = content.replace(/[\s\S]*?[\s\S]*?>>>>>>> [^\n]+/g, (match) => {
        const parts = match.split('');
        if (parts.length === 2) {
          const headPart = parts[0].replace('', '').trim();
          const incomingPart = parts[1].replace(/>>>>>>> [^\n]+/, '').trim();
          
          // Prefer the version with more content (our enhanced version)
          return headPart.length >= incomingPart.length ? headPart : incomingPart;
        }
        return headPart;
      });
    } else {
      // For other files, use a simple strategy
      resolvedContent = content.replace(/[\s\S]*?[\s\S]*?>>>>>>> [^\n]+/g, (match) => {
        const parts = match.split('');
        if (parts.length === 2) {
          const headPart = parts[0].replace('', '').trim();
          return headPart;
        }
        return match;
      });
    }

    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent.replace(/[\s\S]*?[\s\S]*?>>>>>>> [^\n]+/g, '');
    resolvedContent = resolvedContent.replace(/[\s\S]*?>>>>>>> [^\n]+/g, '');
    resolvedContent = resolvedContent.replace(/[\s\S]*?>>>>>>> [^\n]+/g, '');

    // Write the resolved content
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);

    // Check if file has merge conflicts
    if (!content.includes('') && !content.includes('') && !content.includes('>>>>>>>')) {
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

      if (line.includes('')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      }

      if (line.includes('')) {
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
ursor/integrate-build-improve-and-re-verify-7ffc
ursor/automate-test-improve-and-merge-code-646c
    if (!content.includes('
        const parts = match.split('
=======
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

    
    // Check if file has merge conflicts
        const parts = match.split('=======');
        if (parts.length === 2) {
        const parts = match.split('=======');
        if (parts.length === 2) {
        const parts = match.split('=======');
        if (parts.length === 2) {

    // Write the resolved content
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);

    // Check if file has merge conflicts
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
main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    return false;
  }
}

// Process all conflict files
let resolvedCount = 0;
let errorCount = 0;

for (const file of allConflictFiles) {
  if (fs.existsSync(file)) {
    if (resolveConflicts(file)) {
// Function to find all files with merge conflicts
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
function findConflictedFiles() {
  try {
    const result = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
<<<<<<< HEAD
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

function findFilesWithConflicts() {
  try {
    const result = execSync('git status --porcelain', { encoding: 'utf8' });
    const files = result.split('\n')
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
      .map(line => line.substring(3).trim())
      .filter(file => file.length > 0);
    
    return files;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
function findConflictedFiles() {
  try {
    const result = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
<<<<<<< HEAD

main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> main
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

  } catch (error) {
    console.error('Error finding conflicted files:', error.message);
    return [];
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Main execution
try {
  const conflictedFiles = findFilesWithConflicts();
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
ursor/integrate-build-improve-and-re-verify-7ffc
      resolvedCount++;
    } else {
      errorCount++;
    }
  }
}

console.log(`\n📊 Conflict Resolution Summary:`);
console.log(`✅ Successfully resolved: ${resolvedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

// Add all resolved files to git
try {
  execSync('git add .', { stdio: 'inherit' });
  console.log('✅ Added all resolved files to git');
} catch (error) {
  console.error('❌ Error adding files to git:', error.message);
}

// Commit the merge
try {
  execSync('git commit -m "Resolve all merge conflicts automatically"', { stdio: 'inherit' });
  console.log('✅ Committed merge resolution');
} catch (error) {
  console.error('❌ Error committing merge:', error.message);
}

console.log('🎉 Merge conflict resolution completed!');
  console.error('❌ Error during conflict resolution:', error.message);
  process.exit(1);
}
>>>>>>> main
ursor/integrate-build-improve-and-re-verify-7ffc
ursor/automate-test-improve-and-merge-code-646c
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

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
main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
