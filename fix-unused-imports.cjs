const fs = require('fs');
const path = require('path');

function fixUnusedImports(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixUnusedImports(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if ErrorBoundary is imported but not used
      if (content.includes("import ErrorBoundary from '../components/ErrorBoundary'") || 
          content.includes('import ErrorBoundary from "../components/ErrorBoundary"')) {
        
        // Check if ErrorBoundary is actually used in the JSX
        if (!content.includes('<ErrorBoundary') && !content.includes('ErrorBoundary.')) {
          // Remove the import line
          content = content.replace(/import ErrorBoundary from ['"]\.\.\/components\/ErrorBoundary['"];\n?/g, '');
          fs.writeFileSync(filePath, content);
          console.log(`Fixed unused ErrorBoundary import in: ${filePath}`);
        }
      }
    }
  });
}

fixUnusedImports('./app');
console.log('Fixed all unused ErrorBoundary imports');
