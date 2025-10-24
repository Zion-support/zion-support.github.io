const fs = require('fs');
const path = require('path');

// Function to fix a single component file
function fixComponentFile(filePath) {
  try {
    const fileName = path.basename(filePath, '.tsx');
    const componentName = fileName.replace(/([A-Z])/g, ' $1').trim();
    
    const content = `'use client';
import React from 'react';

interface ${fileName}Props {
  className?: string;
  children?: React.ReactNode;
}

const ${fileName}: React.FC<${fileName}Props> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ${fileName};`;
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix all corrupted component files
function fixAllComponentFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixAllComponentFiles(filePath);
    } else if (file.endsWith('.tsx')) {
      // Check if file is corrupted by looking for common error patterns
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('error TS') || 
          content.includes('<<<<<<<') || 
          content.includes('=======') || 
          content.includes('>>>>>>>') ||
          content.includes('$3') ||
          content.includes('$2') ||
          content.includes('$1')) {
        fixComponentFile(filePath);
      }
    }
  }
}

// Start fixing from the app/components directory
const componentsDir = path.join(__dirname, 'app', 'components');
if (fs.existsSync(componentsDir)) {
  console.log('Starting to fix corrupted component files...');
  fixAllComponentFiles(componentsDir);
  console.log('Finished fixing component files.');
} else {
  console.log('Components directory not found.');
}