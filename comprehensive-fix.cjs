const fs = require('fs');
const path = require('path');

// List of files with syntax errors
const filesToFix = [
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-mobile-app-builder/page.tsx',
  'app/ai-mobile-builder/page.tsx',
  'app/ai-website-builder/page.tsx',
  'app/cloud-infrastructure-management/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/landing-page-builder/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/pricing/page.tsx',
  'app/quantum-data-encryption-vault/page.tsx',
  'app/zion-ai-analytics-pro/page.tsx',
  'app/zion-ai-crm-pro/page.tsx',
  'app/zion-ai-customer-churn-predictor-pro/page.tsx',
  'app/zion-ai-email-marketing-pro/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-inventory-optimizer-pro/page.tsx',
  'app/zion-ai-survey-builder/page.tsx',
  'app/components/ImageOptimizer.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the correct function name from the file path
    const fileName = path.basename(filePath, '.tsx');
    const functionName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    
    // Remove the malformed first function declaration
    content = content.replace(/export default function PageTsxPage\(\) \{\s*return\s*\(\s*export default function/g, 'export default function');
    
    // Fix the malformed structure where function declaration is inside return statement
    content = content.replace(/return\s*\(\s*export default function/g, 'return (');
    
    // Fix missing closing tags and malformed JSX
    const lines = content.split('\n');
    let fixedLines = [];
    let inJSX = false;
    let divCount = 0;
    let braceCount = 0;
    let inFunction = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Track function start
      if (line.includes('export default function') && !inFunction) {
        inFunction = true;
        fixedLines.push(line);
        continue;
      }
      
      // Track JSX start
      if (line.includes('return (') && inFunction) {
        inJSX = true;
        fixedLines.push(line);
        continue;
      }
      
      // Track div tags
      if (inJSX) {
        if (line.includes('<div')) {
          divCount++;
        }
        if (line.includes('</div>')) {
          divCount--;
        }
        
        // Track braces
        if (line.includes('{')) {
          braceCount++;
        }
        if (line.includes('}')) {
          braceCount--;
        }
        
        fixedLines.push(line);
        
        // Check if we're at the end of the function
        if (line.includes(');') && braceCount === 0 && divCount === 0) {
          inJSX = false;
          inFunction = false;
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    // Add missing closing divs and braces
    while (divCount > 0) {
      fixedLines.push('      </div>');
      divCount--;
    }
    
    // Ensure proper function closing
    if (inFunction && !fixedLines[fixedLines.length - 1].includes('}')) {
      fixedLines.push('}');
    }
    
    content = fixedLines.join('\n');
    
    // Clean up any remaining syntax issues
    content = content.replace(/,\s*\)/g, ')');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+):\s*([^,}\n]+)\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('Comprehensive syntax error fixes completed!');