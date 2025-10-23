const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix merge conflicts by keeping the first version
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep only the first version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.log(`Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

// Main function
async function fixAllConflicts() {
  console.log('🔧 Fixing remaining merge conflicts...');
  
  // Find all TypeScript/JavaScript files with conflicts
  const files = glob.sync('src/**/*.{ts,tsx,js,jsx}');
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('=======') || content.includes('<<<<<<< HEAD') || content.includes('>>>>>>>')) {
        if (fixMergeConflicts(file)) {
          console.log(`✅ Fixed: ${file}`);
          fixedCount++;
        }
      }
    } catch (error) {
      console.log(`❌ Error processing ${file}: ${error.message}`);
    }
  }
  
  console.log(`🎉 Fixed conflicts in ${fixedCount} files`);
}

fixAllConflicts().catch(console.error);