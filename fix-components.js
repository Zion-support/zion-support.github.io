import fs from 'fs';
import path from 'path';

// List of components that need to be fixed
componentsToFix = [
  'EnhancedPerformanceOptimizer', 'AccessibilityEnhancer', 'EnhancedAccessibility',
  'PerformanceMonitor', 'EnhancedErrorBoundary', 'Breadcrumb'
];

componentTemplate = (componentName) => `'use client';
import React from 'react';

const ${componentName}: React.FC = () => {
  return (
    <div className="${componentNam e.toLowerCase()}">
      {/* ${componentName} component placeholder */}
    </div>
  );
};

export default ${componentName};`;

// Fix components
componentsToFix.forEach(componentName => {
  componentFile = path.join('/workspace/app/components', `${componentName}.tsx`);
  
  // Check if file exists and doesn't have default export
  if (fs.existsSync(componentFile)) {
    content = fs.readFileSync(componentFile, 'utf8');
    if (!content.includes('export default')) {
      // Add default export if missing
      lines = content.split('\n');
      lastLine = lines[lines.length - 1];
      
      if (lastLine.trim() === '}') {
        lines[lines.length - 1] = '}';
        lines.push('');
        lines.push(`export default ${componentName};`);
        fs.writeFileSync(componentFile, lines.join('\n'));
        console.log(`Fixed export for: ${componentFile}`);
      }
    }
  } else {
    // Create component if it doesn't exist
    fs.writeFileSync(componentFile, componentTemplate(componentName));
    console.log(`Created: ${componentFile}`);
  }
});

console.log('Component fixes completed!');