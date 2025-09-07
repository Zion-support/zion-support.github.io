const fs = require('fs');
const path = require('path');


function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing closing brace in metadata and missing function declaration
    if (content.includes('export const metadata = {') && !content.includes('export default function')) {
      // Find the metadata object and add missing closing brace and function declaration
      const metadataMatch = content.match(/export const metadata = \{[\s\S]*?keywords: "[^"]*"/);
      if (metadataMatch) {
        const beforeMetadata = content.substring(0, content.indexOf('export const metadata = {'));
        const afterMetadata = content.substring(content.indexOf('export const metadata = {'));
        
        // Extract the metadata content
        const metadataContent = afterMetadata.match(/export const metadata = \{[\s\S]*?keywords: "[^"]*"/)[0];
        
        // Find where the JSX starts (look for <div)
        const jsxStart = afterMetadata.search(/^\s*<div/);
        if (jsxStart !== -1) {
          const jsxContent = afterMetadata.substring(jsxStart);
          
          // Get the function name from the file path
          const fileName = path.basename(filePath, '.tsx');
          const functionName = fileName.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join('') + 'Page';
          
          // Reconstruct the file
          content = beforeMetadata + 
            metadataContent + '};\n\n' +
            `export default function ${functionName}() {\n` +
            '  return (\n' +
            jsxContent.replace(/^\s*/, '    ') + '\n' +
            '  );\n' +
            '}';
          
          modified = true;
        }

      }
    }
    
    // Remove stray commit hashes
    content = content.replace(/[a-f0-9]{40}/g, '');
    
    // Remove any remaining merge conflict markers
    content = content.replace(/[\s\S]*?>>>>>>>/g, '');
    content = content.replace(/[\s\S]*?>>>>>>>/g, '');
    content = content.replace(/[\s\S]*?>>>>>>>/g, '');
    
    if (modified) {

      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath});
      return true;
    }

      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;

  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}


function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {

    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixSyntaxErrors(filePath)) {
        console.log(`Fixed syntax errors in: ${filePath}`);
        fixedCount++;
      }
    }

  });
  
  return fixedCount;
}

console.log('Starting syntax error fixes...');
const fixedCount = findAndFixFiles('./app');
console.log(`Fixed syntax errors in ${fixedCount} files.`);

