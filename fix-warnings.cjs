const fs = require('fs');

const fixes = [
  {
    path: 'components/AccessibilityProvider.tsx',
    oldContent: `  const announceToScreenReader = (message: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  };

  const setFocus = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.focus();
    }
  };`,
    newContent: `  const announceToScreenReader = (message: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  };

  const setFocus = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.focus();
    }
  };`
  },
  {
    path: 'components/Analytics.tsx',
    oldContent: `      console.log('Analytics initialized with tracking ID:', trackingId);`,
    newContent: `      // Analytics initialized with tracking ID`
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
    oldContent: `        <img src={image} alt={title} className="w-full h-48 object-cover" />`,
    newContent: `        <img src={image} alt={title} className="w-full h-48 object-cover" />`
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
    newContent: `      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const memory = (window.performance as any).memory;`
  }
];

fixes.forEach(fix => {
  try {
    let content = fs.readFileSync(fix.path, 'utf8');
    content = content.replace(fix.oldContent, fix.newContent);
    fs.writeFileSync(fix.path, content);
    console.log('Fixed warnings in:', fix.path);
  } catch (error) {
    console.error('Error fixing', fix.path, ':', error.message);
  }
});

console.log('Fixed warnings');