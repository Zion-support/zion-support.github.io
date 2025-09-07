#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');

function fixMergeConflicts() {
  try {
    // Find all files with merge conflicts
    
    const files = result.split('\n').filter(line => line.trim()).map(line => line.split(':')[0]);
    const uniqueFiles = [...new Set(files)];
    
    console.log(`Found ${uniqueFiles.length} files with merge conflicts`);
    
    for (const file of uniqueFiles) {
      if (!file || !fs.existsSync(file)) continue;
      
      try {
        console.log(`Fixing merge conflicts in: ${file}`);
        
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove merge conflict markers and keep the HEAD version
        
        // Remove any remaining conflict markers
        
        fs.writeFileSync(file, content);
        console.log(`✅ Fixed: ${file}`);
      } catch (error) {
        console.log(`❌ Error fixing ${file}: ${error.message}`);
      }
    }
    
    console.log('🎉 Merge conflict resolution completed!');
  } catch (error) {
    console.error('❌ Error during merge conflict resolution:', error.message);
  }
}

fixMergeConflicts();