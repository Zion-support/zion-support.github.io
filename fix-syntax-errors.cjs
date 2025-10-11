const fs = require('fs');
const path = require('path');

// List of files with syntax errors
const filesToFix = [
  '/workspace/app/it-training/page.tsx',
  '/workspace/app/specialized-services/page.tsx',
  '/workspace/app/ai-sentiment-analyzer/page.tsx',
  '/workspace/app/mobile-development/page.tsx',
  '/workspace/app/ai-telepathic-interface/page.tsx',
  '/workspace/app/ai-smart-calendar/page.tsx',
  '/workspace/app/iot-development/page.tsx',
  '/workspace/app/ai-transportation/page.tsx',
  '/workspace/app/ai-workflow-automation/page.tsx',
  '/workspace/app/database-management/page.tsx',
  '/workspace/app/ai-climate-solutions-pro/page.tsx',
  '/workspace/app/ai-fashion-design/page.tsx',
  '/workspace/app/ai-autonomous-systems/page.tsx',
  '/workspace/app/ai-email-assistant/page.tsx',
  '/workspace/app/ai-invoice-generator/page.tsx',
  '/workspace/app/ai-music-composition/page.tsx',
  '/workspace/app/ai-security-monitor/page.tsx',
  '/workspace/app/ai-manufacturing/page.tsx',
  '/workspace/app/cloud-migration-advanced/page.tsx',
  '/workspace/app/ai-space-mission-optimizer/page.tsx',
  '/workspace/app/ai-content-delivery-network/page.tsx',
  '/workspace/app/ai-ecommerce-solutions/page.tsx',
  '/workspace/app/ai-edge-computing/page.tsx',
  '/workspace/app/ai-voice-assistant/page.tsx',
  '/workspace/app/project-management-pro/page.tsx',
  '/workspace/app/ai-sentiment-analysis/page.tsx',
  '/workspace/app/ai-customer-support-chatbot/page.tsx',
  '/workspace/app/ai-ml/page.tsx',
  '/workspace/app/ai-document-processing/page.tsx',
  '/workspace/app/ai-accounting-assistant/page.tsx',
  '/workspace/app/ai-agricultural-intelligence-pro/page.tsx',
  '/workspace/app/ai-analytics-dashboard/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the main syntax error: ico, n: -> icon:
    content = content.replace(/ico,\s*n:/g, 'icon:');
    
    // Fix other common syntax errors
    content = content.replace(/\}\s*,/g, '},');
    content = content.replace(/\}\s*\)/g, '})');
    content = content.replace(/\}\s*\]/g, '}]');
    
    // Fix JSX syntax errors
    content = content.replace(/<([^>]+)\s*$/gm, '<$1>');
    content = content.replace(/\s*>\s*$/gm, '>');
    
    // Fix missing closing tags and fragments
    content = content.replace(/<([^>]+)\s*$/gm, '<$1>');
    
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*([^}]+)\s*$/gm, '{$1}');
    
    // Fix missing semicolons and commas
    content = content.replace(/([^;}])\s*$/gm, '$1;');
    
    // Fix specific patterns that cause issues
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*\{/g, 'const $1 = () => {');
    content = content.replace(/return\s*\(\s*$/gm, 'return (');
    content = content.replace(/\s*\)\s*;\s*$/gm, ');');
    
    // Fix array and object syntax
    content = content.replace(/\[\s*$/gm, '[');
    content = content.replace(/\{\s*$/gm, '{');
    content = content.replace(/\}\s*\]/g, '}]');
    content = content.replace(/\}\s*\)/g, '})');
    
    // Fix JSX closing tags
    content = content.replace(/<\/\s*$/gm, '</');
    content = content.replace(/<\s*$/gm, '<');
    
    // Fix specific malformed patterns
    content = content.replace(/,\s*$/gm, ',');
    content = content.replace(/;\s*$/gm, ';');
    
    // Fix missing closing parentheses and braces
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openParens > closeParens) {
      content += ')'.repeat(openParens - closeParens);
    }
    if (openBraces > closeBraces) {
      content += '}'.repeat(openBraces - closeBraces);
    }
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('Syntax error fixing completed!');