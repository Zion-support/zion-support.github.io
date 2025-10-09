const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix duplicate imports
function fixDuplicateImports(content) {
  // Fix patterns like: import { A, B, C ,  A,  B,  C from 'module';
  const duplicateImportPattern = /import\s*\{\s*([^}]+?)\s*,\s*([^}]+?)\s*\}\s*from\s*['"]([^'"]+)['"];?/g;
  
  return content.replace(duplicateImportPattern, (match, firstPart, secondPart, module) => {
    // Extract unique imports from both parts
    const firstImports = firstPart.split(',').map(s => s.trim()).filter(s => s);
    const secondImports = secondPart.split(',').map(s => s.trim()).filter(s => s);
    
    // Combine and deduplicate
    const allImports = [...new Set([...firstImports, ...secondImports])];
    
    return `import { ${allImports.join(', ')} } from '${module}';`;
  });
}

// Function to fix malformed object properties
function fixObjectProperties(content) {
  // Fix patterns like: {, name: 'value'
  content = content.replace(/\{\s*,\s*/g, '{\n    ');
  
  // Fix patterns like: { name: 'value',, other: 'value'
  content = content.replace(/,\s*,/g, ',');
  
  return content;
}

// Function to fix malformed JSX
function fixJSX(content) {
  // Fix patterns like: ';' expected errors in JSX
  content = content.replace(/;\s*$/gm, '');
  
  return content;
}

// Function to fix specific syntax errors
function fixSyntaxErrors(content) {
  // Fix the specific pattern in layout.tsx and similar files
  content = content.replace(/export default function RootLayout\(\{\s*\/\/ TODO: Add content\s*\}\s*\/\/\s*children,\s*\}:\s*\{\s*\/\/ TODO: Add content\s*\};\s*children: React\.ReactNode;\s*\}\)\s*\{/g, 
    `export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {`);

  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    const originalContent = content;

    // Apply fixes
    content = fixDuplicateImports(content);
    content = fixObjectProperties(content);
    content = fixJSX(content);
    content = fixSyntaxErrors(content);

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { 
  cwd: process.cwd(),
  ignore: ['node_modules/**', 'dist/**', 'build/**']
});

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);