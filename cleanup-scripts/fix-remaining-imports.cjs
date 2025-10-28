const fs = require('fs');
const path = require('path');

// Files that need Navigation and Footer imports added
const filesToFix = [
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx',
  'app/5g-mobile-applications/page.tsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if Navigation import is already present
    if (content.includes('import Navigation')) {
      console.log(`Skipping ${filePath} - Navigation import already present`);
      return;
    }
    
    // Find the first import statement
    const importMatch = content.match(/^import .+ from .+;$/m);
    if (!importMatch) {
      console.log(`Skipping ${filePath} - no imports found`);
      return;
    }
    
    const insertIndex = importMatch.index + importMatch[0].length;
    
    // Determine the correct import path based on file location
    const depth = filePath.split('/').length - 2; // -2 for 'app' and filename
    const importPath = '../'.repeat(depth) + 'components';
    
    // Add imports after the last import
    const imports = `
import Navigation from '${importPath}/Navigation';
import Footer from '${importPath}/Footer';`;
    
    // Insert imports after the last import
    content = content.slice(0, insertIndex) + imports + content.slice(insertIndex);
    
    // Fix function declarations to be default exports
    content = content.replace(/^function \w+Page\(\) \{/gm, 'export default function Page() {');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Fixing remaining files with missing imports...');
filesToFix.forEach(fixFile);

console.log('Done!');