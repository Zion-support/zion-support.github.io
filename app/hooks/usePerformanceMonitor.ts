import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const handleLoad = () => {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            // console.log removed for production
          }
        });
        
        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          // Fallback for browsers that don't support LCP
        }
      }

      // First Input Delay (FID)
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            // console.log removed for production
          });
        });
        
        try {
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          // Fallback for browsers that don't support FID
        }
      }

      // Cumulative Layout Shift (CLS)
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          });
          // console.log removed for production
        });
        
        try {
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          // Fallback for browsers that don't support CLS
        }
      }
    };

    // Monitor resource timing
    const handleResourceTiming = () => {
      if ('PerformanceObserver' in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.duration > 1000) {
              // console.warn removed for production
            }
          });
        });
        
        try {
          resourceObserver.observe({ entryTypes: ['resource'] });
        } catch (e) {
          // Fallback for browsers that don't support resource timing
        }
      }
    };

    // Monitor memory usage
    const handleMemoryUsage = () => {
      if (typeof window !== 'undefined' && (performance as any).memory) {
        const memory = (performance as any).memory;
        const memoryUsage = {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
        };
        if (memoryUsage.used > memoryUsage.limit * 0.8) {
          // console.warn removed for production
        }
      }
    };

    // Set up monitoring
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    // Monitor resources after a delay
    setTimeout(handleResourceTiming, 2000);
    setTimeout(handleMemoryUsage, 5000);

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
};