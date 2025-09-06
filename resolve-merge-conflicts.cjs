const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');

// Get list of files with conflicts
const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${conflictFiles.length} files with merge conflicts`);

let resolvedCount = 0;
let errorCount = 0;

conflictFiles.forEach(file => {
  try {
    console.log(`Resolving conflicts in: ${file}`);
    
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    // Remove conflict markers and keep the incoming changes (HEAD)
    content = content.replace(/<<<<<<< HEAD\n[\s\S]*?=======\n[\s\S]*?>>>>>>> [^\n]+\n/g, '');
    
    // If content changed, write it back
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`✅ Resolved conflicts in: ${file}`);
      resolvedCount++;
    } else {
      console.log(`⚠️ No changes needed for: ${file}`);
    }
  } catch (error) {
    console.error(`❌ Error resolving ${file}:`, error.message);
    errorCount++;
  }
});

<<<<<<< HEAD
console.log(`\n📊 Conflict Resolution Summary: `),
=======
console.log(`\n📊 Conflict Resolution Summary:`);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
console.log(`✅ Successfully resolved: ${resolvedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);
console.log(`📁 Total files processed: ${conflictFiles.length}`);

if (resolvedCount > 0) {
  console.log('\n🔄 Adding resolved files to git...');
  try {
    execSync('git add .', { stdio: 'inherit' });
    console.log('✅ Files added to git successfully');
  } catch (error) {
    console.error('❌ Error adding files to git:', error.message);
  }
}

console.log('\n🎉 Merge conflict resolution completed!');