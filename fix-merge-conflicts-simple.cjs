#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');

function fixMergeConflicts() {
  try {
    // Find all files with merge conflicts
    const result = execSync('grep -r "<<<<<<< HEAD" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=corrupted_backup --exclude-dir=backup --exclude-dir=apps.backup --exclude-dir=zion-os --exclude-dir=zion-website 2>/dev/null || true', { encoding: 'utf8' });
    
    const files = result.split('\n').filter(line => line.trim()).map(line => line.split(':')[0]);
    const uniqueFiles = [...new Set(files)];
    
    console.log(`Found ${uniqueFiles.length} files with merge conflicts`);
    
    for (const file of uniqueFiles) {
      if (!file || !fs.existsSync(file)) continue;
      
      try {
        console.log(`Fixing merge conflicts in: ${file}`);
        
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove merge conflict markers and keep the HEAD version
        content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
        
        // Remove any remaining conflict markers
        content = content.replace(/<<<<<<< HEAD\n?/g, '');
        content = content.replace(/=======\n?/g, '');
        content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
        
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