const fs = require('fs');
const path = require('path');

// Function to fix specific JSX issues
function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix malformed return statements
    content = content.replace(/\]\s*return\s*\(\s*<nav/g, ']\n  return (\n    <nav');
    content = content.replace(/\]\s*return\s*\(\s*<div/g, ']\n  return (\n    <div');
    content = content.replace(/\]\s*return\s*\(\s*<React\.Fragment>/g, ']\n  return (\n    <React.Fragment>');
    
    // Fix malformed return statements without proper indentation
    content = content.replace(/^\s*return\s*\(\s*<nav/gm, '  return (\n    <nav');
    content = content.replace(/^\s*return\s*\(\s*<div/gm, '  return (\n    <div');
    content = content.replace(/^\s*return\s*\(\s*<React\.Fragment>/gm, '  return (\n    <React.Fragment>');
    
    // Fix malformed function declarations
    content = content.replace(/export default function\s+(\w+)\s*\(\s*\)\s*{\s*return\s*\(\s*<div/g, 'export default function $1() {\n  return (\n    <div');
    
    // Fix malformed JSX structure
    content = content.replace(/<>\s*<Helmet>/g, '<React.Fragment>\n      <Helmet>');
    content = content.replace(/<>\s*<Navigation>/g, '<React.Fragment>\n      <Navigation>');
    content = content.replace(/<>\s*<div/g, '<React.Fragment>\n      <div');
    
    // Fix closing tags
    content = content.replace(/<\/>\s*$/gm, '</React.Fragment>');
    content = content.replace(/<\/React\.Fragment>\s*$/gm, '</React.Fragment>');
    
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

// Function to fix specific problematic files
function fixSpecificFiles() {
  const problematicFiles = [
    'app/components/Navigation.tsx',
    'app/accessibility/page.tsx',
    'app/ai-api-management/page.tsx',
    'app/ai-api-manager/page.tsx',
    'app/ai-audio-processor-improved/page.tsx'
  ];
  
  let fixedCount = 0;
  for (const file of problematicFiles) {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
      if (fixJSXFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  console.log(`Fixed ${fixedCount} out of ${problematicFiles.length} specific files`);
}

// Run the fix
fixSpecificFiles();