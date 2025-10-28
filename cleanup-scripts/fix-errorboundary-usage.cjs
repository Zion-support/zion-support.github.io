const fs = require('fs');
const path = require('path');

function fixErrorBoundaryUsage(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixErrorBoundaryUsage(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if ErrorBoundary is used but not imported
      if (content.includes('<ErrorBoundary') && !content.includes('import ErrorBoundary')) {
        // Add the import
        content = content.replace(
          /(import React[^;]*;)/,
          '$1\nimport ErrorBoundary from \'../components/ErrorBoundary\';'
        );
        
        // If no React import, add both
        if (!content.includes('import React')) {
          content = 'import React from \'react\';\nimport ErrorBoundary from \'../components/ErrorBoundary\';\n' + content;
        }
        
        fs.writeFileSync(filePath, content);
        console.log(`Fixed ErrorBoundary usage in: ${filePath}`);
      }
    }
  });
}

fixErrorBoundaryUsage('./app');
console.log('Fixed all ErrorBoundary usage');
