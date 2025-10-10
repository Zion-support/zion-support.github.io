const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// Function to fix remaining JSX syntax errors
function fixRemainingErrors(content) {
  let fixed = content;

  // Fix missing semicolons after imports
  fixed = fixed.replace(/import ([^;]+)\nimport/g, 'import $1;\nimport');
  fixed = fixed.replace(/import ([^;]+)\nconst/g, 'import $1;\nconst');
  fixed = fixed.replace(/import ([^;]+)\n\s*const/g, 'import $1;\n\nconst');
  
  // Fix array syntax - missing closing brackets
  fixed = fixed.replace(/(\s+benefits: \[[^\]]+\]\s*\}\s*\}\s*\]\s*const)/g, '      benefits: [\'Growth strategies\', \'Market analysis\', \'Competitive insights\', \'ROI optimization\']\n    }\n  }];\n\nconst');
  
  // Fix specific pattern with missing closing bracket and comma
  fixed = fixed.replace(/(\s+benefits: \[[^\]]+\]\s*\}\s*\}\s*\]\s*const benefits)/g, '      benefits: [\'Growth strategies\', \'Market analysis\', \'Competitive insights\', \'ROI optimization\']\n    }\n  }];\n\nconst benefits');
  
  // Fix missing closing bracket in features array
  fixed = fixed.replace(/(\s+benefits: \[[^\]]+\]\s*\}\s*\}\s*\]\s*const)/g, '      benefits: [\'Growth strategies\', \'Market analysis\', \'Competitive insights\', \'ROI optimization\']\n    }\n  }];\n\nconst');
  
  // Fix array closing with proper syntax
  fixed = fixed.replace(/(\s+benefits: \[[^\]]+\]\s*\}\s*\}\s*\]\s*const benefits)/g, '      benefits: [\'Growth strategies\', \'Market analysis\', \'Competitive insights\', \'ROI optimization\']\n    }\n  }];\n\nconst benefits');
  
  // Fix missing semicolons in array elements
  fixed = fixed.replace(/(\s+)([^,]+),;/g, '$1$2,');
  fixed = fixed.replace(/(\s+)([^,]+);\s*$/gm, '$1$2');
  
  // Fix unclosed meta tags
  fixed = fixed.replace(/<meta>\s*<meta>/g, '<meta name="description" content="Advanced AI solutions" />\n        <meta name="keywords" content="AI, artificial intelligence, business solutions" />');
  
  // Fix Navigation component usage
  fixed = fixed.replace(/<Navigation>\s*<div/g, '<Navigation />\n      <div');
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{\s*features\.map\(\(feature, index\) => \(\s*\}\s*<div/g, '{features.map((feature, index) => (\n                <div');
  fixed = fixed.replace(/\{\s*benefits\.map\(\(benefit, index\) => \(\s*\}\s*<div/g, '{benefits.map((benefit, index) => (\n                <div');
  
  // Fix feature.icon usage
  fixed = fixed.replace(/<feature>/g, '<feature.icon className="w-8 h-8 text-white" />');
  
  // Fix CheckCircle usage
  fixed = fixed.replace(/<CheckCircle>\s*<\/CheckCircle>/g, '<CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />');
  
  // Fix Footer component
  fixed = fixed.replace(/<Footer>\s*<\/>/g, '<Footer />');
  
  // Fix function closing
  fixed = fixed.replace(/,\s*}\s*export default/g, ';\n};\n\nexport default');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
      return true;
=======
// Get all TSX files in the app directory
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
>>>>>>> 55f9bfb92d821ca12ee8dd7824e7a6cd258dc747
    }
  }
  
  return files;
}

