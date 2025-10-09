const fs = require('fs');
const path = require('path');

// Find all files with Helmet usage
function findFilesWithHelmet(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('react-helmet-async') || content.includes('<Helmet>')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

function fixHelmetUsage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove Helmet import
    if (content.includes("import { Helmet } from 'react-helmet-async'")) {
      content = content.replace(/import { Helmet } from 'react-helmet-async';\n?/g, '');
      modified = true;
    }
    
    // Remove Helmet usage - more comprehensive pattern
    const helmetPattern = /<Helmet>[\s\S]*?<\/Helmet>\s*/g;
    if (helmetPattern.test(content)) {
      content = content.replace(helmetPattern, '');
      modified = true;
    }
    
    // Fix return statements with fragments
    if (content.includes('return (\n    <>')) {
      content = content.replace(/return \(\s*<>\s*/g, 'return (\n    ');
      modified = true;
    }
    
    if (content.includes('</>\n  );')) {
      content = content.replace(/<\/>\s*\);/g, '\n  );');
      modified = true;
    }
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find and fix all files
const filesToFix = findFilesWithHelmet('app');
console.log(`Found ${filesToFix.length} files with Helmet usage`);

filesToFix.forEach(fixHelmetUsage);

console.log('All Helmet fixes completed!');