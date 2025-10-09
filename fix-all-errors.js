#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix all remaining issues
function fixAllIssues(content) {
  // Fix duplicate imports with trailing comma and duplicates
  content = content.replace(
    /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];?/g,
    (match, imports, source) => {
      // Split by comma and clean up
      const importList = imports.split(',').map(imp => imp.trim()).filter(imp => imp);
      
      // Remove duplicates while preserving order
      const uniqueImports = [...new Set(importList)];
      
      return `import { ${uniqueImports.join(', ')} } from '${source}';`;
    }
  );
  
  // Fix duplicate function declarations
  content = content.replace(
    /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\};\s*const\s+\1:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g,
    (match, funcName) => {
      return `const ${funcName}: React.FC = () => {`;
    }
  );
  
  // Fix duplicate return statements
  content = content.replace(
    /return\s*\([^)]+\);\s*\};\s*return\s*\(/g,
    'return ('
  );
  
  // Fix malformed JSX with missing closing tags
  content = content.replace(
    /return\s*\(<div[^>]*>([^<]+)<\/div>\s*\);\s*return\s*\(/g,
    'return ('
  );
  
  // Fix objects that start with comma
  content = content.replace(/\{\s*,/g, '{');
  
  // Fix missing closing braces in objects
  content = content.replace(
    /\{\s*([^}]+?)\s*$/gm,
    (match, content) => {
      if (!content.includes('}') && content.trim()) {
        return `{${content.trim()}}`;
      }
      return match;
    }
  );
  
  // Fix missing semicolons in JSX
  content = content.replace(/(\w+)\s*$/gm, (match, word) => {
    if (word && !word.endsWith(';') && !word.endsWith('}') && !word.endsWith(')') && !word.endsWith(']') && !word.endsWith('>')) {
      return word + ';';
    }
    return match;
  });
  
  // Fix duplicate export statements
  content = content.replace(
    /export\s+default\s+(\w+);\s*export\s+default\s+\1;/g,
    'export default $1;'
  );
  
  // Fix malformed function declarations
  content = content.replace(
    /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\};\s*const\s+\1:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\};/g,
    (match, funcName) => {
      return `const ${funcName}: React.FC = () => {`;
    }
  );
  
  return content;
}

// Main function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixAllIssues(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  // Find all TypeScript/JavaScript files in src directory
  const files = await glob('src/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);