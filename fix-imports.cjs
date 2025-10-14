const fs = require('fs');
const path = require('path');

// Fix import statements that got corrupted
const filesToFix = [
  'app/ai-analytics/page.tsx',
  'app/ai-services/page.tsx',
  'app/blog/ai-enterprise-transformation-2025/page.tsx',
  'app/components/AdvancedErrorBoundary.tsx',
  'app/components/Contact.tsx',
  'app/components/ContentNewsletterSignup.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/GlobalErrorBoundary.tsx',
  'app/components/Services.tsx',
  'app/zion-security-shield/page.tsx'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix import statements - replace &apos; with single quotes in import statements
    content = content.replace(/import\s+([^&]+)&apos;([^&]+)&apos;/g, "import $1'$2'");
    content = content.replace(/from\s+&apos;([^&]+)&apos;/g, "from '$1'");
    
    // Fix any remaining &apos; in import statements
    content = content.replace(/&apos;/g, "'");
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed imports in ${filePath}`);
  }
});

console.log('Import fixes completed!');