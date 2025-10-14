const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
const glob = require('glob');

// Function to convert kebab-case to PascalCase
function kebabToPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Function to convert component name to valid TypeScript identifier
function toValidComponentName(str) {
  // Remove spaces and convert to PascalCase
  return str
    .replace(/\s+/g, '')
    .replace(/\d+/g, match => match)
    .split(/(?=[A-Z])/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Function to fix component name in file content
function fixComponentName(content, filename) {
  // Extract the directory name from the file path
  const dirName = path.basename(path.dirname(filename));
  
  // Convert kebab-case directory name to valid component name
  const validComponentName = kebabToPascalCase(dirName) + 'Page';
  
  // Find the component declaration line
  const componentRegex = /const\s+[^:]+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/;
  const match = content.match(componentRegex);
  
  if (match) {
    const oldDeclaration = match[0];
    const newDeclaration = `const ${validComponentName}: React.FC = () => {`;
    
    // Replace the component declaration
    const fixedContent = content.replace(componentRegex, newDeclaration);
    
    // Also update the export if it exists
    const exportRegex = /export\s+default\s+[^;]+;/;
    const exportMatch = fixedContent.match(exportRegex);
    
    if (exportMatch) {
      const oldExport = exportMatch[0];
      const newExport = `export default ${validComponentName};`;
      return fixedContent.replace(exportRegex, newExport);
    }
    
    return fixedContent;
  }
  
  return content;
}

// Get all page.tsx files
const pageFiles = glob.sync('app/**/page.tsx');

console.log(`Found ${pageFiles.length} page files to process...`);

let fixedCount = 0;

pageFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixComponentName(content, filePath);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
=======

// Function to fix component names in a file
function fixComponentNames(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix component names with spaces
    const fixes = [
      // Fix const declarations with spaces in component names
      { pattern: /const\s+([A-Z][a-zA-Z\s]+[A-Za-z])\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, replacement: (match, name) => {
        const cleanName = name.replace(/\s+/g, '');
        return `const ${cleanName}: React.FC = () => {`;
      }},
      // Fix export default statements with spaces
      { pattern: /export\s+default\s+([A-Z][a-zA-Z\s]+[A-Za-z]);/g, replacement: (match, name) => {
        const cleanName = name.replace(/\s+/g, '');
        return `export default ${cleanName};`;
      }},
      // Fix function declarations with spaces
      { pattern: /function\s+([A-Z][a-zA-Z\s]+[A-Za-z])\s*\(/g, replacement: (match, name) => {
        const cleanName = name.replace(/\s+/g, '');
        return `function ${cleanName}(`;
      }},
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed component names in: ${filePath}`);
      return true;
>>>>>>> cursor/fix-errors-and-merge-to-main-789c
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
<<<<<<< HEAD
=======
    return false;
>>>>>>> cursor/fix-errors-and-merge-to-main-789c
  }
});

<<<<<<< HEAD
console.log(`\nFixed ${fixedCount} files successfully!`);
=======
// Function to recursively find and fix all TypeScript/JavaScript files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixComponentNames(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Start fixing from the app directory
console.log('Starting to fix component names...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files with component name issues.`);
>>>>>>> cursor/fix-errors-and-merge-to-main-789c
