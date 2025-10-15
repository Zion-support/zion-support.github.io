const fs = require('fs');
const path = require('path');
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
  // Handle special cases for numbers at the start
  if (str.startsWith('404')) {
    return 'NotFoundPage';
  }
  if (str.startsWith('5g')) {
    return 'FiveG' + str.substring(2).split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
  }
  if (str.startsWith('ai-3d')) {
    return 'Ai3D' + str.substring(5).split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
  }
  
  // Regular conversion
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Page';
}

// Function to fix component name in file content
function fixComponentName(content, filename) {
  // Extract the directory name from the file path
  const dirName = path.basename(path.dirname(filename));
  
  // Convert kebab-case directory name to valid component name
  const validComponentName = toValidComponentName(dirName);
  
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
      console.log(`Fixed: ${filePath} -> ${toValidComponentName(path.basename(path.dirname(filePath)))}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files successfully!`);