import fs from 'fs';
import path from 'path';

// Function to fix comprehensive syntax errors
function fixComprehensiveErrors(content) {
  let fixed = content;
  
  // Fix broken JSX return statements
  fixed = fixed.replace(/return\s*\(\s*<([^>]+)>\s*$/gm, (match, tagName) => {
    return `return (\n    <${tagName}>`;
  });
  
  // Fix malformed JSX with missing closing tags
  fixed = fixed.replace(/<([^>]+)>\s*$/gm, (match, tagName) => {
    if (tagName.includes('className') && !match.includes('</')) {
      const cleanTag = tagName.split(' ')[0];
      return match + `\n    </${cleanTag}>`;
    }
    return match;
  });
  
  // Fix broken object literals in arrays
  fixed = fixed.replace(/\[\s*\{\s*([^}]*?)\s*$/gm, (match, content) => {
    if (content.includes('title:') || content.includes('description:') || content.includes('icon:')) {
      const lines = content.split('\n').filter(line => line.trim());
      const fixedLines = lines.map(line => {
        if (line.includes(':') && !line.includes('=>') && !line.endsWith(',') && !line.endsWith('}')) {
          return line + ',';
        }
        return line;
      });
      return '[\n  {\n' + fixedLines.join('\n') + '\n  }';
    }
    return match;
  });
  
  // Fix missing closing brackets and parentheses
  fixed = fixed.replace(/\(\s*$/gm, '(\n');
  fixed = fixed.replace(/\[\s*$/gm, '[\n');
  fixed = fixed.replace(/\{\s*$/gm, '{\n');
  
  // Fix broken function declarations
  fixed = fixed.replace(/export\s+default\s+function\s+[^{]*\{\s*;\s*/g, (match) => {
    return match.replace(/\{\s*;\s*/, '{\n');
  });
  
  // Fix malformed arrow functions
  fixed = fixed.replace(/const\s+[^=]*=\s*\(\)\s*=>\s*\{\s*;\s*/g, (match) => {
    return match.replace(/\{\s*;\s*/, '{\n');
  });
  
  // Fix broken JSX expressions
  fixed = fixed.replace(/JSX\s+expressions\s+must\s+have\s+one\s+parent\s+element/g, '');
  
  // Fix missing closing tags in JSX
  fixed = fixed.replace(/<([^>]+)>\s*$/gm, (match, tagName) => {
    if (tagName.includes('div') || tagName.includes('section') || tagName.includes('main')) {
      return match + `\n    </${tagName.split(' ')[0]}>`;
    }
    return match;
  });
  
  // Fix broken imports
  fixed = fixed.replace(/import\s+.*?from\s+"([^"]*?)(?=\s*$)/gm, (match, importPath) => {
    if (!importPath.endsWith('"')) {
      return match + '"';
    }
    return match;
  });
  
  // Fix missing semicolons
  fixed = fixed.replace(/import\s+.*?from\s+"[^"]*"(?!\s*;)/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix broken component exports
  fixed = fixed.replace(/export\s+default\s+[^;]*$/gm, (match) => {
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
  
  // Fix broken return statements
  fixed = fixed.replace(/return\s*\(\s*$/gm, 'return (\n');
  
  // Fix missing closing parentheses in function calls
  fixed = fixed.replace(/\(\s*$/gm, '(\n');
  
  // Fix broken JSX fragments
  fixed = fixed.replace(/<>\s*$/gm, '<>\n');
  fixed = fixed.replace(/<\/>\s*$/gm, '</>\n');
  
  // Fix malformed object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]*?)(?=\s*$)/gm, (match, key, value) => {
    if (value && !value.endsWith(',') && !value.endsWith('}')) {
      return `${key}: ${value},`;
    }
    return match;
  });
  
  // Fix broken array elements
  fixed = fixed.replace(/([^,}])(?=\s*$)/gm, (match) => {
    if (match.trim() && !match.endsWith(',') && !match.endsWith('}') && !match.endsWith(']')) {
      return match + ',';
    }
    return match;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixComprehensiveErrors(content);
    
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
console.log('Starting comprehensive syntax error fixes...');
const { fixedCount, totalCount } = processDirectory('./app');
console.log(`\nCompleted! Fixed ${fixedCount} out of ${totalCount} files.`);