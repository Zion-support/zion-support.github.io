#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common JSX syntax fixes
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix missing commas in object literals before closing braces
  fixed = fixed.replace(/(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*})/g, '$1,$2');
  
  // Fix missing commas in array elements
  fixed = fixed.replace(/(\s+description:\s*'[^']+',\s*benefits:\s*\[[^\]]+\])\s*(\n\s*})/g, '$1,$2');
  
  // Fix malformed JSX fragments - ensure proper opening and closing
  fixed = fixed.replace(/<>(\s*<Helmet>[\s\S]*?<\/Helmet>\s*<Navigation\s*\/>\s*<div[^>]*>)\s*<\/div>/g, '<>$1</div>');
  
  // Fix unclosed JSX elements
  fixed = fixed.replace(/(<div[^>]*>)\s*<\/div>\s*(\s*\{\/\*[^}]*\*\/\}\s*<section[^>]*>)\s*<\/section>/g, '$1$2</section></div>');
  
  // Fix missing closing tags for common elements
  fixed = fixed.replace(/(<h1[^>]*>[^<]+)<\/h1>\s*<p>\s*([^<]+)<\/p>/g, '$1</h1><p>$2</p>');
  fixed = fixed.replace(/(<button[^>]*>[^<]+)<\/button>\s*<button[^>]*>[^<]+<\/button>/g, '$1</button><button>$2</button>');
  
  // Fix malformed JSX structure with proper nesting
  fixed = fixed.replace(/(<div[^>]*>)\s*(\s*\{\/\*[^}]*\*\/\}\s*<section[^>]*>)\s*<\/section>\s*<\/div>/g, '$1$2</section></div>');
  
  // Fix missing closing tags for sections and main elements
  fixed = fixed.replace(/(<section[^>]*>)\s*<\/section>\s*(\s*\{\/\*[^}]*\*\/\}\s*<main[^>]*>)\s*<\/main>/g, '$1$2</main></section>');
  
  // Fix React.Fragment closing tags
  fixed = fixed.replace(/(<React\.Fragment>)\s*<\/React\.Fragment>/g, '<>');
  fixed = fixed.replace(/(<\/React\.Fragment>)/g, '</>');
  
  // Fix missing semicolons in object properties
  fixed = fixed.replace(/(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*}\s*\]\s*;)/g, '$1,$2');
  
  return fixed;
}

// Fix specific file patterns
function fixSpecificFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Apply general fixes
  content = fixJSXSyntax(content);
  
  // File-specific fixes
  if (filePath.includes('ai-agricultural-intelligence-pro')) {
    // Fix the specific structure issues in this file
    content = content.replace(
      /description:\s*'Optimize your business growth with data-driven strategies\.',\s*benefits:\s*\[[^\]]+\]\s*(\n\s*})/g,
      "description: 'Optimize your business growth with data-driven strategies.',\n      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']\n    }"
    );
  }
  
  return content;
}

// Main function to process all TSX files
function main() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern, { cwd: process.cwd() });
  
  console.log(`Found ${files.length} TSX files to process`);
  
  let fixedCount = 0;
  
  files.forEach(file => {
    try {
      const originalContent = fs.readFileSync(file, 'utf8');
      const fixedContent = fixSpecificFile(file);
      
      if (originalContent !== fixedContent) {
        fs.writeFileSync(file, fixedContent, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixJSXSyntax, fixSpecificFile };