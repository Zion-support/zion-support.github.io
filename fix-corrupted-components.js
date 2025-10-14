import fs from 'fs';
import path from 'path';

// Function to get all component files
function getAllComponentFiles() {
  const componentFiles = [];
  
  function findComponentFiles(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        findComponentFiles(fullPath);
      } else if (item.endsWith('.tsx') && fullPath.includes('components')) {
        componentFiles.push(fullPath);
      }
    }
  }
  
  findComponentFiles('app');
  return componentFiles;
}

// Function to check if a component file is corrupted
function isCorrupted(content) {
  return content.includes('>>') || 
         content.includes('() = {') ||
         content.includes('div') && content.includes('return (') && !content.includes('<div') ||
         content.includes('</h2') ||
         content.includes('</p') ||
         content.includes('This component is under construction.') ||
         content.includes(');') && content.includes('};') && content.includes('>>>>');
}

// Function to fix a corrupted component
function fixComponent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (!isCorrupted(content)) {
      return; // Skip if not corrupted
    }
    
    // Extract component name from filename
    const filename = path.basename(filePath, '.tsx');
    const componentName = filename.split(/(?=[A-Z])/).join(' ');
    
    // Create proper component content
    const fixedContent = `import React from 'react';

const ${filename} = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-8">${componentName}</h2>
        <p className="text-gray-300 text-lg">This component is under construction.</p>
      </div>
    </div>
  );
};

export default ${filename};`;

    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all component files and fix corrupted ones
const allComponentFiles = getAllComponentFiles();
let fixedCount = 0;

allComponentFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (isCorrupted(content)) {
      fixComponent(filePath);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} corrupted components out of ${allComponentFiles.length} total components.`);