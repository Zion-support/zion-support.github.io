import fs from 'fs';
import path from 'path';

function fixUnusedImports(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixUnusedImports(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Check if file has unused import errors by looking for common patterns
        // This is a simple heuristic - in practice you'd want to use ESLint programmatically
        
        // Remove unused React import if it's the only React import and not used
        if (content.includes("import React from 'react';") && !content.includes('<React.') && !content.includes('React.')) {
          content = content.replace("import React from 'react';\n", '');
          modified = true;
        }
        
        // Remove unused Layout import if it's not used
        if (content.includes("import { Layout }") && !content.includes('<Layout') && !content.includes('Layout.')) {
          content = content.replace(/import \{ Layout \}[^;]*;\n?/g, '');
          modified = true;
        }
        
        // Remove unused icon imports - this is more complex and would need proper AST parsing
        // For now, let's just remove some common unused patterns
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          console.log(`Fixed unused imports in: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
}

// Start fixing from the app directory
fixUnusedImports('./app');
console.log('Unused import fixing completed!');