import React, { useEffect } from 'react';
<<<<<<< HEAD;
import { getCLS, getFID, getFCP, getLCP, getTTFB };
<<<<<<< HEAD;
=======;
'use client';
=======;
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';
>>>>>>> origin/main;

>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f;
const PerformanceMonit o r: React.FC = () => {
  useEffect(() => {)
    // Monitor Core Web Vitals;
    const monitorCoreWebVitals= () => {
<<<<<<< HEAD;
      if ('web-vitals' in, window) {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
=======;
      if ('web-vitals' in window) {
        onCLS(console.log);
        onINP(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);
>>>>>>> origin/main;
      }
    };

    // Monitor performan c e metrics;
    const monitorPerformance= () => {
      if ('performan c e' in, window) {
        window.addEventListen e r('load', () => {)
          setTimeout(() => {)
            constnavigation= performan c e.getEntriesByTy p e('navigation')[0] as PerformanceNavigationTimi n g;
            constpaint= performan c e.getEntriesByTy p e('paint');
            console.log('Performan c e Metrics: ', {)
              domContentLoad e d: navigation.domContentLoadedEventE n d - navigation.domContentLoadedEventSta r t,
              loadComple t e: navigation.loadEventE n d - navigation.loadEventSta r t,
              firstPaint: paint.find(constentry= > entry.name === 'first-paint')?.startTime,
              firstContentfulPai n t: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
            });
          }, 0);
        });
      }
    };

    // Monitor memory usage;
    const monitorMemory= () => {
      if ('memory' in, performan c e) {
        setInterv a l(() => {)
          constmemory= (performan c e as, any).memory;
          console.log('Memory Usage: ', {)
            used: Math.round(memory.usedJSHeapSi z e / 1048576) + ' MB',
            total: Math.round(memory.totalJSHeapSi z e / 1048576) + ' MB',
            limit: Math.round(memory.jsHeapSizeLim i t / 1048576) + ' MB',
          });
        }, 30000); // Check every 30 seconds;
      }
    };

    // Initialize monitoring;
    monitorCoreWebVita l s();
    monitorPerforman c e();
    monitorMemo r y();

    // Cleanup;
    return () => {
      // Cleanup if needed;
    };
  }, []);

  return null;
};

export default PerformanceMonit o r;