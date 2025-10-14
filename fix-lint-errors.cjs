const fs = require('fs');
const path = require('path');

// Files with unescaped entities that need fixing
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

// Fix unescaped entities
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace unescaped apostrophes with &apos;
    content = content.replace(/(?<!&)(?<!&#)(?<!&apos;)(?<!&lsquo;)(?<!&rsquo;)'/g, '&apos;');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed unescaped entities in ${filePath}`);
  }
});

// Remove unused imports from specific files
const unusedImportsToRemove = {
  'app/ai-analytics/page.tsx': ['Star'],
  'app/ai-healthcare-diagnostics/page.tsx': ['Star'],
  'app/ai-services/page.tsx': ['Star'],
  'app/blog/ai-enterprise-transformation-2025/page.tsx': ['Star'],
  'app/blog/ai-innovation-labs-product-development-2025/page.tsx': ['Star'],
  'app/cloud-infrastructure/page.tsx': ['Star'],
  'app/components/About.tsx': ['Users'],
  'app/components/AdvancedErrorBoundary.tsx': ['Logger'],
  'app/components/Contact.tsx': ['Clock', 'Phone', 'MapPin'],
  'app/components/Footer.tsx': ['Database'],
  'app/components/Header.tsx': ['Star'],
  'app/components/Hero.tsx': ['ArrowRight', 'Play', 'Star'],
  'app/components/ImprovedSidebar.tsx': ['Shield', 'ArrowRight', 'Globe', 'Database', 'Phone', 'Cpu'],
  'app/components/Sidebar.tsx': ['Shield', 'ArrowRight', 'Globe', 'Database', 'Phone', 'Cpu'],
  'app/components/Services.tsx': ['Shield'],
  'app/guides/page.tsx': ['Star'],
  'app/marketing-tools/page.tsx': ['Star'],
  'app/services/page.tsx': ['Shield', 'ArrowRight', 'Star', 'Cpu'],
  'app/web-development/page.tsx': ['ArrowRight', 'Globe', 'Database', 'Star', 'Phone'],
  'app/zion-security-shield/page.tsx': ['Star']
};

Object.entries(unusedImportsToRemove).forEach(([filePath, importsToRemove]) => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove unused imports
    importsToRemove.forEach(importName => {
      // Remove from import statements
      const importRegex = new RegExp(`\\b${importName}\\s*,?\\s*`, 'g');
      content = content.replace(importRegex, '');
      
      // Clean up empty import statements
      content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
      content = content.replace(/import\s*{\s*,\s*}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
    });
    
    fs.writeFileSync(fullPath, content);
    console.log(`Removed unused imports from ${filePath}`);
  }
});

console.log('Lint error fixes completed!');