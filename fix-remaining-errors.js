#!/usr/bin/env node
import fs from 'fs';
import { glob } from 'glob';
// Function to fix specific remaining issues
function fixRemainingIssues(content) {
  // Fix duplicate imports with trailing comma
  content = content.replace(
    /import\s*{\s*([^}]+),\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];?/g,
    (match, imports1, imports2, source) => {
      // Split and clean up both parts
      const list1 = imports1.split(',').map(imp => imp.trim()).filter(imp => imp);
      const list2 = imports2.split(',').map(imp => imp.trim()).filter(imp => imp);
      // Combine and remove duplicates
      const allImports = [...list1, ...list2];
      const uniqueImports = [...new Set(allImports)];
      return `import { ${uniqueImports.join(', ')} } from '${source}';`;
    }
  );
  // Fix duplicate imports in the same import statement
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
  // Fix duplicate return statements
  content = content.replace(
    /const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*return\s*\([^)]+\);\s*\};\s*return\s*\(/g,
    (match) => {
      return match.replace(/return\s*\([^)]+\);\s*\};\s*return\s*\(/, 'return (');
    }
  );
  // Fix duplicate return statements more broadly
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
  // Fix missing semicolons in JSX
  content = content.replace(/(\w+)\s*$/gm, (match, word) => {
    if (word && !word.endsWith(';') && !word.endsWith('}') && !word.endsWith(')') && !word.endsWith(']') && !word.endsWith('>')) {
      return word + ';';
    }
    return match;
  });
  return content;
}
// Main function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    // Apply fixes
    content = fixRemainingIssues(content);
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