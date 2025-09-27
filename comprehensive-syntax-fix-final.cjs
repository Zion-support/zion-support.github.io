#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix syntax issues
function fixSyntaxIssues(content, filePath) {
  // Fix duplicate closing parentheses
  content = content.replace(/}, \[\]\);\)/g, '}, []);');
  content = content.replace(/\[\]\);\)/g, '[]);');
  
  // Fix missing commas in object properties
  content = content.replace(/(\w+):\s*'([^']*)'(\s*)(\w+):/g, '$1: \'$2\',$3$4:');
  content = content.replace(/(\w+):\s*"([^"]*)"(\s*)(\w+):/g, '$1: "$2",$3$4:');
  
  // Fix malformed useState declarations
  content = content.replace(/const \[([^,]+)\s+([^\]]+)\] = useState/g, 'const [$1, $2] = useState');
  
  // Fix malformed function calls
  content = content.replace(/trackClick\(`([^`]+)`\s+'([^']+)'\)/g, 'trackClick(`$1`, \'$2\')');
  
  // Fix corrupted text with spaces
  content = content.replace(/(\w)\s+(\w)/g, (match, p1, p2) => {
    // Only fix if it looks like corrupted text (letters separated by spaces)
    if (p1.match(/[a-zA-Z]/) && p2.match(/[a-zA-Z]/) && match.length > 3) {
      return p1 + p2;
    }
    return match;
  });
  
  // Fix malformed JSX attributes
  content = content.replace(/ti\s+t\s+l\s+e=/g, 'title=');
  content = content.replace(/descri\s+pti\s+o\s+n=/g, 'description=');
  content = content.replace(/keywo\s+r\s+d\s+s=/g, 'keywords=');
  
  // Fix corrupted strings
  content = content.replace(/'\s*([^']*)\s*'/g, (match, str) => {
    const cleaned = str.replace(/\s+/g, '');
    return `'${cleaned}'`;
  });
  
  // Fix array syntax issues
  content = content.replace(/\[\s*'([^']*)'\s*,\s*'([^']*)'\s*\]/g, '[\'$1\', \'$2\']');
  
  // Fix object syntax issues
  content = content.replace(/{\s*id:\s*(\d+)\s*title:/g, '{\n\t\t\tid: $1,\n\t\t\ttitle:');
  content = content.replace(/exce\s+r\s+p\s+t:/g, 'excerpt:');
  content = content.replace(/d\s+a\s+t\s+e:/g, 'date:');
  
  // Fix useEffect syntax
  content = content.replace(/setIsVisible\(true\)}\s*\[\]\)/g, 'setIsVisible(true);\n\t}, [])');
  
  // Fix missing commas in arrays
  content = content.replace(/}\s*{/g, '},\n\t\t{');
  
  // File-specific fixes
  if (filePath.includes('about.tsx')) {
    content = content.replace(/}, \[\]\);\)/g, '}, []);');
  }
  
  if (filePath.includes('analytics.tsx')) {
    content = content.replace(/ti\s+t\s+l\s+e=/g, 'title=');
    content = content.replace(/descri\s+pti\s+o\s+n=/g, 'description=');
    content = content.replace(/keywo\s+r\s+d\s+s=/g, 'keywords=');
  }
  
  if (filePath.includes('contact.tsx')) {
    content = content.replace(/const \[isVisible setIsVisible\]/g, 'const [isVisible, setIsVisible]');
    content = content.replace(/setIsVisible\(true\)}\s*\[\]\)/g, 'setIsVisible(true);\n\t}, [])');
  }
  
  if (filePath.includes('dashboard.tsx')) {
    content = content.replace(/trackClick\(`([^`]+)`\s+'([^']+)'\)/g, 'trackClick(`$1`, \'$2\')');
  }
  
  return content;
}

// Function to fix a specific file
function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixSyntaxIssues(content, filePath);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax issues in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// List of files to fix
const filesToFix = [
  'pages/about.tsx',
  'pages/analytics.tsx',
  'pages/blog.tsx',
  'pages/contact.tsx',
  'pages/dashboard.tsx'
];

// Fix each file
console.log('Starting comprehensive syntax fixes...');
filesToFix.forEach(file => {
  fixFile(file);
});

console.log('Comprehensive syntax fixes completed!');