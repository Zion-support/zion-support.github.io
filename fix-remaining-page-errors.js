import fs from 'fs';
import path from 'path';

function fixPageErrors(content, filePath) {
  // Fix missing function declarations for page components
  if (content.includes('return (') && !content.includes('export default function') && !content.includes('const ') && !content.includes('function ')) {
    // Check if it's a page file
    if (filePath.includes('/page.tsx') || filePath.includes('/error.tsx') || filePath.includes('/loading.tsx') || filePath.includes('/global-error.tsx')) {
      // Extract the component name from the file path
      const fileName = path.basename(filePath, '.tsx');
      const componentName = fileName === 'page' ? 'Page' : 
                           fileName === 'error' ? 'Error' :
                           fileName === 'loading' ? 'Loading' :
                           fileName === 'global-error' ? 'GlobalError' :
                           fileName.charAt(0).toUpperCase() + fileName.slice(1);
      
      // Add function declaration before the return statement
      content = content.replace(/^(\s*)(return\s*\()/m, `$1export default function ${componentName}() {\n$1  $2`);
      
      // Fix the closing brace and remove duplicate exports
      content = content.replace(/^(\s*)(}\s*$)/m, `$1}`);
      content = content.replace(/export default \w+Page;?\s*$/gm, '');
      content = content.replace(/export default \w+Error;?\s*$/gm, '');
      content = content.replace(/export default \w+Loading;?\s*$/gm, '');
      content = content.replace(/export default \w+GlobalError;?\s*$/gm, '');
    }
  }
  
  // Fix malformed return statements
  content = content.replace(/return\s*\(\s*\)\s*\n\s*</g, 'return (\n    <');
  content = content.replace(/return\s*\n\s*</g, 'return (\n    <');
  
  // Fix extra semicolons after JSX fragments
  content = content.replace(/<Footer \/>;\s*<\/>;/g, '<Footer />\n    </>');
  content = content.replace(/<\/>;\s*\);/g, '</>\n  );');
  
  // Fix extra semicolons after function declarations
  content = content.replace(/};\s*$/gm, '}');
  
  return content;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixPageErrors(content, filePath);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

// Process the app directory
processDirectory('./app');
console.log('Page error fixes completed');