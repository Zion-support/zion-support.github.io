const fs = require('fs');
const path = require('path');

// Function to completely rewrite a file to fix all issues
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't have issues
    if (!content.includes('export default') || content.split('export default').length <= 2) {
      return false;
    }
    
    // Extract function name
    const functionMatch = content.match(/export default function\s+(\w+)/);
    if (!functionMatch) {
      return false;
    }
    
    const functionName = functionMatch[1];
    
    // Extract imports
    const importLines = [];
    const lines = content.split('\n');
    
    for (const line of lines) {
      if (line.trim().startsWith('import ')) {
        importLines.push(line);
      } else if (line.includes('export default function')) {
        break;
      }
    }
    
    // Add Footer import if not present
    let hasFooterImport = false;
    for (const importLine of importLines) {
      if (importLine.includes('Footer')) {
        hasFooterImport = true;
        break;
      }
    }
    
    if (!hasFooterImport) {
      // Calculate correct Footer path based on file location
      const relativePath = path.relative('/workspace/app', filePath);
      const depth = relativePath.split('/').length - 1;
      
      let footerPath;
      if (depth === 1) {
        footerPath = './components/Footer';
      } else if (depth === 2) {
        footerPath = '../components/Footer';
      } else {
        const upLevels = '../'.repeat(depth - 1);
        footerPath = upLevels + 'components/Footer';
      }
      
      importLines.push(`import Footer from '${footerPath}';`);
    }
    
    // Extract the JSX content between the function declaration and the last closing brace
    const functionStartIndex = lines.findIndex(line => line.includes('export default function'));
    const functionEndIndex = lines.findLastIndex(line => line.trim() === '}');
    
    if (functionStartIndex === -1 || functionEndIndex === -1) {
      return false;
    }
    
    const jsxLines = lines.slice(functionStartIndex + 1, functionEndIndex);
    
    // Create the new file content
    const newContent = [
      "'use client';",
      ...importLines,
      '',
      `export default function ${functionName}() {`,
      ...jsxLines,
      '}'
    ].join('\n');
    
    // Write the new content
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);