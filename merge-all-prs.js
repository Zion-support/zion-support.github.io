#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🚀 Starting comprehensive PR merge process...');

// Function to get all open PRs
async function getOpenPRs() {
  try {
    const response = await fetch('https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100');
    const prs = await response.json();
    return prs;
  } catch (error) {
    console.error('❌ Failed to fetch PRs:', error.message);
    return [];
  }
}

// Function to merge a PR branch
function mergePRBranch(branchName, prNumber) {
  try {
    console.log(`🔄 Attempting to merge PR #${prNumber} (${branchName})...`);
    
    // Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });
    
    // Try to merge
    try {
      execSync(`git merge origin/${branchName} --no-commit`, { stdio: 'pipe' });
      console.log(`✅ PR #${prNumber} merged successfully without conflicts`);
      return true;
    } catch (mergeError) {
      console.log(`⚠️  Merge conflicts detected in PR #${prNumber}, resolving...`);
      
      // Get conflicted files
      const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
        .trim().split('\n').filter(f => f);
      
      if (conflictedFiles.length > 0) {
        console.log(`📁 Resolving ${conflictedFiles.length} conflicted files...`);
        
        // Resolve conflicts by keeping the incoming version
        conflictedFiles.forEach(file => {
          if (fs.existsSync(file)) {
            try {
              execSync(`git checkout --theirs "${file}"`, { stdio: 'pipe' });
              execSync(`git add "${file}"`, { stdio: 'pipe' });
              console.log(`  ✅ Resolved ${file}`);
            } catch (error) {
              console.log(`  ❌ Failed to resolve ${file}: ${error.message}`);
            }
          }
        });
        
        // Commit the merge
        execSync(`git commit -m "Merge PR #${prNumber}: ${branchName} (conflicts resolved)"`, { stdio: 'pipe' });
        console.log(`✅ PR #${prNumber} merged with conflicts resolved`);
        return true;
      } else {
        console.log(`❌ No conflicted files found for PR #${prNumber}`);
        return false;
      }
    }
  } catch (error) {
    console.log(`❌ Failed to merge PR #${prNumber}: ${error.message}`);
    return false;
  }
}

// Function to clean up console.log statements
function cleanConsoleLogs() {
  console.log('🧹 Cleaning up console.log statements...');
  
  const commonFiles = [
    'app/App.tsx',
    'app/components/Footer.tsx',
    'app/components/Navigation.tsx',
    'app/page.tsx',
    'app/layout.tsx',
    'app/main.tsx'
  ];
  
  commonFiles.forEach(file => {
    if (fs.existsSync(file)) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        const originalLength = content.length;
        
        // Remove console.log statements
        content = content.replace(/^\s*console\.log\([^)]*\);\s*$/gm, '');
        content = content.replace(/^\s*console\.(warn|error|info|debug)\([^)]*\);\s*$/gm, '');
        
        // Clean up extra whitespace
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
        
        if (content.length !== originalLength) {
          fs.writeFileSync(file, content);
          console.log(`  ✅ Cleaned ${file}`);
        }
      } catch (error) {
        console.log(`  ⚠️  Could not clean ${file}: ${error.message}`);
      }
    }
  });
}

// Function to optimize build configuration
function optimizeBuild() {
  console.log('⚡ Optimizing build configuration...');
  
  // Update package.json with optimized scripts
  const packageJsonPath = 'package.json';
  if (fs.existsSync(packageJsonPath)) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      packageJson.scripts = {
        ...packageJson.scripts,
        'build:optimized': 'NODE_OPTIONS="--max-old-space-size=4096" next build',
        'build:production': 'NODE_OPTIONS="--max-old-space-size=4096" next build',
        'analyze': 'ANALYZE=true next build',
        'lint:fix': 'eslint . --ext .ts,.tsx,.js,.jsx --fix --max-warnings 0',
        'type-check': 'tsc --noEmit --skipLibCheck',
        'clean': 'rm -rf .next out dist node_modules/.cache',
        'prebuild': 'npm run clean',
        'postbuild': 'echo "Build completed successfully"'
      };
      
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      console.log('✅ Updated package.json with optimized scripts');
    } catch (error) {
      console.log(`⚠️  Could not update package.json: ${error.message}`);
    }
  }
}

// Main execution
async function main() {
  try {
    console.log('📋 Fetching open PRs...');
    const prs = await getOpenPRs();
    
    if (prs.length === 0) {
      console.log('✅ No open PRs found');
      return;
    }
    
    console.log(`📊 Found ${prs.length} open PRs`);
    
    let mergedCount = 0;
    let failedCount = 0;
    
    // Process each PR
    for (const pr of prs) {
      const branchName = pr.head.ref;
      const prNumber = pr.number;
      const title = pr.title;
      
      console.log(`\n🔄 Processing PR #${prNumber}: ${title}`);
      console.log(`   Branch: ${branchName}`);
      
      try {
        const success = mergePRBranch(branchName, prNumber);
        if (success) {
          mergedCount++;
          console.log(`✅ Successfully merged PR #${prNumber}`);
        } else {
          failedCount++;
          console.log(`❌ Failed to merge PR #${prNumber}`);
        }
      } catch (error) {
        failedCount++;
        console.log(`❌ Error processing PR #${prNumber}: ${error.message}`);
      }
    }
    
    // Clean up and optimize
    console.log('\n🧹 Post-merge cleanup...');
    cleanConsoleLogs();
    optimizeBuild();
    
    // Final commit
    console.log('\n💾 Committing final optimizations...');
    execSync('git add .', { stdio: 'pipe' });
    execSync('git commit -m "Final optimizations: clean console.logs, optimize build, resolve all conflicts"', { stdio: 'pipe' });
    
    // Push to main
    console.log('\n🚀 Pushing to main branch...');
    execSync('git push origin main', { stdio: 'pipe' });
    
    console.log('\n🎉 PR merge process completed!');
    console.log('📊 Summary:');
    console.log(`  ✅ Successfully merged: ${mergedCount} PRs`);
    console.log(`  ❌ Failed to merge: ${failedCount} PRs`);
    console.log(`  🧹 Console.log statements cleaned`);
    console.log(`  ⚡ Build configuration optimized`);
    console.log(`  🚀 All changes pushed to main`);
    
  } catch (error) {
    console.error('❌ Error during PR merge process:', error.message);
    process.exit(1);
  }
}

main();