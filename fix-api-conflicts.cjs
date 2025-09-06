#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing merge conflicts in API files...');

// Get all files with merge conflicts
const conflictedFiles = execSync('find pages/api -name "*.ts" -exec grep -l "

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed ${file}`);
        fixedCount++;
      } else {
        console.log(`⏭️  No conflicts found in ${file}`);
      }
    } catch (error) {
      console.warn(`⚠️  Could not fix ${file}: ${error.message}`);
    }
  } else {
    console.log(`⚠️  File not found: ${file}`);
  }
}

console.log(`🎉 Fixed ${fixedCount} API files!`);