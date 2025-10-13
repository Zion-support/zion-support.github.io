<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers and keep the HEAD version
    const mergeConflictRegex = /<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+/g;
    const beforeConflictRegex = /<<<<<<< HEAD\n([\s\S]*?)=======/g;
    const afterConflictRegex = /=======([\s\S]*?)>>>>>>> [^\n]+/g;

    // Remove the entire merge conflict block
    if (content.includes('<<<<<<< HEAD')) {
      content = content.replace(mergeConflictRegex, '$1');
      modified = true;
    }

    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');

    // Fix common syntax issues
    // Fix missing commas in object properties
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*\n\s*const/g, '$1;\n\nconst');
    content = content.replace(/(\w+)\s*\n\s*function/g, '$1;\n\nfunction');
    content = content.replace(/(\w+)\s*\n\s*return/g, '$1;\n\nreturn');

    // Fix unclosed JSX tags (simplified regex)
    content = content.replace(/<(\w+)([^>]*?)>(?!.*<\/\1>)/g, '<$1$2></$1>');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
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

// Main function
function main() {
  console.log('Starting merge conflict fix...');
  
  const sourceFiles = findSourceFiles('./app');
  let fixedCount = 0;
  
  for (const file of sourceFiles) {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed merge conflicts in ${fixedCount} files`);
  
  // Try to build to check if issues are resolved
  try {
    console.log('Testing build...');
    execSync('npm run build', { stdio: 'pipe' });
    console.log('Build successful!');
  } catch (error) {
    console.log('Build still has issues, but some conflicts were fixed');
  }
}

main();
=======
const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// List of files with merge conflicts
const filesToFix = [
  'app/ai-customer-support/page.tsx',
  'app/components/Footer.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/services/page.tsx',
  'app/it-services/page.tsx',
  'app/ai-workflow-automation/page.tsx'
];

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    fixMergeConflicts(file);
  }
});

console.log('Merge conflicts fixed!');
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1448
