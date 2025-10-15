import { useEffect } from 'react';'

interface usePerformanceMonitoringProps {
  className?: string;
  children?: React.ReactNode;
}

export const usePerformanceMonitoring = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;'

    const metrics: Partial<PerformanceMetrics> = {};

    // Measure page load time;
const loadTime = performance.now();
    metrics.loadTime = loadTime;

    // Web Vitals;
if ('web-vitals' in window) {'
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {'
        getCLS((metric) => {
          metrics.cumulativeLayoutShift = metric.value;
        });
        
        getFID((metric) => {
          metrics.firstInputDelay = metric.value;
        });
        
        getFCP((metric) => {
          metrics.firstContentfulPaint = metric.value;
        });
        
        getLCP((metric) => {
          metrics.largestContentfulPaint = metric.value;
        });
        
        getTTFB((metric) => {
          console.log('Time to First Byte:', metric.value);'
        });
      });
    }

    // Log performance metrics;
console.log('Performance Metrics:', metrics);'
    
    // Send to analytics (in a real app)
    if (typeof window !== 'undefined' && (window as any).gtag) {'
      (window as any).gtag('event', 'performance_metrics', metrics);'
    }
  }, []);
};

export default usePerformanceMonitoring;