const fs = require('fs');
const path = require('path');

// Function to fix extra quotes in import statements
function fixExtraQuotes(content) {
  // Fix extra single quotes at the end of import statements
  content = content.replace(/';/g, "";);
  
  // Fix extra double quotes at the end of import statements
  content = content.replace(/";/g, '';);
  
  // Fix mixed quotes at the end
  content = content.replace(/";/g, '';);
  content = content.replace(/';/g, "";);
  
  // Fix extra quotes in 'use client' statements
  content = content.replace(/'use client';/g, "'use client";);
  
  // Fix extra quotes in object properties
  content = content.replace(/": "/g, '": "');
  content = content.replace(/": "/g, '": "');
  content = content.replace(/": "/g, '": "');
  content = content.replace(/": "/g, '": "');
  
  return content;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        content = fixExtraQuotes(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
}

// Start fixing from the workspace root
console.log('Starting to fix extra quotes in import statements...');
fixFilesInDirectory('/workspace');
console.log('Extra quotes fixes completed!');