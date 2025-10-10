import fs from 'fs';
import path from 'path';

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common syntax errors
    const fixes = [
      // Fix missing commas in object properties
      {
        pattern: /(\w+):\s*(\w+)\s*\n\s*(\w+):/g,
        replacement: '$1: $2,\n    $3:'
      },
      // Fix missing closing braces in objects
      {
        pattern: /(\w+):\s*(\w+)\s*\n\s*];/g,
        replacement: '$1: $2\n  }];'
      },
      // Fix malformed JSX fragments
      {
        pattern: /<>\s*<\/>/g,
        replacement: '<></>'
      },
      // Fix missing semicolons after variable declarations
      {
        pattern: /(\w+)\s*=\s*\[([^\]]*)\]\s*\n\s*const/g,
        replacement: '$1 = [$2];\n\n  const'
      },
      // Fix missing closing tags
      {
        pattern: /<meta([^>]*)>\s*$/gm,
        replacement: '<meta$1 />'
      },
      // Fix malformed function declarations
      {
        pattern: /const\s+(\w+)\s*=\s*\(\)\s*=>\s*{\s*$/gm,
        replacement: 'const $1 = () => {\n  '
      },
      // Fix missing return statements
      {
        pattern: /}\s*;\s*$/gm,
        replacement: '};\n'
      }
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Additional specific fixes for common patterns
    // Fix missing commas in arrays
    content = content.replace(/(\w+)\s*\n\s*]/g, '$1\n  ]');
    
    // Fix missing closing braces
    content = content.replace(/(\w+)\s*\n\s*const/g, '$1\n  };\n\n  const');
    
    // Fix malformed JSX
    content = content.replace(/<(\w+)([^>]*)>\s*$/gm, '<$1$2 />');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function findFilesWithSyntaxErrors(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        // Check for common syntax error patterns
        if (content.includes('Parsing error') || 
            content.includes('Declaration or statement expected') ||
            content.includes('Identifier expected') ||
            content.includes('JSX element') ||
            content.includes('Expected') ||
            content.includes('missing') ||
            content.includes('unterminated')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find and fix all files with syntax errors
const errorFiles = findFilesWithSyntaxErrors('/workspace/app');
console.log(`Found ${errorFiles.length} files with potential syntax errors`);

// Also check specific files that were mentioned in the lint output
const specificFiles = [
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

const allFiles = [...new Set([...errorFiles, ...specificFiles])];
console.log(`Processing ${allFiles.length} files`);

allFiles.forEach(fixSyntaxErrors);

console.log('Syntax error fixing completed!');