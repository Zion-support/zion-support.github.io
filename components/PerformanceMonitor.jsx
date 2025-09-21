import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Web Vitals monitoring
    const reportWebVitals = (metric) => {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric);
      }
      
      // Send to analytics in production
      if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
        // Send to Google Analytics or other analytics service
        if (window.gtag) {
          window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            event_label: metric.id,
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            non_interaction: true,
          });
        }
      }
    };

    // Monitor Core Web Vitals
    const measureWebVitals = () => {
      // First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              reportWebVitals({
                name: 'FCP',
                value: entry.startTime,
                id: 'fcp'
              });
            }
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      }

      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          reportWebVitals({
            name: 'LCP',
            value: lastEntry.startTime,
            id: 'lcp'
          });
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // First Input Delay (FID)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            reportWebVitals({
              name: 'FID',
              value: entry.processingStart - entry.startTime,
              id: 'fid'
            });
          }
        });
        observer.observe({ entryTypes: ['first-input'] });
      }

      // Cumulative Layout Shift (CLS)
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          reportWebVitals({
            name: 'CLS',
            value: clsValue,
            id: 'cls'
          });
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Monitor resource loading performance
    const monitorResourcePerformance = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'resource') {
              const loadTime = entry.responseEnd - entry.startTime;
              if (loadTime > 1000) { // Log resources taking more than 1 second
                console.warn('Slow resource detected:', {
                  name: entry.name,
                  duration: loadTime,
                  size: entry.transferSize
                });
              }
            }
          }
        });
        observer.observe({ entryTypes: ['resource'] });
      }
    };

    // Monitor memory usage
    const monitorMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = performance.memory;
        const memoryUsage = {
          used: Math.round(memory.usedJSHeapSize / 1048576), // MB
          total: Math.round(memory.totalJSHeapSize / 1048576), // MB
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
        };
        
        if (memoryUsage.used > memoryUsage.limit * 0.8) {
          console.warn('High memory usage detected:', memoryUsage);
        }
      }
    };

    // Initialize monitoring
    measureWebVitals();
    monitorResourcePerformance();
    
    // Monitor memory usage every 30 seconds
    const memoryInterval = setInterval(monitorMemoryUsage, 30000);
    
    // Cleanup
    return () => {
      clearInterval(memoryInterval);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;