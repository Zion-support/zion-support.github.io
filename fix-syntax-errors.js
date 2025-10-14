import fs from 'fs';
import { execSync } from 'child_process';

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix );} pattern
    if (content.includes(');}')) {
      content = content.replace(/\);}/g, ');');
      modified = true;
    }

    // Fix }' pattern
    if (content.includes("}'")) {
      content = content.replace(/}'/g, '}');
      modified = true;
    }

    // Fix merge conflict markers
    if (content.includes('ursor/fix-errors-and-merge-to-main')) {
      content = content.replace(/ursor\/fix-errors-and-merge-to-main-\w+/g, '');
      modified = true;
    }

    // Fix unterminated string literals with semicolons
    content = content.replace(/";/g, '"');
    content = content.replace(/';/g, "'");
    content = content.replace(/`;/g, '`');

    // Fix JSX attributes with semicolons
    content = content.replace(/className="([^"]*)";/g, 'className="$1"');
    content = content.replace(/className='([^']*)';/g, "className='$1'");

    // Fix function calls with semicolons
    content = content.replace(/\(\);}/g, '();');
    content = content.replace(/\(\);$/gm, '();');

    // Fix missing closing tags
    content = content.replace(/<([^>]+)>\s*$/gm, '<$1></$1>');

    if (modified) {
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

// Get all TSX files
const files = execSync('find app -name "*.tsx"', { encoding: 'utf8' }).trim().split('\n');

let fixedCount = 0;
files.forEach(file => {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);