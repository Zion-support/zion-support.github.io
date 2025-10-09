const fs = require('fs');
const path = require('path');

// Function to fix JSX structure issues
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common JSX structure issues
    content = content.replace(/<\/div>\s*<>\s*<Footer \/>\s*<\/>/g, '</div>\n      <Footer />');
    content = content.replace(/<\/div>\s*<Footer \/>\s*<\/div>/g, '</div>\n      <Footer />\n    </div>');
    content = content.replace(/<\/main>\s*<Footer \/>\s*<\/div>\s*<\/>/g, '</main>\n        <Footer />\n      </div>\n    </>');
    
    // Fix unclosed spans by finding and closing them
    const spanMatches = content.match(/<span[^>]*>(?!.*<\/span>)/g);
    if (spanMatches) {
      spanMatches.forEach(match => {
        const openSpan = match;
        const closeSpan = '</span>';
        // Find the position and add closing tag
        const index = content.indexOf(openSpan);
        if (index !== -1) {
          // Find the next > or end of line to determine where to close
          const nextClose = content.indexOf('>', index);
          if (nextClose !== -1) {
            const afterOpen = content.substring(nextClose + 1);
            const nextTag = afterOpen.match(/<[^>]*>/);
            if (nextTag) {
              const insertPos = nextClose + 1 + afterOpen.indexOf(nextTag[0]);
              content = content.substring(0, insertPos) + closeSpan + content.substring(insertPos);
            }
          }
        }
      });
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed JSX errors in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// List of files with JSX errors
const filesToFix = [
  'app/ai-customer-support/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-workflow-automation/page.tsx'
];

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixJSXErrors(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('JSX error fixing completed!');