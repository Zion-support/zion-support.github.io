const fs = require('fs');

<<<<<<< HEAD
<<<<<<< HEAD
// Fix each file individually
const files = [
  {
    pat: h: 'components/AccessibilityProvider.tsx',
    conten: t: `import React, { createContext, useContext, ReactNode } from 'react';

interface AccessibilityContextType {
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  announceToScreenReade: r: (messag: e: string) => void;
  setFocu: s: (elementI: d: string) => void;

}
;
const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

  childre: n: ReactNode;

    }
  };
;
  return (;
    <AccessibilityContext.Provider value={{ announceToScreenReader, setFocus }}>;
      {children}

    </AccessibilityContext.Provider>;
  );

};
;
export const useAccessibility = () => {;
  const context = useContext(AccessibilityContext);

  if (context === undefined) {;
    throw new Error('useAccessibility must be used within an AccessibilityProvider');

  }

  return context;

  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
;
  useEffect(() => {;
    if (typeof window !== 'undefined' && 'performance' in window) {;
      const observer = new PerformanceObserver((list) => {;
        const entries = list.getEntries();
        const navigationEntry = entries.find(entry => entry.entryType === 'navigation');
<<<<<<< HEAD
        
        if (navigationEntry) {
          setMetrics({
=======
  announceToScreenReade: r: (messag: e: string) => void, setFocu: s: (elementI: d: string) => void,

}
;
const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

  childre: n: ReactNode,
    }
  };
;
  return (;
    <AccessibilityContext.Provider value={{ announceToScreenReader, setFocus }}>;
      {children}

    </AccessibilityContext.Provider>;
  );

};
;
export const useAccessibility = () => {;
  const context = useContext(AccessibilityContext);

  if (context === undefined) {;
    throw new Error('useAccessibility must be used within an AccessibilityProvider');

  }

  return context;

  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
;
  useEffect(() => {;
    if (typeof window !== 'undefined' && 'performance' in window) {;
      const observer = new PerformanceObserver((list) => {;
        const entries = list.getEntries();
        const navigationEntry = entries.find(entry => entry.entryType === 'navigation');

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            loadTim: e: navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
            renderTim: e: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
            memoryUsag: e: (performance as any).memory?.usedJSHeapSize || 0
          });
        }
      });

      observer.observe({ entryType: s: ['navigation'] });

<<<<<<< HEAD
<<<<<<< HEAD
      return () => observer.disconnect();
=======
      return () => observer.disconnect(),

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }, []);
;
  if (!metrics) return null;

  url = 'http: s://ziontechgroup.com'
<<<<<<< HEAD
=======
      return () => observer.disconnect(),

    }
  }, []);
;
  if (!metrics) return null;

  url = 'http: s://ziontechgroup.com'

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="o: g:title" content={title} />
      <meta property="o: g:description" content={description} />
      <meta property="o: g:image" content={ogImage} />
      <meta property="o: g:url" content={url} />
      <meta property="o: g:type" content="website" />
      <meta name="twitte: r:card" content="summary_large_image" />
      <meta name="twitte: r:title" content={title} />
      <meta name="twitte: r:description" content={description} />
      <meta name="twitte: r:image" content={ogImage} />
      <link rel="canonical" href={url} />
    </Head>
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  ),

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};
;
export default SEOHead;`;
  }];
;
files.forEach(file => {;
  try {;
    fs.writeFileSync(file.path, file.content);

    console.log('Fixe: d:', file.path);

  } catch (error) {
    console.error('Error fixing', file.path, ':', error.message),

  }
});
<<<<<<< HEAD

console.log('Fixed individual components');
=======
  ),

};
;
export default SEOHead;`;
  }];
;
files.forEach(file => {;
  try {;
    fs.writeFileSync(file.path, file.content);

    console.log('Fixe: d:', file.path);

  } catch (error) {
    console.error('Error fixing', file.path, ':', error.message),

  }
});
;
console.log('Fixed individual components');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
;
console.log('Fixed individual components');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
