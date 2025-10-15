#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Final comprehensive fix for all remaining issues...');

// Function to fix all remaining issues
function fixAllIssues(content) {
  // Fix malformed import statements
  content = content.replace(/import { ;/g, "import {");
  content = content.replace(/from '''([^']+)';/g, "from '$1';");
  content = content.replace(/from ''([^']+)';/g, "from '$1';");
  content = content.replace(/from '';'/g, "from ''");
  
  // Fix function declarations with semicolons
  content = content.replace(/const (\w+): React\.FC = \(\) => {;/g, "const $1: React.FC = () => {");
  content = content.replace(/return \(;/g, "return (");
  content = content.replace(/\)",;/g, ");");
  content = content.replace(/\)",;/g, ");");
  
  // Fix JSX with semicolons
  content = content.replace(/<>;/g, "<>");
  content = content.replace(/<\/>;/g, "</>");
  content = content.replace(/<(\w+)>;/g, "<$1>");
  content = content.replace(/<\/\w+>;/g, (match) => match.replace(';', ''));
  
  // Fix className attributes
  content = content.replace(/className="([^"]*)" ([^>]+)>/g, (match, className, rest) => {
    return `className="${className}" ${rest}>`;
  });
  
  // Remove extra semicolons
  content = content.replace(/;+/g, ';');
  content = content.replace(/;\s*;/g, ';');
  content = content.replace(/;\s*$/gm, ';');
  
  // Fix object properties
  content = content.replace(/(\w+):\s*'([^']+)',/g, "$1: '$2',");
  content = content.replace(/(\w+):\s*([^,}]+),/g, (match, key, value) => {
    if (!value.startsWith("'") && !value.startsWith('"') && !value.startsWith('{') && !value.includes('(')) {
      return `${key}: '${value.trim()}',`;
    }
    return match;
  });
  
  // Fix JSX attributes
  content = content.replace(/(\w+)=([^'">\s]+)(?=\s|>)/g, (match, attr, value) => {
    if (!value.startsWith("'") && !value.startsWith('"') && !value.startsWith('{')) {
      return `${attr}='${value}'`;
    }
    return match;
  });
  
  // Clean up whitespace
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/^\s+$/gm, '');
  
  return content;
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          files = files.concat(findFiles(fullPath, extensions));
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Skip directories we can't read
  }
  
  return files;
}

// Main execution
async function main() {
  console.log('📁 Scanning for files with remaining issues...');
  
  const files = findFiles(process.cwd());
  let fixedCount = 0;
  let totalFiles = 0;
  
  for (const file of files) {
    totalFiles++;
    try {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      content = fixAllIssues(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`✅ Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      // Skip files we can't read
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files fixed: ${fixedCount}`);
  
  console.log('\n🎉 Final comprehensive fix completed!');
}

main().catch(console.error);