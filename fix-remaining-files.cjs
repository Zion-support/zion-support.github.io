const fs = require('fs');
const path = require('path');

// List of files that still have issues based on the type check output
const filesToFix = [
  'app/ai-accounting-assistant/page.tsx',
  'app/ai-agricultural-intelligence-pro/page.tsx',
  'app/ai-api-management/page.tsx',
  'app/ai-api-manager/page.tsx',
  'app/ai-automated-reporting/page.tsx',
  'app/ai-automated-testing/page.tsx',
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-business-intelligence-pro/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-chatbot-enterprise/page.tsx',
  'app/ai-climate-prediction-engine/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx',
  'app/ai-project-management-pro/page.tsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if file has the problematic pattern - object definition without const
    if (!content.includes('export default function') || !content.match(/\s*\{\s*$/m)) {
      console.log(`File ${filePath} doesn't have the expected pattern, skipping`);
      return;
    }

    // Find the function declaration and fix the structure
    const lines = content.split('\n');
    let functionStartIndex = -1;
    let objectStartIndex = -1;
    let objectEndIndex = -1;
    let returnIndex = -1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('export default function')) {
        functionStartIndex = i;
      }
      if (line.trim().startsWith('{') && functionStartIndex !== -1 && i > functionStartIndex) {
        objectStartIndex = i;
      }
      if (objectStartIndex !== -1 && line.trim().endsWith('}') && !line.trim().endsWith('},')) {
        objectEndIndex = i;
      }
      if (line.includes('return (') && objectEndIndex !== -1) {
        returnIndex = i;
        break;
      }
    }

    if (functionStartIndex === -1 || objectStartIndex === -1 || objectEndIndex === -1 || returnIndex === -1) {
      console.log(`Could not parse file structure for ${filePath}`);
      return;
    }

    // Extract function name
    const functionLine = lines[functionStartIndex];
    const functionName = functionLine.match(/export default function (\w+)/)?.[1] || 'Component';

    // Extract imports
    const imports = lines.slice(0, functionStartIndex).join('\n');

    // Extract object definition
    const objectLines = lines.slice(objectStartIndex, objectEndIndex + 1);
    const objectContent = objectLines.join('\n');

    // Determine what type of data this is based on the object structure
    let dataName = 'data';
    if (objectContent.includes('name:') && objectContent.includes('company:')) {
      dataName = 'testimonials';
    } else if (objectContent.includes('title:') && objectContent.includes('description:')) {
      dataName = 'features';
    } else if (objectContent.includes('price:') && objectContent.includes('period:')) {
      dataName = 'pricingPlans';
    }

    // Extract JSX return (from returnIndex to end)
    const jsxReturn = lines.slice(returnIndex).join('\n');

    // Create the fixed content
    const fixedContent = `${imports}

export default function ${functionName}() {
  const ${dataName} = [
    ${objectContent}
  ];

  ${jsxReturn}`;

    // Write the fixed content back
    fs.writeFileSync(fullPath, fixedContent, 'utf8');
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting to fix remaining files...');
filesToFix.forEach(fixFile);
console.log('Done fixing files!');