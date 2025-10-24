const fs = require('fs');
const path = require('path');

// Function to fix JSX files
function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common JSX issues
    content = content.replace(/return \(\s*<React\.Fragment>/g, '  return (\n    <React.Fragment>');
    content = content.replace(/return \(\s*<Helmet>/g, '  return (\n    <Helmet>');
    content = content.replace(/return \(\s*<Navigation>/g, '  return (\n    <Navigation>');
    content = content.replace(/return \(\s*<main/g, '  return (\n    <main');
    content = content.replace(/return \(\s*<div/g, '  return (\n    <div');
    
    // Fix malformed JSX structure
    content = content.replace(/\]\s*return \(\s*<React\.Fragment>/g, ']\n  return (\n    <React.Fragment>');
    content = content.replace(/\]\s*return \(\s*<Helmet>/g, ']\n  return (\n    <Helmet>');
    
    // Fix extra closing tags at the end
    content = content.replace(/\n\s*<\/button>\s*\n\s*<\/button>\s*\n\s*<\/p>\s*\n\s*<\/p>\s*\n\s*<\/h2>\s*\n\s*<\/button>\s*\n\s*<\/button>\s*\n\s*<\/h1>\s*$/g, '');
    content = content.replace(/\n\s*<\/button>\s*\n\s*<\/h2>\s*\n\s*<\/button>\s*\n\s*<\/button>\s*\n\s*<\/h1>\s*$/g, '');
    content = content.replace(/\n\s*<\/button>\s*\n\s*<\/button>\s*\n\s*<\/p>\s*\n\s*<\/p>\s*\n\s*<\/h2>\s*\n\s*<\/button>\s*\n\s*<\/button>\s*\n\s*<\/h1>\s*$/g, '');
    
    // Fix malformed Helmet tags
    content = content.replace(/<Helmet>\s*<title>Page \| Zion Tech Group<\/title>/g, '<Helmet>\n        <title>AI API Management - Zion Tech Group</title>');
    content = content.replace(/<Helmet>\s*<title>Page \| Zion Tech Group<\/title>/g, '<Helmet>\n        <title>AI API Manager - Zion Tech Group</title>');
    
    // Fix missing closing tags
    content = content.replace(/<\/React\.Fragment>\s*\)\s*}\s*export default.*$/g, '    </React.Fragment>\n  )\n}\n\nexport default $1');
    
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