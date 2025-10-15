import fs from 'fs';
import path from 'path';

// List of files with syntax errors
const filesToFix = [
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-business-intelligence-pro/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-chatbot-enterprise/page.tsx',
  'app/ai-climate-prediction-engine/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx',
  'app/ai-code-assistant/page.tsx',
  'app/ai-content-generation-pro/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-customer-support-pro/page.tsx',
  'app/ai-cybersecurity-platform/page.tsx',
  'app/ai-database-solutions/page.tsx',
  'app/ai-ecommerce-platform/page.tsx',
  'app/ai-financial-platform/page.tsx',
  'app/ai-healthcare-platform/page.tsx',
  'app/ai-iot-management-pro/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-social-media-manager-pro/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the pattern where there's a function declaration followed by an object literal
    // Pattern: export default function SomeFunction() {\n    {\n
    const pattern = /(export default function \w+\(\) \{\s*)\n\s*\{\s*\n/;
    const replacement = '$1\n  const features = [\n    {\n';
    
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      
      // Find the closing of the features array and add the closing bracket
      const featuresEndPattern = /(\s*\}\s*)\n\s*const pricingPlans/;
      if (featuresEndPattern.test(content)) {
        content = content.replace(featuresEndPattern, '$1\n  ];\n\n  const pricingPlans');
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all files
let fixedCount = 0;
filesToFix.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} out of ${filesToFix.length} files`);