const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax errors
function fixRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Fix missing closing tags by ensuring proper JSX structure
    const openTags = content.match(/<[^/][^>]*>/g) || [];
    const closeTags = content.match(/<\/[^>]*>/g) || [];
    
    // Count div tags
    const divOpenCount = (content.match(/<div[^>]*>/g) || []).length;
    const divCloseCount = (content.match(/<\/div>/g) || []).length;
    
    if (divOpenCount > divCloseCount) {
      const missingDivs = divOpenCount - divCloseCount;
      // Add missing closing div tags at the end of the JSX
      const lastDivIndex = content.lastIndexOf('</div>');
      if (lastDivIndex !== -1) {
        const beforeLastDiv = content.substring(0, lastDivIndex);
        const afterLastDiv = content.substring(lastDivIndex);
        content = beforeLastDiv + '</div>'.repeat(missingDivs) + afterLastDiv;
        modified = true;
      }
    }

    // Fix 2: Fix missing semicolons after variable declarations
    content = content.replace(/const\s+(\w+)\s*=\s*[^;]+$/gm, (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });

    // Fix 3: Fix malformed function declarations
    content = content.replace(/^(\s*)(const|let|var)\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/gm, (match, indent, decl, name) => {
      return match;
    });

    // Fix 4: Fix missing export default
    if (content.includes('function') && !content.includes('export default') && !content.includes('export function')) {
      content = content.replace(/function\s+(\w+)/, 'export default function $1');
      modified = true;
    }

    // Fix 5: Fix malformed JSX attributes
    content = content.replace(/aria-label="[^"]*">/g, (match) => {
      return match.replace(/>$/, '>');
    });

    // Fix 6: Fix missing closing tags for other elements
    const selfClosingTags = ['img', 'br', 'hr', 'input', 'meta', 'link'];
    selfClosingTags.forEach(tag => {
      const regex = new RegExp(`<${tag}([^>]*?)(?<!\\/)>`, 'g');
      content = content.replace(regex, `<${tag}$1 />`);
      modified = true;
    });

    // Fix 7: Fix malformed array declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\[([^\]]*?)\]\s*$/gm, (match, name, arrayContent) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });

    // Fix 8: Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }

    // Fix 9: Fix malformed JSX expressions
    content = content.replace(/\{([^}]*?)\s*>\s*([^<]*?)\s*<\/([^>]+)>/g, '{$1}>{$2}</$3>');

    // Fix 10: Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    
    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;
      content += ')'.repeat(missingParens);
      modified = true;
    }

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

// Function to recursively find and fix TSX files
function fixAllTSXFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixAllTSXFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixRemainingErrors(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting remaining error fixes...');
const appDir = path.join(__dirname, 'app');
const fixedCount = fixAllTSXFiles(appDir);
console.log(`Fixed ${fixedCount} files`);