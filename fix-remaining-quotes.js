const fs = require('fs');
const path = require('path');

// Function to fix remaining quote issues
function fixRemainingQuotes(content) {
  // Fix mixed quotes in object properties
  content = content.replace(/name: "([^"]+)&quot;/g, 'name: "$1"');
  content = content.replace(/path: "([^"]+)&quot;/g, 'path: "$1"');
  content = content.replace(/title: "([^"]+)&quot;/g, 'title: "$1"');
  content = content.replace(/description: "([^"]+)&quot;/g, 'description: "$1"');
  content = content.replace(/className: "([^"]+)&quot;/g, 'className: "$1"');
  content = content.replace(/href: "([^"]+)&quot;/g, 'href: "$1"');
  
  // Fix mixed quotes in JSX attributes
  content = content.replace(/className="([^"]+)&quot;/g, 'className="$1"');
  content = content.replace(/href="([^"]+)&quot;/g, 'href="$1"');
  content = content.replace(/src="([^"]+)&quot;/g, 'src="$1"');
  content = content.replace(/alt="([^"]+)&quot;/g, 'alt="$1"');
  content = content.replace(/type="([^"]+)&quot;/g, 'type="$1"');
  content = content.replace(/id="([^"]+)&quot;/g, 'id="$1"');
  
  // Fix any remaining &quot; patterns
  content = content.replace(/&quot;/g, '"');
  content = content.replace(/&apos;/g, "'");
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingQuotes(content);
    
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

// Function to recursively find and process files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        fixedCount += processDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
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
console.log('Starting remaining quote fixes...');
const fixedCount = processDirectory('./app');
const fixedCountSrc = processDirectory('./src');
console.log(`Fixed ${fixedCount + fixedCountSrc} files`);