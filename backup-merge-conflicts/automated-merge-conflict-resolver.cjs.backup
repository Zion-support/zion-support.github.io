#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Automated Merge Conflict Resolver');
console.log('=====================================');

// Strategy for resolving conflicts
const conflictResolutionStrategy = {
  // For pages, prefer the newer version (HEAD)
  'pages/': 'HEAD',
  // For components, prefer the newer version (HEAD)
  'components/': 'HEAD',
  'src/components/': 'HEAD',
  // For automation scripts, prefer the newer version (HEAD)
  'automation/': 'HEAD',
  'scripts/': 'HEAD',
  // For configuration files, prefer the newer version (HEAD)
  'package.json': 'HEAD',
  'tsconfig.json': 'HEAD',
  'tailwind.config.js': 'HEAD',
  'vite.config.js': 'HEAD',
  // For data files, prefer the newer version (HEAD)
  'src/data/': 'HEAD',
  // For utility files, prefer the newer version (HEAD)
  'src/utils/': 'HEAD',
  'src/lib/': 'HEAD',
  // For hooks, prefer the newer version (HEAD)
  'src/hooks/': 'HEAD',
  // For store files, prefer the newer version (HEAD)
  'src/store/': 'HEAD',
  // For UI components, prefer the newer version (HEAD)
  'src/components/ui/': 'HEAD',
  // For main files, prefer the newer version (HEAD)
  'src/main.jsx': 'HEAD',
  'src/App.jsx': 'HEAD',
  'src/App.tsx': 'HEAD',
  // For test files, prefer the newer version (HEAD)
  '__tests__/': 'HEAD',
  'tests/': 'HEAD',
  // For disabled files, prefer the newer version (HEAD)
  '.disabled': 'HEAD',
  '.quarantine': 'HEAD',
  // For backup files, prefer the newer version (HEAD)
  'temp-backup/': 'HEAD',
  'temp_backup/': 'HEAD',
  'backup/': 'HEAD',
  // For reports and logs, prefer the newer version (HEAD)
  '.json': 'HEAD',
  '.txt': 'HEAD',
  '.log': 'HEAD',
  // Default to HEAD for everything else
  'default': 'HEAD'
};

function getResolutionStrategy(filePath) {
  for (const [pattern, strategy] of Object.entries(conflictResolutionStrategy)) {
    if (pattern === 'default') continue;
    if (filePath.includes(pattern)) {
      return strategy;
    }
  }
  return conflictResolutionStrategy.default;
}

function resolveConflicts() {
  try {
    console.log('\n🔍 Checking for merge conflicts...');
    
    // Get list of conflicted files
    const conflictedFiles = execSync('git status --porcelain | grep "^UU\\|^AA\\|^DD" | cut -c4-', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(line => line.length > 0);

    if (conflictedFiles.length === 0) {
      console.log('✅ No merge conflicts found!');
      return true;
    }

    console.log(`📋 Found ${conflictedFiles.length} files with conflicts:`);
    conflictedFiles.forEach(file => console.log(`   - ${file}`));

    console.log('\n🔧 Resolving conflicts...');
    
    let resolvedCount = 0;
    let errorCount = 0;

    for (const file of conflictedFiles) {
      try {
        const strategy = getResolutionStrategy(file);
        console.log(`\n📝 Resolving ${file} using ${strategy} strategy...`);
        
        if (strategy === 'HEAD') {
          // Use our version (HEAD)
          execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
        } else if (strategy === 'THEIRS') {
          // Use their version (incoming)
          execSync(`git checkout --theirs "${file}"`, { stdio: 'pipe' });
        }
        
        // Add the resolved file
        execSync(`git add "${file}"`, { stdio: 'pipe' });
        
        console.log(`✅ Resolved ${file}`);
        resolvedCount++;
        
      } catch (error) {
        console.error(`❌ Error resolving ${file}: ${error.message}`);
        errorCount++;
      }
    }

    console.log(`\n📊 Resolution Summary:`);
    console.log(`   ✅ Successfully resolved: ${resolvedCount}`);
    console.log(`   ❌ Errors: ${errorCount}`);
    console.log(`   📁 Total files: ${conflictedFiles.length}`);

    if (errorCount === 0) {
      console.log('\n🎉 All conflicts resolved successfully!');
      return true;
    } else {
      console.log('\n⚠️  Some conflicts could not be resolved automatically.');
      return false;
    }

  } catch (error) {
    console.error('❌ Error during conflict resolution:', error.message);
    return false;
  }
}

function commitMerge() {
  try {
    console.log('\n💾 Committing merge...');
    execSync('git commit -m "🔧 Resolve merge conflicts automatically - prefer HEAD version"', { stdio: 'inherit' });
    console.log('✅ Merge committed successfully!');
    return true;
  } catch (error) {
    console.error('❌ Error committing merge:', error.message);
    return false;
  }
}

function main() {
  console.log('Starting automated merge conflict resolution...\n');
  
  // Check if we're in a merge state
  try {
    execSync('git status --porcelain | grep "^UU\\|^AA\\|^DD"', { stdio: 'pipe' });
  } catch (error) {
    console.log('ℹ️  No merge conflicts detected. Nothing to resolve.');
    return;
  }

  // Resolve conflicts
  const conflictsResolved = resolveConflicts();
  
  if (conflictsResolved) {
    // Commit the merge
    const mergeCommitted = commitMerge();
    
    if (mergeCommitted) {
      console.log('\n🎉 Merge conflict resolution completed successfully!');
      console.log('📋 Next steps:');
      console.log('   1. Run tests to ensure everything works');
      console.log('   2. Push changes to remote repository');
      console.log('   3. Verify the merge on GitHub');
    } else {
      console.log('\n⚠️  Conflicts were resolved but merge could not be committed.');
      console.log('📋 Manual steps required:');
      console.log('   1. Review the resolved files');
      console.log('   2. Run: git commit -m "Resolve merge conflicts"');
      console.log('   3. Push changes to remote repository');
    }
  } else {
    console.log('\n❌ Could not resolve all conflicts automatically.');
    console.log('📋 Manual resolution required for some files.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { resolveConflicts, commitMerge };