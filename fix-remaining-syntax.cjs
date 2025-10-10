#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// Function to fix specific syntax patterns that are safe to fix
function fixSafeSyntaxPatterns(content) {
  let fixed = content;
  
  // Fix array declarations that got corrupted
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*"\[\]"/g, 'const $1 = []');
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*"\{\}"/g, 'const $1 = {}');
  
  // Fix object property assignments
  fixed = fixed.replace(/(\w+)\s*=\s*"([^"]*?)"/g, (match, prop, value) => {
    // Only fix if it looks like a string assignment
    if (value.includes('http') || value.includes('/') || value.includes(' ')) {
      return `${prop} = "${value}"`;
=======
// Function to fix remaining syntax issues
function fixRemainingSyntax(content) {
  // Remove stray semicolons and quotes
  content = content.replace(/^';$/gm, '');
  content = content.replace(/^;$/gm, '');
  
  // Fix unterminated string literals
  content = content.replace(/['"]([^'"]*);$/gm, (match, p1) => {
    if (match.includes('import') || match.includes('from')) {
      return match.replace(/;$/, "';");
>>>>>>> origin/main
    }
    return match;
  });
  
<<<<<<< HEAD
  // Fix function declarations
  fixed = fixed.replace(/(\w+)\s*:\s*\(\)\s*=>\s*\{\}/g, '$1: () => {}');
  
  // Fix JSX attributes that got corrupted
  fixed = fixed.replace(/className\s*=\s*"([^"]*?)"/g, 'className="$1"');
  fixed = fixed.replace(/href\s*=\s*"([^"]*?)"/g, 'href="$1"');
  fixed = fixed.replace(/src\s*=\s*"([^"]*?)"/g, 'src="$1"');
  
  // Fix semicolons that got removed
  fixed = fixed.replace(/(\w+)\s*$/gm, '$1;');
  fixed = fixed.replace(/;\s*$/gm, ';');
  
  return fixed;
}

// Function to find and fix files with specific patterns
function findAndFixFiles(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          searchDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.ts', '.js', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Main execution
console.log('Starting targeted syntax fixes...');

const sourceFiles = findAndFixFiles('.');
console.log(`Found ${sourceFiles.length} source files`);

let fixedCount = 0;
for (const file of sourceFiles) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixed = fixSafeSyntaxPatterns(content);
    
    if (content !== fixed) {
      fs.writeFileSync(file, fixed, 'utf8');
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (err) {
    // Skip files that can't be read
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('Targeted syntax fixes completed!');
=======
  // Fix malformed function declarations
  content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*return\s*\(\s*$/gm, 'const $1 = () => {\n  return (\n');
  
  // Fix missing closing braces
  content = content.replace(/\{\s*return\s*\(\s*$/gm, '{\n  return (\n');
  
  // Fix duplicate return statements
  content = content.replace(/return\s*\(\s*\n\s*return\s*\(/g, 'return (');
  
  // Clean up extra newlines
  content = content.replace(/\n\n\n+/g, '\n\n');
  
  return content;
}

// Function to fix specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixRemainingSyntax(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed remaining syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Fixing remaining syntax issues...');
  
  const filesToFix = [
    'App_minimal.tsx', 
    'App_test.tsx',
    'EnhancedFooter.tsx',
    'EnhancedHeader.tsx',
    'SidebarNavigation.tsx'
  ];
  
  let fixedCount = 0;
  
  filesToFix.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  console.log(`Fixed remaining syntax in ${fixedCount} files`);
}

main();
>>>>>>> origin/main
