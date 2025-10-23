const fs = require('fs');
const path = require('path');

// Function to fix JSX files comprehensively
function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the main issue - malformed return statements
    content = content.replace(/\]\s*return \(\s*<React\.Fragment>/g, ']\n  return (\n    <React.Fragment>');
    content = content.replace(/\]\s*return \(\s*<Helmet>/g, ']\n  return (\n    <Helmet>');
    content = content.replace(/\]\s*return \(\s*<Navigation>/g, ']\n  return (\n    <Navigation>');
    content = content.replace(/\]\s*return \(\s*<main/g, ']\n  return (\n    <main');
    content = content.replace(/\]\s*return \(\s*<div/g, ']\n  return (\n    <div');
    
    // Fix other malformed return statements
    content = content.replace(/}\s*\]\s*return \(\s*<React\.Fragment>/g, '}\n  ]\n  return (\n    <React.Fragment>');
    content = content.replace(/}\s*\]\s*return \(\s*<Helmet>/g, '}\n  ]\n  return (\n    <Helmet>');
    
    // Fix malformed Helmet tags
    content = content.replace(/<Helmet>\s*<title>Page \| Zion Tech Group<\/title>/g, '<Helmet>\n        <title>AI API Management - Zion Tech Group</title>');
    content = content.replace(/<Helmet>\s*<title>Page \| Zion Tech Group<\/title>/g, '<Helmet>\n        <title>AI API Manager - Zion Tech Group</title>');
    
    // Fix extra closing tags at the end
    content = content.replace(/\n\s*<\/button>\s*\n\s*<\/button>\s*\n\s*<\/p>\s*\n\s*<\/p>\s*\n\s*<\/h2>\s*\n\s*<\/button>\s*\n\s*<\/button>\s*\n\s*<\/h1>\s*$/g, '');
    content = content.replace(/\n\s*<\/button>\s*\n\s*<\/h2>\s*\n\s*<\/button>\s*\n\s*<\/button>\s*\n\s*<\/h1>\s*$/g, '');
    content = content.replace(/\n\s*<\/button>\s*\n\s*<\/button>\s*\n\s*<\/p>\s*\n\s*<\/p>\s*\n\s*<\/h2>\s*\n\s*<\/button>\s*\n\s*<\/button>\s*\n\s*<\/h1>\s*$/g, '');
    
    // Fix missing closing tags and proper structure
    content = content.replace(/<\/React\.Fragment>\s*\)\s*}\s*export default.*$/g, '    </React.Fragment>\n  )\n}\n\nexport default $1');
    
    // Fix specific malformed JSX patterns
    content = content.replace(/return \(\s*<React\.Fragment>\s*<Helmet>/g, '  return (\n    <React.Fragment>\n      <Helmet>');
    content = content.replace(/return \(\s*<React\.Fragment>\s*<Navigation>/g, '  return (\n    <React.Fragment>\n      <Navigation>');
    
    // Fix malformed Helmet structure
    content = content.replace(/<Helmet>\s*<title>([^<]+)<\/title>/g, '<Helmet>\n        <title>$1</title>');
    content = content.replace(/<meta name="description" content="([^"]+)" \/>/g, '        <meta name="description" content="$1" />');
    content = content.replace(/<meta name="keywords" content="([^"]+)" \/>/g, '        <meta name="keywords" content="$1" />');
    content = content.replace(/<\/Helmet>/g, '      </Helmet>');
    
    // Fix Navigation component calls
    content = content.replace(/<Navigation \/>/g, '      <Navigation />');
    
    // Fix main content structure
    content = content.replace(/<main className="([^"]+)">/g, '      <main className="$1">');
    content = content.replace(/<div className="([^"]+)">/g, '        <div className="$1">');
    
    // Fix Footer component calls
    content = content.replace(/<Footer \/>/g, '      <Footer />');
    
    // Fix closing tags
    content = content.replace(/<\/main>/g, '      </main>');
    content = content.replace(/<\/div>/g, '        </div>');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and fix specific problematic files
function fixSpecificFiles() {
  const problematicFiles = [
    'app/ai-api-management/page.tsx',
    'app/ai-api-manager/page.tsx',
    'app/ai-automation/page.tsx',
    'app/ai-autonomous-systems/page.tsx',
    'app/ai-blockchain-analytics/page.tsx'
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