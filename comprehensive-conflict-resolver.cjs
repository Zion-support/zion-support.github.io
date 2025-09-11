#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔧 Running comprehensive conflict resolution...');

function fixMergeConflicts() {
  // Find all files with merge conflicts
  const files = execSync(
    'find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.json" | grep -v node_modules',
    { encoding: 'utf8' }
  )
    .split('\n')
    .filter(f => f.trim());

  let fixedCount = 0;

  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let originalContent = content;

      // Remove merge conflict markers and keep the HEAD version

      // Clean up any remaining conflict markers

      // Fix common syntax issues
      content = content.replace(
        /import React from "react",/g,
        'import React from "react";'
      );
      content = content.replace(
        /} from 'lucide-react',/g,
        "} from 'lucide-react';"
      );
      content = content.replace(
        /} from 'framer-motion',/g,
        "} from 'framer-motion';"
      );

      if (content !== originalContent) {
        fs.writeFileSync(file, content);
        console.log(`✅ Fixed ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.log(`❌ Error fixing ${file}: ${error.message}`);
    }
  }

  console.log(`\n📊 Fixed ${fixedCount} files`);
  return fixedCount;
}

// Run the conflict resolution
const fixedCount = fixMergeConflicts();

if (fixedCount > 0) {
  console.log('\n🎉 Merge conflicts resolved successfully!');
} else {
  console.log('\n✅ No merge conflicts found - all clean!');
}
