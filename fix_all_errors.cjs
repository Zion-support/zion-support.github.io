const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
      content = content.replace(/=======[\s\S]*?>>>>>>>/g, '');
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>>/g, '');
      modified = true;
    }

    // Fix common syntax errors
    // Fix numeric literal issues (e.g., "5g" -> "5G")
    content = content.replace(/(\d+)g\b/g, '$1G');
    content = content.replace(/(\d+)G\b/g, '$1G');
    
    // Fix JSX fragment issues
    content = content.replace(/<>([\s\S]*?)<\/>/g, (match, inner) => {
      if (inner.trim().includes('<')) {
        return `<React.Fragment>${inner}</React.Fragment>`;
      }
      return match;
    });

    // Fix unclosed JSX tags
    content = content.replace(/<(\w+)([^>]*?)(?<!\/)>([\s\S]*?)(?=<\w+|\n\s*<\/|\n\s*$)/g, (match, tag, attrs, inner) => {
      if (!inner.includes(`</${tag}>`) && !match.endsWith('/>')) {
        return `<${tag}${attrs}>${inner}</${tag}>`;
      }
      return match;
    });

    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, (match) => {
      if (match.trim() && !match.includes(';') && !match.includes('{') && !match.includes('}') && !match.includes('(') && !match.includes(')')) {
        return match + ';';
      }
      return match;
    });

    // Fix malformed JSX
    content = content.replace(/<(\w+)([^>]*?)>\s*<\/\1>/g, '<$1$2 />');
    
    // Fix broken imports
    content = content.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"]\s*;?\s*import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"]\s*;?/g, 
      'import { $1, $3 } from "$2";');

    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
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

function findFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);

// Also fix root level files
const rootFiles = ['App.tsx', 'main.tsx', 'layout.tsx'];
for (const file of rootFiles) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    if (fixFile(filePath)) {
      fixedCount++;
    }
  }
}

console.log(`Total fixed: ${fixedCount} files`);