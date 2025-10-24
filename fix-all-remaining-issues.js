const fs = require('fs');
const path = require('path');

// Function to fix all remaining issues in a file
function fixAllIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed import statements (missing newlines)
    if (content.includes("import Footer from '@/components/Footer';export default function")) {
      content = content.replace(
        /import Footer from '@\/components\/Footer';export default function/g,
        "import Footer from '@/components/Footer';\n\nexport default function"
      );
      modified = true;
    }

    // Fix duplicate exports
    const duplicateExportPattern = /export default function (\w+)\([^)]*\)\s*\{[\s\S]*?\}\s*;\s*export default \w+;?\s*$/gm;
    if (duplicateExportPattern.test(content)) {
      content = content.replace(duplicateExportPattern, (match) => {
        return match.replace(/\s*;\s*export default \w+;?\s*$/, '');
      });
      modified = true;
    }

    // Fix missing newlines between imports and function
    if (content.includes("import Footer from '@/components/Footer';\nexport default function")) {
      content = content.replace(
        /import Footer from '@\/components\/Footer';\nexport default function/g,
        "import Footer from '@/components/Footer';\n\nexport default function"
      );
      modified = true;
    }

    // Fix missing closing tags
    if (content.includes('<Footer') && !content.includes('</>')) {
      content = content.replace(/(<Footer[^>]*\/>)\s*$/, '$1\n    </>');
      modified = true;
    }

    // Fix missing semicolon after closing brace
    if (content.includes('}\nexport default')) {
      content = content.replace(/}\nexport default/g, '}\n\nexport default');
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
  if (fixAllIssues(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);