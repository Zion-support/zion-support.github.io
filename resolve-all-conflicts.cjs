#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Skip if no conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`📝 Resolving conflicts in: ${filePath}`);
    
    // Strategy: For most files, prefer the HEAD version (current branch)
    // For specific file types, use different strategies
    
    if (filePath.includes('package.json') || filePath.includes('next.config')) {
      // For config files, prefer the more complete version
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    } else if (filePath.includes('.tsx') || filePath.includes('.ts') || filePath.includes('.jsx') || filePath.includes('.js')) {
      // For React/TypeScript files, prefer HEAD version
      content = content.replace(/<<<<<<< HEAD([\s\S]*?)=======[\s\S]*?>>>>>>> [^\n]+/g, '$1');
    } else if (filePath.includes('.json')) {
      // For JSON files, prefer the more complete version
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    } else {
      // Default: prefer HEAD version
      content = content.replace(/<<<<<<< HEAD([\s\S]*?)=======[\s\S]*?>>>>>>> [^\n]+/g, '$1');
    }
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
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
    const result = execSync('find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.md" -o -name "*.html" -o -name "*.css" -o -name "*.xml" -o -name "*.toml" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true', { encoding: 'utf8' });
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
    console.log(`✅ Resolved: ${file}`);
  } else {
    errorCount++;
    console.log(`⚠️  Skipped: ${file}`);
  }
});

console.log(`\n📊 Resolution Summary:`);
console.log(`✅ Successfully resolved: ${resolvedCount} files`);
console.log(`❌ Errors/Skipped: ${errorCount} files`);
console.log(`📁 Total processed: ${conflictFiles.length} files`);

if (resolvedCount > 0) {
  console.log('\n🎉 Merge conflicts resolved! You can now commit and push your changes.');
} else {
  console.log('\n⚠️  No conflicts were resolved. Please check the files manually.');
}