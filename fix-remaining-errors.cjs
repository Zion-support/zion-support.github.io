const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix import statements with missing semicolons
function fixImportSemicolons(content) {
  // Fix patterns like: import {A, B, C from 'module'
  content = content.replace(/import\s*\{\s*([^}]+?)\s*\}\s*from\s*['"]([^'"]+)['"]\s*(?=\n|$)/g, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });

  return content;
}

// Function to fix malformed object structures
function fixObjectStructures(content) {
  // Fix patterns like: { icon: BarChart, (missing opening brace for new object)
  content = content.replace(/\}\s*,\s*icon:\s*(\w+),/g, '},\n    {\n      icon: $1,');
  
  // Fix patterns like: { // TODO: Add content } icon: BarChart,
  content = content.replace(/\{\s*\/\/ TODO: Add content\s*\}\s*icon:\s*(\w+),/g, '{\n    icon: $1,');
  
  // Fix patterns like: { icon: BarChart, (missing proper object structure)
  content = content.replace(/\{\s*icon:\s*(\w+),/g, '{\n    icon: $1,');

  return content;
}

// Function to fix malformed JSX
function fixJSX(content) {
  // Fix patterns like: {features.map((feature, index) => () (missing arrow function body)
  content = content.replace(/\.map\(\([^)]+\)\s*=>\s*\(\)\s*$/gm, '.map((feature, index) => (');
  
  // Fix patterns like: {feature.benefits.map((benefit, benefitIndex) => () (missing arrow function body)
  content = content.replace(/\.map\(\([^)]+\)\s*=>\s*\(\)\s*$/gm, '.map((benefit, benefitIndex) => (');
  
  // Fix patterns like: <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"> (missing closing tag)
  content = content.replace(/<div\s+key=\{index\}\s+className="[^"]*">\s*$/gm, '<div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">');
  
  // Fix patterns like: <li key={benefitIndex} className="flex items-center text-xs text-gray-300"> (missing closing tag)
  content = content.replace(/<li\s+key=\{benefitIndex\}\s+className="[^"]*">\s*$/gm, '<li key={benefitIndex} className="flex items-center text-xs text-gray-300">');

  return content;
}

// Function to fix specific syntax patterns
function fixSpecificPatterns(content) {
  // Fix patterns like: const features = [ { icon: BarChart, (missing proper array structure)
  content = content.replace(/const\s+(\w+)\s*=\s*\[\s*\{\s*icon:\s*(\w+),/g, 'const $1 = [\n    {\n      icon: $2,');
  
  // Fix patterns like: const AICRMPage: React.FC = () => { const AiCrmPage: React.FC = () => {
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*const\s+\1:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const $1: React.FC = () => {');
  
  // Fix patterns with missing closing braces
  content = content.replace(/\}\s*\}\s*const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\}/g, '}');

  return content;
}

// Function to fix malformed function declarations
function fixFunctionDeclarations(content) {
  // Fix patterns like: const AICRMPage: React.FC = () => { const AiCrmPage: React.FC = () => {
  content = content.replace(/(const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\})\s*(const\s+\2:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\})/g, (match, firstFunc, name) => {
    // Keep only the first function declaration
    return firstFunc;
  });

  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    const originalContent = content;

    // Apply fixes in order
    content = fixImportSemicolons(content);
    content = fixObjectStructures(content);
    content = fixJSX(content);
    content = fixSpecificPatterns(content);
    content = fixFunctionDeclarations(content);

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { 
  cwd: process.cwd(),
  ignore: ['node_modules/**', 'dist/**', 'build/**']
});

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);