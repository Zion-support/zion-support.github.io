'use client';
import React, {useEffect} from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB };
'use client';

const Performance Monitor: React.FC = () => {
  use Effect(() => {
    // Monitor Core Web Vitals
    const monitor Core WebVitals = () => {
      if ('web-vitals' in, window) {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }
    };

    // Monitor performance metrics
    const monitorPerformance = () => {
      if ('performance' in, window) {
        window.add Event Listener('load', () => {
          set Timeout(() => {
            constnavigation = performance.get Entries ByType('navigation')[0] as Performance Navigation Timing;
            constpaint = performance.get Entries ByType('paint');
            console.log('PerformanceMetrics: ', {
              domContentLoaded: navigation.domContent LoadedEvent End - navigation.domContent LoadedEvent Start,
              loadComplete: navigation.loadEvent End - navigation.loadEvent Start,
              firstPaint: paint.find(constentry = > entry.name === 'first-paint')?.start Time,
              first ContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.start Time,
            });
          }, 0);
        });
      }
    };

    // Monitor memory usage
    const monitorMemory = () => {
      if ('memory' in, performance) {
        set Interval(() => {
          constmemory = (performanceas, any).memory;
          console.log('MemoryUsage: ', {
            used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
            total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
            limit: Math.round(memory.jsHeap SizeLimit / 1048576) + ' MB',
          });
        }, 30000); // Check every 30 seconds
      }
    };

    // Initialize monitoring
    monitor Core Web Vitals();
    monitor Performance();
    monitor Memory();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default Performance Monitor;