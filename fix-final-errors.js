import fs from 'fs';
import path from 'path';

// Function to fix final syntax errors
function fixFinalErrors(content) {
  // Fix malformed import statements
  content = content.replace(/import { Helmet } from  from "react-helmet-async";/g, 'import { Helmet } from "react-helmet-async";');
  
  // Fix malformed use client directive
  content = content.replace(/"use client"\n/g, '"use client";\n');
  
  // Fix malformed JSX closing tags
  content = content.replace(/<\/div>;/g, '</div>');
  content = content.replace(/<\/section>;/g, '</section>');
  
  // Fix malformed return statements
  content = content.replace(/  \);\n}/g, '  )\n}');
  
  // Fix malformed export statements
  content = content.replace(/export default \w+;\n};/g, 'export default Page\n}');
  content = content.replace(/export default \w+;""/g, 'export default Page');
  
  // Fix malformed function declarations
  content = content.replace(/const (\w+): "React\.FC = \(\) => \{"/g, 'const $1: React.FC = () => {');
  
  // Fix malformed array and object syntax
  content = content.replace(/\[\];/g, '[]');
  content = content.replace(/\];/g, ']');
  content = content.replace(/\{;/g, '{');
  
  return content;
}

// Function to process all TypeScript/TSX files
function processFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        console.log(`Processing: ${filePath}`);
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        content = fixFinalErrors(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  }
}

// Process the app directory
console.log('Starting final error fixes...');
processFiles('./app');
console.log('Final error fixes completed!');