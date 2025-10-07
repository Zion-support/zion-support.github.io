#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixCorruptedText(text) {
  let fixed = text;
  
  // Fix the most aggressive corruption patterns - spaces between characters
  // Fix import statements
  fixed = fixed.replace(/import\s+ArrowRight\s+f\s+r\s+o\s+m\s+'n\s+e\s+x\s+t\/l\s+i\s+n\s+k'/g, "import ArrowRight from 'next/link'");
  fixed = fixed.replace(/import\s+Image\s+f\s+r\s+o\s+m\s+'n\s+e\s+x\s+t\/i\s+m\s+a\s+g\s+e'/g, "import Image from 'next/image'");
  fixed = fixed.replace(/import\s+React\s+f\s+r\s+o\s+m\s+'r\s+e\s+a\s+c\s+t'/g, "import React from 'react'");
  
  // Fix export statements
  fixed = fixed.replace(/export\s+const\s+co\s+n\s+s\s+t\s+m\s+e\s+t\s+a\s+d\s+a\s+t\s+a/g, 'export const metadata');
  fixed = fixed.replace(/export\s+const\s+defa\s+u\s+l\s+t\s+f\s+u\s+n\s+c\s+t\s+i\s+o\s+n/g, 'export default function');
  
  // Fix common words with spaces
  fixed = fixed.replace(/m\s+e\s+t\s+a\s+d\s+a\s+t\s+a/g, 'metadata');
  fixed = fixed.replace(/t\s+i\s+t\s+l\s+e/g, 'title');
  fixed = fixed.replace(/d\s+e\s+s\s+c\s+r\s+i\s+p\s+t\s+i\s+o\s+n/g, 'description');
  fixed = fixed.replace(/u\s+r\s+l/g, 'url');
  fixed = fixed.replace(/i\s+m\s+a\s+g\s+e\s+s/g, 'images');
  fixed = fixed.replace(/w\s+i\s+d\s+t\s+h/g, 'width');
  fixed = fixed.replace(/h\s+e\s+i\s+g\s+h\s+t/g, 'height');
  fixed = fixed.replace(/c\s+l\s+a\s+s\s+N\s+a\s+m\s+e/g, 'className');
  fixed = fixed.replace(/r\s+e\s+t\s+u\s+r\s+n/g, 'return');
  
  // Fix JSX elements
  fixed = fixed.replace(/<\s*d\s*i\s*v/g, '<div');
  fixed = fixed.replace(/<\s*s\s*p\s*a\s*n/g, '<span');
  fixed = fixed.replace(/<\s*h\s*1/g, '<h1');
  fixed = fixed.replace(/<\s*h\s*2/g, '<h2');
  fixed = fixed.replace(/<\s*h\s*3/g, '<h3');
  fixed = fixed.replace(/<\s*p/g, '<p');
  fixed = fixed.replace(/<\s*b\s*u\s*t\s+t\s+o\s+n/g, '<button');
  fixed = fixed.replace(/<\s*A\s+r\s+r\s+o\s+w\s+R\s+i\s+g\s+h\s+t/g, '<ArrowRight');
  fixed = fixed.replace(/<\s*I\s+m\s+a\s+g\s+e/g, '<Image');
  fixed = fixed.replace(/<\s*L\s+i\s+n\s+k/g, '<Link');
  
  // Fix closing tags
  fixed = fixed.replace(/<\s*\/\s*d\s*i\s*v\s*>/g, '</div>');
  fixed = fixed.replace(/<\s*\/\s*s\s*p\s*a\s*n\s*>/g, '</span>');
  fixed = fixed.replace(/<\s*\/\s*h\s*1\s*>/g, '</h1>');
  fixed = fixed.replace(/<\s*\/\s*h\s*2\s*>/g, '</h2>');
  fixed = fixed.replace(/<\s*\/\s*h\s*3\s*>/g, '</h3>');
  fixed = fixed.replace(/<\s*\/\s*p\s*>/g, '</p>');
  fixed = fixed.replace(/<\s*\/\s*b\s*u\s*t\s+t\s+o\s+n\s*>/g, '</button>');
  fixed = fixed.replace(/<\s*\/\s*A\s+r\s+r\s+o\s+w\s+R\s+i\s+g\s+h\s+t\s*>/g, '</ArrowRight>');
  fixed = fixed.replace(/<\s*\/\s*I\s+m\s+a\s+g\s+e\s*>/g, '</Image>');
  fixed = fixed.replace(/<\s*\/\s*L\s+i\s+n\s+k\s*>/g, '</Link>');
  
  // Fix common CSS classes
  fixed = fixed.replace(/min-h-scr\s+e\s+e\s+n/g, 'min-h-screen');
  fixed = fixed.replace(/bg-g\s+r\s+a\s+d\s+i\s+e\s+n\s+t-to-br/g, 'bg-gradient-to-br');
  fixed = fixed.replace(/f\s+r\s+o\s+m-g\s+r\s+a\s+y-50/g, 'from-gray-50');
  fixed = fixed.replace(/to-b\s+l\s+u\s+e-50/g, 'to-blue-50');
  fixed = fixed.replace(/max-w-3\s+x\s+l/g, 'max-w-3xl');
  fixed = fixed.replace(/mx-a\s+u\s+t\s+o/g, 'mx-auto');
  fixed = fixed.replace(/px-4/g, 'px-4');
  fixed = fixed.replace(/py-12/g, 'py-12');
  fixed = fixed.replace(/mb-8/g, 'mb-8');
  fixed = fixed.replace(/t\s+e\s+x\s+t-sm/g, 'text-sm');
  fixed = fixed.replace(/t\s+e\s+x\s+t-b\s+l\s+u\s+e-700/g, 'text-blue-700');
  fixed = fixed.replace(/t\s+e\s+x\s+t-4\s+x\s+l/g, 'text-4xl');
  fixed = fixed.replace(/md:t\s+e\s+x\s+t-5\s+x\s+l/g, 'md:text-5xl');
  fixed = fixed.replace(/f\s+o\s+n\s+t-b\s+o\s+l\s+d/g, 'font-bold');
  fixed = fixed.replace(/t\s+e\s+x\s+t-g\s+r\s+a\s+y-900/g, 'text-gray-900');
  fixed = fixed.replace(/mb-4/g, 'mb-4');
  fixed = fixed.replace(/t\s+e\s+x\s+t-x\s+l/g, 'text-xl');
  fixed = fixed.replace(/t\s+e\s+x\s+t-g\s+r\s+a\s+y-700/g, 'text-gray-700');
  fixed = fixed.replace(/mb-8/g, 'mb-8');
  fixed = fixed.replace(/pr\s+o\s+s\s+e/g, 'prose');
  fixed = fixed.replace(/pr\s+o\s+s\s+e-lg/g, 'prose-lg');
  fixed = fixed.replace(/max-w-n\s+o\s+n\s+e/g, 'max-w-none');
  
  // Fix specific corrupted patterns
  fixed = fixed.replace(/Agen\s+t\s+i\s+c\s+W\s+o\s+r\s+k\s+f\s+l\s+o\s+w\s+Orches\s+t\s+r\s+a\s+t\s+i\s+o\s+n\s+2\s+0\s+2\s+6/g, 'Agentic Workflow Orchestration 2026');
  fixed = fixed.replace(/Guardrailsappro\s+v\s+a\s+l\s+s\s+a\s+n\s+d\s+trac\s+i\s+n\s+g\s+to\s+s\s+h\s+i\s+p\s+r\s+e\s+l\s+i\s+a\s+b\s+l\s+e\s+mu\s+l\s+t\s+i-ag\s+e\s+n\s+t\s+wo\s+r\s+k\s+f\s+l\s+o\s+ws/g, 'Guardrails, approvals and tracing to ship reliable multi-agent workflows');
  
  // Fix more complex patterns
  fixed = fixed.replace(/\s+,\s+/g, ', ');
  fixed = fixed.replace(/\s+:\s+/g, ': ');
  fixed = fixed.replace(/\s+=\s+/g, ' = ');
  fixed = fixed.replace(/\s+{\s+/g, ' {');
  fixed = fixed.replace(/\s+}\s+/g, ' }');
  fixed = fixed.replace(/\s+\[\s+/g, ' [');
  fixed = fixed.replace(/\s+\]\s+/g, ' ]');
  fixed = fixed.replace(/\s+\(\s+/g, ' (');
  fixed = fixed.replace(/\s+\)\s+/g, ' )');
  
  // Fix quotes
  fixed = fixed.replace(/'([^']*)\s+([^']*)'/g, "'$1$2'");
  fixed = fixed.replace(/"([^"]*)\s+([^"]*)"/g, '"$1$2"');
  
  return fixed;
}

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixCorruptedText(content);
    
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all blog files
const blogDir = 'app/blog';
const files = [];

function getAllFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllFiles(fullPath);
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
}

getAllFiles(blogDir);

console.log(`Found ${files.length} blog files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);