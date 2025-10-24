const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax issues
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix common JSX issues
  // 1. Fix unclosed div tags
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<div/g, '<div');
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<h/g, '<h');
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<p/g, '<p');
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<span/g, '<span');
  
  // 2. Fix missing closing tags
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<\/div>/g, '</div>');
  
  // 3. Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*<div[^>]*>\s*<\/div>\s*<div/g, '<div');
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<\/>/g, '</div>');
  
  // 4. Fix missing React fragments
  fixed = fixed.replace(/return\s*\(\s*<div[^>]*>\s*<\/div>\s*<div/g, 'return (\n    <>\n      <div');
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*\)/g, '</div>\n    </>\n  )');
  
  // 5. Fix malformed component returns
  fixed = fixed.replace(/return\s*\(\s*<div[^>]*>\s*<\/div>\s*<Head/g, 'return (\n    <>\n      <div>\n        <Head');
  fixed = fixed.replace(/<\/Head>\s*<div[^>]*>\s*<\/div>\s*<\/div>\s*\)/g, '</Head>\n      </div>\n    </>\n  )');
  
  // 6. Fix missing semicolons and commas
  fixed = fixed.replace(/}\s*const\s+/g, '};\n\nconst ');
  fixed = fixed.replace(/}\s*export\s+/g, '};\n\nexport ');
  fixed = fixed.replace(/}\s*interface\s+/g, '};\n\ninterface ');
  fixed = fixed.replace(/}\s*type\s+/g, '};\n\ntype ');
  
  // 7. Fix malformed interface declarations
  fixed = fixed.replace(/interface\s+(\w+)\s*{\s*([^}]*)\s*}\s*const/g, 'interface $1 {\n  $2\n}\n\nconst');
  
  // 8. Fix missing closing braces
  fixed = fixed.replace(/}\s*export\s+default\s+(\w+)/g, '};\n\nexport default $1');
  
  // 9. Fix malformed JSX attributes
  fixed = fixed.replace(/className=\{[^}]*\}\s*>\s*<\/div>\s*<div/g, 'className={$1}>\n        <div');
  
  // 10. Fix missing closing tags in arrays
  fixed = fixed.replace(/\[\s*{\s*name:\s*"([^"]*)",\s*path:\s*"([^"]*)"\s*}\s*{\s*name:\s*"([^"]*)",\s*path:\s*"([^"]*)"\s*}\s*{\s*name:\s*"([^"]*)",\s*path:\s*"([^"]*)"\s*}\s*{\s*name:\s*"([^"]*)",\s*path:\s*"([^"]*)"\s*}\s*\]/g, 
    '[\n                { name: "$1", path: "$2" },\n                { name: "$3", path: "$4" },\n                { name: "$5", path: "$6" },\n                { name: "$7", path: "$8" }\n              ]');
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(content, filePath) {
  let fixed = content;
  
  // Fix 404.tsx specific issues
  if (filePath.includes('404.tsx')) {
    // Fix the main structure
    fixed = fixed.replace(
      /return\s*\(\s*<div><\/div>\s*<Head>/g,
      'return (\n    <>\n      <Head>'
    );
    fixed = fixed.replace(
      /<\/Head>\s*<div[^>]*><\/div>\s*<div[^>]*><\/div>/g,
      '</Head>\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">\n        <div className="max-w-2xl w-full text-center">'
    );
    fixed = fixed.replace(
      /<\/div>\s*<\/div>\s*<\/div>\s*\)/g,
      '</div>\n      </div>\n    </>\n  )'
    );
  }
  
  // Fix component files
  if (filePath.includes('components/')) {
    // Fix malformed component declarations
    fixed = fixed.replace(
      /interface\s+(\w+)Props\s*{\s*([^}]*)\s*}\s*const\s+(\w+):\s*React\.FC<(\w+)Props>\s*=\s*\(\s*{\s*([^}]*)\s*}\s*\)\s*=>\s*{\s*return\s*\(\s*<\/\w+>/g,
      'interface $1Props {\n  $2\n}\n\nconst $3: React.FC<$1Props> = ({ $5 }) => {\n  return (\n    <div>'
    );
    
    // Fix missing closing tags
    fixed = fixed.replace(/<\/div>\s*export\s+default\s+(\w+)/g, '</div>\n  );\n};\n\nexport default $1');
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixed = fixJSXSyntax(content);
    fixed = fixSpecificFile(fixed, filePath);
    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let processedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        processedCount += processDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (processFile(filePath)) {
        processedCount++;
      }
    }
  }
  
  return processedCount;
}

// Main execution
console.log('Starting JSX syntax fixes...');
const processedCount = processDirectory('/workspace');
console.log(`Processed ${processedCount} files`);

// Also process specific problematic files mentioned in the lint output
const problematicFiles = [
  '/workspace/app/404.tsx',
  '/workspace/app/components/AccessibilityComponents.tsx',
  '/workspace/app/components/AnimatedText.tsx',
  '/workspace/app/components/ContactForm.tsx',
  '/workspace/app/components/ErrorBoundary.tsx',
  '/workspace/app/components/Header.tsx',
  '/workspace/app/components/Navigation.tsx',
  '/workspace/app/components/ServiceCard.tsx',
  '/workspace/app/pages/HomePage.tsx',
  '/workspace/app/pages/AboutPage.tsx',
  '/workspace/app/pages/ContactPage.tsx'
];

console.log('Processing specific problematic files...');
for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    processFile(file);
  }
}

console.log('JSX syntax fixes completed!');