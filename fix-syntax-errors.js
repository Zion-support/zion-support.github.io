#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed import statements
    const importRegex = /import\s*{[^}]*}\s*from\s*['"][^'"]+['"];?/g;
    const imports = content.match(importRegex) || [];
    
    for (const importStatement of imports) {
      // Fix duplicate imports in the same statement
      let fixedImport = importStatement
        .replace(/,\s*,/g, ',') // Remove double commas
        .replace(/,\s*}/g, '}') // Remove trailing comma before closing brace
        .replace(/\s+/g, ' ') // Normalize whitespace
        .replace(/(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)/g, '$1, $2, $3, $4, $5, $6, $7, $8') // Fix space-separated imports
        .replace(/(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)/g, '$1, $2, $3, $4, $5, $6, $7') // Fix space-separated imports
        .replace(/(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)/g, '$1, $2, $3, $4, $5, $6') // Fix space-separated imports
        .replace(/(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)/g, '$1, $2, $3, $4, $5') // Fix space-separated imports
        .replace(/(\w+)\s+(\w+)\s+(\w+)\s+(\w+)/g, '$1, $2, $3, $4') // Fix space-separated imports
        .replace(/(\w+)\s+(\w+)\s+(\w+)/g, '$1, $2, $3') // Fix space-separated imports
        .replace(/(\w+)\s+(\w+)/g, '$1, $2') // Fix space-separated imports
        .replace(/,\s*from/g, ' from') // Fix comma before from
        .replace(/\s+from\s+/g, ' from ') // Normalize from keyword
        .replace(/;\s*$/g, ';'); // Ensure semicolon at end
      
      if (fixedImport !== importStatement) {
        content = content.replace(importStatement, fixedImport);
        modified = true;
      }
    }

    // Fix incomplete import statements
    content = content.replace(/import\s*{[^}]*\s*$/gm, (match) => {
      if (!match.includes('}')) {
        return match + '} from \'lucide-react\';';
      }
      return match;
    });

    // Fix duplicate return statements
    const returnMatches = content.match(/return\s*\(/g);
    if (returnMatches && returnMatches.length > 1) {
      // Find the first complete return statement and remove the rest
      const lines = content.split('\n');
      let inFirstReturn = false;
      let braceCount = 0;
      let firstReturnEnd = -1;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('return (')) {
          if (!inFirstReturn) {
            inFirstReturn = true;
            braceCount = 0;
          } else {
            // This is a duplicate return, remove it and everything after until the next function/component
            firstReturnEnd = i;
            break;
          }
        }
        
        if (inFirstReturn) {
          braceCount += (line.match(/\(/g) || []).length;
          braceCount -= (line.match(/\)/g) || []).length;
          
          if (braceCount === 0 && line.includes(');')) {
            firstReturnEnd = i + 1;
            break;
          }
        }
      }
      
      if (firstReturnEnd > 0) {
        // Remove duplicate return statements
        const beforeReturn = lines.slice(0, firstReturnEnd);
        const afterReturn = lines.slice(firstReturnEnd).filter(line => 
          !line.includes('return (') && 
          !line.includes('</div>') && 
          !line.includes('</main>') && 
          !line.includes('</>') &&
          !line.trim().startsWith('<') ||
          line.includes('export default')
        );
        
        content = beforeReturn.join('\n') + '\n' + afterReturn.join('\n');
        modified = true;
      }
    }

    // Fix malformed object literals
    content = content.replace(/{\s*,\s*name:/g, '{\n    name:');
    content = content.replace(/\[\s*{\s*,\s*name:/g, '[{\n    name:');
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+):\s*([^,\n}]+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix duplicate property names
    const lines = content.split('\n');
    const seenProps = new Set();
    const fixedLines = lines.map(line => {
      const propMatch = line.match(/^\s*(\w+):/);
      if (propMatch) {
        const propName = propMatch[1];
        if (seenProps.has(propName)) {
          return ''; // Remove duplicate property
        }
        seenProps.add(propName);
      }
      return line;
    });
    
    const newContent = fixedLines.join('\n');
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }

    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, (match, p1) => {
      if (p1 && !match.includes(';') && !match.includes('{') && !match.includes('}') && !match.includes('(') && !match.includes(')')) {
        return match + ';';
      }
      return match;
    });

    // Fix malformed function declarations
    content = content.replace(/const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*return\s*\(\s*<div>Coming Soon<\/div>\s*\);\s*};\s*return\s*\(/g, 'const $1: React.FC = () => {\n  return (');
    
    // Fix duplicate component names
    content = content.replace(/export default PagePage;/g, 'export default AiAnalyticsDashboardPage;');
    content = content.replace(/export default Page;/g, 'export default AiAnalyticsDashboardPage;');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && /\.(ts|tsx|js|jsx)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

const srcDir = path.join(__dirname, 'src');
const files = findSourceFiles(srcDir);

let fixedCount = 0;
let totalFiles = files.length;

console.log(`Found ${totalFiles} source files to check...`);

for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed syntax errors in ${fixedCount} out of ${totalFiles} files.`);

// Run linting to check if there are still errors
console.log('\nRunning linting check...');
try {
  execSync('npm run lint', { stdio: 'pipe' });
  console.log('✅ Linting passed!');
} catch (error) {
  console.log('❌ Linting still has errors. Running additional targeted fixes...');
  
  // Get specific files with errors
  try {
    const lintOutput = execSync('npm run lint 2>&1', { encoding: 'utf8' });
    const errorFiles = new Set();
    const lines = lintOutput.split('\n');
    
    for (const line of lines) {
      const match = line.match(/^\/workspace\/(src\/[^:]+):/);
      if (match) {
        errorFiles.add(match[1]);
      }
    }
    
    console.log(`Found ${errorFiles.size} files with remaining errors.`);
    
    // Apply additional targeted fixes
    for (const filePath of errorFiles) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // More aggressive fixes for specific patterns
        content = content.replace(/import\s*{[^}]*\s*$/gm, (match) => {
          if (!match.includes('}')) {
            return match + '} from \'lucide-react\';';
          }
          return match;
        });
        
        // Fix incomplete lines
        content = content.replace(/^\s*[^;{}()]*\s*$/gm, (match) => {
          if (match.trim() && !match.includes(';') && !match.includes('{') && !match.includes('}') && !match.includes('(') && !match.includes(')') && !match.includes('import') && !match.includes('export') && !match.includes('const') && !match.includes('function') && !match.includes('return') && !match.includes('<') && !match.includes('//')) {
            return match + ';';
          }
          return match;
        });
        
        if (content !== fs.readFileSync(filePath, 'utf8')) {
          fs.writeFileSync(filePath, content, 'utf8');
          modified = true;
        }
        
        if (modified) {
          console.log(`Applied additional fixes to: ${filePath}`);
        }
      } catch (err) {
        console.error(`Error in additional fixes for ${filePath}:`, err.message);
      }
    }
  } catch (err) {
    console.error('Error getting lint output:', err.message);
  }
}

console.log('\nSyntax error fixes completed!');