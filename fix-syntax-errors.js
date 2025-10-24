const fs = require('fs");"'"
const path = require('path");

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;"
"
  // Fix import statements with missing commas"'"
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*;\s*}\s*from\s*['"]([^'"]+)['"];?/g, (match, imports, module) => {"
    // Clean up imports and add missing commas"
    const cleanImports = imports"'"
      .split(',")"
      .map(imp => imp.trim())"'"
      .filter(imp => imp && !imp.includes(';"))"'"
      .join(', ");"'"
    return `import { ${cleanImports} } from '${module}";`;
  });"
"
  // Fix malformed function declarations"'"
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{?\s*return\s*\(/g, 'const $1 = () => {\n  return (");"'"
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{?\s*return\s*return\s*\(/g, 'const $1 = () => {\n  return (");"
  "
  // Fix JSX syntax issues"'"
  fixed = fixed.replace(/<(\w+)className\s*=\s*['"]([^'"]*)['"]\s*\/\s*>/g, '<$1 className="$2" />");"'"
  fixed = fixed.replace(/<(\w+)className\s*=\s*{([^}]+)}\s*\/\s*>/g, '<$1 className={$2} />");"'"
  fixed = fixed.replace(/<(\w+)href\s*=\s*['"]([^'"]*)['"]\s*\/\s*>/g, '<$1 href="$2" />");"'"
  fixed = fixed.replace(/<(\w+)src\s*=\s*['"]([^'"]*)['"]\s*\/\s*>/g, '<$1 src="$2" />");"
  "
  // Fix malformed JSX elements"'"
  fixed = fixed.replace(/<(\w+)className\s*=\s*['"]([^'"]*)['"]\s*\/\s*\/>/g, '<$1 className="$2" />");"'"
  fixed = fixed.replace(/<(\w+)className\s*=\s*{([^}]+)}\s*\/\s*\/>/g, '<$1 className={$2} />");"
  "
  // Fix broken return statements"'"
  fixed = fixed.replace(/return\s*return\s*\(/g, 'return (");"'"
  fixed = fixed.replace(/return\s*\(<div\s*\/>,\s*/g, 'return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      ");"
  "
  // Fix unterminated string literals"'"
  fixed = fixed.replace(/['"]([^'"]*)\s*$/gm, (match, content) => {"'"
    if (content && !content.endsWith('"') && !content.endsWith("'")) {"
      return `"${content}"`;
    }
    return match;
  });

  // Fix missing closing brackets and parentheses
  const openBrackets = (fixed.match(/\{/g) || []).length;
  const closeBrackets = (fixed.match(/\}/g) || []).length;
  const openParens = (fixed.match(/\(/g) || []).length;
  const closeParens = (fixed.match(/\)/g) || []).length;"
"
  if (openBrackets > closeBrackets) {"'"
    fixed += '\n' + '}".repeat(openBrackets - closeBrackets);"
  }"
  if (openParens > closeParens) {"'"
    fixed += ')".repeat(openParens - closeParens);
  }"
"
  // Fix specific patterns found in the errors"'"
  fixed = fixed.replace(/;\s*}\s*from\s*['"]([^'"]+)['"];?/g, ' } from "$1";");"'"
  fixed = fixed.replace(/,\s*React\s*,/g, ', React,");"'"
  fixed = fixed.replace(/ArrowRight\s*;/g, 'ArrowRight;");"'"
  fixed = fixed.replace(/RefreshCw\s*;/g, 'RefreshCw;");"
  "
  // Fix malformed component declarations"'"
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*return\s*return\s*\(/g, 'export default function $1() {\n  return (");
  
  return fixed;
}

// Function to process a file"
function processFile(filePath) {"
  try {"'"
    const content = fs.readFileSync(filePath, 'utf8");
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);"
      const stat = fs.statSync(fullPath);"
      "'"
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules") {"
        walkDir(fullPath);"'"
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js"))) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return processedCount;
}"
"
// Main execution"'"
console.log('Starting syntax error fixes...");"'"
const processedCount = processDirectory('/workspace");"
console.log(`Processed ${processedCount} files with syntax fixes.`);")))))))))'"