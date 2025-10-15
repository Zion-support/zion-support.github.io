import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Fixing React imports...');

const appDir = path.join(__dirname, '../app');

function fixReactImports(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixReactImports(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove unused React imports
        if (content.includes("import React from 'react';") && !content.includes('React.')) {
          content = content.replace("import React from 'react';\n", '');
          content = content.replace("import React from 'react';", '');
          fs.writeFileSync(filePath, content);
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
}

fixReactImports(appDir);
console.log('React import fixes completed');