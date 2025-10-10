#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix JSX syntax issues
function fixJSXSyntax(content) {
  // Fix broken JSX fragments and tags
  
  // Fix broken div tags with comments
  content = content.replace(/<div[^>]*>\{\/\*[^}]*\*\/\}<\/div>/g, (match) => {
    const divMatch = match.match(/<div([^>]*)>/);
    if (divMatch) {
      return `<div${divMatch[1]}>`;
    }
    return match;
  });
  
  // Fix broken h1 tags with commas
  content = content.replace(/<h1[^>]*>,\s*<\/h1>/g, '<h1>');
  
  // Fix broken p tags with commas
  content = content.replace(/<p[^>]*>,\s*<\/p>/g, '<p>');
  
  // Fix broken div tags with commas
  content = content.replace(/<div[^>]*>,\s*<\/div>/g, '<div>');
  
  // Fix broken section tags with commas
  content = content.replace(/<section[^>]*>,\s*<\/section>/g, '<section>');
  
  // Fix broken JSX expressions with commas
  content = content.replace(/\{\s*,\s*\}/g, '{}');
  content = content.replace(/\{\s*,\s*$/gm, '{');
  
  // Fix broken className attributes
  content = content.replace(/className="[^"]*,\s*"/g, (match) => {
    return match.replace(/,\s*"/, '"');
  });
  
  // Fix broken text content with commas
  content = content.replace(/>,\s*</g, '><');
  
  // Fix broken closing tags
  content = content.replace(/<\/h1>\s*,\s*<\/h1>/g, '</h1>');
  content = content.replace(/<\/p>\s*,\s*<\/p>/g, '</p>');
  content = content.replace(/<\/div>\s*,\s*<\/div>/g, '</div>');
  content = content.replace(/<\/section>\s*,\s*<\/section>/g, '</section>');
  
  // Fix broken JSX fragments
  content = content.replace(/<>,\s*<\/>/g, '<></>');
  
  // Fix broken return statements
  content = content.replace(/return\s*\(\s*,\s*\)/g, 'return (');
  
  return content;
}

// Function to fix specific file issues
function fixSpecificFiles(content, filePath) {
  // Fix 5g-implementation page specific issues
  if (filePath.includes('5g-implementation')) {
    // Fix the broken hero section
    content = content.replace(
      /<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\{\/\* Hero Section \*\/\}<\/div>\s*<section/g,
      '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <section'
    );
    
    // Fix broken h1 tag
    content = content.replace(
      /<h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,\s*<\/h1>\s*5G Network/g,
      '<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n        5G Network'
    );
    
    // Fix broken p tag
    content = content.replace(
      /<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">[^<]*<\/p>\s*<\/p>/g,
      '<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems.</p>'
    );
    
    // Fix broken div tag
    content = content.replace(
      /<div className="flex flex-col sm: flex-row gap-4 justify-center">,\s*<\/div>/g,
      '<div className="flex flex-col sm:flex-row gap-4 justify-center">'
    );
  }
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixJSXSyntax(content);
    content = fixSpecificFiles(content, filePath);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process files
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];

  let totalFiles = 0;
  let fixedFiles = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: ['node_modules/**', 'dist/**', '.next/**', 'build/**'] 
    });
    
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }

  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

main().catch(console.error);