import React, { useEffect } from 'react';

    // Monitor Core Web Vitals

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