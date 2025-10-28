import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TypeScript/TSX files in the app directory
const files = await glob('app/**/*.{ts,tsx}', { cwd: '/workspace' });


let fixedCount = 0;

for (const file of files) {
  const filePath = path.join('/workspace', file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix import path for ErrorBoundary
    if (content.includes("")) {
      content = content.replace(
        "",
        ""
      );
      modified = true;
    }
    
    // Remove duplicate metadata exports
    /g;
        
    if (metadataMatches && metadataMatches.length > 1) {
      // Keep only the first metadata export
            content = content.replace(metadataPattern, '');
      content = firstMetadata + '\n' + content;
      modified = true;
    }
    
    // Fix malformed JSX with pagePage
    if (content.includes('<pagePage')) {
      // Extract the component name from the function declaration
      const componentMatch = content.match(/function\s+(\w+)\s*\(/);
      const componentName = componentMatch ? componentMatch[1] : 'Component';
      
      content = content.replace(/<pagePage/g, `<${componentName}`);
      modified = true;
    }
    
    // Fix unused variable declarations
    if (content.includes('const pagePage')) {
      const componentMatch = content.match(/function\s+(\w+)\s*\(/);
      const componentName = componentMatch ? componentMatch[1] : 'Component';
      
      content = content.replace(/const pagePage = /g, `const ${componentName} = `);
      content = content.replace(/<pagePage/g, `<${componentName}`);
      modified = true;
    }
    
    // Fix props type annotation
    if (content.includes('export default function Wrapped(props)')) {
      content = content.replace(
        'export default function Wrapped(props)',
        'export default function Wrapped(props: any)'
      );
      modified = true;
    }
    
    // Clean up any remaining syntax issues
    content = content.replace(/;\s*;/g, ';'); // Remove double semicolons
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove excessive newlines
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
            fixedCount++;
    }
    
  } catch (error) {
    // Empty block
  }
}

