const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax errors in a file
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing function declarations
    if (content.includes('  ]\n  return (') && !content.includes('const ') && !content.includes('function ')) {
      // Find the component name from the file path
      const fileName = path.basename(filePath, '.tsx');
      const componentName = fileName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('');
      
      content = content.replace(
        /  \]\n  return \(/g,
        `  ];\n\n  return (`
      );
      modified = true;
    }

    // Fix missing semicolons after arrays
    content = content.replace(/(\s+)\]\n(\s+)return \(/g, '$1];\n$2return (');
    
    // Fix missing semicolons after function declarations
    content = content.replace(/(\s+)\]\n(\s+)const.*=.*\(\) => \{/g, '$1];\n$2const $3 = () => {');
    
    // Fix React.Fragment issues - remove closing tags without opening tags
    if (content.includes('</React.Fragment>') && !content.includes('<React.Fragment>')) {
      content = content.replace(/<\/React.Fragment>/g, '</div>');
      modified = true;
    }
    
    // Fix fragment issues - remove closing tags without opening tags
    if (content.includes('</>') && !content.includes('<>')) {
      content = content.replace(/<\/>/g, '</div>');
      modified = true;
    }

    // Fix missing closing div tags
    if (content.includes('</React.Fragment>') && content.includes('<div')) {
      content = content.replace(/<\/React.Fragment>/g, '</div>');
      modified = true;
    }

    // Fix missing semicolons in export statements
    content = content.replace(/export default (\w+)(?!;)/g, 'export default $1;');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTSXFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJSXErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);