import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix all duplicate properties
function fixAllDuplicates(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate children properties
    const duplicateChildrenPattern = /children\?\s*:\s*React\.ReactNode;\s*[^}]*children\s*:\s*React\.ReactNode/g;
    if (duplicateChildrenPattern.test(content)) {
      content = content.replace(duplicateChildrenPattern, 'children: React.ReactNode');
      modified = true;
    }

    // Fix duplicate className properties
    const duplicateClassNamePattern = /className\?\s*:\s*string;\s*[^}]*className\?\s*:\s*string/g;
    if (duplicateClassNamePattern.test(content)) {
      content = content.replace(duplicateClassNamePattern, 'className?: string');
      modified = true;
    }

    // Fix missing semicolons in interfaces
    const missingSemicolonPattern = /(\w+)\s*:\s*(\w+)\s*\n\s*(\w+)\s*:\s*(\w+)/g;
    if (missingSemicolonPattern.test(content)) {
      content = content.replace(missingSemicolonPattern, '$1: $2;\n  $3: $4');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed duplicates in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main function to fix all duplicate issues
async function fixAllDuplicateIssues() {
  const pattern = 'app/components/**/*.tsx';
  const files = await glob(pattern, { cwd: process.cwd() });
  
  console.log(`Found ${files.length} component files to check for duplicates...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixAllDuplicates(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

// Run the fix
fixAllDuplicateIssues().catch(console.error);