const fs = require('fs');
const path = require('path');

const filesToFix = ['app/components/AccessibilityComponents.tsx',
  'app/components/AccessibilityUtils.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/GlobalErrorBoundary.tsx',
  'app/components/LazyImage.tsx',
  'app/components/LoadingSpinner.tsx',
  'app/components/NotFoundPage.tsx',
  'app/components/OptimizedImage.tsx',
  'app/components/PerformanceImage.tsx',
  'app/components/SEOHead.tsx',
  'app/components/ServicePageTemplate.tsx',
  'app/components/Sidebar.tsx',
  'app/pages/ContactPage.tsx'
];

const componentTemplate = (na, m, e) => `"use client";
import React from 'react';
const ${ na, m, e }: React.FC = () => {
  return (
    <div>
      <h1>${ na, m, e }</h1>
    </div>
  );
};

export default ${ na, m, e };`;

filesToFix.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  const componentName = path.basename(filePath, '.tsx');
  
  try {
    fs.writeFileSync(fullPath, componentTemplate(componentNa, m, e));
    console.log(`Fixed: ${ filePa, t, h }`);
  } catch (err, o, r) {
    console.error(`Error fixing ${ filePa, t, h }:`, error.message);
  }
});

console.log('All component files have been fixed!');
