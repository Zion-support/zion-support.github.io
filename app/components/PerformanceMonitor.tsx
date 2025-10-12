import React, { useEffect } from 'react', { getCLS, getFID, getFCP, getLCP, getTTFB };
export default PerformanceMonitor;
'use client';
const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals;
    
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      if ('web-vitals' in, window) {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      if ('web-vitals' in window) {
        onCLS(console.log);
        onINP(console.log);
        onFCP(console.log);
        onLCP(console.log);
        onTTFB(console.log);
      }
    };

    // Monitor performance metrics;

            console.log('Performance Metrics: ', {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
              firstPaint: paint.find(
          }, 0);
        });
      }
    };

    // Monitor memory usage;
    
          console.log('Memory Usage: ', {
            used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
            total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
            limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB',
          });
        }, 30000); // Check every 30 seconds;
      }
    };

    // Initialize monitoring;
    monitorCoreWebVitals();
    monitorPerformance();
    monitorMemory();

    // Cleanup;
    return () => {
      // Cleanup if needed;
    };
  }, []);

  return null;
};

export default PerformanceMonitor;

}