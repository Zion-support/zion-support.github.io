import fs from 'fs';
import path from 'path';

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common syntax errors
    const originalContent = content;

    // Fix missing closing brackets in arrays/objects
    // Pattern: array/object not properly closed before const declaration
    const arrayPattern = /(\w+)\s*=\s*\[([^[\]]*?)(?=\s*const\s+\w+\s*=\s*\[)/g;
    let match;
    while ((match = arrayPattern.exec(content)) !== null) {
      const arrayName = match[1];
      const arrayContent = match[2];
      
      // Check if the array is properly closed
      if (!arrayContent.includes('];')) {
        // Try to fix it by adding the closing bracket
        const fixedArray = `${arrayName} = [${arrayContent}];`;
        content = content.replace(match[0], fixedArray);
        modified = true;
      }
    }

    // Fix missing closing brackets in useState objects
    const useStatePattern = /useState\(\s*\{([^}]*?)(?=\s*const\s+\w+\s*=\s*\[)/g;
    while ((match = useStatePattern.exec(content)) !== null) {
      const objectContent = match[1];
      
      // Check if the object is properly closed
      if (!objectContent.includes('})')) {
        // Try to fix it by adding the closing bracket
        const fixedObject = `useState({${objectContent}});`;
        content = content.replace(match[0], fixedObject);
        modified = true;
      }
    }

    // Fix extra commas and closing braces
    content = content.replace(/\];\s*},\s*\{/g, '];\n\n  const additionalItems = [\n    {');
    content = content.replace(/\];\s*},\s*\(/g, '];\n\n  const additionalItems = [\n    {');
    
    // Fix duplicate variable declarations
    const duplicatePattern = /const\s+(\w+)\s*=\s*\[[^[\]]*\];\s*const\s+\1\s*=\s*\[/g;
    content = content.replace(duplicatePattern, (match, varName) => {
      return match.replace(new RegExp(`const\\s+${varName}\\s*=\\s*\\[[^\\[\\]]*\\];\\s*`), '');
    });

    // Fix extra closing parentheses and semicolons
    content = content.replace(/\];\s*\}\);\s*$/gm, '];');
    content = content.replace(/\];\s*\);\s*$/gm, '];');

    // Fix missing closing brackets in function parameters
    content = content.replace(/useState\(\s*\{([^}]*?)(?=\s*const\s+\w+\s*=\s*\[)/g, (match, objectContent) => {
      if (!objectContent.includes('})')) {
        return `useState({${objectContent}});`;
      }
      return match;
    });

    // Fix malformed object literals
    content = content.replace(/\{\s*"([^"]+)":\s*"([^"]+)",\s*"([^"]+)":\s*"([^"]+)"\s*\}/g, '{\n    $1: "$2",\n    $3: "$4"\n  }');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TypeScript/TSX files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== 'backup-unused-components') {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Run the fix
console.log('Starting syntax error fix...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed syntax errors in ${fixedCount} files.`);