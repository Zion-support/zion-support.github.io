const fs = require('fs');
const path = require('path');

// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix missing closing div tags before JSX fragment
    if (content.includes('</div>\n    </>')) {
      // Count opening and closing div tags to determine how many are missing
      const openingDivs = (content.match(/<div/g) || []).length;
      const closingDivs = (content.match(/<\/div>/g) || []).length;
      const missingDivs = openingDivs - closingDivs;
      
      if (missingDivs > 0) {
        let fixedContent = content.replace('</div>\n    </>', '</div>\n'.repeat(missingDivs) + '    </>');
        content = fixedContent;
      }
    }
    
    // Fix unescaped apostrophes in text content (but not in imports)
    content = content.replace(/(?<!import.*)'(?![^<]*>)/g, '&apos;');
    
    // Write the fixed content back if it changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix page files
function fixPageFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-app directories
      if (!['node_modules', '.git', 'dist', '.next'].includes(file)) {
        fixPageFiles(filePath);
      }
    } else if (file.endsWith('.tsx') && file === 'page.tsx') {
      fixPageFile(filePath);
    }
  }
}

// Start fixing from the app directory
console.log('Starting final fix...');
fixPageFiles('./app');
console.log('Finished final fix.');