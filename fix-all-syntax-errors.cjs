#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix missing commas in object properties
  content = content.replace(/(\w+)\s+(\w+):/g, '$1,\n      $2:');
  
  // Fix missing commas in arrays
  content = content.replace(/(\w+)\s+(\w+)\s*=/g, '$1,\n      $2 =');
  
  // Fix missing commas in function parameters
  content = content.replace(/(\w+)\s+(\w+)\s*\)/g, '$1,\n      $2)');
  
  // Fix useState declarations
  content = content.replace(/useState\((\w+)\s+(\w+)\)/g, 'useState([$1, $2])');
  
  // Fix useEffect dependencies
  content = content.replace(/}\s*\[/g, '},\n  [');
  
  // Fix function calls with missing commas
  content = content.replace(/\(([^)]+)\s+([^)]+)\)/g, '($1, $2)');
  
  // Fix JSX attributes
  content = content.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"');
  
  // Fix string concatenation
  content = content.replace(/'([^']*)\s+([^']*)'/g, "'$1 $2'");
  
  return content;
}

// Function to fix specific file patterns
function fixSpecificFiles() {
  const filesToFix = [
    'pages/dashboard.tsx',
    'pages/enhanced-home.tsx', 
    'pages/faq.tsx',
    'pages/index.tsx',
    'pages/portfolio.tsx',
    'pages/privacy-policy.tsx',
    'pages/services.tsx'
  ];
  
  filesToFix.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      console.log(`Fixing ${filePath}...`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix common patterns
      content = content.replace(/(\w+)\s+(\w+)\s*:/g, '$1,\n      $2:');
      content = content.replace(/(\w+)\s+(\w+)\s*=/g, '$1,\n      $2 =');
      content = content.replace(/(\w+)\s+(\w+)\s*\)/g, '$1,\n      $2)');
      content = content.replace(/useState\((\w+)\s+(\w+)\)/g, 'useState([$1, $2])');
      content = content.replace(/}\s*\[/g, '},\n  [');
      content = content.replace(/\(([^)]+)\s+([^)]+)\)/g, '($1, $2)');
      
      // Fix specific syntax errors
      content = content.replace(/title:\s*'([^']*)\s+([^']*)'/g, "title: '$1 $2'");
      content = content.replace(/description:\s*'([^']*)\s+([^']*)'/g, "description: '$1 $2'");
      content = content.replace(/question:\s*'([^']*)\s+([^']*)'/g, "question: '$1 $2'");
      content = content.replace(/answer:\s*'([^']*)\s+([^']*)'/g, "answer: '$1 $2'");
      
      // Fix array syntax
      content = content.replace(/\[\s*'([^']*)\s+([^']*)'/g, "['$1 $2'");
      
      // Fix JSX syntax
      content = content.replace(/<div\s+className="([^"]*)\s+([^"]*)"/g, '<div className="$1 $2"');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${filePath}`);
    }
  });
}

// Run the fixes
console.log('Starting syntax error fixes...');
fixSpecificFiles();
console.log('Syntax error fixes completed!');