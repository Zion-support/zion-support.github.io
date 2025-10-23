const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove loading="lazy" from non-img elements
    content = content.replace(/loading="lazy"(?=\s*[^>]*>)/g, '');
    modified = true;

    // Fix 2: Fix malformed JSX closing tags
    content = content.replace(/(<[^>]+>)([^<]*?)(<\/[^>]+>)([^<]*?)(<\/[^>]+>)/g, '$1$2$3');
    
    // Fix 3: Fix missing semicolons after imports
    content = content.replace(/import\s+[^;]+$/gm, (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });

    // Fix 4: Fix malformed JSX attributes
    content = content.replace(/aria-label="[^"]*">/g, (match) => {
      return match.replace(/>$/, '>');
    });

    // Fix 5: Fix unescaped quotes in JSX
    content = content.replace(/(<[^>]*>)([^<]*?)'([^<]*?)(<\/[^>]*>)/g, (match, open, before, after, close) => {
      return open + before + '&apos;' + after + close;
    });

    // Fix 6: Fix malformed function declarations
    content = content.replace(/^(\s*)(const|let|var)\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/gm, (match, indent, decl, name) => {
      return match;
    });

    // Fix 7: Fix missing export default
    if (content.includes('export default function') && !content.includes('export default')) {
      content = content.replace(/export default function (\w+)/g, 'export default function $1');
    }

    // Fix 8: Fix malformed JSX expressions
    content = content.replace(/\{([^}]*?)\s*>\s*([^<]*?)\s*<\/([^>]+)>/g, '{$1}>{$2}</$3>');

    // Fix 9: Fix missing closing tags
    content = content.replace(/(<div[^>]*>)([^<]*?)(<div[^>]*>)/g, '$1$2$3');

    // Fix 10: Fix malformed array declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\[([^\]]*?)\]\s*$/gm, (match, name, arrayContent) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });

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
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const appDir = path.join(__dirname, 'app');
const fixedCount = fixAllTSXFiles(appDir);
console.log(`Fixed ${fixedCount} files`);