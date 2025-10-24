const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;

  // Fix missing commas in object literals
  fixed = fixed.replace(/(\w+):\s*(\w+)(\s*title:)/g, '$1: $2,$3');
  fixed = fixed.replace(/(\w+):\s*(\w+)(\s*description:)/g, '$1: $2,$3');
  fixed = fixed.replace(/(\w+):\s*(\w+)(\s*benefits:)/g, '$1: $2,$3');
  fixed = fixed.replace(/(\w+):\s*(\w+)(\s*icon:)/g, '$1: $2,$3');
  
  // Fix malformed import statements
  fixed = fixed.replace(/import React, \{ useEffect \} from &quot;react&quot/g, 'import React, { useEffect } from "react"');
  fixed = fixed.replace(/import React, \{ useEffect, useState, useRef \} from 'react';/g, 'import React, { useEffect, useState, useRef } from "react";');
  
  // Fix missing commas in interface properties
  fixed = fixed.replace(/(\w+):\s*(\w+)(\s*className\?:)/g, '$1: $2,$3');
  fixed = fixed.replace(/(\w+):\s*(\w+)(\s*duration\?:)/g, '$1: $2,$3');
  fixed = fixed.replace(/(\w+):\s*(\w+)(\s*suffix\?:)/g, '$1: $2,$3');
  fixed = fixed.replace(/(\w+):\s*(\w+)(\s*prefix\?:)/g, '$1: $2,$3');
  
  // Fix missing commas in function parameters
  fixed = fixed.replace(/(\w+)(\s*end,)/g, '$1,$2');
  fixed = fixed.replace(/(\w+)(\s*duration =)/g, '$1,$2');
  fixed = fixed.replace(/(\w+)(\s*suffix =)/g, '$1,$2');
  fixed = fixed.replace(/(\w+)(\s*prefix =)/g, '$1,$2');
  fixed = fixed.replace(/(\w+)(\s*className =)/g, '$1,$2');
  
  // Fix missing commas in array elements
  fixed = fixed.replace(/(\w+)(\s*'Improve search rankings)/g, '$1,$2');
  fixed = fixed.replace(/(\w+)(\s*'Optimize content)/g, '$1,$2');
  fixed = fixed.replace(/(\w+)(\s*'Track performance)/g, '$1,$2');
  fixed = fixed.replace(/(\w+)(\s*'Stay ahead)/g, '$1,$2');
  
  // Fix malformed object properties
  fixed = fixed.replace(/ico,n:/g, 'icon:');
  fixed = fixed.replace(/,title:/g, ', title:');
  fixed = fixed.replace(/,description:/g, ', description:');
  fixed = fixed.replace(/,benefits:/g, ', benefits:');
  
  // Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*}\s*const/g, '$1};\nconst');
  fixed = fixed.replace(/(\w+)\s*]\s*const/g, '$1];\nconst');
  
  // Fix malformed JSX
  fixed = fixed.replace(/<(\w+)\s*(\w+)=/g, '<$1 $2=');
  fixed = fixed.replace(/(\w+)>\s*</g, '$1>');
  
  // Fix missing closing brackets
  fixed = fixed.replace(/(\w+)\s*}\s*$/g, '$1}');
  
  return fixed;
}

// Function to process all TypeScript/TSX files
function processFiles(dir) {
  
  // Fix duplicate imports
  content = content.replace(/import React from ['"]react['"];\s*import React from ['"]react['"]/g, "import React from 'react'");
  content = content.replace(/import React from ['"]react['"]\s*import React from ['"]react['"]/g, "import React from 'react'");
  
  // Fix duplicate 'use client' directives
  content = content.replace(/['"]use client['"];\s*['"]use client['"]/g, "'use client'");
  content = content.replace(/['"]use client['"]\s*['"]use client['"]/g, "'use client'");
  
  // Fix malformed JSX return statements
  content = content.replace(/return \(\s*,/g, 'return (');
  content = content.replace(/return \(\s*<\/[^>]+>,\s*/g, 'return (');
  
  // Fix missing semicolons in imports
  content = content.replace(/import\s+[^;]+$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
  },
  // Fix missing semicolons in type definitions
  {
    pattern: /(\w+):\s*([^;,\n]+)(?![,;])/g,
    replacement: '$1: $2;'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

export default AdvancedErrorBoundary;`;
  }
  
  return content;
}

// Main function to process files
function processFiles() {
  const appDir = path.join(__dirname, 'app');
  const srcDir = path.join(__dirname, 'src');
  const componentsDir = path.join(__dirname, 'components');
  
  const directories = [appDir, srcDir, componentsDir];
  
  directories.forEach(dir => {
    if (fs.existsSync(dir)) {
      processDirectory(dir);
    }
  });
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixed = fixSyntaxErrors(content);
        
        if (content !== fixed) {
          fs.writeFileSync(filePath, fixed);
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });

  return fixedCount;
}

// Process app directory
console.log('Fixing syntax errors in app directory...');
processFiles('./app');

// Process src directory
console.log('Fixing syntax errors in src directory...');
processFiles('./src');

// Process components directory
console.log('Fixing syntax errors in components directory...');
processFiles('./components');

console.log('Syntax error fixes completed!');
