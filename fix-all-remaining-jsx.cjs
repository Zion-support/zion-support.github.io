const fs = require('fs');
const path = require('path');

// Function to fix all remaining JSX issues
function fixAllRemainingJSX(content) {
  let fixed = content;
  
  // Fix 1: Fix malformed CSS classes with spaces
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)/g, '$1-$2$3');
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)\s+(\d+)/g, '$1-$2$3$4');
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)\s+(\d+)\s+(\d+)/g, '$1-$2$3$4$5');
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)/g, '$1-$2$3$4$5$6');
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)/g, '$1-$2$3$4$5$6$7');
  
  // Fix 2: Fix malformed className attributes
  fixed = fixed.replace(/className="([^"]*?)\s+([^"]*?)"/g, (match, part1, part2) => {
    const cleanPart1 = part1.replace(/\s+/g, '');
    const cleanPart2 = part2.replace(/\s+/g, '');
    return `className="${cleanPart1} ${cleanPart2}"`;
  });
  
  // Fix 3: Fix malformed CSS classes without spaces
  fixed = fixed.replace(/(\w+)(\d+)(\w+)(\d+)(\w+)(\d+)(\w+)(\d+)/g, '$1-$2$3-$4$5-$6$7-$8');
  fixed = fixed.replace(/(\w+)(\d+)(\w+)(\d+)(\w+)(\d+)/g, '$1-$2$3-$4$5-$6');
  fixed = fixed.replace(/(\w+)(\d+)(\w+)(\d+)/g, '$1-$2$3-$4');
  
  // Fix 4: Fix missing commas in arrays/objects
  fixed = fixed.replace(/(\w+)\s*=\s*\[\s*\n\s*{/g, '$1 = [\n    {');
  fixed = fixed.replace(/(\w+)\s*=\s*\[\s*{/g, '$1 = [\n    {');
  fixed = fixed.replace(/}\s*\n\s*{/g, '},\n    {');
  fixed = fixed.replace(/}\s*{/g, '},\n    {');
  
  // Fix 5: Fix malformed object properties
  fixed = fixed.replace(/(\w+):\s*'([^']+)'\s*\n\s*(\w+):/g, '$1: \'$2\',\n    $3:');
  fixed = fixed.replace(/(\w+):\s*"([^"]+)"\s*\n\s*(\w+):/g, '$1: "$2",\n    $3:');
  
  // Fix 6: Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*=\s*\[\s*\n\s*{/g, '$1 = [\n    {');
  fixed = fixed.replace(/(\w+)\s*=\s*\[\s*{/g, '$1 = [\n    {');
  
  // Fix 7: Fix malformed function declarations
  fixed = fixed.replace(/function\s+(\w+)\s*\(\s*\)\s*=>\s*{/g, 'function $1() {');
  
  // Fix 8: Fix JSX structure issues
  // Fix unclosed JSX fragments
  const fragmentOpenCount = (fixed.match(/<>/g) || []).length;
  const fragmentCloseCount = (fixed.match(/<\/>/g) || []).length;
  
  if (fragmentOpenCount > fragmentCloseCount) {
    const missingFragments = fragmentOpenCount - fragmentCloseCount;
    fixed = fixed.replace(/(\s*\)\s*;?\s*$)/g, '\n    </>'.repeat(missingFragments) + '$1');
  }
  
  // Fix 9: Fix missing closing braces
  const openBraces = (fixed.match(/{/g) || []).length;
  const closeBraces = (fixed.match(/}/g) || []).length;
  if (openBraces > closeBraces) {
    fixed += '\n' + '}'.repeat(openBraces - closeBraces);
  }
  
  // Fix 10: Fix malformed array syntax
  fixed = fixed.replace(/(\w+)\s*=\s*\[\s*\n\s*{/g, '$1 = [\n    {');
  fixed = fixed.replace(/(\w+)\s*=\s*\[\s*{/g, '$1 = [\n    {');
  
  // Fix 11: Fix missing semicolons after statements
  fixed = fixed.replace(/(\w+)\s*=\s*\[\s*\n\s*{/g, '$1 = [\n    {');
  fixed = fixed.replace(/(\w+)\s*=\s*\[\s*{/g, '$1 = [\n    {');
  
  // Fix 12: Fix malformed regex patterns
  fixed = fixed.replace(/className="\[[^"]*\]"/g, 'className=""');
  
  // Fix 13: Fix missing closing div tags
  const openDivs = (fixed.match(/<div/g) || []).length;
  const closeDivs = (fixed.match(/<\/div>/g) || []).length;
  if (openDivs > closeDivs) {
    fixed += '\n' + '</div>'.repeat(openDivs - closeDivs);
  }
  
  // Fix 14: Fix malformed object properties with semicolons
  fixed = fixed.replace(/(\w+):\s*'([^']+)'\s*,\s*;(\s*\w+):/g, '$1: \'$2\',\n    $3:');
  fixed = fixed.replace(/(\w+):\s*"([^"]+)"\s*,\s*;(\s*\w+):/g, '$1: "$2",\n    $3:');
  
  // Fix 15: Fix JSX expressions with multiple parent elements
  // Wrap problematic sections in fragments
  if (fixed.includes('return (') && !fixed.includes('<>')) {
    // Check if there are multiple top-level elements
    const returnMatch = fixed.match(/return\s*\(\s*<(\w+)/);
    if (returnMatch) {
      // Wrap in fragment if needed
      fixed = fixed.replace(/return\s*\(\s*<(\w+)/, 'return (\n    <>\n      <$1');
      if (!fixed.includes('</>')) {
        fixed = fixed.replace(/(\s*\)\s*;?\s*$)/g, '\n    </>\n  );');
      }
    }
  }
  
  // Fix 16: Fix malformed CSS classes with multiple spaces
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)/g, '$1-$2$3$4$5$6$7$8');
  
  // Fix 17: Fix malformed className attributes with multiple spaces
  fixed = fixed.replace(/className="([^"]*?)\s+([^"]*?)\s+([^"]*?)"/g, (match, part1, part2, part3) => {
    const cleanPart1 = part1.replace(/\s+/g, '');
    const cleanPart2 = part2.replace(/\s+/g, '');
    const cleanPart3 = part3.replace(/\s+/g, '');
    return `className="${cleanPart1} ${cleanPart2} ${cleanPart3}"`;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixAllRemainingJSX(content);
    
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
console.log('Starting comprehensive JSX fixes...');
const appDir = path.join(__dirname, 'app');
const fixedCount = processDirectory(appDir);
console.log(`Fixed ${fixedCount} files`);