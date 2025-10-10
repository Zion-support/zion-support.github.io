const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// Function to fix malformed closing tags
function fixMalformedTags(content) {
  // Fix patterns like "Text;\n  </" to "Text\n  </Tag>"
  content = content.replace(/([^>])\s*;\s*\n\s*<\//g, '$1\n  </');
  
  // Fix patterns like "Text;\n  </" to "Text\n  </Tag>" for specific tags
  content = content.replace(/([^>])\s*;\s*\n\s*<\/([a-zA-Z]+)>/g, '$1\n  </$2>');
  
  // Fix patterns where there are stray closing tags at the end
  content = content.replace(/\n\s*<\/[a-zA-Z]+>\s*$/gm, '');
  
  // Fix patterns where there are multiple closing tags at the end
  content = content.replace(/\n\s*<\/[a-zA-Z]+>\s*<\/[a-zA-Z]+>\s*$/gm, '');
  
  return content;
}

// Files to fix
const filesToFix = [
  'app/page.tsx',
  'app/components/Navigation.tsx',
  'app/components/Footer.tsx'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    console.log(`Fixing ${filePath}...`);
    let content = fs.readFileSync(fullPath, 'utf8');
    const originalContent = content;
    
    content = fixMalformedTags(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed ${filePath}`);
    } else {
      console.log(`No changes needed for ${filePath}`);
    }
  } else {
    console.log(`File not found: ${filePath}`);
=======
// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix missing closing tags
  content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
  content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1></section>');
  content = content.replace(/<main([^>]*)>\s*$/gm, '<main$1></main>');
  content = content.replace(/<article([^>]*)>\s*$/gm, '<article$1></article>');
  content = content.replace(/<header([^>]*)>\s*$/gm, '<header$1></header>');
  content = content.replace(/<footer([^>]*)>\s*$/gm, '<footer$1></footer>');
  
  // Fix JSX fragments
  content = content.replace(/<>\s*$/gm, '<></>');
  content = content.replace(/<>([^<]*)$/gm, '<>{$1}</>');
  
  // Fix missing semicolons in JSX
  content = content.replace(/([^;}])\s*$/gm, '$1;');
  
  // Fix common JSX syntax issues
  content = content.replace(/className\s*=\s*"([^"]*)"\s*$/gm, 'className="$1"');
  content = content.replace(/onClick\s*=\s*{([^}]*)}\s*$/gm, 'onClick={$1}');
  
  // Fix missing closing braces
  content = content.replace(/\{\s*$/gm, '{}');
  
  // Fix malformed JSX expressions
  content = content.replace(/\{\s*([^}]*)\s*$/gm, '{$1}');
  
  // Fix missing return statements
  content = content.replace(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{([^}]*)\s*$/gm, 'const $1 = ($2) => {\n  return (\n    $3\n  );\n};');
  
  return content;
}

// Function to fix specific file patterns
function fixSpecificFile(filePath, content) {
  // Fix common patterns in AI pages
  if (filePath.includes('/ai-')) {
    // Ensure proper component structure
    if (!content.includes('export default')) {
      content = content.replace(/(const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*\{[\s\S]*?)(\s*\});?$/m, '$1\n};\n\nexport default $1;');
    }
    
    // Fix missing React import
    if (!content.includes("import React")) {
      content = "'use client';\nimport React from 'react';\n" + content;
    }
  }
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    let fixedContent = fixSyntaxErrors(content);
    fixedContent = fixSpecificFile(filePath, fixedContent);
    
    // Only write if content changed
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✓ Fixed syntax errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to find all TypeScript/TSX files with syntax errors
function findFilesWithErrors(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
>>>>>>> origin/main
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔍 Searching for files with syntax errors...');
const filesToProcess = findFilesWithErrors('./app');

console.log(`Found ${filesToProcess.length} files to process`);

filesToProcess.forEach(file => {
  processFile(file);
});

<<<<<<< HEAD
console.log('Syntax error fixing completed!');
=======
console.log('✅ Syntax error fixing complete!');
>>>>>>> origin/main
