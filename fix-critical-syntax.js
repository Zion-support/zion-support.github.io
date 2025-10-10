#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix critical syntax errors;
function fixCriticalSyntax(content, filePath) {;
let fixed = content;
  
  // Fix missing closing braces in try-catch blocks
}
  fixed = fixed.replace(/try\s*\{[^}]*$/gm, (match) => {
}
    if (!match.includes('}')) {
      return match + '\n  } catch (error) {\n    console.error("Error:", error);\n  }';
    }
    return match;
  });
  
  // Fix missing closing braces in object literals
  fixed = fixed.replace(/(\w+)\s*:\s*\{[^}]*$/gm, (match, key) => {
}
    if (!match.includes('}')) {
      return match + '\n}';
    }
    return match;
  });
  
  // Fix missing closing parentheses in function calls
  fixed = fixed.replace(/(\w+)\s*\(\s*[^)]*$/gm, (match) => {
    if (match.includes('(') && !match.includes(')')) {
      return match + ')';
}
    return match;
  });
  
  // Fix missing semicolons after statements
  fixed = fixed.replace(/([^;}\s])\s*\n\s*(const|let|var|function|class|interface|type|enum|export)\s/g, '$1;\n$2 ');
  
  // Fix missing closing brackets in arrays
  fixed = fixed.replace(/\[\s*[^\]*$/gm, (match) => {
    if (!match.includes(']')) {
      return match + ']';
}
    return match;
  });
  
  // Fix JSX fragment issues
  fixed = fixed.replace(/<>([^<]*?)(?!<\/>)$/gm, '<>\\$1</>');
  
  // Fix missing closing JSX tags
  fixed = fixed.replace(/<([a-zA-Z][a-zA-Z0-9]*)\s*[^>]*>(?!.*<\/\1>)(?!.*\/>)/gs, (match, tagName) => {
}
    if (match.includes('/>') || match.includes(`</${tagName}>`)) {
      return match;
    }
    return match + `</${tagName}>`;
  });
  
  // Fix TypeScript interface issues
  fixed = fixed.replace(/interface\s+(\w+)\s*\{[^}]*$/gm, (match, name) => {
}
    if (!match.includes('}')) {
      return match + '\n}';
    }
    return match;
  });
  
  // Fix enum issues
  fixed = fixed.replace(/enum\s+(\w+)\s*\{[^}]*$/gm, (match, name) => {
}
    if (!match.includes('}')) {
      return match + '\n}';
    }
    return match;
  });
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\w+)\s*:\s*[^,}\n]+\s*\n\s*(\w+)\s*:/g, '$1: $2,');
  
  // Fix missing commas in function parameters
  fixed = fixed.replace(/(\w+)\s+(\w+)\s+(\w+)\s*\)/g, '$1 $2, $3)');
  
  // Fix missing closing braces in switch statements
  fixed = fixed.replace(/switch\s*\([^)]*\)\s*\{[^}]*$/gm, (match) => {
}
    if (!match.includes('}')) {
      return match + '\n}';
    }
    return match;
  });
  
  // Fix missing closing braces in if statements
  fixed = fixed.replace(/if\s*\([^)]*\)\s*\{[^}]*$/gm, (match) => {
}
    if (!match.includes('}')) {
      return match + '\n}';
    }
    return match;
  });
  
  // Fix missing closing braces in for loops
  fixed = fixed.replace(/for\s*\([^)]*\)\s*\{[^}]*$/gm, (match) => {
}
    if (!match.includes('}')) {
      return match + '\n}';
    }
    return match;
  });
  
  // Fix missing closing braces in while loops
  fixed = fixed.replace(/while\s*\([^)]*\)\s*\{[^}]*$/gm, (match) => {
}
    if (!match.includes('}')) {
      return match + '\n}';
    }
    return match;
  });
  
  // Fix missing closing braces in do-while loops
  fixed = fixed.replace(/do\s*\{[^}]*$/gm, (match) => {
}
    if (!match.includes('}')) {
      return match + '\n} while (false);';
    }
    return match;
  });
  
  // Fix missing closing braces in arrow functions
  fixed = fixed.replace(/=>\s*\{[^}]*$/gm, (match) => {
}
    if (!match.includes('}')) {
      return match + '\n}';
    }
    return match;
  });
  
  // Fix missing closing braces in regular functions
  fixed = fixed.replace(/function\s+\w+\s*\([^)]*\)\s*\{[^}]*$/gm, (match) => {
}
    if (!match.includes('}')) {
      return match + '\n}';
    }
    return match;
  });
  
  // Fix missing closing braces in class methods
  fixed = fixed.replace(/(\w+)\s*\([^)]*\)\s*\{[^}]*$/gm, (match, methodName) => {
}
    if (!match.includes('}') && !match.includes('class') && !match.includes('interface')) {
      return match + '\n}';
    }
    return match;
  });
  
  return fixed;
}

// Function to process a single file;
function processFile(filePath) {
  try {;
const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixCriticalSyntax(content, filePath);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
}
  } catch (error) {
    console.error("Error:", error);
}
      console.log(`✓ Fixed critical syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
}
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
// Function to find all TypeScript/JavaScript files;
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {;
const files = [];
  
  function traverse(currentDir) {;
const items = fs.readdirSync(currentDir);
    
    for (const item of, items) {;
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
}
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
  
  traverse(dir);
  return files;
}

// Main execution;
const workspaceDir = __dirname;
console.log('🔧 Fixing critical syntax errors...');

const files = findFiles(workspaceDir);
let processedCount = 0;
let fixedCount = 0;

for (const file of, files) {
  if (processFile(file)) {
    fixedCount++;
}
  processedCount++;
}

console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${processedCount}`);
console.log(`   Files with critical fixes: ${fixedCount}`);
console.log(`\n✅ Critical syntax error fixes complete!`);