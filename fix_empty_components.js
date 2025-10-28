#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix empty component files
function fixEmptyComponents() {
  console.log('🔧 Fixing empty component files...');
  
  const componentDir = path.join(__dirname, 'app', 'components');
  
  if (!fs.existsSync(componentDir)) {
    console.log('Components directory not found');
    return;
  }
  
  const files = fs.readdirSync(componentDir);
  let fixedCount = 0;
  
  for (const file of files) {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const filePath = path.join(componentDir, file);
      
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check if file only contains export default ComponentName;
        const trimmedContent = content.trim();
        const exportMatch = trimmedContent.match(/^export\s+default\s+(\w+);?\s*$/);
        
        if (exportMatch) {
          const componentName = exportMatch[1];
          const newContent = `import React from 'react';

const ${componentName}: React.FC = () => {
  return (
    <div>
      {/* ${componentName} component placeholder */}
    </div>
  );
};

export default ${componentName};`;
          
          fs.writeFileSync(filePath, newContent);
          console.log(`✅ Fixed: ${file}`);
          fixedCount++;
        }
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
      }
    }
  }
  
  console.log(`🎉 Fixed ${fixedCount} empty component files!`);
}

fixEmptyComponents();