import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to remove duplicate variable declarations
function removeDuplicates(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove duplicate const declarations
    const constRegex = /const\s+(\w+)\s*=\s*\[[\s\S]*?\];/g;
    const matches = [...content.matchAll(constRegex)];
    
    const seen = new Set();
    const duplicates = [];
    
    matches.forEach(match => {
      const varName = match[1];
      if (seen.has(varName)) {
        duplicates.push(match);
      } else {
        seen.add(varName);
      }
    });

    // Remove duplicate declarations
    duplicates.forEach(duplicate => {
      content = content.replace(duplicate[0], '');
      modified = true;
    });

    // Clean up extra semicolons and empty lines
    content = content.replace(/;;/g, ';');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Removed duplicates from: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main execution
async function main() {
  const files = await glob('app/**/*.{ts,tsx}');
  
  console.log(`Found ${files.length} files to check...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (removeDuplicates(path.join(process.cwd(), file))) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);