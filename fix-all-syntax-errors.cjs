const fs = require('fs');

// Files with syntax errors
const filesToFix = [
  'app/components/PerformanceOptimizer.tsx',
  'app/components/SkipLink.tsx',
  'app/components/consolidated/ConsolidatedAccessibility.tsx',
  'app/components/consolidated/ConsolidatedPerformance.tsx',
  'app/components/consolidated/ConsolidatedSEO.tsx'
];

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Fix PerformanceOptimizer.tsx
    if (file.includes('PerformanceOptimizer.tsx')) {
      // Fix missing opening brace before observer
      content = content.replace(/\s*}\s*\);\s*},\s*{\s*rootMargin:/g, '}\n        });\n      }, {\n        rootMargin:');
    }

    // Fix SkipLink.tsx
    if (file.includes('SkipLink.tsx')) {
      // Fix missing opening brace and return statement
      content = content.replace(/useEffect\(\(\) => \{\s*}\s*\};\s*return/g, 'useEffect(() => {\n    // Skip link functionality\n  }, []);\n\n  return');
    }

    // Fix ConsolidatedAccessibility.tsx
    if (file.includes('ConsolidatedAccessibility.tsx')) {
      // Fix missing opening brace before forEach
      content = content.replace(/\s*}\s*;\s*\/\/ Apply focus trap to modals\s*document\.querySelectorAll/g, '}\n    };\n\n    // Apply focus trap to modals\n    document.querySelectorAll');
    }

    // Fix ConsolidatedPerformance.tsx
    if (file.includes('ConsolidatedPerformance.tsx')) {
      // Fix missing opening brace before observer
      content = content.replace(/\s*}\s*\);\s*},\s*{\s*rootMargin:/g, '}\n        });\n      }, {\n        rootMargin:');
    }

    // Fix ConsolidatedSEO.tsx
    if (file.includes('ConsolidatedSEO.tsx')) {
      // Fix return statement placement
      content = content.replace(/},\s*\[addHreflang\]\);\s*return/g, '}, [addHreflang]);\n\n  return');
      content = content.replace(/\);\s*}\);\s*ConsolidatedSEO\.displayName/g, ');\n};\n\nConsolidatedSEO.displayName');
    }

    if (content !== fs.readFileSync(file, 'utf8')) {
      fs.writeFileSync(file, content);
      console.log(`Fixed syntax errors in: ${file}`);
    }
  }
});

console.log('All syntax error fixes completed');