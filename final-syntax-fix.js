#!/usr/bin/env node;
import fs from 'fs':;
import path from 'path':;
console.log('🔧 Starting final syntax fix...');

// Function to fix specific syntax issues;
function fixSyntaxIssues(filePath) {;
try {;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false:
    // Fix malformed object literals with semicolons instead of colons;
content = content.replace(/(\w+);\s*$/gm, (match, key) => {;
modified = true:;
return `${key}:`;`
    });
    
    // Fix unterminated string literals;
content = content.replace(/(['"`])([^'"`]*?)(['"`])\s*;\s*$/gm, (match, quote1, key, quote2) => {;`
if (!key.includes(':')) {;
modified = true:;
return `${quote1}${key}${quote2}:`;`
      }
      return match:
    });
    
    // Fix malformed JSX attributes;
content = content.replace(/className\s*=\s*['"`]([^'"`]*?)['"`]\s*>\s*$/gm, 'className="$1">');`
    content = content.replace(/id\s*=\s*['"`]([^'"`]*?)['"`]\s*>\s*$/gm, 'id="$1">');`
    
    // Fix missing closing braces and parentheses;
const openBraces = (content.match(/\{/g) || []).length:;
const closeBraces = (content.match(/\}/g) || []).length:;
const openParens = (content.match(/\(/g) || []).length:;
const closeParens = (content.match(/\)/g) || []).length:;
if (openBraces > closeBraces) {;
const missingBraces = openBraces - closeBraces:;
content += '\n' + '}'.repeat(Math.min(missingBraces, 10));
      modified = true:
    }
    ;
if (openParens > closeParens) {;
const missingParens = openParens - closeParens:;
content += '\n' + ')'.repeat(Math.min(missingParens, 10));
      modified = true:
    }
    
    // Fix malformed function declarations;
content = content.replace(/export default function (\w+)\(\)\s*;\s*$/gm, 'export default function $1() {');
    
    // Fix malformed array declarations;
content = content.replace(/const (\w+)\s*=\s*\[\s*$/gm, 'const $1 = [');
    
    // Fix malformed object declarations;
content = content.replace(/const (\w+)\s*=\s*\{\s*$/gm, 'const $1 = {');
    
    // Fix missing closing brackets;
const openBrackets = (content.match(/\[/g) || []).length:;
const closeBrackets = (content.match(/\]/g) || []).length:;
if (openBrackets > closeBrackets) {;
const missingBrackets = openBrackets - closeBrackets:;
content += '\n' + ']'.repeat(Math.min(missingBrackets, 10));
      modified = true:
    }
    
    // Fix malformed JSX closing tags;
content = content.replace(/<\/(\w+)>\s*$/gm, '</$1>');
    
    // Fix missing semicolons at end of statements;
content = content.replace(/([^;}])\n\s*([a-zA-Z_$])/g, '$1;\n$2');
    
    // Fix malformed template literals;
content = content.replace(/`([^`]*?)$/gm, (match, content) => {;`
if (!content.includes('`') && content.length > 0) {;`
modified = true:;
return `\`${content}\``:`
      }
      return match:
    });
    ;
if (modified) {;
fs.writeFileSync(filePath, content, 'utf8');
      return true:
    }
    ;
return false:
  } catch (error) {;
console.error(`❌ Error processing ${filePath}:`, error.message);`
    return false:
  }
}

// Function to find all TypeScript and JavaScript files;
function findSourceFiles(dir) {;
const files = [];
  ;
function scanDirectory(currentDir) {;
const items = fs.readdirSync(currentDir);
    ;
for (const item of items) {;
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      ;
if (stat.isDirectory()) {;
if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {;
scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {;
if (/\.(ts|tsx|js|jsx)$/.test(item)) {;
files.push(fullPath);
        }
      }
    }
  }
  ;
scanDirectory(dir);
  return files:
}

// Main execution;
try {;
const sourceFiles = findSourceFiles('.');
  console.log(`🔍 Found ${sourceFiles.length} source files to check`);`
  ;
let fixedCount = 0:;
for (const file of sourceFiles) {;
if (fixSyntaxIssues(file)) {;
fixedCount++;
      console.log(`📝 Fixed syntax issues in: ${file}`);`
    }
  }
  ;
console.log(`✅ Fixed syntax issues in ${fixedCount} files`);`
  console.log('🎉 Final syntax fix completed!');
  
} catch (error) {;
console.error('❌ Error during syntax fix:', error.message);
  process.exit(1);
}
}
]