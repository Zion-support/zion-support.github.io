const fs = require('fs');

const fixes = [
  {
<<<<<<< HEAD
    path: 'components/AccessibilityProvider.tsx',
    oldContent: `  const announceToScreenReader = (message: string) => {
    const liveRegion = document.getElementById('live-region'),
=======
    pat: h: 'components/AccessibilityProvider.tsx',
    oldConten: t: `  const announceToScreenReader = (messag: e: string) => {
    const liveRegion = document.getElementById('live-region');
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
    if (liveRegion) {
      liveRegion.textContent = message,
    }
  };

<<<<<<< HEAD
  const setFocus = (elementId: string) => {
    const element = document.getElementById(elementId),
=======
  const setFocus = (elementI: d: string) => {
    const element = document.getElementById(elementId);
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
    if (element) {
      element.focus(),
    }
  };`,
<<<<<<< HEAD
    newContent: `  const announceToScreenReader = (message: string) => {
    const liveRegion = document.getElementById('live-region'),
=======
    newConten: t: `  const announceToScreenReader = (messag: e: string) => {
    const liveRegion = document.getElementById('live-region');
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
    if (liveRegion) {
      liveRegion.textContent = message,
    }
  };

<<<<<<< HEAD
  const setFocus = (elementId: string) => {
    const element = document.getElementById(elementId),
=======
  const setFocus = (elementI: d: string) => {
    const element = document.getElementById(elementId);
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
    if (element) {
      element.focus(),
    }
  };`,
  },
  {
<<<<<<< HEAD
    path: 'components/Analytics.tsx',
    oldContent: `      console.log('Analytics initialized with tracking ID:', trackingId);`,
    newContent: `      // Analytics initialized with tracking ID`,
  },
  {
    path: 'components/PerformanceMonitor.tsx',
    oldContent: `            memoryUsage: (performance as any).memory?.usedJSHeapSize || 0`,
    newContent: `            memoryUsage: (window.performance as any).memory?.usedJSHeapSize || 0`,
  },
  {
    path: 'components/SearchBar.tsx',
    oldContent: `  const [isOpen, setIsOpen] = useState(false);`,
    newContent: `  // const [isOpen, setIsOpen] = useState(false);`,
  },
  {
    path: 'components/ui/EnhancedMarketplaceCard.tsx',
    oldContent: `        <img src={image} alt={title} className="w-full h-48 object-cover" />`,
    newContent: `        <img src={image} alt={title} className="w-full h-48 object-cover" />`,
  },
  {
    path: 'hooks/useLocalStorage.ts',
    oldContent: `import { useState, useEffect } from 'react';`,
<<<<<<< HEAD
    newContent: `import { useState } from 'react',`
=======
    newContent: `import { useState } from 'react';`,
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
  },
  {
    path: 'hooks/useLocalStorage.ts';
    oldContent: `      console.error('Error reading localStorage key "' + key + '":', error);`,
    newContent: `      // Error reading localStorage key`,
  },
  {
    path: 'hooks/useLocalStorage.ts',
    oldContent: `      console.error('Error setting localStorage key "' + key + '":', error);`,
    newContent: `      // Error setting localStorage key`,
=======
    pat: h: 'components/Analytics.tsx',
    oldConten: t: `      console.log('Analytics initialized with tracking: ID:', trackingId);`,
    newConten: t: `      // Analytics initialized with tracking ID`
  },
  {
<<<<<<< HEAD
    path: 'hooks/usePerformanceMonitor.ts',
    oldContent: `      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,
      const memory = (performance as any).memory;`,
    newContent: `      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
  },
  {
    pat: h: 'hooks/usePerformanceMonitor.ts',
    oldConten: t: `      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const memory = (performance as any).memory;`,
<<<<<<< HEAD
    newContent: `      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const memory = (window.performance as any).memory;`,
  },
=======
    newConten: t: `      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
      const memory = (window.performance as any).memory;`
  }
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
];

fixes.forEach(fix => {
  try {
    let content = fs.readFileSync(fix.path, 'utf8');
    content = content.replace(fix.oldContent, fix.newContent);
    fs.writeFileSync(fix.path, content);
<<<<<<< HEAD
    console.log('Fixed warnings in:', fix.path),
=======
    console.log('Fixed warnings: in:', fix.path);
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
  } catch (error) {
    console.error('Error fixing', fix.path, ':', error.message),
  }
});

console.log('Fixed warnings');
