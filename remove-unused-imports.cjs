const fs = require('fs');

function removeUnusedImports() {
  try {
    let content = fs.readFileSync('App.tsx', 'utf8');
    
    // Read the entire file to find all used components
    const usedComponents = new Set();
    
    // Find all components used in Routes
    const routeMatches = content.match(/element={<(\w+)Page \/>}/g);
    if (routeMatches) {
      routeMatches.forEach(match => {
        const componentName = match.match(/element={<(\w+)Page \/>}/)[1];
        usedComponents.add(componentName + 'Page');
      });
    }
    
    // Add other components that are used
    const otherUsedComponents = [
      'Navigation', 'Footer', 'HomePage', 'PageLoader', 'ErrorBoundary', 
      'Breadcrumb', 'PerformanceOptimizer', 'AccessibilityEnhancer', 
      'EnhancedAccessibility', 'AnalyticsProvider', 'PerformanceMonitor', 
      'FuturisticBackground', 'usePerformanceMonitor', 'React', 'Suspense',
      'BrowserRouter', 'Routes', 'Route', 'HelmetProvider'
    ];
    
    otherUsedComponents.forEach(comp => usedComponents.add(comp));
    
    // Split into lines and process
    const lines = content.split('\n');
    const newLines = [];
    let inLazyImportSection = false;
    let removedCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if we're in the lazy import section
      if (line.includes('// Lazy load pages for better performance')) {
        inLazyImportSection = true;
        newLines.push(line);
        continue;
      }
      
      if (inLazyImportSection && line.trim() === '') {
        newLines.push(line);
        continue;
      }
      
      if (inLazyImportSection && line.startsWith('//')) {
        newLines.push(line);
        continue;
      }
      
      if (inLazyImportSection && line.startsWith('const ') && line.includes('Page = React.lazy')) {
        // Extract component name
        const match = line.match(/const (\w+) = React\.lazy/);
        if (match) {
          const componentName = match[1];
          if (usedComponents.has(componentName)) {
            newLines.push(line);
          } else {
            console.log(`Removing unused lazy import: ${componentName}`);
            removedCount++;
          }
        } else {
          newLines.push(line);
        }
      } else if (inLazyImportSection && !line.startsWith('const ')) {
        // End of lazy import section
        inLazyImportSection = false;
        newLines.push(line);
      } else {
        newLines.push(line);
      }
    }
    
    if (removedCount > 0) {
      fs.writeFileSync('App.tsx', newLines.join('\n'), 'utf8');
      console.log(`Removed ${removedCount} unused lazy imports`);
      return true;
    }
    
  } catch (error) {
    console.error('Error removing unused imports:', error.message);
  }
  return false;
}

removeUnusedImports();
