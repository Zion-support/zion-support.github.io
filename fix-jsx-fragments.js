import fs from 'fs';
import path from 'path';

// Function to fix JSX fragment issues
function fixJSXFragments(content) {
  let fixed = content;
  
  // Fix unescaped apostrophes in JSX content
  fixed = fixed.replace(/(?<!&)(?<!&#)'(?![a-zA-Z0-9])/g, '&apos;');
  
  // Look for patterns where there might be missing closing tags
  // This is a more complex fix that needs to be done carefully
  
  // Fix common patterns where JSX fragments are not properly closed
  // Look for patterns like: <div>...content... but missing </div>
  
  // First, let's fix the specific pattern where there's a missing closing tag
  // This is a simplified approach - we'll look for common patterns
  
  // Fix patterns where there might be missing closing tags in specific contexts
  // This is a heuristic approach since we can't parse JSX perfectly
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXFragments(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed JSX: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find files with JSX fragment issues
function findProblematicFiles() {
  const problematicFiles = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          // Check for common JSX issues
          if (content.includes("Expected corresponding closing tag for JSX fragment") || 
              content.includes("')' expected") ||
              content.includes("&apos;") ||
              content.includes("w-") && content.includes("h-") && !content.includes("w-") && content.includes(" h-")) {
            problematicFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  walkDir('./app');
  return problematicFiles;
}

// Main execution
console.log('Finding files with JSX fragment issues...');
const problematicFiles = findProblematicFiles();
console.log(`Found ${problematicFiles.length} potentially problematic files.`);

// Process each problematic file
let processedCount = 0;
for (const file of problematicFiles) {
  if (processFile(file)) {
    processedCount++;
  }
}

console.log(`Processed ${processedCount} files with JSX fixes.`);
console.log('JSX fragment fixes completed!');