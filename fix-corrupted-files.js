import fs from 'fs';
import path from 'path';

// Function to fix corrupted React/TSX files
function fixCorruptedFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix concatenated import statements
    content = content.replace(/import React from "react";"import { Helmet } from "react-helmet-async";"/g, 
      'import React from "react";\nimport { Helmet } from "react-helmet-async";');
    
    // Fix malformed function declarations
    content = content.replace(/const PagePage = \(\) => \{'  return \(/g, 
      'const PagePage = () => {\n  return (');
    
    // Fix malformed JSX attributes
    content = content.replace(/name: "description"/g, 'name="description"');
    content = content.replace(/content: "([^"]*)"/g, 'content="$1"');
    content = content.replace(/className: "([^"]*)"/g, 'className="$1"');
    
    // Fix malformed closing tags and quotes
    content = content.replace(/"      <\/Helmet>/g, '\n      </Helmet>');
    content = content.replace(/"      "      <div>/g, '\n      <div>');
    content = content.replace(/"          <h1 className: "([^"]*)" >([^<]*)<\/h1>/g, 
      '\n          <h1 className="$1">$2</h1>');
    content = content.replace(/"          <p className: "([^"]*)" >"            ([^"]*)"          <\/p>/g, 
      '\n          <p className="$1">\n            $2\n          </p>');
    
    // Fix malformed closing divs and function
    content = content.replace(/"        <\/div>\n      <\/div>\n  \);\n\}/g, 
      '\n        </div>\n      </div>\n    </div>\n  );\n};');
    
    // Fix export statements
    content = content.replace(/export default PagePage;<\/div>/g, 'export default PagePage;');
    
    // Clean up any remaining malformed quotes and syntax
    content = content.replace(/"([^"]*)"([^"]*)"([^"]*)"/g, '"$1$2$3"');
    content = content.replace(/\s+"/g, ' "');
    content = content.replace(/"\s+/g, '" ');
    
    // Ensure proper line breaks
    content = content.replace(/\}\s*export/g, '}\n\nexport');
    content = content.replace(/\}\s*<\/div>/g, '}\n');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TSX/JSX files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other irrelevant directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {
        fixedCount += fixAllFiles(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixCorruptedFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
console.log('Starting to fix corrupted files...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files.`);

// Also fix any root level TSX files
const rootFiles = fs.readdirSync('.');
for (const file of rootFiles) {
  if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
    if (fixCorruptedFile(file)) {
      console.log(`Fixed root file: ${file}`);
    }
  }
}

console.log('File fixing completed!');