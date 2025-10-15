const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix HTML entities
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&apos;/g, "'");
    content = content.replace(/&lt;/g, '<');
    content = content.replace(/&gt;/g, '>');
    content = content.replace(/&amp;/g, '&');

    // Fix specific syntax issues
    content = content.replace(/import React from "react";\s*import { Helmet } from "react-helmet-async";\s*const/g, 'import React from "react";\nimport { Helmet } from "react-helmet-async";\n\nconst');
    
    // Fix missing newlines and formatting
    content = content.replace(/;\s*const/g, ';\n\nconst');
    content = content.replace(/;\s*return/g, ';\n  return');
    content = content.replace(/return\s*\(\s*<>/g, 'return (\n    <>');
    content = content.replace(/<\/>\s*\);\s*};/g, '</>\n  );\n};');
    
    // Fix JSX formatting
    content = content.replace(/<div className="([^"]*)"[^>]*>/g, (match, className) => {
      return `\n        <div className="${className}">`;
    });
    
    content = content.replace(/<h1 className="([^"]*)"[^>]*>/g, (match, className) => {
      return `\n          <h1 className="${className}">`;
    });
    
    content = content.replace(/<p className="([^"]*)"[^>]*>/g, (match, className) => {
      return `\n          <p className="${className}">`;
    });
    
    content = content.replace(/<a href="([^"]*)"[^>]*>/g, (match, href) => {
      return `\n          <a href="${href}" className="text-purple-400 hover:text-purple-300">`;
    });

    // Fix missing export
    if (content.includes('const') && !content.includes('export default')) {
      content = content.replace(/};\s*$/, '};\n\nexport default NotFoundPage;');
    }

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      modified = true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all TypeScript and TSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to process...`);

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  fixSyntaxErrors(fullPath);
});

console.log('Syntax errors cleanup completed!');