import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the common pattern: <div>, ... </div>)} ,
    const pattern1 = /<div>,\s*([\s\S]*?)\s*<\/div>\)\s*}\s*,/g;
    if (pattern1.test(content)) {
      content = content.replace(pattern1, (match, innerContent) => {
        return `<div>\n${innerContent.trim()}\n</div>\n  );\n}`;
      });
      modified = true;
    }

    // Fix the pattern: return ( <div>, ... </div>)} ,
    const pattern2 = /return\s*\(\s*<div>,\s*([\s\S]*?)\s*<\/div>\)\s*}\s*,/g;
    if (pattern2.test(content)) {
      content = content.replace(pattern2, (match, innerContent) => {
        return `return (\n    <div>\n${innerContent.trim()}\n    </div>\n  );\n}`;
      });
      modified = true;
    }

    // Fix missing semicolons after imports
    const importPattern = /import\s+.*\s+from\s+['"][^'"]+['"],/g;
    if (importPattern.test(content)) {
      content = content.replace(importPattern, (match) => {
        return match.replace(/,$/, ';');
      });
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find and fix all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Start fixing from the src/pages directory
const pagesDir = path.join(__dirname, 'src', 'pages');
console.log('Starting syntax error fixes...');
const totalFixed = fixAllFiles(pagesDir);
console.log(`Fixed ${totalFixed} files`);