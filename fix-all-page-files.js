import fs from 'fs';
import path from 'path';

function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if this is a page file that needs fixing
    if (content.includes('return (') && !content.includes('export default function') && !content.includes('const ') && !content.includes('function ')) {
      // Extract the component name from the file path
      const fileName = path.basename(filePath, '.tsx');
      const componentName = fileName === 'page' ? 'Page' : 
                           fileName === 'error' ? 'Error' :
                           fileName === 'loading' ? 'Loading' :
                           fileName === 'global-error' ? 'GlobalError' :
                           fileName.charAt(0).toUpperCase() + fileName.slice(1);
      
      // Add function declaration before the return statement
      content = content.replace(/^(\s*)(return\s*\()/m, `$1export default function ${componentName}() {\n$1  $2`);
      modified = true;
    }
    
    // Fix duplicate exports
    content = content.replace(/export default \w+Page;?\s*$/gm, '');
    content = content.replace(/export default \w+Error;?\s*$/gm, '');
    content = content.replace(/export default \w+Loading;?\s*$/gm, '');
    content = content.replace(/export default \w+GlobalError;?\s*$/gm, '');
    
    // Fix extra semicolons after JSX fragments
    content = content.replace(/<Footer \/>;\s*<\/>;/g, '<Footer />\n    </>');
    content = content.replace(/<\/>;\s*\);/g, '</>\n  );');
    
    // Fix extra semicolons after function declarations
    content = content.replace(/};\s*$/gm, '}');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
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
    } else if (item.endsWith('.tsx') && (item === 'page.tsx' || item === 'error.tsx' || item === 'loading.tsx' || item === 'global-error.tsx')) {
      fixPageFile(fullPath);
    }
  }
}

// Process the app directory
processDirectory('./app');
console.log('All page files fixed');