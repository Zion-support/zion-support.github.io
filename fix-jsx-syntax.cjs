const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax errors
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix malformed JSX elements with } instead of >
    content = content.replace(/<motion\.div\}/g, '<motion.div');
    content = content.replace(/<div\}/g, '<div');
    content = content.replace(/<section\}/g, '<section');
    content = content.replace(/<h1\}/g, '<h1');
    content = content.replace(/<h2\}/g, '<h2');
    content = content.replace(/<h3\}/g, '<h3');
    content = content.replace(/<p\}/g, '<p');
    content = content.replace(/<span\}/g, '<span');
    content = content.replace(/<a\}/g, '<a');
    content = content.replace(/<Link\}/g, '<Link');
    content = content.replace(/<button\}/g, '<button');
    content = content.replace(/<input\}/g, '<input');
    content = content.replace(/<table\}/g, '<table');
    content = content.replace(/<thead\}/g, '<thead');
    content = content.replace(/<tbody\}/g, '<tbody');
    content = content.replace(/<tr\}/g, '<tr');
    content = content.replace(/<th\}/g, '<th');
    content = content.replace(/<td\}/g, '<td');
    content = content.replace(/<ul\}/g, '<ul');
    content = content.replace(/<li\}/g, '<li');
    content = content.replace(/<form\}/g, '<form');
    content = content.replace(/<label\}/g, '<label');
    content = content.replace(/<select\}/g, '<select');
    content = content.replace(/<option\}/g, '<option');
    content = content.replace(/<textarea\}/g, '<textarea');
    content = content.replace(/<img\}/g, '<img');
    content = content.replace(/<video\}/g, '<video');
    content = content.replace(/<audio\}/g, '<audio');
    content = content.replace(/<iframe\}/g, '<iframe');
    content = content.replace(/<canvas\}/g, '<canvas');
    content = content.replace(/<svg\}/g, '<svg');
    content = content.replace(/<path\}/g, '<path');
    content = content.replace(/<circle\}/g, '<circle');
    content = content.replace(/<rect\}/g, '<rect');
    content = content.replace(/<line\}/g, '<line');
    content = content.replace(/<polygon\}/g, '<polygon');
    content = content.replace(/<g\}/g, '<g');
    content = content.replace(/<defs\}/g, '<defs');
    content = content.replace(/<clipPath\}/g, '<clipPath');
    content = content.replace(/<mask\}/g, '<mask');
    content = content.replace(/<pattern\}/g, '<pattern');
    content = content.replace(/<linearGradient\}/g, '<linearGradient');
    content = content.replace(/<radialGradient\}/g, '<radialGradient');
    content = content.replace(/<stop\}/g, '<stop');
    content = content.replace(/<text\}/g, '<text');
    content = content.replace(/<tspan\}/g, '<tspan');
    content = content.replace(/<foreignObject\}/g, '<foreignObject');
    
    // Fix missing closing braces in function components
    content = content.replace(/export default function ([A-Z][a-zA-Z0-9]*)\([^)]*\) \{\s*return \([\s\S]*?\);\s*$/, (match, funcName) => {
      return match + '\n}';
    });
    
    // Fix missing closing braces in arrow functions
    content = content.replace(/const ([a-zA-Z_][a-zA-Z0-9_]*) = \(\) => \{[\s\S]*?return \([\s\S]*?\);\s*$/, (match, varName) => {
      return match + '\n};';
    });
    
    // Fix malformed template literals
    content = content.replace(/`([^`]*)\s*$/gm, (match, content) => {
      if (content.includes('${') && !content.endsWith('`')) {
        return match + '`';
      }
      return match;
    });
    
    // Fix missing closing parentheses in JSX
    content = content.replace(/return \([\s\S]*?\);\s*$/, (match) => {
      if (!match.includes('</MainLayout>') && match.includes('<MainLayout')) {
        return match.replace(/\);\s*$/, ');\n}');
      }
      return match;
    });
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed JSX syntax in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing JSX syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JavaScript files in pages directory
function getAllPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllPageFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const pagesDir = '/workspace/pages';
const pageFiles = getAllPageFiles(pagesDir);

console.log(`Found ${pageFiles.length} page files to check for JSX syntax errors...`);

let fixedCount = 0;
for (const file of pageFiles) {
  if (fixJSXSyntax(file)) {
    fixedCount++;
  }
}

console.log(`Fixed JSX syntax in ${fixedCount} files out of ${pageFiles.length} total files.`);