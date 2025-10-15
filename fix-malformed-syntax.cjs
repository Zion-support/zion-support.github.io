const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all problematic files
const files = glob.sync('app/**/*.tsx', { cwd: '/workspace' });

console.log(`Found ${files.length} files to check`);

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix malformed import statements
  if (content.includes('from "react";"') || content.includes('from "react-helmet-async";"')) {
    console.log(`Fixing malformed imports in ${file}`);
    content = content.replace(/from "react";"/g, 'from "react";');
    content = content.replace(/from "react-helmet-async";"/g, 'from "react-helmet-async";');
    modified = true;
  }

  // Fix malformed JSX return statements
  if (content.includes('return ("') || content.includes('return ("')) {
    console.log(`Fixing malformed return statements in ${file}`);
    content = content.replace(/return \("/g, 'return (');
    content = content.replace(/return \("/g, 'return (');
    modified = true;
  }

  // Fix malformed JSX with stray quotes
  content = content.replace(/"\s*<[^>]*>/g, (match) => {
    return match.replace(/"/g, '');
  });

  // Fix unterminated strings by finding patterns and fixing them
  const lines = content.split('\n');
  let fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Fix lines that start with a quote but don't end with one
    if (line.match(/^\s*"[^"]*$/)) {
      line = line + '"';
      modified = true;
    }
    
    // Fix lines that have malformed quotes in the middle
    line = line.replace(/"\s*$/, '"');
    
    // Fix duplicate quotes
    line = line.replace(/""/g, '"');
    
    // Fix malformed JSX attributes
    line = line.replace(/className="[^"]*"\s*"/g, (match) => {
      return match.replace(/"$/, '');
    });
    
    fixedLines.push(line);
  }
  
  if (fixedLines.length > 0) {
    content = fixedLines.join('\n');
  }

  // Fix specific patterns that are causing issues
  content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*'lucide-react';/g, '');
  content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*"lucide-react";/g, '');
  
  // Fix duplicate Helmet imports
  const helmetImports = content.match(/import\s*{\s*Helmet\s*}\s*from\s*["']react-helmet-async["'];?/g);
  if (helmetImports && helmetImports.length > 1) {
    content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*["']react-helmet-async["'];?\s*/g, '');
    content = 'import { Helmet } from "react-helmet-async";\n' + content;
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
});

console.log('Malformed syntax fixes completed');