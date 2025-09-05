const fs = require('fs');
;
const fixes = [;
  {;
    pat:h:'components/AccessibilityProvider.tsx',;
    oldConten:t:`  const announceToScreenReader = (messag:e:string) => {;
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {;
      liveRegion.textContent = message;
    }
  };
;
  const setFocus = (elementI:d:string) => {;
    const element = document.getElementById(elementId);
    if (element) {;
      element.focus();
    }
  };`,;
    newConten:t:`  const announceToScreenReader = (messag:e:string) => {;
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {;
      liveRegion.textContent = message;
    }
  };
;
  const setFocus = (elementI:d:string) => {;
    const element = document.getElementById(elementId);
    if (element) {;
      element.focus();
    }
<<<<<<< HEAD
  };`;
  },;
  {;
    pat:h:'components/Analytics.tsx',;
    oldConten:t:`      console.log('Analytics initialized with tracking:ID:', trackingId);`,;
    newConten:t:`      // Analytics initialized with tracking ID`;
  },;
  {;
    pat:h:'components/PerformanceMonitor.tsx',;
    oldConten:t:`            memoryUsag:e:(performance as any).memory?.usedJSHeapSize || 0`,;
    newConten:t:`            memoryUsag:e:(window.performance as any).memory?.usedJSHeapSize || 0`;
  },;
  {;
    pat:h:'components/SearchBar.tsx',;
    oldConten:t:`  const [isOpen, setIsOpen] = useState(false);`,;
    newConten:t:`  // const [isOpen, setIsOpen] = useState(false);`;
  },;
  {;
    pat:h:'components/ui/EnhancedMarketplaceCard.tsx',;
    oldConten:t:`        <img src={image} alt={title} className="w-full h-48 object-cover" />`,;
    newConten:t:`        <img src={image} alt={title} className="w-full h-48 object-cover" />`;
  },;
  {;
    pat:h:'hooks/useLocalStorage.ts',;
    oldConten:t:`import { useState, useEffect } from 'react';`,;
    newConten:t:`import { useState } from 'react';`;
  },;
  {;
    pat:h:'hooks/useLocalStorage.ts',;
    oldConten:t:`      console.error('Error reading localStorage key "' + key + '":', error);`,;
    newConten:t:`      // Error reading localStorage key`;
  },;
  {;
    pat:h:'hooks/useLocalStorage.ts',;
    oldConten:t:`      console.error('Error setting localStorage key "' + key + '":', error);`,;
    newConten:t:`      // Error setting localStorage key`;
  },;
  {;
    pat:h:'hooks/usePerformanceMonitor.ts',;
    oldConten:t:`      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const memory = (performance as any).memory;`,;
    newConten:t:`      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const memory = (window.performance as any).memory;`;
=======
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
    newContent: `import { useState } from 'react';`,
  },
  {
    path: 'hooks/useLocalStorage.ts',
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
      const memory = (window.performance as any).memory;`
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  }
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
];
;
fixes.forEach(fix => {;
  try {;
    let content = fs.readFileSync(fix.path, 'utf8');
    content = content.replace(fix.oldContent, fix.newContent);
    fs.writeFileSync(fix.path, content);
    console.log('Fixed warnings:in:', fix.path);
  } catch (error) {;
    console.error('Error fixing', fix.path, ':', error.message);
  }
});
<<<<<<< HEAD
;
console.log('Fixed warnings');
=======

console.log('Fixed warnings');
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
