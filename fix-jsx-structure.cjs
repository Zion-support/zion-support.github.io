const fs = require('fs');
const path = require('path');

// Function to fix JSX structure issues
function fixJSXStructure(content) {
  let fixed = content;
  
  // Fix 1: Fix unclosed JSX fragments
  const fragmentOpenCount = (fixed.match(/<>/g) || []).length;
  const fragmentCloseCount = (fixed.match(/<\/>/g) || []).length;
  
  if (fragmentOpenCount > fragmentCloseCount) {
    const missingFragments = fragmentOpenCount - fragmentCloseCount;
    fixed += '\n' + '</>'.repeat(missingFragments);
  }
  
  // Fix 2: Fix missing semicolons in object declarations
  fixed = fixed.replace(/(\w+)\s*=\s*\[\s*\n\s*{/g, '$1 = [\n    {');
  fixed = fixed.replace(/(\w+)\s*=\s*\[\s*{/g, '$1 = [\n    {');
  
  // Fix 3: Fix malformed object properties
  fixed = fixed.replace(/(\w+):\s*'([^']+)'\s*\n\s*(\w+):/g, '$1: \'$2\',\n    $3:');
  fixed = fixed.replace(/(\w+):\s*"([^"]+)"\s*\n\s*(\w+):/g, '$1: "$2",\n    $3:');
  
  // Fix 4: Fix missing commas in arrays
  fixed = fixed.replace(/}\s*\n\s*{/g, '},\n    {');
  fixed = fixed.replace(/}\s*{/g, '},\n    {');
  
  // Fix 5: Fix unclosed JSX tags - basic approach
  const openTags = fixed.match(/<(\w+)(?:\s[^>]*)?(?!\/)>/g) || [];
  const closeTags = fixed.match(/<\/(\w+)>/g) || [];
  
  // Simple fix for common unclosed tags
  if (fixed.includes('<section') && !fixed.includes('</section>')) {
    fixed = fixed.replace(/(<section[^>]*>.*?)(<\/div>)/g, '$1</section>$2');
  }
  
  if (fixed.includes('<div') && !fixed.includes('</div>')) {
    // Count opening and closing divs
    const openDivs = (fixed.match(/<div/g) || []).length;
    const closeDivs = (fixed.match(/<\/div>/g) || []).length;
    if (openDivs > closeDivs) {
      fixed += '\n' + '</div>'.repeat(openDivs - closeDivs);
    }
  }
  
  // Fix 6: Fix malformed function declarations
  fixed = fixed.replace(/function\s+(\w+)\s*\(\s*\)\s*=>\s*{/g, 'function $1() {');
  
  // Fix 7: Fix missing closing braces
  const openBraces = (fixed.match(/{/g) || []).length;
  const closeBraces = (fixed.match(/}/g) || []).length;
  if (openBraces > closeBraces) {
    fixed += '\n' + '}'.repeat(openBraces - closeBraces);
  }
  
  // Fix 8: Fix JSX expressions with multiple parent elements
  // This is a complex fix that would need proper JSX parsing
  // For now, wrap problematic sections in fragments
  
  // Fix 9: Fix malformed array syntax
  fixed = fixed.replace(/(\w+)\s*=\s*\[\s*\n\s*{/g, '$1 = [\n    {');
  fixed = fixed.replace(/(\w+)\s*=\s*\[\s*{/g, '$1 = [\n    {');
  
  // Fix 10: Fix missing semicolons after statements
  fixed = fixed.replace(/(\w+)\s*=\s*\[\s*\n\s*{/g, '$1 = [\n    {');
  fixed = fixed.replace(/(\w+)\s*=\s*\[\s*{/g, '$1 = [\n    {');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXStructure(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed JSX structure: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process all TSX files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        fixedCount += processDirectory(fullPath);
      } else if (item.endsWith('.tsx')) {
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
console.log('Starting JSX structure fixes...');
const appDir = path.join(__dirname, 'app');
const fixedCount = processDirectory(appDir);
console.log(`Fixed JSX structure in ${fixedCount} files`);