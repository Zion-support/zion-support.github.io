import fs from 'fs';
import path from 'path';

// Function to clean up imports in a file
function cleanImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused Helmet imports
    content = content.replace(/import { Helmet } from 'react-helmet-async';\n/g, '');
    
    // Remove unused React hooks
    content = content.replace(/import React, \{ useState, useEffect \} from 'react';/g, "import React from 'react';");
    content = content.replace(/import React, \{ useState \} from 'react';/g, "import React from 'react';");
    content = content.replace(/import React, \{ useEffect \} from 'react';/g, "import React from 'react';");
    
    // Remove unused variables
    content = content.replace(/const \[selectedPlan, setSelectedPlan\] = useState\('pro'\);\n/g, '');
    content = content.replace(/const \[isVisible, setIsVisible\] = useState\(false\);\n/g, '');
    content = content.replace(/useEffect\(\(\) => \{\s*setIsVisible\(true\);\s*\}, \[\]\);\n/g, '');
    
    // Clean up empty lines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned ${filePath}`);
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Clean all TSX files
const allFiles = getAllTsxFiles('app');
allFiles.forEach(cleanImports);

console.log(`Cleaned ${allFiles.length} files`);