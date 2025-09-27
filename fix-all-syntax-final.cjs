#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax issues
function fixSyntaxIssues(content) {
  // Fix merge conflict markers
  content = content.replace(/<<<<<<< [^\n]+\n/g, '');
  content = content.replace(/=======\n/g, '');
  content = content.replace(/>>>>>>> [^\n]+\n/g, '');
  
  // Fix malformed imports
  content = content.replace(/import React, {([^}]+)} from 'react';/g, (match, imports) => {
    const cleanImports = imports.replace(/\s+/g, ' ').trim();
    return `import React, { ${cleanImports} } from 'react';`;
  });
  
  // Fix useState declarations
  content = content.replace(/const \[([^,]+),set([^\]]+)\] = useState/g, (match, var1, var2) => {
    const cleanVar1 = var1.replace(/\s+/g, '').trim();
    const cleanVar2 = var2.replace(/\s+/g, '').trim();
    return `const [${cleanVar1}, set${cleanVar2}] = useState`;
  });
  
  // Fix object property declarations
  content = content.replace(/(\w+):\s*'([^']*)'(\w+):\s*'([^']*)'/g, '$1: \'$2\',\n\t\t$3: \'$4\'');
  content = content.replace(/(\w+):\s*'([^']*)'(\w+):\s*'([^']*)'/g, '$1: \'$2\',\n\t\t$3: \'$4\'');
  
  // Fix missing commas in arrays and objects
  content = content.replace(/([^,\s])\s*}\s*{/g, '$1},\n\t\t{');
  content = content.replace(/([^,\s])\s*]\s*\[/g, '$1],\n\t\t[');
  
  // Fix malformed JSX attributes
  content = content.replace(/(\w+):\s*"([^"]*)"(\w+):\s*"([^"]*)"/g, '$1="$2"\n\t\t\t\t$3="$4"');
  
  // Fix function declarations
  content = content.replace(/function\s*{\s*([^}]+)}/g, 'function() {\n\t\t$1\n\t}');
  
  // Fix useEffect syntax
  content = content.replace(/useEffect\(\(\)\s*=>\s*{([^}]+)}\[\]\)/g, 'useEffect(() => {\n\t\t$1\n\t}, [])');
  
  // Fix return statements
  content = content.replace(/return\s*}/g, 'return;\n\t}');
  
  // Fix string concatenation issues
  content = content.replace(/'([^']*)'([^']*)'([^']*)'/g, '\'$1\', \'$2\', \'$3\'');
  
  return content;
}

// Function to fix specific files
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixSyntaxIssues(content);
    
    // Additional file-specific fixes
    if (filePath.includes('_document.tsx')) {
      content = content.replace(/import {([^}]+)} from "next\/document";/g, (match, imports) => {
        const cleanImports = imports.replace(/\s+/g, ' ').trim();
        return `import { ${cleanImports} } from "next/document";`;
      });
    }
    
    if (filePath.includes('blog.tsx')) {
      // Fix blog posts array structure
      content = content.replace(/{id:\s*(\d+)title:\s*'([^']*)'excerpt:\s*'([^']*)'/g, 
        '{\n\t\t\tid: $1,\n\t\t\ttitle: \'$2\',\n\t\t\texcerpt: \'$3\'');
    }
    
    if (filePath.includes('AccessibilityAuditor.tsx')) {
      // Fix the corrupted component structure
      content = `import React, { useEffect } from "react";

interface AccessibilityIssue {
  type: "error" | "warning" | "info";
  message: string;
  element?: HTMLElement;
  rule: string;
}

export default function AccessibilityAuditor() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") {
      return;
    }

    const issues: AccessibilityIssue[] = [];

    // Check for missing alt text on images
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.alt) {
        issues.push({
          type: "error",
          message: "Image missing alt text",
          element: img,
          rule: "alt-text"
        });
      }
    });

    // Check for missing form labels
    const inputs = document.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      const id = input.getAttribute("id");
      const label = id ? document.querySelector(\`label[for="\${id}"]\`) : null;
      if (!label) {
        issues.push({
          type: "warning",
          message: "Form input missing label",
          element: input as HTMLElement,
          rule: "label"
        });
      }
    });

    // Check for color contrast (simplified check)
    const elements = document.querySelectorAll("*");
    elements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color === backgroundColor) {
        issues.push({
          type: "warning",
          message: "Potential color contrast issue",
          element: element as HTMLElement,
          rule: "color-contrast"
        });
      }
    });

    // Log issues for debugging
    if (issues.length > 0) {
      console.log("Accessibility Issues Found:", issues);
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
}`;
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax issues in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// List of files to fix
const filesToFix = [
  'pages/_document.tsx',
  'pages/blog.tsx',
  'pages/contact.tsx',
  'pages/dashboard.tsx',
  'src/components/AccessibilityAuditor.tsx'
];

// Fix each file
filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    fixFile(file);
  }
});

console.log('Syntax fixes completed!');