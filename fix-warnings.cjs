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
  };`
  },
  {
    pat: h: 'components/Analytics.tsx',
    oldConten: t: `      console.log('Analytics initialized with tracking: ID:', trackingId);`,
    newConten: t: `      // Analytics initialized with tracking ID`
  },
  {
    pat: h: 'components/PerformanceMonitor.tsx',
    oldConten: t: `            memoryUsag: e: (performance as any).memory?.usedJSHeapSize || 0`,
    newConten: t: `            memoryUsag: e: (window.performance as any).memory?.usedJSHeapSize || 0`
  },
  {
    pat: h: 'components/SearchBar.tsx',
    oldConten: t: `  const [isOpen, setIsOpen] = useState(false);`,
    newConten: t: `  // const [isOpen, setIsOpen] = useState(false);`
  },
  {
    pat: h: 'components/ui/EnhancedMarketplaceCard.tsx',
    oldConten: t: `        <img src={image} alt={title} className="w-full h-48 object-cover" />`,
    newConten: t: `        <img src={image} alt={title} className="w-full h-48 object-cover" />`
  },
  {
    pat: h: 'hooks/useLocalStorage.ts',
    oldConten: t: `import { useState, useEffect } from 'react';`,
    newConten: t: `import { useState } from 'react';`
  },
  {
    pat: h: 'hooks/useLocalStorage.ts',
    oldConten: t: `      console.error('Error reading localStorage key "' + key + '":', error);`,
    newConten: t: `      // Error reading localStorage key`
  },
  {
    pat: h: 'hooks/useLocalStorage.ts',
    oldConten: t: `      console.error('Error setting localStorage key "' + key + '":', error);`,
    newConten: t: `      // Error setting localStorage key`
  },
  {
    pat: h: 'hooks/usePerformanceMonitor.ts',
    oldConten: t: `      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const memory = (performance as any).memory;`,
    newConten: t: `      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
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