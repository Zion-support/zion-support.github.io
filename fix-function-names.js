const fs = require('fs');
const path = require('path');

// List of files that need function name fixes
const filesToFix = [
  'app/case-studies/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/digital-transformation/page.tsx',
  'app/it-services/page.tsx',
  'app/it-solutions/page.tsx',
  'app/privacy/page.tsx',
  'app/services/page.tsx',
  'app/solutions/page.tsx',
  'app/team/page.tsx',
  'app/terms/page.tsx'
];

// Function to convert kebab-case to PascalCase
function kebabToPascalCase(str) {
  return str.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
}

// Fix function names in files
filesToFix.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  
  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Extract the page name from the path
    const pageName = filePath.split('/')[1];
    const functionName = kebabToPascalCase(pageName);
    
    // Replace the function name
    content = content.replace(
      /export default function [^(]+\(/,
      `export default function ${functionName}(`
    );
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Fixed function name in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

// Fix SEOOptimizer component
const seoOptimizerContent = `import React from 'react';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords?: string | string[];
  ogImage?: string;
  className?: string;
}

export default function SEOOptimizer({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  className 
}: SEOOptimizerProps) {
  return (
    <div className={className}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && (
        <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />
      )}
      {ogImage && <meta property="og:image" content={ogImage} />}
    </div>
  );
}`;

try {
  fs.writeFileSync('/workspace/app/components/SEOOptimizer.tsx', seoOptimizerContent, 'utf8');
  console.log('Fixed: app/components/SEOOptimizer.tsx');
} catch (error) {
  console.error('Error fixing SEOOptimizer:', error.message);
}

console.log('All function names fixed!');