import fs from 'fs';
import path from 'path';

// Function to fix JSX issues
function fixJSXIssues(content) {
  let fixed = content;
  
  // Fix malformed paragraph tags with broken content
  fixed = fixed.replace(/<p className="[^"]*"[^>]*>\s*[^<]*\s*"[^>]*>\s*\$[0-9]+<\/p>/g, (match) => {
    // Extract the text content and create a proper paragraph
    const textMatch = match.match(/Professional\s+([^"]+)/);
    if (textMatch) {
      const text = textMatch[1].trim();
      return `<p className="text-xl text-gray-300 mb-8">${text}</p>`;
    }
    return match;
  });
  
  // Fix duplicate div elements - remove duplicates that appear after the grid
  const lines = fixed.split('\n');
  const fixedLines = [];
  let inGrid = false;
  let gridEnded = false;
  let braceCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Track when we're in a grid
    if (line.includes('grid md:grid-cols-2 lg:grid-cols-3')) {
      inGrid = true;
    }
    
    // Track when grid ends
    if (inGrid && line.includes('</div>') && !line.includes('grid')) {
      braceCount++;
      if (braceCount >= 3) { // Grid has 3 closing divs
        gridEnded = true;
        inGrid = false;
        braceCount = 0;
      }
    }
    
    // Skip duplicate content after grid ends
    if (gridEnded && (
      line.includes('bg-green-50 border border-green-200') ||
      line.includes('bg-purple-50 border border-purple-200') ||
      line.includes('bg-blue-50 border border-blue-200')
    )) {
      // Skip this line and the next few lines that are duplicates
      let skipCount = 0;
      while (i < lines.length && skipCount < 4) {
        i++;
        skipCount++;
      }
      i--; // Adjust for the loop increment
      continue;
    }
    
    // Reset grid tracking when we hit the main container closing
    if (line.includes('</div>') && !line.includes('grid') && !line.includes('container')) {
      gridEnded = false;
    }
    
    fixedLines.push(line);
  }
  
  fixed = fixedLines.join('\n');
  
  // Fix extra closing divs - remove excessive closing divs
  const divCount = (fixed.match(/<div/g) || []).length;
  const closingDivCount = (fixed.match(/<\/div>/g) || []).length;
  
  if (closingDivCount > divCount) {
    // Remove extra closing divs
    const lines = fixed.split('\n');
    const fixedLines = [];
    let divBalance = 0;
    
    for (const line of lines) {
      const openDivs = (line.match(/<div/g) || []).length;
      const closeDivs = (line.match(/<\/div>/g) || []).length;
      
      divBalance += openDivs - closeDivs;
      
      // Only add closing div if we have a positive balance
      if (closeDivs > 0 && divBalance >= 0) {
        fixedLines.push(line);
      } else if (closeDivs > 0 && divBalance < 0) {
        // Skip this closing div
        const modifiedLine = line.replace(/<\/div>/, '');
        fixedLines.push(modifiedLine);
        divBalance++;
      } else {
        fixedLines.push(line);
      }
    }
    
    fixed = fixedLines.join('\n');
  }
  
  // Fix unescaped apostrophes
  fixed = fixed.replace(/(?<!&)(?<!&#)'(?![a-zA-Z0-9])/g, '&apos;');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXIssues(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed JSX issues: ${filePath}`);
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
      } else if (item.endsWith('.tsx')) {
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
console.log('Starting comprehensive JSX fixes...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files with JSX fixes.`);

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
console.log(`Processed ${rootProcessed} root files with JSX fixes.`);

console.log('Comprehensive JSX fixes completed!');