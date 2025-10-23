const fs = require('fs');
const path = require('path');

// Function to fix syntax errors
function fixSyntaxErrors(content) {
  let fixedContent = content;
  
  // Fix missing closing brackets for arrays
  // Pattern: } followed by ]; should be }];
  fixedContent = fixedContent.replace(
    /}\s*\]\s*;/g,
    '}];'
  );
  
  // Fix missing closing brackets for arrays in JSX
  // Pattern: )} followed by </div> should be )}]}
  fixedContent = fixedContent.replace(
    /\)\}\s*<\/div>/g,
    ')}]\n            </div>'
  );
  
  // Fix missing closing brackets for arrays in JSX
  // Pattern: )} followed by </div> should be )}]}
  fixedContent = fixedContent.replace(
    /\)\}\s*<\/div>\s*<\/div>/g,
    ')}]\n            </div>\n          </div>'
  );
  
  // Fix missing closing brackets for arrays in JSX
  // Pattern: )} followed by </div> should be )}]}
  fixedContent = fixedContent.replace(
    /\)\}\s*<\/div>\s*<\/div>\s*<\/div>/g,
    ')}]\n            </div>\n          </div>\n        </div>'
  );
  
  return fixedContent;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
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
  let filesProcessed = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
        if (processFile(fullPath)) {
          filesProcessed++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return filesProcessed;
}

// Main execution
console.log('Starting to fix syntax errors...');
const filesProcessed = processDirectory('/workspace');
console.log(`Processed ${filesProcessed} files.`);