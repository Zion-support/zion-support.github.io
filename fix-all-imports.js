#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix all import and syntax issues
function fixAllIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed import statements with duplicate imports
    content = content.replace(/import\s*{[^}]*,\s*[^}]*,\s*import\s*{/g, (match) => {
      const firstPart = match.split(', import')[0];
      return firstPart + '} from \'lucide-react\';\nimport {';
    });

    // Fix incomplete import statements
    content = content.replace(/import\s*{[^}]*\s*$/gm, (match) => {
      if (!match.includes('}')) {
        return match + '} from \'lucide-react\';';
      }
      return match;
    });

    // Fix space-separated imports
    content = content.replace(/import\s*{\s*(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s*}/g, 'import { $1, $2, $3, $4, $5, $6, $7, $8 }');
    content = content.replace(/import\s*{\s*(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s*}/g, 'import { $1, $2, $3, $4, $5, $6, $7 }');
    content = content.replace(/import\s*{\s*(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s*}/g, 'import { $1, $2, $3, $4, $5, $6 }');
    content = content.replace(/import\s*{\s*(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s*}/g, 'import { $1, $2, $3, $4, $5 }');
    content = content.replace(/import\s*{\s*(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s*}/g, 'import { $1, $2, $3, $4 }');
    content = content.replace(/import\s*{\s*(\w+)\s+(\w+)\s+(\w+)\s*}/g, 'import { $1, $2, $3 }');
    content = content.replace(/import\s*{\s*(\w+)\s+(\w+)\s*}/g, 'import { $1, $2 }');

    // Fix duplicate imports in the same line
    content = content.replace(/import\s*{[^}]*,\s*[^}]*,\s*[^}]*,\s*[^}]*,\s*[^}]*,\s*[^}]*,\s*[^}]*,\s*[^}]*\s*from/g, (match) => {
      const imports = match.match(/\w+/g) || [];
      const uniqueImports = [...new Set(imports)];
      return `import { ${uniqueImports.join(', ')} } from`;
    });

    content = content.replace(/import\s*{[^}]*,\s*[^}]*,\s*[^}]*,\s*[^}]*,\s*[^}]*,\s*[^}]*,\s*[^}]*\s*from/g, (match) => {
      const imports = match.match(/\w+/g) || [];
      const uniqueImports = [...new Set(imports)];
      return `import { ${uniqueImports.join(', ')} } from`;
    });

    content = content.replace(/import\s*{[^}]*,\s*[^}]*,\s*[^}]*,\s*[^}]*,\s*[^}]*,\s*[^}]*\s*from/g, (match) => {
      const imports = match.match(/\w+/g) || [];
      const uniqueImports = [...new Set(imports)];
      return `import { ${uniqueImports.join(', ')} } from`;
    });

    content = content.replace(/import\s*{[^}]*,\s*[^}]*,\s*[^}]*,\s*[^}]*,\s*[^}]*\s*from/g, (match) => {
      const imports = match.match(/\w+/g) || [];
      const uniqueImports = [...new Set(imports)];
      return `import { ${uniqueImports.join(', ')} } from`;
    });

    content = content.replace(/import\s*{[^}]*,\s*[^}]*,\s*[^}]*,\s*[^}]*\s*from/g, (match) => {
      const imports = match.match(/\w+/g) || [];
      const uniqueImports = [...new Set(imports)];
      return `import { ${uniqueImports.join(', ')} } from`;
    });

    content = content.replace(/import\s*{[^}]*,\s*[^}]*,\s*[^}]*\s*from/g, (match) => {
      const imports = match.match(/\w+/g) || [];
      const uniqueImports = [...new Set(imports)];
      return `import { ${uniqueImports.join(', ')} } from`;
    });

    content = content.replace(/import\s*{[^}]*,\s*[^}]*\s*from/g, (match) => {
      const imports = match.match(/\w+/g) || [];
      const uniqueImports = [...new Set(imports)];
      return `import { ${uniqueImports.join(', ')} } from`;
    });

    // Fix malformed object literals
    content = content.replace(/\[\s*{\s*,\s*name:/g, '[{\n    name:');
    content = content.replace(/{\s*,\s*name:/g, '{\n    name:');

    // Fix missing commas in object properties
    content = content.replace(/(\w+):\s*([^,\n}]+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');

    // Fix duplicate property names in objects
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

    // Fix malformed function declarations
    content = content.replace(/const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*return\s*\(\s*<div>Coming Soon<\/div>\s*\);\s*};\s*return\s*\(/g, 'const $1: React.FC = () => {\n  return (');
    
    // Fix duplicate return statements
    const returnMatches = content.match(/return\s*\(/g);
    if (returnMatches && returnMatches.length > 1) {
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
        const beforeReturn = lines.slice(0, firstReturnEnd);
        const afterReturn = lines.slice(firstReturnEnd).filter(line => 
          !line.includes('return (') && 
          !line.includes('</div>') && 
          !line.includes('</main>') && 
          !line.includes('</>') ||
          line.includes('export default')
        );
        
        content = beforeReturn.join('\n') + '\n' + afterReturn.join('\n');
        modified = true;
      }
    }

    // Fix stray closing parentheses and braces
    content = content.replace(/^\s*\)\s*$/gm, '');
    content = content.replace(/^\s*}\s*$/gm, '');

    // Fix malformed component names
    content = content.replace(/export default PagePage;/g, 'export default AiAnalyticsDashboardPage;');
    content = content.replace(/export default Page;/g, 'export default AiAnalyticsDashboardPage;');

    // Fix incomplete lines that should be removed
    content = content.replace(/^\s*[^;{}()]*\s*$/gm, (match) => {
      if (match.trim() && !match.includes(';') && !match.includes('{') && !match.includes('}') && !match.includes('(') && !match.includes(')') && !match.includes('import') && !match.includes('export') && !match.includes('const') && !match.includes('function') && !match.includes('return') && !match.includes('<') && !match.includes('//') && !match.includes('*') && !match.includes('=')) {
        return '';
      }
      return match;
    });

    // Clean up empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed issues in: ${filePath}`);
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
console.log('Starting comprehensive fixes...');

const srcDir = path.join(__dirname, 'src');
const files = findSourceFiles(srcDir);

let fixedCount = 0;
let totalFiles = files.length;

console.log(`Found ${totalFiles} source files to check...`);

for (const file of files) {
  if (fixAllIssues(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed issues in ${fixedCount} out of ${totalFiles} files.`);

// Run linting to check if there are still errors
console.log('\nRunning linting check...');
try {
  execSync('npm run lint', { stdio: 'pipe' });
  console.log('✅ Linting passed!');
} catch (error) {
  console.log('❌ Linting still has errors.');
}

console.log('\nComprehensive fixes completed!');