<<<<<<< HEAD
const fs = require("fs");"const path = require("path");"console.log(" Final syntax fix.");const filesToFix = [" "/workspace/pages/services.tsx"," "/workspace/pages/talent.tsx"];let totalFixes = 0;filesToFix.forEach(filePath => { if (fs.existsSync(filePath)) {" let content = fs.readFileSync(filePath, "utf8"); let modified = false; / Fix all possible line break issues in className attributes content = content.replace(/className="([^"]*)\n\s*([^"]*)"/g, (match, part1, part2) => {" return `className="${part1.trim()} ${part2.trim()}"`; }); / Fix missing closing quotes" content = content.replace(/className="([^"]*)\n\s*([^"]*)"\s*>/g, (match, part1, part2) => {"` return `className="${part1.trim()} ${part2.trim()}">`; }); / Fix any remaining unterminated strings" content = content.replace(/className="([^"]*)\n\s*([^"]*)\s*>/g, (match, part1, part2) => {"` return `className="${part1.trim()} ${part2.trim()}">`; }); / Fix specific patterns that are causing issues"" content = content.replace(/>\s*<div className="([^"]*)\n\s*([^"]*)"/g, ">\n <div className="$1 $2"");"" content = content.replace(/>\s*<h2 className="([^"]*)\n\s*([^"]*)"/g, ">\n <h2 className="$1 $2""); / Fix missing closing quotes in various tags"" content = content.replace(/<h1 className="([^"]*)\n\s*([^"]*)\s*>/g, "<h1 className="$1 $2">");"" content = content.replace(/<h2 className="([^"]*)\n\s*([^"]*)\s*>/g, "<h2 className="$1 $2">");"" content = content.replace(/<p className="([^"]*)\n\s*([^"]*)\s*>/g, "<p className="$1 $2">");"" content = content.replace(/<div className="([^"]*)\n\s*([^"]*)\s*>/g, "<div className="$1 $2">"); / Fix any remaining syntax issues" content = content.replace(/\s+\n\s*>/g, ">");" content = content.replace(/>\s*</g, ">\n <"); " if (content !== fs.readFileSync(filePath, "utf8")) { fs.writeFileSync(filePath, content);"` console.log(` Fixed: ${path.relative("/workspace", filePath)}`); totalFixes++; modified = true; } }});`console.log(`\n Summary:`);`console.log(` Files processed: ${filesToFix.length}`);`console.log(` Files fixed: ${totalFixes}`);"console.log(" Final syntax fix completed!");'"`'"`
=======
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

<<<<<<< HEAD

=======
console.log('🔧 Final Syntax Fix');
console.log('==================');
>>>>>>> main

// Function to fix specific syntax errors
function fixSpecificErrors(content) {
  return content
    // Fix JSX closing tags
    .replace(/<\$1>/g, '>')
    .replace(/<\/\$1>/g, '>')
    .replace(/<\$1/g, '<')
    .replace(/<\/\$1/g, '</')
    
    // Fix object literal syntax
    .replace(/\{\s*$/gm, '{')
    .replace(/\[\s*$/gm, '[')
    .replace(/\(\s*$/gm, '(')
    
    // Fix semicolons in wrong places
    .replace(/;\s*$/gm, '')
    .replace(/;\s*}/g, '}')
    .replace(/;\s*]/g, ']')
    .replace(/;\s*\)/g, ')')
    
    // Fix array and object syntax
    .replace(/\[\s*\{\s*$/gm, '[{')
    .replace(/\{\s*\[\s*$/gm, '{[')
    .replace(/\}\s*\]\s*$/gm, '}]')
    .replace(/\]\s*\}\s*$/gm, ']}')
    
    // Fix empty objects and arrays
    .replace(/\{\s*\}/g, '{}')
    .replace(/\[\s*\]/g, '[]')
    
    // Fix trailing commas
    .replace(/,\s*}/g, '}')
    .replace(/,\s*]/g, ']')
    .replace(/,\s*\)/g, ')')
    
    // Clean up extra semicolons
    .replace(/;;+/g, ';')
    .replace(/;\s*;/g, ';')
    
    // Clean up whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/\s+$/gm, '');
}

// Files to fix
const filesToFix = [
  'pages/about.tsx',
  'pages/blog.tsx',
  'pages/ai-services.tsx',
  'pages/api.tsx',
  'pages/accessibility.tsx',
  'pages/careers.tsx',
  'components/Header.tsx',
  'components/Footer.tsx',
  'components/Layout.tsx',
  'components/layout/MainLayout.tsx'
];

let totalFixed = 0;

<<<<<<< HEAD
filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix all possible line break issues in className attributes
    content = content.replace(/className="([^"]*)\n\s*([^"]*)"/g, (match, part1, part2) => {
      return `className="${part1.trim()} ${part2.trim()}"`;
    });
    
    // Fix missing closing quotes
    content = content.replace(/className="([^"]*)\n\s*([^"]*)"\s*>/g, (match, part1, part2) => {
      return `className="${part1.trim()} ${part2.trim()}">`;
    });
    
    // Fix any remaining unterminated strings
    content = content.replace(/className="([^"]*)\n\s*([^"]*)\s*>/g, (match, part1, part2) => {
      return `className="${part1.trim()} ${part2.trim()}">`;
    });
    
    // Fix specific patterns that are causing issues
    content = content.replace(/>\s*<div className="([^"]*)\n\s*([^"]*)"/g, '>\n                  <div className="$1 $2"');
    content = content.replace(/>\s*<h2 className="([^"]*)\n\s*([^"]*)"/g, '>\n            <h2 className="$1 $2"');
    
    // Fix missing closing quotes in various tags
    content = content.replace(/<h1 className="([^"]*)\n\s*([^"]*)\s*>/g, '<h1 className="$1 $2">');
    content = content.replace(/<h2 className="([^"]*)\n\s*([^"]*)\s*>/g, '<h2 className="$1 $2">');
    content = content.replace(/<p className="([^"]*)\n\s*([^"]*)\s*>/g, '<p className="$1 $2">');
    content = content.replace(/<div className="([^"]*)\n\s*([^"]*)\s*>/g, '<div className="$1 $2">');
    
    // Fix any remaining syntax issues
    content = content.replace(/\s+\n\s*>/g, '>');
    content = content.replace(/>\s*</g, '>\n                  <');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      }`);
      totalFixes++;
      modified = true;
=======
for (const file of filesToFix) {
  try {
    if (!fs.existsSync(file)) {
      console.log(`⚠️  File not found: ${file}`);
      continue;
>>>>>>> main
    }

<<<<<<< HEAD



=======
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    content = fixSpecificErrors(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      console.log(`✅ Fixed ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${file}: ${error.message}`);
  }
}

console.log(`\n✅ Fixed ${totalFixed} files`);
console.log('🎉 Final syntax fix completed!');
>>>>>>> main
>>>>>>> main
