#!/usr/bin/env node

import fs from 'fs';

const criticalFiles = [
  'app/careers/page.tsx',
  'app/cloud-migration-services/page.tsx', 
  'app/cloud-services/page.tsx',
  'app/components/ContactForm.tsx',
  'app/components/ContentCarousel.tsx',
  'app/components/ContentStatistics.tsx',
  'app/components/EnhancedAccessibilityEnhancer.tsx',
  'app/components/EnhancedErrorBoundary.tsx',
  'app/components/EnhancedHero.tsx',
  'app/components/EnhancedLoadingSkeleton.tsx',
  'app/components/EnhancedLoading.tsx',
  'app/components/EnhancedPerformanceMonitor.tsx',
  'app/components/EnhancedSEOOptimizer.tsx',
  'app/components/EnhancedSEO.tsx',
  'app/components/EnhancedServicesShowcase.tsx',
  'app/components/FuturisticHero.tsx',
  'app/components/FuturisticServiceCard.tsx',
  'app/components/GlobalErrorBoundary.tsx',
  'app/components/LazyImage.tsx',
  'app/components/OptimizedImage.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common JSX syntax issues
    const originalContent = content;

    // Fix missing closing tags by ensuring proper JSX structure
    // Remove any stray characters or incomplete tags
    content = content.replace(/<[^>]*$/gm, ''); // Remove incomplete tags at end of lines
    
    // Fix missing closing braces and parentheses
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    const missingBraces = openBraces - closeBraces;
    
    if (missingBraces > 0) {
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }

    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    const missingParens = openParens - closeParens;
    
    if (missingParens > 0) {
      content += ')'.repeat(missingParens);
      modified = true;
    }

    // Fix common TypeScript/JSX issues
    content = content.replace(/\}\s*\)\s*:\s*\(/g, '} : (');
    content = content.replace(/\}\s*\)\s*\)/g, '})');
    content = content.replace(/\}\s*\)\s*;/g, '});');
    
    // Fix missing semicolons in variable declarations
    content = content.replace(/(let|const|var)\s+(\w+):\s*(\w+)\s*,/g, '$1 $2: $3;');
    
    // Fix missing return statements
    if (content.includes('export default') && !content.includes('return (')) {
      // Find the last function/component and add return if missing
      const lines = content.split('\n');
      let inFunction = false;
      let lastFunctionStart = -1;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('=>') || lines[i].includes('function')) {
          inFunction = true;
          lastFunctionStart = i;
        }
        if (lines[i].includes('export default')) {
          break;
        }
      }
      
      if (lastFunctionStart !== -1) {
        // Add return statement if missing
        const functionContent = lines.slice(lastFunctionStart).join('\n');
        if (!functionContent.includes('return (') && !functionContent.includes('return <')) {
          lines.splice(lastFunctionStart + 1, 0, '  return (');
          lines.splice(lines.length - 1, 0, '  );');
          content = lines.join('\n');
          modified = true;
        }
      }
    }

    // Ensure proper JSX structure
    if (content.includes('export default') && !content.includes('return (')) {
      // Find the component name and add proper return
      const componentMatch = content.match(/export default (\w+)/);
      if (componentMatch) {
        const componentName = componentMatch[1];
        const componentStart = content.indexOf(`const ${componentName}`);
        if (componentStart !== -1) {
          const beforeReturn = content.substring(0, componentStart);
          const afterComponent = content.substring(componentStart);
          
          // Find the JSX part
          const jsxStart = afterComponent.indexOf('<');
          if (jsxStart !== -1) {
            const jsxContent = afterComponent.substring(jsxStart);
            const beforeJsx = afterComponent.substring(0, jsxStart);
            
            content = beforeReturn + beforeJsx + 'return (\n' + jsxContent + '\n);\n}';
            modified = true;
          }
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log(`Fixing ${criticalFiles.length} critical files...`);

let fixedCount = 0;
criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log(`Fixed ${fixedCount} files`);