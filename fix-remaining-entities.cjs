const fs = require('fs');
const path = require('path');

// Files with remaining unescaped entities
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
    
    // Only replace apostrophes in JSX content, not in import statements
    // Look for apostrophes that are not in import statements or already escaped
    content = content.replace(/(?<!import\s+[^']*)(?<!from\s+[^']*)(?<!&)(?<!&#)(?<!&apos;)(?<!&lsquo;)(?<!&rsquo;)(?<!&quot;)(?<!&lt;)(?<!&gt;)'/g, '&apos;');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed remaining entities in ${filePath}`);
  }
});

console.log('Remaining entity fixes completed!');