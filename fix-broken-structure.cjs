const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix broken file structure
function fixBrokenStructure(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Pattern 1: Fix malformed function structure
  // Look for functions that have return statements in the wrong place
  if (content.includes('export default function') && content.includes('return (') && content.includes('const features = [')) {
    // Extract the function name
    const functionMatch = content.match(/export default function (\w+)\(\)/);
    if (functionMatch) {
      const functionName = functionMatch[1];
      
      // Extract all const declarations
      const constDeclarations = [];
      const constRegex = /const (\w+) = \[[\s\S]*?\]/g;
      let match;
      while ((match = constRegex.exec(content)) !== null) {
        constDeclarations.push(match[0]);
      }
      
      // Extract the JSX content
      const jsxStart = content.indexOf('return (');
      const jsxEnd = content.lastIndexOf('</>');
      let jsxContent = '';
      if (jsxStart !== -1 && jsxEnd !== -1) {
        jsxContent = content.substring(jsxStart, jsxEnd + 3);
      }
      
      // Rebuild the file structure
      const imports = content.substring(0, content.indexOf('export default function'));
      const newStructure = `${imports}export default function ${functionName}() {
  ${constDeclarations.join('\n\n  ')}

  ${jsxContent}
}`;
      
      fixed = newStructure;
      changes++;
    }
  }

  // Pattern 2: Fix JSX fragments without proper structure
  if (content.includes('<>') && !content.includes('</>')) {
    fixed = fixed.replace(/<>/g, '<>');
    fixed = fixed + '\n    </>\n  );\n}';
    changes++;
  }

  // Pattern 3: Fix missing closing braces
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  
  if (openBraces > closeBraces) {
    const missingBraces = openBraces - closeBraces;
    fixed = fixed.trim() + '\n' + '}'.repeat(missingBraces);
    changes++;
  }

  // Pattern 4: Fix malformed const declarations inside JSX
  fixed = fixed.replace(/return \(\s*<>\s*const/g, 'return (\n    <>\n  const');
  fixed = fixed.replace(/const (\w+) = \[[\s\S]*?\];\s*const/g, 'const $1 = [\n    // ... features\n  ];\n\n  const');

  // Pattern 5: Fix duplicate return statements
  const returnCount = (fixed.match(/return \(/g) || []).length;
  if (returnCount > 1) {
    // Keep only the first return statement
    const firstReturn = fixed.indexOf('return (');
    const secondReturn = fixed.indexOf('return (', firstReturn + 1);
    if (secondReturn !== -1) {
      fixed = fixed.substring(0, secondReturn) + fixed.substring(fixed.indexOf('</>', secondReturn) + 3);
      changes++;
    }
  }

  return { content: fixed, changes };
}

// Function to process all TSX files
function processFiles() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern);
  let totalChanges = 0;
  let processedFiles = 0;

  console.log(`Found ${files.length} TSX files to process...`);

  files.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const result = fixBrokenStructure(content, filePath);
      
      if (result.changes > 0) {
        fs.writeFileSync(filePath, result.content);
        console.log(`Fixed ${result.changes} issues in ${filePath}`);
        totalChanges += result.changes;
        processedFiles++;
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });

  console.log(`\nProcessed ${processedFiles} files with ${totalChanges} total changes.`);
}

// Run the fix
processFiles();