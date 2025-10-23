const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in React files
function fixReactFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing semicolons after arrays
    content = content.replace(/(\s+]\s*)(\n\s*return\s*\()/g, '$1;\n$2');
    modified = true;

    // Fix malformed return statements
    content = content.replace(/(\s+]\s*;\s*\n\s*)(\s*return\s*\()/g, '$1$2');
    modified = true;

    // Fix React.Fragment issues
    content = content.replace(/<React\.Fragment>/g, '<div>');
    content = content.replace(/<\/React\.Fragment>/g, '</div>');
    modified = true;

    // Fix missing closing braces for functions
    if (content.includes('const ') && content.includes('React.FC') && !content.includes('export default')) {
      // Find the last closing brace and add export
      const lastBraceIndex = content.lastIndexOf('}');
      if (lastBraceIndex > 0) {
        const beforeBrace = content.substring(0, lastBraceIndex);
        const afterBrace = content.substring(lastBraceIndex);
        
        // Extract function name
        const functionMatch = content.match(/const\s+(\w+):\s*React\.FC/);
        if (functionMatch) {
          const functionName = functionMatch[1];
          content = beforeBrace + '};\n\nexport default ' + functionName + ';';
          modified = true;
        }
      }
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

// Function to recursively find and fix all .tsx files
function fixAllReactFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllReactFiles(filePath);
    } else if (file.endsWith('.tsx') && !file.includes('test')) {
      if (fixReactFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Fix all React files in the app directory
const appDir = path.join(__dirname, 'app');
console.log('Fixing React files...');
const fixedCount = fixAllReactFiles(appDir);
console.log(`Fixed ${fixedCount} files`);