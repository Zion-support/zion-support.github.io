const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix malformed JSX fragments
    content = content.replace(/<\n\s*\{\.\.\.props\}\s*\/>/g, 'WrappedComponent {...props} />');
    
    // Fix malformed onClick handlers
    content = content.replace(/onClick=\{\(\)\s*=\s*aria-label="[^"]*">\s*/g, 'onClick={() => ');
    
    // Fix malformed aria-label attributes
    content = content.replace(/aria-label="Button">/g, 'aria-label="Action Button">');
    
    // Fix duplicate metadata exports
    const metadataRegex = /export const metadata = \{[\s\S]*?\};\s*;\s*import/g;
    content = content.replace(metadataRegex, (match) => {
      const metadataPart = match.match(/export const metadata = \{[\s\S]*?\};/)[0];
      const importPart = match.match(/import[\s\S]*$/)[0];
      return metadataPart + '\n' + importPart;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all TypeScript files in the app directory
const appDir = './app';
const files = [];

function walkDir(dir) {
  const filesList = fs.readdirSync(dir);
  filesList.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      files.push(filePath);
    }
  });
}

walkDir(appDir);

files.forEach(fixFile);
console.log(`Processed ${files.length} files`);
