#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

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
    }
  }
  
  return files;
}

const appDir = '/workspace/app';
const tsxFiles = getAllTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to process`);

let fixedCount = 0;

tsxFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax errors
    
    // Fix array syntax with semicolons instead of commas
    content = content.replace(/(\s+)([^,;]+),;(\s*[^,;]+),;(\s*[^,;]+),;(\s*[^,;]+),;(\s*[^,;]+);/g, 
      '$1$2,\n$3,\n$4,\n$5,\n$6');
    
    // Fix individual semicolons in arrays
    content = content.replace(/(\s+)([^,;]+),;/g, '$1$2,');
    
    // Fix array closing with semicolon
    content = content.replace(/(\s+)\];\s*$/gm, '$1];');
    
    // Fix missing comma after last object in array
    content = content.replace(/(\s+benefits:\s*\[[^\]]+\]\s*)\n(\s+)\}\n(\s+)\]/g, '$1\n$2},\n$3]');
    
    // Fix JSX self-closing tags
    content = content.replace(/<meta>\s*<meta>/g, 
      '<meta name="description" content="AI-powered solution" />\n        <meta name="keywords" content="AI, artificial intelligence, business solutions" />');
    
    // Fix Navigation component
    content = content.replace(/<Navigation>\s*<div/g, '<Navigation />\n      <div');
    
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
    
    // Fix specific patterns for array objects
    content = content.replace(/(\s+benefits:\s*\[[^\]]+\]\s*)\n(\s+)\}\n(\s+)\]/g, '$1\n$2},\n$3]');
    
    // Fix missing commas in object arrays
    content = content.replace(/(\s+benefits:\s*\[[^\]]+\]\s*)\n(\s+)\}\n(\s+)\]/g, '$1\n$2},\n$3]');
    
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