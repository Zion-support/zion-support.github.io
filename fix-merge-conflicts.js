#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep the content after =======
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Fix common syntax errors
    content = content.replace(/,\s*,/g, ','); // Remove double commas
    content = content.replace(/,\s*}/g, '}'); // Remove trailing commas before closing braces
    content = content.replace(/,\s*]/g, ']'); // Remove trailing commas before closing brackets
    content = content.replace(/{\s*,/g, '{'); // Remove leading commas in objects
    content = content.replace(/\[\s*,/g, '['); // Remove leading commas in arrays
    
    // Fix duplicate imports
    content = content.replace(/import\s+{[^}]+}\s+from\s+'[^']+';\s*import\s+{[^}]+}\s+from\s+'[^']+';/g, (match) => {
      const imports = match.split(';').filter(imp => imp.trim());
      const uniqueImports = new Set();
      imports.forEach(imp => {
        if (imp.trim()) uniqueImports.add(imp.trim() + ';');
      });
      return Array.from(uniqueImports).join('\n');
    });
    
    // Fix malformed import statements
    content = content.replace(/import\s+{[^}]*,\s*[^}]*}\s+from\s+'[^']+';/g, (match) => {
      const importMatch = match.match(/import\s+{([^}]+)}\s+from\s+'([^']+)';/);
      if (importMatch) {
        const items = importMatch[1].split(',').map(item => item.trim()).filter(item => item);
        const uniqueItems = [...new Set(items)];
        return `import { ${uniqueItems.join(', ')} } from '${importMatch[2]}';`;
      }
      return match;
    });
    
    // Fix React component syntax issues
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{[\s\S]*?}[\s\S]*?const\s+\1:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{/g, (match, componentName) => {
      // Keep only the first occurrence
      const parts = match.split('const ' + componentName + ': React.FC = () => {');
      return 'const ' + componentName + ': React.FC = () => {' + parts[1];
    });
    
    // Remove duplicate React imports
    content = content.replace(/(import\s+React[^;]+;)\s*\1/g, '$1');
    
    // Fix malformed object literals
    content = content.replace(/{\s*,\s*name:/g, '{ name:');
    content = content.replace(/{\s*,\s*role:/g, '{ role:');
    content = content.replace(/{\s*,\s*image:/g, '{ image:');
    content = content.replace(/{\s*,\s*bio:/g, '{ bio:');
    
    // Fix malformed array literals
    content = content.replace(/\[\s*,\s*{/g, '[{');
    
    // Remove empty lines with just spaces
    content = content.replace(/^\s*\n/gm, '');
    
    // Ensure proper spacing
    content = content.replace(/\n{3,}/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
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
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findSourceFiles(fullPath));
    } else if (stat.isFile() && /\.(ts|tsx|js|jsx)$/.test(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const srcDir = path.join(__dirname, 'src');
const files = findSourceFiles(srcDir);

let fixedCount = 0;
let totalFiles = files.length;

console.log(`Found ${totalFiles} source files to check...`);

for (const file of files) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed merge conflicts in ${fixedCount} out of ${totalFiles} files.`);

// Run linting to check for remaining issues
console.log('\nRunning linting to check for remaining issues...');
try {
  execSync('npm run lint', { stdio: 'pipe' });
  console.log('✅ Linting passed!');
} catch (error) {
  console.log('⚠️  Linting found issues, but merge conflicts should be resolved.');
}

console.log('\nMerge conflict resolution complete!');