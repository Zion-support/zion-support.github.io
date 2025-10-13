const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Remove unused imports from a file
const removeUnusedImports = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file has merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Skipping ${filePath} - has merge conflicts`);
      return;
    }
    
    // Run ESLint with --fix to remove unused imports
    execSync(`npx eslint "${filePath}" --fix --no-eslintrc --config '{"rules":{"@typescript-eslint/no-unused-vars":"error"},"parser":"@typescript-eslint/parser","parserOptions":{"ecmaVersion":2020,"sourceType":"module","ecmaFeatures":{"jsx":true}},"plugins":["@typescript-eslint"]}'`, { stdio: 'pipe' });
    
    console.log(`Fixed unused imports in ${filePath}`);
  } catch (error) {
    // Ignore errors for files that can't be fixed
    console.log(`Could not fix ${filePath}: ${error.message}`);
  }
};

// Get all files
const files = getAllFiles('/workspace/app');

console.log(`Found ${files.length} files to process`);

// Process each file
files.forEach(removeUnusedImports);

console.log('Done removing unused imports');