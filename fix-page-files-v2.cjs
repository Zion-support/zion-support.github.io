const fs = require('fs');
const path = require('path');

// List of files that need fixing
const filesToFix = [
  'app/ai-accounting-assistant/page.tsx',
  'app/ai-agricultural-intelligence-pro/page.tsx',
  'app/ai-analytics-dashboard-pro/page.tsx',
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
  'app/ai-code-assistant/page.tsx',
  'app/ai-database-solutions/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-project-manager-pro/page.tsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if file has the problematic pattern
    if (!content.includes('export default function Component() {')) {
      console.log(`File ${filePath} doesn't have the expected pattern, skipping`);
      return;
    }

    // Find the function declaration and the data definitions
    const lines = content.split('\n');
    let functionStartIndex = -1;
    let dataStartIndex = -1;
    let jsxStartIndex = -1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('export default function Component() {')) {
        functionStartIndex = i;
      }
      if (line.trim().startsWith('{') && functionStartIndex !== -1 && i > functionStartIndex) {
        dataStartIndex = i;
      }
      if (line.includes('return (') && dataStartIndex !== -1) {
        jsxStartIndex = i;
        break;
      }
    }

    if (functionStartIndex === -1 || dataStartIndex === -1 || jsxStartIndex === -1) {
      console.log(`Could not parse file structure for ${filePath}`);
      return;
    }

    // Extract the function name from the file path
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 2]; // Get the directory name
    const functionName = fileName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');

    // Extract imports
    const imports = lines.slice(0, functionStartIndex).join('\n');

    // Extract data definitions (between dataStartIndex and jsxStartIndex)
    const dataDefinitions = lines.slice(dataStartIndex, jsxStartIndex).join('\n');

    // Extract JSX return (from jsxStartIndex to end)
    const jsxReturn = lines.slice(jsxStartIndex).join('\n');

    // Create the fixed content
    const fixedContent = `${imports}

export default function ${functionName}() {
${dataDefinitions}

  ${jsxReturn}`;

    // Write the fixed content back
    fs.writeFileSync(fullPath, fixedContent, 'utf8');
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting to fix files...');
filesToFix.forEach(fixFile);
console.log('Done fixing files!');