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
    
    // Fix duplicate function declarations
    content = content.replace(/export default function PageTsxPage\(\) \{[^}]*\}\s*export default function/g, 'export default function');
    
    // Fix malformed JSX - remove incomplete div tags and fix structure
    content = content.replace(/<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">[\s\S]*?<\/div>\s*export default function/g, 'export default function');
    
    // Fix missing closing tags by ensuring proper JSX structure
    content = content.replace(/(<div[^>]*>)([\s\S]*?)(?=\s*export default function)/g, (match, openTag, content) => {
      // Count opening and closing div tags
      const openDivs = (content.match(/<div/g) || []).length;
      const closeDivs = (content.match(/<\/div>/g) || []).length;
      const missingDivs = openDivs - closeDivs;
      
      let fixedContent = content;
      for (let i = 0; i < missingDivs; i++) {
        fixedContent += '\n      </div>';
      }
      
      return openTag + fixedContent;
    });
    
    // Fix specific syntax errors
    content = content.replace(/,\s*\)/g, ')');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+):\s*([^,}\n]+)\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix malformed arrow functions
    content = content.replace(/=>\s*\{[\s\S]*?\n\s*\}\s*\)/g, (match) => {
      return match.replace(/\n\s*\)/g, '\n  )');
    });
    
    // Ensure proper closing of JSX elements
    content = content.replace(/(<div[^>]*>)([\s\S]*?)(?=\s*<\/div>\s*$)/g, (match, openTag, content) => {
      const lines = content.split('\n');
      let fixedLines = [];
      let divCount = 0;
      
      for (let line of lines) {
        if (line.includes('<div')) {
          divCount++;
        }
        if (line.includes('</div>')) {
          divCount--;
        }
        fixedLines.push(line);
      }
      
      // Add missing closing divs
      for (let i = 0; i < divCount; i++) {
        fixedLines.push('      </div>');
      }
      
      return openTag + fixedLines.join('\n');
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('Syntax error fixes completed!');