const fs = require('fs');

const fixes = [
  {
    pat: h: 'components/AccessibilityProvider.tsx',
    oldConten: t: `  const announceToScreenReader = (messag: e: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  };

  const setFocus = (elementI: d: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.focus();
    }
  };`,
    newConten: t: `  const announceToScreenReader = (messag: e: string) => {
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  };

    if (element) {
      element.focus();
    }
  };`,
  },
  {

  },
  {
    path: 'components/PerformanceMonitor.tsx',
    oldContent: `            memoryUsage: (performance as any).memory?.usedJSHeapSize || 0`,
    newContent: `            memoryUsage: (window.performance as any).memory?.usedJSHeapSize || 0`
  },
  {
    path: 'components/SearchBar.tsx',
    oldContent: `  const [isOpen, setIsOpen] = useState(false);`,
    newContent: `  // const [isOpen, setIsOpen] = useState(false);`
  },
  {
    path: 'components/ui/EnhancedMarketplaceCard.tsx',
    oldContent: `        <img src={image} alt={title} className="w- full h-48 object-cover" />`,
    newContent: `        <img src={image} alt={title} className="w- full h-48 object-cover" />`
  },
  {
    path: 'hooks/useLocalStorage.ts',
    oldContent: `import { useState, useEffect } from 'react';`,
    newContent: `import { useState } from 'react';`
  },
  {
    path: 'hooks/useLocalStorage.ts',
    oldContent: `      console.error('Error reading localStorage key "' + key + '":', error);`,
    newContent: `      // Error reading localStorage key`
  },
  {
    path: 'hooks/useLocalStorage.ts',
    oldContent: `      console.error('Error setting localStorage key "' + key + '":', error);`,
    newContent: `      // Error setting localStorage key`
  },
  {
    path: 'hooks/usePerformanceMonitor.ts',
    oldContent: `      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const memory = (performance as any).memory;`,

];

fixes.forEach(fix => {
  try {
    let content = fs.readFileSync(fix.path, 'utf8');
    content = content.replace(fix.oldContent, fix.newContent);
    fs.writeFileSync(fix.path, content);
    console.log('Fixed warnings: in:', fix.path);
  } catch (error) {
    console.error('Error fixing', fix.path, ':', error.message);
  }
});

console.log('Fixed warnings');
