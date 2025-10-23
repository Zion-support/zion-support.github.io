const fs = require('fs');
const path = require('path');

// Function to fix JSX files comprehensively
function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the main issue - malformed return statements and JSX structure
    content = content.replace(/\]\s*return\s*\(\s*<>\s*$/gm, ']\n  return (\n    <React.Fragment>');
    content = content.replace(/\]\s*return\s*\(\s*<React\.Fragment>\s*$/gm, ']\n  return (\n    <React.Fragment>');
    content = content.replace(/\]\s*return\s*\(\s*<div/gm, ']\n  return (\n    <div');
    content = content.replace(/\]\s*return\s*\(\s*<nav/gm, ']\n  return (\n    <nav');
    
    // Fix malformed JSX structure
    content = content.replace(/return\s*\(\s*<>\s*$/gm, '  return (\n    <React.Fragment>');
    content = content.replace(/return\s*\(\s*<React\.Fragment>\s*$/gm, '  return (\n    <React.Fragment>');
    content = content.replace(/return\s*\(\s*<div/gm, '  return (\n    <div');
    content = content.replace(/return\s*\(\s*<nav/gm, '  return (\n    <nav');
    
    // Fix closing tags
    content = content.replace(/<\/>\s*\)\s*}\s*$/gm, '    </React.Fragment>\n  )\n}');
    content = content.replace(/<\/React\.Fragment>\s*\)\s*}\s*$/gm, '    </React.Fragment>\n  )\n}');
    
    // Fix specific malformed patterns
    content = content.replace(/<>\s*<Helmet>/g, '<React.Fragment>\n      <Helmet>');
    content = content.replace(/<>\s*<Navigation>/g, '<React.Fragment>\n      <Navigation>');
    content = content.replace(/<>\s*<div/g, '<React.Fragment>\n      <div');
    
    // Fix malformed closing tags
    content = content.replace(/<\/>\s*$/gm, '    </React.Fragment>');
    content = content.replace(/<\/React\.Fragment>\s*$/gm, '    </React.Fragment>');
    
    // Fix indentation issues
    content = content.replace(/^\s*<Helmet>/gm, '      <Helmet>');
    content = content.replace(/^\s*<Navigation \/>/gm, '      <Navigation />');
    content = content.replace(/^\s*<Footer \/>/gm, '      <Footer />');
    content = content.replace(/^\s*<\/Helmet>/gm, '      </Helmet>');
    content = content.replace(/^\s*<\/React\.Fragment>/gm, '    </React.Fragment>');
    
    // Fix malformed JSX expressions
    content = content.replace(/<>\s*$/gm, '<React.Fragment>');
    content = content.replace(/<\/>\s*$/gm, '</React.Fragment>');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and fix all problematic files
function fixAllJSXFiles() {
  const appDir = path.join(__dirname, 'app');
  const files = [];
  
  function findTSXFiles(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        findTSXFiles(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  findTSXFiles(appDir);
  
  let fixedCount = 0;
  for (const file of files) {
    if (fixJSXFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} out of ${files.length} files`);
}

// Run the fix
fixAllJSXFiles();