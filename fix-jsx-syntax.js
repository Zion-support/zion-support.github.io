const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// Function to fix JSX syntax errors in a file
function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has the problematic pattern
    if (content.includes('<Footer />') && content.includes('    </div>') && !content.includes('</>')) {
      // Add Footer import if missing
      if (!content.includes("import Footer from '../components/Footer'") && !content.includes("import Footer from './components/Footer'")) {
        const importMatch = content.match(/import.*from.*["'].*["'];\s*\n/);
        if (importMatch) {
          const lastImport = importMatch[importMatch.length - 1];
          const lastImportIndex = content.lastIndexOf(lastImport);
          const insertIndex = lastImportIndex + lastImport.length;
          content = content.slice(0, insertIndex) + "import Footer from '../components/Footer';\n" + content.slice(insertIndex);
          modified = true;
        }
      }

      // Fix the JSX structure
      // Replace the malformed ending with proper React Fragment closing
      content = content.replace(
        /      <Footer \/>\n    <\/div>\n  \)/,
        '      <Footer />\n    </>\n  )'
      );

      // Also handle cases where there might be different spacing
      content = content.replace(
        /<Footer \/>\s*<\/div>\s*\)\s*}/,
        '<Footer />\n    </>\n  )\n}'
      );

      if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath}`);
        return true;
      }
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find all .tsx files in app directory
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx') && item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
=======
// Function to fix common JSX syntax errors
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing quotes in className attributes
    content = content.replace(/className=\s*([^"'][^>\s]*)/g, (match, className) => {
      if (!className.startsWith('"') && !className.startsWith("'")) {
        modified = true;
        return `className="${className}"`;
      }
      return match;
    });
    
    // Fix missing quotes in other attributes
    content = content.replace(/(\w+)=\s*([^"'][^>\s]*)/g, (match, attr, value) => {
      if (!value.startsWith('"') && !value.startsWith("'") && !value.startsWith('{')) {
        modified = true;
        return `${attr}="${value}"`;
      }
      return match;
    });
    
    // Fix unclosed JSX tags - simplified approach
    // This is a complex fix that we'll handle more carefully
    
    // Fix missing closing tags for common elements
    const openTags = content.match(/<(\w+)(?![^>]*\/>)[^>]*>/g) || [];
    const closeTags = content.match(/<\/(\w+)>/g) || [];
    
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*$/gm, '<>');
    content = content.replace(/^\s*<\/>/gm, '</>');
    
    // Fix missing semicolons in imports
    content = content.replace(/import\s+([^;]+)\s*$/gm, 'import $1;');
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+):\s*"([^"]+)"\s*(\w+):/g, '$1: "$2",\n    $3:');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all component files
function findComponentFiles() {
  const files = [];
  
  function traverse(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse('/workspace/app');
>>>>>>> cursor/fix-errors-and-merge-to-main-4286
  return files;
}

// Main execution
<<<<<<< HEAD
console.log('Starting JSX syntax fix...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTSXFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJSXFile(file)) {
=======
const componentFiles = findComponentFiles();
console.log(`Found ${componentFiles.length} component files`);

let fixedCount = 0;
for (const filePath of componentFiles) {
  if (fixJSXSyntax(filePath)) {
>>>>>>> cursor/fix-errors-and-merge-to-main-4286
    fixedCount++;
  }
}

<<<<<<< HEAD
console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total files.`);
=======
console.log(`Fixed ${fixedCount} files`);
>>>>>>> cursor/fix-errors-and-merge-to-main-4286
