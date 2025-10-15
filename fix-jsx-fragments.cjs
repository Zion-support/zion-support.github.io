const fs = require('fs');
const path = require('path');

// List of files with JSX fragment errors
const filesToFix = [
  'app/ai-education-solutions-pro/page.tsx',
  'app/ai-healthcare-solutions-pro/page.tsx',
  'app/ai-iot-management-pro/page.tsx',
  'app/ai-marketing-automation-pro/page.tsx',
  'app/ai-project-manager-pro/page.tsx',
  'app/ai-social-media-manager-pro/page.tsx'
];

function fixJSXFragment(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix duplicate imports
    content = content.replace(/(\w+), (\w+ as \w+), \1/g, '$1');
    content = content.replace(/(\w+ as \w+), \1/g, '$1');
    
    // Remove unused useState and useEffect imports
    content = content.replace(/import React, \{ useState, useEffect \} from "react";/g, 'import React from "react";');
    content = content.replace(/import React, \{ useState \} from "react";/g, 'import React from "react";');
    content = content.replace(/import React, \{ useEffect \} from "react";/g, 'import React from "react";');
    
    // Fix isVisible references
    content = content.replace(/\$\{isVisible \? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'\}/g, 'opacity-100 translate-y-0');
    
    // Ensure proper JSX fragment structure
    const lines = content.split('\n');
    let inJSX = false;
    let fragmentDepth = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('return (')) {
        inJSX = true;
      }
      
      if (inJSX) {
        if (line.includes('<>')) {
          fragmentDepth++;
        }
        if (line.includes('</>')) {
          fragmentDepth--;
        }
        
        // If we're at the end of the component and fragment depth is not 0, fix it
        if (line.includes(');') && fragmentDepth !== 0) {
          if (fragmentDepth > 0) {
            // Add missing closing tags
            for (let j = 0; j < fragmentDepth; j++) {
              lines.splice(i, 0, '    </>');
              i++;
            }
          }
          fragmentDepth = 0;
        }
      }
    }
    
    content = lines.join('\n');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixJSXFragment);
console.log('JSX fragment fixes completed');