const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix HTML entities in a file
function fixHtmlEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace HTML entities with proper characters
    content = content
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&#39;/g, "'")
      .replace(/&#x27;/g, "'")
      .replace(/&#x2F;/g, '/')
      .replace(/&#x60;/g, '`')
      .replace(/&#x3D;/g, '=')
      .replace(/&#x3C;/g, '<')
      .replace(/&#x3E;/g, '>');
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting to fix HTML entities...');
  
  // Find all tsx and jsx files
  const files = glob.sync('app/**/*.{tsx,jsx}');
  console.log(`Found ${files.length} files`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    try {
      const fixed = fixHtmlEntities(file);
      if (fixed) {
        fixedCount++;
        if (fixedCount % 50 === 0) {
          console.log(`Fixed ${fixedCount} files so far...`);
        }
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\nFixed: ${fixedCount} files`);
  console.log(`Errors: ${errorCount} files`);
  console.log('Done!');
}

main().catch(console.error);