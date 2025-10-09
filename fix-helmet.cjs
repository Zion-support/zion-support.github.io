const fs = require('fs');
const path = require('path');

function fixHelmetInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace import statement
    content = content.replace(
      /import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];?/g,
      "import Head from 'next/head';"
    );
    
    // Replace Helmet tags with Head tags
    content = content.replace(/<Helmet>/g, '<Head>');
    content = content.replace(/<\/Helmet>/g, '</Head>');
    
    // Only write if changes were made
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixHelmetInFile(filePath);
    }
  }
}

// Start from the app directory
findAndFixFiles('/workspace/app');
console.log('Helmet fixes completed!');