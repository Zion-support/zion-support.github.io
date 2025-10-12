const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Get the list of unused imports from eslint
    const eslintOutput = execSync(`npx eslint "${filePath}" --format=json`, { encoding: 'utf8' });
    const eslintResult = JSON.parse(eslintOutput);
    
    if (eslintResult.length === 0) return;
    
    const file = eslintResult[0];
    const unusedVars = file.messages.filter(msg => 
      msg.ruleId === '@typescript-eslint/no-unused-vars' && 
      msg.message.includes('is defined but never used')
    );
    
    if (unusedVars.length === 0) return;
    
    console.log(`Fixing ${unusedVars.length} unused imports in ${filePath}`);
    
    // Process each unused variable
    unusedVars.forEach(variable => {
      const varName = variable.message.match(/'([^']+)' is defined but never used/)[1];
      
      // Remove from import statements
      content = content.replace(
        new RegExp(`\\b${varName}\\s*,?\\s*`, 'g'),
        ''
      );
      
      // Clean up empty import objects
      content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n?/g, '');
      content = content.replace(/import\s*{\s*,\s*}\s*from\s*['"][^'"]+['"];?\s*\n?/g, '');
      content = content.replace(/,\s*}/g, '}');
      content = content.replace(/{\s*,/g, '{');
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed unused imports in ${filePath}`);
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all TypeScript/React files
function getAllTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse('/workspace');
  return files;
}

// Main execution
function main() {
  console.log('Finding all TypeScript files...');
  const files = getAllTsxFiles('/workspace');
  console.log(`Found ${files.length} TypeScript files`);
  
  let fixedCount = 0;
  
  files.forEach(file => {
    try {
      removeUnusedImports(file);
      fixedCount++;
    } catch (error) {
      console.error(`Error with ${file}:`, error.message);
    }
  });
  
  console.log(`Processed ${fixedCount} files`);
}

main();