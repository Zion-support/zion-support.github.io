const fs = require('fs');
const path = require('path');

// Function to fix all remaining issues
function fixAllIssues(content) {
  // Fix missing semicolons in import statements
  content = content.replace(/import { ([^}]+) } from 'lucide-react'\n/g, "import { $1 } from 'lucide-react';\n");
  content = content.replace(/import { ([^}]+) } from 'react'\n/g, "import { $1 } from 'react';\n");
  content = content.replace(/import { ([^}]+) } from 'next\/link'\n/g, "import { $1 } from 'next/link';\n");
  
  // Fix JSX return statements
  content = content.replace(/return \(\n    <div>/g, 'return (\n    <div>');
  
  // Fix any remaining malformed quotes
  content = content.replace(/\"([^\"]*)\"/g, '"$1"');
  content = content.replace(/'([^']*)'/g, "'$1'");
  
  return content;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixAllIssues(content);
        
        if (content !== fixedContent) {
          fs.writeFileSync(filePath, fixedContent, 'utf8');
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  }
}

// Start fixing from the app directory
console.log('Starting final comprehensive fixes...');
fixFilesInDirectory('./app');
console.log('Final fixes completed!');