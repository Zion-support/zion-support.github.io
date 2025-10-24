const fs = require('fs');
const path = require('path');

// Function to fix JSX attribute semicolons
function fixJSXAttributes(content) {
  let fixed = content;
  
  // Fix semicolons in JSX attributes
  fixed = fixed.replace(/href="([^"]*);/g, 'href="$1"');
  fixed = fixed.replace(/className="([^"]*);/g, 'className="$1"');
  fixed = fixed.replace(/src="([^"]*);/g, 'src="$1"');
  fixed = fixed.replace(/alt="([^"]*);/g, 'alt="$1"');
  fixed = fixed.replace(/title="([^"]*);/g, 'title="$1"');
  fixed = fixed.replace(/name="([^"]*);/g, 'name="$1"');
  fixed = fixed.replace(/content="([^"]*);/g, 'content="$1"');
  fixed = fixed.replace(/property="([^"]*);/g, 'property="$1"');
  
  // Fix semicolons after JSX element names
  fixed = fixed.replace(/<Link;/g, '<Link');
  fixed = fixed.replace(/<div;/g, '<div');
  fixed = fixed.replace(/<span;/g, '<span');
  fixed = fixed.replace(/<p;/g, '<p');
  fixed = fixed.replace(/<h[1-6];/g, (match) => match.replace(';', ''));
  fixed = fixed.replace(/<a;/g, '<a');
  fixed = fixed.replace(/<button;/g, '<button');
  fixed = fixed.replace(/<img;/g, '<img');
  fixed = fixed.replace(/<meta;/g, '<meta');
  fixed = fixed.replace(/<title;/g, '<title');
  fixed = fixed.replace(/<Head;/g, '<Head');
  fixed = fixed.replace(/<Footer;/g, '<Footer');
  fixed = fixed.replace(/<ArrowRight;/g, '<ArrowRight');
  
  // Fix semicolons in JSX text content
  fixed = fixed.replace(/>([^<]+);\s*</g, '>$1<');
  
  // Fix broken paragraph tags
  fixed = fixed.replace(/<p([^>]*)>\s*<\/p>\s*([^<]+)<\/p>/g, '<p$1>$2</p>');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXAttributes(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed JSX attributes in: ${filePath}`);
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
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          fixedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
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
console.log('Starting JSX attributes fix...');
const fixedCount = processDirectory('./app');
console.log(`Fixed JSX attributes in ${fixedCount} files`);