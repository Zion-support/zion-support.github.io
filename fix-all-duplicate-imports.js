const fs = require('fs');
const path = require('path');

// Function to fix duplicate imports in a file
function fixDuplicateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate Footer imports
    if (content.includes("import Footer from '../components/Footer';") && content.includes("import Footer from '@/components/Footer';")) {
      content = content.replace(/import Footer from '\.\.\/components\/Footer';\n/, '');
      modified = true;
    }

    // Fix duplicate Head imports
    if (content.includes("import Head from 'next/head';") && content.includes("import Head from 'next/head';")) {
      // Remove duplicate lines
      const lines = content.split('\n');
      const seen = new Set();
      const newLines = lines.filter(line => {
        if (line.includes("import Head from 'next/head';")) {
          if (seen.has("import Head from 'next/head';")) {
            return false;
          }
          seen.add("import Head from 'next/head';");
        }
        return true;
      });
      if (newLines.length !== lines.length) {
        content = newLines.join('\n');
        modified = true;
      }
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
  if (fixDuplicateImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);