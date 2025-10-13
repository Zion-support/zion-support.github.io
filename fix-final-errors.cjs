const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Fix final parsing errors
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix missing opening brace in import statements
  content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];\s*const\s+/g, (match, imports, packageName) => {
    return `import { ${imports} } from '${packageName}';\n\nconst `;
  });

  // Fix trailing comma in import statements
  content = content.replace(/import\s*{\s*([^,}]+),\s*}\s*from\s*['"]([^'"]+)['"];/g, 'import { $1 } from \'$2\';');

  // Fix missing closing brace in import statements
  const lines = content.split('\n');
  const newLines = [];
  let inImport = false;
  let importLines = [];
  let braceCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim().startsWith('import ') && line.includes('{')) {
      inImport = true;
      importLines = [line];
      braceCount = (line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
    } else if (inImport) {
      importLines.push(line);
      braceCount += (line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
      
      if (braceCount <= 0) {
        // Import statement is complete
        inImport = false;
        newLines.push(...importLines);
        importLines = [];
      }
    } else {
      if (inImport) {
        // We're still in an import but this line doesn't belong
        // Close the import and add this line
        importLines.push('} from \'lucide-react\';');
        newLines.push(...importLines);
        importLines = [];
        inImport = false;
      }
      newLines.push(line);
    }
  }

  if (inImport && importLines.length > 0) {
    // Close any remaining import
    importLines.push('} from \'lucide-react\';');
    newLines.push(...importLines);
  }

  const newContent = newLines.join('\n');

  // Fix other common issues
  let finalContent = newContent;

  // Fix missing React import
  if (finalContent.includes('export default function') && !finalContent.includes('import React')) {
    finalContent = 'import React from \'react\';\n' + finalContent;
    modified = true;
  }

  // Fix function name casing
  finalContent = finalContent.replace(/export default function page\(/g, 'export default function Page(');

  if (finalContent !== content) {
    fs.writeFileSync(filePath, finalContent);
    console.log(`Fixed: ${filePath}`);
    return true;
  }
  return false;
}

// Main execution
console.log('Starting final error fixes...');

// Get all TypeScript/JavaScript files in the app directory
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: __dirname });

let fixedCount = 0;
for (const file of files) {
  const fullPath = path.join(__dirname, file);
  try {
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  } catch (error) {
    console.log(`Error fixing ${file}: ${error.message}`);
  }
}

console.log(`Fixed ${fixedCount} files`);