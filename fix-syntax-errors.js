import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix w-Xh-Y pattern (missing space)
  fixed = fixed.replace(/w-(\d+)h-(\d+)/g, 'w-$1 h-$2');
  
  // Fix text-Xmd:Y pattern (missing space)
  fixed = fixed.replace(/text-(\d+)md:/g, 'text-$1 md:');
  
  // Fix text-Xmd:Y pattern (missing space)
  fixed = fixed.replace(/text-(\d+)md:(\s*)/g, 'text-$1 md:$2');
  
  // Fix max-w-Xmx-auto pattern (missing space)
  fixed = fixed.replace(/max-w-(\d+)mx-auto/g, 'max-w-$1 mx-auto');
  
  // Fix bg-gradient-to-rfrom pattern (missing space)
  fixed = fixed.replace(/bg-gradient-to-rfrom/g, 'bg-gradient-to-r from');
  
  // Fix flexflex-col pattern (missing space)
  fixed = fixed.replace(/flexflex-col/g, 'flex flex-col');
  
  // Fix blockbg-gradient pattern (missing space)
  fixed = fixed.replace(/blockbg-gradient/g, 'block bg-gradient');
  
  // Fix hover:from-X pattern (missing space)
  fixed = fixed.replace(/hover:from-(\w+)/g, 'hover:from-$1');
  
  // Fix relativepy-X pattern (missing space)
  fixed = fixed.replace(/relativepy-(\d+)/g, 'relative py-$1');
  
  // Fix max-w-Xmx-auto pattern (missing space)
  fixed = fixed.replace(/max-w-(\d+)mx-auto/g, 'max-w-$1 mx-auto');
  
  // Fix text-Xmd:text-Y pattern (missing space)
  fixed = fixed.replace(/text-(\d+)md:text-(\d+)/g, 'text-$1 md:text-$2');
  
  // Fix bg-gray-900text-white pattern (missing space)
  fixed = fixed.replace(/bg-gray-900text-white/g, 'bg-gray-900 text-white');
  
  // Fix text-Xmb-Y pattern (missing space)
  fixed = fixed.replace(/text-(\w+)mb-(\d+)/g, 'text-$1 mb-$2');
  
  // Fix unescaped apostrophes
  fixed = fixed.replace(/(?<!&)(?<!&#)'(?![a-zA-Z0-9])/g, '&apos;');
  
  // Fix JSX fragment closing issues - look for patterns like <p className="...">; or </h3>;
  fixed = fixed.replace(/className="[^"]*">;/g, (match) => match.replace('>;', '>'));
  fixed = fixed.replace(/className="[^"]*">\s*;/g, (match) => match.replace(/>\s*;/, '>'));
  
  // Fix missing closing tags for JSX fragments
  // Look for patterns where there's a missing closing tag
  fixed = fixed.replace(/(<[^>]+>\s*[^<]*)\s*$/gm, (match, content) => {
    if (content.includes('<') && !content.includes('</') && !content.includes('/>')) {
      // This might be a missing closing tag, but we need to be careful
      return match;
    }
    return match;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
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

// Function to recursively find and process all .tsx files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return processedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files with fixes.`);

// Also process root level files
const rootFiles = ['App.tsx', 'main.tsx'];
let rootProcessed = 0;
for (const file of rootFiles) {
  if (fs.existsSync(file)) {
    if (processFile(file)) {
      rootProcessed++;
    }
  }
}
console.log(`Processed ${rootProcessed} root files with fixes.`);

console.log('Syntax error fixes completed!');