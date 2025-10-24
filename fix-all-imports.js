const fs = require('fs');
const path = require('path');

// Function to fix all broken imports and syntax
function fixAllImports(content) {
  // Fix broken imports
  content = content.replace(/from &apos;([^']+)'/g, "from '$1'");
  content = content.replace(/from &quot;([^"]+)&quot;/g, 'from "$1"');
  content = content.replace(/import {([^}]+)} from &apos;([^']+)'/g, "import {$1} from '$2'");
  content = content.replace(/import {([^}]+)} from &quot;([^"]+)&quot;/g, 'import {$1} from "$2"');
  content = content.replace(/import React from &apos;react'/g, "import React from 'react'");
  content = content.replace(/import React from &quot;react&quot;/g, 'import React from "react"');
  
  // Fix broken object properties
  content = content.replace(/name: &quot;([^"]+)&quot;/g, 'name: "$1"');
  content = content.replace(/path: &quot;([^"]+)&quot;/g, 'path: "$1"');
  content = content.replace(/title: &quot;([^"]+)&quot;/g, 'title: "$1"');
  content = content.replace(/description: &quot;([^"]+)&quot;/g, 'description: "$1"');
  content = content.replace(/className: &quot;([^"]+)&quot;/g, 'className: "$1"');
  content = content.replace(/href: &quot;([^"]+)&quot;/g, 'href: "$1"');
  
  // Fix broken string literals
  content = content.replace(/&quot;([^"]+)&quot;/g, '"$1"');
  content = content.replace(/&apos;([^']+)'/g, "'$1'");
  
  // Fix broken JSX attributes
  content = content.replace(/className=&quot;([^"]+)&quot;/g, 'className="$1"');
  content = content.replace(/href=&quot;([^"]+)&quot;/g, 'href="$1"');
  content = content.replace(/src=&quot;([^"]+)&quot;/g, 'src="$1"');
  content = content.replace(/alt=&quot;([^"]+)&quot;/g, 'alt="$1"');
  content = content.replace(/type=&quot;([^"]+)&quot;/g, 'type="$1"');
  content = content.replace(/id=&quot;([^"]+)&quot;/g, 'id="$1"');
  
  // Fix broken template literals
  content = content.replace(/`([^`]*)&quot;([^`]*)`/g, '`$1"$2`');
  content = content.replace(/`([^`]*)&apos;([^`]*)`/g, '`$1\'$2`');
  
  // Fix broken function calls
  content = content.replace(/console\.log\(&quot;([^"]+)&quot;/g, 'console.log("$1"');
  content = content.replace(/console\.error\(&quot;([^"]+)&quot;/g, 'console.error("$1"');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixAllImports(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
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
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        fixedCount += processDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting comprehensive import fixes...');
const fixedCount = processDirectory('./app');
const fixedCountSrc = processDirectory('./src');
console.log(`Fixed ${fixedCount + fixedCountSrc} files`);