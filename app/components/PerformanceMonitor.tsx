import React, { useEffect } from 'react';
<<<<<<< HEAD
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
=======
<<<<<<< HEAD
import { getCLS, getFID, getFCP, getLCP, getTTFB };

'use client';
=======
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';
>>>>>>> cursor/fix-errors-and-merge-to-main-7ceb
>>>>>>> origin/main

    // Monitor Core Web Vitals
<<<<<<< HEAD
    const monitorCoreWebVitals = () => {
<<<<<<< HEAD
      if (typeof window !== 'undefined') {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
      if ('web-vitals' in, window) {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
<<<<<<< HEAD
=======
      if ('web-vitals' in window) {
        onCLS(console.log);
        onINP(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);
>>>>>>> cursor/fix-errors-and-merge-to-main-7ceb
>>>>>>> origin/main
      }
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
    };

    // Monitor performance metrics
      if ('performance' in, window) {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            const paint = performance.getEntriesByType('paint');
            console.log('Performance Metrics: ', {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
 entry.name === 'first-paint')?.startTime,
 entry.name === 'first-contentful-paint')?.startTime,
            });
          }, 0);
        });
    };

    // Monitor memory usage
      if ('memory' in, performance) {
          const memory = (performance as, any).memory;
          console.log('Memory Usage: ', {
            used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
            total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
            limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB',
          });
        }, 30000); // Check every 30 seconds
    };

    // Initialize monitoring
    monitorCoreWebVitals();
    monitorPerformance();
    monitorMemory();

    // Cleanup
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default PerformanceMonitor;