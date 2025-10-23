const fs = require('fs');
const path = require('path');

function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove Helmet imports
    content = content.replace(/import.*Helmet.*from.*react-helmet-async.*\n/g, '');
    
    // Remove Helmet JSX blocks
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
    
    // Fix React.Fragment to empty fragments
    content = content.replace(/<React\.Fragment>/g, '<>');
    content = content.replace(/<\/React\.Fragment>/g, '</>');
    
    // Remove metadata exports (not needed for client components)
    content = content.replace(/export const metadata = \{[\s\S]*?\};\n\n/g, '');
    
    // Fix JSX structure - remove extra div wrappers
    content = content.replace(/return \(\s*<div>\s*<div className="min-h-screen/g, 'return (\n    <div className="min-h-screen');
    
    // Fix closing tags
    content = content.replace(/<\/div>\s*<\/div>\s*\);/g, '\n    </div>\n  );');
    
    // Fix empty fragment issues
    content = content.replace(/return \(\s*<>\s*<div className="min-h-screen/g, 'return (\n    <div className="min-h-screen');
    content = content.replace(/<\/div>\s*<\/>\s*\);/g, '\n    </div>\n  );');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find all page.tsx files
const appDir = path.join(__dirname, 'app');
const pageFiles = [];

function findPageFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findPageFiles(filePath);
    } else if (file === 'page.tsx') {
      pageFiles.push(filePath);
    }
  }
}

findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page files to fix`);

pageFiles.forEach(fixPageFile);

console.log('Done fixing all page files');