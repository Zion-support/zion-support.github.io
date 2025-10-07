#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔧 Quick Merge Conflict Resolution');

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has conflicts
    if (!content.includes('      return false;
    }
    
    console.log(`Fixing: ${filePath}`);
    
    // Remove conflict markers and choose the better version
    const sections = content.split(/    
    if (sections.length >= 3) {
      // Take the first section (before HEAD) + the better of the two conflict sections
      let fixedContent = sections[0];
      
      // Choose the better version (usually the one with proper syntax)
      const headSection = sections[1] || '';
      const remoteSection = sections[2] || '';
      
      let chosenSection = headSection;
      
      // Prefer version with proper commas and semicolons
      if (remoteSection.includes(',') && !headSection.includes(',')) {
        chosenSection = remoteSection;
      } else if (headSection.includes(',') && !remoteSection.includes(',')) {
        chosenSection = headSection;
      } else {
        // Choose the longer/more complete version
        chosenSection = headSection.length > remoteSection.length ? headSection : remoteSection;
      }
      
      fixedContent += chosenSection;
      
      // Add remaining sections
      for (let i = 3; i < sections.length; i++) {
        fixedContent += sections[i];
      }
      
      // Clean up common syntax issues
      fixedContent = fixedContent
        .replace(/,\s*$/, '')  // Remove trailing commas
        .replace(/;\s*$/, '')  // Remove trailing semicolons
        .replace(/,\s*,/, ',')  // Fix double commas
        .replace(/;\s*;/, ';'); // Fix double semicolons
      
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  
  return false;
}

// Function to find and fix all conflict files
function fixAllConflicts() {
  console.log('🔍 Finding files with merge conflicts...');
  
  try {
    // Use git to find files with conflicts
    const result = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
    const conflictFiles = result.trim().split('\n').filter(f => f.length > 0);
    
    if (conflictFiles.length === 0) {
      console.log('✅ No merge conflicts found in git status');
      
      // Try to find files with conflict markers
      const findResult = execSync('find . -name "*.ts" -o -name "*.tsx" | xargs grep -l "      const markerFiles = findResult.trim().split('\n').filter(f => f.length > 0 && !f.includes('.backup.'));
      
      if (markerFiles.length === 0) {
        console.log('✅ No files with conflict markers found');
        return;
      }
      
      console.log(`Found ${markerFiles.length} files with conflict markers`);
      markerFiles.forEach(file => {
        if (fixFile(file)) {
          console.log(`✅ Fixed: ${file}`);
        }
      });
      
    } else {
      console.log(`Found ${conflictFiles.length} files with git conflicts`);
      conflictFiles.forEach(file => {
        if (fixFile(file)) {
          console.log(`✅ Fixed: ${file}`);
        }
      });
    }
    
    // Clean up backup files
    console.log('🧹 Cleaning up backup files...');
    try {
      execSync('find . -name "*.backup.*" -type f -delete 2>/dev/null || true');
      console.log('✅ Backup files cleaned up');
    } catch (error) {
      console.log('⚠️  Could not clean up all backup files');
    }
    
  } catch (error) {
    console.error('Error finding conflicts:', error.message);
  }
}

// Main execution
try {
  fixAllConflicts();
  console.log('\n🎉 Conflict resolution completed!');
  console.log('\nNext steps:');
  console.log('1. Run: git add .');
  console.log('2. Run: git commit -m "Resolve merge conflicts"');
  console.log('3. Run: git push origin main');
} catch (error) {
  console.error('❌ Error during conflict resolution:', error.message);
  process.exit(1);
}