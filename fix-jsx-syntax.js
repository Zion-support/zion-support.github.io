const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax issues
function fixJSXSyntax(content) {
  // Fix missing semicolons after imports
  content = content.replace(/(import [^;]+)(\n)/g, '$1;$2');
  
  // Remove extra semicolons
  content = content.replace(/;\n;/g, ';');
  content = content.replace(/;\n\nexport/g, ';\n\nexport');
  
  // Fix malformed JSX return statements
  content = content.replace(/return \(\n    <div>/g, 'return (\n    <div>');
  
  // Fix unterminated strings and malformed JSX
  content = content.replace(/content="([^"]*)"  \/>"/g, 'content="$1" />');
  content = content.replace(/\/>"/g, '/>');
  content = content.replace(/<\/Head>"\n/g, '</Head>\n');
  content = content.replace(/    <\/>"/g, '    </>');
  content = content.replace(/  \);"/g, '  );');
  content = content.replace(/}\"'/g, '}');
  
  // Fix malformed JSX structure - ensure proper wrapping
  content = content.replace(/return \(\n    <div>\n      <Head>/g, 'return (\n    <>\n      <Head>');
  content = content.replace(/      <\/Head>\n      <div className="min-h-screen/g, '      </Head>\n      <div className="min-h-screen');
  
  // Ensure proper closing tags
  content = content.replace(/        <\/div>\n      <\/div>\n    <\/div>/g, '        </div>\n      </div>\n    </>');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has JSX syntax issues
    if (content.includes('return (') && 
        (content.includes('<div>') || content.includes('<Head>')) &&
        (content.includes('import [^;]+$') || content.includes(';\n;') || content.includes('/>"'))) {
      
      console.log(`Fixing JSX syntax in: ${filePath}`);
      
      const fixed = fixJSXSyntax(content);
      
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
console.log('Starting JSX syntax fixes...');
const processedCount = processDirectory('/workspace/app');
console.log(`\n✓ Processed ${processedCount} files with JSX syntax issues`);

console.log('\nJSX syntax fixes completed!');