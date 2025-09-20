const fs = require('fs');
const path = require('path');

// Function to fix complex syntax errors
function fixComplexSyntaxErrors(content) {
  // Fix corrupted import statements
  content = content.replace(/impor;\s*t;\s*Reac;\s*t,\s*{\s*useStat;\s*e;\s*useEffect\s*}\s*from\s*"react";/g, 'import React, { useState, useEffect } from "react";');
  content = content.replace(/import\s*React\s*from\s*"react";/g, 'import React from "react";');
  
  // Fix semicolon issues in imports
  content = content.replace(/import\s*{\s*([^}]+);\s*}\s*from\s*"([^"]+)";/g, 'import { $1 } from "$2";');
  
  // Fix corrupted import statements with semicolons
  content = content.replace(/import\s*{\s*([^}]+);\s*([^}]+)\s*}\s*from\s*"([^"]+)";/g, 'import { $1, $2 } from "$3";');
  
  // Fix multiple semicolons
  content = content.replace(/;+/g, ';');
  
  // Fix corrupted function declarations
  content = content.replace(/const\s*(\w+);\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
  
  // Fix corrupted variable declarations
  content = content.replace(/const\s*\[(\w+);\s*(\w+)\]\s*=\s*useState/g, 'const [$1, $2] = useState');
  
  // Fix corrupted JSX attributes
  content = content.replace(/className;\s*=\s*"([^"]+)"/g, 'className="$1"');
  
  // Fix corrupted function parameters
  content = content.replace(/export\s*function\s*(\w+)\s*{\s*;\s*([^}]+);\s*}/g, 'export function $1({ $2 }) {');
  
  // Fix corrupted type definitions
  content = content.replace(/type\s*(\w+)\s*=\s*"([^"]+)";\s*disabled\?\s*boolean,\s*};/g, 'type $1 = "button" | "submit" | "reset";\n  disabled?: boolean;\n};');
  
  // Fix empty files
  if (content.trim() === '}' || content.trim() === '') {
    return `import React from 'react';

export default function Component() {
  return <div>Component</div>;
}`;
  }
  
  // Fix corrupted HTML entities
  content = content.replace(/&apos;/g, "'");
  content = content.replace(/&quot;/g, '"');
  content = content.replace(/&lt;/g, '<');
  content = content.replace(/&gt;/g, '>');
  
  // Fix multiple commas
  content = content.replace(/,\s*,\s*/g, ', ');
  
  // Fix trailing commas in objects
  content = content.replace(/,\s*}/g, '}');
  
  // Fix missing semicolons
  content = content.replace(/import\s+[^;]+$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixComplexSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find and process TypeScript/JavaScript files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      processFile(filePath);
    }
  });
}

// Start processing from src directory
console.log('Starting complex syntax error fixes...');
processDirectory('./src');
console.log('Complex syntax error fixes completed!');