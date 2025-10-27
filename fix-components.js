import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixComponents() {
  console.log('Fixing component files...');
  
  // Find all component files
  const files = await glob('app/components/**/*.tsx');
  
  let modified = 0;
  
  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let originalContent = content;
      
      // Skip empty files
      if (content.trim().length === 0) {
        console.log(`Skipping empty file: ${file}`);
        continue;
      }
      
      // Fix missing interface properties
      if (content.includes('interface') && content.includes('Props')) {
        // Add missing properties to interfaces
        content = content.replace(
          /interface (\w+Props) \{\s*\}/g,
          'interface $1 {\n  className?: string;\n  children?: React.ReactNode;\n}'
        );
      }
      
      // Fix duplicate function declarations
      if (content.includes('const ') && content.includes('export default function')) {
        // Remove the const declaration and keep only the export default function
        const lines = content.split('\n');
        const newLines = [];
        let inConstDeclaration = false;
        let braceCount = 0;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          if (line.includes('const ') && line.includes(': React.FC')) {
            inConstDeclaration = true;
            braceCount = 0;
            continue;
          }
          
          if (inConstDeclaration) {
            // Count braces to know when the const declaration ends
            braceCount += (line.match(/\{/g) || []).length;
            braceCount -= (line.match(/\}/g) || []).length;
            
            if (braceCount === 0 && line.includes('};')) {
              inConstDeclaration = false;
              continue;
            }
            
            if (inConstDeclaration) {
              continue;
            }
          }
          
          newLines.push(line);
        }
        
        content = newLines.join('\n');
      }
      
      // Fix stray closing braces
      content = content.replace(/^\s*\}\s*$/gm, '');
      
      // Ensure proper React import
      if (!content.includes('import React')) {
        content = 'import React from \'react\'\n\n' + content;
      }
      
      // Clean up extra empty lines
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      if (content !== originalContent) {
        fs.writeFileSync(file, content);
        console.log(`Fixed: ${file}`);
        modified++;
      }
      
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`Fixed ${modified} component files`);
}

fixComponents().catch(console.error);