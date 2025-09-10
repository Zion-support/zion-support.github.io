#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Final merge solution - cleaning up all conflicts...\n');

// Function to clean up merge conflicts in a file
function cleanMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`🧹 Cleaning: ${filePath}`);
    
    // Remove all merge conflict markers and keep the incoming changes
    const lines = content.split('\n');
    const cleaned = [];
    let inConflict = false;
    let keepIncoming = false;
    
    for (const line of lines) {
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepIncoming = false;
        continue;
      } else if (line.includes('=======')) {
        keepIncoming = true;
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepIncoming = false;
        continue;
      }
      
      if (!inConflict || keepIncoming) {
        cleaned.push(line);
      }
    }
    
    const cleanedContent = cleaned.join('\n');
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
    console.log(`✅ Cleaned: ${filePath}`);
    return true;
  } catch (error) {
    console.log(`❌ Error cleaning ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to find and clean all files with conflicts
function cleanAllConflicts() {
  const cleanedFiles = [];
  
  function scanDirectory(dir) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', 'dist', 'build', 'out', 'coverage'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          // Check if file has conflicts
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD')) {
              if (cleanMergeConflicts(fullPath)) {
                cleanedFiles.push(fullPath);
              }
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  scanDirectory('/workspace');
  return cleanedFiles;
}

// Main execution
async function main() {
  try {
    console.log('📋 Step 1: Cleaning all merge conflicts...\n');
    const cleanedFiles = cleanAllConflicts();
    console.log(`\n✅ Cleaned ${cleanedFiles.length} files\n`);
    
    console.log('📋 Step 2: Creating a comprehensive merge commit...\n');
    
    // Create a summary of what was cleaned
    const summary = {
      timestamp: new Date().toISOString(),
      cleanedFiles: cleanedFiles.length,
      files: cleanedFiles.slice(0, 10) // Show first 10 files
    };
    
    fs.writeFileSync('/workspace/merge-cleanup-summary.json', JSON.stringify(summary, null, 2));
    console.log('✅ Created merge cleanup summary\n');
    
    console.log('📋 Step 3: Final status...\n');
    console.log(`Cleaned ${cleanedFiles.length} files with merge conflicts`);
    console.log('All conflicts have been resolved by keeping incoming changes');
    
    console.log('\n🎉 Merge conflict cleanup completed!\n');
    console.log('Next steps:');
    console.log('1. Run: git add .');
    console.log('2. Run: git commit -m "Resolve all merge conflicts"');
    console.log('3. Run: git push origin main');
    
  } catch (error) {
    console.log(`\n❌ Error during execution: ${error.message}`);
  }
}

main();