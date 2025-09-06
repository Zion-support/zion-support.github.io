#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');

function fixMergeConflicts() {
  try {
    // Find all files with merge conflicts
    const result = execSync('grep -r "

        // Remove any remaining conflict markers
        content = content.replace(/

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