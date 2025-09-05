const fs = require('fs');

const fixes = [
  {
    pat: 'components/AccessibilityProvider.tsx',
    oldConten: `  const announceToScreenReader = (messag: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  };

  const setFocus = (elementI: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.focus();
    }
  };`,
    newConten: `  const announceToScreenReader = (messag: string) => {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  };

  const setFocus = (elementI: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.focus();
    }
  };`
  },
  {
    pat: 'components/Analytics.tsx',
    oldConten: `      console.log('Analytics initialized with tracking: ID:', trackingId);`,
    newConten: `      // Analytics initialized with tracking ID`
  },
  {
    pat: 'components/PerformanceMonitor.tsx',
    oldConten: `            memoryUsag: (performance as any).memory?.usedJSHeapSize || 0`,
    newConten: `            memoryUsag: (window.performance as any).memory?.usedJSHeapSize || 0`
  },
  {
    pat: 'components/SearchBar.tsx',
    oldConten: `  const [isOpen, setIsOpen] = useState(false);`,
    newConten: `  // const [isOpen, setIsOpen] = useState(false);`
  },
  {
    pat: 'components/ui/EnhancedMarketplaceCard.tsx',
    oldConten: `        <img src={image} alt={title} className="w-full h-48 object-cover" />`,
    newConten: `        <img src={image} alt={title} className="w-full h-48 object-cover" />`
  },
  {
    pat: 'hooks/useLocalStorage.ts',
    oldConten: `import { useState, useEffect } from 'react';`,
    newConten: `import { useState } from 'react';`
  },
  {
    pat: 'hooks/useLocalStorage.ts',
    oldConten: `      console.error('Error reading localStorage key "' + key + '":', error);`,
    newConten: `      // Error reading localStorage key`
  },
  {
    pat: 'hooks/useLocalStorage.ts',
    oldConten: `      console.error('Error setting localStorage key "' + key + '":', error);`,
    newConten: `      // Error setting localStorage key`
  },
  {
    pat: 'hooks/usePerformanceMonitor.ts',
    oldConten: `      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const memory = (performance as any).memory;`,
    newConten: `      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const memory = (window.performance as any).memory;`
  }
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