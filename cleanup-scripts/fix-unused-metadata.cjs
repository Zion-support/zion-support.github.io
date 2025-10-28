const fs = require('fs');
const path = require('path');

function fixUnusedMetadata(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixUnusedMetadata(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if Metadata is imported but not used
      if (content.includes("import { Metadata } from 'next'") || 
          content.includes('import { Metadata } from "next"')) {
        
        // Check if Metadata is actually used in the code
        if (!content.includes('Metadata') || content.match(/import.*Metadata.*from.*next.*\n.*export.*metadata/)) {
          // Remove the import line
          content = content.replace(/import\s*{\s*Metadata\s*}\s*from\s*['"]next['"];\n?/g, '');
          fs.writeFileSync(filePath, content);
          console.log(`Fixed unused Metadata import in: ${filePath}`);
        }
      }
    }
  });
}

fixUnusedMetadata('./app');
console.log('Fixed all unused Metadata imports');
