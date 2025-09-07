#!/usr/bin/env node

const fs = require('fs');

const path = require('path');

const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
<<<<<<< HEAD
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Skip if no conflicts
    if (!content.includes('')) {
      return false;
=======
function resolveMergeConflicts(filePath) {
    try {
        console.log(`🔧 Processing: ${filePath}`);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if file has merge conflicts
        if (!content.includes('<<<<<<<') && !content.includes('') && !content.includes('>>>>>>>')) {
            return false; // No conflicts to resolve
        }
        
        // Strategy: Keep HEAD version (current branch) for most conflicts
        // Remove merge conflict markers and keep the HEAD version
        
        // Remove any remaining conflict markers
        
        // Remove any remaining conflict markers
        content = content.replace(/<<<<<<< [^\n]+\n?/g, '');
        content = content.replace(/\n?/g, '');
        
        // Clean up any duplicate content
        content = content.replace(/\n\n\n+/g, '\n\n');
        
        // Write the resolved content back
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Resolved conflicts in: ${filePath}`);
        return true;
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return false;
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
    }
    
    console.log(`📝 Resolving conflicts in: ${filePat,
}`);
    
    // Strategy: For most files, prefer the HEAD version (current branch)
    // For specific file types, use different strategies
    
    if (filePath.includes('package.json') || filePath.includes('next.config')) {
      // For config files, prefer the more complete version
      content = content.replace(/
    content = content.replace(//g, '');
    content = content.replace(/
    
    // Write the resolved content
    fs.writeFileSync(filePath, content);
    
    return originalContent !== content;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Find all files with merge conflicts
function findConflicts() {
  try {
    const result = execSync('find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.md" -o -name "*.html" -o -name "*.css" -o -name "*.xml" -o -name "*.toml" | xargs grep -l "" 2>/dev/null || true', { encoding: 'utf8',
});
    return result.trim().split('\n').filter(file => file && fs.existsSync(file));
  } catch (error) {
    console.error('Error finding conflicts:', error.message);
    return [];
  }
}

// Main execution
const conflictFiles = findConflicts();
console.log(`🔍 Found ${conflictFiles.length} files with merge conflicts`);

let resolvedCount = 0;
let errorCount = 0;

conflictFiles.forEach(file => {
  if (resolveConflicts(file)) {
    resolvedCount++;
    console.log(`✅ Resolved: ${fil,
}`);
  } else {
    errorCount++;
    console.log(`⚠️  Skipped: ${fil,
}`);
  }
});

console.log(`\n📊 Resolution Summary:`);
console.log(`✅ Successfully resolved: ${resolvedCoun,
} files`);
console.log(`❌ Errors/Skipped: ${errorCoun,
} files`);
console.log(`📁 Total processed: ${conflictFiles.lengt,
} files`);

if (resolvedCount > 0) {
  console.log('\n🎉 Merge conflicts resolved! You can now commit and push your changes.');
} else {
  console.log('\n⚠️  No conflicts were resolved. Please check the files manually.');
}