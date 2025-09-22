#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve conflicts by keeping our version (HEAD)
function resolveConflictsByKeepingOurs() {
  try {
    console.log('📋 Getting list of conflicted files...');
    const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' });
    const conflictedFiles = statusOutput
      .split('\n')
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
      .map(line => line.substring(3).trim())
      .filter(file => file);

    console.log(`Found ${conflictedFiles.length} conflicted files`);

    if (conflictedFiles.length === 0) {
      console.log('✅ No conflicts found');
      return;
    }

    // Resolve conflicts by keeping our version
    console.log('🔄 Resolving conflicts by keeping our version...');
    execSync('git checkout --ours .', { stdio: 'inherit' });
    
    // Add resolved files
    console.log('📝 Adding resolved files...');
    execSync('git add .', { stdio: 'inherit' });

    console.log('✅ All conflicts resolved successfully');
    return true;
  } catch (error) {
    console.error('❌ Error resolving conflicts:', error.message);
    return false;
  }
}

// Function to check if build works
function testBuild() {
  try {
    console.log('🔨 Testing build...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build successful');
    return true;
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    return false;
  }
}

// Main execution
async function main() {
  try {
    // Step 1: Resolve conflicts
    const conflictsResolved = resolveConflictsByKeepingOurs();
    if (!conflictsResolved) {
      console.log('❌ Failed to resolve conflicts');
      process.exit(1);
    }

    // Step 2: Test build
    const buildSuccess = testBuild();
    if (!buildSuccess) {
      console.log('❌ Build failed after conflict resolution');
      process.exit(1);
    }

    // Step 3: Commit changes
    console.log('💾 Committing resolved conflicts...');
    execSync('git commit -m "Resolve all merge conflicts - keep working versions"', { stdio: 'inherit' });

    console.log('🎉 All conflicts resolved and committed successfully!');
  } catch (error) {
    console.error('❌ Error in main process:', error.message);
    process.exit(1);
  }
}

main();