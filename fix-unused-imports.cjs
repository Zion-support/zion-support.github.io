const fs = require('fs');
const path = require('path');

// List of files with unused imports/variables
const filesToFix = [
  'app/about/page.tsx',
  'app/ai-analytics/page.tsx', 
  'app/ai-automation-platform/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-content-studio/page.tsx',
  'app/ai-customer-sentiment-tracker/page.tsx',
  'app/ai-customer-support-chatbot/page.tsx',
  'app/contact/page.tsx',
  'app/pricing/page.tsx',
  'app/services/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused imports - keep only React and Helmet if they exist
    content = content.replace(/import\s*{\s*[^}]*}\s*from\s*['"]lucide-react['"];?\s*\n/g, '');
    content = content.replace(/import\s*{\s*[^}]*}\s*from\s*['"]react-router-dom['"];?\s*\n/g, '');
    
    // Remove unused component imports
    content = content.replace(/import\s*{\s*[^}]*}\s*from\s*['"]\.\.\/components\/[^'"]*['"];?\s*\n/g, '');
    
    // Remove unused variable declarations
    const lines = content.split('\n');
    const filteredLines = lines.filter(line => {
      // Remove lines that declare unused variables
      if (line.includes('const ') && line.includes(' = [')) {
        const varName = line.match(/const\s+(\w+)\s*=/)?.[1];
        if (varName && !content.includes(varName + '[') && !content.includes(varName + '.')) {
          return false;
        }
      }
      return true;
    });
    
    content = filteredLines.join('\n');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('All files fixed!');
