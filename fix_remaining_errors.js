const fs = require('fs');
const path = require('path');

// Function to fix specific syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix missing semicolons after import statements
    content = content.replace(/import ([^;]+)\n/g, (match, importStatement) => {
      if (!importStatement.includes(';')) {
        return `import ${importStatement};\n`;
      }
      return match;
    });
    
    // Fix missing semicolons after variable declarations
    content = content.replace(/(const|let|var)\s+([^=]+)=([^;]+)\n/g, '$1 $2=$3;\n');
    
    // Fix unterminated string literals
    content = content.replace(/'([^']*)\n/g, "'$1'\n");
    content = content.replace(/"([^"]*)\n/g, '"$1"\n');
    
    // Fix missing brackets in arrays
    content = content.replace(/\[([^\]]*)\n/g, '[$1]\n');
    
    // Fix missing commas in object properties
    content = content.replace(/([^,}])\n\s*}/g, '$1,\n}');
    
    // Fix specific patterns that are causing issues
    content = content.replace(/className = '([^']*)\n/g, "className='$1'\n");
    content = content.replace(/title = '([^']*)\n/g, "title='$1'\n");
    content = content.replace(/description = '([^']*)\n/g, "description='$1'\n");
    
    // Fix malformed JSX
    content = content.replace(/<([^>]*)\n/g, '<$1>\n');
    
    // Only write if content changed
    if (content !== originalContent) {
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

// List of files with remaining errors
const filesToFix = [
  './src/ai-analytics-dashboard/page.tsx',
  './src/ai-content-generation/page.tsx',
  './src/ai-crm/page.tsx',
  './src/ai-customer-support/page.tsx',
  './src/ai-cybersecurity/page.tsx',
  './src/ai-data-visualization/page.tsx',
  './src/ai-document-processing/page.tsx',
  './src/ai-fashion-design/page.tsx',
  './src/ai-fitness-coach/page.tsx',
  './src/ai-healthcare/page.tsx',
  './src/ai-lead-generation/page.tsx',
  './src/ai-marketing/page.tsx',
  './src/ai-music-composition/page.tsx',
  './src/ai-project-manager/page.tsx',
  './src/ai-sales-automation/page.tsx',
  './src/ai-scheduler/page.tsx',
  './src/ai-services/page.tsx',
  './src/ai-social-media-manager/page.tsx',
  './src/ai-video-generation/page.tsx',
  './src/ai-voice-cloning/page.tsx',
  './src/ai-workflow-automation/page.tsx',
  './src/api-docs/page.tsx',
  './src/autonomous-systems/page.tsx',
  './src/business-intelligence/page.tsx',
  './src/cloud-services/page.tsx',
  './src/compliance/page.tsx',
  './src/components/AdvancedSEOOptimizer.tsx',
  './src/components/ContentNewsletterSignup.tsx',
  './src/components/Footer.tsx',
  './src/components/PWAInstaller.tsx',
  './src/components/SEO.tsx',
  './src/components/SEOHead.tsx',
  './src/consultation/page.tsx',
  './src/contact/page.tsx',
  './src/demo/page.tsx',
  './src/devops/page.tsx',
  './src/expense-tracker/page.tsx',
  './src/it-services/page.tsx',
  './src/machine-learning/page.tsx',
  './src/micro-saas/page-original.tsx',
  './src/micro-saas/page.tsx',
  './src/page-optimized.tsx',
  './src/pricing/page.tsx',
  './src/quantum-computing/page.tsx',
  './src/setupTests.tsx',
  './src/sitemap-page.tsx',
  './src/smart-analytics/page.tsx',
  './src/task-manager-pro/page.tsx'
];

console.log('Starting to fix remaining syntax errors...');
let fixedCount = 0;

for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} files.`);