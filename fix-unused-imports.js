#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files
<<<<<<< HEAD
const getAllFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Remove unused imports from a file
const removeUnusedImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Get unused imports from ESLint
    try {
      const eslintOutput = execSync(`npx eslint "${filePath}" --format=json --no-fix`, { 
        encoding: 'utf8',
        cwd: '/workspace',
        stdio: 'pipe'
      });
      
      const eslintResult = JSON.parse(eslintOutput);
      const unusedVars = eslintResult[0]?.messages?.filter(msg => 
        msg.ruleId === '@typescript-eslint/no-unused-vars' && 
        msg.message.includes('is defined but never used')
      ) || [];
      
      for (const unusedVar of unusedVars) {
        const lineNumber = unusedVar.line - 1;
        const lines = content.split('\n');
        const line = lines[lineNumber];
        
        if (line && line.includes('import')) {
          // Extract the import statement
          const importMatch = line.match(/import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/);
          if (importMatch) {
            const [, imports, source] = importMatch;
            const importList = imports.split(',').map(imp => imp.trim());
            const unusedImport = unusedVar.message.match(/'([^']+)'/)?.[1];
            
            if (unusedImport && importList.includes(unusedImport)) {
              // Remove the unused import
              const newImportList = importList.filter(imp => imp !== unusedImport);
              
              if (newImportList.length === 0) {
                // Remove entire import line if no imports left
                lines[lineNumber] = '';
              } else {
                // Update import line
                lines[lineNumber] = line.replace(
                  /import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/,
                  `import { ${newImportList.join(', ')} } from '${source}'`
                );
              }
              
              content = lines.join('\n');
            }
          }
        }
      }
      
      // Clean up empty lines
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed unused imports in: ${filePath}`);
        return true;
      }
    } catch (error) {
      // ESLint might fail, continue with other files
      console.log(`Skipping ${filePath} due to ESLint error: ${error.message}`);
    }
    
    return false;
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
    return false;
  }
};

// Main execution
console.log('Starting unused imports cleanup...');

const files = getAllFiles('/workspace/app');
let fixedCount = 0;

for (const file of files) {
  if (removeUnusedImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed unused imports in ${fixedCount} files.`);

// Also fix some specific files that have issues
const specificFiles = [
  '/workspace/App_clean.tsx',
  '/workspace/app/components/Analytics.tsx',
  '/workspace/app/components/EnhancedPerformanceMonitor.tsx',
  '/workspace/app/components/Footer.tsx',
  '/workspace/app/components/ImprovedFooter.tsx',
  '/workspace/app/components/ImprovedImage.tsx',
  '/workspace/app/components/Navigation.tsx',
  '/workspace/app/components/PerformanceOptimizer.tsx'
];

for (const file of specificFiles) {
  if (fs.existsSync(file)) {
    removeUnusedImports(file);
  }
}

console.log('Cleanup completed!');
=======
const files = execSync('find app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | grep -v node_modules', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file);

console.log(`Found ${files.length} files to process`);

files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    
    // Remove unused imports from lucide-react
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (lucideImportMatch) {
      const imports = lucideImportMatch[1].split(',').map(imp => imp.trim());
      const usedImports = [];
      
      imports.forEach(imp => {
        // Check if the import is used in the file
        const importName = imp.replace(/\s+as\s+\w+/, '').trim();
        const regex = new RegExp(`\\b${importName}\\b`, 'g');
        if (regex.test(content)) {
          usedImports.push(imp);
        }
      });
      
      if (usedImports.length === 0) {
        // Remove the entire import line
        newContent = newContent.replace(lucideImportMatch[0], '');
      } else if (usedImports.length !== imports.length) {
        // Replace with only used imports
        const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        newContent = newContent.replace(lucideImportMatch[0], newImport);
      }
    }
    
    // Remove unused React imports (if only default import and not used)
    const reactImportMatch = content.match(/import\s+React\s+from\s+['"]react['"];?/);
    if (reactImportMatch && !content.includes('React.')) {
      newContent = newContent.replace(reactImportMatch[0], '');
    }
    
    // Remove unused Helmet imports
    const helmetImportMatch = content.match(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];?/);
    if (helmetImportMatch && !content.includes('<Helmet')) {
      newContent = newContent.replace(helmetImportMatch[0], '');
    }
    
    // Remove unused Link imports
    const linkImportMatch = content.match(/import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];?/);
    if (linkImportMatch && !content.includes('<Link')) {
      newContent = newContent.replace(linkImportMatch[0], '');
    }
    
    // Remove unused variable declarations
    const lines = newContent.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for const/let/var declarations that might be unused
      const varMatch = line.match(/^\s*(const|let|var)\s+(\w+)\s*=/);
      if (varMatch) {
        const varName = varMatch[2];
        const isUsed = new RegExp(`\\b${varName}\\b`).test(newContent.replace(line, ''));
        if (!isUsed && !line.includes('// eslint-disable')) {
          // Skip this line (remove unused variable)
          continue;
        }
      }
      
      newLines.push(line);
    }
    
    newContent = newLines.join('\n');
    
    // Clean up multiple empty lines
    newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Done fixing unused imports and variables');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665
