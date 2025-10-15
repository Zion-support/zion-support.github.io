const fs = require('fs');
const path = require('path');

// Function to fix remaining build errors
function fixRemainingBuildErrors(content) {
  let fixed = content;
  
  // Fix 1: Fix unclosed JSX fragments by adding closing tags
  const fragmentOpenCount = (fixed.match(/<>/g) || []).length;
  const fragmentCloseCount = (fixed.match(/<\/>/g) || []).length;
  
  if (fragmentOpenCount > fragmentCloseCount) {
    const missingFragments = fragmentOpenCount - fragmentCloseCount;
    // Add missing closing fragments at the end of the return statement
    fixed = fixed.replace(/(\s*\)\s*;?\s*$)/g, '\n    </>'.repeat(missingFragments) + '$1');
  }
  
  // Fix 2: Fix unclosed JSX tags
  // Fix section tags
  if (fixed.includes('<section') && !fixed.includes('</section>')) {
    // Find the last section tag and add closing tag
    const lastSectionIndex = fixed.lastIndexOf('<section');
    if (lastSectionIndex !== -1) {
      // Find the end of the content and add closing tag
      const contentEnd = fixed.lastIndexOf('</div>');
      if (contentEnd !== -1) {
        fixed = fixed.substring(0, contentEnd) + '</section>' + fixed.substring(contentEnd);
      }
    }
  }
  
  // Fix 3: Fix JSX structure issues
  // Ensure proper JSX structure with fragments
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
  
  // Fix 4: Fix malformed CSS classes
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)/g, '$1-$2$3');
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)\s+(\d+)/g, '$1-$2$3$4');
  fixed = fixed.replace(/(\w+)-(\d+)\s+(\d+)\s+(\d+)\s+(\d+)/g, '$1-$2$3$4$5');
  
  // Fix 5: Fix malformed className attributes
  fixed = fixed.replace(/className="([^"]*?)\s+([^"]*?)"/g, (match, part1, part2) => {
    const cleanPart1 = part1.replace(/\s+/g, '');
    const cleanPart2 = part2.replace(/\s+/g, '');
    return `className="${cleanPart1} ${cleanPart2}"`;
  });
  
  // Fix 6: Fix missing closing div tags
  const openDivs = (fixed.match(/<div/g) || []).length;
  const closeDivs = (fixed.match(/<\/div>/g) || []).length;
  if (openDivs > closeDivs) {
    fixed += '\n' + '</div>'.repeat(openDivs - closeDivs);
  }
  
  // Fix 7: Fix missing closing section tags
  const openSections = (fixed.match(/<section/g) || []).length;
  const closeSections = (fixed.match(/<\/section>/g) || []).length;
  if (openSections > closeSections) {
    fixed += '\n' + '</section>'.repeat(openSections - closeSections);
  }
  
  // Fix 8: Fix malformed object properties
  fixed = fixed.replace(/(\w+):\s*'([^']+)'\s*\n\s*(\w+):/g, '$1: \'$2\',\n    $3:');
  fixed = fixed.replace(/(\w+):\s*"([^"]+)"\s*\n\s*(\w+):/g, '$1: "$2",\n    $3:');
  
  // Fix 9: Fix missing commas in arrays
  fixed = fixed.replace(/}\s*\n\s*{/g, '},\n    {');
  fixed = fixed.replace(/}\s*{/g, '},\n    {');
  
  // Fix 10: Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*=\s*\[\s*\n\s*{/g, '$1 = [\n    {');
  fixed = fixed.replace(/(\w+)\s*=\s*\[\s*{/g, '$1 = [\n    {');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingBuildErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed build errors: ${filePath}`);
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
console.log('Starting remaining build error fixes...');
const appDir = path.join(__dirname, 'app');
const fixedCount = processDirectory(appDir);
console.log(`Fixed build errors in ${fixedCount} files`);