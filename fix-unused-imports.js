const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to remove unused imports from a file
function fixUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file has merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Skipping ${filePath} - has merge conflicts`);
      return;
    }
    
    // Get unused imports using ESLint
    try {
      const eslintOutput = execSync(`npx eslint "${filePath}" --format=json --no-eslintrc --config .eslintrc.js`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const results = JSON.parse(eslintOutput);
      if (results.length === 0) return;
      
      const unusedVars = results[0].messages.filter(msg => 
        msg.ruleId === '@typescript-eslint/no-unused-vars' && 
        msg.message.includes('is defined but never used')
      );
      
      if (unusedVars.length === 0) return;
      
      let newContent = content;
      
      // Remove unused imports
      unusedVars.forEach(error => {
        const line = error.line - 1;
        const lines = newContent.split('\n');
        
        if (lines[line]) {
          // Check if it's an import statement
          if (lines[line].trim().startsWith('import')) {
            // Remove the entire import line
            lines.splice(line, 1);
            newContent = lines.join('\n');
          } else {
            // Remove specific unused variable from import
            const importLine = lines[line];
            const variableName = error.message.match(/'([^']+)' is defined but never used/)?.[1];
            
            if (variableName) {
              // Remove the variable from the import
              const updatedLine = importLine.replace(new RegExp(`\\b${variableName}\\s*,?\\s*`, 'g'), '');
              lines[line] = updatedLine;
              newContent = lines.join('\n');
            }
          }
        }
      });
      
      // Clean up empty import lines and fix syntax
      newContent = newContent
        .replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n/g, '') // Remove empty imports
        .replace(/import\s*{\s*,([^}]+)}\s*from\s*['"][^'"]+['"];?\s*\n/g, (match, content) => {
          // Fix imports that start with comma
          return `import {${content}} from '${match.match(/from\s*['"]([^'"]+)['"]/)?.[1] || ''}';\n`;
        })
        .replace(/,\s*}/g, '}') // Remove trailing commas
        .replace(/{\s*,/g, '{') // Remove leading commas
        .replace(/,\s*,/g, ','); // Remove double commas
      
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        console.log(`Fixed unused imports in ${filePath}`);
      }
      
    } catch (eslintError) {
      console.log(`ESLint error for ${filePath}: ${eslintError.message}`);
    }
    
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Fixing unused imports...');

const files = findFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  fixUnusedImports(file);
  fixedCount++;
});

console.log(`Processed ${fixedCount} files`);

// Also fix some specific problematic files
const problematicFiles = [
  './app/ai-blockchain-analytics/page.tsx',
  './app/ai-code-assistant-pro/page.tsx',
  './app/ai-content-generator/page.tsx'
];

problematicFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`Fixing ${file}...`);
    fixUnusedImports(file);
  }
});

console.log('Done fixing unused imports!');