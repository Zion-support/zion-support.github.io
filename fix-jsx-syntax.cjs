const fs = require('fs');
const path = require('path');

// Function to fix common JSX syntax errors
function fixJsxSyntax(content) {
  let fixed = content;

  // Fix array syntax issues
  // Fix missing closing brackets in features array
  fixed = fixed.replace(/(\s+}\s*}\s*]\s*const benefits)/g, '  }\n  }];\n\nconst benefits');
  
  // Fix semicolons in array elements
  fixed = fixed.replace(/(\s+)([^,]+),;/g, '$1$2,');
  fixed = fixed.replace(/(\s+)([^,]+);\s*$/gm, '$1$2');
  
  // Fix unclosed meta tags
  fixed = fixed.replace(/<meta>\s*<meta>/g, '<meta name="description" content="Advanced AI solutions" />\n        <meta name="keywords" content="AI, artificial intelligence, business solutions" />');
  
  // Fix Navigation component usage
  fixed = fixed.replace(/<Navigation>\s*<div/g, '<Navigation />\n      <div');
  
  // Fix unclosed section tags
  fixed = fixed.replace(/<section([^>]*)>\s*<div/g, '<section$1>\n          <div');
  
  // Fix malformed JSX structure - fix missing opening tags
  fixed = fixed.replace(/(\s+)<h1>\s*([^<]+);\s*<\/h1>/g, '$1<h1 className="text-5xl md:text-7xl font-bold text-white mb-6">$2</h1>');
  fixed = fixed.replace(/(\s+)<p>\s*([^<]+);\s*<\/p>/g, '$1<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">$2</p>');
  fixed = fixed.replace(/(\s+)<h2>\s*([^<]+);\s*<\/h2>/g, '$1<h2 className="text-4xl font-bold text-white mb-4">$2</h2>');
  fixed = fixed.replace(/(\s+)<p>\s*([^<]+);\s*<\/p>/g, '$1<p className="text-xl text-gray-300">$2</p>');
  
  // Fix button elements
  fixed = fixed.replace(/<button>\s*([^<]+)\s*<\/button>/g, '<button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">$1</button>');
  
  // Fix missing closing tags in divs
  fixed = fixed.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{\s*features\.map\(\(feature, index\) => \(\s*\}\s*<div/g, '{features.map((feature, index) => (\n                <div');
  fixed = fixed.replace(/\{\s*benefits\.map\(\(benefit, index\) => \(\s*\}\s*<div/g, '{benefits.map((benefit, index) => (\n                <div');
  
  // Fix feature.icon usage
  fixed = fixed.replace(/<feature>/g, '<feature.icon className="w-8 h-8 text-white" />');
  
  // Fix CheckCircle usage
  fixed = fixed.replace(/<CheckCircle>\s*<\/CheckCircle>/g, '<CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />');
  
  // Fix Footer component
  fixed = fixed.replace(/<Footer>\s*<\/>/g, '<Footer />');
  
  // Fix return statement syntax
  fixed = fixed.replace(/return \(\s*<>\s*<Helmet>/g, 'return (\n    <>\n      <Helmet>');
  
  // Fix function closing
  fixed = fixed.replace(/,\s*}\s*export default/g, ';\n};\n\nexport default');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJsxSyntax(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

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