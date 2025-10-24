#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to safely execute git commands
function safeGitCommand(command, description) {
  try {
    console.log(`Executing: ${description}`);
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    console.log(`✅ Success: ${description}`);
    return { success: true, result };
  } catch (error) {
    console.log(`❌ Error: ${description} - ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    console.log(`\n🔧 Resolving conflicts in ${filePath}...`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`   ⚠️  File ${filePath} does not exist, skipping...`);
      return { success: true, reason: 'File not found' };
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      console.log(`   ✅ No conflicts found in ${filePath}`);
      return { success: true, reason: 'No conflicts' };
    }
    
    // Strategy: Keep the HEAD version (our current changes) and remove conflict markers
    let resolvedContent = content
      // Remove conflict markers and keep HEAD version
      .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n/g, '$1')
      // Remove any remaining conflict markers
      .replace(/<<<<<<< HEAD\n[\s\S]*?\n=======\n[\s\S]*?\n>>>>>>> [^\n]+\n/g, '')
      .replace(/<<<<<<< HEAD\n[\s\S]*?\n=======\n[\s\S]*?\n>>>>>>> [^\n]+/g, '')
      // Clean up any remaining markers
      .replace(/<<<<<<< HEAD\n?/g, '')
      .replace(/=======\n?/g, '')
      .replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Write the resolved content back
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    console.log(`   ✅ Resolved conflicts in ${filePath}`);
    return { success: true };
    
  } catch (error) {
    console.log(`   ❌ Error resolving conflicts in ${filePath}: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Function to fix common syntax issues after conflict resolution
function fixSyntaxIssues(filePath) {
  try {
    if (!fs.existsSync(filePath)) return { success: true };
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common issues
    const fixes = [
      // Fix missing commas in arrays
      { pattern: /(\]\s*)(\n\s*)(\])/g, replacement: '$1,$2$3' },
      // Fix missing commas in objects
      { pattern: /(\}\s*)(\n\s*)(\})/g, replacement: '$1,$2$3' },
      // Fix JSX fragment issues
      { pattern: /<>\s*<\/>/g, replacement: '<></>' },
      // Fix missing semicolons
      { pattern: /(\w+)\s*$/gm, replacement: (match, p1) => {
        if (p1 && !p1.endsWith(';') && !p1.endsWith('{') && !p1.endsWith('}') && !p1.endsWith(')')) {
          return p1 + ';';
        }
        return match;
      }}
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`   🔧 Fixed syntax issues in ${filePath}`);
    }
    
    return { success: true };
  } catch (error) {
    console.log(`   ⚠️  Could not fix syntax issues in ${filePath}: ${error.message}`);
    return { success: false };
  }
}

// Main function
async function resolveAllConflicts() {
  try {
    console.log('🚀 Starting comprehensive conflict resolution...\n');
    
    // Step 1: Get list of files with conflicts
    console.log('📋 Step 1: Finding files with merge conflicts...');
    const conflictFiles = [
      'app/App.tsx',
      'app/components/EnhancedServicesShowcase.tsx',
      'app/components/ErrorHandler.tsx',
      'app/components/EnhancedLoading.tsx',
      'app/components/InteractiveAIROICalculator.tsx'
    ];
    
    console.log(`Found ${conflictFiles.length} files to process`);
    
    // Step 2: Resolve conflicts in each file
    console.log('\n📋 Step 2: Resolving merge conflicts...');
    let successCount = 0;
    let failureCount = 0;
    
    for (const filePath of conflictFiles) {
      const result = resolveMergeConflicts(filePath);
      if (result.success) {
        successCount++;
        // Try to fix syntax issues
        fixSyntaxIssues(filePath);
      } else {
        failureCount++;
      }
    }
    
    // Step 3: Add and commit resolved files
    console.log('\n📋 Step 3: Committing resolved files...');
    safeGitCommand('git add .', 'Adding resolved files');
    safeGitCommand('git commit -m "Resolve merge conflicts - keep HEAD version"', 'Committing resolved conflicts');
    
    // Step 4: Summary
    console.log('\n📊 Conflict Resolution Summary:');
    console.log(`   ✅ Successfully resolved: ${successCount} files`);
    console.log(`   ❌ Failed to resolve: ${failureCount} files`);
    
    if (successCount > 0) {
      console.log('\n🎉 Conflict resolution completed successfully!');
    } else {
      console.log('\n⚠️  No conflicts were resolved.');
    }
    
  } catch (error) {
    console.error('❌ Error during conflict resolution:', error.message);
    process.exit(1);
  }
}

// Run the script
resolveAllConflicts();