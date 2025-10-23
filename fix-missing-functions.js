const fs = require('fs');
const path = require('path');

// Function to fix missing function declarations
function fixMissingFunctions(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has React imports but no function declaration
    if (content.includes('import React') && content.includes('return (') && !content.includes('const ') && !content.includes('function ')) {
      // Extract component name from file path
      const fileName = path.basename(filePath, '.tsx');
      const componentName = fileName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('') + 'Page';
      
      // Find where to insert the function declaration
      const lines = content.split('\n');
      let insertIndex = -1;
      
      // Look for the last import statement
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('import ') && !lines[i].includes('export')) {
          insertIndex = i + 1;
        }
      }
      
      if (insertIndex > 0) {
        // Insert function declaration
        lines.splice(insertIndex, 0, '', `const ${componentName}: React.FC = () => {`);
        content = lines.join('\n');
        modified = true;
      }
    }

    // Fix missing semicolons after arrays before return statements
    content = content.replace(/(\s+)\]\n(\s+)return \(/g, '$1];\n$2return (');
    
    // Fix missing semicolons after function declarations
    content = content.replace(/(\s+)\]\n(\s+)const.*=.*\(\) => \{/g, '$1];\n$2const $3 = () => {');
    
    // Fix React.Fragment issues - replace with div if no opening tag
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

    // Fix missing closing braces for functions
    if (content.includes('return (') && !content.includes('};') && content.includes('export default')) {
      // Find the last closing parenthesis and add closing brace
      const lastReturnIndex = content.lastIndexOf('return (');
      if (lastReturnIndex !== -1) {
        const afterReturn = content.substring(lastReturnIndex);
        const lastParenIndex = afterReturn.lastIndexOf(')');
        if (lastParenIndex !== -1) {
          const beforeExport = content.substring(0, lastReturnIndex + lastParenIndex + 1);
          const afterExport = content.substring(lastReturnIndex + lastParenIndex + 1);
          content = beforeExport + ';\n};\n' + afterExport;
          modified = true;
        }
      }
    }

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
  if (fixMissingFunctions(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);