const fs = require('fs');
const path = require('path');

function fixMetadataSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if this file has the specific syntax error pattern
    if (content.includes('keywords: "') && content.includes('    <div className=') && !content.includes('export default function')) {
      console.log(`Fixing metadata syntax in: ${filePath}`);
      
      // Find the end of the metadata object (after keywords)
      const keywordsMatch = content.match(/keywords: "[^"]*"/);
      if (keywordsMatch) {
        const keywordsEnd = content.indexOf(keywordsMatch[0]) + keywordsMatch[0].length;
        
        // Find where the JSX starts
        const jsxStart = content.indexOf('    <div className=');
        
        if (jsxStart > keywordsEnd) {
          // Get the function name from the file path
          const fileName = path.basename(filePath, '.tsx');
          const functionName = fileName.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join('') + 'Page';
          
          // Reconstruct the file
          const beforeKeywords = content.substring(0, keywordsEnd);
          const jsxContent = content.substring(jsxStart);
          
          content = beforeKeywords + '};\n\n' +
            `export default function ${functionName}() {\n` +
            '  return (\n' +
            jsxContent + '\n' +
            '  );\n' +
            '}';
          
          modified = true;
        }
      }
    }
    
    // Remove any stray commit hashes
    content = content.replace(/[a-f0-9]{40}/g, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx')) {
      if (fixMetadataSyntax(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting metadata syntax fixes...');
const fixedCount = findAndFixFiles('./app');
console.log(`Fixed metadata syntax in ${fixedCount} files.`);