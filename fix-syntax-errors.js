import fs from 'fs';
import path from 'path';

// List of files that need fixing based on the error patterns
const filesToFix = [
  'app/ad-management/page.tsx',
  'app/ai-3d-generation/page.tsx',
  'app/ai-analytics/page.tsx',
  'app/ai-automation-suite/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-content-creation/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-content-writer/page.tsx',
  'app/ai-customer-support-chatbot/page.tsx',
  'app/ai-customer-support/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-data-mining-pro/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-document-processor/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-education-platform/page.tsx',
  'app/ai-financial-analysis/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common patterns
    content = content
      // Remove git branch names
      .replace(/ursor\/fix-errors-and-merge-to-main-[a-f0-9]+/g, '')
      // Fix semicolons after JSX elements
      .replace(/;\s*$/gm, '')
      // Fix malformed closing syntax
      .replace(/\);}\s*}\s*'$/gm, ');\n}')
      // Fix malformed JSX fragments
      .replace(/<>\s*$/gm, '<>')
      .replace(/<\/>\s*$/gm, '</>')
      // Fix unterminated strings
      .replace(/';\s*$/gm, '')
      // Fix malformed object syntax
      .replace(/{\s*'$/gm, '{')
      .replace(/}\s*'$/gm, '}')
      // Fix malformed closing tags
      .replace(/<\/div>\s*$/gm, '</div>')
      // Fix malformed function returns
      .replace(/return\s*\(\s*'$/gm, 'return (')
      // Fix malformed JSX attributes
      .replace(/className="[^"]*;\s*$/gm, (match) => match.replace(/;\s*$/, ''))
      // Fix malformed closing brackets
      .replace(/}\s*'$/gm, '}')
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .trim();
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath);
  }
});

console.log('Syntax error fixes completed!');