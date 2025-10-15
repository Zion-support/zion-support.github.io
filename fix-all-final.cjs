#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all final issues...');

// Function to fix all final issues
function fixAllFinal(content) {
  // Fix unterminated string literals
  content = content.replace(/from 'react';'/g, "from 'react';");
  content = content.replace(/from 'react-dom';'/g, "from 'react-dom';");
  content = content.replace(/from 'react-router-dom';'/g, "from 'react-router-dom';");
  content = content.replace(/from 'react-helmet-async';'/g, "from 'react-helmet-async';");
  content = content.replace(/from '@heroicons\/react\/24\/outline';'/g, "from '@heroicons/react/24/outline';");
  content = content.replace(/from 'lucide-react';'/g, "from 'lucide-react';");
  content = content.replace(/from 'framer-motion';'/g, "from 'framer-motion';");
  
  // Fix malformed import statements
  content = content.replace(/from '''([^']+)';'/g, "from '$1';");
  content = content.replace(/from ''([^']+)';'/g, "from '$1';");
  content = content.replace(/from '';'/g, "from ''");
  
  // Fix function declarations with semicolons
  content = content.replace(/const (\w+): React\.FC = \(\) => {;/g, "const $1: React.FC = () => {");
  content = content.replace(/useEffect\(\(\) => {;/g, "useEffect(() => {");
  content = content.replace(/return \(;/g, "return (");
  content = content.replace(/\)",;/g, ");");
  
  // Fix JSX with semicolons
  content = content.replace(/<>;/g, "<>");
  content = content.replace(/<\/>;/g, "</>");
  content = content.replace(/<(\w+)>;/g, "<$1>");
  content = content.replace(/<\/\w+>;/g, (match) => match.replace(';', ''));
  
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
  
  // Fix className attributes
  content = content.replace(/className=([^'">\s]+)/g, (match, className) => {
    if (!className.startsWith("'") && !className.startsWith('"')) {
      return `className='${className}'`;
    }
    return match;
  });
  
  // Fix template literals
  content = content.replace(/className='{`([^`]+)`}/g, "className={`$1`}");
  content = content.replace(/className='{`([^`]+)`}/g, "className={`$1`}");
  
  // Remove extra semicolons
  content = content.replace(/;+/g, ';');
  content = content.replace(/;\s*;/g, ';');
  content = content.replace(/;\s*$/gm, ';');
  
  // Fix JSX closing tags
  content = content.replace(/<\/\s*([^>]+)\s*;/g, '</$1>');
  
  // Fix function declarations
  content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*;\s*{/g, 'function $1() {');
  content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*;\s*{/g, 'export default function $1() {');
  
  // Fix array syntax
  content = content.replace(/\[\s*;\s*\]/g, '[]');
  content = content.replace(/\[\s*([^,\]]+);\s*\]/g, '[$1]');
  
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
  console.log('📁 Scanning for files with all final issues...');
  
  const files = findFiles(process.cwd());
  let fixedCount = 0;
  let totalFiles = 0;
  
  for (const file of files) {
    totalFiles++;
    try {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      content = fixAllFinal(content);
      
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
  
  console.log('\n🎉 All final fix completed!');
}

main().catch(console.error);