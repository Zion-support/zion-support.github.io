const fs = require('fs');
const path = require('path');

// Function to fix completely broken JSX files
function fixBrokenJSX(content) {
  let fixed = content;
  
  // Remove all the extra closing tags that are outside the return statement
  const lines = fixed.split('\n');
  let inReturn = false;
  let returnStart = -1;
  let returnEnd = -1;
  let braceCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('return (')) {
      inReturn = true;
      returnStart = i;
      braceCount = 0;
    }
    
    if (inReturn) {
      // Count braces to find the end of return statement
      for (const char of line) {
        if (char === '(') braceCount++;
        if (char === ')') braceCount--;
      }
      
      // If we've closed all braces, we're done with return
      if (braceCount === 0 && line.includes(')')) {
        returnEnd = i;
        inReturn = false;
        break;
      }
    }
  }
  
  // If we found a return statement, clean it up
  if (returnStart !== -1 && returnEnd !== -1) {
    const beforeReturn = lines.slice(0, returnStart);
    const returnLines = lines.slice(returnStart, returnEnd + 1);
    const afterReturn = lines.slice(returnEnd + 1);
    
    // Clean up the return statement
    let cleanedReturn = returnLines.join('\n');
    
    // Remove any extra closing tags that shouldn't be there
    cleanedReturn = cleanedReturn.replace(/<\/\w+>\s*$/gm, '');
    
    // Ensure proper JSX structure
    // Find the main div and ensure it's properly closed
    const mainDivMatch = cleanedReturn.match(/<div[^>]*>/);
    if (mainDivMatch) {
      // Count opening and closing divs in the return statement
      const openDivs = (cleanedReturn.match(/<div[^>]*>/g) || []).length;
      const closeDivs = (cleanedReturn.match(/<\/div>/g) || []).length;
      
      // If there are more opening divs than closing divs, add the missing ones
      const missingDivs = openDivs - closeDivs;
      if (missingDivs > 0) {
        // Add missing closing divs before the closing parenthesis
        if (lastClosingDiv !== -1) {
          const beforeLastDiv = cleanedReturn.substring(0, lastClosingDiv);
          const afterLastDiv = cleanedReturn.substring(lastClosingDiv);
          
          // Add missing closing divs
          cleanedReturn = beforeLastDiv + missingClosingDivs + afterLastDiv;
        } else {
          // If no closing div found, add them before the closing parenthesis
        }
      }
    }
    
    // Reconstruct the file
    const result = [...beforeReturn, cleanedReturn, ...afterReturn.filter(line => 
      !line.trim().startsWith('</')
    )].join('\n');
    
    return result;
  }
  
  return fixed;
}

// Function to fix a specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixBrokenJSX(content);
    
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
console.log('Starting broken JSX fixes...');
const fixedCount = fixFilesInDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);