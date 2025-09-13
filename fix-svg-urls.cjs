const fs = require('fs');
const path = require('path');

// Function to URL encode SVG data URLs
function fixSvgUrl(content) {
  // Pattern to match data:image/svg+xml URLs with unescaped quotes
  const svgPattern = /data:image\/svg\+xml,([^']+)'/g;
  
  return content.replace(svgPattern, (match, svgData) => {
    // URL encode the SVG data
    const encodedSvg = encodeURIComponent(svgData);
    return `data:image/svg+xml,${encodedSvg}'`;
  });
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSvgUrl(content);
    
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

// Function to recursively find and process TypeScript/TSX files
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && !file.includes('node_modules')) {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting SVG URL fix...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files with SVG URL issues.`);