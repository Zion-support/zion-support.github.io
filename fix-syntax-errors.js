import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors in a file
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals
  fixed = fixed.replace(/import\s+.*?from\s+"([^"]*?)(?=\s*$)/gm, (match, importPath) => {
    if (!importPath.endsWith('"')) {
      return match + '"';
    }
    return match;
  });
  
  // Fix missing semicolons after imports
  fixed = fixed.replace(/import\s+.*?from\s+"[^"]*"(?!\s*;)/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*?)(?=\s*$)/gm, (match, className) => {
    if (!className.endsWith('"')) {
      return match + '"';
    }
    return match;
  });
  
  // Fix merge conflict markers
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
  fixed = fixed.replace(/<<<<<<< [^\n]*[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
  
  // Fix broken function declarations
  fixed = fixed.replace(/export\s+default\s+function\s+[^{]*\{\s*;\s*/g, (match) => {
    return match.replace(/\{\s*;\s*/, '{\n');
  });
  
  // Fix malformed object literals
  fixed = fixed.replace(/\{\s*([^}]*?)\s*$/gm, (match, content) => {
    if (content.includes('title:') || content.includes('description:') || content.includes('icon:')) {
      // This looks like an object literal that needs fixing
      const lines = content.split('\n').filter(line => line.trim());
      const fixedLines = lines.map(line => {
        if (line.includes(':') && !line.includes('=>') && !line.endsWith(',') && !line.endsWith('}')) {
          return line + ',';
        }
        return line;
      });
      return '{\n' + fixedLines.join('\n') + '\n}';
    }
    return match;
  });
  
  // Fix broken JSX closing tags
  fixed = fixed.replace(/<([^>]+)>\s*$/gm, (match, tagName) => {
    if (tagName.includes('className') && !match.includes('</')) {
      const cleanTag = tagName.split(' ')[0];
      return match + `</${cleanTag}>`;
    }
    return match;
  });
  
  // Fix missing closing quotes in JSX
  fixed = fixed.replace(/content="([^"]*?)(?=\s*$)/gm, (match, content) => {
    if (!content.endsWith('"')) {
      return match + '"';
    }
    return match;
  });
  
  // Fix broken return statements
  fixed = fixed.replace(/return\s*\(\s*$/gm, 'return (\n');
  
  // Fix missing closing parentheses
  fixed = fixed.replace(/\(\s*$/gm, '(\n');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
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

// Function to recursively find and process all TypeScript files
function processDirectory(dirPath) {
  let fixedCount = 0;
  let totalCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        totalCount++;
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return { fixedCount, totalCount };
}

// Main execution
console.log('Starting syntax error fixes...');
const { fixedCount, totalCount } = processDirectory('./app');
console.log(`\nCompleted! Fixed ${fixedCount} out of ${totalCount} files.`);