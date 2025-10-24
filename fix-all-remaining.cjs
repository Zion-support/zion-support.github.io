#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix all remaining syntax issues
function fixAllRemaining(content) {
  let fixed = content;
  
  // Fix stray semicolons and braces
  fixed = fixed.replace(/;\n\s*}\n/g, '\n');
  fixed = fixed.replace(/;\n\s*;\n/g, ';\n');
  
  // Fix stray export statements
  fixed = fixed.replace(/;\n\s*export;\n/g, '\n');
  fixed = fixed.replace(/;\n\s*export\s+default\s+function/g, '\nexport default function');
  fixed = fixed.replace(/;\n\s*export\s+function/g, '\nexport function');
  fixed = fixed.replace(/;\n\s*export\s+const/g, '\nexport const');
  fixed = fixed.replace(/;\n\s*export\s+{/g, '\nexport {');
  
  // Fix stray function declarations
  fixed = fixed.replace(/;\n\s*function\s+/g, '\nfunction ');
  fixed = fixed.replace(/;\n\s*const\s+/g, '\nconst ');
  fixed = fixed.replace(/;\n\s*let\s+/g, '\nlet ');
  fixed = fixed.replace(/;\n\s*var\s+/g, '\nvar ');
  
  // Fix stray return statements
  fixed = fixed.replace(/;\n\s*return\s+/g, '\nreturn ');
  
  // Fix stray JSX
  fixed = fixed.replace(/;\n\s*<\w+/g, '\n<');
  
  // Fix extra commas in function parameters
  fixed = fixed.replace(/,\n\s*\)/g, '\n)');
  
  // Fix extra commas in object literals
  fixed = fixed.replace(/,\n\s*}/g, '\n}');
  
  // Fix extra commas in arrays
  fixed = fixed.replace(/,\n\s*]/g, '\n]');
  
  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(const|let|var)\s+[^=]+=\s*[^;]+$/gm, '$&;');
  
  // Fix missing semicolons after return statements
  fixed = fixed.replace(/return\s+[^;]+$/gm, '$&;');
  
  // Fix missing semicolons after function calls
  fixed = fixed.replace(/[^;]\n\s*export/g, '$&;\nexport');
  
  // Fix import paths
  fixed = fixed.replace(/from\s+['"]@\/components\/Footer['"]/g, "from '../components/Footer'");
  fixed = fixed.replace(/from\s+['"]@\/components\/Header['"]/g, "from '../components/Header'");
  fixed = fixed.replace(/from\s+['"]@\/components\/Navigation['"]/g, "from '../components/Navigation'");
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixAllRemaining(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed remaining issues: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (item === 'node_modules' || item === '.git') {
          continue;
        }
        processedCount += processDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

// Main execution
console.log('Starting comprehensive remaining fixes...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files with remaining fixes.`);
console.log('Comprehensive remaining fixes completed!');