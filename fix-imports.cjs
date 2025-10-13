<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix unused imports in a file
const fixUnusedImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Get ESLint output for this file
    let eslintOutput;
    try {
      eslintOutput = execSync(`npx eslint "${filePath}" --format=json`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      }).trim();
    } catch (error) {
      // ESLint failed, skip this file
      return false;
    }
    
    if (!eslintOutput) return false;
    
    const eslintResult = JSON.parse(eslintOutput);
    const messages = eslintResult[0]?.messages || [];
    
    // Get unused variables
    const unusedVars = new Set();
    messages.forEach(msg => {
      if (msg.ruleId === '@typescript-eslint/no-unused-vars' && msg.message.includes('is defined but never used')) {
        const varName = msg.message.match(/'([^']+)' is defined but never used/)?.[1];
        if (varName) {
          unusedVars.add(varName);
        }
      }
    });
    
    if (unusedVars.size === 0) return false;
    
    // Process import statements
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line
      if (line.includes('import') && line.includes('from')) {
        // Handle named imports
        const namedImportMatch = line.match(/import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/);
        if (namedImportMatch) {
          const imports = namedImportMatch[1].split(',').map(imp => imp.trim());
          const filteredImports = imports.filter(imp => !unusedVars.has(imp));
          
          if (filteredImports.length === 0) {
            // Skip this import line entirely
            continue;
          } else if (filteredImports.length !== imports.length) {
            // Update the import line
            newLines.push(line.replace(
              namedImportMatch[0],
              `import { ${filteredImports.join(', ')} } from '${namedImportMatch[2]}'`
            ));
            modified = true;
            continue;
          }
        }
        
        // Handle default imports
        const defaultImportMatch = line.match(/import\s+(\w+)\s+from\s*['"]([^'"]+)['"]/);
        if (defaultImportMatch) {
          const importName = defaultImportMatch[1];
          if (unusedVars.has(importName)) {
            // Skip this import line
            continue;
          }
        }
      }
      
      // Check if this is a variable declaration line
      if (line.includes('const') || line.includes('let') || line.includes('var')) {
        const varMatch = line.match(/(?:const|let|var)\s+(\w+)/);
        if (varMatch && unusedVars.has(varMatch[1])) {
          // Skip this line
          continue;
        }
      }
      
      newLines.push(line);
    }
    
    if (modified || newLines.length !== lines.length) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed unused imports in: ${filePath}`);
=======
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix import statements
function fixImportStatements(content) {
  // Fix }from -> } from
  content = content.replace(/}\s*from\s*/g, '} from ');
  
  // Fix }}from -> } from
  content = content.replace(/}\s*}\s*from\s*/g, '} from ');
  
  // Fix }}}from -> } from
  content = content.replace(/}\s*}\s*}\s*from\s*/g, '} from ');
  
  // Fix missing spaces in destructured imports like {a,b}from -> {a, b} from
  content = content.replace(/\{\s*([^}]+)\s*\}\s*from\s*/g, (match, imports) => {
    const fixedImports = imports.split(',').map(imp => imp.trim()).join(', ');
    return `{ ${fixedImports} } from `;
  });
  
  // Fix function declarations with trailing commas
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{,\s*/g, 'const $1: React.FC = () => {\n  ');
  
  // Fix return statements with missing parentheses
  content = content.replace(/return\s*\(\<\>\)\s*/g, 'return (\n    <>\n  ');
  
  // Fix missing semicolons after lazy load comments
  content = content.replace(/\/\/ Lazy load pages for better performance;\s*/g, '// Lazy load pages for better performance\n');
  
  return content;
}

// Function to fix merge conflict markers
function fixMergeConflicts(content) {
  // Remove merge conflict markers
  content = content.replace(/^<<<<<<<.*$/gm, '');
  content = content.replace(/^=======.*$/gm, '');
  content = content.replace(/^>>>>>>>.*$/gm, '');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix import statements
    content = fixImportStatements(content);
    
    // Fix merge conflicts
    content = fixMergeConflicts(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
<<<<<<< HEAD
};

// Main execution
const main = () => {
  console.log('🔧 Fixing unused imports...');
  
  const files = getAllFiles('./app');
  let fixedCount = 0;
  
  files.forEach(file => {
    if (fixUnusedImports(file)) {
      fixedCount++;
    }
  });
  
  console.log(`✅ Fixed ${fixedCount} files`);
};

main();
=======
}

// Main function
function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'app/components/**/*.tsx',
    'app/components/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    });
  });
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

if (require.main === module) {
  main();
}

module.exports = { fixImportStatements, fixMergeConflicts, processFile };
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
