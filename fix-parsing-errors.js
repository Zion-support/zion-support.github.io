const fs = require('fs');
const path = require('path');

// Function to fix common parsing errors
function fixParsingErrors(content) {
  // Fix unterminated string literals
  content = content.replace(/"use client""/g, '"use client";');
  content = content.replace(/'use client'"/g, "'use client';");
  
  // Fix malformed imports
  content = content.replace(/import React from &quot;react&quot;/g, 'import React from "react"');
  content = content.replace(/import {([^}]+)} from &quot;([^&]+)&quot;/g, 'import {$1} from "$2"');
  
  // Fix malformed function declarations
  content = content.replace(/const\s+(\w+):\s*React\.FC="\(\)"\s*=>/g, 'const $1: React.FC = () =>');
  content = content.replace(/const\s+(\w+):\s*React\.FC="\(\)"\s*=>\s*{/g, 'const $1: React.FC = () => {');
  
  // Fix malformed interface declarations
  content = content.replace(/interface\s+(\w+)\s*{\s*}\s*(\w+):\s*string;/g, 'interface $1 {\n  $2: string;\n}');
  
  // Fix malformed object properties
  content = content.replace(/{\s*icon:\s*(\w+),;\s*title:\s*'([^']+)',;\s*description:\s*'([^']+)',}\s*benefits:\s*\[([^\]]+)\]/g, 
    '{\n    icon: $1,\n    title: "$2",\n    description: "$3",\n    benefits: [$4]\n  }');
  
  // Fix malformed array declarations
  content = content.replace(/const\s+(\w+):\s*";",;/g, 'const $1 = [');
  content = content.replace(/const\s+(\w+)=\s*";",;/g, 'const $1 = [');
  
  // Fix malformed function calls
  content = content.replace(/useEffect\(\(\)\s*=>\s*{"/g, 'useEffect(() => {');
  content = content.replace(/const\s+(\w+):\s*";";/g, 'const $1 = () => {');
  
  // Fix malformed JSX
  content = content.replace(/<div\s+className="\{className\}"><\/div>/g, '<div className={className}></div>');
  
  // Fix malformed quotes
  content = content.replace(/&apos;/g, "'");
  content = content.replace(/&quot;/g, '"');
  
  // Fix malformed semicolons
  content = content.replace(/;\s*;/g, ';');
  content = content.replace(/,\s*;/g, ',');
  
  // Fix malformed closing braces
  content = content.replace(/}\s*"/g, '}');
  content = content.replace(/}\s*;\s*"/g, '};');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixParsingErrors(content);
    
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
console.log('Starting parsing error fixes...');
const fixedCount = processDirectory('./app');
const fixedCountSrc = processDirectory('./src');
console.log(`Fixed ${fixedCount + fixedCountSrc} files`);