const fs = require('fs');
const path = require('path');

// Function to fix broken quotes in JSX attributes
function fixBrokenQuotes(content) {
  let fixed = content;
  
  // Fix broken quotes in className attributes
  // Pattern: className="min-h-screen -"> className=min-h-screen"
  fixed = fixed.replace(/className="([^]*?)([^"]*?)"/g, (match, p1, p2) => {
    if (p2 && !p2.includes('"')) {
      return `className="${p1}${p2}`;
    }
    return match;
  });
  
  // Fix broken quotes in other JSX attributes
  fixed = fixed.replace(/(\w+)=([^"]*?)"([^"]*?)"/g, (match, p1, p2, p3) => {
    if (p3 && !p3.includes('"')) {
      return `${p1}="${p2}${p3}"`;
    }
    return match;
  });
  
  // Fix specific patterns we've seen
  fixed = fixed.replace(/className="min-h-screen/g, 'className=min-h-screen');
  fixed = fixed.replace(/className="max-w-/g, 'className="max-w-');
  fixed = fixed.replace(/className=relative/g, 'className="relative');
  fixed = fixed.replace(/className="text-/g, 'className=text-');
  fixed = fixed.replace(/className="bg-/g, 'className="bg-');
  fixed = fixed.replace(/className=flex/g, 'className="flex');
  fixed = fixed.replace(/className="items-/g, 'className=items-');
  fixed = fixed.replace(/className="justify-/g, 'className="justify-');
  fixed = fixed.replace(/className=pt-/g, 'className="pt-');
  fixed = fixed.replace(/className="px-/g, 'className=px-');
  fixed = fixed.replace(/className="py-/g, 'className="py-');
  fixed = fixed.replace(/className=mx-/g, 'className="mx-');
  fixed = fixed.replace(/className="mb-/g, 'className=mb-');
  fixed = fixed.replace(/className="w-/g, 'className="w-');
  fixed = fixed.replace(/className=h-/g, 'className="h-');
  fixed = fixed.replace(/className="sm:/g, 'className=sm:');
  fixed = fixed.replace(/className="lg:/g, 'className="lg:');
  fixed = fixed.replace(/className=md:/g, 'className="md:');
  fixed = fixed.replace(/className="font-/g, 'className=font-');
  fixed = fixed.replace(/className="text-/g, 'className="text-');
  fixed = fixed.replace(/className=white/g, 'className="white');
  fixed = fixed.replace(/className="center/g, 'className=center');
  fixed = fixed.replace(/className="auto/g, 'className="auto');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixBrokenQuotes(content);
    
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

// Function to recursively find and process files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .next directories
        if (item === 'node_modules' || item === '.next' || item === 'dist') {
          continue;
        }
        fixedCount += processDirectory(fullPath);
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
console.log('Starting broken quote fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);