const fs = require('fs');
const path = require('path');

// Function to completely fix broken JSX files
function fixCompleteJSX(content) {
  let fixed = content;
  
  // First, let's identify the structure and fix it properly
  const lines = fixed.split('\n');
  let result = [];
  let inReturn = false;
  let returnStart = -1;
  let braceCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('return (')) {
      inReturn = true;
      returnStart = i;
      braceCount = 0;
      result.push(line);
      continue;
    }
    
    if (inReturn) {
      // Count braces to find the end of return statement
      for (const char of line) {
        if (char === '(') braceCount++;
        if (char === ')') braceCount--;
      }
      
      // If we've closed all braces, we're done with return
      if (braceCount === 0 && line.includes(')')) {
        inReturn = false;
        result.push(line);
        continue;
      }
      
      // Fix the JSX structure
      let fixedLine = line;
      
      // Fix missing closing tags
      if (line.includes('<title>') && !line.includes('</title>')) {
        fixedLine = line.replace('<title>', '<title>') + '</title>';
      }
      
      if (line.includes('<meta') && !line.includes('/>')) {
        fixedLine = line.replace('<meta', '<meta') + ' />';
      }
      
      if (line.includes('<h1 className="text-4xl font-bold text-white mb-6">')) {</h1>
        fixedLine = line.replace('<h1 className="text-4xl font-bold text-white mb-6">';
      }
      </h1>
      if (line.includes('<p className="text-lg text-gray-300 mb-8">')) {</p>
        fixedLine = line.replace('<p className="text-lg text-gray-300 mb-8">';
      }
      </p>
      if (line.includes('<Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            ')) {
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        fixedLine = line.replace('<Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            ';
      }
      
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
      if (line.includes('<div') && !line.includes('</div>') && !line.includes('/>')) {
        // This is an opening div, we'll handle closing in the structure
        fixedLine = line;
      }
      
      result.push(fixedLine);
    } else {
      result.push(line);
    }
  }
  
  // Now let's fix the JSX structure properly
  let fixedContent = result.join('\n');
  
  // Fix specific patterns
  fixedContent = fixedContent.replace(/<title>([^<]+)<\/title>/g, '<title>$1</title>');
  fixedContent = fixedContent.replace(/<meta name="description" content="([^"]+)" \/>/g, '<meta name="description" content="$1" />');
  
  // Fix the main structure - ensure proper closing tags
  const mainDivMatch = fixedContent.match(/<div[^>]*>/);
  if (mainDivMatch) {
    // Count opening and closing divs
    const openDivs = (fixedContent.match(/<div[^>]*>/g) || []).length;
    const closeDivs = (fixedContent.match(/<\/div>/g) || []).length;
    
    // If there are more opening divs than closing divs, add the missing ones
    const missingDivs = openDivs - closeDivs;
    if (missingDivs > 0) {
      // Find the last closing tag and add missing divs before the final closing parenthesis
      const lastClosingDiv = fixedContent.lastIndexOf('</div>');
      if (lastClosingDiv !== -1) {
        const beforeLastDiv = fixedContent.substring(0, lastClosingDiv);
        const afterLastDiv = fixedContent.substring(lastClosingDiv);
        
        // Add missing closing divs
        const missingClosingDivs = '</div>'.repeat(missingDivs);
        fixedContent = beforeLastDiv + missingClosingDivs + afterLastDiv;
      } else {
        // If no closing div found, add them before the closing parenthesis
        fixedContent = fixedContent.replace(/\)\s*$/, '</div>'.repeat(missingDivs) + '\n  )');
      }
    }
  }
  
  // Fix specific malformed patterns
  fixedContent = fixedContent.replace(/<title>([^<]+)<\/title>/g, '<title>$1</title>');
  fixedContent = fixedContent.replace(/<meta name="description" content="([^"]+)" \/>/g, '<meta name="description" content="$1" />');
  
  // Ensure proper JSX structure
  fixedContent = fixedContent.replace(/<div[^>]*>\s*<Head>/g, '<div>\n      <Head>');
  fixedContent = fixedContent.replace(/<\/Head>\s*<div/g, '</Head>\n      <div');
  
  return fixedContent;
}

// Function to fix a specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixCompleteJSX(content);
    
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
console.log('Starting complete JSX fixes...');
const fixedCount = fixFilesInDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);