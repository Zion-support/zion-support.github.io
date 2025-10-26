const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflict markers
function fixMergeConflicts(content) {
  return content
    .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/<<<<<<< [^\n]+[\s\S]*?=======/g, '');
}

// Function to fix common JSX issues
function fixJSXIssues(content) {
  // Fix missing closing tags
  content = content.replace(/<div([^>]*)>(?!.*<\/div>)/g, (match, attrs) => {
    if (match.includes('</div>')) return match;
    return match + '</div>';
  });
  
  // Fix JSX expressions with multiple parents
  content = content.replace(/<>\s*<([^>]+)>/g, '<$1>');
  content = content.replace(/<\/>\s*<\/div>/g, '</div>');
  
  return content;
}

// Function to fix import issues
function fixImportIssues(content) {
  // Add missing imports for common icons
  const iconImports = [
    'Star', 'CheckCircle', 'FileText', 'Eye', 'Cookie', 'Settings', 'Shield', 
    'Phone', 'Mail', 'ArrowLeft', 'Link', 'Receipt'
  ];
  
  let imports = [];
  iconImports.forEach(icon => {
    if (content.includes(`<${icon}`) && !content.includes(`import { ${icon}`)) {
      imports.push(icon);
    }
  });
  
  if (imports.length > 0) {
    const importStatement = `import { ${imports.join(', ')} } from 'lucide-react';\n`;
    content = importStatement + content;
  }
  
  return content;
}

// Function to fix syntax errors
function fixSyntaxErrors(content) {
  // Fix unterminated string literals
  content = content.replace(/"([^"]*?)\n/g, '"$1"\n');
  
  // Fix missing commas
  content = content.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n$2');
  
  // Fix missing semicolons
  content = content.replace(/(\w+)\s*\n\s*(import|export|const|let|var|function)/g, '$1;\n$2');
  
  // Fix missing parentheses
  content = content.replace(/function\s+(\w+)\s*\{/g, 'function $1() {');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixMergeConflicts(content);
    content = fixJSXIssues(content);
    content = fixImportIssues(content);
    content = fixSyntaxErrors(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(findFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return files;
}

// Main execution
console.log('Starting comprehensive linting error fixes...');

const files = findFiles('./app').concat(findFiles('./src'));
let fixedCount = 0;

console.log(`Found ${files.length} files to process`);

files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files`);

// Run linter to check remaining issues
console.log('\nRunning linter to check remaining issues...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('All linting errors fixed!');
} catch (error) {
  console.log('Some linting errors may remain. Check the output above.');
}