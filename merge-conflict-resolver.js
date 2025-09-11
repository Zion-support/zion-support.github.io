const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('')) {
      console.log(`Resolving conflicts in ${filePath}...`);
      
      // Simple conflict resolution - keep the first version for most cases
      let resolved = content
        .replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n        .replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n      
      fs.writeFileSync(filePath, resolved);
      console.log(`✅ Resolved conflicts in ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
  function searchDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        searchDirectory(filePath);
      } else if (stat.isFile() && (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          if (content.includes('')) {
            conflictedFiles.push(filePath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory(dir);
  return conflictedFiles;
}

// Main execution
try {
  console.log('🔍 Scanning for merge conflicts...');
  const conflictedFiles = findConflictedFiles('.');
  
  console.log(`Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  
  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`\n✅ Resolved conflicts in ${resolvedCount} files`);
  
  // Try to commit the changes
  try {
    console.log('\n📝 Committing resolved changes...');
    execSync('git add .', { stdio: 'inherit' });
    execSync('git commit -m "Resolve merge conflicts across codebase"', { stdio: 'inherit' });
    console.log('✅ Changes committed successfully');
  } catch (error) {
    console.log('⚠️  Could not commit changes automatically. Please run:');
    console.log('   git add .');
    console.log('   git commit -m "Resolve merge conflicts"');
  }
  
} catch (error) {
  console.error('❌ Error during conflict resolution:', error.message);
  process.exit(1);
}

console.log('\n🎉 Merge conflict resolution complete!');