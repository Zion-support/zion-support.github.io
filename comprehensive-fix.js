#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix comprehensive JSX issues
function fixComprehensiveIssues(content) {
  let fixed = content;
  
  // Fix malformed JSX patterns
  fixed = fixed.replace(/<h\$1/g, '<h3');
  fixed = fixed.replace(/<h\$2/g, '<h4');
  fixed = fixed.replace(/<h\$3/g, '<h5');
  
  // Fix unterminated string literals in href attributes
  fixed = fixed.replace(/href="([^"]*)$/gm, 'href="$1"');
  
  // Fix malformed JSX structure patterns
  fixed = fixed.replace(/<div className="text-left"><\/div>\s*<div className="text-left">/g, '<div className="text-left">');
  fixed = fixed.replace(/<div className="text-left"><\/div>\s*<span/g, '<span');
  fixed = fixed.replace(/<div className="text-left"><\/div>\s*<h[1-6]/g, '<h$1');
  fixed = fixed.replace(/<div className="text-left"><\/div>\s*<p/g, '<p');
  
  // Fix JSX expressions without parent elements
  fixed = fixed.replace(/return \(\s*<div[^>]*><\/div>\s*<div/g, 'return (\n    <div className="text-left">\n      <div');
  
  // Fix missing closing tags by adding them at the end of components
  const componentMatch = content.match(/export default function \w+\(\) \{\s*return \(\s*(.*?)\s*\);\s*\}/s);
  if (componentMatch) {
    const jsxContent = componentMatch[1];
    const openTags = jsxContent.match(/<[^/][^>]*>/g) || [];
    const closeTags = jsxContent.match(/<\/[^>]*>/g) || [];
    const selfClosingTags = jsxContent.match(/<[^>]*\/>/g) || [];
    
    const openCount = openTags.length;
    const closeCount = closeTags.length;
    const selfClosingCount = selfClosingTags.length;
    
    if (openCount > closeCount + selfClosingCount) {
      // Add missing closing tags
      const missingTags = openCount - closeCount - selfClosingCount;
      for (let i = 0; i < missingTags; i++) {
        const lastOpenTag = openTags[openTags.length - 1 - i];
        const tagName = lastOpenTag.match(/<(\w+)/)?.[1];
        
        if (tagName) {
          fixed = fixed.replace(/\);\s*\}/, `\n    </${tagName}>\n  );\n}`);
        }
      }
    }
  }
  
  return fixed;
}

// Main function to process all blog files
async function main() {
  const appBlogDir = path.join(process.cwd(), 'app', 'blog');
  const srcBlogDir = path.join(process.cwd(), 'src', 'pages', 'blog');
  
  const appFiles = await glob('**/*.tsx', { cwd: appBlogDir });
  const srcFiles = await glob('**/*.tsx', { cwd: srcBlogDir });
  
  console.log(`Found ${appFiles.length} app blog files and ${srcFiles.length} src blog files to process...`);
  
  let fixedCount = 0;
  
  // Process app/blog files
  for (const file of appFiles) {
    const filePath = path.join(appBlogDir, file);
    try {
      const originalContent = fs.readFileSync(filePath, 'utf8');
      const fixedContent = fixComprehensiveIssues(originalContent);
      
      if (originalContent !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`Fixed app: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing app ${file}:`, error.message);
    }
  }
  
  // Process src/pages/blog files
  for (const file of srcFiles) {
    const filePath = path.join(srcBlogDir, file);
    try {
      const originalContent = fs.readFileSync(filePath, 'utf8');
      const fixedContent = fixComprehensiveIssues(originalContent);
      
      if (originalContent !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`Fixed src: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing src ${file}:`, error.message);
    }
  }
  
  console.log(`Fixed ${fixedCount} files total.`);
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixComprehensiveIssues };