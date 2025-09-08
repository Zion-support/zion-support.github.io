#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve conflicts by accepting "ours" (current branch) changes
function resolveConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return { success: false, reason: 'File not found' };
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return { success: true, reason: 'No conflicts' };
    }
    
    console.log(`Resolving conflicts in ${filePath}...`);
    
    // Count conflicts before resolution
    const conflictCount = (content.match(/<<<<<<< HEAD/g) || []).length;
    
    // Replace merge conflict markers with incoming changes (choose the incoming version)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining markers
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    // Write the resolved content back
    fs.writeFileSync(filePath, content);
    
    console.log(`✅ Resolved ${conflictCount} conflicts in ${filePath}`);
    return { success: true, reason: `Resolved ${conflictCount} conflicts` };
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return { success: false, reason: error.message };
  }
}

// Get all files with merge conflicts
console.log('🔍 Finding files with merge conflicts...');

let conflictFiles = [];
try {
  const findConflicts = execSync('find . -type f \\( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.md" -o -name "*.html" -o -name "*.css" -o -name "*.xml" -o -name "*.toml" \\) | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true', { encoding: 'utf8' });
  conflictFiles = findConflicts.split('\n').filter(file => file && file !== '');
} catch (error) {
  console.error('Error finding conflict files:', error.message);
}

// Process all conflict files
let resolvedCount = 0;
let errorCount = 0;
let noConflictCount = 0;

for (const file of conflictFiles) {
  const result = resolveConflicts(file);
  if (result.success) {
    if (result.reason === 'No conflicts') {
      noConflictCount++;
    } else {
      resolvedCount++;
    }
  } else {
    errorCount++;
    console.error(`Failed to resolve ${file}: ${result.reason}`);
  }
}

console.log(`\n📊 Conflict Resolution Summary:`);
console.log(`✅ Successfully resolved: ${resolvedCount} files`);
console.log(`ℹ️  No conflicts found: ${noConflictCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

// Add all files to git
console.log('\n📦 Adding files to git...');
try {
  execSync('git add .', { stdio: 'inherit' });
  console.log('✅ Added all files to git');
} catch (error) {
  console.error('❌ Error adding files to git:', error.message);
}

// Commit the changes
console.log('\n💾 Committing changes...');
try {
  execSync('git commit -m "Resolve all merge conflicts automatically - choose incoming changes"', { stdio: 'inherit' });
  console.log('✅ Committed merge resolution');
} catch (error) {
  console.error('❌ Error committing merge:', error.message);
}

console.log('\n🎉 Merge conflict resolution completed!');

// Check for open PRs
console.log('\n🔍 Checking for open pull requests...');
try {
  if (!process.env.GITHUB_TOKEN) {
    console.log('⚠️  GITHUB_TOKEN not provided, skipping PR check');
  } else {
    const prCheck = execSync(`curl -s -H "Authorization: token ${process.env.GITHUB_TOKEN}" https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open`, { encoding: 'utf8' });
    const prs = JSON.parse(prCheck);
    
    if (prs.length === 0) {
      console.log('✅ No open pull requests found');
    } else {
      console.log(`Found ${prs.length} open pull requests:`);
      prs.forEach((pr, index) => {
        console.log(`${index + 1}. PR #${pr.number}: ${pr.title}`);
        console.log(`   Branch: ${pr.head.ref} -> ${pr.base.ref}`);
        console.log(`   URL: ${pr.html_url}`);
      });
    }
  }
} catch (error) {
  console.error('❌ Error checking PRs:', error.message);
}

console.log('\n🚀 Ready to proceed with improvements!');

module.exports = { resolveConflicts };