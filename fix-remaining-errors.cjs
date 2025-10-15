const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax issues
function fixSyntaxIssues(content) {
  // Fix malformed import statements
  content = content.replace(/import\s*{\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g, 'import { $1 } from "$2"');
  
  // Fix duplicate semicolons
  content = content.replace(/;;/g, ';');
  
  // Fix malformed JSX fragments
  content = content.replace(/<>\s*<\s*\/\s*>/g, '<></>');
  
  // Fix malformed closing tags
  content = content.replace(/<\s*\/\s*([^>]+)\s*>/g, '</$1>');
  
  // Fix missing semicolons in imports
  content = content.replace(/import\s+([^;]+)\s+from\s+['"]([^'"]+)['"]\s*$/gm, 'import $1 from "$2";');
  
  // Fix missing semicolons in exports
  content = content.replace(/export\s+default\s+([^;]+)\s*$/gm, 'export default $1;');
  
  // Fix malformed object literals
  content = content.replace(/\{\s*([^}]*)\s*\}/g, (match, content) => {
    if (content.trim()) {
      return `{ ${content.trim()} }`;
    }
    return '{}';
  });
  
  // Fix malformed function declarations
  content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');
  
  // Fix malformed JSX attributes
  content = content.replace(/className\s*=\s*"([^"]*)"\s*>/g, 'className="$1">');
  content = content.replace(/className\s*=\s*'([^']*)'\s*>/g, 'className="$1">');
  
  return content;
}

// Function to fix specific file patterns
function fixFilePatterns(content) {
  // Fix files that start with malformed imports
  if (content.startsWith('import {') && content.includes('import {') && content.indexOf('import {') !== content.lastIndexOf('import {')) {
    const lines = content.split('\n');
    const fixedLines = [];
    let inImport = false;
    let currentImport = '';
    
    for (const line of lines) {
      if (line.trim().startsWith('import')) {
        if (inImport) {
          fixedLines.push(currentImport.trim());
        }
        inImport = true;
        currentImport = line;
      } else if (inImport && line.trim().includes('from')) {
        currentImport += ' ' + line.trim();
        fixedLines.push(currentImport.trim());
        inImport = false;
        currentImport = '';
      } else if (inImport && line.trim()) {
        currentImport += ' ' + line.trim();
      } else {
        if (inImport) {
          fixedLines.push(currentImport.trim());
          inImport = false;
          currentImport = '';
        }
        fixedLines.push(line);
      }
    }
    
    if (inImport && currentImport.trim()) {
      fixedLines.push(currentImport.trim());
    }
    
    content = fixedLines.join('\n');
  }
  
  return content;
}

// Function to clean up corrupted files
function cleanCorruptedFiles(content) {
  // Remove lines that are just semicolons or empty
  const lines = content.split('\n');
  const cleanedLines = lines.filter(line => {
    const trimmed = line.trim();
    return trimmed !== ';' && trimmed !== '' && trimmed !== ';;';
  });
  
  return cleanedLines.join('\n');
}

// Main function to process files
function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let processedFiles = 0;
  let errorFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      try {
        const filePath = path.join(process.cwd(), file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Skip if file is empty or has no content
        if (!content.trim()) {
          return;
        }
        
        // Fix syntax issues
        content = fixSyntaxIssues(content);
        
        // Fix file patterns
        content = fixFilePatterns(content);
        
        // Clean up corrupted files
        content = cleanCorruptedFiles(content);
        
        // Write the cleaned content back
        fs.writeFileSync(filePath, content, 'utf8');
        processedFiles++;
        
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorFiles++;
      }
    });
  });
  
  console.log(`\nProcessed ${processedFiles} files`);
  if (errorFiles > 0) {
    console.log(`Errors in ${errorFiles} files`);
  }
}

// Run the script
processFiles();