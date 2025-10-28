#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to clean up merge conflict markers
function cleanupMergeConflicts(content, filePath) {
  let modified = content;
  let hasChanges = false;

  // Remove merge conflict markers and keep the "ours" version (after =======)
  const conflictRegex = /<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g;
  if (conflictRegex.test(modified)) {
    modified = modified.replace(conflictRegex, (match, afterEquals) => {
      hasChanges = true;
      return afterEquals.trim();
    });
  }

  // Remove any remaining conflict markers
  const remainingMarkers = /(<<<<<<< HEAD|=======|>>>>>>> [^\n]+)/g;
  if (remainingMarkers.test(modified)) {
    modified = modified.replace(remainingMarkers, '');
    hasChanges = true;
  }

  // Clean up extra whitespace
  if (hasChanges) {
    modified = modified.replace(/\n\s*\n\s*\n/g, '\n\n');
  }

  return { content: modified, hasChanges };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: modified, hasChanges } = cleanupMergeConflicts(content, filePath);
    
    if (hasChanges) {
      fs.writeFileSync(filePath, modified, 'utf8');
      console.log(`✅ Cleaned merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('🔧 Starting merge conflict cleanup...\n');

  // Find all TypeScript and JavaScript files in the app directory
  const patterns = [
    'app/**/*.ts',
    'app/**/*.tsx',
    'app/**/*.js',
    'app/**/*.jsx'
  ];

  let totalFiles = 0;
  let modifiedFiles = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: __dirname });
    
    files.forEach(file => {
      totalFiles++;
      const fullPath = path.join(__dirname, file);
      
      // Skip certain files
      if (file.includes('node_modules') || 
          file.includes('.next')) {
        return;
      }
      
      if (processFile(fullPath)) {
        modifiedFiles++;
      }
    });
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files modified: ${modifiedFiles}`);
  console.log(`   Files unchanged: ${totalFiles - modifiedFiles}`);

  if (modifiedFiles > 0) {
    console.log('\n✅ Merge conflict cleanup completed successfully!');
  } else {
    console.log('\n✨ No merge conflicts found to clean up.');
  }
}

main().catch(console.error);