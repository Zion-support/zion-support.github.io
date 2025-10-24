const fs = require('fs');
const path = require('path');

// Function to fix JSX structure issues
function fixJSXStructure(content) {
  // Fix missing semicolons after imports
  content = content.replace(/(import [^;]+)(\n)/g, '$1;$2');
  
  // Remove semicolons from JSX content
  content = content.replace(/;\"/g, '"');
  content = content.replace(/;$/gm, '');
  
  // Fix malformed JSX structure
  content = content.replace(/return \(\n    <>/g, 'return (\n    <>');
  content = content.replace(/return \(\n    <div>/g, 'return (\n    <>');
  
  // Ensure proper JSX structure
  content = content.replace(/      <\/Head>\n      <div className="min-h-screen/g, '      </Head>\n      <div className="min-h-screen');
  
  // Fix closing tags
  content = content.replace(/        <\/div>\n      <\/div>\n    <\/div>/g, '        </div>\n      </div>\n    </>');
  content = content.replace(/        <\/div>\n      <\/div>\n    <\/>/g, '        </div>\n      </div>\n    </>');
  
  // Remove any remaining malformed JSX
  content = content.replace(/<\/>"/g, '</>');
  content = content.replace(/  \);"/g, '  );');
  content = content.replace(/}\"'/g, '}');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has JSX structure issues
    if (content.includes('return (') && 
        (content.includes(';\"') || content.includes('className=') || content.includes('<>'))) {
      
      console.log(`Fixing JSX structure in: ${filePath}`);
      
      const fixed = fixJSXStructure(content);
      
      fs.writeFileSync(filePath, fixed);
      console.log(`✓ Fixed: ${filePath}`);
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
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          processedCount += processDirectory(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

// Main execution
console.log('Starting JSX structure fixes...');
const processedCount = processDirectory('/workspace/app');
console.log(`\n✓ Processed ${processedCount} files with JSX structure issues`);

console.log('\nJSX structure fixes completed!');