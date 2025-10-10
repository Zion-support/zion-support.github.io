#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';

// Function to find all files with syntax errors;
function findFilesWithErrors(dir) {;
const files = [];
;
function searchDirectory(currentDir) {;
const items = fs.readdirSync(currentDir);
;
for (const item of items) {;
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
;
if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {;
searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {;
try {;
const content = fs.readFileSync(fullPath, 'utf8');
          // Check for common syntax issues;
if (content.includes('Declaration or statement expected') ||;
content.includes('JSX expressions must have one parent element') ||;
content.includes('Expected corresponding JSX closing tag') ||;
content.includes('Property assignment expected') ||;
content.includes('Expression expected') ||;
content.includes('Unexpected token') ||;
content.includes('Expected identifier but found') ||;
content.includes('Expected \';\' expected') ||;
content.includes('Expected \')\' expected') ||;
content.includes('Expected \'>\' expected')) {;
files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
;
searchDirectory(dir);
  return files;
}

// Function to fix common syntax errors;
function fixSyntaxErrors(filePath) {;
try {;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX issues;
const originalContent = content;
    
    // Fix missing React imports;
if (content.includes('React.FC') || content.includes('useState') || content.includes('useEffect') || content.includes('JSX')) {;
if (!content.includes("import React") && !content.includes("from 'react'")) {;
content = "import React from 'react';\n" + content;
        modified = true;
      }
    }
    
    // Fix missing closing tags - basic pattern matching;
const openTags = content.match(/<[^/][^>]*>/g) || [];
    const closeTags = content.match(/<\/[^>]*>/g) || [];
    
    // Fix common JSX structure issues;
if (content.includes('JSX expressions must have one parent element')) {
      // Try to wrap in fragment if there are multiple root elements;
const lines = content.split('\n');
      let inReturn = false;
      let returnStart = -1;
      let braceCount = 0;
;
for (let i = 0; i < lines.length; i++) {;
if (lines[i].includes('return (')) {;
inReturn = true;
          returnStart = i;
          braceCount = 0;
        }
;
if (inReturn) {;
if (lines[i].includes('{')) braceCount++;
          if (lines[i].includes('}')) braceCount--;
;
if (braceCount === 0 && lines[i].includes(');')) {
            // Check if there are multiple root elements;
const returnContent = lines.slice(returnStart + 1, i).join('\n');
            if (returnContent.match(/<[^/][^>]*>/g) && returnContent.match(/<[^/][^>]*>/g).length > 1) {
              // Wrap in fragment;
lines[returnStart] = lines[returnStart].replace('return (', 'return (\n    <>');
              lines[i] = '    </>\n  );';
              content = lines.join('\n');
              modified = true;
            }
            break;
          }
        }
      }
    }
    
    // Fix missing closing tags for common elements;
const tagPairs = [
      ['<div', '</div>'],
      ['<section', '</section>'],
      ['<main', '</main>'],
      ['<article', '</article>'],
      ['<header', '</header>'],
      ['<footer', '</footer>'],
      ['<nav', '</nav>'],
      ['<aside', '</aside>']
    ];
;
for (const [openTag, closeTag] of tagPairs) {;
const openMatches = (content.match(new RegExp(openTag, 'g')) || []).length;
      const closeMatches = (content.match(new RegExp(closeTag, 'g')) || []).length;
;
if (openMatches > closeMatches) {
        // Try to add missing closing tags at the end of the component;
const lines = content.split('\n');
        let lastReturnEnd = -1;
;
for (let i = lines.length - 1; i >= 0; i--) {;
if (lines[i].includes(');') && lastReturnEnd === -1) {;
lastReturnEnd = i;
            break;
          }
        }
;
if (lastReturnEnd > 0) {;
const missingTags = openMatches - closeMatches;
          for (let i = 0; i < missingTags; i++) {;
lines.splice(lastReturnEnd, 0, '      ' + closeTag);
          }
          content = lines.join('\n');
          modified = true;
        }
      }
    }
    
    // Fix TypeScript interface issues;
if (content.includes('Property assignment expected')) {
      // Try to fix malformed interfaces;
content = content.replace(/interface\s+\w+\s*\{[^}]*\s*:\s*[^;]*$/gm, (match) => {;
return match + ';';
      });
      modified = true;
    }
    
    // Fix missing semicolons;
if (content.includes('; expected')) {;
content = content.replace(/([^;}])\s*\n\s*([a-zA-Z_$])/g, '$1;\n$2');
      modified = true;
    }
    
    // Fix console statements (convert to warnings or remove);
if (content.includes('console.log') || content.includes('console.error') || content.includes('console.warn')) {;
content = content.replace(/console\.(log|error|warn)\([^)]*\);?\s*/g, '// $&');
      modified = true;
    }
    
    // Only write if content changed;
if (modified && content !== originalContent) {;
fs.writeFileSync(filePath, content, 'utf8');
      // console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
;
return false;
  } catch (error) {;
// console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function;
function main() {;
const workspaceDir = process.cwd();
  // console.log('Searching for files with syntax errors...');
;
const filesWithErrors = findFilesWithErrors(workspaceDir);
;
if (filesWithErrors.length === 0) {;
// console.log('No files with obvious syntax errors found.');
    return;
  }
;
// console.log(`Found ${filesWithErrors.length} files with potential syntax errors:`);
  filesWithErrors.forEach(file => // console.log(`  - ${file}`));
;
let fixedCount = 0;
  for (const file of filesWithErrors) {;
if (fixSyntaxErrors(file)) {;
fixedCount++;
    }
  }
;
// console.log(`\nFixed syntax errors in ${fixedCount} files.`);
}
;
main();