const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax errors comprehensively
function fixJSXErrors(content) {
  let fixed = content;
  
  // Ensure proper React import
  if (!fixed.includes("import React from 'react';") && !fixed.includes("import React")) {
    fixed = fixed.replace(/'use client';/, "'use client';\nimport React from 'react';");
  }
  
  // Fix malformed Link components
  fixed = fixed.replace(/LinkContact Us\s*>\s*\$2\s*<ArrowRight\$3 \/>\s*<\/Link>/g, 
    `Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>`);
  
  // Fix ArrowRight$ pattern
  fixed = fixed.replace(/ArrowRight\$[0-9]/g, 'ArrowRight className="w-5 h-5 ml-2"');
  
  // Fix $2, $3 patterns
  fixed = fixed.replace(/\$[0-9]/g, '');
  
  // Fix extra closing divs - more sophisticated approach
  const lines = fixed.split('\n');
  let inJSX = false;
  let divCount = 0;
  let fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Track JSX state
    if (trimmed.includes('return (') || trimmed.includes('return(')) {
      inJSX = true;
      divCount = 0;
    }
    
    if (inJSX) {
      // Count opening divs
      if (trimmed.includes('<div') && !trimmed.includes('</div>')) {
        divCount++;
      }
      
      // Count closing divs
      if (trimmed === '</div>') {
        divCount--;
      }
      
      // Check for end of JSX
      if (trimmed === ');' || trimmed === ');') {
        inJSX = false;
      }
    }
    
    fixedLines.push(line);
  }
  
  // Remove extra closing divs at the end
  let extraDivs = 0;
  for (let i = fixedLines.length - 1; i >= 0; i--) {
    if (fixedLines[i].trim() === '</div>') {
      extraDivs++;
    } else if (fixedLines[i].trim() && !fixedLines[i].trim().startsWith('//')) {
      break;
    }
  }
  
  if (extraDivs > 1) {
    const extraDivsToRemove = extraDivs - 1;
    let removed = 0;
    for (let i = fixedLines.length - 1; i >= 0 && removed < extraDivsToRemove; i--) {
      if (fixedLines[i].trim() === '</div>') {
        fixedLines.splice(i, 1);
        removed++;
      }
    }
  }
  
  fixed = fixedLines.join('\n');
  
  // Fix missing closing fragment tags
  fixed = fixed.replace(/<\/div>\s*\)\s*$/, '</>\n  );');
  fixed = fixed.replace(/<\/div>\s*\)\s*;\s*$/, '</>\n  );');
  
  // Fix missing semicolon after return statement
  fixed = fixed.replace(/\)\s*$/, ');');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div>\s*\)\s*$/, '</>\n  );');
  
  // Ensure proper JSX structure for fragments
  if (fixed.includes('<>') && !fixed.includes('</>')) {
    fixed = fixed.replace(/(<\/div>\s*)\s*\)\s*;\s*$/, '$1\n    </>\n  );');
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);