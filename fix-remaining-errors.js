const fs = require('fs');
const path = require('path');

// Function to fix specific syntax patterns
function fixSpecificPatterns(content) {
  let fixed = content;
  
  // Fix malformed function declarations
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*;\s*/g, 'const $1: React.FC = () => {\n  ');
  
  // Fix malformed array declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*;\s*/g, 'const $1 = [\n    ');
  
  // Fix malformed object declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*\{/g, 'const $1 = [\n    {');
  
  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(const|let|var)\s+(\w+)\s*=\s*[^;]+(\n\s*const|\n\s*let|\n\s*var|\n\s*return|\n\s*})/g, (match, decl, varName, next) => {
    if (!match.includes(';')) {
      return match.replace(next, ';\n' + next);
    }
    return match;
  });
  
  // Fix malformed JSX return statements
  fixed = fixed.replace(/return\s*\(\s*\)\s*;/g, 'return (');
  fixed = fixed.replace(/return\s*\(\s*\)\s*<>/g, 'return (<>');
  
  // Fix missing closing brackets
  fixed = fixed.replace(/(\w+)\s*\]\s*(\w+)/g, '$1\n  ];\n  const $2');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/title=&quot;([^&]+)&quot;/g, 'title="$1"');
  fixed = fixed.replace(/description=&quot;([^&]+)&quot;/g, 'description="$1"');
  fixed = fixed.replace(/className=&quot;([^&]+)&quot;/g, 'className="$1"');
  fixed = fixed.replace(/href=&quot;([^&]+)&quot;/g, 'href="$1"');
  fixed = fixed.replace(/id=&quot;([^&]+)&quot;/g, 'id="$1"');
  
  // Fix malformed function parameters
  fixed = fixed.replace(/\(\{\s*children\s*\}\s*:\s*\{\s*children:\s*React\.ReactNode\s*\}\s*\)/g, '({ children }: { children: React.ReactNode })');
  
  // Fix missing semicolons after function calls
  fixed = fixed.replace(/(\w+)\s*\(\s*\)\s*(\n)/g, '$1();$2');
  
  // Fix malformed export statements
  fixed = fixed.replace(/export default (\w+)\s*$/g, 'export default $1;');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSpecificPatterns(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to process specific problematic files
function processProblematicFiles() {
  const problematicFiles = [
    '/workspace/src/ai-3d-generation/page.tsx',
    '/workspace/src/ai-analytics-dashboard/page.tsx',
    '/workspace/src/ai-automation/page.tsx',
    '/workspace/src/ai-content-generation/page.tsx',
    '/workspace/src/ai-crm/page.tsx',
    '/workspace/src/ai-customer-support/page.tsx',
    '/workspace/src/ai-customer-support-bot/page.tsx',
    '/workspace/src/ai-cybersecurity/page.tsx',
    '/workspace/src/ai-data-analytics/page.tsx',
    '/workspace/src/ai-data-visualization/page.tsx',
    '/workspace/src/ai-document-processing/page.tsx',
    '/workspace/src/ai-ecommerce-solutions/page.tsx',
    '/workspace/src/ai-email-marketing/page.tsx',
    '/workspace/src/ai-fashion-design/page.tsx',
    '/workspace/src/ai-financial-analyzer/page.tsx',
    '/workspace/src/ai-fintech/page.tsx',
    '/workspace/src/ai-fitness-coach/page.tsx',
    '/workspace/src/ai-healthcare/page.tsx',
    '/workspace/src/ai-lead-generation/page.tsx',
    '/workspace/src/ai-marketing/page.tsx',
    '/workspace/src/ai-mobile-app-development/page.tsx',
    '/workspace/src/ai-music-composition/page.tsx',
    '/workspace/src/ai-project-manager/page.tsx',
    '/workspace/src/ai-sales-automation/page.tsx',
    '/workspace/src/ai-scheduler/page.tsx',
    '/workspace/src/ai-seo-optimizer/page.tsx',
    '/workspace/src/ai-services/page.tsx',
    '/workspace/src/ai-social-media-manager/page.tsx',
    '/workspace/src/ai-video-generation/page.tsx',
    '/workspace/src/ai-voice-cloning/page.tsx',
    '/workspace/src/ai-workflow-automation/page.tsx',
    '/workspace/src/ai-writing-assistant/page.tsx'
  ];
  
  let processedCount = 0;
  
  for (const filePath of problematicFiles) {
    if (fs.existsSync(filePath)) {
      if (processFile(filePath)) {
        processedCount++;
      }
    }
  }
  
  return processedCount;
}

// Main execution
console.log('Starting targeted syntax error fixes...');
const processedCount = processProblematicFiles();
console.log(`Processed ${processedCount} problematic files with syntax fixes.`);