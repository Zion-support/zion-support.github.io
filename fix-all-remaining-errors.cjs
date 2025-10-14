const fs = require('fs');
const path = require('path');

// List of specific files to fix based on the error output
const filesToFix = [
  'app/components/AdvancedErrorBoundary.tsx',
  'app/components/ComprehensiveErrorBoundary.tsx',
  'app/components/EnhancedErrorBoundary.tsx',
  'app/components/EnhancedErrorFeedback.tsx',
  'app/components/EnhancedSEO.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/ErrorFallback.tsx',
  'app/components/ErrorHandler.tsx',
  'app/components/GlobalErrorBoundary.tsx',
  'app/components/ImprovedErrorBoundary.tsx',
  'app/components/Loading.tsx',
  'app/components/LoadingSpinner.tsx',
  'app/components/ProductionErrorBoundary.tsx',
  'app/components/ServiceWorkerRegistration.tsx',
  'app/error.tsx',
  'app/global-error.tsx',
  'app/pages/AIServicesPage.tsx',
  'app/pages/AboutPage.tsx',
  'app/pages/CareersPage.tsx',
  'app/pages/CaseStudiesPage.tsx',
  'app/pages/CloudInfrastructurePage.tsx',
  'app/pages/DigitalTransformationPage.tsx',
  'app/pages/ITServicesPage.tsx'
];

// Fix unused imports in a file
const fixUnusedImports = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const updatedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip empty import statements
      if (line.trim() === 'import {} from' || line.includes('import {} from')) {
        continue;
      }
      
      // Check for unused Suspense import
      if (line.includes('import') && line.includes('Suspense') && !content.includes('<Suspense')) {
        const importMatch = line.match(/import\s*{([^}]+)}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const filteredImports = imports.filter(imp => imp !== 'Suspense');
          if (filteredImports.length === 0) {
            continue; // Skip this line entirely
          } else {
            const newLine = line.replace(/import\s*{[^}]+}\s*from/, `import { ${filteredImports.join(', ')} } from`);
            updatedLines.push(newLine);
            continue;
          }
        }
        continue; // Skip the line
      }
      
      // Check for unused React import (if no JSX)
      if (line.includes('import React') && !content.includes('<') && !content.includes('React.')) {
        continue; // Skip this line
      }
      
      // Check for other unused imports
      if (line.includes('import') && line.includes('{')) {
        const importMatch = line.match(/import\s*{([^}]+)}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => {
            const importName = imp.split(' as ')[0].trim();
            // Check if the import is used in the file (excluding the import line itself)
            const contentWithoutImports = content.split('\n').filter(l => !l.includes('import')).join('\n');
            return contentWithoutImports.includes(importName);
          });
          
          if (usedImports.length === 0) {
            continue; // Skip this line entirely
          } else if (usedImports.length !== imports.length) {
            const newLine = line.replace(/import\s*{[^}]+}\s*from/, `import { ${usedImports.join(', ')} } from`);
            updatedLines.push(newLine);
            continue;
          }
        }
      }
      
      updatedLines.push(line);
    }
    
    const updatedContent = updatedLines.join('\n');
    if (updatedContent !== content) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing file ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  console.log('Fixing unused imports in specific files...');
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of filesToFix) {
    if (fixUnusedImports(file)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
  console.log(`Errors: ${errorCount} files`);
  console.log('Done!');
};

main();