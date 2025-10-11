#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix common JSX syntax issues
function fixJSXIssues(content) {
  // Fix malformed closing tags
  content = content.replace(/<\/div><\/div>/g, '</div>');
  content = content.replace(/<\/section><\/section>/g, '</section>');
  content = content.replace(/<\/h1><\/h1>/g, '</h1>');
  content = content.replace(/<\/h2><\/h2>/g, '</h2>');
  content = content.replace(/<\/h3><\/h3>/g, '</h3>');
  content = content.replace(/<\/p><\/p>/g, '</p>');
  content = content.replace(/<\/span><\/span>/g, '</span>');
  content = content.replace(/<\/main><\/main>/g, '</main>');
  
  // Fix empty tags with content
  content = content.replace(/<div[^>]*><\/div>/g, (match) => {
    const className = match.match(/class="[^"]*"/);
    return className ? `<div ${className[0]}></div>` : '<div></div>';
  });
  
  content = content.replace(/<section[^>]*><\/section>/g, (match) => {
    const className = match.match(/class="[^"]*"/);
    return className ? `<section ${className[0]}></section>` : '<section></section>';
  });
  
  content = content.replace(/<h1[^>]*><\/h1>/g, (match) => {
    const className = match.match(/class="[^"]*"/);
    return className ? `<h1 ${className[0]}></h1>` : '<h1></h1>';
  });
  
  content = content.replace(/<h2[^>]*><\/h2>/g, (match) => {
    const className = match.match(/class="[^"]*"/);
    return className ? `<h2 ${className[0]}></h2>` : '<h2></h2>';
  });
  
  content = content.replace(/<h3[^>]*><\/h3>/g, (match) => {
    const className = match.match(/class="[^"]*"/);
    return className ? `<h3 ${className[0]}></h3>` : '<h3></h3>';
  });
  
  content = content.replace(/<p[^>]*><\/p>/g, (match) => {
    const className = match.match(/class="[^"]*"/);
    return className ? `<p ${className[0]}></p>` : '<p></p>';
  });
  
  content = content.replace(/<span[^>]*><\/span>/g, (match) => {
    const className = match.match(/class="[^"]*"/);
    return className ? `<span ${className[0]}></span>` : '<span></span>';
  });
  
  content = content.replace(/<main[^>]*><\/main>/g, (match) => {
    const className = match.match(/class="[^"]*"/);
    return className ? `<main ${className[0]}></main>` : '<main></main>';
  });
  
  // Fix JSX structure issues
  content = content.replace(/<main[^>]*><\/section>/g, (match) => {
    const className = match.match(/class="[^"]*"/);
    return className ? `<main ${className[0]}></main>` : '<main></main>';
  });
  
  // Fix unterminated regular expressions in className
  content = content.replace(/className="[^"]*\[[^"]*$/gm, (match) => {
    // This is a complex fix for malformed className attributes
    return match + '"';
  });
  
  return content;
}

// Function to find all TSX files
function findTSXFiles() {
  try {
    const result = execSync('find app -name "*.tsx" -type f', { 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    return result.trim().split('\n').filter(line => line.length > 0);
  } catch (error) {
    console.error('Error finding TSX files:', error.message);
    return [];
  }
}

// Function to fix all JSX files
function fixAllJSXFiles() {
  const files = findTSXFiles();
  console.log(`Found ${files.length} TSX files to check`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const filePath of files) {
    try {
      console.log(`Checking: ${filePath}`);
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      content = fixJSXIssues(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        fixedCount++;
        console.log(`  ✓ Fixed JSX issues`);
      } else {
        console.log(`  - No issues found`);
      }
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
  console.log(`Errors: ${errorCount} files`);
}

// Run the fix
fixAllJSXFiles();