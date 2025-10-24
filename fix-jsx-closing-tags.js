const fs = require('fs');
const path = require('path');

// Function to fix missing closing div tags
function fixClosingTags(content) {
  let fixed = content;
  
  // Count opening and closing div tags
  const openDivs = (fixed.match(/<div[^>]*>/g) || []).length;
  const closeDivs = (fixed.match(/<\/div>/g) || []).length;
  
  // If there are more opening divs than closing divs, add the missing ones
  const missingDivs = openDivs - closeDivs;
  
  if (missingDivs > 0) {
    // Find the last closing tag and add missing divs before the final closing tags
    const lastClosingDiv = fixed.lastIndexOf('</div>');
    if (lastClosingDiv !== -1) {
      const beforeLastDiv = fixed.substring(0, lastClosingDiv);
      const afterLastDiv = fixed.substring(lastClosingDiv);
      
      // Add missing closing divs
      const missingClosingDivs = '</div>'.repeat(missingDivs);
      fixed = beforeLastDiv + missingClosingDivs + afterLastDiv;
    } else {
      // If no closing div found, add them at the end before the final closing tags
      const lastClosingBracket = fixed.lastIndexOf('}');
      if (lastClosingBracket !== -1) {
        const beforeLastBracket = fixed.substring(0, lastClosingBracket);
        const afterLastBracket = fixed.substring(lastClosingBracket);
        
        const missingClosingDivs = '</div>'.repeat(missingDivs);
        fixed = beforeLastBracket + missingClosingDivs + afterLastBracket;
      }
    }
  }
  
  return fixed;
}

// Function to fix specific JSX structure issues
function fixJSXStructure(content) {
  let fixed = content;
  
  // Fix common JSX structure issues
  fixed = fixed.replace(/<div><\/div>\s*<div/g, '<div>\n      <div');
  fixed = fixed.replace(/<div><\/div>\s*<Head/g, '<div>\n      <Head');
  fixed = fixed.replace(/<div><\/div>\s*<section/g, '<div>\n      <section');
  fixed = fixed.replace(/<div><\/div>\s*<header/g, '<div>\n      <header');
  
  // Fix missing closing tags in specific patterns
  fixed = fixed.replace(/<div([^>]*)>\s*<\/div>\s*<div([^>]*)>/g, '<div$1>\n        <div$2>');
  
  // Fix broken JSX elements
  fixed = fixed.replace(/<(\w+)\s*;\s*>/g, '<$1>');
  fixed = fixed.replace(/<\/\w+>\s*;\s*$/gm, '');
  
  // Fix missing closing tags for specific elements
  fixed = fixed.replace(/<div([^>]*)>\s*<\/div>\s*<div([^>]*)>\s*<\/div>/g, '<div$1>\n        <div$2></div>\n      </div>
      </div>
      </div>
      </div></div>');
  
  return fixed;
}

// Function to fix a specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixJSXStructure(content);
    content = fixClosingTags(content);
    
    if (content !== originalContent) {
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

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        fixedCount += fixFilesInDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting JSX closing tag fixes...');
const fixedCount = fixFilesInDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);
      </div>
      </div>