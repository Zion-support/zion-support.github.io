import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to clean up merge conflicts in a file
function cleanupMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if no merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    let cleanedContent = content;
    
    // Remove merge conflict markers and keep our version (after =======)
    cleanedContent = cleanedContent.replace(
      /<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g,
      '$1'
    );
    
    // Remove any remaining conflict markers
    cleanedContent = cleanedContent.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    cleanedContent = cleanedContent.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    fs.writeFileSync(filePath, cleanedContent);
    console.log(`Cleaned: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // Find all tsx files with merge conflicts
  const conflictedFiles = await glob('app/**/*.tsx');
  
  console.log(`Found ${conflictedFiles.length} tsx files to check...`);

  let cleanedCount = 0;
  let skippedCount = 0;

  conflictedFiles.forEach(filePath => {
    if (cleanupMergeConflicts(filePath)) {
      cleanedCount++;
    } else {
      skippedCount++;
    }
  });

  console.log(`\nSummary:`);
  console.log(`- Cleaned: ${cleanedCount} files`);
  console.log(`- Skipped: ${skippedCount} files`);
  console.log(`- Total: ${conflictedFiles.length} files`);
}

main().catch(console.error);