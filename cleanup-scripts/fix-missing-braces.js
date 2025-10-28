import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix missing closing braces in interfaces
function fixMissingBraces(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix interfaces missing closing braces before const
    const missingBracePattern = /interface\s+(\w+)Props\s*\{\s*className\?\s*:\s*string;\s*children\?\s*:\s*React\.ReactNode;\s*\n\nconst/g;
    
    if (missingBracePattern.test(content)) {
      content = content.replace(
        missingBracePattern,
        'interface $1Props {\n  className?: string;\n  children?: React.ReactNode;\n}\n\nconst'
      );
      modified = true;
    }

    // Fix interfaces missing closing braces before component definition
    const missingBracePattern2 = /interface\s+(\w+)Props\s*\{\s*className\?\s*:\s*string;\s*children\?\s*:\s*React\.ReactNode;\s*\n\n(\w+):/g;
    
    if (missingBracePattern2.test(content)) {
      content = content.replace(
        missingBracePattern2,
        'interface $1Props {\n  className?: string;\n  children?: React.ReactNode;\n}\n\nconst $2:'
      );
      modified = true;
    }

    // Fix interfaces missing closing braces before export
    const missingBracePattern3 = /interface\s+(\w+)Props\s*\{\s*className\?\s*:\s*string;\s*children\?\s*:\s*React\.ReactNode;\s*\n\nexport/g;
    
    if (missingBracePattern3.test(content)) {
      content = content.replace(
        missingBracePattern3,
        'interface $1Props {\n  className?: string;\n  children?: React.ReactNode;\n}\n\nexport'
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed missing braces in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main function to fix all missing brace issues
async function fixMissingBraceIssues() {
  const patterns = [
    'app/**/*.tsx',
    'components/**/*.tsx'
  ];
  
  let allFiles = [];
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    allFiles = allFiles.concat(files);
  }
  
  console.log(`Found ${allFiles.length} files to check for missing braces...`);
  
  let fixedCount = 0;
  allFiles.forEach(file => {
    if (fixMissingBraces(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

// Run the fix
fixMissingBraceIssues().catch(console.error);