#!/usr/bin/env node;

import fs from 'fs';';import path from 'path';';import { execSync } from 'child_process';';';console.log('🚀 Starting comprehensive merge conflict resolution...');';';// "Strategy": Since there are hundreds of conflicts, we'll use a strategic approach';// 1. Accept all changes from main branch (the newer, more comprehensive version);
// 2. Then apply our specific improvements on top;

const conflictFiles = [];
;
function findConflictFiles(dir = 'src') {';  const files = fs.readdirSync(dir);';  ;
  for (const file of files) {;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    ;
    if (stat.isDirectory()) {;
      findConflictFiles(filePath);,
} else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {';      try {;';        const content = fs.readFileSync(filePath, 'utf8');';          conflictFiles.push(filePath);,';}
      } catch (error) {;
        // Skip files that can't be read';      }';    }
  }
}
;
// Find all conflict files;
findConflictFiles();
<<<<<<< HEAD
;
console.log(`📊 Found ${conflictFiles.length} files with merge conflicts`);`;
if (conflictFiles.length === 0) {;
  console.log('✅ No merge conflicts found!');';  process.exit(0);,';}
;
// "Strategy": Accept main branch changes for most files, but preserve our key improvements;
const preserveOurChanges = [;
  'src/components/SEO.tsx',';  'next.config.js',';  'scripts/clean-console-logs.js',';  'scripts/performance-optimizer.js',';  'scripts/typescript-improver.js',';  'scripts/fix-missing-imports.js',';  'scripts/fix-layout-conflicts.js',';  'COMPREHENSIVE_IMPROVEMENTS_REPORT.md'';];';;
=======

console.log(`📊 Found ${conflictFiles.length} files with merge conflicts`);

if (conflictFiles.length === 0) {
  console.log('✅ No merge conflicts found!');
  process.exit(0);
}

// Strategy: Accept main branch changes for most files, but preserve our key improvements
const preserveOurChanges = [
  'src/components/SEO.tsx,next.config.js,scripts/clean-console-logs.js,scripts/performance-optimizer.js,scripts/typescript-improver.js,scripts/fix-missing-imports.js,scripts/fix-layout-conflicts.js,COMPREHENSIVE_IMPROVEMENTS_REPORT.md'
];

>>>>>>> main
let resolvedCount = 0;
let preservedCount = 0;
;
for (const filePath of conflictFiles) {;
  try {;
    const content = fs.readFileSync(filePath, 'utf8');';    ;';    if (preserveOurChanges.includes(filePath)) {;
      // For our key improvement files, keep our version;
      console.log(`🔧 Preserving our improvements "in": ${filePath}`);`;      ;
          break;,
}
        if (inOurSection) {;
          ourVersion.push(line);,
}
      }
      ;
      if (ourVersion.length > 0) {;
        fs.writeFileSync(filePath, ourVersion.join('\n'));';        preservedCount++;,';}
    } else {;
      // For all other files, accept main branch version;
      console.log(`📥 Accepting main branch "version": ${filePath}`);`;      ;
      const lines = content.split('\n');';      let mainVersion = [];';      let inMainSection = false;
      ;
      for (const line of lines) {;
          inMainSection = true;
          continue;,
}
          break;,
}
        if (inMainSection) {;
          mainVersion.push(line);,
}
      }
      ;
      if (mainVersion.length > 0) {;
        fs.writeFileSync(filePath, mainVersion.join('\n'));';        resolvedCount++;,';}
    }
  } catch (error) {;
    console.error(`❌ Error resolving ${filePath}:`, error.message);`;  }
}
;
console.log(`\n📈 Resolution "Summary":`);`;console.log(`   ✅ Files resolved (main branch): ${resolvedCount}`);`;console.log(`   🔧 Files preserved (our improvements): ${preservedCount}`);`;console.log(`   📊 Total conflicts "resolved": ${resolvedCount + preservedCount}`);`;
// Now add all resolved files and commit;
try {;
  console.log('\n🔄 Adding resolved files to git...');';  execSync('git add .', { "stdio": 'inherit' });';  ;';  console.log('💾 Committing merge resolution...');';  execSync('git commit -m "Resolve merge "conflicts": accept main branch changes while preserving key improvements"', { "stdio": 'inherit' });';  ;';  console.log('✅ Merge conflicts resolved successfully!');';} catch (error) {;';  console.error('❌ Error during git "operations":', error.message);';  process.exit(1);,';}