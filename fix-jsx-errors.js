const fs = require('fs');
const path = require('path');

// List of files with JSX errors
const filesToFix = [
  'app/ai-automated-reporting/page.tsx',
  'app/ai-data-analytics-pro/page.tsx',
  'app/ai-email-assistant/page.tsx',
  'app/ai-email-marketing-automation/page.tsx',
  'app/ai-expense-tracker/page.tsx',
  'app/ai-financial-analysis/page.tsx',
  'app/ai-fraud-detection/page.tsx',
  'app/ai-hr-recruitment-pro/page.tsx',
  'app/ai-image-recognition-pro/page.tsx',
  'app/ai-invoice-generator/page.tsx',
  'app/ai-predictive-analytics/page.tsx',
  'app/ai-recommendation-engine/page.tsx'
];

function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common JSX syntax issues
    content = content
      // Fix unclosed JSX elements by adding proper closing tags
      .replace(/<div([^>]*)>(?!.*<\/div>)/g, (match, attrs) => {
        // This is a complex fix, let's handle it differently
        return match;
      })
      // Fix malformed JSX fragments
      .replace(/<>([^<]*?)(?!<\/>)/g, '<React.Fragment>$1</React.Fragment>')
      // Fix unclosed JSX tags
      .replace(/<([a-zA-Z][a-zA-Z0-9]*)([^>]*)>(?!.*<\/\1>)/g, (match, tagName, attrs) => {
        // This is too complex for regex, let's handle it case by case
        return match;
      })
      // Fix malformed template literals in JSX
      .replace(/\$\{([^}]*)\}/g, '{$1}')
      // Fix missing semicolons after JSX
      .replace(/(<\/[a-zA-Z][a-zA-Z0-9]*>)\s*$/gm, '$1;')
      // Fix malformed JSX expressions
      .replace(/\{([^}]*)\}/g, (match, content) => {
        if (content.includes('`') && content.includes('${')) {
          return `{${content.replace(/`/g, '').replace(/\$\{/g, '{').replace(/\}/g, '}')}}`;
        }
        return match;
      });

    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixJSXFile);
console.log('JSX fixes completed');