'use client';
interface PerformanceMonitorProps {
  enableReporting?: boolean;
  enableConsoleLogging?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  enableReporting = true,
  enableConsoleLogging = false
}) => {
  useEffect(() => {
    if (!enableReporting) return;

    const reportMetric = (metric: any) => {
      if (enableConsoleLogging) {
        console.log('Performance Metric:', metric);
      }

      // Send to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: metric.name,
          value: Math.round(metric.value),
          non_interaction: true,
        });
      }

      // Send to custom analytics endpoint
      if (typeof window !== 'undefined' && navigator.sendBeacon) {
        const data = JSON.stringify({
          name: metric.name,
          value: metric.value,
          delta: metric.delta,
          id: metric.id,
          navigationType: metric.navigationType,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        });

        navigator.sendBeacon('/api/analytics/performance', data);
      }
    };

    // Measure Core Web Vitals
    getCLS(reportMetric);
    getFID(reportMetric);
    getFCP(reportMetric);
    getLCP(reportMetric);
    getTTFB(reportMetric);

    // Additional performance monitoring
    const measurePageLoad = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            name: 'page_load_time',
            value: navigation.loadEventEnd - navigation.fetchStart,
            delta: navigation.loadEventEnd - navigation.fetchStart,
            id: 'page-load',
            navigationType: navigation.type,
          };
          
          reportMetric(metrics);
        }
      }
    };

    // Measure when page is fully loaded
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

    // Monitor memory usage (if available)
    const measureMemory = () => {
      if (typeof window !== 'undefined' && 'memory' in performance) {
        const memory = (performance as any).memory;
        const memoryMetrics = {
          name: 'memory_usage',
          value: memory.usedJSHeapSize / 1024 / 1024, // Convert to MB
          delta: memory.usedJSHeapSize / 1024 / 1024,
          id: 'memory-usage',
          navigationType: 'navigate',
        };
        
        reportMetric(memoryMetrics);
      }
    };

    // Measure memory usage periodically
    const memoryInterval = setInterval(measureMemory, 30000); // Every 30 seconds

    return () => {
      window.removeEventListener('load', measurePageLoad);
      clearInterval(memoryInterval);
    };
  }, [enableReporting, enableConsoleLogging]);

  return null;
};

export default PerformanceMonitor;