import fs from 'fs';
import path from 'path';

function fixSpecificErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing brace in features array
    content = content.replace(/(\w+):\s*\[([^\]]*)\]\s*\n\s*]/g, (match, key, value) => {
      if (!value.includes('}')) {
        return `${key}: [${value}\n  }];`;
      }
      return match;
    });

    // Fix missing commas in array elements
    content = content.replace(/(\w+)\s*\n\s*]/g, '$1\n  ]');

    // Fix missing semicolons after const declarations
    content = content.replace(/(const\s+\w+\s*=\s*\[[^\]]*\])\s*\n\s*(const|return)/g, '$1;\n\n  $2');

    // Fix malformed object properties
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');

    // Fix missing closing braces in objects
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*]/g, '$1: $2\n  }];');

    // Fix extra semicolons in arrays
    content = content.replace(/(\w+),;\s*\n/g, '$1,\n');

    // Fix missing closing braces before return statements
    content = content.replace(/(\w+)\s*\n\s*return\s*\(/g, '$1\n  };\n\n  return (');

    // Fix malformed JSX fragments
    content = content.replace(/<>\s*<\/>/g, '<></>');

    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed specific errors in: ${filePath}`);
      modified = true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// List of files with specific errors
const filesToFix = [
  '/workspace/app/ai-3d-generation/page.tsx',
  '/workspace/app/ai-agricultural-intelligence-pro/page.tsx',
  '/workspace/app/ai-analytics-dashboard/page.tsx',
  '/workspace/app/ai-analytics/page.tsx',
  '/workspace/app/ai-api-management/page.tsx',
  '/workspace/app/ai-api-manager/page.tsx',
  '/workspace/app/ai-automation/page.tsx',
  '/workspace/app/ai-autonomous-systems/page.tsx',
  '/workspace/app/ai-blockchain-analytics/page.tsx',
  '/workspace/app/ai-blockchain-solutions/page.tsx',
  '/workspace/app/ai-business-intelligence/page.tsx',
  '/workspace/app/ai-chatbot-builder/page.tsx',
  '/workspace/app/ai-climate-solutions-pro/page.tsx',
  '/workspace/app/ai-cloud-infrastructure/page.tsx',
  '/workspace/app/ai-code-assistant/page.tsx',
  '/workspace/app/ai-code-generation/page.tsx',
  '/workspace/app/ai-code-security-auditor/page.tsx',
  '/workspace/app/ai-computer-vision/page.tsx',
  '/workspace/app/ai-content-delivery-network/page.tsx',
  '/workspace/app/ai-content-generation/page.tsx',
  '/workspace/app/ai-content-studio/page.tsx',
  '/workspace/app/ai-crm-assistant/page.tsx',
  '/workspace/app/ai-crm/page.tsx',
  '/workspace/app/ai-customer-service/page.tsx',
  '/workspace/app/ai-customer-support-bot/page.tsx',
  '/workspace/app/ai-customer-support-chatbot/page.tsx'
];

console.log(`Fixing ${filesToFix.length} files with specific errors`);

filesToFix.forEach(fixSpecificErrors);

console.log('Specific error fixing completed!');