<<<<<<< HEAD
// Get all TSX files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = getAllTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to process...`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total files.`);
=======
const appDir = '/workspace/app';
const tsxFiles = getAllTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to process`);

let fixedCount = 0;

tsxFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix extra closing braces in arrays
    content = content.replace(/(\s+benefits:\s*\[[^\]]+\]\s*)\n(\s+)\}\n(\s+)\}\n(\s+)\]/g, '$1\n$2}\n$3]');
    
    // Fix missing comma after last object in array
    content = content.replace(/(\s+benefits:\s*\[[^\]]+\]\s*)\n(\s+)\}\n(\s+)\}\n(\s+)\]/g, '$1\n$2},\n$3]');
    
    // Fix array syntax issues
    content = content.replace(/(\s+)([^,;]+),;(\s*[^,;]+),;(\s*[^,;]+),;(\s*[^,;]+),;(\s*[^,;]+);/g, 
      '$1$2,\n$3,\n$4,\n$5,\n$6');
    
    // Fix individual semicolons in arrays
    content = content.replace(/(\s+)([^,;]+),;/g, '$1$2,');
    
    // Fix array closing with semicolon
    content = content.replace(/(\s+)\];\s*$/gm, '$1];');
    
    // Fix malformed JSX elements
    content = content.replace(/<(\w+)>\s*<\/div>/g, '<$1 />');
    
    // Fix text content with semicolons
    content = content.replace(/([^>])\s*;(\s*<\/[^>]+>)/g, '$1$2');
    
    // Fix malformed feature mapping
    content = content.replace(/{\s*features\.map\(\(feature, index\) => \(\s*}\s*<div/g, 
      '{features.map((feature, index) => (\n                <div');
    
    // Fix malformed benefits mapping  
    content = content.replace(/{\s*benefits\.map\(\(benefit, index\) => \(\s*}\s*<div/g, 
      '{benefits.map((benefit, index) => (\n                <div');
    
    // Fix feature.icon usage
    content = content.replace(/<feature>\s*<\/div>/g, '<feature.icon className="w-8 h-8 text-white" />');
    
    // Fix CheckCircle usage
    content = content.replace(/<CheckCircle>\s*<\/div>/g, '<CheckCircle className="w-8 h-8 text-white" />');
    
    // Fix malformed JSX structure - sections
    content = content.replace(/<section[^>]*>\s*<\/section>/g, 
      '<section className="py-20 px-4">\n          <div className="max-w-7xl mx-auto">\n            <div className="text-center mb-16">\n              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>\n              <p className="text-xl text-gray-300">Section description</p>\n            </div>\n          </div>\n        </section>');
    
    // Fix return statement formatting
    content = content.replace(/return \(\s*<>\s*<Helmet>/g, 'return (\n    <>\n      <Helmet>');
    
    // Fix export statement
    content = content.replace(/}\s*export default/g, '};\n\nexport default');
    
    // Fix function closing
    content = content.replace(/,\s*}\s*$/g, ';\n};');
    
    // Fix specific patterns for array objects - more comprehensive
    content = content.replace(/(\s+benefits:\s*\[[^\]]+\]\s*)\n(\s+)\}\n(\s+)\}\n(\s+)\]/g, '$1\n$2},\n$3]');
    
    // Fix missing commas in object arrays
    content = content.replace(/(\s+benefits:\s*\[[^\]]+\]\s*)\n(\s+)\}\n(\s+)\}\n(\s+)\]/g, '$1\n$2},\n$3]');
    
    // Fix extra closing braces
    content = content.replace(/(\s+benefits:\s*\[[^\]]+\]\s*)\n(\s+)\}\n(\s+)\}\n(\s+)\]/g, '$1\n$2}\n$3]');
    
    // Fix missing semicolon after array declaration
    content = content.replace(/(\s+)\]\n(\s+const\s+\w+\s*=\s*\[)/g, '$1];\n$2');
    
    // Fix missing semicolon after const declaration
    content = content.replace(/(\s+const\s+\w+\s*=\s*\[[^\]]+\]\s*)\n(\s+const\s+\w+\s*=\s*\[)/g, '$1;\n$2');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      fixedCount++;
      console.log(`Fixed: ${path.relative('/workspace', filePath)}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);
>>>>>>> 55f9bfb92d821ca12ee8dd7824e7a6cd258dc747
