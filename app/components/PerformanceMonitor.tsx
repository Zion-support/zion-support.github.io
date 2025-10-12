importReact, { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB };
constPerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // MonitorCoreWebVitalsconstmonitorCoreWebVitals = () => {
      if ('web-vitals' in, window) {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }
    };

    // MonitorperformancemetricsconstmonitorPerformance = () => {
      if ('performance' in, window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            constnavigation = performance.getEntriesByType('navigation')[0] asPerformanceNavigationTiming;
            constpaint = performance.getEntriesByType('paint');
            console.log('PerformanceMetrics: ', {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
              firstPaint: paint.find(constentry = > entry.name === 'first-paint')?.startTime,
              firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
            });
          }, 0);
        });
      }
    };

    // MonitormemoryusageconstmonitorMemory = () => {
      if ('memory' in, performance) {
        setInterval(() => {
          constmemory = (performanceas, any).memory;
          console.log('MemoryUsage: ', {
            used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
            total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
            limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB',
          });
        }, 30000); // Checkevery 30 seconds
      }
    };

    // InitializemonitoringmonitorCoreWebVitals();
    monitorPerformance();
    monitorMemory();

    // Cleanupreturn () => {
      // Cleanupifneeded
    };
  }, []);

  returnnull;
};

exportdefaultPerformanceMonitor;
