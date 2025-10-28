const fs = require('fs');

// Fix specific files with syntax errors
const filesToFix = [
  'app/components/AdvancedPerformanceEnhancer.tsx',
  'app/components/EnhancedAccessibilityManager.tsx', 
  'app/components/PerformanceMonitor.tsx',
  'app/components/PerformanceMonitoring.tsx',
  'app/components/PerformanceOptimizations.tsx'
];

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Fix AdvancedPerformanceEnhancer.tsx
    if (file.includes('AdvancedPerformanceEnhancer.tsx')) {
      // Fix missing semicolon and catch block
      content = content.replace(/}\s*\);\s*observer\.observe/g, '});\n        observer.observe');
      content = content.replace(/}\s*catch\s*{\s*\/\/ Error handled\s*}/g, '} catch (error) {\n      // Error handled\n    }');
    }

    // Fix EnhancedAccessibilityManager.tsx
    if (file.includes('EnhancedAccessibilityManager.tsx')) {
      // Fix missing closing brace before if statement
      content = content.replace(/\s*}\s*\/\/ Alt \+ M: Focus main content\s*if/g, '}\n      }\n\n      // Alt + M: Focus main content\n      if');
    }

    // Fix PerformanceMonitor.tsx
    if (file.includes('PerformanceMonitor.tsx')) {
      // Fix missing opening brace before else if
      content = content.replace(/\s*}\s*else if \(entry\.entryType === 'first-input'\)/g, '}\n        } else if (entry.entryType === \'first-input\')');
    }

    // Fix PerformanceMonitoring.tsx
    if (file.includes('PerformanceMonitoring.tsx')) {
      // Fix return statement placement
      content = content.replace(/},\s*\[monitorCoreWebVitals,\s*monitorResourcePerformance,\s*monitorMemoryUsage\]\);\s*return/g, '}, [monitorCoreWebVitals, monitorResourcePerformance, monitorMemoryUsage]);\n\n  return');
      content = content.replace(/\);\s*}\);\s*PerformanceMonitoring\.displayName/g, ');\n};\n\nPerformanceMonitoring.displayName');
    }

    // Fix PerformanceOptimizations.tsx
    if (file.includes('PerformanceOptimizations.tsx')) {
      // Fix missing opening brace before observer
      content = content.replace(/\s*}\s*\);\s*},\s*{\s*rootMargin:/g, '}\n        });\n      }, {\n        rootMargin:');
    }

    if (content !== fs.readFileSync(file, 'utf8')) {
      fs.writeFileSync(file, content);
      console.log(`Fixed syntax errors in: ${file}`);
    }
  }
});

console.log('Syntax error fixes completed');