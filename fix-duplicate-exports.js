const fs = require('fs');
const path = require('path');

// Function to fix duplicate exports in a file
function fixDuplicateExports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern 1: Remove duplicate export default statements at the end
    const duplicateExportPattern = /export default function (\w+)\([^)]*\)\s*\{[\s\S]*?\}\s*export default \1\s*$/gm;
    if (duplicateExportPattern.test(content)) {
      content = content.replace(duplicateExportPattern, (match) => {
        // Remove the duplicate export at the end
        return match.replace(/\s*export default \w+\s*$/, '');
      });
      modified = true;
    }

    // Pattern 2: Fix files that have both function declaration and separate export
    const functionWithExportPattern = /export default function (\w+)\([^)]*\)\s*\{[\s\S]*?\}\s*;\s*export default \1\s*$/gm;
    if (functionWithExportPattern.test(content)) {
      content = content.replace(functionWithExportPattern, (match) => {
        return match.replace(/\s*;\s*export default \w+\s*$/, '');
      });
      modified = true;
    }

    // Pattern 3: Fix files with missing Footer import
    if (content.includes('<Footer />') && !content.includes("import Footer from")) {
      // Add Footer import after other imports
      const importPattern = /(import [^;]+;[\s]*)+/;
      const match = content.match(importPattern);
      if (match) {
        const lastImport = match[0].trim().split('\n').pop();
        const footerImport = "import Footer from '@/components/Footer';";
        content = content.replace(match[0], match[0] + '\n' + footerImport);
        modified = true;
      }
    }

    // Pattern 4: Fix missing closing tags and fragments
    if (content.includes('<Footer />') && !content.includes('</>')) {
      content = content.replace(/(<Footer \/>)\s*$/, '$1\n    </>');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = '/workspace/app';
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixDuplicateExports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);