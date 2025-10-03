#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common JSX syntax errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals by adding closing quotes
  fixed = fixed.replace(/^(\s*<[^>]*"[^"]*$)/gm, (match) => {
    if (!match.includes('"')) {
      return match + '"';
    }
    return match;
  });
  
  // Fix unterminated string literals in JSX attributes
  fixed = fixed.replace(/(\w+="[^"]*$)/gm, '$1"');
  
  // Fix malformed JSX expressions without parent elements
  // Look for patterns like: <div>...</div><div>...</div> without a parent
  const lines = fixed.split('\n');
  let inJSX = false;
  let jsxDepth = 0;
  let fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Check for JSX opening tags
    const openTags = line.match(/<[^/][^>]*>/g) || [];
    const closeTags = line.match(/<\/[^>]*>/g) || [];
    const selfClosingTags = line.match(/<[^>]*\/>/g) || [];
    
    // Count JSX depth
    jsxDepth += openTags.length;
    jsxDepth -= closeTags.length;
    jsxDepth -= selfClosingTags.length;
    
    // Fix common JSX syntax issues
    line = line.replace(/<([^>]*)\s*$/gm, '<$1>'); // Fix incomplete opening tags
    line = line.replace(/^(\s*)([^<>\s][^<>]*)$/gm, '$1{$2}'); // Wrap non-JSX content in braces if needed
    
    fixedLines.push(line);
  }
  
  return fixedLines.join('\n');
}

// Function to fix specific file patterns
function fixSpecificFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix common patterns in these files
  content = content.replace(/<div className="text-left"><\/div>\s*<div className="text-left"><\/div>/g, '<div className="text-left">');
  content = content.replace(/<div className="text-left"><\/div>\s*<span/g, '<span');
  content = content.replace(/<div className="text-left"><\/div>\s*<h[1-6]/g, '<h$1');
  content = content.replace(/<div className="text-left"><\/div>\s*<p/g, '<p');
  
  // Fix unterminated strings
  content = content.replace(/^(\s*<[^>]*"[^"]*$)/gm, '$1"');
  
  // Fix missing closing tags by adding them at the end of the component
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
      const lastOpenTag = openTags[openTags.length - 1];
      const tagName = lastOpenTag.match(/<(\w+)/)?.[1];
      
      if (tagName) {
        content = content.replace(/\);\s*\}/, `\n    </${tagName}>\n  );\n}`);
      }
    }
  }
  
  return content;
}

// Main function to process all blog files
async function main() {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const files = await glob('**/*.tsx', { cwd: blogDir });
  
  console.log(`Found ${files.length} blog files to process...`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(blogDir, file);
    try {
      const originalContent = fs.readFileSync(filePath, 'utf8');
      const fixedContent = fixSpecificFile(filePath);
      
      if (originalContent !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`Fixed ${fixedCount} files.`);
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixJSXErrors, fixSpecificFile };