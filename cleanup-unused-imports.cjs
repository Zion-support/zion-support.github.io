const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to clean up unused imports in a file
function cleanupFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't exist or is not a TypeScript/JavaScript file
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.jsx') && !filePath.endsWith('.js')) {
      return;
    }
    
    // Skip if file is in node_modules or other build directories
    if (filePath.includes('node_modules') || filePath.includes('dist') || filePath.includes('.next')) {
      return;
    }
    
    console.log(`Processing: ${filePath}`);
    
    // Run ESLint with --fix to automatically remove unused imports
    try {
      execSync(`npx eslint "${filePath}" --fix --no-eslintrc --config '{"extends": ["@typescript-eslint/recommended"], "parser": "@typescript-eslint/parser", "rules": {"@typescript-eslint/no-unused-vars": "error"}}'`, { stdio: 'pipe' });
    } catch (error) {
      // ESLint might fail, but that's okay - we'll continue
      console.log(`ESLint warning for ${filePath}: ${error.message}`);
    }
    
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir) {
  const files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (!['node_modules', 'dist', '.next', '.git'].includes(item)) {
          files.push(...findFiles(fullPath));
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.log(`Error reading directory ${dir}: ${error.message}`);
  }
  
  return files;
}

// Main execution
console.log('Starting cleanup of unused imports...');

const files = findFiles('./app');
console.log(`Found ${files.length} files to process`);

for (const file of files) {
  cleanupFile(file);
}

console.log('Cleanup completed!');