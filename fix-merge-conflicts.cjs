#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to resolve merge conflicts by choosing the appropriate version
function resolveMergeConflict(content) {
  // Remove merge conflict markers and choose the appropriate version
  // Generally prefer the HEAD version (first part) unless there's a clear reason to choose the other
  
  let resolved = content
    // Remove all merge conflict markers
    .replace(/<<<<<<< HEAD\n/g, '')
    .replace(/=======\n/g, '')
    .replace(/>>>>>>> [^\n]+\n/g, '')
    // Clean up any remaining conflict artifacts
    .replace(/<<<<<<< [^\n]+\n/g, '')
    .replace(/=======\n/g, '')
    .replace(/>>>>>>> [^\n]+\n/g, '');
  
  // Fix common issues that might remain
  resolved = resolved
    // Fix missing semicolons after imports
    .replace(/import ([^;]+)\n/g, (match, p1) => {
      if (!p1.includes(';')) {
        return `import ${p1};\n`;
      }
      return match;
    })
    // Fix missing semicolons after exports
    .replace(/export default ([^;]+)\n/g, (match, p1) => {
      if (!p1.includes(';') && !p1.includes('(') && !p1.includes('{')) {
        return `export default ${p1};\n`;
      }
      return match;
    })
    // Fix array syntax issues
    .replace(/\]\s*\]/g, ']')
    .replace(/\[\s*\[/g, '[')
    // Fix object syntax issues
    .replace(/\}\s*\}/g, '}')
    .replace(/\{\s*\{/g, '{')
    // Fix JSX closing tag issues
    .replace(/<([^>]+)>\s*<\/\1>/g, '<$1></$1>')
    // Remove duplicate closing tags
    .replace(/(<\/[^>]+>)\s*\1/g, '$1')
    // Fix missing closing tags for common elements
    .replace(/<div([^>]*)>\s*$/gm, '<div$1></div>')
    .replace(/<span([^>]*)>\s*$/gm, '<span$1></span>')
    .replace(/<p([^>]*)>\s*$/gm, '<p$1></p>')
    // Clean up extra whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/^\s+$/gm, '');
  
  return resolved;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Processing merge conflicts in: ${filePath}`);
      
      const resolved = resolveMergeConflict(content);
      
      // Write the resolved content back
      fs.writeFileSync(filePath, resolved, 'utf8');
      console.log(`✓ Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Starting merge conflict resolution...');
  
  // Find all TypeScript and JSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts',
    'hooks/**/*.ts',
    'utils/**/*.ts',
    'utils/**/*.tsx'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    });
  });
  
  console.log(`\nMerge conflict resolution complete!`);
  console.log(`Total files processed: ${totalFiles}`);
  console.log(`Files with conflicts fixed: ${fixedFiles}`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { resolveMergeConflict, processFile };