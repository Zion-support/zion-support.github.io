import React, { useEffect, ReactNode } from 'react';

interface PerformanceMonitorProps {
  children: ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  useEffect(() => {
    // Monitor performance metrics
    const monitorPerformance = () => {
      // Monitor Core Web Vitals
      if (typeof window !== 'undefined' && 'web-vitals' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            console.log('Performance Monitor - CLS:', metric);
            // Send to analytics
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'performance_metric', {
                event_category: 'Performance',
                event_label: 'CLS',
                value: Math.round(metric.value * 1000),
                non_interaction: true,
              });
            }
          });
          getFID((metric) => {
            console.log('Performance Monitor - FID:', metric);
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'performance_metric', {
                event_category: 'Performance',
                event_label: 'FID',
                value: Math.round(metric.value),
                non_interaction: true,
              });
            }
          });
          getFCP((metric) => {
            console.log('Performance Monitor - FCP:', metric);
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'performance_metric', {
                event_category: 'Performance',
                event_label: 'FCP',
                value: Math.round(metric.value),
                non_interaction: true,
              });
            }
          });
          getLCP((metric) => {
            console.log('Performance Monitor - LCP:', metric);
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'performance_metric', {
                event_category: 'Performance',
                event_label: 'LCP',
                value: Math.round(metric.value),
                non_interaction: true,
              });
            }
          });
          getTTFB((metric) => {
            console.log('Performance Monitor - TTFB:', metric);
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'performance_metric', {
                event_category: 'Performance',
                event_label: 'TTFB',
                value: Math.round(metric.value),
                non_interaction: true,
              });
            }
          });
        });
      }

      // Monitor resource loading
      if (typeof window !== 'undefined' && 'performance' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              console.log('Navigation timing:', entry);
            } else if (entry.entryType === 'resource') {
              console.log('Resource timing:', entry);
            }
          }
        });

        observer.observe({ entryTypes: ['navigation', 'resource'] });
      }

      // Monitor memory usage
      if (typeof window !== 'undefined' && 'memory' in performance) {
        const logMemoryUsage = () => {
          console.log('Memory usage:', {
            used: Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024),
            total: Math.round((performance as any).memory.totalJSHeapSize / 1024 / 1024),
            limit: Math.round((performance as any).memory.jsHeapSizeLimit / 1024 / 1024)
          });
        };

        setInterval(logMemoryUsage, 30000); // Log every 30 seconds
      }
    };

    monitorPerformance();
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;