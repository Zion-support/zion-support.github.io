const fs = require('fs');

function fixUnusedImports() {
  try {
    let content = fs.readFileSync('App.tsx', 'utf8');
    
    // Find all the unused imports by checking which ones are not in the Routes section
    const lines = content.split('\n');
    const routeSectionStart = lines.findIndex(line => line.includes('{/* AI Service Routes */}'));
    const routeSectionEnd = lines.findIndex((line, index) => index > routeSectionStart && line.includes('</Routes>'));
    
    if (routeSectionStart === -1 || routeSectionEnd === -1) {
      console.log('Could not find Routes section');
      return false;
    }
    
    const routeSection = lines.slice(routeSectionStart, routeSectionEnd).join('\n');
    
    // Find all component names used in routes
    const usedComponents = new Set();
    const routeMatches = routeSection.match(/element={<(\w+)Page \/>}/g);
    if (routeMatches) {
      routeMatches.forEach(match => {
        const componentName = match.match(/element={<(\w+)Page \/>}/)[1];
        usedComponents.add(componentName + 'Page');
      });
    }
    
    // Also check for other used components
    const otherUsedComponents = [
      'Navigation', 'Footer', 'HomePage', 'PageLoader', 'ErrorBoundary', 
      'Breadcrumb', 'PerformanceOptimizer', 'AccessibilityEnhancer', 
      'EnhancedAccessibility', 'AnalyticsProvider', 'PerformanceMonitor', 
      'FuturisticBackground', 'usePerformanceMonitor'
    ];
    
    otherUsedComponents.forEach(comp => usedComponents.add(comp));
    
    // Remove unused imports
    const newLines = [];
    let inImportSection = true;
    let removedCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (inImportSection && line.trim() === '') {
        newLines.push(line);
        continue;
      }
      
      if (inImportSection && (line.startsWith('import ') || line.startsWith("'use client';"))) {
        // Check if this import is used
        const importMatch = line.match(/import.*?(\w+).*?from/);
        if (importMatch) {
          const importedName = importMatch[1];
          if (usedComponents.has(importedName) || 
              line.includes('React') || 
              line.includes('Suspense') || 
              line.includes('BrowserRouter') || 
              line.includes('Routes') || 
              line.includes('Route') || 
              line.includes('HelmetProvider')) {
            newLines.push(line);
          } else {
            console.log(`Removing unused import: ${importedName}`);
            removedCount++;
          }
        } else {
          newLines.push(line);
        }
      } else if (inImportSection && line.startsWith('//')) {
        // Keep comments
        newLines.push(line);
      } else if (inImportSection && line.trim() === '') {
        newLines.push(line);
      } else {
        inImportSection = false;
        newLines.push(line);
      }
    }
    
    if (removedCount > 0) {
      fs.writeFileSync('App.tsx', newLines.join('\n'), 'utf8');
      console.log(`Removed ${removedCount} unused imports`);
      return true;
    }
    
  } catch (error) {
    console.error('Error fixing unused imports:', error.message);
  }
  return false;
}

fixUnusedImports();
