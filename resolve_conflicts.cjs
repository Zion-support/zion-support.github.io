#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🚀 Resolving merge conflicts...');

// Function to resolve conflicts in a file
function resolveFileConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`🔧 Resolving conflicts in: ${filePath}`);
    
    // Strategy: Keep both sides and remove conflict markers
    content = content
      .replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1')
      .replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '')
      .replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining markers
    content = content
      .replace(/<<<<<<< HEAD/g, '')
      .replace(/=======/g, '')
      .replace(/>>>>>>> [^\n]+/g, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }
}

// Main resolution
function main() {
  // Resolve app/page.tsx
  if (resolveFileConflicts('/workspace/app/page.tsx')) {
    console.log('✅ Resolved conflicts in app/page.tsx');
  }
  
  // Resolve yarn.lock by taking the incoming version
  try {
    execSync('git checkout --theirs yarn.lock', { cwd: '/workspace' });
    console.log('✅ Resolved conflicts in yarn.lock');
  } catch (error) {
    console.log('⚠️ Could not resolve yarn.lock conflicts:', error.message);
  }
  
  // Add resolved files
  try {
    execSync('git add app/page.tsx yarn.lock', { cwd: '/workspace' });
    console.log('✅ Added resolved files to staging');
  } catch (error) {
    console.log('⚠️ Error adding files:', error.message);
  }
  
  console.log('🎉 Conflict resolution completed!');
}

main();