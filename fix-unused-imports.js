import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files
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